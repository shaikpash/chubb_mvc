chubbTaskTopology = {
	itemIds: [],
	items: [],
	locations: [],
	topologyOffset: 0,
	quantity: 0
};

chubbTaskTopology.init = function(){
	var appMenu = [
		["chubbTaskTopology.BACK", "Retour", "left.png", onBackClick]
	];
  //Dhaval:Fix for app menu not working
  function onBackClick(){
    navigationModel.doReturn();
  }

	otis.application.createAppMenu("chubbTaskTopologyMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

chubbTaskTopology.preShow = function () {
	otis.application.setCurrentAppMenu("chubbTaskTopologyMenu");
	
	frmChubbTaskTopology.hbxTopReference.lblTopReference.text = workOrder.getReference();
	frmChubbTaskTopology.hbxTopReference.backgroundColor = workOrder.color;
	frmChubbTaskTopology.hbxTopReference.focusSkin = workOrder.skin;
	
	chubbTaskTopology.quantity = 0;
	chubbTaskTopology.topologyOffset = 0;
	chubbTaskTopology.locations = [];
	chubbTaskTopology.items = [];
}

chubbTaskTopology.postShow = function () {
	// Create a topological location-floor map
	var whereClause = 
			" and cib.NUMB = " + workOrder.equipmentNumber + " \n" +
			" and cib.ITM = i.ITM \n" +
			" and i.PRP0 in ('D','G','V') \n" +
			" and cib.Y56INDLA in ('A','I') \n"; 
	var sortOrder =
			" order by DOCO, COCH, LNID, batchNumber, location, floor, placement, customerNumber \n";
	var groupByTopology = true;
	chubbTaskTopology.items = itemModel.findItemsByWhereClauseAndSortOrder(whereClause, sortOrder, undefined, chubbTaskTopology.itemIds, !groupByTopology, 
	         												 undefined, undefined, undefined, groupByTopology,
															 undefined, 50, chubbTaskTopology.topologyOffset*50);

	if (chubbTaskTopology.items.length > 0) {
		var uniqLocations = [];
		for (var i = 0 ; i < chubbTaskTopology.items.length ; i ++) {
			var item = chubbTaskTopology.items[i];
			var locationIndex = uniqLocations.indexOf(item.location);
			if (locationIndex == -1) {
				uniqLocations.push(item.location);
				chubbTaskTopology.locations.push({name: item.location, floors: [{name: item.floor}]}); 
			} else {
				chubbTaskTopology.locations[locationIndex].floors.push({name: item.floor});
			}
		}
	}

	// Find the items related to the selected task(s)
	chubbTaskTopology.loadSegTopItems = function(location, floor) {
		var whereClause = 
			" and cib.NUMB = " + workOrder.equipmentNumber + " \n" +
			" and cib.ITM = i.ITM \n" +
			" and i.PRP0 in ('D','G','V') \n" +
			" and cib.Y56INDLA in ('A','I') \n" +
			((!validationModel.isNull(location) && location != 'ALL') ? 
			" and cib.Y56EMPLA = '" + ((location.length == 0) ? 'NULL' : location) + "' " : "") +
			((!validationModel.isNull(floor) && floor != 'ALL') ? 
			" and cib.Y56ETAG = '" + ((floor.length == 0) ? 'NULL' : floor) + "' " : ""); 
		var sortOrder =
			" order by DOCO, COCH, LNID, batchNumber, location, floor, placement, customerNumber \n";
		var groupByTopology = (!validationModel.isNull(floor) && floor != 'ALL' && !validationModel.isNull(location) && location != 'ALL');
		chubbTaskTopology.items = itemModel.findItemsByWhereClauseAndSortOrder(whereClause, sortOrder, undefined, chubbTaskTopology.itemIds, !groupByTopology, 
		         												 undefined, undefined, undefined, groupByTopology,
																 undefined, 50, chubbTaskTopology.topologyOffset*50);
		
		// If we are at the start, get the total number of results so we can update the numbers in the labels up/down
		if (chubbTaskTopology.topologyOffset == 0) {
			chubbTaskTopology.quantity = parseInt(itemModel.findItemsByWhereClauseAndSortOrder(
				whereClause, sortOrder, undefined, chubbTaskTopology.itemIds, !groupByTopology, undefined, undefined, 
				undefined, groupByTopology, undefined, undefined, undefined, true)[0].rowCount);
		}
		
		var	segTopItemsMasterData = [];
		for (var i = 0 ; i < chubbTaskTopology.items.length ; i ++) {
			var item = chubbTaskTopology.items[i];
			var rowItem = {};
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
		frmChubbTaskTopology.segTopItems.setData(segTopItemsMasterData);
		
		// Update the up/down labels
		frmChubbTaskTopology.lblUp.text = 	 'Résultats Précedents (' + chubbTaskTopology.topologyOffset * 50 + ')';
		frmChubbTaskTopology.lblDown.text = ((chubbTaskTopology.quantity - ((chubbTaskTopology.topologyOffset+1) * 50)) < 0) ? 
											 'Résultats Suivants (0)' :
											 'Résultats Suivants (' + (chubbTaskTopology.quantity - ((chubbTaskTopology.topologyOffset+1)*50)) + ')';
	}
	
	// Populate the floor dropdown
	chubbTaskTopology.loadCbxTopFloor = function (locationName) {
		var cbxTopFloorMasterData = [["ALL","(toutes étages)"]];
		var location = chubbTaskTopology.locations.filter(function(location) {return location.name == locationName})[0];
		var hasUnknownFloor = false;
		for (var i = 0 ; i < location.floors.length ; i ++) {
			var floor = location.floors[i];
			if (validationModel.isNull(floor.name) || floor.name.length == 0) {
				if (!hasUnknownFloor)
					cbxTopFloorMasterData.push([floor.name, 'Inconnu']);
				hasUnknownFloor = true;
			} else {
				cbxTopFloorMasterData.push([floor.name, floor.name]);
			}
		}
		frmChubbTaskTopology.cbxTopFloor.masterData = cbxTopFloorMasterData;
		frmChubbTaskTopology.cbxTopFloor.selectedKey = "ALL";
	}
	
	// Populate the location dropdown
	var cbxTopLocationMasterData = [["ALL","(tous bâtiments)"]];
	for (var i = 0 ; i < chubbTaskTopology.locations.length ; i ++) {
		var location = chubbTaskTopology.locations[i];
		var hasUnknownLocation = false;
		if (validationModel.isNull(location.name) || location.name.length == 0) {
			if (!hasUnknownLocation)
				cbxTopLocationMasterData.push([location.name, 'Inconnu']);
			hasUnknownLocation = true;
		} else {
			cbxTopLocationMasterData.push([location.name, location.name]);
		}
	}
	frmChubbTaskTopology.cbxTopLocation.masterData = cbxTopLocationMasterData;
	frmChubbTaskTopology.cbxTopLocation.selectedKey = "ALL";
	
	frmChubbTaskTopology.hbxTopFloor.isVisible = false;
	frmChubbTaskTopology.cbxTopFloor.masterData = [];
	
	chubbTaskTopology.topologyOffset = 0;
	chubbTaskTopology.loadSegTopItems();
}

chubbTaskTopology.onCbxTopLocationSelection = function (location) {
	if (location == "ALL") {
		frmChubbTaskTopology.hbxTopFloor.isVisible = false;
		frmChubbTaskTopology.cbxTopFloor.masterData = [];
	} else {
		chubbTaskTopology.loadCbxTopFloor(location);
		frmChubbTaskTopology.hbxTopFloor.isVisible = true;
	}
	
	chubbTaskTopology.topologyOffset = 0;
	chubbTaskTopology.loadSegTopItems(frmChubbTaskTopology.cbxTopLocation.selectedKey,frmChubbTaskTopology.cbxTopFloor.selectedKey);
}

chubbTaskTopology.onCbxTopFloorSelection = function (floor) {
	chubbTaskTopology.topologyOffset = 0;
	chubbTaskTopology.loadSegTopItems(frmChubbTaskTopology.cbxTopLocation.selectedKey,frmChubbTaskTopology.cbxTopFloor.selectedKey);
}

chubbTaskTopology.onBtnUpClick = function () {
	if (chubbTaskTopology.topologyOffset > 0) {
		chubbTaskTopology.topologyOffset--;
		chubbTaskTopology.loadSegTopItems(frmChubbTaskTopology.cbxTopLocation.selectedKey,frmChubbTaskTopology.cbxTopFloor.selectedKey);
	}
};

chubbTaskTopology.onBtnDownClick = function () {
	if ((chubbTaskTopology.quantity - ((chubbTaskTopology.topologyOffset+1) * 50)) > 0) {
		chubbTaskTopology.topologyOffset++;
		chubbTaskTopology.loadSegTopItems(frmChubbTaskTopology.cbxTopLocation.selectedKey,frmChubbTaskTopology.cbxTopFloor.selectedKey);
	}
};

chubbTaskTopology.onItemSelection = function (rowIndex) {
	if (!workOrderModel.isOnSite(workOrder))
		return;
	var item = chubbTaskTopology.items[rowIndex];
	var itemId;
	if (typeof item.itemIds === "string")
		itemId = item.itemIds.split(",")[0];
	else
		itemId = item.itemIds;
	itemVerify.item = itemModel.findItemsByWhereClauseAndSortOrder(undefined, undefined, undefined, [itemId])[0];
	frmItemVerify.show();
}
