taskOverview = {
  form: null,
  tasks: [],
  statusImg: ["selectednot.png","selected.png","close.png"],
  selectedTask: null,
  allItemsListed: null,
  sparePartsAdd: [],
  sparePartsAddGrouped: [],
  relatedProducts: [],
  relatedProductsGrouped: [],
  itemStatusReasons: [],
  onVbxStatusTNPClickInProgress: false,
  onVbxStatusTNPClickPendingReasonSelection: false,
  itemStatus: null,
  hasCompletedAllTasksPlanned: false,
  hasCompletedItemVerification: false,
  replacementItem : null,
  undefinedReplacement : false,
  hasSpecialTask : false,
  postShowCallBack : null,
  openPopupExchange: false,
  lastIndex : null,
  segTasksNonPlannedInfo: null,
  segTasksPlannedInfo: null, 
  cbxChoicesData: null,
  isReadOnly : false,
  btphotoId : null,
  btphotoPrecoId : null
};

taskOverview.tab = {
  tasksPlanned: 0,
  current: 0,
  previous: null
};

taskOverviewTC = {
  showTCPopup: false
}

taskOverview.setMenus = function(){
  var appMenu = [
    ["taskOverview.BACK", "Retour", "left.png", taskOverview.onDeviceBack],
    ["taskOverview.SUMM", "Bilan", "book.png", taskOverview.onItmSummaryClick]
  ];
  if(workOrder.process == 'CHUBB' && workOrder.typeCode == 'I' ||  workOrder.typeCode == 'P' || workOrder.typeCode == 'G' || workOrder.typeCode == 'S'){
    // no task or scan
  }else{
      if(workOrder.process == 'CHUBB' && workOrder.typeCode == 'V'){
      appMenu.push(["taskOverview.TASK", "Tâches", "task.png", taskOverview.onTaskClick]);
    }else if(workOrder.process != 'CHUBB' && (workOrder.typeCode == 'V' ||  workOrder.typeCode == 'I' || workOrder.typeCode == 'P')){ 
      appMenu.push(["taskOverview.SCAN", "scanner nouveau", "barcode.png", taskOverview.onItmItemScanClick]);
    }
  }
  otis.application.createAppMenu("taskOverviewAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

taskOverview.init = function(frmRef){

  taskOverview.setMenus();

  taskOverview.onReasonSelection = false; // To know if a reason is selected on click on selected all button
  taskOverview.globalReason = false; // To know if the reason is for all the item on click on selected all button

  //taskOverview.form.imgTPSelectedAll.src = "selectednot.png";
  //taskOverview.form.lblAllSelected.text = "Tout sélectionner";

  if(frmRef =="frmTaskOverviewInstall"){
      initFormProcess("frmTaskOverviewInstall", frmTaskOverviewInstall);//Dhaval:Design issue #18 for slide
    }
  else{
    initFormProcess("frmTaskOverview", frmTaskOverview);//Dhaval:Design issue #18 for slide
  }
}

taskOverview.onTaskClick = function(){
   if (taskOverview.validate()) {
      summaryService.activeTab = true;
    frmSummaryServiceChubb.show();
  }
}

taskOverview.selectAll = function(){

  taskOverview.onReasonSelection = false;
  // On select all button click, launch the onVbxStatusTPClick function for each item
  if (taskOverview.form.id == 'frmTaskOverview'){
    if(taskOverview.form.imgTPSelectedAll.src == 'selectednot.png'){
      taskOverview.form.imgTPSelectedAll.src = 'selected.png';
      if(!validationModel.isNull(taskOverview.form.segTasksPlanned.data)) {
        for(var i = 0; i<taskOverview.form.segTasksPlanned.data.length; i++){
          taskOverview.onVbxStatusTPClick(i, 1);
        }
      }
    }else if(taskOverview.form.imgTPSelectedAll.src == 'selected.png'){
      taskOverview.form.imgTPSelectedAll.src = 'close.png';
      taskOverview.cancelAllWithReason();
    }else if(taskOverview.form.imgTPSelectedAll.src == 'close.png'){
      taskOverview.form.imgTPSelectedAll.src = 'selectednot.png';
      if(!validationModel.isNull(taskOverview.form.segTasksPlanned.data)) {
        for(var i = 0; i<taskOverview.form.segTasksPlanned.data.length; i++){
          taskOverview.onVbxStatusTPClick(i, 0);
        }
      }
    }
  }
}

taskOverview.disableIfTask = function(){
  //  if(!validationModel.isNull(taskOverview.form.segTasksPlanned.data)){//Dhaval:Fix for type error issue
  if(validationModel.isNull(taskOverview.form.segTasksPlanned.data)) return;
  taskOverview.hasSpecialTask = false;
  var taskIds = new Array();
  for(var i = 0; i<taskOverview.form.segTasksPlanned.data.length; i++){
    taskOverview.hasSpecialTask = (["ES","R","P"].indexOf(taskOverview.tasks[i].DL02) >= 0);
    if(taskOverview.hasSpecialTask) break;
    taskIds.push(taskOverview.tasks[i].id);
  }

  if(!taskOverview.hasSpecialTask) {
    var whereClause = " and dt.cibid = " + itemVerify.item.id + " and prm.RMK2 = 'TRT' and dt.id in ("+ taskIds.join(',') + ") ";
    var associatedTaskTypes = taskModel.findTaskTypesByWorkOrderAndWhereClause(workOrder, whereClause);
    taskOverview.hasSpecialTask = (associatedTaskTypes[0] != null);
  }

  if (taskOverview.hasSpecialTask && taskOverview.form.id == 'frmTaskOverview') {
    taskOverview.form.hbSelectAll.isVisible = false;// = "sknHbDisable";
    taskOverview.form.vbSelectAll.setEnabled(false);
  }
}

taskOverview.cancelAllWithReason = function(){
  if(!validationModel.isNull(taskOverview.form.segTasksPlanned.data)) {		//Arati:Fix for type error issue#83
    for(var i = 0; i<taskOverview.form.segTasksPlanned.data.length; i++){
      taskOverview.globalReason = true;
      taskOverview.onVbxStatusTPClick(i, 1);
      taskOverview.onVbxStatusTPClick(i, 2);
      taskOverview.onReasonSelection = true;
    }
  }
  taskOverview.onReasonSelection = false;
  //taskOverview.globalReason = false;
}

taskOverview.detectIfAllItemIsInTheSameStatus = function(){
  var boolSameStatus = true;
  if(!validationModel.isNull(taskOverview.form.segTasksPlanned.data)){		//Arati:Fix for type error issue#83
    if(!validationModel.isNull(taskOverview.tasks[0])){
      for(var i = 0; i<taskOverview.form.segTasksPlanned.data.length; i++){

        if(taskOverview.tasks[0].statusIndex != taskOverview.tasks[i].statusIndex){
          boolSameStatus = false;
        }

      }
      if(boolSameStatus == true && taskOverview.form.segTasksPlanned.data.length > 0){
        if (taskOverview.form.id == 'frmTaskOverview'){
          taskOverview.form.imgTPSelectedAll.src = taskOverview.statusImg[taskOverview.tasks[0].statusIndex];
        }
      }else{
        if (taskOverview.form.id == 'frmTaskOverview'){
          taskOverview.form.imgTPSelectedAll.src = taskOverview.statusImg[0];
        }
      }
    }
  }
}


taskOverview.validate = function () {
  var isValid = true;

  if (taskOverview.hasCompletedAllTasksPlanned && !taskOverview.hasCompletedItemVerification) {
    popupModel.showPopError(kony.i18n.getLocalizedString('lblItemVerificationIncomplete'));
    isValid = false;
  } else if(taskOverview.undefinedReplacement) {
    popupModel.showPopError('Veuillez choisir un appareil de remplacement pour la préconisation');
    isValid = false;
  }

  return isValid;
}

taskOverview.checkAndClose = function(callBack) {
  if (taskOverview.validate()) {
     var refused = itemModel.findRefusedItem(workOrder, "N05", itemVerify.item.id)[0]["count(*)"]>0?true:false;
    //callBack();
    if(refused){
            popupModel.showPopError("Avez-vous mis à jour le plan de maintenance de cet appareil ?", callBack, undefined, true, function(){frmItemVerify.show()});
    }else{
      callBack();
    }
  }
  //		if (workOrderModel.isOnSite(workOrder) && workOrder.process != 'CHUBB' && !sparePartModel.isWorkOrderSPSummaryConsistent(workOrder,itemVerify.item.id)) {
  //			var msg = "Attention : un doublon de pièce a été généré sur cet appareil - Veuillez contacter le support.";
  //			popupModel.showPopError(msg, callBack);
  //		} else {
  //			callBack();
  //		}
  //	}
}

taskOverview.onDeviceBack = function () {
  taskOverview.checkAndClose(navigationModel.doReturn);
}

taskOverview.onItmItemScanClick = function () {

  function onItmScanClickCB() {
    if (workOrder.process == 'CHUBB')
      frmSummaryServiceChubb.show();
    else
      frmItemScan.show();
  }

  taskOverview.checkAndClose(onItmScanClickCB);
}

taskOverview.onItmSummaryClick = function () {
  taskOverview.checkAndClose(function (){frmWOSummary.show();});//Dhaval:Issue 42:Fix for bilan not working
}

taskOverview.onTabChange = function (tabIndex) {

  taskOverview.tab.previous = taskOverview.tab.current;
  taskOverview.tab.current = tabIndex;
  	if(taskOverview.form.id == 'frmTaskOverviewInstall'){//Dhaval:Design issue #18 for slide
      if(taskOverview.tab.current == 0){
        frmTaskOverviewInstall.btnTabPrev.skin='skntabBtn';
    	frmTaskOverviewInstall.btnTabFirst.skin='sknTabBtnFoc';
      }
      else{
        frmTaskOverviewInstall.btnTabPrev.skin='sknTabBtnFoc';
    	frmTaskOverviewInstall.btnTabFirst.skin='skntabBtn';
      }
    }
	else{//Dhaval:Design issue #18 for slide
      if(taskOverview.tab.current == 0){
		clearTaskOverviewTabSkins();
    	frmTaskOverview.btnTabFirst.skin='sknTabBtnFoc';
      }
      else if(taskOverview.tab.current == 1){
        clearTaskOverviewTabSkins();
        frmTaskOverview.btnTabPrev.skin='sknTabBtnFoc';
      }
      else if(taskOverview.tab.current == 2){
        clearTaskOverviewTabSkins();
        frmTaskOverview.btnTabHdr1.skin='sknTabBtnFoc';
      }
      else if(taskOverview.tab.current == 3){
        clearTaskOverviewTabSkins();
        frmTaskOverview.btnTabHdr2.skin='sknTabBtnFoc';
      }
      else if(taskOverview.tab.current == 3){
        clearTaskOverviewTabSkins();
        frmTaskOverview.btnTabNext.skin='sknTabBtnFoc';
      }
      else{
        kony.print("clicked tab not recognized");
      }
    }
  // load the current tab
  switch (taskOverview.tab.current){
    case taskOverview.tab.tasksPlanned :
      taskOverview.tabTasksPlannedLoad();
      break;
    case taskOverview.tab.tasksNonPlanned :
      taskOverview.tabTasksNonPlannedLoad();
      break;
    case taskOverview.tab.spareParts :
      taskOverview.tabSparePartsLoad();
      break;
   /*case taskOverview.tab.relatedProducts :
      taskOverview.tabRelatedProductsLoad();
      break;*/
    case taskOverview.tab.info :
     // taskOverview.tabRelatedProductsLoad();
      taskOverview.tabInfoLoad();
      break;
  }

  // unload the previous tab
  if (taskOverview.tab.previous != taskOverview.tab.current) {
    switch (taskOverview.tab.previous){
      case taskOverview.tab.tasksPlanned :
        taskOverview.tabTasksPlannedUnload();
        break;
      case taskOverview.tab.tasksNonPlanned :
        taskOverview.tabTasksNonPlannedUnload();
        break;
      case taskOverview.tab.spareParts :
        taskOverview.tabSparePartsUnload();
        break;
      /*case taskOverview.tab.relatedProducts :
        taskOverview.tabRelatedProductsUnload();
        break;*/
      case taskOverview.tab.info :
        taskOverview.tabInfoUnload();
        break;
    }
  }
}

taskOverview.postShow = function () {
  taskOverview.onTabChange(taskOverview.tab.current);
  //taskOverview.detectIfAllItemIsInTheSameStatus();
  taskOverview.disableIfTask();

  if(!validationModel.isNull(taskOverview.postShowCallBack))
    taskOverview.postShowCallBack();
  taskOverview.postShowCallBack = null;
}

taskOverview.preShow = function () {
  taskOverview.isReadOnly = !workOrderModel.isOnSite(workOrder) || WOValidationSignature.isValid(workOrder) || (workOrder.statusCode == 70);
  
  taskOverview.setMenus();
  taskOverview.form = kony.application.getCurrentForm();
  if (taskOverview.form.id == 'frmTaskOverview'){
    taskOverview.form.imgTPSelectedAll.src = "selectednot.png";
    taskOverview.form.hbSelectAll.isVisible = true;// = "sknHboxNormal";

    if(taskOverview.isReadOnly) {
      taskOverview.form.vbSelectAll.setEnabled(false);
    } else {
      taskOverview.form.vbSelectAll.setEnabled(true);
    }
    
    //Retrieve the btphoto info from database if there is already one
    var btphoto = !validationModel.isNull(itemVerify.item.id) ? btphotosModel.findPhotoInfoByCibId(itemVerify.item.id, workOrder.id) : null;
    if (!validationModel.isNull(btphoto) && !validationModel.isNull(btphoto.id)) {
      taskOverview.btphotoId = btphoto.id;
      taskOverview.btphotoPrecoId = !validationModel.isNull(btphoto.precoid) ? btphoto.precoid : null;
      taskOverview.form.vbxAddPhoto.setEnabled(false);
      taskOverview.form.vbxEditPhoto.isVisible = true;
    } else {
      taskOverview.btphotoId = null;
      taskOverview.btphotoPrecoId = null;
      taskOverview.form.vbxAddPhoto.setEnabled(true);
      taskOverview.form.vbxEditPhoto.isVisible = false;
    }
  }
  
  if (taskOverview.form.id == 'frmCatalogSearch'){
   	 
  }
  //taskOverview.form.lblAllSelected.text = "Tout sélectionner";

  otis.application.setCurrentAppMenu("taskOverviewAppMenu");//Dhaval:Invocation of custom app menu

  if (taskOverview.form.id == 'frmTaskOverview') {
    taskOverview.tab.tasksNonPlanned = 1;
    taskOverview.tab.spareParts = 2;
   // taskOverview.tab.relatedProducts = 3;
    taskOverview.tab.info = 3;
    frmTaskOverview.tabTaskOverview.containerHeight = 160;														//Arati:Changed code for JIRA UI-84
    frmTaskOverview.tabTaskOverview.containerHeightReference = constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH;	//Arati:Changed code for JIRA UI-84
  } else {
    taskOverview.tab.tasksNonPlanned = null;
    taskOverview.tab.spareParts = null;
   // taskOverview.tab.relatedProducts = null;
    taskOverview.tab.info = 1;
    frmTaskOverviewInstall.tabTaskOverview.containerHeight = 160;												//Arati:Changed code for JIRA UI-84
    frmTaskOverviewInstall.tabTaskOverview.containerHeightReference = constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH ;	//Arati:Changed code for JIRA UI-84
  }

  taskOverview.tabTasksPlannedUnload();
  if (taskOverview.form.id == 'frmTaskOverview') taskOverview.tabTasksNonPlannedUnload();
  if (taskOverview.form.id == 'frmTaskOverview') taskOverview.tabSparePartsUnload();
  //if (taskOverview.form.id == 'frmTaskOverview') taskOverview.tabRelatedProductsUnload();
  taskOverview.tabInfoUnload();
  taskOverview.form.tabTaskOverview.activeTabs = [taskOverview.tab.current];
  	if(taskOverview.form.id == 'frmTaskOverviewInstall'){//Dhaval:Design issue #18 for slide
      if(taskOverview.tab.current == 0){
        frmTaskOverviewInstall.btnTabPrev.skin='skntabBtn';
    	frmTaskOverviewInstall.btnTabFirst.skin='sknTabBtnFoc';
      }
      else{
        frmTaskOverviewInstall.btnTabPrev.skin='sknTabBtnFoc';
    	frmTaskOverviewInstall.btnTabFirst.skin='skntabBtn';
      }
    }
  	else{//Dhaval:Design issue #18 for slide
      if(taskOverview.tab.current == 0){
		clearTaskOverviewTabSkins();
    	frmTaskOverview.btnTabFirst.skin='sknTabBtnFoc';
      }
      else if(taskOverview.tab.current == 1){
        clearTaskOverviewTabSkins();
        frmTaskOverview.btnTabPrev.skin='sknTabBtnFoc';
      }
      else if(taskOverview.tab.current == 2){
        clearTaskOverviewTabSkins();
        frmTaskOverview.btnTabHdr1.skin='sknTabBtnFoc';
      }
      else if(taskOverview.tab.current == 3){
        clearTaskOverviewTabSkins();
        frmTaskOverview.btnTabHdr2.skin='sknTabBtnFoc';
      }
      else if(taskOverview.tab.current == 3){
        clearTaskOverviewTabSkins();
        frmTaskOverview.btnTabNext.skin='sknTabBtnFoc';
      }
      else{
        kony.print("clicked tab not recognized");
      }
    }
  
  var taskType = (workOrder.typeCode == 'I') ? 'nonPlanned' : 'planned';
  var tasksToChekInitState = taskModel.findTasksByItemWorkOrderAndWhereClause(undefined, itemVerify.item, workOrder, taskType, " order by status desc");
  taskModel.initState(itemVerify.item, tasksToChekInitState);

  // Force the user to select a item status reason if all planned tasks are done
  var tasks = taskModel.findTasksByItemWorkOrderAndWhereClause(undefined, itemVerify.item, workOrder,'planned', " order by status desc");
  taskOverview.hasCompletedAllTasksPlanned = true;
  for (var i = 0; i < tasks.length; i ++) {
    if (tasks[i].status != 'O' && tasks[i].status != 'N') {
      taskOverview.hasCompletedAllTasksPlanned = false;
      break;
    }
  }
  if (taskOverview.form.id == 'frmTaskOverview'){
    taskOverview.form.vbSelectAll.onClick = taskOverview.selectAll;
  }
  
  taskOverviewTC.showTCPopup = false;
}

taskOverview.tabTasksPlannedLoad = function () {
  taskOverview.loadSegItemsTP = function (tasks) {
    var segItemsTPMasterData = [];
    var articleComponents = articleModel.findArticleComponentsByTasks(tasks, undefined, 'P');
    if (!validationModel.isNull(articleComponents)) {
      for (var i = 0; i < articleComponents.length; i ++) {
        var articleComponent = articleComponents[i];
        articleComponent.lblQty = articleComponent.quantity;
        articleComponent.lblUnitOfMeasure = articleComponent.unitOfMeasure;
        articleComponent.lblName = articleComponent.name;
        articleComponent.lblCode = "(" + articleComponent.usualCode + ")";
        segItemsTPMasterData.push(articleComponent);
      }
    }
    taskOverview.form.segItemsTP.setData(segItemsTPMasterData);
  }

  taskOverview.refreshSegItemsTP = function () {
    var tasks = de.itgs.javascript.Object.clone(taskOverview.tasks);
    for (var i = 0; (i < tasks.length && i > -1); i ++) {
      if (tasks[i].statusIndex > 1) {
        tasks.splice(i,1);
        i--;
      }
    }
    taskOverview.loadSegItemsTP(tasks);
  }

  // Load the tasks
  taskOverview.tasks = [];
  var tasks = taskModel.findTasksByItemWorkOrderAndWhereClause(undefined,itemVerify.item, workOrder,'planned'," order by status desc, priority ");

  for (var i = 0; i < tasks.length; i ++) {
    var task = tasks[i];
    task.hasSurvey = taskOverview.checkForSurveys(task.articleId);
    var taskHBSkin = task.hasSurvey ? "sknHBxOrange" : "Skin Defaults";
    taskHBSkin = task.hasSurvey > 1 ? "sknHBValid" : taskHBSkin;
    task.statusIndex = task.status == 'O' ? 1 : (task.status == 'N' ? 2 : 0);
    task.imgStatusTP = taskOverview.statusImg[task.statusIndex];
    task.lblTaskPlanned = tasks[i].name;
    if (task.nonCompletionReason != "") {
      var taskCompletionReason = taskModel.findTaskCompletionReasonByReasonCode(task.nonCompletionReason);
      task.lblTaskPlanned += !validationModel.isNull(taskCompletionReason) ? "\nMotif: " + taskCompletionReason.name : "";
    }
    task.itemsToggleOn = false;
    task.imgItemsTP = {"src": "list.png"};
    task.imgReasonTP = "edit.png";
    //Dhaval:Fix for UI issue 18:Dynamic focus skin causes click area issue
    task.hbxTaskPlanned = {"skin" : taskHBSkin}//, "focusSkin" : taskHBSkin};
    taskOverview.tasks.push(task);
  }
  taskOverview.form.segTasksPlanned.setData(taskOverview.tasks);

  // Load all components of tasks in status blank or not done
  taskOverview.refreshSegItemsTP();
  taskOverview.allItemsListed = true;

  taskOverview.detectIfAllItemIsInTheSameStatus();
}

taskOverview.tabTasksPlannedUnload = function () {
  taskOverview.form.hbxReferenceTP.lblReferenceTP.text = workOrder.getReference();
  taskOverview.form.hbxReferenceTP.backgroundColor = workOrder.color;
  taskOverview.form.hbxReferenceTP.focusSkin = workOrder.skin;
  var batchNumber = !validationModel.isNull(itemVerify.item.batchNumber) ? " - " + itemVerify.item.batchNumber : '';
  taskOverview.form.lblItemReferenceTP.text = itemVerify.item.name + batchNumber;
  taskOverview.form.segTasksPlanned.removeAll();
  taskOverview.form.segItemsTP.removeAll();
}

taskOverview.tabTasksNonPlannedLoad = function () {
  taskOverview.sortTasksNonPlannedByStatus = function (tasks) {
    var tasksSorted = [];
    for (var i = 0; i < tasks.length; i ++) {
      var index = tasksSorted.length;
      for (var j = 0; j < tasksSorted.length; j ++) {
        if ((tasks[i].statusIndex == 1 && tasks[i].statusIndex != tasksSorted[j].statusIndex) ||
            (tasks[i].statusIndex == 2 && tasksSorted[j].statusIndex != 1 && tasksSorted[j].statusIndex != 2)
           ) {
          index = j;
          break;
        }
      }
      tasksSorted.splice(index,0,tasks[i]);
    }
    return tasksSorted;
  }


  taskOverview.loadSegItemsTNP = function (tasks) {
    var segItemsTNPMasterData = [];
    var articleComponents = [];

    // If the items button is toggled, load only the items for that task
    if (tasks.length == 1 && tasks[0].itemsToggleOn) {
      var article = {articleId: tasks[0].articleId};
      articleComponents = articleModel.findArticleComponentsByArticles([article], undefined, 1, 'P');
      // Else load the items of all items that are ticked as done (i.e. have an entry in F56BTDT)
    } else {
      articleComponents = articleModel.findArticleComponentsByTasks(tasks, undefined, 'P');
    }

    if (!validationModel.isNull(articleComponents)) {
      for (var i = 0; i < articleComponents.length; i ++) {
        var articleComponent = articleComponents[i];
        articleComponent.lblQty = articleComponent.quantity;
        articleComponent.lblUnitOfMeasure = articleComponent.unitOfMeasure;
        articleComponent.lblName = articleComponent.name;
        articleComponent.lblCode = "(" + articleComponent.usualCode + ")";
        segItemsTNPMasterData.push(articleComponent);
      }
    }
    taskOverview.form.segItemsTNP.setData(segItemsTNPMasterData);
  }

  taskOverview.refreshSegItemsTNP = function () {
    var tasks = de.itgs.javascript.Object.clone(taskOverview.tasks);
    for (var i = 0; (i < tasks.length && i > -1); i ++) {
      if (tasks[i].statusIndex != 1) {
        tasks.splice(i,1);
        i--;
      }
    }
    taskOverview.loadSegItemsTNP(tasks);
  }

  // Load the tasks
  taskOverview.tasks = [];
  var tasks = taskModel.findTasksByItemWorkOrderAndWhereClause(undefined, itemVerify.item, workOrder, 'nonPlanned', " order by status desc, priority ");
  for (var i = 0; i < tasks.length; i ++) {
    var task = tasks[i];
    task.hasSurvey = taskOverview.checkForSurveys(task.articleId);
    var taskHBSkin = task.hasSurvey ? "sknHBxOrange" : "Skin Defaults";
    taskHBSkin = task.hasSurvey > 1 ? "sknHBValid" : taskHBSkin;
    task.statusIndex = task.status == 'O' ? 1 : (task.status == 'N' ? 2 : 0);
    task.imgStatusTNP = taskOverview.statusImg[task.statusIndex];
    task.lblTaskNonPlanned = tasks[i].name;
    if (task.nonCompletionReason != "") {
      var taskCompletionReason = taskModel.findTaskCompletionReasonByReasonCode(task.nonCompletionReason);
      task.lblTaskNonPlanned += !validationModel.isNull(taskCompletionReason) ? "\nMotif: " + taskCompletionReason.name : "";
    }
    task.itemsToggleOn = false;
    task.imgItemsTNP = {"src": "list.png"};
    task.imgReasonTNP = "edit.png";
    task.hbxTaskNonPlanned = {"skin" : taskHBSkin, "focusSkin" : taskHBSkin};
    taskOverview.tasks.push(task);
  }
  taskOverview.form.segTasksNonPlanned.setData(taskOverview.tasks);
	exchangeItemPop.cbxChoices.selectedKeys = taskOverview.cbxChoicesData;
  // Load all components of tasks in status blank or not done
  taskOverview.refreshSegItemsTNP();
  taskOverview.allItemsListed = true;
}

taskOverview.tabTasksNonPlannedUnload = function () {
  taskOverview.form.hbxReferenceTNP.lblReferenceTNP.text = workOrder.getReference();
  taskOverview.form.hbxReferenceTNP.backgroundColor = workOrder.color;
  taskOverview.form.hbxReferenceTNP.focusSkin = workOrder.skin;
  var batchNumber = !validationModel.isNull(itemVerify.item.batchNumber) ? " - " + itemVerify.item.batchNumber : '';
  taskOverview.form.lblItemReferenceTNP.text = itemVerify.item.name + batchNumber;
  taskOverview.form.segTasksNonPlanned.removeAll();
  taskOverview.form.segItemsTNP.removeAll();
}

// Task Status
// 0 - blank
// 1 - done
// 2 - not done
taskOverview.onVbxStatusTPClick = function (selectedTask, status) {
  if (taskOverview.isReadOnly) return;
  
  if(selectedTask != null){ // Wanna mean the function is launch by the "all selected box"
    // Mannualy set the selected row
    taskOverview.form.segTasksPlanned.selectedIndex = [0, selectedTask];
  }
  else{
    taskOverview.onReasonSelection = false;
  }
  
     var myIndex;
  if(taskOverview.segTasksPlannedInfo != null){
    for(var i=0;i<taskOverview.form.segTasksPlanned.data.length;i++){
        if(taskOverview.form.segTasksPlanned.data[i].articleId == taskOverview.segTasksPlannedInfo.articleId){
          myIndex = i;
        }
      }
  }
      

  taskOverview.selectedTask = taskOverview.tasks[taskOverview.form.segTasksPlanned.selectedIndex?taskOverview.form.segTasksPlanned.selectedIndex[1]:myIndex];
  var itemCodeVerification = articleModel.findArticleVerificationCodeByItem(itemVerify.item, workOrder);

  if(!taskOverview.hasSpecialTask && selectedTask == null && taskOverview.selectedTask.statusIndex == 1 && itemCodeVerification == taskOverview.selectedTask.usualCode){
    taskOverview.cancelAllWithReason();
  }
  else if(selectedTask != null && taskOverview.selectedTask.statusIndex == status){

    // if not checked or uncheked, do nothing
  }
  else{

    if(selectedTask != null){
      taskOverview.selectedTask.statusIndex = status;
    }else{
      taskOverview.selectedTask.statusIndex += taskOverview.selectedTask.statusIndex < 2 ? 1 : -2;
    }

    // Toggle the task status icon
    taskOverview.selectedTask.imgStatusTP = taskOverview.statusImg[taskOverview.selectedTask.statusIndex];
    if (taskOverview.form.id == 'frmTaskOverview'){
      taskOverview.selectedTask.imgTPSelectedAll = taskOverview.statusImg[taskOverview.selectedTask.statusIndex];
    }
    if (taskOverview.selectedTask.lblTaskPlanned.indexOf("\nMotif") > -1) {
      taskOverview.selectedTask.lblTaskPlanned = taskOverview.selectedTask.lblTaskPlanned.substring(0, taskOverview.selectedTask.lblTaskPlanned.indexOf("\nMotif"));
    }
    var selectedIndexStatus = taskOverview.form.segTasksPlanned.selectedIndex?taskOverview.form.segTasksPlanned.selectedIndex:myIndex;			//Arati: Changed code for Issue#78
    taskOverview.form.segTasksPlanned.setDataAt(taskOverview.selectedTask, taskOverview.form.segTasksPlanned.selectedIndex?taskOverview.form.segTasksPlanned.selectedIndex[1]:myIndex);
    taskOverview.form.segTasksPlanned.selectedIndex = selectedIndexStatus;				//Arati: Changed code for Issue#78


    if (taskOverview.selectedTask.statusIndex == 0) {
      taskOverview.selectedTask.status = 'NULL';
      // Task completed
    } else if (taskOverview.selectedTask.statusIndex == 1) {
      taskOverview.selectedTask.status = 'O';
      if (validationModel.isNull(taskOverview.selectedTask.realDate)) {
        var realisationDate = dateTimePrintSql(new Date());
        taskOverview.selectedTask.realDate = realisationDate.substring(0, 10);
        taskOverview.selectedTask.realTime = realisationDate.substring(11);
      }
      // Task not completed
    } else if (taskOverview.selectedTask.statusIndex == 2) {
      taskOverview.selectedTask.status = 'N';
    }
    taskOverview.selectedTask.nonCompletionReason = 'NULL';
    taskModel.updateTasks([taskOverview.selectedTask]);

    workOrder = workOrderModel.findWorkOrderByDoco(taskOverview.selectedTask.doco);
    if (taskOverview.selectedTask.statusIndex == 1) {
      if (workOrder.typeCode != 'P') {
        // Create the entries for this task in SpareParts - component depth: 1
        var articleComponents = articleModel.findArticleComponentsByTasks([taskOverview.selectedTask], 1);
        var tarifMode = pricing.computeTarifMode(workOrder, taskOverview.selectedTask.articleId, "plannedTask" , null, taskOverview.selectedTask);
        sparePartModel.createSparePartsByWorkOrderAndItem(
          workOrder, itemVerify.item, articleComponents,
          taskOverview.selectedTask, undefined, "plannedTask", (workOrder.process == 'CHUBB'),
          null, null, tarifMode);
      }

      if(!validationModel.isNull(taskOverview.selectedTask.DL02) &&
         taskOverview.selectedTask.DL02 == "ES" ||
         taskOverview.selectedTask.DL02 == "R") taskOverview.onVbxReasonEPClick(taskOverview.selectedTask);
    } else if (workOrder.typeCode != 'P' && taskOverview.selectedTask.statusIndex == 2) {
      // Remove the selected components from SpareParts
      if(workOrder.process == 'CHUBB') sparePartModel.updateSparePartSummaryEntryByChubbTask(taskOverview.selectedTask, -1, workOrder);
      else sparePartModel.deleteSparePartsByTask(taskOverview.selectedTask);
    }

    if (taskOverview.allItemsListed) {
      // Load all components of tasks in status blank or not done
      taskOverview.refreshSegItemsTP();
    }

    // If the task was not completed, force the reason popup

    if(taskOverview.onReasonSelection == false){
      if (taskOverview.selectedTask.statusIndex == 2) {
        taskOverview.onReasonSelection = true;
        var ifThereIsVerificationTask = false;
        for(var i = 0; i < taskOverview.form.segTasksPlanned.data.length; i++){
          if(itemCodeVerification == taskOverview.tasks[i].usualCode && ifThereIsVerificationTask==false){
            ifThereIsVerificationTask = true;
            taskOverview.onVbxReasonTPClick();
          }
        }
        if(ifThereIsVerificationTask == false){
          taskOverview.onVbxReasonTPClick();
        }
      }
    }
    // taskOverview.onReasonSelection = false;

    // If all planned tasks are now in a final state, block the user
    // from leaving this screen until he has completed the Information tab
    taskOverview.hasCompletedAllTasksPlanned = true;
    taskOverview.hasCompletedItemVerification = false;
    for (var i = 0; i < taskOverview.tasks.length; i ++) {
      if (taskOverview.tasks[i].statusIndex < 1) {
        taskOverview.hasCompletedAllTasksPlanned = false;
        break;
      }
    }
  }
  if(selectedTask == null){ // To set all selected checkbox in the same state if all the status are the same, in case of manual select
    taskOverview.detectIfAllItemIsInTheSameStatus();
  }
}

taskOverview.onVbxItemsTPClick = function () {
  // Toggle the items segment for the selected task
  taskOverview.selectedTask = taskOverview.tasks[taskOverview.form.segTasksPlanned.selectedIndex[1]];
  if (!taskOverview.selectedTask.itemsToggleOn) {
    taskOverview.selectedTask.imgItemsTP = {"src": "listToggled.png"};
    taskOverview.selectedTask.itemsToggleOn = true;
  } else {
    taskOverview.selectedTask.imgItemsTP = {"src": "list.png"};
    taskOverview.selectedTask.itemsToggleOn = false;
  }
  taskOverview.form.segTasksPlanned.setDataAt(taskOverview.selectedTask, taskOverview.form.segTasksPlanned.selectedIndex[1]);

  // Set the toggle for all other tasks to false (only one item can have toggle set to true)
  for (var i = 0; i < taskOverview.tasks.length; i ++) {
    if (taskOverview.tasks[i].id != taskOverview.selectedTask.id) {
      taskOverview.tasks[i].imgItemsTP = {"src": "list.png"};
      taskOverview.tasks[i].itemsToggleOn = false;
      taskOverview.form.segTasksPlanned.setDataAt(taskOverview.tasks[i], i);
    }
  }

  // The selected task was toggled on
  if (taskOverview.selectedTask.itemsToggleOn) {
    // Load task components of the selected task
    taskOverview.loadSegItemsTP([taskOverview.selectedTask]);
    taskOverview.allItemsListed = false;
    // The selected task was toggled off
  } else {
    // Load all components of tasks in status blank or not done
    taskOverview.refreshSegItemsTP();
    taskOverview.allItemsListed = true;
  }
}

taskOverview.onVbxReasonTPClick = function (myIndex) {
 if (taskOverview.isReadOnly) return;
  
 try{
   if(!validationModel.isNull(taskOverview.form.segTasksPlanned.selectedIndex || myIndex )){	//Dhaval:Fix for type error
    //Arati:Changed code for JIRA UI-139 start here
     if(myIndex){
       taskOverview.form.segTasksPlanned.selectedIndex = myIndex;
     }
    if(taskOverview.form.imgTPSelectedAll.src == 'close.png' && taskOverview.form.hbSelectAll.isVisible == true) {
      taskOverview.form.segTasksPlanned.selectedIndex = [0, 0];
      taskOverview.selectedTask = taskOverview.tasks[taskOverview.form.segTasksPlanned.selectedIndex[1]];
    } else {
      taskOverview.selectedTask = taskOverview.tasks[taskOverview.form.segTasksPlanned.selectedIndex[1]];
    }
    //Arati:Changed code for JIRA UI-139 end here
    if (taskOverview.selectedTask.statusIndex > 0) {
      var reasons = {};

      var taskCompletionReasonType = taskOverview.selectedTask.statusIndex == 1 ? 'Completed' : 'NonCompleted';
      var taskCompletionReasons = taskModel.findTaskCompletionReasonsByType(
        taskCompletionReasonType, workOrder, taskOverview.selectedTask, "plannedTask");
      var cbxEditMasterData = taskOverview.selectedTask.statusIndex == 1 ? [["NONE",""],["","(aucun motif)"]] : [["NONE",""]];
      for (var i = 0; i < taskCompletionReasons.length; i++) {
        var name2 = validationModel.isNull(taskCompletionReasons[i].name2) ? '' : taskCompletionReasons[i].name2;
        var lblcompletionReason = putToLine((taskCompletionReasons[i].code + ' ' + taskCompletionReasons[i].name + name2), 35);
        cbxEditMasterData.push([taskCompletionReasons[i].code, lblcompletionReason]);
        reasons[taskCompletionReasons[i].code] = taskCompletionReasons[i].name + name2;
      }

      taskOverview.saveConfirm = function () {

        var selectedKey = popDefault.cbx.selectedKey;
        if (selectedKey == "NONE") {
          var msg = "Veuillez choisir le motif de non-réalisation avant de continuer";
          if (taskOverview.selectedTask.statusIndex == 1) msg = "Veuillez choisir le motif de réalisation avant de continuer";
          popupModel.showPopError(msg, taskOverview.onVbxReasonTPClick, null, null, null, true);
          //				if (taskOverview.selectedTask.statusIndex == 1) popupModel.showPopError("Veuillez choisir le motif de réalisation avant de continuer",
          //																						taskOverview.onVbxReasonTPClick, undefined, undefined, undefined, true);
          //				else popupModel.showPopError("Veuillez choisir le motif de non-réalisation avant de continuer",
          //											taskOverview.onVbxReasonTPClick, undefined, undefined, undefined, true);
        } else {
          popDefault.dismiss()
          for(var i=0; i<taskOverview.form.segTasksPlanned.data.length; i++){
            if(taskOverview.globalReason == true){
              taskOverview.selectedTask = taskOverview.tasks[i];
              taskOverview.form.segTasksPlanned.selectedIndex = [0, i];
            }else{
              i = taskOverview.form.segTasksPlanned.data.length-1;
            }
            if(i == taskOverview.form.segTasksPlanned.data.length-1){
              taskOverview.globalReason = false;
            }

            // Update the GUI to display the chosen reason or remove it
            if (taskOverview.selectedTask.lblTaskPlanned.indexOf("\nMotif") > -1) {
              taskOverview.selectedTask.lblTaskPlanned = taskOverview.selectedTask.lblTaskPlanned.substring(0, taskOverview.selectedTask.lblTaskPlanned.indexOf("\nMotif"));
            }
            taskOverview.selectedTask.lblTaskPlanned += selectedKey != "" ? "\nMotif: " + replaceAll(reasons[selectedKey], '\n', '') : "";
            taskOverview.form.segTasksPlanned.setDataAt(taskOverview.selectedTask, taskOverview.form.segTasksPlanned.selectedIndex[1]);

            // Save the task
            taskOverview.selectedTask.nonCompletionReason = selectedKey;
            taskModel.updateTasks([taskOverview.selectedTask]);

            if (taskOverview.selectedTask.statusIndex == 1 && workOrder.typeCode != 'P') {
              // Remove the selected components from SpareParts
              if(workOrder.process == 'CHUBB') sparePartModel.updateSparePartSummaryEntryByChubbTask(taskOverview.selectedTask, -1, workOrder);
              else sparePartModel.deleteSparePartsByTask(taskOverview.selectedTask);

              // Recreate the spareparts with recalculated price
              var articleComponents = articleModel.findArticleComponentsByTasks([taskOverview.selectedTask], 1);
              sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, itemVerify.item, articleComponents,
                                                                taskOverview.selectedTask, undefined, "plannedTask", (workOrder.process == 'CHUBB'));
            }

            taskOverview.hasCompletedItemVerification = false;
          }
        }
      }
      var popupConfig = [
        {confirm: true,
         confirmCB: taskOverview.saveConfirm,
         cancel: (taskOverview.selectedTask.statusIndex != 2),
         skipDismiss: true},
        undefined,
        {lblCbx: (taskOverview.selectedTask.statusIndex == 1 ? "Veuillez choisir le motif de réalisation" : "Veuillez choisir le motif de non-réalisation"),
         masterData: cbxEditMasterData,
         selectedKey: "NONE"}
      ];
      popupModel.showPopDefault(popupConfig);
    }
  }
 } catch(e){
  	kony.print("VbxReasonTPClick"+e); 
 }
};

// Task Status
// 0 - blank
// 1 - done
taskOverview.onVbxStatusTNPClick = function (selectedIndex, noSparePartUpdate) {
  if (taskOverview.isReadOnly) return;
  
  // Block the user from changing others task statuses until the current one has been completed
  if (!taskOverview.onVbxStatusTNPClickInProgress && !taskOverview.onVbxStatusTNPClickPendingReasonSelection) {
    //Arati:Fix for #49 - kony error and type error start here
    //if (validationModel.isNull(selectedIndex)) selectedIndex = taskOverview.form.segTasksNonPlanned.selectedIndex[1];
    if (validationModel.isNull(selectedIndex)) {
      if(validationModel.isNull(taskOverview.form.segTasksNonPlanned.selectedIndex)){
        //do nothing
      }
      else {
        selectedIndex = taskOverview.form.segTasksNonPlanned.selectedIndex[1];
        gblselectedIndexTNP = selectedIndex;	//Arati:Changed code for JIRA UI-120
      }
    }
    if(!validationModel.isNull(selectedIndex)) {
      //Arati:Fix for #49 - kony error and type error end here
      taskOverview.onVbxStatusTNPClickInProgress = true;

      // Toggle the task status icon
      taskOverview.selectedTask = taskOverview.tasks[selectedIndex];
      taskOverview.selectedTask.statusIndex = taskOverview.selectedTask.statusIndex == 0 ? 1 : 0;
      taskOverview.selectedTask.imgStatusTNP = taskOverview.statusImg[taskOverview.selectedTask.statusIndex];
      if (taskOverview.selectedTask.lblTaskNonPlanned.indexOf("\nMotif") > -1) {
        taskOverview.selectedTask.lblTaskNonPlanned = taskOverview.selectedTask.lblTaskNonPlanned.substring(0, taskOverview.selectedTask.lblTaskNonPlanned.indexOf("\nMotif"));
      }
      taskOverview.form.segTasksNonPlanned.setDataAt(taskOverview.selectedTask, selectedIndex);

      if (taskOverview.selectedTask.statusIndex == 1) {
        workOrder = workOrderModel.findWorkOrderByDoco(taskOverview.selectedTask.doco);

        // Create Task in BTDT table
        var task = taskModel.createTaskByItemAndWorkOrder(itemVerify.item, workOrder, 'nonPlanned', undefined, taskOverview.selectedTask.usualCode);
        task = taskModel.findTaskById(task.id);
        for (var property in task) {
          taskOverview.selectedTask[property] = task[property];
        }

        // Put reason on task
        if(!validationModel.isNull(task["DL02"]) && (task["DL02"] == "ES" || task["DL02"] == "R")) {
          taskOverview.onVbxReasonENPClick(taskOverview.selectedTask, selectedIndex);
        } else {
          taskOverview.onVbxStatusTNPClickPendingReasonSelection = true;
          taskOverview.onVbxReasonTNPClick(selectedIndex);
        }
      } else {
        // Remove the selected components from SpareParts
        //			if(workOrder.process == 'CHUBB') sparePartModel.updateSparePartSummaryEntryByChubbTask(taskOverview.selectedTask, -1, workOrder);
        //			else sparePartModel.deleteSparePartsByTask(taskOverview.selectedTask);
        // Remove task from F56BTDT
        taskModel.deleteTasks([taskOverview.selectedTask], noSparePartUpdate);
        // Resort the task list
        taskOverview.tasks = taskOverview.sortTasksNonPlannedByStatus(taskOverview.form.segTasksNonPlanned.data);
        taskOverview.form.segTasksNonPlanned.setData(taskOverview.tasks);
      }

      if (taskOverview.allItemsListed) {
        // Load all components of tasks in status blank or not done
        taskOverview.refreshSegItemsTNP();
      }

      taskOverview.onVbxStatusTNPClickInProgress = false;
      taskOverview.hasCompletedItemVerification = false;
    }
  }
}

taskOverview.onVbxItemsTNPClick = function () {
  // Toggle the items segment for the selected task
  taskOverview.selectedTask = taskOverview.tasks[taskOverview.form.segTasksNonPlanned.selectedIndex[1]];
  if (!taskOverview.selectedTask.itemsToggleOn) {
    taskOverview.selectedTask.imgItemsTNP = {"src": "listToggled.png"};
    taskOverview.selectedTask.itemsToggleOn = true;
  } else {
    taskOverview.selectedTask.imgItemsTNP = {"src": "list.png"};
    taskOverview.selectedTask.itemsToggleOn = false;
  }
  taskOverview.form.segTasksNonPlanned.setDataAt(taskOverview.selectedTask, taskOverview.form.segTasksNonPlanned.selectedIndex[1]);

  // Set the toggle for all other tasks to false (only one item can have toggle set to true)
  for (var i = 0; i < taskOverview.tasks.length; i ++) {
    if (taskOverview.tasks[i].id != taskOverview.selectedTask.id ||
        taskOverview.tasks[i].usualCode != taskOverview.selectedTask.usualCode) {
      taskOverview.tasks[i].imgItemsTNP = {"src": "list.png"};
      taskOverview.tasks[i].itemsToggleOn = false;
      taskOverview.form.segTasksNonPlanned.setDataAt(taskOverview.tasks[i], i);
    }
  }

  // The selected task was toggled on
  if (taskOverview.selectedTask.itemsToggleOn) {
    // Load task components of the selected task
    taskOverview.loadSegItemsTNP([taskOverview.selectedTask]);
    taskOverview.allItemsListed = false;
    // The selected task was toggled off
  } else {
    // Load all components of tasks in status blank or not done
    taskOverview.refreshSegItemsTNP();
    taskOverview.allItemsListed = true;
  }
}

taskOverview.onVbxReasonTNPClick = function (selectedIndex) {
  if (taskOverview.isReadOnly) return;
  
  //Dhaval Issue 34 start:Added validation for selected indexes
  if (validationModel.isNull(selectedIndex)) {

    //if(taskOverview.form.segTasksNonPlanned.selectedRowIndex === null || validationModel.isNull(taskOverview.form.segTasksNonPlanned.selectedRowIndex))
    if(taskOverview.form.segTasksNonPlanned.selectedIndex === null || validationModel.isNull(taskOverview.form.segTasksNonPlanned.selectedIndex))  //Arati:Changed code for JIRA UI-120
    {
      selectedIndex = gblselectedIndexTNP; 	//Arati:Changed code for JIRA UI-120
    }
    else
    {
      selectedIndex = taskOverview.form.segTasksNonPlanned.selectedIndex[1];
    }
  }
  if(!validationModel.isNull(selectedIndex)){
    //Dhaval Issue 34 end
    taskOverview.selectedTask = taskOverview.tasks[selectedIndex];
    var taskStatus = taskOverview.selectedTask.statusIndex;
    if (taskStatus > 0) {

      taskOverview.save = function (selectedReason, selectIndex) {
        if(selectIndex != null){
          taskOverview.selectedTask = taskOverview.tasks[i];
        }
        // Update the GUI to display the chosen reason or remove it
        if (taskOverview.selectedTask.lblTaskNonPlanned.indexOf("\nMotif") > -1) {
          taskOverview.selectedTask.lblTaskNonPlanned = taskOverview.selectedTask.lblTaskNonPlanned.substring(0, taskOverview.selectedTask.lblTaskNonPlanned.indexOf("\nMotif"));
        }

        taskOverview.selectedTask.lblTaskNonPlanned += "\nMotif: " + replaceAll(selectedReason[1], '\n', '');
        taskOverview.form.segTasksNonPlanned.setDataAt(taskOverview.selectedTask, selectedIndex);
        
        // Save the task
        taskOverview.selectedTask.nonCompletionReason = selectedReason[0];
        taskModel.updateTasks([taskOverview.selectedTask]);

        // Resort the task list
        taskOverview.tasks = taskOverview.sortTasksNonPlannedByStatus(taskOverview.form.segTasksNonPlanned.data);
        taskOverview.form.segTasksNonPlanned.setData(taskOverview.tasks);

        if (taskStatus == 1 && workOrder.typeCode != 'P') {
          // Remove the selected components from SpareParts
          if(workOrder.process != 'CHUBB') sparePartModel.deleteSparePartsByTask(taskOverview.selectedTask);

          // Recreate the spareparts with recalculated price
          var articleComponents = articleModel.findArticleComponentsByTasks([taskOverview.selectedTask], 1);
          var tarifMode = pricing.computeTarifMode(workOrder, taskOverview.selectedTask.articleId, "nonPlannedTask" , selectedReason[0], taskOverview.selectedTask);
          sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, itemVerify.item, articleComponents, taskOverview.selectedTask, undefined, "nonPlannedTask", (workOrder.process == 'CHUBB'), null, null, tarifMode);
        }

        taskOverview.hasCompletedItemVerification = false;
      }

      taskOverview.saveConfirm = function() {
        taskOverview.onVbxStatusTNPClickPendingReasonSelection = false;
        if (popDefault.cbx.selectedKey == "NONE") {
          //popupModel.showPopError("Veuillez choisir le motif de réalisation avant de continuer", taskOverview.onVbxReasonTNPClick(selectedIndex), null, null, null, true);//DHAVAL:HAD ADDED MISSING PARAMETER OF SELECTED INDEX
          popupModel.showPopError("Veuillez choisir le motif de réalisation avant de continuer", taskOverview.onVbxReasonTNPClick, null, null, null, true); //Arati: changed for issue #80
        } else {
          popDefault.dismiss();

          // If the user does not select a reason, uncheck the task
          if (popDefault.cbx.selectedKeyValue[0] == "") {
            taskOverview.onVbxStatusTNPClickInProgress = false;
            taskOverview.onVbxStatusTNPClick(selectedIndex, true);
          } else {
            taskOverview.save(popDefault.cbx.selectedKeyValue);
            /*
                      for(var i=0; i<taskOverview.form.segTasksPlanned.data.length; i++){
                          taskOverview.save(popDefault.cbx.selectedKeyValue, i);
                      }*/
          }
        }
      }

      //var taskCompletionReasonType = taskOverview.selectedTask.statusIndex == 1 ? 'Completed' : 'NonCompleted';
      var taskCompletionReasons = taskModel.findTaskCompletionReasonsByType('Completed', workOrder, taskOverview.selectedTask, "nonPlannedTask");
      var autoConfirm = (1 == taskCompletionReasons.length);

      if (autoConfirm) {
        taskOverview.onVbxStatusTNPClickPendingReasonSelection = false;
        if (0 == taskStatus || (1 == taskStatus && !taskOverview.onVbxStatusTNPClickInProgress)) { // statusIndex is targeted statusIndex - Uncheck the task
          taskOverview.onVbxStatusTNPClickInProgress = false;
          taskOverview.onVbxStatusTNPClick(selectedIndex);
        } else {
          var lblcompletionReason = putToLine(taskCompletionReasons[0].name, 35);
          taskOverview.save([taskCompletionReasons[0].code, lblcompletionReason]);
          /*for(var i=0; i<taskOverview.form.segTasksPlanned.data.length; i++){
                          taskOverview.save([taskCompletionReasons[0].code, lblcompletionReason], i);
                          //taskOverview.save([taskCompletionReasons[0].code, lblcompletionReason]);
                      }*/
        }
      }
      else {
        var cbxEditMasterData = taskStatus == 1 ? [["NONE",""], ["","(retour sans valider)"]] : [["NONE",""]];
        for (var i = 0; i < taskCompletionReasons.length; i++) {
          var lblcompletionReason = putToLine(taskCompletionReasons[i].name, 35);
          cbxEditMasterData.push([taskCompletionReasons[i].code, lblcompletionReason]);
        }

        taskOverview.saveCancel = function () {
          taskOverview.onVbxStatusTNPClickPendingReasonSelection = false;
        }

        var popupConfig = [
          {
            confirm: true,
            confirmCB: taskOverview.saveConfirm,
            cancel: (taskStatus != 1),
            cancelCB: taskOverview.saveCancel,
            skipDismiss: true
          },
          null,
          {
            lblCbx: "Veuillez choisir le motif de réalisation",
            masterData: cbxEditMasterData,
            selectedKey: "NONE"
          }
        ];
        popupModel.showPopDefault(popupConfig);
      }
    }
  }

};

