articleSalesConfirm = {
	principalContactKey: undefined,
	signature: undefined,
	signatureId: undefined,
	clientOrderNumber: undefined,
	articleSales: [],
	customer : null
};

articleSalesConfirm.init = function () {
	var appMenu = [
		["articleSalesConfirm.BACK", "Retour", "left.png", backClick],
		["articleSalesConfirm.CLEAR", "Effacer Signature", "close.png", onClearClick],
		["articleSalesConfirm.VALID", "Valider", "check.png", onValidateClick]
	];

	otis.application.createAppMenu("articleSalesConfirmMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
	
	appMenu = [
		["articleSalesConfirm.BACK", "Retour", "left.png", backClick],
		["articleSalesConfirm.VALID", "Valider", "check.png", onValidateClick]
	];
  //Dhaval:Fix for app menu not working start
  function backClick(){
    navigationModel.doReturn();
  }
  function onClearClick(){
    articleSalesConfirm.onBtnClearClick();
  }
  function onValidateClick(){
    articleSalesConfirm.onBtnSaveClick();
  }
//End
	otis.application.createAppMenu("articleSalesConfirmMenuRO", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

articleSalesConfirm.preShow = function () {
	articleSalesConfirm.customer = customerModel.findCustomerByAN8(workOrder.customerAN8);
	if(articleSalesConfirm.customer.purchaseordermandatory =='S' || articleSalesConfirm.customer.purchaseordermandatory =='T'){
		frmArticleSalesConfirm.txtOrderNumber.placeholder = "N° de commande client obligatoire";
	}else{
		frmArticleSalesConfirm.txtOrderNumber.placeholder = "N° de commande client si nécessaire";
	}
	articleSalesConfirm.isReadOnly = ! workOrderModel.isOnSite(workOrder);

	if (articleSalesConfirm.isReadOnly){
		otis.application.setCurrentAppMenu("articleSalesConfirmMenuRO");//Dhaval:Invocation of custom app menu
	}else{
		otis.application.setCurrentAppMenu("articleSalesConfirmMenu");//Dhaval:Invocation of custom app menu
	}
	
	function setContactLbl(contact) {
		return contact.title.concat(' ').concat(contact.lastName.toUpperCase()).concat(' ').concat(contact.firstName);
	};

	frmArticleSalesConfirm.hbxReference.lblReference.text = workOrder.getReference(true);
	frmArticleSalesConfirm.hbxReference.backgroundColor = workOrder.color;
	frmArticleSalesConfirm.hbxReference.focusSkin = workOrder.skin;
	
	// Reset the signature
	articleSalesConfirm.signature = undefined
	articleSalesConfirm.signatureId = undefined;
	//frmArticleSalesConfirm.sgSignature.clear();			//Arati: Changed code for Signature FFI
	frmArticleSalesConfirm.txtOrderNumber.text = "";
	
	// Load the contacts dropdown
	articleSalesConfirm.contacts = contactModel.findContactsByWorkOrderAndTypeCode(workOrder, null);

	var cbxContactsMasterData = [];
	for (var i = 0; i < articleSalesConfirm.contacts.length; i++) {
		var contact = articleSalesConfirm.contacts[i];
		cbxContactsMasterData.push([i, setContactLbl(contact)]);
		if (contact.isMainTechnicalContact) {
			articleSalesConfirm.principalContactKey = i;
		}
	}
	
	cbxContactsMasterData.push([-1, "(Nouveau contact)"]);
	frmArticleSalesConfirm.cbxContacts.masterData = cbxContactsMasterData;
	frmArticleSalesConfirm.cbxContacts.selectedKey = null;
	
	//Show the signature if the sales was signed before
	articleSalesConfirm.articleSales = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, undefined, undefined, true, 'Vente');
	for (var i = 0; i < articleSalesConfirm.articleSales.length; i++) {
		var articleSale = articleSalesConfirm.articleSales[i];
		// If sales have inconsistent signatures, don't show any signature
		if (validationModel.isNull(articleSale.signatureId) || 
			(!validationModel.isNull(articleSalesConfirm.signatureId) && articleSale.signatureId != articleSalesConfirm.signatureId)) {
			articleSalesConfirm.signatureId = undefined;
			break;
		}
		// other possible test, shorter to realize
//		if(!(validationModel.isNull(articleSale.signatureId) || articleSale.signatureId != articleSalesConfirm.signatureId))
		articleSalesConfirm.signatureId = articleSale.signatureId;
		articleSalesConfirm.clientOrderNumber = articleSale.clientOrderNumber;
	}
	if (!validationModel.isNull(articleSalesConfirm.signatureId)) {
		var signature = signatureModel.findSignatureById(articleSalesConfirm.signatureId);
		var contactLbl = 
		frmArticleSalesConfirm.imgSignature.base64 = signature.object;
		frmArticleSalesConfirm.lblOrderNumber.text = !validationModel.isNull(articleSalesConfirm.clientOrderNumber) ? articleSalesConfirm.clientOrderNumber : '';
		frmArticleSalesConfirm.lblContact.text = setContactLbl(signature.contact);
		//frmArticleSalesConfirm.sgSignature.isVisible = false;				//Arati: Changed code for Signature FFI
		frmArticleSalesConfirm.cbxContacts.isVisible = false;
		frmArticleSalesConfirm.txtOrderNumber.isVisible = false;
		frmArticleSalesConfirm.lblnoSig.isVisible = false;
		frmArticleSalesConfirm.imgSignature.isVisible = true;
		frmArticleSalesConfirm.lblContact.isVisible = true;
		frmArticleSalesConfirm.lblOrderNumber.isVisible = true;
	} else {
		frmArticleSalesConfirm.imgSignature.isVisible = false;
		frmArticleSalesConfirm.lblContact.isVisible = false;
		frmArticleSalesConfirm.lblOrderNumber.isVisible = false;
		frmArticleSalesConfirm.txtOrderNumber.isVisible = !articleSalesConfirm.isReadOnly;
		//frmArticleSalesConfirm.sgSignature.isVisible = !articleSalesConfirm.isReadOnly;		//Arati: Changed code for Signature FFI
		frmArticleSalesConfirm.cbxContacts.isVisible = !articleSalesConfirm.isReadOnly;
		frmArticleSalesConfirm.lblnoSig.isVisible = articleSalesConfirm.isReadOnly;
	}
}

articleSalesConfirm.postShow = function () {
	if (articleSalesConfirm.principalContactKey != undefined) 
		frmArticleSalesConfirm.cbxContacts.selectedKey = articleSalesConfirm.principalContactKey;
}

articleSalesConfirm.onContactSelection = function (selectedKey) {
	if (selectedKey == -1) {
		workOrderContactEdit.contact = null;
		frmWorkOrderContactEdit.show();
	}
}

articleSalesConfirm.onBtnClearClick = function () {
	//frmArticleSalesConfirm.sgSignature.clear();			//Arati: Changed code for Signature FFI
  	frmArticleSalesConfirm.imgSignature.setVisibility(false);	
}

articleSalesConfirm.onBtnSaveClick = function () {
kony.print(frmArticleSalesConfirm.txtOrderNumber.text);

	// If a signature was set before, or read-only mode, continue
	if (!validationModel.isNull(articleSalesConfirm.signatureId) || articleSalesConfirm.isReadOnly) {
		frmArticleSalesTasks.show();
	} 
	else {
		
		articleSalesConfirm.saveConfirm = function () {
			
			articleSalesConfirm.saveConfirmCB = function (object) {
				
				//articleSalesConfirm.signature = kony.convertToBase64(object.rawBytes);
              	articleSalesConfirm.signature = object;			//Arati: Changed code for Signature FFI
				if (!validationModel.isNull(articleSalesConfirm.signature)) {
					
					// Create the signature
					var contact = articleSalesConfirm.contacts[frmArticleSalesConfirm.cbxContacts.selectedKey];
					var signature = signatureModel.createSignatureByContact(articleSalesConfirm.signature, contact);
					
					// Update the related article sales ('Vente' only)
					for (var i = 0; i < articleSalesConfirm.articleSales.length; i++) {
						articleSalesConfirm.articleSales[i].status = 'Sold';
						articleSalesConfirm.articleSales[i].signatureId = signature.id;
						articleSalesConfirm.articleSales[i].clientOrderNumber = frmArticleSalesConfirm.txtOrderNumber.text;
						articleSalesConfirm.articleSales[i].contactId = contact.id;
					}
					articleRecommendationModel.updateRecommendations(articleSalesConfirm.articleSales);
					
					frmArticleSalesTasks.show();
				} 
				else {
					popupModel.showPopError("Veuillez signer avant de continuer.");
				} 
			}
			articleSalesConfirm.saveConfirmCB(articleSalesConfirm.signature);						//Arati: Changed code for Signature FFI
			//frmArticleSalesConfirm.sgSignature.onCapture = articleSalesConfirm.saveConfirmCB;		//Arati: Changed code for Signature FFI
			//frmArticleSalesConfirm.sgSignature.save();
		}
		
		if (frmArticleSalesConfirm.cbxContacts.selectedKey != null && frmArticleSalesConfirm.cbxContacts.selectedKey > -1){
			if(frmArticleSalesConfirm.txtOrderNumber.text == "" && (articleSalesConfirm.customer.purchaseordermandatory == 'S' || articleSalesConfirm.customer.purchaseordermandatory == 'T')){
				popupModel.showPopError("Le N° de commande est obligatoire");
			}else{
				popupModel.showPopError("Confirmez-vous la validation de la vente ?",articleSalesConfirm.saveConfirm, undefined, true);
			}
		} 
		else if (frmArticleSalesConfirm.cbxContacts.isVisible) {
			popupModel.showPopError("Veuillez choisir un contact valide avant de continuer.");
		}
		else {
			frmArticleSalesTasks.show();
		}
	}
}//Arati: Changed code for Signature FFI
articleSalesConfirm.onClickhboxSign = function(){
	 //iPhone
		var strokeWidth = "2.0";
		var strokeColor = "#000000";
		var showClearButon = true;
		var shakeToCancelEnabled = true;
		signatureFFI.getSignatureIphone("Signature Client",strokeWidth,strokeColor,showClearButon,shakeToCancelEnabled, null, null, articleSalesConfirm.callbackBase);
}

function reset(){
  	frmArticleSalesConfirm.imgSignature.setVisibility(false);
}

articleSalesConfirm.callbackBase = function(base64String){
  		var cbxContactKey = frmArticleSalesConfirm.cbxContacts.selectedKey;		
  		var TextOrderNumberValue = frmArticleSalesConfirm.txtOrderNumber.text;	//Arati: Changed code for UI-90
  		frmArticleSalesConfirm.show();
		kony.print("base64String -- "+JSON.stringify(base64String));
  		kony.print("!!! Inside callbackBase");
  		
  		frmArticleSalesConfirm.imgSignature.base64 = base64String;
  
  		kony.print("image src from widgewt =" + frmArticleSalesConfirm.imgSignature.base64);
  		
  		frmArticleSalesConfirm.imgSignature.isVisible = true;
  		frmArticleSalesConfirm.cbxContacts.isVisible = true;				//Arati: Changed code for UI-90 Start here
  		frmArticleSalesConfirm.txtOrderNumber.isVisible = true;
  		frmArticleSalesConfirm.cbxContacts.selectedKey = cbxContactKey;
  		frmArticleSalesConfirm.txtOrderNumber.text = TextOrderNumberValue;	//Arati: Changed code for UI-90 End here
  		//showLoadingVA();
  		//WOValidationSignature.rawbytes = kony.convertToRawBytes(base64String);
  		articleSalesConfirm.signature = frmArticleSalesConfirm.imgSignature.base64;
  		
		kony.print("EXITING");
	}
//Change code temporary