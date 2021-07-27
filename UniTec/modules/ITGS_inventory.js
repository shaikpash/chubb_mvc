inventory = {
	view: 'session', // session, preWorkOrder
	refreshTopology: true,
	refreshItems: true,
	selectedContractDoc: null,
	selectedContractLnid: null,
	preIdentified : false,
	elements: [],
	elementIds: [],
	lastElementIndex: -1,
	firstElementIndex: 0,
	woDOC : null,
	woCOCH : null,
	woLNID : null,
	isReadOnly : false,
	isLoading: false,
		isScanned : false,
	filter : false,
	saveFilter : {
		"Realised" : true,
		"Refused" : true,
		"Statued" : true,
      
      "customerNumber": "",
      "batchNo": ""
	}

};

invent = {
  cbxFilter : {
  "building": [],
      "floor": [],
      "place": [],
}}

inventory.sql = {};

inventory.init = function(){
	var appMenu = [
		["inventory.BACK", "Retour", "left.png", inventory.onBtnReturnClick],
		["inventory.TOPOLOGY", "Topologie", "topology.png", onTopologyClick]
	];
	
	var readOnlyAppMenu = [
		["inventory.BACK", "Retour", "left.png", inventory.onBtnReturnClick]
	];
  	//Dhaval:Fix for app menu not working 
	function onTopologyClick(){
      frmTopology.show();
    }
  //Dhaval:Invocation of custom app menu start
	otis.application.createAppMenu("inventoryAppMenu", appMenu, sknAppmenu, sknAppmenuF);
	otis.application.createAppMenu("inventoryReadOnlyAppMenu", readOnlyAppMenu, sknAppmenu, sknAppmenuF);
	//End
  	 
  	initFormProcess("frmInventory", frmInventory);	//Arati: changed for design issue #19
}

inventory.onBtnReturnClick = function () {
	navigationModel.doReturn();
}

inventory.onInventoryViewSelection = function (view, rowIndex, sectionIndex) {
	// Show loading screen and block UI
    showSyncLoadingScreen("Chargement du parc " + [view] + " ..");

	var rowItem = frmInventory.segContracts.data[sectionIndex][1][rowIndex];
	if (inventory.view != view) {
		// Toggle the vbox
		inventory.view = view;
		rowItem.lblOriginalQtyHeader.skin 	   = (inventory.view == 'session') ? "sknLblSegRowItemWhite" : "sknLblSegRowItemGreen";
		rowItem.lblOriginalQtyHeader.focusSkin = (inventory.view == 'session') ? "sknLblSegRowItemWhite" : "sknLblSegRowItemGreen";
		rowItem.lblCurrentQtyHeader.skin 	   = (inventory.view == 'session') ? "sknLblSegRowItemGreen" : "sknLblSegRowItemWhite";
		rowItem.lblCurrentQtyHeader.focusSkin  = (inventory.view == 'session') ? "sknLblSegRowItemGreen" : "sknLblSegRowItemWhite";
		frmInventory.segContracts.setDataAt(rowItem, rowIndex, sectionIndex);
		
		// Reload the filter dropdowns
		inventory.onFilterCancelClick();
	}
	
	// Dismiss loading screen
    kony.application.dismissLoadingScreen();
}

inventory.preShow = function () {
  
  	frmInventory.segItems.containerHeight = 90;
  frmInventory.segItems.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;
  
	inventory.saveFilter.Realised ? frmInventory.cbRealised.selectedKeys = ["Realised"] : frmInventory.cbRealised.selectedKeys = ["null"];
	inventory.saveFilter.Refused ? frmInventory.cbRefused.selectedKeys = ["Refused"] : frmInventory.cbRefused.selectedKeys = ["null"];
	inventory.saveFilter.Statued ? frmInventory.cbStatued.selectedKeys = ["Statued"] : frmInventory.cbStatued.selectedKeys = ["null"];

	inventory.isReadOnly = !workOrderModel.isOnSite(workOrder) || WOValidationSignature.isValid(workOrder) || (workOrder.statusCode == 70);
	inventory.defaultTab = (workOrder.process == 'CHUBB') ? 0 : 3;

	otis.application.setCurrentAppMenu("inventoryAppMenu");//Dhaval:Invocation of custom app menu	
  
  	frmInventory.tabInventory.containerHeight = 115;													//Arati:Changed code for JIRA UI-84
  	frmInventory.tabInventory.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;	//Arati:Changed code for JIRA UI-84
	
	frmInventory.segContracts.removeAll();
	frmInventory.segTopItems.removeAll();

	frmInventory.hbxReference.lblReference.text = workOrder.getReference();
	frmInventory.hbxReference.backgroundColor = workOrder.color;
	frmInventory.hbxReference.focusSkin = workOrder.skin;
	frmInventory.lblSession.text = '';//inventoryAllocation.session.id;
	frmInventory.tabInventory.activeTabs = [inventory.defaultTab];
  	//Arati: changed for design issue #19 Start here
  	if(inventory.defaultTab == 0) {
      	frmInventory.btnTabFirst.skin='sknTabBtnFoc';
  		frmInventory.btnTabPrev.skin='skntabBtn';
  		frmInventory.btnTabHdr1.skin='skntabBtn';
  		frmInventory.btnTabHdr2.skin='skntabBtn';
    } else if(inventory.defaultTab == 3) {
      	frmInventory.btnTabFirst.skin='skntabBtn';
  		frmInventory.btnTabPrev.skin='skntabBtn';
  		frmInventory.btnTabHdr1.skin='skntabBtn';
  		frmInventory.btnTabHdr2.skin='sknTabBtnFoc';
    }
	//Arati: changed for design issue #19 end here
	frmInventory.hbxFilterReference.lblFilterReference.text = workOrder.getReference();
	frmInventory.hbxFilterReference.backgroundColor = workOrder.color;
	frmInventory.hbxFilterReference.focusSkin = workOrder.skin;
	frmInventory.lblFilterSession.text = '';//inventoryAllocation.session.id;
	
	frmInventory.hbxTopReference.lblTopReference.text = workOrder.getReference();
	frmInventory.hbxTopReference.backgroundColor = workOrder.color;
	frmInventory.hbxTopReference.focusSkin = workOrder.skin;
	frmInventory.lblTopSession.text = '';//inventoryAllocation.session.id;
	
	frmInventory.hbxItemsReference.lblItemsReference.text = workOrder.getReference();
	frmInventory.hbxItemsReference.backgroundColor = workOrder.color;
	frmInventory.hbxItemsReference.focusSkin = workOrder.skin;
	frmInventory.lblItemsSession.text = '';//inventoryAllocation.session.id;
	
	inventory.refreshTopology = true;
	inventory.refreshItems = true;
	inventory.topologyOffset = 0;
	inventory.session = {};
	inventory.preWorkOrder = {};
	inventory.selectedContractDoc = null;
	inventory.selectedContractLnid = null;
	frmInventory.txtBatchNo.text = '';
	//frmInventory.cbxBuilding.selectedKey = null;
	//frmInventory.cbxFloor.selectedKey = null;
	//frmInventory.cbxPlace.selectedKey = null;
	frmInventory.txtCustomerNumber.text = '';
	frmInventory.hbxFilter.isVisible = false;
	frmInventory.hbxTopFilter.isVisible = false;
	frmInventory.hbxItemsFilter.isVisible = false;
	frmInventory.segContracts.containerHeight = 83;
	frmInventory.segItems.containerHeight = 83;
	frmInventory.segTopItems.containerHeight = 65;
	frmInventory.segItems.removeAll();
	
	if(inventory.preIdentified) {
		frmInventory.hbxBatchNo.isVisible = false;
		frmInventory.HBoxFrmTitle.isVisible = true;
	}
	else {
		frmInventory.hbxBatchNo.isVisible = true;
		frmInventory.HBoxFrmTitle.isVisible = false;
	}
  		if(inventory.saveFilter.Realised == false || inventory.saveFilter.Refused == false || inventory.saveFilter.Statued == false){

		frmInventory.hbxFilter.isVisible = true;
		frmInventory.hbxTopFilter.isVisible = true;
		frmInventory.hbxItemsFilter.isVisible = true;
		frmInventory.segContracts.containerHeight = 83;
		frmInventory.segTopItems.containerHeight = 65;
	}


}

