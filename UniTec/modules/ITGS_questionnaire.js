// Questionnaire management

questionnaire = {
	questions : [], // 3 dimensions : i -> preference, j -> catalog, k-> questions
	catalogs : [], // 2 dimensions : i -> preference, j -> catalog
	preferences : [], // 1 dimension : i -> preference
	prefIndex : null,
	catIndex : null,
	questIndex : null,
	postQuestions : [],
	articleReferences : [],
	currentAnswers : [],
	validationStrategy:0,
	item : null,
	valid : {
		ALL : 0,
		ONE : 1
	},
	answerRule : {
		NO_RULE : 0,
		LOAD : 1,
		COPY : 2,
		COMPUTE : 3,
		COPY_AND_COMPUTE : 4,
		POST_COMPUTE : 5,
		SPECIAL_COMPUTE : 6,
		TECHNICIAN : 7,
		PREVIOUS_LOAD : 8
	},
	readOnly : false,
	topic : "UNKNOWN", // values : UNKNOWN, STOP, TASK, CONFORMITY, F56REPI
	wo : null,
	userSpecific : true,
  	selectedItems: null,
  	selectedIndex: null,
  	customerContractDetails: null  
};

// à investiguer : ce sont les références des objets qui sont copiés, pas les objets eux -même 
// -> modifier un objet apportera la modification dans les deux références
// voir si on ne peut pas ce servir de cette particularité pour raccourcir le code
questionnaire.setArticleReferences = function(articleCodes) {
	questionnaire.articleReferences = articleCodes;
};

questionnaire.setValidationStrategy = function(validationStrategy) {
	questionnaire.validationStrategy = validationStrategy;
};

questionnaire.mapPreference = function(data) {
	var mappedData = {
		id : data.prefCode,
		name : data.prefName,
		mandatory : false, // JIRA 679
		status : false
	}
	return mappedData;
};

questionnaire.mapCatalog = function(data) {
	var mappedData = {
		id : data.catCode,
		name : data.catName,
		mandatory : false, // JIRA 679
		status : false
	}
	return mappedData;
};

questionnaire.mapQuestionsForDatabase = function() {
	var mappedQuestions = new Array();
	for (var i = 0; i < questionnaire.questions.length; i++) {
		var prefCode = questionnaire.preferences[i].id;
		for (var j = 0; j < questionnaire.questions[i].length; j++) {
			for (var k = 0; k < questionnaire.questions[i][j].length; k++) {
				var sourceQuestion = questionnaire.questions[i][j][k];//questionnaire.findQuestion(i, j, k);
				var mappedQuestion = {
					prefCode : prefCode,
					qstCode : sourceQuestion.id,
					catCode : sourceQuestion.catalog,
					answer : null,
					answerKey : null
				};
				if (sourceQuestion.status) {
					if (sourceQuestion.type == 4 && !validationModel.isNull(sourceQuestion.answerKey)) 
						sourceQuestion.answerKey = sourceQuestion.answerKey.toString().replace(",",".");
					mappedQuestion.answer = sourceQuestion.answer;
					mappedQuestion.answerKey = sourceQuestion.answerKey;
				}
				mappedQuestions.push(mappedQuestion);
			}
		}
	}
	return mappedQuestions;
};

questionnaire.mapQuestion = function(data, loadAnswer) {
	var rules = questionnaire.answerRule;
	
	if (loadAnswer == null) loadAnswer = true;
	var answer = 'non renseigné';
	var answerKey = null;
	var status = false;
	var action = null;
	
	
	var question = (!validationModel.isNull(data.question)) ? data.question : 
		!validationModel.isNull(data.qstShort) ? data.qstShort : data.qstCode;
	var isMandatory = data.mandatory == 'O' ? true : false;
	var isType = 0; // text answer

	var answerRule = rules.NO_RULE;
	var isRuleCodeNull = validationModel.isNull(data.ruleCode);
	var isRefCopyNull = validationModel.isNull(data.refCopy);
	
	var postCompute = false;
	var postComputeRelevant = false;
	var notComputed = false;
	
	if (!isRuleCodeNull) {
		var computeData = questionnaire.findComputeDataByRuleCode(data.ruleCode);
		postCompute = (computeData.SPHD == 2);
		postComputeRelevant = (computeData.SPHD == 1);
	}
	
	if (!isRuleCodeNull) notComputed = (data.ruleCode == 'C09');
	
	if (!isRuleCodeNull && data.ruleCode == 'C07' && !notComputed) answerRule = rules.SPECIAL_COMPUTE;
	else if (!isRuleCodeNull && postCompute && !notComputed) answerRule = rules.POST_COMPUTE;
	else if (!isRuleCodeNull && !isRefCopyNull && !notComputed) answerRule = rules.COPY_AND_COMPUTE;
	else if (isRuleCodeNull && !isRefCopyNull && !notComputed) answerRule = rules.COPY;
	else if (!isRuleCodeNull && isRefCopyNull && !notComputed) answerRule = rules.COMPUTE;
	else if(!validationModel.isNull(data.type) && data.type == 'TEC') answerRule = rules.TECHNICIAN;
	else if(data.catReload) answerRule = rules.PREVIOUS_LOAD;
	else if (loadAnswer) answerRule = rules.LOAD;
	
	var isEditable = ((answerRule == rules.NO_RULE || answerRule == rules.LOAD || answerRule == rules.PREVIOUS_LOAD) && data.isEditable && !questionnaire.readOnly);
	
	var maxValue = validationModel.isNull(data.maxValue) ? null : parseInt(data.maxValue,10);
	var minValue = validationModel.isNull(data.minValue) ? null : parseInt(data.minValue,10);
	var defValue = validationModel.isNull(data.defValue) ? null : parseInt(data.defValue,10);
	var decimals = validationModel.isNull(data.decimals) ? null : parseInt(data.decimals,10);
	
	var isComputed = (answerRule == rules.COPY_AND_COMPUTE || answerRule == rules.COMPUTE);
	if(!isComputed && !validationModel.isNull(data.SY) && !validationModel.isNull(data.RT) && validationModel.isNull(data.type)) isType = 1; // UDC answer
	else if(!validationModel.isNull(data.answerType) && data.answerType == 'D') isType = 2; // date answer
	else if(!validationModel.isNull(data.type) && data.type == 'CCT') isType = 3; // contact answer
	else if(!validationModel.isNull(data.type) && data.type == 'TEC') isType = 5; // technician name answer
	else if(!validationModel.isNull(data.isNumeric) && data.isNumeric == '1' && maxValue !== null && minValue !== null) isType = 4; // numeric answer
	
	data.type = isType;
	var answerData = questionnaire.computeAnswer(answerRule, data);
	var loadedRules = [rules.LOAD, rules.PREVIOUS_LOAD];
	if(loadedRules.indexOf(answerRule) >= 0) answerRule = rules.NO_RULE; // answer has been loaded - no further action to apply on this question
	
	var mappedData = {
		id : data.qstCode,
		qstCode : data.qstCode,
		catalog : data.catCode,
		prefCode : data.prefCode,
		question : question,
		//answer : answerData.answer,
      	answer : kony.string.trim(answerData.answer),			//Arati:Changed code for JIRA UI-66
		answerKey : answerData.answerKey,		
		status : answerData.status,
		mandatory : isMandatory,
		editable : isEditable,
		type : isType,
		maxValue : maxValue,
		minValue : minValue,
		defValue : defValue,
		decimals : decimals,
		action : answerData.action,
		relatedQuestions : 0,
		SY : data.SY,
		RT : data.RT,
		postComputeRelevant : postComputeRelevant,
		postCompute : postCompute,
		mode : answerRule
	}
	return mappedData;
};

questionnaire.addToPostCompute = function(question, pIndex, cIndex, qIndex){
	if (!question.postCompute)
		return;
	var postComputedQuestion = [pIndex, cIndex, qIndex, question.SY, question.RT];
	questionnaire.postQuestions.push(postComputedQuestion);
}

questionnaire.setTopic = function(topic){
	questionnaire.topic = topic;
};

questionnaire.setWorkOrder = function(newWO) {
	questionnaire.wo = {
		doco : newWO.doco,
		equipmentNumber : newWO.equipmentNumber,
		dcto : newWO.dcto,
		siteAN8 : newWO.siteAN8
	};
};

questionnaire.setUserSpecific = function(isUserSpecific) {
	questionnaire.userSpecific = isUserSpecific;
}

