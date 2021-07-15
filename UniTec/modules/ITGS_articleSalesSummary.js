articleSalesSummary = {
	salesTypes: [],
	quotationTypes: [],
	relatedTasks: [],
	relatedTasksQt: [],
	reset: true,
	resetQt: true
};

articleSalesSummary.init = function(){
	var noSendAppMenu = [
		["articleSalesSummary.BACK", "Retour", "left.png", onBackClick],
		["articleSalesSummary.DISCOUNT", "Remise", "euro.png", onDiscountClick],
		["articleSalesSummary.VALID", "Valider", "check.png", onVaildateClick],
		["articleSalesSummary.PAUSE", "Bilan", "book.png", onBookClick]
	];
	
	var appMenu = [
      ["articleSalesSummary.BACK", "Retour", "left.png", onBackClick],
      ["articleSalesSummary.DISCOUNT", "Remise", "euro.png", onDiscountClick],
      ["articleSalesSummary.SEND", "Envoi", "printer.png", onSendClick],
      ["articleSalesSummary.VALID", "Valider", "check.png", onVaildateClick],
      ["articleSalesSummary.PAUSE", "Bilan", "book.png", onBookClick]
	];
  //Dhaval:Fix for App Menu not working start
  function onBackClick(){
    navigationModel.doReturn();
  }
  function onDiscountClick(){
    articleSalesSummary.onBtnDiscountClick();
  }
  function onSendClick(){
    articleSalesSummary.onBtnSendClick();
  }
  function onVaildateClick(){
    articleSalesSummary.onBtnSaveClick();
  }
  function onBookClick(){
    frmWOSummary.show();
  }
  //End
  //Dhaval:Invocation of custom app menu start
	otis.application.createAppMenu("articleSalesSummaryAppMenu", appMenu, sknAppmenu, sknAppmenuF);
	otis.application.createAppMenu("noSendArticleSalesSummaryAppMenu", noSendAppMenu, sknAppmenu, sknAppmenuF);
  //End
  initFormProcess("frmArticleSalesSummary", frmArticleSalesSummary);//Dhaval:Design issue #18 for slide
}

articleSalesSummary.onBtnSaveClick = function () {

	articleSalesSummary.removeNotSelectedTasks = function() {
		var tasksToDelete = new Array();
		var allArticles = [articleSalesSummary.salesTypes, articleSalesSummary.quotationTypes];
		for (var k = 0; k < allArticles.length; k++) {
			var src = allArticles[k];
			for (var i = 0; i < src.length;i++) {
				var type = src[i];
				for(var j = (type.articles.length - 1); j >= 0; j--) {
					var art = type.articles[j];
					if ((!art.isToDisplay) && art.type == 'TASK' && art.subType == 'BSEQ4') {
						tasksToDelete.push(art.id);
						type.articles.splice(j, 1);
					}
				}
			}
		}
		articleRecommendationModel.deleteRecommendationItemsByIds(tasksToDelete);
	}
	
	articleSalesSummary.saveDiscount = function(salesReason, discount) {
		var recommendations = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, undefined, undefined, true, salesReason);
		for (var i = 0; i < recommendations.length; i ++) {
			recommendations[i].discount = discount;
		}
		articleRecommendationModel.updateRecommendations(recommendations);
	}
	
	// Save/update the BSEQ4 related to the quotation							 
	articleSalesSummary.removeNotSelectedTasks();
	articleSalesSummary.saveDiscount('Devis', frmArticleSalesSummary.cbxDiscountQt.selectedKey);

	articleSalesSummary.salesTypes = articleRecommendationModel.findRecommendationTypesByWorkOrder(workOrder, undefined, true, 'Vente');
	if (
		((navigationModel.getPreviousForm() == 'frmArticleSales' || navigationModel.getPreviousForm() == 'frmArticleSalesQuotation') && 
		frmArticleSalesSummary.tabArticleSalesSummary.activeTabs[0] == 0) && workOrderModel.isOnSite(workOrder)
	) {
		// Save/update the BSEQ4 related to the direct sales
		articleSalesSummary.saveDiscount('Vente', frmArticleSalesSummary.cbxDiscount.selectedKey);
		
		frmArticleSalesConfirm.show();
	} else {
		articleSalesQuotation.resetContext();
		articleSalesQuotation.salesReason = 'Devis';
		articleSalesQuotation.reportType = 'QUOTATION';
		articleSalesQuotation.continueToSummary = (articleSalesSummary.salesTypes.length == 0);
		frmArticleSalesQuotation.show();
	}
}

