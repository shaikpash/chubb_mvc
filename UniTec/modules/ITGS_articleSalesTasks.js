articleSalesTasks = {
	types: [],
	crtWO: null,
	offset : 20,
	length : 20,
	selectedTypeIndex : 0		
};

articleSalesTasks.init = function () {
	var appMenu = [
		["articleSalesTasks.SUMM", "Bilan", "book.png", onBookClick],
		["articleSalesTasks.VALID", "Valider", "check.png", onValidateClick]
	];
  //Dhaval:Fix for app menu not working start
  function onBookClick(){
    frmWOSummary.show();
  }
  function onValidateClick(){
    articleSalesTasks.onBtnSaveClick();
  }
//End
	otis.application.createAppMenu("articleSalesTasksMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

articleSalesTasks.preShow = function () {
	articleSalesTasks.isReadOnly = !workOrderModel.isOnSite(workOrder);
	otis.application.setCurrentAppMenu("articleSalesTasksMenu");//Dhaval:Invocation of custom app menu

	//if(articleSalesTasks.types.length != 0 && !validationModel.isNull(articleSalesTasks.crtWO) && articleSalesTasks.crtWO == workOrder.doco) return;
	
	articleSalesTasks.crtWO = workOrder.doco;
	articleSalesTasks.types = [];
	frmArticleSalesTasks.segArticleSales.removeAll();

	frmArticleSalesTasks.lblUp.text = 'Lignes précédentes (' + articleSalesTasks.length + ')';
	frmArticleSalesTasks.lblDown.text = 'Lignes suivantes (' + articleSalesTasks.length + ')';
	frmArticleSalesTasks.hbxUp.isVisible = false;
	frmArticleSalesTasks.hbxDown.isVisible = false;		
	
	// Load recommendation type section headers
	articleSalesTasks.loadSegArticleSalesTypes = function () {
		articleSalesTasks.types = articleRecommendationModel.findRecommendationTypesByWorkOrder(workOrder, undefined, true, 'Vente');
		var segArticleSalesMasterData = [];
		for (var i = 0; i < articleSalesTasks.types.length; i ++) {
			articleSalesTasks.types[i].isSelected = true;
			segArticleSalesMasterData.push([{lblType: articleSalesTasks.types[i].label, imgDisplay: {src: "chevronright.png"}},[]]);
		}
		frmArticleSalesTasks.segArticleSales.setData(segArticleSalesMasterData);
	}
	
	// Collapse a given recommendation type section
	articleSalesTasks.collapseSalesType = function (sectionIndex) {
		var type = articleSalesTasks.types[sectionIndex];
		articleSalesTasks.selectedTypeIndex = -1;
		frmArticleSalesTasks.hbxUp.isVisible = false;
		frmArticleSalesTasks.hbxDown.isVisible = false;	
				
		// Clear the section
		var segArticleSalesMasterData = [[{lblType: type.label, imgDisplay: {src: "chevronright.png"}},[]]];
		//frmArticleSalesTasks.segArticleSales.setSectionAt(segArticleSalesMasterData, sectionIndex);
      	frmArticleSalesTasks.segArticleSales.setSectionAt(segArticleSalesMasterData[0], sectionIndex);						//Arati : #100086 Changed for NSRangeException

		type.isVisible = false;
	}
	
	// Expand a given recommendation type section
	articleSalesTasks.expandSalesType = function (sectionIndex) {
		var type = articleSalesTasks.types[sectionIndex];
		var selectedRowIndices = de.itgs.javascript.Object.clone(frmArticleSalesTasks.segArticleSales.selectedRowIndices);
		
		articleSalesTasks.selectedTypeIndex = sectionIndex;

		var displayOffsetUpdates = (type.sales.length > articleSalesTasks.length);
		frmArticleSalesTasks.hbxUp.isVisible = displayOffsetUpdates;
		frmArticleSalesTasks.hbxDown.isVisible = displayOffsetUpdates;

		var endIndex;
		var strIndex;

		if(!displayOffsetUpdates || validationModel.isNull(articleSalesTasks.offset)) {
			strIndex = 0;
			endIndex = type.sales.length;
		} else {
			strIndex = articleSalesTasks.length * articleSalesTasks.offset;
			endIndex = Math.min((strIndex + articleSalesTasks.length), type.sales.length);
		}
		
		// Populate the section
		var segArticleSalesMasterData = [[{lblType: type.label, imgDisplay: {src: "chevrondown.png"}},[]]];
		
		for (var i = strIndex; i < endIndex; i ++) {
			var sale = type.sales[i];
			var articleSale = {};
			articleSale.lblName = sale.name;
			articleSale.lblQuantity = "Quantité : " + ((!validationModel.isNull(sale.quantityDelivered) && sale.quantityDelivered > 0) ? sale.quantityDelivered + " / " + sale.quantity : sale.quantity);
			articleSale.lblCode = sale.usualCode;
			articleSale.lblType = (sale.salesReason.length == 0) ? "" : sale.salesReason.substring(0,5) + '.';
			articleSale.lblLocation = (sale.location.length == 0) ? "" : sale.location;
			articleSale.lblLocation += (sale.location.length == 0 && sale.floor.length == 0) ? "" : "/";
			articleSale.lblLocation += (sale.floor.length == 0) ? "" : sale.floor;
			articleSale.lblLocation += (sale.floor.length == 0 && sale.placement.length == 0) ? "" : "/";
			articleSale.lblLocation += (sale.placement.length == 0) ? "" : sale.placement;
			var isChubbProcess= (workOrder.process == 'CHUBB');
			var isMain = (articleModel.requiresFullItemVerification(sale));
			sale.isCompleted = (sale.status == 'Delivered' || sale.status == 'Ordered');
			articleSale.imgSale = ((sale.isCompleted && sale.status != 'Ordered') || sale.isSelected) ? {src: "selected.png"} : {src: "selectednot.png"};
			articleSale.imgStock = (sale.isCompleted || (!isChubbProcess && isMain) || sale.quantity < 2) ? "" : {src: "truck.png"};
			
			articleSale.hbxArticle = (sale.status == 'Delivered') ? {skin: "sknHboxCompleted"}://, focusSkin: "sknHboxCompleted"} : //Dhaval:Fix for click area as dynamic focus skin causes issues in iphone
									 ((sale.status == 'Ordered') ? {skin: "sknHboxOrdered"}://, focusSkin: "sknHboxOrdered"} : 
                                      {skin: "sknHboxNormal"});//, focusSkin: "sknHboxNormal"});

			articleSale.lblTasks = "";
			var taskCount = 0;
			for (var j = 0; j < sale.tasks.length; j ++) {
				if (sale.tasks[j].subType != 'BSEQ4') {
					articleSale.lblTasks += (taskCount == 0) ? sale.tasks[j].name : "\n" + sale.tasks[j].name;
					taskCount++;
				}
			}
			segArticleSalesMasterData[0][1].push(articleSale);
		}
		//frmArticleSalesTasks.segArticleSales.setSectionAt(segArticleSalesMasterData, sectionIndex);
      	frmArticleSalesTasks.segArticleSales.setSectionAt(segArticleSalesMasterData[0], sectionIndex);			//Arati : #100086 Changed for NSRangeException
		
		// Reset the selected state from before (if applicable)
		if (!validationModel.isNull(selectedRowIndices) && selectedRowIndices.length > 0) {
			frmArticleSalesTasks.segArticleSales.selectedRowIndices = selectedRowIndices;
		}
		
		type.isVisible = true;
	}
	
	frmArticleSalesTasks.hbxReference.lblReference.text = workOrder.getReference();
	frmArticleSalesTasks.hbxReference.backgroundColor = workOrder.color;
	frmArticleSalesTasks.hbxReference.focusSkin = workOrder.skin;
	
	// Load all the article recommendations
	articleSalesTasks.loadSegArticleSalesTypes();
	
	// If there is only one section, automatically expand it
	if (articleSalesTasks.types.length == 1) articleSalesTasks.onTypeSelection(0);
}

articleSalesTasks.onTypeSelection = function (sectionIndex) {
	// Load the recommendation type section
	var type = articleSalesTasks.types[sectionIndex];
  	
	if (validationModel.isNull(type.sales)) {
		type.sales = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, type.name, undefined, true, 'Vente');
		for (var i = 0; i < type.sales.length; i ++) {
			var sale = type.sales[i];
			sale.originalQuantityDelivered = (validationModel.isNull(sale.quantityDelivered)) ? 0 : sale.quantityDelivered;
			sale.tasks = articleRecommendationModel.findRecommendationItemsByRecommendation(sale, 'TASK');
		}
		articleSalesTasks.offset = 0;		
		articleSalesTasks.expandSalesType(sectionIndex);
	} else if (type.isVisible && gblTypeSelection == true) {			//Arati:Changed code for JIRA UI-114
      	articleSalesTasks.collapseSalesType(sectionIndex); 
	} else {
		articleSalesTasks.offset = 0;	
		articleSalesTasks.expandSalesType(sectionIndex);
	} 
  	gblTypeSelection = true;											//Arati:Changed code for JIRA UI-114
}

articleSalesTasks.onSegArticleSalesRowClick = function (sectionIndex, rowIndex, isSelected, eventObject) {
  
	var taskIndex = rowIndex + articleSalesTasks.offset * articleSalesTasks.length;
  
	var rowData = eventObject.data[sectionIndex][1][rowIndex];	
  
  if(rowData.imgSale.src == "selected.png"){
          kony.print("need to unselect");
    	  isSelected=false;
        }
  		else{
          kony.print("need to select");
          isSelected=true;
        }
	if (articleSalesTasks.isReadOnly){
		de.itgs.javascript.Segment.reverseLastSelection(frmArticleSalesTasks, sectionIndex, rowIndex, isSelected);
		return;
	}
	
	var type = articleSalesTasks.types[sectionIndex];
	var sale = type.sales[taskIndex];
  
	if(sale.status == "Ordered" && workOrder.process == 'CHUBB') return;
		 
	var newQuantityDelivered = sale.quantityDelivered-sale.originalQuantityDelivered;
	if(sale.status == "Partially Delivered" && workOrder.process == 'CHUBB' && ((newQuantityDelivered==0 && !sale.isSelected)||(newQuantityDelivered>0 && sale.isSelected))){
     	sale.isSelected = isSelected;															//Arati:Changed code for JIRA UI-114 start here - To reselect item 
      	rowData.imgSale = (sale.isSelected) ? {src: "selected.png"} : {src: "selectednot.png"};
      	frmArticleSalesTasks.segArticleSales.setDataAt(rowData, rowIndex, sectionIndex);		//Arati:Changed code for JIRA UI-114 end here
    	return;
    }
		
		
	if (!sale.isCompleted || sale.status == 'Ordered') {
		if (articleModel.requiresFullItemVerification(sale)) {
		
			var replacementItem = itemCrossModel.findCrossItemsByUsualCodeAndCrossType(sale.usualCode, 'AT');
			var items = [null];

			if(sale.salesReason == 'Remplacement') {
				var sql = " and cib.LOTN = '" + sale.itemBatchNumber + "'";
				items = itemModel.findItemsByWhereClauseAndSortOrder(sql);
			}

			if (workOrder.process == 'CHUBB') {
				var currentJavaDate = new Date();
				var currentStringDate = dateFunctions.javaDateToStringFormat(currentJavaDate);	
														
				var currentItem = sale;
				var itemTocreate = {
					articleId : replacementItem[0].articleId,
					location : currentItem.location,
					floor : currentItem.floor,
					customerNumber : currentItem.customerNumber,
					placement : currentItem.placement ,
					batchNumber : 'NULL',
					status : 'A',
					FBUMSDJ : currentStringDate,
					productionDate : currentStringDate,
					N001 : 'NULL' // null as default : will be updated by JDE
				};
				
				var customer = customerModel.findCustomerByWorkOrder(workOrder);
				
				var newQuantityDelivered = sale.quantityDelivered - sale.originalQuantityDelivered;
				for(var k=0; k < newQuantityDelivered; k++){									
					itemModel.createItemInCustomerInstalledBase(itemTocreate,workOrder,customer, false);		
				}
				//sale.status = (sale.quantity>sale.quantityDelivered) ? "Partially Delivered" : "Delivred";	
              	sale.status = (sale.quantity>sale.quantityDelivered) ? "Partially Delivered" : "Delivered";	   //Changed Status from "Delivred" to "Delivered"
				sale.isSelected = isSelected;
				
				var rowData = eventObject.data[sectionIndex][1][rowIndex];
				rowData.lblQuantity = (!validationModel.isNull(sale.quantityDelivered) && sale.quantityDelivered > 0) ? rowData.lblQuantity : 
									  ("Quantité : " + (sale.isSelected ? sale.quantity + " / " + sale.quantity : sale.quantity));
				rowData.imgSale = (sale.isSelected) ? {src: "selected.png"} : {src: "selectednot.png"};
				frmArticleSalesTasks.segArticleSales.setDataAt(rowData, rowIndex, sectionIndex);	
				
              	if (articleSalesTasks.types.length == 1) {
                  gblTypeSelection = false;							//Arati:Changed code for JIRA UI-114
                  articleSalesTasks.onTypeSelection(0);					
                }
			}
			else {
				itemScan.replacementScan = itemReplace.setParameters(items[0], sale, replacementItem[0], 'sale');
				frmItemScan.show(); // starts scanning process
			}
		} 
		else {
          kony.print(frmArticleSalesTasks.segArticleSales);
		  sale.isSelected = isSelected;
          //sale.isSelected = isSelected;
		
			var rowData = eventObject.data[sectionIndex][1][rowIndex];
			rowData.lblQuantity = (!validationModel.isNull(sale.quantityDelivered) && sale.quantityDelivered > 0) ? rowData.lblQuantity : 
								  ("Quantité : " + (sale.isSelected ? sale.quantity + " / " + sale.quantity : sale.quantity));
			rowData.imgSale = (sale.isSelected) ? {src: "selected.png"} : {src: "selectednot.png"};
			frmArticleSalesTasks.segArticleSales.setDataAt(rowData, rowIndex, sectionIndex);
		}
	}
}

articleSalesTasks.onBtnStockClick = function (sectionIndex, rowIndex, context) {
	if (articleSalesTasks.isReadOnly){
		return;
	}
	
	var type = articleSalesTasks.types[sectionIndex];
	var sale = type.sales[rowIndex];
	
	articleSalesTasks.onBtnStockClickCB = function () {
		var quantityDelivered  = parseInt(popDefault.txt.text);
		sale.quantityDelivered = (quantityDelivered < sale.originalQuantityDelivered+1) ? sale.originalQuantityDelivered : (
						 	 	 (sale.quantity < quantityDelivered) ? sale.quantity : 
						  	  	  quantityDelivered);
		
		// Refresh the type section
		if (type.isVisible) articleSalesTasks.expandSalesType(sectionIndex);
		else articleSalesTasks.collapseSalesType(sectionIndex);
	}
	
	var popupConfig = [
		{confirm: true,
		 confirmCB: articleSalesTasks.onBtnStockClickCB,
		 cancel: true},
		{lblText: 'Veuillez indiquer la quantité en stock (max. ' + sale.quantity + ')',
		 txtText: ((validationModel.isNull(sale.quantityDelivered) || sale.quantityDelivered < 1) ? sale.quantity : sale.quantityDelivered)}
	];
	popupModel.showPopDefault(popupConfig);
}

articleSalesTasks.onBtnSaveClick = function () {
	if (articleSalesTasks.isReadOnly) {
		articleSalesOrders.confirmShow();
		return;
	}

	// Show loading screen and block UI
	showSyncLoadingScreen();

	var hasIncompleteSale = false;
	for (var i = 0; i < articleSalesTasks.types.length; i++) {
		var type = articleSalesTasks.types[i];
		if (validationModel.isNull(type.sales)) continue;
		
		for (var j = 0; j < type.sales.length; j++) {
			var sale = de.itgs.javascript.Object.clone(type.sales[j]);
			if (sale.isSelected && !sale.isCompleted) {
				// If configured, only makes updates for the items that have been configured as in stock
				// If not configured, i.e. quantityDelivered == 0, take the full quantity by default
				sale.quantityDelivered = (sale.quantityDelivered == 0) ? sale.quantity : sale.quantityDelivered;
				sale.status = (sale.quantityDelivered < sale.quantity) ? 'Partially Delivered' : 'Delivered';
				sale.newQuantityDelivered = sale.quantityDelivered - sale.originalQuantityDelivered;

				if (sale.newQuantityDelivered > 0) {				
					// Update F56BTCO for the given article
					sale.quantity = sale.newQuantityDelivered;
					var motive = (sale.salesReason == 'Remplacement') ? sale.replacementReason : null;
					sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, undefined, [sale], undefined, motive, 'sale', (workOrder.process == 'CHUBB'));
					sale.quantity = type.sales[j].quantity;
					
					// Update F56BTDT with all tasks linked to the given article (except BSEQ4)
					if(validationModel.isNull(sale.tasks)) sale.tasks = new Array();

					for (var k = 0; k < sale.tasks.length; k++) {
						var nextTask = sale.tasks[k];
						if (nextTask.subType == 'BSEQ4') continue;
						
						// Create as many tasks as newly delivered (= the task quantity multiplied by the fraction of items delivered)
						nextTask.newQuantityDelivered = parseInt(nextTask.quantity * sale.newQuantityDelivered / sale.quantity);
						nextTask.quantityDelivered += nextTask.newQuantityDelivered;
						
						for (var l = 0; l < nextTask.newQuantityDelivered; l++) {	
							// Create Task in BTDT table
							var task = taskModel.createTaskByItemAndWorkOrder(undefined, workOrder, 'nonPlanned', undefined, nextTask.usualCode);
							task = taskModel.findTaskById(task.id);
							
							// Create the entries for this task in F56BTCO - component depth: 1
							var taskComponents = articleModel.findArticleComponentsByTasks([task], 1);
							sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, undefined, taskComponents, task,motive,'sale', (workOrder.process == 'CHUBB'));
						}
					}
					
					// Update the recommendation items
					if(sale.tasks.length > 0) articleRecommendationModel.updateRecommendationItems(sale.tasks);
					
					// Update the recommendation
					sale.isCompleted = (sale.status == 'Delivered') ? true : false;
				 	articleRecommendationModel.updateRecommendations([sale]); 
				}
			}
			
			// Remove all BSEQ4 tasks if the full delivery is made
			if (sale.isCompleted && !validationModel.isNull(sale.tasks) && sale.tasks.length > 0) { 
				articleRecommendationModel.deleteRecommendationItemsByRecommendations([sale], 'TASK', 'BSEQ4');
			}
		}
	}
	
	// Dismiss loading screen and release UI
	kony.application.dismissLoadingScreen();
	articleSalesTasks.crtWO = null;
	
	articleSalesOrders.confirmShow();
}

