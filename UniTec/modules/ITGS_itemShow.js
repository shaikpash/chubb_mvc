itemShow = {};
itemShow.item = {};

itemShow.init = function(){
	var appMenu = [
		["itemShow.BACK", "Retour", "left.png", onBackClick]
	];
  //Dhaval:Fix for app menu not working
  function onBackClick(){
    navigationModel.doReturn();
  }
	initFormProcess("frmItemShow", frmItemShow);//Dhaval:Design issue #18 for slide
	otis.application.createAppMenu("itemShowAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

itemShow.preShow = function () {
	otis.application.setCurrentAppMenu("itemShowAppMenu");//Dhaval:Invocation of custom app menu
  
	frmItemShow.hbox237134513688.detappTabPane.containerHeight = 115;													//Arati:Changed code for JIRA UI-84
  	frmItemShow.hbox237134513688.detappTabPane.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;	//Arati:Changed code for JIRA UI-84
	frmItemShow.detappTabPane.detappDetail.clientHB.clientLabel.text = workOrder.getReference();
	frmItemShow.detappTabPane.detappDetail.clientHB.backgroundColor = workOrder.color;
	frmItemShow.detappTabPane.detappDetail.clientHB.focusSkin = workOrder.skin;
	frmItemShow.detappTabPane.activeTabs = [0];
  	frmItemShow.btnTabPrev.skin='skntabBtn';//Dhaval:Design issue #18 for slide
    frmItemShow.btnTabFirst.skin='sknTabBtnFoc';//Dhaval:Design issue #18 for slide
	
	frmItemShow.detappTabPane.txtType.text = "";
	frmItemShow.detappTabPane.txtBuilding.text = "";
	frmItemShow.detappTabPane.txtFloor.text = "";
	frmItemShow.detappTabPane.txtLocation.text = "";
	frmItemShow.detappTabPane.txtProductionDate.text = "";
	frmItemShow.detappTabPane.txtIdentifier.text = "";
	frmItemShow.detappTabPane.txtCustomerNumb.text = "";
	frmItemShow.detappTabPane.ibid.text = "";

	if (itemShow.item.hasOwnProperty("id")) {
		var items = itemModel.findItemsByWhereClauseAndSortOrder(" and cib.id = '" + itemShow.item.id + "'");
		if (items.length > 0) {
			itemShow.item = items[0];
			frmItemShow.detappTabPane.txtType.text = itemShow.item.name;
			frmItemShow.detappTabPane.txtBuilding.text = itemShow.item.location;
			frmItemShow.detappTabPane.txtFloor.text = itemShow.item.floor;
			frmItemShow.detappTabPane.txtLocation.text = itemShow.item.placement;
			frmItemShow.detappTabPane.txtProductionDate.text = (itemShow.item.productionDate.length > 0) ? dateFunctions.YearFirstToDayFirst(itemShow.item.productionDate) : 'Inconnue';
			frmItemShow.detappTabPane.txtIdentifier.text = (itemShow.item.batchNumber.length > 0) ? itemShow.item.batchNumber : 'Inconnue';
			frmItemShow.detappTabPane.txtCustomerNumb.text = itemShow.item.customerNumber;
			frmItemShow.detappTabPane.ibid.text = itemShow.item.id;
		}
	}
	
	var	segItemCharacteristicsMasterData = [];
	
	// Create the first segment (maintenance history)
	// segItemCharacteristicsMasterData[0] = ["Plan de maintenance",[]];
	itemShow.item.maintenanceHistory = maintenanceModel.findMaintenanceHistoryByItem(itemShow.item);
	itemShow.item.newMaintenanceHistory = [];
	for (var i = 0; i < itemShow.item.maintenanceHistory.length; i ++) {
		var itemMaintenanceHistoryEntry = {};
      if(!validationModel.isNull(itemShow.item.maintenanceHistory[i].taskLastExecutionDate)){
		itemMaintenanceHistoryEntry.lblItemCharacteristicName = itemShow.item.maintenanceHistory[i].taskName + "\n"+itemShow.item.maintenanceHistory[i].usualcode;
		itemMaintenanceHistoryEntry.lblItemCharacteristicValue = dateFunctions.YearFirstToDayFirst(itemShow.item.maintenanceHistory[i].taskLastExecutionDate);
		// segItemCharacteristicsMasterData[0][1].push(itemMaintenanceHistoryEntry);
		segItemCharacteristicsMasterData.push(itemMaintenanceHistoryEntry);
      }
	}
	
	// Create the second segment (item characteristics)
	// segItemCharacteristicsMasterData[1] = ["Caractéristiques",[]];
	itemShow.item.characteristics = articleModel.findArticleCharacteristicsByItem(itemShow.item);
	itemShow.item.newCharacteristics = [];
	for (var i = 0; i < itemShow.item.characteristics.length; i ++) {
		var itemCharacteristic = {};
		itemCharacteristic.lblItemCharacteristicName = itemShow.item.characteristics[i].charName;
		itemCharacteristic.lblItemCharacteristicValueWithoutUnit = (validationModel.isNull(itemShow.item.characteristics[i].charValue) || itemShow.item.characteristics[i].charValue.length == 0) ? 'Non définie' : itemShow.item.characteristics[i].charValue;
		itemCharacteristic.lblItemCharacteristicUnit = validationModel.isNull(itemShow.item.characteristics[i].charUnit) ? '' : itemShow.item.characteristics[i].charUnit;
		itemCharacteristic.lblItemCharacteristicValue = itemCharacteristic.lblItemCharacteristicValueWithoutUnit + ' ' + itemCharacteristic.lblItemCharacteristicUnit;
		// segItemCharacteristicsMasterData[1][1].push(itemCharacteristic);
		segItemCharacteristicsMasterData.push(itemCharacteristic);
	}
	frmItemShow.segItemCharacteristics.setData(segItemCharacteristicsMasterData);
}