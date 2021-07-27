/***********/

/***View***/

var paconso = {
  spareParts: null,
  relatedProducts: null
};

paconso.preShow = function(){
  paconso.fillSegment();
  paconso.onFlxConsoClick();
  frmPAConso.lblConso.skin = "sknLblWhite175";
    frmPAConso.lblPA.skin = "sknLblGrey175";
  frmPAConso.flxReferenceTP.lblReferenceTP.text = workOrder.getReference();
  frmPAConso.flxReferenceTP.backgroundColor = workOrder.color;
  frmPAConso.flxReferenceTP.focusSkin = workOrder.skin;
}

paconso.back = function(){
  kony.application.getPreviousForm().show();
}

paconso.save = function(){
  paconso.onBtnSaveClick();
}

paconso.onScrollEnd = function(){
  paconso.checkSkin();
}

paconso.onFlxPAClick = function(){
  frmPAConso.flxScrollSegContainer.scrollToWidget(frmPAConso.flxPASeg);
  frmPAConso.lblConso.skin = "sknLblGrey175";
  frmPAConso.lblPA.skin = "sknLblWhite175";
}

paconso.onFlxConsoClick = function(){
  frmPAConso.flxScrollSegContainer.scrollToWidget(frmPAConso.flxConsoSeg);
  frmPAConso.lblConso.skin = "sknLblWhite175";
  frmPAConso.lblPA.skin = "sknLblGrey175";
}

paconso.checkSkin = function(){
  if(frmPAConso.flxScrollSegContainer.contentOffsetMeasured.x == 0){
    frmPAConso.lblConso.skin = "sknLblWhite175";
    frmPAConso.lblPA.skin = "sknLblGrey175";
  }else{
    frmPAConso.lblConso.skin = "sknLblGrey175";
    frmPAConso.lblPA.skin = "sknLblWhite175";
  }
}

paconso.fillSegment = function(){
  frmPAConso.segSpareParts.setData(paconso.dataSpareParts());
  frmPAConso.segRelatedProduct.setData(paconso.dataRelatedProducts());
}


paconso.animate = function(widgetId, value){
  var transformObject = kony.ui.makeAffineTransform();
  animationDef = {100: {
    "width": value
  }
                 };

  animationConfig = {
    duration: 0.5,
    fillMode: kony.anim.FILL_MODE_FORWARDS
  };

  row1={
    sectionIndex:0,
    rowIndex:1,
  };

  row2={
    sectionIndex:0,
    rowIndex:1,
  };
  animationDefObject = kony.ui.createAnimation(animationDef);
  frmPAConso.segSpareParts.animateRows({
    rows: [row1, row2],
    widgets:[widgetId],
    animation: 
    {
      definition: animationDefObject,
      config: animationConfig
    }
  }
                                      );
}

