itemVerify = {
	item: {},
	indexesTableOfSegment: [],
  	isCreate : false,
  	calendar : null,
    saveButton : false,
  	isReadOnly : false
};

itemVerify.init = function(){
	
	//End
  //hbxMain4.forceLayout();
}

itemVerify.setMenus = function(){
  var appMenu = [
		["itemVerify.VERIFY", "Retour", "left.png", onBackClick],
	];
  
  if(!itemVerify.isReadOnly) {
    appMenu.push(["itemVerify.DEL", "Supprimer", "bin.png", itemVerify.remove]);
    appMenu.push(["itemVerify.BARC", "Changer code barre", "recycle.png", onRecycleClick]);
  
    if(kony.application.getCurrentForm().id == "frmCatalog" && workOrder.equipmentActivity == 'EXT' && itemVerify.isCreate == false){

    }else if(itemVerify.saveButton == true){
      appMenu.push(["itemVerify.SAVE", "Enregistrer", "save.png", itemVerify.onSaveClick]);
    }
      else{
      //alert('save');
      appMenu.push(["itemVerify.VALID", "Valider", "check.png", itemVerify.onSaveClick]);
    }
  }
	
	otis.application.createAppMenu("itemVerifyAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
	
	var appDenatMenu = [
        ["itemVerify.VERIFY", "Retour", "left.png", onBackClick],
        ["itemVerify.BARC", "Changer code barre", "recycle.png", onRecycleClick],
        ["itemVerify.VALID", "Valider", "check.png", itemVerify.onSaveClick]
 	];
 	initFormProcess("frmItemVerify", frmItemVerify);//Dhaval:Design issue #18 for slide
	otis.application.createAppMenu("itemVerifyAppDenatMenu", appDenatMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
	//Dhaval:Fix for App Menu not working start
  function onBackClick()
  	{
      
    navigationModel.doReturn();
      frmItemVerify.destroy();
  	}
  	function onRecycleClick(){
      frmItemBatchNumberChange.show();
    }
}

itemVerify.remove = function() {
	itemRemove.show(itemVerify.item, 'inventory', frmWOSummary);
}

itemVerify.saveItemVerifyFields = function(){
  app_parameters.lifetime.itemVerifyFields.bat = frmItemVerify.txtBuilding.text;
  app_parameters.lifetime.itemVerifyFields.et = frmItemVerify.txtFloor.text;
  app_parameters.lifetime.itemVerifyFields.sit = frmItemVerify.txtLocation.text;
 // app_parameters.lifetime.itemVerifyFields.num = frmItemVerify.txtCustomerNumb.text==""?app_parameters.lifetime.itemVerifyFields.num:frmItemVerify.txtCustomerNumb.text;
}

itemVerify.preShow = function () {
  itemVerify.isReadOnly = !workOrderModel.isOnSite(workOrder) || WOValidationSignature.isValid(workOrder) || (workOrder.statusCode == 70);
  
  if(itemVerify.isReadOnly) {
    frmItemVerify.detappTabPane.txtProductionDate.setEnabled(false);
    frmItemVerify.detappTabPane.txtBuilding.setEnabled(false);
    frmItemVerify.detappTabPane.txtFloor.setEnabled(false);
    frmItemVerify.detappTabPane.txtLocation.setEnabled(false);
    frmItemVerify.detappTabPane.txtCustomerNumb.setEnabled(false);
    frmItemVerify.detappCaracteristics.txtProductionDateCaract.setEnabled(false);
    
  } else {
    frmItemVerify.detappTabPane.txtProductionDate.setEnabled(true);
    frmItemVerify.detappTabPane.txtBuilding.setEnabled(true);
    frmItemVerify.detappTabPane.txtFloor.setEnabled(true);
    frmItemVerify.detappTabPane.txtLocation.setEnabled(true);
    frmItemVerify.detappTabPane.txtCustomerNumb.setEnabled(true);
    frmItemVerify.detappCaracteristics.txtProductionDateCaract.setEnabled(true);
  }
  
  itemVerify.setMenus();
 
  frmItemVerify.detappTabPane.activeTabs = [1];
  
  	frmItemVerify.detappTabPane.containerHeight = 150;													//Arati:Changed code for JIRA UI-84
  	frmItemVerify.detappTabPane.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;//Arati:Changed code for JIRA UI-84
	
	frmItemVerify.detappTabPane.detappDetail.clientHB.clientLabel.text = workOrder.getReference();
	frmItemVerify.detappTabPane.detappDetail.clientHB.backgroundColor = workOrder.color;
	frmItemVerify.detappTabPane.detappDetail.clientHB.focusSkin = workOrder.skin;
	frmItemVerify.detappTabPane.activeTabs = [0];
  	frmItemVerify.btnTabPrev.skin='skntabBtn';//Dhaval:Design issue #18 for slide
    frmItemVerify.btnTabFirst.skin='sknTabBtnFoc';//Dhaval:Design issue #18 for slide

	if (!itemVerify.item.hasOwnProperty("batchNumber")) {
		itemVerify.item = itemModel.findItemByBatchNumber(frmItemScan.txtBarCode.text, workOrder);
	}
	
	itemVerify.loadItemData = function (refreshNoDB) {
		databaseModel.openDBExchange("Chargement des données de l'appareil...");
		var displayedProductionDate = "";
		if ((validationModel.isNull(itemVerify.item.productionDate) || itemVerify.item.productionDate.length == 0) && !validationModel.isNull(itemVerify.item.id)) {
			displayedProductionDate = itemModel.findItemBaseAttribute(itemVerify.item, ["fabricationDate"]).fabricationDate;
		} else {
			displayedProductionDate = itemVerify.item.productionDate;
		}
	
		frmItemVerify.detappTabPane.txtType.text = itemVerify.item.name;
		frmItemVerify.detappTabPane.txtBuilding.text = itemVerify.item.location;
		frmItemVerify.detappTabPane.txtFloor.text = itemVerify.item.floor;
		frmItemVerify.detappTabPane.txtLocation.text = itemVerify.item.placement;
		if (validationModel.isNull(displayedProductionDate) || displayedProductionDate.length == 0){ 
          frmItemVerify.detappTabPane.txtProductionDate.clear();
        	frmItemVerify.detappCaracteristics.txtProductionDateCaract.clear();
        }
		else{
          frmItemVerify.detappTabPane.txtProductionDate.date = dateFunctions.toCalendarFormat(displayedProductionDate);
          frmItemVerify.detappCaracteristics.txtProductionDateCaract.date = dateFunctions.toCalendarFormat(displayedProductionDate);
        }
		frmItemVerify.detappTabPane.txtIdentifier.text = !validationModel.isNull(itemVerify.item.batchNumber) ? itemVerify.item.batchNumber : 'Inconnu';
		if (validationModel.isNull(itemVerify.item.customerNumber)) itemVerify.item.customerNumber = "";
		frmItemVerify.detappTabPane.txtCustomerNumb.text = itemVerify.item.customerNumber;
		frmItemVerify.detappTabPane.ibid.text = itemVerify.item.id;
		frmItemVerify.detappTabPane.lblItemReference.text = itemVerify.item.usualCode + " - " + itemVerify.item.name;
		
		var	segItemCharacteristicsMasterData = [];
	
		// Create the first segment (maintenance history)
		itemVerify.item.maintenanceHistory = new Array();
		if (!refreshNoDB && !validationModel.isNull(itemVerify.item.id)) itemVerify.item.maintenanceHistory = maintenanceModel.findMaintenanceHistoryByItem(itemVerify.item);
                	
		itemVerify.item.newMaintenanceHistory = [];
		for (var i = 0; i < itemVerify.item.maintenanceHistory.length; i ++) {
            var itemMaintenanceHistoryEntry = {};
			itemMaintenanceHistoryEntry.lblItemCharacteristicName = itemVerify.item.maintenanceHistory[i].taskName + "\n"+itemVerify.item.maintenanceHistory[i].usualcode;
			itemMaintenanceHistoryEntry.lblItemCharacteristicValue = validationModel.isNull(itemVerify.item.maintenanceHistory[i].taskLastExecutionDate)?"Pas de date":dateFunctions.YearFirstToDayFirst(itemVerify.item.maintenanceHistory[i].taskLastExecutionDate);
			itemMaintenanceHistoryEntry.imgEdit = {"isVisible": true, "src": "edit.png"};
          	itemMaintenanceHistoryEntry.hbxItemCharacteristics = {"skin": validationModel.isNull(itemVerify.item.maintenanceHistory[i].dtlitm)?"sknBlackSeg":"sknRedSeg"};

			segItemCharacteristicsMasterData.push(itemMaintenanceHistoryEntry);
		}
		
		// Create the second segment (item characteristics)
		itemVerify.item.characteristics = new Array();
		if (!refreshNoDB) {
			itemVerify.item.characteristics = articleModel.findArticleCharacteristicsByItem(itemVerify.item);
		}
		itemVerify.item.newCharacteristics = [];
		var j=0;
		for (var i = 0; i < itemVerify.item.characteristics.length; i ++) {
			if(
				(
					!validationModel.isNull(itemVerify.item.characteristics[i].charName) && 
					itemVerify.item.characteristics[i].charName.length > 0 &&
					!validationModel.isNull(itemVerify.item.characteristics[i].charValue) &&
					itemVerify.item.characteristics[i].charValue.length > 0
				) 
			) {

				var itemCharacteristic = {rowType: ""};
				if(!validationModel.isNull(itemVerify.item.characteristics[i].referenceCode) && itemVerify.item.characteristics[i].referenceCode != "")
					itemCharacteristic.rowType = "ComboBox";
				else
					itemCharacteristic.rowType = "TextEdit";

				itemCharacteristic.lblItemCharacteristicName = itemVerify.item.characteristics[i].charName;
				itemCharacteristic.lblItemCharacteristicValueWithoutUnit = validationModel.isNull(itemVerify.item.characteristics[i].charValue) ? '' : itemVerify.item.characteristics[i].charValue;
				itemCharacteristic.lblItemCharacteristicUnit = validationModel.isNull(itemVerify.item.characteristics[i].charUnit) ? '' : itemVerify.item.characteristics[i].charUnit;
				if(itemCharacteristic.rowType == "ComboBox"){
					itemCharacteristic.lblItemCharacteristicValue = itemCharacteristic.lblItemCharacteristicValueWithoutUnit;
				}else{
					itemCharacteristic.lblItemCharacteristicValue = itemCharacteristic.lblItemCharacteristicValueWithoutUnit + '' +itemCharacteristic.lblItemCharacteristicUnit;
				}
				itemCharacteristic.imgEdit = itemVerify.item.characteristics[i].isEditable ? {"isVisible": true, "src": "edit.png"} : "";

				itemVerify.indexesTableOfSegment[j++]= i;
 
				segItemCharacteristicsMasterData.push(itemCharacteristic);
			}
		}
		frmItemVerify.segItemCharacteristics.setData(segItemCharacteristicsMasterData);
		databaseModel.closeDBExchange();

	}

	if (navigationModel.getPreviousForm() != 'frmItemBatchNumberChange'){
		itemVerify.loadItemData(false);
	} else {
		if (navigationModel.stack.length) navigationModel.stack.pop();
		if (navigationModel.stack.length) navigationModel.stack.pop();
	} 
	var associatedTaskTypes = taskModel.findTaskTypesByWorkOrderAndWhereClause(workOrder, " and dt.cibid = " + itemVerify.item.id + " and prm.RMK2 = 'TRT' ");
	if(associatedTaskTypes.length > 0) {
		otis.application.setCurrentAppMenu("itemVerifyAppDenatMenu");//Dhaval:Invocation of custom app menu
	}else{
		otis.application.setCurrentAppMenu("itemVerifyAppMenu");//Dhaval:Invocation of custom app menu
	}
  
  frmItemVerify.detappTabPane.containerHeight = 160;														//Arati:Changed code for JIRA UI-84
    frmItemVerify.detappTabPane.containerHeightReference = constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH;	//Arati:Changed code for JIRA UI-84
  
}

itemVerify.postShow = function(){
  if(frmItemVerify.txtBuilding.text=="" && frmItemVerify.txtFloor.text=="" && frmItemVerify.txtLocation.text== ""){
    frmItemVerify.txtBuilding.text = app_parameters.lifetime.itemVerifyFields.bat;
  	frmItemVerify.txtFloor.text = app_parameters.lifetime.itemVerifyFields.et;
  	frmItemVerify.txtLocation.text = app_parameters.lifetime.itemVerifyFields.sit;
  } 
  var d = new Date();
  if(frmItemVerify.detappDetail.txtProductionDate.date == null){
    itemVerify.calendar = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
  }else{
    itemVerify.calendar = frmItemVerify.detappDetail.txtProductionDate.date;
  }
  
  
}

itemVerify.checkCalendar = function(calendarWidget){
  if (itemVerify.isReadOnly) return;

  var calendarDate = calendarWidget.date.split("/");
  var d = new Date();
    if(calendarDate[2] > d.getFullYear() ||
         (calendarDate[2] == d.getFullYear() && calendarDate[1] > d.getMonth()+1) ||
         (calendarDate[2] == d.getFullYear() && calendarDate[1] == d.getMonth()+1) && calendarDate[0] > d.getDate()){
      popupModel.showPopError("La date ne peut être supérieur à celle du jour");
      frmItemVerify.detappDetail.txtProductionDate.date = itemVerify.calendar.split("/");
      frmItemVerify.detappCaracteristics.txtProductionDateCaract.date = itemVerify.calendar.split("/");
      return;
    }
  var itemDate = null;
  //alert(JSON.stringify(itemVerify.item.maintenanceHistory));
  for(var i = 0 ; i < itemVerify.item.maintenanceHistory.length; i++){
    if(itemVerify.item.maintenanceHistory[i].taskLastExecutionDate != null){
    itemDate = itemVerify.item.maintenanceHistory[i].taskLastExecutionDate.split("-");
    //alert(itemVerify.item.maintenanceHistory[i].taskLastExecutionDate);
    if(calendarDate[2] > itemDate[0] ||
         (calendarDate[2] == itemDate[0] && calendarDate[1] > itemDate[1] ||
         (calendarDate[2] == itemDate[0] && calendarDate[1] == itemDate[1]) && calendarDate[0] > itemDate[2])){
      		popupModel.showPopError("Veuillez mettre à jour votre plan de maintenance : date(s) inférieure(s) à la date de mise en service");
      frmItemVerify.detappDetail.txtProductionDate.date = itemVerify.calendar.split("/");
      frmItemVerify.detappCaracteristics.txtProductionDateCaract.date = itemVerify.calendar.split("/");
      return;
  		}
    }
  }
  for(var i = 0 ; i < itemVerify.item.newMaintenanceHistory.length; i++){
    itemDate = itemVerify.item.newMaintenanceHistory[i].taskLastExecutionDate.split("-");
    //alert(itemVerify.item.maintenanceHistory[i].taskLastExecutionDate);
     if(itemVerify.item.maintenanceHistory[i].taskLastExecutionDate != null){
    if(calendarDate[2] > itemDate[0] ||
         (calendarDate[2] == itemDate[0] && calendarDate[1] > itemDate[1] ||
         (calendarDate[2] == itemDate[0] && calendarDate[1] == itemDate[1]) && calendarDate[0] > itemDate[2])){
      		popupModel.showPopError("Veuillez mettre à jour votre plan de maintenance : date(s) inférieure(s) à la date de mise en service");
      frmItemVerify.detappDetail.txtProductionDate.date = itemVerify.calendar.split("/");
      frmItemVerify.detappCaracteristics.txtProductionDateCaract.date = itemVerify.calendar.split("/");
      return;
  		}
}
  }
  frmItemVerify.detappDetail.txtProductionDate.date = calendarWidget.date.split("/");
  frmItemVerify.detappCaracteristics.txtProductionDateCaract.date = calendarWidget.date.split("/");
}

itemVerify.onSaveClick = function () {
  exchangeItemPop.dismiss();
  itemVerify.saveItemVerifyFields();
	if ((validationModel.isNull(frmItemVerify.detappTabPane.txtProductionDate.date) ||
			   dateFunctions.compare(dateFunctions.toDateFormat(frmItemVerify.detappTabPane.txtProductionDate.date)) > 0)) {
		popupModel.showPopError("Date de mise en service non valide. Veuillez corriger avant de continuer.");
		return;
	} else if((validationModel.isNull(frmItemVerify.detappTabPane.txtLocation.text) || frmItemVerify.detappTabPane.txtLocation.text.length == 0) &&
		(validationModel.isNull(frmItemVerify.detappTabPane.txtFloor.text) || frmItemVerify.detappTabPane.txtFloor.text.length == 0) &&
		(validationModel.isNull(frmItemVerify.detappTabPane.txtBuilding.text) || frmItemVerify.detappTabPane.txtBuilding.text.length == 0)
	) {
		popupModel.showPopError("veuillez renseigner au moins un champ d'implantation");
		return;
	}

	taskOverview.tab.current = taskOverview.tab.tasksPlanned;

	itemVerify.onSaveClickCB = function () {
		
		itemVerify.item.id = frmItemVerify.detappTabPane.ibid.text;
		itemVerify.item.batchNumber = (frmItemVerify.detappTabPane.txtIdentifier.text == 'Inconnue') ? 'NULL' : frmItemVerify.detappTabPane.txtIdentifier.text;
		itemVerify.item.productionDate = (validationModel.isNull(frmItemVerify.detappTabPane.txtProductionDate.date)) ? undefined : dateFunctions.toStringFormat(frmItemVerify.detappTabPane.txtProductionDate.date);
		itemVerify.item.placement = frmItemVerify.detappTabPane.txtLocation.text;
		itemVerify.item.floor = frmItemVerify.detappTabPane.txtFloor.text;
		itemVerify.item.location = frmItemVerify.detappTabPane.txtBuilding.text;
		itemVerify.item.customerNumber = (frmItemVerify.detappTabPane.txtCustomerNumb.text.length == 0) ? "NULL" : frmItemVerify.detappTabPane.txtCustomerNumb.text.replace(',','.');
		var customer = customerModel.findCustomerByWorkOrder(workOrder);
		if(!validationModel.isNull(itemVerify.item.id) && itemVerify.item.id != '') {
			itemModel.updateItems([itemVerify.item]);
		}
		else {
			var registeredItemId = itemModel.createItemInCustomerInstalledBase(itemVerify.item, workOrder, customer, true);

			if(!validationModel.isNull(registeredItemId) && !validationModel.isNull(registeredItemId.id)) {
				var whereClause = " and cib.id = " + registeredItemId.id + " ";
				var registeredItem = itemModel.findItemsByWhereClauseAndSortOrder(whereClause);
				itemVerify.item.id = registeredItem[0].id;
				navigationModel.removeForm('frmCatalogSearch');
				navigationModel.removeForm('frmCatalog');
			}
			else {
				popupModel.showPopError("error : no id returned from creation in customer installed base");
				return;
			}
		}

         maintenanceModel.createMaintenanceHistoryByItem(itemVerify.item, customer, workOrder);
		maintenanceModel.updateMaintenanceHistoryByItem(itemVerify.item, customer); // Update if there is a date updated in the MaintenanceHistory Array (if the taskId exist)
		
      articleModel.updateArticleCharacteristicsByItem(itemVerify.item);

      
		inventory.preIdentified = false;
      var dateProductionArray = frmItemVerify.detappTabPane.txtProductionDate.date.split("/");
      var d = new Date();
      var infDate = false;
      if(dateProductionArray[2] < d.getFullYear() ||
         (dateProductionArray[2] == d.getFullYear() && dateProductionArray[1] < d.getMonth()+1) ||
         (dateProductionArray[2] == d.getFullYear() && dateProductionArray[1] == d.getMonth()+1) && dateProductionArray[0] < d.getDate()){
        infDate = true;
      }
      
      if(kony.application.getPreviousForm().id == "frmCatalog" && workOrder.equipmentActivity == 'EXT' && itemVerify.isCreate == false && infDate == true){
        frmItemVerify.destroy();
        itemVerify.saveButton = true;
        frmItemVerify.show(); 
        
      }else{
        itemVerify.isCreate = false;
        navigationModel.doContinue();
        frmItemVerify.destroy();
      }
	}
	
	var infDate = false;
      var dateProductionArray = frmItemVerify.detappTabPane.txtProductionDate.date.split("/");
      var d = new Date();
      
      if(dateProductionArray[2] < d.getFullYear()-4 ||
         (dateProductionArray[2] < d.getFullYear()-3 && dateProductionArray[1] < d.getMonth()+1) ||
         (dateProductionArray[2] < d.getFullYear()-3 && dateProductionArray[1] == d.getMonth()+1) && dateProductionArray[0] < d.getDate()){
        infDate = true;
      }

 
	
	// Ask for confirmation (popup) if device data has changed
	if(inventory.preIdentified)
	{
		/*popupModel.showPopError("Voulez-vous enregistrer l'appareil " 
								+ itemVerify.item.name 
								+ " dans le parc avec le code-barre " 
								+  itemVerify.item.batchNumber
								+ " ?", itemVerify.onSaveClickCB, undefined, true, itemVerify.onSaveClickCBe);*/
      	itemVerify.onSaveClickCB();				//Arati: Changed code for JIRA UI-70
	}
	else if (itemVerify.item.batchNumber != frmItemVerify.detappTabPane.txtIdentifier.text ||
			((validationModel.isNull(itemVerify.item.productionDate) || itemVerify.item.productionDate.length == 0) && !validationModel.isNull(frmItemVerify.detappTabPane.txtProductionDate.date)) ||
			(!validationModel.isNull(itemVerify.item.productionDate) && itemVerify.item.productionDate.length > 0 && validationModel.isNull(frmItemVerify.detappTabPane.txtProductionDate.date)) ||
			(!validationModel.isNull(itemVerify.item.productionDate) && !validationModel.isNull(frmItemVerify.detappTabPane.txtProductionDate.date) && 
			itemVerify.item.productionDate != dateFunctions.toStringFormat(frmItemVerify.detappTabPane.txtProductionDate.date)) ||
			itemVerify.item.location != frmItemVerify.detappTabPane.txtBuilding.text ||
			itemVerify.item.floor != frmItemVerify.detappTabPane.txtFloor.text ||
			itemVerify.item.placement != frmItemVerify.detappTabPane.txtLocation.text ||
			itemVerify.item.customerNumber != frmItemVerify.detappTabPane.txtCustomerNumb.text ||
			itemVerify.item.newMaintenanceHistory.length > 0 ||
			itemVerify.item.newCharacteristics.length > 0)
		{	
      
          if((kony.application.getPreviousForm().id != "frmCatalog" && workOrder.equipmentActivity == 'EXT' && infDate == true)){
            popupModel.showPopError("Avez-vous mis à jour le plan de maintenance de cet appareil ?", itemVerify.onSaveClickCB, undefined, true, itemVerify.onSaveClickCBe);
          }else{
            popupModel.showPopError("Les détails de l'appareil ont changé. Confirmer ?", itemVerify.onSaveClickCB, undefined, true, itemVerify.onSaveClickCBe);
          }
			
	} else {
      if((kony.application.getPreviousForm().id == "frmCatalog" && workOrder.equipmentActivity == 'EXT' && itemVerify.isCreate == false)){
        frmItemVerify.destroy();
        itemVerify.saveButton = true;
        frmItemVerify.show();
         
      }else{
        if((kony.application.getPreviousForm().id != "frmCatalog" && workOrder.equipmentActivity == 'EXT' && infDate == true)){
            popupModel.showPopError("Avez-vous mis à jour le plan de maintenance de cet appareil ?", itemVerify.onSaveClickCB, undefined, true, itemVerify.onSaveClickCBe);
        }else{
          itemVerify.isCreate = false;
        navigationModel.doContinue();
        frmItemVerify.destroy();
        }
        
      }
	}
      


      
}

itemVerify.addSaveButton = function(){
  frmItemVerify.detappTabPane.activeTabs = [1];
       	 frmItemVerify.btnTabPrev.skin='sknTabBtnFoc';
  		 frmItemVerify.btnTabFirst.skin='skntabBtn';
      	 itemVerify.loadItemData();
        itemVerify.init();
      	 frmItemVerify.forceLayout();
         itemVerify.isCreate = true;
  itemVerify.saveButton = false;
}

itemVerify.segItemCharacteristicsOnRowClick = function () {
    if (itemVerify.isReadOnly) return;
  
 // alert(JSON.stringify(saveCurrentDate));
	var itemMaintenanceHistoryEntry = {};
	var itemMaintenanceHistoryRow;
	var itemCharacteristicEntry = {};
	var itemCharacteristicRow = {};

	//Indicates the currently selected row in single select or multi select modes in the SegmentedUI segItemCharacteristics.selectedRowIndex
	var selectedRowIndex = frmItemVerify.segItemCharacteristics.selectedRowIndex[1];//Récupère l'index de l'élement sélectionné du segment
	var selectedSectionIndex;
	if (selectedRowIndex < itemVerify.item.maintenanceHistory.length) {
		selectedSectionIndex = 0;
	} else {
		selectedSectionIndex = 1;
	}

	itemVerify.onDateEditConfirmClick = function () {
      
        var datePopup = popDefault.cln.date.split("/");;
      
      var dateProductionArray = frmItemVerify.detappTabPane.txtProductionDate.date.split("/");
      var d = new Date();
      var infDate = false;
      if(dateProductionArray[2] > datePopup[2] ||
         (dateProductionArray[2] == datePopup[2] && dateProductionArray[1] > datePopup[1] ||
         (dateProductionArray[2] == datePopup[2] && dateProductionArray[1] == datePopup[1]) && dateProductionArray[0] > datePopup[0])){
		popupModel.showPopError("La date doit être supérieure à la date de mise en service de l'appareil");
      }else if
        (d.getFullYear() < datePopup[2] ||
         (d.getFullYear() == datePopup[2] && d.getMonth()+1 < datePopup[1] ||
         (d.getFullYear() == datePopup[2] && d.getMonth()+1 == datePopup[1]) && d.getDate() < datePopup[0])){
		popupModel.showPopError("La date ne doit pas être supérieur à la date du jour");
      }
        else{
		if (selectedSectionIndex == 0) {
			if (itemMaintenanceHistoryEntry.taskLastExecutionDate != dateFunctions.toStringFormat(popDefault.cln.date)) { 
				var taskNextExecutionDateShift = dateFunctions.getDaysBetween(new Date(itemMaintenanceHistoryEntry.taskLastExecutionDate), new Date(dateFunctions.toStringFormat(popDefault.cln.date)));
				itemMaintenanceHistoryEntry.taskLastExecutionDate = dateFunctions.toStringFormat(popDefault.cln.date);
				if (!validationModel.isNull(itemMaintenanceHistoryEntry.taskNextExecutionDate)) {
					itemMaintenanceHistoryEntry.taskNextExecutionDate = dateFunctions.addDaysToDateString(itemMaintenanceHistoryEntry.taskNextExecutionDate, taskNextExecutionDateShift);
				}
				itemVerify.item.newMaintenanceHistory.push(itemMaintenanceHistoryEntry);
			}
			itemMaintenanceHistoryRow.lblItemCharacteristicValue = dateFunctions.YearFirstToDayFirst(dateFunctions.toStringFormat(popDefault.cln.date));
			frmItemVerify.segItemCharacteristics.setDataAt(itemMaintenanceHistoryRow, selectedRowIndex); 		
		// item characteristic row selected
		} else {
			if (itemCharacteristicEntry.charValue != dateFunctions.toStringFormat(popDefault.cln.date)) {
				itemCharacteristicEntry.charValue = dateFunctions.toStringFormat(popDefault.cln.date);
				itemVerify.item.newCharacteristics.push(itemCharacteristicEntry);
			}
			itemCharacteristicRow.lblItemCharacteristicValue = dateFunctions.toStringFormat(popDefault.cln.date);
			frmItemVerify.segItemCharacteristics.setDataAt(itemCharacteristicRow, selectedRowIndex);
		}
    }
	}
	
	//ComboBox Confirm Click
	itemVerify.onComboboxConfirmClick = function () {
		// item characteristic row selected
		var selectedValueFromCombobox = validationModel.isNull(popDefault.cbx.selectedKeyValue) ? '' : popDefault.cbx.selectedKeyValue[1];
		var selectedFromCombobox = validationModel.isNull(popDefault.cbx.selectedKeyValue) ? '' : popDefault.cbx.selectedKeyValue[0];
		if (itemCharacteristicEntry.isMandatory && selectedValueFromCombobox == '') {
			popupModel.showPopError("Cet attribut est obligatoire. Veuillez saisir une valeur valide.");
		} else {	
			if (itemCharacteristicEntry.charValue != selectedFromCombobox) {
				itemCharacteristicEntry.charValue = selectedFromCombobox;
				itemCharacteristicEntry.charUnit = (validationModel.isNull(itemCharacteristicEntry.charUnit) ? '' : itemCharacteristicEntry.charUnit);				
				itemVerify.item.newCharacteristics.push(itemCharacteristicEntry);
			}
			itemCharacteristicRow.lblItemCharacteristicValue = selectedValueFromCombobox;
			frmItemVerify.segItemCharacteristics.setDataAt(itemCharacteristicRow, selectedRowIndex);	
		}
	}	

	//TextEdit Confirm Click
	itemVerify.onTextEditConfirmClick = function () {
		// item characteristic row selected
		if (itemCharacteristicEntry.isMandatory && popDefault.txtUom.text == '') {
			popupModel.showPopError("Cet attribut est obligatoire. Veuillez saisir une valeur valide.");
		} else {
		
			var itemCharUnit = validationModel.isNull(popDefault.cbxUom.selectedKeyValue) ? '' : popDefault.cbxUom.selectedKeyValue[1];

			if (itemCharacteristicEntry.charValue != popDefault.txtUom.text ||
				itemCharacteristicEntry.charUnit != itemCharUnit) {
					// If all parameters were null, create a new characteristic 
					// instead of trying to update
					if (validationModel.isNull(itemCharacteristicEntry.charValue) &&
						validationModel.isNull(itemCharacteristicEntry.charUnit) &&
						validationModel.isNull(itemCharacteristicEntry.charPossibleUnits))
							itemCharacteristicEntry.isNew = true;
					itemCharacteristicEntry.charValue = popDefault.txtUom.text;
					itemCharacteristicEntry.charUnit = itemCharUnit;
					itemVerify.item.newCharacteristics.push(itemCharacteristicEntry);
			}
			itemCharacteristicRow.lblItemCharacteristicValueWithoutUnit = validationModel.isNull(popDefault.txtUom.text) ? '' : popDefault.txtUom.text;
			itemCharacteristicRow.lblItemCharacteristicUnit = itemCharUnit;
			itemCharacteristicRow.lblItemCharacteristicValue = itemCharacteristicRow.lblItemCharacteristicValueWithoutUnit.concat(' ').concat(itemCharUnit);
			frmItemVerify.segItemCharacteristics.setDataAt(itemCharacteristicRow, selectedRowIndex);
		}
	}	

	// maintenance history row selected
	if (selectedSectionIndex == 0) {
		itemMaintenanceHistoryRow = frmItemVerify.segItemCharacteristics.selectedItems[0];
		itemMaintenanceHistoryEntry = de.itgs.javascript.Object.clone(itemVerify.item.maintenanceHistory[selectedRowIndex]);
		var characteristicValue = validationModel.isNull(itemMaintenanceHistoryEntry.taskLastExecutionDate)?dateFunctions.javaDateToStringFormat(new Date()):dateFunctions.DayFirstToYearFirst(itemMaintenanceHistoryRow.lblItemCharacteristicValue);
          if(!validationModel.isNull(characteristicValue)){
			if (itemMaintenanceHistoryRow.imgEdit != "" && validationModel.isValidDate(characteristicValue)) {
				var popupConfig = [
					{confirm: true,
					 confirmCB: itemVerify.onDateEditConfirmClick,
					 cancel: true
                    },
					undefined,
					undefined,
					{lblCln: itemMaintenanceHistoryRow.lblItemCharacteristicName,
					 date: dateFunctions.toCalendarFormat(characteristicValue)}
				];
				popupModel.showPopDefault(popupConfig);
			}  
		}
	// item characteristic row selected
	} else {
		//On click of the button or on row click of the segment get the selected record using 
		//frm.seg.selectedItems[0]  and also get the selected recorrd Index frm.seg.selectedIndex[0]
		//Returns the data in the selected row of the segmentedUI.
		itemCharacteristicRow = frmItemVerify.segItemCharacteristics.selectedItems[0];
		itemCharacteristicEntry = de.itgs.javascript.Object.clone(itemVerify.item.characteristics[itemVerify.indexesTableOfSegment[selectedRowIndex-itemVerify.item.maintenanceHistory.length]]);
		if (itemCharacteristicRow.imgEdit != "") {
			var validDate = validationModel.isValidDate(itemCharacteristicRow.lblItemCharacteristicValue);			
			if (validDate) {//Date
				var popupConfig = [
					{confirm: true,
					 confirmCB: itemVerify.onDateEditConfirmClick,
					 cancel: true},
					undefined,
					undefined,
					{lblCln: itemCharacteristicRow.lblItemCharacteristicName,
					 date: dateFunctions.toCalendarFormat(itemCharacteristicRow.lblItemCharacteristicValue)}
				];
				popupModel.showPopDefault(popupConfig);
			} else {//ComboBox or TextEdit
				if (itemCharacteristicRow.rowType == "ComboBox") {//ComboBox		
					var cbxFieldCharacteristicsMasterData = [];
					var selectedKey = 0;
					itemCharacteristicEntry = itemVerify.item.characteristics[itemVerify.indexesTableOfSegment[selectedRowIndex-itemVerify.item.maintenanceHistory.length]];
					var articleCharacteristicValuesByCharacteristic = articleModel.findArticleCharacteristicValuesByCharacteristic(itemCharacteristicEntry.referenceCode);
					for (var i = 0; i < articleCharacteristicValuesByCharacteristic.length; i++) {
						cbxFieldCharacteristicsMasterData.push([articleCharacteristicValuesByCharacteristic[i].code, articleCharacteristicValuesByCharacteristic[i].name]);
						if (articleCharacteristicValuesByCharacteristic[i].name == itemCharacteristicRow.lblItemCharacteristicValue) {
							selectedKey = articleCharacteristicValuesByCharacteristic[i].code;								
						}
					}

					var popupConfig = [
						{confirm: true,
						 confirmCB: itemVerify.onComboboxConfirmClick,
						 cancel: true},
						 undefined,
						{lblCbx: itemCharacteristicRow.lblItemCharacteristicName,
						 masterData: cbxFieldCharacteristicsMasterData,
						 selectedKey: selectedKey}
					];
					popupModel.showPopDefault(popupConfig);
				} else {//TextEdit 
					var cbxFieldUnitsMasterData = [[0,'']];
					var selectedKey = 0;
					if (itemCharacteristicEntry.charPossibleUnits != "") {
						for (var i = 0; i < itemCharacteristicEntry.charPossibleUnits.split(',').length; i++) {
							cbxFieldUnitsMasterData.push([i+1, itemCharacteristicEntry.charPossibleUnits.split(',')[i]]);
							if (!validationModel.isNull(itemCharacteristicRow.lblItemCharacteristicUnit) && cbxFieldUnitsMasterData[i+1][1] == itemCharacteristicRow.lblItemCharacteristicUnit) {
								selectedKey = i+1;
							}
						}
					}
					
					var popupConfig = [
						{confirm: true,
						 confirmCB: itemVerify.onTextEditConfirmClick,
						 cancel: true},
						{lblText: itemCharacteristicRow.lblItemCharacteristicName,
						 txtText: itemCharacteristicRow.lblItemCharacteristicValueWithoutUnit,
						 hasUom: true,
						 masterData: cbxFieldUnitsMasterData,
						 selectedKey: selectedKey}
					];
					popupModel.showPopDefault(popupConfig);	
				}
			}
		}
	}	
};