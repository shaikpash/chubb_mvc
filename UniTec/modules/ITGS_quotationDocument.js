quotationDocument = {};

quotationDocument.buildNodeAgencyInfo = function (agencyId) {
	kony.print("###- INFO -### quotationDocument.buildNodeAgencyInfo begin");
	var agencyInfo = {
		agencyId : agencyId,
		agencyname : null,
		agencyaddress1 : null,
		agencyaddress2 : null,
		agencyaddresszip : null,
		agencyaddresscity : null,
		agencyaddresscountry : null,
		agencyfax : null,
		agencyphone : null
	};
	
	function buildNodeAgencyInfoMediaSuccCallBack(res) {
		for (var i = 0; i < res.length; i++) {
			if ("TEL" == res[i].PHTP)
				agencyInfo.agencyphone = res[i].data;
			else if ("FAX" == res[i].PHTP)
				agencyInfo.agencyfax = res[i].data;
		}
	}
	
	function buildNodeAgencyInfoSuccCallBack(res) {
		if (res.length > 0) {
			agencyInfo.agencyname = res[0].ALPH;
			agencyInfo.agencyaddress1 = res[0].ADD2;
			agencyInfo.agencyaddress2 = res[0].ADD3;
			agencyInfo.agencyaddresszip = res[0].ADDZ;
			agencyInfo.agencyaddresscity = res[0].CTY1;
			
			callBackModel.context.sql =	"select PHTP, data from AgencyMedia where AN8 = " + agencyId;
			executeSql(callBackModel.context.sql, buildNodeAgencyInfoMediaSuccCallBack, callBackModel.sqlErrorCB);
		}
	}
    
	callBackModel.context.sql =	"select * from Agency where AN8 = " + agencyId;
	executeSql(callBackModel.context.sql, buildNodeAgencyInfoSuccCallBack, callBackModel.sqlErrorCB);
	
	if (validationModel.isNull(agencyInfo.agencyname))
		kony.print('###! WARNING !### buildNodeAgencyInfo ----- no agency name found: ' + JSON.stringify(agencyId));
	
	return agencyInfo;
}

quotationDocument.buildNodeContactInfo = function (contactId) {
	kony.print("###- INFO -### quotationDocument.buildNodeContactInfo begin");
	var contactInfo = {
		contactId : contactId,
		emailsubject : null,
		emailbody : null,
		contactname : null,
		contactphone : null,
		contactfax : null,
		contactemail : null,
		contactservice : null,
		networkpath : null
	};
	
	var customerInfo = {
		customeremail : null,
		customerphone : null,
		customermobile : null,
		customerfax : null
	};
	
	var title = "";

	function getEmailSubjectBodySuccCallBack(res) {
		for (var i = 0; i < res.length; i++) {
			if (19 == res[i].ConfigurationCode) {
				contactInfo.emailsubject = res[i].ConfigurationValue;
              
              	if (!validationModel.isNull(workOrder.location))
					contactInfo.emailsubject += " : " + workOrder.location;
              
                var db_line = global.db.queryLine(
                    "select s.MLNM " +
                    "from SubSite as s " +
                    "join F56BT bt on s.AN8 = bt.SAID and s.IDLN = bt.URRF " +
                    "where bt.DOCO = " + workOrder.doco + " limit 1"
                );
              
              	if (!unitec.lang.isNull(db_line)) {
					contactInfo.emailsubject += " - " + db_line.MLNM;
                }
            }
          
			if (20 == res[i].ConfigurationCode)
				contactInfo.emailbody = res[i].ConfigurationValue;
		}
	}
	
	function getContactMediaSuccCallBack(res) {
		for (var i = 0; i < res.length; i++) {	
			if (res[i].PHTP == "E") {
				contactInfo.contactemail = res[i].data;
				customerInfo.customeremail = contactInfo.contactemail;
			}
			if (res[i].PHTP == "TEL") {
				contactInfo.contactphone = res[i].data;
				customerInfo.customerphone = contactInfo.contactphone
			}
			if (res[i].PHTP == "MOB") {
				customerInfo.customermobile = res[i].data;
			}				
			if (res[i].PHTP == "FAX") {
				contactInfo.contactfax = res[i].data;
				customerInfo.customerfax = contactInfo.contactfax;
			}
		}
	
		executeSql("select ConfigurationCode, ConfigurationValue from ApplicationConfiguration where ConfigurationCode in (19,20)", getEmailSubjectBodySuccCallBack, callBackModel.konyErrorCB);
	}
	
	function getSalutationSuccCallBack(res) {	
		if (res.length > 0) {
			title = res[0].DL01 + " ";
		} else {
			title = "";
		}
	}
	
	function buildNodeContactInfoSuccCallBack(res) {
		var lastname = "";
		var firstname = "";

		if (res[0].title != null && res[0].title != undefined && res[0].title != 'NULL') {
			executeSql("select DL01 from UDC where SY = '01' and RT = 'GD' and KY = '" + res[0].title + "'", 
				getSalutationSuccCallBack, callBackModel.konyErrorCB);
		} 
		if (res[0].lastname != null && res[0].lastname != undefined && res[0].lastname != 'NULL') {
			lastname = res[0].lastname;
		} 
		if (res[0].firstname != null && res[0].firstname != undefined && res[0].firstname != 'NULL') {
			firstname = res[0].firstname;
		} 

		contactInfo.contactname = title + lastname + " " + firstname;
		executeSql("select ifnull(PHTP, 'TEL') PHTP, data from Media where Contactid = " + contactId, getContactMediaSuccCallBack, callBackModel.konyErrorCB);
	}
   
    callBackModel.context.sql =	"select * from Contact where id = " + contactId+ "";		//Arati : Fix For Issue#73
    executeSql(callBackModel.context.sql, buildNodeContactInfoSuccCallBack, callBackModel.sqlErrorCB);
	
	return { contactInfo: contactInfo, customerInfo: customerInfo };
}

