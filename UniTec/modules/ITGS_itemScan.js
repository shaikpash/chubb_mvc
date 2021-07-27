itemScan = {
	sql: null,
	replacementScan : null, // flag for scanning replacement equipment, contains all concerned items for replacement process
    isReadOnly : false
};

itemScan.init = function(){
	var appMenu = [
		["itemScan.PARC", "Détail Parc", "building.png", itemScan.onBtnInventoryClick],
		["itemScan.SUMM", "Bilan", "book.png", onBookClick]
	];
	
	var limitedAppMenu = [
//		["itemScan.VALID", "Valider", "check.png", function(){itemScan.onSaveClick('N');}]
	];

	var installAppMenu = [
		["itemScan.BACK", "Retour", "left.png", itemScan.onReturnClick]
	];
  //Dhaval:Fix for app menu not working
function onBookClick(){
  frmWOSummary.show();
}
  //Dhaval:Invocation of custom app menu start
	otis.application.createAppMenu("itemScanAppMenu", appMenu, sknAppmenu, sknAppmenuF);
	otis.application.createAppMenu("limitedItemScanAppMenu", limitedAppMenu, sknAppmenu, sknAppmenuF);
	otis.application.createAppMenu("ItemScanInstallAppMenu", installAppMenu, sknAppmenu, sknAppmenuF);
  //End
}

itemScan.onBtnReturnClick = function () {
	itemScan.replacementScan = null;
	navigationModel.doReturn();
}

itemScan.preShow = function () {
	itemScan.isReadOnly = !workOrderModel.isOnSite(workOrder) || WOValidationSignature.isValid(workOrder) || (workOrder.statusCode == 70);
  
	if((workOrder.process != 'CHUBB') && (!itemScan.isReadOnly)) {
    	frmItemScan.vbxScanButton.isVisible = true;
      	frmItemScan.txtBarCode.setEnabled(true);
    }else{
    	frmItemScan.vbxScanButton.isVisible = false;
      	frmItemScan.txtBarCode.setEnabled(false);
    }
  
	frmItemScan.clientLabel.text = workOrder.getReference();
	frmItemScan.clientHB.backgroundColor = workOrder.color;
	frmItemScan.clientHB.focusSkin = workOrder.skin;

	if(validationModel.isNull(frmItemScan.txtBarCode.text)) {
		frmItemScan.txtBarCode.text = "";
    }  
    
	inventory.preIdentified = false;
	itemVerify.item = {};
	
	if(!validationModel.isNull(itemScan.replacementScan)) {
		var appMenu = (kony.application.getPreviousForm().id == 'frmArticleSalesTasks') ? "ItemScanInstallAppMenu" : "limitedItemScanAppMenu";
		otis.application.setCurrentAppMenu(appMenu);//Dhaval:Invocation of custom app menu
		frmItemScan.lblDescription.text = "Veuillez scanner le code barre de l'appareil de remplacement / complément";
	} else {
		otis.application.setCurrentAppMenu("itemScanAppMenu");//Dhaval:Invocation of custom app menu
		frmItemScan.lblDescription.text = "";
	}
  frmInventory.destroy();
}

itemScan.postShow = function () {
	if((workOrder.process != 'CHUBB') && (!itemScan.isReadOnly)) {
     /*kony.application.showLoadingScreen(null, "", 
			constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {  
			shouldShowLabelInBottom: "true", separatorHeight: 200, 
			progressIndicatorType : constants.PROGRESS_INDICATOR_TYPE_SMALL, 
			progressIndicatorColor : "Gray"} )*/
		itemScan.scanDevice();
    }
}

itemScan.onHide = function () {
	itemScanFunctions.stopScan();
}

itemScan.onDestroy = function () {
	itemScanFunctions.stopScan();
}