taskOverview.tabSparePartsLoad = function () {

  // Show the spare parts linked to tasks
  var segSparePartsCurrentMasterData = [];
  var spareParts = sparePartModel.findSparePartsByItemAndWorkOrder(itemVerify.item, workOrder, 'tasksRelated');
  var sparePartsGrouped = sparePartModel.groupSparePartsByUsualCodeAndSalesReason(spareParts);
  var articleComponents = articleModel.findArticleComponentsByArticles(sparePartsGrouped, 1, 1);
  if (!validationModel.isNull(articleComponents)) {
    for (var i = 0; i < articleComponents.length; i ++) {
      var articleComponent = articleComponents[i];
      if (!validationModel.isNull(articleComponent.name) && !validationModel.isNull(articleComponent.usualCode)) {
        articleComponent.lblQty = articleComponent.quantity;
        articleComponent.lblUnitOfMeasure = articleComponent.unitOfMeasure;
        articleComponent.lblName = articleComponent.name;
        articleComponent.lblCode = "(" + articleComponent.usualCode + ")";
        segSparePartsCurrentMasterData.push(articleComponent);
      }
    }
  }
  taskOverview.form.segSparePartsCurrent.setData(segSparePartsCurrentMasterData);
  sparePartAdd.sparePartsTaskRelated = articleComponents;

  // Show the seperately sold spare parts
  var segSparePartsAddMasterData = [];
  var segPAMasterData = [];
  
  taskOverview.sparePartsAdd = sparePartModel.findSparePartsByItemAndWorkOrder(itemVerify.item, workOrder, 'salesRelated');
  taskOverview.sparePartsAddGrouped = sparePartModel.groupSparePartsByUsualCodeAndSalesReason(taskOverview.sparePartsAdd);
  if (!validationModel.isNull(taskOverview.sparePartsAddGrouped)) {
    for (var i = 0; i < taskOverview.sparePartsAddGrouped.length; i ++) {
      var articleComponent = taskOverview.sparePartsAddGrouped[i];
      articleComponent.lblQty = articleComponent.quantity;
      articleComponent.lblUnitOfMeasure = articleComponent.unitOfMeasure;
      articleComponent.lblName = articleComponent.name;
      articleComponent.lblCode = "(" + articleComponent.usualCode + ")";
      articleComponent.type = "spareParts"; 
      segSparePartsAddMasterData.push(articleComponent);
    }
  }
  
  taskOverview.refreshRelatedTasksSegment = function () {
    var segRelatedTasksData = [];
    var tasks = taskModel.findTasksBySpareParts(taskOverview.relatedProducts);
    
    
    /*var tasksGrouped = [];
    for(var nbtasks=0; nbtasks < tasks.length; nbtasks++){
      tasks[nbtasks].quantity = 1;
      var count = 1;
      for(var codeIn=0; codeIn < tasks.length; codeIn++){
        if(tasks[nbtasks].usualCode == tasks[codeIn].usualCode && nbtasks != codeIn){
          count++;
        }
      }
      tasks[nbtasks].quantity = count;

    }
    
    //cleanArray removes all duplicated elements
function cleanArray(array) {
  var i, j, len = array.length, out = [], obj = {};
  for (i = 0; i < len; i++) {
    obj[array[i].usualCode] = 0;
  }
  for (j in obj) {
    out.push(j);
  }
  return out;
}
    
    tasks = cleanArray(tasks);*/ 
   // tasks = tasksGrouped;
    //tasks = sparePartModel.groupSparePartsByUsualCodeAndSalesReason(tasks);
    if (!validationModel.isNull(tasks)) {
      for (var i = 0; i < tasks.length; i ++) {
        var task = tasks[i];
        task.lblQty = 1;
        task.lblUnitOfMeasure = "";
        task.lblName = tasks[i].name;
        task.lblCode = tasks[i].usualCode;
        task.type = "task";
        task.lblID = tasks[i].sparePartId;
        segPAMasterData.push(task);
      }
    }
    segPAMasterData = de.itgs.javascript.Array.sortByParam(segPAMasterData, "lblID");
    /*for(var i=0; i<segPAMasterData.length-1; i++){
      if(segPAMasterData[i].type=="task" && segPAMasterData[i].usualCode == segPAMasterData[i+1].usualCode){
        segPAMasterData = segPAMasterData.splice(i+1, 1);
        
      }
    }*/
  }

  // Show the related products
  var segRelatedProductsMasterData = [];
  taskOverview.relatedProducts = sparePartModel.findSparePartsByItemAndWorkOrder(itemVerify.item, workOrder, 'productRelated');
  taskOverview.relatedProductsGrouped = sparePartModel.groupSparePartsByUsualCodeAndSalesReason(taskOverview.relatedProducts);
  if (!validationModel.isNull(taskOverview.relatedProductsGrouped)) {
    for (var i = 0; i < taskOverview.relatedProductsGrouped.length; i ++) {
      var articleComponent = taskOverview.relatedProductsGrouped[i];
      articleComponent.lblQty = articleComponent.quantity;
      articleComponent.lblUnitOfMeasure = articleComponent.unitOfMeasure;
      articleComponent.lblName = articleComponent.name;
      articleComponent.lblCode = "(" + articleComponent.usualCode + ")";
      articleComponent.type = "relatedProducts";
      articleComponent.lblID = articleComponent.id;
      segPAMasterData.push(articleComponent);
      //
      var tasks = taskModel.findTasksBySpareParts(taskOverview.relatedProductsGrouped);
    }
  }
  //taskOverview.form.segRelatedProducts.setData(segRelatedProductsMasterData);

  // Show the related tasks
  taskOverview.refreshRelatedTasksSegment();
  taskOverview.form.segSparePartsAdd.setData(segSparePartsAddMasterData.concat(segPAMasterData));
}

