partialQuotationComment = {

};

partialQuotationComment.init = function() {
	var appMenu = [
		["partialQuotationComment.BACK", "Retour", "left.png", onBackClick],
		["partialQuotationComment.SEND", "Envoi", "printer.png", partialQuotationComment.onBtnSendClick]
	];
  //Dhaval:Fix for app menu not working
  function onBackClick(){
    navigationModel.doReturn();
  }

	otis.application.createAppMenu("partialQuotationComment", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
};

partialQuotationComment.preShow = function () {
	otis.application.setCurrentAppMenu("partialQuotationComment");//Dhaval:Invocation of custom app menu

	// Set initial form state
	frmPartialQuotationComment.hbxWorkOrderReference.lblWorkOrderReference.text = workOrder.getReference();
	frmPartialQuotationComment.hbxWorkOrderReference.backgroundColor = workOrder.color;
	frmPartialQuotationComment.hbxWorkOrderReference.focusSkin = workOrder.skin;
};

partialQuotationComment.onBtnSendClick = function () {
	partialQuotationSummary.context.quotationComment = frmPartialQuotationComment.txtComment.text;
	popupModel.showPopError("Confirmez-vous la création d'un devis pour les éléments sélectionnés ?", partialQuotationSummary.sendQuotation, undefined, true);
};