articleSalesSummary.getCbxDiscountData = function () {
	var maxDiscount = pricing.getOneShotDiscount(workOrder);
	var data = { masterData : [["0", 0]], maxDiscount : 0 };
	if (!validationModel.isNull(maxDiscount)) {
		data.maxDiscount = maxDiscount;
		for (var i = 1; i <= parseInt(maxDiscount.minDiscount); i++) {
			data.masterData.push([i.toString(), i]);
		}
	}
	return data;
}

articleSalesSummary.getDiscountKeyToSelect = function (salesType, maxDiscountKey) {
	var discountKey = 0;
	var discounts = articleRecommendationModel.findRecommendationDiscountsByWorkOrder(workOrder, salesType);
	if (1 == discounts.length) {
		if (discounts[0].discount > maxDiscountKey) {
			kony.print("###! ERROR !### articleSalesSummary.preShow / " + salesType + " - discount greater than max: " +
				JSON.stringify(discounts) + " > " + JSON.stringify(maxDiscountKey)
			);
			popupModel.showPopError("Erreur: plusieurs valeur de remises trouvées!");
		}
		else
			discountKey = discounts[0].discount;
	} else if (discounts.length > 0) {
		kony.print("###! ERROR !### articleSalesSummary.preShow / " + salesType + " - several discounts found: " + JSON.stringify(discounts));
		popupModel.showPopError("Erreur: plusieurs valeur de remises trouvées!");
	}
	return discountKey;
}