inventory.postShow = function () {
try {
	// Load contract section headers
	inventory.loadSegContracts = function () {
		// Show loading screen and block UI
   		showSyncLoadingScreen("Chargement des contrats ..");
	
		var segContractsMasterData = [];
		var currentContractSectionIndex;
		
		for (var i = 0; i < inventory[inventory.view].filteredContracts.length; i ++) {
			var header = {lblName: inventory[inventory.view].filteredContracts[i].name, imgDisplay: {src: "chevronright.png"}};
			header.imgSelect = (inventory[inventory.view].filteredContracts[i].isSelected) ? {src: "selected.png"} : {src: "selectednot.png"};
			if (inventory[inventory.view].filteredContracts[i].isCurrentContract) {
				currentContractSectionIndex = i;
			}
			segContractsMasterData.push([header,[]]);
		}
		frmInventory.segContracts.setData(segContractsMasterData);
        //Changed for #19 - NSRangeException Error start here
		if (!validationModel.isNull(currentContractSectionIndex)) 
        {
          inventory.expandContract(currentContractSectionIndex);
        }
      	//end here
		// Dismiss loading screen
    	kony.application.dismissLoadingScreen();
	}
	
	// Collapse a given contract section
	inventory.collapseContract = function (sectionIndex) {
		var contract = inventory[inventory.view].filteredContracts[sectionIndex];
		
		// Clear the section
		var header = {lblName: contract.name, imgDisplay: {src: "chevronright.png"}};
		header.imgSelect = (contract.isSelected) ? {src: "selected.png"} : {src: "selectednot.png"};
		var segContractsMasterData = [[header,[]]];
      	//Changed for #19 - NSRangeException Error start here
      	//frmInventory.segContracts.setSectionAt(segContractsMasterData, sectionIndex); 						
		frmInventory.segContracts.setSectionAt(segContractsMasterData[0], sectionIndex); 						//Arati : #100086 Changed for NSRangeException
		//end here
		contract.isVisible = false;
	}
	
	// Expand a given contract section
	inventory.expandContract = function (sectionIndex) {
		// Show loading screen and block UI
   		showSyncLoadingScreen("Affichage du contrat ..");

		var contract = inventory[inventory.view].filteredContracts[sectionIndex];
		var sessionContract = inventory.session.filteredContracts[sectionIndex];
		var preWorkOrderContract = inventory.preWorkOrder.filteredContracts[sectionIndex];

		// Populate the section
		var header = {lblName: contract.name, imgDisplay: {src: "chevrondown.png"}};
		header.imgSelect = (contract.isSelected) ? {src: "selected.png"} : {src: "selectednot.png"};
		var segContractsMasterData = [[header,[]]];
				
		// Loop through all subFamilies of the current view
		for (var i = 0; i < contract.subFamilies.length; i ++) {
			var item = {};
			item.lblName = contract.subFamilies[i].name;
			item.lblOriginalQty = (inventory.view == 'session') ? 0 : contract.subFamilies[i].quantity;
			if (!validationModel.isNull(preWorkOrderContract)) {
				var preWorkOrderSubFamily = preWorkOrderContract.subFamilies.filter(function(subFamily) {return subFamily.name == contract.subFamilies[i].name});
				item.lblOriginalQty = (preWorkOrderSubFamily.length > 0) ? preWorkOrderSubFamily[0].quantity : 0;
			}	
				
			if (contract.isCurrentContract) {
				item.lblCurrentQty = (inventory.view == 'preWorkOrder') ? 0 : contract.subFamilies[i].quantity;
				if (!validationModel.isNull(sessionContract)) {
					var sessionSubFamily = sessionContract.subFamilies.filter(function(subFamily) {return subFamily.name == contract.subFamilies[i].name});
					item.lblCurrentQty = (sessionSubFamily.length > 0) ? sessionSubFamily[0].quantity : 0;
				}
			} else item.lblCurrentQty = '';
					
			item.vbxContractItem = {
				skin: contract.isCurrentContract ? "myVBNorm" : "myVBNorm",
				focusSkin: contract.isCurrentContract ? "myVBNorm" : "myVBNorm"
			};
			segContractsMasterData[0][1].push(item);
		}	
		// Loop through all subFamilies in the other view
		if (inventory.view == 'session' && !validationModel.isNull(preWorkOrderContract)) {
			for (var i = 0; i < preWorkOrderContract.subFamilies.length; i ++) {
				var sessionSubFamily = contract.subFamilies.filter(function(subFamily) {return subFamily.name == preWorkOrderContract.subFamilies[i].name});
				// Not found, add the subFamily to the list
				if (sessionSubFamily.length == 0) {
					var item = {};
					item.lblName = preWorkOrderContract.subFamilies[i].name;
					item.lblOriginalQty = preWorkOrderContract.subFamilies[i].quantity;
					item.lblCurrentQty = 0;
					item.vbxContractItem = {
						skin: preWorkOrderContract.isCurrentContract ? "myVBNorm" : "myVBNorm",
						focusSkin: preWorkOrderContract.isCurrentContract ? "myVBNorm" : "myVBNorm"
					};
					segContractsMasterData[0][1].push(item);
				} 
			}
		} else if (inventory.view == 'preWorkOrder' && !validationModel.isNull(sessionContract)) {
			for (var i = 0; i < sessionContract.subFamilies.length; i ++) {
				var preWorkOrderSubFamily = contract.subFamilies.filter(function(subFamily) {return subFamily.name == sessionContract.subFamilies[i].name});
				// Not found, add the subFamily to the list
				if (preWorkOrderSubFamily.length == 0) {
					var item = {};
					item.lblName = sessionContract.subFamilies[i].name;
					item.lblOriginalQty = 0;
					item.lblCurrentQty = sessionContract.subFamilies[i].quantity;
					item.vbxContractItem = {
						skin: sessionContract.isCurrentContract ? "myVBNorm" : "myVBNorm",
						focusSkin: sessionContract.isCurrentContract ? "myVBNorm" : "myVBNorm"
					};
					segContractsMasterData[0][1].push(item);
				} 
			}
		}
	
		// Sort the items by subFamily name and add at bottom margin to the last element
		de.itgs.javascript.Array.sortByParam(segContractsMasterData[0][1],'lblName');
		// Set the header (if the first contract is the current contract)
		if (segContractsMasterData[0][1].length > 0 && segContractsMasterData[0][1][0].vbxContractItem.skin == "myVBNorm") {
			segContractsMasterData[0][1][0].hbxContractItemHeader = {isVisible: contract.isCurrentContract};
			segContractsMasterData[0][1][0].lblOriginalQtyHeader = {
					text : 		kony.i18n.getLocalizedString('lblOriginalQtyHeader'),
					skin :		(inventory.view == 'session') ? "sknLblSegRowItemWhite" : "sknLblSegRowItemGreen",
					focusSkin : (inventory.view == 'session') ? "sknLblSegRowItemWhite" : "sknLblSegRowItemGreen"
				};
			segContractsMasterData[0][1][0].lblCurrentQtyHeader = {
					text : 		(contract.isCurrentContract) ? kony.i18n.getLocalizedString('lblCurrentQtyHeader') : "",
					skin :		(inventory.view == 'session') ? "sknLblSegRowItemGreen" : "sknLblSegRowItemWhite",
					focusSkin : (inventory.view == 'session') ? "sknLblSegRowItemGreen" : "sknLblSegRowItemWhite"
				};
			segContractsMasterData[0][1][0].lblDummy = " ";
		}
		//Changed for #19 - NSRangeException Error start here	
      	//frmInventory.segContracts.setSectionAt(segContractsMasterData, sectionIndex);
		frmInventory.segContracts.setSectionAt(segContractsMasterData[0], sectionIndex);						//Arati : #100086 Changed for NSRangeException
		//end here
		contract.isVisible = true;
		if (!validationModel.isNull(sessionContract)) sessionContract.isVisible = true;
		if (!validationModel.isNull(preWorkOrderContract)) preWorkOrderContract.isVisible = true;
		
		// Dismiss loading screen
    	kony.application.dismissLoadingScreen();
	}
	
	// Get array of unique ids from an array of contracts
	inventory.getIdsFromContracts = function (contracts, idType) {
		var ids = [];
		var seen = {};
		for (var i = 0; i < contracts.length; i ++) {
			var contract = contracts[i];
			for (var j = 0; j < contract[idType+'Ids'].length; j ++) {
				var id = contract[idType+'Ids'][j];
				if (!seen.hasOwnProperty(id)) {
					seen[id] = true;
					ids.push(parseInt(id));
				}
			}
		}
		return ids;
	}
	
	// Find all items and store them locally
	inventory.findAndStoreContracts = function (view) {
		// Show loading screen and block UI
   		showSyncLoadingScreen("Chargement du parc [" + view + "]..");

		var whereClause = 	" and cib.NUMB = " + workOrder.equipmentNumber + " \n" +
							" and cib.ITM = i.ITM \n" +
							" and i.PRP0 in ('D','G','V') \n" +
							" and cib.Y56INDLA in ('A','I') \n";
		var sortOrder   = 	" order by DOCO, COCH, LNID, batchNumber, location, floor, placement, customerNumber \n";

		inventory[view].itemSummary = itemModel.findItemsByWhereClauseAndSortOrder(whereClause, sortOrder, true, null, false, null, (view == 'preWorkOrder'));
														 			 
		inventory[view].contracts = itemModel.groupItemsByContractAndSubFamily(inventory[view].itemSummary, workOrder);
		inventory[view].contracts = inventory[view].contracts.map(function(contract){
			contract.isSelected = contract.isCurrentContract;
			if (contract.isCurrentContract) {
				inventory.selectedContractDoc = contract.doc;
				inventory.selectedContractLnid = contract.lnid;
			}
			return contract;
		});
		inventory[view].articleIds = inventory.getIdsFromContracts(inventory[view].contracts,'article');
		inventory[view].filteredItemSummary = inventory[view].itemSummary;
		inventory[view].filteredArticleIds = inventory[view].articleIds;
		inventory[view].filteredContracts =  inventory[view].contracts;
		
		// Dismiss loading screen
    	kony.application.dismissLoadingScreen();
	}

	// Populate the form
	databaseModel.openDBExchange("Chargement des données du parc...");
	inventory.findAndStoreContracts('preWorkOrder');
	inventory.findAndStoreContracts('session');
	var rawTopology = global.siteTopologyModel.getRawTopologyFromEquipmentNumber(workOrder.equipmentNumber);
	inventory.buildings = global.siteTopologyModel.getDynamicalTopology(rawTopology);
	inventory.loadCbxBuildingMasterData (inventory.buildings);
	inventory.loadSegContracts();
	if (inventory.defaultTab == 3)
		inventory.loadItems();
	databaseModel.closeDBExchange();
	inventory.isLoading = false;
  	frmInventory.cbxBuilding.selectedKeys = invent.cbxFilter.building;
  	frmInventory.cbxFloor.selectedKeys = invent.cbxFilter.floor;
  	frmInventory.cbxPlace.selectedKeys = invent.cbxFilter.place;
  	frmInventory.txtCustomerNumber.text = inventory.saveFilter.customerNumber;
  	frmInventory.txtBatchNo.text = inventory.saveFilter.batchNo;
  
  	inventory.onFilterSaveClick(true);
  
} catch(err) {
  kony.print("" + err);
}
}

