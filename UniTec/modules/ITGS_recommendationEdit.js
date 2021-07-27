var recommendationEdit = {
	item:null, // customer base item
	exchangeItem : null,
	exchangeItemHasChanged : false, // when another replacement item is selected
	exchangeReason:"", 
	relatedProducts : [],
	isEditing : false // to avoid re-uploading the form by accident
};

recommendationEdit.init = function(){
	var appMenu = [
		["recommendationEdit.BACK", "Annuler", "left.png", recommendationEdit.cancel],
		["recommendationEdit.VALID", "Valider", "check.png", recommendationEdit.validate]
	];

	otis.application.createAppMenu("recommendationEditAppMenu", appMenu, sknAppmenu, sknAppmenuF);

}

recommendationEdit.preShow = function() {

	otis.application.setCurrentAppMenu("recommendationEditAppMenu");
	
	if(!recommendationEdit.isEditing){

		frmRecommendationEdit.lblReferenceWO.text = workOrder.getReference();
		frmRecommendationEdit.hbxReferenceWO.backgroundColor = workOrder.color;
		frmRecommendationEdit.hbxReferenceWO.focusSkin = workOrder.skin;		
		
		var item = recommendationEdit.item;
		
		frmRecommendationEdit.lblItemReference.text = item.name + " - " + item.batchNumber;
		frmRecommendationEdit.lblProductionDate.text = ""; //dateFunctions.YearFirstToDayFirst(item.productionDate);
		frmRecommendationEdit.lblCustomerNumber.text = validationModel.isNull(item.customerNumber) || item.customerNumber.length == 0 ? "" : "n° client : " + item.customerNumber;
		
		var position = new Array();
		if(!validationModel.isNull(item.location) && item.location.length != 0) position.push(item.location);
		if(!validationModel.isNull(item.floor) && item.floor.length != 0) position.push(item.floor);
		if(!validationModel.isNull(item.placement) && item.placement.length != 0) position.push(item.placement);
		frmRecommendationEdit.lblItemPosition.text = position.join(" / ");
		
		recommendationEdit.isEditing = true;
	}
};

// this functions sets the data of the form
// should be called prior to form.show
recommendationEdit.setData = function(item, itemStatusReason, salesReason, replacementItem) {
	//upload main recommendation
	recommendationEdit.item = item;
	
	// update replacementItem
	frmRecommendationEdit.lblInfocomChapter.text = salesReason;
	if (validationModel.isNull(replacementItem)) {
		var recommendations = articleRecommendationModel.findItemRelatedRecommendations(workOrder, item, salesReason);
//		var recommendations = articleRecommendationModel.findRecommendationsByWorkOrder( workOrder, 
//																						undefined, 
//																						undefined, 
//																						true, 
//																						undefined, 
//																						undefined,
//																						salesReason,
//																						item,
//																						undefined,
//																						undefined,
//																						undefined,
//																						undefined,
//																						true);
		replacementItem = (recommendations.length > 0) ? recommendations[0] : null;
	}
	recommendationEdit.exchangeReason = validationModel.isNull(itemStatusReason) ? "" : itemStatusReason;
	recommendationEdit.setExchangeItem(replacementItem, recommendationEdit.exchangeReason);
  if(validationModel.isNull(replacementItem)){
     recommendationEdit.isDefault = false;
     }
     else{
  recommendationEdit.isDefault = (recommendationEdit.exchangeItem.articleId == 0);
}
	//upload other recommendations
	var relatedProducts = articleRecommendationModel.findItemRelatedRecommendations(workOrder, item, 'Complément');
//	var relatedProducts = articleRecommendationModel.findRecommendationsByWorkOrder( workOrder, 
//																					undefined, 
//																					undefined, 
//																					true, 
//																					undefined, 
//																					undefined,
//																					'Complément',
//																					item,
//																					undefined,
//																					undefined,
//																					undefined,
//																					undefined,
//																					true);
	
	for(var i=0; i < relatedProducts.length; i++) {
		if (!validationModel.isNull(relatedProducts[i].replacementReason) && relatedProducts[i].replacementReason.length > 0) {
			var replacementReason = taskModel.findTaskCompletionReasonByReasonCode(relatedProducts[i].replacementReason);
			relatedProducts[i].replacementReason = (!validationModel.isNull(replacementReason)) ? replacementReason : relatedProducts[i].replacementReason;
		} 
	}
	
	recommendationEdit.setRelatedProducts(relatedProducts);
}