articleSalesSummary.preShow = function () {
  try{
	databaseModel.openDBExchange('Préparation des modèles devis / vente...');
	articleSalesSummary.isReadOnly = !workOrderModel.isOnSite(workOrder);
	articleSalesQuotation.continueToSummary = false;
    frmArticleSalesSummary.tabArticleSalesSummary.containerHeight = 115;													//Arati:Changed code for JIRA UI-84
    frmArticleSalesSummary.tabArticleSalesSummary.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;	//Arati:Changed code for JIRA UI-84
	var prevForm = navigationModel.getPreviousForm();
    //var currentTab = frmArticleSalesSummary.tabArticleSalesSummary.activeTabs[0];
    var currentTab = frmArticleSalesSummary.tabArticleSalesSummary.activeTabs;				//Arati : Fix For Issue#73 

	if (prevForm == 'frmArticleSalesOrders' || currentTab == 1 || workOrder.chapter == '002'){
		otis.application.setCurrentAppMenu("noSendArticleSalesSummaryAppMenu");//Dhaval:Invocation of custom app menu
	}else{
		otis.application.setCurrentAppMenu("articleSalesSummaryAppMenu");//Dhaval:Invocation of custom app menu
	}
	
	// Get the tasks linked to the new articles (BSEQ 4) only to be performed once overall, i.e. drive to customer
	articleSalesSummary.getRelatedTasks = function (types) {
		var tasks = [];
		for (var i = 0; i < types.length; i ++) {
			var type = types[i];
			for (var j = 0; j < type.articles.length; j ++) {
				var article = type.articles[j];
				if (article.type == 'TASK' && article.subType == 'BSEQ4') {
					tasks.push(type.articles[j]);
				}
			}
		}
		return tasks;
	}
	
	articleSalesSummary.setTotalPrice = function(allTypes) {
		var totalPrice = 0;
		for(var j = 0; j < allTypes.length;j++) {
			var articles = allTypes[j].articles;
			for(var i = 0; i < articles.length; i++) {
				var art = articles[i];
			
				if (!validationModel.isNull(art.quantity) && art.isToDisplay) {
					if (!validationModel.isNull(art.grossPrice))
						totalPrice += (art.grossPrice * art.quantity);
				}
			}
		}

		return totalPrice.toFixed(2);
	};
	
	// Set initial form state
	frmArticleSalesSummary.segArticleSales.removeAll();
	frmArticleSalesSummary.segArticleQuotation.removeAll();
	articleSalesSummary.salesTypes = [];
	articleSalesSummary.quotationTypes = [];
	frmArticleSalesSummary.lblTotalPrice.text = '';
	frmArticleSalesSummary.lblTotalPriceQt.text = '';

	frmArticleSalesSummary.hbxReference.lblReference.text = workOrder.getReference();
	frmArticleSalesSummary.hbxReference.backgroundColor = workOrder.color;
	frmArticleSalesSummary.hbxReference.focusSkin = workOrder.skin;
	
	frmArticleSalesSummary.hbxReferenceQt.lblReferenceQt.text = workOrder.getReference();
	frmArticleSalesSummary.hbxReferenceQt.backgroundColor = workOrder.color;
	frmArticleSalesSummary.hbxReferenceQt.focusSkin = workOrder.skin;

	if (navigationModel.getPreviousForm() != 'frmArticleSales' && navigationModel.getPreviousForm() != 'frmArticleSalesQuotation') {
		frmArticleSalesSummary.tabArticleSalesSummary.activeTabs = [1];
      	frmArticleSalesSummary.btnTabPrev.skin='sknTabBtnFoc';//Dhaval:Design issue #18 for slide
    	frmArticleSalesSummary.btnTabFirst.skin='skntabBtn';//Dhaval:Design issue #18 for slide
      //Arati : Fix For Issue#73 start here
	} //else if (frmArticleSalesSummary.tabArticleSalesSummary.activeTabs.constructor != Array) {
      else if (!validationModel.isNull(frmArticleSalesSummary.tabArticleSalesSummary.activeTabs) && frmArticleSalesSummary.tabArticleSalesSummary.activeTabs.constructor != Array){
		frmArticleSalesSummary.tabArticleSalesSummary.activeTabs = [0];
        frmArticleSalesSummary.btnTabPrev.skin='skntabBtn';//Dhaval:Design issue #18 for slide
    	frmArticleSalesSummary.btnTabFirst.skin='sknTabBtnFoc';//Dhaval:Design issue #18 for slide
	} else if (validationModel.isNull(frmArticleSalesSummary.tabArticleSalesSummary.activeTabs)) {
      frmArticleSalesSummary.tabArticleSalesSummary.activeTabs = [0];
      frmArticleSalesSummary.btnTabPrev.skin='skntabBtn';//Dhaval:Design issue #18 for slide
      frmArticleSalesSummary.btnTabFirst.skin='sknTabBtnFoc';//Dhaval:Design issue #18 for slide
    }//Arati : Fix For Issue#73 end here

	// ###### SALES ######
	if (frmArticleSalesSummary.tabArticleSalesSummary.activeTabs == 0) {
		// Load recommendation type section headers
		articleSalesSummary.loadSegArticleSalesTypes = function () {
			articleSalesSummary.salesTypes = articleRecommendationModel.findRecommendationTypesByWorkOrder(workOrder, undefined, true, 'Vente');
			var segArticleSalesMasterData = [];
			for (var i = 0; i < articleSalesSummary.salesTypes.length; i ++) {
				segArticleSalesMasterData.push([{lblType: articleSalesSummary.salesTypes[i].label, imgDisplay: {src: "chevronright.png"}},[]]);
			}
			frmArticleSalesSummary.segArticleSales.setData(segArticleSalesMasterData);
		}
		
		// Collapse a given recommendation type section
		articleSalesSummary.collapseSalesType = function (sectionIndex) {
			var type = articleSalesSummary.salesTypes[sectionIndex];
			
			// Clear the section
			var segArticleSalesMasterData = [[{lblType: type.label, imgDisplay: {src: "chevronright.png"}},[]]];
			//frmArticleSalesSummary.segArticleSales.setSectionAt(segArticleSalesMasterData, sectionIndex);
          	frmArticleSalesSummary.segArticleSales.setSectionAt(segArticleSalesMasterData[0], sectionIndex);			//Arati : #100086 Changed for NSRangeException
	
			type.isVisible = false;
		}
		
		// Expand a given recommendation type section
		articleSalesSummary.expandSalesType = function (sectionIndex) {
			var type = articleSalesSummary.salesTypes[sectionIndex];
			// Populate the section
			var segArticleSalesMasterData = [[{lblType: type.label, imgDisplay: {src: "chevrondown.png"}},[]]];
			for (var i = 0; i < type.articles.length; i ++) {
			/*if(type.articles[i].pricingSubFamily == "DZC"){
				type.articles[i].grossPrice = type.articles[i].grossPrice * type.articles[i].quantity;
				type.articles[i].quantity = 1;
			}*/
				var articleSale = {};
				articleSale.vbxArticleSale = {isVisible : type.articles[i].isToDisplay};
				articleSale.lblName = type.articles[i].name;
				articleSale.lblPrice = 	'Prix Unité : ' + ((!validationModel.isNull(type.articles[i].grossPrice)) ? type.articles[i].grossPrice.toFixed(2) + ' € HT' : 'inconnu');
				articleSale.lblQuantity = type.articles[i].quantity;
				articleSale.lblCode = type.articles[i].usualCode;
				articleSale.lblType = (validationModel.isNull(type.articles[i].salesReason) || type.articles[i].salesReason.length == 0) ? '' : type.articles[i].salesReason.substring(0,5) + '.';
				segArticleSalesMasterData[0][1].push(articleSale);
			}
			//frmArticleSalesSummary.segArticleSales.setSectionAt(segArticleSalesMasterData, sectionIndex);
          	frmArticleSalesSummary.segArticleSales.setSectionAt(segArticleSalesMasterData[0], sectionIndex);			//Arati : #100086 Changed for NSRangeException
			
			type.isVisible = true;
		}
		
		// Load all the article sales
		articleSalesSummary.loadSegArticleSalesTypes();
		
		// Calculate the total price
		var totalPrice = 0;
		for (var i = 0; i < articleSalesSummary.salesTypes.length; i ++) {
			var type = articleSalesSummary.salesTypes[i];
			
			// Get all recommendations and all of there linked tasks
			type.articles = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, type.name, undefined, true, 'Vente');
			var articlesCount = type.articles.length;
			for (var j = 0; j < articlesCount; j ++) {
				type.articles = type.articles.concat(articleRecommendationModel.findRecommendationItemsByRecommendation(type.articles[j],'TASK'));
			}
			
			// Group all recommendations and tasks and calculate the totale price
			type.articles = articleModel.groupArticlesByUsualCodeAndSalesReason(type.articles);
			for (var j = 0; j < type.articles.length; j ++) {
				var articleSale = type.articles[j];
				type.articles[j].isToDisplay = true;
			}
		}
		frmArticleSalesSummary.lblTotalPrice.text = articleSalesSummary.setTotalPrice(articleSalesSummary.salesTypes);

		// If there is only one section, automatically expand it
		if (articleSalesSummary.salesTypes.length == 1) articleSalesSummary.onTypeSelection(0);
		
		// Get the tasks linked to the new articles (BSEQ 4) only to be performed once overall, i.e. drive to customer
		articleSalesSummary.relatedTasks = articleSalesSummary.getRelatedTasks(articleSalesSummary.salesTypes);
		var segRelatedTasksMasterData = [];
		for (var i = 0; i < articleSalesSummary.relatedTasks.length; i ++) {
			var task = {};
			task.lblName = articleSalesSummary.relatedTasks[i].name;
			task.isToDisplay = true;
			task.imgSelect = { src : 'selected.png' };
			task.id = articleSalesSummary.relatedTasks[i].id;
			segRelatedTasksMasterData.push(task);
		}
		
		if (segRelatedTasksMasterData.length == 0) {
			frmArticleSalesSummary.lblTasks.isVisible = false;
			frmArticleSalesSummary.segRelatedTasks.isVisible = false;
			frmArticleSalesSummary.segRelatedTasks.removeAll();
		} else {
			frmArticleSalesSummary.lblTasks.isVisible = true;
			frmArticleSalesSummary.segRelatedTasks.isVisible = true;
			frmArticleSalesSummary.segRelatedTasks.setData(segRelatedTasksMasterData);
		}
		
		if (articleSalesSummary.reset) {
			// Load the discounts
			var cbxDiscountData = articleSalesSummary.getCbxDiscountData();
			frmArticleSalesSummary.cbxDiscount.masterData = cbxDiscountData.masterData;
			frmArticleSalesSummary.cbxDiscount.selectedKey = articleSalesSummary.getDiscountKeyToSelect("Vente", cbxDiscountData.maxDiscount);
			articleSalesSummary.reset = false;
		}
		
		articleSalesSummary.onDiscountSelection(frmArticleSalesSummary.cbxDiscount.selectedKey);
		
	// ###### QUOTATION ######
	} else {
		// Load recommendation type section headers
		articleSalesSummary.loadSegArticleQuotationTypes = function () {
			articleSalesSummary.quotationTypes = articleRecommendationModel.findRecommendationTypesByWorkOrder(workOrder, undefined, true, 'Devis');
			var segArticleQuotationMasterData = [];
			for (var i = 0; i < articleSalesSummary.quotationTypes.length; i ++) {
				segArticleQuotationMasterData.push([{lblType: articleSalesSummary.quotationTypes[i].label, imgDisplay: {src: "chevronright.png"}},[]]);
			}
			frmArticleSalesSummary.segArticleQuotation.setData(segArticleQuotationMasterData);
		}
		
		// Collapse a given recommendation type section
		articleSalesSummary.collapseQuotationType = function (sectionIndex) {
			var type = articleSalesSummary.quotationTypes[sectionIndex];
			
			// Clear the section
			var segArticleQuotationMasterData = [[{lblType: type.label, imgDisplay: {src: "chevronright.png"}},[]]];
			//frmArticleSalesSummary.segArticleQuotation.setSectionAt(segArticleQuotationMasterData, sectionIndex);
			frmArticleSalesSummary.segArticleQuotation.setSectionAt(segArticleQuotationMasterData[0], sectionIndex);		//Arati : #100086 Changed for NSRangeException
			type.isVisible = false;
		}
		
		// Expand a given recommendation type section
		articleSalesSummary.expandQuotationType = function (sectionIndex) {
			var type = articleSalesSummary.quotationTypes[sectionIndex];
			// Populate the section
			var segArticleQuotationMasterData = [[{lblType: type.label, imgDisplay: {src: "chevrondown.png"}},[]]];
			for (var i = 0; i < type.articles.length; i ++) {
				var articleQuotation = {};
				articleQuotation.vbxArticleSale = { isVisible : type.articles[i].isToDisplay };
				articleQuotation.lblName = type.articles[i].name;
				articleQuotation.lblPrice = 'Prix Unité : ' + ((!validationModel.isNull(type.articles[i].grossPrice)) ? type.articles[i].grossPrice.toFixed(2) + ' € HT' : 'inconnu');
				articleQuotation.lblQuantity = type.articles[i].quantity;
				articleQuotation.lblCode = type.articles[i].usualCode;
				articleQuotation.lblType = (validationModel.isNull(type.articles[i].salesReason) || type.articles[i].salesReason.length == 0) ? '' : type.articles[i].salesReason.substring(0,5) + '.';
				segArticleQuotationMasterData[0][1].push(articleQuotation);
			}
			//frmArticleSalesSummary.segArticleQuotation.setSectionAt(segArticleQuotationMasterData, sectionIndex);
			frmArticleSalesSummary.segArticleQuotation.setSectionAt(segArticleQuotationMasterData[0], sectionIndex); 			//Arati : #100086 Changed for NSRangeException
			type.isVisible = true;
		}
		
		// Load all the article sales
		articleSalesSummary.loadSegArticleQuotationTypes();
		
		// Calculate the total price
		var totalPrice = 0;
		for (var i = 0; i < articleSalesSummary.quotationTypes.length; i ++) {
			var type = articleSalesSummary.quotationTypes[i];
		
			// Get all recommendations and all of there linked tasks
			type.articles = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, type.name, undefined, true, 'Devis');
//			for(var j = 0; j < type.articles.length; j++) type.articles[j].isToDisplay = true;
			var articlesCount = type.articles.length;
			for (var j = 0; j < articlesCount; j ++) {
				type.articles = type.articles.concat(articleRecommendationModel.findRecommendationItemsByRecommendation(type.articles[j],'TASK'));
			}
			
			// Group all recommendations and tasks and calculate the totale price
			type.articles = articleModel.groupArticlesByUsualCodeAndSalesReason(type.articles);
			for (var j = 0; j < type.articles.length; j ++) {
				type.articles[j].isToDisplay = true;
			}
		}
		frmArticleSalesSummary.lblTotalPriceQt.text = articleSalesSummary.setTotalPrice(articleSalesSummary.quotationTypes);
		
		// If there is only one section, automatically expand it
		if (articleSalesSummary.quotationTypes.length == 1) articleSalesSummary.onTypeSelection(0);
		
		// Get the tasks linked to the new articles (BSEQ 4) only to be performed once overall, i.e. drive to customer
		articleSalesSummary.relatedTasksQt = articleSalesSummary.getRelatedTasks(articleSalesSummary.quotationTypes);
		var selectedRowIndices = [];
		var segRelatedTasksMasterData = [];
		for (var i = 0; i < articleSalesSummary.relatedTasksQt.length; i ++) {
			var task = {};
			task.lblName = articleSalesSummary.relatedTasksQt[i].name;
			task.isToDisplay = true;
			task.imgSelect = { src : 'selected.png' };
			task.id = articleSalesSummary.relatedTasksQt[i].id;
			segRelatedTasksMasterData.push(task);
		}

		if (segRelatedTasksMasterData.length == 0) {
			frmArticleSalesSummary.lblTasksQt.isVisible = false;
			frmArticleSalesSummary.segRelatedTasksQt.isVisible = false;
			frmArticleSalesSummary.segRelatedTasksQt.removeAll();
		} else {
			frmArticleSalesSummary.lblTasksQt.isVisible = true;
			frmArticleSalesSummary.segRelatedTasksQt.isVisible = true;
			frmArticleSalesSummary.segRelatedTasksQt.setData(segRelatedTasksMasterData);
		}
		
		if (articleSalesSummary.resetQt) {
			// Load the discounts
			var cbxDiscountData = articleSalesSummary.getCbxDiscountData();
			frmArticleSalesSummary.cbxDiscountQt.masterData = cbxDiscountData.masterData;
			frmArticleSalesSummary.cbxDiscountQt.selectedKey = articleSalesSummary.getDiscountKeyToSelect("Devis", cbxDiscountData.maxDiscount);
			articleSalesSummary.resetQt = false;
		}
		
		articleSalesSummary.onDiscountQtSelection(frmArticleSalesSummary.cbxDiscountQt.selectedKey);
	}
	
	databaseModel.closeDBExchange();

	if (frmArticleSalesSummary.tabArticleSalesSummary.activeTabs == 0) 
		discountSummary.displayOrHideCheckboxForDiscounts(workOrder, frmArticleSalesSummary.cbxDiscount, frmArticleSalesSummary.lblDiscountPc);
	else
		discountSummary.displayOrHideCheckboxForDiscounts(workOrder, frmArticleSalesSummary.cbxDiscountQt, frmArticleSalesSummary.lblDiscountQtPc);		
  }catch(e){
    kony.print(" pre show "+e);
  }
}