// Populate the building / floor / place drop downs
inventory.loadCbxBuildingMasterData = function (buildings) {
	var cbxBuildingMasterData = [['NONE', 'Tous']];
	var allFloors = [];
	
	for (var i = 0; i < buildings.length; i ++) {
		var building_name = buildings[i].getName();
		if (!unitec.lang.isNull(building_name))
			cbxBuildingMasterData.push([building_name, building_name]);
		
		allFloors = allFloors.concat(buildings[i].getFloors());
	}
	
	frmInventory.cbxBuilding.selectedKey = null;
	frmInventory.cbxBuilding.masterData = cbxBuildingMasterData;
	inventory.loadCbxFloorMasterData(allFloors);
}

inventory.onCbxBuildingSelection = function (selectedKey) {
	var buildings;
	var floors = [];
	if (unitec.lang.isNull(selectedKey) || selectedKey == 'NONE') {
		for (var i = 0; i < inventory.buildings.length; i ++) {
			floors = floors.concat(inventory.buildings[i].getFloors());
		}
	}
	else {
		for (var i = 0; i < inventory.buildings.length; i ++) {
			if (inventory.buildings[i].getName() == selectedKey)
				floors = floors.concat(inventory.buildings[i].getFloors());
		}
	}
	
	inventory.loadCbxFloorMasterData(floors);
}

