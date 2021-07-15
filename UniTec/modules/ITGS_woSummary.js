//Screen frmWOSummary, frmWOValidationSignature

woSummary = {};

woSummary.reset = function() {
	woSummary.validMenu = {
		service: false,
		report: false,
		install: false,
		signature: false,
		comment: false
    };
	woSummary.survey =  {
		priority : null
	};
}



woSummary.pauseWO = function(){
	//kony.application.showLoadingScreen("sknLoading");
  	showSyncLoadingScreen("");
	function startSync() {
		global.syncController.saveUserWork();
	}
	kony.print('Pause function');
	app_parameters.lifetime.pause_bool = true;
  	app_parameters.lifetime.switchWorkOrder = null;
	frmWorkOrders.txtWorkOrderLinked.text = "";
  	workOrders.linkedBT = null;
	frmHome.show(); // Already define in the button of the function
  frmWorkOrders.destroy();
	requestSync(startSync);
}


woSummary.signatureReset = function() {

}

woSummary.setPriority = function(currentWo) {
  var wo;
  if(currentWo){
    wo = currentWo;
  }else{
    wo = workOrder;
  }
	if(app_parameters.no_survey) {
		woSummary.survey.priority = null;
	}
	else if (wo.typeCode == 'V' && conformityModel.findConformitySurveyByPriority(wo.priority, wo.doco).length > 0) {
		woSummary.survey.priority = validationModel.isNull(wo.priority) ? ' ' : wo.priority;
	}
	else {
		woSummary.survey.priority = null;
	}
}

woSummary.checkPriority = function() {
	return !(validationModel.isNull(woSummary.survey.priority) || woSummary.survey.priority.length == 0);
}

woSummary.checkSurvey = function(currentWo, crtProfile) {
  var isPriority;
  if(currentWo){
    woSummary.setPriority(currentWo);
  }
    isPriority = woSummary.checkPriority();

	if (!isPriority)
		return true; // there is no conformity survey for that work order
	if(currentWo){
		var isValid = conformityModel.testSurvey(currentWo.doco);
	}else{
		var isValid = conformityModel.testSurvey(workOrder.doco);
	}

	if (validationModel.isNull(isValid)) {
		var surveyCodes = conformityModel.findConformitySurveyByPriority(woSummary.survey.priority, currentWo.doco);
            //conformityModel.findConformitySurveyByPriority(woSummary.survey.priority);
		questionnaire.setTopic("CONFORMITY");
		if(currentWo){
			questionnaire.setWorkOrder(currentWo);
		}else{
			questionnaire.setWorkOrder(workOrder);
		}
		var loadSuccessful = questionnaire.loadQuestionnaire(surveyCodes, true, questionnaire.valid.ALL, null);
      
		isValid = false;
		if(loadSuccessful) isValid = questionnaire.check();
      
      

		if(currentWo){
			conformityModel.updateSurvey(currentWo.doco,isValid);
		}else{
			conformityModel.updateSurvey(workOrder.doco,isValid);
		}
	}
      if(crtProfile){
            var loadProfileSuccessful = questionnaire.loadQuestionnaire(crtProfile.articleReferences, true, questionnaire.valid.ALL, null);
            if(loadProfileSuccessful) isValid = questionnaire.check();
            }
	return isValid;
}

woSummary.init = function() {
	woSummary.reset();
}

woSummary.onTxtSummaryDone = function () {
	// Save the summary provided for the BT
	if (validationModel.isNull(workOrder.summaryId)) {
		var remark = remarkModel.createRemarkByWorkOrder(workOrder, frmWOSummary.txtSummary.text, 'ENTETE BT');
		workOrder.summaryId = remark.id;
		workOrder.summaryText = frmWOSummary.txtSummary.text;
	} else {
		var remark = {
			id: workOrder.summaryId,
			doco: workOrder.doco,
			comment: frmWOSummary.txtSummary.text
		};
		remarkModel.updateRemark(remark, 'ENTETE BT');
		workOrder.summaryText = frmWOSummary.txtSummary.text;
	}
}