quotationDocument.buildNodeCustomerInfo = function (customerId) {
	kony.print("###- INFO -### quotationDocument.buildNodeCustomerInfo begin");
	var customerInfo = {
		customerid : null,
		customernumber : null,
		customername : null,
		customeraddress1 : null,
		customeraddress2 : null,
		customeraddress3 : null,
		customeraddresszip : null,
		customeraddresscity : null,
		customeraddresscountry : null,
		customertotheattentionof : null, // updated afterwards according contact info
		deliveryaddress1 : null,
		deliveryaddress2 : null,
		deliveryaddress3 : null,
		deliveryaddress4 : null,
		deliveryaddresscity : null,
		deliveryaddresszip : null,	
		deliveryaddresscountry : null,
		customeremail : null, // updated afterwards according contact info
		customerphone : null, // updated afterwards according contact info
		customermobile : null, // updated afterwards according contact info
		customerfax : null // updated afterwards according contact info
	};
	
	function buildNodeCustomerInfoSuccCallBack(res) {
		if (res.length > 0) {
			customerInfo.customerid = res[0].AN8;
			customerInfo.customernumber = res[0].AN8;
			customerInfo.customername = res[0].corporatename;
			customerInfo.customeraddress1 = (validationModel.isNull(res[0].address1) ? null : res[0].address1);
			customerInfo.customeraddress2 = (validationModel.isNull(res[0].address2) ? null : res[0].address2);
			customerInfo.customeraddress3 = (validationModel.isNull(res[0].address3) ? null : res[0].address3);
			customerInfo.customeraddresszip = res[0].zipcode;
			customerInfo.customeraddresscity = res[0].city;
			customerInfo.customeraddresscountry = res[0].country;
			customerInfo.deliveryaddress1 = res[0].address1;
			customerInfo.deliveryaddress2 = res[0].address2;
			customerInfo.deliveryaddresscity = res[0].city;
			customerInfo.deliveryaddresszip = res[0].zipcode;
		}
	}
	
	callBackModel.context.sql = "select * from Customer where id = " + customerId;
	executeSql(callBackModel.context.sql, buildNodeCustomerInfoSuccCallBack, callBackModel.sqlErrorCB);
	
	if (validationModel.isNull(customerInfo.customername))
		kony.print('###! WARNING !### buildNodeCustomerInfo ----- no customer name found: ' + JSON.stringify(customerId));
	return customerInfo;
}