questionnaire.loadQuestionnaire = function(articleReferences, loadPreviousAnswers, validationStrategy, item, readOnly) {
	questionnaire.setArticleReferences(articleReferences);
	questionnaire.setValidationStrategy(validationStrategy);
	questionnaire.item = item;
	questionnaire.readOnly = readOnly;
	var questionnaireData = questionnaireModel2.findQuestionnaireByItems(questionnaire.articleReferences, questionnaire.topic);
  	if (questionnaireData.length == 0){
      return false;
    }else if( questionnaire.topic == "CONFORMITY"){
      var data = [];
      for(var v=0; v<articleReferences.length; v++){
        for(var q=0; q<questionnaireData.length; q++){
          if(questionnaireData[q].prefCode == articleReferences[v]){
            data.push(questionnaireData[q]);
          }
        }
      }
      questionnaireData = data;
    }
		
	
	questionnaire.preferences.length = 0;
	questionnaire.catalogs.length = 0;
	questionnaire.questions.length = 0;
	questionnaire.postQuestions.length = 0;
	
	questionnaire.preferences.push(questionnaire.mapPreference(questionnaireData[0]));
	questionnaire.catalogs.push([questionnaire.mapCatalog(questionnaireData[0])]);
	questionnaire.questions.push([[questionnaire.mapQuestion(questionnaireData[0], loadPreviousAnswers)]]);
	
	var prefIndex = 0;
	var catIndex = 0;
	var questIndex = 0;
	
	for (var i = 1; i < questionnaireData.length; i++) {
		var newQuestion = questionnaire.mapQuestion(questionnaireData[i], loadPreviousAnswers);
      if(questionnaire.topic != "STOP" && questionnaire.topic != "CONFORMITY"){
              questionnaire.questions[prefIndex][catIndex].push(newQuestion);
			questIndex++;
      }else{
       if (questionnaireData[i].prefCode != questionnaireData[i-1].prefCode) {
			questionnaire.preferences.push(questionnaire.mapPreference(questionnaireData[i]));
			questionnaire.catalogs.push([questionnaire.mapCatalog(questionnaireData[i])]);
			questionnaire.questions.push([[newQuestion]]);
			prefIndex++;
			catIndex = 0;
			questIndex = 0;
		} else if (questionnaireData[i].catCode != questionnaireData[i-1].catCode ) {
			questionnaire.catalogs[prefIndex].push(questionnaire.mapCatalog(questionnaireData[i]));
			questionnaire.questions[prefIndex].push([newQuestion]);
			catIndex++;
			questIndex = 0;
		} else {
			questionnaire.questions[prefIndex][catIndex].push(newQuestion);
			questIndex++;
		}
      }
		questionnaire.addToPostCompute(newQuestion, prefIndex, catIndex, questIndex);
	}
	 // JIRA 679
	for (var i = 0; i < questionnaire.preferences.length; i++) {
		for (var j = 0; j < questionnaire.catalogs[i].length; j++) {
			questionnaire.updateCatalogMandatory(i, j);
			questionnaire.updateCatalogStatus(i, j);
		}
		questionnaire.updatePreferenceMandatory(i);
		questionnaire.updatePreferenceStatus(i);
	}
	
	if (!loadPreviousAnswers)
		return true;

	for (var i = 0; i < questionnaire.questions.length; i++) {
		for(var j = 0; j < questionnaire.questions[i].length; j++) {
			for(var k = 0; k < questionnaire.questions[i][j].length; k++) {
				questionnaire.updateQuestion(null, i , j, k, true);
			}
		}
	}
	
	questionnaire.postComputeAnswers();
	
	return true;
};

questionnaire.setCurrentPreference = function(newPrefIndex) {
	questionnaire.prefIndex = newPrefIndex;
};

questionnaire.setCurrentCatalog = function(newCatIndex) {
	questionnaire.catIndex = newCatIndex;
};

questionnaire.setCurrentQuestion = function(newQuestIndex) {
	questionnaire.questIndex = newQuestIndex;
};

questionnaire.getQuestionnaireIndexes = function(prefIndex, catIndex, questIndex) {
	return {
      prefIndex: prefIndex== null ? questionnaire.prefIndex : prefIndex,
      catIndex: catIndex==null ? questionnaire.catIndex : catIndex,
      questIndex: questIndex==null ? questionnaire.questIndex : questIndex
    };
};

questionnaire.findQuestion = function(prefIndex, catIndex, questIndex) {
	var qIndexes = questionnaire.getQuestionnaireIndexes(prefIndex, catIndex, questIndex);

	return questionnaire.questions[qIndexes.prefIndex][qIndexes.catIndex][qIndexes.questIndex];
};
questionnaire.findQuestionById = function(questId) {
	var qIndexes = questionnaire.getQuestionnaireIndexes();
	var list = questionnaire.questions[qIndexes.prefIndex][qIndexes.catIndex];
  
  	for(var i = 0; i < list.length ; i++) {
      if(list[i].index == questId) {
        questionnaire.setCurrentQuestion(i);
        return list[i];
      }
    }
  	return null;
};

questionnaire.findAnswers = function() {
	var userAnswers = [];
	for (var i = 0; i < questionnaire.questions.length; i++) {
		for(var j = 0; j < questionnaire.questions[i].length; j++) {
			for(var k = 0; k < questionnaire.questions[i][j].length; k++) {
				if (!validationModel.isNull(questionnaire.questions[i][j][k].answerKey)) {
                	 userAnswers.push(questionnaire.questions[i][j][k].answerKey);
                }
			}
		}
	}
	return userAnswers;
};

questionnaire.checkPostComputeRequired = function(questIndex, catIndex, prefIndex){
	return questionnaire.findQuestion(prefIndex, catIndex, questIndex).postComputeRelevant;
};

questionnaire.findCatalogQuestions = function(prefIndex, catIndex) {
	var qIndexes = questionnaire.getQuestionnaireIndexes(prefIndex, catIndex);	
	return questionnaire.questions[qIndexes.prefIndex][qIndexes.catIndex];
};

questionnaire.findCatalog = function(prefIndex, catIndex) {
	var qIndexes = questionnaire.getQuestionnaireIndexes(prefIndex, catIndex);	
	return questionnaire.catalogs[qIndexes.prefIndex][qIndexes.catIndex];
};

questionnaire.findPreferenceCatalogs = function(prefIndex) {
	var qIndexes = questionnaire.getQuestionnaireIndexes(prefIndex);
	return questionnaire.catalogs[qIndexes.prefIndex];
};

questionnaire.findPreference = function(prefIndex) {
	var qIndexes = questionnaire.getQuestionnaireIndexes(prefIndex);
	return questionnaire.preferences[qIndexes.prefIndex];
};

questionnaire.findAllPreferences = function() {
	return questionnaire.preferences;
};

questionnaire.getQuestionAnswerPool = function(question, answerCode) {

	var whereClause = (validationModel.isNull(answerCode)) ? '' : " and KY = '" + answerCode + "' ";
	var answerData = questionnaireModel2.findAnswersByQuestionAndWhereClause(question, whereClause);
	var answerPool = new Array();
	for(var i = 0;i<answerData.length;i++) {
		var DL02 = validationModel.isNull(answerData[i].DL02) ? '':answerData[i].DL02;
		var nextAnswer = {
			index : answerData[i].id,
			text : answerData[i].DL01 + DL02,
			action : answerData[i].SPHD
		};
		answerPool.push(nextAnswer);
	}
	
	return answerPool;
};

questionnaire.checkQuestionAnswerValue = function(answerData, questData) {
	if(questData.type == 4) {
		var numValue = parseInt(answerData.answer, 10);
		if(numValue < questData.minValue || numValue > questData.maxValue) return false;
	}
	return true;
};

questionnaire.answerQuestion = function(answerData, prefIndex, catIndex, questIndex) {
	var qIndexes = questionnaire.getQuestionnaireIndexes(prefIndex, catIndex, questIndex);
	
	var questData = questionnaire.findQuestion(prefIndex,catIndex,questIndex);
	if(questData.mode != questionnaire.answerRule.POST_COMPUTE) answerData = questionnaire.computeAnswer(questData.mode, questData, answerData);
	if(validationModel.isNull(questData) || !questionnaire.checkQuestionAnswerValue(answerData, questData)) return false;
	
	questData.answer = answerData.answer;
	questData.answerKey = answerData.answerKey;
	questData.action = answerData.action;
	questData.status = answerData.status;
	questionnaire.updateQuestion(questData, qIndexes.prefIndex, qIndexes.catIndex, qIndexes.questIndex);
	
	return true;
};

