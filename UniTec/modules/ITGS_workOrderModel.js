workOrderModel = {};
callBackModel.context = {
	sql: null
};

workOrderModel.getWorkOrderDataByDoco = function (doco, columns) {
	if (validationModel.isNull(columns))
		var select = '*';
	else if (columns instanceof Array)
		var select = columns.join(', ');
	else
		var select = columns;

	callBackModel.context.sql = "select " + select + " from F56BT where DOCO = " + doco + " limit 1";

	callBackModel.result = null;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);

	return callBackModel.result;
};

//Arati: Chnaged code for JIRA UI-89 start here 
workOrderModel.getWorkOrderCountByDoco = function (doco) {
	
    callBackModel.context.sql = "select count(*) from F56BTDT where DOCO = " + doco;  
   
  	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
};
//Arati: Chnaged code for JIRA UI-89 end here 

workOrderModel.getVisitTypeByDoco = function(doco) {

	var visitLbl = null;

	function getVisitTypeByDocoCB(r) {
		if(!validationModel.isNull(r) && r.length > 0) {
			visitLbl = r[0].visitLbl;
		}
	};

	callBackModel.context.sql =
		"select	u.dl01 visitLbl " +
		"from 	f56BT bt " +
		"join 	udc u " +
		"on 	u.SY = '00' and u.RT = 'W4' and u.KY = bt.WR04 " +
		"where 	bt.doco = " + doco + " " +
		"limit 	1 ";

	callBackModel.executeWithCB(getVisitTypeByDocoCB);

	return visitLbl;
};