recommendationEdit.setReplacementMotive = function(replacement_motive) {

	if(!validationModel.isNull(replacement_motive)) {
		frmRecommendationEdit.lblMotive.text = "Motif : " + replacement_motive;
		frmRecommendationEdit.lblMotive.isVisible = true;
		frmRecommendationEdit.cbbxMotive.isVisible = false;
	}
	else { 
		frmRecommendationEdit.cbbxMotive.isVisible = false;
		frmRecommendationEdit.lblMotive.isVisible = false;
	// currently, the exchangeReason is read only, but it might change
//		var motive_options = recommendationEdit.testData.motive_options; // to be replaced with production data
//		var cbbxMotiveMasterData = [];
//		var itemStatus = itemModel.findItemStatusByWorkOrderAndItem(workOrder, recommendationEdit.item);
//		var itemStatusReasons = itemModel.findItemStatusReasonsByWorkOrderAndItem(workOrder, recommendationEdit.item, itemStatus);
//		
//		for (var i = 0; i < taskOverview.itemStatusReasons.length; i ++) {
//			var itemStatusReason = [i, itemStatusReasons[i].name];
//			cbbxMotiveMasterData.push(itemStatusReason);	
//		}
//		
//		frmRecommendationEdit.cbbxMotive.masterData = cbbxMotiveMasterData;
//		frmRecommendationEdit.lblMotive.isVisible = false;
//		frmRecommendationEdit.cbbxMotive.isVisible = true;		
	}
};

recommendationEdit.cancel = function() {
	recommendationEdit.closeRecommendationEdition();
}

recommendationEdit.validate = function() {

	// update : add all related products as preconisations
	// if exchange item has changed, update "main preconisation" (to be defined)
	var recommendationsToAdd = new Array();
	var recommendationsToUpdate = new Array();
	
	for(var i = 0; i < recommendationEdit.relatedProducts.length; i++) {
		var relatedProduct = recommendationEdit.relatedProducts[i];
		if (!validationModel.isNull(relatedProduct.id)) { // these recommendations already exist in the database
			recommendationsToUpdate.push(relatedProduct);
			articleRecommendationModel.updateRecommendations([relatedProduct]);
		}
		else { // these recommendations must be added to the database
			recommendationsToAdd.push(relatedProduct);
			if (articleModel.requiresFullItemVerification(relatedProduct)) {
				var recommendation = de.itgs.javascript.Object.clone(relatedProduct);
				for (var j = 0; j < relatedProduct.quantity; j++) {
					recommendation.quantity = 1;
					recommendation.salesReason = "Complément";
					recommendation.recommendationType = "I2";
					articleRecommendationModel.createRecommendationByItemAndWorkOrder(recommendation, itemVerify.item, workOrder);		
				}
			} else {
				relatedProduct.salesReason = "Complément";
				relatedProduct.recommendationType = "I2";
				articleRecommendationModel.createRecommendationByItemAndWorkOrder(relatedProduct, itemVerify.item, workOrder);
			}
		}
	}

	var exchangeItem = recommendationEdit.exchangeItem;

	if(	!validationModel.isNull(exchangeItem) && !validationModel.isNull(exchangeItem.id) && recommendationEdit.exchangeItemHasChanged) {
	   	exchangeItem.articlePrice = pricing.computePrice(exchangeItem.articleId, workOrder, 'sale');	
	   	articleRecommendationModel.updateRecommendations([exchangeItem], false, true); // the exchange item recommendation needs an update
	}
	
	if(recommendationEdit.isDefault) {
		var suggestedTasks = new Array();
		var tasks = taskModel.findPossibleTasksByArticleAndOptionTypes(exchangeItem.articleId, [2,6], workOrder);
		for (var i = 0; i < tasks.length; i++) suggestedTasks.push(articleRecommendationModel.setBSEQTaskData(tasks[i], exchangeItem.id, 1, workOrder));
		articleRecommendationModel.createRecommendationItems(suggestedTasks);
		articleRecommendationModel.reviewAdditionalTasksByContext(workOrder.doco, 'Devis', [exchangeItem.id]);
	}

	recommendationEdit.closeRecommendationEdition();
}

// ends edition mode : frmRecommendationEdit is free for update
recommendationEdit.closeRecommendationEdition = function(nextForm) {
	recommendationEdit.isEditing = false;
	recommendationEdit.item = null;
	recommendationEdit.exchangeItem = null;
	recommendationEdit.exchangeItemHasChanged = false;
	recommendationEdit.exchangeReason = ""; 
	recommendationEdit.relatedProducts = [];
	recommendationEdit.isDefault = false;
	navigationModel.doReturn();
}

// access the relatedProductAdd form
recommendationEdit.onAddRelatedProductClick = function() {
	relatedProductAdd.addToRecommendation = true;
//	itemVerify.item = recommendationEdit.exchangeItem;
	frmRelatedProductAdd.show();
}

// load the related product data
recommendationEdit.setRelatedProducts = function(relatedProducts) {
	recommendationEdit.relatedProducts = relatedProducts;
	recommendationEdit.loadRelatedProducts();
}

// add a related product to the existing data
recommendationEdit.addRelatedProduct = function(relatedProduct) {
	recommendationEdit.relatedProducts.push(relatedProduct);
	recommendationEdit.loadRelatedProducts();
}

