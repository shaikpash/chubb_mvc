articleRecommendationModel = {};

articleRecommendationModel.findRecommendationTypesByWorkOrder = function (workOrder, itemStatusCodes, structuredOnly, 
																		  salesType, withTasksOnly, excludeDelivered) {	
  try{
	callBackModel.context.sql  = 	"select	distinct preco.type name, \n" +
									"	(select DL01 from udc where sy = 56 and rt = 'Y1' and KY = preco.type) label \n" +
									"from	f56preco preco ";
	callBackModel.context.sql += 	"where	preco.doco = " + workOrder.doco + " ";
	callBackModel.context.sql += (!validationModel.isNull(salesType)) ? 
									"and 	preco.salesType = '" + salesType + "' " : "";
	callBackModel.context.sql += (!validationModel.isNull(structuredOnly)) ?			
									"and 	exists ( " +
									"			select 	null " +
									"			from 	f56precoitems " +
									"			where 	type = 'ITEM' " +
									"			and 	f56precoid = preco.id " +
									"			and 	COALESCE(itm, 'NULL') <> 'NULL' " +
									"			and 	COALESCE(quantity, 'NULL') <> 'NULL' " +
									"		) " : "";
	callBackModel.context.sql += (!validationModel.isNull(withTasksOnly)) ?			
									"and 	exists ( " +
									"			select 	null " +
									"			from 	f56precoitems " +
									"			where 	type = 'TASK' " +
									"			and 	f56precoid = preco.id " +
									"		) " : "";
	callBackModel.context.sql += (!validationModel.isNull(excludeDelivered)) ?			
									"and 	preco.status <> 'Delivered' " : "";
	
	if (!validationModel.isNull(itemStatusCodes)  && itemStatusCodes.length > 0) {
		var itemStatusCodesNormalized = [];
		for (var i = 0; i < itemStatusCodes.length; i ++) {
			itemStatusCodesNormalized.push("'" + itemStatusCodes[i] + "'");
		}
		callBackModel.context.sql +="and 	exists ( " +
									"			select 	null " +
									"			from 	customerInstalledBase cib " +
									"			where 	y56indla in (" + itemStatusCodesNormalized.join(",") + ") " +
									"			and 	id = preco.cibid " +
									"		) ";
	}
	callBackModel.context.sql += 	"order by preco.type";
	
	callBackModel.resultArray = [];		  
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);		
	return callBackModel.resultArray;
  } catch(e){
    kony.print(" sql catch"+e);
  }
}

articleRecommendationModel.findRecommendationItemsByRecommendation = function (articleRecommendation, type, excludedType) {
	databaseModel.openDBExchange('Lecture des préconisations...');
	var fields = [
		"precoitm.id id",
		"preco.id recommendationId",
		"preco.discount discount",
		"precoitm.F56BTREId commentId",
		"precoitm.itm articleId",
		"precoitm.quantity quantity",
		"precoitm.quantityDelivered quantityDelivered",
		"precoitm.type type",
		"precoitm.subType subType",
		"precoitm.EUSE EUSE",
		"precoitm.UPC1 UPC1",
		"precoitm.basicPrice basicPrice",
		"precoitm.grossPrice grossPrice",
		"(CASE WHEN COALESCE(precoitm.VATPercentage,'NULL') == 'NULL' THEN 0 ELSE precoitm.VATPercentage END) VATPercentage",
		"(CASE WHEN COALESCE(precoitm.y56lieu,'NULL') == 'NULL' THEN '' ELSE precoitm.y56lieu END) placement",
		"(CASE WHEN COALESCE(precoitm.y56etag,'NULL') == 'NULL' THEN '' ELSE precoitm.y56etag END) floor",
		"(CASE WHEN COALESCE(precoitm.y56empla,'NULL') == 'NULL' THEN '' ELSE precoitm.y56empla END) location",
		"(CASE WHEN COALESCE(precoitm.y56zonl,'NULL') == 'NULL' THEN '' ELSE precoitm.y56zonl END) customerNumber",
		"item.description1 || CASE WHEN item.description2 = 'NULL' THEN '' ELSE item.description2 END name",
		"item.pricingSubFamily pricingSubFamily",
		"item.usualCode usualCode",
		"item.measurementUnit unitOfMeasureCode",
		"item.PRP0 PRP0",
		"item.SRP6 activity",
		"item.vattype vatType",
		"(SELECT DL01 FROM UDC WHERE SY = '41' AND RT = 'S1' AND KY = item.SRP1) family",
		"(SELECT DL01 FROM UDC WHERE SY = '41' AND RT = 'S2' AND KY = item.SRP2) subFamily",
		"'' salesReason",
		"COALESCE((SELECT 1 FROM f56precoitems WHERE f56precoid = " + articleRecommendation.id + " and subtype = 'BSEQ2'),0) isInstall",
		"COALESCE((SELECT 1 FROM f56precoitems WHERE f56precoid = " + articleRecommendation.id + " and subtype = 'BSEQ3'),0) isRecycle"
	];
	callBackModel.context.sql =
		"select	" + fields.join(", ") + " " +
		"from f56precoitems precoitm " +
		"join f56preco preco on precoitm.f56precoid = preco.id " +
		"join item on precoitm.itm = item.itm " +
		"where precoitm.f56precoid = " + articleRecommendation.id;
	
	if (!validationModel.isNull(type))
		callBackModel.context.sql += " and precoitm.type = '" + type + "' ";
		
	if (!validationModel.isNull(excludedType))
		callBackModel.context.sql += " and precoitm.subtype != '" + excludedType + "' ";

	callBackModel.context.sql += " order by precoitm.id";

	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	
	var recommandationsItems = callBackModel.resultArray;
	
	for (var i = 0; i < recommandationsItems.length; i++) {
		if (validationModel.isNull(recommandationsItems[i]['activity']) && 'ITEM' != recommandationsItems['type']) {
			callBackModel.context.sql =
				"select parent_item.SRP6 value " +
				"from item parent_item " +
				"join f56precoitems on parent_item.itm = f56precoitems.itm and f56precoitems.TYPE = 'ITEM' " +
				"where f56precoitems.f56precoid = " + articleRecommendation.id + " limit 1";
			callBackModel.result = null;
			executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
			if (!validationModel.isNull(callBackModel.result))
				recommandationsItems[i]['activity'] = callBackModel.result;
		}
	}
	
	databaseModel.closeDBExchange();
	
	return recommandationsItems;
}

articleRecommendationModel.findprecoItemIdsByRecommendation = function(recommendation, type) {
	callBackModel.resultArray = new Array();
	
	callBackModel.context.sql = 
		"select	pi.id " +
		"from 	f56precoitems pi " +
		"where 	pi.f56precoid = " + recommendation.id + " ";
		
	if (!validationModel.isNull(type))
		callBackModel.context.sql += " and pi.type = '" + type + "' ";
	
	callBackModel.context.sql += " order by pi.id";
	
	if (!validationModel.isNull(type) && type == 'ITEM') // only one item by recommendation header
		callBackModel.context.sql += " limit 1 ";
		
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	
	return callBackModel.resultArray;
};