woSummary.preshow = function() {
	woSummary.isReadOnly = !workOrderModel.isOnSite(workOrder);
	woSummary.setPriority();

	woSummary.setButtons();

	if (!woSummary.isReadOnly) {
		sequence.changeTo(sequence.values.AdviceDuty, workOrder);
	}

	frmWOSummary.lblBTReference.text = workOrder.getReference() + " - " + workOrder.status;
	frmWOSummary.hbBTReference.backgroundColor = workOrder.color;
	frmWOSummary.hbBTReference.focusSkin = workOrder.skin;

	frmWOSummary.hbRecommendations.isVisible = ( workOrder.typeCode !== 'S' );
	frmWOSummary.hbInstall.isVisible = (( workOrder.typeCode !== 'G' ) && ( workOrder.typeCode !== 'S' ));

	if (!validationModel.isNull(workOrder.summaryId)) {
		frmWOSummary.txtSummary.text = workOrder.summaryText;
	} else {
		frmWOSummary.txtSummary.text = "";
	}

	woSummary.updateAllSteps();

	var isSurveyAvailable = ((woSummary.validMenu.service || app_parameters.debug.no_sync) && woSummary.checkPriority());
    var validQA = false;
  	var isQAOk = false; // QA mean Quality Survey
    var isPresentQA = woSummary.fillQualitySurvey(woSummary.isReadOnly, null, true);

	if (isPresentQA) {
      frmWOSummary.hbQA.isVisible = true;
      woSummary.fillQualitySurvey(false, null, true);
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
      questionnaireDisplay.setSelectedPreference(0);
      questionnaireDisplay.onPreferenceSelected();
      validQA = questionnaire.check();
      woSummary.checkSurvey(workOrder, questionnaireDisplay.crtProfile);
      if(validQA){
	    isQAOk = true;
        frmWOSummary.hbQA.skin = "sknHBValid"; 
      } else {
	    frmWOSummary.hbQA.skin = "sknHBValidNot"; 
      }
	}else{
      frmWOSummary.hbQA.isVisible = false;
    }
  
    var validParc = false;
    var isPresentParc = woSummary.fillParc(woSummary.isReadOnly, null, true);

	if (isPresentParc) {
      frmWOSummary.hboxParc.isVisible = true;
      woSummary.fillParc(false, null, true);
      questionnaireDisplay.loadProfile();	
      questionnaire.setTopic(questionnaireDisplay.crtProfile.topic);
      questionnaire.setWorkOrder(questionnaireDisplay.crtProfile.wo);
      questionnaire.setUserSpecific(questionnaireDisplay.crtProfile.userSpecific);
      var loadParcQuestionnaireSuccessful = questionnaire.loadQuestionnaire(
        questionnaireDisplay.crtProfile.articleReferences, 
        questionnaireDisplay.crtProfile.loadPreviousAnswers,
        questionnaireDisplay.crtProfile.validationStrategy,
        questionnaireDisplay.crtProfile.item,
        questionnaireDisplay.crtProfile.readOnly
      );
      questionnaireDisplay.setSelectedPreference(0);
      questionnaireDisplay.onPreferenceSelected();
      validParc = questionnaire.check();
      woSummary.checkSurvey(workOrder, questionnaireDisplay.crtProfile);
      
      var userAnswers = questionnaire.findAnswers();
      if(userAnswers.length > 0) {
        frmWOSummary.hboxParc.skin = frmWOSummary.hboxParc.focusSkin = "sknHBValid"; // Green background
      } else {
        frmWOSummary.hboxParc.skin = frmWOSummary.hboxParc.focusSkin = "sknIntermediaryReport"; // Yellow background
      }
	}else{
      frmWOSummary.hboxParc.isVisible = false;
    }
  
  	// apply skins to buttons
	frmWOSummary.hbService.skin = frmWOSummary.hbService.focusSkin =
	 woSummary.validMenu.service ? "sknHBValid" : "sknHBValidNot";
	frmWOSummary.hbQuest.skin = frmWOSummary.hbQuest.focusSkin =
	 woSummary.validMenu.report ? "sknHBValid" : "sknHBValidNot";
	frmWOSummary.hbQuest.isVisible = frmWOSummary.line2.isVisible = isSurveyAvailable;
	frmWOSummary.hbInstall.skin = frmWOSummary.hbInstall.focusSkin =
	 woSummary.validMenu.install ? "sknHBValid" : "sknHBValidNot";
	frmWOSummary.hbSignature.skin = frmWOSummary.hbSignature.focusSkin =
	 woSummary.validMenu.signature ? "sknHBValid" : "sknHBValidNot";
	frmWOSummary.hbComment.skin = frmWOSummary.hbComment.focusSkin =
	 woSummary.validMenu.comment ? "sknHBValid" : "sknHBValidNot";
  
   	var commentLbl = 'Ajouter un commentaire';

    if (workOrderModel.isOnSite(workOrder)) 
 	if (!validationModel.isNull(workOrder.summaryId) && !validationModel.isNull(workOrder.summaryText) && workOrder.summaryText.length > 0)
 			commentLbl = 'Modifier le commentaire';
	frmWOSummary.lblAddComment.text=commentLbl;

	frmWOSummary.hbBottomForm.isVisible =
		woSummary.validMenu.service &&
		woSummary.validMenu.report &&
		woSummary.validMenu.install &&// UI-426 deb&& 
		woSummary.validMenu.comment;//UI-439      
  // (isPresentQA?isQAOk:true);
    if (workOrder.chapter == "002" && workOrder.typeCode == "V") {
       frmWOSummary.hbBottomForm.isVisible = frmWOSummary.hbBottomForm.isVisible &&  (isPresentQA?isQAOk :true);
    }
  //UI-426 fin
    frmWOSummary.hbValidate.isVisible = !woSummary.isReadOnly;
	frmWOSummary.hbValidate.skin = "sknHBValidNot";
  
   // if(frmWOSummary.hbBottomForm.isVisible == false && workOrder.chapter == "002" && workOrder.statusCode == '55'){

    if(workOrder.chapter == "002" && workOrder.statusCode == '55' && !woSummary.validMenu.signature){
      frmWOSummary.hboxIntermediaryReport.isVisible = true;
    }else{
      frmWOSummary.hboxIntermediaryReport.isVisible = false;
    }
  
  var linkedCount = workOrderModel.findLinkedBTByworkOrder(workOrder, "'V', 'P'");
  if(linkedCount[0].linkedCount > 1 && (workOrder.typeCode == 'V' || workOrder.typeCode == 'P') && workOrder.statusCode == '55'){
    frmWOSummary.hboxSwitchBt.isVisible = true;
  }else{
    frmWOSummary.hboxSwitchBt.isVisible = false;
  }
  
}

