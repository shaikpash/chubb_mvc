articleRecommendationAdd = {
	article: null,
  	quantityField : ""
};

articleRecommendationAdd.init = function () {
	var appMenu = [
		["articleRecommendationAdd.BACK", "Retour", "left.png", onClickBack],
		["articleRecommendationAdd.VALID", "Valider", "check.png", onClickCheck]
	];
  //Dhaval:Fix for app menu not working start
	function onClickBack(){
      navigationModel.doReturn();
    }
  	function onClickCheck(){
      articleRecommendationAdd.onItmSaveClick();
    }
  //End
	otis.application.createAppMenu("articleRecommendationAddAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

articleRecommendationAdd.preShow = function () {
	otis.application.setCurrentAppMenu("articleRecommendationAddAppMenu");//Dhaval:Invocation of custom app menu

	frmArticleRecommendationAdd.hbxReference.lblReference.text = workOrder.getReference();
	frmArticleRecommendationAdd.hbxReference.backgroundColor = workOrder.color;
	frmArticleRecommendationAdd.hbxReference.focusSkin = workOrder.skin;
	
	frmArticleRecommendationAdd.lblArticleRecommendation.text = kony.i18n.getLocalizedString('txtArticleRecommendation');
	frmArticleRecommendationAdd.txtQuantity.text = "";
	frmArticleRecommendationAdd.txtBuilding.text = "";
	frmArticleRecommendationAdd.txtFloor.text = "";
	frmArticleRecommendationAdd.txtLocation.text = "";
	frmArticleRecommendationAdd.txtClientNumber.text = "";
	frmArticleRecommendationAdd.txtRemark.text = "";
	
	if (catalog.selectedItemCodes.length > 0) {
		var article = articleModel.findArticleByUsualCode(catalog.selectedItemCodes[0]);
		if (!validationModel.isNull(articleRecommendationAdd.article)) {
			articleRecommendationAdd.article.articleId = article.articleId;
			articleRecommendationAdd.article.name = article.name;
			articleRecommendationAdd.article.usualCode = article.usualCode;
		} else {
			articleRecommendationAdd.article = article;
		}
	}
	
	if (!validationModel.isNull(articleRecommendationAdd.article)) {
		frmArticleRecommendationAdd.lblArticleRecommendation.text = (!validationModel.isNull(articleRecommendationAdd.article.usualCode)) ? articleRecommendationAdd.article.usualCode : "";
		frmArticleRecommendationAdd.txtBuilding.text = (!validationModel.isNull(articleRecommendationAdd.article.location)) ? articleRecommendationAdd.article.location : "";
		frmArticleRecommendationAdd.txtFloor.text = (!validationModel.isNull(articleRecommendationAdd.article.floor)) ? articleRecommendationAdd.article.floor : "";
		frmArticleRecommendationAdd.txtLocation.text = (!validationModel.isNull(articleRecommendationAdd.article.placement)) ? articleRecommendationAdd.article.placement : "";
		frmArticleRecommendationAdd.txtClientNumber.text = (!validationModel.isNull(articleRecommendationAdd.article.customerNumber)) ? articleRecommendationAdd.article.customerNumber : "";
		frmArticleRecommendationAdd.txtQuantity.text = (!validationModel.isNull(articleRecommendationAdd.article.quantity)) ? articleRecommendationAdd.article.quantity : "";
		frmArticleRecommendationAdd.txtRemark.text =(!validationModel.isNull(articleRecommendationAdd.article.comment)) ? articleRecommendationAdd.article.comment : "";
	}
  
  if((frmArticleRecommendationAdd.txtQuantity.text == "0") || (workOrder.typeCode == 'P')){
    frmArticleRecommendationAdd.hbxArticleRecommendation.isVisible = false;
    frmArticleRecommendationAdd.hbxQuantity.isVisible = false;
    frmArticleRecommendationAdd.lnMiddle.isVisible = false;
    frmArticleRecommendationAdd.lblLocationTitle.isVisible = false;
    frmArticleRecommendationAdd.hbxBuilding.isVisible = false;
    frmArticleRecommendationAdd.hbxFloor.isVisible = false;
    frmArticleRecommendationAdd.hbxLocation.isVisible = false;
    frmArticleRecommendationAdd.hbxClientNumber.isVisible = false;
  }else{
    frmArticleRecommendationAdd.hbxArticleRecommendation.isVisible = true;
    frmArticleRecommendationAdd.hbxQuantity.isVisible = true;
    frmArticleRecommendationAdd.lnMiddle.isVisible = true;
    frmArticleRecommendationAdd.lblLocationTitle.isVisible = true;
    frmArticleRecommendationAdd.hbxBuilding.isVisible = true;
    frmArticleRecommendationAdd.hbxFloor.isVisible = true;
    frmArticleRecommendationAdd.hbxLocation.isVisible = true;
    frmArticleRecommendationAdd.hbxClientNumber.isVisible = true;
  }
  
  	if(workOrder.typeCode == 'P'){
		frmArticleRecommendationAdd.vbxArticleRecommendation.setEnabled(false);
        frmArticleRecommendationAdd.vbxRemove.setEnabled(false);
        frmArticleRecommendationAdd.txtQuantity.setEnabled(false);
        frmArticleRecommendationAdd.hbxBuilding.setEnabled(false);
        frmArticleRecommendationAdd.hbxFloor.setEnabled(false);
        frmArticleRecommendationAdd.hbxLocation.setEnabled(false);
        frmArticleRecommendationAdd.hbxClientNumber.setEnabled(false);
  	} else {
		frmArticleRecommendationAdd.vbxArticleRecommendation.setEnabled(true);
        frmArticleRecommendationAdd.vbxRemove.setEnabled(true);
        frmArticleRecommendationAdd.txtQuantity.setEnabled(true);
        frmArticleRecommendationAdd.hbxBuilding.setEnabled(true);
        frmArticleRecommendationAdd.hbxFloor.setEnabled(true);
        frmArticleRecommendationAdd.hbxLocation.setEnabled(true);
        frmArticleRecommendationAdd.hbxClientNumber.setEnabled(true);
  	}
}

articleRecommendationAdd.onItmSaveClick = function () {



	if (!validationModel.numberHasMaxDecimals(frmArticleRecommendationAdd.txtFloor.text,0)) {
		popupModel.showPopError("Etage non valide. Veuillez corriger avant de continuer.");
		return;
	}

	if (frmArticleRecommendationAdd.txtRemark.text.length == 0 &&
		(frmArticleRecommendationAdd.lblArticleRecommendation.text.length == 0 ||
		 frmArticleRecommendationAdd.lblArticleRecommendation.text == kony.i18n.getLocalizedString('txtArticleRecommendation'))) {
		popupModel.showPopError("Veuillez choisir une préconisation ou ajouter un texte infocom libre avant de continuer.");
	} else {
		var replacementArticle = validationModel.isNull(articleRecommendationAdd.article) ? {} : de.itgs.javascript.Object.clone(articleRecommendationAdd.article);
		replacementArticle.salesReason = 'Complément';
		replacementArticle.recommendationType = 'I2';
		
			
		//articleRecommendationModel.findRecommendationItemsByRecommendation(replacementArticle);		
		
		
		if (frmArticleRecommendationAdd.lblArticleRecommendation.text.length == 0 ||
			frmArticleRecommendationAdd.lblArticleRecommendation.text == kony.i18n.getLocalizedString('txtArticleRecommendation')) {
			replacementArticle.quantity = 0;
			replacementArticle.articleId = 'NULL';
			replacementArticle.recommendationType = 'I4';
		} else {
			if (frmArticleRecommendationAdd.txtQuantity.text.length == 0 ||
			    parseInt(frmArticleRecommendationAdd.txtQuantity.text) < 1) {
				popupModel.showPopError("Veuillez choisir une quantité valide pour la préconisation.");
				return;
			}
			replacementArticle.quantity = frmArticleRecommendationAdd.txtQuantity.text;
			replacementArticle.articleId = articleRecommendationAdd.article.articleId;
		}
		replacementArticle.comment = frmArticleRecommendationAdd.txtRemark.text;
		replacementArticle.location = frmArticleRecommendationAdd.txtBuilding.text;
		replacementArticle.floor = frmArticleRecommendationAdd.txtFloor.text;
		replacementArticle.placement = frmArticleRecommendationAdd.txtLocation.text;
		replacementArticle.customerNumber = frmArticleRecommendationAdd.txtClientNumber.text.replace(',','.');

		// Save the articleRecommendation to the DB
		if (validationModel.isNull(replacementArticle.id)) {
			if (articleModel.requiresFullItemVerification(replacementArticle)) {
				var recommendation = de.itgs.javascript.Object.clone(replacementArticle);
				recommendation.quantity = 1;
				
				// Show loading screen and block UI
				showSyncLoadingScreen();

				if(workOrder.process == 'CHUBB'){
					articleRecommendationModel.createRecommendationByItemAndWorkOrder(replacementArticle, undefined, workOrder, undefined);	
				}
				else{
					recommendation.quantity = 1;				
					articleRecommendationModel.createUnitaryRecommendations(recommendation, undefined, workOrder, undefined, replacementArticle.quantity);
				}				
				//articleRecommendationModel.createUnitaryRecommendations(recommendation, undefined, workOrder, undefined, replacementArticle.quantity);
				
				// Dismiss loading screen
				kony.application.dismissLoadingScreen();
			} else {
				articleRecommendationModel.createRecommendationByItemAndWorkOrder(replacementArticle, undefined, workOrder, undefined);
			}
		} else {
			if (parseInt(frmArticleRecommendationAdd.txtQuantity.text) > articleRecommendationAdd.article.quantity && articleModel.requiresFullItemVerification(replacementArticle)) {
				
				var quantityToBeCreated = parseInt(frmArticleRecommendationAdd.txtQuantity.text) - articleRecommendationAdd.article.quantity;
				replacementArticle.quantity = 1;
				
				// Create new recommendations
				for (var i = 0; i < quantityToBeCreated; i++) {
					articleRecommendationModel.createRecommendationByItemAndWorkOrder(replacementArticle, undefined, workOrder, undefined);	
				}
				
				// Update the existing recommendation
				articleRecommendationModel.updateRecommendations([replacementArticle]);
			} else {
				articleRecommendationModel.updateRecommendations([replacementArticle]);
			}
		}
		
		frmArticleRecommendations.show();
	}
}

articleRecommendationAdd.onHbxArticleRecommendationClick = function () {
	catalogSearch.resetFullSearchFields();  
	catalogSearch.selectionBehavior = 'single';
	catalogSearch.catalogType = null;
	catalog.canSelect = articleModel.findArticleTypes('recommendations');
	frmCatalogSearch.show();
}

articleRecommendationAdd.onVbxRemoveClick = function () {
	frmArticleRecommendationAdd.lblArticleRecommendation.text = kony.i18n.getLocalizedString('txtArticleRecommendation');
	frmArticleRecommendationAdd.txtQuantity.text = '';
}