taskOverview.tabSparePartsUnload = function () {
  taskOverview.form.hbxReferenceSP.lblReferenceSP.text = workOrder.getReference();
  taskOverview.form.hbxReferenceSP.backgroundColor = workOrder.color;
  taskOverview.form.hbxReferenceSP.focusSkin = workOrder.skin;
  var batchNumber = !validationModel.isNull(itemVerify.item.batchNumber) ? " - " + itemVerify.item.batchNumber : '';
  taskOverview.form.lblItemReferenceSP.text = itemVerify.item.name + batchNumber;
  taskOverview.form.segSparePartsCurrent.removeAll();
  taskOverview.form.segSparePartsAdd.removeAll();
}

taskOverview.onSegSparePartsAddRowClick = function () {
  try{
    gblrowSelectedIndex = taskOverview.form.segSparePartsAdd.selectedIndex[1];      //Arati: Changed for issue#50
    // Remove the sales reason from all other non-selected rows
    var sparePartAddRows = taskOverview.form.segSparePartsAdd.data;
    for (var i = 0; i < sparePartAddRows.length; i ++) {
      var salesReasonIndex = sparePartAddRows[i].lblName.indexOf("\nMotif");
      if (salesReasonIndex > -1 && i != taskOverview.form.segSparePartsAdd.selectedIndex[1]) {
        sparePartAddRows[i].lblName = sparePartAddRows[i].lblName.substring(0,salesReasonIndex);
        taskOverview.form.segSparePartsAdd.setDataAt(sparePartAddRows[i], i);
      }
    }

    // Add the sales reason to the selected row
    var selectedSparePartAdd = taskOverview.sparePartsAddGrouped[taskOverview.form.segSparePartsAdd.selectedIndex[1]];
    var selectedSparePartAddRow = taskOverview.form.segSparePartsAdd.selectedItems[0];
    var originalIndex = taskOverview.form.tabTaskOverview.tabSpareParts.segSparePartsAdd.selectedRowIndices;
    if (selectedSparePartAddRow.lblName.indexOf("\nMotif") < 0) {
      selectedSparePartAddRow.lblName += (!validationModel.isNull(selectedSparePartAdd.salesReason) && selectedSparePartAdd.salesReason.length > 0) ? "\nMotif: " + selectedSparePartAdd.salesReason : "";
      taskOverview.form.segSparePartsAdd.setDataAt(selectedSparePartAddRow, taskOverview.form.segSparePartsAdd.selectedIndex[1]);
      taskOverview.form.tabTaskOverview.tabSpareParts.segSparePartsAdd.selectedRowIndices = originalIndex;
    }
  }catch(e){
    kony.print("row click "+e);
  }
}

