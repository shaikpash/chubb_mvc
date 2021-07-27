sparePartModel = {};
sparePartModel.context = {
	sql: null
};

sparePartModel.deleteSpareParts = function (spareParts) {

	var sparePartIds = [];
	for (var i = 0; i < spareParts.length; i++) {
		if (sparePartIds.indexOf(spareParts[i].id) == -1) {
			sparePartIds.push(spareParts[i].id);
		}
	}
	
	if (sparePartIds.length > 0) {
		// Update the sparePartsSummary (i.e. subtract the deleted quantities)
		for (var i = 0; i < spareParts.length; i ++) {
			spareParts[i].quantity = spareParts[i].quantity * (-1);
			var sparePartSummaryEntry = sparePartModel.findSparePartSummaryEntryById(spareParts[i].F56BTCOId, 'UNITECH');
			if(!validationModel.isNull(sparePartSummaryEntry)) {
				sparePartModel.updateSparePartSummaryEntryBySparePart(sparePartSummaryEntry, spareParts[i]);
			}
		}
		
		// Remove the link from spareParts to tasks
		var tasks = taskModel.findTasksBySpareParts(spareParts);
		for (var i = 0; i < tasks.length; i ++) {
			tasks[i].sparePartId = null;
			taskModel.updateTasks([tasks[i]]);
		}
		
		// Delete related tasks
		if (tasks.length > 0) {
			taskModel.deleteTasks(tasks);
		}
		
		// Delete the spareParts
		de.itgs.WorkOrders.SpareParts.remove(
					"where id in (" + sparePartIds.join(",") + ")", 
					callBackModel.emptyCB,
					callBackModel.konyErrorCB,
					true
					);
	}
}

