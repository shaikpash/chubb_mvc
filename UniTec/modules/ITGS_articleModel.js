articleModel = {};

articleModel.requiresFullItemVerification = function (article) {
	callBackModel.result = 0;
	
	if (!validationModel.isNull(article.usualCode)) {
		callBackModel.context.sql = "select count(*) value from itemcrossreference icr where icr.litm = '" + article.usualCode + "' and icr.xrt = 'AT'";
		executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);	
	}
	var requiresFullItemVerification = (callBackModel.result>0);				
	return requiresFullItemVerification;
}

articleModel.findArticles = function (category, family, subFamily, characteristics, article, whereClause) {
	callBackModel.resultArray = [];
	
	articleModel.normalizeValueArray = function (array) {
		var resultArray = [];
		for (var i = 0; i < array.length; i++) {
			if (array[i].isSelected) resultArray.push("'" + array[i].code + "'");
		}
		return resultArray;
	}
	
	callBackModel.context.sql =
		"SELECT	description1 ||  CASE WHEN description2 = 'NULL' THEN '' ELSE description2 END Libelle, " +	
		"		usualcode, " +
		"		coalesce((SELECT count(ic.TBM) FROM ItemComposition ic JOIN Item i ON i.ITM = ic.componentITM WHERE ic.TBM  = 'PA' AND i.PRP0 NOT IN (SELECT KY FROM UDC WHERE SY='41' AND RT = '05' AND SPHD = '2') and ic.compoundITM = Item.ITM GROUP BY ic.compoundITM  limit 1),0) totalPA, " +
		"		coalesce((SELECT 	count(ic.TBM) Count FROM ItemComposition ic WHERE ic.TBM  = 'M' and ic.compoundITM = Item.ITM GROUP BY ic.compoundITM),0) totalM, " +
		"		Coalesce((SELECT count(ic.TBM) FROM ItemComposition ic JOIN Item i ON i.ITM = ic.componentITM WHERE ic.TBM  = 'T' and ic.compoundITM = Item.ITM AND i.PRP0 IN (SELECT KY FROM UDC WHERE SY='41' AND RT = '05' AND SPHD = '3') GROUP BY ic.compoundITM), 0) totalT, " +
		"		PRP0 type, " +
		"		STKT " +
		"FROM 	Item " +
		"WHERE	1 = 1 ";
								
	callBackModel.context.sql += (!validationModel.isNull(category)) ? 	" AND SRP0 = '" + category.code  + "' " : "";
	callBackModel.context.sql += (!validationModel.isNull(family)) ? 	" AND SRP1 = '" + family.code 	 + "' " : "";
	callBackModel.context.sql += (!validationModel.isNull(subFamily)) ? 	" AND SRP2 = '" + subFamily.code + "' " : "";
	
	if (!validationModel.isNull(characteristics)) {
		for (var i = 0; i < characteristics.length; i++) {
			if (!validationModel.isNull(characteristics[i].values) && characteristics[i].values.length > 0) {
				var selectedCharacteristicValues = articleModel.normalizeValueArray(characteristics[i].values);
				if (selectedCharacteristicValues.length > 0) {
					callBackModel.context.sql +="AND 	EXISTS ( " +
												"		SELECT 	NULL " +
												"		FROM   	ItemCharacteristics " +
												"		WHERE  	ITM = Item.ITM " +
												"		AND		ITMCAT = '" + characteristics[i].code + "' " + 
												"		AND    	VALUE IN (" + selectedCharacteristicValues.join(",") + ") " +
												"		) ";
				}
			}
		}
	}
	
	if (!validationModel.isNull(article)) {
		callBackModel.context.sql += (!validationModel.isNull(article.usualCode)) ? "AND usualcode LIKE '%" + article.usualCode + "%' " : "";
		callBackModel.context.sql += (!validationModel.isNull(article.name)) 	 ? "AND replace(replace(replace(replace(replace(replace(replace(replace(replace(replace"+
          "(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace("+
          "(description1 ||  CASE WHEN description2 = 'NULL' THEN '' ELSE description2 END) "+
          ",'É' ,'e'),'é','e'), 'Â', 'a'), 'Ê', 'e'), 'Î', 'i'), 'Ô', 'o'), 'Û', 'u'), 'Ä', 'a'), 'Ë', 'e'), 'Ï', 'i'), 'À', 'a'), 'Ç', 'c'), 'È', 'e'), 'à', 'a'), 'á', 'a'), 'â', 'a'), "+
          "'ç', 'c'), 'è', 'e'), 'ï', 'i'), 'ô', 'o'), 'ù', 'u'), 'û', 'u'), 'ü', 'u'), 'ê', 'e'), 'ë', 'e')" + 
        "LIKE '%" + article.name + "%' " : "";
		callBackModel.context.sql += (!validationModel.isNull(article.certificateNumber)) ? 
												"AND 	EXISTS ( " +
												"		SELECT 	NULL " +
												"		FROM   	ItemCharacteristics " +
												"		WHERE  	ITM = Item.ITM " +
												"		AND		ITMCAT = 'EXT17' " + 
												"		AND    	VALUE LIKE '%" + article.certificateNumber + "%' " +
												"		) "
												: "";
	}
	
	callBackModel.context.sql += (!validationModel.isNull(whereClause)) ? whereClause : "";
	callBackModel.context.sql += " ORDER BY Libelle";
	
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);	
	return callBackModel.resultArray;
}

articleModel.groupArticlesByUsualCodeAndSalesReason = function (articles) {
	var articlesGrouped = [];
	for (var i = 0; i < articles.length; i ++) {
		var article = de.itgs.javascript.Object.clone(articles[i]);
		var usualCodeFound = false;
		for (var j = 0; j < articlesGrouped.length; j ++) {
			if (articlesGrouped[j].usualCode == article.usualCode &&
				articlesGrouped[j].salesReason == article.salesReason) {
				articlesGrouped[j].quantity += article.quantity;
				usualCodeFound = true;
				break;
			} else if (
				articlesGrouped[j].usualCode == article.usualCode &&
				articlesGrouped[j].salesReason != article.salesReason &&
				j+1 < articlesGrouped.length &&
				articlesGrouped[j+1].usualCode != article.usualCode) {
				if (articlesGrouped[j].salesReason.charCodeAt(0) > article.salesReason.charCodeAt(0)) articlesGrouped.splice(j, 0, article);
				else articlesGrouped.push(article);
				usualCodeFound = true;
				break;
			}
		}	
		if (!usualCodeFound) articlesGrouped.push(article);
	}
	return articlesGrouped;
}