taskOverview.onBtnSparePartRemoveClick = function (data, byPassPopup) {
  if(data){
    gblrowSelectedIndex = null;
    for(var i=0; i < taskOverview.sparePartsAdd.length; i ++){
       if(taskOverview.sparePartsAdd[i].usualCode == data.usualCode){
         gblrowSelectedIndex = i;
    	}
 	 }
  }
  //Arati: Changed for issue#50 start here
  try{
    //if (!validationModel.isNull(taskOverview.form.segSparePartsAdd.selectedIndex)) {
    if (!validationModel.isNull(gblrowSelectedIndex)) {
      //var selectedSparePartAdd = taskOverview.sparePartsAddGrouped[taskOverview.form.segSparePartsAdd.selectedIndex[1]];
      var selectedSparePartAdd = taskOverview.sparePartsAddGrouped[gblrowSelectedIndex];
      taskOverview.sparePartRemoveConfirm = function () {
        var sparePartsForDeletion = [];
        for (var i = 0; i < taskOverview.sparePartsAdd.length; i ++) {
          if (taskOverview.sparePartsAdd[i].usualCode == selectedSparePartAdd.usualCode) {
            sparePartsForDeletion.push(taskOverview.sparePartsAdd[i]);
            taskOverview.sparePartsAdd.splice(i,1);
            i--;
          }
        }
        sparePartModel.deleteSpareParts(sparePartsForDeletion);
        //taskOverview.sparePartsAddGrouped.splice(taskOverview.form.segSparePartsAdd.selectedIndex[1],1);
        taskOverview.sparePartsAddGrouped.splice(gblrowSelectedIndex,1);
        //taskOverview.form.segSparePartsAdd.removeAt(taskOverview.form.segSparePartsAdd.selectedIndex[1]);
        taskOverview.form.segSparePartsAdd.removeAt(gblrowSelectedIndex);
        gblrowSelectedIndex = null;
      }
	if(byPassPopup == true){
      taskOverview.sparePartRemoveConfirm();
    }else{
            popupModel.showPopError("Suprimer cette pièce?\n" +
                              selectedSparePartAdd.name +
                              " (" + selectedSparePartAdd.articleId + ")", taskOverview.sparePartRemoveConfirm, undefined, true);
    }
    }
  } catch(e) {
    kony.print("Remove click "+e);
  }
  //Arati: Changed for issue#50 end here
}