itemScan.onBtnInventoryClick = function () {
	if (!inventory.isLoading) {
		// KONY BUG: destroy form first otherwise segItems might not be rendered
		inventory.isLoading = true;
		frmInventory.destroy();
		frmInventory.show();
	}
}

itemScan.onReturnClick = function() {
	navigationModel.doReturn();
}

itemScan.scanDevice = function(){
    if (itemScan.isReadOnly) return;  
  
    itemScanFunctions.startScan(kony.application.getCurrentForm(), itemScan.onSaveClick);
}

// Called in form on Save click with isScanned = 'N' (manual entry)
// Called from scanner callback with isScanned = undefined -> 'O' (scanner)
itemScan.onSaveClick = function (isScanned) {
	// KONY BUG: destory form first otherwise segItems might not be rendered
	
	var barCode = frmItemScan.txtBarCode.text;

	if (barCode.length != 10) {
		popupModel.showPopError("Entrer un code-barre valide (10 caractères).");
		return;
	} else if (!validationModel.numberHasMaxDecimals(barCode,0)) {
		popupModel.showPopError("Code-barre non valide. Veuillez corriger avant de continuer.");
		return;
	}

	if (!validationModel.isNull(itemScan.replacementScan)) {
		// process identified : if exchange process, insert new item with scanned barcode
		var scannedItem = itemModel.findItemByBatchNumber(barCode, workOrder);
		if (!validationModel.isNull(scannedItem) && scannedItem.hasOwnProperty("batchNumber")) {
			popupModel.showPopError("Ce code-barre est déjà associé à l'appareil " + scannedItem.name);
			return;
		}
		else {
			var mustUpdate = (navigationModel.getPreviousForm() == 'frmArticleSalesTasks');
			var replaceObsolete = (!validationModel.isNull(catalogSearch.process) && catalogSearch.process == 'replaceObsolete');
			var isInReplacementProcess = (navigationModel.getPreviousForm() == 'frmTaskOverview' || navigationModel.getPreviousForm() == 'frmArticleSalesTasks' );
			itemScan.saveNewItem(barCode, mustUpdate, false, replaceObsolete, isInReplacementProcess);
		}
	}
	
	if (validationModel.isNull(isScanned)) {
		isScanned = 'O';
	};
	
	itemVerify.item = itemModel.findItemByBatchNumber(barCode, workOrder);
	if (validationModel.isNull(itemVerify.item) || !itemVerify.item.hasOwnProperty("batchNumber")) {
		popupModel.showPopError("Ce code-barre n'est associé à aucun appareil.");
		inventory.preIdentified = true;
		inventory.isScanned = (isScanned == 'O');
		frmInventory.show();
	} else {
		
		if(itemVerify.item.status == 'D') {
			var message = barCode + " : l'appareil "+ itemVerify.item.name + " a été sorti du parc. Souhaitez-vous le réintégrer dans le parc ?";
			popupModel.showPopError(message, itemScan.onActivateItemClick, undefined, true);
		} 
		else if (itemVerify.item.equipmentNumber != workOrder.equipmentNumber){
			if (!woShift.isAvailable(itemVerify.item))
				popupModel.showPopError("Cet appareil n'appartient pas à l'équipement du BT");
		} // we must verify if the item belongs to the work order contract
		else if (workOrder.DOC != itemVerify.item.DOCO || workOrder.LNID != itemVerify.item.LNID) {
			if (!woShift.isAvailable(itemVerify.item))
				popupModel.showPopError("Cet appareil n'appartient pas au contrat du BT");
		} 
		else if(itemVerify.item.type == 'D') {
			itemReplace.init(workOrder, barCode, itemVerify.item, isScanned);
		}
		else {
			itemVerify.item.isScanned = isScanned;
			taskModel.setTasksScannedFlagForItem(itemVerify.item, workOrder);		
			frmItemVerify.show();
		}
	}
}

itemScan.onActivateItemClick = function() {
	itemModel.activateItem(itemVerify.item, workOrder);
	itemScan.onSaveClick('N');
}

