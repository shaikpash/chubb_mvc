taskModel = {};

/*
 * OPTIONTYPES:
 * 2 -- POSE
 * 3 -- DENATURATION
 * 4 -- ASSOCIATED PRODUCTS (SITE LEVEL)
 * 6 -- ASSOCIATED PRODUCTS
 */
taskModel.findPossibleTasksByArticleAndOptionTypes = function (articleId, optionTypes, workOrder) {

  callBackModel.resultArray = [];	

  if (!validationModel.isNull(articleId) && optionTypes.length > 0) {
    callBackModel.context.sql = "select	itm.description1 ||  CASE WHEN itm.description2 = 'NULL' THEN '' ELSE itm.description2 END name, " +
      "		itmcomp.quantity quantity, " +
      "		itm.itm articleId, " +
      "		itm.usualCode usualCode, " +
      "		itmcomp.optionType optionType " +
      "from	itemComposition itmcomp, " +
      "		item itm " +
      "where	itmcomp.compoundItm = '" + articleId + "' " + 
      "and	itmcomp.optionType in (" + optionTypes.join(",") + ") " + 
      "and	itm.itm = itmcomp.componentItm";

    executeSql(	callBackModel.context.sql, 
               callBackModel.arraySuccessCB,
               callBackModel.sqlErrorCB);
  }

  return callBackModel.resultArray;
}

/*
 * OPTIONTYPES:
 * 2 -- POSE
 * 3 -- DENATURATION
 * 4 -- ASSOCIATED PRODUCTS (SITE LEVEL)
 * 6 -- ASSOCIATED PRODUCTS
 */
taskModel.findPossibleTasksByItemAndOptionTypesWhereClause = function (item, optionTypes, whereClause) {
  callBackModel.resultArray = [];
  callBackModel.context.sql = "select	itm.description1 ||  CASE WHEN itm.description2 = 'NULL' THEN '' ELSE itm.description2 END name, " +
    "		itm.usualCode usualCode " +
    "from	itemComposition itmcomp, " +
    "		item itm " +
    "where	itm.itm = itmcomp.componentItm " +
    "and	itmcomp.compoundITM = " + item.articleId + " " + 
    "and	optionType in (" + optionTypes.join(",") + ") ";

  if (!validationModel.isNull(whereClause)) {
    callBackModel.context.sql += " " + whereClause;
  }

  executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);

  return callBackModel.resultArray;
}

taskModel.findPossibleTasksByExchangeItemOptionTypesAndWhereClause = function (item, optionTypes, whereClause) {
  callBackModel.resultArray = [];
  callBackModel.context.sql = "select	itm.description1 ||  CASE WHEN itm.description2 = 'NULL' THEN '' ELSE itm.description2 END name, " +
    "		itm.usualCode usualCode " +
    "from	itemComposition itmcomp, " +
    "		item itm " + 
    "where	optionType in (" + optionTypes.join(",") + ") " +
    "and 	itmcomp.compoundITM = " + item.articleId + " " +
    "and	itm.itm = itmcomp.componentItm";

  if (!validationModel.isNull(whereClause)) {
    callBackModel.context.sql += " " + whereClause;
  }

  executeSql(	callBackModel.context.sql, 
             callBackModel.arraySuccessCB,
             callBackModel.sqlErrorCB);

  return callBackModel.resultArray;
}

taskModel.findTasksSummaryByWorkOrder = function (workOrder, whereClause) {
  callBackModel.resultArray = [];
  callBackModel.context.sql = "select     UDC.DL01 description1, " +
    "           task.cnt, " +
    "           UDC.KY " +
    "from       UDC, " +
    "           ( select	item.SRP2, " +
    "                        count(*) cnt " +
    "            from 	F56BTDT dt, " +
    "                        F56BT bt, " +	
    "                        item " +
    "            where	dt.LITM = item.usualcode " +
    "            and	dt.DOCO = bt.DOCO " +
    "            and	bt.DOCO = " + workOrder.doco + " " +
    "			and		bt.ANP = " + login.user.AN8 + " ";

  if (!validationModel.isNull(whereClause)){
    callBackModel.context.sql += " and (" + whereClause + ") ";
  }

  callBackModel.context.sql +="            group by  item.SRP2) task " +
    "where      task.SRP2 = UDC.KY " +
    "and	UDC.SY = '41' " +
    "and 	UDC.RT = 'S2' " +
    "and	CAST (substr(UDC.SPHD, 4,3) AS INT) > 10 " +
    "and	CAST (substr(UDC.SPHD, 4,3) AS INT) < 91 "+
    "order by CAST (substr(UDC.SPHD, 4,3) AS INT), description1";

  executeSql(	callBackModel.context.sql, 
             callBackModel.arraySuccessCB,
             callBackModel.sqlErrorCB);

  return callBackModel.resultArray;
}