inventory.onCbxFloorSelection = function (selectedKey) {
	var floors = [];
	var places = [];
	if (unitec.lang.isNull(frmInventory.cbxBuilding.selectedKey) || frmInventory.cbxBuilding.selectedKey == 'NONE') {
		for (var i = 0; i < inventory.buildings.length; i ++) {
			floors = floors.concat(inventory.buildings[i].getFloors());
		}
	}
	else {
		for (var i = 0; i < inventory.buildings.length; i ++) {
			if (inventory.buildings[i].getName() == frmInventory.cbxBuilding.selectedKey)
				floors = floors.concat(inventory.buildings[i].getFloors());
		}
	}
	
	for (var i = 0; i < floors.length; i ++) {
		if (floors[i].getName() == selectedKey)
			places = places.concat(floors[i].getPlaces());
	}
	
	inventory.loadCbxPlacesMasterData(places);
}

inventory.loadCbxFloorMasterData = function (floors) {
	var cbxFloorMasterData = [['NONE', 'Tous']];
	var allPlaces = [];
	
	function hasElement(cbxElement, name) { return cbxElement[0] == name; }
	
	for (var i = 0; i < floors.length; i++) {
		var floor_name = floors[i].getName();
		if (!unitec.lang.isNull(floor_name) && de.itgs.javascript.Array.find(cbxFloorMasterData, hasElement, floor_name) == -1)
			cbxFloorMasterData.push([floor_name, floor_name]);
		allPlaces = allPlaces.concat(floors[i].getPlaces());
	}
	
	frmInventory.cbxFloor.selectedKey = null;
	frmInventory.cbxFloor.masterData = cbxFloorMasterData;
	inventory.loadCbxPlacesMasterData(allPlaces);
}

inventory.loadCbxPlacesMasterData = function (places) {
	var cbxPlaceMasterData = [['NONE', 'Tous']];
	
	function hasElement(cbxElement, name) { return cbxElement[0] == name; }
	
	for (var i = 0; i < places.length; i++) {
		if (!unitec.lang.isNull(places[i]) && de.itgs.javascript.Array.find(cbxPlaceMasterData, hasElement, places[i]) == -1)
			cbxPlaceMasterData.push([places[i], places[i]]);
	}
	
	frmInventory.cbxPlace.selectedKey = null;
	frmInventory.cbxPlace.masterData = cbxPlaceMasterData;
}

inventory.onFilterCancelClick = function () {
	frmInventory.txtBatchNo.text = '';
	frmInventory.txtCustomerNumber.text = '';
	frmInventory.cbxBuilding.selectedKey = 'NONE';
	frmInventory.cbxFloor.selectedKey = 'NONE';
	frmInventory.cbxPlace.selectedKey = 'NONE';
  		inventory.filter = false; //Reinit filter in inventory
	frmInventory.cbRealised.selectedKeys = ["Realised"];
	frmInventory.cbRefused.selectedKeys = ["Refused"];
	frmInventory.cbStatued.selectedKeys = ["Statued"];

}

inventory.onFilterSaveClick = function (switchTabs) {
  
  	if(frmInventory.cbRealised.selectedKeys){
		inventory.saveFilter.Realised = true;
	}else{inventory.saveFilter.Realised = false}
	if(frmInventory.cbRefused.selectedKeys){
		inventory.saveFilter.Refused = true;
	}else{inventory.saveFilter.Refused = false}
	if(frmInventory.cbStatued.selectedKeys){
		inventory.saveFilter.Statued = true;
	}else{inventory.saveFilter.Statued = false}
	
  	invent.cbxFilter.building = frmInventory.cbxBuilding.selectedKeys;
  	invent.cbxFilter.floor = frmInventory.cbxFloor.selectedKeys;
  	invent.cbxFilter.place = frmInventory.cbxPlace.selectedKeys;
  
  	inventory.saveFilter.customerNumber = frmInventory.txtCustomerNumber.text
  	inventory.saveFilter.batchNo = frmInventory.txtBatchNo.text;

	inventory.filterItemsByCharacteristics = function (view) {
	
		// Show loading screen and block UI
    	showSyncLoadingScreen("Application du filtre [" + view + "] ..");
      
      		var checkedClause = "and (";
		if(frmInventory.cbRealised.selectedKeys != null && checkedClause == "and ("){checkedClause+= " btdt.CK01 = 'O' \n";}
		else if(frmInventory.cbRealised.selectedKeys != null && checkedClause != "and ("){checkedClause+= " or bt.CK01 = 'O' \n";}
		if(frmInventory.cbRefused.selectedKeys != null && checkedClause == "and ("){checkedClause+= " btdt.CK01 = 'N' \n";}
		else if(frmInventory.cbRefused.selectedKeys != null && checkedClause != "and ("){checkedClause+= " or btdt.CK01 = 'N' \n";}
		if(frmInventory.cbStatued.selectedKeys != null && checkedClause == "and ("){checkedClause+= " btdt.CK01 = 'NULL' \n";}
		else if(frmInventory.cbStatued.selectedKeys != null && checkedClause != "and ("){checkedClause+= " or btdt.CK01 = 'NULL' \n";}
		
		if(checkedClause != "and ("){
			checkedClause+= ")";
		}else{
			checkedClause = "";
		}
		


    	var whereClause =
    		" and cib.NUMB = " + workOrder.equipmentNumber + " \n" +
			" and cib.ITM = i.ITM \n" +
			" and i.PRP0 in ('D','G','V') \n" +
			" and cib.Y56INDLA in ('A','I') \n" +
			//checkedClause
			  (frmInventory.txtBatchNo.text.length == 0 ? "" : "and cib.LOTN = '" + frmInventory.txtBatchNo.text + "' \n")
			+ ((!unitec.lang.isNull(frmInventory.cbxBuilding.selectedKey) && frmInventory.cbxBuilding.selectedKey != 'NONE') ? "and cib.Y56EMPLA = '" + frmInventory.cbxBuilding.selectedKey + "' \n" : "")
			+ ((!unitec.lang.isNull(frmInventory.cbxFloor.selectedKey) && frmInventory.cbxFloor.selectedKey != 'NONE') ? "and cib.Y56ETAG = '" + frmInventory.cbxFloor.selectedKey + "' \n" : "")
			+ ((!unitec.lang.isNull(frmInventory.cbxPlace.selectedKey) && frmInventory.cbxPlace.selectedKey != 'NONE') ? "and cib.Y56LIEU = '" + frmInventory.cbxPlace.selectedKey + "' \n" : "")
			+ (frmInventory.txtCustomerNumber.text.length == 0 ? "" : "and ZONLA = '" + frmInventory.txtCustomerNumber.text.replace(',','.') + "' \n")
		;
		
		var sortOrder = " order by DOCO, COCH, LNID, batchNumber, location, floor, placement, customerNumber \n";

		inventory[view].filteredItemSummary = itemModel.findItemsByWhereClauseAndSortOrder(whereClause, sortOrder, true, null, false, null, (view == 'preWorkOrder'));		
		inventory[view].filteredContracts = itemModel.groupItemsByContractAndSubFamily(inventory[view].filteredItemSummary, workOrder);
		
		inventory[view].filteredContracts = inventory[view].filteredContracts.map(function(contract){
			contract.isSelected = (contract.doc == inventory.selectedContractDoc && contract.lnid == inventory.selectedContractLnid);
			return contract;
		});
		inventory[view].filteredArticleIds = inventory.getIdsFromContracts(inventory[view].filteredContracts,'article');
		
		// Dismiss loading screen
    	kony.application.dismissLoadingScreen();
	}
	
	inventory.filterItemsByCharacteristics('session');
	inventory.filterItemsByCharacteristics('preWorkOrder');
	inventory.loadSegContracts();
	inventory.refreshTopology = true;
	inventory.refreshItems = true;
	inventory.topologyOffset = 0;
	
	// Show the label a filter is active or not
	if (frmInventory.txtBatchNo.text.length == 0 && frmInventory.txtCustomerNumber.text.length == 0 &&
		(unitec.lang.isNull(frmInventory.cbxBuilding.selectedKey) || frmInventory.cbxBuilding.selectedKey == 'NONE') &&
		(unitec.lang.isNull(frmInventory.cbxFloor.selectedKey) || frmInventory.cbxFloor.selectedKey == 'NONE') &&
		(unitec.lang.isNull(frmInventory.cbxPlace.selectedKey) || frmInventory.cbxPlace.selectedKey == 'NONE') &&
				inventory.saveFilter.Realised == true && inventory.saveFilter.Refused == true && inventory.saveFilter.Statued == true

	) {
		frmInventory.hbxFilter.isVisible = false;
		frmInventory.hbxTopFilter.isVisible = false;
		frmInventory.hbxItemsFilter.isVisible = false;
		frmInventory.segContracts.containerHeight = 83;
		frmInventory.segTopItems.containerHeight = 65;
	} else {
		frmInventory.hbxFilter.isVisible = true;
		frmInventory.hbxTopFilter.isVisible = true;
		frmInventory.hbxItemsFilter.isVisible = true;
		frmInventory.segContracts.containerHeight = 83;
		frmInventory.segTopItems.containerHeight = 65;
	}
	
	// Switch to the first tab in case the "apply filter" button was clicked
	if (!validationModel.isNull(switchTabs) && switchTabs) {
		frmInventory.tabInventory.activeTabs = [inventory.defaultTab];
		inventory.onTabClick(inventory.defaultTab);
	}
}