woSummary.setButtons = function() {
	var appMenu = [
		["woSummary.info", "Info BT", "folder.png", onClickInfoBT]
	];

	if (!woSummary.isReadOnly || (app_parameters.lifetime.pause_bool == true && !(workOrder.statusCode >= 70)))
	// Only if on site or if in pause but the current BT is terminated
		appMenu.push(["woSummary.STOP", "Interruption", "stopsign.png", workOrderInterrupt.load]);
	if (!validationModel.isNull(workOrder.equipmentNumber))
		appMenu.push(["woSummary.BASE", "Parc", "building.png", onClickBuilding]);
	if ((!woSummary.isReadOnly || app_parameters.lifetime.switchWorkOrder != null) && !validationModel.isNull(workOrder.equipmentNumber) && workOrder.process != 'CHUBB' && (workOrder.typeCode == 'V' ||  workOrder.typeCode == 'I' || workOrder.typeCode == 'P'))
		appMenu.push(["woSummary.SCAN", "Scanner", "barcode.png", onScannerClick]);
	if(app_parameters.lifetime.pause_bool==false && workOrder.statusCode == '55'){
		appMenu.push(["woSummary.pauseWO", "Retour accueil UNITEC", "pause.png", woSummary.pauseWO]);
	}

	if(workOrder.typeCode == "V" && workOrder.statusCode != "70" && workOrder.statusCode != "55"){
		appMenu.push(["woSummary.unruleTask", "Taches non statuées appareils désactivés", "statued.png", woSummary.unruleTask]);
	}
  
  if(workOrder.process == 'CHUBB' && workOrder.typeCode == 'V'){
    appMenu.push(["woSummary.TASK", "Tâches", "task.png", onTaskClick]);
  }
function onTaskClick(){
  summaryService.activeTab = true;
  frmSummaryServiceChubb.show();
  }
  //Dhaval:Fix for app menu start
	function onClickInfoBT(){
      frmWorkOrderOverview.show();
    }
  	function onClickBuilding(){
      frmInventory.show();
    }
  	function onScannerClick(){
      frmItemScan.show();
    }
  //End
  //Dhaval:Invocation of custom app menu start
	otis.application.createAppMenu("woSummaryAppMenu", appMenu, sknAppmenu, sknAppmenuF);
	otis.application.setCurrentAppMenu("woSummaryAppMenu");
  //End
};