// Input: "Completed" / "NonCompleted"
taskModel.findTaskCompletionReasonsByType = function (type, workOrder, item, pricingOrigin) {
  
  callBackModel.resultArray = [];
  var article="";
  if(!validationModel.isNull(item)){
    article = articleModel.findArticleByArticleId(item.articleId);
  }

  if (type == 'Completed' || type == 'Sale') {
    var tarifMode = pricing.computeTarifMode(workOrder, item.articleId, pricingOrigin, "GET_REASON_CODES", item);
    var tarifReasonCodes = validationModel.isNull(tarifMode) ? [] : tarifMode.FRGD.map(function(code) { return "'" + code + "'"; });
  }

  callBackModel.context.sql =
    "select id, " +  
    " KY code, " +  
    " DL01 name, " +
    " (CASE WHEN DL02 == 'TITRE' THEN '' ELSE DL02 END) name2, " +  
    " (CASE WHEN DL02 == 'TITRE' THEN 0 ELSE 1 END) isValid " +  
    "from udc " + 
    "where sy = '40' and rt = 'LG' ";

  if (type == 'Completed') {
    callBackModel.context.sql += "and 	SPHD = 'MOTIF_R' ";
    callBackModel.context.sql += "and   ky in (" + tarifReasonCodes.join(",") +  ") ";

  } else if (type == 'NonCompleted') {
    callBackModel.context.sql += "and SPHD = 'MOTIF_N' ";
    // JIRA 835 : new request
    callBackModel.context.sql += "and ky in ( " + 
      "	select KY from F56PRM where SDB = 'KONI' and TYDT = 'MO' " + 
      " and RMK in ('ZZZ', '" + article.pricingFamily + "') " + 
      " and RMK2 in ('ZZZ', '" + article.pricingSubFamily + "'))";
  } else if (type == 'Sale') {
    callBackModel.context.sql += "and SPHD = 'MOTIF_R' ";
    callBackModel.context.sql += "and ky in (" + tarifReasonCodes.join(",") + ") ";
  } else if(type == 'Removed') {
    callBackModel.context.sql += "and SPHD = 'MOTIF_S' ";
  }

  executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);

  return callBackModel.resultArray;
}

taskModel.findTaskCompletionReasonByReasonCode = function (reasonCode) {
  callBackModel.result = undefined;
  callBackModel.context.sql =
    "select id, " +  
    " KY code, " +  
    " DL01 name, " +  
    " (CASE WHEN DL02 == 'TITRE' THEN 0 ELSE 1 END) isValid " +  
    "from udc " + 
    "where sy = '40' and rt = 'LG' and KY = '" + reasonCode + "' " +
    "limit 1";					

  executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
  return callBackModel.result;
}

taskModel.findTasksTypesForWorkOrderAndWhereClause = function (wo, wc) {
  callBackModel.resultArray = [];
  callBackModel.context.sql =
    "select descr.DL01 [type], " +
    " itm.SRP2 typeCode, " +
    " count(btdt.id) taskCount, " +
    " group_concat(btdt.id) taskIds, " +
    " group_concat((CASE WHEN COALESCE(btdt.CK01, 'NULL') == 'NULL' OR length(btdt.CK01) == 0 THEN 'NULL' ELSE btdt.CK01 END)) taskStatuses \n" +
    "from F56BTDT btdt \n" +
    "join Item itm on itm.usualcode = btdt.LITM \n" +
    "join UDC descr on descr.SY = '41' and descr.rt = 'S2' and descr.KY = itm.SRP2 \n" +		
    "where btdt.doco = " + wo.doco + " \n"; 

  if (!validationModel.isNull(wc))
    callBackModel.context.sql += "and (" + wc + ") ";
  callBackModel.context.sql += "group by itm.SRP2 order by descr.SPHD ";

  executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);

  return callBackModel.resultArray;
}

taskModel.updateTasks = function (tasks, deletion) {
  var inputArray = [];

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    if(task.status == 'O') {
      if(validationModel.isNull(task.realDate) || task.realDate == '') {
        var crtDate = dateTimePrintSql(new Date());
        task.realDate = crtDate.substring(0,10);
        task.realTime = crtDate.substring(11);	
      }
    }

    inputArray[i] = {};
    inputArray[i].changeSet = {};
    inputArray[i].changeSet.DOCO = task.doco;
    inputArray[i].changeSet.CK01 = (task.status != '' ) ? task.status : 'NULL';
    inputArray[i].changeSet.STRX = (task.realDate != '') ? task.realDate : 'NULL';
    inputArray[i].changeSet.TMCO = (task.realTime != '') ? task.realTime : 'NULL';
    inputArray[i].changeSet.AA05 = (task.nonCompletionReason != '')? task.nonCompletionReason : 'NULL';
    //Arati: Changed for Kony error ouccred : null start here
    if (!validationModel.isNull(task.isScanned) && task.isScanned != '' ) 
    { 
      inputArray[i].changeSet.URCD = task.isScanned;
    }
    if(validationModel.isNull(task.sparePartId)) {
      inputArray[i].changeSet.SparePartsId = null; 
    }	
    else {
      inputArray[i].changeSet.SparePartsId = task.sparePartId;
    }
    //Changed for Kony error ouccred : null end here	
    inputArray[i].changeSet.HasChangedFlag = true;
    inputArray[i].whereClause = "where id = " + task.id;

    if (true === deletion) {
      inputArray[i].changeSet.DeletedBy = app_parameters.sync.appID;
    }
  }

  de.itgs.WorkOrders.F56BTDT.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB);
}