inventory.onContractToggle = function (sectionIndex) {
	var contract = inventory[inventory.view].filteredContracts[sectionIndex];
	if (contract.isVisible) {
		inventory.collapseContract(sectionIndex);
	} else {
		inventory.expandContract(sectionIndex);
	}
}

inventory.onContractSelection = function (sectionIndex) {
	for (var i = 0 ; i < inventory[inventory.view].filteredContracts.length ; i ++) {
		// Find the contracts with changed selected state and refresh them
		var contract = inventory[inventory.view].filteredContracts[i];
		if ((contract.isSelected && i != sectionIndex) || (!contract.isSelected && i == sectionIndex)) {
			contract.isSelected = (i == sectionIndex);
			if (contract.isSelected) {
				inventory.selectedContractDoc = contract.doc;
				inventory.selectedContractLnid = contract.lnid;
			}
			if (contract.isVisible) inventory.expandContract(i);
			else inventory.collapseContract(i);
			inventory.refreshTopology = true;
			inventory.topologyOffset = 0;
		}

		// Make sure the contracts in both states have the same selected state
		inventory['preWorkOrder'].filteredContracts[i].isSelected = contract.isSelected;
		inventory['session'].filteredContracts[i].isSelected = contract.isSelected; 
	}
}

inventory.onBtnUpClick = function () {
	if (inventory.topologyOffset > 0) {
		inventory.topologyOffset--;
		inventory.loadSegTopItems(frmInventory.cbxTopLocation.selectedKey,frmInventory.cbxTopFloor.selectedKey);
	}
};

inventory.onBtnDownClick = function () {
	if ((inventory.topology.quantity - ((inventory.topologyOffset+1) * 50)) > 0) {
		inventory.topologyOffset++;
		inventory.loadSegTopItems(frmInventory.cbxTopLocation.selectedKey,frmInventory.cbxTopFloor.selectedKey);
	}
};