articleModel.findArticleCharacteristicValuesByCharacteristic = function (referenceCode) {
	callBackModel.context.sql =
		"SELECT	DISTINCT DL01 name, " +
		"		KY code " +
		"FROM	UDC " +
		"WHERE	SY = '" + referenceCode.substring(3,referenceCode.indexOf("/")).trim() + "' " +
		"AND	RT = '" + referenceCode.substring(referenceCode.indexOf("/")+1).trim() + "' " +
		"ORDER	BY CAST(DL01 AS INT)";

	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

articleModel.findArticleCategories = function (whereClause) {
	callBackModel.context.sql =
		"SELECT DISTINCT Item.SRP0 code, " +
		"		UDC.DL01 name " + 
		"FROM 	Item, " +
		"		UDC " + 
		"WHERE 	Item.SRP0 = UDC.KY " +
		"AND 	COALESCE(Item.SRP0,'NULL') <> 'NULL' " +
		"AND 	UDC.SY = '41' " + 
		"AND 	UDC.RT = '10'";
	callBackModel.context.sql += (!validationModel.isNull(whereClause)) ? whereClause : "";
	
	callBackModel.context.sql += " order by name ";

	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);	
	return callBackModel.resultArray;
}

articleModel.findArticleFamiliesByCategory = function (category, whereClause) {
	callBackModel.context.sql =
		"SELECT DISTINCT Item.SRP1 code, " + 
		"		UDC.DL01 name " +
		"FROM 	Item, " +
		"		UDC " + 
		"WHERE 	Item.SRP1 = UDC.KY " +
		"AND 	COALESCE(Item.SRP1,'NULL') <> 'NULL' " + 
		"AND 	Item.SRP0 = '" + category.code + "' " +
		"AND 	UDC.SY = '41' " + 
		"AND 	UDC.RT = 'S1'";
	callBackModel.context.sql += (!validationModel.isNull(whereClause)) ? whereClause : "";
	
	callBackModel.context.sql += " order by name ";

	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);	
	return callBackModel.resultArray;
}

articleModel.findArticleSubFamiliesByCategoryAndFamily = function (category, family, whereClause) {
	callBackModel.context.sql =
		"SELECT DISTINCT Item.SRP2 code, " + 
		"		UDC.DL01 name " +
		"FROM 	Item, " + 
		"		UDC " + 
		"WHERE 	Item.SRP2 = UDC.KY " +
		"AND 	COALESCE(Item.SRP2,'NULL') <> 'NULL' " +
		"AND 	Item.SRP0 = '" + category.code + "' " + 
		"AND 	Item.SRP1 = '" + family.code + "' " +
		"AND 	UDC.SY = '41' " + 
		"AND 	UDC.RT = 'S2'";
	callBackModel.context.sql += (!validationModel.isNull(whereClause)) ? whereClause : "";
	
	callBackModel.context.sql += " order by name ";
	
	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);	
	return callBackModel.resultArray;
}

articleModel.findArticleCharacteristicsByCategoryAndFamily = function (categories, families, subFamilies) {
	
	articleModel.normalizeArray = function (array) {
		var resultArray = [];
		for (var i = 0; i < array.length; i++) {
			resultArray[i] = "'" + array[i].code + "'";
		}
		return resultArray;
	}

	var whereClause = "";
	whereClause += (!validationModel.isNull(categories) && categories.length > 0) ? " AND Item.SRP0 in (" + articleModel.normalizeArray(categories).join(",") +") " : "";
	whereClause += (!validationModel.isNull(families) && families.length > 0) ? " AND Item.SRP1 in (" + articleModel.normalizeArray(families).join(",") +") " : "";
	whereClause += (!validationModel.isNull(subFamilies) && subFamilies.length > 0) ? " AND Item.SRP2 in (" + articleModel.normalizeArray(subFamilies).join(",") +") " : "";
	return articleModel.findArticleCharacteristicByWhereClause(whereClause);
}

articleModel.findArticleCharacteristicByWhereClause = function (whereClause) {
	callBackModel.context.sql =
		"SELECT DL01 name, " +
		"		KY code, " +
		"		SPHD referenceCode " +
		"FROM 	UDC " +
		"WHERE 	SY = '90CA' " +
		"AND 	RT = 'FC' " +
		"AND 	SPHD like '%/%' " +
		"AND	COALESCE(DL01,'NULL') <> 'NULL' " +
		"AND 	KY in ( " +
		"			select distinct ItemCharacteristics.ITMCAT " + 
		"			from   Item, " +
		"				   ItemCharacteristics " +
		"			where  Item.ITM = ItemCharacteristics.ITM ";
	callBackModel.context.sql += (whereClause != undefined) ? whereClause : "";
	callBackModel.context.sql += " ) ORDER BY DL01";
		
	callBackModel.resultArray = [];  
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);	
	return callBackModel.resultArray;
}

articleModel.findArticleByUsualCode = function (usualCode) {
	callBackModel.context.sql =
		"select	itm.itm articleId, " + 
		"		itm.description1 ||  CASE WHEN itm.description2 = 'NULL' THEN '' ELSE itm.description2 END name, " +  
      "		itm.description2 name2, " + 
		"		itm.usualCode usualCode, " +
		"		itm.prp0 prp0 " +
		"from	item itm " +
		"where	itm.usualCode = '" + usualCode + "'";
		  
	callBackModel.result = undefined;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);	
	return callBackModel.result;
}