taskModel.updateParamsForTaskIds = function (params, values, taskIds) {

  var inputArray = [];
  inputArray[0] = {};
  inputArray[0].changeSet = {};
  for (var i = 0; i < params.length; i++) {
    inputArray[0].changeSet[params[i]] = (values[i] != '' ) ? values[i] : 'NULL';
  }
  inputArray[0].changeSet.HasChangedFlag = true;
  inputArray[0].whereClause = "where id in (" + taskIds.join(",") + ")";

  de.itgs.WorkOrders.F56BTDT.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB);
}

taskModel.createTaskByItemAndWorkOrder = function (item, workOrder, taskType, nonCompletionReason, taskUsualCode, sparePart) {

  callBackModel.result = {};

  var valuesArray = {};	
  valuesArray.DOCO = workOrder.doco;
  valuesArray.F56BTId = workOrder.id;
  if (!validationModel.isNull(item)) {
    valuesArray.N001 = item.jdeId;
    valuesArray.cibid = item.id;
  }
  valuesArray.LITM = taskUsualCode;
  valuesArray.SOURCE = 'TPK';
  valuesArray.HasChangedFlag = true;
  valuesArray.markForUpload = true;

  var currentDate = dateTimePrintSql(new Date());
  if (taskType == 'return') { 
    valuesArray.STRX = currentDate.substring(0, 10);
    valuesArray.TMCO = currentDate.substring(11);
    valuesArray.LITM = item.returnCode;
    valuesArray.CK01 = 'O';
    valuesArray.URCD = (!validationModel.isNull(item) && !validationModel.isNull(item.isScanned)) ? item.isScanned : 'N';
    valuesArray.SOURCE = 'TNPK';
  } else if (taskType == 'nonPlanned' || taskType == 'related') {
    valuesArray.STRX = currentDate.substring(0, 10);
    valuesArray.TMCO = currentDate.substring(11);
    valuesArray.CK01 = 'O';
    valuesArray.URCD = (!validationModel.isNull(item) && !validationModel.isNull(item.isScanned)) ? item.isScanned : 'N';
    valuesArray.SOURCE = (taskType == 'nonPlanned') ? 'TNPK' : 'TRK';
    if (!validationModel.isNull(sparePart)) valuesArray.SparePartsId = sparePart.id;
  }

  if (nonCompletionReason != undefined) {
    valuesArray.AA05 = nonCompletionReason;
  }

  if (unitec.lang.isNull(valuesArray.LITM) || valuesArray.LITM.isEmpty()) {
    global.log.warn("taskModel.createTaskByItemAndWorkOrder: LITM (task reference) is empty!");
  }

  de.itgs.WorkOrders.F56BTDT.create(valuesArray, callBackModel.successCB, callBackModel.konyErrorCB, true);
  return callBackModel.result;
}

taskModel.deleteTasks = function(tasks, noSparePartsUpdates) {
  var taskIds = [];
  for (var i = 0; i < tasks.length; i++) {
    if (taskIds.indexOf(tasks[i].id) == -1) {
      taskIds.push(tasks[i].id);
    }
  }

  if (taskIds.length > 0) {
    // Update the hasChangedFlag of the tasks
    taskModel.updateTasks(tasks, true);

    // Delete the spareParts
    if(!noSparePartsUpdates) {
      for (var i = 0; i < tasks.length; i ++) {
        sparePartModel.deleteSparePartsByTask(tasks[i]);
      }		
    }


    // Delete the tasks
    de.itgs.WorkOrders.F56BTDT.remove("where id in (" + taskIds.join(",") + ")", callBackModel.emptyCB, callBackModel.konyErrorCB, true);
  }
}

taskModel.getTaskSummaryForWorkOrder = function(wo, isAdded, whereClause, successCB, errorCB){
  callBackModel.context.sql = 	
    "SELECT" +
    " dt.litm code, " +
    " count(CASE WHEN CK01 != 'O' THEN NULL ELSE CK01 END) done, " +
    " COUNT (*) count, " +
    " count(CASE WHEN CK01 = 'N' THEN CK01 ELSE NULL END) canceled, "+
    " CK01 ck01, "+
    " Coalesce(descr.DL01, '?') description, " +
    " Coalesce(p.price, 0) price, " +
    " Coalesce(p.discountPrice, 0) discountPrice, " +
    " i.srp2 [type] \n " +
    "FROM f56btdt dt \n " +
    "JOIN item i ON i.usualcode = dt.litm \n " +
    "JOIN udc descr ON descr.SY = '41' AND descr.RT = 'S2' AND descr.KY = i.SRP2 \n " +
    "LEFT JOIN \n " +
    " (SELECT sum(Coalesce(sp.PriceEBILL, 0) - Coalesce(sp.PriceEBILL, 0) * sp.DiscountTRDC/100) discountPrice, " +
    "   sum(Coalesce(sp.PriceEBILL, 0)) price, " +
    "   i2.srp2 [type] \n " +
    "  FROM spareparts sp \n " +
    " JOIN f56btdt dt ON dt.id = sp.f56btdtid \n " +
    " JOIN item i2 ON i2.usualcode = dt.litm \n " +
    " WHERE sp.f56btid = " + wo.id + " \n " +
    " GROUP BY i2.srp2) p ON p.[type] = i.srp2 \n " +
    "WHERE dt.F56btid = " + wo.id +"\n";
   // " AND COALESCE(dt.CK01, 'NULL') <>'N' \n ";

  if (!validationModel.isNull(whereClause)) {
    callBackModel.context.sql += "and (" + whereClause + " ) \n"; 
  }

  if (!validationModel.isNull(isAdded)) {
    if (isAdded) {
      callBackModel.context.sql += "and COALESCE(dt.SOURCE, 'NULL') in ('TNPJ', 'TNPK', 'TRJ', 'TRK') "
    } else {
      callBackModel.context.sql += "and COALESCE(dt.SOURCE, 'NULL') in ('NULL', 'TPJ', 'TPK') " 
    }
  }

  callBackModel.context.sql += "group by i.srp2 order by descr.SPHD ";

  executeSql(callBackModel.context.sql, successCB, errorCB);
}