inventory.loadTopology = function (view) {
	// Show loading screen and block UI
    showSyncLoadingScreen("Chargement de la topologie ..");
    
    // Get all item/allocation ids related to the current contract
	inventory.topology = {};
	inventory.topology.itemIds = [];
	inventory.topology.allocationIds = [];
	inventory.topology.contract = undefined;
	inventory.topology.locations = [];
	inventory.topology.quantity = 0;

	for (var i = 0 ; i < inventory[view].filteredContracts.length ; i ++) {
		inventory.topology.contract = inventory[view].filteredContracts[i];
		if (inventory.topology.contract.isSelected) {
			inventory.topology.itemIds = inventory.getIdsFromContracts([inventory.topology.contract],'item');
			
			// Find all items related to the selected contract
			var items = itemModel.findItemsByWhereClauseAndSortOrder(
				" and cib.DOCO = " + (validationModel.isStringEmpty(inventory.topology.contract.doc) ? "'NULL'" : inventory.topology.contract.doc) +
				" and cib.LNID = " + (validationModel.isStringEmpty(inventory.topology.contract.lnid) ? "'NULL'" : inventory.topology.contract.lnid) +
				" and cib.NUMB = " + workOrder.equipmentNumber + 
				" and cib.ITM = i.ITM " +
				" and i.PRP0 in ('D','G','V') " +
				" and cib.Y56INDLA in ('A','I') ", 
				" order by DOCO, COCH, LNID, batchNumber, location, floor, placement, customerNumber ",
				false, topology.itemIds, false, null, (view == 'preWorkOrder'), topology.allocationIds, true, 2);
			
			// Create a topological location-floor map
			if (items.length > 0) {
				var uniqLocations = [];
				for (var i = 0 ; i < items.length ; i ++) {
					var item = items[i];
					var locationIndex = uniqLocations.indexOf(item.location);
					if (locationIndex == -1) {
						uniqLocations.push(item.location);
						inventory.topology.locations.push({name: item.location, floors: [{name: item.floor}]}); 
					} else {
						inventory.topology.locations[locationIndex].floors.push({name: item.floor});
					}
				}
			}
			
			break;
		}
	}
	
	// Populate the items list
	inventory.loadSegTopItems = function (location, floor) {
		// Find all items
		var whereClause = 
			" and cib.DOCO = " + (validationModel.isStringEmpty(inventory.topology.contract.doc) ? "'NULL'" : inventory.topology.contract.doc) +
			" and cib.LNID = " + (validationModel.isStringEmpty(inventory.topology.contract.lnid) ? "'NULL'" : inventory.topology.contract.lnid) +
			" and cib.NUMB = " + workOrder.equipmentNumber + " \n" +
			" and cib.ITM = i.ITM \n" +
			" and i.PRP0 in ('D','G','V') \n" +
			" and cib.Y56INDLA in ('A','I') \n" +
			((!validationModel.isNull(location) && location != 'ALL') ? " and cib.Y56EMPLA = '" + ((location.length == 0) ? 'NULL' : location) + "' " : "") +
			((!validationModel.isNull(floor) && floor != 'ALL') ? " and cib.Y56ETAG = '" + ((floor.length == 0) ? 'NULL' : floor) + "' " : ""); 
		var sortOrder =
			" order by DOCO, COCH, LNID, batchNumber, location, floor, placement, customerNumber \n";
		var groupByTopology = (!validationModel.isNull(floor) && floor != 'ALL' && !validationModel.isNull(location) && location != 'ALL');

		var items = itemModel.findItemsByWhereClauseAndSortOrder(
			whereClause, sortOrder, false, inventory.topology.itemIds, !groupByTopology, null, (view == 'preWorkOrder'), 
			inventory.topology.allocationIds, groupByTopology, undefined, 50, inventory.topologyOffset*50);
		
		// If we are at the start, get the total number of results so we can update the numbers in the labels up/down
		if (inventory.topologyOffset == 0) {
			inventory.topology.quantity = parseInt(itemModel.findItemsByWhereClauseAndSortOrder(
				whereClause, sortOrder, false, inventory.topology.itemIds, !groupByTopology, null, (view == 'preWorkOrder'), 
				inventory.topology.allocationIds, groupByTopology, null, null, null, true)[0].rowCount);
		}
		
		var	segTopItemsMasterData = [];
		for (var i = 0 ; i < items.length ; i ++) {
			var item = items[i];
			var rowItem= {};
			rowItem.lblQuantity = item.quantity;
			rowItem.lblCode = item.usualCode;
			rowItem.lblName = putToLine(item.name.trim(), 30);
			if (groupByTopology) {
				rowItem.lblPlacement = (validationModel.isNull(item.placement) || item.placement.length == 0) ? ' ' :  item.placement;
				rowItem.lblZ = "Z";
				rowItem.lblZone = (validationModel.isNull(item.zone) || item.zone.length == 0) ? ' ' :  item.zone;
			} else {
				rowItem.lblPlacement = "";
				rowItem.lblZ = "";
				rowItem.lblZone = "";
			}
			segTopItemsMasterData.push(rowItem);
		}
		frmInventory.segTopItems.setData(segTopItemsMasterData);
		
		// Update the up/down labels
		frmInventory.tabInventory.lblUp.text = 	 'Résultats Précedents (' + inventory.topologyOffset * 50 + ')';
		frmInventory.tabInventory.lblDown.text = ((inventory.topology.quantity - ((inventory.topologyOffset+1) * 50)) < 0) ? 
												 'Résultats Suivants (0)' :
												 'Résultats Suivants (' + (inventory.topology.quantity - ((inventory.topologyOffset+1)*50)) + ')';
	}
	
	// Populate the floor dropdown
	inventory.loadCbxTopFloor = function (locationName) {
		var cbxTopFloorMasterData = [["ALL","(toutes étages)"]];
		var location = inventory.topology.locations.filter(function(location) {return location.name == locationName})[0];
		var hasUnknownFloor = false;
		for (var i = 0 ; i < location.floors.length ; i ++) {
			var floor = location.floors[i];
			if (validationModel.isNull(floor.name) || floor.name.length == 0) {
				if (!hasUnknownFloor) cbxTopFloorMasterData.push([floor.name, 'Inconnu']);
				hasUnknownFloor = true;
			} else {
				cbxTopFloorMasterData.push([floor.name, floor.name]);
			}
		}
		frmInventory.cbxTopFloor.masterData = cbxTopFloorMasterData;
		frmInventory.cbxTopFloor.selectedKey = "ALL";
	}
	
	// Populate the location dropdown
	var cbxTopLocationMasterData = [["ALL","(tous bâtiments)"]];
	for (var i = 0 ; i < inventory.topology.locations.length ; i ++) {
		var location = inventory.topology.locations[i];
		var hasUnknownLocation = false;
		if (validationModel.isNull(location.name) || location.name.length == 0) {
			if (!hasUnknownLocation) cbxTopLocationMasterData.push([location.name, 'Inconnu']);
			hasUnknownLocation = true;
		} else {
			cbxTopLocationMasterData.push([location.name, location.name]);
		}
	}
	frmInventory.cbxTopLocation.masterData = cbxTopLocationMasterData;
	frmInventory.cbxTopLocation.selectedKey = "ALL";
	
	frmInventory.hbxTopFloor.isVisible = false;
	frmInventory.cbxTopFloor.masterData = [];
	
	if (!validationModel.isNull(inventory.topology.contract)) {
		inventory.loadSegTopItems(frmInventory.cbxTopLocation.selectedKey,frmInventory.cbxTopFloor.selectedKey);
		inventory.refreshTopology = false;
	}
	
	// Dismiss loading screen
    kony.application.dismissLoadingScreen();
}

inventory.onCbxTopLocationSelection = function (location) {
	if (location == "ALL") {
		frmInventory.hbxTopFloor.isVisible = false;
		frmInventory.cbxTopFloor.masterData = [];
	} else {
		inventory.loadCbxTopFloor(location);
		frmInventory.hbxTopFloor.isVisible = true;
	}
	
	inventory.topologyOffset = 0;
	inventory.loadSegTopItems(frmInventory.cbxTopLocation.selectedKey,frmInventory.cbxTopFloor.selectedKey);
}

inventory.onCbxTopFloorSelection = function (floor) {
	inventory.topologyOffset = 0;
	inventory.loadSegTopItems(frmInventory.cbxTopLocation.selectedKey,frmInventory.cbxTopFloor.selectedKey);
}
inventory.clear = function (){
	frmInventory.btnTabFirst.skin='skntabBtn';
  	frmInventory.btnTabPrev.skin='skntabBtn';
  	frmInventory.btnTabHdr1.skin='skntabBtn';
  	frmInventory.btnTabHdr2.skin='skntabBtn';
}