questionnaire.computeAnswer = function(rule, questData, answerData) {
	if (answerData == null) {
		answerData = {
			answer: 'non renseigné',
			answerKey : null,
			action: null,
			status: 0
		};
	}
	
	function updateAnswerData(DBAnswer) {
		if(!validationModel.isNull(DBAnswer)) {
			switch(questData.type) {
				case 1 :
					var answerValue = questionnaire.getQuestionAnswerPool(questData, DBAnswer.answerKey);
					if(!validationModel.isNull(answerValue) && answerValue.length > 0) {
						answerData.answer = answerValue[0].text;
						answerData.answerKey = DBAnswer.answerKey;
						answerData.action = answerValue[0].action;
					}
					break;
				case 2 :
				case 4 :
					answerData.answerKey = DBAnswer.answerKey;
					answerData.answer = DBAnswer.answerKey;
					break;
				case 0 :
				case 3 :
				case 5 :
				default :
					answerData.answer = DBAnswer.answer;
					break;
			}
			answerData.status = true;
		}
	};
	
	var rules = questionnaire.answerRule;
	var isNum = (questData.type == 4);
	var DBAnswer = null;
	switch(rule) {
		case rules.SPECIAL_COMPUTE :
			var DBAnswer1 = questionnaireModel2.requestResultByRuleCode(questData.ruleCode, null, questData.prefCode);
			var DBAnswer2 = questionnaireModel2.selectItemSumByEquipmentNumber(questionnaire.wo.equipmentNumber);
			if (!validationModel.isNull(DBAnswer1) && !validationModel.isNull(DBAnswer2)) {
				var initialSum = parseFloat(DBAnswer2.total);
				var finalSum = parseFloat(DBAnswer1.answerKey);
			
				var diffPercent = (finalSum - initialSum) * 100 / initialSum;
				var diffAbs = Math.round(finalSum - initialSum);

				var result = (diffPercent >= 20.0 || diffAbs >= 20) ? 0 : 1;
				var udcAnswerData = questionnaireModel2.findAnswersByQuestionAndWhereClause(questData);
				// temporary - until data is corrected
				if (udcAnswerData.length == 0) {
					udcAnswerData = [
						{ id : '01', DL01 : 'Oui' },
						{ id : '02', DL01 : 'Non' }
					];
				}
				var DL02 = validationModel.isNull(udcAnswerData.DL02) ? '' : udcAnswerData.DL02;
				DBAnswer = {
					answerKey : udcAnswerData[result].id,
					answer : udcAnswerData[result].DL01 + DL02
				};	
			}
			break;
		case rules.COMPUTE : 
			DBAnswer = questionnaireModel2.requestResultByRuleCode(questData.ruleCode, null, questData.prefCode);
			break;
		case rules.COPY :
			var whereClause = " LOCN = '" + questionnaire.wo.equipmentNumber + "' and coalesce(DOCO, 'NULL') = 'NULL' ";
			DBAnswer = questionnaireModel2.findAnswerByCodesAndWhereClause(questData.qstCode, questData.refCopy, null, whereClause, isNum);
			break;
		case rules.PREVIOUS_LOAD :
			DBAnswer = questionnaireModel2.findSetAnswerForQuestionWorkOrderAndItem(
				questData, questionnaire.topic, questionnaire.wo, questionnaire.item, questionnaire.userSpecific
			);
			if(!validationModel.isNull(DBAnswer)) break;
			var whereClause = " AN8 = ' " + questionnaire.wo.siteAN8 + "' ";
			if(!validationModel.isNull(questionnaire.item) && validationModel.isNull(questionnaire.item.jdeId))
				break;
			else if(!validationModel.isNull(questionnaire.item) && !validationModel.isNull(questionnaire.item.jdeId))
				whereClause += " AND LOTN = '" + questionnaire.item.jdeId + "' ";
			DBAnswer = questionnaireModel2.findAnswerByCodesAndWhereClause(questData.qstCode, null, null, whereClause, isNum);
			break;
		case rules.LOAD :
			DBAnswer = questionnaireModel2.findSetAnswerForQuestionWorkOrderAndItem(
				questData, questionnaire.topic, questionnaire.wo, questionnaire.item, questionnaire.userSpecific
			);
			break;
		case rules.COPY_AND_COMPUTE :
			var DBAnswer1 = questionnaireModel2.requestResultByRuleCode(questData.ruleCode, questData.qstCode, questData.prefCode);
			var whereClause = " LOCN = '" + questionnaire.wo.equipmentNumber + "' and coalesce(DOCO, 'NULL') = 'NULL' ";
			var DBAnswer2 = questionnaireModel2.findAnswerByCodesAndWhereClause(questData.qstCode, questData.refCopy, null, whereClause, isNum);
			if (!validationModel.isNull(DBAnswer1) && !validationModel.isNull(DBAnswer2)) {
				var localAns = !validationModel.isNull(DBAnswer1.answerKey) ? parseInt(DBAnswer1.answerKey,10) : 0;
				var JDEAns = !validationModel.isNull(DBAnswer2.answerKey) ? parseInt(DBAnswer2.answerKey,10) : 0;
				DBAnswer = {
					answer : JDEAns - localAns,
					answerKey : JDEAns - localAns
				};
			} else if (!validationModel.isNull(DBAnswer1)) {
				var localAns = !validationModel.isNull(DBAnswer1.answerKey) ? parseInt(DBAnswer1.answerKey,10) : 0;
				DBAnswer = {
					answer : (0 - localAns),
					answerKey : (0 - localAns)
				};
			} else if (!validationModel.isNull(DBAnswer2)) {
				var JDEAns = !validationModel.isNull(DBAnswer2.answerKey) ? parseInt(DBAnswer2.answerKey,10) : 0;
				DBAnswer = {
					answer : JDEAns,
					answerKey : JDEAns
				};
			}
			break;
		case rules.TECHNICIAN : 
			DBAnswer = {
				answer : login.user.Username,
				answerKey : login.user.AN8
			};
			break;
		case rules.NO_RULE :
		case rules.POST_COMPUTE :
		default : 
			break;
	}
	
	if (!validationModel.isNull(DBAnswer) && (
		!validationModel.isNull(DBAnswer.answer) || 
		!validationModel.isNull(DBAnswer.answerKey))
	) updateAnswerData(DBAnswer);
	return answerData;
}

questionnaire.postComputeAnswers = function() {
	var postComputedQuestions = questionnaire.postQuestions;
	var relevantAnswers = new Array();
	var allQuestions = questionnaire.questions;
	for (var i = 0; i < allQuestions.length; i++) {
		for (var j = 0; j < allQuestions[i].length; j++) {
			for (var k = 0; k < allQuestions[i][j].length; k++) {
				var qst = allQuestions[i][j][k];
				if (qst.postComputeRelevant)
					relevantAnswers.push({ res:qst.answerKey, min:qst.minValue, max:qst.maxValue });
			}
		}
	}
	
	for(var i = 0; i < postComputedQuestions.length; i++) {
		var answerData = null;
		var qst = postComputedQuestions[i];
		var pi = qst[0];
		var ci = qst[1];
		var qi = qst[2];
		var SY = qst[3];
		var RT = qst[4];
		
		var isConform = false;
		for(var j = 0; j < relevantAnswers.length; j++) {
			var ansData = relevantAnswers[j];
			isConform = (ansData.res <= ansData.max && ansData.res >= ansData.min);
			if (!isConform)
				break;
		}
		
		var result = isConform ? 0 : 1;
		var qstData = {SY : SY, RT : RT};
		var udcAnswerData = questionnaireModel2.findAnswersByQuestionAndWhereClause(qstData);
		// temporary - until data is corrected
		if (udcAnswerData.length == 0) {
			udcAnswerData = [
				{ id : '01', DL01 : 'Oui' },
				{ id : '02', DL01 : 'Non' }
			];
		}
		var DL02 = validationModel.isNull(udcAnswerData[result].DL02) ? '' : udcAnswerData[result].DL02;
		answerData = {
			answerKey : udcAnswerData[result].id,
			answer : udcAnswerData[result].DL01 + DL02,
			action: null,
			status: 1
		};		
		questionnaire.answerQuestion(answerData, pi, ci, qi);
	}
};

questionnaire.setDecimals = function(answer, questData) {
	if (questData.type != 4 || validationModel.isNull(questData.decimals)) return answer;
	var factor = Math.pow(10, (questData.decimals));
	var roundedAnswer = (Math.round(parseFloat(answer.replace(',', '.')) * factor) / factor);
	return roundedAnswer.toFixed(questData.decimals);
};

questionnaire.updateQuestion = function(questData, prefIndex, catIndex, questIndex, loadRelatedAnswers) {
	if (validationModel.isNull(loadRelatedAnswers))
		loadRelatedAnswers = false;
	if (!validationModel.isNull(questData))
		questionnaire.questions[prefIndex][catIndex][questIndex] = questData;
	questionnaire.removeRelatedQuestions(prefIndex, catIndex, questIndex);
	questionnaire.addRelatedQuestions(prefIndex, catIndex, questIndex, loadRelatedAnswers);
	questionnaire.updateCatalogMandatory(prefIndex, catIndex);
	questionnaire.updateCatalogStatus(prefIndex, catIndex);
	questionnaire.updatePreferenceMandatory(prefIndex);
	questionnaire.updatePreferenceStatus(prefIndex);
};

