partialQuotationPrintText = {

};

partialQuotationPrintText.init = function() {
	var appMenu = [
		["partialQuotationPrintText.BACK", "Retour", "left.png", onBackClick]
	];
  //Dhaval:Fix for app menu not working
	function onBackClick(){
      navigationModel.doReturn();
    }
	otis.application.createAppMenu("partialQuotationPrintTextAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
};

partialQuotationPrintText.loadSegPrintTexts = function() {
	frmPartialQuotationPrintText.segPrintTexts.removeAll();
	
	var printTexts = global.printTextsModel.getPrintTextsForOrder();
	var masterData = printTexts.map(function(printText) {
		var text = printText.title + ' - ' + printText.value.replace(/[ \r\n\t]+/g, ' ');
		if (text.length > 270)
			text = text.substring(0, 264) + ' [...]';
		return { printTextId: printText.id, lblPrintText: text };
	});
	
	frmPartialQuotationPrintText.segPrintTexts.setData(masterData);
};

partialQuotationPrintText.preShow = function () {
	otis.application.setCurrentAppMenu("partialQuotationPrintTextAppMenu");//Dhaval:Invocation of custom app menu
	var prevForm = navigationModel.getPreviousForm();

	// Set initial form state
	frmPartialQuotationPrintText.hbxWorkOrderReference.lblWorkOrderReference.text = workOrder.getReference();
	frmPartialQuotationPrintText.hbxWorkOrderReference.backgroundColor = workOrder.color;
	frmPartialQuotationPrintText.hbxWorkOrderReference.focusSkin = workOrder.skin;
	
	partialQuotationPrintText.loadSegPrintTexts();
};

partialQuotationPrintText.onPrintTextSelection = function (rowNumber) {
	partialQuotationSummary.context.printTextId = frmPartialQuotationPrintText.segPrintTexts.data[rowNumber].printTextId;
	frmPartialQuotationComment.show();
};
