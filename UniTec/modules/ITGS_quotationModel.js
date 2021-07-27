quotationModel = {};

quotationModel.createQuotationForRecommendations = function (quotation, recommendations, workOrder, quotationComment, isPartial) {
	var	currentDate				= new Date();
	var	currentDatePlusOneMonth = new Date();
	currentDatePlusOneMonth.setDate(currentDate.getDate() + 30);
	var customer				= customerModel.findCustomerByAN8(workOrder.customerAN8);
	//var siteParentCopy			= (!validationModel.isNull(customer) && !validationModel.isNull(customer.id)) ? customerModel.copyCustomerById(customer.id, 'Customer') : siteCopy;
  	//var siteCopy				= customerModel.copyCustomerById(workOrder.siteId, 'Site', siteParentCopy);
  	var siteCopy = customerModel.copyCustomerById(workOrder.siteId);
  	var subSite					= workOrderModel.findSubSiteByWorkOrder(workOrder);
  	var subSiteCopy = subSite;
  	//var subSiteCopy				= (!validationModel.isNull(subSite) && !validationModel.isNull(subSite.id)) ? subsiteModel.copySubsiteById(subSite, 'subSite', siteCopy) : null;
	var salesperson                = workOrderModel.findSalespersonByWorkOrder(workOrder);
	isPartial = validationModel.isNull(isPartial) ? false : isPartial;

	if (unitec.lang.isNull(salesperson)) salesperson = {};

	// who is the customer contact for this quotation ?
  	if(workOrder.process == 'CHUBB'){
    	quotation.Employeeid = login.user.AN8;
  	}else if(app_parameters.lifetime.society == "003" || workOrder.process == 'SICLI') {
    	quotation.Employeeid = salesperson.AN8;
  	}
	
	quotation.customer = (!validationModel.isNull(customer) && !validationModel.isNull(customer.id) && customer.id != 0) ? customerModel.copyCustomerById(customer.id) : customerModel.copyCustomerById(workOrder.siteId);
	//quotation.customer = quotation.CustomerCopyId;//{id: quotation.CustomerCopyid};
  	quotation.quotationVersion = 1;
	quotation.agencyId = employeeModel.findEmployeeAgencyByEmployee(login.user.AN8, 'SERVICE');
	quotation.discountType = 'percentage';
	var VATSummary = quotationModel.calculatePrices(quotation, recommendations);

	function createQuotationForRecommendationsCB(l_quotation) {
		quotation.id = l_quotation.Quotationid;
		quotation.Quotationid = l_quotation.Quotationid;
      	
		quotationModel.createQuotationParagraph(quotation, recommendations, workOrder.chapter, workOrder.tariffAgreement, siteCopy, quotationComment, subSiteCopy);
		quotationModel.createQuotationVATs(quotation, VATSummary);

		if (quotation.status != 'STATUS_ONGOING') {
			var quotationWonSiteInfo = quotationModel.createQuotationWonSiteInfo(quotation, recommendations, workOrder, siteCopy);
			quotation.wonSiteInfo = {id: quotationWonSiteInfo.QuotationWonSiteInfoid};
			quotationModel.createQuotationEmployees(workOrder.chapter, quotation, siteCopy);
		} 

		quotation.history = [];
		var quotationHistory;
		if (quotation.status == 'STATUS_AWAITING_AUTOMATED_ORDER') {
			quotation.status = 'STATUS_ONGOING';
			quotationHistory = quotationModel.createQuotationHistory(quotation);
			quotation.history.push({id: quotationHistory.QuotationHistoryid});
			quotation.status = 'STATUS_AWAITING_AUTOMATED_ORDER';
		}
		quotationHistory = quotationModel.createQuotationHistory(quotation);
		quotation.history.push({id: quotationHistory.QuotationHistoryid});

		recommendationQuotationsModel.linkQuotationToRecommendations(quotation, recommendations);
	}

	var valuesArray = {};
	valuesArray.AgencyId 					= unitec.lang.coalesce(quotation.agencyId, 'NULL');
	valuesArray.AgencyType 					= 'SERVICE';
	valuesArray.ApprovalsGenerated 			= 0;
	valuesArray.CustomerCopyid				= quotation.customer.id;
	valuesArray.Customerid 					= quotation.customer.id;
	valuesArray.CustQuotationNumber 		= 0;
	valuesArray.DateCreated 				= dateTimePrintSql(currentDate);
	valuesArray.DateOrdered 				= (quotation.status == 'STATUS_AWAITING_AUTOMATED_ORDER') ? dateTimePrintSql(currentDate) : 'NULL';
  	valuesArray.DateOrderExpected 			= (quotation.status == 'STATUS_AWAITING_AUTOMATED_ORDER') ? dateTimePrintSql(currentDate) : dateTimePrintSql(currentDatePlusOneMonth);
	valuesArray.DatePricesApplied 			= dateTimePrintSql(currentDate);
	valuesArray.DateRelaunched 				= (quotation.status == 'STATUS_AWAITING_AUTOMATED_ORDER') ? dateTimePrintSql(currentDate) : dateTimePrintSql(currentDatePlusOneMonth);
	valuesArray.DateUpdated					= dateTimePrintSql(currentDate);
  	valuesArray.DatePrinted					= (quotation.status == 'STATUS_SENT') ? dateTimePrintSql(currentDate) : 'NULL';			//Arati:Changed code for JIRA UI-206 
	valuesArray.DiscountAmount				= 0;
	valuesArray.DiscountPercentage			= quotation.discount;
	valuesArray.DiscountType				= quotation.discountType;
	valuesArray.DOCO						= workOrder.doco;
	valuesArray.Employeeid					= unitec.lang.coalesce(quotation.Employeeid, 0);
	valuesArray.Flow						= 'Vente produit';
	valuesArray.InvoicingMethod				= 'SD';
	valuesArray.isDeleted					= 0;
	valuesArray.issenttojde					= 0;
	valuesArray.Probability					= (quotation.status == 'STATUS_AWAITING_AUTOMATED_ORDER') ? '100' : '50';
	valuesArray.QuotationCategory			= quotation.quotationCategory; // 'ORDER' / 'STRUCTURED_INFOCOM'
	valuesArray.QuotationMaster				= 1;
	valuesArray.QuotationNumber				= quotation.quotationNumber.toString();
	valuesArray.QuotationVersion			= quotation.quotationVersion;
	valuesArray.Source						= 'T1'; // UDC key for suite infocom
	valuesArray.Status						= quotation.status;
	valuesArray.SubType						= unitec.lang.coalesce(quotation.EUSE, 'VS');
	valuesArray.TotalAmount					= quotation.price;
	valuesArray.TotalAmountDiscounted		= quotation.price - quotation.discountAmount;
	valuesArray.TotalAmountWithTVA			= quotation.price - quotation.discountAmount + quotation.VATAmount;
	valuesArray.TVAAmount					= quotation.VATAmount;
	valuesArray.Type						= unitec.lang.coalesce(quotation.UPC1, 'V');
	valuesArray.ApplicationVersion			= app_parameters.sync.appID;
  	valuesArray.isArchive					= 1;
    valuesArray.PtdToTreat			     	= 1;

	de.itgs.WorkOrders.Quotation.create(valuesArray, createQuotationForRecommendationsCB, callBackModel.konyErrorCB, true);
	return quotation;
}