quotationDocument.buildNodeQuotationInfo = function (quotation, printTextId, salespersonNode, complementQuantity, replacementQuantity) {
	var quotationInfo = {
		quotationId : quotation.Quotationid,
		quotationnumber : quotation.QuotationNumber + "/" + quotation.QuotationVersion,
		quotationversion : quotation.QuotationVersion,
		quotationdate : getCurrentDateForPrintout(),
		quotationday : getCurrentDayForPrintout(),
		quotationprintdate : getQuotationPrintDate(),
		qtecomp : complementQuantity,
		qteremp : replacementQuantity,
		quotationfooter : null, 
		quotationAttachCustomerForm : "0"
	};
	
	var introText = global.printTextsModel.findPrintTextById(printTextId);
	if (!unitec.lang.isNull(introText) && !unitec.lang.isNull(salespersonNode)) {
		quotationInfo.quotationIntroText = introText + "\n" + salespersonNode.salespersoname;
	}
	return quotationInfo;
}

quotationDocument.buildNodeParagraph = function (siteInfo, paragraph) {
	
	var siteNameAdd = validationModel.isNull(siteInfo.nameAdd) ? "" : siteInfo.nameAdd;
	var paragraphInfo = {
		paragraphId : paragraph.QuotationParagraphid,
		paragrahOrder : 0,
		sitename : siteInfo.name + " " + siteNameAdd,
		subsiteName : paragraph.Description,
		siteaddress1 : siteInfo.address1,
		siteaddress2 : siteInfo.address2,
		siteaddress3 : siteInfo.address3,
		siteaddresszip : siteInfo.zipCode,
		siteaddresscity : siteInfo.city,
		siteaddresscountry : ""
	};
	
	return paragraphInfo;
}

quotationDocument.buildNodeProduct = function (quotation, productGrouping, doReplace) {
	var pg = productGrouping;

	function buildNodeProductSuccCallBack(res) {
		if (res.length > 0) {
			var nPrice = res[0].DiscountedPrice / res[0].QuantityTotal;
			var sPrice = nPrice + "";
			pg["unitprice"] = sPrice.replace(".", ",");
			pg["family"] = res[0].DL01;
		} else {
			kony.print("###! ERROR !### buildNodeProductSuccCallBack: could not retrieve unit price");
			popupModel.showPopError("Erreur: prix unitaire non trouvé pour ProductId = " + JSON.stringify(pg["productId"]));
		}
	}
    
    callBackModel.context.sql =	
		"select qsl.QuantityTotal, qsl.DiscountedPrice, qsl.UnitPrice, u.DL01 from QuotationSummaryLine qsl LEFT OUTER JOIN UDC u on qsl.Activity = u.KY and u.SY = '41' and u.RT = '06' " +
		"where qsl.Quotationid = " + quotation.Quotationid + " and Productid = '" + pg["productId"] + "'";
	executeSql(	callBackModel.context.sql, buildNodeProductSuccCallBack, callBackModel.sqlErrorCB);

	return pg; 
}