articleSalesSummary.onRelatedTaskClick = function(activeTab) {
	if (activeTab == 0) {
		var toRefresh = -1;
		var taskIndex = frmArticleSalesSummary.tabArticleSalesSummary.segRelatedTasks.selectedIndex[1];
		var updatedTask = frmArticleSalesSummary.tabArticleSalesSummary.segRelatedTasks.selectedItems[0];
		updatedTask.isToDisplay = (!updatedTask.isToDisplay);
		for (var i = 0; i < articleSalesSummary.salesTypes.length; i++) {
			for (var j = 0; j < articleSalesSummary.salesTypes[i].articles.length; j++) {
				if (articleSalesSummary.salesTypes[i].articles[j].id == updatedTask.id) {
					articleSalesSummary.salesTypes[i].articles[j].isToDisplay = updatedTask.isToDisplay;
					if (articleSalesSummary.salesTypes[i].isVisible)
						toRefresh = i;
					break;
				}
			}
		}
		
		updatedTask.imgSelect = {
			src : updatedTask.isToDisplay ? 'selected.png' : 'selectednot.png'
		}
		frmArticleSalesSummary.tabArticleSalesSummary.segRelatedTasks.setDataAt(updatedTask, taskIndex, 0);
		if(toRefresh>=0) articleSalesSummary.expandSalesType(toRefresh);
		frmArticleSalesSummary.lblTotalPrice.text = articleSalesSummary.setTotalPrice(articleSalesSummary.salesTypes);
	}
	else {
		var toRefresh = -1;
		var taskIndex = frmArticleSalesSummary.tabArticleSalesSummary.segRelatedTasksQt.selectedIndex[1];
		var updatedTask = frmArticleSalesSummary.tabArticleSalesSummary.segRelatedTasksQt.selectedItems[0];
		updatedTask.isToDisplay = (!updatedTask.isToDisplay);
		
		for(var i = 0; i < articleSalesSummary.quotationTypes.length; i++){
			for(var j = 0; j < articleSalesSummary.quotationTypes[i].articles.length; j++){
				if (articleSalesSummary.quotationTypes[i].articles[j].id == updatedTask.id) {
					articleSalesSummary.quotationTypes[i].articles[j].isToDisplay = updatedTask.isToDisplay;
					if (articleSalesSummary.quotationTypes[i].isVisible)
						toRefresh = i;
					break;
				}
			}
		}
		
		updatedTask.imgSelect = {
			src : updatedTask.isToDisplay ? 'selected.png' : 'selectednot.png'
		}
		frmArticleSalesSummary.tabArticleSalesSummary.segRelatedTasksQt.setDataAt(updatedTask, taskIndex, 0);
		if (toRefresh >=0)
			articleSalesSummary.expandQuotationType(toRefresh);
		frmArticleSalesSummary.lblTotalPriceQt.text = articleSalesSummary.setTotalPrice(articleSalesSummary.quotationTypes);
	}
};