taskModel.findTaskById = function(id){
  var task;
  var tasks = taskModel.findTasksByItemWorkOrderAndWhereClause("and btdt.id = " + id);
  if (tasks.length > 0) task = tasks[0];
  return task;
}

taskModel.findTasksBySpareParts = function (spareParts) {
  var sparePartIds = [];
  for (var i = 0; i < spareParts.length; i++) {
    if (sparePartIds.indexOf(spareParts[i].id) == -1) {
      sparePartIds.push(spareParts[i].id);
    }
  }

  if (sparePartIds.length > 0) return taskModel.findTasksByItemWorkOrderAndWhereClause("and btdt.SparePartsId in (" + sparePartIds.join(",") + ")");
  else return [];
}

taskModel.findTasksByItemWorkOrderAndWhereClause = function (whereClause, item, wo, taskType, orderByClause, maxResults, excludeIds, isNonCodedItemTask, 
                                                              groupByTopology, topologyDepth) {

  callBackModel.resultArray = [];
  if (validationModel.isNull(orderByClause)) orderByClause = " order by sequence ";
  else orderByClause += ", sequence ";
  callBackModel.context.sql = "select	btdt.id id, \n" +
    "		itm.description1 ||  CASE WHEN itm.description2 = 'NULL' THEN '' ELSE itm.description2 END name, \n" +
    "		itm.itm articleId, \n" +
    "		itm.prp0 prp0, \n" +
    ((!validationModel.isNull(isNonCodedItemTask) && isNonCodedItemTask) ?
     "		Coalesce(itm2.description1, '') nonCodedItemName, \n" +
     "		Coalesce(itm2.usualcode, '') nonCodedItemUsualCode, \n" : "") +
    "		btdt.DOCO doco, \n" +
    "		btdt.N001 jdeId, \n" +
    "		btdt.cibid cibid, \n" +
    "		(CASE WHEN COALESCE(btdt.CK01,'NULL') == 'NULL' THEN '' ELSE btdt.CK01 END) status, \n" +
    "		btdt.AA05 nonCompletionReason, \n" +
    "		(CASE WHEN COALESCE(btdt.URCD,'NULL') == 'NULL' THEN '' ELSE btdt.URCD END) isScanned, \n" +
    "		(CASE WHEN COALESCE(btdt.CPNB,'NULL') == 'NULL' THEN '' ELSE btdt.CPNB END) sequence, \n" +
    "		(CASE WHEN COALESCE(btdt.STRX,'NULL') == 'NULL' THEN '' ELSE btdt.STRX END) realDate, \n" +
    "		(CASE WHEN COALESCE(btdt.TMCO,'NULL') == 'NULL' THEN '' ELSE btdt.TMCO END) realTime, \n" +
    "		(CASE WHEN COALESCE(btdt.Y56LIEU,'NULL') == 'NULL' THEN '' ELSE btdt.Y56LIEU END) placement, \n" +
    "		(CASE WHEN COALESCE(btdt.Y56ETAG,'NULL') == 'NULL' THEN '' ELSE btdt.Y56ETAG END) floor, \n" +
    "		(CASE WHEN COALESCE(btdt.Y56EMPLA,'NULL') == 'NULL' THEN '' ELSE btdt.Y56EMPLA END) location, \n" +
    "		(CASE WHEN COALESCE(btdt.Y56ZONL,'NULL') == 'NULL' THEN '' ELSE btdt.Y56ZONL END) zone, \n" +
    "		btdt.LITM usualCode, \n" +
    "        itm.measurementUnit unitOfMeasureCode, " +
    "		btdt.SparePartsId sparePartId, \n" +
    "		(CASE WHEN COALESCE(btdt.source,'NULL') == 'NULL' THEN 'NULL' ELSE btdt.source END) source, \n" +
    "		(select dl01 from UDC where ky = btdt.AA05 limit 1) reasonLabel, \n" + 
    "		(select (CASE WHEN COALESCE(SPHD,'NULL') == 'NULL' THEN 3 ELSE SPHD END) from udc where sy = '41' and rt = '05' and KY = itm.PRP0 limit 1) type, \n" +
    "		(select (CASE WHEN COALESCE(DL02,'NULL') == 'NULL' THEN '' ELSE DL02 END) from udc where sy = '41' and rt = '05' and KY = itm.PRP0 limit 1) DL02, \n" +
    "		CAST (substr(descr.SPHD, 4,3) AS INT) priority \n" + 
    "from	F56BTDT btdt \n";
  callBackModel.context.sql += (!validationModel.isNull(item)) ?
    "join 	CustomerInstalledBase cib \n" +
    "on		cib.id = btdt.cibid	\n" : "";
  callBackModel.context.sql += (!validationModel.isNull(isNonCodedItemTask) && isNonCodedItemTask) ?
    "left join 	Item itm2 \n" +
    "on		itm2.usualcode = btdt.KITL \n" : "";
  callBackModel.context.sql +="join	Item itm \n" +
    "on		itm.usualcode = btdt.LITM \n" + 
    "join	udc descr \n" +
    "on		descr.SY = '41' \n" + 
    "and 	descr.rt = 'S2' \n" +
    "and 	descr.KY = itm.SRP2 \n" +
    "where  1 = 1 \n";

  callBackModel.context.sql += (!validationModel.isNull(wo)) ? 
    "and	btdt.doco = "+ wo.doco + " \n" : "";
  callBackModel.context.sql += (!validationModel.isNull(item)) ? 	
    "and 	btdt.cibid = " + item.id + " \n" : "";
  callBackModel.context.sql += (!validationModel.isNull(excludeIds) && excludeIds.length > 0) ? 
    "and	btdt.id not in (" + excludeIds.join(",") + ") \n" : "";
  callBackModel.context.sql += (!validationModel.isNull(whereClause)) ? 
    " " + whereClause : "";

  if (!validationModel.isNull(taskType) && taskType == 'planned') {
    callBackModel.context.sql += 
      "and COALESCE(btdt.SOURCE, 'NULL') in ('NULL', 'TPJ', 'TPK') \n" + 
      "and itm.PRP0 in (select KY from udc where sy = '41' and rt = '05' and SPHD in ('2','3')) \n" +
      orderByClause;
  } else if (!validationModel.isNull(taskType) && taskType == 'nonPlanned' && !validationModel.isNull(item)) {
    callBackModel.context.sql += 
      "and COALESCE(btdt.SOURCE, 'NULL') in ('TNPJ', 'TNPK') \n" + 
      "UNION \n" +
      "select  0 id, \n" + 
      "		 itm.description1 ||  CASE WHEN itm.description2 = 'NULL' THEN '' ELSE itm.description2 END name, \n" +
      "		 itm.itm articleId, \n" +
      "		 itm.prp0 prp0, \n" +
      "		 " + wo.doco + " doco, \n" +
      "		 0 jdeId, \n" +
      "		 0 cibid, \n" +
      "		 '' status, \n" + 
      "		 null nonCompletionReason, \n" + 
      "		 '' isScanned, \n" + 	
      "		 0 sequence, \n" + 	
      "           '' realDate, \n" +
      "           '' realTime, \n" +
      "		(CASE WHEN COALESCE(cib.Y56LIEU,'NULL') == 'NULL' THEN '' ELSE cib.Y56LIEU END) placement, \n" +
      "		(CASE WHEN COALESCE(cib.Y56ETAG,'NULL') == 'NULL' THEN '' ELSE cib.Y56ETAG END) floor, \n" +
      "		(CASE WHEN COALESCE(cib.Y56EMPLA,'NULL') == 'NULL' THEN '' ELSE cib.Y56EMPLA END) location, \n" +
      "		(CASE WHEN COALESCE(cib.Y56ZONL,'NULL') == 'NULL' THEN '' ELSE cib.Y56ZONL END) zone, \n" +
      "		 itm.usualcode usualCode, \n" +
      "        itm.measurementUnit unitOfMeasureCode, " +
      "		 null sparePartId, \n" + 	
      "		 'NULL' source, \n" +
      "		 '' reasonLabel, \n" +
      "		 null type, \n" +
      "		 '' DL02, \n" +
      "		CAST (substr(descr.SPHD, 4,3) AS INT) priority \n" + 
      "from \n" +
      "	CustomerInstalledBase cib, \n" +
      "	item itm, \n" +
      "	itemcomposition nome, \n" +
      "	udc descr \n" +
      "where \n" +
      " cib.id = " + item.id + " and \n" +
      " cib.ITM = nome.compoundITM and \n" +
      " nome.componentitm = itm.itm and \n" +
      " descr.SY = '41' and \n" + 
      " descr.rt = 'S2' and \n" +
      " descr.KY = itm.SRP2 \n" +
      "and \n" +
      "	( \n" +
      "		nome.TBM='T' and itm.PRP0 in (select KY from udc where sy = '41' and rt = '05' and SPHD in ('3')) \n" +
      "	OR \n" +
      "		nome.TBM='PA' and itm.PRP0 in (select KY from udc where sy = '41' and rt = '05' and SPHD in ('2')) \n" +
      "	) \n" +
      "and \n" +
      "	itm.usualcode not in \n" +
      "	( \n" +
      "		select ifnull(LITM, 'NULL') from f56btdt where doco = "+ wo.doco +"  and cibid = " + item.id + " \n" +
      "	) \n" +
      orderByClause;
  } else if (!validationModel.isNull(taskType) && taskType == 'related') {
    callBackModel.context.sql += "and COALESCE(btdt.SOURCE, 'NULL') in ('TRK') \n" + 
      "order by btdt.CPNB \n";
  }
  callBackModel.context.sql = (!validationModel.isNull(groupByTopology) && groupByTopology) ?
    "select location, \n" +
    ((validationModel.isNull(topologyDepth) || topologyDepth > 1) ? " floor, \n" : "") +
    ((validationModel.isNull(topologyDepth) || topologyDepth > 2) ? " placement, \n" : "") +
    ((validationModel.isNull(topologyDepth) || topologyDepth > 3) ? " zone, \n" : "") +
    ((validationModel.isNull(topologyDepth) || topologyDepth > 4) ? " nonCodedItemUsualCode, \n" : "") +
    "		nonCodedItemName, \n" +
    "		nonCompletionReason, \n " +
    "		reasonLabel, \n " +
    "		status, \n " +
    "		count(*) quantity, \n" +
    "		group_concat(id) taskIds \n" +
    "from 	( " + callBackModel.context.sql + " ) \n" + 
    "group by location \n" + 
    ((validationModel.isNull(topologyDepth) || topologyDepth > 1) ? ", floor \n" : "") +
    ((validationModel.isNull(topologyDepth) || topologyDepth > 2) ? ", placement \n" : "") +
    ((validationModel.isNull(topologyDepth) || topologyDepth > 3) ? ", zone \n" : "") +
    ((validationModel.isNull(topologyDepth) || topologyDepth > 4) ? ", nonCodedItemUsualCode \n" : "") +
    ", nonCompletionReason \n" +
    ", status \n " +
    "order by location \n" +
    ((validationModel.isNull(topologyDepth) || topologyDepth > 1) ? ", floor \n" : "") +
    ((validationModel.isNull(topologyDepth) || topologyDepth > 2) ? ", placement \n" : "") +
    ((validationModel.isNull(topologyDepth) || topologyDepth > 3) ? ", zone \n" : "") +
    ((validationModel.isNull(topologyDepth) || topologyDepth > 4) ? ", nonCodedItemUsualCode \n" : "") +
    ", nonCompletionReason \n" + 
    ", status \n" :
  callBackModel.context.sql;

  callBackModel.context.sql += !validationModel.isNull(maxResults) ?
    " limit " + maxResults : "";					
  executeSql(	callBackModel.context.sql, 
             callBackModel.arraySuccessCB,
             callBackModel.sqlErrorCB);
  return callBackModel.resultArray;
}

