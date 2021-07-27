//Dhaval:Removed spaces from all sql
catalogSearch = {
	articleCategories: [],
	articleFamilies: [],
	articleSubFamilies: [],
	articleCharacteristics: [],
	selectionBehavior: null,
	/*
	 * sales: 			catalogue Vente UNITEC (Catégorie courante)
	 * maintenance: 	catalogue Maintenance UNITEC (catégorie courante, activité BT)
	 * recommendations: catalogue Préconisations (catégorie, famille et sous-famille courantes, activité BT)
	 */
	catalogType: undefined,
	searchRecommendationReplacement: false,
	process : null,
	isFullSearch : false
};

catalogSearch.resetFullSearchFields  = function(){
	catalogSearch.isFullSearch = false;
	catalogSearch.articleCategories = [];
	catalogSearch.srcCategory = undefined;
	catalogSearch.articleFamilies = [];
	catalogSearch.srcFamily = undefined;
	catalogSearch.articleSubFamilies = [];
	catalogSearch.articleCharacteristics = [];
};

catalogSearch.init = function(){
  	initFormProcess("frmCatalogSearch", frmCatalogSearch);//Dhaval:To add Dynamic tab header design issue #18
	var appMenu = [
		["catalogSearch.BACK", "Retour", "left.png", onBackClick]
	];
    //Dhaval:Fix for app menu not working
	function onBackClick(){
      catalogSearch.onItmReturnClick();
    }
	otis.application.createAppMenu("catalogSearchAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

catalogSearch.preShow = function() {
  
    otis.application.setCurrentAppMenu("catalogSearchAppMenu");//Dhaval:Invocation of custom app menu
	
	kony.print("before where clause function");	
  	frmCatalogSearch.tabPaneIdentify.containerHeight = 115;														//Arati:Changed code for JIRA UI-84
  	frmCatalogSearch.tabPaneIdentify.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;	//Arati:Changed code for JIRA UI-84
    catalogSearch.refreshCatalogPreFilterWhereClause = function (selectedFamily, selectedSubFamily) {
		/*
		 * sales: 			catalogue Vente UNITEC (Catégorie courante)
		 * maintenance: 	catalogue Maintenance UNITEC (catégorie courante, activité BT)
		 * recommendations: catalogue Préconisations (catégorie, famille et sous-famille courantes, activité BT)
		 */
		catalogSearch.wc = {
			sales:
				"AND PRP0 IN ( " +
				"SELECT KY " +
				"FROM F56PRM " +
				"WHERE RMK2 IN ('Y','O') " +
				"AND TYDT = 'TA' " +
				"AND SDB = 'KONI') ",
			maintenance:
				"AND PRP0 IN ( " +
				"SELECT KY " +
				"FROM F56PRM " +
				"WHERE RMK3 IN ('Y','O') " +
				"AND TYDT = 'TA' " +
				"AND SDB = 'KONI') " +
				"AND COALESCE(Item.SRP6,'NULL') in( (activity) , 'MUL')",
			recommendations: 
				"AND PRP0 IN ( " +
				"SELECT KY " +
				"FROM F56PRM " +
				"WHERE RMK2 IN ('Y','O') " +
				"AND TYDT = 'TA' " +
				"AND SDB = 'KONI') " +
				"AND COALESCE(Item.SRP6,'NULL') in( (activity) , 'MUL') " + 
				"AND ITM IN ( " +
				"SELECT Item.ITM " +
				"FROM ItemCrossReference, Item " +
				"WHERE XRT IN ('ES', 'R') " + 
				"AND ItemCrossReference.CITM = Item.usualcode) " +
				"AND SRP1 = (family) " + 
				"AND SRP2 = (subFamily) ",
			supply :
				"AND PRP0 IN (" +
				"SELECT distinct KY " +
				"FROM F56PRM " +
				"WHERE TYDT = 'TB' " +
				"AND SDB = 'KONI') ",
			completeSupply :
				"AND PRP0 IN ( " +
				"SELECT KY " +
				"FROM F56PRM " +
				"WHERE (( " +
				"RMK3 IN ('Y','O') " +
				"AND TYDT = 'TA') " +
				"OR TYDT = 'TB') " +
				"AND SDB = 'KONI') ",
			replacement :
				"AND PRP0 IN ( " +
				"SELECT KY " +
				"FROM F56PRM " +
				"WHERE  RMK2 IN ('Y','O') " +
				"AND TYDT = 'TA' " +
				"AND SDB = 'KONI') " + 
				"AND COALESCE(Item.SRP6,'NULL') in( (activity) , 'MUL') " +
				"AND ITM IN ( " +
				"SELECT Item.ITM " +
				"FROM ItemCrossReference, Item " +
				"WHERE XRT IN ('AT') " + 
				"AND ItemCrossReference.LITM = Item.usualcode) " +
				"AND SRP1 = (family) " + 
				"AND SRP2 = (subFamily) "
		};
	
		var whereClause="";
		if (!validationModel.isNull(catalogSearch.catalogType) && catalogSearch.wc.hasOwnProperty(catalogSearch.catalogType)) {
			whereClause = catalogSearch.wc[catalogSearch.catalogType];
   			if (whereClause.indexOf('(activity)') >= 0) whereClause = whereClause.replace("(activity)", "'" + workOrder.equipmentActivity + "'");
			whereClause = (!validationModel.isNull(selectedFamily))    ? whereClause.replace("(family)", "'" + selectedFamily.code + "'") :
														  	 			 whereClause.replace("(family)", "SRP1");
			whereClause = (!validationModel.isNull(selectedSubFamily)) ? whereClause.replace("(subFamily)", "'" + selectedSubFamily.code + "'") :
														    			 whereClause.replace("(subFamily)", "SRP2");
		}
    		
		return whereClause;
	}

	// Load characteristic section headers
	catalogSearch.loadSegCharacteristics = function (categories, families, subFamilies) {
		catalogSearch.articleCharacteristics = articleModel.findArticleCharacteristicsByCategoryAndFamily(categories, families, subFamilies);
      	var segArticleCharacteristicsMasterData = [];
		for (var i = 0; i < catalogSearch.articleCharacteristics.length; i ++) {
			segArticleCharacteristicsMasterData.push([{lblFilterName: catalogSearch.articleCharacteristics[i].name, imgFilter: {isVisible: false}, imgDisplayFilter: {src: "chevronright.png"}},[]]);
		}
		frmCatalogSearch.segFilters.setData(segArticleCharacteristicsMasterData);
	}
	
	// Collapse a given characteristic section
	catalogSearch.collapseCharacteristic = function (sectionIndex) {
		var characteristic = catalogSearch.articleCharacteristics[sectionIndex];
		
		// Clear the section
		var segCharacteristicSectionMasterData = [[{lblFilterName: characteristic.name, imgDisplayFilter: {src: "chevronright.png"}},[]]];//Dhaval:Fix for Range error of Catalog removed brackets
		segCharacteristicSectionMasterData[0][0].imgFilter = {isVisible: false};
		for (var i = 0; i < characteristic.values.length; i ++) {
			if (characteristic.values[i].isSelected) {
				segCharacteristicSectionMasterData[0][0].imgFilter = {isVisible: true};
				break;
			}
		}
		//frmCatalogSearch.segFilters.setSectionAt(segCharacteristicSectionMasterData, sectionIndex);
        frmCatalogSearch.segFilters.setSectionAt(segCharacteristicSectionMasterData[0], sectionIndex);//Dhaval:Added fix for setSectionAt for expand and collapse
	
		// Clear the selected rows
		var selectedRowIndexes = de.itgs.javascript.Object.clone(frmCatalogSearch.segFilters.selectedRowIndices);
		if (!validationModel.isNull(selectedRowIndexes)) {
			for (var i = 0; i < selectedRowIndexes.length; i ++) {
				if (selectedRowIndexes[i][0] == sectionIndex) {
					selectedRowIndexes.splice(i,1);
					i--;
				}
			}
		}
		frmCatalogSearch.segFilters.selectedRowIndices = selectedRowIndexes;

		characteristic.isVisible = false;
	}
	
	// Expand a given characteristic section
	catalogSearch.expandCharacteristic = function (sectionIndex) {
		var characteristic = catalogSearch.articleCharacteristics[sectionIndex];
		
		// Populate the section
		var segCharacteristicSectionMasterData = [[{lblFilterName: characteristic.name, imgDisplayFilter: {src: "chevrondown.png"}, imgFilter: {isVisible: false}},[]]];//Dhaval:Fix for Range error of Catalog removed brackets
		var selectedSectionRowIndexes = [];
		for (var i = 0; i < characteristic.values.length; i ++) {
			segCharacteristicSectionMasterData[0][1].push({lblFilter: characteristic.values[i].name});
			if (characteristic.values[i].isSelected) selectedSectionRowIndexes.push(i);
		}
        kony.print(JSON.stringify(segCharacteristicSectionMasterData));
      	//frmCatalogSearch.segFilters.setSectionAt(segCharacteristicSectionMasterData, sectionIndex);
		frmCatalogSearch.segFilters.setSectionAt(segCharacteristicSectionMasterData[0], sectionIndex);//Dhaval:Added fix for setSectionAt for expand and collapse
		
		// Select the selected rows
		var selectedRowIndexes = de.itgs.javascript.Object.clone(frmCatalogSearch.segFilters.selectedRowIndices);
		if (!validationModel.isNull(selectedRowIndexes)) selectedRowIndexes.push([sectionIndex,selectedSectionRowIndexes]);
		else selectedRowIndexes = [[sectionIndex,selectedSectionRowIndexes]];
		frmCatalogSearch.segFilters.selectedRowIndices = selectedRowIndexes;
		
		characteristic.isVisible = true;
	}
    
	// Advanced Search Tab
    var selectedFamily = null;
    var selectedSubFamily = null; 
  	if(catalogSearch.isFullSearch) {
    	selectedFamily = (!validationModel.isNull(catalogSearch.articleFamilies) && (catalogSearch.articleFamilies.length > 0)) ? catalogSearch.articleFamilies[0] : selectedFamily;
    	selectedSubFamily = (!validationModel.isNull(catalogSearch.articleSubFamilies) && (catalogSearch.articleSubFamilies.length > 0)) ? catalogSearch.articleSubFamilies[0] : selectedSubFamily; 
    }
  
    if(kony.application.getPreviousForm() != frmCatalog) {
      
        kony.print("before where clause function form check");
        if(catalogSearch.isFullSearch && !validationModel.isNull(catalogSearch.articleCategories) && (catalogSearch.articleCategories.length > 0)) {
            catalogSearch.articleCategories = [catalogSearch.articleCategories[0]];
        } else {
            var whereClause = catalogSearch.refreshCatalogPreFilterWhereClause();
            kony.print("whereClause:"+whereClause);
            catalogSearch.articleCategories = articleModel.findArticleCategories(whereClause);
        }
      
      	kony.print("catalogSearch.articleCategories:"+JSON.stringify(catalogSearch.articleCategories));
		var categoryMasterData = [];
		for(var i=0 ; i < catalogSearch.articleCategories.length; i++) {
			categoryMasterData.push([i, catalogSearch.articleCategories[i].name]);
		}
		frmCatalogSearch.cmbCategory.masterData = categoryMasterData;
		
		catalogSearch.onBtnClearClick();
		
		if(categoryMasterData.length == 1) {
			frmCatalogSearch.cmbCategory.selectedKey = '0';
			catalogSearch.onCategorySelection(selectedFamily, selectedSubFamily);
		}
		//Dhaval:Fix for Datastore error.
		if(catalog.canSelect.length == 0) {
          if(validationModel.isNull(catalogSearch.catalogType)){//Dhaval:Generic handling of null
          catalogSearch.catalogType="maintenance";
        }
			catalog.canSelect = articleModel.findArticleTypes(catalogSearch.catalogType);
		}
	}

    if(!catalogSearch.isFullSearch) {
        frmCatalogSearch.tabPaneIdentify.activeTabs = [0]; 
        frmCatalogSearch.btnTabPrev.skin = 'skntabBtn';//Dhaval:Design issue #18 for slide
        frmCatalogSearch.btnTabFirst.skin = 'sknTabBtnFoc';//Dhaval:Design issue #18 for slide
    } else {
        frmCatalogSearch.tabPaneIdentify.activeTabs = [1]; 
        frmCatalogSearch.btnTabPrev.skin = 'sknTabBtnFoc';//Dhaval:Design issue #18 for slide
        frmCatalogSearch.btnTabFirst.skin = 'skntabBtn';//Dhaval:Design issue #18 for slide
    }
}

catalogSearch.onCategorySelection = function (selectedFamily, selectedSubFamily) {
	var selectedCategory = catalogSearch.articleCategories[frmCatalogSearch.cmbCategory.selectedKey];
	
	// Advanced Search Tab - Family Dropdown
    if(catalogSearch.isFullSearch && !validationModel.isNull(selectedFamily)) {
        catalogSearch.articleFamilies = [selectedFamily];
    } else {
        var whereClause = catalogSearch.refreshCatalogPreFilterWhereClause();
        catalogSearch.articleFamilies = articleModel.findArticleFamiliesByCategory(selectedCategory, whereClause);
    }
  
	var familyMasterData = [];
	for(var i=0 ; i < catalogSearch.articleFamilies.length; i++) {
		familyMasterData.push([i, catalogSearch.articleFamilies[i].name]);
	}
	frmCatalogSearch.cmbFamily.masterData = familyMasterData;
	frmCatalogSearch.cmbFamily.selectedKey = null;
	frmCatalogSearch.hbxFamily.isVisible = (familyMasterData.length > 0) ? true : false;
	frmCatalogSearch.cmbSubFamily.masterData = [];
	frmCatalogSearch.hbxSubFamily.isVisible = false;
	
	catalogSearch.loadSegCharacteristics([selectedCategory], catalogSearch.articleFamilies, undefined);
	
	if(familyMasterData.length == 1) {
		frmCatalogSearch.cmbFamily.selectedKey = '0';
		catalogSearch.onFamilySelection(selectedSubFamily);
	}
}

catalogSearch.onFamilySelection = function (selectedSubFamily) {
	var selectedCategory = catalogSearch.articleCategories[frmCatalogSearch.cmbCategory.selectedKey];
	var selectedFamily = catalogSearch.articleFamilies[frmCatalogSearch.cmbFamily.selectedKey];
	
	// Advanced Search Tab - SubFamily Dropdown
    if(catalogSearch.isFullSearch && !validationModel.isNull(selectedSubFamily)) {
        catalogSearch.articleSubFamilies = [selectedSubFamily];
    } else {
        var whereClause = catalogSearch.refreshCatalogPreFilterWhereClause(selectedFamily);
        catalogSearch.articleSubFamilies = articleModel.findArticleSubFamiliesByCategoryAndFamily(selectedCategory, selectedFamily, whereClause);
    }

	var subFamilyMasterData = [[-1, '(Aucune sous-famille) ..']];
	for(var i=0 ; i < catalogSearch.articleSubFamilies.length; i++) {
		subFamilyMasterData.push([i, catalogSearch.articleSubFamilies[i].name]);
	}
	frmCatalogSearch.cmbSubFamily.masterData = subFamilyMasterData;
	frmCatalogSearch.cmbSubFamily.selectedKey = null;
	frmCatalogSearch.hbxSubFamily.isVisible = (subFamilyMasterData.length > 1) ? true : false;
	
	catalogSearch.loadSegCharacteristics([selectedCategory], [selectedFamily], catalogSearch.articleSubFamilies);
  
	if(subFamilyMasterData.length == 2) {
		frmCatalogSearch.cmbSubFamily.selectedKey = '0';
		catalogSearch.onSubFamilySelection();
	}
}

catalogSearch.onSubFamilySelection = function () {
	var selectedCategory = catalogSearch.articleCategories[frmCatalogSearch.cmbCategory.selectedKey];
	var selectedFamily = catalogSearch.articleFamilies[frmCatalogSearch.cmbFamily.selectedKey];
	var selectedSubFamily = (frmCatalogSearch.cmbSubFamily.selectedKey > -1) ? [catalogSearch.articleSubFamilies[frmCatalogSearch.cmbSubFamily.selectedKey]] : [];

	catalogSearch.loadSegCharacteristics([selectedCategory], [selectedFamily], selectedSubFamily);
}

catalogSearch.onCharacteristicSelection = function (sectionIndex) {
	var characteristic = catalogSearch.articleCharacteristics[sectionIndex];
	if (validationModel.isNull(characteristic.values)) {
		characteristic.values = articleModel.findArticleCharacteristicValuesByCharacteristic(characteristic.referenceCode);
//		characteristic.values = articleModel.findArticleCharacteristicValuesByCharacteristic(characteristic);
		catalogSearch.expandCharacteristic(sectionIndex);
	} else if (characteristic.isVisible) {
		catalogSearch.collapseCharacteristic(sectionIndex);
	} else {
		catalogSearch.expandCharacteristic(sectionIndex);
	}
}

catalogSearch.onCharacteristicValueSelection = function (sectionIndex, rowIndex, isSelected) {
	catalogSearch.articleCharacteristics[sectionIndex].values[rowIndex].isSelected = isSelected;
}

catalogSearch.onBtnClearClick = function () {
	// Rapid Search Tab
	frmCatalogSearch.txtCertification.text = "";
	frmCatalogSearch.txtArticle.text = "";
	frmCatalogSearch.txtWording.text = "";
	
	// Advanced Search Tab
	frmCatalogSearch.cmbCategory.selectedKey = null;
	frmCatalogSearch.cmbFamily.masterData = [];
	frmCatalogSearch.cmbFamily.selectedKey = null;
	frmCatalogSearch.hbxFamily.isVisible = false;
	frmCatalogSearch.cmbSubFamily.masterData = [];
	frmCatalogSearch.cmbSubFamily.selectedKey = null;
	frmCatalogSearch.hbxSubFamily.isVisible = false;
	frmCatalogSearch.segFilters.removeAll();
	catalogSearch.articleCharacteristics = [];
}

catalogSearch.onBtnSaveClick = function () {
	
	var selectedCategory;
	var selectedFamily;
	var selectedSubFamily;
	var selectedArticle = {};
	
	// Fast Search
  	kony.print("activeTab"+frmCatalogSearch.tabPaneIdentify.activeTabs);
	if (frmCatalogSearch.tabPaneIdentify.activeTabs == 0) {
		if(	frmCatalogSearch.txtCertification.text.length == 0 && 
			frmCatalogSearch.txtArticle.text.length == 0 && 
			frmCatalogSearch.txtWording.text.length == 0) {
			popupModel.showPopError(kony.i18n.getLocalizedString("catRapidSearchError"));
			return;
		} else {
			catalogSearch.articleCharacteristics = [];
			if (frmCatalogSearch.txtCertification.text.length > 0) {
              selectedArticle.certificateNumber = frmCatalogSearch.txtCertification.text;
            }
			if (frmCatalogSearch.txtArticle.text.length > 0) {
              selectedArticle.usualCode = frmCatalogSearch.txtArticle.text;
            }
			if (frmCatalogSearch.txtWording.text.length > 0) {
              var wordingTxt = frmCatalogSearch.txtWording.text.toUpperCase();
  				wordingTxt = removeAccent(wordingTxt);
              selectedArticle.name = wordingTxt;
            }
		}
	// Advanced Search
	} else {
		selectedCategory = (frmCatalogSearch.cmbCategory.selectedKey != null) ? catalogSearch.articleCategories[frmCatalogSearch.cmbCategory.selectedKey] : undefined;
		selectedFamily = (frmCatalogSearch.cmbFamily.selectedKey != null) ? catalogSearch.articleFamilies[frmCatalogSearch.cmbFamily.selectedKey] : undefined;
		selectedSubFamily = ((frmCatalogSearch.cmbSubFamily.selectedKey != null) && frmCatalogSearch.cmbSubFamily.selectedKey > -1) ? catalogSearch.articleSubFamilies[frmCatalogSearch.cmbSubFamily.selectedKey] : undefined;
		if (validationModel.isNull(selectedCategory)) {
			popupModel.showPopError(kony.i18n.getLocalizedString("catAdvancedNoFamilySelected"));
			return;
		} else if (validationModel.isNull(selectedFamily)) {
			popupModel.showPopError(kony.i18n.getLocalizedString("catAdvancedNoCategoryAndFamilySelected"));
		 	return;
		}
	}
	
	var whereClause = catalogSearch.refreshCatalogPreFilterWhereClause(selectedFamily, selectedSubFamily);
	var articles = articleModel.findArticles(selectedCategory, selectedFamily, selectedSubFamily, catalogSearch.articleCharacteristics, selectedArticle, whereClause);
	if (articles.length > 0) {
		var newData = articles.map(
			function(r){
				var isClickable = (catalog.canSelect.length == 0 || (catalog.canSelect.indexOf(r.type) >= 0 && r.STKT != 'O'));
				var newDataRow = 
				[
					{
						btn1 : {isVisible : r.totalPA != 0},
						btn2 : {isVisible : r.totalM != 0},
						btn3 : {isVisible : r.totalT != 0},
						vb1 : {isVisible : r.totalPA != 0}, // if null, no value => button not displayed
						vb2 : {isVisible : r.totalM != 0}, // if null, no value => button not displayed
						vb3 : {isVisible : r.totalT != 0}, // if null, no value => button not displayed
						btnFeatures : {isVisible : true},
						vbFeatures :{isVisible : true},
						//lblItem : r.Libelle,
                        lblItem : (r.STKT != 'O') ? r.Libelle : r.Libelle + "\n(*** article obsolete ***)" ,
						lblID : "(" + r.usualcode + ")",
						imgSelectItem : (isClickable) ? {src : "selectednot.png"} : "",
						isClickable : isClickable
					},
				[]
				];
				return newDataRow;
			}
		)
		catalog.items = newData;	
      frmCatalog.show();
	} else {
		popupModel.showPopError(kony.i18n.getLocalizedString("catNoResults"));
	}
}

catalogSearch.close = function() {
	catalogSearch.selectionBehavior = 'multi';
	catalogSearch.searchRecommendationReplacement = false;
	catalog.canSelect = new Array();
	catalog.callback = null;
	catalog.selectedItemCodes = [];
	catalogSearch.process = null;
}

catalogSearch.onItmReturnClick = function () {
  if(taskOverviewTC.showTCPopup == true){
        exchangeItemPop.show();
    	exchangeItemPop.cbxChoices.selectedKeys = taskOverview.cbxChoicesData;
      }
  	catalogSearch.close();
  navigationModel.doReturn();
}

//Arati:Changed Code For JIRA UI-222 Start here
catalogSearch.txtCertificationOnDone = function () {
    var certificationTxt = frmCatalogSearch.txtCertification.text.toUpperCase(); //temporary change UI-222
	frmCatalogSearch.txtCertification.text = certificationTxt.trim();
};

catalogSearch.txtArticleOnDone = function () {
  	var articleTxt = frmCatalogSearch.txtArticle.text.toUpperCase();
	frmCatalogSearch.txtArticle.text = articleTxt.trim(); 
};

catalogSearch.txtWordingOnDone = function () {
  	
	frmCatalogSearch.txtWording.text = frmCatalogSearch.txtWording.text.trim();
};
//Arati:Changed Code For JIRA UI-222 End here