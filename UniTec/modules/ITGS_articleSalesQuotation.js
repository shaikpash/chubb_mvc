articleSalesQuotation = {
	contacts: [],
	continueToSummary: null,
	context: null,
	ongoing : false
};

articleSalesQuotation.init = function () {
	var appMenu = [
		["articleSalesOrders.BACK", "Retour", "left.png", onBackClick],
		["articleSalesOrders.VALID", "Valider", "check.png", onCheckClick]
	];
  	//dhaval:Fix for app menu not working start
	function onBackClick(){
      navigationModel.doReturn();
    }
  	function onCheckClick(){
      articleSalesQuotation.onBtnSaveClick();
    }
  	//End
	otis.application.createAppMenu("articleSalesQuotationMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

articleSalesQuotation.preShow = function () {
	otis.application.setCurrentAppMenu("articleSalesQuotationMenu");//Dhaval:Invocation of custom app menu

	frmArticleSalesQuotation.hbxReference.lblReference.text = workOrder.getReference();
	frmArticleSalesQuotation.hbxReference.backgroundColor = workOrder.color;
	frmArticleSalesQuotation.hbxReference.focusSkin = workOrder.skin;
	frmArticleSalesQuotation.cbxContacts.masterData = [];
	frmArticleSalesQuotation.cbxMedia.masterData = [];
	frmArticleSalesQuotation.cbxMedia.isVisible = false;
	frmArticleSalesQuotation.lblMedia.text = '';

	var frmTitle = "";
	if(articleSalesQuotation.reportType == 'QUOTATION') frmTitle = 'Contact du devis';
	if(articleSalesQuotation.reportType == 'PARTIAL_QUOTATION') frmTitle = "Envoi d'un devis partiel";
	if(articleSalesQuotation.reportType == 'SALES_CONTRACT') frmTitle = "Envoi d'un contrat de vente";

	frmArticleSalesQuotation.lblArticleSalesQuotation.text = frmTitle;
}

articleSalesQuotation.postShow = function () {
	// Load the contacts dropdown
	articleSalesQuotation.contacts = contactModel.findContactsByWorkOrderAndTypeCode(workOrder, null);
	var principalContactKey = 0;

	var cbxContactsMasterData = [];
	for (var i = 0; i < articleSalesQuotation.contacts.length; i++) {
		cbxContactsMasterData.push([i, articleSalesQuotation.contacts[i].title.concat(' ')
							   .concat(articleSalesQuotation.contacts[i].lastName.toUpperCase())
							   .concat(' ')
							   .concat(articleSalesQuotation.contacts[i].firstName)]);
		if (articleSalesQuotation.contacts[i].isMainTechnicalContact) {
			principalContactKey = i;
		}
	}

	cbxContactsMasterData.push([-1, "(Nouveau contact)"]);
	frmArticleSalesQuotation.cbxContacts.masterData = cbxContactsMasterData;

	if (cbxContactsMasterData.length > 0) {
		frmArticleSalesQuotation.cbxContacts.selectedKey = principalContactKey;

		// Load the media dropdown
		articleSalesQuotation.onCbxContactsSelection();
	}
}

articleSalesQuotation.resetContext = function() {
	articleSalesQuotation.context = null;
};

articleSalesQuotation.setContext = function(recommendationIds, printTextId, quotationComment) {
	articleSalesQuotation.context = {
		recommendationIds : recommendationIds,
		printTextId : printTextId,
		quotationComment : quotationComment
	};
};

articleSalesQuotation.onCbxContactsSelection = function () {
	var selectedContactIndex = frmArticleSalesQuotation.cbxContacts.selectedKey;
	if (!validationModel.isNull(selectedContactIndex) && parseInt(selectedContactIndex) > -1) {
		var selectedContact = articleSalesQuotation.contacts[parseInt(selectedContactIndex)];
		var cbxMediaMasterData = [];

		if (!validationModel.isNull(selectedContact.email) && selectedContact.email.trim().length > 0){
			var email = isValidEmailAdresses(selectedContact.email);
			if(email != ""){
				selectedContact.email= email;
				cbxMediaMasterData.push(["E", "Email"]);
			}
		}

		if (!validationModel.isNull(selectedContact.fax) && selectedContact.fax.trim().length > 0)
			cbxMediaMasterData.push(["FAX", "Fax"]);

		frmArticleSalesQuotation.cbxMedia.masterData = cbxMediaMasterData;

		if (cbxMediaMasterData.length > 0) {
			frmArticleSalesQuotation.cbxMedia.selectedKey = cbxMediaMasterData[0][0];
			frmArticleSalesQuotation.cbxMedia.isVisible = true;

			// Show the selected media
			articleSalesQuotation.onCbxMediaSelection();
		} else {
			frmArticleSalesQuotation.cbxMedia.isVisible = false;
			frmArticleSalesQuotation.lblMedia.text = "Aucun média configuré";
		}
	} else if (!validationModel.isNull(selectedContactIndex) && parseInt(selectedContactIndex) == -1) {
		articleSalesQuotation.onBtnContactEditClick();
	}
}

articleSalesQuotation.onCbxMediaSelection = function () {
	var selectedContactIndex = frmArticleSalesQuotation.cbxContacts.selectedKey;
	var selectedMedia = frmArticleSalesQuotation.cbxMedia.selectedKey;
	if (!validationModel.isNull(selectedContactIndex) && parseInt(selectedContactIndex) > -1 && !validationModel.isNull(selectedMedia)) {
		var selectedContact = articleSalesQuotation.contacts[parseInt(selectedContactIndex)];
		frmArticleSalesQuotation.lblMedia.text = (selectedMedia == "E") ? selectedContact.email.trim() : (
												 (selectedMedia == "FAX") 	? selectedContact.fax.trim()   : '');
	}
}

articleSalesQuotation.onBtnSaveClick = function () {
	if (!frmArticleSalesQuotation.cbxMedia.isVisible) {
		popupModel.showPopError("Un moyen de communication doit être sélectionné.");
	}
	else {
		//Arati:Changed code for JIRA UI-70 start here
		var popText = "";
		if(articleSalesQuotation.reportType == 'QUOTATION') {
          popText = "Confirmez-vous ce contact pour le devis en cours ?";
          popupModel.showPopError(popText, articleSalesQuotation.saveConfirm, undefined, true);
        }
		if(articleSalesQuotation.reportType == 'PARTIAL_QUOTATION') {
          popText = "Confirmez-vous l'envoi du devis ?";
          popupModel.showPopError(popText, articleSalesQuotation.saveConfirm, undefined, true);
        }
		if(articleSalesQuotation.reportType == 'SALES_CONTRACT') {
          articleSalesQuotation.saveConfirm();//popText = "Confirmez-vous l'envoi du contrat de vente ?";
        }
		//popupModel.showPopError(popText, articleSalesQuotation.saveConfirm, undefined, true);
      	//Arati:Changed code for JIRA UI-70 end here 
	}
};

articleSalesQuotation.onBtnContactEditClick = function () {
	var selectedContactIndex = frmArticleSalesQuotation.cbxContacts.selectedKey;
	if (!validationModel.isNull(selectedContactIndex) && parseInt(selectedContactIndex) > -1) {
		workOrderContactEdit.contact = articleSalesQuotation.contacts[parseInt(selectedContactIndex)];
	} else {
		workOrderContactEdit.contact = null;
	}
	frmWorkOrderContactEdit.show();
};

articleSalesQuotation.saveConfirm = function () {

	if(articleSalesQuotation.ongoing) {
		popupModel.showPopError("Veuillez patienter - création du devis en cours.");
		return;
	}

	articleSalesQuotation.ongoing = true;
	databaseModel.openDBExchange('Mise à jour en cours...');

	// define common parameters
	var selectedContact = articleSalesQuotation.contacts[parseInt(frmArticleSalesQuotation.cbxContacts.selectedKey)];
	var copyN1 = frmArticleSalesQuotation.cbxGrpCopy.selectedKeys != null ? 1 : 0;
	var mediaType = frmArticleSalesQuotation.cbxMedia.selectedKey;
	var msg = '';
	var isSuccess = 0;
	var createdQuotationNumber = null;

	var recommendations = new Array();
	var printTextId = null;
	var quotationComment = null;
	var quotationStatus = null;

	if(validationModel.isNull(articleSalesQuotation.context)) {
		recommendations = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, undefined, undefined, true, articleSalesQuotation.salesReason);
	}
	else {
		recommendations = articleRecommendationModel.findRecommendationsByIds(articleSalesQuotation.context.recommendationIds);
		printTextId = articleSalesQuotation.context.printTextId;
		quotationComment = validationModel.isNull(articleSalesQuotation.context.quotationComment) ? null : articleSalesQuotation.context.quotationComment;
	}

	// we set the contact and the type of media, among other things
	function setRecommendationsTransmissionParameters(reportType) {
		for (var i = 0; i < recommendations.length; i ++) {
			recommendations[i].transmission = {
				contactId:  selectedContact.id,
				copyN1:		frmArticleSalesQuotation.cbxGrpCopy.selectedKeys != null ? 1 : 0,
				mediaType:	frmArticleSalesQuotation.cbxMedia.selectedKey,
				reportType: reportType
			};
			recommendations[i].contactId = selectedContact.id;
		}

		articleRecommendationModel.updateRecommendations(recommendations);
	}

	// three process : partial quotation, main quotation & sales contract.

	// are we in a partial quotation process ? Creation and transmission then.
	if(articleSalesQuotation.reportType == 'PARTIAL_QUOTATION') {
		// we attempt to create the quotation

		var quotation = articleRecommendationModel.createQuotationFromRecommendations(recommendations, "'Created'", workOrder, quotationComment, true);
		quotationStatus = quotation.status;
		createdQuotationNumber = quotation.quotationNumber;

		// if the creation is a success, we proceed to the recommendations update
		// then to the transmission
		if (!validationModel.isNull(createdQuotationNumber)) {
			setRecommendationsTransmissionParameters('QUOTATION');
			articleRecommendationModel.createRecommendationPreTransmission(recommendations); // reporting row creation
			quotation = quotationModel.findQuotationByQuotationNumber(createdQuotationNumber);
			quotationModel.submitQuotationDocument(quotation, printTextId); // quotation transmission
			isSuccess = 1; // success !

		} else {
			isSuccess = 0; // error : the quotation could neither be created nor transmitted.
		}
	}
	// are we in a quotation process ? We just define the contact.
	else if(articleSalesQuotation.reportType == 'QUOTATION') {
		setRecommendationsTransmissionParameters('QUOTATION');
		isSuccess = 1; // success !
	}
	// are we in a sales contract process ? only transmission then - no specific creation.
	else if(articleSalesQuotation.reportType == 'SALES_CONTRACT') {
		setRecommendationsTransmissionParameters('SALES_CONTRACT');
		articleRecommendationModel.createRecommendationPreTransmission(recommendations); // reporting row creation
		isSuccess = 1; // success !
	}


	// next step : we prepare the information message to the user about the result of the operation
	if(isSuccess == 0) {
		if(articleSalesQuotation.reportType == 'SALES_CONTRACT') {
			msg = "Échec lors de la création du contrat de vente.";
		}
		else {
			msg = "Échec lors de la création du devis.";
		}
	}
	else {
		if(articleSalesQuotation.reportType == 'SALES_CONTRACT') {
			//msg = "Le contrat de vente a été créé et sera transmis lors de la prochaine synchronisation.";
          	msg = "Confirmez-vous la création du contrat de vente ? Celui-ci sera envoyé lors de la prochaine synchronisation.";	//Arati:Changed code for JIRA UI-70
		}
		else if(articleSalesQuotation.reportType == 'QUOTATION') {
			msg = "Un contact a été défini pour ce devis. Le devis sera envoyé à la clôture du BT.";
		}
		else if(articleSalesQuotation.reportType == 'PARTIAL_QUOTATION') {
			msg = "Le devis partiel " + createdQuotationNumber + " a été créé et sera transmis lors de la prochaine synchronisation.";
			if (quotationStatus == 'STATUS_SENT')
				msg += "\nCe devis sera envoyé au client.";
			else if (quotationStatus == 'STATUS_ONGOING')
				msg += "\nCe devis sera validé par le commercial.";
		}
	}

	// final step : we can close (and synchronize for a partial quotation or a sales contract
	function afterSync() {
		if (articleSalesQuotation.continueToSummary)
			frmWOSummary.show();
		else
			navigationModel.doContinue();
	};

	function startSync() {
		global.syncController.saveUserWork(afterSync, afterSync);
//		afterSync();
	};

	if(isSuccess == 1) {
		if(articleSalesQuotation.reportType == 'QUOTATION') {
			popupModel.showPopError(msg);
			afterSync();
		} else {
			msg += "\n\nVoulez-vous synchroniser maintenant ?";
			popupModel.showPopError(msg, startSync, undefined, true, afterSync);
		}
	}
	else {
		popupModel.showPopError(msg);
	}

	databaseModel.closeDBExchange();
	articleSalesQuotation.ongoing = false;
};
