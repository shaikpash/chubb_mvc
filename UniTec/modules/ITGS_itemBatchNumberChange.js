itemBatchNumberChange = {};

itemBatchNumberChange.init = function(){
	var appMenu = [
		["itemBatchNumberChange.BACK", "Retour", "left.png", function(){
				frmItemBatchNumberChange.txtBarCode.text = '';
				navigationModel.doReturn();
			}
		],
		["itemBatchNumberChange.VALID", "Confirmer", "check.png", 
			function () {itemBatchNumberChange.onSaveClick('N')}]
	];

	otis.application.createAppMenu("itemBatchNumberChangeAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu

}

itemBatchNumberChange.preShow = function () {
	
	otis.application.setCurrentAppMenu("itemBatchNumberChangeAppMenu");//Dhaval:Invocation of custom app menu
	frmItemBatchNumberChange.txtBarCode.text = '';
	frmItemBatchNumberChange.txtTypeAppareil.text = frmItemVerify.txtType.text.concat(' ').concat(frmItemVerify.txtIdentifier.text);
}

itemBatchNumberChange.postShow = function () {
	itemScanFunctions.startScan(kony.application.getCurrentForm(), itemBatchNumberChange.onSaveClick);
}

itemBatchNumberChange.onHide = function () {
	itemScanFunctions.stopScan();
}

itemBatchNumberChange.onDestroy = function () {
	itemScanFunctions.stopScan();
}
// isScanned = undefined -> from scann
// 'N' from valid button 
itemBatchNumberChange.onSaveClick = function (isScanned) {
	
	
	if(frmItemBatchNumberChange.txtBarCode.text.length != 10) {
		popupModel.showPopError("Entrer un code-barre valide (10 caractères).");
		return;
	} else if (!validationModel.numberHasMaxDecimals(frmItemBatchNumberChange.txtBarCode.text,0)) {
		popupModel.showPopError("Code-barre non valide. Veuillez corriger avant de continuer.");
		return;
	} else {
		var existingItem = itemModel.findItemByBatchNumber(frmItemBatchNumberChange.txtBarCode.text,workOrder);
  		if(!validationModel.isNull(existingItem) && existingItem.hasOwnProperty("batchNumber")) {
			popupModel.showPopError("Ce code-barre est déjà associé à l'appareil " + existingItem.name);
			return;
		}
 	}
	
	itemVerify.item.isScanned = validationModel.isNull(isScanned) ? 'O' : 'N';
	taskModel.setTasksScannedFlagForItem(itemVerify.item, workOrder);
	
	frmItemVerify.txtIdentifier.text = frmItemBatchNumberChange.txtBarCode.text;
	frmItemVerify.show();
}