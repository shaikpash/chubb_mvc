workOrderOverview = {
  sql: null,
  WorkOrderInstructionComment: null,
  technicianList : null
};

workOrderOverview.tab = {
  info: 0,
  instructions: 1,
  tasks: 2,
  location: 3,
  contract: 4,
  contacts: 5,
  current: null,
  previous: null,
  isAlreadyDisplayed: false
}

var gblLastDropdownId;//Dhaval:Design issue 12 custom dropdown variable to store selected value
workOrderOverview.init = function(){
  initFormProcess("frmWorkOrderOverview", frmWorkOrderOverview);	//Arati: changed for design issue #19
}

//Arati: changed for design issue #19 Start here
workOrderOverview.clear = function() {
  frmWorkOrderOverview.btnTabFirst.skin='skntabBtn';
  frmWorkOrderOverview.btnTabPrev.skin='skntabBtn';
  frmWorkOrderOverview.btnTabHdr1.skin='skntabBtn';
  frmWorkOrderOverview.btnTabHdr2.skin='skntabBtn';
  frmWorkOrderOverview.btnTabNext.skin='skntabBtn';
  frmWorkOrderOverview.btnTabLast.skin='skntabBtn';
}
//Arati: changed for design issue #19 end here


workOrderOverview.setMenu= function(){
  var appMenu = [];

  if(app_parameters.lifetime.switchWorkOrder != null){
    appMenu.push(["workOrderOverview.BACK", "Retour liste Switch", "left.png", onSwitchBTBack])
  }
  
  if (sequence.current < sequence.values.drivingToClient || app_parameters.lifetime.pause_bool == true){
    appMenu.push(["workOrderOverview.BACK", "Retour", "left.png", onBackClick]);
  }

  appMenu.push(["workOrderOverview.TOOLS", "Besoin Matériel", "tools.png", onToolClick]);

  if ((sequence.current < sequence.values.drivingToClient && !workOrderModel.isTerminated(workOrder)) && app_parameters.lifetime.pause_bool == false) {
    appMenu.push(["workOrderOverview.DRIVE", "Mise en route", "car.png", workOrderOverview.onTravellClick]);
  }
  if (!workOrderModel.isTerminated(workOrder)){
    appMenu.push(["workOrderOverview.STOP", "Interruption", "stopsign.png", workOrderInterrupt.load]);
  }

  if (sequence.current > sequence.values.drivingToClient && !workOrderModel.isTerminated(workOrder) && !validationModel.isNull(workOrder.equipmentNumber) && app_parameters.lifetime.pause_bool == false && workOrder.process != 'CHUBB' && (workOrder.typeCode == 'V' ||  workOrder.typeCode == 'I' || workOrder.typeCode == 'P')) {
    appMenu.push(["workOrderOverview.SCAN", "Scanner", "barcode.png", workOrderOverview.onScanClick]);
  }

  if ((sequence.current < sequence.values.drivingToClient) || validationModel.isNull(workOrder.equipmentNumber) || !workOrderModel.isTerminated(workOrder) || app_parameters.lifetime.pause_bool == true) { //Arati:Changed code for JIRA UI-103
    appMenu.push(["workOrderOverview.SUMMARY", "Bilan", "book.png", onBookClick]);
  }
  
  if(workOrder.process == 'CHUBB' && workOrder.typeCode == 'V'){
    appMenu.push(["workOrderOverview.TASK", "Tâches", "task.png", onTaskClick]);
  }
function onTaskClick(){
  summaryService.activeTab = true;
    frmSummaryServiceChubb.show();
  }
  //Dhaval:Fix for app menu start
  function onBackClick(){
    gblLastDropdownId=null;
    frmWorkOrderOverview.ibtTabPane.cmbContacts.lblDropText.text = "Choisir contact";//Dhaval:Design issue 12
    if(kony.application.getPreviousForm().id == "e121PlanningJournalier"){
      e121PlanningJournalier.show();
    } else{
      frmWorkOrders.show();
    }
  }
  function onSwitchBTBack(){
    frmWorkOrders.show();
  }
  function onToolClick(){
    frmItemNeed.show();
  }
  function onBookClick(){
    frmWOSummary.show();
  }
  //End
  otis.application.createAppMenu("workOrderOverviewAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
  otis.application.setCurrentAppMenu("workOrderOverviewAppMenu");//Dhaval:Invocation of custom app menu
}

workOrderOverview.preShow = function () {
  if(!workOrderOverview.tab.isAlreadyDisplayed && workOrder.process == 'CHUBB'){
	workOrderOverview.tab.current = workOrderOverview.tab.instructions;
	frmWorkOrderOverview.ibtTabPane.activeTabs = [1];
    workOrderOverview.tab.isAlreadyDisplayed = true;
  }  
  
  frmWorkOrderOverview.ibtTabPane.containerHeight = 105;													//Arati:Changed code for JIRA UI-84
  frmWorkOrderOverview.ibtTabPane.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;	//Arati:Changed code for JIRA UI-84
  workOrderOverview.setMenu();

  // set same data mapping for all consigne widget
  frmWorkOrderOverview.ibtTabPane.ibtConsSegCli.widgetDataMap=
    {ibtConsSegLblClient : 'comment',
     id :'id'};
  frmWorkOrderOverview.ibtTabPane.ibtConsSegSit.widgetDataMap=
    {ibtConsSegLblSit : 'comment',
     id :'id'};
  frmWorkOrderOverview.ibtTabPane.ibtConsSegEqu.widgetDataMap=
    {ibtConsSegLblEqu : 'comment',
     id :'id'};
  frmWorkOrderOverview.ibtTabPane.ibtConsSegBT.widgetDataMap=
    {ibtConsSegLblBT : 'comment',
     id :'id'};
  frmWorkOrderOverview.ibtTabPane.ibtConsSegBesoin.widgetDataMap=
    {ibtConsSegLblBesoin : 'comment',
     id :'id'};
  frmWorkOrderOverview.ibtTabPane.ibtConsSegEchanges.widgetDataMap=
    {ibtConsSegLblEchanges : 'comment',
     id :'id'};

  workOrderOverview.tabInfoUnload();
  workOrderOverview.tabInstructionsUnload();
  workOrderOverview.tabTasksUnload();
  workOrderOverview.tabLocationUnload();
  workOrderOverview.tabContractUnload();
  workOrderOverview.tabContactUnload();

    workOrderOverview.loadTabPane();

  frmWorkOrderOverview.btnNo.skin = sknButtonNone;
  frmWorkOrderOverview.btnYes.skin = sknButtonNone;
  
  if(workOrder.statusCode >= 42 && workOrder.statusCode < 70){
    frmWorkOrderOverview.btnCallingCard.isVisible = false;
  }else{
    frmWorkOrderOverview.btnCallingCard.isVisible = false;
  }

  var isReferencesMandatory = workOrderOverview.isReferencesMandatory();
  if(isReferencesMandatory == true){
    twinkleWidget(frmWorkOrderOverview.btnYes, sknButtonOn ,sknButtonNone, frmWorkOrderOverview.id, 1);
  }else{
    frmWorkOrderOverview.btnNo.skin = sknButtonCircle;
    frmWorkOrderOverview.btnNo.setEnabled(false);
  }
  var currentAgencyId = employeeModel.findEmployeeAgencyByEmployee(workOrder.technicianAN8);
  workOrderOverview.technicianList = workOrderModel.getTechnicianNameByAgency(currentAgencyId);
  if(workOrder.statusCode >= 70){
    frmWorkOrderOverview.ibtTabPane.lblSecondTecLbl.isVisible = true;
    frmWorkOrderOverview.ibtTabPane.ibtSecondTecLbl.isVisible = false;
  }else{
    frmWorkOrderOverview.ibtTabPane.lblSecondTecLbl.isVisible = false;
    frmWorkOrderOverview.ibtTabPane.ibtSecondTecLbl.isVisible = true;
  }
  workOrderOverview.checkIfEmail();
}

  workOrderOverview.loadTabPane = function(){
    frmWorkOrderOverview.ibtTabPane.ibtClientLbl1.text = workOrder.getReference();
  frmWorkOrderOverview.ibtTabPane.ibtClientHB1.backgroundColor = workOrder.color;
  frmWorkOrderOverview.ibtTabPane.ibtClientHB1.focusSkin = workOrder.skin;

  frmWorkOrderOverview.ibtTabPane.ibtClientLbl1.text = workOrder.getReference();
  frmWorkOrderOverview.ibtTabPane.ibtClientHB1.backgroundColor = workOrder.color;
  frmWorkOrderOverview.ibtTabPane.ibtClientHB1.focusSkin = workOrder.skin;

  frmWorkOrderOverview.ibtTabPane.ibtClientLbl2.text = workOrder.getReference();
  frmWorkOrderOverview.ibtTabPane.ibtClientHB2.backgroundColor = workOrder.color;
  frmWorkOrderOverview.ibtTabPane.ibtClientHB2.focusSkin = workOrder.skin;

  frmWorkOrderOverview.ibtTabPane.ibtClientLbl3.text = workOrder.getReference();
  frmWorkOrderOverview.ibtTabPane.ibtClientHB3.backgroundColor = workOrder.color;
  frmWorkOrderOverview.ibtTabPane.ibtClientHB3.focusSkin = workOrder.skin;

  frmWorkOrderOverview.ibtTabPane.ibtClientLbl4.text = workOrder.getReference();
  frmWorkOrderOverview.ibtTabPane.ibtClientHB4.backgroundColor = workOrder.color;
  frmWorkOrderOverview.ibtTabPane.ibtClientHB4.focusSkin = workOrder.skin;

  frmWorkOrderOverview.ibtTabPane.ibtClientLbl5.text = workOrder.getReference();
  frmWorkOrderOverview.ibtTabPane.ibtClientHB5.backgroundColor = workOrder.color;
  frmWorkOrderOverview.ibtTabPane.ibtClientHB5.focusSkin = workOrder.skin;

  frmWorkOrderOverview.ibtTabPane.ibtClientLbl6.text = workOrder.getReference();
  frmWorkOrderOverview.ibtTabPane.ibtClientHB6.backgroundColor = workOrder.color;
  frmWorkOrderOverview.ibtTabPane.ibtClientHB6.focusSkin = workOrder.skin;
  }

workOrderOverview.checkIfEmail = function(){
  if(frmWorkOrderOverview.ibtTabPane.txtEmailAddress.text == "" || frmWorkOrderOverview.ibtTabPane.txtEmailAddress.text == " "){
		frmWorkOrderOverview.ibtTabPane.vBoxSendMail.isVisible = false;
  }else{
		frmWorkOrderOverview.ibtTabPane.vBoxSendMail.isVisible = true;}
}


workOrderOverview.isReferencesMandatory = function(){
  var cust = customerModel.findCustomerByWorkOrder(workOrder);
  if((cust.purchaseordermandatory == 'T' && (workOrder.typeCode == "V" || workOrder.typeCode == "I")) ||
    (cust.purchaseordermandatory == 'S' && workOrder.typeCode == "V") ||
    (cust.purchaseordermandatory == 'I' && workOrder.typeCode == "I")){
    return true;
  }else{
    return false;
  }

}

workOrderOverview.postShow = function () {
  workOrderOverview.onTabChange(workOrderOverview.tab.current);

}

workOrderOverview.onTabChange = function (tabIndex) {

  workOrderOverview.tab.previous = workOrderOverview.tab.current;
  workOrderOverview.tab.current = tabIndex;
  //Arati: changed for design issue #19 Start here
  workOrderOverview.clear();
  if(tabIndex == 0){
    frmWorkOrderOverview.btnTabFirst.skin='sknTabBtnFoc';
  } else if(tabIndex == 1){
    frmWorkOrderOverview.btnTabPrev.skin='sknTabBtnFoc';
  } else if(tabIndex == 2){
    frmWorkOrderOverview.btnTabHdr1.skin='sknTabBtnFoc';
  } else if(tabIndex == 3){
    frmWorkOrderOverview.btnTabHdr2.skin='sknTabBtnFoc';
  } else if(tabIndex == 4){
    frmWorkOrderOverview.btnTabNext.skin='sknTabBtnFoc';
  } else if(tabIndex == 5){
    frmWorkOrderOverview.btnTabLast.skin='sknTabBtnFoc';
  }
  //Arati: changed for design issue #19 end here

  // load the current tab
  switch (workOrderOverview.tab.current){
    case workOrderOverview.tab.info :
      workOrderOverview.tabInfoLoad();
      break;
    case workOrderOverview.tab.instructions :
      workOrderOverview.tabInstructionsLoad();
      break;
    case workOrderOverview.tab.tasks :
      workOrderOverview.tabTasksLoad();
      break;
    case workOrderOverview.tab.location :
      workOrderOverview.tabLocationLoad();
      break;
    case workOrderOverview.tab.contract :
      workOrderOverview.tabContractLoad();
      break;
    case workOrderOverview.tab.contacts :
      workOrderOverview.tabContactLoad();
      break;
  }

  // unload the previous tab
  if (workOrderOverview.tab.previous != workOrderOverview.tab.current) {
    switch (workOrderOverview.tab.previous){
      case workOrderOverview.tab.info :
        workOrderOverview.tabInfoUnload();
        break;
      case workOrderOverview.tab.instructions :
        workOrderOverview.tabInstructionsUnload();
        break;
      case workOrderOverview.tab.tasks :
        workOrderOverview.tabTasksUnload();
        break;
      case workOrderOverview.tab.location :
        workOrderOverview.tabLocationUnload();
        break;
      case workOrderOverview.tab.contract :
        workOrderOverview.tabContractUnload();
        break;
      case workOrderOverview.tab.contacts :
        workOrderOverview.tabContactUnload();
        break;
    }
  }
}


workOrderOverview.planningBtnClicked = function(){
  e121PlanningJournalier.show();
}

workOrderOverview.tabInfoLoad = function () {
  var priorityDelay = "";
  if (workOrder.typeCode == 'I' && !validationModel.isNull(workOrder.delay)) priorityDelay = workOrder.delay;
  else if (workOrder.typeCode != 'I' && !validationModel.isNull(workOrder.certifications)) priorityDelay = workOrder.certifications;
  else if (workOrder.typeCode == 'V' && !validationModel.isNull(workOrder.priority)){ priorityDelay = workOrder.priority; }

  var visitLbl = workOrderModel.getVisitTypeByDoco(workOrder.doco);

  function setData(key, value, action) {
    return {
      'ibtInfoKey' : key,
      'ibtInfoValue' : value,
      'VBValue' : action
    };
  }

  var rdvAction = (!workOrderModel.isTerminated(workOrder) || app_parameters.lifetime.pause_bool==true) ?
      {
        skin : 'sknVBBtnSquare',
        focusSkin : 'sknVBBtnFocusSquare',
        onClick : showWOGroup
      } :
  {	skin : 'myVBNorm',
   focusSkin : 'myVBNorm',
   onClick : null
  };

  function showWOGroup(){//Dhaval:Fix for RDV Client button not working
    //frmWOGrouping.destroy();
    frmWOGrouping.show();
  }
  var clientRDV = "À planifier";

  if(!validationModel.isNull(workOrder.dateStarted) && !validationModel.isNull(workOrder.timeRequested)) {
    clientRDV = datePrintCustom(dateFromsql(workOrder.dateStarted + " " + workOrder.timeRequested),	"dd/MM/yyyy - hh:mm", false);
  }

  var lastCheckDate = validationModel.isNull(workOrder.lastCheck) ? '' : datePrintCustom(new Date(workOrder.lastCheck), "dd/MM/yyyy");

  var statusLbl = workOrder.status;
  if(workOrder.statusCode == 70 || workOrder.statusCode == "70")
  {
    var HoursAndDate = workOrderModel.getDateAndHoursOfBTEnd(workOrder);
    var dateEnd = HoursAndDate.STRX.split("-")[2]+"/"+HoursAndDate.STRX.split("-")[1]+"/"+HoursAndDate.STRX.split("-")[0];
    var hoursEnd;
    if(isNaN(new Date(HoursAndDate.TMCO)) == true){
      hoursEnd = HoursAndDate.STRX+"T"+HoursAndDate.TMCO;
    }else{
      hoursEnd = HoursAndDate.TMCO;
    }
    hoursEnd = hoursEnd.split("T")[1].split(":")[0]+":"+hoursEnd.split("T")[1].split(":")[1]
    if(HoursAndDate != false){
      var statusLbl = workOrder.status+"\n le "+dateEnd+" à "+ hoursEnd;
    }
  }
  //10779958
  var masterData = [
    setData('Equipement',(validationModel.isNull(workOrder.equipmentType) ? '' : workOrder.equipmentType)),
    setData('Type de BT', (validationModel.isNull(workOrder.type) ? '' : workOrder.type)),
    setData((validationModel.isNull(visitLbl) ? '' : 'Type de visite'),(validationModel.isNull(visitLbl) ? '' : visitLbl)),
    setData((validationModel.isNull(workOrder.lastCheck) ? '' : 'Dernière vérification'),lastCheckDate),
    setData('Statut', (validationModel.isNull(workOrder.status) ? '' : statusLbl)),
    setData('Date pivot',datePrintCustom(new Date(workOrder.dateRequested), "dd/MM/yyyy")),
    setData('RDV Client',clientRDV, rdvAction),
    setData('Durée estimée',(validationModel.isNull(workOrder.duration) ? '' : dateFunctions.formatDuration(workOrder.duration * 3600,false))),
    setData('Délai / Certif.',priorityDelay)
  ];
  //alert("MasterData:"+JSON.stringify(masterData));
  frmWorkOrderOverview.ibtTabPane.ibtInfoSeg.removeAll();
  frmWorkOrderOverview.ibtTabPane.ibtInfoSeg.setData(masterData);

  if (workOrder.typeCode == 'V' && !validationModel.isNull(workOrder.dateRequested) && !validationModel.isNull(workOrder.chapter)) {
    var monthDifference = (workOrder.chapter == '001') ? 2 : 1;
    var dateRequested = new Date(workOrder.dateRequested);
    var startLimitDate = datePrintCustom(dateFunctions.addMonthsToDate(new Date(workOrder.dateRequested),(monthDifference * -1)), "dd/MM/yyyy");
    var endLimitDate = datePrintCustom(dateFunctions.addMonthsToDate(new Date(workOrder.dateRequested),monthDifference), "dd/MM/yyyy");
    frmWorkOrderOverview.ibtTabPane.lblStartLimit.text = startLimitDate;
    frmWorkOrderOverview.ibtTabPane.lblEndLimit.text = endLimitDate;
    frmWorkOrderOverview.ibtTabPane.lblLimits.isVisible = true;
    frmWorkOrderOverview.ibtTabPane.lnLimits.isVisible = true;
  } else if (workOrder.typeCode == 'I' && !validationModel.isNull(workOrder.interventionDateLimit)) {
    frmWorkOrderOverview.ibtTabPane.lblStartLimit.text = datePrintCustom(new Date(workOrder.interventionDateLimit), "dd/MM/yyyy");
    var endlimit = (!validationModel.isNull(workOrder.interventionHourLimit)) ? workOrder.interventionHourLimit : "";
    var splitendlimit = endlimit.split("T");
    if(splitendlimit.length>0){
      splitendlimit = splitendlimit[1].split("+");
      splitendlimit = splitendlimit[0];
      endlimit = splitendlimit;
    }
    frmWorkOrderOverview.ibtTabPane.lblEndLimit.text = endlimit;
    frmWorkOrderOverview.ibtTabPane.lblLimits.isVisible = true;
    frmWorkOrderOverview.ibtTabPane.lnLimits.isVisible = true;
  } else {
    frmWorkOrderOverview.ibtTabPane.lblStartLimit.text = "";
    frmWorkOrderOverview.ibtTabPane.lblEndLimit.text = "";
    frmWorkOrderOverview.ibtTabPane.lblLimits.isVisible = false;
    frmWorkOrderOverview.ibtTabPane.lnLimits.isVisible = false;
  }
}

workOrderOverview.tabInfoUnload = function () {
  frmWorkOrderOverview.ibtTabPane.ibtInfoSeg.setData([
    {	'ibtInfoKey' : 'Equipement','ibtInfoValue' : ''},
    {	'ibtInfoKey' : 'Type de BT','ibtInfoValue' : ''},
    {	'ibtInfoKey' : 'Statut','ibtInfoValue' : ''},
    {	'ibtInfoKey' : 'Date pivot','ibtInfoValue' : ''},
    {	'ibtInfoKey' : 'Date de RDV','ibtInfoValue' : ''},
    {	'ibtInfoKey' : 'Durée estsimée','ibtInfoValue' : ''},
    {	'ibtInfoKey' : 'Délai / Certif.','ibtInfoValue' : ''}
  ]);

  frmWorkOrderOverview.ibtTabPane.lblLimits.isVisible = false;
  frmWorkOrderOverview.ibtTabPane.lblStartLimit.text = "";
  frmWorkOrderOverview.ibtTabPane.lblEndLimit.text = "";
}

workOrderOverview.tabInstructionsLoad = function () {
  var workOrderInstructions = workOrderModel.findWorkOrderInstructionsByWorkOrder(workOrder);
  var workOrderItemRequirements = workOrderModel.findWorkOrderItemRequirementsByWorkOrder(workOrder);
  if (!workOrderModel.isTerminated(workOrder)){
    frmWorkOrderOverview.ibtTabPane.VBSiteConsAdd.isVisible = true;
    frmWorkOrderOverview.ibtTabPane.VBEquConsAdd.isVisible = true;
  }else{
    frmWorkOrderOverview.ibtTabPane.VBSiteConsAdd.isVisible = false;
    frmWorkOrderOverview.ibtTabPane.VBEquConsAdd.isVisible = false;
  }

  if (!validationModel.isNull(workOrderInstructions)) {
    frmWorkOrderOverview.ibtTabPane.ibtConsSegCli.setData(workOrderInstructions.client);
    frmWorkOrderOverview.ibtTabPane.ibtConsSegCli.isVisible =
      workOrderInstructions.client.length != 0;
    frmWorkOrderOverview.ibtTabPane.ibtConsSegSit.setData(workOrderInstructions.location);
    frmWorkOrderOverview.ibtTabPane.ibtConsSegSit.isVisible =
      workOrderInstructions.location.length != 0;
    frmWorkOrderOverview.ibtTabPane.ibtConsSegEqu.setData(workOrderInstructions.equipment);
    frmWorkOrderOverview.ibtTabPane.ibtConsSegEqu.isVisible =
      workOrderInstructions.equipment.length != 0;
    frmWorkOrderOverview.ibtTabPane.ibtConsSegBT.setData(workOrderInstructions.workOrder);
    frmWorkOrderOverview.ibtTabPane.ibtConsSegEchanges.isVisible =
      workOrderInstructions.echanges.length != 0;
    frmWorkOrderOverview.ibtTabPane.ibtConsSegEchanges.setData(workOrderInstructions.echanges);
    
    //frmWorkOrderOverview.ibtTabPane.ibtConsSegBT.isVisible = workOrderInstructions.workOrder.length != 0;	//Arati:seg removed to add text area to edit or add the comment
  }

  if (!validationModel.isNull(workOrderItemRequirements) && workOrderItemRequirements.length > 0) {
    frmWorkOrderOverview.ibtTabPane.ibtConsignNeedLbl.isVisible = true;
    frmWorkOrderOverview.ibtTabPane.ibtConsSegBesoin.setData(workOrderItemRequirements);
  } else {
    frmWorkOrderOverview.ibtTabPane.ibtConsignNeedLbl.isVisible = false;
  }

 
    frmWorkOrderOverview.ibtTabPane.ibtsectec.isVisible = true;
   if (!validationModel.isNull(workOrder.secondTechnician) && workOrder.secondTechnician.length > 0){
    frmWorkOrderOverview.ibtTabPane.ibtSecondTecLbl.text = workOrder.secondTechnician;
     frmWorkOrderOverview.ibtTabPane.lblSecondTecLbl.text = workOrder.secondTechnician;
   }else{
     frmWorkOrderOverview.ibtTabPane.ibtSecondTecLbl.text = "Pas de second technicien";
     frmWorkOrderOverview.ibtTabPane.lblSecondTecLbl.text = "Pas de second technicien";
   }
  
  if(workOrder.statusCode >= 70){
    frmWorkOrderOverview.ibtTabPane.lblSecondTecLbl.isVisible = true;
    frmWorkOrderOverview.ibtTabPane.ibtSecondTecLbl.isVisible = false;
  }else{
    frmWorkOrderOverview.ibtTabPane.lblSecondTecLbl.isVisible = false;
    frmWorkOrderOverview.ibtTabPane.ibtSecondTecLbl.isVisible = true;
  }
 
  //Arati:Changed code for UI-116 Start here
  if(!validationModel.isNull(workOrderInstructions.workOrder) &&  workOrderInstructions.workOrder.length != 0){
      frmWorkOrderOverview.ibtTabPane.ibtConsignTab.txtComment.text = workOrderInstructions.workOrder[0].comment;
    }

  if((workOrder.process == "CHUBB" && workOrder.typeCode == 'I') || (workOrder.typeCode == 'G' || workOrder.typeCode == 'S') && workOrder.statusCode < 70){
    frmWorkOrderOverview.ibtTabPane.ibtConsignTab.ibtConsSegBT.isVisible = false;
    frmWorkOrderOverview.ibtTabPane.ibtConsignTab.txtComment.isVisible = true;
    frmWorkOrderOverview.ibtTabPane.ibtConsignTab.txtComment.setEnabled(true);
    frmWorkOrderOverview.ibtTabPane.ibtConsignTab.label68508322190159.text = "Consignes BT (éditable)";
  } else {
    frmWorkOrderOverview.ibtTabPane.ibtConsignTab.ibtConsSegBT.isVisible = true;
    frmWorkOrderOverview.ibtTabPane.ibtConsignTab.txtComment.isVisible = false;
    frmWorkOrderOverview.ibtTabPane.ibtConsignTab.txtComment.setEnabled(false);
    frmWorkOrderOverview.ibtTabPane.ibtConsignTab.label68508322190159.text = "Consignes BT";
  }
}
//If workOrder type is either 'G' or 'S' or 'I' and workOrder status is strictly below 70 then text box can be edited
workOrderOverview.onCommentChange = function() {
  var workOrderInstructions = workOrderModel.findWorkOrderInstructionsByWorkOrder(workOrder);

  if(!validationModel.isNull(workOrderInstructions.workOrder) && workOrderInstructions.workOrder.length != 0) {
    var remark = {
      id: workOrderInstructions.workOrder[0].id,
      doco: workOrder.doco,
      comment: frmWorkOrderOverview.ibtTabPane.ibtConsignTab.txtComment.text
    };
    remarkModel.updateRemark(remark);
    workOrderOverview.WorkOrderInstructionComment = frmWorkOrderOverview.ibtTabPane.ibtConsignTab.txtComment.text;
  }else {
    var remark = remarkModel.createRemarkByWorkOrder(workOrder, frmWorkOrderOverview.ibtTabPane.ibtConsignTab.txtComment.text);
    workOrderOverview.WorkOrderInstructionComment = frmWorkOrderOverview.ibtTabPane.ibtConsignTab.txtComment.text;
  }
};
//Arati:Changed code for UI-116 end here

workOrderOverview.tabInstructionsUnload = function () {
  frmWorkOrderOverview.ibtTabPane.ibtConsSegCli.removeAll();
  frmWorkOrderOverview.ibtTabPane.ibtConsSegSit.removeAll();
  frmWorkOrderOverview.ibtTabPane.ibtConsSegEqu.removeAll();
  frmWorkOrderOverview.ibtTabPane.ibtConsSegBT.removeAll();
  frmWorkOrderOverview.ibtTabPane.ibtConsignNeedLbl.isVisible = false;
  frmWorkOrderOverview.ibtTabPane.ibtConsSegBesoin.removeAll();
  frmWorkOrderOverview.ibtTabPane.ibtsectec.isVisible = false;
  if(workOrder.statusCode >= 70){
    frmWorkOrderOverview.ibtTabPane.lblSecondTecLbl.isVisible = true;
    frmWorkOrderOverview.ibtTabPane.ibtSecondTecLbl.isVisible = false;
  }else{
    frmWorkOrderOverview.ibtTabPane.lblSecondTecLbl.isVisible = false;
    frmWorkOrderOverview.ibtTabPane.ibtSecondTecLbl.isVisible = true;
  }
  //frmWorkOrderOverview.ibtTabPane.ibtConsignTab.txtComment.setEnabled(true);
  frmWorkOrderOverview.ibtTabPane.ibtConsignTab.txtComment.text = "";
}

workOrderOverview.tabTasksLoad = function () {

  var whereClause = " COALESCE(dt.SOURCE, 'NULL') in ('NULL', 'TPJ', 'TPK') " +
      "and item.PRP0 in (select KY from udc where sy = '41' and rt = '05' and SPHD in ('2','3')) ";
  var workOrderTasks = taskModel.findTasksSummaryByWorkOrder(workOrder, whereClause);

  if (workOrderTasks.length > 0) {
    var tasks = [];

    for (var i = 0; i < workOrderTasks.length; i++) {
      tasks[i] = {};
      tasks[i].lblTaskName = workOrderTasks[i].cnt + " " + workOrderTasks[i].description1;
      tasks[i].KY = workOrderTasks[i].KY;
    }

    frmWorkOrderOverview.ibtTabPane.segTasks.setData(tasks);
  }
}

workOrderOverview.tabTasksUnload = function () {
  frmWorkOrderOverview.ibtTabPane.segTasks.removeAll();
}

workOrderOverview.onTaskSelection = function (currentindex) {
  workOrder.task = frmWorkOrderOverview.ibtTabPane.segTasks.data[currentindex];
  frmTaskDetail.show();
}

workOrderOverview.tabLocationLoad = function () {
  var workOrderLocation = workOrderModel.findWorkOrderLocationByWorkOrder(workOrder);
  frmWorkOrderOverview.ibtTabPane.lblSiteIdValue.text = validationModel.isNull(workOrder.siteAN8) ? "Inconnu" : workOrder.siteAN8;

  var db_line = global.db.queryLine(
    "select s.MLNM " +
    "from SubSite as s " +
    "join F56BT bt on s.AN8 = bt.SAID and s.IDLN = bt.URRF " +
    "where bt.DOCO = " + workOrder.doco + " limit 1"
  );
  frmWorkOrderOverview.ibtTabPane.lblSubSiteValue.text = !unitec.lang.isNull(db_line) ? db_line.MLNM : "Aucun";

  if (!validationModel.isNull(workOrderLocation)) {
    frmWorkOrderOverview.ibtTabPane.lblCustomerAddress.text = "";
    frmWorkOrderOverview.ibtTabPane.lblCommercial.text = "";
    frmWorkOrderOverview.ibtTabPane.lblCommercialPhone.text = "";
    frmWorkOrderOverview.ibtTabPane.lblEquipmentNumber.text = validationModel.isNull(workOrderLocation.equN) ? "Pas d'équipement associé" : workOrderLocation.equN;

    if (!validationModel.isNull(workOrderLocation.corporatenameadd)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerAddress.text += workOrderLocation.corporatenameadd + "\n";
    }
    if (!validationModel.isNull(workOrderLocation.address1)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerAddress.text += workOrderLocation.address1 + "\n";
    }
    if (!validationModel.isNull(workOrderLocation.address2)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerAddress.text += workOrderLocation.address2 + "\n";
    }
    if (!validationModel.isNull(workOrderLocation.address3)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerAddress.text += workOrderLocation.address3 + "\n";
    }
    if (!validationModel.isNull(workOrderLocation.zipcode) && !validationModel.isNull(workOrderLocation.city)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerAddress.text += workOrderLocation.zipcode + " " + workOrderLocation.city;
    } else {
      if (!validationModel.isNull(workOrderLocation.zipcode)) {
        frmWorkOrderOverview.ibtTabPane.lblCustomerAddress.text += workOrderLocation.zipcode;
      }
      if (!validationModel.isNull(workOrderLocation.city)) {
        frmWorkOrderOverview.ibtTabPane.lblCustomerAddress.text += workOrderLocation.city;
      }
    }
    if (!validationModel.isNull(workOrderLocation.internalname)) {
      frmWorkOrderOverview.ibtTabPane.lblCommercial.text = workOrderLocation.internalname;
    } else {
      frmWorkOrderOverview.ibtTabPane.lblCommercial.text = "Pas de commercial affecté";
    }
    if (!validationModel.isNull(workOrderLocation.mobile)) {
      frmWorkOrderOverview.ibtTabPane.lblCommercialPhone.text = workOrderLocation.mobile;
    } else {
      frmWorkOrderOverview.ibtTabPane.lblCommercialPhone.text = "Pas de numéro de mobile connu";
    }
  } else {
    frmWorkOrderOverview.ibtTabPane.lblCustomerAddress.text = "inconnu";
    frmWorkOrderOverview.ibtTabPane.lblCommercial.text = "inconnu";
  }
  
  var workOrderCustomer = workOrderModel.findWorkOrderCustomerByWorkOrder(workOrder);
  
  if (!validationModel.isNull(workOrderCustomer)) {
    frmWorkOrderOverview.ibtTabPane.lblCustomerNameAddressValue.text = "";
    frmWorkOrderOverview.ibtTabPane.lblCustomerIdValue.text = "";
    frmWorkOrderOverview.ibtTabPane.lblCustomerCommercialNameValue.text = "";
    frmWorkOrderOverview.ibtTabPane.lblCustomerCommercialPhoneValue.text = "";
    frmWorkOrderOverview.ibtTabPane.lblCustomerContractNumberValue.text = "";

    if (!validationModel.isNull(workOrderCustomer.corporatenameadd)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerNameAddressValue.text += workOrderCustomer.corporatenameadd + "\n";
    }
    if (!validationModel.isNull(workOrderCustomer.address1)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerNameAddressValue.text += workOrderCustomer.address1 + "\n";
    }
    if (!validationModel.isNull(workOrderCustomer.address2)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerNameAddressValue.text += workOrderCustomer.address2 + "\n";
    }
    if (!validationModel.isNull(workOrderCustomer.address3)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerNameAddressValue.text += workOrderCustomer.address3 + "\n";
    }
    if (!validationModel.isNull(workOrderCustomer.zipcode) && !validationModel.isNull(workOrderCustomer.city)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerNameAddressValue.text += workOrderCustomer.zipcode + " " + workOrderCustomer.city;
    } else {
      if (!validationModel.isNull(workOrderCustomer.zipcode)) {
        frmWorkOrderOverview.ibtTabPane.lblCustomerNameAddressValue.text += workOrderCustomer.zipcode;
      }
      if (!validationModel.isNull(workOrderCustomer.city)) {
        frmWorkOrderOverview.ibtTabPane.lblCustomerNameAddressValue.text += workOrderCustomer.city;
      }
    }  
    
    frmWorkOrderOverview.ibtTabPane.lblCustomerIdValue.text = workOrderCustomer.AN8;

    if (!validationModel.isNull(workOrderCustomer.internalname)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerCommercialNameValue.text = workOrderCustomer.internalname;
    } else {
      frmWorkOrderOverview.ibtTabPane.lblCustomerCommercialNameValue.text = "Pas de commercial affecté";
    }
    if (!validationModel.isNull(workOrderCustomer.mobile)) {
      frmWorkOrderOverview.ibtTabPane.lblCustomerCommercialPhoneValue.text = workOrderCustomer.mobile;
    } else {
      frmWorkOrderOverview.ibtTabPane.lblCustomerCommercialPhoneValue.text = "Pas de numéro de mobile connu";
    }    
    
    frmWorkOrderOverview.ibtTabPane.lblCustomerContractNumberValue.text = (!validationModel.isNull(workOrderCustomer.CPGP)) ? workOrderCustomer.CPGP : "Pas de numéro de contrat tarifaire connu";
    
  } else {
    frmWorkOrderOverview.ibtTabPane.lblCustomerNameAddressValue.text = "inconnu";
    frmWorkOrderOverview.ibtTabPane.lblCustomerIdValue.text = "inconnu";
    frmWorkOrderOverview.ibtTabPane.lblCustomerCommercialNameValue.text = "inconnu";
    frmWorkOrderOverview.ibtTabPane.lblCustomerCommercialPhoneValue.text = "inconnu";
    frmWorkOrderOverview.ibtTabPane.lblCustomerContractNumberValue.text = "inconnu";
  }  
}

workOrderOverview.tabLocationUnload = function () {
  frmWorkOrderOverview.ibtTabPane.lblCustomerAddress.text = "";
  frmWorkOrderOverview.ibtTabPane.lblCommercial.text = "";
  frmWorkOrderOverview.ibtTabPane.lblCommercialPhone.text = "";
  frmWorkOrderOverview.ibtTabPane.lblEquipmentNumber.text = "";
  
  frmWorkOrderOverview.ibtTabPane.lblCustomerNameAddressValue.text = "";
  frmWorkOrderOverview.ibtTabPane.lblCustomerIdValue.text = "";
  frmWorkOrderOverview.ibtTabPane.lblCustomerCommercialNameValue.text = "";
  frmWorkOrderOverview.ibtTabPane.lblCustomerCommercialPhoneValue.text = "";
  frmWorkOrderOverview.ibtTabPane.lblCustomerContractNumberValue.text = "";
}

workOrderOverview.tabCustomerLoad = function () {

}

workOrderOverview.tabContractLoad = function () {
  var workOrderContract = workOrderModel.findWorkOrderContractByWorkOrder(workOrder);
  var segContractDetailMasterData = [];
  if (!validationModel.isNull(workOrderContract)) {
    var type = {
      lblContractDetailHeader : { text : 'Type de contrat' },
      lblContractDetailValue : { text : validationModel.isNull(workOrderContract.type) ? 'Non renseigné' : workOrderContract.type }
    };
    var contractDate = {
      lblContractDetailHeader : { text : "Date d'expiration" },
      lblContractDetailValue : { text : datePrintCustom(new Date(workOrderContract.expDate), "dd/MM/yyyy") }
    };
    var numb = {
      lblContractDetailHeader : { text : "N° de contrat" },
      lblContractDetailValue : { text : workOrderContract.num }
    };
    var visites = {
      lblContractDetailHeader : { text : "Nombre de visites annuelles" },
      lblContractDetailValue : { text : validationModel.isNull(workOrderContract.nbvisit) ? 'Non renseigné' : workOrderContract.nbvisit }
    };
    var options = {
      lblContractDetailHeader : { text : "Options du contrat" },
      lblContractDetailValue : { text : validationModel.isNull(workOrderContract.options) ? 'Non renseigné' : workOrderContract.options.split(",").join("\n") }
    };
    var delay = {
      lblContractDetailHeader : {text : "Délai d'intervention"},
      lblContractDetailValue : {text : validationModel.isNull(workOrderContract.interventionDelay) ? 'Non renseigné' : workOrderContract.interventionDelay}
    };
    segContractDetailMasterData.push(type,contractDate,numb,visites,options,delay);
    //		frmWorkOrderOverview.ibtTabPane.ibtContracttypelbl.text = validationModel.isNull(workOrderContract.type) ? '' : workOrderContract.type;
    //		frmWorkOrderOverview.ibtTabPane.ibtContractdatelbl.text = datePrintCustom(new Date(workOrderContract.expDate), "dd/MM/yyyy");
    //		frmWorkOrderOverview.ibtTabPane.ibtContractNumblbl.text = workOrderContract.num;
    //		frmWorkOrderOverview.ibtTabPane.ibtContractvisitlbl.text = validationModel.isNull(workOrderContract.nbvisit) ? 'Non renseigné' : workOrderContract.nbvisit;
    //		frmWorkOrderOverview.ibtTabPane.ibtContractOptions.text = validationModel.isNull(workOrderContract.options) ? 'Non renseigné' : workOrderContract.options.split(",").join("\n");
    //		frmWorkOrderOverview.ibtTabPane.ibtContractDelaylbl.text = validationModel.isNull(workOrderContract.interventionDelay) ? '' : workOrderContract.interventionDelay;
  }
  else {
    var defaultLine = {
      lblContractDetailHeader : {text : "Pas de contrat trouvé pour ce site."},
      lblContractDetailValue : {text : ''}
    };
    segContractDetailMasterData.push(defaultLine);
    //		frmWorkOrderOverview.ibtTabPane.ibtContracttypelbl.text = "Pas de contrat trouvé pour ce site";
  }
  frmWorkOrderOverview.ibtTabPane.segContractDetails.setData(segContractDetailMasterData);
}

workOrderOverview.tabContractUnload = function () {
  frmWorkOrderOverview.ibtTabPane.ibtContracttypelbl.text = "";
  frmWorkOrderOverview.ibtTabPane.ibtContractdatelbl.text = "";
  frmWorkOrderOverview.ibtTabPane.ibtContractNumblbl.text = "";
  frmWorkOrderOverview.ibtTabPane.ibtContractvisitlbl.text = "";
  frmWorkOrderOverview.ibtTabPane.ibtContractOptions.text = "";
  frmWorkOrderOverview.ibtTabPane.ibtContractDelaylbl.text = "";
}

workOrderOverview.tabContactLoad = function () {
  workOrderOverview.tabContactUnload(true);
  workOrderOverview.defaultContact = contactModel.findDefaultTypeAndContactForWorkOrder(workOrder);

  var contactTypes = contactModel.findContactTypesByWorkOrder(workOrder);
  frmWorkOrderOverview.ibtTabPane.cmbFonctions.masterData = contactTypes;
  frmWorkOrderOverview.ibtTabPane.btnCompletedByPhone.isVisible = workOrderModel.CanBeCheckedByPhone(workOrder);

  if (!validationModel.isNull(workOrderOverview.defaultContact.typeCode)){
    frmWorkOrderOverview.ibtTabPane.cmbFonctions.selectedKey = workOrderOverview.defaultContact.typeCode;
  } else {
    frmWorkOrderOverview.ibtTabPane.cmbFonctions.selectedKey = frmWorkOrderOverview.ibtTabPane.cmbFonctions.masterData[0][0];
  }

  workOrderOverview.onContactTypeSelection();
}

workOrderOverview.tabContactUnload = function (full) {
  if(full) {
    frmWorkOrderOverview.ibtTabPane.cmbFonctions.masterData = [["NONE", "Choisir Type de contact"]];
    frmWorkOrderOverview.ibtTabPane.cmbFonctions.selectedKey = 'NONE';
    frmWorkOrderOverview.ibtTabPane.cmbContacts.masterData = [];
    frmWorkOrderOverview.ibtTabPane.cmbContacts.lblDropText.text = "Choisir contact";//Dhaval:Design issue 12
    workOrderOverview.defaultContact = {typeCode: "NONE", contactId: "NONE"};
  }
  frmWorkOrderOverview.ibtTabPane.txtFaxNumber.text = " ";
  frmWorkOrderOverview.ibtTabPane.txtEmailAddress.text = " ";
  frmWorkOrderOverview.ibtTabPane.txtMobileNumber.text = " ";
  frmWorkOrderOverview.ibtTabPane.txtPhonenumber.text = " ";
  frmWorkOrderOverview.ibtTabPane.txtFonction.text = " ";
  frmWorkOrderOverview.ibtTabPane.btnCompletedByPhone.isVisible = false;//(workOrder.typeCode == 'I');
}
//Dhaval:Design issue 12 multiple changes in below function
workOrderOverview.onContactTypeSelection = function () {

  var baseVals = [{id:"NONE", listChLabel:"Choisir contact"},{id:"-1", listChLabel:"(Nouveau contact)"}];
  var contactFunction = frmWorkOrderOverview.ibtTabPane.cmbFonctions.selectedKey;
  if(validationModel.isNull(contactFunction)) {
    frmWorkOrderOverview.ibtTabPane.cmbFonctions.selectedKey = 'NONE';
    contactFunction = frmWorkOrderOverview.ibtTabPane.cmbFonctions.selectedKey;
  }
    
  if (contactFunction == "NONE") {
    //frmWorkOrderOverview.ibtTabPane.cmbContacts.masterData = baseVals;
    popCustomDropDown.listChSeg.data = baseVals;
    popCustomDropDown.listChSeg.selectedRowIndex=[0,1];
    frmWorkOrderOverview.ibtTabPane.cmbContacts.lblDropText.text = "Choisir contact";
    //frmWorkOrderOverview.ibtTabPane.cmbContacts.selectedKey = "NONE";
  }
  else {

    workOrder.contacts = contactModel.findContactsByWorkOrderAndTypeCode (workOrder, contactFunction);
    var cmbContactsMasterData = baseVals;

    if (!validationModel.isNull(workOrder.contacts) && workOrder.contacts.length > 0) {
      for (var i = 0; i < workOrder.contacts.length; i++) {
        var contact = workOrder.contacts[i];
        var name = contact.lastName.toUpperCase() + ' ' + contact.firstName.toUpperCase();
        name = contact.title + ' ' + putToLine(name,30);
        cmbContactsMasterData.push({id:i, listChLabel:name});
      }
    }
    //frmWorkOrderOverview.ibtTabPane.cmbContacts.masterData = cmbContactsMasterData;
    popCustomDropDown.listChSeg.data=cmbContactsMasterData;
    if(workOrderOverview.defaultContact.contactId != "NONE" && workOrderOverview.defaultContact.typeCode == contactFunction){

      var defaultContactKY = de.itgs.javascript.Array.find(workOrder.contacts,
                                                           function(c){
        return c.id == workOrderOverview.defaultContact.contactId;
      }
                                                          );

      //frmWorkOrderOverview.ibtTabPane.cmbContacts.selectedKey = defaultContactKY;
      frmWorkOrderOverview.ibtTabPane.cmbContacts.lblDropText.text = popCustomDropDown.listChSeg.data[defaultContactKY+2].listChLabel;
      popCustomDropDown.listChSeg.selectedRowIndex=[0,defaultContactKY+2];
    }else if (workOrder.contacts.length == 1){
      //frmWorkOrderOverview.ibtTabPane.cmbContacts.selectedKey = 0;
      popCustomDropDown.listChSeg.selectedRowIndex = [0,3];
    }else{
      //frmWorkOrderOverview.ibtTabPane.cmbContacts.selectedKey = "NONE";
      popCustomDropDown.listChSeg.selectedRowIndex = [0,2];
    }

  }

  workOrderOverview.onContactSelection();
}
//Dhaval:Design issue 12 multiple changes in below function
workOrderOverview.onContactSelection = function () {
  if (frmWorkOrderOverview.ibtTabPane.cmbContacts.lblDropText.text == "Choisir contact") {
    workOrder.selectedContact = null;
    workOrderOverview.tabContactUnload();
  } else if (frmWorkOrderOverview.ibtTabPane.cmbContacts.lblDropText.text == "(Nouveau contact)") {
    workOrderOverview.tabContactUnload();
    workOrderContactEdit.contact = null;
    workOrder.selectedContact = null;
    frmWorkOrderOverview.ibtTabPane.cmbContacts.lblDropText.text = "Choisir contact";
    frmWorkOrderContactEdit.show();
  } else {
    //var contact = workOrder.contacts[frmWorkOrderOverview.ibtTabPane.cmbContacts.selectedKey];
    var contact = null;
    if(!validationModel.isNull(popCustomDropDown.listChSeg.selectedRowItems)){
      gblLastDropdownId=popCustomDropDown.listChSeg.selectedRowItems[0].id;
      contact = workOrder.contacts[gblLastDropdownId];
    } else {
      gblLastDropdownId = 'NONE';
    }
    if(!validationModel.isNull(contact)) {
      frmWorkOrderOverview.ibtTabPane.txtEmailAddress.text = validationModel.isNull(contact.email) ? " " : contact.email;
      frmWorkOrderOverview.ibtTabPane.txtFaxNumber.text = validationModel.isNull(contact.fax) ? " " : contact.fax;
      frmWorkOrderOverview.ibtTabPane.txtMobileNumber.text = validationModel.isNull(contact.mobile) ? " " : contact.mobile;
      frmWorkOrderOverview.ibtTabPane.txtPhonenumber.text = validationModel.isNull(contact.tel) ? " " : contact.tel;
      frmWorkOrderOverview.ibtTabPane.txtFonction.text = validationModel.isNull(contact.role) ? " " : contact.role;
    } else {
      frmWorkOrderOverview.ibtTabPane.txtEmailAddress.text = " ";
      frmWorkOrderOverview.ibtTabPane.txtFaxNumber.text = " ";
      frmWorkOrderOverview.ibtTabPane.txtMobileNumber.text = " ";
      frmWorkOrderOverview.ibtTabPane.txtPhonenumber.text = " ";
      frmWorkOrderOverview.ibtTabPane.txtFonction.text = " ";      
      frmWorkOrderOverview.ibtTabPane.cmbContacts.masterData = [];
      frmWorkOrderOverview.ibtTabPane.cmbContacts.lblDropText.text = "Choisir contact";//Dhaval:Design issue 12
      workOrderOverview.defaultContact = {typeCode: "NONE", contactId: "NONE"};
    }
    workOrder.selectedContact = contact;
  }
  workOrderOverview.checkIfEmail();
}

workOrderOverview.btnCompletedByPhoneClick = function () {
  frmWOResolve.repContact = workOrder.selectedContact;
  frmWOResolve.show();
}
//Dhaval:Design issue 12 multiple changes in below function
workOrderOverview.onContactEditClick = function () {
  /*if (frmWorkOrderOverview.ibtTabPane.cmbContacts.selectedKey == 'NONE'){
		workOrderContactEdit.contact = null;
	} else {
		workOrderContactEdit.contact = workOrder.contacts[frmWorkOrderOverview.ibtTabPane.cmbContacts.selectedKey];
	}*/
  if(!validationModel.isNull(popCustomDropDown.listChSeg.selectedRowItems)){
    gblLastDropdownId=popCustomDropDown.listChSeg.selectedRowItems[0].id;
  }
  if (gblLastDropdownId  == 'NONE'){
    workOrderContactEdit.contact = null;
  } else {
    workOrderContactEdit.contact = workOrder.contacts[gblLastDropdownId];
  }
  frmWorkOrderContactEdit.show();
}

workOrderOverview.onContactNumberClick = function (contactNumber) {

  if (contactNumber.indexOf("/") > -1) {
    contactNumber = contactNumber.split("/")[0];
  }
  contactNumber = contactNumber.trim();

  /*if (contactNumber.length > 0 &&
		frmWorkOrderOverview.ibtTabPane.cmbContacts.selectedKey != 'NONE' &&
		frmWorkOrderOverview.ibtTabPane.cmbContacts.selectedKey > -1) {*/
  //Dhaval:Design issue 12 change for custom dropdown
  if (contactNumber.length > 0 &&
      frmWorkOrderOverview.ibtTabPane.cmbContacts.lblDropText != "Choisir contact" &&
      frmWorkOrderOverview.ibtTabPane.cmbContacts.lblDropText !="(Nouveau contact)") {
    try {
      kony.phone.dial(contactNumber);

      if (workOrder.typeCode == 'I' && workOrder.statusCode == 33) {
        workOrderModel.changeStatus(workOrder, 42);
        workOrder = workOrderModel.findWorkOrderByDoco(workOrder.doco);
      }
    } catch(err) {
      popupModel.showPopError("Erreur lors de l'appel : "+err);
    }
    /*
		telephoneCall.contact = workOrder.contacts[frmWorkOrderOverview.ibtTabPane.cmbContacts.selectedKey];
		telephoneCall.contactNumber = contactNumber;
		frmTelephoneCall.show();*/
  }
}

workOrderOverview.onTravellClick = function(){
  if(workOrderModel.findWorkOrderByWhereClause('55')==null){
    if (workOrder.statusCode < 42){
      popupModel.showPopError("Veuillez planifier le BT avant de vous mettre en route.");
    }else{
      frmTravelStart.show();
    }
  }
  else{
    popupModel.showPopError("Veuillez d'abord terminer le BT en cours");}

}

workOrderOverview.onScanClick = function(){
  if (sequence.current == sequence.values.siteAccess){
    sequence.changeTo(sequence.values.visitProceeding , workOrder);
  }
  frmItemScan.show();
}

workOrderOverview.onBackButtonClick = function(){
  if(sequence.current < sequence.values.drivingToClient){
    navigationModel.doReturn();
  }
}

function onCustomDropdownSelect(){//Dhaval:Design issue 12 new function for selection from segment
  frmWorkOrderOverview.ibtTabPane.lblDropText.text=popCustomDropDown.listChSeg.selectedRowItems[0].listChLabel;
  workOrderOverview.onContactSelection();
  popCustomDropDown.dismiss();
  gblLastDropdownId=popCustomDropDown.listChSeg.selectedRowItems[0].id;
  try {
    let text = popCustomDropDown.listChSeg.selectedRowItems[0].listChLabel;
    if(text === "(Nouveau contact)") {
      return;
    }
  } catch(e) {}
  workOrderOverview.tabContactLoad();
}

workOrderOverview.changeSecondTechnicianName = function(){
  var an8 = frmWorkOrderOverview.ibtTabPane.segSecondTec.selectedRowItems[0].lblAn8;
  var secondTecName = frmWorkOrderOverview.ibtTabPane.segSecondTec.selectedRowItems[0].lblTecName;
  frmWorkOrderOverview.ibtSecondTecLbl.text = frmWorkOrderOverview.ibtTabPane.segSecondTec.selectedRowItems[0].lblTecName;

  var currentWo = workOrder;
  currentWo.secondTechnician = secondTecName;
  currentWo.anpa = an8;
  workOrderModel.updateANPA(currentWo, an8);
  
  workOrderOverview.loadTabPane();
}

workOrderOverview.fillSecondTecSeg = function(nameText){
  var tecNameTab = workOrderOverview.technicianList;

  var relatedMatch = [{lblTecName: "Pas de second technicien", lblAn8: "NULL"}];
  for(var i=0; i<tecNameTab.length; i++){
    if(nameText=="" && tecNameTab[i].AN8 != workOrder.technicianAN8){
      relatedMatch.push({lblTecName: tecNameTab[i].internalname, lblAn8: tecNameTab[i].AN8});
    }
    else{
      if(tecNameTab[i].internalname.toLowerCase().match(nameText.toLowerCase()) != null  && tecNameTab[i].AN8 != workOrder.technicianAN8){
        relatedMatch.push({lblTecName: tecNameTab[i].internalname, lblAn8: tecNameTab[i].AN8});
      }
    }
  }
  frmWorkOrderOverview.ibtTabPane.segSecondTec.setData(relatedMatch);
}