itemRemove = {};

itemRemove.init = function(){
  var appMenu = [
    //["itemRemove.BACK", "Retour", "left.png", itemRemove.close],
    ["itemRemove.BACK", "Retour", "left.png", itemRemove.back],		//Arati:Changed code for JIRA UI-104
    ["itemRemove.VALID", "Valider", "check.png", itemRemove.onSaveClick]
  ];

  otis.application.createAppMenu("itemRemoveAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
};

//Arati:Changed code for JIRA UI-104 start here
itemRemove.back = function(){
  itemRemove.close(false, null);
};
//Arati:Changed code for JIRA UI-104 end here

itemRemove.show = function(item, source, previousForm) {

  var removalTask = articleModel.findArticleReturnCodeByItem(item);
  if(validationModel.isNull(source) || source == '') source = 'scan';
  var selectedReason = null;
  var removalReasons = [
    {
      id : null,
      code : null,
      name : "(retour sans valider)",
      name2 : "",
      isValid : false
    }
  ];

  itemRemove.preShow = function() {
    otis.application.setCurrentAppMenu("itemRemoveAppMenu");//Dhaval:Invocation of custom app menu

    frmItemRemove.lblWorkOrder.text = workOrder.getReference();
    frmItemRemove.hbWorkOrder.backgroundColor = workOrder.color;
    frmItemRemove.hbWorkOrder.focusSkin = workOrder.skin;

    var location = new Array();
    if(!validationModel.isNull(item.location) && item.location != '') location.push(item.location);
    if(!validationModel.isNull(item.floor) && item.floor != '') location.push(item.floor);
    if(!validationModel.isNull(item.placement) && item.placement != '') location.push(item.placement);

    frmItemRemove.lblName.text = (!validationModel.isNull(item.batchNumber) ? item.batchNumber + ' - ' : '') + item.name;
    frmItemRemove.lblLocation.text = location.join(' / ');
    frmItemRemove.lblProductionDate.text = dateFunctions.YearFirstToDayFirst(item.productionDate);
    frmItemRemove.chkRemovalTask.selectedKeys = null;
    frmItemRemove.chkRemovalTask.isVisible = (!validationModel.isNull(removalTask) && removalTask != '');

    var masterData = [];
    var dbReasons = taskModel.findTaskCompletionReasonsByType('Removed', workOrder, item);
    if(dbReasons.length > 0) removalReasons = dbReasons;

    for (var i = 0; i < removalReasons.length; i ++){ 
    	masterData.push([i,removalReasons[i].name]);
    }
    frmItemRemove.cbxRemovalReasons.masterData = masterData;
    if(frmItemRemove.cbxRemovalReasons.masterData.length != 0){
    frmItemRemove.cbxRemovalReasons.selectedKey = 0;
      itemRemove.onTaskCompletionReasonSelection();
    }
  }

  itemRemove.onTaskCompletionReasonSelection = function () {
    selectedReason = removalReasons[frmItemRemove.cbxRemovalReasons.selectedKey];
  }


  itemRemove.onSaveClick = function () {
    if (validationModel.isNull(selectedReason) || !selectedReason.isValid) {
      popupModel.showPopError("Un motif de suppression est obligatoire. Veuillez saisir un motif valide.");
      return;
    }

    var reasonCode = selectedReason.code;
    // Deactive the item
    itemModel.deactivateItem(item, workOrder, reasonCode);

    // Create return task if check box is selected
    if (frmItemRemove.chkRemovalTask.selectedKeys != null) {
      item.returnCode = removalTask;
      var taskRef = taskModel.createTaskByItemAndWorkOrder(item, workOrder, 'return', reasonCode);
      var task = taskModel.findTaskById(taskRef.id);
      var components = articleModel.findArticleComponentsByTasks([task], 1);
      var tarifMode = { UPC1: 'V', EUSE: 'VS' };
      var noBTCO = workOrder.typeCode == 'P'? true:false;
      sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, item, components, task, reasonCode, "nonPlannedTask", (workOrder.process == 'CHUBB'), null, null, tarifMode, noBTCO);

    }
    var itemLabel = item.name + (!validationModel.isNull(item.batchNumber) ? ' de code-barre ' + item.batchNumber : '');
    itemRemove.close(true, itemLabel);
  }

  itemRemove.close = function(valid, itemLabel) {
    if(valid) {
      if(previousForm){previousForm.show();}
      else if(source == 'scan') frmItemScan.show();
      else if (source == 'summary') frmWOSummary.show();
      else if (source == 'inventory') frmInventory.show();
    }
    else navigationModel.doReturn();

    frmItemRemove.destroy();
    if(valid) popupModel.showPopError("L'appareil " + itemLabel + " a bien été supprimé du parc.");
  }

  frmItemRemove.show();
};
