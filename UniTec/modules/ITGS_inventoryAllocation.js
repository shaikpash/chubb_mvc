inventoryAllocation = {
	areSelectedAll: false,  
	pendingArticleChange: false,
	pendingArticleReplaceRowIndex: null,
	pendingArticleReplaceQuantity: 0,
	isReadOnly : false
};

inventoryAllocation.pendingArticleReplace = function(object) {
	if (!validationModel.isNull(inventoryAllocation.pendingArticleReplaceRowIndex) && (inventoryAllocation.pendingArticleReplaceQuantity > 0)) return true;
	else return false; 
}

inventoryAllocation.session = {
	id: null,
	start: function () {
		if (this.id == null) this.id = login.user.AN8 + "_" + dateFunctions.javaDateToStringFormat(new Date(), true);
	},
	stop: function () {
		this.id = null;
	}
};

inventoryAllocation.setMenus = function(){
  var appMenu = [
		["inventoryAllocation.BACK", "Retour", "left.png", onBackClick],
		["inventoryAllocation.VALID", "Retour parc", "building.png", onValidateClick],
    	["inventoryAllocation.SUMM", "Bilan", "book.png", onBookClick]
	];
  if(workOrder.process == 'CHUBB' && workOrder.typeCode == 'V' && workOrderModel.isOnSite(workOrder)){
    appMenu.push(["inventoryAllocation.TASK", "Tâches", "task.png", onTaskClick]);
    
    woSummary.isReadOnly = !workOrderModel.isOnSite(workOrder);
  }else if(workOrder.process != 'CHUBB' && workOrderModel.isOnSite(workOrder) && !validationModel.isNull(workOrder.equipmentNumber) && (workOrder.typeCode == 'V' ||  workOrder.typeCode == 'I' || workOrder.typeCode == 'P')){
      appMenu.push(["inventoryAllocation.SCAN", "scanner", "barcode.png", onItmItemScanClick]);
    }
  
  initFormProcess("frmInventoryAllocation", frmInventoryAllocation);//Dhaval:Design issue #18 for slide
	otis.application.createAppMenu("inventoryAllocationAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
  
  	//Dhaval:Fix for app menu not working start
	function onBackClick(){
      navigationModel.doReturn();
    }
  	function onValidateClick(){
      inventoryAllocation.onBtnValidateClick();
    }
  function onTaskClick(){
    summaryService.activeTab = true;
    frmSummaryServiceChubb.show();
  }
  function onItmItemScanClick(){
      frmItemScan.show();
	}
  function onBookClick(){
    frmWOSummary.show();
  }
}

inventoryAllocation.init = function(){
	
  //End
  inventoryAllocation.setMenus();
  	
	
	inventoryAllocation.refreshAllocatedItems = function(location, floor) {
		// Find all items related to the current contract
		var whereClause =
		//	" and cib.DOCO = " + workOrder.DOC + 
    		" and cib.DOCO = '" + workOrder.DOC + "'"+ 
			" and cib.LNID = '" + workOrder.LNID +"'"+ //Dhaval:Added single quotes as LNID can be blank
			" and cib.NUMB = " + workOrder.equipmentNumber + 
			" and cib.ITM = i.ITM and i.PRP0 in ('D','G','V') and cib.Y56INDLA in ('A','I') " +
			(!validationModel.isNull(location) ? " and cib.Y56EMPLA = '" + location + "' " : "and coalesce(cib.Y56EMPLA, 'NULL') != 'NULL'") +
			(!validationModel.isNull(floor) ? " and cib.Y56ETAG = '" + floor + "' " : "and coalesce(cib.Y56ETAG, 'NULL') != 'NULL'");
		var groupByTopology = (!validationModel.isNull(floor) && !validationModel.isNull(location));
	
		inventoryAllocation.allocatedItems = itemModel.findItemsByWhereClauseAndSortOrder(
			whereClause, null, null, null, !groupByTopology, null, null, null, groupByTopology, null, 50, inventoryAllocation.allocatedItemsOffset*50);
		
		// If we are at the start, get the total number of results so we can update the numbers in the labels up/down
		if (inventoryAllocation.allocatedItemsOffset == 0) {
			inventoryAllocation.allocatedItemQuantity = parseInt(itemModel.findItemsByWhereClauseAndSortOrder(
				whereClause, null, null, null, !groupByTopology, null, null, null, groupByTopology, null, null, null, true)[0].rowCount,10);
		}	
	};
	
	inventoryAllocation.refreshNonAllocatedItems = function() {
		var whereClause =
	//		" and cib.DOCO = " + workOrder.DOC + 
			" and cib.DOCO = '" + workOrder.DOC + "'"+ 
			" and cib.LNID = '" + workOrder.LNID +"'"+ //Dhaval:Added single quotes as LNID can be blank
			" and cib.NUMB = " + workOrder.equipmentNumber + 
			" and cib.ITM = i.ITM and i.PRP0 in ('D','G','V') and cib.Y56INDLA in ('A','I') " +
			" and (COALESCE(cib.Y56EMPLA,'NULL') in ('NULL','') " +
			" or COALESCE(cib.Y56ETAG,'NULL') in ('NULL','')) ";
		inventoryAllocation.nonAllocatedItems = itemModel.findItemsByWhereClauseAndSortOrder(
			whereClause, null, null, null, null, null, null, null, true, null, 50, inventoryAllocation.nonAllocatedItemsOffset*50);
		
		// If we are at the start, get the total number of results so we can update the numbers in the labels up/down
		if (inventoryAllocation.nonAllocatedItemsOffset == 0) {
			inventoryAllocation.nonAllocatedItemQuantity = parseInt(itemModel.findItemsByWhereClauseAndSortOrder(	
				whereClause, null, null, null, null, null, null, null, true, null, null, null, true)[0].rowCount,10);
		}	
	};
}

inventoryAllocation.getAllNonAllocatedItems = function() {
    var whereClause =
        //		" and cib.DOCO = " + workOrder.DOC + 
        " and cib.DOCO = '" + workOrder.DOC + "'"+ 
        " and cib.LNID = '" + workOrder.LNID +"'"+ //Dhaval:Added single quotes as LNID can be blank
        " and cib.NUMB = " + workOrder.equipmentNumber + 
        " and cib.ITM = i.ITM and i.PRP0 in ('D','G','V') and cib.Y56INDLA in ('A','I') " +
        " and (COALESCE(cib.Y56EMPLA,'NULL') in ('NULL','') " +
        " or COALESCE(cib.Y56ETAG,'NULL') in ('NULL','')) ";
    inventoryAllocation.allNonAllocatedItems = itemModel.findItemsByWhereClauseAndSortOrder(
      whereClause, null, null, null, null, null, null, null, true, null, inventoryAllocation.nonAllocatedItemQuantity, 0);
};  

inventoryAllocation.onBtnArticleChangeClick = function () {
	inventoryAllocation.pendingArticleChange = true;
	popTopItem.dismiss();

	catalogSearch.resetFullSearchFields();  
	catalogSearch.selectionBehavior = 'single';
	catalogSearch.catalogType = "maintenance";
	frmCatalogSearch.show();
}

inventoryAllocation.preShow = function () {
    inventoryAllocation.isReadOnly = WOValidationSignature.isValid(workOrder) || (workOrder.statusCode == 70);
  
    inventoryAllocation.setMenus();
	otis.application.setCurrentAppMenu("inventoryAllocationAppMenu");//Dhaval:Invocation of custom app menu
	
	frmInventoryAllocation.tabInventoryAllocation.containerHeight = 115;													//Arati:Changed code for JIRA UI-84
  	frmInventoryAllocation.tabInventoryAllocation.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;	//Arati:Changed code for JIRA UI-84
  
  	frmInventoryAllocation.hbxReference.lblReference.text = workOrder.getReference();
	frmInventoryAllocation.hbxReference.backgroundColor = workOrder.color;
	frmInventoryAllocation.hbxReference.focusSkin = workOrder.skin;
	
	frmInventoryAllocation.hbxTopReference.lblTopReference.text = workOrder.getReference();
	frmInventoryAllocation.hbxTopReference.backgroundColor = workOrder.color;
	frmInventoryAllocation.hbxTopReference.focusSkin = workOrder.skin;
	
	frmInventoryAllocation.segAllocatedItems.containerHeight = 60;
	frmInventoryAllocation.segNonAllocatedItems.containerHeight = 40;

  	if(inventoryAllocation.isReadOnly) {
		frmInventoryAllocation.vbxItemAdd.setEnabled(false);      
		frmInventoryAllocation.btnSelectAll.setEnabled(false);
		frmInventoryAllocation.segNonAllocatedItems.setEnabled(false);
		frmInventoryAllocation.btnRemove.setEnabled(false);      
		frmInventoryAllocation.btnAllocate.setEnabled(false);      
    } else {
		frmInventoryAllocation.vbxItemAdd.setEnabled(true);      
		frmInventoryAllocation.btnSelectAll.setEnabled(true);      
		frmInventoryAllocation.segNonAllocatedItems.setEnabled(true);
		frmInventoryAllocation.btnRemove.setEnabled(true);      
		frmInventoryAllocation.btnAllocate.setEnabled(true);      
    }
  
	// Add the chosen article if returning here from the catalogue
	if (catalog.selectedItemCodes.length > 0) {
		var article = articleModel.findArticleByUsualCode(catalog.selectedItemCodes[0]);
      
		// Article code on one item is being changed via the catalogue
		if (inventoryAllocation.pendingArticleChange) {
			popTopItem.lblCode.text = article.usualCode;
			popTopItem.lblName.text = article.name;
			popTopItem.show();
			
			inventoryAllocation.pendingArticleChange = false;
		// A new item is being added from the catalogue
		} else {
			inventoryAllocation.onQuantityAddConfirm = function () {
				popTopItem.dismiss();
				var updateMsg = 'Intégration des nouveaux appareils au parc...';
				databaseModel.openDBExchange(updateMsg);
              
				var chosenQty = 0;
				var	chosenPlacement = 'NULL';
				var	chosenZone = 'NULL';

                if(!inventoryAllocation.pendingArticleReplace()) {
                  	chosenQty = (popTopItem.txtQuantity.text.length > 0 && parseInt(popTopItem.txtQuantity.text,10) > 0) ? parseInt(popTopItem.txtQuantity.text,10) : chosenQty;
					chosenPlacement = (popTopItem.txtPlacement.text.length > 0) ? popTopItem.txtPlacement.text : chosenPlacement;
					chosenZone = (popTopItem.txtZone.text.length > 0) ? popTopItem.txtZone.text : chosenZone;
                } else { 
                  	chosenQty = inventoryAllocation.pendingArticleReplaceQuantity;
                }
              
				if (chosenQty > 0) {
					var qty = chosenQty;
					var treatedQty = 0;
					var nextBatchQty = qty;
					var batchLimitSize = 200;
					
					var template = {
						articleId: article.articleId,
						placement: chosenPlacement,
						customerNumber: chosenZone
					};
					
					while(qty > 0) {
						if(qty > batchLimitSize) nextBatchQty = batchLimitSize;
						else nextBatchQty = qty;
						
						treatedQty += nextBatchQty;					
						itemModel.createItemsInBase(template, workOrder, nextBatchQty, true);
						qty -= nextBatchQty;
					}

					inventoryAllocation.nonAllocatedItemsOffset = 0;
					inventoryAllocation.onTabClick(1);
				}
          
				databaseModel.closeDBExchange();
			}
			
			// A new item is being added from the catalogue, and will not replace and existing item
            if(!inventoryAllocation.pendingArticleReplace()) {
                popTopItem.lblQuestion.text = 'Veuillez indiquer la quantité et les caractéristiques des articles';
                popTopItem.txtQuantity.text = '1';
                popTopItem.txtPlacement.text = '';
                popTopItem.txtZone.text = '';
                popTopItem.lblCode.text = article.usualCode;
                popTopItem.lblName.text = (article.name.trim().length > 17) ? article.name.trim().substring(0,15) + '..' : article.name.trim();
                popTopItem.btnConfirm.onClick = inventoryAllocation.onQuantityAddConfirm;
                popTopItem.btnCancel.onClick = function () { popTopItem.dismiss(); };
                popTopItem.setContext({"widget": kony.application.getCurrentForm(), "anchor": "top", "sizetoanchorwidth": true});
                popTopItem.show();
              
			// Else a new item is being added from the catalogue, and will replace and existing item
            // In the replacement scenario we don't need to show a popup to confirm the addition/creation
            } else {
                inventoryAllocation.onQuantityAddConfirm();
                inventoryAllocation.pendingArticleReplaceQuantity = 0;
				inventoryAllocation.pendingArticleReplaceRowIndex = null;             
            }
          
		}
	// Else, if catalogue was accessed, but return button was clicked
	} else if (inventoryAllocation.pendingArticleChange) {
		popTopItem.show();
		
		inventoryAllocation.pendingArticleChange = false;
	// Else, set the initial state for the screen
	} else {
		frmInventoryAllocation.segNonAllocatedItems.removeAll();
		frmInventoryAllocation.segAllocatedItems.removeAll();
		frmInventoryAllocation.lblInventory.text = "[Tous bâtiments] > [Toutes étages]";
		inventoryAllocation.allocatedItemsOffset = 0;
		inventoryAllocation.nonAllocatedItemsOffset = 0;
		inventoryAllocation.refreshAllocatedItems();
		inventoryAllocation.refreshNonAllocatedItems();
		inventoryAllocation.onTabClick(1, false);
	
		// Load the workOrder topology
		inventoryAllocation.topology = topologyModel.findTopologyByWorkOrder(workOrder);
		
		// Populate the location dropdown
		var cbxLocationMasterData = [];
		for (var i = 0; i < inventoryAllocation.topology.locations.length; i ++) {
			var location = inventoryAllocation.topology.locations[i];
			cbxLocationMasterData.push([location.name,location.name]);
		}
		frmInventoryAllocation.cbxLocation.masterData = cbxLocationMasterData;
		frmInventoryAllocation.cbxLocation.selectedKey = null;
		frmInventoryAllocation.cbxFloor.masterData = [];
		frmInventoryAllocation.cbxFloor.selectedKey = null;
		frmInventoryAllocation.hbxFloor.isVisible = false;
	}
}

inventoryAllocation.onCbxLocationSelection = function (location) {
	// Find the selected location
	for (var i = 0; i < inventoryAllocation.topology.locations.length; i ++) {
		var l_location = inventoryAllocation.topology.locations[i];
		if (l_location.name == location) {
			// Populate the floor dropdown
			var cbxFloorMasterData = [];
			for (var j = 0; j < l_location.floors.length; j ++) {
				var l_floor = l_location.floors[j];
				cbxFloorMasterData.push([l_floor.name,l_floor.name]);
			}
			frmInventoryAllocation.cbxFloor.masterData = cbxFloorMasterData;
			frmInventoryAllocation.cbxFloor.selectedKey = null;
			frmInventoryAllocation.hbxFloor.isVisible = true;
			break;
		}
	}

	frmInventoryAllocation.lblInventory.text = location + " > [Toutes étages]";
	inventoryAllocation.allocatedItemsOffset = 0;
}

inventoryAllocation.onCbxFloorSelection = function (floor) {
	var location = frmInventoryAllocation.cbxLocation.selectedKey;
	
	frmInventoryAllocation.lblInventory.text = location + " > " + floor;
	inventoryAllocation.allocatedItemsOffset = 0;
}

inventoryAllocation.onBtnEditClick = function (rowIndex) {
	if (inventoryAllocation.isReadOnly) return;
  
	var item = inventoryAllocation.nonAllocatedItems[rowIndex];
	var rowItem = frmInventoryAllocation.segNonAllocatedItems.data[rowIndex];
	
	inventoryAllocation.onBtnEditClickCB = function () {
		if (popDefault.txt.text.length > 0 && parseInt(popDefault.txt.text,10) > 0) {
			var allocationQuantity  = parseInt(popDefault.txt.text,10);
			item.allocationQuantity = (allocationQuantity > item.quantity) ? item.quantity : allocationQuantity;
			
            //Pratik : fix for issue no 62
            var OriginalSelectIndices=frmInventoryAllocation.tabInventoryAllocation.segNonAllocatedItems.selectedRowIndices;
			// Refresh the row
			rowItem.lblQuantity = item.allocationQuantity;
			rowItem.lblTotal = " / " + item.quantity;
			frmInventoryAllocation.segNonAllocatedItems.setDataAt(rowItem, rowIndex);
            frmInventoryAllocation.tabInventoryAllocation.segNonAllocatedItems.selectedRowIndices=OriginalSelectIndices;
		} else {
			inventoryAllocation.onSegNonAllocatedItemsRowClick(rowIndex, false);
		}
	}

	var popupConfig = [
		{
			confirm: true,
			confirmCB: inventoryAllocation.onBtnEditClickCB,
			cancel: true
		},
		{
			lblText: 'Veuillez indiquer la quantité à affecter\n(max. ' + item.quantity + ')',
			txtText: rowItem.lblQuantity,
			maxTxtLength: 4,
			isNumeric: true
		}
	];
	popupModel.showPopDefault(popupConfig);
}

inventoryAllocation.onBtnReplaceClick = function(rowIndex) {
	if (inventoryAllocation.isReadOnly) return;
  
	var item = inventoryAllocation.nonAllocatedItems[rowIndex];
	var rowItem = frmInventoryAllocation.segNonAllocatedItems.data[rowIndex];

	inventoryAllocation.onBtnReplaceClickCB = function () {
      
        function onSelectedCatalogItem(itemCodes) {
            function retrieveItemCB(res) {
                if(!validationModel.isNull(res) && res.length > 0) {
                    inventoryAllocation.onDeactivateItemsClick();
                } 
                navigationModel.doReturn(2);
            }

			//When back from the advanced catalog, full seach must be disabled
			catalogSearch.resetFullSearchFields();          
          
            var sql =  " select description1 name, description1 lblRowItem, " +
                " usualcode usualCode, ITM articleId, measurementunit unitOfMeasureCode " +
                " from item where usualcode = '" + itemCodes[0] + "' ";

            executeSql(sql, retrieveItemCB, callBackModel.sqlErrorCB);
        }

		if (popDefault.txt.text.length > 0 && parseInt(popDefault.txt.text,10) > 0) {
            inventoryAllocation.pendingArticleReplaceRowIndex = rowIndex;
            inventoryAllocation.pendingArticleReplaceQuantity = parseInt(popDefault.txt.text,10);
          
			catalogSearch.resetFullSearchFields();
            catalogSearch.catalogType = "maintenance";
            catalogSearch.selectionBehavior = 'single';
            var sql = " and Item.usualcode = '" + item.usualCode + "' ";
          
            catalogSearch.isFullSearch = true;
            catalogSearch.articleCategories = articleModel.findArticleCategories(sql);
            catalogSearch.srcCategory = catalogSearch.articleCategories[0];
            catalogSearch.articleFamilies = articleModel.findArticleFamiliesByCategory(catalogSearch.srcCategory, sql);
            catalogSearch.srcFamily = catalogSearch.articleFamilies[0];
            catalogSearch.articleSubFamilies = articleModel.findArticleSubFamiliesByCategoryAndFamily(catalogSearch.srcCategory, catalogSearch.srcFamily, sql);
            catalogSearch.articleCharacteristics = articleModel.findArticleCharacteristicsByCategoryAndFamily(catalogSearch.articleCategories, catalogSearch.articleFamilies, catalogSearch.articleSubFamilies);
            catalog.callback = onSelectedCatalogItem;
            frmCatalogSearch.show();
        }      
    };  

	var popupConfig = [
		{
			confirm: true,
			confirmCB: inventoryAllocation.onBtnReplaceClickCB,
			cancel: true
		},
		{
			lblText: 'Veuillez indiquer la quantité à remplacer\n(max. ' + item.quantity + ')',
			txtText: rowItem.lblQuantity,
			maxTxtLength: 4,
			isNumeric: true
		}
	];
	popupModel.showPopDefault(popupConfig);
};

inventoryAllocation.onSegNonAllocatedItemsRowClick = function (rowIndex, isSelected) {
	if (inventoryAllocation.isReadOnly) return;
  
	var item = inventoryAllocation.nonAllocatedItems[rowIndex];
	var rowItem = frmInventoryAllocation.segNonAllocatedItems.data[rowIndex];
  	//Pratik: fix for issue no 62
	var OriginalSelectIndices=frmInventoryAllocation.tabInventoryAllocation.segNonAllocatedItems.selectedRowIndices;
  
	//rowItem.vbxEdit.isVisible =  !inventoryAllocation.areSelectedAll;
	rowItem.vbxReplace.isVisible =  !inventoryAllocation.areSelectedAll;
  
    // The row check box has been checked
	if (isSelected) {
		if (validationModel.isNull(rowItem.lblTotal) || rowItem.lblTotal.trim().length == 0) {
			item.allocationQuantity = item.quantity;
			rowItem.lblTotal = " / " + item.quantity;     	
			frmInventoryAllocation.segNonAllocatedItems.setDataAt(rowItem, rowIndex);
          	frmInventoryAllocation.tabInventoryAllocation.segNonAllocatedItems.selectedRowIndices=OriginalSelectIndices;
		}
      
    // The row check box has been unchecked
	} else {
      
        // If "Tout sélectionner" check box is already checked,
        // Then uncheck only the current rowIndex heck box, by toggling "Tout sélectionner" check box on rowIndex heck box
      	if(inventoryAllocation.areSelectedAll) {
	      	inventoryAllocation.onSelectAllClick(rowIndex)
        // If "Tout sélectionner" check box is not already checked,
        // Then uncheck only the current rowIndex heck box
        } else {
            var selectedRowIndices = de.itgs.javascript.Object.clone(frmInventoryAllocation.segNonAllocatedItems.selectedRowIndices);
            item.allocationQuantity = null;
            rowItem.lblQuantity = item.quantity;
            rowItem.lblTotal = " ";
            frmInventoryAllocation.segNonAllocatedItems.setDataAt(rowItem, rowIndex);

            if (!validationModel.isNull(selectedRowIndices) && selectedRowIndices.length > 0) {
                var selectedRowIndex = selectedRowIndices[0][1].indexOf(rowIndex);
                if (selectedRowIndex > -1) {
                    selectedRowIndices[0][1].splice(selectedRowIndex,1);
                }
                frmInventoryAllocation.segNonAllocatedItems.selectedRowIndices = selectedRowIndices;
            }          
        }
	}
}

inventoryAllocation.onBtnRemoveClick = function (rowIndex) {
//	var item = inventoryAllocation.nonAllocatedItems[rowIndex];
//	var rowItem = frmInventoryAllocation.segNonAllocatedItems.data[rowIndex];
//	
//	inventoryAllocation.onBtnRemoveClickCB = function () {
//		var quantityForDeletion  = parseInt(popDefault.txt.text,10);
//		quantityForDeletion = (quantityForDeletion > item.quantity) ? item.quantity : quantityForDeletion;
//		var itemsToRemove = item.itemIds.splice((item.itemIds.length - quantityForDeletion), quantityForDeletion);
//		itemModel.deactivateBase(itemsToRemove, workOrder.doco);
//		
//		// Refresh the row
//		if (item.quantity == quantityForDeletion) {
//			frmInventoryAllocation.segNonAllocatedItems.removeAt(rowIndex);
//			inventoryAllocation.nonAllocatedItems.splice(rowIndex, 1);
//		} else {
//			item.quantity = item.quantity - quantityForDeletion;
//			item.allocationQuantity = (!validationModel.isNull(item.allocationQuantity) && item.allocationQuantity > item.quantity) 
//				? item.quantity 
//				: item.allocationQuantity;
//			
//			rowItem.lblQuantity = (!validationModel.isNull(item.allocationQuantity)) ? item.allocationQuantity : item.quantity;
//			rowItem.lblTotal = (!validationModel.isNull(item.allocationQuantity)) ? " / " + item.quantity : " ";
//			frmInventoryAllocation.segNonAllocatedItems.setDataAt(rowItem, rowIndex);	
//		}
//	}
//
//	var popupConfig = [
//		{
//			confirm: true,
//			confirmCB: inventoryAllocation.onBtnRemoveClickCB,
//			cancel: true
//		},
//		{
//			lblText: 'Veuillez indiquer la quantité à supprimer\n(max. ' + item.quantity + ')',
//			txtText: rowItem.lblQuantity,
//			maxTxtLength: 4,
//			isNumeric: true
//		}
//	];
//	popupModel.showPopDefault(popupConfig);
}

inventoryAllocation.onBtnItemAddClick = function () {
	if (inventoryAllocation.isReadOnly) return;
  
	catalogSearch.resetFullSearchFields();
	catalogSearch.selectionBehavior = 'single';
	catalogSearch.catalogType = "maintenance";
	frmCatalogSearch.show();
}

inventoryAllocation.onBtnSaveClick = function () {
	if (inventoryAllocation.isReadOnly) return;
  
	if (frmInventoryAllocation.cbxLocation.selectedKey == null || frmInventoryAllocation.cbxFloor.selectedKey == null) {
		popupModel.showPopError("Veuillez choisir un bâtiment et un étage où affecter le matériel avant de continuer.");
	} else {
		var rowIndices = (frmInventoryAllocation.segNonAllocatedItems.selectedRowIndices == null) 
			? [] 
			: frmInventoryAllocation.segNonAllocatedItems.selectedRowIndices[0][1];

		inventoryAllocation.onBtnSaveClickCB = function () {
			var updateMsg = 	'Affectation des appareils au bâtiment ' + 
								frmInventoryAllocation.cbxLocation.selectedKey + 
								', étage ' 
								+ frmInventoryAllocation.cbxFloor.selectedKey +
								' en cours...';
			databaseModel.openDBExchange(updateMsg);
			var itemsToAllocate = new Array();
          
            // Update the topology of all the itemIds
            if(inventoryAllocation.areSelectedAll) {
				inventoryAllocation.areSelectedAll = false; 
				frmInventoryAllocation.btnSelectAll.skin = 'sknBtnSelectNon';
                frmInventoryAllocation.btnSelectAll.focusSkin = 'sknBtnSelectNon';
				inventoryAllocation.getAllNonAllocatedItems();              
              
                for (var i = 0; i < inventoryAllocation.allNonAllocatedItems.length; i ++) {
                    var item = inventoryAllocation.allNonAllocatedItems[i];
                    var selection = item.itemIds;
                    itemsToAllocate = itemsToAllocate.concat(selection);
                }
            // Update the topology of the first x selected itemIds 
            } else {
                for (var i = 0; i < rowIndices.length; i ++) {
                    var item = inventoryAllocation.nonAllocatedItems[rowIndices[i]];
                    var selection = item.itemIds.slice(0, item.allocationQuantity);
                    itemsToAllocate = itemsToAllocate.concat(selection);
                }
            }
          
			itemModel.updateItemsLocation(itemsToAllocate, frmInventoryAllocation.cbxLocation.selectedKey, frmInventoryAllocation.cbxFloor.selectedKey);
          
			popTopAllocation.dismiss();
			inventoryAllocation.allocatedItemsOffset = 0;
			inventoryAllocation.onTabClick(0);
			databaseModel.closeDBExchange();
		}	
		
		if (rowIndices.length > 0) {
			// Populate the allocation summary popup
			var	segAllocatedItemsMasterData = [];
            if(!inventoryAllocation.areSelectedAll) {
              for (var i = 0 ; i < rowIndices.length ; i ++) {
                  var item = inventoryAllocation.nonAllocatedItems[rowIndices[i]];
                  var rowItem= {};
                  rowItem.lblQuantity = item.allocationQuantity;
                  rowItem.lblCode = item.usualCode;
                  rowItem.lblName = putToLine(item.name.trim(), 30);		
                  rowItem.lblPlacement = (validationModel.isNull(item.placement) || item.placement.length == 0) ? ' ' :  item.placement;
                  rowItem.lblZ = "Z";
                  rowItem.lblZone = (validationModel.isNull(item.zone) || item.zone.length == 0) ? ' ' :  item.zone;
                  segAllocatedItemsMasterData.push(rowItem);
              }
            }
          
			popTopAllocation.segAllocatedItems.setData(segAllocatedItemsMasterData);
			popTopAllocation.headers[0].lblTitle.text = "Veuillez confirmer l'affectation" + ((inventoryAllocation.areSelectedAll) ? " de tous les articles du parc." : " des articles ci-dessous.");
			popTopAllocation.footers[0].btnConfirm.onClick = inventoryAllocation.onBtnSaveClickCB;
			popTopAllocation.footers[0].btnCancel.onClick = function () { popTopAllocation.dismiss(); };
			var containerHeight = 20 + Math.floor(8.5 * segAllocatedItemsMasterData.length);
			popTopAllocation.containerHeight = (containerHeight > 80) ? 80 : containerHeight;
			popTopAllocation.setContext({"widget": kony.application.getCurrentForm(), "anchor": "top", "sizetoanchorwidth": true});
			popTopAllocation.show();
		}
		else {
			popupModel.showPopError("Veuillez sélectionner au moins 1 appareil à affecter au bâtiment et à l'étage choisis.");
		}
	}
}

inventoryAllocation.onBtnValidateClick = function() {
	
	function onBtnValidateClickCB() {
		navigationModel.doReturn(2);
	}

	if(inventoryAllocation.nonAllocatedItems.length == 0){
      	onBtnValidateClickCB();
    }
	else {
      	onBtnValidateClickCB();
  		//popupModel.showPopError("Il reste des appareils non affectés. Souhaitez-vous revenir sur le parc ?", onBtnValidateClickCB, null, true);
    }
};

inventoryAllocation.onBtnUpClick = function () {
	if (inventoryAllocation.allocatedItemsOffset > 0) {
		inventoryAllocation.allocatedItemsOffset--;
		inventoryAllocation.loadsegAllocatedItems(frmInventoryAllocation.cbxLocation.selectedKey, frmInventoryAllocation.cbxFloor.selectedKey);
	}
};

inventoryAllocation.onBtnDownClick = function () {
	if ((inventoryAllocation.allocatedItemQuantity - ((inventoryAllocation.allocatedItemsOffset+1) * 50)) > 0) {
		inventoryAllocation.allocatedItemsOffset++;
		inventoryAllocation.loadsegAllocatedItems(frmInventoryAllocation.cbxLocation.selectedKey, frmInventoryAllocation.cbxFloor.selectedKey);
	}
};

inventoryAllocation.onBtnTopUpClick = function () {
	if (inventoryAllocation.nonAllocatedItemsOffset > 0) {
		inventoryAllocation.nonAllocatedItemsOffset--;
		inventoryAllocation.loadSegNonAllocatedItems();
	}
};

inventoryAllocation.onBtnTopDownClick = function () {
	if ((inventoryAllocation.nonAllocatedItemQuantity - ((inventoryAllocation.nonAllocatedItemsOffset+1) * 50)) > 0) {
		inventoryAllocation.nonAllocatedItemsOffset++;
		inventoryAllocation.loadSegNonAllocatedItems();
	}
};

inventoryAllocation.onTabClick = function (tabNumber, refresh) {
  
	if (validationModel.isNull(refresh)) refresh = true;

	// Populate the items list
	inventoryAllocation.loadsegAllocatedItems = function (location, floor) {

		var groupByTopology = (!validationModel.isNull(floor) && !validationModel.isNull(location));
	
		if (refresh)
			inventoryAllocation.refreshAllocatedItems(location, floor);
		
		// Populate the segment
		var	segAllocatedItemsMasterData = [];
		for (var i = 0 ; i < inventoryAllocation.allocatedItems.length ; i ++) {
			var item = inventoryAllocation.allocatedItems[i];
			item.itemIds = validationModel.isNull(item.itemIds) ? [] : item.itemIds.split(",").filter(function(id){return !validationModel.isNull(id);});
			
			var rowItem= {};
			rowItem.lblQuantity = item.quantity;
			rowItem.lblCode = item.usualCode;
			rowItem.lblName = putToLine(item.name.trim(), 30);
			rowItem.imgDel = {src : "recycle_light.png"};
			if (groupByTopology) {
				rowItem.lblPlacement = (validationModel.isNull(item.placement) || item.placement.length == 0) ? ' ' :  item.placement;
				rowItem.lblZ = "Z";
				rowItem.lblZone = (validationModel.isNull(item.zone) || item.zone.length == 0) ? ' ' :  item.zone;
				rowItem.lblLocation = (validationModel.isNull(item.location) || item.location.length == 0) ? ' ' :  item.location;
				rowItem.lblFloor = (validationModel.isNull(item.floor) || item.floor.length == 0) ? ' ' :  item.floor;
			} else {
				rowItem.lblPlacement = "";
				rowItem.lblZ = "";
				rowItem.lblZone = "";
				rowItem.lblLocation = "";
				rowItem.lblFloor = "";
			}
			segAllocatedItemsMasterData.push(rowItem);
		}
		frmInventoryAllocation.segAllocatedItems.setData(segAllocatedItemsMasterData);
		
		// Update the up/down labels
		frmInventoryAllocation.lblUp.text =   'Résultats Précédents (' + inventoryAllocation.allocatedItemsOffset * 50 + ')';
		frmInventoryAllocation.lblDown.text = ((inventoryAllocation.allocatedItemQuantity - ((inventoryAllocation.allocatedItemsOffset+1) * 50)) < 0) 
			? 'Résultats Suivants (0)' 
			: 'Résultats Suivants (' + (inventoryAllocation.allocatedItemQuantity - ((inventoryAllocation.allocatedItemsOffset+1)*50)) + ')';
	}
	
	// Populate the topology list
	inventoryAllocation.loadSegNonAllocatedItems = function () {

		if (refresh)
			inventoryAllocation.refreshNonAllocatedItems();
		
		// Populate the segment
		var segNonAllocatedItemsMasterData = [];
		for (var i = 0 ; i < inventoryAllocation.nonAllocatedItems.length ; i ++) {
			var item = inventoryAllocation.nonAllocatedItems[i];
			item.itemIds = validationModel.isNull(item.itemIds) ? [] : item.itemIds.toString().split(",").filter(function(id) {return !validationModel.isNull(id)});
			
			var rowItem = {};
			rowItem.lblQuantity = item.quantity;
			rowItem.lblTotal = " ";
			rowItem.lblCode = item.usualCode;
			rowItem.lblName = putToLine(item.name.trim(), 38);
			rowItem.lblPlacement = (validationModel.isNull(item.placement) || item.placement.length == 0) ? ' ' :  item.placement;
			rowItem.lblZ = "Z";
			rowItem.lblZone = (validationModel.isNull(item.zone) || item.zone.length == 0) ? ' ' :  item.zone;
			rowItem.imgEdit = {"src": "edit_light.png"};
//			rowItem.imgRemove = {"src": "bin_light.png"};
          	//Pratik: fix for issue no 62
			rowItem.vbxSelect = {skin: "sknVbxTransparent"};//, focusSkin: "sknVbxTransparent"};//Dhaval:Fix for click area
			rowItem.vbxEdit = {skin: "sknVbxTransparent", focusSkin: "sknVbxTransparent"};
			rowItem.vbxReplace = {skin: "sknVbxTransparent", focusSkin: "sknVbxTransparent","isVisible": true};
//			rowItem.vbxRemove = {skin: "sknVbxTransparent", focusSkin: "sknVbxTransparent"};
			segNonAllocatedItemsMasterData.push(rowItem);
		}
		frmInventoryAllocation.segNonAllocatedItems.setData(segNonAllocatedItemsMasterData);
      
		// Check  all the check boxes
        if(inventoryAllocation.areSelectedAll) {
            var allIndices = [];
            for (var i = 0; i < frmInventoryAllocation.segNonAllocatedItems.data.length; i++) {
            	inventoryAllocation.onSegNonAllocatedItemsRowClick(i, true);
            	allIndices.push(i);  
            }
            frmInventoryAllocation.segNonAllocatedItems.selectedRowIndices = [[0,allIndices]];
        }
      
		// Update the up/down labels
		frmInventoryAllocation.lblTopUp.text = 'Résultats Précédents (' + inventoryAllocation.nonAllocatedItemsOffset * 50 + ')';
		frmInventoryAllocation.lblTopDown.text = ((inventoryAllocation.nonAllocatedItemQuantity - ((inventoryAllocation.nonAllocatedItemsOffset+1) * 50)) < 0) 
		? 'Résultats Suivants (0)' 
		: 'Résultats Suivants (' + (inventoryAllocation.nonAllocatedItemQuantity - ((inventoryAllocation.nonAllocatedItemsOffset+1)*50)) + ')';
	}

	// If tabInventory selected, refresh it
	if (tabNumber == 0) {
		inventoryAllocation.loadsegAllocatedItems(frmInventoryAllocation.cbxLocation.selectedKey, frmInventoryAllocation.cbxFloor.selectedKey);
		frmInventoryAllocation.segNonAllocatedItems.removeAll();
	// If tabTopology selected, refresh it
	} else {
		inventoryAllocation.loadSegNonAllocatedItems();
		frmInventoryAllocation.segAllocatedItems.removeAll();
	}
	
	frmInventoryAllocation.tabInventoryAllocation.activeTabs = [tabNumber];
  		if(tabNumber == 0){//Dhaval:Design issue #18 for slide
  		frmInventoryAllocation.btnTabPrev.skin='skntabBtn';
  		frmInventoryAllocation.btnTabFirst.skin='sknTabBtnFoc';
		}
		else{//Dhaval:Design issue #18 for slide
  		frmInventoryAllocation.btnTabPrev.skin='sknTabBtnFoc';
  		frmInventoryAllocation.btnTabFirst.skin='skntabBtn';
		}
}

inventoryAllocation.onSegAllocatedItemsRowClick = function (rowIndex, sectionIndex) {
	if (inventoryAllocation.isReadOnly) return;
  
	var item = inventoryAllocation.allocatedItems[rowIndex];
  //Pratik: fix for issue no 66
	var rowItem = frmInventoryAllocation.segAllocatedItems.data[rowIndex];
	inventoryAllocation.onSegAllocatedItemsRowClickCB = function () {
		var qty = popTopItem.txtQuantity.text;
		if(qty.length == 0 || !kony.string.isNumeric(qty) || parseInt(qty,10) == 0 || parseInt(qty,10) > rowItem.lblQuantity) {
			popupModel.showPopError("Veuillez choisir une quantité positive, inférieure ou égale à " + rowItem.lblQuantity);
			return;
		}
		
		var allocQuantity = parseInt(qty,10);
		var placement = (popTopItem.txtPlacement.text.length > 0) ? popTopItem.txtPlacement.text : 'NULL';
		var zone = (popTopItem.txtZone.text.length > 0) ? popTopItem.txtZone.text : 'NULL';
		var itemsToAllocate = item.itemIds.slice(0, allocQuantity);
		
		itemModel.updateItemsPlacement(itemsToAllocate, placement, zone);	
		// Refresh the item list
		inventoryAllocation.loadsegAllocatedItems(frmInventoryAllocation.cbxLocation.selectedKey, frmInventoryAllocation.cbxFloor.selectedKey);
		popTopItem.dismiss();
	}
	
	popTopItem.lblQuestion.text = "Veuillez indiquer les caractéristiques des articles (quantité max. " + rowItem.lblQuantity + ')';
	popTopItem.txtQuantity.text = rowItem.lblQuantity;
	popTopItem.txtPlacement.text = rowItem.lblPlacement.trim();
	popTopItem.txtZone.text = rowItem.lblZone;
	popTopItem.lblCode.text = rowItem.lblCode.trim();
	popTopItem.lblName.text = (rowItem.lblName.trim().length > 17) ? rowItem.lblName.trim().substring(0,15) + '..' : rowItem.lblName.trim();
	popTopItem.btnConfirm.onClick = inventoryAllocation.onSegAllocatedItemsRowClickCB;
	popTopItem.btnCancel.onClick = function () { popTopItem.dismiss(); };
	popTopItem.setContext({"widget": kony.application.getCurrentForm(), "anchor": "top", "sizetoanchorwidth": true});
	popTopItem.show();
}

inventoryAllocation.deallocateItems = function(rowIndex) {
	if (inventoryAllocation.isReadOnly) return;
  
	var item = inventoryAllocation.allocatedItems[rowIndex];
	
	function deallocateItemsConfirmCB() {
		var qty = popDefault.txt.text;
		
		if(qty.length == 0 || !kony.string.isNumeric(qty) || parseInt(qty,10) == 0 || parseInt(qty,10) > item.lblQuantity) {
			popupModel.showPopError("Veuillez choisir une quantité positive, inférieure ou égale à " + item.lblQuantity);
			return;
		}
		
		var updateMsg = 'Appareils en cours de désaffectation...';
		databaseModel.openDBExchange(updateMsg);
		var allocQuantity = parseInt(qty,10);
		var targetItems = item.itemIds.slice(0, qty);
		itemModel.updateItemsLocation(targetItems, 'NULL', 'NULL');
		itemModel.updateItemsPlacement(targetItems, 'NULL', 'NULL');
		databaseModel.closeDBExchange();	
		
		// Refresh the item list
		inventoryAllocation.loadsegAllocatedItems(frmInventoryAllocation.cbxLocation.selectedKey, frmInventoryAllocation.cbxFloor.selectedKey);
	};
	
	var popupConfig = [
		{
			confirm: true,
			confirmCB: deallocateItemsConfirmCB,
			cancel: true
		},
		{
			lblText: 'Veuillez indiquer la quantité à désaffecter\n(max. ' + item.quantity + ')',
			txtText: item.lblQuantity,
			maxTxtLength: 4,
			isNumeric: true
		}
	];
	popupModel.showPopDefault(popupConfig);
};

inventoryAllocation.onDeactivateItemsClick = function() {
	if (inventoryAllocation.isReadOnly) return;
  
	var rowIndices = [];
	if(!inventoryAllocation.pendingArticleReplace()) {
		rowIndices = (frmInventoryAllocation.segNonAllocatedItems.selectedRowIndices == null) 
            ? rowIndices 
            : frmInventoryAllocation.segNonAllocatedItems.selectedRowIndices[0][1];
    } else {
        rowIndices = [inventoryAllocation.pendingArticleReplaceRowIndex];
    } 
  
	inventoryAllocation.onBtnSaveClickCB = function () {
		var updateMsg = 'Suppression des appareils en cours...';
		databaseModel.openDBExchange(updateMsg);
		var itemsToRemove = new Array();
      
		// Update the topology of all the itemIds
		if(inventoryAllocation.areSelectedAll) {
            inventoryAllocation.areSelectedAll = false; 
			frmInventoryAllocation.btnSelectAll.skin = 'sknBtnSelectNon';
            frmInventoryAllocation.btnSelectAll.focusSkin = 'sknBtnSelectNon';
            inventoryAllocation.getAllNonAllocatedItems();              
            for (var i = 0; i < inventoryAllocation.allNonAllocatedItems.length; i ++) {
                var item = inventoryAllocation.allNonAllocatedItems[i];
                var selection = item.itemIds;
                itemsToRemove = itemsToRemove.concat(selection);
            }
		// Update the topology of the first x itemIds          
        } else {
            for (var i = 0; i < rowIndices.length; i ++) {
                // Update the topology of the first x itemIds
                var item = inventoryAllocation.nonAllocatedItems[rowIndices[i]];
                var qty = (!inventoryAllocation.pendingArticleReplace()) ? item.allocationQuantity : inventoryAllocation.pendingArticleReplaceQuantity;
                if(qty > 0) {
                    var selection = item.itemIds.slice(0, qty);
                    itemsToRemove = itemsToRemove.concat(selection);
                }
            }          
        }     
	
      	if(itemsToRemove.length > 0) {
			itemModel.deactivateBase(itemsToRemove, workOrder.doco);
        }
      
		databaseModel.closeDBExchange(updateMsg);
		popTopAllocation.dismiss();
		inventoryAllocation.onTabClick(1);
	}	

    // In default scenario we need to show a popup to confirm the deactivation
	if(!inventoryAllocation.pendingArticleReplace()) {
      
        if (rowIndices.length > 0) {
            // Populate the allocation summary popup
            var	segAllocatedItemsMasterData = [];
            if(!inventoryAllocation.areSelectedAll) {
                for (var i = 0 ; i < rowIndices.length ; i ++) {
                    var item = inventoryAllocation.nonAllocatedItems[rowIndices[i]];
                    var rowItem= {};
                    rowItem.lblQuantity = item.allocationQuantity;
                    rowItem.lblCode = item.usualCode;
                    rowItem.lblName = putToLine(item.name.trim(), 30);		
                    rowItem.lblPlacement = "";
                    rowItem.lblZ = "";
                    rowItem.lblZone = "";
                    segAllocatedItemsMasterData.push(rowItem);
                }
            }

            popTopAllocation.segAllocatedItems.setData(segAllocatedItemsMasterData);
            popTopAllocation.headers[0].lblTitle.text = "Souhaitez-vous retirer" + ((inventoryAllocation.areSelectedAll) ? " tous les articles du parc ?" : " les articles suivants du parc ?");
            popTopAllocation.footers[0].btnConfirm.onClick = inventoryAllocation.onBtnSaveClickCB;
            popTopAllocation.footers[0].btnCancel.onClick = function () { popTopAllocation.dismiss(); };
            var containerHeight = 20 + Math.floor(8.5 * segAllocatedItemsMasterData.length);
            popTopAllocation.containerHeight = (containerHeight > 80) ? 80 : containerHeight;
            popTopAllocation.setContext({"widget": kony.application.getCurrentForm(), "anchor": "top", "sizetoanchorwidth": true});
            popTopAllocation.show();
        }
        else {
            popupModel.showPopError("Veuillez sélectionner au moins 1 appareil à supprimer.");
        }
      
    // Else, in the replacement scenario we don't need to show a popup to confirm the deactivation
    } else {
      	inventoryAllocation.onBtnSaveClickCB();
    }
};

inventoryAllocation.onSelectAllClick = function(indexToToggle) {
	if (inventoryAllocation.isReadOnly) return;

	if(validationModel.isNull(indexToToggle)) indexToToggle = -1;  
  
	var newSkin = 'sknBtnSelectNon';
  
	if(frmInventoryAllocation.btnSelectAll.skin === 'sknBtnSelectNon') {
        newSkin = 'sknBtnSelectAll';
        inventoryAllocation.areSelectedAll = true;
    } else {
        inventoryAllocation.areSelectedAll = false;
    }
  
	frmInventoryAllocation.btnSelectAll.skin = newSkin;
	frmInventoryAllocation.btnSelectAll.focusSkin = newSkin;
  
	//Select/deselect all checkboxes in the UI
    var allIndices = [];
	if(!validationModel.isNull(frmInventoryAllocation.segNonAllocatedItems.data) && frmInventoryAllocation.segNonAllocatedItems.data.length > 0) {
        for (var i = 0; i < frmInventoryAllocation.segNonAllocatedItems.data.length; i++) {
            if(indexToToggle !== i ) {
	            allIndices.push(i);
            }
        }
        frmInventoryAllocation.segNonAllocatedItems.selectedRowIndices = [[0,allIndices]];

        // Toggle each displayed item
	    if(indexToToggle == -1 ) {
            for (var i = 0; i < allIndices.length; i++) {
                // Select : call onSegNonAllocatedItemsRowClick as checked on each displayed item
                if(inventoryAllocation.areSelectedAll) {
                    inventoryAllocation.onSegNonAllocatedItemsRowClick(i, true);
                // Deselect : call onSegNonAllocatedItemsRowClick as unchecked on each displayed item
                } else {
                    inventoryAllocation.onSegNonAllocatedItemsRowClick(i, false);
                }
            }
        // Desellect the indexToToggle check box only by calling onSegNonAllocatedItemsRowClick on it
        } else if(!inventoryAllocation.areSelectedAll) {
	          inventoryAllocation.onSegNonAllocatedItemsRowClick(indexToToggle, false);
        }
    }
};