quotationModel.checkQuotationStructure = function (quotationId) {
	var errors = [];

	var sql =
		"select QuotationParagraphProductId from QuotationParagraphProduct Q_P_Product " +
		"join QuotationParagraph Q_Paragraph on Q_P_Product.QuotationParagraphId = Q_Paragraph.QuotationParagraphId " +
		"where Q_P_Product.VATPercentage = 0 and Q_Paragraph.QuotationId = " + unitec.lang.coalesce(quotationId, 0);
	var db_result = global.db.query(sql);
	if (!unitec.lang.isNull(db_result) && db_result instanceof Array && db_result.length > 0)
		errors.push('% de TVA erroné sur certains articles');

	return errors;
}

quotationModel.createQuotationEmployees = function (chapter, quotation, customerCopy) {
	var createQuotationEmployee = function (type, an8) {
		var employee = {
			Quotationid:		quotation.id,
			Chapter:			unitec.lang.coalesce(chapter, 'UKN'),
			Siteid:				customerCopy.id,
			EmployeeType:		type,
			EmployeeAN8:		an8,
			PrincipalEmployee:	1,
			IsSource:			1
		};
		de.itgs.WorkOrders.QuotationEmployee.create(employee, callBackModel.successCB, callBackModel.konyErrorCB, true);
	};

	createQuotationEmployee(2, login.user.AN8); // Technician
  if(quotation.status!='STATUS_AWAITING_AUTOMATED_ORDER'){// && employeeModel.getEmployeeInfo(login.user.AN8).AT1!='ET'){
	createQuotationEmployee(1, quotation.Employeeid); // Commercial / N+1
  }
}