woSummary.isValidComment = function(currentWo) {
    var wo = (currentWo) ? currentWo : workOrder;
    var isValid = true;
  	if (wo.chapter == "002" || workOrder.typeCode == "S") {
      	isValid = (!validationModel.isNull(wo.summaryId) && !validationModel.isNull(wo.summaryText) && wo.summaryText.length > 0);
    }
	return isValid;  
}

woSummary.updateAllSteps = function(currentWo){
	// Check state of steps to be validated
	var wo = false;
	if(currentWo){
		wo = currentWo;
	}
  if(workOrder.typeCode == 'V' || workOrder.typeCode == 'I'){
    woSummary.validMenu.service = (summaryService.checkAllTasksDone(wo) && summaryService.checkActiveDevice(wo));
  }else{
    woSummary.validMenu.service = summaryService.checkAllTasksDone(wo);
  }
	
	woSummary.validMenu.signature = WOValidationSignature.isValid(wo);

	if (app_parameters.lifetime.limited_access) {
		woSummary.validMenu.report = true;
		woSummary.validMenu.install = true;
	} else {
		woSummary.validMenu.report = woSummary.validMenu.service ? woSummary.checkSurvey(wo) : false;
		woSummary.validMenu.install = articleSalesTasks.isCompleted(wo);
	}
	
	woSummary.validMenu.comment = woSummary.isValidComment(wo);
};

woSummary.checkAllSteps = function(excludeKeys){
	var areAllValid = true;
	excludeKeys = validationModel.isNull(excludeKeys) ? new Array() : excludeKeys;

	for(var key in woSummary.validMenu) {
		if (excludeKeys.indexOf(key, 0) < 0 )
			areAllValid = areAllValid && woSummary.validMenu[key];
	}
	return areAllValid;
};

woSummary.closeWorkOrder = function () {
	// Show loading screen and block UI
	showSyncLoadingScreen();
  var manyBT = woSummary.manyBT();
  var currentWorkOrderList = [];
  var doneAndSignedWorkOrders = [];
  var doneButUnsignedWorkOrders = [];
  if(manyBT.doneWorkOrders.length > 1 && manyBT.currentWorkOrderList.length > 1){ // Check if there is many valid BT related (valid mean all in green unless signature
    currentWorkOrderList = manyBT.doneWorkOrders;
    for(var i = 0; i < currentWorkOrderList.length; i++){
      if(WOValidationSignature.isValid(currentWorkOrderList[i])){
        doneAndSignedWorkOrders.push(currentWorkOrderList[i]);
      }else{
        doneButUnsignedWorkOrders.push(currentWorkOrderList[i])
      }
    }
    if(doneAndSignedWorkOrders.length > 1){
    var woList = "";
    for(var i=0; i<doneAndSignedWorkOrders.length; i++){
      woList += doneAndSignedWorkOrders[i].doco + " " + doneAndSignedWorkOrders[i].equipmentActivity + "\n";
    }
    var textDoneButUnsignedWorkOrders = "";
    if(doneButUnsignedWorkOrders.length>0){
      doneButUnsignedWorkOrders = "Liste des BT non signés : \n";
      for(var i=0; i<doneButUnsignedWorkOrders.length; i++){
        textDoneButUnsignedWorkOrders += doneButUnsignedWorkOrders[i].doco + " " + doneButUnsignedWorkOrders[i].equipmentActivity + "\n";
      }
      doneButUnsignedWorkOrders = "\n";
    }
    var textUnFinishedWorkOrders = "";
    if(manyBT.unFinishedWorkOrders.length>0){
      textUnFinishedWorkOrders+="Liste des BT incomplet \n";
      for(var i=0; i<manyBT.unFinishedWorkOrders.length; i++){
        textUnFinishedWorkOrders += manyBT.unFinishedWorkOrders[i].doco + " " + manyBT.unFinishedWorkOrders[i].equipmentActivity + "\n";
      }
      textUnFinishedWorkOrders+="\n";
    }
		popupModel.showPopError((textUnFinishedWorkOrders==""?"":textUnFinishedWorkOrders)+(doneButUnsignedWorkOrders==""?"":doneButUnsignedWorkOrders)+"Voulez-vous clôturer ces BT signés ?\n"+woList, function(){woSummary.closeManyBT(true)}, undefined, true,  function(){woSummary.closeManyBT(false)});

		woSummary.closeManyBT = function(bool){ // If click Yes or No
			if(bool == true){
				for(var i = 0; i < doneAndSignedWorkOrders.length; i++){
				if(doneAndSignedWorkOrders.length == i+1){
					woSummary.workOrderCloseProcess(doneAndSignedWorkOrders[i]);
				}else{
					woSummary.workOrderCloseProcess(doneAndSignedWorkOrders[i], true);
				}

				}
			}else{
				woSummary.workOrderCloseProcess(workOrder);
            }
        }
    }
    else{
      woSummary.workOrderCloseProcess(workOrder);
    }
  }else{
    woSummary.workOrderCloseProcess(workOrder);
  }
}

