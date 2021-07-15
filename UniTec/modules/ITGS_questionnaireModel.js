questionnaireModel = {};
questionnaireModel.context = {
	sql: null,
	findQuestionnaireWithActivity: null
};

/*
 * Type:
 * 	QR = Questionnaire RefusÃ© (Work Order rejected)
 * 	QI = Questionnaire Incomplet (Work Order interrupted)
 */ 
questionnaireModel.findQuestionnaireByTypeAndWorkOrder = function (type, workOrder) {

	var questionnaire = {};
	questionnaire.type = type;
	// In case the first query with activity (F56PRM.KY = F56BT.WR01) returns no result
	// retry without activity (F56PRM.KY is null)
	questionnaireModel.context.findQuestionnaireWithActivity = true;
	questionnaire.questions = questionnaireModel.findQuestionnaireQuestionsByTypeAndWorkOrder(type, workOrder);

	return questionnaire;
}

questionnaireModel.findQuestionnaireQuestionsByTypeAndWorkOrder = function (type, workOrder) {

	var questions = [];
	
	questionnaireModel.findQuestionnaireQuestionsByTypeAndWorkOrderCB = function (l_questions) { 
		if (l_questions.length > 0) {
			questions = questionnaireModel.mapQuestions(l_questions);
		} else if (questionnaireModel.context.findQuestionnaireWithActivity) {
			questionnaireModel.context.findQuestionnaireWithActivity = false;
			questions = questionnaireModel.findQuestionnaireQuestionsByTypeAndWorkOrder(type, workOrder);
		}				
	} 

	callBackModel.context.sql = 	"select qst.DSC1, qst.SY, qst.RT, qst.NUMT, qst.AMAX, qst.AMIN, qst.QTRG, qst.CDEC, qst.QTST, cat.QSPC, qst.QTC4 " +
									"from 	F56QST qst, F56CAT cat, F56PRM prm, F56BT bt " +
									"where 	qst.QTST = cat.QTST " +
									"and 	qst.TTTY = 'R' " +
									"and 	cat.QSPC = prm.RMK2 " +
									"and 	prm.SDB = 'KONI' " +
									"and 	prm.TYDT = '" + type + "'" +
									"and 	bt.doco = " + workOrder.doco + " "+
									"and	bt.ANP = " + login.user.AN8;
										
	
	if (questionnaireModel.context.findQuestionnaireWithActivity) {
		callBackModel.context.sql += " and COALESCE(prm.KY,-1) = COALESCE(bt.WR01,-1)";
	} else {
		callBackModel.context.sql += " and COALESCE(prm.KY,'NULL') = 'NULL'";
	}
		  		  
	executeSql(	callBackModel.context.sql, 
				questionnaireModel.findQuestionnaireQuestionsByTypeAndWorkOrderCB,
			 	callBackModel.sqlErrorCB);
	
	return questions;
}

questionnaireModel.findQuestionnaireQuestionsByCatalog = function (catalog) {
	var questions = [];
	
	questionnaireModel.findQuestionnaireQuestionsByCatalogCB = function (l_questions) {
		questions = questionnaireModel.mapQuestions(l_questions);	
	} 

	callBackModel.context.sql = 	"select qst.DSC1, qst.SY, qst.RT, qst.NUMT, qst.AMAX, qst.AMIN, qst.QTRG, qst.CDEC, qst.qtst, cat.QSPC, qst.QTC4 " + 
										"from 	F56QST qst, F56CAT cat " +
			  							"where 	qst.QTST = cat.QTST " +
			  							"and 	qst.TTTY = 'R' " +
			  							"and 	cat.QSPC = '" + catalog + "'";
	  		  
	executeSql(	callBackModel.context.sql, 
				questionnaireModel.findQuestionnaireQuestionsByCatalogCB,
			 	callBackModel.sqlErrorCB);

	return questions;
}

questionnaireModel.findQuestionnaireQuestionsByCode = function (code) {

	var questions = [];
	
	questionnaireModel.findQuestionnaireQuestionsByCodeCB = function (l_questions) {
		questions = questionnaireModel.mapQuestions(l_questions);	
	} 

	callBackModel.context.sql = 	"select qst.DSC1, qst.SY, qst.RT, qst.NUMT, qst.AMAX, qst.AMIN, qst.QTRG, qst.CDEC, qst.qtst, '' QSPC, qst.QTC4 " + 
										"from 	F56QST qst " +
			  							"where 	qst.QTST = '" + code + "' " +
			  							"and 	qst.TTTY = 'R'";
	  		  
	executeSql(	callBackModel.context.sql, 
				questionnaireModel.findQuestionnaireQuestionsByCodeCB,
			 	callBackModel.sqlErrorCB);
	
	return questions;
}