inventory.onTabClick = function (tabIndex) {
  //Arati: changed for design issue #19 Start here
  	inventory.clear();
  	if (tabIndex == 0){
       frmInventory.btnTabFirst.skin='sknTabBtnFoc';
    } else if (tabIndex == 1) {
       frmInventory.btnTabPrev.skin='sknTabBtnFoc';
    } else if (tabIndex == 2) {
       frmInventory.btnTabHdr1.skin='sknTabBtnFoc';
    } else if (tabIndex == 3) {
       frmInventory.btnTabHdr2.skin='sknTabBtnFoc';      
    }
  //Arati: changed for design issue #19 end here
  
	if (tabIndex == 2 && inventory.refreshTopology) {
		inventory.loadTopology(inventory.view);
	} else if (tabIndex == 3 && inventory.refreshItems) {
		inventory.loadItems();
	}
}

inventory.loadItems = function () {
	inventory.getItems = function (setSize, excludeIds) {
		// Show loading screen and block UI
    	showSyncLoadingScreen("Application du filtre ..");
		
    	var whereClause =
    		" and cib.NUMB = " + workOrder.equipmentNumber + 
			" and cib.ITM = i.ITM " +
			" and i.PRP0 in ('D','G','V') " +
			" and cib.Y56INDLA in ('A','I') "
			+ (frmInventory.txtBatchNo.text.length == 0 ? "" : "and i.usualcode like '" + frmInventory.txtBatchNo.text + "%' ")
			+ ((!unitec.lang.isNull(frmInventory.cbxBuilding.selectedKey) && frmInventory.cbxBuilding.selectedKey != 'NONE') ? "and cib.Y56EMPLA = '" + frmInventory.cbxBuilding.selectedKey + "' " : "")
			+ ((!unitec.lang.isNull(frmInventory.cbxFloor.selectedKey) && frmInventory.cbxFloor.selectedKey != 'NONE') ? "and cib.Y56ETAG = '" + frmInventory.cbxFloor.selectedKey + "' " : "")
			+ ((!unitec.lang.isNull(frmInventory.cbxPlace.selectedKey) && frmInventory.cbxPlace.selectedKey != 'NONE') ? "and cib.Y56LIEU = '" + frmInventory.cbxPlace.selectedKey + "' " : "")
			+ (inventory.preIdentified ? " and cib.LOTN in ('NULL', '') " : "")
			+ ((!validationModel.isNull(excludeIds) && excludeIds.length > 0) ? " and cib.id not in (" + excludeIds.join(",")  + ") ": "")
             + (frmInventory.txtCustomerNumber.text.length == 0 ? "" : "and ZONLA = '" + frmInventory.txtCustomerNumber.text.replace(',','.') + "' \n")
		;
		
		var sortOrder = " order by DOCO, COCH, LNID, batchNumber, location, floor, placement, customerNumber " + (!validationModel.isNull(setSize) ? "limit " + setSize + " " : "");
		var filteredItems = itemModel.findItemsByWhereClauseAndSortOrder(whereClause, sortOrder, false, undefined);
		// Dismiss loading screen
    	kony.application.dismissLoadingScreen();
    	
    	return filteredItems;
	}

	inventory.addElementsToBottom = function (elementCount) {
		var currentLastElementIndex = inventory.lastElementIndex;

		// Find more items if you currently don't have enough
		// in memory to add to the list	
		if (currentLastElementIndex + elementCount + 1 > inventory.elements.length) {
			var addedItems = inventory.getItems(50, inventory.elementIds);
			inventory.elements = inventory.elements.concat(addedItems);
			inventory.elementIds = inventory.elementIds.concat(addedItems.map(function(element) {return element.id;}));
		}
		
		// Add new items to the items list
		var	segItemsMasterData = [];
		for (var i = currentLastElementIndex+1; (i < currentLastElementIndex + elementCount + 1 && i < inventory.elements.length); i ++) {
			var isInWorkOrderContract = (
					(workOrder.DOC == inventory.elements[i].DOCO)
				&&	(workOrder.LNID == inventory.elements[i].LNID)
			);
			
			if(inventory.preIdentified && !isInWorkOrderContract) continue;
			
			var item = {};
			var placement = inventory.elements[i].placement != "" ? inventory.elements[i].placement : "non spécifié";
			var floor = inventory.elements[i].floor != "" ? inventory.elements[i].floor : "non spécifié";
			var location = inventory.elements[i].location != "" ? inventory.elements[i].location : "non spécifié";
			
          			item.number = i;

			item.lblCar = inventory.elements[i].name;
			item.imgTasksFinished = {src:""};
			item.lblPlace = location.concat('/').concat(floor).concat('/').concat(placement);
          	item.lblZonla = (validationModel.isNull(inventory.elements[i].ZONLA) || inventory.elements[i].ZONLA == "" || inventory.elements[i].ZONLA == " ")?"":"Num. client : "+inventory.elements[i].ZONLA;
			item.lblMotive = inventory.elements[i].productionDate != ""
			?	"Mise en service : " + dateFunctions.YearFirstToDayFirst(inventory.elements[i].productionDate)
			:	"";
			
			if(!inventory.preIdentified) { // display all items
				var hasBarCode = inventory.elements[i].batchNumber != "";
              	//Arati:Changed code for JIRA UI-117 start here
				if(isInWorkOrderContract && hasBarCode && workOrder.typeCode == 'I') {
					item.lblId = "ID : " + inventory.elements[i].batchNumber;
                  	switch(inventory.checkDoneTasks(inventory.elements[i])) {
						case 1 :
							item.imgTasksFinished = {src:"check.png"};
							break;
						default :
							item.imgTasksFinished = {src:""};
							break;
					} 
					item.vbTplItem = {skin : "sknVBBtnFocusSquare"}; 
				}	//Arati:Changed code for JIRA UI-117 end here 
              	else if(isInWorkOrderContract && hasBarCode) {
                  item.lblId = "ID : " + inventory.elements[i].batchNumber;
					switch(inventory.checkUnfinishedTasks(inventory.elements[i])) {
						case 1 :
							item.imgTasksFinished = {src:"close.png"};
							break;
						case 0 :
							item.imgTasksFinished = {src:"check.png"};
							break;
						default :
							item.imgTasksFinished = {src:""};
							break;
					} 
					item.vbTplItem = {skin : "sknVBBtnFocusSquare"}; 
                }
				else if(!isInWorkOrderContract) {
					item.lblId = "autre contrat";
					item.vbTplItem = {skin : ""};
				}
				else {
					item.lblId = "aucun code-barre";
					item.vbTplItem = {skin : ""};
				}
			}
			else { // display only items with no barcode
				item.lblId = "";
				switch(inventory.checkUnfinishedTasks(inventory.elements[i])) {
					case 1 :
						item.imgTasksFinished = {src:"close.png"};
						break;
					case 0 :
						item.imgTasksFinished = {src:"check.png"};
						break;
					default :
						item.imgTasksFinished = {src:""};
						break;
				}
				item.vbTplItem = {skin : "sknVBBtnFocusSquare"};
			}
          
          			//alert(inventory.elements[i]);
			var CK01Check = false;
			var CK01 = itemModel.findCK01byLOTNandDOCO(inventory.elements[i].id, workOrder.doco);
			
						if(inventory.saveFilter.Realised == true && inventory.saveFilter.Refused == true && inventory.saveFilter.Statued == true){

				CK01Check = true;
			}else{
								if(inventory.saveFilter.Realised == true){

					if(CK01 == 'O'){
						CK01Check = true;
						}
				}
								if(inventory.saveFilter.Refused == true){

					if(CK01 == 'N'){
						CK01Check = true;
					}
				}
								if(inventory.saveFilter.Statued == true){

					if(CK01 == 'NULL'){
						CK01Check = true;
					}
				}
			}
			
						if(CK01Check == true || inventory.filter == false){


				segItemsMasterData.push(item);
			}

			inventory.lastElementIndex++;
		}
		frmInventory.segItems.addAll(segItemsMasterData);
      		inventory.initFilter = false;

	}
	
	inventory.lastElementIndex = -1;
	inventory.firstElementIndex = 0;
	inventory.elementIds = [];
	frmInventory.segItems.removeAll();
	inventory.elements = inventory.getItems(50, inventory.elementIds);
	inventory.elementIds = inventory.elements.map(function(element) {return element.id;});
	inventory.addElementsToBottom(50);
	inventory.refreshItems = false;
}