woSummary.workOrderCloseProcess = function(wo, disableSync){
	var recommendations = articleRecommendationModel.findRecommendationsByWorkOrder(wo, null, null, true, null, false, null, null, true, ["'Ordered'"], true);
	var quotationVente = articleRecommendationModel.createQuotationFromRecommendations(recommendations, "'Ordered'", wo);

	recommendations = articleRecommendationModel.findRecommendationsByWorkOrder(wo, null, null, true, null, false, null, null, true, ["'Created'"], true);
	var quotationDevis = articleRecommendationModel.createQuotationFromRecommendations(recommendations, "'Created'", wo);

	if (quotationDevis.quotationNumber != undefined) {
		var errors = quotationModel.checkQuotationStructure(quotationDevis.Quotationid);
		if (errors.length > 0) {
			var msg = "Attention :\n" + errors.join("\n") + "\nVeuillez contacter votre support.";
			popupModel.showPopError(msg);
		}

		quotationDevis = quotationModel.findQuotationByQuotationNumber(quotationDevis.quotationNumber);
		var printTextId = global.printTextsModel.findPrintTextIdForQuote();
		quotationModel.submitQuotationDocument(quotationDevis, printTextId);
	}

	// Dismiss loading screen
	kony.application.dismissLoadingScreen();

	// Update the BT status & the sequence
	workOrderModel.validateWorkOrderEnd(wo);
	sequence.changeTo(sequence.values.logedIn, wo, null);

	// create opporunities for comments
	opportunityModel.createOpportunityForWorkOrder(wo);

	function afterSync() {
		frmHome.show();
      frmWorkOrders.destroy();
        sequence.changeTo(sequence.values.logedIn, null);
        app_parameters.lifetime.switchWorkOrder = null;
          frmWorkOrders.txtWorkOrderLinked.text = "";
        	workOrders.linkedBT = null;
	}

	function startSync() {
		global.syncController.saveUserWork(afterSync, afterSync);
	}

	if (woShift.isRequired()) return;
	else if(!disableSync) requestSync(startSync, afterSync);
}

woSummary.onBtnCloseWorkOrderClick = function () {
	if (!woSummary.checkAllSteps()) {
		popupModel.showPopError("le bilan n'est pas complet");
		return;
	}
  
  	

	var unfinishedSurveys = woSummary.checkMandatoryWorkOrderSurveys();
	if(unfinishedSurveys.length != 0) {
		popupModel.showPopError("Clôture impossible : il faut d'abord compléter : \n" + woSummary.displayUnfinishedSurveys(unfinishedSurveys));
		return;
	}
	if((workOrder.typeCode != 'G') && (workOrder.typeCode != 'S')){
      var customer = customerModel.findCustomerByWorkOrder(workOrder);
      if (validationModel.isNull(customer) || validationModel.isNull(customer.salesman)) {
          popupModel.showPopError("Le commercial de ce client n'est pas connu. Clotûre du BT impossible.");
          return;
      }
    }
  
  var currentF56BTDT = workOrderModel.getF56BTDTfromDoco(workOrder);
  if(workOrder.typeCode == "V" && ( workOrder.chapter == "001" || workOrder.chapter == "003") && currentF56BTDT.CK01 == "N" && currentF56BTDT.AA05 == "NULL" && currentF56BTDT.SOURCE == "NULL"){
    popupModel.showPopError("Il existe des tâches non faites. Clotûre du BT impossible.");
          return;
  }

	var text = "ATTENTION : Une fois le BT clôturé, plus aucune modification ne sera possible. Êtes-vous sûr de vouloir fermer ce BT ?";
	popupModel.showPopError(text, woSummary.closeWorkOrder, undefined, true);
}

woSummary.onBtnArticleRecommendationsClick = function () {

  	if (app_parameters.lifetime.limited_access) {
		popupModel.showPopError("Vous ne possédez pas les droits nécessaires pour accéder à cette section.");
    }
  	else if(workOrder.statusCode >= 70 && workOrder.process == 'CHUBB'){
		frmArticleRecommendations.show();
    }
	else if (articleSalesTasks.isInProgress()){
		popupModel.showPopError("La vente est terminée. Merci de valider les poses.");
    }
	else{
		frmArticleRecommendations.show();
    }
}