quotationDocument.buildNodesQuotationStructure = function (quotation, vatAmountNodes) {
	var structure = {
		products : [],
		productDetails : [],
		families : [],
		relationships : [],
		complement : [],
		remplacement : [],
		complementQuantity : 0,
		replacementQuantity : 0
	};
	var activePrintProducts = {}; 
	var relationshipId = 1;
	var familyId = 1;
	var families = {};
	
	for (var j = 0; j < quotation.paragraph.products.length; j++) {
		var product = quotation.paragraph.products[j];
		if (product.Itemid in activePrintProducts) {
		} else {
			var productFamilyId = "";
			var productGrouping = {};

			productGrouping["productGroupingId"] = product.QuotationParagraphProductid;
			productGrouping["productId"] = product.Itemid;
			var article = articleModel.findArticleByUsualCode(product.Itemid);
			productGrouping["productDescription"] = article.name;
			
			if (productGrouping["family"] in families) {
				productFamilyId = families[productGrouping["family"]];
			} else {
				families[productGrouping["family"]] = familyId;
				productFamilyId = familyId;			
				var family = {};
				family["familyID"] = familyId;
				family["familyName"] = productGrouping["family"];
				structure.families.push(family);
				familyId = familyId + 1;
			}
			activePrintProducts[product.QuotationParagraphProductid] = productFamilyId;
			productGrouping["subfamily"] = "";
			productGrouping["familyID"] = productFamilyId;

			var pg = quotationDocument.buildNodeProduct(quotation, productGrouping, true);
			structure.products.push(pg);
		}
		
		if (product.detail != undefined) {
			for (var k = 0; k < product.detail.length; k ++) {
				var pd = {};
				var productDetail = product.detail[k];
	
				function getParcDetailSuccCallBack(res) {
					if (res.length > 0) {
						pd["equipmentnumber"] = res[0].LOTN;
						pd["verificationdate"] = res[0].U74SCDV;
						pd["productiondate"] = res[0].FBDUMSDJ;
						pd["age"] = res[0].age;
					} else {
						pd["equipmentnumber"] = "";
						pd["verificationdate"] = "";
						pd["productiondate"] = "";
						pd["age"] = "";
					}
				}
				
				function getReasonLabelCallBack(res){
							if (res.length>0) {
							    pd["replacementreasonlib"] = res[0].DL01;
						}
				}
	
				qPPDid = productDetail.id;
	
				pd["productdetailid"] = productDetail.CustomerInstalledBaseId;
				pd["relationshipId"] = relationshipId;
				pd["floor"] = productDetail.Floor;
				pd["building"] = productDetail.Building;
				pd["location"] = productDetail.Location;
				pd["replacementreason"] = productDetail.ReplacementReason;
				pd["replacementreasonlib"] = " ";

				if(productDetail.CustomerInstalledBaseId == null) getParcDetailSuccCallBack([]);
					else {
						var reasonLblRequest = "select DL01 from UDC where SY = '56' and RT = 'RC' and ky = '" + productDetail.ReplacementReason + "' limit 1";
						executeSql(reasonLblRequest, getReasonLabelCallBack, eventErrorCallBack);
				
						callBackModel.context.sql =
							"select " +
							" ib.LOTN, " +
							" strftime('%d-%m-%Y', ib.FBDUMSDJ) FBDUMSDJ, " +
							" (strftime('%Y', 'now') - strftime('%Y', ib.FBDUMSDJ)) age, " +
							" strftime('%d-%m-%Y', ib.U74SCDV) U74SCDV " + 
							"from CustomerInstalledBase ib where ib.id = " + productDetail.CustomerInstalledBaseId
						executeSql(callBackModel.context.sql, getParcDetailSuccCallBack, callBackModel.konyErrorCB);
				}
				
				structure.productDetails.push(pd);
			}
		}
		
		var relationship = {};
		relationship["relationshipId"] = relationshipId;
		relationship["paragraphId"] = quotation.paragraph.QuotationParagraphid;
		relationship["productId"] = product.Itemid;
		relationship["quantitytotal"] = product.QuantityTotal;
		relationship["quantityadditional"] = product.QuantityAdditional;
		relationship["quantityreplaced"] = product.QuantityReplaced;
		relationship["familyID"] = activePrintProducts[product.QuotationParagraphProductid];
		relationship["vat"] = null;
		
		var complement                     = {};
		complement["relationshipId"]       = relationshipId;
		complement["paragraphId"]          = quotation.paragraph.QuotationParagraphid;
		complement["productId"]            = product.productId;
		complement["description"]          = " ";
		complement["famille"]              = " ";
		
		var remplacement                   = {};
		remplacement["relationshipId"]     = relationshipId;
		remplacement["paragraphId"]        = quotation.paragraph.QuotationParagraphid;
		remplacement["productId"]          = product.productId;
		remplacement["description"]        = " ";
		remplacement["famille"]            = " ";
		
		function getParcItemSuccCallBack(res) {
			 if (res.length > 0) {
			 	if (product.QuantityAdditional > 0) {	
			 		complement["description"]    = res[0].description1;
			 		complement["quantity"]       = product.QuantityAdditional;
			 		complement["famille"]        = res[0].DL01;
			 		structure.complementQuantity = structure.complementQuantity + product.QuantityAdditional;
			 		structure.complement.push(complement);
			 	}
			 	if ( product.QuantityReplaced > 0) {	
			 		remplacement["description"]  = res[0].description1;
			 		remplacement["quantity"]     =  product.QuantityReplaced;
			 		remplacement["famille"]      = res[0].DL01;
			 		structure.replacementQuantity = structure.replacementQuantity + product.QuantityReplaced;
			 		structure.remplacement.push(remplacement);
			 	}
			}
		}
		
		callBackModel.context.sql = "select cr.ITM, it.description1, ud.DL01 from ItemCrossReference cr " +
			"LEFT OUTER JOIN Item it on it.ITM = cr.ITM " +	 
			"LEFT OUTER JOIN UDC  ud on ud.SY  = '41' and ud.RT = 'S1' and ud.ky = it.SRP1 " +	 
			"where cr.XRT = 'AT' and cr.LITM = '" + product.Itemid + "'";
		executeSql(callBackModel.context.sql, getParcItemSuccCallBack, eventErrorCallBack);
		
		for (var v = 0; v < vatAmountNodes.length; v++) {
			if (product.VATPercentage == vatAmountNodes[v].vatpercentage) {
				relationship.vat = vatAmountNodes[v].vat;
			}
		}
		
		structure.relationships.push(relationship);
		relationshipId = relationshipId + 1;
	}
	
	var defaultHash = {
		relationshipId : 0,
		paragraphId : 0,
		productId : " ",
		quantity : 0,
		famille : " "
	};
	if (0 === structure.complementQuantity) {
		structure.complement.push(defaultHash);
	}
	if (0 === structure.replacementQuantity) {
		structure.remplacement.push(defaultHash);
	}
	
	kony.print("###- INFO -### buildNodesQuotationStructure end");
	return structure;
};