quotationModel.createQuotationParagraph = function (quotation, recommendations, chapter, tariffAgreement, customerCopy, description, subSiteCopy) {
	var quotationParagraph	= {};
	var valuesArray 		= {};

	function createQuotationParagraphCB(l_quotationParagraph) {
		quotation.paragraph = {};
		quotation.paragraph.id = l_quotationParagraph.QuotationParagraphid;
		quotation.paragraph.products = [];
		quotation.summaryLines = [];

		// Group all preco items by usualCode for insert into product and summaryline
		var groupedRecommendationItems = quotationModel.groupQuotationRecommendationsByUsualCode(quotation, recommendations);

		var sortval = 0;
		for (var i = 0; i < groupedRecommendationItems.length; i++) {
			var quotationParagraphProduct = quotationModel.createQuotationParagraphProduct(quotation, groupedRecommendationItems[i], customerCopy);
			var quotationSummaryLine = quotationModel.createQuotationSummaryLine(tariffAgreement, quotation, groupedRecommendationItems[i], sortval)
			quotation.summaryLines.push({ id: quotationSummaryLine.QuotationSummaryLineid });
			sortval++;
		}
	}

	valuesArray.Chapter					= !validationModel.isNull(chapter) ? chapter : 'INCONNU';
	valuesArray.Customerid				= customerCopy.id;
	valuesArray.DateCreated				= dateTimePrintSql(new Date());
	valuesArray.Description				= !validationModel.isNull(description) ? description : null;
	valuesArray.Qsubtype				= 'VS';
	valuesArray.Qtype					= 'V';
	valuesArray.Quotationid				= quotation.id;
	valuesArray.ParagraphOrder			= 0;
  	valuesArray.SubSiteid 				= subSiteCopy?(validationModel.isNull(subSiteCopy.id)?null:subSiteCopy.id):null;

	de.itgs.WorkOrders.QuotationParagraph.create(valuesArray, createQuotationParagraphCB, callBackModel.konyErrorCB, true);
	return quotationParagraph;
}

quotationModel.groupQuotationRecommendationsByUsualCode = function (quotation, recommendations) {
	var groupedRecommendationItems = [];
	function areCodeAndActivityEqual(arrayProduct, currentItem) {
		return arrayProduct.usualCode == currentItem.usualCode && (currentItem.type != 'TASK' || arrayProduct.activity == currentItem.activity);
	}

	function getDetailsFromItem(item) {
		return {
			quantity :			item.quantity,
			quantityDelivered :	item.quantityDelivered,
			building :			item.location,
			floor :				item.floor,
			location :			item.placement,
			customerInstalledBaseId : item.CustomerInstalledBaseId,
			isReplacement : 	item.IsReplacement,
			replacementReason :	item.replacementReason,
			isInstall :			item.isInstall,
			isRecycle :			item.isRecycle
		};
	}

	for (var i = 0; i < recommendations.length; i++) {
		for (var j = 0; j < recommendations[i].items.length; j++) {
			var item = recommendations[i].items[j];

			if(recommendations[i].salesReason == 'Remplacement') {
				item.IsReplacement = 1;
				item.CustomerInstalledBaseId = recommendations[i].itemCIBId;
				item.replacementReason = recommendations[i].itemStatusReason;
			} else {
				item.IsReplacement = 0;
				item.CustomerInstalledBaseId = null;
				item.replacementReason = null;
			}

			var quantity = item.quantity - item.quantityDelivered;
			var index = de.itgs.javascript.Array.find(groupedRecommendationItems, areCodeAndActivityEqual, item);

			if (index < 0) {
				groupedRecommendationItems.push({
					usualCode : item.usualCode,
					activity : item.activity,
					quantityAdditional : (recommendations[i].salesReason == 'Complément') ? quantity : 0,
					quantityReplaced : (recommendations[i].salesReason == 'Remplacement') ? quantity : 0,
					quantityTotal : quantity,
					order : null,
					item : item,
					details : [getDetailsFromItem(item)]
				});
			} else {
				groupedRecommendationItems[index].details.push(getDetailsFromItem(item));
				groupedRecommendationItems[index].quantityAdditional += (recommendations[i].salesReason == 'Complément') ? quantity : 0;
				groupedRecommendationItems[index].quantityReplaced += (recommendations[i].salesReason == 'Remplacement') ? quantity : 0;
				groupedRecommendationItems[index].quantityTotal += quantity;
			}
		}
	}

	// Set product order
	var mainGroupedItems = [];
	var secondaryGroupedItems = [];
	for (var i = 0; i < groupedRecommendationItems.length; i++) {
		if (validationModel.isNull(groupedRecommendationItems[i].item.subType))
			mainGroupedItems.push(groupedRecommendationItems[i]);
		else
			secondaryGroupedItems.push(groupedRecommendationItems[i]);
	}
	var orderedGroupedItem = mainGroupedItems.concat(secondaryGroupedItems);
	for (var i = 0; i < orderedGroupedItem.length; i++) {
		orderedGroupedItem[i].order = i + 1;
	}

	return orderedGroupedItem;
}

