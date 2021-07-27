maintenanceModel = {};
maintenanceModel.context = {
  sql: null
};

maintenanceModel.findMaintenanceHistoryByItem = function (item) {

  callBackModel.resultArray = [];
  callBackModel.context.sql = "select I.usualcode usualcode, i.ITM itm, c.id cibid, I.description1 ||  I.description2 taskName, lcpd taskLastExecutionDate, pnst taskNextExecutionDate, F561207.id taskId, F56BTDT.LITM dtlitm "+
" from CustomerInstalledBase c INNER JOIN ItemComposition ic on c.itm = ic.compoundITM and tbm = 'T' "+
" INNER JOIN item i on ic.componentITM = i.itm and I.SRP9 in ('VIS','REG') AND I.SRP7 != 'NULL' "+
" LEFT OUTER JOIN F561207 on F561207.cibid = c.id and PMC2 in ('VIS','REG') and F561207.itm = ic.componentITM "+
" LEFT OUTER JOIN F56BTDT ON F56BTDT.DOCO = "+workOrder.doco+" and F56BTDT.cibid = "+item.id+" AND F56BTDT.LITM = usualcode  and F56BTDT.source = 'NULL' where c.id = "+item.id+
 " and (COALESCE(C.N001, 'NULL') = 'NULL' or (COALESCE(C.N001, 'NULL') != 'NULL' and COALESCE(F561207.CIBID, 'NULL') != 'NULL'))";
  
// alert(callBackModel.context.sql);
  executeSql(	callBackModel.context.sql,
             callBackModel.arraySuccessCB,
             callBackModel.sqlErrorCB);

  return callBackModel.resultArray;
}

maintenanceModel.updateMaintenanceHistoryByItem = function (item, customer) {

  function createMaintenanceHistoryByItem() {
		//
    }

    if (item.newMaintenanceHistory.length > 0) {
      var inputArray = [];
      for (var i = 0; i < item.newMaintenanceHistory.length; i ++) {
        if(item.newMaintenanceHistory[i].taskId != null){
          var element = {};
          element.changeSet = {};
          element.changeSet.HasChangedFlag = true;
          element.changeSet.LCPD = item.newMaintenanceHistory[i].taskLastExecutionDate;
          element.whereClause = "where id = " + item.newMaintenanceHistory[i].taskId;
          inputArray.push(element);
        }

      }

      de.itgs.WorkOrders.F561207.updateAll(	inputArray,
                                           createMaintenanceHistoryByItem,
                                           callBackModel.konyErrorCB);

    }
}

maintenanceModel.createMaintenanceHistoryByItem = function (item, customer, wo) {
  if(item.newMaintenanceHistory.length > 0){
    var inputArray = [];
    function createF561207CB() {
     //
    }

    for (var i = 0; i < item.newMaintenanceHistory.length; i ++) {
      if(item.newMaintenanceHistory[i].taskId == null){
        var element = {};
        element = {};
        element.AITM = item.newMaintenanceHistory[i].usualcode;
        element.cibid = item.newMaintenanceHistory[i].cibid;
        element.LCPD = item.newMaintenanceHistory[i].taskLastExecutionDate;
        element.NUMB = wo.equipmentNumber;
        element.N001 = item.jdeId;
        element.HasChangedFlag = true;
        element.ITM = item.newMaintenanceHistory[i].itm;
        element.PMC2 = 'REG';
        element.LITM = item.newMaintenanceHistory[i].usualcode;
        inputArray.push(element);
      }

    }

    de.itgs.WorkOrders.F561207.createAll(inputArray, createF561207CB, callBackModel.konyErrorCB);
  }
}