articleModel.findArticleByArticleId = function (articleId) {
	callBackModel.context.sql =
		"select	itm.itm articleId, " + 
		"		itm.description1 ||  CASE WHEN itm.description2 = 'NULL' THEN '' ELSE itm.description2 END name, " +   
      "		itm.description2 name2, " + 
		"		itm.usualCode usualCode, " +
		"		itm.pricingFamily pricingFamily, " +
		"		itm.pricingSubFamily pricingSubFamily, " +
		"		itm.measurementUnit measurementUnit, " +
		"		itm.vattype vattype, " +
		"		itm.srp6 activity " +
		"from	item itm " +
		"where	itm.itm = " + articleId;

	callBackModel.result = undefined;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);	
	return callBackModel.result;
}

articleModel.findArticleByArticleIdAndParentId = function (articleId, parentId) {
	callBackModel.context.sql =
		"select	distinct itm.itm articleId, " + 
		"		itm.description1 ||  CASE WHEN itm.description2 = 'NULL' THEN '' ELSE itm.description2 END name, " +   
      	"		itm.description2 name2, " + 
		"		itm.usualCode usualCode, " +
		"		itm.pricingFamily pricingFamily, " +
		"		itm.pricingSubFamily pricingSubFamily, " +
		"		ic.measurementUnit measurementUnit, " +
		"		itm.vattype vattype, " +
		"		itm.PRGR groupCode, " +
		"		itm.srp6 activity " +
		"from	item itm " +
		"join 	itemComposition ic " +
		"on		itm.ITM = ic.componentITM " + 
		"where	ic.componentITM = " + articleId + " ";

	if( !validationModel.isNull(parentId)) {
		callBackModel.context.sql += "and ic.compoundITM = " + parentId + " ";
	}
	
	callBackModel.context.sql += " limit 1 ";

	callBackModel.result = undefined;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);	
	return callBackModel.result;
}

