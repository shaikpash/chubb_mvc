	// ##### DEPRECATED begin #####
// this code was used from form frmWorkOrderInterrupt, but the form is no more used

workOrderInterrupt = {
	questionnaire: null,
	questionnaireType : null,
	questionIndex: null,
	responseIndex: null,
	lowestQuestionIndexWithContacts: null,
	setInitialFormState: true
};

workOrderInterrupt.init = function(){
	var appMenu = [
		["workOrderInterrupt.BACK", "Retour", "left.png", onBackClick],
		["workOrderInterrupt.WEEK", "Retour Planning", "week.png", onWeekClick],
		["workOrderInterrupt.VALID", "Valider", "check.png", workOrderInterrupt.save]
	];
  	//Dhaval:Fix for App menu not working start
	function onBackClick(){
      navigationModel.doReturn();
    }
  	function onWeekClick(){
      e122PanningHebdomadaire.show();
    }
  	//End
	otis.application.createAppMenu("workOrderInterruptAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

workOrderInterrupt.preShow = function () {
	otis.application.setCurrentAppMenu("workOrderInterruptAppMenu");//Dhaval:Invocation of custom app menu

	if (workOrderInterrupt.setInitialFormState) {
		frmWorkOrderInterrupt.lblReference.text = workOrder.getReference();
		frmWorkOrderInterrupt.hbxReference.backgroundColor = workOrder.color;
		frmWorkOrderInterrupt.hbxReference.focusSkin = workOrder.skin;

		frmWorkOrderInterrupt.txtComment.isVisible = (workOrder.typeCode == 'I');
		frmWorkOrderInterrupt.lnFooter.isVisible = (workOrder.typeCode == 'I');
		frmWorkOrderInterrupt.lblTelContacts.isVisible = (workOrder.typeCode == 'I');
		frmWorkOrderInterrupt.hbxTelContacts.isVisible = (workOrder.typeCode == 'I');
		frmWorkOrderInterrupt.lnFooter2.isVisible = (workOrder.typeCode == 'I');
		frmWorkOrderInterrupt.lblRepContacts.isVisible = (workOrder.typeCode == 'I');
		frmWorkOrderInterrupt.hbxRepContacts.isVisible = (workOrder.typeCode == 'I');
		frmWorkOrderInterrupt.hbxMedia.isVisible = (workOrder.typeCode == 'I');
		
      var questionnaireTypeMasterData;
      if(workOrder.typeCode == 'P'){
         questionnaireTypeMasterData = [['2','Incomplet']];
      }else{
         questionnaireTypeMasterData = [['1','Refus de vérification'],['2','Incomplet']];
      }
     if (workOrder.typeCode == 'P'  && workOrder.chapter == '002' ) {  questionnaireTypeMasterData = [['1','Refus de vérification'],['2','Incomplet']];}
		
		if ((workOrder.typeCode == 'I' || workOrder.typeCode == 'G' || workOrder.typeCode == 'S') && workOrder.chapter == '002' ) questionnaireTypeMasterData.push(['3','Intervention résolue au téléphone']);
		frmWorkOrderInterrupt.rbgQuestionnaireType.masterData = questionnaireTypeMasterData;
		frmWorkOrderInterrupt.rbgQuestionnaireType.selectedKey = '1';

		workOrderInterrupt.onQuestionnaireTypeSelection();

		if (!validationModel.isNull(workOrder.summaryId)) {
			frmWorkOrderInterrupt.txtComment.text = workOrder.summaryText;
		} else {
			frmWorkOrderInterrupt.txtComment.text = "";
		}
	}
	workOrderInterrupt.loadCbxContacts();
	if (workOrder.typeCode == 'I') workOrderInterrupt.onMediaTypeSelection();
	workOrderInterrupt.setInitialFormState = true;
}



workOrderInterrupt.onQuestionnaireTypeSelection = function () {
	var questionnaireType = '';

	if (frmWorkOrderInterrupt.rbgQuestionnaireType.selectedKeyValue[0] == '1') {
		workOrderInterrupt.questionnaireType = 'QR';
	} else if (frmWorkOrderInterrupt.rbgQuestionnaireType.selectedKeyValue[0] == '2') {
		workOrderInterrupt.questionnaireType = 'QI';
	} else {
		workOrderInterrupt.questionnaireType = 'QT';
	}

	workOrderInterrupt.questionnaire = questionnaireModel.findQuestionnaireByTypeAndWorkOrder(workOrderInterrupt.questionnaireType,workOrder);

	// hide contact list
	frmWorkOrderInterrupt.hbxContacts.isVisible = false;
	frmWorkOrderInterrupt.lnBottom.isVisible = false;
	workOrderInterrupt.lowestQuestionIndexWithContacts = null;

	// Remove old questions
	for (var i = 0; i < workOrderInterrupt.questionIndex; i++) {
		workOrderInterrupt.removeLblQuestion(i);
	}
	workOrderInterrupt.questionIndex = 0;

	// Remove old responses
	for (var i = 0; i < workOrderInterrupt.responseIndex; i++) {
		workOrderInterrupt.removeCbxResponses(i);
		workOrderInterrupt.removeTxtResponses(i);
		workOrderInterrupt.removeClnResponses(i);
	}
	workOrderInterrupt.responseIndex = 0;

	// Add the first question
	if (!validationModel.isNull(workOrderInterrupt.questionnaire) && workOrderInterrupt.questionnaire.questions.length > 0) {
		if (workOrderInterrupt.questionnaire.questions.length > 0) {
			if (workOrderInterrupt.questionnaire.questions[0].responseIsContact) {
				workOrderInterrupt.lowestQuestionIndexWithContacts = workOrderInterrupt.questionIndex;
				frmWorkOrderInterrupt.hbxContacts.isVisible = true;
				frmWorkOrderInterrupt.lnBottom.isVisible = true;
			} else {
				var question = workOrderInterrupt.questionnaire.questions[0];
				var lblQuestion = workOrderInterrupt.addLblQuestion(workOrderInterrupt.questionIndex, question);
				workOrderInterrupt.questionIndex++;
				workOrderInterrupt.addQuestionnaireResponsesForQuestion(lblQuestion, question);
			}
		}
	}
}

workOrderInterrupt.addQuestionnaireResponsesForQuestion = function (lblQuestion, question) {
	var currentQuestionIndex = parseInt(lblQuestion.id.substring(11,12));
	workOrderInterrupt.responseIndex = currentQuestionIndex;
	workOrderInterrupt.questionIndex = currentQuestionIndex+1;

	// Add responses to the loaded question
	if (question.responseIsNumeric) {
		var defaultNumber = null;
		if (!validationModel.isNull(question.responseNumericDefault) && question.responseNumericDefault != '') {
			defaultNumber = parseInt(question.responseNumericDefault)
		}
		workOrderInterrupt.addTxtResponseNumeric(workOrderInterrupt.responseIndex, defaultNumber);
		workOrderInterrupt.responseIndex++;
	} else if (question.responseIsDate) {
		workOrderInterrupt.addClnReponse(workOrderInterrupt.responseIndex);
		workOrderInterrupt.responseIndex++;
	} else if (!validationModel.isNull(question.responses) && question.responses.length > 0) {
		var cbxResponsesMasterData = [["-1", "Choisir complément de motif"]];
		for (var i = 0; i < question.responses.length; i++) {
			cbxResponsesMasterData.push([i, question.responses[i].text]);
		}

		if (cbxResponsesMasterData.length > 0) {
			var cbxResponses = workOrderInterrupt.addCbxResponses(workOrderInterrupt.responseIndex, question.responses, cbxResponsesMasterData);
			workOrderInterrupt.responseIndex++;
			workOrderInterrupt.onQuestionnaireResponseSelection(cbxResponses);
		}
	} else {
		workOrderInterrupt.addTxtResponse(workOrderInterrupt.responseIndex);
		workOrderInterrupt.responseIndex++;
	}
}

workOrderInterrupt.onQuestionnaireResponseSelection = function (cbxResponses) {
	var response = parseInt(cbxResponses.selectedKeyValue[0]) > -1 ? cbxResponses.info.context[parseInt(cbxResponses.selectedKeyValue[0])] : {};
	var currentResponseIndex = parseInt(cbxResponses.id.substring(12,13));

	// Hide contact list if required
	if (workOrderInterrupt.lowestQuestionIndexWithContacts > currentResponseIndex) {
		frmWorkOrderInterrupt.hbxContacts.isVisible = false;
		frmWorkOrderInterrupt.lnBottom.isVisible = false;
	}

	// Remove old follow up questions
	for (var i = 0; i < workOrderInterrupt.questionIndex; i++) {
		if (i > currentResponseIndex) {
			workOrderInterrupt.removeLblQuestion(i);
		}
	}
	workOrderInterrupt.questionIndex = currentResponseIndex+1;

	// Remove old follow up responses
	for (var i = 0; i < workOrderInterrupt.responseIndex; i++) {
		if (i > currentResponseIndex) {
			workOrderInterrupt.removeCbxResponses(i);
			workOrderInterrupt.removeTxtResponses(i);
			workOrderInterrupt.removeClnResponses(i);
		}
	}
	workOrderInterrupt.responseIndex = currentResponseIndex+1;

	// Add follow up question to the selected response
	if (!validationModel.isNull(response.followUpQuestions) && response.followUpQuestions.length > 0) {
		if (response.followUpQuestions[0].responseIsContact) {
			if (validationModel.isNull(workOrderInterrupt.lowestQuestionIndexWithContacts) || workOrderInterrupt.lowestQuestionIndexWithContacts > workOrderInterrupt.questionIndex) {
				workOrderInterrupt.lowestQuestionIndexWithContacts = workOrderInterrupt.questionIndex;
			}
			frmWorkOrderInterrupt.hbxContacts.isVisible = true;
			frmWorkOrderInterrupt.lnBottom.isVisible = true;
		} else {
			var question = response.followUpQuestions[0];
			var lblQuestion = workOrderInterrupt.addLblQuestion(workOrderInterrupt.questionIndex, question);
			workOrderInterrupt.questionIndex++;
			workOrderInterrupt.addQuestionnaireResponsesForQuestion(lblQuestion, question);
		}
	}
}

workOrderInterrupt.onBtnContactEditClick = function (eventObject) {
	var selectedContactIndex = (eventObject.id.indexOf('TelContacts') > -1) ? frmWorkOrderInterrupt.cbxTelContacts.selectedKey :
																		      frmWorkOrderInterrupt.cbxRepContacts.selectedKey;
	if (!validationModel.isNull(selectedContactIndex) && parseInt(selectedContactIndex) > -1 && workOrderInterrupt.contacts.length > 0) {
		workOrderContactEdit.contact = workOrderInterrupt.contacts[parseInt(selectedContactIndex)];
	} else {
		workOrderContactEdit.contact = null;
	}
	frmWorkOrderContactEdit.show();
}

workOrderInterrupt.onMediaTypeSelection = function () {
	var selectedContactIndex = frmWorkOrderInterrupt.cbxRepContacts.selectedKey;
	if (!validationModel.isNull(selectedContactIndex) && parseInt(selectedContactIndex) > -1 && workOrderInterrupt.contacts.length > 0) {
		var contact = workOrderInterrupt.contacts[parseInt(selectedContactIndex)];
		if (frmWorkOrderInterrupt.rbgMediaType.selectedKeyValue[0] == 'E') {
			frmWorkOrderInterrupt.lblMedia.text = !validationModel.isNull(contact.email) ? contact.email : 'Non configuré';
		} else {
			frmWorkOrderInterrupt.lblMedia.text = !validationModel.isNull(contact.fax) ? contact.fax : 'Non configuré';
		}
	} else {
		frmWorkOrderInterrupt.lblMedia.text = '';
	}
}

workOrderInterrupt.loadCbxContacts = function () {

	workOrderInterrupt.onQuestionnaireContactSelection = function (cbxContacts) {
		if (cbxContacts.selectedKeyValue[1] == "(Nouveau contact)") {
			workOrderInterrupt.setInitialFormState = false;
			workOrderContactEdit.contact = null;
			frmWorkOrderContactEdit.show();
		} else if (cbxContacts.id == 'cbxRepContacts') {
			workOrderInterrupt.onMediaTypeSelection();
		}
	}

	workOrderInterrupt.contacts = contactModel.findContactsByWorkOrderAndTypeCode(workOrder, null);
	var principalContactKey = 0;
	var principalRepContactKey;

	var cbxContactsMasterData = [];
	for (var i = 0; i < workOrderInterrupt.contacts.length; i++) {
		var contact = workOrderInterrupt.contacts[i];
		cbxContactsMasterData.push([i, contact.title.concat(' ').concat(contact.lastName.toUpperCase()).concat(' ').concat(contact.firstName)]);
		if (contact.isMainTechnicalContact) principalContactKey = i;
		if (!validationModel.isNull(workOrderInterrupt.repContact) && contact.id == workOrderInterrupt.repContact.id) principalRepContactKey = i;
	}

	if (cbxContactsMasterData.length == 0) {
		cbxContactsMasterData.push([cbxContactsMasterData.length, "Choisir un contact"]);
	}

	cbxContactsMasterData.push([cbxContactsMasterData.length, "(Nouveau contact)"]);
	frmWorkOrderInterrupt.cbxContacts.onSelection = workOrderInterrupt.onQuestionnaireContactSelection;
	frmWorkOrderInterrupt.cbxContacts.masterData = cbxContactsMasterData;
	frmWorkOrderInterrupt.cbxContacts.selectedKey = principalContactKey;

	if (workOrder.typeCode == 'I') {
		frmWorkOrderInterrupt.cbxTelContacts.onSelection = workOrderInterrupt.onQuestionnaireContactSelection;
		frmWorkOrderInterrupt.cbxTelContacts.masterData = cbxContactsMasterData;
		frmWorkOrderInterrupt.cbxTelContacts.selectedKey = principalContactKey;

		frmWorkOrderInterrupt.cbxRepContacts.onSelection = workOrderInterrupt.onQuestionnaireContactSelection;
		frmWorkOrderInterrupt.cbxRepContacts.masterData = cbxContactsMasterData;
		frmWorkOrderInterrupt.cbxRepContacts.selectedKey = !validationModel.isNull(principalRepContactKey) ? principalRepContactKey : principalContactKey;
	}
}

workOrderInterrupt.removeLblQuestion = function (questionIndex) {
	var lblQuestion = widgetFunctions.getWidgetByContainerAndId(frmWorkOrderInterrupt.vbxQuestionnaire, "lblQuestion" + questionIndex);
	if (!validationModel.isNull(lblQuestion)) {
		if (questionIndex > 0) {
			var lnSeperator = widgetFunctions.getWidgetByContainerAndId(frmWorkOrderInterrupt.vbxQuestionnaire, "lnSeperator" + questionIndex);
			if (!validationModel.isNull(lnSeperator)) {
				frmWorkOrderInterrupt.vbxQuestionnaire.remove(lnSeperator);
			}
		}
		frmWorkOrderInterrupt.vbxQuestionnaire.remove(lblQuestion);
	}
}

workOrderInterrupt.removeCbxResponses = function (responseIndex) {
	var cbxResponses = widgetFunctions.getWidgetByContainerAndId(frmWorkOrderInterrupt.vbxQuestionnaire, "cbxResponses" + responseIndex);
	if (cbxResponses != null) {
		frmWorkOrderInterrupt.vbxQuestionnaire.remove(cbxResponses);
	}
}

workOrderInterrupt.removeTxtResponses = function (responseIndex) {
	var txtResponse = widgetFunctions.getWidgetByContainerAndId(frmWorkOrderInterrupt.vbxQuestionnaire, "txtResponse" + responseIndex);
	if (txtResponse != null) {
		frmWorkOrderInterrupt.vbxQuestionnaire.remove(txtResponse);
	}
}

workOrderInterrupt.removeClnResponses = function (responseIndex) {
	var clnResponse = widgetFunctions.getWidgetByContainerAndId(frmWorkOrderInterrupt.vbxQuestionnaire, "clnResponse" + responseIndex);
	if (clnResponse != null) {
		frmWorkOrderInterrupt.vbxQuestionnaire.remove(clnResponse);
	}
}

workOrderInterrupt.addLblQuestion = function (questionIndex, question) {

	if (questionIndex > 0) {
		workOrderInterrupt.addLnSeperator(questionIndex);
	}

	var lblQuestion = new kony.ui.Label ({
		"id": "lblQuestion" + questionIndex,
		"isVisible": true,
		"skin": "sknLblOrange",
		"text": question.text
	}, {
		"widgetAlignment": constants.WIDGET_ALIGN_CENTER,
		"vExpand": false,
		"hExpand": true,
		"margin": [1, 1, 1, 1],
		"padding": [0, 1, 0, 1],
		"contentAlignment": constants.CONTENT_ALIGN_CENTER,
		 "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
	}, {});

    lblQuestion.info = {context: question};
    frmWorkOrderInterrupt.vbxQuestionnaire.add(lblQuestion);

    return widgetFunctions.getWidgetByContainerAndId(frmWorkOrderInterrupt.vbxQuestionnaire, "lblQuestion" + questionIndex);
}

workOrderInterrupt.addCbxResponses = function (responseIndex, responses, cbxResponsesMasterData) {

    var cbxResponses = new kony.ui.ComboBox({
        "id": "cbxResponses" + responseIndex,
        "isVisible": true,
        "masterData": [
            ["1", "Liste information selon motif"]
        ],
        "skin": "cboxNormal",
        "focusSkin": "cboxFocus",
        "onSelection": workOrderInterrupt.onQuestionnaireResponseSelection
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW
    });

    cbxResponses.masterData = cbxResponsesMasterData;
    cbxResponses.info = {context: responses};
    cbxResponses.selectedKey = "-1";
    frmWorkOrderInterrupt.vbxQuestionnaire.add(cbxResponses);

    return widgetFunctions.getWidgetByContainerAndId(frmWorkOrderInterrupt.vbxQuestionnaire, "cbxResponses" + responseIndex);
}

workOrderInterrupt.addTxtResponseNumeric = function (responseIndex, defaultValue) {

    var txtResponse = new kony.ui.TextBox2({
        "id": "txtResponse" + responseIndex,
        "isVisible": true,
        "text": defaultValue,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "autoFilter": false
    });

    txtResponse.info = {type: 'numeric'};
    frmWorkOrderInterrupt.vbxQuestionnaire.add(txtResponse);

    return widgetFunctions.getWidgetByContainerAndId(frmWorkOrderInterrupt.vbxQuestionnaire, "txtResponse" + responseIndex);
}

workOrderInterrupt.addTxtResponse = function (responseIndex) {

    var txtResponse = new kony.ui.TextBox2({
        "id": "txtResponse" + responseIndex,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "maxTextLength": 300,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "autoFilter": false
    });

    txtResponse.info = {type: 'text'};
    frmWorkOrderInterrupt.vbxQuestionnaire.add(txtResponse);

    return widgetFunctions.getWidgetByContainerAndId(frmWorkOrderInterrupt.vbxQuestionnaire, "txtResponse" + responseIndex);
}

workOrderInterrupt.addLnSeperator = function (questionIndex) {

	var lnSeperator = new kony.ui.Line({
        "id": "lnSeperator" + questionIndex,
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 10,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});

    frmWorkOrderInterrupt.vbxQuestionnaire.add(lnSeperator);
}

workOrderInterrupt.addClnReponse = function (responseIndex) {

	var date = new Date();
	var clnResponse = new kony.ui.Calendar({
        "id": "clnResponse" + responseIndex,
        "isVisible": true,
        "date": [date.getDate(), date.getMonth()+1, date.getFullYear()],
        "dateFormat": "dd/MM/yyyy",
        "viewConfig": {
            gridConfig: {
                "allowWeekendSelectable": true
            }
        },
        "calendarIcon": null,
        "skin": "calNormalGrey",
        "focusSkin": "calFocus",
        "viewType": constants.CALENDAR_VIEW_TYPE_GRID_POPUP,
        "placeholder": "JJ/MM/AAAA"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {});

    frmWorkOrderInterrupt.vbxQuestionnaire.add(clnResponse);

    return widgetFunctions.getWidgetByContainerAndId(frmWorkOrderInterrupt.vbxQuestionnaire, "clnResponse" + responseIndex);
}

// ##### DEPRECATED end #####

workOrderInterrupt.save = function() {
  questionnaireDisplay.crtProfile.noFormReturn = true;
	var newStatus = null;
	var newWR12 = null;
	var preference = questionnaire.findPreference(); // Id of the refusal survey
	var links = questionnaireDisplay.crtProfile.links;
	if(!validationModel.isNull(links) && links[preference.id] == 'QR' &&  preference.status == 1) { // the refusal survey has been completed
		newStatus = '84';
		newWR12 = questionnaire.findQuestion(questionnaire.prefIndex, 0, 0).answerKey;
	}
	else if(!validationModel.isNull(links) && links[preference.id] == 'QI' &&  preference.status == 1) { // if the refusal survey wasn't completed, then it was the 'unfinished' survey
		newStatus = '66';
	}
	else {
		popupModel.showPopError('questionnaire non identifié - le BT ne peut pas être mis à jour');
		return;
	}

	var updatedWorkOrder = workOrder;
	updatedWorkOrder.statusCode = validationModel.isNull(newStatus) ? updatedWorkOrder.statusCode : newStatus;
	updatedWorkOrder.WR12 = validationModel.isNull(newWR12) ? updatedWorkOrder.WR12 : newWR12;
	workOrderModel.updateWorkOrderParams(updatedWorkOrder, ['statusCode','WR12'], ['SRST','WR12']);
//	questionnaireDisplay.noFormReturn = false;
	if (woShift.isRequired()){
		questionnaireDisplay.crtProfile.noFormReturn = true;
		return;
	}
	else {
      function afterSync() {
        //		var isPresent = woSummary.fillFARSurvey(false, onValidateFAR);
        //		if (!isPresent) onValidateFAR();
        frmHome.show();
        frmWorkOrders.destroy();
        sequence.changeTo(sequence.values.logedIn, null);
        app_parameters.lifetime.switchWorkOrder = null;
          frmWorkOrders.txtWorkOrderLinked.text = "";
        	workOrders.linkedBT = null;
        
      }
      
      
        }
		popupModel.showPopError("Voulez-vous synchroniser maintenant ?", startSync, null, true, afterSync);

  
  function startSync(){
    global.syncController.saveUserWork(afterSync, afterSync);
  }
        
     
}

workOrderInterrupt.load = function() {

	if(app_parameters.no_survey) { // TEMP - survey will be shut down to allow further testing
		var updatedWorkOrder = workOrder;
		updatedWorkOrder.statusCode = '66';
		workOrderModel.updateWorkOrderParams(updatedWorkOrder, ['statusCode'], ['SRST']);

		function startSync() {
			global.syncController.saveUserWork(afterSync, afterSync);
		}
		function afterSync() {
          sequence.changeTo(sequence.values.logedIn, null);
		frmHome.show();
          frmWorkOrders.destroy();
          app_parameters.lifetime.switchWorkOrder = null;
          frmWorkOrders.txtWorkOrderLinked.text = "";
        }
		popupModel.showPopError("Voulez-vous synchroniser maintenant ?", startSync, null, true, afterSync);

	}

	var results = questionnaireModel2.findInterruptSurveyReferences();
  kony.print("results found"+JSON.stringify(results));
	var articleReferences = new Array;
	var links = {};
	for(var i = 0; i < results.length;i++) {
		articleReferences.push(results[i].ITM);
		links[results[i].ITM] = results[i].RMK2;
	}

	var WOInterruptProfile = {
		articleReferences : articleReferences,
		validationStrategy : questionnaire.valid.ONE,
		loadPreviousAnswers : false,
		saveCB : workOrderInterrupt.save,
		allowBack : true,
      	noFormReturn : false,
		returnFrm : null,
		mandatory : true,
		links : links,
		topic : "STOP"
	};

	questionnaireDisplay.crtProfile = WOInterruptProfile;
	questionnaire.setTopic('STOP');
    //function onValidateFAR() {
		frmQuestionnaire.show();
	/*}

	
//		var isPresent = woSummary.fillFARSurvey(false, onValidateFAR);
//		if (!isPresent) onValidateFAR();
      	global.survey.open("FAR2", onValidateFAR, onValidateFAR);*/
	
}