woSummary.onBtnArticleSalesTasksClick = function () {
	if (app_parameters.lifetime.limited_access) {
		popupModel.showPopError("Vous ne possédez pas les droits nécessaires pour accéder à cette section.");
	} else if (!articleSalesTasks.isInProgress())
		popupModel.showPopError("Merci de d'abord valider la vente.");
	else
		frmArticleSalesTasks.show();
}

woSummary.onBtnServiceClick = function () {
	if (workOrder.typeCode == 'P' && workOrder.process == 'CHUBB')
		frmSummaryServiceInstallChubb.show();
	else if (workOrder.typeCode == 'P')
		frmSummaryServiceInstall.show();
	else if (workOrder.process == 'CHUBB')
		frmSummaryServiceChubb.show();
	else
		frmSummaryService.show();
}

woSummary.onBtnValidationSignatureClick = function () {
    
 	WOValidationSignature.reInit(); //reinit signature data
	frmWOValidationSignature.destroy();			//Arati: Changed code for Signature FFI

	if (woSummary.checkAllSteps(["signature"])) {
		if (workOrder.typeCode == 'V' && itemModel.findObsoleteItemsByWorkOrder(workOrder).length > 0) {
			popupModel.showPopError("Certains appareils au parc n'ont pas été identifiés : signature impossible.");
		}
		else {
          var manyBT = woSummary.manyBT();
					if(manyBT.currentWorkOrderList.length > 1 && woSummary.isReadOnly != true){
                      var currentWorkOrderList;
                      if(manyBT.unFinishedWorkOrders.length == 0){
							currentWorkOrderList = manyBT.currentWorkOrderList;
                      	}else{
                          	currentWorkOrderList = manyBT.doneWorkOrders; // take this list of unfinished BT to show in the Popup
                        }
						
						var woList = "";
                      var woListUnFinished = "";
						for(var i=0; i<currentWorkOrderList.length; i++){
							woList += currentWorkOrderList[i].doco + " " + currentWorkOrderList[i].equipmentActivity + "\n";
						}
                      for(var i=0; i<manyBT.unFinishedWorkOrders.length; i++){
							woListUnFinished += manyBT.unFinishedWorkOrders[i].doco + " " + manyBT.unFinishedWorkOrders[i].equipmentActivity + "\n";
						}
                      if(manyBT.unFinishedWorkOrders.length == 0){
						popupModel.showPopError("Voulez-vous signer plusieurs BT liés ?\n"+woList, function(){woSummary.setmanyBT(true)}, undefined, true,  function(){woSummary.setmanyBT(false)});
                      }else{
					popupModel.showPopError("Liste des BT liés incomplets : \n"+woListUnFinished+"\nListe des BT réalisés : \n"+woList+"\nVoulez vous signer tous les BT réalisés ?", function(){woSummary.setmanyBT(true)}, undefined, true,  function(){woSummary.setmanyBT(false)});
                      }
                      
						woSummary.setmanyBT = function(bool){
						WOValidationSignature.manySignature = bool;
					if(bool == true){
						WOValidationSignature.manySignature = true;
                      if(manyBT.unFinishedWorkOrders.length == 0){
                        WOValidationSignature.workOrdersToSign = manyBT.currentWorkOrderList;
                      }else{
                       WOValidationSignature.workOrdersToSign = manyBT.doneWorkOrders; 
                      }
					}else{
						WOValidationSignature.manySignature = false;
                      WOValidationSignature.workOrdersToSign = null;
					}
				}
			}
          frmWOValidationSignature.show();
		}
	}
	else {
      popupModel.showPopError("vous devez compléter le bilan avant de signer la validation du BT");
    }

}

woSummary.onQuestClick = function() {
	var surveyCodes = conformityModel.findConformitySurveyByPriority(woSummary.survey.priority);
	if (surveyCodes.length > 0) {

		function onValidateWOSurvey() {
			conformityModel.updateSurvey(workOrder.doco,questionnaire.check());
		}

		questionnaireDisplay.crtProfile = {
			articleReferences : surveyCodes,
			allowBack : true,
			saveCB : onValidateWOSurvey,
			readOnly : (woSummary.isReadOnly),
			topic : "CONFORMITY"
		};
		frmQuestionnaire.show();
	}
	else popupModel.showPopError('Pas de questionnaire défini pour cette certification');
}