workOrderModel.createWorkOrdersPlannings = function(workOrders) {
	var valuesArray = new Array(workOrders.length);
	for (var i = 0; i < valuesArray.length; i++) {
		valuesArray[i] = {
			TYTN : "PRV",
			AN8 : workOrders[i].user,
			SUBJECT : "NULL",
			LOCATION : "NULL",
			TDSTR : workOrders[i].startDate,
			TDEND : workOrders[i].endDate,
			COMITLVL : 2,
			ATVCD5 : workOrders[i].instance,
			DOCO : workOrders[i].doco,
			OPSQ : "NULL",
			AA10 : "NULL",
			EV01 : "NULL",
			UPMJ : datePrintCustom(new Date(), "yyyy-MM-dd"),
			TDAY : datePrintCustom(new Date(), "hh:mm:ss"),
			HasChangedFlag : true
		};
	}
	de.itgs.WorkOrders.F56301W.createAll(valuesArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
};

workOrderModel.findWorkOrdersGroupingByWorkOrder = function(workOrder, typeCode) {
	var whereClause = (validationModel.isNull(workOrder.said) || workOrder.said == '')
		?	" where bt.DOCO = " + workOrder.doco + " "
		:	" where bt.SAID = '" + workOrder.said + "' ";
		whereClause += " and statusCode >= 33 and statusCode <= 66 ";
  if(typeCode){
    whereClause += " and typeCode in ("+ typeCode +")";
  }
	var sortOrder = " order by doco ";

	var workOrders = workOrderModel.findWorkOrdersByWhereClauseAndSortOrder(whereClause, sortOrder);
	return workOrders;
}

workOrderModel.setPlannings = function(workOrderDOCOs, allNewPlannings) {
	var whereClause = " where TYTN = 'PRV' and DOCO IN (" + workOrderDOCOs.join(', ') + ") and AN8 = '" + login.user.AN8 + "' ";
	var allCurrentPlannings = workOrderModel.findPlanningsByWhereClauseAndSortOrder(whereClause);

	for (var i = 0;i < workOrderDOCOs.length; i++) {
		var docoRef = workOrderDOCOs[i];

		function belongsToWorkOrder(line) {
			return (line.doco == docoRef || line.DOCO == docoRef);
		}

		var newPlannings = allNewPlannings.filter(belongsToWorkOrder);
		var currentPlannings = allCurrentPlannings.filter(belongsToWorkOrder);
		var difference = currentPlannings.length - newPlannings.length;

		// first step : remove or add the excedent lines
		if (difference > 0) { // planning lines must be deleted from the database
			var planningsToRemove = currentPlannings.splice(newPlannings.length, difference);
			workOrderModel.removePlanningsById(planningsToRemove);
		}
		else if (difference < 0) { // planning lines must be added to the database
			var planningsToAdd = newPlannings.splice(currentPlannings.length, Math.abs(difference));
			workOrderModel.createWorkOrdersPlannings(planningsToAdd);
		}

		// second step : update the remaining lines
		difference = currentPlannings.length - newPlannings.length;
		if (difference != 0) { // a difference stills exists
			kony.print('a difference of planning data still exists between current and new plannings : function "setPlannings" stopped');
			return;
		}

		for (var j = 0; j < newPlannings.length; j++) {
			var nextPlanningUpdate = {
				id : currentPlannings[j].id,
				startDate : newPlannings[j].startDate,
				endDate : newPlannings[j].endDate,
				instance : newPlannings[j].instance
			};
			workOrderModel.updatePlanning(nextPlanningUpdate);
		}
	}
};

workOrderModel.updatePlanning = function(planning) {
	var crtDate = new Date();
	var dataChangeSet = {
		TDSTR : dateFunctions.isAValidDate(planning.startDate, "2442-01-01"),
		TDEND : dateFunctions.isAValidDate(planning.endDate, "2443-01-01"),
		ATVCD5 : planning.instance,
		UPMJ : datePrintCustom(crtDate, "yyyy-MM-dd"),
		TDAY : datePrintCustom(crtDate, "hh:mm:ss"),
		HasChangedFlag : true
	};
  
	var inputArray = [{
		changeSet : dataChangeSet,
		whereClause : "where id = " + planning.id + " "
	}];

	de.itgs.WorkOrders.F56301W.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
};

workOrderModel.removePlanningsById = function(plannings) {
	var idArray = new Array();
	for (var i = 0; i < plannings.length; i++) {
		idArray[i] = plannings[i].id;
	}

	var whereClause = " where id in (" + idArray.join() + ") ";

	var values = {};
	values.HasChangedFlag = true;
	values.DeletedBy = app_parameters.sync.appID;
	de.itgs.WorkOrders.F56301W.update(whereClause, values, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
	de.itgs.WorkOrders.F56301W.remove(whereClause, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}

workOrderModel.findDistinctWorkOrderParamsByNameAndWhereClause = function (paramName, paramAlias, whereClause) {
	workOrderModel.findDistinctWorkOrderParamsByNameAndWhereClauseCB = function (l_resultArray) {
		if (!validationModel.isNull(l_resultArray) && l_resultArray.length > 0) {
			for (var i = 0 ; i < l_resultArray.length; i++) {
				callBackModel.resultArray.push(l_resultArray[i][paramAlias]);
			}
		}
	}

	callBackModel.context.sql =
		"select distinct " + paramName + " " + paramAlias + " " +
		"from f56bt bt " +
		"left join customer cust on bt.said = cust.an8 and cust.Originalid = 0 ";

	if (!validationModel.isNull(whereClause) && whereClause.length > 0) {
		callBackModel.context.sql += " " + whereClause + " and COALESCE(" + paramName + ", 'NULL') <> 'NULL'";
	} else {
		callBackModel.context.sql += " where COALESCE(" + paramName + ", 'NULL') <> 'NULL'";
	}
	callBackModel.context.sql += " and bt.ANP = " + login.user.AN8;
	callBackModel.context.sql += " ORDER BY "+paramAlias+" asc";
	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, workOrderModel.findDistinctWorkOrderParamsByNameAndWhereClauseCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

workOrderModel.findWorkOrderByDoco = function (doco) {
	var workOrders = workOrderModel.findWorkOrdersByWhereClauseAndSortOrder(" where bt.doco = " + doco, undefined, 1);

	if (workOrders.length == 1) {
		return workOrders[0];
	}

	return workOrders;
}

workOrderModel.findWorkOrderByWhereClause = function(whereClause) {
    var workOrder = workOrderModel.findWorkOrdersByWhereClauseAndSortOrder(" where bt.srst = " + whereClause, undefined, 1);
    if(workOrder.length > 0){
    return workOrder[0];
    }
    else{
    return null;
    }

}

workOrderModel.findAllWorkOrders = function () {
	return workOrderModel.findWorkOrdersByWhereClauseAndSortOrder();
}

workOrderModel.findInterventionWorkOrders = function() {
	var wc = " where typeCode = 'I' OR typeCode = 'P' OR typeCode = 'G' OR typeCode = 'S' and statusCode < '70' ";
	return workOrderModel.findWorkOrdersByWhereClauseAndSortOrder(wc);
}

workOrderModel.findWorkOrdersByWhereClauseAndSortOrder = function (
	whereClause, sortOrder, limit, bloking) {
	var workOrders = [];
	var userAN8 = validationModel.isNull(login.user.AN8) ? login.candidatUser.AN8 : login.user.AN8;

	workOrderModel.findWorkOrdersByWhereClauseAndSortOrderCB = function (l_workOrders) {
		if (!validationModel.isNull(l_workOrders)) {
			for (var i = 0; i < l_workOrders.length; i++) {
				var workOrder = l_workOrders[i];
				workOrder.task = {};
				workOrder.skin = (!validationModel.isNull(workOrder.color)) ? "sknBT" + workOrder.color : "sbkBTFallback";
				// workOrder.COCH = (workOrder.COCH.length = 1) ? "00".concat(workOrder.COCH) : ((workOrder.COCH.length = 2) ? "0".concat(workOrder.COCH) : workOrder.COCH);
				workOrder.getReference = function (keepItShort) {
					if (keepItShort || validationModel.isNull(workOrder.location))
						return workOrder.doco + ((validationModel.isNull(workOrder.secondTechnician) || workOrder.secondTechnician == "Pas de second technicien")==true?"":(" "+"👥")) ;
					else
						return workOrder.location.concat(' - ').concat(workOrder.doco) + ((validationModel.isNull(workOrder.secondTechnician) || workOrder.secondTechnician == "Pas de second technicien")==true?"":(" "+"👥")) ;
				}

				workOrder.isVia = false;
				if(workOrder.typeCode == 'P') {
					var anyDeliveryTask = taskModel.findDistinctTaskFamiliesByWorkOrderAndWhereClause(workOrder, "and SRP2 = 'TLT' ");
					workOrder.isVia = (anyDeliveryTask.length > 0);
				}

				workOrders.push(workOrder);
			}
		}
	}
var todayDate = new Date().toISOString().slice(0,10);
	callBackModel.context.sql =
		"select \n" +
		" bt.id," +
      	" bt.said said, " +
		" bt.asn2 tariffAgreement," +
		" bt.an8 customerAN8," +
		" bt.anp technicianAN8," +
		" bt.ansa superiorAN8," +
		" bt.dcto dcto," +
      	" bt.urrf subsite, "+
		" coalesce (bt.wr20, 'NULL') chapter,\n" +
		" cust.id siteId," +
		" cust.an8 siteAN8," +
		" cust.corporatename location," +
		" cust.corporatenameadd locationAdd," +
		" cust.address1 address1," +
		" cust.address2 address2," +
		" cust.address3 address3," +
		" cust.city," +
		" cust.zipcode," +
		" (select AC28 from customer where AN8 = bt.AN8 limit 1) AC28,\n" +
		" bt.wr01 equipmentActivity, \n" +
		" (select DL01 from UDC where SY= '00' and RT = 'W1' and KY = bt.WR01) equipmentType," +
		" bt.typs typeCode," +
		" bt.srst statusCode," +
		" bt.numb equipmentNumber,\n" +
		" coalesce((select DL01 from UDCT where SY= '00' and RT = 'SS' and LNPG = 'KO' and KY = bt.SRST), '') status, \n" +
		" coalesce((select DL02 from UDCT where SY= '00' and RT = 'SS' and LNPG = 'KO' and KY = bt.SRST), '') statusShort, \n" +
		" (select DL01 from UDC where SY= '00' and RT = 'TY' and KY = bt.TYPS) type, \n" +
		" bt.strt dateRequested," +
		" bt.seet timeRequested," +
		" bt.trdj dateCreated," +
		" bt.drqj dateStarted," +
		" bt.dpl interventionDateLimit," +
		" bt.pbtm interventionHourLimit," +
		" bt.doco doco," +
		" bt.hrso duration," +
		//" (CASE WHEN COALESCE (bt.WR13, 'NULL') == 'NULL' AND bt.typs == 'V' AND bt.wr01 == 'DET'  THEN 'S-Q7A' ELSE bt.WR13 END) priority,\n" +
        " (CASE WHEN COALESCE (bt.WR13, 'NULL') == 'NULL' AND bt.typs == 'V' AND bt.wr01 == 'DET'  THEN 'Q7A' ELSE bt.WR13 END) priority,\n" +
      	" (SELECT DL01 FROM UDC WHERE SY = '56' AND RT = 'UA' AND KY = bt.WR13) certifications,\n" + 
		" (CASE WHEN COALESCE(bt.SERP,'NULL') == 'NULL' THEN 'NULL' ELSE (\n" +
		"   SELECT DL01 FROM UDC WHERE SY = '56' AND RT = 'C6' AND KY = SUBSTR(bt.SERP,-2)\n" +
		" ) END) delay,\n" +
		" bt.serp services, \n" +
		" (CASE WHEN COALESCE(bt.DOC,'NULL') == 'NULL' THEN '' ELSE bt.DOC END) DOC, \n" +
		" (CASE WHEN COALESCE(bt.COCH,'NULL') == 'NULL' THEN '' ELSE bt.COCH END) COCH, \n" +
		" (CASE WHEN COALESCE(bt.LNID,'NULL') == 'NULL' THEN '' ELSE bt.LNID END) LNID, \n" +
		" (CASE WHEN COALESCE(bt.DCT,'NULL') == 'NULL' THEN '' ELSE bt.DCT END) DCT, \n" +
		" (CASE WHEN COALESCE(bt.KCO,'NULL') == 'NULL' THEN '' ELSE bt.KCO END) KCO, \n" +
		" (CASE WHEN COALESCE(bt.VR02,'NULL') == 'NULL' THEN '' ELSE bt.VR02 END) VR02, \n" +
		" case \n" +
		//"  when coalesce (bt.WR13 , 'NULL') <> 'NULL' \n" +
      	"  when coalesce (bt.WR13 , 'NULL') not in ('NULL','Q7A') \n" +
		"  then (select rmk3 from f56prm colorQx where colorQx.tydt = 'BT' and colorQx.ky = bt.typs and coalesce (colorQx.[rmk], 'NULL') <> 'NULL' limit 1) \n" +
		"  else (select rmk3 from f56prm color where color.tydt = 'BT' and coalesce(color.RMK, 'NULL') = 'NULL' and color.ky = bt.typs limit 1) \n" +
		" end as color, \n" +
		" (select internalname from employee where an8 = bt.anpa) secondTechnician,\n" +
      	" (select count(said) from f56bt where said = bt.said and srst < 70 and bt.srst < 70 ) linkedCount,\n" +
		" bt.signatureId signatureId,\n" +
		//" c.id contractId, " +
		" btre.id summaryId, " +
		" btre.comment summaryText, " +
		" (select (case when rmk3 == 'T2' then 'CHUBB' else 'SICLI' end) from f56prm where ky = bt.wr20 and rmk = bt.wr01 and tydt = 'AC' limit 1) process, " +
		"	bt.lastCheck, \n" +
		" bt.actcount \n" +
		"from		f56bt bt \n" +
		"left join	customer cust on bt.said = cust.an8 and cust.Originalid = 0 and userid = 0 \n " +
		// "and  	cust.type in ('CC','CL') " +
		//"left join contract c on c.doco = bt.DOC and c.CDTE >= "+todayDate+" and c.CSDT <= "+todayDate+ " and c.lnid = bt.lnid and c.numb = bt.numb \n " +
		"left join	f56btre btre on btre.F56btId = bt.id and btre.MOCATCD10 = 'ENTETE BT' \n";
	if (!validationModel.isNull(whereClause) && whereClause.length > 0) {
		callBackModel.context.sql += " " + whereClause + " and bt.ANP = " + userAN8;
	} else {
		callBackModel.context.sql += " where bt.ANP = " + userAN8;
	}
	if (!validationModel.isNull(sortOrder)) {
		callBackModel.context.sql += " " + sortOrder;
	}
	/*if (!validationModel.isNull(limit)) {
		callBackModel.context.sql += " limit " + limit;
	}*/

	executeSql(callBackModel.context.sql, workOrderModel.findWorkOrdersByWhereClauseAndSortOrderCB, callBackModel.sqlErrorCB, undefined, bloking);
	return workOrders;
}

workOrderModel.findWorkOrderInstructionsByWorkOrder = function (workOrder) {
	var workOrderInstructions = {
		client: [],
		equipment: [],
		location: [],
		workOrder: [],
      	echanges: [],
	};

	workOrderModel.findWorkOrderInstructionsByWorkOrderCB = function (l_workOrderInstructions) {
		if (!validationModel.isNull(l_workOrderInstructions)) {
			for (var i = 0; i < l_workOrderInstructions.length; i++) {
				var workOrderInstruction = {id: l_workOrderInstructions[i].id, comment: l_workOrderInstructions[i].comment};
				switch (l_workOrderInstructions[i].type){
					case 'client' :
						workOrderInstructions.client.push(workOrderInstruction);
						break;
					case 'equipment' :
						workOrderInstructions.equipment.push(workOrderInstruction);
						break;
					case 'location' :
						workOrderInstructions.location.push(workOrderInstruction);
						break;
					case 'workOrder' :
                    if(!validationModel.isNull(workOrderInstruction.comment)){
						workOrderInstructions.workOrder.push(workOrderInstruction);
                    }
						break;
                    case 'echanges' :
                    if(!validationModel.isNull(workOrderInstruction.comment)){
						workOrderInstructions.echanges.push(workOrderInstruction);
                		}
						break;
				}
			}
		}
	}

	callBackModel.context.sql =
		"select * \n" +
		"from ( \n" +
		" select trem.id, trem.comment, 'client' type \n" +
		" from 	f56bt bt, ThirdPartyComment trem \n" +
		" where	trem.an8 = bt.AN8 and trem.type = 'CCLI' and bt.doco = " + workOrder.doco + " and bt.ANP = " + login.user.AN8 + " \n" +
		" union \n" +
		" select trem.id, trem.comment, 'location' type \n" +
		" from 	f56bt bt, ThirdPartyComment trem \n" +
		" where	trem.an8 = bt.SAID and trem.type = 'CSITE' and bt.doco = " + workOrder.doco + " and bt.ANP = " + login.user.AN8 + " \n" +
		" union \n" +
		" select teq.id, teq.comment, 'equipment' type \n" + 
		" from 	f56bt bt, F56TEQ teq \n" +
		" where	teq.ANB = bt.numb and bt.doco = " + workOrder.doco + " and bt.ANP = " + login.user.AN8 + " " +
		" union \n" +
		" select re.id, re.comment comment, 'workOrder' type \n" +
		" from 	f56bt bt, F56btre re \n" +
		" where	\n " +
		"  re.doco = bt.doco and bt.doco = " + workOrder.doco + " and coalesce(re.mocatcd10,'NULL') IN ('NULL', 'APPEL') \n" + 
		"  and not exists (select null from f56precoitems where f56btreid = re.id) \n" +
		"  and bt.ANP = " + login.user.AN8 + " " +
      	" union  select re.id, re.comment comment, 'echanges' type \n"+
    	" from f56bt bt, F56btre re  where    re.doco = bt.doco and bt.doco = " + workOrder.doco + " \n"+
    	" and coalesce(re.mocatcd10,'NULL') = 'ECHANGES'  and \n"+
    	" not exists (select null from f56precoitems where f56btreid = re.id)   and bt.ANP = " + login.user.AN8 +" \n"+
		") \n" +
		"order by type, id \n";

	executeSql(callBackModel.context.sql, workOrderModel.findWorkOrderInstructionsByWorkOrderCB, callBackModel.sqlErrorCB);
	return workOrderInstructions;
}

workOrderModel.findWorkOrderItemRequirementsByWorkOrder = function (workOrder) {
	callBackModel.context.sql =
		"select " +
		" (COALESCE(co.uorg, '') || ' ' || " +
		" COALESCE(u.dl01, 'x')  || ' (' || " +
		" co.cpil || ') : ' || " +
		" COALESCE(i.description1, '??') || ', commande : ' || " +
		" CASE co.rorn WHEN 'NULL' THEN 'non' ELSE co.rorn END) comment " +
		"from f56bt bt " +
		"join f56btco co on co.doco = bt.doco and (co.source = 'JDE' or COALESCE(co.source, 'NULL') = 'NULL') " +
		"left join item i on co.cpil = i.usualcode " +
		"left join udc u on u.ky = i.measurementunit and sy = '00' and RT = 'UM' and RT = 'UM' " +
		"where bt.doco = " + workOrder.doco + " and bt.ANP = " + login.user.AN8 + " " +
		"order by co.id";

	callBackModel.resultArray = null;
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

workOrderModel.findWorkOrderLocationByWorkOrderDoco = function (workOrderDoco) {
	var userAN8 = validationModel.isNull(login.user.AN8) ? login.candidatUser.AN8 : login.user.AN8;
	callBackModel.context.sql =
		"select " +
		" bt.numb as equN, " +
		" c.corporatename as sitename, " +
		" COALESCE(c.corporatenameadd, 'NULL') corporatenameadd, " +
		" COALESCE(c.address1, 'NULL') address1, " +
		" COALESCE(c.address2, 'NULL') address2, " +
		" COALESCE(c.address3, 'NULL') address3, " +
		" COALESCE(c.city, 'NULL') city, " +
		" COALESCE(c.zipcode, 'NULL') zipcode, " +
		" COALESCE(e.internalname, 'NULL') internalname, " +
		" COALESCE(c.AN84, 'NULL') employeeAN8, " +
		" COALESCE(media.data, 'NULL') mobile " +
		"from f56BT bt " +
		"left join Customer c on bt.said = c.an8 " +
		"left join Employee e on c.AN84 = e.AN8 " +
		"left join media on media.AN8 = e.an8 and media.PHTP = 'MOB' " +
		"where bt.doco = " + workOrderDoco + " and bt.ANP = " + userAN8;

	callBackModel.result = null;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

workOrderModel.findWorkOrderLocationByWorkOrder = function (workOrder) {
	return workOrderModel.findWorkOrderLocationByWorkOrderDoco(workOrder.doco);
}

workOrderModel.findWorkOrderCustomerByWorkOrderDoco = function (workOrderDoco) {
	var userAN8 = validationModel.isNull(login.user.AN8) ? login.candidatUser.AN8 : login.user.AN8;
	callBackModel.context.sql =
		"select " +
		" bt.numb as equN, " +
		" c.an8 as AN8, " +
		" c.CPGP, " +
		" c.corporatename as sitename, " +
		" COALESCE(c.corporatenameadd, 'NULL') corporatenameadd, " +
		" COALESCE(c.address1, 'NULL') address1, " +
		" COALESCE(c.address2, 'NULL') address2, " +
		" COALESCE(c.address3, 'NULL') address3, " +
		" COALESCE(c.city, 'NULL') city, " +
		" COALESCE(c.zipcode, 'NULL') zipcode, " +
		" COALESCE(e.internalname, 'NULL') internalname, " +
		" COALESCE(c.AN84, 'NULL') employeeAN8, " +
		" COALESCE(media.data, 'NULL') mobile " +
		"from f56BT bt " +
		"left join Customer c on bt.an8 = c.an8 " +
		"left join Employee e on c.AN84 = e.AN8 " +
		"left join media on media.AN8 = e.an8 and media.PHTP = 'MOB' " +
		"where bt.doco = " + workOrderDoco + " and bt.ANP = " + userAN8;

	callBackModel.result = null;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

workOrderModel.findWorkOrderCustomerByWorkOrder = function (workOrder) {
	return workOrderModel.findWorkOrderCustomerByWorkOrderDoco(workOrder.doco);
}

workOrderModel.findSalespersonByWorkOrder = function (workOrder) {
	callBackModel.context.sql =
		"select Customer.AN84 AN8 from F56BT join Customer on F56BT.said = Customer.AN8 " +
		"where F56BT.doco = " + workOrder.doco + " and F56BT.ANP = " + login.user.AN8;

	callBackModel.result = null;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

workOrderModel.findWorkOrderContractByWorkOrder = function (workOrder) {
	callBackModel.context.sql =
		"select" +
		" (select cdte from contract where DOCO = bt.DOC and LNID = bt.LNID) expDate, " +
		" (bt.DOC || '-' || bt.LNID || '-' || COCH) num, " +
		" (select mxmet2 from contract where DOCO = bt.DOC and LNID = bt.LNID) nbvisit, " +
		" (select group_concat(dl01) from contract where DOCO = bt.DOC and NUMB = bt.NUMB and LNTY in ('OP','OPX')) options, " +
		" (select dl01 from udc where sy = '40' and rt = 'EU' and ky = substr(bt.serp,1,2)) type, " +
		" (select dl01 from udc where sy = '56' and rt = 'C6' and ky = substr(bt.serp,5,6)) interventionDelay " +
		"from f56bt bt " +
		"where bt.doco = " + workOrder.doco + " and bt.ANP = " + login.user.AN8;

	callBackModel.result = null;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

workOrderModel.acknoledgeReceivedWO = function(){
	// When a sync is successful,
	kony.print("acknoledgeReceivedWO");

	callBackModel.context.sql = "select id from f56bt where TYPS != 'G' and srst in ('31', '30') and ANP = " + (validationModel.isNull(login.user.AN8) ? login.candidatUser.AN8 : login.user.AN8);
	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	var updatedWO = (callBackModel.resultArray.length > 0);

	if (updatedWO) {
		var ids = callBackModel.resultArray.map(
			function (b) {
				return b.id;
			}
		);
		// pass "new" (31 or 30) WOs to "received" (33)
		var inputArray = [{
			changeSet : { SRST : "33", ApplicationVersion : global.kernel.getQualifiedVersion(), HasChangedFlag : true },
			whereClause : "where id in (" + ids.join(', ') + ")"
		}];

		de.itgs.WorkOrders.F56BT.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
		var agenceEmp = employeeModel.findEmployeeAgencyByEmployee(login.candidatUser.AN8);
		app_parameters.lifetime.society = societyModel.getSocietyByAgence(agenceEmp);
		woPlanify.setPlannification();
	}

	return updatedWO;
}

workOrderModel.findPlanningsByWhereClauseAndSortOrder = function(whereClause, sortOrder) {
	var plannings = new Array();

	workOrderModel.findPlanningsByWhereClauseAndSortOrderCB = function(l_resultArray) {
		if(!validationModel.isNull(l_resultArray) && l_resultArray.length > 0) {
			plannings = l_resultArray;
		}
	};

	callBackModel.context.sql =
		"select id, " +
		" SUBJECT subject, " +
		" LOCATION detail, " +
		" TDSTR startDate, " +
		" TDEND endDate, " +
		" doco, " +
		" ATVCD5 " +
		"from F56301W ";

	if (!validationModel.isNull(whereClause) && whereClause.length > 0) {
		callBackModel.context.sql += " " + whereClause + " ";
	}

	if (!validationModel.isNull(sortOrder) && sortOrder.length > 0) {
		callBackModel.context.sql += " " + sortOrder + " ";
	}

	executeSql(callBackModel.context.sql, workOrderModel.findPlanningsByWhereClauseAndSortOrderCB, callBackModel.sqlErrorCB);
	return plannings;
};

workOrderModel.findWorkOrderPlanningByWorkOrderAndWhereClause = function(workOrder, whereClause) {
	var whereClause2 = " where DOCO = " + workOrder.doco + " ";
	whereClause2 += (!validationModel.isNull(whereClause) && whereClause.length > 0) ? " and " + whereClause : "";

	var workOrderPlannings = workOrderModel.findPlanningsByWhereClauseAndSortOrder(whereClause2);
	var workOrderPlanning = (!validationModel.isNull(workOrderPlannings) && workOrderPlannings.length > 0) ?	workOrderPlanning = workOrderPlannings[0] : null;
	return workOrderPlanning;
};

workOrderModel.updateWorkOrdersGrouping = function(workOrders) {
	var valuesArray = new Array(workOrders.length);
	for (var i = 0; i < valuesArray.length; i++ ) {
		valuesArray[i] = {};
		valuesArray[i].changeSet = {};
		valuesArray[i].changeSet.TDSTR = dateFunctions.isAValidDate(workOrders[i].startDate,"2444-01-01");
		valuesArray[i].changeSet.TDEND = dateFunctions.isAValidDate(workOrders[i].endDate, "2445-01-01");
		valuesArray[i].changeSet.HasChangedFlag = false;
		valuesArray[i].whereClause = "where id = " + workOrders[i].id;
	}

	de.itgs.WorkOrders.F56301W.updateAll(valuesArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
};

workOrderModel.validateWorkOrderEnd = function(wo) {
	workOrder.statusCode = '70';
	var d = new Date();
	var inputArray = [{
		changeSet : {
			SRST : '70',
			STRX : datePrintSql(d),
			TMCO : datePrintCustom(d, "hh:mm:ss.ml"),
			ApplicationVersion : global.kernel.getQualifiedVersion(),
			HasChangedFlag : true
		},
		whereClause : "where doco = " + wo.doco
	}];

	de.itgs.WorkOrders.F56BT.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}

workOrderModel.changeStatus = function(workOrder, status){
	workOrder.statusCode = status;
	var inputArray = [{
		changeSet : {
			SRST : status.toString(),
			ApplicationVersion : global.kernel.getQualifiedVersion(),
			HasChangedFlag : true
		},
		whereClause : "where doco = " + workOrder.doco
	}];

	de.itgs.WorkOrders.F56BT.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}

// This function can be used to update a work order attributes
// it requires as parameters :
// the workorder to modify
// an array of strings indicating the work order's parameters
// an array of strings indicating the corresponding columns in the database
// the two arrays must have the same length.
workOrderModel.updateWorkOrderParams = function(workOrder, paramNames, columnNames) {
	if (paramNames.length != columnNames.length) {
		popupModel.showPopError("erreur dans l'appel de mise à jour de BT");
		return;
	}

	if (paramNames.length == 0) return;

	var valuesArray = {};
	valuesArray.changeSet = {};
	valuesArray.changeSet.HasChangedFlag = true;
	valuesArray.changeSet.ApplicationVersion = global.kernel.getQualifiedVersion();
	for (var i = 0; i < paramNames.length; i++) {
		valuesArray.changeSet[columnNames[i]] = workOrder[paramNames[i]];
	}
	valuesArray.whereClause = "where id = " + workOrder.id;

	de.itgs.WorkOrders.F56BT.updateAll([valuesArray], callBackModel.emptyCB, callBackModel.konyErrorCB, true);
};


// Checks if a workorder is in an opened status
// Goes to it immediatly if it's the case
workOrderModel.reOpenCurrentWO = function(){
	//return false;//Dhaval:Removed as per instruction from Maxime
	callBackModel.context.sql = "select doco from f56bt where srst = 55 and ANP = " + login.user.AN8;
	callBackModel.result = null;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);

	if (validationModel.isNull(callBackModel.result)) {
		return false;
	}

	// load bt
	var doco = callBackModel.result.DOCO;
	workOrder = workOrderModel.findWorkOrderByDoco(doco);
	workOrder.skin = (workOrder['color'] != null) ? "sknBT" + workOrder['color'] : "sbkBTFallback";

	// set the sequence
	sequence.changeTo(
		sequence.values.visitProceeding,
		workOrder);

	// show workorder overview
	kony.print("workOrder :" + JSON.stringify(workOrder));
	workOrderOverview.tab.current = workOrderOverview.tab.info;
	frmWorkOrderOverview.ibtTabPane.activeTabs = [0];
	workOrderOverview.tab.isAlreadyDisplayed = false;
	ibt_PlanificationNeedUpdate = true;

	// prevent coming back to here
	navigationModel.stack = [];
	frmWorkOrderOverview.show();

	// Tel user what's happening
	popupModel.showPopError("Lors de la dernière fermeture de l'application, un BT était en cours de réalisation. Il a été ré-ouvert.");

	return true;
}

workOrderModel.isOnSite = function (wo) {
  if((wo.statusCode) == '55' || (app_parameters.lifetime.switchWorkOrder != null)){
     return true;
     }else{
     return false;
     }
	 
}

workOrderModel.CanBeCheckedByPhone = function(wo) {
	//return (wo.typeCode == 'I' && wo.statusCode < 55);
  if((wo.typeCode == 'I' || wo.typeCode == 'G' || wo.typeCode == 'S') && (wo.equipmentActivity == 'DET' || wo.equipmentActivity == 'EXG' || wo.equipmentActivity == "ALA" || wo.equipmentActivity == "GAR") && (wo.chapter == "002" || wo.chapter == "003") && wo.statusCode < 55){
    return true;
  }else{
    return false;
  }
}

workOrderModel.isTerminated = function (wo) {
	/*if(wo.statusCode >= 70 || app_parameters.lifetime.pause_bool == true){
	return true;
	}*/
	return wo.statusCode >= 70;
}

workOrderModel.hasStarted = function(wo) {
	var currentDate = dateTimePrintSql(new Date());
	var valuesArray = {
		changeSet : {
			STRT : currentDate.substring(0, 10),
			SEST : currentDate.substring(11),
			ApplicationVersion : global.kernel.getQualifiedVersion(),
			HasChangedFlag : true
		},
		whereClause : "where id = " + workOrder.id
	};
	de.itgs.WorkOrders.F56BT.updateAll([valuesArray], callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}


workOrderModel.getDateAndHoursOfBTEnd = function(wo){
	callBackModel.context.sql = "SELECT STRX, TMCO from f56bt WHERE doco = "+wo.doco;
	callBackModel.result = null;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);

	if (validationModel.isNull(callBackModel.result)) {
		return false;
	}else{
		return callBackModel.result;
	}
}

workOrderModel.unRuleUnDisableDevice = function(docoNumber){

	callBackModel.context.sql =
		"update F56BTDT set HasChangedFlag=1,CK01='N',AA05='N98' where id in "+
		"(select f56btdt.id from F56BT,f56btdt,customerInstalledBase where "+
		"f56bt.doco = f56btdt.doco and f56btdt.cibid = customerInstalledBase.id "+
		"and F56BT.srst < 70 and F56BT.typs = 'V' and f56btdt.CK01 = 'NULL' "+
		"and f56btdt.source = 'NULL' and customerInstalledBase.Y56indla = 'D'  "+
		"and f56bt.doco = "+docoNumber+")";

		de.itgs.WorkOrders.F56BTDT.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB);

	//callBackModel.result = null;
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);

}

workOrderModel.canIntermediateQuote = function(wo){
if(wo.statusCode == 70 && wo.process == 'CHUBB'){
	return true;
}else{
	return false;
	}
}


workOrderModel.updateANPA= function(wo, anpa){

	var d = new Date();
	var inputArray = [{
		changeSet : {
			ANPA : anpa,
			ApplicationVersion : global.kernel.getQualifiedVersion()
		},
		whereClause : "where doco = " + wo.doco
	}];

	de.itgs.WorkOrders.F56BT.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);

}

workOrderModel.updateDRQJandSEET = function(wo, drqj, seet){

	var d = new Date();
	var inputArray = [{
		changeSet : {
			DRQJ : dateFunctions.isAValidDate(drqj, "2211-01-01"),
			SEET : seet,
			ApplicationVersion : global.kernel.getQualifiedVersion()
		},
		whereClause : "where doco = " + wo.doco
	}];

	de.itgs.WorkOrders.F56BT.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);

}

workOrderModel.underPlace = function(workOrder){
	// alert(workOrder);
		callBackModel.context.sql = "SELECT MLNM FROM subSite WHERE (originalId = 0 OR originalId = 'NULL') and AN8 = (SELECT DISTINCT SAID FROM F56BT WHERE DOCO = "+workOrder.doco+") AND IDLN = (SELECT DISTINCT URRF FROM F56BT WHERE DOCO = "+workOrder.doco+")";//10905302

	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
		//alert(callBackModel.result);
	if(callBackModel.result != null || callBackModel.result!= undefined){
		return callBackModel.result.MLNM;
	}else{
		return null;
	}
}

//Arati:Changed code for JIRA UI-97 start here
workOrderModel.findWorkOrderBaseSnapshotByWorkOrder = function(workOrder) {
  callBackModel.resultArray = [];
  callBackModel.context.sql =
		"select wobs.id, wobs.F56BTid, wobs.SubFamilyCode, wobs.InitialQuantity \n" +
		"from F56BT bt, WorkOrderBaseSnapshot wobs \n" +
		"where wobs.F56BTid = bt.id and bt.id = " + workOrder.id + "\n";
  executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
  return callBackModel.resultArray;
};

workOrderModel.getTechnicianNameByAgency = function(serviceagencyid){
  callBackModel.resultArray = [];
  callBackModel.context.sql = "select an8,internalname from employee where AT1 like 'ET%' AND serviceagencyid = "+serviceagencyid+" order by internalname";
  executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
  return callBackModel.resultArray;
}

workOrderModel.countLineByDoco = function(doco){
  callBackModel.resultArray = [];
  callBackModel.context.sql = "Select count(*) , date('now'), date(TDSTR) from F56301W where doco = "+doco+" and OPSQ = 6 and date('now') = date(TDSTR)";
  executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
  return callBackModel.resultArray;
}

workOrderModel.findLinkedBTByworkOrder = function(wo, typeCode){
  callBackModel.resultArray = [];
  callBackModel.context.sql = "select count(said) linkedCount from F56BT where said = "+wo.said+" and typs in ("+typeCode+") and srst >= 33 and srst <= 66 "; // need to replace typs by typeCode arguments
  executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
  return callBackModel.resultArray;
}

workOrderModel.findSubSiteByWorkOrder = function(wo){
		callBackModel.context.sql = "SELECT * FROM subSite WHERE (originalId = 0 OR originalId = 'NULL') and AN8 = (SELECT DISTINCT SAID FROM F56BT WHERE DOCO = "+wo.doco+") AND IDLN = (SELECT DISTINCT URRF FROM F56BT WHERE DOCO = "+wo.doco+")";//10905302

	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
		//alert(callBackModel.result);
	if(callBackModel.result != null || callBackModel.result!= undefined){
		return callBackModel.result;
	}else{
		return null;
	}
}

workOrderModel.getF56BTDTfromDoco = function(wo){
  
  
  	callBackModel.context.sql = "SELECT * FROM F56BTDT WHERE DOCO = "+wo.doco;

	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
		//alert(callBackModel.result);
	if(callBackModel.result != null || callBackModel.result != undefined || callBackModel.result != "NULL"){
		return callBackModel.result;
	}else{
		return null;
	}
}

//Arati:Changed code for JIRA UI-97 end here