taskModel.findTaskDetailsByWorkOrderAndTask = function (workOrder, task, excludeIds, whereClause, sortOrder) {

  taskModel.getIdSelect =	function () {
    var idSelect =	"select cib.id " + 
        "from 	CustomerInstalledBase cib, " +
        "		Item i " +
        whereClause;
    idSelect += excludeIds.length > 0 ? " and cib.id not in (" + excludeIds.join(",") + ")" : "";
    return idSelect;
  }

  callBackModel.resultArray = [];
  callBackModel.context.sql = "SELECT dt.id id, " +
    "           ib.N001 jdeId, " +
    "           ib.id itemId, " +
    "			CASE  " +
    "				WHEN dt.N001 <> dt.Y56ZONL  " +
    "				and COALESCE(dt.Y56ZONL,'NULL') <> 'NULL' " +
    "				THEN dt.Y56ZONL " +
    "				else 0  " +
    "			END replacement, " +
    "			ib.LOTN batchNumber, " +
    "           (select  UDC.DL01 from UDC where SY = '41' and RT = 'S2' and UDC.KY = '" + task.KY + "' ) desc1, " +
    "           (select description1 || CASE WHEN description2 = 'NULL' THEN '' ELSE description2 END from item where itm = ib.ITM) name, " +
    "           (CASE WHEN COALESCE(ib.Y56LIEU,'NULL') == 'NULL' THEN '' ELSE ib.Y56LIEU END) placement, " +
    "           (CASE WHEN COALESCE(ib.y56ETAG,'NULL') == 'NULL' THEN '' ELSE ib.y56ETAG END) floor, " +
    "           (CASE WHEN COALESCE(ib.y56EMPLA,'NULL') == 'NULL' THEN '' ELSE ib.y56EMPLA END) location, " +
    "           ib.SVDB productionDate " +
    "from       F56BTDT dt, " +
    "           item, " +
    "           F56BT bt, " +
    "           CustomerInstalledBase ib " +
    "where      dt.DOCO = bt.DOCO " +
    "and  COALESCE(dt.N001,'NULL') <> 'NULL' " +
    "and  ib.id = dt.cibid " +
    "and  bt.DOCO =  " + workOrder.doco + " " +
    "and	bt.ANP = " + login.user.AN8 + " " +
    "and item.usualcode = dt.LITM " +
    "and    COALESCE(dt.source,'NULL') = 'NULL' " +
    "and  item.SRP2 =  '" + task.KY + "' ";
  callBackModel.context.sql += (!validationModel.isNull(excludeIds) && excludeIds.length > 0) ?
    "and dt.id not in (" + excludeIds.join(",") + ") " : "";

  callBackModel.context.sql += (!validationModel.isNull(whereClause)) ?
    " " + whereClause : "";


  callBackModel.context.sql += " union " +
    "select     dt.id id, " +
    "           '' jdeId, " +
    "           item.id itemId, " +
    "			0 replacement, " +
    "           '' batchNumber, " +
    "           (select  UDC.DL01 from UDC where SY = '41' and RT = 'S2' and UDC.KY = '" + task.KY + "' ) desc1, " +
    "           (select description1 || CASE WHEN description2 = 'NULL' THEN '' ELSE description2 END from item where usualcode = dt.KITL) name, " +
    "           (CASE WHEN COALESCE(dt.Y56LIEU,'NULL') == 'NULL' THEN '' ELSE dt.Y56LIEU END) placement, " +
    "           (CASE WHEN COALESCE(dt.y56ETAG,'NULL') == 'NULL' THEN '' ELSE dt.y56ETAG END) floor, " +
    "           (CASE WHEN COALESCE(dt.y56EMPLA,'NULL') == 'NULL' THEN '' ELSE dt.y56EMPLA END) location, " +
    "           '' productionDate " +
    "from       F56BTDT dt, " +
    "           item, " +
    "           F56BT bt " +
    "where      dt.DOCO = bt.DOCO " +
    "and  COALESCE(dt.N001,'NULL') = 'NULL' " +
    "and  bt.DOCO =  " + workOrder.doco + " " +
    "and	bt.ANP = " + login.user.AN8 + " " +
    "and item.usualcode = dt.LITM " +
    "and    COALESCE(dt.source,'NULL') = 'NULL' " +
    "and  item.SRP2 =  '" + task.KY + "' ";
  callBackModel.context.sql += (!validationModel.isNull(excludeIds) && excludeIds.length > 0) ?
    "and 	dt.id not in (" + excludeIds.join(",") + ") " : ""; 
  callBackModel.context.sql += (!validationModel.isNull(whereClause)) ? 
    " " + whereClause + " " : "";
  callBackModel.context.sql += (!validationModel.isNull(sortOrder)) ? 
    " " + sortOrder : "";

  executeSql(	callBackModel.context.sql, 
             callBackModel.arraySuccessCB,
             callBackModel.sqlErrorCB);

  return callBackModel.resultArray;

}