articleRecommendationModel.getRecommendationsSqlFields = function () {
	var fields =
		" preco.id, " +
		" preco.CIBId itemCIBId, " +
		" preco.signatureId signatureId, " +
		" preco.quotationId quotationId, " +
		" preco.clientOrderNumber clientOrderNumber, " +
		" preco.discount discount, " +
		" precoitm.quantity quantity, " +
		" precoitm.quantityDelivered quantityDelivered, " +
		" precoitm.basicPrice basicPrice, " +
		" precoitm.grossPrice grossPrice, " +
		" precoitm.UPC1 UPC1, " +
		" precoitm.EUSE EUSE, " +
		" precoitm.PricingOrigin pricingOrigin, " +
		" precoitm.VATPercentage VATPercentage,\n" +
		" (select sum(pi.quantity * pi.grossPrice) from f56precoitems pi where  pi.f56precoid = preco.id ) price, \n"+
		" cib.LOTN itemBatchNumber, " +
		" itm.description1 ||  CASE WHEN itm.description2 = 'NULL' THEN '' ELSE itm.description2 END name, " +
		" itm.usualCode usualCode, " +
		" itm.measurementUnit unitOfMeasureCode, " +
		" itm.PRP0 PRP0, " +
		" itm.SRP6 activity, " +
		" itm.pricingFamily pricingFamily, \n " +
		" itm.pricingSubFamily pricingSubFamily, \n " +
		" itm.vattype vatType, \n" +
		" (SELECT DL01 FROM UDC WHERE SY = '41' AND RT = 'S1' AND KY = itm.SRP1) family, " +
		" (SELECT DL01 FROM UDC WHERE SY = '41' AND RT = 'S2' AND KY = itm.SRP2) subFamily, " +
		" btre.id remarkId, " +
		" btre.comment comment, " +
		" preco.doco doco, \n" +
		" (CASE WHEN COALESCE(preco.salesReason,'NULL') == 'NULL' THEN '' ELSE preco.salesReason END) salesReason, \n" +
		" (CASE WHEN COALESCE(preco.salesType,'NULL') == 'NULL' THEN '' ELSE preco.salesType END) salesType, \n" +
		" (CASE WHEN COALESCE(preco.replacementReason,'NULL') == 'NULL' THEN '' ELSE preco.replacementReason END) replacementReason, \n" +
		" (CASE WHEN COALESCE(precoitm.y56lieu,'NULL') == 'NULL' THEN '' ELSE precoitm.y56lieu END) placement, \n" +
		" (CASE WHEN COALESCE(precoitm.y56etag,'NULL') == 'NULL' THEN '' ELSE precoitm.y56etag END) floor, \n" +
		" (CASE WHEN COALESCE(precoitm.y56empla,'NULL') == 'NULL' THEN '' ELSE precoitm.y56empla END) location, \n" +
		" (CASE WHEN COALESCE(precoitm.y56zonl,'NULL') == 'NULL' THEN '' ELSE precoitm.y56zonl END) customerNumber, \n" +
		" (CASE WHEN COALESCE(cib.lotn,'NULL') == 'NULL' THEN '' ELSE cib.lotn END) batchNumber, \n" +
		" COALESCE((SELECT 1 FROM f56precoitems WHERE f56precoid = preco.id and subtype = 'BSEQ2'), 0) isInstall, \n" +
		" COALESCE((SELECT 1 FROM f56precoitems WHERE f56precoid = preco.id and subtype = 'BSEQ3'), 0) isRecycle, \n" +
		" preco.itemStatusReason itemStatusReason, " +
		" cib.y56indla itemStatus, " +
		" preco.status status, " +
		" preco.deliveryAddressType deliveryAddressType, " +
		" preco.wishedDeliveryDate wishedDeliveryDate," +
		" preco.type type, " +
		" preco.owner owner, " +
		" preco.contact contactId, " +
		" cib.itm itemId, " +
		" precoitm.itm articleId, " +
		" (select count (1) from RecommendationQuotations where RecommendationId = preco.id) quotationNb \n";
	return fields;
}

articleRecommendationModel.getRecommendationsSqlTables = function () {
	var tables =
		"f56preco preco \n" +
		"inner join f56precoitems precoitm on precoitm.f56precoid = preco.id and precoitm.type = 'ITEM' \n" +
		"left join f56btre btre on btre.id = precoitm.f56btreId \n" +
		"left join item itm on itm.itm = precoitm.itm \n" +
		"left join customerInstalledBase cib on cib.id = preco.cibid ";
	return tables;
};

articleRecommendationModel.findItemRelatedRecommendations = function(wo, item, type) {
	type = validationModel.isNull(type) ? null : type;
	return articleRecommendationModel.findRecommendationsByWorkOrder(wo, null, null, true, null, null, type, item, null, null, null, null, true);
}

articleRecommendationModel.findSaleRecommendations = function (wo, states) {
	return articleRecommendationModel.findRecommendationsByWorkOrder(wo, null, null, true, 'Vente', null, null, null, false, states);
};