sparePartModel.deleteSparePartsByTask = function (task) {
	// Update the sparePartsSummary (i.e. subtract the deleted quantities)
	var spareParts = sparePartModel.findSparePartsByTask(task);
	for (var i = 0; i < spareParts.length; i ++) {
		spareParts[i].quantity = spareParts[i].RealQtyTRQT * (-1);
		var sparePartSummaryEntry = sparePartModel.findSparePartSummaryEntryById(spareParts[i].F56BTCOId, 'UNITECH');
		if(!validationModel.isNull(sparePartSummaryEntry)) {
			sparePartModel.updateSparePartSummaryEntryBySparePart(sparePartSummaryEntry, spareParts[i]);
		}
	}
	
	if(spareParts.length == 0 && task.statusIndex != 1) {
		var quantity = -1;
		if(task.source != 'TNPJ' && task.source != 'TNPK') quantity = task.statusIndex == 2 ? -1 : 0;
//		var quantity = task.status == 'N' ? -1 : 0;
		sparePartModel.updateSparePartSummaryEntryByChubbTask(task, quantity, workOrder);
	}
	
	de.itgs.WorkOrders.SpareParts.remove("where F56BTDTId = " + task.id, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}

sparePartModel.findSparePartsByTask = function (task) {

	callBackModel.resultArray = [];	
	callBackModel.context.sql = 	"select	* " +
									"from	spareParts " +
									"where 	F56BTDTId = " + task.id;

	executeSql(	callBackModel.context.sql, 
				callBackModel.arraySuccessCB,
			 	callBackModel.sqlErrorCB);
	
	return callBackModel.resultArray;

}

sparePartModel.groupSparePartsByUsualCodeAndSalesReason = function (l_spareParts) {
	var spareParts = [];
	var usualCodeIndexMap = {};
	for (var i = 0; i < l_spareParts.length; i++) {
		var sparePart = de.itgs.javascript.Object.clone(l_spareParts[i]);
		if (!usualCodeIndexMap.hasOwnProperty(sparePart.usualCode)) {
			spareParts.push(sparePart);
			usualCodeIndexMap[sparePart.usualCode] = [{salesReasonCode: sparePart.salesReasonCode, index: spareParts.length-1}];
		} else {
			var salesReasonExists = false;
			for (var j = 0; j < usualCodeIndexMap[sparePart.usualCode].length; j++) {
				if (usualCodeIndexMap[sparePart.usualCode][j].salesReasonCode == sparePart.salesReasonCode) {
					spareParts[usualCodeIndexMap[sparePart.usualCode][j].index].quantity += sparePart.quantity;
					salesReasonExists = true;
					break;
				}
			}
			if (!salesReasonExists) {
				spareParts.push(sparePart);
				usualCodeIndexMap[sparePart.usualCode].push({salesReasonCode: sparePart.salesReasonCode, index: spareParts.length-1});
			}
		}
	}
	return spareParts;
}

sparePartModel.findSparePartsByItemAndWorkOrder = function (item, workOrder, filter) {

	callBackModel.resultArray = [];	
	callBackModel.context.sql = 	"select sp.id, " +
									"		sp.F56BTCOId, " +
									"		itm.ITM articleId, " +
									"		(CASE WHEN COALESCE(sp.RealQtyTRQT,'NULL') == 'NULL' THEN 0 ELSE sp.RealQtyTRQT END) quantity, " +
									"		(CASE WHEN COALESCE(sp.PriceEBILL,'NULL') == 'NULL' THEN 0 ELSE sp.PriceEBILL END) PriceEBILL, " +
									"		itm.PRP0 articleTypeCode, " +
									"		itm.usualcode usualCode, " +
									"		sp.f56btdtid taskId, " +
									"		sp.UnitOfMeasureUM unitOfMeasureCode, " +
									"		itm.description1 name, " +
									"		(select DL01 from udc where sy = '00' and rt = 'UM' and ky = sp.UnitOfMeasureUM limit 1) unitOfMeasure, " + 
									"		(select (case when count(*) > 0 then 1 else 0 end) from itemcomposition where compoundITM = itm.ITM) isCompound, " +
									"		sp.salesReasonAA05 salesReasonCode, " +
									"	    (select DL01 from udc where sy = '40' and rt = 'LG' and SPHD = 'MOTIF_V' and ky = sp.salesReasonAA05) salesReason " +  
									"from	SpareParts sp, " +
									"		Item itm " +
									"where	COALESCE(sp.f56btid, 'NULL') <> 'NULL' " +
									"and	sp.f56btid = " + workOrder.id + " " +
									"and	itm.usualcode = sp.usualCodeLITM ";		

	callBackModel.context.sql += (!validationModel.isNull(item)) ? 
										"and	COALESCE(sp.cibid, 'NULL') <> 'NULL' " +
										"and	sp.cibid = " + item.id + " "
										: "";
	callBackModel.context.sql += (!validationModel.isNull(filter) && filter == 'tasksRelated') ? 
										" and COALESCE(sp.f56btdtid, 'NULL') <> 'NULL' " +
										" and sp.f56btdtid in ( " +
										"			select btdt.id " +
										"			from	F56BTDT btdt, " + 
										"					CustomerInstalledBase cib, " + 
										"					Item itm " +
										"			where	btdt.cibid = " + item.id +
										"			and		cib.id = btdt.cibid " +  
										"			and		itm.usualcode = btdt.LITM " + 
										"			and		btdt.doco = " + workOrder.doco +
										"			and		COALESCE(btdt.source,'NULL') in ('NULL','TNPK','TNPJ','TPK','TPJ') " +
										"		)" //+
								//		" and COALESCE(sp.salesReasonAA05, 'NULL') = 'NULL' " 
										: "";
	callBackModel.context.sql += (!validationModel.isNull(filter) && filter == 'salesRelated') ? 
										" and COALESCE(sp.f56btdtid, 'NULL') = 'NULL' " +
										" and EXISTS ( " +
										"			select null " + 
										"			from 	itemcomposition " + 
										"			where 	compounditm = " + item.articleId +
										"			and		componentitm = itm.itm " +
										"			and		tbm = 'M' " +
										"			) "
										: "";
	callBackModel.context.sql += (!validationModel.isNull(filter) && filter == 'productRelated') ? 
										" and COALESCE(sp.f56btdtid, 'NULL') = 'NULL' " +
										" and EXISTS ( " +
										"			select null " + 
										"			from 	itemcomposition " + 
										"			where 	compounditm = " + item.articleId +
										"			and		componentitm = itm.itm " +
										"			and		tbm = 'PA' " +
										"			) "
										: "";

	executeSql(	callBackModel.context.sql, 
				callBackModel.arraySuccessCB,
			 	callBackModel.sqlErrorCB);
	
	return callBackModel.resultArray;

}

sparePartModel.createSparePartsByWorkOrderAndItem = function (
		workOrder, item, articleComponents, task, salesReason, origin, doSummaryEntryOnly, priceRefTask, keepPrice, tarifMode, noBTCO) {
	kony.print("#### createSparePartsByWorkOrderAndItem START");
	kony.print("### workOrder: " + JSON.stringify(workOrder));
	kony.print("### item: " + JSON.stringify(item));
	kony.print("### articleComponents: " + JSON.stringify(articleComponents));
	kony.print("### salesReason: " + salesReason);
	kony.print("### origin: " + origin);
	kony.print("### doSummaryEntryOnly: " + doSummaryEntryOnly);
	
	callBackModel.resultArray = [];
	
	var valuesArray = [];
	
	if (validationModel.isNull(priceRefTask))
		priceRefTask = task;
	if (validationModel.isNull(keepPrice))
		keepPrice = false; 
	
	// For tasks of type 2 (tâche de prestation), register the task itself (and not its components)
	if (!validationModel.isNull(task) && !validationModel.isNull(task.type) && parseInt(task.type) == 2) {
		articleComponents = [{
			articleId : task.articleId,
			usualCode : task.usualCode,
			unitOfMeasureCode : task.unitOfMeasureCode,
			quantity : task.quantity,
			discount : task.discount
		}];
	}
	
	pricing.logging.inProgress = false;
	databaseModel.openDBExchange('Mise à jour des données en cours...');
	if (!validationModel.isNull(articleComponents)) {
		for (var i = 0; i < articleComponents.length; i++) {
			var sparePart = articleComponents[i];
			
			var tarrificationMode = null;
			if (origin == "sale"){
				tarrificationMode = "sale";
			} else if (origin == "plannedTask" || origin == "nonPlannedTask" || !validationModel.isNull(origin)) {
				var tarifArtId = (origin == "plannedTask" || origin == "nonPlannedTask") ? priceRefTask.articleId : sparePart.articleId;
				var tarifReason = !validationModel.isNull(priceRefTask) ? priceRefTask.nonCompletionReason : ((!validationModel.isNull(salesReason)) ? salesReason : null);
				tarrificationMode = !validationModel.isNull(tarifMode) ? tarifMode : pricing.computeTarifMode(workOrder, tarifArtId, origin, tarifReason, priceRefTask);
			}
			
			var price = null;
			if (keepPrice && !validationModel.isNull(sparePart.grossPrice)) {
				price = {
					UPC1 : (validationModel.isNull(sparePart.UPC1) ? sparePart.UPC1_MTHPR_pricingMethod : sparePart.UPC1),
					EUSE : sparePart.EUSE,
					price : sparePart.grossPrice,
					basicPrice : sparePart.basicPrice,
					pricingOrigin : sparePart.pricingOrigin
				}
			}
			else
				price = pricing.computePrice(sparePart.articleId, workOrder, tarrificationMode);
			
			if (sparePart.quantity == null) {
				sparePart.quantity = 1;
			}
			
			sparePart.workOrder = workOrder;
			sparePart.item = item;
			sparePart.task = task;
			sparePart.UPC1_MTHPR_pricingMethod = price.UPC1;
			sparePart.EUSE = price.EUSE;
			sparePart.UnitPriceESUNB = price.price;
			sparePart.PriceEBILL = price.price * sparePart.quantity;
			sparePart.warehouse = '     MAGTECH';
			sparePart.isBillable = !validationModel.isNull(price.basicPrice) ? 'O' : 'E';
			sparePart.pricingOrigin = price.pricingOrigin;
			
			var sparePartSummaryEntry = sparePartModel.findSparePartSummaryEntryBySparePart(sparePart, 'UNITECH');
			if (!validationModel.isNull(sparePartSummaryEntry)) {
				// Update entry in sparePartsSummary
				sparePartModel.updateSparePartSummaryEntryBySparePart(sparePartSummaryEntry, sparePart);
				} else if(noBTCO != true ){

				// Create entry in sparePartsSummary
				sparePartSummaryEntry = sparePartModel.createSparePartSummaryEntryBySparePart(sparePart);
			}
			
			// If the spartPart is not linked to an item (e.g. complementary recommendation)
			// the update of F56BTCO done above, suffices
			if ((validationModel.isNull(doSummaryEntryOnly) || !doSummaryEntryOnly) && noBTCO != true) {

				valuesArray[i] = {};	
				valuesArray[i].F56BTId = sparePart.workOrder.id;
				if (!validationModel.isNull(sparePart.task)) valuesArray[i].F56BTDTId = sparePart.task.id;
				if (!validationModel.isNull(sparePart.item)) valuesArray[i].CIBId = sparePart.item.id;
				valuesArray[i].F56BTCOId = sparePartSummaryEntry.id;
				valuesArray[i].UsualCodeLITM = sparePart.usualCode;
				valuesArray[i].EstimatedQtyUORG = sparePart.quantity;
				if (!validationModel.isNull(sparePart.unitOfMeasureCode)) valuesArray[i].UnitOfMeasureUM = sparePart.unitOfMeasureCode;
				valuesArray[i].WareHouseMCU = sparePart.warehouse;
				valuesArray[i].RealQtyTRQT = sparePart.quantity;
				valuesArray[i].TarificationMethodMTHPR = sparePart.UPC1_MTHPR_pricingMethod;
				valuesArray[i].EUSE = sparePart.EUSE;
				valuesArray[i].PRICINGORIGIN = sparePart.pricingOrigin;
				valuesArray[i].UnitPriceESUNB = sparePart.UnitPriceESUNB;
				valuesArray[i].PriceEBILL = sparePart.PriceEBILL;
				valuesArray[i].IsBillableBILL = sparePart.isBillable;
				valuesArray[i].DiscountTRDC = !validationModel.isNull(sparePart.discount) ? sparePart.discount : 0;
				if (!validationModel.isNull(salesReason)) valuesArray[i].SalesReasonAA05 = salesReason;
			}
		}
	}
	
	if (valuesArray.length > 0) {
		de.itgs.WorkOrders.SpareParts.createAll(valuesArray, callBackModel.arraySuccessCB, callBackModel.konyErrorCB, true);
	}
	databaseModel.closeDBExchange();
	kony.print("#### createSparePartsByWorkOrderAndItem END");
	
	pricing.logging.inProgress = false;
	if (app_parameters.debug.pricing_popup)
		popupModel.showPopError(pricing.logging.result);
	
	return callBackModel.resultArray;	  
}

sparePartModel.findSparePartSummaryEntryBySparePart = function (sparePart, source) {
	callBackModel.context.sql =
		"select id, " +
		" (CASE WHEN COALESCE(UORG,'NULL') == 'NULL' THEN 0 ELSE UORG END) estimatedQuantity, " +
		" (CASE WHEN COALESCE(TRQT,'NULL') == 'NULL' THEN 0 ELSE TRQT END) exactQuantity, " +
		" (CASE WHEN COALESCE(EBILL,'NULL') == 'NULL' THEN 0 ELSE EBILL END) billPrice, " +
		" (CASE WHEN COALESCE(TRDC,'NULL') == 'NULL' THEN 0 ELSE TRDC END) discount, " +
		" (CASE WHEN COALESCE(FUN2,'NULL') == 'NULL' THEN 0 ELSE FUN2 END) discountAmount, " +
		" CPIL usualCode, " +
		" ASN2 tariffAgreement, " +
		" MTHPR UPC1_MTHPR_pricingMethod, " +
		" EUSE EUSE " +
		"from f56btco " +
		"where CPIL = '" + sparePart.usualCode + "' " +
		" and COALESCE(ASN2,'NULL') = '" + (validationModel.isNull(sparePart.workOrder.tariffAgreement) ? 'NULL' : sparePart.workOrder.tariffAgreement) + "' " +
		" and COALESCE(MTHPR,'NULL') = '" + (validationModel.isNull(sparePart.UPC1_MTHPR_pricingMethod) ? 'NULL' : sparePart.UPC1_MTHPR_pricingMethod) + "' " +
		" and COALESCE(EUSE,'NULL') = '" + (validationModel.isNull(sparePart.EUSE) ? 'NULL' : sparePart.EUSE) + "' " +
		" and DOCO = '" + sparePart.workOrder.doco + "' ";
									
	callBackModel.context.sql += (!validationModel.isNull(source)) ? "and 	SOURCE = '" + source + "' " : "";
	callBackModel.context.sql += "limit 1 ";

	callBackModel.result = undefined;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

sparePartModel.findSparePartSummaryEntryById = function (id, source) {
	callBackModel.result = undefined;
	
	if (!validationModel.isNull(id)) {
		callBackModel.context.sql =
			"select id, " +
			" (CASE WHEN COALESCE(UORG,'NULL') == 'NULL' THEN 0 ELSE UORG END) estimatedQuantity, " +
			" (CASE WHEN COALESCE(TRQT,'NULL') == 'NULL' THEN 0 ELSE TRQT END) exactQuantity, " +
			" (CASE WHEN COALESCE(EBILL,'NULL') == 'NULL' THEN 0 ELSE EBILL END) billPrice, " +
			" (CASE WHEN COALESCE(TRDC,'NULL') == 'NULL' THEN 0 ELSE TRDC END) discount, " +
			" (CASE WHEN COALESCE(FUN2,'NULL') == 'NULL' THEN 0 ELSE FUN2 END) discountAmount, " +
			" CPIL usualCode, " +
			" ASN2 tariffAgreement, " +
			" MTHPR UPC1_MTHPR_pricingMethod, " +
			" EUSE EUSE " +
			"from f56btco " +
			"where id = " + id + " ";
		callBackModel.context.sql += (!validationModel.isNull(source)) ? "and 	SOURCE = '" + source + "' " : "";
		callBackModel.context.sql += "limit 1 ";

		executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	}
	
	return callBackModel.result;
}

sparePartModel.findSparePartSummaryEntriesByWorkOrder = function (workOrder, source, hasDiscount, discountTariffs) {
	callBackModel.resultArray = [];
	
	callBackModel.context.sql =
		"select id, " +
		" (CASE WHEN COALESCE(UORG, 'NULL') == 'NULL' THEN 0 ELSE UORG END) estimatedQuantity," +
		" (CASE WHEN COALESCE(TRQT, 'NULL') == 'NULL' THEN 0 ELSE TRQT END) exactQuantity," +
		" (CASE WHEN COALESCE(EBILL, 'NULL') == 'NULL' THEN 0 ELSE EBILL END) billPrice," +
		" (CASE WHEN COALESCE(TRDC, 'NULL') == 'NULL' THEN 0 ELSE TRDC END) discount," +
		" (CASE WHEN COALESCE(FUN2, 'NULL') == 'NULL' THEN 0 ELSE FUN2 END) discountAmount," +
		" CPIL usualCode, " +
		" ASN2 tariffAgreement, " +
		" MTHPR UPC1_MTHPR_pricingMethod, " +
		" EUSE, " +
		" pricingOrigin\n" +
		"from f56btco\n" +
		"where f56btid = " + workOrder.id + " ";
	callBackModel.context.sql += (!validationModel.isNull(source)) ? "and SOURCE = '" + source + "' " : "";
	callBackModel.context.sql += (!validationModel.isNull(hasDiscount) && hasDiscount) ? "and coalesce(TRDC, 0) < 0 " : "";
	
	if (!validationModel.isNull(discountTariffs)) {
		for (var i = 0; i < discountTariffs.length; i ++) {
			if (i == 0) callBackModel.context.sql += " and (1 = 2 ";
			callBackModel.context.sql += "or (EUSE = '" + discountTariffs[i].EUSE + "' and MTHPR = '" + discountTariffs[i].UPC1 + "') ";
			if (i+1 == discountTariffs.length) callBackModel.context.sql += ")";
		}
	}

	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

sparePartModel.createSparePartSummaryEntryBySparePart = function (sparePart) {
	callBackModel.result = undefined;
	
	var valuesArray = [];		
	valuesArray[0] = {};
	valuesArray[0].pricingOrigin = sparePart.pricingOrigin;
	valuesArray[0].DOCO = sparePart.workOrder.doco;
	valuesArray[0].F56BTId = sparePart.workOrder.id;
	valuesArray[0].DCTO = sparePart.workOrder.dcto;
	valuesArray[0].CPIL = sparePart.usualCode;
	valuesArray[0].UORG = sparePart.quantity;
	if (!validationModel.isNull(sparePart.unitOfMeasureCode)) valuesArray[0].UM = sparePart.unitOfMeasureCode;
	valuesArray[0].MCU = sparePart.warehouse;
	valuesArray[0].TRQT = sparePart.quantity;
	if (!validationModel.isNull(sparePart.workOrder.tariffAgreement)) valuesArray[0].ASN2 = sparePart.workOrder.tariffAgreement;
	valuesArray[0].MTHPR = sparePart.UPC1_MTHPR_pricingMethod;
	valuesArray[0].EUSE = sparePart.EUSE;
	valuesArray[0].BILL = sparePart.isBillable;
	valuesArray[0].ESUNB = !validationModel.isNull(sparePart.UnitPriceESUNB) ? sparePart.UnitPriceESUNB : 0;
	valuesArray[0].EBILL = !validationModel.isNull(sparePart.PriceEBILL) ? sparePart.PriceEBILL : 0;
	valuesArray[0].AN8 = sparePart.workOrder.customerAN8;
	valuesArray[0].SOURCE = 'UNITECH';
	valuesArray[0].TRDC = !validationModel.isNull(sparePart.discount) ? sparePart.discount : 0;
	valuesArray[0].FUN2 = (valuesArray[0].EBILL * valuesArray[0].TRDC / 100).toFixed(2);
	valuesArray[0].HasChangedFlag = true;
	valuesArray[0].markForUpload = true;
	
	de.itgs.WorkOrders.F56BTCO.createAll(valuesArray, callBackModel.successCB, callBackModel.konyErrorCB, true);
	
	if (!validationModel.isNull(callBackModel.result.id) && (valuesArray[0].UORG <= 0)) {
		var msg = "Attention : une quantité nulle ou négative a été proposée pour cette ligne - veuillez contacter le support avec les informations suivantes : ";
		var createdEntry = sparePartModel.findSparePartSummaryEntryById(callBackModel.result.id);
		sparePartModel.checkSparePartSummaryUpdate(createdEntry, msg, "", true);
	}	
	else if (!validationModel.isNull(callBackModel.result.id) && app_parameters.debug.spSummary_Check) {
		var createdEntry = sparePartModel.findSparePartSummaryEntryById(callBackModel.result.id);
		sparePartModel.checkSparePartSummaryUpdate(createdEntry, "Début mise à jour par sparepart");
	}
	
	return callBackModel.result;		  
}

sparePartModel.removeTaskRelationshipsForSpareParts = function (spareParts) {
	var sparePartIds = [];
	for (var i = 0; i < spareParts.length; i++) {
		if (sparePartIds.indexOf(spareParts[i].id) == -1) {
			sparePartIds.push(spareParts[i].id);
		}
	}
	
	var inputArray = [];
	inputArray[0] = {};
	inputArray[0].changeSet = {};
	inputArray[0].changeSet.F56BTDTId = null;
	inputArray[0].whereClause = "where id in (" + sparePartIds.join(",") + ")";
	
	de.itgs.WorkOrders.SpareParts.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB);		  
}

sparePartModel.updateSparePartSummaryEntryBySparePart = function (sparePartSummaryEntry, sparePart) {
	kony.print("#### updateSparePartSummaryEntryBySparePart START");
	kony.print("### sparePartSummaryEntry: " + JSON.stringify(sparePartSummaryEntry));
	kony.print("### sparePart: " + JSON.stringify(sparePart));
	
	if (app_parameters.debug.spSummary_Check)
		sparePartModel.checkSparePartSummaryUpdate(sparePartSummaryEntry, "Début mise à jour par sparepart");
	
	var inputArray = [];
	inputArray[0] = {};
	inputArray[0].changeSet = {};
	inputArray[0].changeSet.HasChangedFlag = true;
	inputArray[0].changeSet.UORG = sparePartSummaryEntry.estimatedQuantity + sparePart.quantity;
	inputArray[0].changeSet.TRQT = sparePartSummaryEntry.exactQuantity + sparePart.quantity;
	if (!validationModel.isNull(sparePart.UnitPriceESUNB)) {
		inputArray[0].changeSet.ESUNB = sparePart.UnitPriceESUNB;
		inputArray[0].changeSet.EBILL = (sparePartSummaryEntry.exactQuantity + sparePart.quantity) * sparePart.UnitPriceESUNB;
	} else {
		inputArray[0].changeSet.EBILL = (sparePartSummaryEntry.exactQuantity + sparePart.quantity) * sparePartSummaryEntry.billPrice;
	}
	inputArray[0].changeSet.TRDC = !validationModel.isNull(sparePartSummaryEntry.discount) ? sparePartSummaryEntry.discount : 0;
	inputArray[0].changeSet.FUN2 = (inputArray[0].changeSet.EBILL * sparePartSummaryEntry.discount / 100).toFixed(2);
	inputArray[0].whereClause = "where id = " + sparePartSummaryEntry.id;
	
	de.itgs.WorkOrders.F56BTCO.updateAll(inputArray, callBackModel.successCB, callBackModel.konyErrorCB);
	kony.print("#### updateSparePartSummaryEntryBySparePart END");
	
	if (!validationModel.isNull(callBackModel.result.id) && (inputArray[0].changeSet.UORG <= 0)) {
		var msg = "Attention : une quantité nulle ou négative a été proposée pour cette ligne - veuillez contacter le support avec les informations suivantes : ";
		var updatedEntry = sparePartModel.findSparePartSummaryEntryById(callBackModel.result.id);
		sparePartModel.checkSparePartSummaryUpdate(updatedEntry, msg, "", true);
	}	
	
	var result = sparePartModel.findSparePartSummaryEntryById(sparePartSummaryEntry.id);
	if (app_parameters.debug.spSummary_Check)
		sparePartModel.checkSparePartSummaryUpdate(result, "Début mise à jour par sparepart");
}

sparePartModel.updateSparePartsDiscountByWorkOrder = function (workOrder, positiveDiscount, discountTariffs) {
	kony.print("#### updateSparePartsDiscountByWorkOrder START");
	kony.print("### workOrder: " + JSON.stringify(workOrder));
	kony.print("### discountTariffs: " + JSON.stringify(discountTariffs));
	kony.print("### positiveDiscount: " + positiveDiscount);
	
	function updateSparePartsDiscountByWorkOrderCB(l_result) {
		sparePartModel.updateSparePartSummaryDiscountByWorkOrder(workOrder, positiveDiscount, discountTariffs);
	}
	
	var inputArray = [];
	inputArray[0] = {};
	inputArray[0].changeSet = {};
	inputArray[0].changeSet.DiscountTRDC = (discountTariffs.length == 0) ? 0 : positiveDiscount;
	inputArray[0].whereClause = "where F56BTId = " + workOrder.id + " and pricingOrigin in ('" + pricing.allowedOriginForDiscount().join("', '") + "')";
	
	for (var i = 0; i < discountTariffs.length; i ++) {
		if (i == 0)
			inputArray[0].whereClause += " and (1 = 2 ";
		
		inputArray[0].whereClause += "or (EUSE = '" + discountTariffs[i].EUSE + "' and TarificationMethodMTHPR = '" + discountTariffs[i].UPC1 + "') ";
		
		if (i+1 == discountTariffs.length)
			inputArray[0].whereClause += ")";
	}
	
	de.itgs.WorkOrders.SpareParts.updateAll(inputArray, updateSparePartsDiscountByWorkOrderCB, callBackModel.konyErrorCB);
	kony.print("#### updateSparePartsDiscountByWorkOrder END");
}

sparePartModel.updateSparePartSummaryDiscountByWorkOrder = function (workOrder, positiveDiscount, discountTariffs) {
	kony.print("#### updateSparePartSummaryDiscountByWorkOrder START");
	kony.print("### workOrder: " + JSON.stringify(workOrder));
	kony.print("### discountTariffs: " + JSON.stringify(discountTariffs));
	kony.print("### positiveDiscount: " + positiveDiscount);
	
	var sparePartSummaryEntries = sparePartModel.findSparePartSummaryEntriesByWorkOrder(workOrder, 'UNITECH', undefined, discountTariffs);
	
	if (app_parameters.debug.spSummary_Check){
		for(var i = 0; i < sparePartSummaryEntries.length; i++) {
			sparePartModel.checkSparePartSummaryUpdate(sparePartSummaryEntries[i], "Mise à jour discount");
		}
	}
	
	var inputArray = [];
	for (var i = 0; i < sparePartSummaryEntries.length; i ++) {
		if (pricing.allowedOriginForDiscount().indexOf(sparePartSummaryEntries[i].pricingOrigin) >= 0) {
			var line = {};
			line.changeSet = {};
			line.changeSet.HasChangedFlag = true;
			line.changeSet.TRDC = -positiveDiscount;
			line.changeSet.FUN2 = (sparePartSummaryEntries[i].billPrice * positiveDiscount / 100).toFixed(2);
			line.whereClause = "where id = " + sparePartSummaryEntries[i].id;
			inputArray.push(line);
		}
	}
	
	de.itgs.WorkOrders.F56BTCO.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB);
	kony.print("#### updateSparePartSummaryDiscountByWorkOrder END");
	
	sparePartSummaryEntries = sparePartModel.findSparePartSummaryEntriesByWorkOrder(workOrder, 'UNITECH', undefined, discountTariffs);
	
	if (app_parameters.debug.spSummary_Check) {
		for (var i = 0; i < sparePartSummaryEntries.length; i++) {
			sparePartModel.checkSparePartSummaryUpdate(sparePartSummaryEntries[i], "discount est mis à jour");
		}
	}
}

sparePartModel.updateSparePartSummaryEntryByChubbTask = function (task, quantity, workOrder) {
	var components = articleModel.findArticleComponentsByTasks([task], 1);
	for (var j = 0; j <components.length; j++) {
		var compQuantity = components[j].quantity;
		if (validationModel.isNull(compQuantity))
			compQuantity = 1;
		components[j].quantity = compQuantity * quantity;
	}
	// fourth step : for task and task composition, initiate 'createsparepartsbyworkorderanditem'
	sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, null, components, task, undefined, 'plannedTask', true);
}