quotationDocument.buildNodeRegion = function (agencyAN8) {
	kony.print("###- INFO -### quotationDocument.buildNodeRegion begin");
	var region = {
		regionId : null,
		regionname : null,
		regionaddress1 : null,
		regionaddress2 : null,
		regionaddress3 : null,
		regionaddresszip : null,
		regionaddresscity : null,
		regionaddresscountry : null,
		regionphone : null,
		regionfax : null
	};
	
	function buildNodeRegionMediaSuccCallBack(res) {
		for (var i = 0; i < res.length; i++) {
			if (res[i].PHTP == "TEL") {
				region.regionphone = res[i].data;
			}
			if (res[i].PHTP == "FAX") {
				region.regionfax = res[i].data;
			}
		}
	}
	
	function buildNodeRegionSuccCallBack(res) {
		if (res.length > 0) {
			region.regionId = res[0].id;
			region.regionname           = res[0].ALPH;
			region.regionaddress1       = res[0].ADD1;
			region.regionaddress2       = res[0].ADD2;
			region.regionaddress3       = res[0].ADD3;
			region.regionaddress3       = res[0].ADDZ;
			region.regionaddresscity    = res[0].CTY1;
			
			callBackModel.context.sql = "select PHTP, data from AgencyMedia where AN8 = " + agencyAN8;
			executeSql(callBackModel.context.sql, buildNodeRegionMediaSuccCallBack, callBackModel.sqlErrorCB);
		}
	}

    callBackModel.context.sql = "select Region.* from  Agency Ag left outer join Region on Ag.PA8 = Region.AN8 where AG.AN8 = " + agencyAN8;    
    executeSql(callBackModel.context.sql, buildNodeRegionSuccCallBack, callBackModel.sqlErrorCB);
	
	if (validationModel.isNull(region.regionname))
		kony.print('###! WARNING !### buildNodeRegion ----- no region found for agency AN8: ' + JSON.stringify(agencyAN8));
	
	return region;
};