// load the related product display list
recommendationEdit.loadRelatedProducts = function() {
	var relatedProductRows = new Array();

	for(var i=0;i<recommendationEdit.relatedProducts.length;i++) {

		var relatedProductRowLabel = "";
		relatedProductRowLabel += "(" + recommendationEdit.relatedProducts[i].usualCode + ") ";
		relatedProductRowLabel += recommendationEdit.relatedProducts[i].quantity + " ";
		relatedProductRowLabel += recommendationEdit.relatedProducts[i].unitOfMeasure + " ";
		relatedProductRowLabel += recommendationEdit.relatedProducts[i].name;
		relatedProductRowLabel += !validationModel.isNull(recommendationEdit.relatedProducts[i].replacementReason) && !validationModel.isNull(recommendationEdit.relatedProducts[i].replacementReason.name) ?  
			"\nMotif: " + recommendationEdit.relatedProducts[i].replacementReason.name : "";
		var relatedProductRow = {
			lblProduct : relatedProductRowLabel,
			imgMotiveEdit:"edit.png",
			imgDeleteProduct:"bin.png"
		};
		
		relatedProductRows.push(relatedProductRow);
	}
	
	frmRecommendationEdit.segProducts.setData(relatedProductRows);
	
}

recommendationEdit.onRelatedProductReasonEdit = function(){
	
	var relatedProductIndex = frmRecommendationEdit.segProducts.selectedIndex[1];
	recommendationEdit.relatedProductReasonEdit(relatedProductIndex);
	
}

// related product edit of motive
recommendationEdit.relatedProductReasonEdit = function(index) {

	var relatedproductRow = frmRecommendationEdit.segProducts.data[index];
	var RP_Reasons = taskModel.findTaskCompletionReasonsByType("Sale", workOrder, recommendationEdit.relatedProducts[index], "relatedProduct");		
    var cbxEditMasterData = [[0,"(aucun motif)"]];
	for (var i = 0; i < RP_Reasons.length; i++) {
		cbxEditMasterData.push([i+1, RP_Reasons[i].name]);
	}
	
	recommendationEdit.saveConfirm = function () {
		recommendationEdit.relatedProducts[index].replacementReason = popDefault.cbx.selectedKeyValue[0] != 0 ? RP_Reasons[(popDefault.cbx.selectedKeyValue[0] - 1)] : "";	
		recommendationEdit.loadRelatedProducts();
	}
	
	var popupConfig = [
		{confirm: true,
		 confirmCB: recommendationEdit.saveConfirm,
		 cancel: true},
		undefined,
		{lblCbx: "Veuillez choisir un motif",
		 masterData: cbxEditMasterData,
		 selectedKey: "0"}
	];
	popupModel.showPopDefault(popupConfig);
}

recommendationEdit.onRelatedProductDelete = function(){
	
	var relatedProductIndex = frmRecommendationEdit.segProducts.selectedIndex[1];
	recommendationEdit.relatedProductDelete(relatedProductIndex);
	
}

recommendationEdit.relatedProductDelete = function(index) {
	
	recommendationEdit.deleteConfirm = function() {
		if(!validationModel.isNull(recommendationEdit.relatedProducts[index].id)) { // the related product exists in the database and must be deleted
			articleRecommendationModel.deleteRecommendation(recommendationEdit.relatedProducts[index]);
		}
		
		frmRecommendationEdit.segProducts.removeAt(index, 0);
		recommendationEdit.relatedProducts.splice(index,1);
	}
	
	popupModel.showPopError("Voulez-vous vraiment retirer ce produit associé des préconisations ?", recommendationEdit.deleteConfirm, undefined, true);
}

// load the exchange item
recommendationEdit.setExchangeItem = function(newExchangeItem, statusReason) {

	var setExchangeItemVisibility = function(isVisible){
	
		frmRecommendationEdit.lblRecommendationTitle.isVisible = isVisible;
		frmRecommendationEdit.lblExchangeItem.isVisible = isVisible;
		frmRecommendationEdit.lblMotive.isVisible = isVisible;
		frmRecommendationEdit.cbbxMotive.isVisible = isVisible;
		frmRecommendationEdit.hbxExchangeItem.isVisible = isVisible;
		frmRecommendationEdit.line2.isVisible = isVisible;
		frmRecommendationEdit.lblInfocomChapter.isVisible = isVisible;
	}
	
	setExchangeItemVisibility(true);

	if(!validationModel.isNull(newExchangeItem)) {
		recommendationEdit.exchangeItem = newExchangeItem;
		frmRecommendationEdit.lblExchangeItem.text = validationModel.isNull(recommendationEdit.exchangeItem.name) ? "" : recommendationEdit.exchangeItem.name;
		frmRecommendationEdit.lblExchangeItem.text += validationModel.isNull(recommendationEdit.exchangeItem.usualCode) ? "" : "\n(" + recommendationEdit.exchangeItem.usualCode + ")";
		recommendationEdit.setReplacementMotive(statusReason);
	}
	else setExchangeItemVisibility(false);
}

// called when a new exchange item has been chosen from the catalog
recommendationEdit.changeExchangeItem = function(newExchangeItem) {

	recommendationEdit.exchangeItem.articleId = newExchangeItem.articleId;
	recommendationEdit.exchangeItem.name = newExchangeItem.name;
	recommendationEdit.exchangeItem.usualCode = newExchangeItem.usualcode;

	recommendationEdit.setExchangeItem(recommendationEdit.exchangeItem,recommendationEdit.exchangeReason);
	recommendationEdit.exchangeItemHasChanged = true;
	
}