sparePartModel.makeSparePartsSummaryForWorkorder = function (wo, wc) {
	callBackModel.context.sql =
		"select sum(UORG) count, " +
		" sum(EBILL) [price], " +
		" sum(EBILL + EBILL * TRDC / 100) [discountPrice], " +
		" i.description1 ||  CASE WHEN i.description2 = 'NULL' THEN '' ELSE i.description2 END description, " +
		" i.usualcode code " +
		"from f56btco co " +
		"left join item i on i.usualcode = co.cpil " +
		"where co.doco = " + wo.doco + " ";
	
	if (!validationModel.isNull(wc)) 
		callBackModel.context.sql += "and 	( " + wc + " ) ";
		
	callBackModel.context.sql += "group by co.CPIL ORDER BY description";
	
	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

sparePartModel.checkSparePartsConsistencyByWorkOrder = function(wo, cibid) {
	
	callBackModel.resultArray = new Array();
	
	var request =		
			"SELECT sp.F56BTId, " +
			"sp.UsualCodeLITM, " + 
			"sp.F56BTCOId, " +
			"Sum(sp.RealQtyTRQT) sumTRQT, " + 
			"co.UORG, " +
			"Sum(sp.RealQtyTRQT)-co.UORG diff " +
			"FROM F56BT bt, ";
		
	if(!validationModel.isNull(cibid)) {
		request +=
			"			F56BTDT dt, ";	
	}
	
	request += 
			"			F56BTCO co, " +
			"			SpareParts sp " +
			"WHERE		co.id=sp.F56BTCOId " +
			"AND		sp.F56BTId=bt.id " +
			"AND		bt.TYPS='V' " +
			"AND		(bt.WR20='001' OR bt.WR20='003') ";
		
	if(!validationModel.isNull(cibid)) {
		request +=
			"AND		bt.id = dt.F56BTId " +
			"AND		sp.F56BTDTId = dt.id " +
			"AND		dt.cibid = " + cibid + " ";
	}
	
	request +=
			"AND		bt.id = " + wo.id + " " +
			"GROUP BY	sp.F56BTId, sp.UsualCodeLITM, sp.F56BTCOId, co.UORG " +
			"HAVING		Sum(sp.RealQtyTRQT)-co.UORG<>0 " +
			"ORDER BY	sp.F56BTId, sp.UsualCodeLITM, sp.F56BTCOId ";
		
	callBackModel.context.sql = request; 
	
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	
	return callBackModel.resultArray;
};

sparePartModel.isWorkOrderSPSummaryConsistent = function(workOrder, cibid) {
	return (sparePartModel.checkSparePartsConsistencyByWorkOrder(workOrder, cibid).length == 0);	
};

sparePartModel.checkSparePartSummaryUpdate = function(summaryEntry, prefix, suffix, addDetails) {

	if (validationModel.isNull(prefix)) prefix = '';
	if (validationModel.isNull(suffix)) suffix = '';
	if (validationModel.isNull(addDetails)) addDetails = false;
	
	var msg = 	" -- F56BTCO Check --\n" + prefix + " " +
				"F56BTCO line id : " + summaryEntry.id + ",\n" +
				"task : " + summaryEntry.usualCode + ",\n" +
				"TRQT : " + summaryEntry.exactQuantity + ",\n" +
				"UORG : " + summaryEntry.estimatedQuantity;
				
	if (addDetails) msg += ",\n" +
				"ASN2 : " + summaryEntry.tariffAgreement + ",\n" +
				"MTHPR : " + summaryEntry.UPC1_MTHPR_pricingMethod + ",\n" +
				"EUSE : " + summaryEntry.EUSE;
	
	msg += "\n\n" + suffix + " -- ";
	popupModel.showPopError(msg);
};