quotationModel.calculatePrices = function (quotation, recommendations) {
	quotation.price = 0;
	quotation.discount = 0;
	quotation.VATAmount = 0;
	quotation.discountAmount = 0;
	var VATSummary = {};

	for (var i = 0; i < recommendations.length; i++) {
		for (var j = 0; j < recommendations[i].items.length; j++) {
			var item = recommendations[i].items[j];
			var price = item.grossPrice * (item.quantity - item.quantityDelivered);
			var discountAmount = price * item.discount/100;
			var VATAmount = (price - discountAmount) * item.VATPercentage/100;
			quotation.price += price;
			quotation.discount = item.discount;
			quotation.VATAmount += VATAmount;
			quotation.discountAmount += discountAmount;
			quotation.UPC1 = item.UPC1;
			quotation.EUSE = item.EUSE;

			if (VATSummary.hasOwnProperty(item.VATPercentage.toString())) {
				VATSummary[item.VATPercentage.toString()] += VATAmount;
			} else {
				VATSummary[item.VATPercentage.toString()] = VATAmount;
			}
		}
	}

	return VATSummary;
}

quotationModel.createQuotationVATs = function(quotation, VATSummary) {
	callBackModel.resultArray = [];

	var VATLines = [];

	var vatIdx = 0;
	for (var property in VATSummary) {
		var percentage = property;
		var line = {
			Quotationid: quotation.id,
			VATamount: numRound(VATSummary[percentage], 4),
			VATpercentage: percentage
		};

		VATLines.push(line);
	}

	de.itgs.WorkOrders.QuotationVAT.createAll(VATLines, callBackModel.arraySuccessCB, callBackModel.konyErrorCB);
	return callBackModel.resultArray;
}

quotationModel.createQuotationParagraphProduct = function (quotation, product, customerCopy) {
	var quotationParagraphProduct	= {};
	var valuesArray 				= {};

	function createQuotationParagraphProductCB(l_quotationParagraphProduct) {
		quotation.paragraph.products.push({
			id: l_quotationParagraphProduct.QuotationParagraphProductid,
			usualCode: product.item.usualCode,
			description: product.item.name,
			quantityTotal: product.quantityTotal,
			quantityAdditional: product.quantityAdditional,
			quantityReplaced: product.quantityReplaced,
			order: product.order
		});
		if (product.item.type == 'ITEM') {
			quotation.paragraph.products[quotation.paragraph.products.length - 1].detail = [];
			for (var i = 0; i < product.details.length; i++) {
				for (var j = 0; j < (product.details[i].quantity - product.details[i].quantityDelivered); j++) {
					var quotationParagraphProductid = quotation.paragraph.products[quotation.paragraph.products.length - 1].id;
					var quotationParagraphProductDetail = quotationModel.createQuotationParagraphProductDetail(product.details[i], quotationParagraphProductid);
					quotation.paragraph.products[quotation.paragraph.products.length - 1].detail.push({
						id: quotationParagraphProductDetail.QuotationParagraphProductDetailid,
						cibId: (quotation.salesReason == 'Remplacement') ? quotation.CIBId : 'NULL',
						floor: product.details[i].floor,
						building: product.details[i].building,
						location: product.details[i].location,
						replacementReason: quotation.replacementReason
					});
				}
			}
		}
	}

	valuesArray.Activity						= (validationModel.isNull(product.item.activity) || product.item.activity == "MUL")?workOrder.equipmentActivity:product.item.activity;
	valuesArray.Category						= product.item.subType;
	valuesArray.isInstallGrouping				= (product.item.subType == 'BSEQ2') ? 'Y' : 'N';
	valuesArray.isRecycleGrouping				= (product.item.subType == 'BSEQ3') ? 'Y' : 'N';
	valuesArray.isSubcontractorCatProduct		= 'N';
	valuesArray.isSubcontractorGrouping			= 'N';
	valuesArray.Itemid							= product.item.usualCode;
	valuesArray.ParagraphProductOrder			= product.order;
	valuesArray.QuantityAdditional				= product.quantityAdditional;
	valuesArray.QuantityAdditionalCatalogue		= product.quantityAdditional;
	valuesArray.QuantityReplaced				= product.quantityReplaced;
	valuesArray.QuantityTotal					= product.quantityTotal;
	valuesArray.QuotationParagraphid			= quotation.paragraph.id;
	valuesArray.VATCode							= !validationModel.isNull(customerCopy) ? customerCopy.taxzone : 'NULL';
	valuesArray.VATPercentage					= product.item.VATPercentage;
	valuesArray.VATType							= product.item.vatType;

	de.itgs.WorkOrders.QuotationParagraphProduct.create(valuesArray, createQuotationParagraphProductCB, callBackModel.konyErrorCB, true);
	return quotationParagraphProduct;
}