questionnaire.updateCatalogStatus = function(prefIndex, catIndex) {
	if (prefIndex == null)
		prefIndex = questionnaire.prefIndex;
	if (catIndex == null)
		catIndex = questionnaire.catIndex;

	var status = 1;
	var catalogData = questionnaire.catalogs[prefIndex][catIndex];
	var questions = questionnaire.questions[prefIndex][catIndex];
	for(var i = 0; i < questions.length; i++) {
		if (questions[i].status == 0 && questions[i].mandatory == 1 && questions[i].editable == 1) {
			status = 0;
			break;
		}
	}
	catalogData.status = status;
	questionnaire.updateCatalog(catalogData, prefIndex, catIndex);
};

questionnaire.updateCatalogMandatory = function(prefIndex, catIndex) {
	if (prefIndex == null)
		prefIndex = questionnaire.prefIndex;
	if (catIndex == null)
		catIndex = questionnaire.catIndex;

	var mandatory = false;
	var catalogData = questionnaire.catalogs[prefIndex][catIndex];
	var questions = questionnaire.questions[prefIndex][catIndex];
	for(var i = 0; i < questions.length; i++) {
		if(questions[i].mandatory == 1) {
			mandatory = true;
			break;
		}
	}
	catalogData.mandatory = mandatory;
	questionnaire.updateCatalog(catalogData, prefIndex, catIndex);
};

questionnaire.updateCatalog = function(catData, prefIndex, catIndex) {
	if (prefIndex == null)
		prefIndex = questionnaire.prefIndex;
	if (catIndex == null)
		catIndex = questionnaire.catIndex;
	questionnaire.catalogs[prefIndex][catIndex] = catData;
};

questionnaire.updatePreferenceStatus = function(prefIndex) {
	if (prefIndex == null)
		prefIndex = questionnaire.prefIndex;
	
	var status = 1;
	var preferenceData = questionnaire.preferences[prefIndex];
	var catalogs = questionnaire.catalogs[prefIndex];
	for(var i = 0; i < catalogs.length; i++) {
		if (catalogs[i].status == 0) {
			status = 0;
			break;
		}
	}
	preferenceData.status = status;
	questionnaire.updatePreference(preferenceData, prefIndex);
};

questionnaire.updatePreferenceMandatory = function(prefIndex) {
	if (prefIndex == null)
		prefIndex = questionnaire.prefIndex;
	
	var mandatory = false;
	var preferenceData = questionnaire.preferences[prefIndex];
	var catalogs = questionnaire.catalogs[prefIndex];
	for(var i = 0; i < catalogs.length; i++) {
		if(catalogs[i].mandatory == true) {
			mandatory = true;
			break;
		}
	}
	preferenceData.mandatory = mandatory;
	questionnaire.updatePreference(preferenceData, prefIndex);
}

questionnaire.updatePreference = function(prefData, prefIndex) {
	if (prefIndex == null)
		prefIndex = questionnaire.prefIndex;
	questionnaire.preferences[prefIndex] = prefData;
};

questionnaire.addRelatedQuestions = function(prefIndex, catIndex, originalQuestIndex, loadRelatedAnswers) {
	var questions = questionnaire.questions[prefIndex][catIndex];
	if (questions[originalQuestIndex].status != true 
		|| validationModel.isNull(questions[originalQuestIndex].action)
		|| questions[originalQuestIndex].action == 'CO') return;
	
	var catalogs = questionnaireModel2.findCatalogsByCodes([questions[originalQuestIndex].action]);

	var questionCodes = new Array();
	for (var i = 0; i <catalogs.length; i++) {
		questionCodes.push(catalogs[i].qstCode);
	}
	
	var newQuestions = questionnaireModel2.findQuestionsByCodes(questionCodes);

	for (var i = 0; i < newQuestions.length; i++) {
		newQuestions[i] = questionnaire.mapQuestion(newQuestions[i], loadRelatedAnswers);	
	}
	
	for (var i = 0; i < newQuestions.length; i++) {
		questions.splice((originalQuestIndex + i + 1), 0, newQuestions[i]);
		questionnaire.addToPostCompute(newQuestions[i], prefIndex, catIndex, (originalQuestIndex + i + 1));
	}
	questions[originalQuestIndex].relatedQuestions = newQuestions.length;
	questionnaire.questions[prefIndex][catIndex] = questions;
};

questionnaire.removeRelatedQuestions = function(prefIndex, catIndex, originalQuestIndex) {

	var questions = questionnaire.questions[prefIndex][catIndex];
	if (questions[originalQuestIndex].relatedQuestions == 0)
		return;
	
	var subQuestionsTotal = questionnaire.calculateSubQuestions(questions, originalQuestIndex);
	questions[originalQuestIndex].relatedQuestions = 0;
	questions.splice(originalQuestIndex + 1,subQuestionsTotal);
	questionnaire.questions[prefIndex][catIndex] = questions;
};

questionnaire.calculateSubQuestions = function(questions, startIndex) {
	var sum = 0;
	var i = 0;
	for(i = startIndex; i < questions.length; i++) {
		var relatedQuestions = questions[i].relatedQuestions;
		//if(sum == i && relatedQuestions <= 0) break;
		if(relatedQuestions <= 0) break;
		sum += relatedQuestions;
	}
	return sum;
}

questionnaire.checkAllPreferencesStatus = function() {

	for(var i=0;i<questionnaire.preferences.length;i++) {
		if(!questionnaire.preferences[i].status) return false;
	}
	return true;
}

questionnaire.check = function() {
	var isValid = false;
	switch(questionnaire.validationStrategy) {
		case questionnaire.valid.ONE : 
			isValid = questionnaire.findPreference().status;
			break;
		case questionnaire.valid.ALL :
		default : 
			isValid = questionnaire.checkAllPreferencesStatus(); 
			break;
	}
	return isValid;
}

questionnaire.checkMandatory = function() {
	var isMandatory = false;
	for(var i=0;i<questionnaire.preferences.length;i++) {
		if(questionnaire.preferences[i].mandatory) {
			isMandatory = true;
			break;
		}
	}
	return isMandatory;
}

questionnaire.save = function() {
	switch(questionnaire.validationStrategy) {
		case questionnaire.valid.ONE :
			for(var i=0;i<questionnaire.preferences.length;i++) {
				if(questionnaire.prefIndex != i) questionnaire.questions[i].length = 0;
			}
		case questionnaire.valid.ALL :
		default :
			var mappedQuestions = questionnaire.mapQuestionsForDatabase();
			questionnaireModel2.saveQuestionnaire(questionnaire.topic, mappedQuestions, questionnaire.wo, questionnaire.item, questionnaire.userSpecific);
			break;
	}
}


// ______ frmQuestionnaire functions ____________________________________________________________


questionnaireDisplay = {
	answersPool:[],
	selectedPref:null,
	selectedCat:null,
	isEdited : false,
	crtProfile : null,
	allowBack : false,
	pending : false
};

questionnaireDisplay.init = function() {

	var appMenu = [
		["questionnaire.RESET", "Réinitialiser", "recycle.png", questionnaireDisplay.onResetQuestionnaires],
		["questionnaire.VALID", "Valider", "save.png", questionnaireDisplay.save]
	];
	
	var appBackMenu = [
		["questionnaire.BACK", "Retour", "left.png", backQuestionare],
		["questionnaire.RESET", "Réinitialiser", "recycle.png", questionnaireDisplay.onResetQuestionnaires],
		["questionnaire.VALID", "Valider", "save.png", questionnaireDisplay.save]
	];
	
	var appReadOnlyMenu = [
		["questionnaire.BACK", "Retour", "left.png", backQuestionare]
	];
	//Dhaval:Invocation of custom app menu start
	otis.application.createAppMenu("questionnaireMenu", appMenu, sknAppmenu, sknAppmenuF);
	otis.application.createAppMenu("questionnaireBackMenu", appBackMenu, sknAppmenu, sknAppmenuF);
	otis.application.createAppMenu("questionnaireReadOnlyMenu", appReadOnlyMenu, sknAppmenu, sknAppmenuF);
//end
};
function backQuestionare(){//Dhaval:Added method as it passes event object by default issue #115
  questionnaireDisplay.close();
}
questionnaireDisplay.onClose = function() {
	if(!questionnaireDisplay.pending) frmQuestionnaire.destroy();
}