taskOverview.tabRelatedProductsLoad = function () {

  taskOverview.refreshRelatedTasksSegment = function () {
    var segRelatedTasksData = [];
    var tasks = taskModel.findTasksBySpareParts(taskOverview.relatedProducts);
    if (!validationModel.isNull(tasks)) {
      for (var i = 0; i < tasks.length; i ++) {
        var task = tasks[i];
        task.lblTaskName = tasks[i].name;
        task.lblTaskUsualCode = tasks[i].usualCode;
        segRelatedTasksData.push(task);
      }
    }
    //taskOverview.form.segRelatedTasks.setData(segRelatedTasksData);
  }

  // Show the related products
  var segRelatedProductsMasterData = [];
  taskOverview.relatedProducts = sparePartModel.findSparePartsByItemAndWorkOrder(itemVerify.item, workOrder, 'productRelated');
  taskOverview.relatedProductsGrouped = sparePartModel.groupSparePartsByUsualCodeAndSalesReason(taskOverview.relatedProducts);
  if (!validationModel.isNull(taskOverview.relatedProductsGrouped)) {
    for (var i = 0; i < taskOverview.relatedProductsGrouped.length; i ++) {
      var articleComponent = taskOverview.relatedProductsGrouped[i];
      articleComponent.lblQty = articleComponent.quantity;
      articleComponent.lblUnitOfMeasure = articleComponent.unitOfMeasure;
      articleComponent.lblName = articleComponent.name;
      articleComponent.lblCode = "(" + articleComponent.usualCode + ")";
      segRelatedProductsMasterData.push(articleComponent);
    }
  }
  //taskOverview.form.segRelatedProducts.setData(segRelatedProductsMasterData);

  // Show the related tasks
  taskOverview.refreshRelatedTasksSegment();
}