taskModel.validateSiteAccessTaskForWorkOrder = function(wo){

  var crtDate = dateTimePrintSql(new Date());
  var inputArray = [
    {
      changeSet : {
        STRX : crtDate.substring(0, 10),
        TMCO : crtDate.substring(11),
        CK01 : 'O',
        HasChangedFlag : true
      },
      whereClause : "where doco = " + wo.doco + 
      " and LITM =  'W00094'"
    }
  ];

  de.itgs.WorkOrders.F56BTDT.updateAll(inputArray,callBackModel.emptyCB,callBackModel.konyErrorCB,true);
}

taskModel.setTasksScannedFlagForItem = function (item, wo){
  // Indicate the item was scanned (Oui or Non) on all related tasks
  // where isScanned was not yet registered ('')
  var isScanned = item.isScanned;
  var tasks = taskModel.findTasksByItemWorkOrderAndWhereClause(undefined, item, wo);
  for (var i = 0; i < tasks.length; i ++) {
    if (validationModel.isNull(tasks[i].isScanned) || tasks[i].isScanned == '') {
      tasks[i].isScanned = isScanned;
      taskModel.updateTasks([tasks[i]]);
    }
  }
}

taskModel.findTaskTypesByWorkOrderAndWhereClause = function(workOrder, whereClause) {

  callBackModel.resultArray = [];

  callBackModel.context.sql =	"	select	prm.RMK2 " +
    "	from 	F56BTDT dt " +
    "	join	Item " +
    "	on 		Item.usualcode = dt.LITM, " +
    "			F56PRM prm " +
    "	where 	prm.TYDT = 'E7' " +
    "	and		prm.SDB = 'KONI' " +
    "	and		dt.DOCO = " + workOrder.doco + " " +
    "	and 	PRM.KY = Item.SRP2 ";

  callBackModel.context.sql += (!validationModel.isNull(whereClause)) ? 
    " " + whereClause + " " : "";

  executeSql(	callBackModel.context.sql, 
             callBackModel.arraySuccessCB,
             callBackModel.sqlErrorCB);

  return callBackModel.resultArray;
}