/*Controller*/
paconso.dataSpareParts = function(){
  paconso.spareParts = paconso.getSpareParts();
  var spareParts = paconso.spareParts;

  var cbxSparePartsMasterData = [];

var sparePartsAlreadyAdded = paconso.getsparePartsByItemAndWorkOrder();
  for (var i = 0; i < spareParts.length; i++) {
    var initialQuantity = 1;
    var price = paconso.getPriceByArticle(spareParts[i]);
    var isQtyVariable = false;
    var showFixedQuantity = false
    if(spareParts[i].quantityVariabilityFlag == 'V'){
      isQtyVariable = true;
    }else if(spareParts[i].quantityVariabilityFlag == 'F'){
      showFixedQuantity = true;
      initialQuantity = spareParts[i].quantity;
    }else{
      isQtyVariable = false
    }
    var multipleSparePartsAllowed = spareParts[i].quantity > 1 ? true : false;
    var enableQty = false;
    
    if (isQtyVariable && multipleSparePartsAllowed){enableQty = true;}
    var imgCaseSrc = "selectednot.png";
    for(var j=0; j<sparePartsAlreadyAdded.length; j++){
      if(sparePartsAlreadyAdded[j].usualCode == spareParts[i].usualCode){
        imgCaseSrc = "selected.png";
      }
    }
    var name = spareParts[i].name;

    var data = {"lblName": name,
                "lblUsualCode": "("+spareParts[i].usualCode+")", 
                "imgCase": {"src": imgCaseSrc}, 
                "lblPrice" : "",//price!=null?price+"€":"",
                "flxNumber": {"isVisible": false},
                "imgLess": {"src": "less.png"},
                "flxLess":{"onClick": function(){paconso.lessQuantity(frmPAConso.segSpareParts);}},
                "lblQuantity": initialQuantity,
                "lblQuantityMax": spareParts[i].quantity,
                "imgMore": {"src": "plus.png"},
                "lblOnlyQuantity": {"text": spareParts[i].quantity, "isVisible": ((imgCaseSrc == "selected.png" && showFixedQuantity==true)?true:false)},
               };
    if(enableQty == true){
      data.flxImgCase = {"onClick": function(){paconso.caseClick(frmPAConso.segSpareParts, true)}};
      data.flxClick = data.flxImgCase;
      data.flxMore = {"onClick" : function(){paconso.moreQuantity(frmPAConso.segSpareParts);}}
    }else if(showFixedQuantity==true){
      data.flxImgCase = {"onClick": function(){paconso.caseClick(frmPAConso.segSpareParts, false, null, null, true)}};
      data.flxClick = data.flxImgCase;
    }else{
      data.flxImgCase = {"onClick": function(){paconso.caseClick(frmPAConso.segSpareParts, false)}};
      data.flxClick = data.flxImgCase;
    }
    cbxSparePartsMasterData.push(data);
  }



  return cbxSparePartsMasterData;
} // Conso

paconso.dataRelatedProducts = function(){ // PA
  paconso.relatedProducts = paconso.getRelatedProducts();
  var relatedProducts = paconso.relatedProducts;
  var cbxRelatedProductsData = [];
  
  
    var relatedProductsAlreadyAdded = paconso.getRelatedProductsBySpareParts();

  for (var i = 0; i < relatedProducts.length; i++) {
	var imgCaseSrc = "selectednot.png";
    for(var j=0; j<relatedProductsAlreadyAdded.length; j++){
      if(relatedProductsAlreadyAdded[j].usualCode == relatedProducts[i].usualCode){
        imgCaseSrc = "selected.png";
      }
    }
    var tasks = [];
    if(!validationModel.isNull(relatedProducts[i])) {
      var relatedProductItem = {articleId : relatedProducts[i].articleId};
      var dataTasks = taskModel.findPossibleTasksByItemAndOptionTypesWhereClause(relatedProductItem, [2,3],  " and TBM = 'PA'");
      if (!validationModel.isNull(dataTasks)) {
        for (var b = 0; b < dataTasks.length; b ++) {
          var task = dataTasks[b];
          tasks.push(task);
        }
      }
    }

    var isQtyVariable = relatedProducts[i].quantityVariabilityFlag == 'V' ? true : false;
      var initialQuantity = 1;
    var showFixedQuantity = false;
    if(relatedProducts[i].quantityVariabilityFlag == 'V'){
      isQtyVariable = true;
    }else if(relatedProducts[i].quantityVariabilityFlag == 'F'){
      showFixedQuantity = true;
      initialQuantity = relatedProducts[i].quantity;
    }else{
      isQtyVariable = false
    }
    var enableQty = false;
    if (isQtyVariable){enableQty = true;}
    var price = paconso.getPriceByArticle(relatedProducts[i]);
    
var name = relatedProducts[i].name;

    var data = [{"lblName": name,
                 "lblUsualCode": "("+relatedProducts[i].usualCode+")", 
                 "imgCase": {"src": imgCaseSrc}, 
                 "lblPrice" : "",//price!=null?price+"€":"",
                 "flxNumber": {"isVisible": false},
                 "flxImgCase": {"onClick": function(j, k, s) { return function() { paconso.caseClick(frmPAConso.segRelatedProduct, k, j, null, s); }; }(i, enableQty, showFixedQuantity)},
                 "flxClick": {"onClick": function(j, k, s) { return function() { paconso.caseClick(frmPAConso.segRelatedProduct, k, j, null, s); }; }(i, enableQty, showFixedQuantity)},
                 "imgLess": {"src": "less.png"},
                 "flxLess":{"onClick": function(e) { return function(){paconso.lessQuantity(frmPAConso.segRelatedProduct, e)}}(i)},
                 "flxMore":{"onClick": function(e) { return function(){paconso.moreQuantity(frmPAConso.segRelatedProduct, e)}}(i)},		
                 "lblQuantity": initialQuantity,
                 "lblQuantityMax": relatedProducts[i].quantity,
                 "imgMore": {"src": "plus.png"},
                 "lblOnlyQuantity": {"text": relatedProducts[i].quantity, "isVisible": ((imgCaseSrc == "selected.png" && showFixedQuantity==true)?true:false)},
                },[]];

    for (var a = 0; a < tasks.length; a ++) {
      var taskData = {"lblName": tasks[a].name,
                      "lblUsualCode": "("+tasks[a].usualCode+")", 
                      "imgCase": {"src": "selected.png"}, 
                      "lblPrice" : {isVisible: false},
                      "flxNumber": {"isVisible": false},
                      "flxImgCase": {"onClick": function(j, k) { return function() { paconso.caseClick(frmPAConso.segRelatedProduct, false, j, k); }; }(i, a)},
                      "flxClick": {"onClick": function(j, k) { return function() { paconso.caseClick(frmPAConso.segRelatedProduct, false, j, k); }; }(i, a)},
                      "flxContainer": {"isVisible": false, height: "0dp"}
                     }
      data[1].push(taskData);

    }
    cbxRelatedProductsData.push(data);
  }


  return cbxRelatedProductsData;

}