articleModel.findArticleReturnCodeByItem = function (item) {
	callBackModel.context.sql =
		"select i.usualcode value " +
		"from item i, " +
		" itemcomposition ico " +
		"where i.itm = ico.componentITM " +
		" and ico.compoundITM = " + item.articleId +
		" and ico.tbm = 'PA' " +
		" and ico.optiontype = '3' limit 1";

	callBackModel.result = '';
	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

articleModel.findArticleVerificationCodeByItem = function (item, workOrder) {
	callBackModel.context.sql =
		" select i.usualcode value " +
		"from item i, " +
		" itemcomposition ico, " +
		" F56PRM prm " +
		"where i.itm = ico.componentITM " +
		" and ico.compoundITM = " + item.articleId +
		" and i.SRP9 = 'REG' " +
		" and ico.tbm = 'T' " +
		" and i.SRP2 = prm.KY " +
		" and prm.TYDT = 'E7' " +
		" and prm.SDB = 'KONI' " +
//		" and prm.RMK = '" + workOrder.equipmentActivity + "' " +
		" and prm.AMTU = 1 limit 1";

	callBackModel.result = '';
	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

articleModel.findPossibleMeasureUnits = function() {
	callBackModel.result = null;
	
	callBackModel.context.sql =
		"select group_concat(distinct DL01) value " +
		"from   udc u join itemCharacteristics ic on u.KY = ic.measurementunit " +
		"and    COALESCE(measurementunit,'NULL') <> 'NULL' " +
		"where SY = '00' " +
		"and   RT = 'UM' " +
		"group by SY ";
								
	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	
	return callBackModel.result;
}

articleModel.findArticleCharacteristicsByItem = function (item) {
	var possibleUnits = articleModel.findPossibleMeasureUnits();

	callBackModel.resultArray = [];
	
	//f56CAR							
	callBackModel.context.sql = "select	(select DL01 from udc where sy = '90CA' and RT = 'FC' and KY = prm.RMK) charName, " +
								"		(select SPHD from udc where sy = '90CA' and RT = 'FC' and KY = prm.RMK) referenceCode, " +
								"		(select		u.dl01 as value  " + //menu déroulant via UDC
								"					from	ItemCharacteristics ic,  " +
								"							udc u,  " +
								"							udc u2  " +
								"					where	ic.itmcat = u2.ky  " +
								"					and		ic.value = u.ky " +
								"					and		ic.litm = '" + item.usualCode + "'  " +
								"					and		u.sy = SUBSTR(RTRIM(u2.SPHD,SUBSTR(u2.SPHD,INSTR(u2.SPHD,'/'))),4)   " +
								"					and		u.rt = SUBSTR(u2.SPHD,INSTR(u2.SPHD,'/')+1)   " +
								"					and		u2.sy = '90CA'   " +
								"					and		u2.rt = 'FC'   " +
								"					and		INSTR(u2.SPHD,'UDC') = 1   " +
								"					and 	u2.KY = prm.RMK  " +
								"				UNION   " + //un champs libre
								"					SELECT ItemCharacteristics.value AS value   " +
								"					FROM 	UDC,   " +
								"							ItemCharacteristics   " +
								"					WHERE 	UDC.KY = ItemCharacteristics.ITMCAT  " + 
								"					AND		UDC.SY = '90CA' " +
								"					AND 	UDC.RT = 'FC' " +
								"					AND 	ItemCharacteristics.value IS NOT NULL   " +
								"					AND 	ItemCharacteristics.value <> 'NULL'   " +
								"					AND 	ItemCharacteristics.LITM = '" + item.usualCode + "' " +
								"					AND 	INSTR(UDC.SPHD,'UDC') = 0  " +
								"					and 	UDC.KY = prm.RMK) charValue, " +


								"		(select  (CASE WHEN measurementunit = 'NULL'  " +
								"					 THEN ''  " +
								"					 ELSE (select DL01 from udc where SY = '00' and RT = 'UM' and KY = measurementunit)  " +
								"					 END) " +
								"				 from ItemCharacteristics  " +
								"				 where ITM = itm.itm  " +
								"				 and ITMCAT = prm.RMK) charUnit, " +
								"		prm.DYUD charType, " +
								"		(CASE WHEN prm.DYUD > 1 THEN 1 ELSE 0 END) isEditable, " +
								"		(CASE WHEN prm.DYUD > 2 THEN 1 ELSE 0 END) isMandatory, " +
								"		prm.RMK3 charTable, " +
								"		prm.RMK charCode " +
								"from	F56PRM prm, " +
								"		item itm " +
								"where	prm.SDB = 'KONI'  " +
								"and	prm.TYDT = 'E1'  " +
								"and	prm.RMK2 = itm.SRP6  " +
								"and	prm.KY = itm.PRP0 " +
								"and 	prm.RMK3 = 'F56CAR' " +
								"and	itm.usualcode = '" + item.usualCode + "' ";
	
	if(!validationModel.isNull(item.id)) {//f56PCAR
		callBackModel.context.sql += 	"union " +
										"select	(select DL01 from udc where sy = '90CA' and RT = 'FC' and KY = prm.RMK) charName, " +
										"		(select SPHD from udc where sy = '90CA' and RT = 'FC' and KY = prm.RMK) referenceCode, " +

										"		(select		u.dl01 as value  " +//menu déroulant via UDC
										"					from	CustomerInstalledBaseCharacteristic cibc,  " +
										"							udc u,  " +
										"							udc u2  " +
										"					where	cibc.ITMCAT = u2.ky  " +
										"					and		cibc.SDSC1 = u.ky " +
										"					and		u.sy = SUBSTR(RTRIM(u2.SPHD,SUBSTR(u2.SPHD,INSTR(u2.SPHD,'/'))),4)   " +
										"					and		u.rt = SUBSTR(u2.SPHD,INSTR(u2.SPHD,'/')+1)   " +
										"					and		u2.sy = '90CA'   " +
										"					and		u2.rt = 'FC'   " +
										"					and		INSTR(u2.SPHD,'UDC') = 1   " +
										"					and 	u2.KY = prm.RMK  " +
										"					and		cibc.ITM = " + item.articleId + "  " +
										"			UNION 	select cibc.SDSC1 as value  " +//champs libre
										"					from CustomerInstalledBaseCharacteristic cibc, udc u   " +
										"					where 	cibc.SDSC1 IS NOT NULL   " +
										"					AND 	cibc.SDSC1 <> 'NULL'   " +										
										"					and		cibc.ITM = " + item.articleId + "  " +
										"					and 	u.KY = cibc.ITMCAT  " + 
										"					AND		u.SY = '90CA' " +
										"					AND 	u.RT = 'FC' " +
										"					and	INSTR(u.SPHD,'UDC') = 0   " +
										"					and u.KY = prm.RMK)  charValue,  " +

										"		(select   (CASE WHEN UOM = 'NULL'   " +
										"					 THEN ''   " +
										"					 ELSE (select DL01 from udc where SY = '00' and RT = 'UM' and KY = UOM)   " +
										"					 END)   " +
										"				  from CustomerInstalledBaseCharacteristic   " +
										"				  where ITM = cib.ITM   " +
										"				  and ITMCAT = prm.RMK)  charUnit,  " +
										"		prm.DYUD charType,  " +
										"		(CASE WHEN prm.DYUD > 1 THEN 1 ELSE 0 END) isEditable,  " +
										"		(CASE WHEN prm.DYUD > 2 THEN 1 ELSE 0 END) isMandatory,  " +
										"		prm.RMK3 charTable,  " +
										"		prm.RMK charCode  " +
										"from	F56PRM prm,  " +
										"		item itm,  " +
										"		CustomerInstalledBase cib  " +
										"where	prm.SDB = 'KONI'   " +
										"and	prm.TYDT = 'E1'   " +
										"and	prm.RMK2 = itm.SRP6   " +
										"and	prm.RMK3 = 'F56PCAR' " +
										"and	prm.KY = itm.PRP0 " +
										"and	itm.itm = cib.itm   " +
										"and	cib.id = " + item.id + " ";
	}
	
	callBackModel.context.sql += " order by charCode ";

	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	
	for (var i = 0; i < callBackModel.resultArray.length; i++) {
		callBackModel.resultArray[i].charPossibleUnits = possibleUnits;
	}
	
	return callBackModel.resultArray;
};

articleModel.updateArticleCharacteristicsByItem = function (item) {
	if (item.newCharacteristics.length > 0) {
		var itemCharacteristicsInputArray = [];
		var customerInstalledBaseCharacteristicInputArray = [];
		var j = 0;
		for (var i = 0; i < item.newCharacteristics.length; i++) {
			if (item.newCharacteristics[i].isNew) {
				var newItem = de.itgs.javascript.Object.clone(item);
				newItem.newCharacteristics = [item.newCharacteristics[i]];
				articleModel.createArticleCharacteristicsByItem(newItem);
			} else if (item.newCharacteristics[i].charTable == 'F56CAR') {
				itemCharacteristicsInputArray[i] = {};
				itemCharacteristicsInputArray[i].changeSet = {};
				itemCharacteristicsInputArray[i].changeSet.value = item.newCharacteristics[i].charValue;

				if (!validationModel.isNull(item.newCharacteristics[i].charUnit)) {
					if (item.newCharacteristics[i].charUnit.length == 0) {
						itemCharacteristicsInputArray[i].changeSet.measurementunit = '';
					}else {
						var unitOfMeasure = articleModel.findUnitOfMeasureByName(item.newCharacteristics[i].charUnit);
						if (!validationModel.isNull(unitOfMeasure)) {
							itemCharacteristicsInputArray[i].changeSet.measurementunit = unitOfMeasure.code;
						}
					}
				}else{
					itemCharacteristicsInputArray[i].changeSet.measurementunit = '';
				}					

				itemCharacteristicsInputArray[i].whereClause = "where ITM = " + item.articleId + " and ITMCAT = '" + item.newCharacteristics[i].charCode + "'";
				
			} else if (item.newCharacteristics[i].charTable == 'F56PCAR') {

				customerInstalledBaseCharacteristicInputArray[j] = {};
				customerInstalledBaseCharacteristicInputArray[j].changeSet = {};
				customerInstalledBaseCharacteristicInputArray[j].changeSet.HasChangedFlag = true;
				customerInstalledBaseCharacteristicInputArray[j].changeSet.SDSC1 = item.newCharacteristics[i].charValue;

				if (!validationModel.isNull(item.newCharacteristics[i].charUnit)) {
					if (item.newCharacteristics[i].charUnit.length == 0) {
						customerInstalledBaseCharacteristicInputArray[j].changeSet.UOM = '';
					} else {
						var unitOfMeasure = articleModel.findUnitOfMeasureByName(item.newCharacteristics[i].charUnit);
						if (!validationModel.isNull(unitOfMeasure)) {
							customerInstalledBaseCharacteristicInputArray[j].changeSet.UOM = unitOfMeasure.code;
						}
					}
				}
				else
					customerInstalledBaseCharacteristicInputArray[j].changeSet.UOM = '';

				customerInstalledBaseCharacteristicInputArray[j].whereClause = "where ITM = " + item.articleId + " and ITMCAT = '" + item.newCharacteristics[i].charCode + "'";
				j++;
			}

		}
		if (itemCharacteristicsInputArray.length > 0) {
			de.itgs.Masterdata.ItemCharacteristics.updateAll(itemCharacteristicsInputArray, callBackModel.emptyCB, articleModel.konyErrorCB);
		}
		if (customerInstalledBaseCharacteristicInputArray.length > 0) {
			de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.updateAll(customerInstalledBaseCharacteristicInputArray, callBackModel.emptyCB, callBackModel.konyErrorCB);
		}	
	}
}

articleModel.createArticleCharacteristicsByItem = function (item) {
	callBackModel.resultArray = [];
	
	if (item.newCharacteristics.length > 0) {
		var itemCharacteristicsInputArray = [];
		var customerInstalledBaseCharacteristicInputArray = [];
		var j = 0;
		for (var i = 0; i < item.newCharacteristics.length; i ++) {
			if (item.newCharacteristics[i].charTable == 'F56CAR') {
				itemCharacteristicsInputArray[i] = {};
				itemCharacteristicsInputArray[i].value = item.newCharacteristics[i].charValue;
				if (!validationModel.isNull(item.newCharacteristics[i].charUnit)) {
					if (item.newCharacteristics[i].charUnit.length == 0) {
						itemCharacteristicsInputArray[i].measurementunit = '';
					} else {
						var unitOfMeasure = articleModel.findUnitOfMeasureByName(item.newCharacteristics[i].charUnit);
						if (unitOfMeasure != null) {
							itemCharacteristicsInputArray[i].measurementunit = unitOfMeasure.code;
						}
					}
				}
				else
					itemCharacteristicsInputArray[i][i].UOM = '';

				itemCharacteristicsInputArray[i].ITM = item.articleId;
				itemCharacteristicsInputArray[i].LITM = item.usualCode;
				itemCharacteristicsInputArray[i].ITMCAT = item.newCharacteristics[i].charCode;
			} else if (item.newCharacteristics[i].charTable == 'F56PCAR') {
				customerInstalledBaseCharacteristicInputArray[j] = {};
				customerInstalledBaseCharacteristicInputArray[j].SDSC1 = item.newCharacteristics[i].charValue;
				if (!validationModel.isNull(item.newCharacteristics[i].charUnit)) {
					if (item.newCharacteristics[i].charUnit.length == 0) {
						customerInstalledBaseCharacteristicInputArray[j].UOM = '';
					} else {
						var unitOfMeasure = articleModel.findUnitOfMeasureByName(item.newCharacteristics[i].charUnit);
						if (!validationModel.isNull(unitOfMeasure)) {
							customerInstalledBaseCharacteristicInputArray[j].UOM = unitOfMeasure.code;
						}
					}
				}
				else
					customerInstalledBaseCharacteristicInputArray[j].UOM = '';

				customerInstalledBaseCharacteristicInputArray[j].cibid = item.id;
				customerInstalledBaseCharacteristicInputArray[j].N001 = item.jdeId;
				customerInstalledBaseCharacteristicInputArray[j].ITM = item.articleId;
				customerInstalledBaseCharacteristicInputArray[j].ITMCAT = item.newCharacteristics[i].charCode;
				customerInstalledBaseCharacteristicInputArray[j].HasChangedFlag = true;
				j++;
			}
		}
		if (itemCharacteristicsInputArray.length > 0) {
			de.itgs.Masterdata.ItemCharacteristics.createAll(itemCharacteristicsInputArray, callBackModel.arraySuccessCB, callBackModel.konyErrorCB);
		}
		if (customerInstalledBaseCharacteristicInputArray.length > 0) {
			de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.createAll(customerInstalledBaseCharacteristicInputArray, callBackModel.arraySuccessCB, callBackModel.konyErrorCB);
		}	
	}
	
	return callBackModel.resultArray;
}

articleModel.deleteArticleCharacteristic = function(articleCharacteristic){
	var values = { HasChangedFlag: true, DeletedBy: app_parameters.sync.appID };
	de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.updateByPK(articleCharacteristic.id, values, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
	de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.deleteByPK(articleCharacteristic.id, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}

articleModel.findUnitOfMeasureByName = function (name) {
	callBackModel.result = null;
	callBackModel.context.sql = "select KY code from udc where sy = '00' and RT = 'UM' and DL01 = '" + name + "' limit 1";
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

articleModel.mapArticleComponents = function (l_articleComponents, depth, currentDepth, articleTypeCode) {
	var articleComponents = [];
	var usualCodeIndexMap = {};
	
	// If the component is already in the result array, just sum up the quantities
	// If not add the component to the result array
	if (!validationModel.isNull(l_articleComponents)) {
		for (var i = 0; i < l_articleComponents.length; i++) {
			var articleComponent = l_articleComponents[i];
			if (usualCodeIndexMap.hasOwnProperty(articleComponent.usualCode)) {
				articleComponents[usualCodeIndexMap[articleComponent.usualCode]].quantity += articleComponent.quantity;
			} else {
				articleComponents.push(articleComponent);
				usualCodeIndexMap[articleComponent.usualCode] = articleComponents.length-1;
			}
		}
	}
	
	// Now drill down to the next level if the component itself is a compound
	if (validationModel.isNull(depth) || depth > currentDepth) {
		var articleCompounds = [];
		
		for (var i = 0; i < articleComponents.length; i++) {
			if (articleComponents[i].isCompound) {
				// Add to articleCompounds array
				articleCompounds.push(articleComponents[i]);
				
				// Remove the compound from the array
				delete usualCodeIndexMap[articleComponents[i].usualCode];
				articleComponents.splice(i,1);
				i--;
			}
		}
		
		if (articleCompounds.length > 0) {
			var articleSubComponents = articleModel.findArticleComponentsByArticles(articleCompounds, depth, currentDepth, articleTypeCode);
			if (articleSubComponents.length > 0) {
				// Add all of the components of the compound to the array
				for (var j = 0; j < articleSubComponents.length; j++) {
					var articleSubComponent = articleSubComponents[j];
					if (usualCodeIndexMap.hasOwnProperty(articleSubComponent.usualCode)) {
						articleComponents[usualCodeIndexMap[articleSubComponent.usualCode]].quantity += (articleSubComponent.quantity);
					} else {
						articleComponents.push(articleSubComponent);
						usualCodeIndexMap[articleSubComponent.usualCode] = articleComponents.length-1;
					}
				}
			}
		}	
	}
	
	return articleComponents;
}

articleModel.findRelatedProductsByItems = function (items, depth, articleTypeCode) {
	var whereClause = " and itmco.PRP0 in (select KY from F56PRM where RMK2 in ('Y','O') and TYDT = 'TA' and SDB = 'KONI')";
	return articleModel.findRelatedArticlesByItems(items, depth, articleTypeCode, 'PA', whereClause);
}

articleModel.findArticleComponentsByItem = function (item) {
	var items = [item];
	var depth = 1;
	var articleTypeCode = null;
	var relationCode = 'M';
	var whereClause = " and itmco.PRP0 in (select KY from F56PRM where RMK2 = 'Y' and TYDT = 'TA' and SDB = 'KONI') and itmco.STKT <> 'O' ";
	var tabSpareParts = articleModel.findRelatedArticlesByItems(items, depth, articleTypeCode, relationCode, whereClause);
  	tabSpareParts = de.itgs.javascript.Array.sortByParam(tabSpareParts, "name");
    return tabSpareParts;
}

articleModel.findRelatedArticlesByItems = function (items, depth, articleTypeCode, relationCode, whereClause) {
	var articleComponents = [];
	
	var articleIds = new Array();
	for(var i = 0; i < items.length; i++) {
		if(articleIds.indexOf(items[i].articleId) < 0) {
			articleIds.push({articleId : items[i].articleId});
		}
	}

	articleComponents = articleModel.findArticleComponentsByArticles(articleIds, depth, 0, articleTypeCode, relationCode, whereClause);
	
	executeSql(callBackModel.context.sql, articleModel.findRelatedArticlesByItemsCB, callBackModel.sqlErrorCB);
	articleComponents = de.itgs.javascript.Array.sortByParam(articleComponents, "name");
	return articleComponents;
}

articleModel.findArticleComponentsByTasks = function (tasks, depth, articleTypeCode) {
	var articleComponents = [];
	
	var taskIds = [];
	for (var i = 0; i < tasks.length; i++) {
		if (taskIds.indexOf(tasks[i].id) == -1) {
			taskIds.push(tasks[i].id);
		}
	}

	articleModel.findArticleComponentsByTasksCB = function (l_articleComponents) {
		articleComponents = articleModel.findArticleComponentsByArticles(l_articleComponents, depth, 0, articleTypeCode);
	}
	
	if (taskIds.length > 0) {
		callBackModel.context.sql =
			"select articleId, count(*) quantity from ( " +
			" select distinct btdt.id taskId, " +
			"  itmcomp.compoundITM articleId " +
			" from F56BTDT btdt, " +
			"   Item itm, " +
			"   itemcomposition itmcomp " +
			" where itm.usualcode = btdt.LITM " +
			"  and itmcomp.compoundITM = itm.ITM " +
			"  and itmcomp.TBM = 'M' " +
			"  and btdt.id in (" + taskIds.join(", ") + ") " +
			") group by articleId "; 

		executeSql(callBackModel.context.sql, articleModel.findArticleComponentsByTasksCB, callBackModel.sqlErrorCB);
	}

	return articleComponents;
}

articleModel.findArticleComponentsByArticles = function (articles, depth, currentDepth, articleTypeCode, relationCode, whereClause) {

	var articleComponents = [];
	currentDepth = (validationModel.isNull(currentDepth)) ? 0 : currentDepth;

	// If we are already at the desired depth and no filter is defined, return the input
	if (depth == currentDepth && validationModel.isNull(articleTypeCode)) {
		return articles;
	// If we are already at the desired depth and a filter is defined, return the filtered input
	} else if (depth == currentDepth && !validationModel.isNull(articleTypeCode)) {
		for (var i = 0; i < articles.length; i++) {
			if (articles[i].hasOwnProperty('articleTypeCode') &&
				articles[i].articleTypeCode.substring(0, articleTypeCode.length) == articleTypeCode) {
				articleComponents.push(articles[i]);
				articles.splice(i,1);
				i--;
			}
		}
		return articleComponents;
	// Check if articles contains components of the desired articleType already on the first level which are not a compound
	} else if (currentDepth == 1 && !validationModel.isNull(articleTypeCode)) {
		for (var i = 0; i < articles.length; i++) {
			if (articles[i].hasOwnProperty('isCompound') && 
				articles[i].isCompound == 0 && 
				articles[i].hasOwnProperty('articleTypeCode') &&
				articles[i].articleTypeCode.substring(0, articleTypeCode.length) == articleTypeCode) {
				articleComponents.push(articles[i]);
				articles.splice(i,1);
				i--;
			}
		}
	// If at any level, we find components of exactly the given type (compound or not), stop going deeper
	// E.g. articleTypeCode == 'P' for normal item requirements, retain those with articleTypeCode 'P'
	} else if (!validationModel.isNull(articleTypeCode)) {
		for (var i = 0; i < articles.length; i++) {
			if (articles[i].hasOwnProperty('articleTypeCode') &&
				articles[i].articleTypeCode == articleTypeCode) {
				articleComponents.push(articles[i]);
				articles.splice(i,1);
				i--;
			}
		}
	}
	// If articleIds (ITM) are configured for the articles, search with them
	// If no articleIds (ITM) found, see if there are usualCodes to search with
	var articleIds = [];
	var articleUsualCodes = [];
	var articlesGrouped = [];
	
	for (var i = 0; i < articles.length; i++) {
		if (validationModel.isNull(articles[i].quantity))
			articles[i].quantity = 1;
		if (articles[i].hasOwnProperty('articleId')) {
			var isDuplicateArticleId = false;
			for (var j = 0; j < articlesGrouped.length; j++) {
				if (articlesGrouped[j].articleId == articles[i].articleId) {
					isDuplicateArticleId = true;
					articlesGrouped[j].quantity += articles[i].quantity;
					break;
				}
			}
			if (!isDuplicateArticleId) {
				articleIds.push(articles[i].articleId);
				articlesGrouped.push(articles[i]);
			}
		} else if (articles[i].hasOwnProperty('usualCode')) {
			var isDuplicateUsualCode = false;
			for (var j = 0; j < articlesGrouped.length; j++) {
				if (articlesGrouped[j].usualCode == articles[i].usualCode) {
					isDuplicateUsualCode = true;
					articlesGrouped[j].quantity += articles[i].quantity;
					break;
				}
			}
			if (!isDuplicateUsualCode) {
				articleUsualCodes.push(articles[i].usualCode);
				articlesGrouped.push(articles[i]);
			}
		} else {
			break;
		}
	}
	articles = articlesGrouped;

	articleModel.findArticleComponentsByArticlesCB = function (l_articleComponents) {
		articleComponents = articleComponents.concat(articleModel.mapArticleComponents(l_articleComponents, depth, currentDepth, articleTypeCode));
		// E.g. articleTypeCode == 'P' for normal item requirements, retain only those with articleTypeCode Pxxx
		if (!validationModel.isNull(articleTypeCode)) {
			var articleComponentsFiltered = [];
			for (var i = 0; i < articleComponents.length; i++) {
				if (articleComponents[i].articleTypeCode.substring(0, articleTypeCode.length) == articleTypeCode) {
					articleComponentsFiltered.push(articleComponents[i]);
				}
			}
			articleComponents = articleComponentsFiltered;
		}
	}
	
	callBackModel.context.sql = "select	(itmcomp.quantity * (CASE WHEN 1 = 0 THEN 0 ";
	
	// Multiply the component quantity with the compound quantity
	for (var i = 0; i < articles.length; i++) {
		if (articles[i].hasOwnProperty('articleId') && articles[i].hasOwnProperty('quantity')) {
			callBackModel.context.sql += " WHEN itm.itm = " + articles[i].articleId + " THEN " + articles[i].quantity;
		} else if (articles[i].hasOwnProperty('usualCode') && articles[i].hasOwnProperty('quantity')) {
			callBackModel.context.sql += " WHEN itm.usualcode = " + articles[i].usualCode + " THEN " + articles[i].quantity;
		}
	}

	callBackModel.context.sql +=
		" ELSE 1 END)) quantity, " +
		" itmco.PRP0 articleTypeCode, " +
		" itm.usualcode compoundUsualCode, " +
		" itm.itm compoundArticleId, " +
		" itmcomp.componentITM articleId, " +
		" (select DL01 from udc where sy = '00' and rt = 'UM' and ky = itmcomp.measurementunit limit 1) unitOfMeasure, " + 
		" itmcomp.measurementunit unitOfMeasureCode, " +
		" itmco.description1 ||  CASE WHEN itmco.description2 = 'NULL' THEN '' ELSE itmco.description2 END name, " + 
      	" itmco.description2 name2, " +
		" itmco.usualcode usualCode, " +
		" (select (case when count(*) > 0 then 1 else 0 end) from itemcomposition where compoundITM = itmcomp.componentITM) isCompound, " +
		" itmcomp.quantityVariabilityFlag quantityVariabilityFlag \n " +
		"from Item itm, " +
		" Item itmco, " +
		" itemcomposition itmcomp \n " +
		"where itmcomp.componentITM = itmco.itm " + 
		" and itmcomp.compoundITM = itm.ITM ";
		
	if (!validationModel.isNull(relationCode))
		callBackModel.context.sql += "and itmcomp.TBM = '" + relationCode + "' ";

	currentDepth++;
	if(!validationModel.isNull(whereClause) && whereClause.length > 0) {
		callBackModel.context.sql += " " + whereClause + " ";
	}
	if (articleIds.length > 0) {
		callBackModel.context.sql += " and itmcomp.compoundITM in (" + articleIds.join(", ") + ") ";
		executeSql(callBackModel.context.sql, articleModel.findArticleComponentsByArticlesCB, callBackModel.sqlErrorCB);
	} else if (articleUsualCodes.length > 0) {
		callBackModel.context.sql += " and itm.usualcode in (" + articleUsualCodes.join(", ") + ") ";
		executeSql(callBackModel.context.sql, articleModel.findArticleComponentsByArticlesCB, callBackModel.sqlErrorCB);
	}
	return articleComponents;
}

articleModel.findArticleCharacteristicByNameAndWorkOrder = function (charName, workOrder, isPreIndentified, itemIds, articleIds, allocationSessionId, preWorkOrderState) {

	var articleCharacteric = null;

	articleModel.findArticleCharacteristicByNameAndWorkOrderCB = function (l_articleCharacteric) {
		articleCharacteric = {};
		articleCharacteric.name = charName;
		articleCharacteric.articleIds = {};
		articleCharacteric.values = [];
		for (var i = 0; i < l_articleCharacteric.length; i ++) {	
			articleCharacteric.values.push(l_articleCharacteric[i].charValue);
			articleCharacteric.articleIds[l_articleCharacteric[i].charValue] = [];
			
			var seen = {};
			var articleIds = l_articleCharacteric[i].articleIds.split(",");
			for (var j = 0; j < articleIds.length; j ++) {
				if (!seen.hasOwnProperty(articleIds[j])) {
					seen[articleIds[j]] = true;
					articleCharacteric.articleIds[l_articleCharacteric[i].charValue].push(parseInt(articleIds[j]));
				}
			}
		}
	}
	
	var characteristicSelect1 = "SELECT		DISTINCT u2.dl01 charName, \n" +
								"			u.dl01 charValue, \n" +
								"			i.ITM articleId \n" +	
								"FROM   	Item i \n" +
								"join		udc u \n" +
								"on			u.sy = SUBSTR(RTRIM(u2.SPHD,SUBSTR(u2.SPHD,INSTR(u2.SPHD,'/'))),4) \n" +		
								"and		u.rt = SUBSTR(u2.SPHD,INSTR(u2.SPHD,'/')+1) \n" +
								"and    	u.ky = ic.value \n" +
								"join		udc u2 \n" +
								"on			u2.sy = '90CA' \n" +  
								"and		u2.RT = 'FC' \n" +  
								"and		u2.DL01 in ('" + charName + "') \n" + 
								"and		INSTR(u2.SPHD,'UDC') = 1 \n" +
								"join		ItemCharacteristics ic \n" +
								"on			ic.itmcat = u2.ky \n" +
								"and	    ic.litm = i.usualCode \n";
	var characteristicSelect2 = "SELECT		DISTINCT u.dl01 charName, \n" +
								"			ic.value charValue, \n" +
								"			i.ITM articleId \n" +	
								"FROM   	Item i \n" +
								"join		udc u \n" +
								"on			u.sy = '90CA' \n" +  
								"and		u.RT = 'FC' \n" +  
								"and		u.DL01 in ('" + charName + "') \n" + 
								"and		INSTR(u.SPHD,'UDC') = 0 \n" +
								"join		ItemCharacteristics ic \n" +
								"on			ic.LITM = i.usualCode \n" +
								"and		ic.ITMCAT = u.KY \n" +
								"and 		COALESCE(ic.value,'NULL') <> 'NULL' \n";
	var characteristicSelect3 = "SELECT		DISTINCT u.dl01 charName, \n" +
								"			cibc.SDSC1 charValue, \n" +
								"			i.ITM articleId \n" +	
								"FROM   	Item i \n" +
								"join		udc u \n" +
								"on			u.sy = '90CA' \n" +  
								"and		u.RT = 'FC' \n" +  
								"and		u.DL01 like '" + charName + "' \n" + 
								"and		u.SPHD = 'DT' \n" +  
								"join		CustomerInstalledBaseCharacteristic cibc \n" +
								"on			cibc.itm = i.itm \n" +
								"and		cibc.itmcat = u.KY \n"; 
	
	var whereClause = "";
	if (!validationModel.isNull(articleIds) && articleIds.length > 0) { 
			whereClause +=		"AND		i.ITM in (" + articleIds.join(",") + ") \n";
	} else {
			whereClause +=		"join		customerInstalledBase cib \n" +
								"on			i.ITM = cib.ITM \n";
		if (!validationModel.isNull(itemIds) && itemIds.length > 0) {
			whereClause +=		"AND		cib.id in (" + itemIds.join(",") + ") \n";
		} else {
			whereClause +=		"AND		cib.numb = " + workOrder.equipmentNumber + " \n";
			whereClause += !validationModel.isNull(isPreIndentified) && isPreIndentified ?
								"AND 		cib.LOTN in ('NULL', '') \n" : "";
		}
	}
	
//	var allocationWhereClause = "join		CustomerInstalledBaseAllocation ciba \n" +
//								"on			i.ITM = ciba.ITM \n" +
//								"and		ciba.sequence = 'DRAFT' \n" +
//								"and		ciba.sessionid = '" + allocationSessionId + "' \n" +
//								"and		COALESCE(ciba.CIBId,'NULL') = 'NULL' \n" +
//								"and		COALESCE(ciba.ITM,'NULL') <> 'NULL' \n";
	
	callBackModel.context.sql =
//		characteristicSelect1 +
//		whereClause +
//		"UNION \n" +
//		characteristicSelect2 +
//		whereClause +
//		"UNION \n" +
//		characteristicSelect3 +
//		whereClause +
//		((!validationModel.isNull(allocationSessionId) && !preWorkOrderState && validationModel.isNull(articleIds)) ? 
//		"UNION \n" +
//		characteristicSelect1 +
//		allocationWhereClause +
//		"UNION \n" +
//		characteristicSelect2 +
//		allocationWhereClause +
//		"UNION \n" +
//		characteristicSelect3 +
//		allocationWhereClause
//		:
//		""
//		);
		characteristicSelect1 +	whereClause +
		"UNION \n" +
		characteristicSelect2 +	whereClause +
		"UNION \n" +
		characteristicSelect3 +	whereClause;
	
	callBackModel.context.sql =
		"select charName, \n" +
		"		charValue, \n" +
		"		group_concat(articleId) articleIds \n" +
		"from 	( " + callBackModel.context.sql + " ) \n" + 
		"group by charValue \n";

	executeSql(callBackModel.context.sql, articleModel.findArticleCharacteristicByNameAndWorkOrderCB, callBackModel.sqlErrorCB);
	
	return articleCharacteric;
}

articleModel.findArticleTypes = function(selectedType) {
  kony.print("selectedType"+selectedType);
	var resultTypes = new Array();
	
	function findArticleTypesCB (r) {
		for (var i = 0; i < r.length; i++)
			resultTypes.push(r[i].KY);
	}
	var wcTypes = {
		sales: "select KY from F56PRM where RMK2 in ('Y','O') and TYDT = 'TA' and SDB = 'KONI' ",
		maintenance: "select KY from F56PRM where RMK3 in ('Y','O') and TYDT = 'TA' and SDB = 'KONI' ",
		recommendations: "select distinct KY from F56PRM where RMK2 in ('Y','O') and TYDT = 'TA' and SDB = 'KONI' ",
		supply : " select distinct KY from F56PRM where TYDT = 'TB' and SDB = 'KONI'",
		completeSupply : "select distinct KY from F56PRM where ((RMK3 in ('Y','O') and TYDT = 'TA') OR TYDT = 'TB') and SDB = 'KONI'",
		replacement : "select KY from F56PRM where RMK2 in ('Y','O') and TYDT = 'TA' and SDB = 'KONI' "
	}
	
	callBackModel.context.sql = wcTypes[selectedType];
	executeSql(callBackModel.context.sql,findArticleTypesCB,callBackModel.sqlErrorCB); 
	return resultTypes;
}