quotationModel.createQuotationParagraphProductDetail = function (detail, quotationParagraphProductid) {
	var newDetail = {};

	var replacementReasonReferenceCode = itemModel.findItemStatusReferenceCodeByStatusReason(detail.replacementReason);

	newDetail.QuotationParagraphProductid	= quotationParagraphProductid;
	newDetail.Building						= detail.building;
	newDetail.Floor							= detail.floor;
	newDetail.Location						= detail.location;
	newDetail.CustomerInstalledBaseId		= detail.customerInstalledBaseId;
	newDetail.IsReplacement					= detail.isReplacement;
	newDetail.ReplacementReason				= replacementReasonReferenceCode;
	newDetail.IsInstall						= detail.isInstall;
	newDetail.IsRecycle						= detail.isRecycle;

	callBackModel.result = null;
	de.itgs.WorkOrders.QuotationParagraphProductDetail.create(newDetail, callBackModel.successCB, callBackModel.konyErrorCB, true);
	return callBackModel.result;
}

quotationModel.createQuotationSummaryLine = function (tariffAgreement, quotation, product, sortval) {
	var valuesArray 					= {};

	valuesArray.Activity				= (validationModel.isNull(product.item.activity) || product.item.activity == "MUL")?workOrder.equipmentActivity:product.item.activity;
	valuesArray.BasePrice				= product.item.basicPrice;
	valuesArray.Category				= product.item.subType;
	valuesArray.Discount				= product.item.discount;
	valuesArray.DiscountedPrice			= (product.item.grossPrice * product.quantityTotal) * (1 - product.item.discount / 100);
	valuesArray.FamilyText				= product.item.family;
	valuesArray.Price					= 'NULL'; // Not used
	valuesArray.PricingFamily			= product.item.pricingFamily;
	valuesArray.PricingSubFamily		= product.item.pricingSubFamily;
	valuesArray.ProductDescription		= product.item.name;
	valuesArray.Productid				= product.item.usualCode;
	valuesArray.PRP0					= product.item.PRP0;
	valuesArray.QuantityAdditional		= product.quantityAdditional;
	valuesArray.QuantityReplaced		= product.quantityReplaced;
	valuesArray.QuantityTotal			= product.quantityTotal;
	valuesArray.Quotationid				= quotation.id;
	valuesArray.Sortval					= sortval;
	valuesArray.SubfamilyText			= product.item.subFamily;
	valuesArray.TariffContractId		= tariffAgreement;
	valuesArray.TotalPrice				= product.item.grossPrice * product.quantityTotal;
	valuesArray.UnitDiscountedPrice		= product.item.grossPrice - (product.item.grossPrice * product.item.discount / 100);
	valuesArray.UnitPrice				= product.item.grossPrice;
	valuesArray.VatAmount				= (product.item.grossPrice * product.item.VATPercentage / 100);
	valuesArray.VatPercentage			= product.item.VATPercentage;

	callBackModel.result = null;
	de.itgs.WorkOrders.QuotationSummaryLine.create(valuesArray, callBackModel.successCB, callBackModel.konyErrorCB, true);
	return callBackModel.result;
}