woSummary.onCommentEditClick = function() {
	frmWOComment.show();
}

woSummary.checkMandatoryWorkOrderSurveys = function() {

	var unfinishedSurveys = [];
//	var surveyCodes = questionnaireModel2.findWORelatedSurveyReferences(['QF']);
//	surveyCodes = surveyCodes.concat(questionnaireModel2.findWORelatedSurveyReferences(['QA'], workOrder.equipmentActivity));
//
//	for(var i = 0; i< surveyCodes.length; i++) {
//		var nextSurvey = surveyCodes[i];
//		if(nextSurvey.DYUD == 1) {
//
//			var surveyData = questionnaireModel2.findQuestionnaireByItems([nextSurvey.ITM]);
//			if(surveyData.length) {
//				questionnaire.setWorkOrder(workOrder);
//				var loadSuccessful = questionnaire.loadQuestionnaire([nextSurvey.ITM], true, questionnaire.valid.ALL);
//				if(loadSuccessful) {
//					if(!questionnaire.check()) {
//						unfinishedSurveys.push(nextSurvey.ITM);
//					}
//				}
//			}
//		}
//	}

//	// TEMP - the FAR survey is not fully implemented yet.
	unfinishedSurveys = []; // to be removed
	return unfinishedSurveys;
};

woSummary.displayUnfinishedSurveys = function(surveyIds) {

	var surveyNames = new Array();

	for(var i = 0; i < surveyIds.length; i++) {
		surveyNames.push(questionnaireModel2.getSurveyNameById(surveyIds[i]).name);
	}

	return "- " + surveyNames.join(",\n- ");
};

woSummary.onFarSurveyClick = function() {
	global.survey.open("FAR2");
  
};

woSummary.onQualitySurveyClick = function() {
	isPresent = woSummary.fillQualitySurvey(woSummary.isReadOnly, null);
	if (!isPresent) {
		popupModel.showPopError("Le questionnaire de qualité n'est pas disponible.");
	}
};

woSummary.fillQualitySurvey = function(readOnly, saveCB, loadOnly, currentWo) {
	if(app_parameters.no_survey) return false;
  	var wo = workOrder;
  if(currentWo){
    wo = currentWo;
  }
	var results = questionnaireModel2.findWORelatedSurveyReferences(['QA'], wo.equipmentActivity, wo.chapter);
	var articleReferences = new Array;

	if (results.length == 0) return false;
//UI-426 deb
//if (wo.typeCode !== 'V' || wo.chapter !== '002' ) return false;
//UI-426 fin
  for(var i = 0; i < results.length;i++) {
		articleReferences.push(results[i].ITM);
	}

	var farProfile = {
		articleReferences : articleReferences,
		loadPreviousAnswers : true,
		saveCB : saveCB,
		mandatory : false,
		topic : "QA",
		noFormReturn : (!validationModel.isNull(saveCB)),
		readOnly : readOnly,
		wo : {
			doco : wo.doco,
			equipmentNumber : 'NULL',
			dcto : 'NULL',
			siteAN8 : wo.siteAN8
		}
	};

	questionnaireDisplay.crtProfile = farProfile;
  	if(loadOnly){
    }else{
		frmQuestionnaire.show();
    }
	return true;
}



woSummary.onParcClick = function() {
	var isPresent = woSummary.fillParc(woSummary.isReadOnly, woSummary.fillParcSync);
	if (!isPresent) {
		popupModel.showPopError("La prise de parc n'est pas disponible.");
	}
};

woSummary.fillParcSync = function() {  
	function afterSyncSuccess() {
		popupModel.showPopError("La prise de Parc a été synchronisée avec succès. Un devis sera automatiquement généré si votre demande est finalisée.");
	};
  
	function afterSyncFail() {
		popupModel.showPopError("La prise de Parc n'a pas été synchronisée avec succès.");
	};
  
	function startSync() {
		global.syncController.saveUserWork(afterSyncSuccess, afterSyncFail);
	};

	popupModel.showPopError("Voulez-vous synchroniser maintenant ?", startSync, null, true);
} 