taskOverview.onSegRelatedProductsRowClick = function () {
  gblRelatedProductsRowClick = taskOverview.form.segRelatedProducts.selectedIndex[1];		//Arati: Changed for issue#51
  // Remove the sales reason from all other non-selected rows
  //var relatedProductsRows = taskOverview.form.segRelatedProducts.data;
  /*for (var i = 0; i < relatedProductsRows.length; i ++) {
    var salesReasonIndex = relatedProductsRows[i].lblName.indexOf("\nMotif");
    if (salesReasonIndex > -1 && i != taskOverview.form.segRelatedProducts.selectedIndex[1]) {
      relatedProductsRows[i].lblName = relatedProductsRows[i].lblName.substring(0,salesReasonIndex);
      //taskOverview.form.segRelatedProducts.setDataAt(relatedProductsRows[i], i);
    }
  }*/

  // Add the sales reason to the selected row
  /*var selectedRelatedProduct = taskOverview.relatedProductsGrouped[taskOverview.form.segRelatedProducts.selectedIndex[1]];
  var selectedRelatedProductRow = taskOverview.form.segRelatedProducts.selectedItems[0];
  var originalIndex = taskOverview.form.tabTaskOverview.tabRelatedProducts.segRelatedProducts.selectedRowIndices;
  if (selectedRelatedProductRow.lblName.indexOf("\nMotif") < 0) {
    selectedRelatedProductRow.lblName += (!validationModel.isNull(selectedRelatedProduct.salesReason) && selectedRelatedProduct.salesReason.length > 0) ? "\nMotif: " + selectedRelatedProduct.salesReason : "";
    //taskOverview.form.segRelatedProducts.setDataAt(selectedRelatedProductRow, taskOverview.form.segRelatedProducts.selectedIndex[1]);
    //taskOverview.form.tabTaskOverview.tabRelatedProducts.segRelatedProducts.selectedRowIndices = originalIndex;
  }*/
}

taskOverview.onBtnRelatedProductRemoveClick = function (gblRelatedProductsRowClick, byPassPopup) {
  //Arati: Changed for issue#51 start here
  try{
  
    if (!validationModel.isNull(gblRelatedProductsRowClick)) {
      var selectedRelatedProduct = gblRelatedProductsRowClick;
      taskOverview.relatedProductRemoveConfirm = function () {
        var relatedProductsForDeletion = [];
        for (var i = 0; i < taskOverview.relatedProducts.length; i ++) {
          if (taskOverview.relatedProducts[i].usualCode == selectedRelatedProduct.usualCode) {
            relatedProductsForDeletion.push(taskOverview.relatedProducts[i]);
            taskOverview.relatedProducts.splice(i,1);
            i--;
          }
        }
        sparePartModel.deleteSpareParts(relatedProductsForDeletion);
        taskOverview.relatedProductsGrouped.splice(gblRelatedProductsRowClick,1);
        taskOverview.form.segSparePartsAdd.removeAt(taskOverview.form.segSparePartsAdd.selectedIndex[1]);
        taskOverview.tabSparePartsLoad();
        gblRelatedProductsRowClick = null;
        taskOverview.refreshRelatedTasksSegment();
      }
		if(byPassPopup==true){
          taskOverview.relatedProductRemoveConfirm();
        }else{
                popupModel.showPopError("Suprimer ce produit?\n" +
                              selectedRelatedProduct.name +
                              " (" + selectedRelatedProduct.articleId + ")", taskOverview.relatedProductRemoveConfirm, undefined, true);
        }

    }
  }catch(e) {
    kony.print(" seg related Task -"+e);
  }
  //Arati: Changed for issue#51 end here
}

taskOverview.tabRelatedProductsUnload = function () {
 /* taskOverview.form.hbxReferenceRP.lblReferenceRP.text = workOrder.getReference();
  taskOverview.form.hbxReferenceRP.backgroundColor = workOrder.color;
  taskOverview.form.hbxReferenceRP.focusSkin = workOrder.skin;
  var batchNumber = !validationModel.isNull(itemVerify.item.batchNumber) ? " - " + itemVerify.item.batchNumber : '';
  taskOverview.form.lblItemReferenceRP.text = itemVerify.item.name + batchNumber;
  taskOverview.form.segRelatedProducts.removeAll();*/
  //taskOverview.form.segRelatedTasks.removeAll();
}

taskOverview.tabInfoLoad = function () {

  taskOverview.refreshSegReplacementArticles = function () {
    // find existing recommendations

    taskOverview.undefinedReplacement = false;
    var recommendations = articleRecommendationModel.findItemRelatedRecommendations(workOrder, itemVerify.item);

    var isPhotoAvailable = !validationModel.isNull(taskOverview.btphotoId);
    var segReplacementArticlesMasterData = [];
    for (var i = 0; i < recommendations.length; i ++) {
      var recommendation = {};
      taskOverview.undefinedReplacement = (taskOverview.undefinedReplacement || validationModel.isNull(recommendations[i].usualCode));
      recommendation.id = recommendations[i].id;
      recommendation.lblReplacementArticleCode = validationModel.isNull(recommendations[i].usualCode) ? '000000' : recommendations[i].usualCode;
      recommendation.lblReplacementArticleName = validationModel.isNull(recommendations[i].name) ? 'appareil non identifié' : recommendations[i].name;
      recommendation.vbxPhoto = {skin: "sknVbxTransparent", focusSkin: "sknVbxTransparent", "isVisible": isPhotoAvailable};
      var switchSelectedIndex = 1; //0 is OUI, 1 is NON
      if (!validationModel.isNull(taskOverview.btphotoPrecoId)) {
        switchSelectedIndex = (recommendations[i].id == taskOverview.btphotoPrecoId) ? 0 : 1;
      }
      recommendation.switchAddPhoto = {skin: "sknVbxTransparent", focusSkin: "sknVbxTransparent", "selectedIndex": switchSelectedIndex, "isVisible": isPhotoAvailable};
      
      segReplacementArticlesMasterData.push(recommendation);
    }
    kony.print("segReplacementArticlesMasterData:"+JSON.stringify(segReplacementArticlesMasterData));
    taskOverview.form.segReplacementArticles.setData(segReplacementArticlesMasterData);
  }

  // Retrieve the item status

  if(taskOverview.hasCompletedAllTasksPlanned) {
    var whereClause = " and dt.cibid = " + itemVerify.item.id + " and prm.RMK2 = 'TRT' and CK01 = 'O' ";
    var associatedTaskTypes = taskModel.findTaskTypesByWorkOrderAndWhereClause(workOrder, whereClause);
    taskOverview.itemStatus = (associatedTaskTypes.length == 0)
      ? itemModel.findItemStatusByWorkOrderAndItem(workOrder, itemVerify.item)
    : itemModel.findStatusByWorkOrderAndStatusCode(workOrder, 'T')
    ;
  }
  else taskOverview.itemStatus = undefined;

  // Populate the item status reason segment
  var selectedIndex;
  if (!validationModel.isNull(taskOverview.itemStatus)  && !validationModel.isNull(taskOverview.itemStatus.name)) {
    taskOverview.form.lblItemStatus.text = taskOverview.itemStatus.name;

    var segItemStatusReasonMasterData = [];
    taskOverview.itemStatusReasons = itemModel.findItemStatusReasonsByWorkOrderAndItem(workOrder, itemVerify.item, taskOverview.itemStatus);
    for (var i = 0; i < taskOverview.itemStatusReasons.length; i ++) {
      var itemStatusReason = taskOverview.itemStatusReasons[i];
      itemStatusReason.lblItemStatusReason = itemStatusReason.name;
      segItemStatusReasonMasterData.push(itemStatusReason);

      // Preselect the item status reason segment if one was set previously
      if (!validationModel.isNull(itemVerify.item.statusReason) && itemVerify.item.statusReason == itemStatusReason.code) {
        selectedIndex = i;
      }
    }
    taskOverview.form.segItemStatusReason.setData(segItemStatusReasonMasterData);
    kony.print('segItemStatusReasonMasterData value - '+JSON.stringify(segItemStatusReasonMasterData))
    if (!validationModel.isNull(selectedIndex)) {
      kony.print("taskOverview.form.segItemStatusReason:"+taskOverview.form.segItemStatusReason.selectedRowIndices);

      try
      {

        kony.print('Target #1 - '+JSON.stringify(taskOverview.form.tabTaskOverview.segItemStatusReason.selectedIndices));
        taskOverview.form.segItemStatusReason.selectedIndices = [[0,[selectedIndex]]];//Dhaval:ID#31:Fix for crash issue used selectedIndices instead of selectedRowIndices
      }
      catch(e)
      {
        kony.print('Exception occured at target #1 >>> '+e+' >>> detailed ----- '+JSON.stringify(e));
      }

      if(taskOverview.isReadOnly) {
	    taskOverview.form.segItemStatusReason.setEnabled(false);
      } else {
	    taskOverview.form.segItemStatusReason.setEnabled(true);
      }
      
      // Refresh the recommendations segment
      taskOverview.refreshSegReplacementArticles();

      // Release the lock on the screen
      taskOverview.hasCompletedItemVerification = true;
    }

  } else {
    taskOverview.form.lblItemStatus.text = 'Inconnu';
    // Refresh the recommendations segment
    taskOverview.refreshSegReplacementArticles();				//Arati:Changed code for JIRA UI-65
    // Prevent user being locked in case there is no status found
    taskOverview.hasCompletedItemVerification = true;
  }
}

taskOverview.tabInfoUnload = function () {
  taskOverview.form.hbxReferenceIF.lblReferenceIF.text = workOrder.getReference();
  taskOverview.form.hbxReferenceIF.backgroundColor = workOrder.color;
  taskOverview.form.hbxReferenceIF.focusSkin = workOrder.skin;
  var batchNumber = !validationModel.isNull(itemVerify.item.batchNumber) ? " - " + itemVerify.item.batchNumber : '';
  taskOverview.form.lblItemReferenceIF.text = itemVerify.item.name + batchNumber;
  taskOverview.form.lblItemStatus.text = '';
  taskOverview.form.segItemStatusReason.removeAll();
  taskOverview.form.segReplacementArticles.removeAll();
}

