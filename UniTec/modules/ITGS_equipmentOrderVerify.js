var equipmentOrderVerify = {
	order : null,
	lines : null,
	cursor : 0,
	margin : 10
};

equipmentOrderVerify.init = function() {
    if (equipmentOrderOverview.isInventory()) equipmentOrderVerify.margin=50;
	var appMenu = [
		["equipmentOrderVerify.BACK", "Retour", "left.png", onBackClick]
	];
  //Dhaval:fix for app menu not working
  function onBackClick(){
      navigationModel.doReturn();
    }

	otis.application.createAppMenu("equipmentOrderVerifyAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

equipmentOrderVerify.preShow = function() {
    equipmentOrderVerify.init();
	otis.application.setCurrentAppMenu("equipmentOrderVerifyAppMenu");//Dhaval:Invocation of custom app menu
	
	var isInventory = equipmentOrderOverview.isInventory();

	var cmdLbl = isInventory ? "Déclaration d'inventaire " : "Commande ";
	frmEquipmentOrderVerify.lblOrderReference.text = cmdLbl + equipmentOrderVerify.order.cmdNummer;
	
	if(!isInventory) equipmentOrderVerify.loadAddress();
	
	frmEquipmentOrderVerify.hBxAddress.setVisibility(!isInventory);
	frmEquipmentOrderVerify.lblAdressValue.setVisibility(!isInventory);
	frmEquipmentOrderVerify.lblDate.text = isInventory ? "Date d'inventaire" : "Date de livraison";
	frmEquipmentOrderVerify.lblDeliverDateValue.text = dateFunctions.toCalendarFormat(equipmentOrderVerify.order.maxDate).join('/');
	frmEquipmentOrderVerify.lblCommentValue.text = equipmentOrderVerify.order.comment;
	frmEquipmentOrderVerify.hbxComment.isVisible = frmEquipmentOrderVerify.lblCommentValue.text.length != 0;
   if (isInventory){frmEquipmentOrderVerify.segOrderList.containerHeight="66dp";} else {frmEquipmentOrderVerify.segOrderList.containerHeight="45dp";}
	equipmentOrderVerify.loadLines();
}

equipmentOrderVerify.loadLines = function() {
	equipmentOrderVerify.lines = supplyOrder.getSupplyOrderLinesForOrder(equipmentOrderVerify.order);
	equipmentOrderVerify.displayArticles();
}

equipmentOrderVerify.loadAddress = function() {
	var address = equipmentOrderWrite.findAddress(equipmentOrderVerify.order.addressId, equipmentOrderVerify.order.addressType);
	if (!validationModel.isNull(address)) {
        var name = !validationModel.isNull(address.name) ? address.name : '';
        var name2 = !validationModel.isNull(address.name2) ? address.name2 : '';
        var street = !validationModel.isNull(address.street) ? address.street : '';
        var zipCode = !validationModel.isNull(address.zipCode) ? address.zipCode : '';
        var city = !validationModel.isNull(address.city) ? address.city : '';
      
		frmEquipmentOrderVerify.lblAdressValue.text = 
			name + " " + name2 + "\n" +
			street + "\n" +
			zipCode + " " + city;
	}
	else {
		kony.print(
			"###! WARNING !### equipmentOrderVerify.loadAddress ----- address not found!" +
			" id: " + JSON.stringify(equipmentOrderVerify.order.addressId) +
			", type: " + JSON.stringify(equipmentOrderVerify.order.addressType)
		);
		frmEquipmentOrderVerify.lblAdressValue.text = "Adresse inconnue du téléphone";
	}
};

equipmentOrderVerify.mapLine = function(row) {
	var r = {
		imgWarn : { isVisible  : (!equipmentOrderOverview.isInventory() && ((row.notAvailable != 0) || (row.replacementCode != 'NULL'))) },
		lblQty : (row.quantityValidated != 0) ? row.quantityDelivered + "/" + row.quantityValidated : row.quantity
	};
			
	if (row.replacementCode == 'NULL') {
		r.lblItem = row.name + " (" + row.usualCode + ")";
        if (equipmentOrderOverview.isInventory()) { r.lblItem =  row.usualCode + " (" + row.name + ")";};
		r.lblUnit = row.unit;
	} else {
		r.lblItem = "Remplacé par : " + row.replacementName +  " (" + row.replacementUsualCode + ")";
		r.lblUnit = row.replacementUnit;
	}
	
	if ((row.quantityDelivered != row.quantityValidated) && (row.quantityDelivered != 0)) {
		r.HBGlob = {skin : "sknHBxOrange"};
	} else {
		r.HBGlob = {skin : "skinDefault"};
	}
	return r ;
}

equipmentOrderVerify.displayArticles = function() {
	var cursorEnd = equipmentOrderVerify.cursor + equipmentOrderVerify.margin;
    var equipmentOrderVerifyLinesCopy = equipmentOrderVerify.lines.slice();
    if ( !equipmentOrderOverview.isInventory() ) {
    	equipmentOrderVerifyLinesCopy.reverse();
    } 
	var articlesToDisplay = equipmentOrderVerifyLinesCopy.slice(equipmentOrderVerify.cursor, cursorEnd);
	var rows = articlesToDisplay.map(equipmentOrderVerify.mapLine);
	frmEquipmentOrderVerify.segOrderList.setData(rows);
	
	equipmentOrderVerify.updateDisplayPrevious();
	equipmentOrderVerify.updateDisplayNext();
}

equipmentOrderVerify.updateCursor = function(addToCursor) {
	var newCursor = equipmentOrderVerify.cursor + addToCursor;
	if(newCursor >= equipmentOrderVerify.lines.length || newCursor < 0) return 0; // new value cannot be accepted.
	equipmentOrderVerify.cursor = newCursor;
	return 1; // new value accepted.
};

equipmentOrderVerify.onDisplayPreviousClick = function() {
	var cursorAdd = 0 - equipmentOrderVerify.margin;
	if(!equipmentOrderVerify.updateCursor(cursorAdd)) return;
	
	equipmentOrderVerify.displayArticles();
};

equipmentOrderVerify.updateDisplayPrevious = function() {
	frmEquipmentOrderVerify.btnDisplayPrevious.setVisibility((equipmentOrderVerify.lines.length > equipmentOrderVerify.margin && equipmentOrderVerify.cursor > 0));
	var startCursor = equipmentOrderVerify.cursor - equipmentOrderVerify.margin + 1;
	var lbl = "Afficher les articles précédents ( " + startCursor + " à " + equipmentOrderVerify.cursor + " )";
	frmEquipmentOrderVerify.btnDisplayPrevious.text = lbl;
};

equipmentOrderVerify.onDisplayNextClick = function() {
	var cursorAdd = equipmentOrderVerify.margin;
	if(!equipmentOrderVerify.updateCursor(cursorAdd)) return;
	
	equipmentOrderVerify.displayArticles();
};

equipmentOrderVerify.updateDisplayNext = function() {	
	var startCursor = equipmentOrderVerify.cursor + equipmentOrderVerify.margin;
	var endCursor = startCursor + equipmentOrderVerify.margin;
	frmEquipmentOrderVerify.btnDisplayNext.setVisibility((equipmentOrderVerify.lines.length > equipmentOrderVerify.margin  && startCursor < equipmentOrderVerify.lines.length));
	var lbl = "Afficher les articles suivants ( " + (startCursor + 1) + " à " + endCursor + " )";
	frmEquipmentOrderVerify.btnDisplayNext.text = lbl;
};

equipmentOrderVerify.recoverArticleIndexFromSegment = function(rowIndex) {
	return trueIndex = rowIndex + equipmentOrderVerify.cursor;
};
