workOrderContactEdit = {
	contact: null
};

workOrderContactEdit.init = function() {
	var appMenu = [		
		["workOrderContactEdit.BACK", "Annuler", "left.png", onBackClick],
		["workOrderContactEdit.DEL", "Supprimer", "bin.png", workOrderContactEdit.onRemoveClick],
		["workOrderContactEdit.VALID", "Valider", "check.png", workOrderContactEdit.onSaveClick]
	];
  //Dhaval:Fix for app menu not working
	function onBackClick(){
      navigationModel.doReturn();
    }
	otis.application.createAppMenu("workOrderContactEditAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

workOrderContactEdit.preShow = function () { 
	var form = frmWorkOrderContactEdit.databpane;
	var contact = workOrderContactEdit.contact;

	workOrderContactEdit.setWorkOrderDisplay = function() {
	 	form.ClientLbl.text = workOrder.getReference();
		form.clientHB.backgroundColor = workOrder.color;
		form.clientHB.focusSkin = workOrder.skin;
	};
	
	workOrderContactEdit.resetContactDisplay = function() {
		form.txtFirstName.text = "";
		form.txtLastName.text = "";
		form.txtPhonenumber.text = " ";
		form.txtMobileNumber.text = " ";
		form.txtFaxNumber.text = " ";
		form.txtEmailAddress.text = " ";
	};
	
	workOrderContactEdit.setPossibleRoles = function() {
		var contactRoles = contactModel.findContactParameterOptions('role');
		contactRoles.unshift(['NONE', 'Choisir une fonction']);
		form.cmbFonction.masterData = contactRoles;
	};
	
	workOrderContactEdit.setPossibleTypes = function() {
		var contactTypes = contactModel.findContactParameterOptions('type');
		contactTypes.unshift(['NONE', 'Choisir un type']);
		form.cmbType.masterData = contactTypes;
	};
	
	workOrderContactEdit.setPossibleTitles = function() {
		var contactTitles = contactModel.findContactParameterOptions('title');
		contactTitles.unshift(['NONE', 'Choisir un titre']);
		form.cmbGender.masterData = contactTitles;
	};
	
	workOrderContactEdit.loadContactDisplay = function(){
		
		function isNullString(string){
			return (validationModel.isNull(string) || string.length == 0);
		};
	
		if(validationModel.isNull(contact)) return;
		form.txtFirstName.text = contact.firstName;
		form.txtLastName.text = contact.lastName;
		form.txtPhonenumber.text = isNullString(contact.tel) ? " " : contact.tel;
		form.txtMobileNumber.text = isNullString(contact.mobile) ? " " : contact.mobile;
		form.txtFaxNumber.text = isNullString(contact.fax) ? " " : contact.fax;
		form.txtEmailAddress.text = isNullString(contact.email) ? " " : contact.email;
		form.cmbFonction.selectedKey = validationModel.isNull(contact.roleCode) ? 'NONE' : contact.roleCode;
		form.cmbType.selectedKey = validationModel.isNull(contact.typeCode) ? 'NONE' : contact.typeCode;
		form.cmbGender.selectedKey = validationModel.isNull(contact.titleCode) ? 'NONE' : contact.titleCode;	
	}
	
	workOrder.customer = customerModel.findCustomerByWorkOrder(workOrder);
	workOrderContactEdit.setWorkOrderDisplay();
	workOrderContactEdit.resetContactDisplay();
	workOrderContactEdit.setPossibleRoles();
	workOrderContactEdit.setPossibleTypes();
	workOrderContactEdit.setPossibleTitles();
	workOrderContactEdit.loadContactDisplay();
	
	otis.application.setCurrentAppMenu("workOrderContactEditAppMenu");//Dhaval:Invocation of custom app menu
}

workOrderContactEdit.removeContact = function () {
	contactModel.deleteContactMediaByContact(workOrderContactEdit.contact);
	contactModel.deleteContact(workOrderContactEdit.contact, workOrder.customer);
	navigationModel.doReturn();
}

workOrderContactEdit.onRemoveClick = function () {
	if (!validationModel.isNull(workOrderContactEdit.contact) && !validationModel.isNull(workOrderContactEdit.contact.id)) {
		if (contactModel.isContactReferenced(workOrderContactEdit.contact))
			popupModel.showPopError("Le contact est référencé dans un ou plusieurs BT, vous ne pouvez pas le supprimer");
		else
			popupModel.showPopError("Le contact et ses coordonnées vont être supprimées, continuer ?", workOrderContactEdit.removeContact, undefined, true);
	}
}

workOrderContactEdit.onSaveClick = function () {

	var hasValidationError = false;
	var form = frmWorkOrderContactEdit.databpane;
	var contact = workOrderContactEdit.contact;
	var errorMsgs = [];
	var lastName = form.txtLastName.text;
	var firstName = form.txtFirstName.text
	var type = form.cmbType.selectedKey;
	var role = form.cmbFonction.selectedKey;
	var title = form.cmbGender.selectedKey;
	var phone = form.txtPhonenumber.text.trim();
	var mobile = form.txtMobileNumber.text.trim();
	var fax = form.txtFaxNumber.text.trim();
	var mail = form.txtEmailAddress.text.trim();
	
	if (lastName.length == 0) {
		hasValidationError = true;
		errorMsgs.push("- Nom de famille manquant");
	}
	if (type == 'NONE') {
		hasValidationError = true;
		errorMsgs.push("- Veuillez choisir un type");
	}
	if (role == 'NONE') {
		hasValidationError = true;
		errorMsgs.push("- Veuillez choisir une fonction");
	}
	if (title == 'NONE') {
		hasValidationError = true;
		errorMsgs.push("- Veuillez choisir un titre");
	}
	if (phone.length == 0 && mobile.length == 0 && fax.length == 0 && mail.length == 0){
		hasValidationError = true;
		errorMsgs.push("- Veuillez entrer au moins une coordonnée");
	}
	if (mail.length !=0 && isValidEmailAdresses(mail)=="") {
		hasValidationError = true;
		errorMsgs.push("- L'adresse mail entrée n'est pas valide");
	}
	
	if (hasValidationError) {
		popupModel.showPopError(errorMsgs.join("\n"));	
		return;
	}
	else {
	
		if (validationModel.isNull(contact)) {
			contact = {};
		}
		contact.typeCode = type;
		contact.titleCode = title;
		contact.lastName = lastName;
		contact.firstName = firstName;
		contact.roleCode = role;
		
		var isCreated = false;
		if (validationModel.isNull(contact.id)) {
			isCreated = true;
			contactModel.createContactByCustomer(contact, workOrder.customer);
		} else {
			isCreated = false;
			contactModel.updateContactByCustomer(contact, workOrder.customer);
		}
		
		workOrderContactEdit.saveContactMedia = function(data, media) {
			var cust = workOrder.customer;
			var currentMedia = contactModel.findMediaByContactAndCustomer(contact.id, cust.code, media);
			var noCurrentMedia = validationModel.isNull(currentMedia);
			var noData = (validationModel.isNull(data) || data.length == 0);
			
			if (noCurrentMedia && !noData) { // new data to create
				contactModel.createContactMediaByTypeAndContactAndCustomer(data, media, contact, cust);
			}
			else if (!noCurrentMedia && !noData) { // data might need update
				if(currentMedia.data != data) contactModel.updateContactMediaByTypeAndContact(data, media, contact);
			}
			else if (!noCurrentMedia && noData) { // data has been cleaned : need to delete
				contactModel.deleteContactMediaByTypeAndContact(media, contact);
			}// default case : nothing to do.
		};
		
		workOrderContactEdit.saveContactMedia(phone, 'TEL');
		workOrderContactEdit.saveContactMedia(mobile, 'MOB');
		workOrderContactEdit.saveContactMedia(fax, 'FAX');
		workOrderContactEdit.saveContactMedia(mail, 'E');
		
		contact.email = mail;
		contact.tel = phone;
		contact.mobile = mobile;
		contact.fax = fax;
		
		workOrder.selectedContact = contact;
		workOrderContactEdit.displayUpdateStatus(isCreated);
		navigationModel.doReturn();
	}
}

workOrderContactEdit.displayUpdateStatus = function(isCreation) {
	if (isCreation)
		popupModel.showPopError('Nouveau contact enregistré.');
	else
		popupModel.showPopError('Contact mis à jour.');
}

//Arati:Changed code for JIRA UI-140 to open a mail with contact's mail address in iphone end here
workOrderContactEdit.openEmail = function() {
  	var contactEmail = [];
  	var form = frmWorkOrderOverview.ibtPlannifTab;
  	var mail = form.txtEmailAddress.text.trim();
  	if (!validationModel.isNull(mail) && isValidEmailAdresses(mail)) {
      contactEmail.push(mail);
    }
  	var to = contactEmail; 
	var sub = ""; 
	var msg = ""; 
	var attobj = [ { mimetype:"text/plain"}];
	//kony.ui.Alert("Order submitted successfully! ", null, "", "", "", "Info Message", null); 
	kony.phone.openEmail(to,"","",sub,msg,false,null);
};
//Arati:Changed code for JIRA UI-140 end here