// Recommendations have been sold. Tasks are in progress.
articleSalesTasks.isInProgress = function () {
	var states = ["'Sold'","'Ordered'","'Partially Delivered'","'Delivered'"];
	var pendingArticles = articleRecommendationModel.findSaleRecommendations(workOrder, states);
	return (pendingArticles.length > 0);
}

// Recommendations have been sold and all tasks have been completed.
articleSalesTasks.isCompleted = function (currentWo) {
	if(currentWo){
		var pendingArticles = articleRecommendationModel.findSaleRecommendations(currentWo, ["'Sold'","'Partially Delivered'"]);
	}else{
		var pendingArticles = articleRecommendationModel.findSaleRecommendations(workOrder, ["'Sold'","'Partially Delivered'"]);
	}
	return (pendingArticles.length == 0);
}

articleSalesTasks.onBtnUpClick = function() {
	if(articleSalesTasks.offset > 0) {
		articleSalesTasks.updateDisplayByOffset(-1);
	}
};

articleSalesTasks.onBtnDownClick = function() {
	if(articleSalesTasks.selectedTypeIndex < 0 ) return;
	var totalLength = articleSalesTasks.types[articleSalesTasks.selectedTypeIndex].sales.length;
	if((totalLength - ((articleSalesTasks.offset + 1) * articleSalesTasks.length)) > 0) {
		articleSalesTasks.updateDisplayByOffset(1);
	}
};

articleSalesTasks.updateDisplayByOffset = function(factor) {
	articleSalesTasks.offset += factor;
	if(articleSalesTasks.selectedTypeIndex < 0 ) return;
	articleSalesTasks.expandSalesType(articleSalesTasks.selectedTypeIndex);
};