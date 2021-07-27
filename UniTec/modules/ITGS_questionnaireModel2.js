//Dhaval:Id#10 removed spaces from all sql
questionnaireModel2 = {};
questionnaireModel2.context = {
	sql: null
};

questionnaireModel2.findQuestionnaireByItems = function(articleCodes, topic) {

	callBackModel.resultArray = [];
	
	callBackModel.context.sql = "select prq.ITM prefCode, " +
								"Item.description1 || CASE WHEN Item.description2 = 'NULL' THEN '' ELSE Item.description2 END prefName, " +
								"cat.QSPC catCode, " +
								"cat.DSC1 catName, " +
								"CASE WHEN cat.QSC2 = 'A' THEN 1 ELSE 0 END catReload, " +
								"CASE WHEN cat.QSC1 = 'Z' THEN 0 ELSE 1 END isEditable, " +
								"qst.QTST qstCode, " +
								"qst.DSC1 qstShort, " + 
								"qst.D200 question, " +
								"qst.QTC3 mandatory, " +
								"qst.QTC1 type, " +
								"qst.QTC2 answerType, " +
								"qst.NUMT isNumeric, " +
								"qst.AMAX maxValue, " +
								"qst.AMIN minValue, " +
								"qst.QTRG defValue, " +
								"qst.CDEC decimals, " +
								"qst.SY, " +
								"qst.RT, " +
								"qst.QTC5 ruleCode, " +
								"CASE WHEN coalesce(QTC4, 'NULL') = 'R' THEN qst.TMHD ELSE null END refCopy " +
								"from F56PRQ prq, " +
								"F56CAT cat, " +
								"F56QST qst, " +
								"Item " +
								"where prq.QTST = cat.QSPC " +
								"and cat.QTST = qst.QTST " +
								"and prq.ITM = Item.ITM " +
								"and prq.TSSP = 'S' " +
								"and COALESCE(prq.IT18,'NULL') = 'NULL' " +
								"and prq.EFTJ <= Date() " +
								"and prq.EXDJ > Date() " +
								"and qst.EFFF <= Date() " +
								"and qst.EFFT > Date() " +
								"and prq.ITM in (" + articleCodes.join(',') + ") ";
  if(topic != "CONFORMITY"){
   callBackModel.context.sql += "order by prefCode, prq.TRST, catCode, cat.TSRT, qstCode ";
  }

	
	executeSql(	callBackModel.context.sql, 
				callBackModel.arraySuccessCB,
			 	callBackModel.sqlErrorCB);

	return callBackModel.resultArray;

}

questionnaireModel2.findPreferencesByItem = function(articleCodes) {

	callBackModel.resultArray = [];
	
	callBackModel.context.sql = "select prq.ITM prefCode, " +
								"Item.description1 || CASE WHEN item.description2 = 'NULL' THEN '' ELSE item.description2 END prefName, " +
								"prq.QTST catCode " +
								"from F56PRQ prq " +
								"JOIN Item " +
								"ON Item.ITM = prq.ITM " +
								"where prq.ITM IN ('" + articleCodes.join(',') + "') " +
								"and TSSP = 'S' " +
								"and COALESCE(IT18,'NULL') = 'NULL' " +
								"and prq.EFTJ < Date() " +
								"and prq.EXDJ > Date() " +
								"order by prefCode, TRST ";
	
	executeSql(	callBackModel.context.sql, 
				callBackModel.arraySuccessCB,
			 	callBackModel.sqlErrorCB);

	return callBackModel.resultArray;

}