questionnaireModel.findQuestionnaireResponsesByQuestion = function (question) {

	questionnaireModel.findQuestionnaireResponsesByQuestionCB = function (l_responses) {
		question.responses = [];

		for (var i = 0; i < l_responses.length; i++) {
		    var response = {};
			response.id = l_responses[i].KY;
			response.text = l_responses[i].DL01;
			var complementaryText = validationModel.isNull(l_responses[i].DL02) ? "" : l_responses[i].DL02;
			response.text += complementaryText;
			if (!validationModel.isNull(l_responses[i].SPHD) && 
				l_responses[i].SPHD != '') {
				// DL02 = 'Q' --> SPHD refers to a question
				if (l_responses[i].DL02 == 'Q') {
					response.followUpQuestions = questionnaireModel.findQuestionnaireQuestionsByCode(l_responses[i].SPHD);
				// DL02 = 'C' --> SPHD refers to a catalog
				} else {
					response.followUpQuestions = questionnaireModel.findQuestionnaireQuestionsByCatalog(l_responses[i].SPHD);
				}
			}
			
			question.responses[i] = response;
		}
	}

	callBackModel.context.sql = 	"select KY, DL01, DL02, COALESCE(SPHD,'') SPHD " +
									"from 	UDC " +
		  							"where 	SY = '" + question.productCode + "' " +
		  							"and 	RT = '" + question.userCode + "' " +
		  							"and 	COALESCE(KY,'NULL') <> 'NULL' " +
		  							"and 	KY <> ''";
			  		  
	executeSql(	callBackModel.context.sql, 
				questionnaireModel.findQuestionnaireResponsesByQuestionCB,
			 	callBackModel.sqlErrorCB);
	
	return question.responses;
}

questionnaireModel.mapQuestions = function (l_questions) {

	var questions = [];
	
	for (var i = 0; i < l_questions.length; i++) {
	    var question = {};
		question.text = l_questions[i].DSC1;
		question.reference = l_questions[i].QTST;
		question.productCode = l_questions[i].SY;
		question.userCode = l_questions[i].RT;
		question.responseNumericMaximum = l_questions[i].AMAX;
		question.responseNumericMinimum = l_questions[i].AMIN;
		question.responseNumericDefault = l_questions[i].QTRG;
		question.responseNumericDecimals = l_questions[i].CDEC;
		question.catalog = l_questions[i].QSPC;
		
		question.responseIsNumeric = false;
		if (!validationModel.isNull(l_questions[i].NUMT) && 
			parseInt(l_questions[i].NUMT) > 0 &&
			l_questions[i].QTC4 != 'D') {
			question.responseIsNumeric = true;
		}
		
		question.responseIsContact = false;
		if (l_questions[i].QTST == 'NOM_CONTACT') {
			question.responseIsContact = true;
		}
		
		question.responseIsDate = false;
		if (l_questions[i].QTC4 == 'D') {
			question.responseIsDate = true;
		}

		if (!question.responseIsNumeric && 
			!question.responseIsContact && 
			!question.responseIsDate) {
			question.responses = questionnaireModel.findQuestionnaireResponsesByQuestion(question);
		}
		
		questions[i] = question;
	}
	
	return questions;
}

questionnaireModel.saveQuestionnaire = function (questionnaire, questionnaireType, workOrder, telResolvedContact) {

	// Insert the response into F56REP
	var valuesArray = [];

	for (var i = 0; i < questionnaire.length; i++) {
		valuesArray[i] = {};
		valuesArray[i].AN8 = workOrder.siteAN8;
		valuesArray[i].ANO = login.user.AN8;
		valuesArray[i].QDAT = dateTimePrintSql(new Date()).substring(0, 10);
		valuesArray[i].QTIM = dateTimePrintSql(new Date()).substring(11, 27);
		valuesArray[i].DOCO = workOrder.doco;
		valuesArray[i].DCTO = workOrder.dcto;
		valuesArray[i].QSPC = questionnaire[i].question.catalog;
		valuesArray[i].QTST = questionnaire[i].question.reference;
			
		if (validationModel.isNull(questionnaire[i].response.id)) {
			valuesArray[i].RESP = questionnaire[i].response.text;
		} else {
			valuesArray[i].QVAL = questionnaire[i].response.id;
		}
	}
	
	if (valuesArray.length > 0) {
		de.itgs.WorkOrders.F56REP.createAll(
			valuesArray, 
			callBackModel.emptyCB, 
			callBackModel.konyErrorCB);
	}
	
	// Update the response in F56BT
	var inputArray = [];
	inputArray[0] = {};
	inputArray[0].changeSet = {};
	inputArray[0].changeSet.HasChangedFlag = true;
	inputArray[0].changeSet.ApplicationVersion = global.kernel.getQualifiedVersion();
	
	// Update the work order status (QR, QI, QT) and response (QR only)
	if(questionnaireType == 'QI') {
		inputArray[0].changeSet.SRST = '66';
	} else if (questionnaireType == 'QT') {
		if (!validationModel.isNull(telResolvedContact)) inputArray[0].changeSet.TelResolvedContactId = telResolvedContact.id;
		inputArray[0].changeSet.SRST = '70';
	} else if (questionnaireType == 'QR') {
		inputArray[0].changeSet.SRST = '84';
		for (var i = 0; i < questionnaire.length; i++) {
			if (questionnaire[i].response.id) inputArray[0].changeSet.WR12 = questionnaire[i].response.id;
		}
	}
	
	inputArray[0].whereClause = "where DOCO = " + workOrder.doco;

	de.itgs.WorkOrders.F56BT.updateAll(
		inputArray, 
		callBackModel.emptyCB, 
		callBackModel.konyErrorCB);
}

questionnaireModel.updateResolvedWorkOrder = function(workOrder, contact) {
	var whereClause = "where DOCO = " + workOrder.doco;
	var changeSet = {};
	changeSet.TelResolvedContactId = !validationModel.isNull(contact) ? contact.id : null;
	changeSet.HasChangedFlag = true;
	changeSet.ApplicationVersion = global.kernel.getQualifiedVersion();

	de.itgs.WorkOrders.F56BT.update(whereClause, changeSet, callBackModel.emptyCB, callBackModel.konyErrorCB);
	
	workOrderModel.validateWorkOrderEnd(workOrder);
}