woSummary.fillParc = function(readOnly, saveCB, loadOnly, currentWo) {
	if(app_parameters.no_survey) return false;
  
  	var wo = workOrder;
  	if(currentWo){
    	wo = currentWo;
  	}
	
  	var surveyReferencesEquipmentActivity = null;
  	var results = questionnaireModel2.findWORelatedSurveyReferences(['QP'], surveyReferencesEquipmentActivity, wo.chapter);
  	if (results.length == 0) return false;
  
  	var articleReferences = new Array;
  	for(var i = 0; i < results.length;i++) {
    	articleReferences.push(results[i].ITM);
  	}

	var farProfile = {
		articleReferences : articleReferences,
		loadPreviousAnswers : true,
		saveCB : saveCB,
		mandatory : false,
		topic : "QP",
		readOnly : readOnly,
        allowBack : true,
		noFormReturn : false,
		returnFrm : null,
		wo : {
			doco : wo.doco,
			equipmentNumber : 'NULL',
			dcto : 'NULL',
			siteAN8 : wo.siteAN8
		}
	};

	var workOrderContract = workOrderModel.findWorkOrderContractByWorkOrder(workOrder);
	var workOrderCustomer = workOrderModel.findWorkOrderCustomerByWorkOrder(workOrder);
  
	questionnaire.customerContractDetails = (!validationModel.isNull(workOrderContract.type)) ? workOrderContract.type : "Formule de contrat";
	questionnaire.customerContractDetails += " : ";
	questionnaire.customerContractDetails += (!validationModel.isNull(workOrderCustomer.CPGP)) ? workOrderCustomer.CPGP : "N° de contrat tarifaire";

	questionnaireDisplay.crtProfile = farProfile;
  	if(loadOnly){
    }else{
		frmQuestionnaire.show();
    }
	return true;  
}


woSummary.unruleTask = function(){

	woSummary.confirmDisable = function(){
		taskModel.unRuleUnDisableDevice(workOrder.doco);
	}

	popupModel.showPopError("êtes-vous certain de vouloir désactiver les tâches non statuées ?", woSummary.confirmDisable, null, true);
}

woSummary.manyBT = function(){

	var currentWorkOrderList = workOrderModel.findWorkOrdersGroupingByWorkOrder(workOrder, "'V', 'G', 'S', 'P'");
	var isWorkOrderOkTab = [];
  var unFinishedWorkOrders = [];
  var doneWorkOrders = [];
	kony.print("#######"+currentWorkOrderList);
	if(currentWorkOrderList.length > 1){
		for(var i = 0; i < currentWorkOrderList.length; i++){
		woSummary.updateAllSteps(currentWorkOrderList[i]); // Check if all is green ++
          
          var isPresentQA = woSummary.fillQualitySurvey(woSummary.isReadOnly, null, true, currentWorkOrderList[i]);

	if (isPresentQA) {
      //frmWOSummary.hbQA.isVisible = true;
      woSummary.fillQualitySurvey(false, null, true, currentWorkOrderList[i]);
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
      questionnaireDisplay.setSelectedPreference(0);
      questionnaireDisplay.onPreferenceSelected();
      validQA = questionnaire.check();
      woSummary.checkSurvey(currentWorkOrderList[i], questionnaireDisplay.crtProfile);
	}
	var isValidQA = true;
          if(isPresentQA){
            isValidQA = questionnaire.check();
          }
          
		kony.print('### '+JSON.stringify(woSummary.validMenu.service && woSummary.validMenu.report && woSummary.validMenu.install && isValidQA));
	if(woSummary.validMenu.service && woSummary.validMenu.report && woSummary.validMenu.install && questionnaire.check() == true){
			if(currentWorkOrderList[i].statusCode >= 33 || currentWorkOrderList[i].statusCode <= 66){ // Change
				if(summaryService.checkAllTasksDone(currentWorkOrderList[i]) == true){
					isWorkOrderOkTab.push(true);
                  doneWorkOrders.push(currentWorkOrderList[i]);
				}else{
					isWorkOrderOkTab.push(false);
				}
			}else{
				isWorkOrderOkTab.push(false);
			}
		}else{
			isWorkOrderOkTab.push(false);
		}
          if(isWorkOrderOkTab[i] == false){
            unFinishedWorkOrders.push(currentWorkOrderList[i]);
          }
	}
	}else{
		isWorkOrderOkTab.push(false);
	}

 
	woSummary.updateAllSteps(workOrder); // Re - Init the color bow of the current workOrder
	woSummary.setPriority(); // Re - Init workOrder Priority

	return {"currentWorkOrderList": currentWorkOrderList, "doneWorkOrders": doneWorkOrders, "unFinishedWorkOrders": unFinishedWorkOrders};

}
