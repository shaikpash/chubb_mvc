itemModel = {};
itemModel.context = {
	sql: null
};

itemModel.findItemBaseAttribute = function(item, characteristics) {
	var characteristicMapping = {
		"fabricationDate" : "FBDUMSDJ",
		"productionDate" : "SVDB",
		"batchNumber" : "LOTN"
	};
	
	var sqlValues = new Array();
	for(var i = 0;i < characteristics.length;i++) {
		sqlValues.push(characteristicMapping[characteristics[i]] + " " + characteristics[i]);
	}
	
	callBackModel.result = undefined;
	callBackModel.context.sql = "select	" + sqlValues.join(",") + " from CustomerInstalledBase where id = " + item.id;

	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

itemModel.findItemAttributeByWhereClause = function(characteristics, wc) {
	var characteristicMapping = {
		"usualCode" : "usualcode",
		"articleId" : "ITM",
		"name" : "description1",
		"type" : "PRP0",
		"subFamily" : "SRP2",
		"measurementUnit" : "measurementUnit"
	};
	
	var sqlValues = new Array();
	for(var i = 0;i < characteristics.length;i++) {
		sqlValues.push(characteristicMapping[characteristics[i]] + " " + characteristics[i]);
	}
	
	callBackModel.result = undefined;
	callBackModel.context.sql = 
		"select	" + sqlValues.join(", ") + " " +
		"from 	Item " +
		"where	" + wc + " ";

	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

itemModel.filterItemsByArticleCharacteristics = function (items, charNames, charValues, operators, isNumeric) {
	var filteredItems = items;
	
	if (!validationModel.isNull(items) && !validationModel.isNull(charNames)) {
		// Loop over all characteristics
		for (var i = 0 ; i < charNames.length; i++) {
			var charName = charNames[i];
			
			// Find all items for which the article 
			// characteristic is not yet defined
			var articleIds = [];
			for (var j = 0 ; j < items.length; j++) {
				var item = items[j];
				if (validationModel.isNull(item.characteristics)) {
					item.characteristics = {};
				}
				if (!item.characteristics.hasOwnProperty(charName) && articleIds.indexOf(item.articleId) == -1) {
					articleIds.push(item.articleId);
				}
			}
			
			// Store the article characteristic on the
			// item so you don't have to search it again later
			if (articleIds.length > 0) {
				var articleCharacteric = articleModel.findArticleCharacteristicByNameAndWorkOrder(charName, undefined, undefined, undefined, articleIds);
				for (var j = 0; j < articleCharacteric.values.length; j ++) {
					var articleCharactericValue = articleCharacteric.values[j];
					for (var k = 0 ; k < items.length; k++) {
						var item = items[k];
						if (articleCharactericValue.articleIds.indexOf(item.articleId) > -1) {
							item.characteristics[charName] = articleCharactericValue;
						}
					}
				}
			}
		}
		
		// Filter the items
		filteredItems = items.filter(function(item) {
			var itemMatch = true;
			for (var i = 0 ; i < charNames.length; i++) {
				var charName = charNames[i];
				var charValue = charValues[i];
				if (operators[i] == '=') itemMatch = (item.characteristics[charName] == charValue);
				else if (operators[i] == '>' && isNumeric[i]) itemMatch = (item.characteristics[charName] > charValue);
				else if (operators[i] == '<' && isNumeric[i]) itemMatch = (item.characteristics[charName] < charValue);
				else if (operators[i] == '>=' && isNumeric[i]) itemMatch = (item.characteristics[charName] >= charValue);
				else if (operators[i] == '<=' && isNumeric[i]) itemMatch = (item.characteristics[charName] <= charValue);
				else itemMatch = false;
				if (!itemMatch) break;
			}
			return itemMatch;
		});
	}

	return filteredItems;
}

itemModel.findItemsByWhereClauseAndArticleCharacteristics = function (whereClause, charNames, charValues, operators, isNumeric, 
																	  excludeIds, sortOrder, includeIds, allocationSessionId, 
																	  preWorkOrderState, itemsWitchCharacteristicsToMaintain) {

	// Get all items (not filtered by characteristics)
	var items = itemModel.findItemsByWhereClauseAndSortOrder(whereClause, sortOrder, false,
															 includeIds, false, allocationSessionId,
															 preWorkOrderState);
	
	// Exclude ids if any
	if (!validationModel.isNull(excludeIds) && excludeIds.length > 0) {
		items = items.filter(function(item) {return excludeIds.indexOf(item.id) == -1;});
	}
	
	// Restore the item characteristics previously retrieved if any
	if (!validationModel.isNull(itemsWitchCharacteristicsToMaintain) && itemsWitchCharacteristicsToMaintain.length > 0) {
		items = items.map(function(item) {
			for (var i = 0 ; i < itemsWitchCharacteristicsToMaintain.length; i++) {
				if (itemsWitchCharacteristicsToMaintain[i].id == item.id && 
				    itemsWitchCharacteristicsToMaintain[i].allocationId == item.allocationId) {
					item.characteristics = itemsWitchCharacteristicsToMaintain[i].characteristics;
					break;
				}
			}
			return item;
		});
	}
	
	// Filter the items by characteristics
	items = itemModel.filterItemsByArticleCharacteristics(items, charNames, charValues, operators, isNumeric);
	
	return items;
}

itemModel.findItemsByWhereClauseAndSortOrder = function (whereClause, sortOrder, groupByContract, includeIds, groupByUsualCode, 
														 allocationSessionId, preWorkOrderState, includeAllocationIds, groupByTopology,
														 topologyDepth, limit, offset, rowCountOnly) {
	callBackModel.resultArray = [];

	if (!validationModel.isNull(includeIds)) includeIds = includeIds.filter(function(id) {return !validationModel.isNull(id);});
	if (!validationModel.isNull(includeAllocationIds)) includeAllocationIds = includeAllocationIds.filter(function(id) {return !validationModel.isNull(id);});

	var workOrderDoc = validationModel.isStringEmpty(workOrder.DOC) ? -1 : workOrder.DOC;
	var workOrderLnid = validationModel.isStringEmpty(workOrder.LNID) ? -1 : workOrder.LNID;
	var workOrderCOCH = (validationModel.isNull(workOrder.COCH) || workOrder.COCH.length == 0) ? 'NULL' : workOrder.COCH;
	var placementClause 	  = " (CASE WHEN COALESCE(cib.Y56LIEU,'NULL') == 'NULL' THEN '' ELSE cib.Y56LIEU END) ";
	var floorClause 	  	  = " (CASE WHEN COALESCE(cib.Y56ETAG,'NULL') == 'NULL' THEN '' ELSE cib.Y56ETAG END) ";
	var locationClause 	      = " (CASE WHEN COALESCE(cib.Y56EMPLA,'NULL') == 'NULL' THEN '' ELSE cib.Y56EMPLA END) ";
	var zoneClause 	  		  = " (CASE WHEN COALESCE(cib.Y56ZONL,'NULL') == 'NULL' THEN '' ELSE cib.Y56ZONL END) ";
	
	callBackModel.context.sql =
		"select \n" +
		" cib.id id, \n" +
//		" 'NULL' allocationId," +
		" i.description1 ||  CASE WHEN i.description2 = 'NULL' THEN '' ELSE i.description2 END name," + 
		" i.usualcode usualCode," + 
		" i.srp2 subFamily," +
		" i.PRP0 type, \n" +
      	" cib.Y56ZONL ZONLA, \n" +
		" (SELECT DL01 FROM UDC WHERE SY = '41' AND RT = 'S2' AND KY = i.SRP2) subFamilyName, \n" +
		" (CASE WHEN COALESCE(cib.LOTN,'NULL') == 'NULL' THEN '' ELSE cib.LOTN END) batchNumber, \n" +
		" (CASE WHEN COALESCE(cib.SVDB,'NULL') == 'NULL' THEN '' ELSE cib.SVDB END) productionDate, \n" +
		placementClause + " placement, \n" +
		floorClause + " floor, \n" +
		locationClause + " location, \n" +
		zoneClause + " zone, \n" +
		zoneClause + " customerNumber, \n" +
		" cib.Y56INDLA status," +
		" cib.ITM articleId," +
		" cib.N001 jdeId," +
		" cib.ETAT statusReason," +
		" cib.ETATCIBCId statusReasonId, " +
		" cib.UNItecStatus statusKony, \n" +
		" (CASE WHEN COALESCE(cib.DOCO,'NULL') == 'NULL' THEN '' ELSE cib.DOCO END) DOCO, \n" +
		" (CASE WHEN COALESCE(cib.COCH,'NULL') == 'NULL' THEN '' ELSE cib.COCH END) COCH, \n" +
		" (CASE WHEN COALESCE(cib.LNID,'NULL') == 'NULL' THEN '' ELSE cib.LNID END) LNID, \n" +
		" cib.NUMB equipmentNumber, \n" +
		" c.id contractId, \n" +
		" ('Contrat ' || (CASE WHEN cib.doco = " + workOrderDoc + " AND cib.LNID = " + workOrderLnid + " THEN 'actuel ' ELSE '' END) || " + 
			  (validationModel.isStringEmpty(workOrder.DOC) ? "" : workOrder.DOC + " || ") +
			" (CASE WHEN COALESCE(" + workOrderCOCH + ",'NULL') != 'NULL' THEN '_' || " + workOrderCOCH + " ELSE '' END)) contractName \n" +
		"from 		CustomerInstalledBase cib \n" +
		"join		Item i \n" +
		"on			i.ITM = cib.ITM \n" +
		"left join	contract c \n" +
		"on			c.doco = cib.doco \n" +
		"and		c.lnid = cib.lnid \n" +
		"and		c.coch = cib.coch " +
		"and 		c.numb = cib.numb \n" +
		"where		1 = 1 \n" +
		((!validationModel.isNull(includeIds) && includeIds.length > 0) ?
			"and 		cib.id in (" + includeIds.join(",") + ") \n" : (
		(!validationModel.isNull(includeIds) && includeIds.length == 0) ?
			"and 		1 != 1 " : ""
		)) +
		((!validationModel.isNull(whereClause) && whereClause.length > 0) ?
			" " + whereClause + " \n" : "") +
		((!validationModel.isNull(sortOrder)) ?
			" " + sortOrder.replace("cib\.") + " \n" : "");
	
	callBackModel.context.sql = (!validationModel.isNull(groupByContract) && groupByContract) ?
								"select contractId, \n" + 
								"		contractName, \n" +
								"		subFamily, \n" +
								"		subFamilyName, \n" +
								"		DOCO, \n" +
								"		COCH, \n" +
								"		LNID, \n" +
								"		equipmentNumber, \n" +
								"		count(*) quantity, \n" +
								"		group_concat(id) itemIds, \n" +
//								"		group_concat(allocationId) allocationIds, \n" +
								"		group_concat(articleId) articleIds \n" +
								"from 	( " + callBackModel.context.sql + " ) \n" + 
								"group by contractId, subFamily \n" +
								"order by contractId, subFamily \n" :
								callBackModel.context.sql;
								
	callBackModel.context.sql = (!validationModel.isNull(groupByUsualCode) && groupByUsualCode) ?
								"select usualCode, \n" +
								"		name, \n" +
								"		count(*) quantity, \n" +
								"		group_concat(id) itemIds \n" +
//								"		group_concat(allocationId) allocationIds \n" +
								"from 	( " + callBackModel.context.sql + " ) \n" + 
								"group by usualCode \n" +
								"order by usualCode \n" +
								((!validationModel.isNull(limit) && !validationModel.isNull(offset)) ? "limit " + limit + " offset " + offset : "") :
								callBackModel.context.sql;
	
	callBackModel.context.sql = (!validationModel.isNull(groupByTopology) && groupByTopology) ?
								"select location, \n" +
								((validationModel.isNull(topologyDepth) || topologyDepth > 1) ? " floor, \n" : "") +
								((validationModel.isNull(topologyDepth) || topologyDepth > 2) ? " placement, \n" : "") +
								((validationModel.isNull(topologyDepth) || topologyDepth > 3) ? " zone, \n" : "") +
								((validationModel.isNull(topologyDepth) || topologyDepth > 4) ? " usualCode, \n" : "") +
								"		name, \n" +
								"		count(*) quantity, \n" +
								"		group_concat(id) itemIds \n" +
//								"		group_concat(allocationId) allocationIds \n" +
								"from 	( " + callBackModel.context.sql + " ) \n" + 
								"group by location \n" + 
								((validationModel.isNull(topologyDepth) || topologyDepth > 1) ? ", floor \n" : "") +
								((validationModel.isNull(topologyDepth) || topologyDepth > 2) ? ", placement \n" : "") +
								((validationModel.isNull(topologyDepth) || topologyDepth > 3) ? ", zone \n" : "") +
								((validationModel.isNull(topologyDepth) || topologyDepth > 4) ? ", usualCode \n" : "") +
								"order by location \n" +
								((validationModel.isNull(topologyDepth) || topologyDepth > 1) ? ", floor \n" : "") +
								((validationModel.isNull(topologyDepth) || topologyDepth > 2) ? ", placement \n" : "") +
								((validationModel.isNull(topologyDepth) || topologyDepth > 3) ? ", zone \n" : "") +
								((validationModel.isNull(topologyDepth) || topologyDepth > 4) ? ", usualCode \n" : "") +
								((!validationModel.isNull(limit) && !validationModel.isNull(offset)) ? "limit " + limit + " offset " + offset : "") :
								callBackModel.context.sql;
	
	callBackModel.context.sql = (!validationModel.isNull(rowCountOnly) && rowCountOnly) ?
								"select count(1) rowCount \n" +
								"from 	( " + callBackModel.context.sql + " ) " :
								callBackModel.context.sql;
						
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

itemModel.findItemStatusReferenceCodeByStatusReason = function (statusReason) {

	callBackModel.result = null;
	
	callBackModel.context.sql = 
		"select	distinct SPHD value " +
		"from	UDC " +
		"where	SY = '56' " +
		"and 	RT = 'UE' " +
		"and	KY = '" + statusReason + "' " +
		"limit	1 ";
		
	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.result;	
}

itemModel.findItemStatusReasonsByWorkOrderAndItem = function (workOrder, item, itemStatus) {
	callBackModel.resultArray = [];
	callBackModel.context.sql =
		"select	distinct ((CASE WHEN COALESCE (udc.DL01,'NULL') == 'NULL' THEN '' ELSE udc.DL01 END) || " + 
		"		(CASE WHEN COALESCE (udc.DL02,'NULL') == 'NULL' THEN '' ELSE udc.DL02 END)) name, " +
		"		udc.SPHD referenceCode, " +
		"		udc.KY code, " +
		"		prm.RMK3 characteristicCode " +
		"from	f56prm prm, " +
		"		udc " +
		"where	prm.SDB = 'KONI' " +
		"and	prm.CLS = 'Z' || (select WR01 from f56bt where doco = " + workOrder.doco + " and f56bt.ANP = " + login.user.AN8 + ") " +
		"and	udc.sy = '56' " +
		"and	udc.rt = 'UE' " +
		"and	udc.ky = prm.RMK " +
		"and	prm.DYUD = " + itemStatus.priority + " " +
		"and	prm.RMK2 = '" + itemStatus.code + "' " +
		"order by AMTU ";
								
		  
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

itemModel.getItemTaskMotives = function(doco, itemId) {
	callBackModel.resultArray = new Array();
	var motives = new Array();
	
	callBackModel.context.sql = 
		"select	distinct AA05 " +
		"from	F56BTDT " +
		"where	cibid = " + itemId + " " +
		"and	doco = " + doco + " " +
		"and	CK01 = 'N' ";
	
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	
	for(var i = 0; i < callBackModel.resultArray.length; i++) {
		motives.push(callBackModel.resultArray[i].AA05);
	}
	
	return motives;
};

itemModel.findItemStatusByWorkOrderAndItem = function (workOrder, item) {
	
	var taskMotives = itemModel.getItemTaskMotives(workOrder.doco, item.id);
	var strMotives = taskMotives.length > 0 ? taskMotives.join("','") : "NULL";

	callBackModel.result = undefined;
	callBackModel.context.sql =
		"select	distinct (select DL01 from UDC where sy = '56' and rt = 'SB' and KY = prm.RMK2) name, " +
		"		prm.RMK2 code, " +
		"		(CASE WHEN (	select 	count(jde.KY) " + 
		"				from 	UDC jde, " + 
		"						UDC udc " + 
		"				where 	udc.sy = '56' " + 
		"				and 	udc.rt = 'SB' " + 
		"				and 	udc.KY = prm.RMK2 " +
		"				and		udc.SPHD = jde.KY " +
		"				and		jde.sy = '56' " +
		"				and		jde.rt = 'SA' " +
		"				and		jde.sphd = 'C') > 0 THEN 1 ELSE 0 END) hasStatusReasonCharacteristic, " +
		"		(		select 	jde.KY " + 
		"				from 	UDC jde, " + 
		"						UDC udc " + 
		"				where 	udc.sy = '56' " + 
		"				and 	udc.rt = 'SB' " + 
		"				and 	udc.KY = prm.RMK2 " +
		"				and		udc.SPHD = jde.KY " +
		"				and		jde.sy = '56' " +
		"				and		jde.rt = 'SA') jdeCode, " +
		"		prm.DYUD priority " +
		"from	f56prm prm " +
		"where	prm.SDB = 'KONI' " + 
		"and	prm.CLS = 'Z' || (select WR01 from f56bt where doco = " + workOrder.doco + " and f56bt.ANP = " + login.user.AN8 + ") " +
		"and	prm.KY in ('" + strMotives + "') " + 
		"order by prm.DYUD, AMTU " +
		"limit 1";
		  
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

itemModel.findStatusByWorkOrderAndStatusCode = function(workOrder, statusCode) {
	callBackModel.result = undefined;
	callBackModel.context.sql =
		"select	distinct (select DL01 from UDC where sy = '56' and rt = 'SB' and KY = prm.RMK2) name, " +
		"		prm.RMK2 code, " +
		"		(CASE WHEN (	select 	count(jde.KY) " + 
		"				from 	UDC jde, " + 
		"						UDC udc " + 
		"				where 	udc.sy = '56' " + 
		"				and 	udc.rt = 'SB' " + 
		"				and 	udc.KY = prm.RMK2 " +
		"				and		udc.SPHD = jde.KY " +
		"				and		jde.sy = '56' " +
		"				and		jde.rt = 'SA' " +
		"				and		jde.sphd = 'C') > 0 THEN 1 ELSE 0 END) hasStatusReasonCharacteristic, " +
		"		(		select 	jde.KY " + 
		"				from 	UDC jde, " + 
		"						UDC udc " + 
		"				where 	udc.sy = '56' " + 
		"				and 	udc.rt = 'SB' " + 
		"				and 	udc.KY = prm.RMK2 " +
		"				and		udc.SPHD = jde.KY " +
		"				and		jde.sy = '56' " +
		"				and		jde.rt = 'SA') jdeCode, " +
		"		prm.DYUD priority " +
		"from	f56prm prm " +
		"where	prm.SDB = 'KONI' " + 
		"and	prm.CLS = 'Z' || (select WR01 from f56bt where doco = " + workOrder.doco + " and f56bt.ANP = " + login.user.AN8 + ") " +
		"and	prm.RMK2 = '" + statusCode + "' " +
		"limit 1";
		  
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

itemModel.findItemByBatchNumber = function (batchNumber, workOrder) {
	var items = itemModel.findItemsByWhereClauseAndSortOrder(" and cib.LOTN = '" + batchNumber + "' and not (prp0 = 'D' and y56INDLA = 'D') ");
	
	// If multiple items are found, return the (first) one with matches the BT contract
	if (items.length > 1 && !validationModel.isNull(workOrder)) {
		for (var i = 0; i < items.length; i ++) {
			if (items[i].DOCO == workOrder.DOC && items[i].LNID == workOrder.LNID) {
				return items[i];
			}
		}
	} else if (items.length == 1) return items[0];
	
	return items;
}

itemModel.findItemsByWorkOrder = function (workOrder, excludeIds) {
	var whereClause = " and NUMB = (select NUMB from F56BT where doco = '" + workOrder.doco + "' and f56bt.ANP = " + login.user.AN8 + ")";
	whereClause += (!validationModel.isNull(excludeIds) && excludeIds.length > 0) ? " and cib.id not in (" + excludeIds.join(",") + ")" : "";
	return itemModel.findItemsByWhereClauseAndSortOrder(whereClause," limit 50");
}

itemModel.findAllItems = function () {
	return itemModel.findItemsByWhereClauseAndSortOrder("","");
}

itemModel.findItemAllocationDataBySessionId = function (allocationSessionId, allocationSessionSequence) {
	return [];
}

itemModel.updateItemAllocationData = function (items, allocationSessionId) {
	var inputArray = [];

	for (var i = 0; i < items.length; i ++) {
		var item = items[i];
		
		// Remove the data if the item was added in this session (i.e. no CIBId)
		// and is now being removed again (i.e. ITM set to 'NULL')
		if (validationModel.isNull(item.articleId) && validationModel.isNull(item.id)) {
			itemModel.deleteItemAllocationDataById([item.sessionDataId]);
		} else {
			inputArray[i] = {};
			inputArray[i].changeSet = {};
			inputArray[i].changeSet.CIBId = item.id;
			inputArray[i].changeSet.CreatedBy = login.user.AN8; 
			inputArray[i].changeSet.CreatedDate = dateTimePrintSql(new Date()); 
			inputArray[i].changeSet.F56BTId = workOrder.id;
			inputArray[i].changeSet.ITM = item.articleId;
			inputArray[i].changeSet.Sequence = item.allocationSessionSequence;
			inputArray[i].changeSet.SessionId = allocationSessionId;
			inputArray[i].changeSet.Y56LIEU = (!validationModel.isNull(item.placement) && item.placement.length > 0) ? item.placement : 'NULL';
			inputArray[i].changeSet.Y56ETAG = (!validationModel.isNull(item.floor) && item.floor.length > 0) ? item.floor : 'NULL';
			inputArray[i].changeSet.Y56INDLA = (validationModel.isNull(item.status)) ? 'NULL' : item.status;
			inputArray[i].changeSet.Y56EMPLA = (!validationModel.isNull(item.location) && item.location.length > 0) ? item.location : 'NULL';
			inputArray[i].changeSet.Y56ZONL = (!validationModel.isNull(item.zone)) ? item.zone : 'NULL';
			inputArray[i].whereClause = "where id = " + item.sessionDataId;
		}
	}

	if (inputArray.length > 0) {
		de.itgs.WorkOrders.CustomerInstalledBaseAllocation.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB);
	}
}

itemModel.createItemAllocationData = function (items, allocationSessionId) {
	showSyncLoadingScreen('Mise à jour des données de topologie...');
	callBackModel.resultArray = [];

	var inputArray = [];
	for (var i = 0; i < items.length; i ++) {
		var item = items[i];
		inputArray[i] = {};
		inputArray[i].CIBId = item.id;
		inputArray[i].CreatedBy = login.user.AN8; 
		inputArray[i].CreatedDate = dateTimePrintSql(new Date()); 
		inputArray[i].F56BTId = workOrder.id;
		inputArray[i].ITM = item.articleId;
		inputArray[i].Sequence = item.allocationSessionSequence;
		inputArray[i].SessionId = allocationSessionId;
		inputArray[i].Y56LIEU = (!validationModel.isNull(item.placement) && item.placement.length > 0) ? item.placement : 'NULL';
		inputArray[i].Y56ETAG = (!validationModel.isNull(item.floor) && item.floor.length > 0) ? item.floor : 'NULL';
		inputArray[i].Y56INDLA = (validationModel.isNull(item.status)) ? 'NULL' : item.status;
		inputArray[i].Y56EMPLA = (!validationModel.isNull(item.location) && item.location.length > 0) ? item.location : 'NULL';
		inputArray[i].Y56ZONL = (!validationModel.isNull(item.zone)) ? item.zone : 'NULL';
	}

	de.itgs.WorkOrders.CustomerInstalledBaseAllocation.createAll(inputArray, callBackModel.arraySuccessCB, callBackModel.konyErrorCB);
	dismissSyncLoadingScreen();
	return callBackModel.resultArray;
}

itemModel.deleteItemAllocationDataById = function (ids) {
	var whereClause = "where id in (" + ids.join(",") + ")";
	var values = { HasChangedFlag: true, DeletedBy: app_parameters.sync.appID };
	de.itgs.WorkOrders.CustomerInstalledBaseAllocation.update(whereClause, values, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
	de.itgs.WorkOrders.CustomerInstalledBaseAllocation.remove(whereClause, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}

itemModel.updateItems = function (items, oldItems, allocationSessionId) {

	if (items.length > 0) {
		var inputArray = [];
		if (!validationModel.isNull(allocationSessionId)) {
			var changeArray = [];
			for (var i = 0; i < items.length; i ++) {
				var item = items[i];
				var oldItem = oldItems[i];
						
				// If no session data yet, create an entry with the old item data
				// and on with the new draft item data
				if (validationModel.isNull(item.allocationId)) {
					oldItem.allocationSessionSequence = 'OLD';
					item.allocationSessionSequence = 'DRAFT';
					inputArray.push(oldItem);
					inputArray.push(item);
				// Else, update the draft item data for this session
				} else {
					item.sessionDataId = item.allocationId;
					item.allocationSessionSequence = 'DRAFT';
					changeArray.push(item);
				}
			}
			
			if (inputArray.length > 0) itemModel.createItemAllocationData(inputArray, allocationSessionId);
			if (changeArray.length > 0) itemModel.updateItemAllocationData(changeArray, allocationSessionId);
		} else {
			for (var i = 0; i < items.length; i ++) {
				var item = items[i];
				inputArray[i] = {};
				inputArray[i].changeSet = {};
				inputArray[i].changeSet.LOTN = item.batchNumber;
				inputArray[i].changeSet.SVDB = dateFunctions.isAValidDate(item.productionDate, "2333-01-01");
				inputArray[i].changeSet.ITM = item.articleId;
				inputArray[i].changeSet.Y56EMPLA = (!validationModel.isNull(item.location) && item.location.length > 0) ? item.location : 'NULL';
				inputArray[i].changeSet.Y56ETAG = (!validationModel.isNull(item.floor) && item.floor.length > 0) ? item.floor : 'NULL';
				inputArray[i].changeSet.Y56ZONL = (!validationModel.isNull(item.customerNumber)) ? item.customerNumber : 'NULL';
				inputArray[i].changeSet.Y56LIEU = (!validationModel.isNull(item.placement) && item.placement.length > 0) ? item.placement : 'NULL';
				if (!validationModel.isNull(item.status)) inputArray[i].changeSet.Y56INDLA = item.status;
				inputArray[i].changeSet.etat = item.statusReason;
              	//Arati: Changed for issue#41 - kony error occurred null start here
				//inputArray[i].changeSet.ETATCIBCId = (!validationModel.isNull(item.statusReasonId)) ? item.statusReasonId : 'NULL'; 					 
				inputArray[i].changeSet.etacibCId = (!validationModel.isNull(item.statusReasonId)) ? item.statusReasonId : null;
              	//Arati: Changed for issue#41 - kony error occurred null end here
              	inputArray[i].changeSet.UNItecStatus = (!validationModel.isNull(item.statusKony)) ? item.statusKony : 'NULL';
				inputArray[i].changeSet.HasChangedFlag = true;
				inputArray[i].whereClause = "where id = " + item.id;
			}
			
			de.itgs.WorkOrders.CustomerInstalledBase.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB);
		}
	}
}

itemModel.getKYbyActivity = function(wo){
  callBackModel.context.sql = "SELECT KY FROM F56PRM WHERE SDB = 'KONI' AND CLS = 'PDT' AND TYDT = 'ME' AND RMK = '"+wo.equipmentActivity+"' AND RMK2 = '01' LIMIT 1";
  
 	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
  var resultSql = callBackModel.resultArray;
  return resultSql[0].KY;
	
}

itemModel.groupItemsByContractAndSubFamily = function (items, workOrder) {
	var contracts = [];
	
	// Loop over all items
	for (var i = 0; i < items.length; i ++) {
		
		// Check if the contract already exists in the resultArray
		var contractFound = false;
		for (var j = 0; j < contracts.length; j ++) {
			if (items[i].contractId == contracts[j].id) {
			
				// Check if the subFamily already exists in the resultArray for the given contract
				var subFamilyFound = false;	
				for (var k = 0; k < contracts[j].subFamilies.length; k ++) {
					if (items[i].subFamily == contracts[j].subFamilies[k].code) {
						contracts[j].subFamilies[k].items.push(items[i]);
						contracts[j].subFamilies[k].quantity += validationModel.isNull(items[i].quantity) ? 1 : items[i].quantity;
						subFamilyFound = true;
					}
				}
				
				// If not, add the subfamily (+item) to the contract
				if (!subFamilyFound) {
					if (validationModel.isNull(items[i].subFamilyName)) items[i].subFamilyName = 'Sous-Famille Indéfinie';
					contracts[j].subFamilies.push({	code: items[i].subFamily, 
													name: items[i].subFamilyName,
													quantity: validationModel.isNull(items[i].quantity) ? 1 : items[i].quantity, 
													items: [items[i]]});
				}
				
				contracts[j].quantity += validationModel.isNull(items[i].quantity) ? 1 : items[i].quantity;
				
				if (validationModel.isNull(items[i].itemIds)) contracts[j].itemIds.push(items[i].id);
				else contracts[j].itemIds = contracts[j].itemIds.concat(items[i].itemIds.split(','));
				
				if (validationModel.isNull(items[i].articleIds)) contracts[j].articleIds.push(items[i].articleId);
				else contracts[j].articleIds = contracts[j].articleIds.concat(items[i].articleIds.split(','));
				
				if (validationModel.isNull(items[i].allocationIds)) contracts[j].allocationIds.push(items[i].allocationId);
				else contracts[j].allocationIds = contracts[j].allocationIds.concat(items[i].allocationIds.split(','));
				
				contractFound = true;
				break;
			}
		}
		
		// If not, add the contract (+subFamily +item)
		if (!contractFound) {
			if (validationModel.isNull(items[i].contractName)) items[i].contractName = 'Contrat Indéfini';
			var isCurrentContract = ((!validationModel.isNull(workOrder.contractId) && items[i].contractId == workOrder.contractId) ||
									 (workOrder.DOC == items[i].DOCO && workOrder.LNID == items[i].LNID));
			
			var itemIds = validationModel.isNull(items[i].itemIds) ? [items[i].id] : items[i].itemIds.split(',');
			var articleIds = validationModel.isNull(items[i].articleIds) ? [items[i].articleId] : items[i].articleIds.split(',');
			var allocationIds = validationModel.isNull(items[i].allocationIds) ? [items[i].allocationId] : items[i].allocationIds.split(',');
			
			var contract = {
				id: 				items[i].contractId, 
				doc:				items[i].DOCO,
				lnid:				items[i].LNID,
				name: 				items[i].contractName,
				quantity:			validationModel.isNull(items[i].quantity) ? 1 : items[i].quantity,
				itemIds:			itemIds,
				articleIds:			articleIds,
				allocationIds:		allocationIds,
				isCurrentContract: 	isCurrentContract,
				subFamilies: 		[{
					code: items[i].subFamily,
					name: items[i].subFamilyName,
					quantity: validationModel.isNull(items[i].quantity) ? 1 : items[i].quantity, 
					items: [items[i]]
				}]
			};
			
			if (isCurrentContract) contracts.unshift(contract);
			else contracts.push(contract);
		}
	}

	// Remove undefined values from the id arrays
	for (var i = 0; i < contracts.length; i ++) {
		contracts[i].itemIds = contracts[i].itemIds.filter(function(id) {return !validationModel.isNull(id);});
		contracts[i].articleIds = contracts[i].articleIds.filter(function(id) {return !validationModel.isNull(id);});
		contracts[i].allocationIds = contracts[i].allocationIds.filter(function(id) {return !validationModel.isNull(id);});
	}

	return contracts;
}

// add a new item in the customer base
// creates a new line in the CustomerInstalledBase
// item : item to add to the base - usually selected from the Item table
// workOrder : current WorkOrder for example, selected from the F56BT
// customer : customer associated to the workOrder for example, selected from the Customer table
itemModel.createItemInCustomerInstalledBase = function (item, workOrder, customer, createVerificationTask) {
	kony.print("#### createItemInCustomerInstalledBase START");
	kony.print("### item: " + item);
	kony.print("### workOrder: " + JSON.stringify(workOrder));
	kony.print("### customer: " + JSON.stringify(customer));
	
	createdItem = undefined;
	
	itemModel.createItemInCustomerInstalledBaseCB = function (l_result) {
		if (!validationModel.isNull(l_result)) {
			if (l_result instanceof Array && l_result.length > 0) createdItem = l_result[0];
			else if (l_result instanceof Array && l_result.length == 0) createdItem = undefined;
			else createdItem = l_result;
		}
		
		// Create verification task
		if (!validationModel.isNull(createVerificationTask) && createVerificationTask &&
			!validationModel.isNull(createdItem) && 
			!validationModel.isNull(createdItem.id) &&
			(workOrder.typeCode == "V")
		) {
		    item.id = createdItem.id;
			var verificationCode = articleModel.findArticleVerificationCodeByItem(item, workOrder);
			kony.print("### verificationCode: " + JSON.stringify(verificationCode) + ".");
			if (!unitec.lang.isNull(verificationCode) && !verificationCode.isEmpty()) {
				var task = taskModel.createTaskByItemAndWorkOrder(item, workOrder, undefined, undefined, verificationCode);
			}
		}
	}
    
    
	
	// new entry parameters
	var inputArray = {};
	inputArray.NUMB = workOrder.equipmentNumber;
	inputArray.N001 = (!validationModel.isNull(item.jdeId) && item.jdeId != '') ? item.jdeId : 'NULL';
	inputArray.LOTN = item.batchNumber;
	inputArray.LANO = customer.code;
	inputArray.ZE01 = (!validationModel.isNull(item.ZE01) && item.ZE01 != '') ? item.ZE01 : 'NULL';
	inputArray.ZE02 = (!validationModel.isNull(item.ZE02) && item.ZE02 != '') ? item.ZE02 : 'NULL';
	inputArray.ZE03 = (!validationModel.isNull(item.ZE03) && item.ZE03 != '') ? item.ZE03 : 'NULL';
	inputArray.ACL7 = workOrder.equipmentActivity;
	inputArray.ITM = item.articleId;
	inputArray.KIT = item.articleId;
	inputArray.DOCO = (!validationModel.isNull(workOrder.DOC) && workOrder.DOC != '') ? workOrder.DOC : 'NULL';
	inputArray.COCH = 'NULL'; //(!validationModel.isNull(workOrder.COCH) && workOrder.COCH != '') ? workOrder.COCH : 'NULL';
	inputArray.LNID = (!validationModel.isNull(workOrder.LNID) && workOrder.LNID != '') ? workOrder.LNID : 'NULL';
	inputArray.DCTO = (!validationModel.isNull(workOrder.DCT) && workOrder.DCT != '') ? workOrder.DCT : 'NULL';
	inputArray.KCOO = (!validationModel.isNull(workOrder.KCO) && workOrder.KCO != '') ? workOrder.KCO : 'NULL';
	inputArray.Y56INDLA = item.status;
	inputArray.QTY = (!validationModel.isNull(item.QTY) && item.QTY != '') ? item.QTY : 'NULL';
	inputArray.FBUMSDJ = (!validationModel.isNull(item.FBUMSDJ) && item.FBUMSDJ != '') ? item.FBUMSDJ : 'NULL';
	inputArray.SVDB = dateFunctions.isAValidDate(item.productionDate,"2456-01-01");
	inputArray.Y56DATEP = (!validationModel.isNull(item.Y56DATEP) && item.Y56DATEP != '') ? item.Y56DATEP : 'NULL';
	inputArray.U74SCDV = (!validationModel.isNull(item.U74SCDV) && item.U74SCDV != '') ? item.U74SCDV : 'NULL';
	inputArray.Y56LIEU = (!validationModel.isNull(item.placement) && item.placement != '') ? item.placement : 'NULL';
	inputArray.Y56ETAG = (!validationModel.isNull(item.floor) && item.floor != '') ? item.floor : 'NULL';
	inputArray.Y56ZONL = (!validationModel.isNull(item.customerNumber) && item.customerNumber != '') ? item.customerNumber : 'NULL';
	inputArray.Y56EMPLA = (!validationModel.isNull(item.location) && item.location != '') ? item.location : 'NULL';
	inputArray.HasChangedFlag = true;	
	inputArray.etat = item.statusReason;
	inputArray.ETATCIBId = item.statusReasonId;

	de.itgs.WorkOrders.CustomerInstalledBase.create(inputArray, itemModel.createItemInCustomerInstalledBaseCB, callBackModel.konyErrorCB);
	
	kony.print("#### createItemInCustomerInstalledBase END");
	
	return createdItem;
}


itemModel.createItemsInBase = function(itemTemplate, workOrder, qty, createControlTask) {

	callBackModel.resultArray = [];
	if(validationModel.isNull(createControlTask)) createControlTask = false;
	
	var itemsToCreate = new Array();
	var DOC = (!validationModel.isNull(workOrder.DOC) && workOrder.DOC != '') ? workOrder.DOC : 'NULL';
	var LNID = (!validationModel.isNull(workOrder.LNID) && workOrder.LNID != '') ? workOrder.LNID : 'NULL';
	var DCTO = (!validationModel.isNull(workOrder.DCT) && workOrder.DCT != '') ? workOrder.DCT : 'NULL';
	var KCOO = (!validationModel.isNull(workOrder.KCO) && workOrder.KCO != '') ? workOrder.KCO : 'NULL';

	for (var i = 0; i < qty; i ++) {
		var inputArray = {
			NUMB				: workOrder.equipmentNumber,
			LANO				: workOrder.said,
			ACL7				: workOrder.equipmentActivity,
			ITM					: itemTemplate.articleId,
			KIT					: itemTemplate.articleId,
			LOTN				: '',
			DOCO				: DOC,
			LNID				: LNID,
			DCTO				: DCTO,
			KCOO				: KCOO,
			Y56INDLA			: 'A',
			Y56ZONL				: itemTemplate.customerNumber,
			Y56LIEU				: itemTemplate.placement,
			HasChangedFlag		: true
		};
		
		itemsToCreate.push(inputArray);
	}

	de.itgs.WorkOrders.CustomerInstalledBase.createAll(itemsToCreate, callBackModel.arraySuccessCB, callBackModel.konyErrorCB, true);
	
	if(createControlTask && workOrder.typeCode == "V" && callBackModel.resultArray.length > 0) {
		
		var controlCode = articleModel.findArticleVerificationCodeByItem(itemTemplate, workOrder);
		
		if(validationModel.isNull(controlCode)) {
			kony.print('Error : no control task was found - interrupting control task creation');
			return;
		}

		var tasksToCreate = new Array();

		for(var i = 0; i < callBackModel.resultArray.length; i++) {
			var input = {
				DOCO 			: workOrder.doco,
				F56BTId 		: workOrder.id,
				cibid 			: callBackModel.resultArray[i].id,
				LITM 			: controlCode,
				SOURCE 			: 'TPK',
				HasChangedFlag 	: true,
				markForUpload 	: true
			};
			tasksToCreate.push(input);
		}

		callBackModel.resultArray = [];
		de.itgs.WorkOrders.F56BTDT.createAll(tasksToCreate, callBackModel.arraySuccessCB, callBackModel.konyErrorCB, true);
	}
};

itemModel.findItemForTasks  = function(tasks) {
	callBackModel.resultArray = [];
		
	var cibids = tasks.map(
		function(t){
			return t.cibid
		}
	);

	return itemModel.findItemsByWhereClauseAndSortOrder(undefined, undefined, undefined, cibids);
}

itemModel.deactivateItem = function (item, wo, reasonCode, validate, isInReplacementProcess) {
	kony.print("itemModel.deactivateItem called with :\n" +
		JSON.stringify([item, wo, reasonCode]));

	// disable relative tasks first : not ticked planned 
	var tasks = taskModel.findTasksByItemWorkOrderAndWhereClause(
		" and ( \n " +
		"	coalesce(btdt.CK01, 'NULL') = 'NULL' \n " +
		"	and coalesce(btdt.source, 'NULL')  in ('NULL', 'TPK', 'TPJ') \n " +
		") \n "
		, item, wo);

	if (tasks.length >0) {
		
		var tIds = tasks.map(
			function(t) { return t.id; }
		);

		var currentDate = dateTimePrintSql(new Date());
		var changeArray = 
			[{
				changeSet : {
					CK01 : validate ? 'O' : 'N',	// Cancel planned Tasks
					SparePartsId : null, // break links F56BTDT -> spareparts
					HasChangedFlag : true,
					STRX : currentDate.substring(0, 10),
					TMCO : currentDate.substring(11),
					AA05 : validate ? 'NULL' : 'N98'
				},
				whereClause : "where id in ("+ tIds.join(", ") +")"
			}];

		de.itgs.WorkOrders.F56BTDT.updateAll(changeArray, callBackModel.emptyCB, callBackModel.konyErrorCB);

		if(validate) {
			for(var i = 0; i < tasks.length; i++) {
				var nextTask = tasks[i];
				nextTask.status = 'O';
				nextTask.realDate = currentDate.substring(0, 10);
				nextTask.realTime = currentDate.substring(11);
				nextTask.nonCompletionReason = 'NULL';
				var articleComponents = articleModel.findArticleComponentsByTasks([nextTask], 1);
				sparePartModel.createSparePartsByWorkOrderAndItem(wo, item, articleComponents, nextTask, 'NULL', "plannedTask", (wo.process == 'CHUBB'), nextTask);
			}
		}
	}
	
	//get disabled status :
	var status = itemModel.getStatusCode('S');
	
	//disable Item
	item.status = status;
	item.statusKony = isInReplacementProcess ? 'X' : 'S';
	itemModel.updateItems([item]);
}

itemModel.getStatusCode = function(status) {
	callBackModel.result = undefined;
	callBackModel.context.sql = "SELECT SPHD FROM UDC WHERE SY = '56' AND RT = 'SB' AND KY = '" + status + "'";
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
		
	if (validationModel.isNull(callBackModel.result) || validationModel.isNull(callBackModel.result.SPHD) ) {
		kony.print("itemModel.getStatusCode : status request error " + JSON.stringify(status));
		return null;
	} else {
		return callBackModel.result.SPHD;
	}
}

itemModel.activateItem = function(item, wo) {	
	var status = itemModel.getStatusCode('A');
	item.status = status;
	item.statusKony = 'A';
	itemModel.updateItems([item]);
}

itemModel.findItemByBaseId = function(id) {
	var items = itemModel.findItemsByWhereClauseAndSortOrder(" and cib.id = " + id + " ");
	var item = items.length >= 1 ? items[0] : null; return item;
}

itemModel.checkSameSiteByItemAndWorkOrder = function(item, workOrder) {
	callBackModel.result = undefined;
									
	callBackModel.context.sql =
		"select bt.doco doco " +
		"from f56bt bt " +
		"join customerInstalledBase cib " +
		"on bt.NUMB = cib.NUMB " +
		"and bt.DOC = cib.DOCO " +
		"and bt.LNID = cib.LNID " +
		"where bt.SRST < '70' " +
		"and cib.id = " + item.id + " ";
	
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	if (validationModel.isNull(callBackModel.result))
		return { doco : null };
	else
		return callBackModel.result;
}

itemModel.findObsoleteItemsByWorkOrder = function(workOrder) {
	callBackModel.resultArray = [];
	
	callBackModel.context.sql =
		"select	distinct cib.id " +
		"from	customerinstalledbase cib " +
		"join	item i on cib.ITM = i.ITM " +
		"where cib.NUMB = " + workOrder.equipmentNumber +
		" and cib.Y56INDLA = 'A'" +
		" and cib.DOCO = " + workOrder.DOC +
		" and cib.LNID = " + workOrder.LNID +
		" and i.PRP0 = 'D' ";
		  
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	
	return callBackModel.resultArray;
};

itemModel.updateItemsLocation = function(itemsIds, placement, floor) {

	var whereClause = "where id in (" + itemsIds.join(',') + ") ";
	var values = {
		Y56EMPLA : placement,
		Y56ETAG	: floor,
		HasChangedFlag : true
	};
	
	de.itgs.WorkOrders.CustomerInstalledBase.update(whereClause, values, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
};

itemModel.deactivateBase = function(itemsIds, doco) {
	
	callBackModel.resultArray = [];
	
	callBackModel.context.sql = 	
		"select		btdt.id id " +
		"from		F56BTDT btdt " +
		"join 		CustomerInstalledBase cib " +
		"on			cib.id = btdt.cibid " +
		"and 		btdt.cibid in (" + itemsIds.join(',') + ") " +
		"join		Item itm " +
		"on			itm.usualcode = btdt.LITM " +
		"join		udc descr " +
		"on			descr.SY = '41' " + 
		"and 		descr.rt = 'S2' " +
		"and 		descr.KY = itm.SRP2 " +
		"where		btdt.doco = " + doco + " " +
		"and 		coalesce(btdt.CK01, 'NULL') = 'NULL' " +
		"and 		coalesce(btdt.source, 'NULL')  in ('NULL', 'TPK', 'TPJ')";
		
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);

	if (callBackModel.resultArray.length >0) {
		
		var tIds = callBackModel.resultArray.map(function(t) { return t.id; });
		var currentDate = dateTimePrintSql(new Date());
		var changeArray = 
			[{
				changeSet : {
					CK01 : 'N',	// Cancel planned Tasks
					SparePartsId : null, // break links F56BTDT -> spareparts
					HasChangedFlag : true,
					STRX : currentDate.substring(0, 10),
					TMCO : currentDate.substring(11),
					AA05 : 'N98'
				},
				whereClause : "where id in ("+ tIds.join(", ") +")"
			}];

		de.itgs.WorkOrders.F56BTDT.updateAll(changeArray, callBackModel.emptyCB, callBackModel.konyErrorCB);
	}
	
	var crtDate = dateTimePrintSql(new Date());
	var whereClause = "where id in (" + itemsIds.join(',') + ") ";
	var values = {
		Y56INDLA : 'D',
		HasChangedFlag : true
	};
	
	de.itgs.WorkOrders.CustomerInstalledBase.update(whereClause, values, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}

itemModel.updateItemsPlacement = function(itemsIds, placement, zone) {
	
	var crtDate = dateTimePrintSql(new Date());
	var whereClause = "where id in (" + itemsIds.join(',') + ") ";
	var values = {
		Y56LIEU : placement,
		Y56ZONL	: zone,
		HasChangedFlag : true
	};
	
	de.itgs.WorkOrders.CustomerInstalledBase.update(whereClause, values, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
};

itemModel.findCK01byLOTNandDOCO = function(item, doco){

		callBackModel.result = null;
	
	callBackModel.context.sql = 
		"SELECT DISTINCT F56BTDT.CK01 FROM CustomerInstalledBase LEFT JOIN F56BTDT ON F56BTDT.cibid = CustomerInstalledBase.id "+
		"WHERE CustomerInstalledBase.id = "+item;

		callBackModel.resultArray = [];
		executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
		//alert(JSON.stringify(callBackModel.resultArray));
			return callBackModel.resultArray[0].CK01;
	
};

itemModel.findRefusedItem = function(wo, aao5code, cid){
  
			callBackModel.resultArray = [];
	callBackModel.context.sql = "select count(*) from f56btdt where doco = "+wo.doco+" and AA05 = 'N05' and CK01 = 'N' and cibid = "+cid;

		executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
		//alert(JSON.stringify(callBackModel.resultArray));
			return callBackModel.resultArray;
  
};
