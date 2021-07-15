sparePartAdd = {
	sparePartsTaskRelated: [],
	spareParts: [],
	salesReasons: []
};

sparePartAdd.init = function(){
	var appMenu = [
		["sparePartAdd.BACK", "Retour", "left.png", onBackClick],
		["sparePartAdd.VALID", "Valider", "check.png", sparePartAdd.onBtnSaveClick]
	];
  //Dhaval:Fix for app menu not working
	function onBackClick(){
      navigationModel.doReturn();
    }
	otis.application.createAppMenu("sparePartAddAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
};

sparePartAdd.preShow = function () {
	otis.application.setCurrentAppMenu("sparePartAddAppMenu");//Dhaval:Invocation of custom app menu
	
	frmSparePartAdd.hbxReference.lblReference.text = workOrder.getReference();
	frmSparePartAdd.hbxReference.backgroundColor = workOrder.color;
	frmSparePartAdd.hbxReference.focusSkin = workOrder.skin;
	
	// Populate the spare parts drop down
	// Filter out all articles which are already spare parts related to tasks
	var sparePartsTaskRelatedUsualCodes = [];
	for (var i = 0; i < sparePartAdd.sparePartsTaskRelated.length; i++) {
		sparePartsTaskRelatedUsualCodes.push(sparePartAdd.sparePartsTaskRelated[i].usualCode);
	}
	
	// filter out all articles which are already separatly sold spare parts
	for (var i = 0; i < taskOverview.sparePartsAddGrouped.length; i++) {
		sparePartsTaskRelatedUsualCodes.push(taskOverview.sparePartsAddGrouped[i].usualCode);
	}

	sparePartAdd.spareParts = articleModel.findArticleComponentsByItem(itemVerify.item);
	var cbxSparePartsMasterData = [["-1", "Choisir pièce ajoutée"]];
	for (var i = 0; i < sparePartAdd.spareParts.length; i++) {
		if (sparePartsTaskRelatedUsualCodes.indexOf(sparePartAdd.spareParts[i].usualCode) < 0) {
			cbxSparePartsMasterData.push([i, sparePartAdd.spareParts[i].name + " (" + sparePartAdd.spareParts[i].usualCode + ")"]);
		} else {
			sparePartAdd.spareParts.splice(i, 1);
			i--;
		}
	}
	
	frmSparePartAdd.cbxSpareParts.masterData = cbxSparePartsMasterData;
    frmSparePartAdd.cbxSpareParts.selectedKey = "-1";
    sparePartAdd.populateMotive(-1);
};

sparePartAdd.populateMotive = function(itemIndex){
	// Populate the sales reason drop down

	if (itemIndex == -1){
		sparePartAdd.salesReasons = [];
	}else{
		sparePartAdd.salesReasons = taskModel.findTaskCompletionReasonsByType(
    	'Sale', workOrder, sparePartAdd.spareParts[itemIndex], 'sparePart');
	}
    
    var cbxReasonsMasterData = [["-1", "Choisir motif"]];
	for (var i = 0; i < sparePartAdd.salesReasons.length; i++) {
		cbxReasonsMasterData.push([i, sparePartAdd.salesReasons[i].name]);
	}
	
	frmSparePartAdd.cbxReasons.masterData = cbxReasonsMasterData;
    frmSparePartAdd.cbxReasons.selectedKey = "-1";
}

sparePartAdd.onCbxSparePartsSelection = function () {
	var selectedCbxSparePartsIndex = parseInt(frmSparePartAdd.cbxSpareParts.selectedKeyValue[0]);
	var sparePart = sparePartAdd.spareParts[selectedCbxSparePartsIndex];
	if (selectedCbxSparePartsIndex < 0) {
		frmSparePartAdd.txtQuantity.text = '';
		frmSparePartAdd.txtQuantity.setEnabled(false);
	} else {
		frmSparePartAdd.txtQuantity.text = sparePart.quantity;
		var isQtyVariable = sparePart.quantityVariabilityFlag == 'V' ? true : false;
		var multipleSparePartsAllowed = sparePart.quantity > 1 ? true : false;
		if (isQtyVariable && multipleSparePartsAllowed) frmSparePartAdd.txtQuantity.setEnabled(true);
		else frmSparePartAdd.txtQuantity.setEnabled(false);
	}
	sparePartAdd.populateMotive(selectedCbxSparePartsIndex);
}

sparePartAdd.onBtnSaveClick = function () {
	var selectedCbxSparePartsIndex = parseInt(frmSparePartAdd.cbxSpareParts.selectedKeyValue[0]);
	if (selectedCbxSparePartsIndex > -1) {
		var selectedCbxReasonsIndex = parseInt(frmSparePartAdd.cbxReasons.selectedKeyValue[0]);
		if (!validationModel.numberHasMaxDecimals(frmSparePartAdd.txtQuantity.text,0)) {
			popupModel.showPopError("Quantité invalide. Veuillez corriger avant de continuer.");
		} else {
			var sparePart = sparePartAdd.spareParts[selectedCbxSparePartsIndex];
			var salesReason = selectedCbxReasonsIndex < 0 ? undefined : sparePartAdd.salesReasons[selectedCbxReasonsIndex];
			var salesReasonCode = !validationModel.isNull(salesReason) ? salesReason.code : undefined;
			sparePart.quantity = parseInt(frmSparePartAdd.txtQuantity.text);
			sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, itemVerify.item, [sparePart], undefined, salesReasonCode, 'sparePart');
			navigationModel.doReturn();
		}
	} else {
		navigationModel.doReturn();
	}
}