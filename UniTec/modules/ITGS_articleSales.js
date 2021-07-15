articleSales = {
  types: [],
  offset : 20,
  length : 20,
  selectedTypeIndex : 0	
};

articleSales.init = function(){
  var appMenu = [
    ["articleSales.BACK", "Retour", "left.png",onBackClick ],
    ["articleSales.PAUSE", "Bilan", "book.png", onBookClick],
    ["articleSales.VALID", "Valider", "check.png", onValidateClick]
  ];
  if(workOrder.chapter == "002"){
    appMenu.push(["articleSales.QUOTATION", "Nv. Devis", "new_quotation.png", onQuotationClick]);
  }

  var appMenuQuotationOnly = [
    ["articleSales.BACK", "Retour", "left.png", onBackClick],
    ["articleSales.QUOTATION", "Nv. Devis", "new_quotation.png", onQuotationClick],
    ["articleSales.VALID", "Valider", "check.png", onValidate2Steps]
  ];

  var appMenuReadOnly = [
    ["articleSales.BACK", "Retour", "left.png", onBackClick],
    ["articleSales.PAUSE", "Bilan", "book.png", onBookClick],
    ["articleSales.VALID", "Valider", "check.png", workOrder.typeCode != 'P'? articleSales.onBtnSaveClick: function(){frmWOSummary.show();}]

  ];
  //Dhaval:Fix for app menu not working start
  function onBackClick(){
    navigationModel.doReturn();
  }
  function onBookClick(){
    frmWOSummary.show();
  }
  function onValidateClick(){
    articleSales.onBtnSaveClick();
  }
  function onQuotationClick(){
    articleSales.onBtnNewQuotationClick();
  }
  function onValidate2Steps(){
    frmWOSummary.show();
  }
  //end
  //Dhaval:Invocation of custom app menu start
  otis.application.createAppMenu("articleSalesMenu", appMenu, sknAppmenu, sknAppmenuF);
  otis.application.createAppMenu("articleSalesMenuReadOnly", appMenuReadOnly, sknAppmenu, sknAppmenuF);
  otis.application.createAppMenu("articleSalesMenuQuotationOnly", appMenuQuotationOnly, sknAppmenu, sknAppmenuF);
  //End
}