// future function to insert item with new barcode
itemScan.saveNewItem = function(batchNumber, updateRecommendations, createSpareParts, replaceObsolete, isInReplacementProcess) {
	databaseModel.openDBExchange('Enregistrement du nouvel appareil et mise à jour du parc...');
	if(validationModel.isNull(createSpareParts)) createSpareParts = false;

	// first : we retrieve all the different elements we need to update
	var currentItem = itemScan.replacementScan[0];
	var replacementArticle = itemScan.replacementScan[1];
	var origin = itemScan.replacementScan[3];
	var motive = itemScan.replacementScan[5];
	var tasksToCreate = itemScan.replacementScan[4];
	var replacementTask = validationModel.isNull(itemScan.replacementScan[6]) ? null : itemScan.replacementScan[6];
	var currentJavaDate = new Date();
	var currentStringDate = dateFunctions.javaDateToStringFormat(currentJavaDate);
	
	var replacementItem = {
		articleId : itemScan.replacementScan[2].articleId,
		location : (!validationModel.isNull(currentItem)) ? currentItem.location : replacementArticle.location,
		floor : (!validationModel.isNull(currentItem)) ? currentItem.floor : replacementArticle.floor,
		customerNumber : (!validationModel.isNull(currentItem)) ? currentItem.customerNumber : replacementArticle.customerNumber,
		placement : (!validationModel.isNull(currentItem)) ? currentItem.placement : replacementArticle.placement,
		batchNumber : batchNumber,
		status : 'A',
		FBUMSDJ : currentStringDate,
		productionDate : currentStringDate,
		N001 : 'NULL', // null as default : will be updated by JDE
      	statusReason : itemModel.getKYbyActivity(workOrder)
	};

	// start updates
	// first update : we "remove" the current item by changing its status
	// delete replacement recommendation related to the item if they exist
	if (!validationModel.isNull(currentItem)) {
		var recommendations = articleRecommendationModel.findRecommendationsByWorkOrder(
			workOrder,null,null,true,null,null,'Remplacement',currentItem,null,["'Created'"],null,null,true
		);
		for(var i = (recommendations.length - 1) ; i>= 0 ; i--) articleRecommendationModel.deleteRecommendation(recommendations[i]);
		itemModel.deactivateItem(currentItem, workOrder, motive, replaceObsolete, isInReplacementProcess);
	}
	// second update : we add the new item to the customer base
	var noTask = validationModel.isNull(replacementTask);
	var createCheckTask = ((origin != 'sale' && !noTask && replacementTask.DL02 != 'R') || replaceObsolete);
	var customer = customerModel.findCustomerByWorkOrder(workOrder);
	var newItem = itemModel.createItemInCustomerInstalledBase(replacementItem,workOrder,customer, createCheckTask);
	if (!validationModel.isNull(newItem.id)) {
		var items = itemModel.findItemsByWhereClauseAndSortOrder(" and cib.id = " + newItem.id);
		if (items.length > 0) newItem = items[0];
	}

	// third update : we create the SpareParts and BTCO data for the new item
	if (validationModel.isNull(replacementArticle.salesReason)) replacementArticle.salesReason = 'S';
	if(!replaceObsolete) sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, currentItem, [replacementArticle], replacementTask, replacementArticle.replacementReason, origin, (workOrder.process == 'CHUBB'), null, true);

	// fourth update : specific tasks must sometimes be created
	if (!validationModel.isNull(tasksToCreate)) {
		for (var i = 0; i < tasksToCreate.length; i++) {
			var task = taskModel.createTaskByItemAndWorkOrder(newItem, workOrder, 'nonPlanned', null, tasksToCreate[i]);
			task = taskModel.findTaskById(task.id);
			 
			// Create the entries for this task in SpareParts - component depth: 1
			if((workOrder.process != 'CHUBB' || createSpareParts) && !noTask) {
				var taskComponents = articleModel.findArticleComponentsByTasks([task], 1);
				sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, newItem, taskComponents, task, replacementArticle.replacementReason, origin, false, replacementTask);
			}
		}
	}

	// fifth update : complementary tasks, except for BSEQ 4
	if (!validationModel.isNull(replacementArticle.tasks)) {
		for (var i = 0; i < replacementArticle.tasks.length; i++) {
			var nextTask = replacementArticle.tasks[i];
			if (nextTask.subType != 'BSEQ4') {
				nextTask.quantityDelivered = replacementArticle.tasks[i].quantity;

				for (var l = 0; l < nextTask.quantityDelivered; l++) {
					// Create Task in BTDT table
					var targetItem = (nextTask.type == 'TASK' && nextTask.subType == 'BSEQ3') ? currentItem : newItem;
					var task = taskModel.createTaskByItemAndWorkOrder(targetItem, workOrder, 'nonPlanned', undefined, nextTask.usualCode);
					task = taskModel.findTaskById(task.id);
					task.discount = replacementArticle.discount;
					
					// Create the entries for this task in SpareParts - component depth: 1
					var taskComponents = articleModel.findArticleComponentsByTasks([task], 1);
					sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, targetItem, taskComponents, task, replacementArticle.replacementReason, origin, (workOrder.process == 'CHUBB'), replacementTask);
				}
			}
		}
		
		// Update the recommendation items
		articleRecommendationModel.updateRecommendationItems(replacementArticle.tasks);
	}

	// update the recommendation tables if applicable
	if (updateRecommendations == true) {
		replacementArticle.cibid = newItem.id;
		replacementArticle.status = 'Delivered';
		replacementArticle.quantityDelivered = replacementArticle.quantity;
	 	articleRecommendationModel.updateRecommendations([replacementArticle]); 
	}

	var itemComponent  = itemCrossModel.findCrossItemsAndComponent(newItem.id); 
	var customer       = customerModel.findCustomerByWorkOrder(workOrder);
	for (var dc = 0; dc < itemComponent.length; dc++) {
		var comp = itemComponent[dc];
		for (var qt = 0; qt < comp.quantity; qt++) {
			var itemToCreate = {}
			itemToCreate.jdeId         = 'NULL';
			itemToCreate.batchNumber   = 'NULL';
			itemToCreate.articleId     = comp.componentID;
			itemToCreate.status       = 'A';
			itemToCreate.productionDate  = currentStringDate;
			itemToCreate.QTY         = 'NULL';
			itemToCreate.FBUMSDJ      = currentStringDate;
			itemToCreate.Y56DATEP    = 'NULL';
			itemToCreate.ZE01     = 'NULL';
			itemToCreate.ZE02     = 'NULL';
			itemToCreate.ZE03     = 'NULL';
			itemToCreate.U74SCDV    = 'NULL';
			itemToCreate.productionDate  = currentStringDate;
			itemToCreate.placement   = (!validationModel.isNull(comp.placement)    && comp.placement      != '') ? comp.placement   : 'NULL';
			itemToCreate.floor     = (!validationModel.isNull(comp.floor)        && comp.floor          != '') ? comp.floor   : 'NULL';
			itemToCreate.customerNumber  = (!validationModel.isNull(comp.customerNumber)  && comp.customerNumber != '') ? comp.customerNumber  : 'NULL';
			itemToCreate.location   = (!validationModel.isNull(comp.location)     && comp.location       != '') ? comp.location   : 'NULL';
			itemToCreate.statusReason  = comp.statusReason;
			itemToCreate.statusReasonId  = 'NULL';
	
			var newItem = itemModel.createItemInCustomerInstalledBase(itemToCreate,workOrder,customer, (origin != 'sale'));
		}  
	}

	// end of process : return to normal process
	itemScan.replacementScan = null;
	databaseModel.closeDBExchange();
	return newItem;
}