quotationDocument.buildNodeSalesperson = function (employeeAN8) {
	var salesperson = {
		salespersoname : null,
		salespersonemail : null,
		salespersonphone : null
	};

	function populateSalespersonMediaSuccCallBack(res) {
		for (var i = 0; i < res.length; i++) {
//			if (res[i].PHTP == "E" && res[i].data != null && res[i].data != undefined && res[i].data != 'NULL' & res[i].data.trim().length > 0) {
//				salesperson.salespersonemail = res[i].data;
//			}
//
//			if (res[i].PHTP == "MOB" && res[i].data != null && res[i].data != undefined && res[i].data != 'NULL') {
//				salesperson.salespersonphone = res[i].data;
//			}
          	//Arati:Change code Issue#111 Start here
			/*var res = res[i];
			if(res.PHTP == "E" && !validationModel.isNull(res.data) && res.data.trim().length > 0) {
				salesperson.salespersonemail = res[i].data;
			}
			else if (res.PHTP == "MOB" && !validationModel.isNull(res.data)) {
				salesperson.salespersonphone = res[i].data;
			}*/
          	//var res = res[i];
			if(res[i].PHTP == "E" && !validationModel.isNull(res[i].data) && res[i].data.trim().length > 0) {
				salesperson.salespersonemail = res[i].data;
			}
			else if (res[i].PHTP == "MOB" && !validationModel.isNull(res[i].data)) {
				salesperson.salespersonphone = res[i].data;
			}
          	//Arati:Change code Issue#111 end here
		}
	}

	function buildNodeSalespersonSuccCallBack(res) {
		if (res.length > 0) {
			salesperson.salespersoname = res[0].internalname;
			salesperson.salespersonemail = res[0].EMAL;
			
			callBackModel.context.sql =	"select PHTP, data from EmployeeMedia where AN8 = " + employeeAN8;
			executeSql(callBackModel.context.sql, populateSalespersonMediaSuccCallBack, callBackModel.sqlErrorCB);
		}
	}
	
	callBackModel.context.sql =	"select internalname, EMAL from Employee where AN8 = " + employeeAN8;
	executeSql(callBackModel.context.sql, buildNodeSalespersonSuccCallBack, callBackModel.sqlErrorCB);
	
	if (validationModel.isNull(salesperson.salespersonemail))
		kony.print('###! WARNING !### buildNodeSalesperson ----- no salesperson mail found for AN8: ' + JSON.stringify(employeeAN8));

	return salesperson; 
}

quotationDocument.buildNodeSummaryData = function (quotation) {
	kony.print("###- INFO -### quotationDocument.buildNodeSummaryData begin");
	var summaryData = {
		quotationTotalAmount : quotation.TotalAmount.toString().replace(".", ","),
		quotationTotalWithDiscountAmount : quotation.TotalAmountDiscounted.toString().replace(".", ","),
		quotationDiscountAmount : (parseFloat(quotation.TotalAmount) - parseFloat(quotation.TotalAmountDiscounted)).toString().replace(".", ","),
		quotationDiscountType : quotation.DiscountType,
		quotationCondition : null,
		quotationVatAmount : quotation.TVAAmount.toString().replace(".", ","),
		quotationPaymentCondition : null, // update afterwards
		quotationPaymentMethod : null, // update afterwards
		quotationVatType : null,
		quotationInvoicingMethod : null,
		quotationAboRevision : null,
		quotationBpuRevision : null,
		quotationChapter : workOrder.chapter,
		quotationValidity : "1 mois"
	};

	// update summaryData.quotationPaymentCondition
	function getPaymentConditionSuccCallBack(res) {
        if (res.length > 0) {
            summaryData.quotationPaymentCondition = res[0].PTD;
        } 
    }
	if (validationModel.isNull(quotation.customer) || validationModel.isNull(quotation.customer.paymentcondition))
		callBackModel.context.sql = "select PTD from PaymentMode where PTC = 'NULL'";
	else
		callBackModel.context.sql = "select PTD from PaymentMode where PTC = '" + quotation.customer.paymentcondition + "'";
    executeSql(callBackModel.context.sql, getPaymentConditionSuccCallBack, callBackModel.konyErrorCB);
    
    // update summaryData.quotationPaymentMethod
    if (!validationModel.isNull(quotation.customer) && !validationModel.isNull(quotation.customer.paymentmode)) {
    	function getPaymentMethodSuccCallBack(res) {
	        if (res.length > 0) {
	            summaryData["quotationPaymentMethod"] = res[0].DL01;
	        } 
	    }
    	callBackModel.context.sql = "select DL01 from UDCT where SY = '00' and RT = 'PY' and LNPG = 'F' and KY is not NULL AND LENGTH(KY) > 0 and KY = '" + quotation.customer.paymentmode + "'";
    	executeSql(callBackModel.context.sql, getPaymentMethodSuccCallBack, callBackModel.konyErrorCB);
    }
	
	return summaryData;
}