taskOverview.onSegItemStatusReasonRowClick = function () {
  if (taskOverview.isReadOnly) return;
  
  databaseModel.openDBExchange("Mise à jour du statut et calcul des préconisations...");
  //temp changes 1
  kony.print('temp changes 1 >> taskOverview.form thing  - '+JSON.stringify(taskOverview.form.segItemStatusReason.selectedIndex[1])+' ... taskOverview.form.segItemStatusReason --> '+JSON.stringify(taskOverview.form));
  var selectedItemStatusReason = taskOverview.itemStatusReasons[taskOverview.form.segItemStatusReason.selectedIndex[1]];
  var replacementArticle;

  if (itemVerify.item.statusReason != selectedItemStatusReason.code) {
    itemVerify.item.status = taskOverview.itemStatus.jdeCode;
    itemVerify.item.statusKony = taskOverview.itemStatus.code;
    itemVerify.item.statusReason = selectedItemStatusReason.code;

    if (!validationModel.isNull(selectedItemStatusReason.referenceCode)) {
      replacementArticle = itemCrossModel.findReplacementItem(itemVerify.item.usualCode);

      if(validationModel.isNull(replacementArticle)) {
        replacementArticle = {
          icrid : -1,
          name : 'article à identifier',
          usualCode : 'NULL',
          articleId : '00000000',
          unitOfMeasureCode : 'UN'
        };
      }
    }

    // If the statusReason was saved as characteristic before, delete it
    if (!validationModel.isNull(itemVerify.item.statusReasonId)) {

      var articleCharacteristic = {id: itemVerify.item.statusReasonId};
      //alert("articleCharacteristic:"+JSON.stringify(articleCharacteristic));
      kony.print("articleCharacteristic:"+JSON.stringify(articleCharacteristic))
      // Detach the old characteristic from the item
      itemVerify.item.statusReasonId = undefined;
      itemModel.updateItems([itemVerify.item]);

      // Delete the old characteristic
      //alert("articleCharacteristic before delete:"+JSON.stringify(articleCharacteristic));
      kony.print("articleCharacteristic before delete:"+JSON.stringify(articleCharacteristic))
      articleModel.deleteArticleCharacteristic(articleCharacteristic);
    }

    // Save the statusReason as characteristic to the item if applicable
    if (taskOverview.itemStatus.hasStatusReasonCharacteristic) {
      itemVerify.item.newCharacteristics = [];
      itemVerify.item.newCharacteristics[0] = {};
      itemVerify.item.newCharacteristics[0].charTable = 'F56PCAR';
      itemVerify.item.newCharacteristics[0].charValue = selectedItemStatusReason.code;
      itemVerify.item.newCharacteristics[0].charCode = selectedItemStatusReason.characteristicCode;
      var articleCharacteristics = articleModel.createArticleCharacteristicsByItem(itemVerify.item);
      itemVerify.item.statusReasonId = articleCharacteristics[0].id;
    }

    // Update the status and statusReason of the item in the DB
    itemModel.updateItems([itemVerify.item]);

    if (!validationModel.isNull(replacementArticle)) {
      replacementArticle.recommendationType = 'I2';
      replacementArticle.salesReason = 'Remplacement';
      replacementArticle.quantity = 1;
      replacementArticle.placement = itemVerify.item.placement;
      replacementArticle.floor = itemVerify.item.floor;
      replacementArticle.location = itemVerify.item.location;
      replacementArticle.customerNumber = itemVerify.item.customerNumber;

      // Delete the replacementArticle from the DB if one was set previously
      var recommendations = articleRecommendationModel.findItemRelatedRecommendations(workOrder, itemVerify.item, 'Remplacement');

      for (var i = 0; i < recommendations.length; i++) {
        articleRecommendationModel.deleteRecommendation(recommendations[i]);
      }

      // Save the replacementArticle to the DB
      if (articleModel.requiresFullItemVerification(replacementArticle)) {
        var recommendation = de.itgs.javascript.Object.clone(replacementArticle);

        for (var i = 0; i < replacementArticle.quantity; i++) {
          recommendation.quantity = 1;
          articleRecommendationModel.createRecommendationByItemAndWorkOrder(recommendation, itemVerify.item, workOrder, selectedItemStatusReason);
        }
      } else {
        articleRecommendationModel.createRecommendationByItemAndWorkOrder(replacementArticle, itemVerify.item, workOrder, selectedItemStatusReason);
      }
    } else {
      taskOverview.form.segReplacementArticles.removeAll();

      // Delete the replacementArticle from the DB if one was set previously
      var recommendations = articleRecommendationModel.findItemRelatedRecommendations(workOrder, itemVerify.item, 'Remplacement');

      for (var i = 0; i < recommendations.length; i++) {
        articleRecommendationModel.deleteRecommendation(recommendations[i]);
      }
    }
  }

  // Refresh the recommendations segment
  taskOverview.refreshSegReplacementArticles();

  // Release the lock on the screen
  taskOverview.hasCompletedItemVerification = true;
  databaseModel.closeDBExchange();
}

// EP = Exchanged Planned
taskOverview.onVbxReasonEPClick = function (task) {
  taskOverview.selectedTask = taskOverview.tasks[taskOverview.form.segTasksPlanned.selectedIndex[1]];
  if (taskOverview.selectedTask.statusIndex > 0) {

    var taskCompletionReasonType = task.statusIndex == 1 ? 'Completed' : 'NonCompleted';
    var taskCompletionReasons = taskModel.findTaskCompletionReasonsByType(
      taskCompletionReasonType, workOrder, task, "plannedTask");
    var cbxEditMasterData = task.statusIndex == 1 ? [["","(aucun motif)"]] : [];
    for (var i = 0; i < taskCompletionReasons.length; i++) {
      var lblcompletionReason = putToLine(taskCompletionReasons[i].name, 35);
      cbxEditMasterData.push([taskCompletionReasons[i].code, lblcompletionReason]);
    }

    taskOverview.saveCancel = function () { // cancels action of validating the task
      exchangeItemPop.dismiss();
    }

    // user can choose not to proceed to the exchange
    taskOverview.saveSkip = function () { // set task status to "not done"
      exchangeItemPop.dismiss();
	if(validationModel.isNull(taskOverview.form.segTasksPlanned.selectedIndex)){
      var myIndex;
            for (var i = 0; i < taskOverview.form.segTasksPlanned.data.length; i++) {
                if (taskOverview.form.segTasksPlanned.data[i].articleId == taskOverview.segTasksPlannedInfo.articleId) {
                    myIndex = i;
                }
            }
      taskOverview.onVbxStatusTPClick(myIndex, 2);
    }else{
      taskOverview.onVbxStatusTPClick();
    }
      
      
    }

    taskOverview.openCatalog = function() { // in case of a replacing place, the user can choose an item from the catalog
      taskOverviewTC.showTCPopup = true;
      taskOverview.cbxChoicesData = exchangeItemPop.cbxChoices.selectedKeys;
      exchangeItemPop.dismiss();
      taskOverview.addReplacementItem(task,0);
    }

    taskOverview.saveConfirm = function () { // selection is confirmed and must be associated with a barcode
      if(!validationModel.isNull(exchangeItemPop.segExchangeItems.selectedIndex)) { // an item has been correctly selected
        var currentItem = itemVerify.item;
        var replacementArticle = exchangeItemPop.segExchangeItems.selectedItems[0];
        var replacementItem = itemCrossModel.findCrossItemsByUsualCodeAndCrossType(replacementArticle.usualCode,'AT');

        if(validationModel.isNull(replacementItem) || replacementItem.length == 0){
          exchangeItemPop.lblErrorOnValidation.text = "Pas d'appareil associé à cet article";
          exchangeItemPop.lblErrorOnValidation.isVisible = true;
          return;
        }
        var motive =  (exchangeItemPop.cbxChoices.selectedKeyValue[0] != "") ?
            exchangeItemPop.cbxChoices.selectedKeyValue[0] :
        null;

        var oldItemTasks = new Array();
        var newItemTasks = new Array();
        var tasksMasterData = exchangeItemPop.segTasks.data;
        for(var i=0;i<tasksMasterData.length;i++) {
          for(var j=0;j<tasksMasterData[i][1].length;j++) {
            if(i == 1) newItemTasks.push(tasksMasterData[i][1][j].usualCode);
            else oldItemTasks.push(tasksMasterData[i][1][j].usualCode);
          }
        }

        function confirmPExchange() {
          for(var i=0;i<oldItemTasks.length;i++) {
            var task = taskModel.createTaskByItemAndWorkOrder(currentItem,workOrder,'planned',replacementArticle.replacementReason,oldItemTasks[i]);
            task = taskModel.findTaskById(task.id);
            var taskComponents = articleModel.findArticleComponentsByTasks([task], 1);
            sparePartModel.createSparePartsByWorkOrderAndItem(workOrder,currentItem,taskComponents,task,replacementArticle.replacementReason,"nonPlannedTask", (workOrder.process == 'CHUBB'), taskOverview.selectedTask);
          }
          taskOverview.onConfirmExchangeArticleClick(replacementData, true, exchangeItemPop.cbxChoices.selectedKeyValue);
        }

        var replacementData = [currentItem,replacementArticle,replacementItem[0], "plannedTask", newItemTasks, motive, task]; // all datas are saved : the flag for a replacement process is up now
        exchangeItemPop.dismiss();
        confirmPExchange();
      }
      else {
        exchangeItemPop.lblErrorOnValidation.text = "Vous devez choisir un article";
        exchangeItemPop.lblErrorOnValidation.isVisible = true;
        return;
      }
    }

    var crossItems = itemCrossModel.findCrossItemsByUsualCodeAndCrossType(itemVerify.item.usualCode, task.DL02);
    var segExchangeItemsMasterData = new Array();

    for (var i = 0; i < crossItems.length; i ++) {
      var crossItem = crossItems[i];
      crossItem.lblRowItem = crossItems[i].name;
      segExchangeItemsMasterData.push(crossItem);
    }

    if(!validationModel.isNull(taskOverview.replacementItem)){
      segExchangeItemsMasterData.push(taskOverview.replacementItem);
      taskOverview.replacementItem = null;
    }

    exchangeItemPop.segExchangeItems.setData(segExchangeItemsMasterData);
    taskOverview.updateExchangeTasks();

    exchangeItemPop.cbxChoices.masterData = cbxEditMasterData;
    exchangeItemPop.lblChoice.text = "Veuillez choisir un motif";
    exchangeItemPop.btnConfirm.onClick = taskOverview.saveConfirm;
    exchangeItemPop.btnCancel.onClick = taskOverview.saveSkip;
    exchangeItemPop.btnCancelExchange.isVisible = false;
    exchangeItemPop.btnOpenCatalog.isVisible = task.DL02 == 'R' ? true : false;
    exchangeItemPop.btnOpenCatalog.onClick = taskOverview.openCatalog;
    exchangeItemPop.btnCancel.isVisible = task.statusIndex == 2 ? false : true;
    exchangeItemPop.lblErrorOnValidation.isVisible = false;
    exchangeItemPop.show();
  }
};