articleRecommendationModel.findRecommendationsByWorkOrder = function (workOrder, 
																recommendationType, 
																itemStatusCodes, 
																structuredOnly, 
																salesType, 
																withTasksOnly,
																salesReason,
																item,
																excludeDelivered,
																recommendationStatuses,
																withoutQuotation,
																excludeOrdered,
																recommendationsForThisItemOnly) {
	callBackModel.context.sql =
		"select " + articleRecommendationModel.getRecommendationsSqlFields() + "\n" +
		"from " + articleRecommendationModel.getRecommendationsSqlTables() + "\n" +
		"where	preco.doco = " + workOrder.doco + " ";
	
	if (!validationModel.isNull(withTasksOnly) && withTasksOnly)
		callBackModel.context.sql += " and exists (select null from f56precoitems where type = 'TASK' and f56precoid = preco.id) ";
	
	if (!validationModel.isNull(recommendationType)) 
		callBackModel.context.sql += "and 	preco.type = '" + recommendationType + "' ";
	
	if (!validationModel.isNull(salesType)) 
		callBackModel.context.sql +="and 	preco.salesType = '" + salesType + "' ";
	
	if (!validationModel.isNull(structuredOnly) && structuredOnly) {
		callBackModel.context.sql +=
			"and exists (select null from f56precoitems where type = 'ITEM' and f56precoid = preco.id and COALESCE(itm, 'NULL') <> 'NULL' and COALESCE(quantity, 'NULL') <> 'NULL') ";
	}
	
	if (!validationModel.isNull(salesReason)) 
		callBackModel.context.sql += "and 	preco.salesReason = '" + salesReason + "' ";
	
	if (!validationModel.isNull(item) && !validationModel.isNull(item.articleId))
		callBackModel.context.sql += "and 	cib.itm = '" + item.articleId + "' ";
	
	if (!validationModel.isNull(item) && !validationModel.isNull(recommendationsForThisItemOnly) && recommendationsForThisItemOnly) 
		callBackModel.context.sql += "and 	preco.cibid = '" + item.id + "' ";
	
	if (!validationModel.isNull(excludeDelivered) && excludeDelivered)
		callBackModel.context.sql += "and 	preco.status <> 'Delivered' ";
	
	if (!validationModel.isNull(excludeOrdered) && excludeOrdered)		
		callBackModel.context.sql += "and 	preco.status <> 'Ordered' ";
							
	if (!validationModel.isNull(recommendationStatuses) && recommendationStatuses.length > 0)			
		callBackModel.context.sql += "and 	preco.status in (" + recommendationStatuses.join(",") + ") ";
	
	if (!validationModel.isNull(withoutQuotation) && withoutQuotation) {
		callBackModel.context.sql += "and COALESCE(preco.quotationid,'NULL') == 'NULL' ";
		callBackModel.context.sql += "and not exists (select 1 from RecommendationQuotations where RecommendationId = preco.id) ";
	}
	
	if (!validationModel.isNull(itemStatusCodes)  && itemStatusCodes.length > 0) {
		var itemStatusCodesNormalized = [];
		for (var i = 0; i < itemStatusCodes.length; i ++) {
			itemStatusCodesNormalized.push("'" + itemStatusCodes[i] + "'");
		}
		callBackModel.context.sql +=
			"and exists (select null from customerInstalledBase cib where y56indla in (" + itemStatusCodesNormalized.join(",") + ") and id = preco.cibid) ";
	}
	
	callBackModel.context.sql += "order by preco.type, preco.id";
	
	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

articleRecommendationModel.findRecommendationsByIds = function (ids) {
	callBackModel.context.sql =
		"select " + articleRecommendationModel.getRecommendationsSqlFields() + "\n" +
		"from " + articleRecommendationModel.getRecommendationsSqlTables() + "\n" +
		"where preco.id in (" + ids.join(', ') + ")\n" +
		"order by preco.type, preco.id";
	
	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

articleRecommendationModel.findRecommendationItemStatusesByWorkOrder = function (workOrder) {
	callBackModel.context.sql =
		"select" +
		" cib.y56indla code, " +
		" (case when coalesce(udc.DL01,'NULL') <> 'NULL' and coalesce(udc.DL02,'NULL') <> 'NULL' then udc.DL01 || udc.DL02 else udc.DL01 end) name " +
		"from	f56preco preco " +
		"left join customerInstalledBase cib on preco.cibid = cib.id " +
		"left join udc on udc.sy = '56' and udc.rt = 'SB' and udc.ky = cib.y56indla " +
		"where preco.doco = " + workOrder.doco + " " +
		"order by name";
	
	callBackModel.resultArray = [];	  
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);	
	return callBackModel.resultArray;
}

articleRecommendationModel.findRecommendationDiscountsByWorkOrder = function (workOrder, salesType) {
	callBackModel.resultArray = [];
	
	callBackModel.context.sql =
		"select distinct DISCOUNT discount " +
		"from f56preco preco " +
		"where	doco = " + workOrder.doco + " " +
		"	and salesType = '" + salesType + "' " +
		"	and exists (" + // structuredOnly
		"		select 	null " +
		"		from 	f56precoitems " +
		"		where 	type = 'ITEM' " +
		"		and 	f56precoid = preco.id " +
		"		and 	COALESCE(itm, 'NULL') <> 'NULL' " +
		"		and 	COALESCE(quantity, 'NULL') <> 'NULL' " +
		"	)";
		  
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

articleRecommendationModel.createQuotationFromRecommendations = function (recommendations, status, workOrder, quotationComment, isPartial) {
	var quotation = {};
	var process = workOrder.process;
	isPartial = validationModel.isNull(isPartial) ? false : isPartial;

	if (recommendations.length > 0) {
		var BSEQ4ItemMap = [];
		var pricesExist = true; //var allItemsHavePrice = true;
		var noZeroPrice = true; //var allItemsHaveDefinedPrice = true;
		var noComment = true; //var noItemsHaveComment = true;
		var isStatusOnGoing = false;
		for (var i = 0; i < recommendations.length; i ++) {
			recommendations[i].items = articleRecommendationModel.findRecommendationItemsByRecommendation(recommendations[i]);

			// Go through all items and remove duplicate BSEQ4 items (only to be charged once)
			for (var j = (recommendations[i].items.length -1); j >= 0 ; j--) {
				var nextItem = recommendations[i].items[j];
				if (nextItem.subType == 'BSEQ4') {
					if (BSEQ4ItemMap.indexOf(nextItem.articleId) == -1) {
						BSEQ4ItemMap.push(nextItem.articleId);
					} else {
						recommendations[i].items.splice(j,1);
						j--;
					}
				}

				if (validationModel.isNull(nextItem.basicPrice) && nextItem.basicPrice !== 0) pricesExist = false;
				if (kony.string.isNumeric(nextItem.basicPrice) && nextItem.basicPrice == 0) noZeroPrice = false;
				if (!validationModel.isNull(nextItem.commentId)) noComment = false;
			}
		}

		// quotation status setting
		var nextStatus = 'STATUS_ONGOING';

		if (!app_parameters.lifetime.limited_access) {

			if (status == "'Ordered'") {
				nextStatus = 'STATUS_AWAITING_AUTOMATED_ORDER';
			}else if(noComment && pricesExist) {
				if (isStatusOnGoing )
					nextStatus = 'STATUS_ONGOING';
				else
					nextStatus = 'STATUS_SENT';
				if(workOrder.AC28 != 'Y' || validationModel.isNull(workOrder.AC28))
					nextStatus = 'STATUS_ONGOING';
			}
		}

		if(app_parameters.debug.send_quotations) nextStatus = 'STATUS_SENT';

		quotation.status = nextStatus;
		quotation.quotationNumber = userModel.getAndUpdateNextQuotationNumber(login.user);
		quotation.quotationCategory = (status == "'Ordered'") ? 'ORDER' : 'STRUCTURED_INFOCOM';
		quotation = quotationModel.createQuotationForRecommendations(quotation, recommendations, workOrder, quotationComment, isPartial);

		// Update the recommendations & create the recommendation header (once per quotation)
		if (!validationModel.isNull(quotation.id)) {
			for (var i = 0; i < recommendations.length; i ++) {
				recommendations[i].quotationId = quotation.quotationNumber;
			}
			articleRecommendationModel.updateRecommendations(recommendations);
			articleRecommendationModel.createRecommendationHeaders(quotation, workOrder, [recommendations[0]]);
		}
	}

	return quotation;
}

articleRecommendationModel.createRecommendationHeaders = function(quotation, workOrder, recommendations) {
	callBackModel.resultArray = [];
	
	var valuesArray = [];
	var	currentDate = new Date();
	for (var i = 0; i < recommendations.length; i++) {
		var customerAddress = null;
		if (!validationModel.isNull(recommendations[i].deliveryAddressType)) {
			customerAddress = customerModel.findCustomerAddressByWorkOrderAndType(workOrder,recommendations[i].deliveryAddressType);
		}
		
		var contacts = contactModel.findContactsByWorkOrderAndTypeCode(workOrder, null, recommendations[i].contactId);
		valuesArray[i] = {};
		valuesArray[i].ADD1 = !validationModel.isNull(customerAddress) ? customerAddress.corporateNameAdd : 'NULL';
		valuesArray[i].ADD2 = !validationModel.isNull(customerAddress) ? customerAddress.address1 : 'NULL';
		valuesArray[i].ADD3 = !validationModel.isNull(customerAddress) ? customerAddress.address2 : 'NULL';
		valuesArray[i].ADD4 = !validationModel.isNull(customerAddress) ? customerAddress.address3 : 'NULL';
		valuesArray[i].ADDZ = !validationModel.isNull(customerAddress) ? customerAddress.zipcode : 'NULL';
		valuesArray[i].ALPH = (contacts.length == 1) ? contacts[0].lastName : 'NULL';
		valuesArray[i].ALPH2 = (contacts.length == 1) ? contacts[0].lastName : 'NULL';
		valuesArray[i].AN8 = workOrder.customerAN8;
		valuesArray[i].APRP5 = !validationModel.isNull(workOrder.chapter) ? workOrder.chapter : 'NULL';
		valuesArray[i].createdBy = login.user.AN8;
		valuesArray[i].createdDate = dateTimePrintSql(currentDate);
		valuesArray[i].CTR = !validationModel.isNull(customerAddress) ? 'FR' : 'NULL';
		valuesArray[i].CTY1 = !validationModel.isNull(customerAddress) ? customerAddress.city : 'NULL';
		valuesArray[i].DOCO = workOrder.doco;
		valuesArray[i].DRQJ = dateFunctions.isAValidDate(recommendations[i].wishedDeliveryDate, "2210-01-01");
		valuesArray[i].EMAL = (contacts.length == 1) ? contacts[0].email : 'NULL';
		valuesArray[i].EUSE = recommendations[i].EUSE;
		valuesArray[i].EV01 = (recommendations[i].deliveryAddressType == 'SITE') ? 'O' : 'N';
		valuesArray[i].origin = login.user.AN8;
		valuesArray[i].owner = recommendations[i].owner;
		valuesArray[i].PH1 = (contacts.length == 1) ? contacts[0].tel : 'NULL';
		valuesArray[i].PH2 = (contacts.length == 1) ? contacts[0].tel : 'NULL';
		valuesArray[i].QuotationNumber = quotation.quotationNumber;
		valuesArray[i].QuotationVersion = 1;
		valuesArray[i].SHAN = workOrder.siteAN8;
		valuesArray[i].statusH = 'A TRAITER';
		valuesArray[i].type = recommendations[i].type;
		valuesArray[i].UPC1 = recommendations[i].UPC1;
		valuesArray[i].VR01 = recommendations[i].clientOrderNumber;
	}
	
	if (valuesArray.length > 0) {
		de.itgs.WorkOrders.F56HPRECO.createAll(valuesArray, callBackModel.arraySuccessCB, callBackModel.konyErrorCB, true);
	}
	
	return callBackModel.resultArray;
}

articleRecommendationModel.createUnitaryRecommendations = function(article, item, workOrder, statusReason, quantity) {

	var articlePrice = pricing.computePrice(article.articleId, workOrder, 'sale');
	var replaceReason = null;
	var recommendationItems = new Array();
	var recommendationIds = new Array();
	
	if (!validationModel.isNull(item) && !validationModel.isNull(item.statusReason)) {
		var sql = "select KY, SPHD from udc where sy = '56' and rt = 'UE' and KY = '" + item.statusReason + "' and coalesce(SPHD, 'NULL') != 'NULL'";
    
		function findReplaceReasonByCodeCB(result) {
			if (result.length > 0) replaceReason = result[0].SPHD;
		};
		
		executeSql(sql, findReplaceReasonByCodeCB, callBackModel.konyErrorCB);
	}
	
	var relatedTasks = taskModel.findPossibleTasksByArticleAndOptionTypes(article.articleId, [2,6], workOrder);
	if (article.salesReason == "Remplacement") {
		var tasksBSQE3 = taskModel.findPossibleTasksByArticleAndOptionTypes(item.articleId, [3], workOrder);
		relatedTasks = relatedTasks.concat(tasksBSQE3);
	}
	
	for(var i = 0; i < relatedTasks.length; i++) {
		relatedTasks[i].priceDetails = pricing.computePrice(relatedTasks[i].articleId, workOrder, 'sale');
	}
	
	articleRecommendationModel.createUnitaryRecommendationsCB = function(res) {
		recommendation.id = res.id;
		recommendationIds.push(res.id);
		// Link the complementary or replacement article to the recommendation
		var recommendationItem = de.itgs.javascript.Object.clone(article);
		recommendationItem.recommendationId = recommendation.id;
		recommendationItem.type = 'ITEM';
		recommendationItem.subType = 'NULL';
		
		recommendationItem.basicPrice = articlePrice.basicPrice;
		recommendationItem.grossPrice = articlePrice.price;
		recommendationItem.VATPercentage = articlePrice.vat.vatPercentage;
		recommendationItem.UPC1 = articlePrice.UPC1;
		recommendationItem.EUSE = articlePrice.EUSE;
		recommendationItem.pricingOrigin = articlePrice.pricingOrigin;
		recommendationItem.statusReason = replaceReason;
		
		recommendationItems.push(recommendationItem);
		
		// Find all tasks linked to the recommendation + tasks linked to the item to be replaced (if applicable)
		for (var i = 0; i < relatedTasks.length; i++) {
			var task = relatedTasks[i];
			var taskItem = {};
			taskItem.recommendationId = recommendation.id;
			taskItem.articleId = task.articleId;
			taskItem.quantity = task.quantity * article.quantity;
			taskItem.type = 'TASK';
			taskItem.subType = 'BSEQ' + task.optionType;
			
			taskItem.basicPrice = task.priceDetails.basicPrice;
			taskItem.grossPrice = task.priceDetails.price;
			taskItem.VATPercentage = task.priceDetails.vat.vatPercentage;
			taskItem.UPC1 = task.priceDetails.UPC1;
			taskItem.EUSE = task.priceDetails.EUSE;
			taskItem.pricingOrigin = task.priceDetails.pricingOrigin;
			
			recommendationItems.push(taskItem);
		}
		pricing.logging.inProgress = false;
		if (app_parameters.debug.pricing_popup)
			popupModel.showPopError(pricing.logging.result);
	}
	
	var recommendation = {};
	var location = workOrderModel.findWorkOrderLocationByWorkOrder(workOrder);
	var employeeAN8 = !validationModel.isNull(location) ? unitec.lang.coalesce(location.employeeAN8, 'NULL') : 'NULL';
	var replaceReason = article.replacementReason;
	
	var valuesArray = {
		DOCO : workOrder.doco,
		TYPE : article.recommendationType,
		SALESTYPE : 'Devis',
		SALESREASON : article.salesReason,
		REPLACEMENTREASON : (!validationModel.isNull(replaceReason) && !validationModel.isNull(replaceReason.code)) ? replaceReason.code : 'NULL',
		STATUS : 'Created',
		STATUSDATE : dateTimePrintSql(new Date()),
		CREATEDBY : login.user.AN8,
		CREATEDDATE : dateTimePrintSql(new Date()),
		DISCOUNT : 0,
		OWNER : employeeAN8, //commercial name
		ITEMSTATUSREASON : validationModel.isNull(statusReason) ? 'NULL' : statusReason.code,
		//CIBId : validationModel.isNull(item) ? 'NULL' : item.id
      	CIBId : validationModel.isNull(item) ? null	 : item.id		//Arati: Changed for kony error related to issue #33 
	};
	showSyncLoadingScreen("Ajout des préconisations...");
	for(var i = 0; i < quantity; i++) {
		de.itgs.WorkOrders.F56PRECO.create(valuesArray, articleRecommendationModel.createUnitaryRecommendationsCB, callBackModel.konyErrorCB, true);
	}
	showSyncLoadingScreen("Ajout des éléments liés aux préconisations...");
	// Save the selected article sales tasks in the DB
	var result = articleRecommendationModel.createRecommendationItems(recommendationItems);
	showSyncLoadingScreen("Mise à jour des tâches liées...");

	if(recommendationIds.length > 0) {
		var createdRecommendation = {
			id : recommendationIds[0],
			doco : workOrder.doco,
			articleId : article.articleId,
			salesType : 'Devis'
		};
		articleRecommendationModel.reviewAdditionalTasksByContext(createdRecommendation.doco, createdRecommendation.salesType, [createdRecommendation.id]); 
	}
	kony.application.dismissLoadingScreen();
	return recommendation;
}

articleRecommendationModel.createRecommendationByItemAndWorkOrder = function (recommendationArticle, item, workOrder, itemStatusReason) {
	var recommendation = {};

	articleRecommendationModel.createRecommendationByItemAndWorkOrderCB = function(l_recommendationArticle) {
		recommendation.id = l_recommendationArticle.id;
		
		// Link the complementary or replacement article to the recommendation
		var recommendationItems = [];
		var recommendationItem = de.itgs.javascript.Object.clone(recommendationArticle);
		recommendationItem.recommendationId = recommendation.id;
		recommendationItem.type = 'ITEM';
		recommendationItem.subType = 'NULL';
		
		pricing.logging.inProgress = false;
		
		var price = pricing.computePrice(recommendationArticle.articleId, workOrder, 'sale');
   
		var replaceReason = null;
		if (!validationModel.isNull(item) && !validationModel.isNull(item.statusReason)) {
			var sql = "select SPHD from udc where sy = '56' and rt = 'UE' and KY = '" + 
				item.statusReason + "' and coalesce(SPHD, 'NULL') != 'NULL'";
     
			function findReplaceReasonByCodeCB(result) {
				if (result.length > 0) replaceReason = result[0].SPHD;
			};
 
			executeSql(sql, findReplaceReasonByCodeCB, callBackModel.konyErrorCB);
		}
		
		recommendationItem.basicPrice = price.basicPrice;
		recommendationItem.grossPrice = price.price;
		recommendationItem.VATPercentage = price.vat.vatPercentage;
		recommendationItem.UPC1 = price.UPC1;
		recommendationItem.EUSE = price.EUSE;
		recommendationItem.pricingOrigin = price.pricingOrigin;
		recommendationItem.statusReason = replaceReason;
		recommendationItems.push(recommendationItem);
		
		// Find all tasks linked to the recommendation + tasks linked to the item to be replaced (if applicable)
		var tasks = taskModel.findPossibleTasksByArticleAndOptionTypes(recommendationArticle.articleId, [2,6], workOrder);
		if (recommendationArticle.salesReason == "Remplacement") tasks = tasks.concat(taskModel.findPossibleTasksByArticleAndOptionTypes(item.articleId, [3], workOrder));
		for (var i = 0; i < tasks.length; i++) {
			var task = tasks[i];
			var taskItem = articleRecommendationModel.setBSEQTaskData(task, recommendation.id, recommendationArticle.quantity, workOrder);			
			recommendationItems.push(taskItem);
		}
		pricing.logging.inProgress = false;
		if (app_parameters.debug.pricing_popup)
			popupModel.showPopError(pricing.logging.result);
		
		// Save the selected article sales tasks in the DB
		var result = articleRecommendationModel.createRecommendationItems(recommendationItems);
	}

	var workOrderLocationInfo = workOrderModel.findWorkOrderLocationByWorkOrder(workOrder);
	var employeeAN8 = !validationModel.isNull(workOrderLocationInfo) ? unitec.lang.coalesce(workOrderLocationInfo.employeeAN8, 'NULL') : 'NULL';

	var valuesArray = {};
	
	valuesArray.DOCO = workOrder.doco;
	valuesArray.TYPE = recommendationArticle.recommendationType;
	valuesArray.SALESTYPE = 'Devis';
	valuesArray.SALESREASON = recommendationArticle.salesReason;
	if (!validationModel.isNull(recommendationArticle.replacementReason) && !validationModel.isNull(recommendationArticle.replacementReason.code)) 
		valuesArray.REPLACEMENTREASON = recommendationArticle.replacementReason.code;
	valuesArray.STATUS = 'Created';
	valuesArray.STATUSDATE = dateTimePrintSql(new Date());
	valuesArray.CREATEDBY = login.user.AN8;
	valuesArray.CREATEDDATE = dateTimePrintSql(new Date());
	valuesArray.DISCOUNT = 0;
	valuesArray.OWNER = employeeAN8;     // AN8 du commercial
	
	if (!validationModel.isNull(itemStatusReason))
		valuesArray.ITEMSTATUSREASON = itemStatusReason.code;

	if (!validationModel.isNull(item))
		valuesArray.CIBId = item.id;

	de.itgs.WorkOrders.F56PRECO.create(valuesArray, articleRecommendationModel.createRecommendationByItemAndWorkOrderCB, callBackModel.konyErrorCB, true);
	
	var createdRecommendation = {
		id : recommendation.id,
		doco : workOrder.doco,
		articleId : recommendationArticle.articleId,
		salesType : 'Devis'
	};

	articleRecommendationModel.reviewAdditionalTasksByContext(createdRecommendation.doco, createdRecommendation.salesType, [createdRecommendation.id]);  		  
	return recommendation;
};

articleRecommendationModel.setBSEQTaskData = function(task, recommendationId, recommendationQty, workOrder) {

	var price = pricing.computePrice(task.articleId,workOrder,'sale');
	
	var taskItem = {
		recommendationId : recommendationId,
		articleId : task.articleId,
		quantity : task.quantity * recommendationQty,
		type : 'TASK',
		subType : 'BSEQ' + task.optionType,
		basicPrice : price.basicPrice,
		grossPrice : price.price,
		VATPercentage : price.vat.vatPercentage,
		UPC1 : price.UPC1,
		EUSE : price.EUSE,
		pricingOrigin : price.pricingOrigin
	};
	
	return taskItem;

};

articleRecommendationModel.createRecommendationItems = function (items) {
	callBackModel.resultArray = [];

	var valuesArray = [];
	for (var i = 0; i < items.length; i ++) {
		valuesArray[i] = {};
		valuesArray[i].TYPE = items[i].type;
		valuesArray[i].SUBTYPE = items[i].subType;
		valuesArray[i].ITM = items[i].articleId;
		valuesArray[i].QUANTITY = items[i].quantity;
		valuesArray[i].QUANTITYDELIVERED = 0;
		valuesArray[i].Y56LIEU = items[i].placement;
		valuesArray[i].Y56ETAG = items[i].floor;
		valuesArray[i].Y56EMPLA = items[i].location;
		//valuesArray[i].Y56ZONL = items[i].customerNumber;
		valuesArray[i].F56PRECOId = items[i].recommendationId;
		valuesArray[i].REASON = items[i].statusReason;
		
		valuesArray[i].UPC1 = items[i].UPC1;
		valuesArray[i].EUSE = items[i].EUSE;
		valuesArray[i].PRICINGORIGIN = items[i].pricingOrigin;
		
		valuesArray[i].basicPrice = items[i].basicPrice;
		valuesArray[i].grossPrice = items[i].grossPrice;
		valuesArray[i].VATPercentage = items[i].VATPercentage;
		
		if (!validationModel.isNull(items[i].comment) && items[i].comment.length > 0) {
			var remark = remarkModel.createRemarkByWorkOrder(workOrder, items[i].comment, 'PRECO');
			if (!validationModel.isNull(remark))
				valuesArray[i].F56BTREId = remark.id;
		}	
	}
	
	if (valuesArray.length > 0) {
		de.itgs.WorkOrders.F56PRECOITEMS.createAll(valuesArray, callBackModel.arraySuccessCB, callBackModel.konyErrorCB, true);
	}
	
	return callBackModel.resultArray;
}

articleRecommendationModel.createRecommendationPreTransmission = function (recommendations) {
	callBackModel.resultArray = [];

	var valuesArray = [];
	for (var i = 0; i < recommendations.length; i ++) {
		valuesArray[i] = {};
		valuesArray[i].CONTACTId = !validationModel.isNull(recommendations[i].transmission.contactId) ? recommendations[i].transmission.contactId : 'NULL';
		valuesArray[i].COPYN1 = !validationModel.isNull(recommendations[i].transmission.copyN1) ? recommendations[i].transmission.copyN1 : 'NULL';
		valuesArray[i].CREATEDBY = login.user.AN8;
		valuesArray[i].CREATEDDATE = dateTimePrintSql(new Date());
		valuesArray[i].F56BTId = workOrder.id;
		valuesArray[i].F56PRECOId = recommendations[i].id;
		valuesArray[i].MEDIA = !validationModel.isNull(recommendations[i].transmission.mediaType) ? recommendations[i].transmission.mediaType : 'NULL'; // E,FAX
		valuesArray[i].PRETRANSMITTED = 0;
		valuesArray[i].TYPE = recommendations[i].transmission.reportType; // SALES_CONTRACT,QUOTATION,INTERVENTION_REPORT
	}

	if (valuesArray.length > 0) {
		de.itgs.WorkOrders.Reporting.createAll(valuesArray, callBackModel.arraySuccessCB, callBackModel.konyErrorCB, true);
	}

	return callBackModel.resultArray;
}

articleRecommendationModel.updateRecommendations = function (recommendations, updateContextTasks, updatePrices) {
  try{
	callBackModel.resultArray = [];

	if (validationModel.isNull(updateContextTasks))
		updateContextTasks = false;
		
	if (validationModel.isNull(updatePrices))
		updatePrices = false;

	var precoValuesArray = [];
	var precoitmValuesArray = [];
	var remarkIdsForDeletion = [];
	for (var i = 0; i < recommendations.length; i ++) {
	
		var recommendation = recommendations[i];
		
		precoValuesArray[i] = {};
		precoValuesArray[i].changeSet = {};
		precoValuesArray[i].changeSet.SALESTYPE = recommendation.salesType;
      	//Arati : Fix For Issue#73 start here
		//precoValuesArray[i].changeSet.CONTACT = recommendation.contactId;
        if(!validationModel.isNull(recommendation.contactId)){
          precoValuesArray[i].changeSet.CONTACT = recommendation.contactId;
        }else{
      		precoValuesArray[i].changeSet.CONTACT = null;
        }
      	//Arati : Fix For Issue#73 end here
		precoValuesArray[i].changeSet.SALESREASON = recommendation.salesReason;
		if (!validationModel.isNull(recommendation.replacementReason)) precoValuesArray[i].changeSet.REPLACEMENTREASON = recommendation.replacementReason.code;
		precoValuesArray[i].changeSet.STATUS = recommendation.status;
		precoValuesArray[i].changeSet.STATUSDATE = dateTimePrintSql(new Date());
      	//Arati : Fix For Issue#73 start here
		//precoValuesArray[i].changeSet.signatureid = recommendation.signatureId;
        if(!validationModel.isNull(recommendation.signatureId)){
          precoValuesArray[i].changeSet.signatureid = recommendation.signatureId;
        }else{
      		precoValuesArray[i].changeSet.signatureid = null;
        }
      	//Arati : Fix For Issue#73 end here
		precoValuesArray[i].changeSet.DELIVERYADDRESSTYPE = recommendation.deliveryAddressType;
		precoValuesArray[i].changeSet.wishedDeliveryDate = recommendation.wishedDeliveryDate;
		precoValuesArray[i].changeSet.CLIENTORDERNUMBER = recommendation.clientOrderNumber;
		precoValuesArray[i].changeSet.QUOTATIONID = (typeof recommendation.quotationId == "number" ? recommendation.quotationId.toString() : recommendation.quotationId);
		if (!validationModel.isNull(recommendation.replacementReason) && !validationModel.isNull(recommendation.replacementReason.code)) 
			precoValuesArray[i].REPLACEMENTREASON = recommendation.replacementReason.code;
		precoValuesArray[i].changeSet.DISCOUNT = recommendation.discount;
		precoValuesArray[i].whereClause = "where id = '" + recommendation.id + "'";
		
		var recommendationItems = articleRecommendationModel.findprecoItemIdsByRecommendation(recommendation, 'ITEM');

		if (recommendationItems.length > 0) {
		
			precoitmValuesArray[i] = {};
			precoitmValuesArray[i].changeSet = {};
			precoitmValuesArray[i].changeSet.QUANTITY = recommendation.quantity;
			precoitmValuesArray[i].changeSet.QUANTITYDELIVERED = recommendation.quantityDelivered;
			precoitmValuesArray[i].changeSet.Y56LIEU = recommendation.placement;
			precoitmValuesArray[i].changeSet.Y56ETAG = recommendation.floor;
			precoitmValuesArray[i].changeSet.Y56EMPLA = recommendation.location;
			//precoitmValuesArray[i].changeSet.Y56ZONL = recommendation.customerNumber;
			precoitmValuesArray[i].changeSet.CIBId = recommendation.cibid;
			precoitmValuesArray[i].changeSet.ITM = recommendation.articleId;
			precoitmValuesArray[i].whereClause = "where id = '" + recommendationItems[0].id + "'";
			
			if(updatePrices) {
				precoitmValuesArray[i].changeSet.basicPrice = recommendation.articlePrice.basicPrice;
				precoitmValuesArray[i].changeSet.grossPrice = recommendation.articlePrice.price;
				precoitmValuesArray[i].changeSet.VATPercentage = recommendation.articlePrice.vat.vatPercentage;
				precoitmValuesArray[i].changeSet.UPC1 = recommendation.articlePrice.UPC1;
				precoitmValuesArray[i].changeSet.EUSE = recommendation.articlePrice.EUSE;
				precoitmValuesArray[i].changeSet.pricingOrigin = recommendation.articlePrice.pricingOrigin;
			}
			
			if (!validationModel.isNull(recommendation.remarkId)) {
				if (!validationModel.isNull(recommendation.comment) && recommendation.comment.length > 0) {
					// Update existing remark
					var remark = {};
					remark.id = recommendation.remarkId;
					remark.comment = recommendation.comment;
					remark.doco = recommendation.doco;
					remarkModel.updateRemark(remark);
					precoitmValuesArray[i].changeSet.F56BTREId = recommendation.remarkId;
				} else {
					// Flag remark for deletion
					remarkIdsForDeletion.push(recommendation.remarkId);
					precoitmValuesArray[i].changeSet.F56BTREId = 'NULL';
				}
			} else if (!validationModel.isNull(recommendation.comment) && recommendation.comment.length > 0) {
				// Create new remark
				var remark = remarkModel.createRemarkByWorkOrder({doco: recommendation.doco}, recommendation.comment, 'PRECO');
				if (remark != undefined) precoitmValuesArray[i].changeSet.F56BTREId = remark.id;
			}
		}
	}

	if (precoitmValuesArray.length > 0) {
		de.itgs.WorkOrders.F56PRECOITEMS.updateAll(precoitmValuesArray, callBackModel.arraySuccessCB, callBackModel.konyErrorCB, true);
	}

	if (precoValuesArray.length > 0) {
		de.itgs.WorkOrders.F56PRECO.updateAll(precoValuesArray, callBackModel.arraySuccessCB, callBackModel.konyErrorCB, true);
	}
	
	// Delete remarks that got flagged for deletion
	for (var i = 0; i < remarkIdsForDeletion.length; i ++) {
		remarkModel.deleteRemark({id: remarkIdsForDeletion[i]});
	}
	if (updateContextTasks) {
		var sortedRecommendations = articleRecommendationModel.sortRecommendationsByDocoAndSalesTypes(recommendations);
		for(var i = 0; i < sortedRecommendations.length; i++) {
			var nextRow = sortedRecommendations[i];
			articleRecommendationModel.reviewAdditionalTasksByContext(nextRow.doco, nextRow.salesType, nextRow.ids);
		}
	}

	return callBackModel.resultArray;
  } catch(e){
    kony.print("update recommendation "+e);
  }
};

articleRecommendationModel.updateRecommendationItems = function (recommendationItems) {
	callBackModel.resultArray = [];	
	
	var valuesArray = [];
	for (var i = 0; i < recommendationItems.length; i ++) {
		valuesArray[i] = {};
		valuesArray[i].changeSet = {};
		valuesArray[i].changeSet.QUANTITYDELIVERED = recommendationItems[i].quantityDelivered;
		valuesArray[i].whereClause = "where id = " + recommendationItems[i].id + " ";
	}
	
	if (valuesArray.length > 0) {
		de.itgs.WorkOrders.F56PRECOITEMS.updateAll(valuesArray, callBackModel.arraySuccessCB, callBackModel.konyErrorCB, true);
	}

	return callBackModel.resultArray;
}

articleRecommendationModel.isRecommendationReferenced = function(recommendation) {
	callBackModel.context.sql =
		"select 1 value from (" +
		" select 1 from Reporting where F56PRECOId = " + recommendation.id +
		" union select 1 from RecommendationQuotations where recommendationId = " + recommendation.id +
		")";

	callBackModel.result = null;
	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	return !validationModel.isNull(callBackModel.result);
}

articleRecommendationModel.getReferences = function (recommendation) {
	
	callBackModel.context.sql =
		"SELECT	id, " +
		"		'reporting' source " +
		"FROM	Reporting " +
		"WHERE	F56PRECOId = " + recommendation.id + " " +
		"UNION " +
		"SELECT	id, " +
		"		'recommendationQuotation' source " +
		"FROM	RecommendationQuotations " +
		"WHERE	recommendationId = " + recommendation.id + " ";

	callBackModel.resultArray = new Array();
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
};

articleRecommendationModel.clearReferences = function(recommendation) {
	var references = articleRecommendationModel.getReferences(recommendation);
	var reportingIds = new Array();
	var linkedQuotationIds = new Array();
	
	for(i = 0; i < references.length; i++ ) {
		var nextRow = references[i];
		if(nextRow.source == 'reporting') reportingIds.push(nextRow.id);
		else if(nextRow.source == 'recommendationQuotation') linkedQuotationIds.push(nextRow.id);
		else kony.print('ERROR : this id comes from neither reporting nor recommendationQuotation and will be ignored.');
	}
		
	function buildRemoveWhereClause(arrayIds) {
		return " where id in (" + arrayIds.join(',') + ") ";
	}
	
	if(reportingIds.length > 0) databaseModel.removeFromWhere('Reporting', buildRemoveWhereClause(reportingIds));
	if(linkedQuotationIds.length > 0) databaseModel.removeFromWhere('RecommendationQuotations', buildRemoveWhereClause(linkedQuotationIds));
;}

articleRecommendationModel.deleteRecommendation = function(articleRecommendation, clearReporting) {
	databaseModel.openDBExchange('Supression des préconisations...');
	// Delete the linked recommendation items
	articleRecommendationModel.deleteRecommendationItemsByRecommendations([articleRecommendation]);
	
	if(clearReporting) {
		articleRecommendationModel.clearReferences(articleRecommendation);
	}
	
	// Delete the recommendation
	de.itgs.WorkOrders.F56PRECO.deleteByPK(articleRecommendation.id, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
	databaseModel.closeDBExchange();
}

articleRecommendationModel.deleteRecommendationItemsByRecommendations = function(articleRecommendations, type, subtype) {
	var articleRecommendationIds = [];
	var remarkIdsForDeletion = [];
	for (var i = 0; i < articleRecommendations.length; i++) {
		articleRecommendationIds.push(articleRecommendations[i].id);
		if (!validationModel.isNull(articleRecommendations[i].remarkId) && 
			remarkIdsForDeletion.indexOf(articleRecommendations[i].remarkId) == -1 &&
			type == 'ITEM') {
			remarkIdsForDeletion.push(articleRecommendations[i].remarkId);
		}
	}
	
	var whereClause = "where F56PRECOId in (" + articleRecommendationIds.join(",") + ") ";
	if (!validationModel.isNull(type)) whereClause += "and type = '" + type + "' ";
	if (!validationModel.isNull(subtype)) whereClause += "and subType = '" + subtype + "' ";

	// Delete the recommendation items
	de.itgs.WorkOrders.F56PRECOITEMS.remove(whereClause, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
	
	// Delete the linked remarks
	for (var i = 0; i < remarkIdsForDeletion.length; i++) {
		remarkModel.deleteRemark({id: remarkIdsForDeletion[i]});
	}
}

articleRecommendationModel.deleteRecommendationItemsByIds = function(articleRecommendationItemIds) {
	var whereClause = "where id in (" + articleRecommendationItemIds.join(", ") + ") ";
	// Delete the recommendation items
	de.itgs.WorkOrders.F56PRECOITEMS.remove(whereClause, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
};

articleRecommendationModel.sortRecommendationsByDocoAndSalesTypes = function(recommendations) {
	
	var sortedRecommendations = new Array();
	
	function findDocoAndSalesTypeKey(doco, salesType) {
		for(var i = 0; i < sortedRecommendations.length; i++) {
			var nextKey = sortedRecommendations[i];
			if(nextKey.doco == doco && nextKey.salesType == salesType)
				return i;
		}
		
		return -1;
	};
	
	function createNewKey(doco, salesType) {
		var newKey = {
			doco : doco,
			salesType : salesType,
			ids : new Array()
		};
		return (sortedRecommendations.push(newKey) - 1);
	};
	
	for(var i =0; i < recommendations.length; i++) {
		var nextPreco = recommendations[i];
		var keyIndex = findDocoAndSalesTypeKey(nextPreco.doco, nextPreco.salesType);
		
		if(keyIndex < 0) {
			keyIndex = createNewKey(nextPreco.doco, nextPreco.salesType);
		}
		
		sortedRecommendations[keyIndex].ids.push(nextPreco.id);
	};
	
	return sortedRecommendations;
}

articleRecommendationModel.findRelevantBSEQComponentsByContext = function(doco, salesType, recommendationItemsIds) {
	
	callBackModel.resultArray = new Array();
	var componentArticleIds = new Array();
	
	callBackModel.context.sql =
		"select distinct ic.componentITM ITM, " +
		" 		p.DOCO, " +
		" 		p.SALESTYPE " +
		"from 	itemComposition ic " +
		"join 	F56PRECOITEMS pi " +
		"on 	ic.compoundITM = pi.ITM " +
		"join 	F56PRECO p " +
		"on 	p.id = pi.F56PRECOId " +
		"where	ic.TBM = 'PA' " +
		"and 	ic.optiontype in  (4) " +
		"and 	coalesce(pi.SUBTYPE,'NULL') <> 'BSEQ4' " +
		"and 	p.DOCO = " + doco + " " +
		"and 	p.SALESTYPE = '" + salesType + "' ";
		
	if(!validationModel.isNull(recommendationItemsIds))
		callBackModel.context.sql += 
		"and	p.id in ('" + recommendationItemsIds.join("','") + "') ";

	executeSql(callBackModel.context.sql,callBackModel.arraySuccessCB,callBackModel.sqlErrorCB);	
	
	for(var i=0;i<callBackModel.resultArray.length;i++) componentArticleIds.push(callBackModel.resultArray[i].ITM);
	
	return componentArticleIds;
};

articleRecommendationModel.findContextualTasks = function(doco, salesType, components) {
	
	callBackModel.resultArray = new Array();
	
	callBackModel.context.sql =
		"select 	p.id pid, " +
		" 			pi.ITM " +
		"from 		F56PRECOITEMS pi " +
		"JOIN 		F56PRECO p " +
		"on 		pi.F56PRECOId = p.id " +
		"where 		pi.SUBTYPE = 'BSEQ4' " +
		"and 		p.DOCO = " + doco + " " +
		"and 		p.SALESTYPE = '" + salesType + "' " +
		"and 		ITM in (" + components.join() + ") " +
		"order by	ITM";
	
	executeSql(callBackModel.context.sql,callBackModel.arraySuccessCB,callBackModel.sqlErrorCB);
	
	return callBackModel.resultArray;	
};

articleRecommendationModel.reviewAdditionalTasksByContext = function(doco, salesType, recommendationIds, partial) {
	// multiple DB requests of different types (select, create, delete) are executed.
	// a message is displayed for the user
	showSyncLoadingScreen('Mise à jour des préconisations...');

	//purpose : update the nomenclature of the BSEQ 4 components according to the recommendation context
	// the context is determined by the work order and the sales type

	// reference list of BSEQ 4 components relevant to the context
	var componentArticles = new Array();
	var componentArticleIds = new Array();
	var existingTasks = new Array();
	var recommendationsToClear = new Array();
	var recommendationItemsToCreate = new Array();
	if(partial == undefined) partial = false;
	var targetPrecos = partial ? recommendationIds : null;
	
	//first step : identify all BSEQ4 components that are relevant to the context.
	// we use the doco and salestype as indexes to accelerate the request, they won't be used afterward
	componentArticleIds = articleRecommendationModel.findRelevantBSEQComponentsByContext(doco, salesType, targetPrecos);
	
	//second step : identify how many additional tasks already exist for the context
	existingTasks = articleRecommendationModel.findContextualTasks(doco, salesType, componentArticleIds);
	
	// there will be different results depending on how many additional tasks already exist 
	var additionalTasks = callBackModel.resultArray;
	var nextITM = null;
	var occurrence = 0;
	if(!partial) {
		for (var i = 0;i < additionalTasks.length; i++) {
			// first occurrence of the BSEQ4 item in the relevant recommendation items ?
			occurrence = (additionalTasks[i].ITM == nextITM) ? (occurrence+1) : 1;
			nextITM = additionalTasks[i].ITM;
			
			// if the BSEQ 4 item already exists, there is no need to create it again
			if(occurrence == 1)
				componentArticleIds.splice(componentArticleIds.indexOf(nextITM),1);
			
			// there is only one BSEQ 4 necessary for a context - the other ones need to be cleared
			else
				recommendationsToClear.push({id : additionalTasks[i].pid,remarkId : null});
		}
	}
	else {
		for (var i = 0;i < additionalTasks.length; i++) {
			// first occurrence of the BSEQ4 item in the relevant recommendation items ?
			recommendationsToClear.push({id : additionalTasks[i].pid,remarkId : null});
		}
	}
	
	// the remaining BESQ 4 items found in the composition do not exist and can be created
	var workOrder = workOrderModel.findWorkOrderByDoco(doco);
	
	for (var i = 0; i < componentArticleIds.length; i++) {

		var price = pricing.computePrice(componentArticleIds[i],workOrder,'sale');	
		var nextRecommendation = {
			type : 				'TASK',
			subType : 			'BSEQ4',
			articleId : 		componentArticleIds[i],
			quantity : 			1,
			placement : 		'NULL',
			floor : 			'NULL',
			location : 			'NULL',
			customerNumber : 	'NULL',
			recommendationId : 	recommendationIds[0],
			statusReason : 		'NULL',
			basicPrice : 		price.basicPrice,
			grossPrice : 		price.price,
			VATPercentage : 	price.vat.vatPercentage,
			UPC1 :				price.UPC1,
			EUSE :				price.EUSE,
			pricingOrigin :		price.pricingOrigin
		};
		recommendationItemsToCreate.push(nextRecommendation);
	}
	
	// once all data has been determined, we are ready to update the database

	if(recommendationsToClear.length > 0)
		articleRecommendationModel.deleteRecommendationItemsByRecommendations(recommendationsToClear,null,'BSEQ4');
	if(recommendationItemsToCreate.length > 0)
		articleRecommendationModel.createRecommendationItems(recommendationItemsToCreate);
	
	dismissSyncLoadingScreen(); // all DB calculations are over - return to normal
}