articleSalesSummary.onTypeSelection = function (sectionIndex) {
	if (frmArticleSalesSummary.tabArticleSalesSummary.activeTabs == 0) {
		// Load the recommendation type section
		var type = articleSalesSummary.salesTypes[sectionIndex];
		if (type.isVisible) {
			articleSalesSummary.collapseSalesType(sectionIndex);
		} else {
			articleSalesSummary.expandSalesType(sectionIndex);
		}
	} else {
		// Load the recommendation type section
		var type = articleSalesSummary.quotationTypes[sectionIndex];
		if (type.isVisible) {
			articleSalesSummary.collapseQuotationType(sectionIndex);
		} else {
			articleSalesSummary.expandQuotationType(sectionIndex);
		}
	}
}

articleSalesSummary.onBtnSendClick = function () {
	articleSalesQuotation.resetContext();
	if (frmArticleSalesSummary.tabArticleSalesSummary.activeTabs == 0) {
		articleSalesQuotation.salesReason = 'Vente';
		articleSalesQuotation.reportType = 'SALES_CONTRACT';
	}
	else {
		articleSalesQuotation.salesReason = 'Devis';
		articleSalesQuotation.reportType = 'QUOTATION';
	}
	frmArticleSalesQuotation.show();
}

articleSalesSummary.onTabChange = function (tabIndex) {
	frmArticleSalesSummary.tabArticleSalesSummary.activeTabs = [tabIndex];	//Arati : Fix For Issue#73 
	if(tabIndex==0){//Dhaval:Design issue #18 for slide
     	frmArticleSalesSummary.btnTabPrev.skin='skntabBtn';
     	frmArticleSalesSummary.btnTabFirst.skin='sknTabBtnFoc';
    }
  	else{//Dhaval:Design issue #18 for slide
    	frmArticleSalesSummary.btnTabPrev.skin='sknTabBtnFoc';
    	frmArticleSalesSummary.btnTabFirst.skin='skntabBtn';
  }
  	articleSalesSummary.preShow();
}

