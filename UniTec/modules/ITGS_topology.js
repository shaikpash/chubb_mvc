topology = {
	locations: [],
    lastSelectedIndex: null,
	isReadOnly : false
};

topology.init = function(){
	
}

topology.onBtnReturnClick = function () {
	navigationModel.doReturn();
}

topology.onBtnSaveClick = function () {
	// Verify all buildings have at least one floor defined
	var hasLocationWithNoFloors = false;
	
	if (topology.locations.length == 0) {
		popupModel.showPopError("Veuillez définir au moins 1 bâtiment avec 1 étage.");
		hasLocationWithNoFloors = true;
	}
	else {
		for (var i = 0 ; i < topology.locations.length ; i ++) {
			var location = topology.locations[i];
			if (location.floors.length == 0 || (location.floors.length == 1 && location.floors[0].name.length == 0)) {
				popupModel.showPopError("Veuillez définir au minimum un étage pour le bâtiment [" + location.name + "]");
				hasLocationWithNoFloors = true;
				break;
			}
		}
	}
	
	if (!hasLocationWithNoFloors)
		frmInventoryAllocation.show();
}

topology.preshow = function () {
  topology.isReadOnly = WOValidationSignature.isValid(workOrder) || (workOrder.statusCode == 70);
  
  var appMenu = [
		["topology.BACK", "Retour", "left.png", topology.onBtnReturnClick],
		["topology.VALID", "Valider", "check.png", topology.onBtnSaveClick]
	];


	otis.application.createAppMenu("topologyAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
  

	otis.application.setCurrentAppMenu("topologyAppMenu");//Dhaval:Invocation of custom app menu

	frmTopology.clientLabel.text = workOrder.getReference();
	frmTopology.clientHB.backgroundColor = workOrder.color;
	frmTopology.clientHB.focusSkin = workOrder.skin;
	frmTopology.lblSession.text = '';//inventoryAllocation.session.id;
	frmTopology.segLocations.removeAll();
	frmTopology.segFloors.removeAll();
	frmTopology.segLocations.containerHeight = 28;
	frmTopology.segFloors.containerHeight = 28;
	frmTopology.hbxWarning.isVisible = false;
  
  	if(topology.isReadOnly) {
    	frmTopology.vbxLocationAdd.setEnabled(false);  
    	frmTopology.vbxLocationAdd.setEnabled(false);  
    } else {
    	frmTopology.vbxLocationAdd.setEnabled(true);  
    	frmTopology.vbxLocationAdd.setEnabled(true);  
    }
}
	
topology.postshow = function (fullSync) {

	topology.loadSegLocations = function (isLocalRefresh) {
		// Save existing selections (if any)
		var selectedRowIndices = frmTopology.segLocations.selectedRowIndices;
      
	
		// Refresh the topology for the workOrder
		if(!validationModel.isNull(isLocalRefresh) && isLocalRefresh) {
			topology.locations = topologyModel.findTopologyByWorkOrder(workOrder).locations;
		}
      
      	//topology.locations = de.itgs.javascript.Array.sortByParam(topology.locations,'name');
		
		// Populate the locations segment
		var segLocationsMasterData = [];
		for (var i = 0 ; i < topology.locations.length ; i ++) {
			var location = {};
			location.lblName = topology.locations[i].name;
			location.imgEdit = {"src": "edit.png"};
			location.imgRemove = {"src": "bin.png"};
			location.id = topology.locations[i].id;
			location.type = topology.locations[i].type;
			location.parentId = topology.locations[i].parentId;
			segLocationsMasterData.push(location);
		}
		frmTopology.segLocations.setData(segLocationsMasterData);
		
		// Reset the selections from before (if applicable)
		if (!validationModel.isNull(selectedRowIndices) && selectedRowIndices.length > 0) {
			//frmTopology.segLocations.selectedRowIndices = selectedRowIndices;
			topology.onLocationSelection(selectedRowIndices[0][1][0]);
		}else{
          topology.onLocationSelection(topology.lastSelectedIndex);
        }
	}
	
	topology.loadSegFloors = function (location) {
		if (!validationModel.isNull(location)) {
			location.floors = de.itgs.javascript.Array.sortByParam(location.floors,'name');
		
			// Populate the floors segment
			var segFloorsMasterData = [];
			for (var i = 0 ; i < location.floors.length ; i ++) {
				if (location.floors[i].name.length > 0) {
					var floor = {};
					floor.lblName = location.floors[i].name;
					floor.lblParentName = location.name;
					floor.imgEdit = {"src": "edit.png"};
					floor.imgRemove = {"src": "bin.png"};
					floor.id = location.floors[i].id;
					floor.type = location.floors[i].type;
					floor.parentId = location.floors[i].parentId;
					segFloorsMasterData.push(floor);
				}
			}
			frmTopology.segFloors.setData(segFloorsMasterData);
		} else {
			frmTopology.segFloors.removeAll();
		}
	}
	
	topology.showGenComfirmationPop = function (label, callback) {
		popupModel.showPopError(label, callback);
	}
	
	// Find all items related to the current contract
    
	var itemTopology = itemModel.findItemsByWhereClauseAndSortOrder(
			" and cib.DOCO = '" + workOrder.DOC +"'"+ 
			" and cib.LNID = '" + workOrder.LNID +"'"+ //Dhaval:Added single quotes as LNID can be blank
			" and cib.NUMB = " + workOrder.equipmentNumber + 
			" and cib.ITM = i.ITM " +
			" and i.PRP0 in ('D','G','V') " +
			" and cib.Y56INDLA in ('A','I') " +
			" and not exists ( " +
			" select null " +
			" from topology loc " +
			" join topology floor " +
			" on floor.parentId = loc.id " +
			" and floor.type = 'FLOOR' " +
			" where loc.type = 'LOCATION' " +
			" and loc.name = cib.Y56EMPLA  " +
			" and floor.name = cib.Y56ETAG  " +
    	    " and loc.id = '" + workOrder.DOC +"'"+ 
			" ) ", 
			undefined, undefined, undefined, undefined, null, undefined, undefined, true, 2, 
			undefined, 
			(fullSync ? undefined : 0));

		frmTopology.segLocations.containerHeight = 28;
		frmTopology.segFloors.containerHeight = 28;
		frmTopology.hbxWarning.isVisible = false;

	// Get the topology for the workOrder (if any exists)
	var workOrderTopology = topologyModel.findTopologyByWorkOrder(workOrder);
	
	// Show loading screen and block UI
    showSyncLoadingScreen("Intégration de la topologie du parc avec celle du BT ..");

	// Go through all items related to the BT contract
	// and add those locations which are not yet part of the workorder topology 
	// (excluding those with no name)
	var locations = workOrderTopology.locations.map(function(location) { return location.name; });
	var newLocations = [];
  	var newLocationsName = [];
	var newFloors = [];
	for (var i = 0 ; i < itemTopology.length ; i ++) {
		var itemLocation = itemTopology[i].location;
		var locationIndex = locations.indexOf(itemLocation);
        var newlocationIndex = newLocationsName.indexOf(itemLocation);
		// If the item location does not exist yet in the workOrder topology, create and add it
		if (!validationModel.isNull(itemLocation) && itemLocation.length > 0 && locationIndex == -1 && newlocationIndex == -1 ) {
			var location = {name: itemLocation, parentId: null, type: 'LOCATION', floors: []};
			// Create all the floor linked to the location (excluding if with no name)	
			newLocations.push(location);
          	newLocationsName.push(location.name);
		// If the item location already exists in the workOrder topology, check 
		// whether the floor is already there
		}
	}
  
  newLocations = topologyModel.createTopology(newLocations, workOrder);
  
  var workOrderTopology = topologyModel.findTopologyByWorkOrder(workOrder);
  	locations = workOrderTopology.locations.map(function(location) { return location.name; });
	var newLocations = [];
	var newFloors = [];
	for (var i = 0 ; i < itemTopology.length ; i ++) {
		var itemLocation = itemTopology[i].location;
		var locationIndex = locations.indexOf(itemLocation);
        var newlocationIndex = newLocations.indexOf(itemLocation);
		// If the item location does not exist yet in the workOrder topology, create and add it
		if (!validationModel.isNull(itemLocation) && itemLocation.length > 0 && locationIndex == -1) {
			var location = {name: itemLocation, parentId: null, type: 'LOCATION', floors: []};
			// Create all the floor linked to the location (excluding if with no name)
			var itemFloor = itemTopology[i].floor;
			if (!validationModel.isNull(itemFloor) && itemFloor.length > 0) {
				location.floors.push({name: itemFloor, parentId: null, type: 'FLOOR'});
			}
			newLocations.push(location);
		// If the item location already exists in the workOrder topology, check 
		// whether the floor is already there
		} else if (!validationModel.isNull(itemLocation) && itemLocation.length > 0 && locationIndex > -1) {
          
			var floors = workOrderTopology.locations[locationIndex].floors.map(function(floor) { return floor.name; });
			var itemFloor = itemTopology[i].floor;
			if (!validationModel.isNull(itemFloor) && itemFloor.length > 0 && floors.indexOf(itemFloor) == -1) {
				newFloors.push({name: itemFloor, parentId: workOrderTopology.locations[locationIndex].id, type: 'FLOOR'});
			}
		}
	}
	
	// Create all new locations (items related to the BT contract)
	newLocations = topologyModel.createTopology(newLocations, workOrder);
	for (var i = 0 ; i < newLocations.length ; i ++) {
		if (!validationModel.isNull(newLocations[i].id) && newLocations[i].floors.length > 0) {
			for (var j = 0 ; j < newLocations[i].floors.length ; j ++) {
				newLocations[i].floors[j].parentId = newLocations[i].id;
				newFloors.push(newLocations[i].floors[j]);
			}				
		}
	}

	// Create all new floors (items related to the BT contract)
	newFloors = topologyModel.createTopology(newFloors, workOrder);
	for (var i = 0 ; i < newFloors.length ; i ++) {
		var locations = workOrderTopology.locations.filter(function(location){return location.id == newFloors[i].parentId});
		if (locations.length > 0) locations[0].floors.push(newFloors[i]);
	}
	workOrderTopology.locations = workOrderTopology.locations.concat(newLocations);
	
	topology.getItemsByLocation = function (location) {
		return itemModel.findItemsByWhereClauseAndSortOrder(
			" and cib.DOCO = " + workOrder.DOC + 
			" and cib.LNID = " + workOrder.LNID + 
			" and cib.NUMB = " + workOrder.equipmentNumber + 
			" and cib.ITM = i.ITM " +
			" and i.PRP0 in ('D','G','V') " +
			" and cib.Y56INDLA in ('A','I') " +
			" and cib.Y56EMPLA = '" + location + "' ");
	}
	
	topology.getItemsByFloor = function (location, floor) {
		return itemModel.findItemsByWhereClauseAndSortOrder(
			" and cib.DOCO = " + workOrder.DOC + 
			" and cib.LNID = " + workOrder.LNID + 
			" and cib.NUMB = " + workOrder.equipmentNumber + 
			" and cib.ITM = i.ITM " +
			" and i.PRP0 in ('D','G','V') " +
			" and cib.Y56INDLA in ('A','I') " +
			" and cib.Y56EMPLA = '" + location + "' " +
			" and cib.Y56ETAG = '" + floor + "' ");
	}

	topology.locations = workOrderTopology.locations;

	// Dismiss loading screen
    kony.application.dismissLoadingScreen();
	
	// Load the locations segment
	topology.loadSegLocations();
}

topology.onLocationSelection = function (rowIndex) {
	var location = topology.locations[rowIndex];
	topology.loadSegFloors(location);
}

topology.onBtnSyncClick = function () {

	topology.onBtnSyncClickCB = function () {
		topology.postshow(true);
	}

	popupModel.showPopError("Voulez-vous intégrer la topologie du parc entier?\n(Cela peut prendre quelques minutes!)", topology.onBtnSyncClickCB);
}

topology.onBtnLocationAddClick = function () {
	if (topology.isReadOnly) return;

	topology.onBtnLocationAddClickCB = function () {
		if (popDefault.txt.text.length > 0) {
      //    var popText = popDefault.txt.text.toUpperCase();
  		//		popText = removeAccent(popText);
			// Add the new location to the workOrder topology (if it doesn't exist already)
						var topologyItem = {name: popDefault.txt.text, parentId: null, type: 'LOCATION'};
//var topologyItem = {name: popText, parentId: null, type: 'LOCATION'};
			var topologyItems = topologyModel.findTopologyItems(workOrder, topologyItem);
			if (topologyItems.length == 0) {
				var location = topologyModel.createTopology([topologyItem], workOrder);
				// Update the local topology
				if(!validationModel.isNull(location) && location.length > 0) topology.loadSegLocations(true);
			}
		}
	}

	var popupConfig = [
		{confirm: true,
		 confirmCB: topology.onBtnLocationAddClickCB,
		 cancel: true},
		{lblText: 'Nom du nouveau bâtiment?',
		 txtText: '',
		 maxTxtLength: 20}
	];
	popupModel.showPopDefault(popupConfig);
}

topology.onBtnFloorAddClick = function () {
	if (topology.isReadOnly) return;
	
	if (frmTopology.segLocations.selectedItems == null || 
		frmTopology.segLocations.selectedItems.length == 0) {
		popupModel.showPopError("Veuillez choisir un bâtiment avant de créer une nouvel étage.");
	} else {
		var location = topology.locations[frmTopology.segLocations.selectedIndex[1]];
	
		topology.onBtnFloorAddClickCB = function () {
			if (popDefault.txt.text.length > 0) {
      //        var popText = popDefault.txt.text.toUpperCase();
  		//		popText = removeAccent(popText);
				// Add the new floor to the workOrder topology (if it doesn't exist already)
				var topologyItem = {name: popDefault.txt.text, parentId: location.id, type: 'FLOOR'};
				var topologyItems = topologyModel.findTopologyItems(workOrder, topologyItem);
				if (topologyItems.length == 0) {
					var floor = topologyModel.createTopology([topologyItem], workOrder);
					// Update the local topology
					if(!validationModel.isNull(floor) && floor.length > 0) {
						location.floors.push({name: topologyItem.name, id: floor[0].id, type: topologyItem.type});
						topology.loadSegFloors(location);
					}
				}
			}
		}
	
		var popupConfig = [
			{confirm: true,
			 confirmCB: topology.onBtnFloorAddClickCB,
			 cancel: true},
			{lblText: 'Nom du nouvel étage?',
			 txtText: '',
			 maxTxtLength: 10}
		];
		popupModel.showPopDefault(popupConfig);
	} 
}

topology.onBtnTopologyEditClick = function (segment, rowIndex) {
	if (topology.isReadOnly) return;  
  
	var selectedItem = frmTopology[segment].data[rowIndex];

	topology.onBtnTopologyEditClickCB = function () {
		if (popDefault.txt.text.length > 0) {
      //    var popText = popDefault.txt.text.toUpperCase();
  		//		popText = removeAccent(popText);
			// Update the location/floor in the workOrder topology as well as the related items
			var items = (segment == "segLocations") ? topology.getItemsByLocation(selectedItem.lblName) :
													  topology.getItemsByFloor(selectedItem.lblParentName, selectedItem.lblName);

			var topologyItem = topologyModel.updateTopology(
				{id: selectedItem.id, 
				 name: popDefault.txt.text, 
				 type: selectedItem.type,
				 parentId: selectedItem.parentId,
				 items: items });
			
			// Refresh the page
			topology.loadSegLocations(true);
		}							 
	}
	
	var popupConfig = [
		{confirm: true,
		 confirmCB: topology.onBtnTopologyEditClickCB,
		 cancel: true},
		{lblText: (segment == "segLocations") ? "Nouveau nom du bâtiment?" : "Nouveau nom de l'étage",
		 txtText: selectedItem.lblName,
		 maxTxtLength: (segment == "segLocations") ? 20 : 10}
	];
	popupModel.showPopDefault(popupConfig);
}

topology.onBtnTopologyRemoveClick = function (segment, rowIndex) {
	if (topology.isReadOnly) return;
  
	var selectedItem = frmTopology[segment].data[rowIndex];

	topology.onBtnTopologyRemoveClickCB = function () {
		// Remove the location/floor from the workOrder topology as well as the related items
		selectedItem.items = (segment == "segLocations") ? topology.getItemsByLocation(selectedItem.lblName) :
												  topology.getItemsByFloor(selectedItem.lblParentName, selectedItem.lblName);
		topologyModel.deleteTopology(selectedItem);
		
		// Refresh the page
		topology.loadSegLocations(true);
	}
	var label = (segment == "segLocations") ? "Supprimer ce bâtiment?\n" : "Supprimer cet étage?\n";
	popupModel.showPopError(label + selectedItem.lblName, topology.onBtnTopologyRemoveClickCB);
}
