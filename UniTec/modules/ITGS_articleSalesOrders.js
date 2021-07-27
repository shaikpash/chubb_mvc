articleSalesOrders = {
	types: [],
	sales: [],
	tasks: []
};

articleSalesOrders.init = function () {
	var appMenu = [
		["articleSalesOrders.BACK", "Retour", "left.png", onBackClick],
		["articleSalesOrders.VALID", "Valider", "check.png", validateClick]
	];
  //Dhaval:Fix for app menu not working start
  function onBackClick(){
    navigationModel.doReturn();
  }
  function validateClick(){
    articleSalesOrders.onBtnSaveClick();
  }
//end
	otis.application.createAppMenu("articleSalesOrdersMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

articleSalesOrders.preShow = function () {
	articleSalesOrders.isReadOnly = !workOrderModel.isOnSite(workOrder);

	otis.application.setCurrentAppMenu("articleSalesOrdersMenu");//Dhaval:Invocation of custom app menu
	
	articleSalesOrders.types = [];
	articleSalesOrders.sales = [];
	articleSalesOrders.tasks = [];
	frmArticleSalesOrders.segArticleSales.removeAll();
	
	// Load recommendation type section headers
	articleSalesOrders.loadSegArticleSalesTypes = function () {
		articleSalesOrders.types = [];
		articleSalesOrders.sales = articleRecommendationModel.findRecommendationsByWorkOrder(	
									workOrder, undefined, undefined, true, 'Vente', false, 
									undefined, undefined, true);
		
		var BSEQ4ItemMap = [];
		for (var i = 0; i < articleSalesOrders.sales.length; i ++) {
			var tasks = articleRecommendationModel.findRecommendationItemsByRecommendation(articleSalesOrders.sales[i], 'TASK');
			// Go through all items and remove duplicate BSEQ4 items (only to be charged once)
			for (var j = 0; j < tasks.length; j ++) {
				if (tasks[j].subType == 'BSEQ4') {
					if (BSEQ4ItemMap.indexOf(tasks[j].articleId) == -1) {
						BSEQ4ItemMap.push(tasks[j].articleId);
					} else {
						tasks.splice(j,1);
						j--;
					}
				}
			}
			
			articleSalesOrders.tasks = articleSalesOrders.tasks.concat(tasks);
		}
		
		if (articleSalesOrders.sales.length > 0) articleSalesOrders.types.push({name: 'Matériel'});
		if (articleSalesOrders.tasks.length > 0) articleSalesOrders.types.push({name: 'Tâches'});
																			
		var segArticleSalesMasterData = [];
		for (var i = 0; i < articleSalesOrders.types.length; i ++) {
			segArticleSalesMasterData.push([{lblType: articleSalesOrders.types[i].name, imgDisplay: {src: "chevronright.png"}},[]]);
		}
		frmArticleSalesOrders.segArticleSales.setData(segArticleSalesMasterData);
	}
	
	// Collapse a given recommendation type section
	articleSalesOrders.collapseSalesType = function (sectionIndex) {
		var type = articleSalesOrders.types[sectionIndex];
		
		// Clear the section
		var segArticleSalesMasterData = [[{lblType: type.name, imgDisplay: {src: "chevronright.png"}},[]]];
		//frmArticleSalesOrders.segArticleSales.setSectionAt(segArticleSalesMasterData, sectionIndex);
		frmArticleSalesOrders.segArticleSales.setSectionAt(segArticleSalesMasterData[0], sectionIndex);						//Arati : #100086 Changed for NSRangeException
      
		type.isVisible = false;
	}
	
	// Expand a given recommendation type section
	articleSalesOrders.expandSalesType = function (sectionIndex) {
		var type = articleSalesOrders.types[sectionIndex];

		// Populate the section
		var segArticleSalesMasterData = [[{lblType: type.name, imgDisplay: {src: "chevrondown.png"}},[]]];
		
		if (type.name == 'Matériel') {
			for (var i = 0; i < articleSalesOrders.sales.length; i ++) {
				var sale = {};
				sale.lblQuantity = articleSalesOrders.sales[i].quantity - articleSalesOrders.sales[i].quantityDelivered;
				sale.lblUnitOfMeasure = 'Unité';
				sale.lblCode = articleSalesOrders.sales[i].usualCode;
				sale.lblName = articleSalesOrders.sales[i].name;
				segArticleSalesMasterData[0][1].push(sale);
			}
		} else if (type.name == 'Tâches') {
			for (var i = 0; i < articleSalesOrders.tasks.length; i ++) {
				var task = {};
				task.lblQuantity = articleSalesOrders.tasks[i].quantity - articleSalesOrders.tasks[i].quantityDelivered;
				task.lblUnitOfMeasure = 'Unité';
				task.lblCode = articleSalesOrders.tasks[i].usualCode;
				task.lblName = articleSalesOrders.tasks[i].name;
				segArticleSalesMasterData[0][1].push(task);
			}
		}
		//frmArticleSalesOrders.segArticleSales.setSectionAt(segArticleSalesMasterData, sectionIndex);
		frmArticleSalesOrders.segArticleSales.setSectionAt(segArticleSalesMasterData[0], sectionIndex);						//Arati : #100086 Changed for NSRangeException
		type.isVisible = true;
	}
	
	function loadWishedDeliveryDate() {
		// Load first valid date among all sales
		var wishedDeliveryDate = null;
		var i = 0;
		while (i < articleSalesOrders.sales.length && null == wishedDeliveryDate) {
			if (!validationModel.isNull(articleSalesOrders.sales[i].wishedDeliveryDate))
				wishedDeliveryDate = articleSalesOrders.sales[i].wishedDeliveryDate;
			i++;
		}
		
		if (null == wishedDeliveryDate)
			frmArticleSalesOrders.cldDeliveryDate.clear();
		else
			frmArticleSalesOrders.cldDeliveryDate.date = dateFunctions.toCalendarFormat(wishedDeliveryDate);
	}
	
	frmArticleSalesOrders.hbxReference.lblReference.text = workOrder.getReference();
	frmArticleSalesOrders.hbxReference.backgroundColor = workOrder.color;
	frmArticleSalesOrders.hbxReference.focusSkin = workOrder.skin;
	frmArticleSalesOrders.cbxAddressTypes.masterData = [];
	frmArticleSalesOrders.cbxAddressTypes.isVisible = true;
	frmArticleSalesOrders.lblAddress  = '';
	
	// Load all the article recommendations
	articleSalesOrders.loadSegArticleSalesTypes();
	
	loadWishedDeliveryDate();
	
	// If there is only one section, automatically expand it
	if (articleSalesOrders.types.length == 1) articleSalesOrders.onTypeSelection(0);
}

articleSalesOrders.postShow = function () {
	// Populate the customerAddressTypes drop down
	var cbxAddressTypesData = [];	
	var addressTypes = customerModel.findCustomerAddressTypesByWorkOrder(workOrder);
	var hasDefaultAddress;
    for (var i = 0; i < addressTypes.length; i ++) {
    	cbxAddressTypesData.push([addressTypes[i].code,addressTypes[i].name]);
    	if (addressTypes[i].code == 'SITE') hasDefaultAddress = true;
    }
    
    if (cbxAddressTypesData.length > 0) {
    	frmArticleSalesOrders.cbxAddressTypes.masterData = cbxAddressTypesData;
	    if (hasDefaultAddress) {
	    	frmArticleSalesOrders.cbxAddressTypes.selectedKey = 'SITE';
	    	articleSalesOrders.onCbxAddressTypesSelection();
	    }
	} else {
		frmArticleSalesOrders.cbxAddressTypes.isVisible = false;
		frmArticleSalesOrders.lblAddress.text = "Pas d'addresse trouvé pour ce client.";
	}
}

articleSalesOrders.confirmShow = function() {
	var remainingSales = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, null, null, true, 'Vente', false, null, null, true);
	if (remainingSales.length > 0)
		frmArticleSalesOrders.show();
	else
		articleSalesOrders.close();
}

articleSalesOrders.onCbxAddressTypesSelection = function () {
	var selectedAddressType = frmArticleSalesOrders.cbxAddressTypes.selectedKeyValue[0];
	var customerAddress = customerModel.findCustomerAddressByWorkOrderAndType(workOrder,selectedAddressType);
	if (!validationModel.isNull(customerAddress)) {
		frmArticleSalesOrders.lblAddress.text  = !validationModel.isNull(customerAddress.corporateName) ? customerAddress.corporateName : '';
		frmArticleSalesOrders.lblAddress.text += !validationModel.isNull(customerAddress.corporateNameAdd) ? '\n' + customerAddress.corporateNameAdd : '';
		frmArticleSalesOrders.lblAddress.text += !validationModel.isNull(customerAddress.address1) ? '\n' + customerAddress.address1 : '';
		frmArticleSalesOrders.lblAddress.text += !validationModel.isNull(customerAddress.address2) ? '\n' + customerAddress.address2 : '';
		frmArticleSalesOrders.lblAddress.text += !validationModel.isNull(customerAddress.address3) ? '\n' + customerAddress.address3 : '';
		frmArticleSalesOrders.lblAddress.text += !validationModel.isNull(customerAddress.zipcode) ? '\n' + customerAddress.zipcode : '';
		frmArticleSalesOrders.lblAddress.text += !validationModel.isNull(customerAddress.city) ? ' ' + customerAddress.city : '';
	} else {
		frmArticleSalesOrders.lblAddress  = '';
	}
}

articleSalesOrders.onTypeSelection = function (sectionIndex) {
	// Load the recommendation type section
	var type = articleSalesOrders.types[sectionIndex];
	
	if (type.isVisible) articleSalesOrders.collapseSalesType(sectionIndex);
	else articleSalesOrders.expandSalesType(sectionIndex);
}

articleSalesOrders.onBtnSaveClick = function () {
	if (!articleSalesOrders.isReadOnly) {
		var wishedDeliveryDate = frmArticleSalesOrders.cldDeliveryDate.date;
		if (validationModel.isNull(wishedDeliveryDate) || dateFunctions.compare(dateFunctions.toDateFormat(wishedDeliveryDate)) < 0) {
			popupModel.showPopError("Veuillez saisir une date de livraison souhaitée égale ou postérieure à la date du jour.");
			return;
		}
		
//		frmWOSummary.show();
//		return;
		// Update the related article sales
		for (var i = 0; i < articleSalesOrders.sales.length; i++) {
			articleSalesOrders.sales[i].status = 'Ordered';
			articleSalesOrders.sales[i].deliveryAddressType = frmArticleSalesOrders.cbxAddressTypes.selectedKeyValue[0];
			articleSalesOrders.sales[i].wishedDeliveryDate = dateFunctions.DayFirstToYearFirst(wishedDeliveryDate);
		}
		articleRecommendationModel.updateRecommendations(articleSalesOrders.sales);
	}
	
	articleSalesOrders.close();
	
//	// Continue to handle de quotations (if any), otherwise end process
//	var quotationsForWorkOrder = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, undefined, undefined, true, 'Devis');
//	if (quotationsForWorkOrder.length > 0) {
//		frmArticleSalesSummary.show();
//	} else {
//		frmWOSummary.show();
//	}
}

articleSalesOrders.close = function() {
//	var frmTarget = null;
//	if (articleSalesOrders.isReadOnly){
//		frmTarget = frmWOSummary;
//	} else {
//		// Continue to handle de quotations (if any), otherwise end process
//		var leftQuotations = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, undefined, undefined, true, 'Devis');
//		if (leftQuotations.length > 0) {
//			frmTarget = frmArticleSalesSummary;
//		} else {
//			frmTarget = frmWOSummary;
//		}
//	}
//	
//	frmTarget.show();
	
	var frmTarget = frmWOSummary;
	
	if (!articleSalesOrders.isReadOnly) {
		var leftQuotations = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, undefined, undefined, true, 'Devis');
		if (leftQuotations.length > 0)
			frmTarget = frmArticleSalesSummary;
	}
	
	frmTarget.show();
}