inventory.onItemsReachingEnd = function () {
	// Show loading screen and block UI
	showSyncLoadingScreen();

	inventory.addElementsToBottom(50);
	
	// Dismiss loading screen and release UI once elements are loaded
	kony.application.dismissLoadingScreen();
}

inventory.onItemSelection = function () {
	if (!inventory.isReadOnly) {
		var selectedItem = inventory.elements[frmInventory.segItems.selectedRowItems[0].number];

		inventory.confirmSelection(selectedItem);
	}
}

inventory.confirmSelection = function(selectedItem) {
	if ((workOrder.DOC != selectedItem.DOCO) ||	(workOrder.LNID != selectedItem.LNID)) {
		if (!woShift.isAvailable(selectedItem))
			popupModel.showPopError("Cet appareil n'est pas associé au contrat du BT");
		return;
	}

	if( (!validationModel.isNull(selectedItem.batchNumber) && selectedItem.batchNumber.length != 0) || workOrder.process == 'CHUBB' ) {
		if(selectedItem.type == 'D') {
			itemReplace.init(workOrder, selectedItem.batchNumber, selectedItem, 'N');
			return;
		}
		itemVerify.item = selectedItem;
		itemVerify.item.isScanned = 'N';
		taskModel.setTasksScannedFlagForItem(itemVerify.item, workOrder);
		frmItemVerify.show();
	} else if(inventory.preIdentified && !validationModel.isNull(frmItemScan.txtBarCode.text) && frmItemScan.txtBarCode.text.length != 0) {
		var isScanned = inventory.isScanned ? 'O' : 'N';
		if(selectedItem.type == 'D') {
			itemReplace.init(workOrder, frmItemScan.txtBarCode.text, selectedItem, isScanned);
			return;
		}
		selectedItem.batchNumber = frmItemScan.txtBarCode.text;
		itemVerify.item = selectedItem;
		itemVerify.item.isScanned = isScanned;
		inventory.isScanned = false;
		taskModel.setTasksScannedFlagForItem(itemVerify.item, workOrder);
		frmItemVerify.show();
	} else {
		popupModel.showPopError("cet appareil n'est associé à aucun code barre");
		return;
	}
};

inventory.checkItemFromCatalog = function(itemArticleCode) {
	
	function findItemFromArticleCodeCB(res) {

		var selectedItem = res[0];
		selectedItem.id = "NULL";
		selectedItem.batchNumber = "NULL";
		selectedItem.productionDate = "";
		selectedItem.location = "";
		selectedItem.floor = "";
		selectedItem.placement = "";
		selectedItem.customerNumber = "";
		selectedItem.jdeId = 'NULL';
		selectedItem.statusReason = 'NULL';
		selectedItem.statusReasonId = 'NULL';
		selectedItem.status = 'A';
		selectedItem.DOCO = workOrder.DOC;
		selectedItem.COCH = workOrder.COCH;
		selectedItem.LNID = workOrder.LNID;
		inventory.confirmSelection(selectedItem);
	}
	
	function findItemFromArticleCodeCBe(err) {
		popupModel.showPopError("error finding item : " + err);
	}
	
	var sql = "select description1 ||  CASE WHEN description2 = 'NULL' THEN '' ELSE description2 END name, ITM articleId, usualcode usualCode from Item where usualcode = '" + itemArticleCode[0] + "' ";
	executeSql(sql, findItemFromArticleCodeCB, findItemFromArticleCodeCBe);
};

inventory.onBtnAddItemClick = function () {
	catalogSearch.resetFullSearchFields();  
	catalogSearch.catalogType = "maintenance";
	catalogSearch.selectionBehavior = 'single';
	frmCatalogSearch.show();
}

inventory.checkUnfinishedTasks = function(item) {
	if(validationModel.isNull(item.id) || item.id.length == 0) return -1;
	var itemPlannedTasks = taskModel.findTasksByItemWorkOrderAndWhereClause(null, item, workOrder, 'planned');
	if(itemPlannedTasks.length==0) return -1;
  	var unfinishedTasksCount = 0;
	for(var i=0;i<itemPlannedTasks.length;i++) {
		if(itemPlannedTasks[i].status != 'O' && itemPlannedTasks[i].status != 'N') {
          	unfinishedTasksCount++;
			break;
		}
	}
	return unfinishedTasksCount;
}
//Arati:Changed code for JIRA UI-117 start here
//Check Done Task verifies 'nonPlanned' tasks for workOrder Type 'I' 
inventory.checkDoneTasks = function(item) {
  	if(validationModel.isNull(item.id) || item.id.length == 0) return -1;
	var itemPlannedTasks = taskModel.findTasksByItemWorkOrderAndWhereClause(null, item, workOrder, 'nonPlanned');
	if(itemPlannedTasks.length==0) return -1;
	var doneTasksCount = 0;
	for(var i=0;i<itemPlannedTasks.length;i++) {
		if(itemPlannedTasks[i].status == 'O') {	
			doneTasksCount++;
			break;
		}
	}
	return doneTasksCount;
}
//Arati:Changed code for JIRA UI-117 end here