questionnaireDisplay.setAppMenu = function(readOnly, allowBack) {
	//Dhaval:Invocation of custom app menu start
	if(readOnly) 
		otis.application.setCurrentAppMenu("questionnaireReadOnlyMenu");
	else if(!validationModel.isNull(allowBack) && allowBack)
		otis.application.setCurrentAppMenu("questionnaireBackMenu");
	else 
		otis.application.setCurrentAppMenu("questionnaireMenu");
}
//end
questionnaireDisplay.preshow = function() {
  //questionnaireDisplay.onResetQuestionnaires();
	showSyncLoadingScreen('Chargement du questionnaire...');
	
	if(questionnaireDisplay.pending) {
		questionnaireDisplay.pending = false;
		questionnaireDisplay.setAppMenu(questionnaireDisplay.crtProfile.readOnly, questionnaireDisplay.crtProfile.allowBack);
		if(questionnaireDisplay.isEdited) questionnaireDisplay.onQuestionSelect();
		dismissSyncLoadingScreen();
		return;
	}
	
	questionnaireDisplay.loadProfile();	
	questionnaire.setTopic(questionnaireDisplay.crtProfile.topic);
	questionnaire.setWorkOrder(questionnaireDisplay.crtProfile.wo);
	questionnaire.setUserSpecific(questionnaireDisplay.crtProfile.userSpecific);

	var loadSuccessful = questionnaire.loadQuestionnaire(
		questionnaireDisplay.crtProfile.articleReferences, 
		questionnaireDisplay.crtProfile.loadPreviousAnswers,
		questionnaireDisplay.crtProfile.validationStrategy,
		questionnaireDisplay.crtProfile.item,
		questionnaireDisplay.crtProfile.readOnly
	);
	
	questionnaireDisplay.isEdited = true;
	questionnaireDisplay.setAppMenu(questionnaireDisplay.crtProfile.readOnly, questionnaireDisplay.crtProfile.allowBack);
	dismissSyncLoadingScreen();
	
	if(!loadSuccessful) {
		popupModel.showPopError('erreur lors du chargement du questionnaire');
		questionnaireDisplay.close();
	}
	
	frmQuestionnaire.lblWOReference.text = workOrder.getReference();
	frmQuestionnaire.hbWOReference.backgroundColor = workOrder.color;
	frmQuestionnaire.hbWOReference.focusSkin = workOrder.skin;

	frmQuestionnaire.lblCustomerContractDetails.isVisible = false;
	if (!validationModel.isNull(questionnaire.customerContractDetails)) {
		frmQuestionnaire.lblCustomerContractDetails.isVisible = true;
		frmQuestionnaire.lblCustomerContractDetails.text = questionnaire.customerContractDetails;
		questionnaire.customerContractDetails = null;
    }
  
	questionnaireDisplay.setSelectedPreference(0);
	questionnaireDisplay.onPreferenceSelected();
	
	if(questionnaireDisplay.isEdited) {
		questionnaireDisplay.onQuestionSelect();
		return;
	}
	
  
};

questionnaireDisplay.loadProfile = function() {
	if (validationModel.isNull(questionnaireDisplay.crtProfile)) questionnaireDisplay.crtProfile = {};
	var profile = questionnaireDisplay.crtProfile;
	
	function setProfileField(field, value) {
		if (validationModel.isNull(profile[field])) profile[field] = value;
	}
	
	var fieldsAndValues = [
		{field : 'articleReferences', value : [41070068]},
		{field : 'validationStrategy', value : questionnaire.valid.ALL},
		{field : 'loadPreviousAnswers', value : true},
		{field : 'saveCB', value : null},
		{field : 'allowBack', value : false},
		{field : 'item', value : null},
		{field : 'returnFrm', value : null},
		{field : 'mandatory', value : false},
		{field : 'links', value : null},
		{field : 'noFormReturn', value : false},
		{field : 'readOnly', value : false},
		{field : 'topic', value : 'UNKNOWN'},
		{field : 'wo', value : workOrder},
		{field : 'userSpecific', value : true}
	]
	
	for(var i = 0; i < fieldsAndValues.length; i++) {
		setProfileField(fieldsAndValues[i].field, fieldsAndValues[i].value);
	}
	
	questionnaireDisplay.crtProfile = profile;
}

questionnaireDisplay.setSelectedPreference = function(prefIndex) {
	questionnaire.setCurrentPreference(prefIndex);
	questionnaireDisplay.selectedPref = prefIndex.toString();
	questionnaireDisplay.updatePreferencesOptions();
};

questionnaireDisplay.updatePreferencesOptions = function() {
	var key = questionnaireDisplay.selectedPref;
	var preferencesMasterData = new Array();
	var preferences = questionnaire.findAllPreferences();
	
	if(preferences.length == 1) {
		frmQuestionnaire.cmbbxPreference.isVisible = false;
		frmQuestionnaire.lblPref.isVisible = true;
		var status = ""; // JIRA 679
		if(preferences[0].mandatory) status = " - à compléter";
		if(preferences[0].status != 0) status = " - terminé";
		var label = putToLine(preferences[0].name + status);
		frmQuestionnaire.lblPref.text = label;
	} else {
	
		frmQuestionnaire.cmbbxPreference.isVisible = true;
		frmQuestionnaire.lblPref.isVisible = false;
		
		for(var i=0;i<preferences.length;i++) {
			var status = ""; // JIRA 679
			if(preferences[i].mandatory) status = " - à compléter";
			if(preferences[i].status != 0) status = " - terminé";
			var label = putToLine(preferences[i].name + status);
			var preferenceData = [i.toString(),	label];
         	if(preferences[i].name == "Questionnaire de refus" && workOrder.typeCode == "P" && workOrder.chapter != "002" ){
              /// Jira 408
           }else{
              preferencesMasterData.push(preferenceData);
           }
			
		}
		
		frmQuestionnaire.cmbbxPreference.masterData = preferencesMasterData;	
		frmQuestionnaire.cmbbxPreference.selectedKey = key;
	}
};

questionnaireDisplay.onPreferenceSelected = function() {
	if (frmQuestionnaire.cmbbxPreference.isVisible)
		questionnaireDisplay.selectedPref = frmQuestionnaire.cmbbxPreference.selectedKey;
	else
		questionnaireDisplay.selectedPref = '0';
	questionnaireDisplay.selectedCat = '0';
	questionnaire.setCurrentPreference(parseInt(questionnaireDisplay.selectedPref,10));
	questionnaireDisplay.updateCatalogsOptions();
	questionnaireDisplay.onCatalogSelected();
};

questionnaireDisplay.updateCatalogsOptions = function() {
	var key = questionnaireDisplay.selectedCat;
	var catalogsMasterData = new Array();
	var catalogs = questionnaire.findPreferenceCatalogs();
	
	if (catalogs.length == 1) {
		frmQuestionnaire.cmbbxCatalog.isVisible = false;
		frmQuestionnaire.lblCat.isVisible = true;
		var status = ""; // JIRA 679
		if(catalogs[0].mandatory) status = " - à compléter";
		if(catalogs[0].status != 0) status = " - terminé";
		var label = putToLine(catalogs[0].name + status);
		frmQuestionnaire.lblCat.text = label;
	} else {
		frmQuestionnaire.cmbbxCatalog.isVisible = true;
		frmQuestionnaire.lblCat.isVisible = false;
		
		for (var i = 0; i < catalogs.length; i++) {
			var status = ""; // JIRA 679
			if(catalogs[i].mandatory) status = " - à compléter";
			if(catalogs[i].status != 0) status = " - terminé";
			var label = putToLine(catalogs[i].name + status);
			var catalogData = [i.toString(),label];
			catalogsMasterData.push(catalogData);
		}
		
		frmQuestionnaire.cmbbxCatalog.masterData = catalogsMasterData;
		frmQuestionnaire.cmbbxCatalog.selectedKey = key;	
	}
};

questionnaireDisplay.onCatalogSelected = function() {
	if (frmQuestionnaire.cmbbxCatalog.isVisible)
		questionnaireDisplay.selectedCat = frmQuestionnaire.cmbbxCatalog.selectedKey;
	else
		questionnaireDisplay.selectedCat = '0';
	questionnaire.setCurrentCatalog(parseInt(questionnaireDisplay.selectedCat,10));
	questionnaireDisplay.displayQuestions();
};