paconso.lessQuantity = function(currentWidget, currentIndex){
  if(currentIndex >=0 && currentIndex != null){
    var index = currentIndex;
    var currentData = currentWidget.data[index];
    if(currentData[0].lblQuantity > 1){
      currentData[0].lblQuantity = currentData[0].lblQuantity-1;
      currentData[0].flxMore.isVisible = true;
    }else{
      currentData[0].flxNumber.isVisible = false;
      currentData[0].imgCase.src = "selectednot.png";
    }
    currentWidget.setSectionAt(currentData, index,0);
  }else{
    var index = currentWidget.selectedIndices[0][1][0];
    var currentData = currentWidget.data[index];
    if(currentData.lblQuantity > 1){
      currentData.lblQuantity = currentData.lblQuantity-1;
      currentData.flxMore.isVisible = true;
    }else{
      currentData.flxNumber.isVisible = false;
      currentData.imgCase.src = "selectednot.png";
    }
    currentWidget.setDataAt(currentData, index,0);
  }

}
paconso.moreQuantity = function(currentWidget, currentIndex){
  if(currentIndex >=0 && currentIndex != null){ // case segRelatedProduct
    var index = currentIndex;
    var currentData = currentWidget.data[index];
      currentData[0].lblQuantity = currentData[0].lblQuantity+1;
      currentData[0].flxMore.isVisible = true;
    currentWidget.setSectionAt(currentData, index,0);
  }
  else{ //case spareParts
    var index = currentWidget.selectedIndices[0][1][0];
    var currentData = currentWidget.data[index];
    if(currentData.lblQuantity < currentData.lblQuantityMax){
      currentData.lblQuantity = currentData.lblQuantity+1;
      currentData.flxMore.isVisible = true;
    }
    if(currentData.lblQuantity == currentData.lblQuantityMax){
      currentData.flxMore.isVisible = false;
    }
    currentWidget.setDataAt(currentData, index,0);
  }


}