articleSalesSummary.onBtnDiscountClick = function() {
	if (frmArticleSalesSummary.tabArticleSalesSummary.activeTabs == 0) {
		frmArticleSalesSummary.tabArticleSalesSummary.cbxDiscount.isVisible = !articleSalesSummary.isReadOnly;
		frmArticleSalesSummary.tabArticleSalesSummary.lblDiscountPc.isVisible= articleSalesSummary.isReadOnly;
		articleSalesSummary.onDiscountSelection(frmArticleSalesSummary.cbxDiscount.selectedKey);
		frmArticleSalesSummary.hbxDiscountPrice.isVisible = !(frmArticleSalesSummary.hbxDiscountPrice.isVisible);
	} else {
		frmArticleSalesSummary.tabArticleSalesSummary.cbxDiscountQt.isVisible = !articleSalesSummary.isReadOnly;
		frmArticleSalesSummary.tabArticleSalesSummary.lblDiscountQtPc.isVisible= articleSalesSummary.isReadOnly;
		articleSalesSummary.onDiscountQtSelection(frmArticleSalesSummary.cbxDiscountQt.selectedKey);
		frmArticleSalesSummary.hbxDiscountQt.isVisible = !(frmArticleSalesSummary.hbxDiscountQt.isVisible);
		frmArticleSalesSummary.hbxDiscountPriceQt.isVisible = !(frmArticleSalesSummary.hbxDiscountPriceQt.isVisible);
	}
	
	if (frmArticleSalesSummary.tabArticleSalesSummary.activeTabs == 0) 
		discountSummary.displayOrHideCheckboxForDiscounts(workOrder, frmArticleSalesSummary.cbxDiscount, frmArticleSalesSummary.lblDiscountPc);
	else
		discountSummary.displayOrHideCheckboxForDiscounts(workOrder, frmArticleSalesSummary.cbxDiscountQt, frmArticleSalesSummary.lblDiscountQtPc);	
}

