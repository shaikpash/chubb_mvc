articleRecommendations = {
	itemStatuses: [],
	selectedItemStatuses: [],
	types: [],
	offset : 20,
	length : 20,
	selectedTypeIndex : 0
};

articleRecommendations.init = function(){
	var appMenu = [
		["articleRecommendations.BACK", "Retour", "left.png", onBackClick],
		["articleRecommendations.ADD", "Ajouter préconisation", "plus.png", onAddClick],
		["articleRecommendations.VALID", "Valider", "check.png", onCheckClick]
	];
  //Dhaval:Fix for app menu not working start
	function onBackClick(){
      navigationModel.doReturn();
    }
  function onAddClick(){
    articleRecommendations.onBtnArticleRecommendationAddClick();
  }
  function onCheckClick(){
    frmArticleSales.show();
  }
  //end
	otis.application.createAppMenu("articleRecommendationsAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
	
	appMenu = [
		["articleRecommendations.BACK", "Retour", "left.png", onBackClick],
		["articleRecommendations.VALID", "Valider", "check.png", onCheckClick]
	];

	otis.application.createAppMenu("articleRecommendationsAppMenuRO", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
  
  appMenu = [
		["articleRecommendations.BACK", "Retour", "left.png", onBackClick],
		["articleRecommendations.ADD", "Ajouter préconisation", "plus.png", onAddClick]
	];

	otis.application.createAppMenu("articleRecommendationsAppMenuCreateOnly", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
	

}

articleRecommendations.preShow = function () {
	articleRecommendations.isReadOnly = workOrderModel.isTerminated(workOrder);//!workOrderModel.isOnSite(workOrder);
  
   	if(app_parameters.lifetime.limited_access == true){
 		otis.application.setCurrentAppMenu("articleRecommendationsAppMenuCreateOnly");
 	}else if(articleRecommendations.isReadOnly == true && workOrderModel.canIntermediateQuote(workOrder) == false){
		otis.application.setCurrentAppMenu("articleRecommendationsAppMenuRO");
	}else{
		otis.application.setCurrentAppMenu("articleRecommendationsAppMenu");
    }

	articleRecommendations.itemStatuses = [];
	articleRecommendations.selectedItemStatuses = [];
	articleRecommendations.types = [];
	frmArticleRecommendations.segArticleRecommendations.removeAll();
	frmArticleRecommendations.lblUp.text = 'Lignes précédentes (' + articleRecommendations.length + ')';
	frmArticleRecommendations.lblDown.text = 'Lignes suivantes (' + articleRecommendations.length + ')';
	frmArticleRecommendations.hbxUp.isVisible = false;
	frmArticleRecommendations.hbxDown.isVisible = false;

	// Load recommendation type section headers
	articleRecommendations.loadSegArticleRecommendationTypes = function (itemStatusCodes) {
		articleRecommendations.types = articleRecommendationModel.findRecommendationTypesByWorkOrder(workOrder, itemStatusCodes);
		var segArticleRecommendationsMasterData = [];
		for (var i = 0; i < articleRecommendations.types.length; i ++) {
			segArticleRecommendationsMasterData.push([{lblType: articleRecommendations.types[i].label, imgDisplay: {src: "chevronright.png"}},[]]);
		}
		frmArticleRecommendations.segArticleRecommendations.setData(segArticleRecommendationsMasterData);
	}
	
	// Collapse a given recommendation type section
	articleRecommendations.collapseRecommendationType = function (sectionIndex) {
		var type = articleRecommendations.types[sectionIndex];
		articleRecommendations.selectedTypeIndex = -1;
		frmArticleRecommendations.hbxUp.isVisible = false;
		frmArticleRecommendations.hbxDown.isVisible = false;
		
		// Clear the section 
		var segArticleRecommendationsMasterData = [[{lblType: type.label, imgDisplay: {src: "chevronright.png"}},[]]];
      	//frmArticleRecommendations.segArticleRecommendations.setSectionAt(segArticleRecommendationsMasterData, sectionIndex);
		frmArticleRecommendations.segArticleRecommendations.setSectionAt(segArticleRecommendationsMasterData[0], sectionIndex);					//Arati : #100086 Changed for NSRangeException
      
		type.isVisible = false;
	}
	
	// Expand a given recommendation type section
	articleRecommendations.expandRecommendationType = function (sectionIndex) {
		var type = articleRecommendations.types[sectionIndex];
		articleRecommendations.selectedTypeIndex = sectionIndex;
		
		var displayOffsetUpdates = (type.recommendations.length > articleRecommendations.length)
		frmArticleRecommendations.hbxUp.isVisible = false;
		frmArticleRecommendations.hbxDown.isVisible = false;
      
      articleRecommendations.offset = 0;
      articleRecommendations.length = type.recommendations.length;
		
		if(!displayOffsetUpdates || validationModel.isNull(articleRecommendations.offset)) {
			var strIndex = 0;
			var endIndex = type.recommendations.length;
		} else {
			strIndex = articleRecommendations.length * articleRecommendations.offset;
			var endIndex = Math.min((strIndex + articleRecommendations.length), type.recommendations.length);
		}
		
		// Populate the section
		var segArticleRecommendationsMasterData = [[{lblType: type.label, imgDisplay: {src: "chevrondown.png"}},[]]];
		for (var i = strIndex; i < endIndex; i ++) {
			if ((articleRecommendations.selectedItemStatuses.length == 0) ||
				(articleRecommendations.selectedItemStatuses.indexOf(type.recommendations[i].itemStatus) > -1)) {
					var articleRecommendation = {};
					if(type.recommendations[i].pricingSubFamily == "DZC" && type.recommendations[i].quantity != 1){
						type.recommendations[i].articlePrice = {
							basicPrice : type.recommendations[i].basicPrice,// * type.recommendations[i].quantity,
							price : type.recommendations[i].basicPrice * type.recommendations[i].quantity,
							vat : {vatPercentage : type.recommendations[i].VATPercentage},
							UPC1 : type.recommendations[i].UPC1,
							EUSE : type.recommendations[i].EUSE,
							pricingOrigin : type.recommendations[i].pricingOrigin// * type.recommendations[i].quantity
						};
						type.recommendations[i].basicPrice = type.recommendations[i].basicPrice;//*type.recommendations[i].quantity;
						type.recommendations[i].grossPrice = type.recommendations[i].grossPrice*type.recommendations[i].quantity;
						type.recommendations[i].price = type.recommendations[i].price * type.recommendations[i].quantity;
						type.recommendations[i].quantity = 1;
						articleRecommendationModel.updateRecommendations([type.recommendations[i]], null, true);
					}
					articleRecommendation.id = type.recommendations[i].id;
					articleRecommendation.lblQuantity = "Quantité : " + type.recommendations[i].quantity;
					articleRecommendation.lblCode = (validationModel.isNull(type.recommendations[i].itemBatchNumber)) ? '' : type.recommendations[i].itemBatchNumber;
					articleRecommendation.lblName = (validationModel.isNull(type.recommendations[i].name)) ? type.recommendations[i].comment : type.recommendations[i].name;
					articleRecommendation.lblType = (type.recommendations[i].salesReason.length == 0) ? "" : type.recommendations[i].salesReason.substring(0,5) + '.';
					articleRecommendation.lblLocation = (type.recommendations[i].location.length == 0) ? "" : type.recommendations[i].location;
					articleRecommendation.lblLocation += (type.recommendations[i].location.length == 0 && type.recommendations[i].floor.length == 0) ? "" : "/";
					articleRecommendation.lblLocation += (type.recommendations[i].floor.length == 0) ? "" : type.recommendations[i].floor;
					articleRecommendation.lblLocation += (type.recommendations[i].floor.length == 0 && type.recommendations[i].placement.length == 0) ? "" : "/";
					articleRecommendation.lblLocation += (type.recommendations[i].placement.length == 0) ? "" : type.recommendations[i].placement;
					articleRecommendation.imgRemove = (type.recommendations[i].salesReason == 'Remplacement' || articleRecommendations.isReadOnly) ?
						"" : {src: "bin.png", isVisible: true};

                    //Retrieve the btphoto info from database if there is already one
                    var btphoto = btphotosModel.findPhotoInfoByPrecoId(type.recommendations[i].id, workOrder.id);
                    if (!validationModel.isNull(btphoto) && !validationModel.isNull(btphoto.id)) {
                      articleRecommendation.vbxAddPhoto = {skin: "sknVbxTransparent", focusSkin: "sknVbxTransparent", "isVisible": true, "enable": false};
                      articleRecommendation.vbxEditPhoto = {skin: "sknVbxTransparent", focusSkin: "sknVbxTransparent", "isVisible": true};
                    } else {
                      articleRecommendation.vbxAddPhoto = {skin: "sknVbxTransparent", focusSkin: "sknVbxTransparent", "isVisible": true};
                      articleRecommendation.vbxEditPhoto = {skin: "sknVbxTransparent", focusSkin: "sknVbxTransparent", "isVisible": false};
                    }
              
					segArticleRecommendationsMasterData[0][1].push(articleRecommendation);
				}
		}
      	//frmArticleRecommendations.segArticleRecommendations.setSectionAt(segArticleRecommendationsMasterData, sectionIndex);	
		frmArticleRecommendations.segArticleRecommendations.setSectionAt(segArticleRecommendationsMasterData[0], sectionIndex);			//Arati : #100086 Changed for NSRangeException
		type.isVisible = true;
		
		//articleRecommendations.salesTypes = articleRecommendationModel.findRecommendationTypesByWorkOrder(workOrder);
		
	}

	frmArticleRecommendations.hbxReference.lblReference.text = workOrder.getReference();
	frmArticleRecommendations.hbxReference.backgroundColor = workOrder.color;
	frmArticleRecommendations.hbxReference.focusSkin = workOrder.skin;
	
	// Load all the article recommendations
	articleRecommendations.loadSegArticleRecommendationTypes();
	
	// Load the item statuses to filter the article recommendations by
	articleRecommendations.itemStatuses = [];
	var itemStatuses = articleRecommendationModel.findRecommendationItemStatusesByWorkOrder(workOrder);
	var segItemStatusMasterData = [];
	for (var i = 0; i < itemStatuses.length; i ++) {
		if (!validationModel.isNull(itemStatuses[i].code) &&
			articleRecommendations.itemStatuses.indexOf(itemStatuses[i].code) < 0) {
			var itemStatus = {};
			itemStatus.lblItemStatus = itemStatuses[i].name;
			segItemStatusMasterData.push(itemStatus);
			
			articleRecommendations.itemStatuses.push(itemStatuses[i].code);
		}
	}
	frmArticleRecommendations.segItemStatus.setData(segItemStatusMasterData);
	
	// If there is only one section, automatically expand it
	if (articleRecommendations.types.length == 1) articleRecommendations.onTypeSelection(0);
}

articleRecommendations.onTypeSelection = function (sectionIndex) {
	var type = articleRecommendations.types[sectionIndex];
	if (validationModel.isNull(type.recommendations)) {
		type.recommendations = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, type.name);
		articleRecommendations.offset = 0;
		articleRecommendations.expandRecommendationType(sectionIndex);
	} else if (type.isVisible) {
		articleRecommendations.collapseRecommendationType(sectionIndex);
	} else {
		articleRecommendations.offset = 0;
		articleRecommendations.expandRecommendationType(sectionIndex);
	}
}

articleRecommendations.onVbxRemoveClick = function () {

	var segRecommendations = frmArticleRecommendations.segArticleRecommendations;
	var selectedSectionIndex = segRecommendations.selectedIndex[0];
	var selectedRowIndex = segRecommendations.selectedIndex[1];
	var recommendationIndex = selectedRowIndex + articleRecommendations.offset * articleRecommendations.length;
	var selectedArticle = segRecommendations.selectedItems[0];

	function confirmRemove() {
		// Remove the article from the DB
		articleRecommendationModel.deleteRecommendation(selectedArticle, true);
	
		// Remove the item from the list
		articleRecommendations.types[selectedSectionIndex].recommendations.splice(recommendationIndex, 1);
		
		// update segment
		segRecommendations.removeAt(selectedRowIndex, selectedSectionIndex);
		if (segRecommendations.data[selectedSectionIndex][1].constructor != Array) {
			segRecommendations.removeSectionAt(selectedSectionIndex);
		}
	}
	
	popupModel.showPopError("êtes-vous certain de vouloir supprimer cette préconisation ?", confirmRemove, null, true);
}

articleRecommendations.onSegItemRowClick = function () {
	var selectedRowIndices = frmArticleRecommendations.segItemStatus.selectedRowIndices;
	articleRecommendations.selectedItemStatuses = [];

	if (!validationModel.isNull(selectedRowIndices)) {
      	frmArticleRecommendations.segItemStatus.rowFocusSkin = 'sknSegFoc';	//Arati:Changed code for JIRA UI-162 
		for (var i = 0; i < selectedRowIndices[0][1].length; i ++) {
			articleRecommendations.selectedItemStatuses.push(articleRecommendations.itemStatuses[selectedRowIndices[0][1][i]]);
		}
	} else {
      frmArticleRecommendations.segItemStatus.rowFocusSkin = 'sknSeg';	//Arati:Changed code for JIRA UI-162
    }
  
	// Filter the article recommendations by status code
	articleRecommendations.loadSegArticleRecommendationTypes(articleRecommendations.selectedItemStatuses);
  	if (articleRecommendations.types.length == 1) articleRecommendations.onTypeSelection(0);	//Arati:Changed code for JIRA UI-162
}

articleRecommendations.onBtnArticleRecommendationAddClick = function () {
	articleRecommendationAdd.article = undefined;
	frmArticleRecommendationAdd.show();
}

articleRecommendations.onSegArticleRecommendationsRowClick = function (sectionIndex, rowIndex) {
	var type = articleRecommendations.types[sectionIndex];
	rowIndex += articleRecommendations.offset * articleRecommendations.length;
	var articleRecommendation = type.recommendations[rowIndex];
	
	if (articleRecommendation.salesReason == 'Complément' &&
		!articleRecommendations.isReadOnly) {
		articleRecommendationAdd.article = articleRecommendation;
		frmArticleRecommendationAdd.show();
	}
};


articleRecommendations.onBtnAddPhotoClick = function() {
  if (articleRecommendations.isReadOnly) return;

  var articleRecommendation = frmArticleRecommendations.segArticleRecommendations.selectedItems[0];
  cameraComment.reInit();
  cameraComment.precoId = articleRecommendation.id;
  cameraComment.previousFormId = "frmArticleRecommendations";
  frmCameraOverlay.show();
}


articleRecommendations.onBtnEditPhotoClick = function() {
  var articleRecommendation = frmArticleRecommendations.segArticleRecommendations.selectedItems[0];
  
  //Retrieve the btphoto info from database if there is already one
  var btphoto = btphotosModel.findPhotoInfoByPrecoId(articleRecommendation.id, workOrder.id);
  if (!validationModel.isNull(btphoto) && !validationModel.isNull(btphoto.id)) {
    cameraComment.reInit();        
    cameraComment.btphotoId = btphoto.id;
    cameraComment.previousFormId = "frmArticleRecommendations";
    frmCameraComment.show();
  } else {
    alert("Cette préco n'est liée à aucune photo en base de données.");
  }

}


articleRecommendations.onBtnUpClick = function() {
	if(articleRecommendations.offset > 0) {
		articleRecommendations.updateDisplayByOffset(-1);
	}
};

articleRecommendations.onBtnDownClick = function() {
	if(articleRecommendations.selectedTypeIndex < 0 ) return;
	var totalLength = articleRecommendations.types[articleRecommendations.selectedTypeIndex].recommendations.length;
	if((totalLength - ((articleRecommendations.offset + 1) * articleRecommendations.length)) > 0) {
		articleRecommendations.updateDisplayByOffset(1);
	}
};

articleRecommendations.updateDisplayByOffset = function(factor) {
	articleRecommendations.offset += factor;
	if(articleRecommendations.selectedTypeIndex < 0 ) return;
	articleRecommendations.expandRecommendationType(articleRecommendations.selectedTypeIndex);
};