quotationModel.createQuotationHistory = function (quotation) {
	callBackModel.result = null;
	var newHistory = {
		Quotationid :	quotation.id,
		Status :		quotation.status,
		StatusDate :	dateTimePrintSql(new Date()),
		Userid :		login.user.Userid
	};

	de.itgs.WorkOrders.QuotationHistory.create(newHistory, callBackModel.successCB, callBackModel.konyErrorCB, true);
	return callBackModel.result;
}

quotationModel.createQuotationWonSiteInfo = function (quotation, recommendations, workOrder, siteCopy) {
	var customerAddress = null;
	if (!validationModel.isNull(recommendations[0].deliveryAddressType)) {
		customerAddress = customerModel.findCustomerAddressByWorkOrderAndType(workOrder, recommendations[0].deliveryAddressType);
	}
	var contacts = contactModel.findContactsByWorkOrderAndTypeCode(workOrder, null, recommendations[0].contact);

	var valuesArray 					= {};
	valuesArray.AdditionalAddress		= 'NONE';
	valuesArray.AgencyWarehouse			= 'NONE';
	valuesArray.chkDifferentDeliveryAddress = (recommendations[0].deliveryAddressType == 'SITE') ? '1' : '0';
	valuesArray.chkIdenticalAddress		= '0';
	valuesArray.Comments				= 'NULL';
	valuesArray.Deliveryaddress1		= !validationModel.isNull(customerAddress) ? customerAddress.address1 : 'NULL';
	valuesArray.Deliveryaddress2		= !validationModel.isNull(customerAddress) ? customerAddress.address2 : 'NULL';
	valuesArray.Deliveryaddress3		= !validationModel.isNull(customerAddress) ? customerAddress.address3 : 'NULL';
	valuesArray.Deliverycedex			= 'NULL';
	valuesArray.Deliverycity			= !validationModel.isNull(customerAddress) ? customerAddress.city : 'NULL';
	valuesArray.DeliveryContactid		= (contacts.length == 1) ? contacts[0].id : 'NULL';
	valuesArray.Deliverycorporatename	= !validationModel.isNull(customerAddress) ? customerAddress.corporateName : 'NULL';
	valuesArray.Deliverycorporatenameadd = !validationModel.isNull(customerAddress) ? customerAddress.corporateNameAdd : 'NULL';
	valuesArray.Deliverycountry			= !validationModel.isNull(customerAddress) ? 'FR' : 'NULL';
	valuesArray.DeliveryDate			= 'NULL';
	valuesArray.DeliveryPhone			= (contacts.length == 1) ? contacts[0].tel : 'NULL';
	valuesArray.Deliveryzipcode			= !validationModel.isNull(customerAddress) ? customerAddress.zipcode : 'NULL';
	valuesArray.InstallContactId		= (contacts.length == 1) ? contacts[0].id : 'NULL';
	valuesArray.InstallPhone			= (contacts.length == 1) ? contacts[0].tel : 'NULL';
	valuesArray.Quotationid				= quotation.id;
	valuesArray.Siteid					= siteCopy.id;
	valuesArray.StockLocation			= '88009';
	valuesArray.Technician				= 'NONE';

	callBackModel.result = null;
	de.itgs.WorkOrders.QuotationWonSiteInfo.create(valuesArray, callBackModel.successCB, callBackModel.konyErrorCB, true);
	return callBackModel.result;
}

quotationModel.getRecipientForQuotationTransmission = function (quotation) {
	var recipient = { type: null, data: null };
	// if we are not in prod environment, default recipient
	if(app_parameters.build.environment != 'prod') {
		recipient = {
			type : 'EMAIL',
			contactId : 'NULL',
			data : app_parameters.build.training_course ? 'Sebastien.Renaud@sicli.com' : 'maxime.castagnet@chubb.fr;thierry.jeannet@sicli.com'
		};

		return recipient;
	}

	function lookForContactData(sql, type) {
		var contactData = { type: null, data: null };
		callBackModel.result = undefined;
		callBackModel.context.sql = "select m.data data, c.id contactId from Media m join Contact c on m.ContactId = c.id " + sql;
		executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.konyErrorCB);
		if (!validationModel.isNull(callBackModel.result) && !validationModel.isNull(callBackModel.result.data)) {
			contactData.type = type;
			contactData.contactId = callBackModel.result.contactId;
			contactData.data = callBackModel.result.data;
		}
		return contactData;
	}

	var sqlQuotation = "join F56PRECO p on c.id = p.Contact where p.QuotationId = " + quotation.QuotationNumber;
	var sqlSignature = "join Signatures s on c.id = s.ContactId where s.id = " + workOrder.signatureId;

	var searchArray = [
		{ sql: sqlQuotation + " and m.PHTP = 'E'", type: 'EMAIL' },
		{ sql: sqlQuotation + " and m.PHTP = 'FAX'", type: 'FAX' },
		{ sql: sqlSignature + " and m.PHTP = 'E'", type: 'EMAIL' },
		{ sql: sqlSignature + " and m.PHTP = 'FAX'", type: 'FAX' }
	];

	var i = 0;
	while (i < searchArray.length && null == recipient.type) {
		recipient = lookForContactData(searchArray[i].sql, searchArray[i].type);
		i++;
	}

	return recipient;
}

