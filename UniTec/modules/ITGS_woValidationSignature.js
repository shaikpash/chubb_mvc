WOValidationSignature = {
  signatureId :null,
  signature : null,
  noSignature : false,
  contacts : null,
  contactSignature : null,
  defaultContactID : null,
  manySignature: false,
  workOrdersToSign : null,
  isIntermediaryReport : false,
  resetContact : false,
  signatureCallBack : false,
  motifNS : false
};

WOValidationSignature.reInit = function(){
  WOValidationSignature.signatureId = null;
    WOValidationSignature.signature = null;
    WOValidationSignature.noSignature = false;
    WOValidationSignature.contacts = null;
    WOValidationSignature.contactSignature = null;
    WOValidationSignature.defaultContactID = null;
    WOValidationSignature.manySignature= false;
    WOValidationSignature.workOrdersToSign = null;
}

WOValidationSignature.init = function() {
  var appMenu = [
    ["WOValidationSignature.BACK", "Retour", "left.png", onBackClick],
    ["WOValidationSignature.VALID", "Valider", "check.png", WOValidationSignature.validate]
  ];

  otis.application.createAppMenu("WOValidationSignatureAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu  alert

  appMenu = [
    ["WOValidationSignature.BACK", "Retour", "left.png", onBackClick]
  ];

  otis.application.createAppMenu("WOValidationSignatureAppMenuRO", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
  //Dhaval:Fix for app menu not working	
  function onBackClick(){
    WOValidationSignature.isIntermediaryReport = false; // reinit the page 
    frmWOValidationSignature.txtAreaInstallState.text = null;
      frmWOValidationSignature.txtAreaCompensatoryMeasure.text = null;
    navigationModel.doReturn();
    frmWOValidationSignature.destroy();
  }
  //Arati: Changed for signature FFI start here
  if(!validationModel.isNull(WOValidationSignature.signature)){
    frmWOValidationSignature.imgSig.base64 = WOValidationSignature.signature;
    frmWOValidationSignature.HBImgSig.setVisibility(true);
    frmWOValidationSignature.imgSig.setVisibility(true);
  }else {
    WOValidationSignature.reset();
  }
  //Arati: Changed for signature FFI end here
  //frmWOValidationSignature.sigClient.onCapture = WOValidationSignature.onCapture;	//Arati: Changed for signature FFI
  //frmWOValidationSignature.sigClient.accessMode = constants.CAMERA_IMAGE_ACCESS_MODE_INMEMORY;
}


WOValidationSignature.preshow = function() {
  WOValidationSignature.isReadOnly = ! workOrderModel.isOnSite(workOrder);

 if (WOValidationSignature.isReadOnly){
     otis.application.setCurrentAppMenu("WOValidationSignatureAppMenuRO");//Dhaval:Invocation of custom app menu
     frmWOValidationSignature.vboxEditContact.setVisibility(false);
   } else {
     otis.application.setCurrentAppMenu("WOValidationSignatureAppMenu");//Dhaval:Invocation of custom app menu
     frmWOValidationSignature.vboxEditContact.setVisibility(true);
   }
 
   WOValidationSignature.checkSignature();
 
   var sig = signature.getSignatureforWorkOrders([workOrder]);
   if (!validationModel.isNull(sig) && sig.length >0){
     sig = sig[0];
     WOValidationSignature.motifNS= sig.motifnonsignature;
     WOValidationSignature.signatureId = sig.id;
     WOValidationSignature.signature = (!validationModel.isNull(sig.signature)) ?
       sig.signature : null;
     WOValidationSignature.noSignature = (!validationModel.isNull(sig.date)) &&
       (validationModel.isNull(sig.signature)) && !WOValidationSignature.justEdited;
     WOValidationSignature.contacts = null;
     WOValidationSignature.contactSignature = 
       contactModel.findContactForSignature(sig);
 
     if (!validationModel.isNull(WOValidationSignature.contactSignature)){
       WOValidationSignature.defaultContactID = 
         {
         typeCode : WOValidationSignature.contactSignature.type,
         contactId : WOValidationSignature.contactSignature.id
       };
     }else{
       WOValidationSignature.defaultContactID = 
         contactModel.findDefaultTypeAndContactForWorkOrder(workOrder);
     }
 
   }else{
     WOValidationSignature.reset();
 
 
     WOValidationSignature.defaultContactID = 
       contactModel.findDefaultTypeAndContactForWorkOrder(workOrder);
   };
   WOValidationSignature.justEdited = false;
 
   WOValidationSignature.loadContactTypes();
   WOValidationSignature.loadMotifsNonSignature();
 
   frmWOValidationSignature.cmbTypeContact.setEnabled(!WOValidationSignature.isReadOnly);
   frmWOValidationSignature.cmbContact.setEnabled(!WOValidationSignature.isReadOnly);
   frmWOValidationSignature.cmbMotifsNonSignature.setEnabled(!WOValidationSignature.isReadOnly);
 frmWOValidationSignature.CBNoSignature.setEnabled(!WOValidationSignature.isReadOnly);
 
  
  	if(WOValidationSignature.isIntermediaryReport == true){
      if(WOValidationSignature.resetContact == true){
        frmWOValidationSignature.cmbContact.selectedKey = 'NONE';
      WOValidationSignature.contactSelected();
      WOValidationSignature.resetContact = false; // Add this fix because when we come back from the Signature FFI, the preshow is launched again. Maybe we can find an other solution
      WOValidationSignature.signatureCallBack = false;
   	  frmWOValidationSignature.HBImgSig.isVisible = false;
      }
      frmWOValidationSignature.hboxIntermediateReport.isVisible = true;
      frmWOValidationSignature.CBNoSignature.isVisible = false;
    }else{
      WOValidationSignature.showSignature(!WOValidationSignature.noSignature);
      frmWOValidationSignature.hboxIntermediateReport.isVisible = false;
   //   frmWOValidationSignature.CBNoSignature.isVisible = true;
	}
  
   
}

WOValidationSignature.reset = function(){
  WOValidationSignature.signatureId = null;
  WOValidationSignature.signature = null;
  WOValidationSignature.noSignature = false;
  WOValidationSignature.contacts = null;
  WOValidationSignature.contactSignature = null;
  WOValidationSignature.defaultContactID = null;
}


WOValidationSignature.haveSignature = function(){
  // signature line should exist with a date.
  var sig = signature.getSignatureforWorkOrders([workOrder]);

  var res = false;

  if (!validationModel.isNull(sig) && sig.length >0){
    sig = sig[0];
    if (!validationModel.isNull(sig.date)){
      res = true;
    }
  }
  return res;
}


WOValidationSignature.isValid = function(currentWo){
  // signature line should exist with a date.
  if(currentWo){
    var sig = signature.getSignatureforWorkOrders([currentWo]);
  }else{
    var sig = signature.getSignatureforWorkOrders([workOrder]);
  }


  var res = false;

  if (!validationModel.isNull(sig) && sig.length >0){
    sig = sig[0];
    if (!validationModel.isNull(sig.date)){
      res = true;
    }
  }
  return res;
}




WOValidationSignature.showSignature = function (show, justChanged){
  if (!show){
    // valid nosig
    if(!justChanged)    frmWOValidationSignature.CBNoSignature.selectedKeys = ['0'];
    if (WOValidationSignature.isReadOnly){
      // RO
      frmWOValidationSignature.HBSig.isVisible = false;
      frmWOValidationSignature.HBImgSig.isVisible = false;
      frmWOValidationSignature.CBNoSignature.isVisible = false;
      frmWOValidationSignature.lblnoSig.isVisible = false;
      frmWOValidationSignature.lblValidWithoutSig.isVisible = true;
       frmWOValidationSignature.HBoxNoSignature.isVisible = true;
    }else{
      // can modify
      frmWOValidationSignature.HBSig.isVisible = false;
      frmWOValidationSignature.HBImgSig.isVisible = false;
      frmWOValidationSignature.CBNoSignature.isVisible = true;
      //frmWOValidationSignature.CBNoSignature.selectedKeys = [0]; 		//Arati: Changed code for Signature FFI
      frmWOValidationSignature.lblnoSig.isVisible = false;
      frmWOValidationSignature.lblValidWithoutSig.isVisible = false;
       frmWOValidationSignature.HBoxNoSignature.isVisible = true;
    }

  }else{
    frmWOValidationSignature.CBNoSignature.selectedKeys = [];
    if (!validationModel.isNull(WOValidationSignature.signature)){
      // Sig already there
      if (WOValidationSignature.isReadOnly){
        // show only
        frmWOValidationSignature.imgSig.base64= WOValidationSignature.signature;
        frmWOValidationSignature.HBImgSig.isVisible = true;
        frmWOValidationSignature.HBSig.isVisible = false;
        frmWOValidationSignature.CBNoSignature.isVisible = false;
        frmWOValidationSignature.lblnoSig.isVisible = false;
        frmWOValidationSignature.lblValidWithoutSig.isVisible = false;
        frmWOValidationSignature.HBoxNoSignature.isVisible = false;

      }else{
        // show and can replace
        frmWOValidationSignature.imgSig.base64= WOValidationSignature.signature;
        frmWOValidationSignature.HBImgSig.isVisible = true;
        frmWOValidationSignature.HBSig.isVisible = false;
        frmWOValidationSignature.CBNoSignature.isVisible = true;
        frmWOValidationSignature.lblnoSig.isVisible = false;
        frmWOValidationSignature.lblValidWithoutSig.isVisible = false;
        frmWOValidationSignature.HBoxNoSignature.isVisible = false;

      }
    }else{
      // no sig registered
      if (WOValidationSignature.isReadOnly){
        // show nothing
        frmWOValidationSignature.HBSig.isVisible = false;
        frmWOValidationSignature.HBImgSig.isVisible = false;
        frmWOValidationSignature.CBNoSignature.isVisible = false;
        frmWOValidationSignature.lblnoSig.isVisible = true;
        frmWOValidationSignature.lblValidWithoutSig.isVisible = false;
        frmWOValidationSignature.HBoxNoSignature.isVisible = false;
      }else{
        // invite to enter sig
        //frmWOValidationSignature.sigClient.clear(); 		//Arati: Changed code for Signature FFI
        frmWOValidationSignature.imgSig.src = "";			//Arati: Changed code for Signature FFI
        frmWOValidationSignature.HBSig.isVisible = true;
        frmWOValidationSignature.HBImgSig.isVisible = false;
        frmWOValidationSignature.CBNoSignature.isVisible = true;
        frmWOValidationSignature.lblnoSig.isVisible = false;
        frmWOValidationSignature.lblValidWithoutSig.isVisible = false;
        frmWOValidationSignature.HBoxNoSignature.isVisible = false;
      }
    }
  }
}

WOValidationSignature.notAvailableClicked = function(){

  WOValidationSignature.noSignature = frmWOValidationSignature.CBNoSignature.selectedKeys!=null;
  WOValidationSignature.showSignature(
    frmWOValidationSignature.CBNoSignature.selectedKeys==null,true);
}

WOValidationSignature.clear = function(){
  frmWOValidationSignature.HBImgSig.isVisible = false;
  frmWOValidationSignature.imgSig.src = "";	//Arati: Changed code for Signature FFI
  //frmWOValidationSignature.sigClient.clear();
}


WOValidationSignature.loadContactTypes = function(){
  var types = contactModel.findContactTypesByWorkOrder(workOrder);
  frmWOValidationSignature.cmbTypeContact.masterData = types;

  /*
	kony.print("WOValidationSignature.defaultContactID : " + 
		JSON.stringify(WOValidationSignature.defaultContactID));
	kony.print("types : " + JSON.stringify(types));
	*/

  frmWOValidationSignature.cmbTypeContact.selectedKey = 
    WOValidationSignature.defaultContactID.typeCode;
  WOValidationSignature.contactTypeSelected();

}

WOValidationSignature.contactTypeSelected = function(){
  WOValidationSignature.clear();
  var typeCode= frmWOValidationSignature.cmbTypeContact.selectedKey;
  WOValidationSignature.loadContacts(typeCode);
}

WOValidationSignature.loadMotifsNonSignature = function(){
  var motifs = signature.getMotifsNonSignature();
  frmWOValidationSignature.cmbMotifsNonSignature.masterData = motifs;
//frmWOValidationSignature.btnSign.text='RV : ' + motifs.length;
  if (!validationModel.isNull(WOValidationSignature.motifNS)) {
    frmWOValidationSignature.cmbMotifsNonSignature.selectedKey = WOValidationSignature.motifNS;  
      }else{
  frmWOValidationSignature.cmbMotifsNonSignature.selectedKey = 'NONE';
      }
}

WOValidationSignature.contactSelected = function(){
  WOValidationSignature.clear();
  if (frmWOValidationSignature.cmbContact.selectedKey == 'NONE'){
    //none
    workOrder.selectedContact = null;
    WOValidationSignature.contactSignature = null;
  }else if(frmWOValidationSignature.cmbContact.selectedKey == '-1'){
    // add contact
    WOValidationSignature.contactAdd();
  }else{
    // go find the contact of the selected id  in the combobox
    var selectedContact = WOValidationSignature.contacts[
      de.itgs.javascript.Array.find(
        WOValidationSignature.contacts,
        function(o){
          return o.id == frmWOValidationSignature.cmbContact.selectedKey;
        }
      )
    ];

    workOrder.selectedContact = selectedContact;
    WOValidationSignature.contactSignature = selectedContact;
  }


  //kony.print("workOrder.selectedContact : " + JSON.stringify(workOrder.selectedContact));
  // update default contact with just selected contact

  WOValidationSignature.checkSignature();

  WOValidationSignature.defaultContactID = contactModel.findDefaultTypeAndContactForWorkOrder(workOrder);
}

WOValidationSignature.loadContacts = function(typeCode){
  var contacts = [['NONE', 'Choisir Contact'],
                  ['-1', '(nouveau contact...)']];

  WOValidationSignature.contacts = contactModel.findContactsByWorkOrderAndTypeCode(workOrder, typeCode);


  if (!validationModel.isNull(WOValidationSignature.contacts) && WOValidationSignature.contacts.length > 0) {
    for (var i = 0; i < WOValidationSignature.contacts.length; i++) {
      contacts.push(
        [	
          WOValidationSignature.contacts[i].id,
          WOValidationSignature.contacts[i].title + ' ' +
          WOValidationSignature.contacts[i].lastName.toUpperCase() + ' ' +
          WOValidationSignature.contacts[i].firstName
        ]);
    }
  }

  frmWOValidationSignature.cmbContact.masterData = contacts;

  if (frmWOValidationSignature.cmbTypeContact.selectedKey == 
      WOValidationSignature.defaultContactID.typeCode){

    frmWOValidationSignature.cmbContact.selectedKey = 
      WOValidationSignature.defaultContactID.contactId;


  }else{
    if (contacts.length == 3){
      frmWOValidationSignature.cmbContact.selectedKey =
        frmWOValidationSignature.cmbContact.masterData[2][0]; 
    }else{
      frmWOValidationSignature.cmbContact.selectedKey = ['NONE'];
    }

  }
  WOValidationSignature.contactSelected();
}


WOValidationSignature.contactAdd = function(){
  workOrderContactEdit.contact = null;
  
  frmWorkOrderContactEdit.show();
}

WOValidationSignature.contactEdit = function(){
  if (frmWOValidationSignature.cmbContact.selectedKey == 'NONE'){
    workOrderContactEdit.contact = null;
  }else{
    workOrderContactEdit.contact = 
      WOValidationSignature.contactSignature;
  }	
  
  frmWorkOrderContactEdit.show();
}

WOValidationSignature.onChangeClicked = function(){
  frmWOValidationSignature.HBImgSig.isVisible = false;
  frmWOValidationSignature.imgSig.src = "";			//Arati: Changed code for Signature FFI
  //frmWOValidationSignature.sigClient.clear();		//Arati: Changed code for Signature FFI
  frmWOValidationSignature.HBSig.isVisible = true;
}

WOValidationSignature.validate = function(){
	
  if(validationModel.isNull(frmWOValidationSignature.cmbContact.selectedKey) || frmWOValidationSignature.cmbContact.selectedKey == 'NONE') {
    popupModel.showPopError("Un contact doit être sélectionné");
    return;
  }

  if(validationModel.isNull(workOrder.selectedContact.fax) && validationModel.isNull(workOrder.selectedContact.email)) {
    popupModel.showPopError("Ce contact ne possède pas de fax ou d'email renseigné");
    return;
  }
    if(frmWOValidationSignature.CBNoSignature.selectedKeys!==null &&  frmWOValidationSignature.cmbMotifsNonSignature.selectedKey == 'NONE') {
    popupModel.showPopError("Un motif de non signature doit être sélectionné");
    return;
  }
    if(WOValidationSignature.isIntermediaryReport == true){
    	if(validationModel.isNull(frmWOValidationSignature.txtAreaInstallState.text) || frmWOValidationSignature.txtAreaInstallState.text == ""){
          popupModel.showPopError("L'état d'installation est obligatoire");
          frmWOValidationSignature.scrollToWidget(frmWOValidationSignature.hboxIntermediateReport);
          return;
        }
      if(frmWOValidationSignature.HBImgSig.isVisible == false){
        popupModel.showPopError("Une signature est obligatoire");
          frmWOValidationSignature.scrollToWidget(frmWOValidationSignature.hboxIntermediateReport);
          return;
      }
    }

  // save signature
  if (frmWOValidationSignature.HBSig.isVisible){
    //frmWOValidationSignature.sigClient.save(); // trigs onCapture event
    WOValidationSignature.onCapture(WOValidationSignature.signature); // trigs onCapture //Arati: Changed code for Signature FFI
  } else {
    WOValidationSignature.commit();
  }
}

WOValidationSignature.onCapture = function(event){
  kony.print("event"+JSON.stringify(event));
  //WOValidationSignature.signature = kony.convertToBase64(event);	//Arati: Changed code for Signature FFI
  WOValidationSignature.signature = event;
  WOValidationSignature.commit();
}

WOValidationSignature.checkSignature = function(){
  if(WOValidationSignature.contactSignature != null){
    if(WOValidationSignature.contactSignature.email != null && WOValidationSignature.contactSignature.email != "" && WOValidationSignature.contactSignature.email != "NULL" && WOValidationSignature.contactSignature.email != undefined) //Arati:Changed code for JIRA UI-224 
    {
      frmWOValidationSignature.btnSign.skin = "sknBtnOK";
      frmWOValidationSignature.btnSign.setEnabled(true);
      if(WOValidationSignature.contactSignature.email != null && WOValidationSignature.contactSignature.email != "" && 
         WOValidationSignature.contactSignature.email != "NULL" 
         && WOValidationSignature.contactSignature.email != undefined){
        frmWOValidationSignature.lblValideContact.text = WOValidationSignature.contactSignature.email;
      }else{
        frmWOValidationSignature.lblValideContact.text = WOValidationSignature.contactSignature.fax;
      }

    }else{
      frmWOValidationSignature.btnSign.skin = "sknDisableSignature";
      frmWOValidationSignature.btnSign.setEnabled(false);
      frmWOValidationSignature.lblValideContact.text = "Ce contact ne possède pas d'email"; //Arati:Changed code for JIRA UI-224 
    }
  }else{
    frmWOValidationSignature.btnSign.skin = "sknDisableSignature";
    frmWOValidationSignature.btnSign.setEnabled(false);
    frmWOValidationSignature.lblValideContact.text = "Ce contact ne possède pas d'email";  //Arati:Changed code for JIRA UI-224 
  }
}



WOValidationSignature.commit= function(){
  // check if this we have enough info
  var valid = (!validationModel.isNull(WOValidationSignature.contactSignature)) && (
    (frmWOValidationSignature.CBNoSignature.selectedKeys != null) ||
    (!validationModel.isNull(WOValidationSignature.signature))
  );
var o;
  var initSignData = function(){
      o = {};
    o.signature = 
      (
      !validationModel.isNull(WOValidationSignature.signature) &&
      frmWOValidationSignature.CBNoSignature.selectedKeys == null
    ) ?
      WOValidationSignature.signature:
    'NULL';
    o.contactid =
      (!validationModel.isNull(WOValidationSignature.contactSignature))?
      WOValidationSignature.contactSignature.id:
    'NULL';
    // put date only if signature is complete
    o.date = 
      valid ? 
      (
      dateTimePrintSql(new Date())
    ) :
    'NULL';
    if (!validationModel.isNull(WOValidationSignature.signatureId)){
      o.id = WOValidationSignature.signatureId;
    }
     o.motifnonsignature = 
      (frmWOValidationSignature.CBNoSignature.selectedKeys !== null) ?
      frmWOValidationSignature.cmbMotifsNonSignature.selectedKey:
    'NULL';
  }
  
  if(WOValidationSignature.manySignature == true){
    var currentWorkOrderList = WOValidationSignature.workOrdersToSign;
    var isWorkOrderOkTab = [];
    for(var i = 0; i < currentWorkOrderList.length; i++){
      initSignData();
      if(currentWorkOrderList[i].id == workOrder.id){
        signature.saveForWorkorder(o, workOrder);
      }else{
        signature.saveForWorkorder(o, currentWorkOrderList[i]);
      }
    }
  }else{
    initSignData();
    if(WOValidationSignature.isIntermediaryReport == true){
      var comment = { installState: frmWOValidationSignature.txtAreaInstallState.text, compensatoryMeasure: frmWOValidationSignature.txtAreaCompensatoryMeasure.text };
      intermediateReport.save(o, workOrder, comment);
      var updatedWorkOrder = workOrder;
		updatedWorkOrder.statusCode = '66';
		workOrderModel.updateWorkOrderParams(updatedWorkOrder, ['statusCode'], ['SRST']);
		frmWOValidationSignature.txtAreaInstallState.text = "";
      	frmWOValidationSignature.txtAreaCompensatoryMeasure.text = "";
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
        startSync();
      WOValidationSignature.isIntermediaryReport = false;
      
      return;
    }else{
      signature.saveForWorkorder(o, workOrder);
    }
  }

  frmWOSummary.show();
  frmWOValidationSignature.destroy();
}

//Arati: Changed code for Signature FFI Main Function Start here 
WOValidationSignature.onClickhboxSign = function() {
  //iPhone
  var strokeWidth = "2.0";
  var strokeColor = "#000000";
  var showClearButon = true;
  var shakeToCancelEnabled = true;
  signatureFFI.getSignatureIphone("Signature Client",strokeWidth,strokeColor,showClearButon,shakeToCancelEnabled, frmWOValidationSignature.txtAreaInstallState.text, frmWOValidationSignature.txtAreaCompensatoryMeasure.text, WOValidationSignature.callbackBase);
}

WOValidationSignature.installStateMatchRegex = function(currentText){
  var regexComment = new RegExp(/^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._();:!?´,.’\/€$&@"=+*><%«‘´»'"\s-]*$/);

  if(regexComment.test(currentText)){
    frmWOValidationSignature.txtAreaInstallState.text = currentText;
    woCommentText.text = currentText;
  }else{
    frmWOValidationSignature.txtAreaInstallState.text = woCommentText.text;
  }
}

WOValidationSignature.compensatoryMatchRegex = function(currentText){
  var regexComment = new RegExp(/^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._();:!?´,.’\/€$&@"=+*><%«‘´»'"\s-]*$/);

  if(regexComment.test(currentText)){
    frmWOValidationSignature.txtAreaCompensatoryMeasure.text = currentText;
    woCommentText.text = currentText;
  }else{
    frmWOValidationSignature.txtAreaCompensatoryMeasure.text = woCommentText.text;
  }
}

function reset(){
  frmWOValidationSignature.imgSig.setVisibility(false);		
}

WOValidationSignature.callbackBase = function(base64String) {
  WOValidationSignature.justEdited = true;
  WOValidationSignature.signatureCallBack = true;
  //WOValidationSignature.resetContact = true;
  frmWOValidationSignature.show();
  kony.print("base64String -- "+JSON.stringify(base64String));
  kony.print("!!! Inside callbackBase");

  frmWOValidationSignature.imgSig.base64 = base64String;

  kony.print("image src from widgewt =" + frmWOValidationSignature.imgSig.base64);

  frmWOValidationSignature.imgSig.isVisible = true;
  frmWOValidationSignature.HBSig.isVisible = true;
  frmWOValidationSignature.HBImgSig.isVisible = true;
  

  //showLoadingVA();
  //WOValidationSignature.rawbytes = kony.convertToRawBytes(base64String);
  WOValidationSignature.signature = frmWOValidationSignature.imgSig.base64;
	frmWOValidationSignature.scrollToEnd();
  kony.print("EXITING");
}
//Arati: Changed code for Signature FFI End here