questionnaireDisplay.setQuestionIndex = function(thisQuestion, indexToSet) {
  questionnaire.setCurrentQuestion(indexToSet);
  var answersPool = thisQuestion.answersPool ? thisQuestion.answersPool : questionnaireDisplay.setAnswersPool(false, thisQuestion);
  
  thisQuestion.index = indexToSet;
  thisQuestion.txtAnswerText.info = indexToSet;
  thisQuestion.txtAnswerText.zIndex = indexToSet;
  thisQuestion.txtAnswerText.onBeginEditing = function(c) { return function(){questionnaire.selectedIndex = c; };}(indexToSet);
  
  var setQuestionBtn = function(btnLabel, i) {
    thisQuestion[btnLabel].onClick = function(a, b) { return function() {questionnaireDisplay.onAnswerComboBoxEdit(a, b, btnLabel); }; }(answersPool[i], indexToSet);
  }
  
  var questionsToSet = ['btn1', 'btn2'];
  for(let i = 0; i < questionsToSet.length; i++) {
    setQuestionBtn(questionsToSet[i],i);
  }
  questionsToSet = ['btnOne', 'btnTwo', 'btnThree', 'btnFour', 'btnFive', 'btnSix'];
  for(let i = 0; i < questionsToSet.length; i++) {
    setQuestionBtn(questionsToSet[i],i);
  }
  
  return thisQuestion;
};

questionnaireDisplay.areSameQuestions = function(q1,q2) {
  var isSameQuestion = false;
  try {
    isSameQuestion = q1.lblQuestion.text === q2.lblQuestion.text;
  } catch(e) {
    return false;
  }
  var isSameAnswer = false;
  try {
    isSameAnswer = q1.lblAnswer.text === q2.lblAnswer.text;
  } catch(e) {
    return false;
  }
  return isSameQuestion;// && isSameAnswer;
}

questionnaireDisplay.displayQuestions = function(selectedIndex, questIndex) {
  var questions = questionnaire.findCatalogQuestions();
  var questionsMasterData = new Array();
  var start = 0;
  var end = questions.length;
  var followingRelatedQuestions = 0;

  if (!validationModel.isNull(questIndex)) {
    start = questIndex;
    if (questIndex > 0)
      followingRelatedQuestions = questions[questIndex-1].relatedQuestions;
  }
  for (var i = start; i < end; i++) {
    questionnaire.setCurrentQuestion(i);
    var qst = questions[i];
    var answersPool = questionnaireDisplay.setAnswersPool(false, qst);
    var relatedSpaceMark = followingRelatedQuestions > 0 ? "	* " : "";
    var answer = qst.answer;
    var displayMandatory = (qst.mandatory && qst.editable);
    var imgSrc = qst.editable ? 'warning.png' : 'recycle.png';
    var textInputType = null;
    if(qst.type == 0){
      textInputType = constants.TEXTBOX_INPUT_MODE_ANY;
    }else if(qst.type == 4){
      textInputType = constants.TEXTBOX_INPUT_MODE_NUMERIC;
    }else{
      textInputType = constants.TEXTBOX_INPUT_MODE_ANY;
    }
    
    var setSkin = function(indice){
      if(answersPool[indice]){
        if(answersPool[indice].lblPop == "Correct" && answer == answersPool[indice].lblPop){
          return "skinLblGreenSelected";
        }else if(answersPool[indice].lblPop == "Correct"){
          return "skinLblGreen";
        }
        else if(answersPool[indice].lblPop == "Non correct" && answer == answersPool[indice].lblPop){
          return "skinLblRedSelected";
        }else if(answersPool[indice].lblPop == "Non correct"){
          return "skinLblRed";
        }else if(answer == answersPool[indice].lblPop){
          return "noSkinLblWhiteSelected";
        }else{
          return "noSkinLblWhite";
        }
      }
    }

    var nextQuestionData = {
      answersPool: answersPool,
      type: qst.type,
      index : i,
      qstId: qst.id,
      lblQuestion : {text:(relatedSpaceMark + qst.question)},
      lblAnswer : {text:answer, isVisible:!(answersPool.length < 7 && qst.editable) || qst.type == 2 ?true:false},
      imgMandatory : {src: imgSrc, isVisible : displayMandatory},
      flxTwoButton: {isVisible:(answersPool.length==2 && qst.editable)?true:false},
      hboxAnswerText: {isVisible: (( qst.type==0 || qst.type==4 )&& qst.editable)?true:false},
      txtAnswerText: {text: ((qst.type == 0 || qst.type==4 ) && qst.status ? answer : ""), textInputMode: textInputType, info: i, zIndex: i, onBeginEditing : function(c) { return function(){questionnaire.selectedIndex = c; };}(i)},
      flxThreeButton: {isVisible:(answersPool.length>2 && answersPool.length<7 && qst.editable)?true:false},
      flxSixButton: {isVisible:(answersPool.length>3 && answersPool.length<7 && qst.editable)?true:false},
      canClickOnRow : (answersPool.length>=2 && answersPool.length<7)?false:true,
      btn1 : {text: answersPool[0]?answersPool[0].lblPop:"", "skin": setSkin(0), onClick : function(a, b) { return function() {
        questionnaireDisplay.onAnswerComboBoxEdit(a, b, "btn1"); }; }(answersPool[0], i)},
      btn2 : {text: answersPool[1]?answersPool[1].lblPop:"", "skin": setSkin(1), onClick : function(a, b) { return function() {
        questionnaireDisplay.onAnswerComboBoxEdit(a, b, "btn2"); }; }(answersPool[1], i)},
      btnOne : {text: answersPool[0]?answersPool[0].lblPop:"", "skin": setSkin(0), onClick : function(a, b) { return function() {
        questionnaireDisplay.onAnswerComboBoxEdit(a, b, "btnOne"); }; }(answersPool[0], i)},
      btnTwo : {text: answersPool[1]?answersPool[1].lblPop:"", "skin": setSkin(1), onClick : function(a, b) { return function() {
        questionnaireDisplay.onAnswerComboBoxEdit(a, b, "btnTwo"); }; }(answersPool[1], i)},
      btnThree : {text: answersPool[2]?answersPool[2].lblPop:"", "skin": setSkin(2), onClick : function(a, b) { return function() {
        questionnaireDisplay.onAnswerComboBoxEdit(a, b, "btnThree"); }; }(answersPool[2], i)},
      btnFour : {text: answersPool[3]?answersPool[3].lblPop:"", isVisible: answersPool[3]?true:false, "skin": setSkin(3), onClick : function(a, b) { return function() {
        questionnaireDisplay.onAnswerComboBoxEdit(a, b, "btnFour"); }; }(answersPool[3], i)},
      btnFive : {text: answersPool[4]?answersPool[4].lblPop:"", isVisible: answersPool[4]?true:false, "skin": setSkin(4), onClick : function(a, b) { return function() {
        questionnaireDisplay.onAnswerComboBoxEdit(a, b, "btnFive"); }; }(answersPool[4], i)},
      btnSix : {text: answersPool[5]?answersPool[5].lblPop:"", isVisible: answersPool[5]?true:false, "skin": setSkin(5), onClick : function(a, b) { return function() {
        questionnaireDisplay.onAnswerComboBoxEdit(a, b, "btnSix"); }; }(answersPool[5], i)},
    };
    questionsMasterData.push(nextQuestionData);
    if (followingRelatedQuestions > 0)
      followingRelatedQuestions--;
    followingRelatedQuestions += qst.relatedQuestions;

  }


  if (!validationModel.isNull(questIndex)) {
    frmQuestionnaire.segQuestions.setDataAt(questionsMasterData[0], questIndex);
    questionsMasterData.splice(0,1);
    var toAddQuestionIds = [];    
    for(var j = 0 ; j < questionsMasterData.length; j++) {
      toAddQuestionIds.push(questionsMasterData[j].qstId);
    }
    for(var j = frmQuestionnaire.segQuestions.data.length - 1; j > start; j--) {
      var indexOfQuestionToAdd = toAddQuestionIds.indexOf(frmQuestionnaire.segQuestions.data[j].qstId);
      if(indexOfQuestionToAdd >= 0) {
        questionsMasterData.splice(indexOfQuestionToAdd,1);
        toAddQuestionIds.splice(indexOfQuestionToAdd,1);
      } else {
        frmQuestionnaire.segQuestions.removeAt(questIndex+1);
      }
    }
    for (var j = questionsMasterData.length - 1; j >= 0; j--) {
      frmQuestionnaire.segQuestions.addDataAt(questionsMasterData[j], questIndex+1);
    }
    var prevIndex = -1;
    for(var j = 0; j < frmQuestionnaire.segQuestions.data.length ; j++) {
      var thisQuestion = frmQuestionnaire.segQuestions.data[j];
      if(thisQuestion.index >= prevIndex + 1) {
        // doNothing
      } else {
        questionnaireDisplay.setQuestionIndex(thisQuestion, prevIndex + 1);
        frmQuestionnaire.segQuestions.setDataAt(thisQuestion, j, null, kony.anim.ANIMATION_EFFECT_NONE);
      }
      prevIndex = thisQuestion.index;      
    }

  } else {    
    frmQuestionnaire.segQuestions.setData(questionsMasterData);
  }
  // for unknown reasons, the code belows triggers a platform error. Its purpose was to make sure the changed segment item was correctly selected
  // however, it seems this behavior is already natural to a kony segmented UI. Therefore, the code below shall be commented and no longer used.
  //	if (selectedIndex != null)
  //		frmQuestionnaire.segQuestions.selectedIndex = selectedIndex;

  //frmQuestionnaire.segQuestions.onScrollStart = function(){this.setFocus(false)};
  // frmQuestionnaire.segQuestions.setData(questionsMasterData);
  if(frmQuestionnaire.segQuestions.containerHeight !== 76) {
    frmQuestionnaire.segQuestions.containerHeight = 76;													//Arati:Changed code for JIRA UI-84
  }
  if(frmQuestionnaire.segQuestions.containerHeightReference !== constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE ) {
    frmQuestionnaire.segQuestions.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;	//Arati:Changed code for JIRA UI-84*/
  }
  if (validationModel.isNull(questIndex)) {
    questionnaireDisplay.onQuestionSelect();
  }
};



