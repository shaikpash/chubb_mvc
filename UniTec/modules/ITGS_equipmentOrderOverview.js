var equipmentOrderOverview = {
	sentOrders : null,
	savedOrders : null,
	toValidateOrders : null,
	topic : null
};


equipmentOrderOverview.init = function() {
  if (equipmentOrderOverview.isInventory())	{
  	var appMenu = [
		["equipmentOrderOverview.BACK", "Retour", "left.png", onBackClick],
		
	];
  }else{
      var appMenu = [
		["equipmentOrderOverview.BACK", "Retour", "left.png", onBackClick],
		["equipmentOrderOverview.ADD", "Créer Commande", "plus.png", onAddClick ]
        	];
    }
//Dhaval:Fix for app menu not working start	
  function onBackClick(){
      navigationModel.doReturn();
    }
  	function onAddClick(){
      equipmentOrderWrite.newOrder()
    }
  //End
	otis.application.createAppMenu("equipmentOrderOverviewAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

equipmentOrderOverview.openInventory = function(topic) {
	equipmentOrderOverview.open("inventory");
};

equipmentOrderOverview.openOrder = function() {
	equipmentOrderOverview.open("order");
};

equipmentOrderOverview.open = function(topic) {
	equipmentOrderOverview.topic = topic;
	frmEquipmentOrderOverview.show();
};

// creation of the different lists
// each list is meant for reading and pointing to respective orders objects in equipmentOrderOverview.orders
equipmentOrderOverview.preShow = function() {
    equipmentOrderOverview.init();
	databaseModel.openDBExchange("Chargement en cours...");
	
	otis.application.setCurrentAppMenu("equipmentOrderOverviewAppMenu");//Dhaval:Invocation of custom app menu
	
	var isInventory = equipmentOrderOverview.isInventory();
	
	frmEquipmentOrderOverview.lblSent.setVisibility(!isInventory);
	frmEquipmentOrderOverview.segSentOrders.setVisibility(!isInventory);
	frmEquipmentOrderOverview.lblNotCompleted.text = isInventory ? 'Inventaire en cours' : 'Commandes à valider';
	frmEquipmentOrderOverview.lblRegistered.text = isInventory ? 'Inventaire validé' : 'Commandes enregistrées';
	frmEquipmentOrderOverview.lblFormTitle.text = isInventory ? 'Inventaire' : 'Commande de matériel';
	
	var toValidateOrders = new Array();
	var savedOrders = new Array();
	var sentOrders = new Array();
	
	frmEquipmentOrderOverview.segNotCompletedOrders.setData([]);
	frmEquipmentOrderOverview.segRegisteredOrders.setData([]);
	frmEquipmentOrderOverview.segSentOrders.setData([]);
	
    if(isInventory) {
		toValidateOrders = supplyOrder.getSupplyOrders('inventory_notValid');
		savedOrders = supplyOrder.getSupplyOrders('inventory_saved');		
 	}
	else {
		toValidateOrders = supplyOrder.getSupplyOrders('notValid');
		savedOrders = supplyOrder.getSupplyOrders('saved');
		sentOrders = supplyOrder.getSupplyOrders('sent');
	}
	
	equipmentOrderOverview.notValidOrderClicked = function(index) {
		equipmentOrderWrite.order = toValidateOrders[index];
		frmEquipmentOrderWrite.show();
	}
	
	equipmentOrderOverview.savedOrderClicked = function(index) {
		equipmentOrderVerify.order =  savedOrders[index];
		frmEquipmentOrderVerify.show();
	}

	equipmentOrderOverview.sentOrderClicked = function(index) {
		equipmentOrderVerify.order = sentOrders[index];
		frmEquipmentOrderVerify.show();
	}
	
	function makeOrderSeg (order) {
		return {
			lblCmdNum 		: order.cmdNummer,
			lblDeliveryDate : (!validationModel.isNull(order.maxDate)) ? datePrintCustom(dateFromsql(order.maxDate), "dd/MM/yyyy"): equipmentOrderOverview.isInventory() ? 'Lignes traitées :' : 'Pas de date',
			lblCount 		: isInventory ? order.nbDoneLinesInv + "/" + order.nbLines : order.nbDoneLines + "/" + order.nbLines,
			imgWarn 		: { isVisible : (!isInventory && ((order.hasNotAvailable != 0) || (order.hasReplacement!= 0))) },
			HBGlob			: { skin : ((order.nbPartial != 0) ? "sknHBxOrange" : "skinDefault") }
		};
	}
	
	if(toValidateOrders.length > 0) frmEquipmentOrderOverview.segNotCompletedOrders.setData(toValidateOrders.map(makeOrderSeg));
	if(savedOrders.length > 0) frmEquipmentOrderOverview.segRegisteredOrders.setData(savedOrders.map(makeOrderSeg));
	if(sentOrders.length > 0) frmEquipmentOrderOverview.segSentOrders.setData(sentOrders.map(makeOrderSeg));
	
	databaseModel.closeDBExchange();
}

equipmentOrderOverview.isInventory = function() {
	return (equipmentOrderOverview.topic == 'inventory');
}

equipmentOrderOverview.isOrder = function() {
	return (equipmentOrderOverview.topic == 'order');
}