articleSales.preShow = function () {
  //Dhaval:Invocation of custom app menu start
  if(workOrder.typeCode == 'P'){
    articleSales.isReadOnly = true;
  }
  else if(workOrderModel.canIntermediateQuote(workOrder) == true){
    articleSales.isReadOnly = false;
  }else{
    articleSales.isReadOnly = workOrderModel.isTerminated(workOrder);
  }
  if(workOrder.typeCode == 'P'){
    otis.application.setCurrentAppMenu("articleSalesMenuReadOnly");
  }
  else if(workOrderModel.canIntermediateQuote(workOrder) == true){
    otis.application.setCurrentAppMenu("articleSalesMenuQuotationOnly");
  }
  else if(articleSales.isReadOnly){

      otis.application.setCurrentAppMenu("articleSalesMenuReadOnly");
    }
      else {
        if(workOrder.typeCode == 'V' || workOrder.typeCode == 'I'){
			otis.application.setCurrentAppMenu("articleSalesMenu"); 
        }else{
          otis.application.setCurrentAppMenu("articleSalesMenuReadOnly");
        }
         
      }
    //end
    articleSales.types = [];
    frmArticleSales.segArticleSales.removeAll();
    frmArticleSales.segRelatedTasks.removeAll();
    frmArticleSales.lblUp.text = 'Lignes précédentes (' + articleSales.length + ')';
    frmArticleSales.lblDown.text = 'Lignes suivantes (' + articleSales.length + ')';
    frmArticleSales.hbxUp.isVisible = false;
    frmArticleSales.hbxDown.isVisible = false;	

    // Load recommendation type section headers
    articleSales.loadSegArticleSalesTypes = function () {
      articleSales.types = articleRecommendationModel.findRecommendationTypesByWorkOrder(workOrder, undefined, true);
      var segArticleSalesMasterData = [];
      for (var i = 0; i < articleSales.types.length; i ++) {
        articleSales.types[i].isSelected = true;
        segArticleSalesMasterData.push([{lblType: articleSales.types[i].label, imgDisplay: {src: "chevronright.png"}, imgSelectAll: {src: "selected.png"}},[]]);
      }
      frmArticleSales.segArticleSales.setData(segArticleSalesMasterData);
    }

    // Collapse a given recommendation type section
    articleSales.collapseSalesType = function (sectionIndex) {
      var type = articleSales.types[sectionIndex];
      articleSales.selectedTypeIndex = -1;
      frmArticleSales.hbxUp.isVisible = false;
      frmArticleSales.hbxDown.isVisible = false;		

      // Clear the section
      var segArticleSalesMasterData = [[{lblType: type.label, imgDisplay: {src: "chevronright.png"}},[]]];
      segArticleSalesMasterData[0][0].imgSelectAll = (type.isSelected) ? {src: "selected.png"} : {src: "selectednot.png"};
      //frmArticleSales.segArticleSales.setSectionAt(segArticleSalesMasterData, sectionIndex);
      frmArticleSales.segArticleSales.setSectionAt(segArticleSalesMasterData[0], sectionIndex);					//Arati : #100086 Changed for NSRangeException

      type.isVisible = false;
    }

    // Expand a given recommendation type section
    articleSales.expandSalesType = function (sectionIndex) {
      var type = articleSales.types[sectionIndex];
      articleSales.offset = 0;
      articleSales.length = type.sales.length;
      var selectedRowIndices = de.itgs.javascript.Object.clone(frmArticleSales.segArticleSales.selectedRowIndices);

      articleSales.selectedTypeIndex = sectionIndex;
      var displayOffsetUpdates = (type.sales.length > articleSales.length);
      frmArticleSales.hbxUp.isVisible = false; //UI-133
      frmArticleSales.hbxDown.isVisible = false; //UI-133

      var endIndex;
      var strIndex;

      if(!displayOffsetUpdates || validationModel.isNull(articleSales.offset)) {
        strIndex = 0;
        endIndex = type.sales.length;
      } else {
        strIndex = articleSales.length * articleSales.offset;
        endIndex = Math.min((strIndex + articleSales.length), type.sales.length);
      }

      // Populate the section
      var segArticleSalesMasterData = [[{ lblType: type.label, imgDisplay: {src: "chevrondown.png"} }, []]];
      segArticleSalesMasterData[0][0].imgSelectAll = (type.isSelected) ? { src: "selected.png" } : { src: "selectednot.png" };

      for (var i = strIndex; i < endIndex; i ++) {
        var articleSale = {};
        articleSale.lblName 	 = type.sales[i].name;
        articleSale.lblQuantity  = "Quantité : " + type.sales[i].quantity; 
        articleSale.lblCode 	 = type.sales[i].usualCode;
        articleSale.lblType = (type.sales[i].salesReason.length == 0) ? "" : type.sales[i].salesReason.substring(0,5) + '.';
        articleSale.lblLocation = (type.sales[i].location.length == 0) ? "" : type.sales[i].location;
        articleSale.lblLocation += (type.sales[i].location.length == 0 && type.sales[i].floor.length == 0) ? "" : "/";
        articleSale.lblLocation += (type.sales[i].floor.length == 0) ? "" : type.sales[i].floor;
        articleSale.lblLocation += (type.sales[i].floor.length == 0 && type.sales[i].placement.length == 0) ? "" : "/";
        articleSale.lblLocation += (type.sales[i].placement.length == 0) ? "" : type.sales[i].placement;
        if (validationModel.isNull(type.sales[i].isSelected)) {
          type.sales[i].isSelected = (type.sales[i].salesType == 'Devis') ? false : true;
        }
        articleSale.imgSale = (type.sales[i].isSelected) ? {src: "selected.png"} : {src: "selectednot.png"};
        articleSale.lblQuotationNb = type.sales[i].quotationNb;
        segArticleSalesMasterData[0][1].push(articleSale);
      }
      //frmArticleSales.segArticleSales.setSectionAt(segArticleSalesMasterData, sectionIndex);
      frmArticleSales.segArticleSales.setSectionAt(segArticleSalesMasterData[0], sectionIndex);				//Arati : #100086 Changed for NSRangeException

      // Reset the selected state from before (if applicable)
      if (!validationModel.isNull(selectedRowIndices) && selectedRowIndices.length > 0) {
        frmArticleSales.segArticleSales.selectedRowIndices = selectedRowIndices;
        articleSales.onSaleSelection(selectedRowIndices[0][0], selectedRowIndices[0][1][0]);
      }

      type.isVisible = true;
    }

    frmArticleSales.hbxReference.lblReference.text = workOrder.getReference();
    frmArticleSales.hbxReference.backgroundColor = workOrder.color;
    frmArticleSales.hbxReference.focusSkin = workOrder.skin;

    // Load all the article recommendations
    articleSales.loadSegArticleSalesTypes();

    // If there is only one section, automatically expand it
    if (articleSales.types.length == 1) articleSales.onTypeSelection(0);
  }

  articleSales.onTypeSelection = function (sectionIndex) {
    // Clear the related tasks
    frmArticleSales.segRelatedTasks.removeAll();

    // Load the recommendation type section
    var type = articleSales.types[sectionIndex];
    if (validationModel.isNull(type.sales)) {
      type.sales = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, type.name, undefined, true);
      articleSales.offset = 0;
      articleSales.expandSalesType(sectionIndex);
    } else if (type.isVisible) {
      articleSales.collapseSalesType(sectionIndex);
    } else {
      articleSales.offset = 0;
      articleSales.expandSalesType(sectionIndex);
    }
  }

  articleSales.onSaleSelection = function (sectionIndex, rowIndex) {

    rowIndex += articleSales.offset * articleSales.length;

    var type = articleSales.types[sectionIndex];
    var sale = type.sales[rowIndex];
    if (validationModel.isNull(sale.tasks)) {
      // Get the tasks linked to the replacement / complement
      sale.tasks = taskModel.findPossibleTasksByArticleAndOptionTypes(sale.articleId, [2,6], workOrder);
      if (sale.salesReason == "Remplacement") {
        var itemTasks = taskModel.findPossibleTasksByArticleAndOptionTypes(sale.itemId, [3], workOrder);
        // Add tasks from the item to be replaced if they are not already in the array
        for (var i = 0; i < itemTasks.length; i ++) {
          var hasTask = false;
          for (var j = 0; j < sale.tasks.length; j ++) {
            if (sale.tasks[j].articleId == itemTasks[i].articleId) {
              hasTask = true;
              break;
            }
          }
          if (!hasTask) {
            sale.tasks.push(itemTasks[i]);
          }
        }
      }
      var preSelectedTasks = articleRecommendationModel.findRecommendationItemsByRecommendation(sale, 'TASK');
      for (var i = 0; i < preSelectedTasks.length; i ++) {
        for (var j = 0; j < sale.tasks.length; j ++) {
          if (preSelectedTasks[i].articleId == sale.tasks[j].articleId) sale.tasks[j].isSelected = true;
        }
      }
    } 

    var segRelatedTasksMasterData = [];
    var selectedRowIndices = [[0,[]]];
    for (var i = 0; i < sale.tasks.length; i ++) {
      var task = {};
      task.lblName = sale.tasks[i].name;
      if (sale.tasks[i].isSelected) selectedRowIndices[0][1].push(i);
      segRelatedTasksMasterData.push(task);
    }
    frmArticleSales.segRelatedTasks.setData(segRelatedTasksMasterData);
    if (selectedRowIndices[0][1].length > 0) frmArticleSales.segRelatedTasks.selectedRowIndices = selectedRowIndices;
  }

  articleSales.onTaskSelection = function (rowIndex, isSelected) {
    if (articleSales.isReadOnly) {
      de.itgs.javascript.Segment.reverseLastSelection(frmArticleSales.segRelatedTasks,0, rowIndex, isSelected);
      return;
    }


    var type = articleSales.types[frmArticleSales.segArticleSales.selectedRowIndices[0][0]];
    var sale = type.sales[frmArticleSales.segArticleSales.selectedRowIndices[0][1]];
    var task = sale.tasks[rowIndex];
    task.isSelected = isSelected;
  }

  articleSales.onBtnSaleClick = function (sectionIndex, rowIndex) {
    if (articleSales.isReadOnly) return;

    rowIndex += articleSales.offset * articleSales.length;

    var type = articleSales.types[sectionIndex];
    var sale = type.sales[rowIndex];

    // Toggle the article sale
    sale.isSelected = !sale.isSelected;

    // Refresh the selectAll icon on the type header
    var hasSelectedSales = false;
    var hasUnSelectedSales = false;
    for (var i = 0; i < type.sales.length; i++) {
      if (type.sales[i].isSelected) hasSelectedSales = true;
      else hasUnSelectedSales = true;
    }
    if (hasSelectedSales && !hasUnSelectedSales) type.isSelected = true;
    else if (!hasSelectedSales && hasUnSelectedSales) type.isSelected = false;
    else type.isSelected = undefined;

    // Refresh the type section
    if (type.isVisible) articleSales.expandSalesType(sectionIndex);
    else articleSales.collapseSalesType(sectionIndex);
  }

  articleSales.setRelatedTasks = function(types, selection) {

    selection = validationModel.isNull(selection) ? new Array() : selection;
    var hasSelection = (selection.length > 0);

    for (var i = 0; i < types.length; i++) {
      var type = types[i];
      if (!validationModel.isNull(type.sales)) {
        for (var j = 0; j < type.sales.length; j++) {
          var sale = type.sales[j];
          if(hasSelection && selection.indexOf(sale.id) < 0) continue;
          if (!validationModel.isNull(sale.tasks)) {
            // Delete existing article sales tasks if there are any
            articleRecommendationModel.deleteRecommendationItemsByRecommendations([sale], 'TASK');
            var articleRecommendationItems = [];

            for (var k = 0; k < sale.tasks.length; k++) {
              var task = sale.tasks[k];
              if (task.isSelected) {
                var articleRecommendationItem = articleRecommendationModel.setBSEQTaskData(task, sale.id, sale.quantity, workOrder);
                articleRecommendationItems.push(articleRecommendationItem);
              }
            }

            // Save the selected article sales tasks in the DB
            var result = articleRecommendationModel.createRecommendationItems(articleRecommendationItems);
          }
        }
      } 
    }
  };

  articleSales.reviewAdditionalTasks = function(types, selection, reset) {

    // we sort these by doco and salestype - the review will be called only once by doco / salestype key.
    var recommendationsToSort = new Array();
    selection = validationModel.isNull(selection) ? new Array() : selection;
    var hasSelection = (selection.length > 0);

    for(var i = 0; i < types.length; i++) {
      var sales = types[i].sales;
      if(!hasSelection) {
        if (!validationModel.isNull(sales)) recommendationsToSort = recommendationsToSort.concat(sales);
      }
      else {
        for(var j = 0; j < sales.length; j++) {
          if(selection.indexOf(sales[j].id) >= 0) recommendationsToSort.push(sales[j]);
        }
      }
    }

    var sortedRecommendations = articleRecommendationModel.sortRecommendationsByDocoAndSalesTypes(recommendationsToSort);

    for(var i = 0; i < sortedRecommendations.length; i++) {
      var nextRow = sortedRecommendations[i];
      articleRecommendationModel.reviewAdditionalTasksByContext(nextRow.doco, nextRow.salesType, nextRow.ids, reset);
    }
  }

  articleSales.onBtnSaveClick = function () {

    var isDZC = false;

    for (var i = 0; i < articleSales.types[0].sales.length; i++) {
      if(articleSales.types[0].sales[i].pricingSubFamily == "DZC" && articleSales.types[0].sales[i].isSelected == true){
        isDZC = true;
      }
    }

    // Update the article sales types in the DB
    if(isDZC == true){
      popupModel.showPopError("Un article de la famille Sous-traitance est présent dans la vente");
    }else{
      databaseModel.openDBExchange('Mise à jour des préconisations...');

      for (var i = 0; i < articleSales.types.length; i++) {
        var type = articleSales.types[i];
        if (validationModel.isNull(type.sales)) type.sales = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, type.name, undefined, true);
        for (var j = 0; j < type.sales.length; j++) {
          var sale = type.sales[j];
          if (sale.isSelected == undefined || sale.isSelected) sale.salesType = 'Vente';
          else sale.salesType = 'Devis';
        }
        articleRecommendationModel.updateRecommendations(type.sales, false);
      }

      articleSales.setRelatedTasks(articleSales.types);
      articleSales.reviewAdditionalTasks(articleSales.types);

      // Continue to the summary page
      articleSalesSummary.reset = true;
      articleSalesSummary.resetQt = true;

      databaseModel.closeDBExchange();
      frmArticleSalesSummary.show();	
    }
  }

  articleSales.onBtnSelectAllClick = function (sectionIndex) {
    if (articleSales.isReadOnly) return;

    var type = articleSales.types[sectionIndex];

    // Toggle the type check box
    if (type.isSelected) type.isSelected = false;
    else type.isSelected = true;

    if (type.sales != undefined) {
      // Toggle all underlying checkboxes
      for (var i = 0; i < type.sales.length; i++) {
        var sale = type.sales[i];
        sale.isSelected = type.isSelected;
      }
    }

    if (type.isVisible) articleSales.expandSalesType(sectionIndex);
    else articleSales.collapseSalesType(sectionIndex);
  }


  articleSales.onBtnNewQuotationClick = function () {

    databaseModel.openDBExchange('Préparation du devis partiel en cours...');

    var selectedArticles = new Array();

    for (var i = 0; i < articleSales.types.length; i++) {
      var type = articleSales.types[i];
      var toUpdate = false;
      if (validationModel.isNull(type.sales)) type.sales = articleRecommendationModel.findRecommendationsByWorkOrder(workOrder, type.name, undefined, true);
      for (var j = 0; j < type.sales.length; j++) {
        var sale = type.sales[j];
        if (sale.isSelected || sale.isSelected == undefined) {
          sale.salesType = 'Devis';
          selectedArticles.push(sale.id);
          toUpdate = true;
        }
      }
      if(toUpdate) articleRecommendationModel.updateRecommendations(type.sales, false);
    }

    if(selectedArticles.length > 0) articleSales.setRelatedTasks(articleSales.types, selectedArticles);
    articleSales.reviewAdditionalTasks(articleSales.types, selectedArticles, true);
    databaseModel.closeDBExchange();

    if (selectedArticles.length > 0) {
      partialQuotationSummary.resetContext(articleSales.types, selectedArticles);
      frmPartialQuotationSummary.show();
    }
    else {
      popupModel.showPopError("Veuillez sélectionner au moins un article à inclure dans le nouveau devis partiel.");
    }
  }


  articleSales.onBtnUpClick = function() {
    if(articleSales.offset > 0) {
      articleSales.updateDisplayByOffset(-1);
    }
  };

  articleSales.onBtnDownClick = function() {
    if(articleSales.selectedTypeIndex < 0 ) return;
    var totalLength = articleSales.types[articleSales.selectedTypeIndex].sales.length;
    if((totalLength - ((articleSales.offset + 1) * articleSales.length)) > 0) {
      articleSales.updateDisplayByOffset(1);
    }
  };

  articleSales.updateDisplayByOffset = function(factor) {
    articleSales.offset += factor;
    if(articleSales.selectedTypeIndex < 0 ) return;
    frmArticleSales.segArticleSales.selectedRowIndices = [];
    frmArticleSales.segRelatedTasks.removeAll();
    articleSales.expandSalesType(articleSales.selectedTypeIndex);
  };