quotationDocument.buildNodesVATAmount = function (VATAmounts) {
	kony.print("###- INFO -### quotationDocument.buildNodesVATAmount begin");
	var VATAmountNodes = [];
	
	for (var i = 0; i < VATAmounts.length; i++) {
		var amount = numRound(VATAmounts[i].VATamount, 2).toFixed(2).toString().replace(".", ",");
		var node = {
			vat : i + 1,
			percentage : (VATAmounts[i].VATpercentage.toFixed(2) + "%").replace(".", ","),
			vatpercentage : VATAmounts[i].VATpercentage
		};
		
		if (0 == VATAmounts[i].VATpercentage) {
			node.totalVatAmount = "0,00";
			node.totalAmount = amount; // Really?!
		}
		else {
			node.totalVatAmount = amount;
			node.totalAmount = numRound((VATAmounts[i].VATamount * 100 / + VATAmounts[i].VATpercentage), 2).toFixed(2).toString().replace(".", ",");
		}
		VATAmountNodes.push(node);
	}
	
	return VATAmountNodes;
}

quotationDocument.createXML = function (quotation, salespersonNode, contactId, printTextId) {

	callBackModel.result = undefined;
	databaseModel.openDBExchange('Génération du devis...');
	
	var customerInfo = {};
	var quotationTypeName = "Quotation_u";

	var document = {
		quotation: {
			"_mode" : "debug",
			"_type" : quotationTypeName,
			quotationInfo : [],
			summarydata : [],
			customerInfo : [], 
			agency : [],
			salesperson : [],
			contact : [],
			region : [],
			complement : [],
			remplacement : [],
			paragraph : [],
			product : [],
			relationship : [],
			family : [],
			vatAmount : [], 
			productdetail : [],
			attachments : [{}]
		}
	};
	
	document.quotation.summarydata.push(quotationDocument.buildNodeSummaryData(quotation));
	customerInfo = quotationDocument.buildNodeCustomerInfo(quotation.customer.id);
	document.quotation.agency.push(quotationDocument.buildNodeAgencyInfo(quotation.AgencyId));
	
	if (!unitec.lang.isNull(salespersonNode))
		document.quotation.salesperson.push(salespersonNode);
	
	if (!validationModel.isNull(contactId)) {
		var info = quotationDocument.buildNodeContactInfo(contactId);
		document.quotation.contact.push(info.contactInfo);

		customerInfo.customeremail = info.customerInfo.customeremail;
		customerInfo.customerphone = info.customerInfo.customerphone;
		customerInfo.customermobile = info.customerInfo.customermobile;
		customerInfo.customerfax = info.customerInfo.customerfax;
		customerInfo.customertotheattentionof = info.contactInfo.contactname.length > 0 ? "A l'attention de " + info.contactInfo.contactname : "";
	}
	document.quotation.customerInfo.push(customerInfo);
	
	document.quotation.region.push(quotationDocument.buildNodeRegion(quotation.AgencyId));
	
	var siteInfo = {
		name : workOrder.location,
		nameAdd : workOrder.locationAdd,
		address1 : workOrder.address1,
		address2 : workOrder.address2,
		address2 : workOrder.address3,
		zipCode : workOrder.zipcode,
		city : workOrder.city
	}
	document.quotation.paragraph.push(quotationDocument.buildNodeParagraph(siteInfo, quotation.paragraph));
	
	document.quotation.vatAmount = quotationDocument.buildNodesVATAmount(quotation.VATAmounts);
	
	var quotationStructure = quotationDocument.buildNodesQuotationStructure(quotation, document.quotation.vatAmount);
	document.quotation.product = quotationStructure.products;
	document.quotation.family = quotationStructure.families;
	document.quotation.relationship = quotationStructure.relationships;
	document.quotation.productdetail = quotationStructure.productDetails;
	document.quotation.complement = quotationStructure.complement;
	document.quotation.remplacement = quotationStructure.remplacement;
	if (quotationStructure.complementQuantity != 0 || quotationStructure.replacementQuantity != 0)
		document.quotation["_additionaltype1"] = "Complement_Remplacement";
	
	document.quotation.quotationInfo.push(quotationDocument.buildNodeQuotationInfo(quotation, printTextId, salespersonNode, quotationStructure.complementQuantity, quotationStructure.replacementQuantity));
	
	databaseModel.closeDBExchange();
	
	var x2js = new X2JS();
	var XMLdocument = x2js.json2xml_str(document); 
	kony.print('###- INFO -### generated XML document:');
	kony.print(XMLdocument);
	return XMLdocument;
}

