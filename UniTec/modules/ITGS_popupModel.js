popupModel = {};

popupModel.showPopDefault = function (config) {

	popupModel.isOn = true;
	
	function closeDefaultPop() {
		popupModel.isOn = false;
		popDefault.dismiss();
	};

	// Set default values
	config[0].confirm = (config[0].confirm == undefined) ? false : config[0].confirm;
	var confirmCBOrig = config[0].confirmCB;
	config[0].confirmCB = (config[0].confirmCB == undefined) ? 
							function () {
								closeDefaultPop();
							} :
							function () {
								popupModel.isOn = false;
								if (config[0].skipDismiss == undefined || !config[0].skipDismiss) closeDefaultPop();
								confirmCBOrig(config[0].confirmCBParams);
							};
	
	config[0].cancel = (config[0].cancel == undefined) ? false : config[0].cancel;
	var cancelCBOrig = config[0].cancelCB;
	config[0].cancelCB = (cancelCBOrig == undefined) ? 
							function () {
								closeDefaultPop();
							} : 
							function () {
								closeDefaultPop();
								cancelCBOrig();
							};

	// Buttons
	// Confirm & Cancel Button
	popDefault.hbxButtons.isVisible = (config[0].cancel && config[0].confirm) ? true : false;
	popDefault.btnConfirm.onClick = config[0].confirmCB;
	popDefault.btnCancel.onClick = config[0].cancelCB;
	// Confirm button only
	popDefault.hbxButton.isVisible = (!config[0].cancel && config[0].confirm) ? true : false;
	popDefault.btnConfirmCentered.onClick = config[0].confirmCB;

	// TextBox
	if (config.length > 1 && config[1] !=  undefined) {
		popDefault.lblTxt.text = config[1].lblText;
		popDefault.lblTxt.isVisible = true;
		// Without Unit Of Measure
		popDefault.hbxTxt.isVisible = ((config[1].hasUom == undefined || !config[1].hasUom) && (config[1].txtTextVisibile == undefined || config[1].txtTextVisibile));
		popDefault.txt.textInputMode = (config[1].isNumeric) ? constants.TEXTBOX_INPUT_MODE_NUMERIC : constants.TEXTBOX_INPUT_MODE_ANY; 
		popDefault.txt.text = config[1].txtText;
		if (config[1].maxTxtLength != undefined) popDefault.txt.maxTextLength = config[1].maxTxtLength;
		// With Unit Of Measure
		popDefault.hbxTxtUom.isVisible = ((config[1].hasUom != undefined && config[1].hasUom) && (config[1].txtTextVisibile == undefined || config[1].txtTextVisibile));
		popDefault.txtUom.textInputMode = (config[1].isNumeric) ? constants.TEXTBOX_INPUT_MODE_NUMERIC : constants.TEXTBOX_INPUT_MODE_ANY; 
		popDefault.txtUom.text = config[1].txtText;
		popDefault.cbxUom.text = config[1].masterData;
		popDefault.cbxUom.selectedKey = config[1].selectedKey;
	} else {
		popDefault.lblTxt.isVisible = false;
		popDefault.hbxTxt.isVisible = false;
		popDefault.hbxTxtUom.isVisible = false;
	}
	
	// ComboBox
	if (config.length > 2 && config[2] !=  undefined) {
		popDefault.lblCbx.text = config[2].lblCbx;
		popDefault.lblCbx.isVisible = true;
		popDefault.cbx.masterData = config[2].masterData;
		popDefault.cbx.selectedKey = config[2].selectedKey;
		popDefault.cbx.isVisible = true;
	} else {
		popDefault.lblCbx.isVisible = false;
		popDefault.cbx.isVisible = false;
	}
	
	// Calendar
	if (config.length > 3 && config[3] !=  undefined) {
		popDefault.lblCln.text = config[3].lblCln;
		popDefault.lblCln.isVisible = true;
		popDefault.cln.date = config[3].date;
		popDefault.cln.isVisible = true;
	} else {
		popDefault.lblCln.isVisible = false;
		popDefault.cln.isVisible = false;
	}
	
	// Anchor
	popDefault.setContext({"widget": kony.application.getCurrentForm(), "anchor": "top", "sizetoanchorwidth": true});
	popDefault.show();
}

popupModel.showPopError = function (error, confirmCB, confirmCBParams, allowCancel, cancelCB, skipDismiss) {
  if(confirmCB || error.length > 150){
    popupModel.showPopDefault([
		{'confirm'			: true,
		 'confirmCB'		: confirmCB,
		 'confirmCBParams'	: confirmCBParams,
		 'cancel'			: ((allowCancel == undefined || !allowCancel) ? false : true),
		 'cancelCB'			: cancelCB,
		 'skipDismiss' 		: skipDismiss},
		{'lblText'			: error,
		 'txtText'			: '',
		 'txtTextVisibile'	: false}
	]);
  }else{
	iOS.ui.Toast( /**String*/ error, /**Number*/ error.length*40);
  }
  
	
}

popupModel.execWithDelay = function (callback, params) {
	// one second delay in case one want to show a second poperror
	// Otherwize the dismiss is too slow and dismisses also the next showError
	kony.timer.cancel  ('timerPopError');
	if (params == undefined) {
		kony.timer.schedule('timerPopError', function(){callback();}, 1, false);
	} else {
		kony.timer.schedule('timerPopError', function(){callback(params);}, 1, false);
	}
};

popupModel.onHide = function() {
	if(popupModel.isOn) popDefault.show();
};