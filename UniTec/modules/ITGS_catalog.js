//Dhaval:Removed spaces from all sql
catalog = {
	items : [], // contains all items obtained through the catalogSearch SQL request
	selectedItemCodes : [],
	indexMargin : 40,
	canSelect : []
};

catalog.init = function() {
	var appMenu = [
		["catalog.BACK", "Retour", "left.png", onBackClick],
		["catalog.VALID", "Valider", "check.png", onValidateClick]
	];
  //Dhaval:Fix for app menu not working start
	function onBackClick(){
      
      navigationModel.doReturn();
    }
  	function onValidateClick(){
      catalog.onValidBasket();
    }
  //End
	otis.application.createAppMenu("catalogAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
	frmCatalog.segDeviceList.widgetDataMap = {
		btn1 : 'btn1',
		btn2 : 'btn2',
		btn3 : 'btn3',
		vb1 : 'vb1', 
		vb2 : 'vb2',
		vb3 : 'vb3',
		btnFeatures : 'btnFeatures',
		vbFeatures : 'vbFeatures',
		lblItem : 'lblItem',
		lblID : 'lblID',
		imgSelectItem : 'imgSelectItem',
  		isSelected : 'isSelected',
  		lblCode : 'lblCode',
  		isClickable : 'isClickable',
  		imgRow:'imgRow'
	};
  //alert("end of init reached");
}

catalog.preShow = function() {

  	frmCatalog.segDeviceList.containerHeight = 85;		//Arati:Changed code for JIRA UI-84
	frmCatalog.segDeviceList.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;	//Arati:Changed code for JIRA UI-84*/
  
	otis.application.setCurrentAppMenu("catalogAppMenu");//Dhaval:Invocation of custom app menu
	//alert("Catalog obj"+JSON.stringify(catalog));
  	//alert("articleModel"+JSON.stringify(articleModel));
  if(catalog.canSelect.length == 0) {
    	if(validationModel.isNull(catalogSearch.catalogType)){//Dhaval:Generic handling of null
          catalogSearch.catalogType="maintenance";
        }
		catalog.canSelect = articleModel.findArticleTypes(catalogSearch.catalogType);
	}
	kony.print("items:"+JSON.stringify(catalog.items.slice(0,catalog.indexMargin)));	
  kony.print("WDM:"+JSON.stringify(frmCatalog.segDeviceList.widgetDataMap));
	frmCatalog.segDeviceList.removeAll();
	frmCatalog.segDeviceList.addAll(catalog.items.slice(0,catalog.indexMargin));
	
	catalog.currentLastIndex = catalog.indexMargin - 1;
	catalog.displayedItemIndex = -1; // index of the item's displayed products, components, tasks
	catalog.displayedItemType = null; // type of the current item's displayed list : products, components or tasks
	catalog.selectedItems = new Array(); // items selected (items stored as sections which can't be natively selected)
	catalog.selectedSubItems = { // rows selected in a section
		"PA" : new Array(),
		"M" : new Array(),
		"T" : new Array()
	};
	
	catalog.selectedSubItemCodes = {// article code of rows selected in section
		"PA" : new Array(),
		"M" : new Array(),
		"T" : new Array()
	}

	catalog.selectedItemCodes = [];																					  
}

// when reaching bottom of list, if more elements to display,
// these elements will be added to current list
catalog.addElementsToBottom = function (elementCount) {
		
	var nextLastIndex = catalog.currentLastIndex;
	var nextItems = new Array();
	
	if(catalog.currentLastIndex >= catalog.items.length) return; // no more elements to add

	for(var i = catalog.currentLastIndex+1;(i<catalog.currentLastIndex + elementCount + 1 && i < catalog.items.length); i++) {
		nextItems.push(catalog.items[i]);
		nextLastIndex++;
	}
	
	catalog.currentLastIndex = nextLastIndex;
	frmCatalog.segDeviceList.addAll(nextItems);

}

// triggers addElementsToBottom with a default parameter
catalog.onItemsReachingEnd = function () {
	catalog.addElementsToBottom(catalog.indexMargin);
}

// triggered by each of the "detail" buttons (except "view characteristics" button)
// determines what the button does according to context
catalog.onClickDetails = function(type, sectionIndex) {
	
	// only one item (one section) can have displayed rows at a time
	if(catalog.displayedItemIndex < 0) catalog.displayDetails(type, sectionIndex);
	else if(catalog.displayedItemIndex == sectionIndex && catalog.displayedItemType == type) catalog.hideDetails(catalog.displayedItemIndex);
	else {
		catalog.hideDetails(catalog.displayedItemIndex, type);
		catalog.displayDetails(type, sectionIndex);
	}
	
}

// display an item details, such as associated products, components, tasks
// Items displayed as sections
// details displayed as a section's rows
// we can either display an item associated products OR its components OR its tasks
// indicated by 'type'
catalog.displayDetails = function(type, sectionIndex) {

	function displayDetailsCB(res) {
		
		if(res.length == 0) {
			popupModel.showPopError('Pas de résultats');
			return;
		}

		var results = res.map(
			function(r){
				var isClickable = (catalog.canSelect.length == 0 || (catalog.canSelect.indexOf(r.type) >= 0 && r.STKT != 'O'));
				var dataRow = {
					lblItem : r.Libelle,
					lblCode : "(" + r.usualcode + ")",
					isClickable : isClickable,
					isSelected: false,
					imgRow: (isClickable) ? {src : "selectednot.png"} : ""
				};

				return dataRow;
			}	
		);
		
		// section update
		var parentItem = frmCatalog.segDeviceList.data[sectionIndex];
		parentItem[1] = results;

		frmCatalog.segDeviceList.setSectionAt(parentItem, sectionIndex);//Dhaval:Fix for Range error of Catalog removed brackets
		// read the rows already selected for that section
		catalog.accessSelectedSubItems(sectionIndex, type);
		// set current Item (section) as the one displaying options
		catalog.displayedItemIndex = sectionIndex;
		catalog.displayedItemType = type;
	
	}

	var article_code = catalog.items[sectionIndex][0].lblID;
	article_code = article_code.substring(1,article_code.length-1);

	var sql = "SELECT Item.description1 || CASE WHEN item.description2 = 'NULL' THEN '' ELSE item.description2 END AS Libelle, Item.usualcode, Item.PRP0 type, Item.STKT"
	+ " FROM Item WHERE Item.ITM IN ("
	+ " SELECT ItemComposition.componentITM AS TBM"
	+ " FROM Item JOIN ItemComposition ON Item.ITM = ItemComposition.compoundITM"
	+ " AND Item.usualcode = '" + article_code
	+ "' AND ItemComposition.TBM = '" + type
	+ "')";

	if(type == 'PA') { // not all item's associated products must be displayed
		sql += " AND Item.PRP0 NOT IN ("
		+ " SELECT KY FROM UDC"
		+ " WHERE SY = '41' AND RT = '05' AND SPHD = '2')";
	}
	else if(type == 'T') { // not all item's associated tasks must be displayed
		sql += " AND Item.PRP0 IN ("
		+ " SELECT KY FROM UDC"
		+ " WHERE SY = '41' AND RT = '05' AND SPHD = '3')";
	}
	
	sql += " ORDER BY Libelle";
	
	executeSql(sql, displayDetailsCB, eventErrorCallBack);

}

// hide the rows of the item's displayed details
catalog.hideDetails = function(sectionIndex) {

	// save current selection
	catalog.updateSelectedSubItems(sectionIndex, catalog.displayedItemType);

	var parentItem = frmCatalog.segDeviceList.data[sectionIndex];
	parentItem[1].length = 0;
	
	frmCatalog.segDeviceList.setSectionAt(parentItem, sectionIndex);//Dhaval:Fix for Range error of Catalog removed brackets
	catalog.displayedItemIndex = -1;
	catalog.displayedItemType = null;

}

// displays characteristics of an item in a popup
catalog.onDisplayFeatures = function(sectionIndex) {

	function onDisplayFeaturesCB(res) {
	
		var features = res.map(
			function(r) {
				var dataRow = {
					lblFeature : r.name,
					lblFeatureValue : r.value
				};
				return dataRow;
			}
		)

		DetailsDisplayPop.segFeatures.removeAll();
		DetailsDisplayPop.segFeatures.addAll(features);
		DetailsDisplayPop.show();
	}
	
	var code = catalog.items[sectionIndex][0].lblID;
	code = code.substring(1,code.length -1);

	var sql = 	"select u2.dl01 name, " +
				"u.dl01 value " +
				"from ItemCharacteristics ic, " +
				"udc u, " +
				"udc u2 " +
				"where ic.itmcat = u2.ky " +
				"and ic.value = u.ky " +
				"and ic.litm = '" + code + "' " +
				"and u.sy = SUBSTR(RTRIM(u2.SPHD,SUBSTR(u2.SPHD,INSTR(u2.SPHD,'/'))),4) " +
				"and u.rt = SUBSTR(u2.SPHD,INSTR(u2.SPHD,'/')+1) " +
				"and u2.sy = '90CA' " +
				"and u2.rt = 'FC' " +
				"and INSTR(u2.SPHD,'UDC') = 1 " +
				"UNION " +
				"SELECT UDC.DL01 AS name, " +
				"ItemCharacteristics.value AS value " +
				"FROM UDC, " + 
				"ItemCharacteristics " +
				"WHERE UDC.KY = ItemCharacteristics.ITMCAT " +
				"AND UDC.SY = '90CA' AND UDC.RT = 'FC' " +
				"AND ItemCharacteristics.value IS NOT NULL " +
				"AND ItemCharacteristics.value != 'NULL' " +
				"AND ItemCharacteristics.LITM = '" + code + "' " +
				"AND INSTR(UDC.SPHD,'UDC') = 0";
	
	executeSql(sql, onDisplayFeaturesCB, eventErrorCallBack);
}

// select/unselect Item(section)
catalog.onSelectItem = function(sectionIndex) {

	var item = frmCatalog.segDeviceList.data[sectionIndex];

	if(!item[0].isClickable) {
		popupModel.showPopError("cet article n'est pas sélectionnable");
		return;
	}
	// if an item has rows displayed, save the current selection just in case
	if(!validationModel.isNull(catalog.displayedItemType)) catalog.updateSelectedSubItems(sectionIndex, catalog.displayedItemType);
	 
		if(item[0].imgSelectItem.src !=  "selected.png") {
		kony.print("not selected")
			if(catalogSearch.selectionBehavior == 'single' && catalog.selectedItems.length>0){
				for(var i=0;i<catalog.selectedItems.length;i++) catalog.onSelectItem(catalog.selectedItems[i]);
			}
			item[0].imgSelectItem.src = "selected.png";
          kony.print("before setSectionAt");
			frmCatalog.segDeviceList.setSectionAt(item,sectionIndex);//Dhaval:Fix for Range error of Catalog removed brackets
          kony.print("after setSectionAt");
			catalog.selectedItems.push(sectionIndex); // save the item in the array of selected items
		}
		else { 
          	kony.print("selected");
			item[0].imgSelectItem.src = "selectednot.png";
           kony.print("before setSectionAt else");
			frmCatalog.segDeviceList.setSectionAt(item,sectionIndex);//Dhaval:Fix for Range error of Catalog removed brackets
          kony.print("after setSectionAt");
			catalog.selectedItems.splice(catalog.selectedItems.indexOf(sectionIndex),1);
		}
	// if the selected/unselected item was displaying rows, the "setSectionAt" will have reset selection
	if(!validationModel.isNull(catalog.displayedItemType)) catalog.accessSelectedSubItems(sectionIndex, catalog.displayedItemType);

}

// finds all article codes of selected Items and sub Items
catalog.onValidBasket = function() {
	catalog.selectedItemCodes = new Array();
	for(var i = 0;i<catalog.selectedItems.length;i++) { // all selected sections
		var code = frmCatalog.segDeviceList.data[catalog.selectedItems[i]][0].lblID;
		code = code.substring(1,code.length-1);
		catalog.selectedItemCodes.push(code);
	}
	
	var types = ["PA","M","T"];
	for(var i=0;i<types.length;i++) { // all selected rows
		for(var j=0;j<catalog.selectedSubItemCodes[types[i]].length;j++) {
			if(!validationModel.isNull(catalog.selectedSubItemCodes[types[i]][j])) {
				for(var k=0;k<catalog.selectedSubItemCodes[types[i]][j].length;k++) {
					if(!validationModel.isNull(catalog.selectedSubItemCodes[types[i]][j][k]))
						catalog.selectedItemCodes.push(catalog.selectedSubItemCodes[types[i]][j][k]);
				}
			}
		}
	}
	
	if(!catalog.selectedItemCodes.length){
		popupModel.showPopError('vous devez sélectionner un article pour continuer');
		return;
	}
	
	function finishCatalog() {
		if(catalogSearch.process == 'replaceObsolete' && !validationModel.isNull(catalog.callback)) catalog.callback(catalog.selectedItemCodes);
		else if (navigationModel.getPreviousForm(2) == 'frmInventory') inventory.checkItemFromCatalog(catalog.selectedItemCodes);
		else if(catalogSearch.searchRecommendationReplacement) catalog.returnReplacementItem(catalog.selectedItemCodes[0]);
		else if(!validationModel.isNull(catalog.callback)) catalog.callback(catalog.selectedItemCodes);
		else navigationModel.doReturn(2);
		kony.timer.schedule("mytimer12",catalogSearch.close, 1, false);				//Arati: Changed for Issue #33 - Unable to select recommendation through catalog
//		catalogSearch.close();
	}
	
	if(catalogSearch.process == 'replaceObsolete') {
	
		var itemCodesStr = catalog.selectedItemCodes.join(',');
	
		var newItemName = itemModel.findItemAttributeByWhereClause(["name"], " usualCode = '" + itemCodesStr + "' ").name;
	
		var msg = 	"Vous vous apprêtez à remplacer l'appareil " + itemReplace.target.name + " (" + itemReplace.target.usualCode + ")" +
					" par l'article " + newItemName + " (" + itemCodesStr + ")" +
 					". Êtes-vous sûr ?";
		popupModel.showPopError(msg, finishCatalog, null, true);
	} else {
		finishCatalog();
	}
}

// write to the selected rows array
catalog.updateSelectedSubItems = function(sectionIndex, type) {

	if(validationModel.isNull(frmCatalog.segDeviceList.selectedIndices)) return; // no selection to add
	 
	 var frontIndex = -1; // index of selected item in the segment
	 var backIndex = -1; // index of saved item in the array
	 var mustBeResorted = false;
	 
	 for(var i=0;i<frmCatalog.segDeviceList.selectedIndices.length;i++) { // identify frontIndex
	  if(frmCatalog.segDeviceList.selectedIndices[i][0] == sectionIndex) {
	   frontIndex = i;
	   break;
	  }
	 }
	 
	 for(var i=0;i<catalog.selectedSubItems[type].length;i++) { // identify backIndex
	  if(catalog.selectedSubItems[type][i][0] == sectionIndex) {
	   backIndex = i;
	   break;
	  }
	 }
	 
	 // the item already has section with selected rows : direct update of the list
	 if(frontIndex >= 0 && backIndex >= 0) {
	  catalog.selectedSubItems[type][backIndex] = frmCatalog.segDeviceList.selectedIndices[frontIndex];
	 }
	 else if(frontIndex >= 0 && backIndex < 0) { // the section had no row selected yet : creation of a new array of selected rows for this section
	  catalog.selectedSubItems[type].push(frmCatalog.segDeviceList.selectedIndices[frontIndex]);
	  mustBeResorted = true;
	 }
	 else if(frontIndex < 0 && backIndex >= 0) { // the item is unselected : delete the existing selection
	  catalog.selectedSubItems[type].splice(backIndex, 1);
	 }
	 
	 var updatedSelectedIndices = frmCatalog.segDeviceList.selectedIndices;
	 updatedSelectedIndices.splice(frontIndex,1);
	 frmCatalog.segDeviceList.selectedIndices = updatedSelectedIndices;
	 
	 if(mustBeResorted) { // keep the indices sorted
	  catalog.selectedSubItems[type].sort(
	   function(a,b){
	    return a[0] - b[0];
	   }
	  );
	 }
}

catalog.onSubItemClick = function() {

 var selectedSubIndex = frmCatalog.segDeviceList.selectedIndex;
  kony.print("selectedSubIndex:"+selectedSubIndex);
 if(!frmCatalog.segDeviceList.selectedItems[0].isClickable) {
  popupModel.showPopError("cet article n'est pas sélectionnable");
  return;
 }
  kony.print("catalogSearch.selectionBehavior"+catalogSearch.selectionBehavior);
 if(catalogSearch.selectionBehavior == 'single') catalog.updateAllSubSelection(false, [selectedSubIndex]);
 var selectedState = !frmCatalog.segDeviceList.selectedItems[0].isSelected;
 catalog.updateSelectedSubItemCodes(selectedState, selectedSubIndex[0], selectedSubIndex[1]);
}

catalog.updateAllSubSelection = function(newSelectedState, excludedIndices) {
 
 var types = ["PA","M","T"];
 
 for(var i=0;i<types.length;i++) {
  var type = types[i];
  for(var j=catalog.selectedSubItemCodes[type].length;j>=0;j--) {
   if(validationModel.isNull(catalog.selectedSubItemCodes[type][j])) continue;
   for(var k=catalog.selectedSubItemCodes[type][j].length;k>=0;k--) {
    
    var isExcluded = false;
    for(var l=0;l<excludedIndices.length;l++) {
     if(excludedIndices[l][0] == j && excludedIndices[l][1] == k) {
      isExcluded = true;
      break;
     }  
    }
    
    if(validationModel.isNull(catalog.selectedSubItemCodes[type][j][k]) || isExcluded) continue;    
    else catalog.updateSelectedSubItemCodes(newSelectedState,j,k);
   }
  }
 }
}

catalog.updateSubItemDisplay = function(newSelectedState, sectionIndex, rowIndex) {
 
 var selectedSubItem = frmCatalog.segDeviceList.data[sectionIndex][1][rowIndex];
 if(newSelectedState) selectedSubItem.imgRow = {src:'selected.png'};
 else selectedSubItem.imgRow = {src:'selectednot.png'};
 selectedSubItem.isSelected = newSelectedState;
 frmCatalog.segDeviceList.setDataAt(selectedSubItem, rowIndex, sectionIndex);
}

// read the selected rows array
catalog.accessSelectedSubItems = function(sectionIndex, type) {
	
	var backIndex = -1;
	for(var i=0;i<catalog.selectedSubItems[type].length;i++) {
		if(catalog.selectedSubItems[type][i][0] == sectionIndex) {
			backIndex = i;
			break;
		}
	}
	if(backIndex < 0) return; // there is no selected rows for this item
	
	var updatedIndices = frmCatalog.segDeviceList.selectedIndices; // local variable to store the future 'selected items' element of the segment

	if(validationModel.isNull(updatedIndices)) updatedIndices = [catalog.selectedSubItems[type][backIndex]];
	else {
		updatedIndices.push(catalog.selectedSubItems[type][backIndex]);
		updatedIndices.sort(
			function(a,b){
				return a[0] - b[0];
			}
		);
	}
	frmCatalog.segDeviceList.selectedIndices = updatedIndices;
}

// called when a row is selected/ unselected
catalog.updateSelectedSubItemCodes = function(selectedState, sectionIndex, rowIndex) {	
	catalog.updateSubItemDisplay(selectedState, sectionIndex, rowIndex);
 
 	if(selectedState) catalog.saveItemCode(sectionIndex, rowIndex, catalog.displayedItemType);
 	else catalog.removeItemCode(sectionIndex, rowIndex, catalog.displayedItemType);
}

// keeps in memory the codes of the selected rows
catalog.saveItemCode = function(sectionIndex, rowIndex, type) {
	
	var code = frmCatalog.segDeviceList.data[sectionIndex][1][rowIndex].lblCode;
	code = code.substring(1,code.length-1);
	if(validationModel.isNull(catalog.selectedSubItemCodes[type][sectionIndex])) catalog.selectedSubItemCodes[type][sectionIndex] = new Array();
	catalog.selectedSubItemCodes[type][sectionIndex][rowIndex] = code;

}

// deletes from the array the code of an unselected row
catalog.removeItemCode = function(sectionIndex, rowIndex, type) {

	catalog.selectedSubItemCodes[type][sectionIndex].splice(rowIndex,1);
	if(catalog.selectedSubItemCodes[type][sectionIndex].length == 0) catalog.selectedSubItemCodes[type].splice(sectionIndex,1);

}

catalog.returnReplacementItem = function(itemCode) {

		function returnReplacementItemCB(res) {
			catalogSearch.searchRecommendationReplacement = false;
			recommendationEdit.changeExchangeItem(res[0]);
			navigationModel.doReturn(2);
		}
		
		function returnReplacementItemCBe(res) {
			popupModel.showPopError("pas d'item retrouvé");
			catalogSearch.searchRecommendationReplacement = false;
			navigationModel.doReturn(2);
		}
		
		var sql = "select description1 ||  CASE WHEN description2 = 'NULL' THEN '' ELSE description2 END name, ITM articleId, usualcode from Item where usualcode = '" + itemCode + "'";
		executeSql(sql, returnReplacementItemCB, returnReplacementItemCBe);
}