taskModel.findChubbTasksByWorkOrder = function (workOrder) {
  callBackModel.resultArray = [];
  callBackModel.context.sql =
    " select  group_concat(dt.id) ids, " + 
    "    group_concat(dt.cibid) itemIds, " + 
    "    (case when dt.CK01 == 'O' then 1 else 0 end) isCompleted, " + 
    "    (case when dt.CK01 == 'N' then 1 else 0 end) isCancelled, " + 
    "    dt.CK01 status, " + 
    "    itm.srp2 subFamilyCode, " + 
    "    udc.dl01 subFamilyName, " + 
    "    count(dt.id) quantity, " + 
    "	(case when coalesce(prm.DYUD, 0) = 'NULL' then 0 else prm.DYUD end) type, " +
    "    CAST (substr(udc.SPHD, 4,3) AS INT) orderByValue " + 
    " from     f56btdt dt " +
    " join   item itm " +
    " on    itm.usualcode = dt.LITM " + 
    " join   f56prm prm " + 
    " on       prm.KY = itm.srp2 " + 
    " and      prm.TYDT = 'E7' " + 
    " and   prm.SDB = 'KONI' " + 
    " and   prm.RMK = '" + workOrder.equipmentActivity + "' " + 
    " join  udc " + 
    " on       udc.KY = itm.srp2 " + 
    " and      udc.SY = '41' " + 
    " and      udc.RT = 'S2' " + 
    " join  CustomerInstalledBase cib " +
    " on    dt.cibid = cib.id " +
    " where    dt.doco = " + workOrder.doco + " " +
    " and 	COALESCE(dt.SOURCE, 'NULL') in ('NULL', 'TPJ', 'TPK') " + 
    " and      prm.DYUD in(null, 'NULL', 0, 1) " +
    " and   cib.Y56INDLA = 'A' " +
    " and      CAST (substr(udc.SPHD, 4,3) AS INT) > 10 " + 
    " and      CAST (substr(udc.SPHD, 4,3) AS INT) < 91 " + 
    " group by itm.srp2, dt.CK01, prm.DYUD " + 
    " order by  orderByValue, subFamilyCode, status ";

  executeSql(	callBackModel.context.sql, 
             callBackModel.arraySuccessCB,
             callBackModel.sqlErrorCB);

  return callBackModel.resultArray;
}