articleSalesSummary.onDiscountSelection = function (selectedValue) {
	frmArticleSalesSummary.tabArticleSalesSummary.lblDiscountPc.text = 
		frmArticleSalesSummary.tabArticleSalesSummary.cbxDiscount.selectedKeyValue[1];
	var discount = parseFloat(frmArticleSalesSummary.lblTotalPrice.text) / 100 * parseFloat(selectedValue);
	frmArticleSalesSummary.lblDiscount.text = discount.toFixed(2);
	frmArticleSalesSummary.lblDiscountPrice.text = (parseFloat(frmArticleSalesSummary.lblTotalPrice.text) - discount).toFixed(2);
}

articleSalesSummary.onDiscountQtSelection = function (selectedValue) {
	frmArticleSalesSummary.tabArticleSalesSummary.lblDiscountQtPc.text = 
		frmArticleSalesSummary.tabArticleSalesSummary.cbxDiscountQt.selectedKeyValue[1];
	var discount = parseFloat(frmArticleSalesSummary.lblTotalPriceQt.text) / 100 * parseFloat(selectedValue);
	frmArticleSalesSummary.lblDiscountQt.text = discount.toFixed(2);
	frmArticleSalesSummary.lblDiscountPriceQt.text = (parseFloat(frmArticleSalesSummary.lblTotalPriceQt.text) - discount).toFixed(2);
}
