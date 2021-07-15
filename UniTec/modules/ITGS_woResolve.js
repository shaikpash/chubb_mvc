woResolve = {
	setInitialFormState: true,
  woResolveText : ""
};

woResolve.init = function(){
	var appMenu = [
		["woResolve.BACK", "Retour", "left.png", onBackClick],
		["woResolve.COMMENT", "Commenter", "edit.png", onCommentClick],
		["woResolve.VALID", "Valider", "check.png", woResolve.confirmResolution]
	];
  //Dhaval:Fix for app menu start
	function onBackClick(){
    navigationModel.doReturn();
  }
  	function onCommentClick(){
      frmWOComment.show();
    }
  //End
	otis.application.createAppMenu("woResolveAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

woResolve.preShow = function () {
	otis.application.setCurrentAppMenu("woResolveAppMenu");//Dhaval:Invocation of custom app menu

	if(woResolve.setInitialFormState) {
		frmWOResolve.lblReference.text = workOrder.getReference();
		frmWOResolve.hbxReference.backgroundColor = workOrder.color;
		frmWOResolve.hbxReference.focusSkin = workOrder.skin;
//		frmWOResolve.txtComment.text = !validationModel.isNull(workOrder.summaryId) ? workOrder.summaryText : '';
	}

    var cbxDataTel = null;
    var cbxDataContact = null;
    if(kony.application.getPreviousForm().id == "frmWOComment" || kony.application.getPreviousForm().id == "frmWorkOrderContactEdit"){
      // Don't load contact if user just set a comment
      cbxDataTel = frmWOResolve.cbxTelContacts.selectedKeyValue;
      cbxDataContact = frmWOResolve.cbxRepContacts.selectedKeyValue;
    }
    woResolve.loadCbxContacts(); 

    if(kony.application.getPreviousForm().id == "frmWOComment" || kony.application.getPreviousForm().id == "frmWorkOrderContactEdit"){
      // Don't load contact if user just set a comment
      frmWOResolve.cbxTelContacts.selectedKey = cbxDataTel[0];
      frmWOResolve.cbxRepContacts.selectedKey = cbxDataContact[0];
    }
    woResolve.onMediaTypeSelection();
    woResolve.setInitialFormState = true;
}

woResolve.onTelContactEditClick = function() {
	var cctIndex = frmWOResolve.cbxTelContacts.selectedKey;
	woResolve.editContact(cctIndex);
}

woResolve.onRepContactEditClick = function() {
	var cctIndex = frmWOResolve.cbxRepContacts.selectedKey;
	woResolve.editContact(cctIndex);
}

woResolve.editContact = function (cctIndex) {
	if(woResolve.checkContact(cctIndex)) workOrderContactEdit.contact = woResolve.contacts[parseInt(cctIndex)];
	else workOrderContactEdit.contact = null;
	frmWorkOrderContactEdit.show();
}

woResolve.onMediaTypeSelection = function () {
	var selectedContactIndex = frmWOResolve.cbxRepContacts.selectedKey;
	if (woResolve.checkContact(selectedContactIndex)) {
		var contact = woResolve.contacts[parseInt(selectedContactIndex)];
		var media = frmWOResolve.rbgMediaType.selectedKeyValue[0] == 'E' ? contact.email : contact.fax;
		frmWOResolve.lblMedia.text = !validationModel.isNull(media) ? media : 'Non configuré';
	} else {
		frmWOResolve.lblMedia.text = '';
	}
}

woResolve.checkContact = function(cctIndex) {
	return (!validationModel.isNull(cctIndex) && parseInt(cctIndex) > -1 && woResolve.contacts.length > 0);
};

woResolve.loadCbxContacts = function () {

	woResolve.onContactSelection = function (cbxContacts) {
		if (cbxContacts.selectedKeyValue[0] == "-1") {
			woResolve.setInitialFormState = false;
			workOrderContactEdit.contact = null;
			frmWorkOrderContactEdit.show();
		} else if (cbxContacts.id == 'cbxRepContacts') {
			woResolve.onMediaTypeSelection();
		}
	}

	woResolve.contacts = contactModel.findContactsByWorkOrderAndTypeCode(workOrder, null);
	var principalContactKey = 0;
	var principalRepContactKey;

	var cbxContactsMasterData = [];
	cbxContactsMasterData.push([-1, "(Nouveau contact)"]);
	for (var i = 0; i < woResolve.contacts.length; i++) {
		var contact = woResolve.contacts[i];
		cbxContactsMasterData.push([i, contact.title.concat(' ').concat(contact.lastName.toUpperCase()).concat(' ').concat(contact.firstName)]);
		if (contact.isMainTechnicalContact) principalContactKey = i;
		if (!validationModel.isNull(woResolve.repContact) && contact.id == woResolve.repContact.id) principalRepContactKey = i;
	}

	frmWOResolve.cbxTelContacts.onSelection = woResolve.onContactSelection;
	frmWOResolve.cbxTelContacts.masterData = cbxContactsMasterData;
	frmWOResolve.cbxTelContacts.selectedKey = principalContactKey;

	frmWOResolve.cbxRepContacts.onSelection = woResolve.onContactSelection;
	frmWOResolve.cbxRepContacts.masterData = cbxContactsMasterData;
	frmWOResolve.cbxRepContacts.selectedKey = !validationModel.isNull(principalRepContactKey) ? principalRepContactKey : principalContactKey;
}

woResolve.confirmResolution = function () {

	// Save the questionnaire (with reference to contact, with whom workOrder was resolved by phone, if applicable)
	var selectedTelContactIndex = frmWOResolve.cbxTelContacts.selectedKey;
	if ((workOrder.typeCode == 'I') || (workOrder.typeCode == 'G') || (workOrder.typeCode == 'S')) {
        if (validationModel.isNull(workOrder.summaryId) || validationModel.isNull(workOrder.summaryText) || (workOrder.summaryText.length === 0)) {
            popupModel.showPopError('Vous devez indiquer un commentaire');
            return;
        }
      
        if (woResolve.checkContact(selectedTelContactIndex)) {
            var selectedContact = woResolve.contacts[parseInt(selectedTelContactIndex)];
            questionnaireModel.updateResolvedWorkOrder(workOrder, selectedContact);
        } else {
            popupModel.showPopError('Vous devez sélectionner un contact');
            return;
        }
    }      

	// Send out the report to the chosen contact
	var selectedRepContactIndex = frmWOResolve.cbxRepContacts.selectedKey;
	if ((workOrder.typeCode == 'I' || workOrder.typeCode == 'G' || workOrder.typeCode == 'S') && woResolve.checkContact(selectedRepContactIndex)) {
		var selectedContact = woResolve.contacts[parseInt(selectedRepContactIndex)];
		woResolve.transmission = {
					contactId:  selectedContact.id,
					mediaType:	frmWOResolve.rbgMediaType.selectedKeyValue[0],
					reportType: 'INTERVENTION_REPORT'};
		var transmission = articleRecommendationModel.createRecommendationPreTransmission([woResolve]);
	}

	sequence.changeTo(sequence.values.logedIn, null);

	function afterSync() {
		frmHome.show();
       frmWorkOrders.destroy();
       app_parameters.lifetime.switchWorkOrder = null;
          frmWorkOrders.txtWorkOrderLinked.text = "";
        	workOrders.linkedBT = null;
	}

	function startSync() {
		global.syncController.saveUserWork(afterSync, afterSync);
	}

		requestSync(startSync, afterSync);
}

function WOResolveMatchRegex(currentText){
  var regexComment = new RegExp(/^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._();:!?´,.’\/€$&@"=+*><%«‘´»'"\s-]*$/);

  if(regexComment.test(currentText)){
    frmWOResolve.txtCommentEdit.text = currentText;
    woResolve.woResolveText = currentText;
  }else{
    frmWOResolve.txtCommentEdit.text = woResolve.woResolveText;
  }
}

