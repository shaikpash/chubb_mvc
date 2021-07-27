partialQuotationSummary = {
	context : {},
	types: [],
	relatedTasks: [],
	reset: true
};

partialQuotationSummary.init = function() {
	var appMenu = [
		["partialQuotationSummary.BACK", "Retour", "left.png", onBackClick],
		["partialQuotationSummary.DISCOUNT", "Remise", "euro.png", partialQuotationSummary.onBtnDiscountClick],
		["partialQuotationSummary.SEND", "Envoi", "printer.png", partialQuotationSummary.onBtnSendClick]
	];
  //Dhaval:Fix for App Menu not working
	function onBackClick(){
    navigationModel.doReturn();
  }
	otis.application.createAppMenu("partialQuotationSummaryAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
};

partialQuotationSummary.newType = function(name, label) {
	return { name: name, label: label, isVisible: false, articles: [] };
};

// Collapse a given recommendation type section
partialQuotationSummary.collapseType = function (sectionIndex) {
	var type = partialQuotationSummary.types[sectionIndex];
	// Clear the section
	var masterData = [[{ lblType: type.label, imgDisplay: { src: "chevronright.png" } }, []]];
	//frmPartialQuotationSummary.segArticles.setSectionAt(masterData, sectionIndex);
  	frmPartialQuotationSummary.segArticles.setSectionAt(masterData[0], sectionIndex);		//Arati : #100086 Changed for NSRangeException
	type.isVisible = false;
};

// Expand a given recommendation type section
partialQuotationSummary.expandType = function (sectionIndex) {
	var type = partialQuotationSummary.types[sectionIndex];
	// Populate the section
	var masterData = [[{ lblType: type.label, imgDisplay: { src: "chevrondown.png" } }, []]];
	for (var i = 0; i < type.articles.length; i ++) {
		var article = {};
		article.vbxArticleSale = { isVisible : type.articles[i].isToDisplay };
		article.lblName = type.articles[i].name;
		article.lblPrice = 'Prix Unité : ' + ((!validationModel.isNull(type.articles[i].grossPrice)) ? type.articles[i].grossPrice.toFixed(2) + ' € HT' : 'inconnu');
		article.lblQuantity = type.articles[i].quantity;
		article.lblCode = type.articles[i].usualCode;
		article.lblType = (validationModel.isNull(type.articles[i].salesReason) || type.articles[i].salesReason.length == 0) ? '' : type.articles[i].salesReason.substring(0,5) + '.';
		masterData[0][1].push(article);
	}
	//frmPartialQuotationSummary.segArticles.setSectionAt(masterData, sectionIndex);
	frmPartialQuotationSummary.segArticles.setSectionAt(masterData[0], sectionIndex);		//Arati : #100086 Changed for NSRangeException
	type.isVisible = true;
};

partialQuotationSummary.getCbxDiscountData = function () {
	var maxDiscount = pricing.getOneShotDiscount(workOrder);
	var data = { masterData : [["0", 0]], maxDiscount : 0 };
	if (!validationModel.isNull(maxDiscount)) {
		data.maxDiscount = maxDiscount;
		for (var i = 1; i <= parseInt(maxDiscount.minDiscount); i++) {
			data.masterData.push([i.toString(), i]);
		}
	}
	return data;
};

partialQuotationSummary.getTotalPrice = function (allTypes) {
	var totalPrice = 0;
	for(var j = 0; j < allTypes.length; j++) {
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

partialQuotationSummary.getDiscountKeyToSelect = function (salesType, maxDiscountKey) {
	var discountKey = 0;
	var discounts = articleRecommendationModel.findRecommendationDiscountsByWorkOrder(workOrder, salesType);
	if (1 == discounts.length) {
		if (discounts[0].discount > maxDiscountKey) {
			kony.print("###! ERROR !### partialQuotationSummary.getDiscountKeyToSelect / " + salesType + " - discount greater than max: " +
				JSON.stringify(discounts) + " > " + JSON.stringify(maxDiscountKey)
			);
			popupModel.showPopError("Erreur: plusieurs valeur de remises trouvées!");
		}
		else
			discountKey = discounts[0].discount;
	} else if (discounts.length > 0) {
		kony.print("###! ERROR !### partialQuotationSummary.getDiscountKeyToSelect / " + salesType + " - several discounts found: " + JSON.stringify(discounts));
		popupModel.showPopError("Erreur: plusieurs valeur de remises trouvées!");
	}
	return discountKey;
};

// Load recommendation type section headers
partialQuotationSummary.loadSegArticleTypes = function() {
	var segArticleQuotationMasterData = [];
	for (var i = 0; i < partialQuotationSummary.types.length; i ++) {
		segArticleQuotationMasterData.push([{ lblType: partialQuotationSummary.types[i].label, imgDisplay: { src: "chevronright.png" } }, []]);
	}
	frmPartialQuotationSummary.segArticles.setData(segArticleQuotationMasterData);
};

// Get the tasks linked to the new articles (BSEQ 4) only to be performed once overall, i.e. drive to customer
partialQuotationSummary.getRelatedTasks = function(types) {
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
};

// Call before preShow
partialQuotationSummary.resetContext = function (quotationTypes, selection) {
	partialQuotationSummary.context = {
		printTextId : null,
		quotationComment : null,
		recommendationIds: [] 
	};
	
	var partialQuotationTypes = deepClone(quotationTypes);
	
	for(var i = (partialQuotationTypes.length - 1); i >= 0; i--) {
	
		var sales = partialQuotationTypes[i].sales;
		for (var j = (sales.length - 1); j >= 0; j--) {
			var nextElement = sales[j];
			if(nextElement.salesType != 'Devis' || selection.indexOf(nextElement.id) < 0) sales.splice(j,1);
		}
		
		if(sales.length == 0) {
			partialQuotationTypes.splice(i,1);
		} else {
			partialQuotationTypes[i].articles = deepClone(sales);
			partialQuotationTypes[i].sales = null;
		}
	}
	
	partialQuotationSummary.context.recommendationIds = selection;
	partialQuotationSummary.types = partialQuotationTypes;
	partialQuotationSummary.reset = true;
}

partialQuotationSummary.preShow = function () {
	partialQuotationSummary.isReadOnly = !workOrderModel.isOnSite(workOrder);
	otis.application.setCurrentAppMenu("partialQuotationSummaryAppMenu");//Dhaval:Invocation of custom app menu
	
	articleSalesQuotation.continueToSummary = false;

	var prevForm = navigationModel.getPreviousForm();

	// Set initial form state
	frmPartialQuotationSummary.hbxWorkOrderReference.lblWorkOrderReference.text = workOrder.getReference();
	frmPartialQuotationSummary.hbxWorkOrderReference.backgroundColor = workOrder.color;
	frmPartialQuotationSummary.hbxWorkOrderReference.focusSkin = workOrder.skin;
	
	frmPartialQuotationSummary.segArticles.removeAll();

	frmPartialQuotationSummary.lblTotalPrice.text = '';
	
	partialQuotationSummary.loadSegArticleTypes();
	
	for (var i = 0; i < partialQuotationSummary.types.length; i ++) {
		var type = partialQuotationSummary.types[i];
		
		// Get linked tasks
		var articlesCount = type.articles.length;
		for (var j = 0; j < articlesCount; j ++) {
			type.articles = type.articles.concat(articleRecommendationModel.findRecommendationItemsByRecommendation(type.articles[j], 'TASK'));
		}
		
		// Group all recommendations and tasks
		type.articles = articleModel.groupArticlesByUsualCodeAndSalesReason(type.articles);
		for (var j = 0; j < type.articles.length; j ++) {
			type.articles[j].isToDisplay = true;
		}
	}
	
	frmPartialQuotationSummary.lblTotalPrice.text = partialQuotationSummary.getTotalPrice(partialQuotationSummary.types);
	
	// If there is only one section, automatically expand it
	if (partialQuotationSummary.types.length == 1)
	//	partialQuotationSummary.onTypeSelection(0);
	    partialQuotationSummary.expandType(0);
  
	// Get the tasks linked to the new articles (BSEQ 4) only to be performed once overall, i.e. drive to customer
	partialQuotationSummary.relatedTasks = partialQuotationSummary.getRelatedTasks(partialQuotationSummary.types);
	var selectedRowIndices = [];
	var segRelatedTasksMasterData = [];
	for (var i = 0; i < partialQuotationSummary.relatedTasks.length; i ++) {
		var task = {};
		task.lblName = partialQuotationSummary.relatedTasks[i].name;
		task.isToDisplay = true;
		task.imgSelect = { src : 'selected.png' };
		task.id = partialQuotationSummary.relatedTasks[i].id;
		segRelatedTasksMasterData.push(task);
	}

	if (segRelatedTasksMasterData.length == 0)
		frmPartialQuotationSummary.segRelatedTasks.removeAll();
	else
		frmPartialQuotationSummary.segRelatedTasks.setData(segRelatedTasksMasterData);
	
	if (partialQuotationSummary.reset) {
		// Load the discounts
		var cbxDiscountData = partialQuotationSummary.getCbxDiscountData();
		frmPartialQuotationSummary.cbxDiscount.masterData = cbxDiscountData.masterData;
		frmPartialQuotationSummary.cbxDiscount.selectedKey = partialQuotationSummary.getDiscountKeyToSelect("Devis", cbxDiscountData.maxDiscount);
		partialQuotationSummary.reset = false;
	}
	
	partialQuotationSummary.onDiscountSelection(frmPartialQuotationSummary.cbxDiscount.selectedKey);
	
	discountSummary.displayOrHideCheckboxForDiscounts(workOrder, frmPartialQuotationSummary.cbxDiscount, frmPartialQuotationSummary.lblDiscountPc);
};

partialQuotationSummary.onBtnSendClick = function () {
	frmPartialQuotationPrintText.show();
};

partialQuotationSummary.onBtnDiscountClick = function() {
	frmPartialQuotationSummary.cbxDiscount.isVisible = !partialQuotationSummary.isReadOnly;
	frmPartialQuotationSummary.lblDiscountPc.isVisible = partialQuotationSummary.isReadOnly;
	partialQuotationSummary.onDiscountSelection(frmPartialQuotationSummary.cbxDiscount.selectedKey);
	frmPartialQuotationSummary.hbxDiscountPrice.isVisible = !(frmPartialQuotationSummary.hbxDiscountPrice.isVisible);
	
	discountSummary.displayOrHideCheckboxForDiscounts(workOrder, frmPartialQuotationSummary.cbxDiscount, frmPartialQuotationSummary.lblDiscountPc);
};

partialQuotationSummary.onTypeSelection = function (sectionIndex) {
	// Load the recommendation type section
	var type = partialQuotationSummary.types[sectionIndex];
	if (type.isVisible)
		partialQuotationSummary.collapseType(sectionIndex);
	else
		partialQuotationSummary.expandType(sectionIndex);
};

partialQuotationSummary.onDiscountSelection = function (selectedValue) {
	frmPartialQuotationSummary.lblDiscountPc.text = frmPartialQuotationSummary.cbxDiscount.selectedKeyValue[1];
	var discount = parseFloat(frmPartialQuotationSummary.lblTotalPrice.text) / 100 * parseFloat(selectedValue);
	var discountPrice = (parseFloat(frmPartialQuotationSummary.lblTotalPrice.text) - discount);
	frmPartialQuotationSummary.lblDiscount.text = discount.toFixed(2);
	frmPartialQuotationSummary.lblDiscountPrice.text = discountPrice.toFixed(2);
};

partialQuotationSummary.onRelatedTaskClick = function(taskIndex) {
	var toRefresh = -1;
	var taskIndex = frmPartialQuotationSummary.segRelatedTasks.selectedIndex[1];
	var updatedTask = frmPartialQuotationSummary.segRelatedTasks.selectedItems[0];
	updatedTask.isToDisplay = !updatedTask.isToDisplay;
	for (var i = 0; i < partialQuotationSummary.types.length; i++) {
		for (var j = 0; j < partialQuotationSummary.types[i].articles.length; j++) {
			if (partialQuotationSummary.types[i].articles[j].id == updatedTask.id) {
				partialQuotationSummary.types[i].articles[j].isToDisplay = updatedTask.isToDisplay;
				if (partialQuotationSummary.types[i].isVisible)
					toRefresh = i;
				break;
			}
		}
	}
	
	updatedTask.imgSelect = { src : updatedTask.isToDisplay ? 'selected.png' : 'selectednot.png' };
	frmPartialQuotationSummary.segRelatedTasks.setDataAt(updatedTask, taskIndex, 0);
	if (toRefresh >= 0)
		partialQuotationSummary.expandType(toRefresh);
	frmPartialQuotationSummary.lblTotalPrice.text = partialQuotationSummary.getTotalPrice(partialQuotationSummary.types);
	partialQuotationSummary.onDiscountSelection(frmPartialQuotationSummary.cbxDiscount.selectedKey);
};

partialQuotationSummary.sendQuotation = function () {
	articleSalesQuotation.resetContext();
	
	articleSalesQuotation.salesReason = 'Devis';
	articleSalesQuotation.reportType = 'PARTIAL_QUOTATION';
	
	articleSalesQuotation.setContext(partialQuotationSummary.context.recommendationIds, partialQuotationSummary.context.printTextId, partialQuotationSummary.context.quotationComment);
	
	frmArticleSalesQuotation.show();
};