quotationModel.submitQuotationDocument = function (quotation, printTextId) {
	callBackModel.result = undefined;
	var salespersonNode = null;

	// is quotation required to be sent ?
	if(quotation.status != 'STATUS_SENT') {
		return callBackModel.result;
	}

	// we must verify the recipient has been correctly defined
	var recipient = quotationModel.getRecipientForQuotationTransmission(quotation);

	if(validationModel.isNull(recipient.data) || recipient.data == "") {
		alert("Aucun contact n'a été défini pour le devis : transmission impossible.");
		return callBackModel.result;
	}

	// identify salesman associated with the quotation
	if (!unitec.lang.isNull(quotation.Employeeid) && quotation.Employeeid > 0) {
		salespersonNode = quotationDocument.buildNodeSalesperson(quotation.Employeeid);
	}

	// all parameters are set : the quotation is readt to be transmitted.
	// define quotation XML structure to build the document itself
	var xmlDocStr = quotationDocument.createXML(quotation, salespersonNode, recipient.contactId, printTextId);

	// the quotation is now ready to be sent. Next questions are when and how. What media should be used ?
	var transmissionType = (validationModel.isNull(recipient.type) || recipient.type == "") ? 'EMAIL' : recipient.type;

	// Identify the different mails required for the quotation correct transmission
	var salesmanMail = validationModel.isNull(salespersonNode) || validationModel.isNull(salespersonNode.salespersonemail) ? "" : salespersonNode.salespersonemail;
	var managerMail = employeeModel.getMedia(workOrder.superiorAN8, 'E', "employee");
  	managerMail =  (managerMail !== "" && isValidEmailAdresses(managerMail)) ? managerMail : ""; //Arati:Changed code for JIRA UI-151 to check mail address is valid or not 
	var agencyMail = employeeModel.getMedia(employeeModel.findEmployeeAgencyByEmployee(login.user.AN8), 'E', "agency");
  	agencyMail = (agencyMail !== "" && isValidEmailAdresses(agencyMail)) ? agencyMail : "";	//Arati:Changed code for JIRA UI-151 to check mail address is valid or not 
	var defaultMail = "Unitec_Prod@chubbfrance.com";

	// Who should send this document ?
	var sender = workOrder.process == "CHUBB" ? managerMail: salesmanMail;
	if(sender == "") sender = defaultMail;

	// Who should receive this document ?
  	//Arati:Changed code for JIRA UI-151 to check mail address is valid or not start here 
	//var recipientMail = (null == recipient.data) ? 'NULL' : recipient.data; 
  	if(app_parameters.build.environment != 'prod') {
      var recipientMail = (!validationModel.isNull(recipient.data) && isValidEmailAdresses(recipient.data)) ? recipient.data : "maxime.castagnet@chubb.fr";
    } else if(app_parameters.build.environment == 'prod'){
      var recipientMail = (!validationModel.isNull(recipient.data) && isValidEmailAdresses(recipient.data)) ? recipient.data : agencyMail;
    } //Arati:Changed code for JIRA UI-151 end here
	// below is correction proposal. To be confirmed.
	// var recipient = (null == recipient.data) ? agencyMail : recipient.data;

	// Who should be in copy of the mail ?
	var copies = [];

	if(app_parameters.build.environment == 'prod' && salesmanMail != "") copies.push(salespersonNode.salespersonemail);// salesman
	if(workOrder.process == "CHUBB") {
		if(agencyMail !== "") copies.push(agencyMail); // agency
		if(managerMail !== "") copies.push(managerMail); // manager
	}

	copies = copies.join(";");

	// who should be in hidden copy ?
	var bccCopies = quotationModel.findBccUserByBTNumber(workOrder.doco);
  	bccCopies = (!validationModel.isNull(bccCopies) && isValidEmailAdresses(bccCopies)) ? bccCopies : "";	//Arati:Changed code for JIRA UI-151 to check mail address is valid or not
	// everything is set : last step is to build data so it can be treated by server after synchronization. building SQL data
	var transmission = {
		Quotationid			:	quotation.Quotationid,
		QuotationNumber		:	quotation.QuotationNumber,
		QuotationVersion	:	quotation.QuotationVersion,
		QuotationXML		:	xmlDocStr,
		TransmissionType	:	transmissionType,
		UserId				:	login.user.AN8,
		Recipient			:	recipientMail,
		Sender				:	sender,
		CC					:	copies,
		BCC					:	bccCopies
	};

	de.itgs.WorkOrders.QuotationTransmission.create(transmission, callBackModel.successCB, callBackModel.konyErrorCB);
	return callBackModel.result;
};

