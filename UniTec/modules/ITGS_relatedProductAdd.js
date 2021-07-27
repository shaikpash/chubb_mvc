relatedProductAdd = {
	relatedProducts: [],
	salesReasons: [],
	relatedTasks: [],
	addToRecommendation: false,
  	tbRelatedProductText : "",
  	RelatedProductsData: null
};

relatedProductAdd.init = function(){
	var appMenu = [
		["relatedProductAdd.BACK", "Retour", "left.png", onBackClick],
		["relatedProductAdd.VALID", "Valider", "check.png", relatedProductAdd.onBtnSaveClick]
	];
  //Dhaval:Fix for app menu not working
  function onBackClick()
  {
    navigationModel.doReturn();
  }

	otis.application.createAppMenu("relatedProductAddAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu

}


relatedProductAdd.preShow = function () {
	otis.application.setCurrentAppMenu("relatedProductAddAppMenu");//Dhaval:Invocation of custom app menu
	
	relatedProductAdd.loadRelatedTasks = function(relatedProduct) {
	    // Populate the tasks list
	    var segRelatedTasksData = [];
	    if(!validationModel.isNull(relatedProduct)) {
	    	var relatedProductItem = {articleId : relatedProduct.articleId};
			relatedProductAdd.relatedTasks = taskModel.findPossibleTasksByItemAndOptionTypesWhereClause(relatedProductItem, [2,3],  " and TBM = 'PA'");
			if (!validationModel.isNull(relatedProductAdd.relatedTasks)) {
				for (var i = 0; i < relatedProductAdd.relatedTasks.length; i ++) {
					var task = relatedProductAdd.relatedTasks[i];
					task.lblTaskName = relatedProductAdd.relatedTasks[i].name;
					task.lblTaskUsualCode = relatedProductAdd.relatedTasks[i].usualCode;
					segRelatedTasksData.push(task);
				}
			}
		}
		frmRelatedProductAdd.segRelatedTasks.setData(segRelatedTasksData);
	}
	
	frmRelatedProductAdd.hbxReference.lblReference.text = workOrder.getReference();
	frmRelatedProductAdd.hbxReference.backgroundColor = workOrder.color;
	frmRelatedProductAdd.hbxReference.focusSkin = workOrder.skin;
	frmRelatedProductAdd.lblItemReference.text = itemVerify.item.name;// + " - " + itemVerify.item.batchNumber;
	
	// Populate the related products drop down
    relatedProductAdd.relatedProducts = articleModel.findRelatedProductsByItems([itemVerify.item], 1, 'P');
    var cbxRelatedProductsData = [["-1", "Choisir produit"]];
	for (var i = 0; i < relatedProductAdd.relatedProducts.length; i++) {
		var relatedProduct = relatedProductAdd.relatedProducts[i];
		var lblRelatedProduct = relatedProduct.name+ " (" + relatedProduct.usualCode + ")";
		lblRelatedProduct = putToLine(lblRelatedProduct, 30);
		cbxRelatedProductsData.push([i,lblRelatedProduct]);
	}
	
  cbxRelatedProductsData.sort(function(a, b){
    if(a[1] < b[1]) { return -1; }
    if(a[1] > b[1]) { return 1; }
    return 0;
});
  
  relatedProductAdd.RelatedProductsData = cbxRelatedProductsData;
  
	frmRelatedProductAdd.cbxRelatedProducts.masterData = cbxRelatedProductsData;
  	//frmRelatedProductAdd.tbRelatedProducts
  frmRelatedProductAdd.segRelatedProduct.isVisible = false;
    frmRelatedProductAdd.cbxRelatedProducts.selectedKey = "-1";
    
    relatedProductAdd.populateMotive(-1);
    
    // Populate the tasks list
    frmRelatedProductAdd.segRelatedTasks.removeAll();
}

relatedProductAdd.populateMotive = function(itemIndex){

	// Populate the sales reason drop down
	if (itemIndex == -1){
		relatedProductAdd.salesReasons = [];
	}else{
		relatedProductAdd.salesReasons = taskModel.findTaskCompletionReasonsByType(
	    	'Sale', workOrder, relatedProductAdd.relatedProducts[itemIndex], 'relatedProduct');
	}
   
    var cbxSalesReasonsMasterData = [["-1", "Choisir motif"]];
	for (var i = 0; i < relatedProductAdd.salesReasons.length; i++) {
		cbxSalesReasonsMasterData.push([i, relatedProductAdd.salesReasons[i].name]);
	}
	
	frmRelatedProductAdd.cbxSalesReasons.masterData = cbxSalesReasonsMasterData;
    frmRelatedProductAdd.cbxSalesReasons.selectedKey = "-1";
    
    
}

relatedProductAdd.onCbxRelatedProductsSelection = function () {
	var selectedCbxRelatedProductsIndex = parseInt(frmRelatedProductAdd.cbxRelatedProducts.selectedKeyValue[0]);
	var relatedProduct = relatedProductAdd.relatedProducts[selectedCbxRelatedProductsIndex];
	if (selectedCbxRelatedProductsIndex < 0) {
		frmRelatedProductAdd.txtQuantity.text = '';
		frmRelatedProductAdd.txtQuantity.setEnabled(false);
		frmRelatedProductAdd.segRelatedTasks.removeAll();
	} else {
		frmRelatedProductAdd.txtQuantity.text = relatedProduct.quantity;
		var isQtyVariable = relatedProduct.quantityVariabilityFlag == 'V' ? true : false;
		var multipleSparePartsAllowed = relatedProduct.quantity > 1 ? true : false;
		if (isQtyVariable && multipleSparePartsAllowed) frmRelatedProductAdd.txtQuantity.setEnabled(true);
		else frmRelatedProductAdd.txtQuantity.setEnabled(false);
		relatedProductAdd.loadRelatedTasks(relatedProduct);
	}
	
	relatedProductAdd.populateMotive(selectedCbxRelatedProductsIndex);
}

relatedProductAdd.onBtnSaveClick = function () {
	var selectedCbxRelatedProductsIndex = parseInt(frmRelatedProductAdd.cbxRelatedProducts.selectedKeyValue[0]);
	
	if (selectedCbxRelatedProductsIndex > -1) {
		var selectedCbxSalesReasonsIndex = parseInt(frmRelatedProductAdd.cbxSalesReasons.selectedKeyValue[0]);
		if (!validationModel.numberHasMaxDecimals(frmRelatedProductAdd.txtQuantity.text,0)) {
			popupModel.showPopError("Quantité invalide. Veuillez corriger avant de continuer.");
		} else {
			// Add the related product to spare_parts
			var relatedProduct = relatedProductAdd.relatedProducts[selectedCbxRelatedProductsIndex];
			var salesReason = selectedCbxSalesReasonsIndex < 0 ? undefined : relatedProductAdd.salesReasons[selectedCbxSalesReasonsIndex];
			relatedProduct.quantity = parseInt(frmRelatedProductAdd.txtQuantity.text);
			
			if(relatedProductAdd.addToRecommendation) {
				var recommendationArticle = {};
				recommendationArticle.replacementReason = salesReason;
				recommendationArticle.id = null;
				recommendationArticle.quantity = relatedProduct.quantity;
				recommendationArticle.articleId = relatedProduct.articleId;
				recommendationArticle.name = relatedProduct.name;
				recommendationArticle.usualCode = relatedProduct.usualCode;
				recommendationArticle.unitOfMeasure = relatedProduct.unitOfMeasure;
				recommendationArticle.unitOfMeasureCode = relatedProduct.unitOfMeasureCode;
				recommendationEdit.addRelatedProduct(recommendationArticle);
				relatedProductAdd.addToRecommendation = false;
				navigationModel.doReturn();
			}
			else {
				var salesReasonCode = !validationModel.isNull(salesReason) ? salesReason.code : undefined;
				var spareParts = sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, itemVerify.item, [relatedProduct], undefined, salesReasonCode, 'relatedProduct');
				
				// Add the tasks to F56BTDT and spare_parts
				if (!validationModel.isNull(frmRelatedProductAdd.segRelatedTasks.selectedRowIndices)) {
					var selectedSegRelatedTasksIndices = frmRelatedProductAdd.segRelatedTasks.selectedRowIndices[0][1];
					for (var i = 0; i < selectedSegRelatedTasksIndices.length; i ++) {
						var relatedTask = relatedProductAdd.relatedTasks[selectedSegRelatedTasksIndices[i]];
						// Add the task to F56BTDT
						var task = taskModel.createTaskByItemAndWorkOrder(itemVerify.item, workOrder, 'related', undefined, relatedTask.usualCode, spareParts[0]);
						// Add the task to spare_parts (similar to those of taskType 2)
						task = taskModel.findTaskById(task.id);
						task.type = 2;
						sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, itemVerify.item, undefined, task, salesReasonCode, 'relatedProduct');
					}
				}
				navigationModel.doReturn();
			}
		}
	} else {
		navigationModel.doReturn();
	}
}