questionnaireModel2.findCatalogsByCodes = function(catalogCodes) {
	callBackModel.resultArray = [];
	
	callBackModel.context.sql =
		"select QSPC catCode, " +
		" DSC1 catName, " +
		" QTST qstCode " +
		"from F56CAT " +
		"where QSPC IN ('" + catalogCodes.join(',') + "') ";
	
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

questionnaireModel2.findQuestionsByCodes = function(questionCodes) {

	callBackModel.resultArray = [];
	
	callBackModel.context.sql = "select qst.QTST qstCode, " +
								"cat.QSPC catCode, " +
								"CASE WHEN cat.QSC2 = 'A' THEN 1 ELSE 0 END catReload, " +
								"CASE WHEN cat.QSC1 = 'Z' THEN 0 ELSE 1 END isEditable, " +
								"qst.D200 question, " + 
								"qst.QTC3 mandatory, " + 
								"qst.QTC1 type, " + 
								"qst.QTC2 answerType, " +
								"qst.NUMT isNumeric, " +
								"qst.AMAX maxValue, " +
								"qst.AMIN minValue, " +
								"qst.QTRG defValue, " +
								"qst.CDEC decimals, " +
								"qst.SY, " + 
								"qst.RT, " + 
								"qst.QTC5 ruleCode, " +
								"CASE WHEN coalesce(QTC4, 'NULL') = 'R' THEN qst.TMHD ELSE null END refCopy " +
								"from f56QST qst, " +
								"F56CAT cat " +
								"where qst.QTST = cat.QTST " +
								"and qst.EFFF < Date() " +
								"and qst.EFFT > Date() " +
								"and qst.QTST in ('" + questionCodes.join("','") + "')";
	
	executeSql(	callBackModel.context.sql, 
				callBackModel.arraySuccessCB,
			 	callBackModel.sqlErrorCB);

	return callBackModel.resultArray;
};

questionnaire.findComputeDataByRuleCode = function(ruleCode){
// cancelled while data not available	
//	callBackModel.result = {};
//	
//	callBackModel.context.sql =	"select	SPHD " +
//								"from 	UDC " + 
//								"where	SY = '37' " +
//								"and	RT = 'T5' " +
//								"and 	KY = '" + ruleCode + "' " +
//								"limit	1 ";
//								
//	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
//
//	return callBackModel.result;
	
	var relevantPostComputes = ['C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C09'];
	var isPostCompute = 'C08';
	
	if (ruleCode == isPostCompute) return { SPHD : 2 };
	else if (relevantPostComputes.indexOf(ruleCode) >= 0) return { SPHD : 1 };
	else return { SPHD : 0 };
}

questionnaireModel2.findAnswersByQuestionAndWhereClause = function(question, whereClause) {
	callBackModel.context.sql = "select KY id, " +
								"DL01, " +
								"DL02, " +
								"SPHD " +
								"from UDC " +
								"where SY = '" + question.SY + "' " +
								"and RT = '" + question.RT + "' ";
								
	if(!validationModel.isNull(whereClause) && whereClause.length > 0) {
		callBackModel.context.sql += " " + whereClause + " ";
	}
	
	callBackModel.context.sql +="order by KY ";
	
	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

questionnaireModel2.findSetAnswerForQuestionWorkOrderAndItem = function(qst, topic, workOrder, item, isUserSpecific) {
	var whereClause =
		" DOCO = '" + workOrder.doco + "' " +
		"and AN8 = '" + workOrder.siteAN8 + "' " +
		"and LOCN = '" + workOrder.equipmentNumber + "' ";
		
	if (isUserSpecific) {
		whereClause += "and ANO = " + login.user.AN8 + " ";
	}
	
	if (!validationModel.isNull(item)) {
		var additionalWheres = new Array();
		if (!validationModel.isNull(item.jdeId)) additionalWheres.push("  LOTN = '" + item.jdeId.toString() + "' ");
		if (!validationModel.isNull(item.id)) additionalWheres.push("  cibId = " + item.id + " ");
		whereClause += additionalWheres.length >= 0 ? " and ( " + additionalWheres.join(' OR ') + " ) " : "";
	}
	var isNum = (qst.type == 4);
	var result = questionnaireModel2.findAnswerByCodesAndWhereClause(qst.qstCode, qst.catCode, topic, whereClause, isNum); 
	return result;
};

questionnaireModel2.findAnswerByCodesAndWhereClause = function(qstCode, catCode, topic, whereClause, isNum) {
	if (validationModel.isNull(isNum)) isNum = false;
	
	callBackModel.result = {};

	callBackModel.context.sql =
		"select QVAL answerKey, RESP answer " +
		"from  F56REP " +
		"where QTST = '" + qstCode + "' " +
		" and ( " +
		"  coalesce(QVAL, 'NULL') <> 'NULL' " +
		"  or coalesce(RESP, 'NULL') <> 'NULL' " +
		") ";
		
	if (!validationModel.isNull(whereClause))
		callBackModel.context.sql +=  ' and ' + whereClause + ' ';
		
	if (!validationModel.isNull(topic)) 
		callBackModel.context.sql += "and topic = '" + topic + "' ";
		 
	callBackModel.context.sql += "order by QDAT DESC, " +
		"QTIM DESC " +
		"limit  1 ";
	   
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	
	if (!validationModel.isNull(callBackModel.result) && isNum) {
		callBackModel.result.answerKey = callBackModel.result.answerKey.replace(".", ",");
	}
	
	return callBackModel.result;
};

questionnaireModel2.requestResultByRuleCode = function(ruleCode, qstCode, prefCode) {

	var computeRules = {
		'C01' : 0,
		'C02' : 1,
		'C03' : 2,
		'C04' : 3,
		'C05' : 4,
		'C06' : 5,
		'C07' : 6
	};
	var rule = computeRules[ruleCode];
	callBackModel.result = {};
	callBackModel.context.sql = null;
	
	var answer = {
		answer : null,
		answerKey : null
	}
	
	function setExcludedMotivesRequestByRuleAndPrefCode() {
		var resultSql = " ";
		
		if(validationModel.isNull(ruleCode) || validationModel.isNull(prefCode)) return resultSql;
		
		var excludedMotives = new Array();
		
		function setExcludedMotivesRequestByRuleAndPrefCodeCB(res) {
			for(var i=0;i<res.length;i++) excludedMotives.push(res[i].motive);
			if(excludedMotives.length != 0) resultSql = " and t.AA05 not in ('" + excludedMotives.join("','") + "') ";
		}
		
		var request = 	"select distinct p.RMK motive " +
						"from f56prm p, " +
						"Item i " +
						"where p.sdb = 'KONI' " +
						"and p.tydt = 'AV' " +
						"and p.RMK3 = i.usualCode " +
						"and p.KY = '" + ruleCode + "' " +
						"and i.ITM = " + prefCode + " ";
						
		executeSql(request, setExcludedMotivesRequestByRuleAndPrefCodeCB, callBackModel.sqlErrorCB);
		return resultSql;
	}
	
  	function setIncludedMotivesRequestByRuleAndPrefCode() {
		var resultSql = " ";
		
		if(validationModel.isNull(ruleCode) || validationModel.isNull(prefCode)) return resultSql;
		
		var includedMotives = new Array();
		
		function setIncludedMotivesRequestByRuleAndPrefCodeCB(res) {
			for(var i=0;i<res.length;i++) includedMotives.push(res[i].motive);
			if(includedMotives.length != 0) resultSql = " and p.etat  in ('" + includedMotives.join("','") + "') ";
		}
		
		var request = 	"select distinct p.RMK motive " +
						"from f56prm p, " +
						"Item i " +
						"where p.sdb = 'KONI' " +
						"and p.tydt = 'AW' " +
						"and p.RMK3 = i.usualCode " +
						"and p.KY = '" + ruleCode + "' " +
						"and i.ITM = " + prefCode + " ";
						
		executeSql(request, setIncludedMotivesRequestByRuleAndPrefCodeCB, callBackModel.sqlErrorCB);
		return resultSql;
	}
  
	function requestResultByRuleCodeCB(result) {
		if (ruleCode == 'C07') {
			var sum = 0;
			for (var i = 0; i < result.length; i++)
				sum += result[i].value;
			answer.answerKey = sum;
			answer.answer = sum;
		}
		else if (result.length > 0) {
			answer.answerKey = result[0].value;
			answer.answer = result[0].value;	
		}
	}
	
	function setRequestForItems(RMK2){

      var request = "select COUNT(distinct p.id) value "+
      		"from ItemComposition ic, "+
          	"item ip, "+
          	"UDC, " +
          	"CustomerInstalledBase p, "+
          	"ItemCharacteristics c, " +
          	"F56PRM u, "+
          	"item id, "+
          	"F56BT bt "+
            "where bt.DOCO = '" + workOrder.doco + "' "+
            "and p.numb=bt.numb "+
            "and p.y56indla = 'A' "+
            "and p.ITM = ip.itm "+
          	"and UDC.KY = c.itmcat " + 
            "and UDC.SY = '90CA' " +
            "and UDC.DL02 = '"+workOrder.priority+"' "+
            "and ip.ITM = ic.compoundITM "+
            "and ic.tbm = 'T' "+
            "and ic.componentITM = id.ITM "+
          	//"and t.LITM = usualcode " + 
            "and id.SRP2 = u.ky "+
            "and u.TYDT = 'E7' "+
            "and u.SDB= 'KONI' "+
            "and u.RMK2='"+ RMK2 + "' ";
            if(RMK2 == 'MAA'){
              request += "and strftime('%Y')-strftime('%Y',p.SVDB) in (5, 15) ";
            }else if(RMK2 == 'DECEN'){
              request += "and strftime('%Y')-strftime('%Y',p.SVDB) = 10 ";
            }
            else if(RMK2 == 'ES'){
              request += "and (julianday('now') - julianday(p.SVDB)) > 3285 "; // 3285 : number of days in 9 years
            }
            request += "and not exists (select cibid from f56BTDT t where t.doco = bt.doco and t.LITM = id.usualCode and t.cibid = P.id and t.CK01='O')";

		return request;
	}; 
	
	switch(rule){
        
		case computeRules.C01 :
			callBackModel.context.sql =           
				"select c.value charac, COUNT(distinct p.id) value " +
				"from CustomerInstalledBase p " +
				"inner join ItemCharacteristics c on p.ITM = c.ITM "+
				"inner join UDC on UDC.KY = c.itmcat " +
				"left outer join F56BTDT t on p.id = t.cibid "+
              	"left outer join item i on t.LITM = i.usualcode "+
				"left outer join F56PRM prm on i.SRP2 = prm.KY and prm.TYDT = 'E7' and prm.SDB = 'KONI' and prm.AMTU = 1 " +
             	"where  (t.CK01 in ('O') or "+
              	"(t.doco is null and "+
              	" ((strftime('%Y',date('now')) - strftime('%Y',svdb) )*12+(strftime('%m',date('now')) - strftime('%m',svdb))) <12)) "+							
				"and udc.SY = '90CA' " +
				"and udc.DL02 = '"+workOrder.priority+"' "+
				"and coalesce(c.value,'NULL') = '" + qstCode + "' " +
				"and p.numb = " + workOrder.equipmentNumber + " " +
				"and p.y56indla = 'A' " +
                setIncludedMotivesRequestByRuleAndPrefCode() +
				setExcludedMotivesRequestByRuleAndPrefCode() +
				"group by c.value " +
				"order by c.value ";
			break;
		case computeRules.C02 : 
			callBackModel.context.sql = setRequestForItems('MAA');
			break;
		case computeRules.C03 : 
			callBackModel.context.sql = setRequestForItems('DECEN');
			break;
		case computeRules.C04 : 
			callBackModel.context.sql = setRequestForItems('ES');
			break;
		case computeRules.C05 : 
			callBackModel.context.sql = "select count(*) value " +
										"from customerInstalledBase p, " +//Dhaval:Added missing space issue #98
                                        "ItemCharacteristics c, " +
                                        "UDC " +
										"where Y56INDLA = 'A' " +
										"and numb = " + workOrder.equipmentNumber + " " +
                                      "and p.ITM = c.ITM " +
                                    "and UDC.KY = c.itmcat " + 
                                    "and UDC.SY = '90CA' " +
                                    "and UDC.DL02 = '"+workOrder.priority+"' "+
                       			        setIncludedMotivesRequestByRuleAndPrefCode() +
										"and julianday('now') - julianday(SVDB) > 7305 "; // 7305 : number of days in 20 years
			break;
		case computeRules.C06 : 
			
              /*" select count(*) value " +
										" from customerInstalledBase p, " +
                                        "ItemCharacteristics c, " +
                                        "UDC " +
										" where UNItecStatus = 'U' " +
                       			        setIncludedMotivesRequestByRuleAndPrefCode() +
										" and numb = " + workOrder.equipmentNumber + " "+
                                        "and p.ITM = c.ITM " +
                                        "and UDC.KY = c.itmcat " + 
                                        "and UDC.SY = '90CA' " +
                                        "and UDC.DL02 = '"+workOrder.priority+"'";*/
        			var requestC06 =   "select count(*) value "+
                                      "from CustomerInstalledBase p, "+
                                      "ItemCharacteristics c, "+
                                      "UDC "+
                                      "where UDC.KY = c.itmcat "+
                                      "and udc.SY = '90CA' "+
                                      "and UDC.DL02 = '"+workOrder.priority+"'"+
                                      " and numb = " + workOrder.equipmentNumber + " "+
                                      "and p.ITM = c.ITM "+
                                      "and p.y56indla = 'A' "+
                     					setIncludedMotivesRequestByRuleAndPrefCode();
        
                        callBackModel.context.sql = requestC06;
			break;
		case computeRules.C07 :
			callBackModel.context.sql = "select COUNT(distinct p.id) value " +
										"from CustomerInstalledBase p " +
										"inner join ItemCharacteristics c on p.ITM = c.ITM "+
										"inner join UDC on UDC.KY = c.itmcat " +
              							"left outer join F56BTDT t on p.id = t.cibid "+
                                        "left outer join item i on t.LITM = i.usualcode "+
										"left outer join F56PRM prm on i.SRP2 = prm.KY and prm.TYDT = 'E7' and prm.SDB = 'KONI' and prm.AMTU = 1 " +
              							"where  (t.CK01 in ('O') or "+
            							"(t.doco is null and "+
                                        " ((strftime('%Y',date('now')) - strftime('%Y',svdb) )*12+(strftime('%m',date('now')) - strftime('%m',svdb))) <12)) "+
										"and udc.SY = '90CA' " +
										"and udc.DL02 = 'N4' " +
										"and p.numb = " + workOrder.equipmentNumber + " " +
										"and p.y56indla = 'A' " +
										setIncludedMotivesRequestByRuleAndPrefCode() +
										setExcludedMotivesRequestByRuleAndPrefCode() +
              							"group by c.value ";
        
			break;
		default : 
			break;
	};

	if (validationModel.isNull(callBackModel.context.sql))
		return null;
	if (ruleCode != 'C07')
		callBackModel.context.sql += " limit 1 ";
	executeSql(callBackModel.context.sql, requestResultByRuleCodeCB, callBackModel.sqlErrorCB);
	return answer;
};

questionnaireModel2.selectItemSumByEquipmentNumber = function(equipmentNumber) {
	callBackModel.result = {};
		
	callBackModel.context.sql =	"select sum(QVAL) total from F56REP " +
								"where QTST in ( " +
								"select QTST " +
								"from F56QST " +
								"where QTC5 = 'C01' " +
								") " +
								"and LOCN = '" + equipmentNumber + "' " +
      							"and topic = 'NULL'" ;
									
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	
	return callBackModel.result;
};

questionnaireModel2.findInterruptSurveyReferences = function() {
	return questionnaireModel2.findWORelatedSurveyReferences(['QI','QR']);
};

questionnaireModel2.findWORelatedSurveyReferences = function(surveys, activity, chapter) {
	
	if(validationModel.isNull(surveys)) surveys = new Array();
	callBackModel.resultArray = [];
	
	callBackModel.context.sql = 		"select distinct ITM, prm.RMK2, prm.DYUD from Item, F56PRM prm " +
										"where prm.RMK3 = Item.usualcode " +
										"and prm.TYDT = 'QX' ";
								
	if(surveys.length) {
		callBackModel.context.sql += 	"and prm.RMK2 in ('" + surveys.join("','") + "') ";
      	if((surveys.length === 1) && (surveys[0] === 'QA' || surveys[0] === 'QP') && (!validationModel.isNull(chapter))){
	          callBackModel.context.sql += 	"and prm.KY = '" + chapter + "' ";             
        } 
	}
	
	if(!validationModel.isNull(activity)) {
		callBackModel.context.sql += 	"and prm.RMK = '" + activity + "' ";
	}
	
	callBackModel.context.sql += 		"order by prm.RMK2 ";
  	//callBackModel.context.sql= "select distinct ITM, prm.RMK2, prm.DYUD from Item, F56PRM prm where		prm.RMK3 = Item.usualcode and		prm.TYDT = 'QX' and		prm.RMK2 in ('QI','QR') order by 	prm.RMK2";
  	kony.print("finalSql:"+callBackModel.context.sql);
	//alert("finalSql:"+callBackModel.context.sql);
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	//alert("callBackModel.resultArray"+JSON.stringify(callBackModel.resultArray));
  	kony.print("callBackModel.resultArray"+JSON.stringify(callBackModel.resultArray));
	return callBackModel.resultArray;
};

questionnaireModel2.getSurveyNameById = function(surveyId) {
	
	callBackModel.result = null;
	
	callBackModel.context.sql =	"select description1 ||  CASE WHEN description2 = 'NULL' THEN '' ELSE description2 END name " +
								"from Item " +
								"where itm = " + surveyId + " ";
	
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	
	return callBackModel.result;
}

questionnaireModel2.findAnswers = function (fields, whereClause) {
	callBackModel.context.sql = "select " + fields.join(", ") + " from F56REP where " + whereClause;
	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

questionnaireModel2.getAnswersWhereClauseForWorkOrder = function (workOrder, topic, cibId, isUserSpecific) {
	var LOCN = validationModel.isNull(workOrder.equipmentNumber) ? 'NULL' : parseInt(workOrder.equipmentNumber).toString();
	var AN8 = workOrder.siteAN8;
	var ANO = login.user.AN8;
	var DOCO = workOrder.doco;
	var DCTO = workOrder.dcto;
	
	var whereClause =
		"LOCN = '" + LOCN + "' and AN8 = " + AN8 + " and TTTY = 'R' " +
		"and DOCO = '" + DOCO + "' and DCTO = '" + DCTO + "' and topic = '" + topic + "' ";
	
	if (!validationModel.isNull(cibId))
		whereClause += " and cibid = " + cibId + " ";
	
	if (isUserSpecific)
		whereClause += " and ANO = " + ANO + " ";
	
	return whereClause;
}

questionnaireModel2.saveQuestionnaire = function (topic, questions, workOrder, item, isUserSpecific) {
	var cibId = validationModel.isNull(item) ? null : item.id;
	var existing_answers_where_clause = questionnaireModel2.getAnswersWhereClauseForWorkOrder(workOrder, topic, cibId, isUserSpecific);
	var existing_answers = questionnaireModel2.findAnswers(['id', 'QTST'], existing_answers_where_clause);
	
	var QTST_to_delete = [];
	var answers_to_update = [];
	var answers_to_create = [];
	
	function qstComparison(question, existing_answer) {
		return existing_answer.QTST == question.qstCode;
	}
	
	function QTSTComparison(answer, question) {
		return question.qstCode == answer.QTST;
	}
	
	for (var i = 0; i < existing_answers.length; i++) {
		if (-1 == de.itgs.javascript.Array.find(questions, qstComparison, existing_answers[i]))
			QTST_to_delete.push(existing_answers[i].QTST);
	}
	
	var strDateTime = dateTimePrintSql(new Date());
	var QDATValue = strDateTime.substring(0, 10);
	var QTIMValue = strDateTime.substring(11, 27);
	var SNBRDate = QDATValue.substr(0,4) + QDATValue.substr(5,2) + QDATValue.substr(8,2);
	var LOTN_value = validationModel.isNull(item) || validationModel.isNull(item.jdeId)? null : item.jdeId.toString();
	
	for (var i = 0; i < questions.length; i++) {
		var answer_index = de.itgs.javascript.Array.find(existing_answers, QTSTComparison, questions[i]);
		if (-1 == answer_index) {
			var newAnswer = {
				AN8 : workOrder.siteAN8,
				LOCN : validationModel.isNull(workOrder.equipmentNumber) ? 'NULL' : parseInt(workOrder.equipmentNumber).toString(),//workOrder.equipmentNumber,
				ANO : login.user.AN8,
				QDAT : QDATValue,
				QTIM : QTIMValue,
				SNBR : parseInt(SNBRDate, 10),
				MCU : '     MAGTECH',
				MCU2 : '     MAGTECH',
				ITM : questions[i].prefCode,
				TTTY : 'R',
				DOCO : workOrder.doco,
				DCTO : workOrder.dcto,
				QSPC : null,
				QTST : questions[i].qstCode,
				QVAL : validationModel.isNull(questions[i].answerKey) ? null : questions[i].answerKey,
				RESP : validationModel.isNull(questions[i].answerKey) ? questions[i].answer : null,
				LOTN : LOTN_value,
				cibid : cibId,
				topic : topic,
				hasChangedFlag : true
			}
			answers_to_create.push(newAnswer);
		}
		else {
			var update = {
				whereClause : "where id = " + existing_answers[answer_index].id,
				changeSet : {
					QDAT : QDATValue,
					QTIM : QTIMValue,
					SNBR : parseInt(SNBRDate, 10),
					ITM : questions[i].prefCode,
					QVAL : validationModel.isNull(questions[i].answerKey) ? null : questions[i].answerKey,
					RESP : validationModel.isNull(questions[i].answerKey) ? questions[i].answer : null,
					LOTN : LOTN_value,
					cibid : cibId,
					topic : topic,
					hasChangedFlag : true
				}
			};
			answers_to_update.push(update)
		}
	}
	
	if (QTST_to_delete.length > 0) {
		var whereClause = existing_answers_where_clause + " and QTST in ('" + QTST_to_delete.join("', '") + "') ";
		de.itgs.WorkOrders.F56REP.remove(whereClause, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
	}
	if (answers_to_create.length > 0)
		de.itgs.WorkOrders.F56REP.createAll(answers_to_create, callBackModel.emptyCB, callBackModel.konyErrorCB);
	if (answers_to_update.length > 0)
		de.itgs.WorkOrders.F56REP.updateAll(answers_to_update, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}