questionnaireDisplay.onQuestionSelect = function(rowNb) {
    if (rowNb) {
        //questionnaire.selectedIndex = rowNb;
    }
    var selectedRow = {
        "canClickOnRow": true
    };
	/*if(rowNb) {
		selectedRow = frmQuestionnaire.segQuestions.data[rowNb];
	} else */if (frmQuestionnaire.segQuestions.focusedItem && frmQuestionnaire.segQuestions.focusedItem.index) {
        selectedRow = frmQuestionnaire.segQuestions.focusedItem;
    } else if (frmQuestionnaire.segQuestions.selectedItems) {
        selectedRow = frmQuestionnaire.segQuestions.selectedItems[0];
    }
    frmQuestionnaire.segQuestions.containerHeight = 76;
    frmQuestionnaire.hbAnswerEdit.isVisible = false;
    if (frmQuestionnaire.segQuestions.selectedIndex != undefined && frmQuestionnaire.segQuestions.selectedIndex.length > 0) {
      var ind = (selectedRow.index != null) ? selectedRow.index : questionnaire.selectedItems[0].index;
      var found = false;
      var foundQuestion;
      for(var i = 0 ; i < frmQuestionnaire.segQuestions.data.length ; i++) {
        if(!found && frmQuestionnaire.segQuestions.data[i].index == ind) {
          ind = i;
          found = true;
          foundQuestion = frmQuestionnaire.segQuestions.data[i];
        }
      }
      questionnaire.setCurrentQuestion(ind);
        if (selectedRow.canClickOnRow == true) {
            if (questionnaire.findQuestion().editable) {
                questionnaireDisplay.loadAnswersEditBox(foundQuestion);
                frmQuestionnaire.segQuestions.containerHeight = 76;
                frmQuestionnaire.hbAnswerEdit.isVisible = true;
            }
        }
    }
};

questionnaireDisplay.loadAnswersEditBox = function(editedQuestion) {
  editedQuestion = editedQuestion || questionnaire.findQuestion();
  frmQuestionnaire.cbBxAnswerSelect.selectedKey = null;
  frmQuestionnaire.cldAnswerDate.clear();

  frmQuestionnaire.cbBxAnswerSelect.isVisible = false;
  frmQuestionnaire.cldAnswerDate.isVisible = false;
  frmQuestionnaire.hbAnswerEdit.isVisible = false;

  switch(editedQuestion.type) {
    case 0 :
      if(editedQuestion.status==1) questionnaireDisplay.loadAnswerText(editedQuestion.answer);
      break;
    case 2 :
      frmQuestionnaire.vbAnswerEdit.isVisible = false;
      frmQuestionnaire.cldAnswerDate.isVisible = true;
      frmQuestionnaire.cldAnswerDate.setFocus(true);
      if(editedQuestion.status==1) questionnaireDisplay.loadAnswerCalendar(editedQuestion.answerKey);
      break;
    case 1 :
    case 3 : 
      frmQuestionnaire.cbBxAnswerSelect.isVisible = false; // Replace by the popup segment
      simpleSegmentPop.isVisible = true;
      simpleSegmentPop.show();
      questionnaireDisplay.setAnswersPool();
      if(editedQuestion.status==1) questionnaireDisplay.loadAnswerComboBox(editedQuestion);
      break;
    case 4 : 
      if(editedQuestion.status==1) questionnaireDisplay.loadAnswerText(editedQuestion.answerKey);
      break;
    default :
      break;
  }
};

questionnaireDisplay.onAnswerTextBoxEdit = function(eventObject) {
  var ind = questionnaire.selectedIndex?questionnaire.selectedIndex:frmQuestionnaire.segQuestions.selectedItems[0].index;
  var found = false;
  for(var i = 0 ; i < frmQuestionnaire.segQuestions.data.length ; i++) {
    if(!found && frmQuestionnaire.segQuestions.data[i].index == ind) {
      ind = i;
      found = true;
    }
  }
  questionnaire.setCurrentQuestion(ind);
  var questData = questionnaire.findQuestion();
  var returnedAnswer = kony.string.trim(eventObject?eventObject.text:frmQuestionnaire.txtAnswerText.text); //Arati:Changed code for JIRA UI-66

  var answerData = {
    answer:'non renseigné',
    answerKey : null,
    action:questData.action,
    status: false
  };

  if (returnedAnswer.length > 0) {
    answerData.answerKey = questData.type == 4 ? questionnaire.setDecimals(returnedAnswer, questData) : null;
    answerData.answer = questData.type == 4 ? questionnaire.setDecimals(returnedAnswer, questData) : returnedAnswer;
    answerData.status = true;
  }

  if (isNaN(answerData.answerKey)) {
    popupModel.showPopError("Valeur non numérique : veuillez vérifier la valeur renseignée.");
    return;
  }

  questionnaireDisplay.onAnswerReturn(answerData);
};

questionnaireDisplay.setAnswersPool = function(canClick, question) {
	questionnaireDisplay.answersPool.length = 0;
  	if(!question)	question = questionnaire.findQuestion();
	var answersPool = new Array();
	if (question.type == 3)
		answersPool = contactModel.findContactsByWorkOrderAndTypeCode(workOrder, null);
	else
		answersPool = questionnaire.getQuestionAnswerPool(question);
	var answersMasterData = new Array();
	for (var i = 0; i < answersPool.length; i++) {
		var nextAnswer = {
			index : null,
			text : null,
			action : null,
          	indNumber : null
		};
		if (question.type == 3) {
			nextAnswer.index = 'cct_' + i.toString();
			nextAnswer.text = answersPool[i].firstName + " " + answersPool[i].lastName;
          nextAnswer.indNumber = i;
		}
		else {
			nextAnswer.index = answersPool[i].index;
			nextAnswer.text = answersPool[i].text;
			nextAnswer.action = answersPool[i].action;
          nextAnswer.indNumber = i;
		}
		questionnaireDisplay.answersPool.push(nextAnswer);
		nextAnswer.text = putToLine(nextAnswer.text,30);
		answersMasterData.push([nextAnswer.index,nextAnswer.text, nextAnswer.action]);
	}
	if (question.type == 3)
		answersMasterData.push(['cct_add', "Ajouter un contact"]);
		
		var dataToSeg = [];
		for(var i=0; i<answersMasterData.length; i++){
			dataToSeg.push({"lblPop" : answersMasterData[i][1], "lblId" : answersMasterData[i][0], "text": answersMasterData[i][1], "index": answersMasterData[i][0], "action": answersMasterData[i][2]});
		}
  
  			dataToSeg = getUnique(dataToSeg,'lblPop');
  if(canClick==false){
		return dataToSeg;
  }
  else{
    simpleSegmentPop.segSimplePopup.setData(dataToSeg);
  }
	//frmQuestionnaire.cbBxAnswerSelect.masterData = answersMasterData;
};