taskModel.findDistinctTaskFamiliesByWorkOrderAndWhereClause = function(workOrder, whereClause) {

  callBackModel.resultArray = [];

  callBackModel.context.sql =	"	select	distinct SRP2 " + 
    "	from 	Item " +
    "	join 	F56BTDT dt on dt.LITM = Item.usualcode " + 
    "	join 	UDC on UDC.KY = Item.SRP2 " +
    "	where 	UDC.SY = '41' " +
    "	and 	UDC.RT = 'S2' " +
    "	and 	dt.DOCO = " + workOrder.doco + " " +
    "	and		CAST (substr(UDC.SPHD, 4,3) AS INT) > 10 " +
    "	and		CAST (substr(UDC.SPHD, 4,3) AS INT) < 91 ";


  callBackModel.context.sql += (!validationModel.isNull(whereClause)) ? 
    " " + whereClause + " " : "";

  executeSql(	callBackModel.context.sql, 
             callBackModel.arraySuccessCB,
             callBackModel.sqlErrorCB);

  return callBackModel.resultArray;
}


taskModel.unRuleUnDisableDevice = function(docoNumber){
  var inputArray = [];
  inputArray[0] = {};
  inputArray[0].changeSet = {};
  inputArray[0].changeSet.HasChangedFlag = 1;
  inputArray[0].changeSet.CK01 = 'N';
  inputArray[0].changeSet.AA05 = 'N98';

  inputArray[0].whereClause = " where id in "+
    "(select f56btdt.id from F56BT,f56btdt,customerInstalledBase where "+
    "f56bt.doco = f56btdt.doco and f56btdt.cibid = customerInstalledBase.id "+
    "and F56BT.srst < 70 and F56BT.typs = 'V' and f56btdt.CK01 = 'NULL' "+
    "and f56btdt.source = 'NULL' and customerInstalledBase.Y56indla = 'D'  "+
    "and f56bt.doco = "+docoNumber+")";

  de.itgs.WorkOrders.F56BTDT.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB);

}

taskModel.initState = function(item, tasks) {
	var keepState = false;
	databaseModel.openDBExchange('Mise à jour en cours...');
	for(var i=0; i<tasks.length && !keepState; i++){
		keepState = (!validationModel.isNull(tasks[i].realDate) && tasks[i].realDate != "");
	}
  
  if(!keepState) {

    inputArray = [{}];
	inputArray[0].changeSet = {};
    inputArray[0].changeSet.HasChangedFlag = true;
	inputArray[0].changeSet.ETAT = null;
    inputArray[0].changeSet.ETATCIBCId = null;
	inputArray[0].whereClause = "where id = "+ item.id +" ";
    de.itgs.WorkOrders.CustomerInstalledBase.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB);
    
    itemVerify.item.statusReason = null;
    itemVerify.item.statusReasonId = null;
    
  }
  databaseModel.closeDBExchange();
};

taskModel.totalHTFromBT = function(wo){
  callBackModel.context.sql = "select Round(sum(UORG * ESUNB), 2) total FROM F56BTCO where DOCO = "+wo.doco;
  
 	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
  return callBackModel.resultArray[0]?callBackModel.resultArray[0].total:null;
	
}

taskModel.totalHTtoOrder = function(wo){
  callBackModel.context.sql = "select F56preco.doco, "+
  "Round(sum((F56PRECOITEMS.quantity-F56PRECOITEMS.quantitydelivered)*(F56PRECOITEMS.grossprice*(1-(F56PRECO.discount/100)))), 2) total "+
"from F56PRECOITEMS,F56preco, F56BT where F56PRECOITEMS.F56PRECOiD = F56preco.id and F56preco.status in ('Ordered','delivered','Sold') "+
"and F56PRECOITEMS.quantity <> F56PRECOITEMS.QUANTITYDELIVERED and F56PRECO.DOCO = F56BT.DOCO and F56BT.DOCO = "+wo.doco+" group by F56preco.DOCO";
   	callBackModel.resultArray = [];
  	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);

    return callBackModel.resultArray[0]?callBackModel.resultArray[0].total:null;

}


