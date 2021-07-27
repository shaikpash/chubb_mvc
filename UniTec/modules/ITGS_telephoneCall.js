telephoneCall = {
	contact: null,
	contactNumber: null
};

telephoneCall.init = function(){
	var appMenu = [
			["telephoneCall.BACK", "Retour", "left.png", onBackClick]
	];
	//Dhaval:Fix for app menu not working	
  function onBackClick(){
      navigationModel.doReturn();
    }
	otis.application.createAppMenu("telephoneCallAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu

}

telephoneCall.preShow = function () {
	otis.application.setCurrentAppMenu("telephoneCallAppMenu");//Dhaval:Invocation of custom app menu
	
	telephoneCall.contactNumber = telephoneCall.contactNumber.replace( /[^\d|+]/g, function(c){return ''});

	frmTelephoneCall.hbxReference.lblReference.text = workOrder.getReference();
	frmTelephoneCall.hbxReference.backgroundColor = workOrder.color;
	frmTelephoneCall.hbxReference.focusSkin = workOrder.skin;
	
	frmTelephoneCall.lblCallDetails.text = (validationModel.isNull(telephoneCall.contact.title)) ? "" : telephoneCall.contact.title;
	frmTelephoneCall.lblCallDetails.text = frmTelephoneCall.lblCallDetails.text.trim();
	frmTelephoneCall.lblCallDetails.text += (validationModel.isNull(telephoneCall.contact.firstName)) ? "" : " " + telephoneCall.contact.firstName;
	frmTelephoneCall.lblCallDetails.text = frmTelephoneCall.lblCallDetails.text.trim();
	frmTelephoneCall.lblCallDetails.text += (validationModel.isNull(telephoneCall.contact.lastName)) ? "" : " " + telephoneCall.contact.lastName;
	frmTelephoneCall.lblCallDetails.text = frmTelephoneCall.lblCallDetails.text.trim();
	frmTelephoneCall.lblCallDetails.text += "\n" + telephoneCall.contactNumber;
}

telephoneCall.onBtnCallClick = function () {
	try {
		kony.phone.dial(telephoneCall.contactNumber);
		
		if (workOrder.typeCode == 'I' && workOrder.statusCode == 33) {
			workOrderModel.changeStatus(workOrder, 42);
			workOrder = workOrderModel.findWorkOrderByDoco(workOrder.doco);
		}
	} catch(err) {
		popupModel.showPopError("Erreur lors de l'appel : "+err);
	}
}