paconso.caseClick = function(currentWidget, enable, currentIndex, currentSection, showFixedPrice){
  var index;
  var currentData;

  if(currentWidget.id == "segRelatedProduct"){
    index = currentIndex;
    currentData = currentWidget.data[index];
    if(currentSection >= 0 && currentSection != null){ // section Item CLick
      if(currentData[1][currentSection].imgCase.src == "selectednot.png"){
        currentData[1][currentSection].imgCase.src = "selected.png";

        if(enable == true){currentData[1][currentSection].flxNumber.isVisible = true;}

      }else{
        currentData[1][currentSection].imgCase.src = "selectednot.png";
        if(enable == true){currentData[1][currentSection].flxNumber.isVisible = false;}

        taskOverview.onBtnRelatedProductRemoveClick(paconso.relatedProducts[index], true);
      }
    }else{

      if(currentData[0].imgCase.src == "selectednot.png"){
        currentData[0].imgCase.src = "selected.png";
        if(enable == true){
          currentData[0].flxNumber.isVisible = true;
        }
        if(showFixedPrice == true){
            currentData[0].lblOnlyQuantity.isVisible = true;
          }
        for(var g=0; g<currentData[1].length; g++){
          currentData[1][g].flxContainer.isVisible = true;
          currentData[1][g].flxContainer.height = "70dp";
        }
      }else{
        currentData[0].imgCase.src = "selectednot.png";
        taskOverview.onBtnRelatedProductRemoveClick(paconso.relatedProducts[index], true);
        if(enable == true){
          currentData[0].flxNumber.isVisible = false;
        }
        if(showFixedPrice == true){
            currentData[0].lblOnlyQuantity.isVisible = false;
          }
        for(var g=0; g<currentData[1].length; g++){
          currentData[1][g].flxContainer.isVisible = false;
          currentData[1][g].flxContainer.height = "0dp";
        }
      }
    }

  }else{
    index = currentWidget.selectedIndices[0][1][0];
    currentData = currentWidget.data[index];
    if(currentData.imgCase.src == "selectednot.png"){
      currentData.imgCase.src = "selected.png";
      if(enable == true){currentData.flxNumber.isVisible = true;}
      if(showFixedPrice == true){
        currentData.lblOnlyQuantity.isVisible = true;
		}
    }else{
      currentData.imgCase.src = "selectednot.png";
      if(enable == true){currentData.flxNumber.isVisible = false;}
      if(showFixedPrice == true){
        currentData.lblOnlyQuantity.isVisible = false;
      }
		taskOverview.onBtnSparePartRemoveClick(paconso.spareParts[currentWidget.selectedIndex[1]], true);
    }
  }

  if(currentWidget.id == "segRelatedProduct"){
    currentWidget.setSectionAt(currentData, index);

  }else{
    currentWidget.setDataAt(currentData, index);
  }
}

paconso.onBtnSaveClick = function () {

  var sparePartsAdded = [];

  var indicesSpareParts = [];
  if(frmPAConso.segSpareParts.data != null){
    for(var ind=0; ind<frmPAConso.segSpareParts.data.length; ind++){
      if(frmPAConso.segSpareParts.data[ind].imgCase.src == "selected.png"){
        indicesSpareParts.push(ind);
      }
    }
  }
  var spareParts = paconso.spareParts;
  var sparePartsAdd = sparePartModel.findSparePartsByItemAndWorkOrder(itemVerify.item, workOrder, 'salesRelated');
  var sparePartsAddGrouped = sparePartModel.groupSparePartsByUsualCodeAndSalesReason(sparePartsAdd);
  
  for(var nbInd=0; nbInd<indicesSpareParts.length; nbInd++){
    
    var selectedCbxSparePartsIndex = indicesSpareParts[nbInd];
    var currentSparePart = spareParts[selectedCbxSparePartsIndex];
    var salesReasonCode = undefined;
    var alreadyExistInSparePartsList = false;
    for(var y=0; y<sparePartsAddGrouped.length; y++){
      if(sparePartsAddGrouped[y].usualCode == currentSparePart.usualCode){
        alreadyExistInSparePartsList = true;
      }
    }
    if(alreadyExistInSparePartsList==false){
      currentSparePart.quantity = frmPAConso.segSpareParts.data[selectedCbxSparePartsIndex].lblQuantity;
    sparePartsAdded.push(currentSparePart);
    }
    
  }
  sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, itemVerify.item, sparePartsAdded, undefined, salesReasonCode, 'sparePart');

  ///////////
  var indicesRelatedProduct = [];
  
       //var relatedProductsGrouped = sparePartModel.groupSparePartsByUsualCodeAndSalesReason(paconso.relatedProducts);
      var relatedProductsAlreadyAdded = paconso.getRelatedProductsBySpareParts();