questionnaireDisplay.onAnswerComboBoxEdit = function(selectedValue, ind, widgetId) {
  if(selectedValue){
    //frmQuestionnaire.segQuestions.selectedIndex = [0, ind];
    //frmQuestionnaire.segQuestions.selectedRowIndex = [0, ind];
    if(frmQuestionnaire.segQuestions.focusedItem) {
      if(frmQuestionnaire.segQuestions.focusedItem.index) {
        ind = frmQuestionnaire.segQuestions.focusedItem.index;
        var found = false;
        for(var i = 0 ; i < frmQuestionnaire.segQuestions.data.length ; i++) {
          if(!found && frmQuestionnaire.segQuestions.data[i].index == ind) {
            ind = i;
            found = true;
          }
        }
      }
    }
    questionnaire.questIndex = ind;
    questionnaire.selectedItems = [selectedValue];
  }else{

    selectedValue = simpleSegmentPop.segSimplePopup.selectedItems[0];
    questionnaire.selectedItems = simpleSegmentPop.segSimplePopup.selectedItems;
  }
  questionnaireDisplay.setAppMenu(questionnaireDisplay.crtProfile.readOnly, questionnaireDisplay.crtProfile.allowBack);

  var answerData = {
    answer:'non renseigné',
    answerKey : null,
    action:null,
    status:0
  };

  if (!validationModel.isNull(selectedValue.lblId)) {
    var key = selectedValue.lblId;
    if (key == 'cct_add') {
      workOrderContactEdit.contact = null;
      questionnaireDisplay.pending = true;
      frmWorkOrderContactEdit.show();
      return;
    }

    //var masterData = frmQuestionnaire.cbBxAnswerSelect.masterData;
    if(selectedValue){
      var answerIndex = ind;
    }else{
      var masterData = simpleSegmentPop.segSimplePopup.data;
      for (var i = 0; i < masterData.length; i++) {
        if (masterData[i].lblId == key) {
          var answerIndex = i;
          break;
        }
      }
    }

    if(selectedValue){
      answerData.answer = selectedValue.text;
      answerData.answerKey = key.substring(0, 3) == 'cct' ? null : selectedValue.index;
      answerData.action = selectedValue.action;
      answerData.status = 1;
    }else{
      answerData.answer = questionnaireDisplay.answersPool[answerIndex].text;
      answerData.answerKey = key.substring(0, 3) == 'cct' ? null : questionnaireDisplay.answersPool[answerIndex].index;
      answerData.action = questionnaireDisplay.answersPool[answerIndex].action;
      answerData.status = 1;
    }
  }

  if(selectedValue && ind != null){
    questionnaireDisplay.onQuestionSelect(ind);
    var dataSeg = frmQuestionnaire.segQuestions.data;
    dataSeg[ind]["btn1"].skin = "noSkinLblWhite";
    dataSeg[ind]["btn2"].skin = "noSkinLblWhite";
    dataSeg[ind]["btnOne"].skin = "noSkinLblWhite";
    dataSeg[ind]["btnTwo"].skin = "noSkinLblWhite";
    dataSeg[ind]["btnThree"].skin = "noSkinLblWhite";   
    dataSeg[ind][widgetId].skin = "noSkinLblWhiteSelected";
    //frmQuestionnaire.segQuestions.data[index][widgetId].skin = "btnBorderWhiteRound";
    frmQuestionnaire.segQuestions.setDataAt(dataSeg[ind], ind);
    questionnaire.questIndex = ind;
    //simpleSegmentPop.segSimplePopup.selectedItems[0].lblId = indice
  }
  questionnaireDisplay.onAnswerReturn(answerData);

  if(selectedValue && ind != null){
    // frmQuestionnaire.segQuestions.selectedRowIndex = [0, ind];
  }else if(questionnaire.selectedIndex != null){
    // frmQuestionnaire.segQuestions.selectedRowIndex = [0, questionnaire.selectedIndex];
  }
};

questionnaireDisplay.onAnswerDateEdit = function() {
	var questData = questionnaire.findQuestion();
	var answerData = {
		answer: 'non renseigné',
		answerKey : null,
		action: questData.action,
		status: 0
	};
	if (!validationModel.isNull(frmQuestionnaire.cldAnswerDate.date)) {
		answerData.answerKey = frmQuestionnaire.cldAnswerDate.date;
		answerData.answer = frmQuestionnaire.cldAnswerDate.date;
		answerData.status = 1;
	}
	
	questionnaireDisplay.onAnswerReturn(answerData);
  	frmQuestionnaire.cldAnswerDate.isVisible = false;
    frmQuestionnaire.hbAnswerEdit.isVisible = false;
};

questionnaireDisplay.onAnswerReturn = function(answerData) {
	var isAnswerValid = questionnaire.answerQuestion(answerData);
	if (!isAnswerValid) {
		popupModel.showPopError("La réponse proposée n'est pas valide");
		return;
	}
	
	var questIndex = questionnaire.questIndex;
	if (questionnaire.checkPostComputeRequired(questIndex))
		questionnaire.postComputeAnswers();
	questionnaireDisplay.answersPool.length = 0;
	questionnaireDisplay.updatePreferencesOptions();
	questionnaireDisplay.updateCatalogsOptions();	
	questionnaireDisplay.displayQuestions(frmQuestionnaire.segQuestions.selectedIndex, questIndex);
};

questionnaireDisplay.loadAnswerText = function(currentAnswer) {
	frmQuestionnaire.txtAnswerText.text = currentAnswer;
};

questionnaireDisplay.loadAnswerComboBox = function(question) {
	var masterData = frmQuestionnaire.cbBxAnswerSelect.masterData;
	if (!validationModel.isNull(question.answerKey)) {
		for (var i = 0; i < masterData.length; i++) {
			if (masterData[i][0] == question.answerKey) {
				frmQuestionnaire.cbBxAnswerSelect.selectedKey = masterData[i][0];
				break;
			}
		}
	}
	else if (!validationModel.isNull(question.answer)) {
		for (var i = 0; i < masterData.length; i++) {
			if(masterData[i][1] == question.answer) {
				frmQuestionnaire.cbBxAnswerSelect.selectedKey = masterData[i][0];
				break;
			}
		}
	}
};

questionnaireDisplay.loadAnswerCalendar = function(answer) {
	var day = answer.substr(0, 2);
	var month = answer.substr(3, 2);
	var year = answer.substr(6, 4);
	frmQuestionnaire.cldAnswerDate.date = [day, month, year];
};

questionnaireDisplay.onResetQuestionnaires = function() {
	var currentPrefIndex = parseInt(questionnaireDisplay.selectedPref, 10);
	//var msg = 'Êtes-vous certain de vouloir recharger tous les questionnaires ?';
  	var msg = 'Voulez-vous annuler les modifications que vous avez apportées aux questionnaires ?';	//Arati:Changed code for JIRA UI-70
	
	questionnaireDisplay.onResetConfirm = function() {
		var loadSuccessful = questionnaire.loadQuestionnaire(
			questionnaireDisplay.crtProfile.articleReferences, 
		  	//questionnaireDisplay.crtProfile.loadPreviousAnswers,
          	false,
		   	questionnaireDisplay.crtProfile.validationStrategy,
		   	questionnaireDisplay.crtProfile.item
		);
		if (!loadSuccessful) {
			popupModel.showPopError('erreur lors du rechargement du questionnaire');
			questionnaireDisplay.close();
		}
	
		questionnaireDisplay.setSelectedPreference(currentPrefIndex);
		questionnaireDisplay.onPreferenceSelected();
	}
	
	popupModel.showPopError(msg, questionnaireDisplay.onResetConfirm, null, true);
}

questionnaireDisplay.save = function() {
	questionnaireDisplay.onSaveConfirm = function() {
		questionnaire.save();
		if (!validationModel.isNull(questionnaireDisplay.crtProfile.saveCB) && isQuestionnaireValid)
			questionnaireDisplay.crtProfile.saveCB();
		questionnaireDisplay.close(true);
	}
	
	var isQuestionnaireValid = questionnaire.check();
	
	var msg = '';
	var callBack = null;
	var hasCancel = false;
	if (questionnaireDisplay.crtProfile.mandatory) {
		if (!isQuestionnaireValid)
			msg = "Vous devez valider toutes les questions obligatoires pour continuer.";
		else {
			msg = 'Voulez-vous valider ces réponses ?';
			callBack = questionnaireDisplay.onSaveConfirm;
			hasCancel = true;
		}
	} else {
		if (!isQuestionnaireValid)
			msg = "Attention : toutes les questions obligatoires n'ont pas été renseignées.\n\n";
		msg += 'Voulez-vous valider ces réponses ?';
		callBack = questionnaireDisplay.onSaveConfirm;
		hasCancel = true;
	}
	
	if (questionnaire.validationStrategy == questionnaire.valid.ONE)
		msg += ' (Seul le questionnaire actuellement affiché est pris en compte)';
	popupModel.showPopError(msg, callBack, null, hasCancel);
};

questionnaireDisplay.close = function(isSurveyValid) {
	var returnFrm = questionnaireDisplay.crtProfile.returnFrm;
	isSurveyValid = validationModel.isNull(isSurveyValid) ? false : isSurveyValid;
	var noFormReturn = questionnaireDisplay.crtProfile.noFormReturn;
	questionnaireDisplay.crtProfile = null;
	questionnaireDisplay.isEdited = false;
	if (noFormReturn)
		return;
	if (validationModel.isNull(returnFrm) || !isSurveyValid)
		navigationModel.doReturn();
	else
		returnFrm.show();
}