quotationModel.findBccUserByBTNumber = function(btNumber) {
	callBackModel.result = null;

	callBackModel.context.sql =	"select users.adusername bcc " +
								"from 	users, " +
								"		F56BT " +
								"where 	users.useremployeean8 = f56BT.anp " +
								"and  F56BT.doco = "+btNumber+" limit 1";

	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);

	if (validationModel.isNull(callBackModel.result) || validationModel.isNull(callBackModel.result.bcc) ) {
		return null;
	} else {
		return callBackModel.result.bcc;
	}
};

quotationModel.findQuotationByQuotationNumber = function(quotationNumber) {
	var quotation = {};

	function findQuotationByQuotationNumberCB(l_quotation) {
		if (!validationModel.isNull(l_quotation) && l_quotation instanceof Array && l_quotation.length > 0) {
			quotation = l_quotation[0];
			quotation.status = quotation.Status;
			quotation.customer = customerModel.findCustomerById(quotation.Customerid);
			quotation.paragraph = quotationModel.findQuotationParagraphByQuotationId(quotation.Quotationid);
			quotation.VATAmounts = quotationModel.findQuotationVATAmountsByQuotationId(quotation.Quotationid);
		}
	}

	callBackModel.context.sql = "select * from quotation where quotationNumber = '" + quotationNumber + "' limit 1";
	executeSql(callBackModel.context.sql, findQuotationByQuotationNumberCB, callBackModel.sqlErrorCB);

	return quotation;
}

quotationModel.findQuotationParagraphByQuotationId = function(quotationId) {
	var paragraph = {};

	function findQuotationParagraphByQuotationIdCB(l_paragraph) {
		if (!validationModel.isNull(l_paragraph) && l_paragraph instanceof Array && l_paragraph.length > 0) {
			paragraph = l_paragraph[0];
			paragraph.products = quotationModel.findQuotationParagraphProductByQuotationParagraphId(paragraph.QuotationParagraphid);
		}
	}

	callBackModel.context.sql = "select * from quotationParagraph where quotationId = " + quotationId + " limit 1";
	executeSql(callBackModel.context.sql, findQuotationParagraphByQuotationIdCB, callBackModel.sqlErrorCB);

	return paragraph;
}

quotationModel.findQuotationParagraphProductByQuotationParagraphId = function(quotationParagraphId) {
	var products = [];

	function findQuotationParagraphProductByQuotationParagraphIdCB (l_products) {
		if (!validationModel.isNull(l_products) && l_products instanceof Array && l_products.length > 0) {
			for(var i = 0; i < l_products.length; i++) {
				products.push(l_products[i]);
				products[i].detail = quotationModel.findQuotationParagraphProductDetailByQuotationParagraphProductId(products[i].QuotationParagraphProductid);
			}
		}
	}

	callBackModel.context.sql = "select * from quotationParagraphProduct where quotationParagraphId = " + quotationParagraphId;
	executeSql(callBackModel.context.sql, findQuotationParagraphProductByQuotationParagraphIdCB, callBackModel.sqlErrorCB);

	return products;
}

quotationModel.findQuotationParagraphProductDetailByQuotationParagraphProductId = function(quotationParagraphProductId) {
	callBackModel.resultArray = [];
	callBackModel.context.sql = "select * from quotationParagraphProductDetail where quotationParagraphProductId = " + quotationParagraphProductId;
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

quotationModel.findQuotationVATAmountsByQuotationId = function(quotationId) {
	callBackModel.resultArray = [];
	callBackModel.context.sql = "select VATamount, VATpercentage from QuotationVAT where QuotationId = " + quotationId;
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}