if(frmPAConso.segRelatedProduct.data != null){
  for(var ind=0; ind<frmPAConso.segRelatedProduct.data.length; ind++){
    if(frmPAConso.segRelatedProduct.data[ind][0].imgCase.src == "selected.png"){
      var currentRelatedProduct = paconso.relatedProducts[ind];
      var alreadyExistInRelatedProductsList = false;
      for(var y=0; y<relatedProductsAlreadyAdded.length; y++){
        if(relatedProductsAlreadyAdded[y].usualCode == currentRelatedProduct.usualCode){
          alreadyExistInRelatedProductsList = true;
        }
      }
      if(alreadyExistInRelatedProductsList == false){
        indicesRelatedProduct.push([ind, []]);
        if(frmPAConso.segRelatedProduct.data[ind][1].length>0){
          for(var a=0;a<frmPAConso.segRelatedProduct.data[ind][1].length; a++){
            if(frmPAConso.segRelatedProduct.data[ind][1][a].imgCase.src == "selected.png"){
              indicesRelatedProduct[indicesRelatedProduct.length-1][1].push(a);
            }
          }
        }
      }
    }
  }

   for(var nbInd=0; nbInd<indicesRelatedProduct.length; nbInd++){
     
  var selectedRelatedProducts = frmPAConso.segRelatedProduct.data[indicesRelatedProduct[nbInd][0]];
       var relatedProducts = paconso.getRelatedProducts();
     
     var relatedProductItem = {articleId : relatedProducts[indicesRelatedProduct[nbInd][0]].articleId};
     var dataTasks = taskModel.findPossibleTasksByItemAndOptionTypesWhereClause(relatedProductItem, [2,3],  " and TBM = 'PA'");
      // Add the related product to spare_parts
      var relatedProduct = relatedProducts[indicesRelatedProduct[nbInd][0]];
     
      relatedProduct.quantity = selectedRelatedProducts[0].lblQuantity;

        var salesReasonCode = undefined;
        var spareParts = sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, itemVerify.item, [relatedProduct], undefined, salesReasonCode, 'relatedProduct');
     
        // Add the tasks to F56BTDT and spare_parts
        if (indicesRelatedProduct[nbInd][1].length > 0) {
          var selectedSegRelatedTasksIndices = indicesRelatedProduct[nbInd][1];
          for (var i = 0; i < selectedSegRelatedTasksIndices.length; i ++) {
            	
            var relatedTask = dataTasks[selectedSegRelatedTasksIndices[i]];
            // Add the task to F56BTDT
            for( var qt=0; qt<relatedProduct.quantity; qt++){
              var task = taskModel.createTaskByItemAndWorkOrder(itemVerify.item, workOrder, 'related', undefined, relatedTask.usualCode, spareParts[0]);
              // Add the task to spare_parts (similar to those of taskType 2)
              task = taskModel.findTaskById(task.id);
              task.type = 2;
              task.quantity = 1;
              sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, itemVerify.item, undefined, task, salesReasonCode, 'relatedProduct');
            }
          }
        } 
    }
}
  frmTaskOverview.show();
}



/*Model*/
paconso.getSpareParts = function(){
  return articleModel.findArticleComponentsByItem(itemVerify.item);
}

paconso.getRelatedProducts = function(){
  return articleModel.findRelatedProductsByItems([itemVerify.item], 1, 'P');
}

paconso.getPriceByArticle = function(art){
  return pricing.getBasicPriceByArticle(art);
}
paconso.getsparePartsByItemAndWorkOrder = function(){
  return sparePartModel.findSparePartsByItemAndWorkOrder(itemVerify.item, workOrder, 'salesRelated');
}

paconso.getRelatedProductsBySpareParts = function(){
 var relatedProducts = sparePartModel.findSparePartsByItemAndWorkOrder(itemVerify.item, workOrder, 'productRelated');
  return sparePartModel.groupSparePartsByUsualCodeAndSalesReason(relatedProducts);
}