// ENP = Exchange Not Planned
taskOverview.onVbxReasonENPClick = function (task, selectedIndex) {
  if (task.statusIndex > 0) {
    var taskCompletionReasons = taskModel.findTaskCompletionReasonsByType('Completed', workOrder, task, "nonPlannedTask");
    var cbxEditMasterData = task.statusIndex == 1 ? [["","(aucun motif)"]] : [];
    for (var i = 0; i < taskCompletionReasons.length; i++) {
      var lblcompletionReason = putToLine(taskCompletionReasons[i].name, 35);
      cbxEditMasterData.push([taskCompletionReasons[i].code, lblcompletionReason]);
    }

    taskOverview.calculateTaskIndex = function(task) {
      var taskId = task.id;
      var taskCode = task.usualCode;
      var taskArtId = task.articleId;
      var tasks = taskOverview.form.segTasksNonPlanned.data;
      var selectedIndex = null;
      for(var i=0;i<tasks.length;i++){
        var task = tasks[i];
        if(task.id == taskId && task.usualCode == taskCode && task.articleId == taskArtId)
          return i.toString();
      }
    }

    taskOverview.saveCancel = function () {
      exchangeItemPop.dismiss();
      taskOverview.onVbxStatusTNPClickInProgress = false;
      if(selectedIndex != null){
       // selectedIndex = taskOverview.form.segTasksNonPlanned.selectedIndex[1];
      taskOverview.lastIndex = selectedIndex;
      }
      var myIndex = selectedIndex;
      for(var i=0;i<taskOverview.form.segTasksNonPlanned.data.length;i++){
        if(taskOverview.form.segTasksNonPlanned.data[i].articleId == taskOverview.segTasksNonPlannedInfo.articleId){
          myIndex = i;
        }
      }
      //taskOverview.onVbxStatusTNPClick(taskOverview.calculateTaskIndex(task));
      taskOverview.onVbxStatusTNPClick(myIndex, taskOverview.calculateTaskIndex(task));		//Arati:changed code for Issue#96
    }

    taskOverview.openCatalog = function() {
      taskOverviewTC.showTCPopup = true;
      taskOverview.cbxChoicesData = exchangeItemPop.cbxChoices.selectedKeys;
      exchangeItemPop.dismiss();
      taskOverview.addReplacementItem(task,1);
    }

    taskOverview.saveConfirm = function () {
		
      if (exchangeItemPop.cbxChoices.selectedKeyValue[0] == "") {
        exchangeItemPop.lblErrorOnValidation.text = "Vous devez choisir un motif.";
        exchangeItemPop.lblErrorOnValidation.isVisible = true;
        return;
      }

      else if(!validationModel.isNull(exchangeItemPop.segExchangeItems.selectedIndex)) { // an item has been correctly selected
        var currentItem = itemVerify.item;
        var replacementArticle = exchangeItemPop.segExchangeItems.selectedItems[0];
        var replacementItem = itemCrossModel.findCrossItemsByUsualCodeAndCrossType(replacementArticle.usualCode,'AT');

        if(validationModel.isNull(replacementItem) || replacementItem.length == 0){
          exchangeItemPop.lblErrorOnValidation.text = "Pas d'appareil associé à cet article";
          exchangeItemPop.lblErrorOnValidation.isVisible = true;
          return;
        }
        var motive =  (exchangeItemPop.cbxChoices.selectedKeyValue[0] != "") ?
            exchangeItemPop.cbxChoices.selectedKeyValue[0] :
        null;

        var oldItemTasks = new Array();
        var newItemTasks = new Array();
        var tasksMasterData = exchangeItemPop.segTasks.data;
        for(var i=0;i<tasksMasterData.length;i++) {
          for(var j=0;j<tasksMasterData[i][1].length;j++) {
            if(i == 1) newItemTasks.push(tasksMasterData[i][1][j].usualCode);
            else oldItemTasks.push(tasksMasterData[i][1][j].usualCode);
          }
        }

        function confirmNPExchange() {
          for(var i=0;i<oldItemTasks.length;i++) {
            var task = taskModel.createTaskByItemAndWorkOrder(currentItem,workOrder,'nonPlanned',replacementArticle.replacementReason,oldItemTasks[i]);
            task = taskModel.findTaskById(task.id);
            var taskComponents = articleModel.findArticleComponentsByTasks([task], 1);
            sparePartModel.createSparePartsByWorkOrderAndItem(workOrder,currentItem,taskComponents,task,replacementArticle.replacementReason,"nonPlannedTask", (workOrder.process == 'CHUBB'), taskOverview.selectedTask);
          }
          taskOverview.onConfirmExchangeArticleClick(replacementData, false, exchangeItemPop.cbxChoices.selectedKeyValue);
        }

        var replacementData = [currentItem,replacementArticle,replacementItem[0], "nonPlannedTask", newItemTasks, motive, task]; // all datas are saved : the flag for a replacement process is up now
        //			replacementData.push(exchangeItemPop.cbxChoices.selectedKeyValue);
        //frmItemScan.show(); // starts scanning process
        exchangeItemPop.dismiss();
        /*popupModel.showPopError(
          "confirmez-vous vouloir échanger avec un appareil " + replacementArticle.name + " ?",
          confirmNPExchange,replacementData,true,exchangeItemPop.show
        );*/
        confirmNPExchange();					//Arati: Changed code for JIRA UI-70
      }
      else {
        exchangeItemPop.lblErrorOnValidation.text = "Vous devez choisir un article.";
        exchangeItemPop.lblErrorOnValidation.isVisible = true;
        return;
      }
    }

    var crossItems = itemCrossModel.findCrossItemsByUsualCodeAndCrossType(itemVerify.item.usualCode, task.DL02);
    var segExchangeItemsMasterData = new Array();

    for (var i = 0; i < crossItems.length; i ++) {
      var crossItem = crossItems[i];
      crossItem.lblRowItem = crossItems[i].name;
      segExchangeItemsMasterData.push(crossItem);
    }

    if(!validationModel.isNull(taskOverview.replacementItem)){
      segExchangeItemsMasterData.push(taskOverview.replacementItem);
      taskOverview.replacementItem = null;
    }

    exchangeItemPop.segExchangeItems.setData(segExchangeItemsMasterData);
    taskOverview.updateExchangeTasks();

    exchangeItemPop.cbxChoices.masterData = cbxEditMasterData;
    exchangeItemPop.lblChoice.text = "Veuillez choisir un motif";
    exchangeItemPop.btnConfirm.onClick = taskOverview.saveConfirm;
    exchangeItemPop.btnCancel.onClick = taskOverview.saveCancel;
    exchangeItemPop.btnCancelExchange.isVisible = false;
    exchangeItemPop.btnOpenCatalog.isVisible = task.DL02 == 'R' ? true : false;
    exchangeItemPop.btnOpenCatalog.onClick = taskOverview.openCatalog;
    exchangeItemPop.btnCancel.isVisible = task.statusIndex == 2 ? false : true;
    exchangeItemPop.lblErrorOnValidation.isVisible = false;
    exchangeItemPop.show();

  }
};

taskOverview.addReplacementItem = function(task, tabToOpen) {
  function onSelectedCatalogItem(itemCodes) {
    var selectedItem = null;

    function retrieveItemCB(res) {
      if(!validationModel.isNull(res) && res.length > 0) selectedItem = res[0];

//      taskOverview.replacementItem = selectedItem;
//     	navigationModel.doReturn(2);
//     	taskOverview.form.tabTaskOverview.activeTabs = [tabToOpen];
//     	if(tabToOpen == 0) taskOverview.onVbxReasonEPClick(task);
//     	else taskOverview.onVbxReasonENPClick(task);

      	taskOverview.replacementItem = selectedItem;
     	if(tabToOpen == 0) taskOverview.postShowCallBack = taskOverview.onVbxReasonEPClick(task);
    	else taskOverview.postShowCallBack =taskOverview.onVbxReasonENPClick(task);
      	navigationModel.doReturn(2);
    }

    var sql =  " select description1 name, description1 lblRowItem, " +
        " usualcode usualCode, ITM articleId, measurementunit unitOfMeasureCode " +
        " from item where usualcode = '" + itemCodes[0] + "' ";

    executeSql(sql, retrieveItemCB, callBackModel.sqlErrorCB);
  }

  catalog.callback = onSelectedCatalogItem;
  catalogSearch.resetFullSearchFields();  
  catalogSearch.catalogType = "replacement";
  catalogSearch.selectionBehavior = 'single';
  var sql = " and Item.usualcode = '" + itemVerify.item.usualCode + "' ";
  catalogSearch.srcCategory = articleModel.findArticleCategories(sql)[0];
  catalogSearch.srcFamily = articleModel.findArticleFamiliesByCategory(catalogSearch.srcCategory, sql)[0];
  frmCatalogSearch.show();
}

taskOverview.onExchangeItemClick = function() {

  taskOverview.updateExchangeTasks(exchangeItemPop.segExchangeItems.selectedIndex[1]);
}

taskOverview.updateExchangeTasks = function(itemIndex) {

  var currentItem = itemVerify.item;

  var currentItemTasks = taskModel.findPossibleTasksByItemAndOptionTypesWhereClause(currentItem, [3], " and TBM = 'PA'");
  var currentItemTasksMasterData = new Array();

  for(var i=0;i<currentItemTasks.length;i++) {
    var currentItemTask = currentItemTasks[i];
    currentItemTask.lblRowTask = currentItemTasks[i].name;
    currentItemTasksMasterData.push(currentItemTask);
  }

  var currentItemDisplay = [
    {lblTaskType : {text : "Tâches d'appareil parc"}},
    currentItemTasksMasterData
  ];


  var selectedItemDisplay = null;

  if(itemIndex != null) {

    var selectedItem = exchangeItemPop.segExchangeItems.data[itemIndex];

    var selectedItemTasks = taskModel.findPossibleTasksByItemAndOptionTypesWhereClause(selectedItem, [2], " and TBM = 'PA'");
    var selectedItemTasksMasterData = new Array();

    for(var i=0;i<selectedItemTasks.length;i++) {
      var selectedItemTask = selectedItemTasks[i];
      selectedItemTask.lblRowTask = selectedItemTasks[i].name;
      selectedItemTasksMasterData.push(selectedItemTask);
    }

    selectedItemDisplay = [
      {lblTaskType : {text : "Tâches d'appareil d'échange"}},
      selectedItemTasksMasterData
    ]
  }

  var segTasksMasterData = new Array();
  segTasksMasterData.push(currentItemDisplay);
  if(!validationModel.isNull(selectedItemDisplay)) segTasksMasterData.push(selectedItemDisplay);

  exchangeItemPop.segTasks.setData(segTasksMasterData);
}

taskOverview.onEditRecommendationsClick = function() {
  if (taskOverview.isReadOnly) return;
  
  var itemStatusText = (validationModel.isNull(taskOverview.itemStatus) || validationModel.isNull(taskOverview.itemStatus.name)) ? 'Inconnu' : taskOverview.itemStatus.name;
  recommendationEdit.setData(itemVerify.item, itemStatusText, 'Remplacement');
  frmRecommendationEdit.show();
}

taskOverview.onConfirmExchangeArticleClick = function(replacementData, isPlanned, motive) {
  itemScan.replacementScan = de.itgs.javascript.Object.clone(replacementData); // all datas are saved : the flag for a replacement process is up now
  //	var motive = replacementData[6];
  var task = taskOverview.selectedTask;

  // Save the task
  task.nonCompletionReason = motive[0];
  taskModel.updateTasks([task]);

  if (!isPlanned && task.statusIndex == 1 && workOrder.typeCode != 'P' && workOrder.process != 'CHUBB') {
    // Remove the selected components from SpareParts
    if(workOrder.process == 'CHUBB') sparePartModel.updateSparePartSummaryEntryByChubbTask(taskOverview.selectedTask, -1, workOrder);
    else sparePartModel.deleteSparePartsByTask(taskOverview.selectedTask);

    // Recreate the spareparts with recalculated price
    var components = articleModel.findArticleComponentsByTasks([task], 1);
    sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, itemVerify.item, components, task, null, "nonPlannedTask", (workOrder.process == 'CHUBB'));
  }

  if (workOrder.process == 'CHUBB') {
    var newItem = itemScan.saveNewItem('NULL', false, true, false, true); // if chubb, no scan is required
    itemVerify.item = newItem;
    frmItemVerify.show();
  }
  else frmItemScan.show(); // starts scanning process
}

taskOverview.checkForSurveys = function(articleId) {
  if(app_parameters.no_survey) return 0;
  var surveys = questionnaireModel2.findQuestionnaireByItems([articleId]);
  var hasASurvey = surveys.length > 0 ? 1 : 0;
  if(hasASurvey) {
    questionnaire.setWorkOrder(workOrder);
    var loadSuccessful = questionnaire.loadQuestionnaire([articleId], true, questionnaire.valid.ALL, itemVerify.item);
    var completedSurvey = 0;
    if(loadSuccessful) completedSurvey = questionnaire.check();
    hasASurvey += completedSurvey;
  }
  return hasASurvey;
}

taskOverview.onOpenTaskSurvey = function() {
  if(app_parameters.no_survey) return;
  if(taskOverview.form.segTasksPlanned.selectedIndex != null){
    var selectedTask = taskOverview.tasks[taskOverview.form.segTasksPlanned.selectedIndex[1]];
    if(selectedTask.hasSurvey){
      var surveyProfile = {
        articleReferences : [selectedTask.articleId],
        item : itemVerify.item,
        readOnly : taskOverview.isReadOnly,
        topic : "TASK"
      };
      questionnaireDisplay.crtProfile = surveyProfile;
      frmQuestionnaire.show();
    }
  }
}

taskOverview.onRemoveClick = function(){
  if (taskOverview.isReadOnly) return;
  
  selectedData = taskOverview.form.segSparePartsAdd.data[taskOverview.form.segSparePartsAdd.selectedIndex[1]];
  if(selectedData.type == "spareParts"){
    taskOverview.onBtnSparePartRemoveClick();
  }else if(selectedData.type == "relatedProducts"){
    taskOverview.onBtnRelatedProductRemoveClick(selectedData);
  }
}


taskOverview.onBtnAddPhotoClick = function(){
  if (taskOverview.isReadOnly) return;
  cameraComment.reInit();
  cameraComment.previousFormId = "frmTaskOverview";
  frmCameraOverlay.show();
}


taskOverview.onBtnEditPhotoClick = function(){
  cameraComment.reInit();        
  cameraComment.btphotoId = taskOverview.btphotoId;
  cameraComment.previousFormId = "frmTaskOverview";
  frmCameraComment.show();
}


taskOverview.onSwitchAddPhotoClick = function() {
  if (taskOverview.isReadOnly) return;
  var recommendation = taskOverview.form.segReplacementArticles.focusedItem;
  if (!validationModel.isNull(recommendation) && !validationModel.isNull(recommendation.id)) {
    if( validationModel.isNull(taskOverview.btphotoPrecoId) ) {
      taskOverview.btphotoPrecoId = recommendation.id;
    } else {
      taskOverview.btphotoPrecoId = null;
    }
    btphotosModel.updatePhotoPrecoIdById(taskOverview.btphotoId, taskOverview.btphotoPrecoId);
  }
}


function clearTaskOverviewTabSkins(){
  frmTaskOverview.btnTabPrev.skin='skntabBtn';
  frmTaskOverview.btnTabFirst.skin='skntabBtn';
  frmTaskOverview.btnTabHdr1.skin='skntabBtn';
  frmTaskOverview.btnTabHdr2.skin='skntabBtn';
  frmTaskOverview.btnTabNext.skin='skntabBtn';
}
