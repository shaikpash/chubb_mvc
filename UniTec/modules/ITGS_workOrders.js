workOrders = {
  setInitialFormState: true,
  hasMoreResults: false,
  linkedBT : null
};

workOrders.filter = {
  whereClause: '',
  orderBy: '',
  orderDirection: 'asc'
};

workOrders.saveValuesFilter = {
  txtWorkOrderType: "",
  txtStatus: '',
  txtWorkOrderNumber: "",
  txtSocialReason: "",
  txtLocation: "",
  txtStreet: "",
  txtActivity: "",
  txtTaskCount: "",
  txtDurationHours: "",
  txtDurationMins: "",
  cbxOrderBy : 'none'
}


workOrders.init = function () {

  var appMenu = [
    ["workOrders.HOME", "Accueil", "home.png", onHomeClick],
    ["workOrders.WEEK", "Planning Semaine", "week.png", onWeekClick],
    ["workOrders.DAY", "Planning Journalier", "day.png", onDayClick]
  ];

  var workOrdersappMenuSwitch = [ 
      ["workOrders.BACK", "Retour BT", "left.png", onBackSwitchClick]
    ];
  //Dhaval:Fix for app menu not working start
  function onHomeClick(){
    if(frmWorkOrders.panierSeg.data){
      if(frmWorkOrders.panierSeg.data[0].btnLinked.skin == "sknBtnLinkedFocus"){
      workOrders.linkedBT = frmWorkOrders.txtWorkOrderLinked.text;
      }else{
        workOrders.saveFilters();
      }
    }
    frmHome.show();
  }

  function onWeekClick(){
    if(frmWorkOrders.panierSeg.data){
      if(frmWorkOrders.panierSeg.data[0].btnLinked.skin == "sknBtnLinkedFocus"){
        workOrders.linkedBT = frmWorkOrders.txtWorkOrderLinked.text;
      }else{
        workOrders.saveFilters();
      }
    }
    e122PanningHebdomadaire.show();
  }
  function onDayClick(){
    if(frmWorkOrders.panierSeg.data){
      if(frmWorkOrders.panierSeg.data[0].btnLinked.skin == "sknBtnLinkedFocus"){
        workOrders.linkedBT = frmWorkOrders.txtWorkOrderLinked.text;
      }else{
        workOrders.saveFilters();
      }
    }
    e121PlanningJournalier.show();
  }
  function onBackSwitchClick(){
    //workOrder = 
    frmWOSummary.show();
  }
  //End
  initFormProcess("frmWorkOrders", frmWorkOrders);//Dhaval:Design issue #18 for slide
  otis.application.createAppMenu("workOrdersAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
  otis.application.createAppMenu("workOrdersappMenuSwitch", workOrdersappMenuSwitch, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu

  frmWorkOrders.e13tabPane.retainPositionInTab = false;
  frmWorkOrders.e13tabPane.panierSeg.widgetDataMap = {
    dateSegP : "dateSegP",
    timeLengthSegP : "timeLengthSegP",
    ClientSegP : "ClientSegP",
    btTypeSegP : "btTypeSegP",
    btInfoSegP : "btInfoSegP",
    placeSegP : "placeSegP",
    btnLinked : "btnLinked",
    statusSegP :  "statusSegP",
    segPColorHB : "segPColorHB",
    hboxContainer : "hboxContainer",
    lblSpacer : "lblSpacer",
    btNumber : "btNumber",
    lblActCount : "lblActCount",
    imgIsVia : "imgIsVia"
  };
}

workOrders.onBtnFilterClearClick = function () {
  
  
  frmWorkOrders.txtWorkOrderType.text = '';
  frmWorkOrders.txtStatus.text = '';
  frmWorkOrders.txtWorkOrderNumber.text = '';
  frmWorkOrders.txtWorkOrderLinked.text = '';
  frmWorkOrders.txtSocialReason.text = '';
  frmWorkOrders.txtLocation.text = '';
  frmWorkOrders.txtStreet.text = '';
  frmWorkOrders.txtActivity.text = '';
  frmWorkOrders.txtTaskCount.text = '';
  frmWorkOrders.txtDurationHours.text = '';
  frmWorkOrders.txtDurationMins.text = '';
  frmWorkOrders.clnStartDate.clear();
  frmWorkOrders.clnEndDate.clear();
  frmWorkOrders.cbxOrderBy.selectedKey = 'none';
  
  workOrders.saveFilters();

  workOrders.onBtnFilterSaveClick();
}

workOrders.onBtnFilterSaveClick = function () {

  workOrders.refreshWhereClause();

  var orderByClause = (workOrders.filter.orderBy == '') ? '' : workOrders.filter.orderBy + " " + workOrders.filter.orderDirection;
  //alert(orderByClause);
  if(app_parameters.lifetime.pause_bool == true){
    var woWithoutOnSiteStatus =  workOrders.filter.whereClause += " AND bt.srst != 55 ";
    var l_workOrders = workOrderModel.findWorkOrdersByWhereClauseAndSortOrder(woWithoutOnSiteStatus, orderByClause, 50, false);
  }
  else if(app_parameters.lifetime.switchWorkOrder != null){
    var woLinked =  workOrders.filter.whereClause += " AND bt.srst < 70 AND bt.typs IN ('V', 'P')";
    var l_workOrders = workOrderModel.findWorkOrdersByWhereClauseAndSortOrder(woLinked, orderByClause, 50, false);
  }
  else{
    var l_workOrders = workOrderModel.findWorkOrdersByWhereClauseAndSortOrder(workOrders.filter.whereClause, orderByClause, 50, false);
  }
  kony.print(l_workOrders);

  workOrders.hasMoreResults = (l_workOrders.length == 50);
  workOrders.mapWorkOrders = function (workOrder) {

    var underSite = workOrderModel.underPlace(workOrder);

    var rowskin = (!validationModel.isNull(workOrder.color)) ? "sknBT" + workOrder.color : "sbkBTFallback";
    var actCounts = "";

    if(workOrder.actcount == 1) actCounts = "1 acte";
    else if(workOrder.actcount > 1) actCounts = workOrder.actcount + " actes";
    else actCounts = "";

    // var workOrderDate = validationModel.isNull(workOrder.dateStarted) ? workOrder.dateRequested : workOrder.dateStarted;
    var workOrderDate = workOrder.dateRequested;
	var btnlinked = {};
    if(workOrder.linkedCount==1 || workOrder.statusCode >= 70){
      btnlinked = {"isVisible" : false}
    }else{
      var btnLinkedSkin = "noSkinBtn";
      if(frmWorkOrders.txtWorkOrderLinked.text != null && frmWorkOrders.txtWorkOrderLinked.text != "" && app_parameters.lifetime.switchWorkOrder == null){
        btnLinkedSkin = "sknBtnLinkedFocus";
      }
      btnlinked = {"isVisible": true, "text": "🔗", "skin": btnLinkedSkin}
    }
    
    var skndoco = "sknHboxNormal";
    var statusSeg = workOrder.status;
    if(app_parameters.lifetime.switchWorkOrder != null){
      if(app_parameters.lifetime.switchWorkOrder.doco == workOrder.doco){
        skndoco = "sknHboxBorderWhite4px";
        statusSeg = "BT Actuel";
      }
    }
    
  
    var workOrderEntry = {
      "dateSegP": workOrderDate.substr(8, 2) + "/" + workOrderDate.substr(5, 2), //workOrderDate,
      "timeLengthSegP" : (validationModel.isNull(workOrder.duration) ? '' : dateFunctions.formatDuration(workOrder.duration * 3600)),
      "ClientSegP" : !validationModel.isNull(workOrder.location) ? workOrder.location: "?" + workOrder.siteAN8,
      "btTypeSegP" :  (validationModel.isNull(workOrder.secondTechnician)==true?"":"👥") +" "+workOrder.typeCode,
	  "btInfoSegP" :  (!validationModel.isNull(underSite) ? underSite+"\n" : "" )+workOrder.equipmentActivity + " - " + workOrder.doco,
     	"btnLinked": btnlinked,
     "placeSegP" : workOrder.zipcode + " " + workOrder.city,
      "statusSegP" : statusSeg,
      "segPColorHB" : {"backgroundColor": workOrder.color},//,
      "hboxContainer" : {"skin" : skndoco},
      //"focusSkin": rowskin},//Dhaval:Fix for click area
      "btNumber" : workOrder.doco,
      "lblSpacer" : "",
      "lblActCount" : actCounts,
      'imgIsVia' : {src : 'truck.png', isVisible : workOrder.isVia},
      "btdoco": {"text": workOrder.doco, "said": workOrder.said}
      //"imgSecondTech" : {"isVisible": validationModel.isNull(workOrder.secondTechnician)==true?false:true}
    };

    return workOrderEntry;
  }

  frmWorkOrders.e13tabPane.panierSeg.setData(l_workOrders.map(workOrders.mapWorkOrders));
}

workOrders.onBtnSearchClick = function () {
  showSyncLoadingScreen();

  workOrders.onBtnFilterSaveClick();
  frmWorkOrders.e13tabPane.activeTabs = [0];
  workOrders.onTabClick(0);

  kony.application.dismissLoadingScreen();
}

workOrders.onTabClick = function (tabIndex) {
  if (tabIndex == 0 && workOrders.hasMoreResults) {
    //kony.print("Plus de 50 BT ont été trouvés\nVeuillez utiliser un filtre adapté.");	//changed for iOS conversion
    //popupModel.showPopError("Plus de 50 BT ont été trouvés\nVeuillez utiliser un filtre adapté.");

  }
  if(tabIndex ==0){//Dhaval:Design issue #18 for slide
    frmWorkOrders.btnTabPrev.skin='skntabBtn';
    frmWorkOrders.btnTabFirst.skin='sknTabBtnFoc';
  }
  else{//Dhaval:Design issue #18 for slide
    frmWorkOrders.btnTabPrev.skin='sknTabBtnFoc';
    frmWorkOrders.btnTabFirst.skin='skntabBtn';
  }
}

workOrders.onBtnClearCalendarClick = function (filterParam, filterField) {
  filterField.clear();
}

workOrders.onBtnFilterParamClick = function (filterParam, filterField) {

  var filterValues = [];
  var popSegEditData = [];
  var selectedIndices = [];
  var allIndices = [];
  var selectedItems=[];		//saurav:variable added for type error

  workOrders.onBtnFilterConfirmCB = function () {
    var selectedItems = popSegEdit.listChSeg.selectedItems;
    var filterLabels = [];
    if (!validationModel.isNull(selectedItems)) {
      for (var i = 0; i < selectedItems.length; i++) {
        filterLabels.push(selectedItems[i].listChLabel);
      }
      filterField.text = filterLabels.join(";");
    } else {
      filterField.text = '';
    }
    popSegEdit.dismiss();
  }

  workOrders.onBtnFilterCancelCB = function () {
    popSegEdit.dismiss();
  }

  workOrders.onBtnFilterSelectAllCB = function () {
    popSegEdit.listChSeg.selectedRowIndices = [[0, allIndices]];
  }

  workOrders.onBtnFilterSelectNoneCB = function () {
    popSegEdit.listChSeg.selectedRowIndices = [[0, []]];
  }

  var filterFieldValue = filterField.text;
  filterField.text = '';
  workOrders.refreshWhereClause();
  filterField.text = filterFieldValue;

  var params = {
    field : '',
    name : ''
  }

  //	if (filterParam == 'workOrderType') params = {field : , name : };
  //		filterValues = workOrderModel.findDistinctWorkOrderParamsByNameAndWhereClause
  //						('bt.TYPS', 'typeCode',workOrders.filter.whereClause);
  //	else if (filterParam == 'status')
  //		filterValues = workOrderModel.findDistinctWorkOrderParamsByNameAndWhereClause
  //						("(select DL01 from UDCT where SY= '00' and RT = 'SS' and LNPG = 'KO' and KY = bt.SRST)", 'status',workOrders.filter.whereClause);
  //	else if (filterParam == 'workOrderNumber')
  //		filterValues = workOrderModel.findDistinctWorkOrderParamsByNameAndWhereClause
  //						('bt.doco', 'doco',workOrders.filter.whereClause);
  //	else if (filterParam == 'socialReason')
  //		filterValues = workOrderModel.findDistinctWorkOrderParamsByNameAndWhereClause
  //						('cust.corporatename', 'location',workOrders.filter.whereClause);
  //	else if (filterParam == 'location')
  //		filterValues = workOrderModel.findDistinctWorkOrderParamsByNameAndWhereClause
  //						('cust.city', 'city',workOrders.filter.whereClause);
  //	else if (filterParam == 'activity')
  //		filterValues = workOrderModel.findDistinctWorkOrderParamsByNameAndWhereClause
  //						('bt.wr01', 'equipmentActivity',workOrders.filter.whereClause);

  if (filterParam == 'workOrderType') params = {field : 'bt.TYPS', name : 'typeCode'};
  else if (filterParam == 'status')  params = {field : "(select DL01 from UDCT where SY= '00' and RT = 'SS' and LNPG = 'KO' and KY = bt.SRST)", name : 'status'};
  else if (filterParam == 'workOrderNumber') params = {field : 'bt.doco', name : 'doco'};
  else if (filterParam == 'socialReason') params = {field : 'cust.corporatename', name : 'location'};
  else if (filterParam == 'location') params = {field : 'cust.city', name : 'city'};
  else if (filterParam == 'activity') params = {field : 'bt.wr01', name : 'equipmentActivity'};
  else if (filterParam == 'street') params = {field : 'cust.address1', name : 'address1'};

  if(params.field != '' && params.name != '')
    filterValues = workOrderModel.findDistinctWorkOrderParamsByNameAndWhereClause(params.field, params.name, workOrders.filter.whereClause);

  if (validationModel.isNull(filterValues) || filterValues.length == 0){
    filterField.text = '';
    popupModel.showPopError("Pas de choix à proposer.");
    return;
  }


  //saurav:changed for ios conversion,fix for type error issue

  if(null != filterField.text && filterField.text !== "" && filterField.text != 'NULL' && filterField.text.length > 0){
    var selectedItems = filterField.text.split(";");

  }else{
    kony.print("no text found!");

  }





  for (var i = 0; i < filterValues.length; i++) {
    allIndices.push(i);
    popSegEditData.push({listChLabel: filterValues[i]});
    for (var j = 0; j < selectedItems.length; j++) {
      if (selectedItems[j].toString().toLowerCase() === filterValues[i].toString().toLowerCase()) {
        selectedIndices.push(i);
        break;
      }
    }
  }

  popSegEdit.listChSeg.setData(popSegEditData);
  popSegEdit.listChValidate.onClick = workOrders.onBtnFilterConfirmCB;
  popSegEdit.listChCancel.onClick = workOrders.onBtnFilterCancelCB;
  popSegEdit.listChNone.onClick = workOrders.onBtnFilterSelectNoneCB;
  popSegEdit.listChSeg.selectedIndices = [[0,selectedIndices]];
  popSegEdit.show();
}

workOrders.onCbxOrderBySelection = function () {
  workOrders.filter.orderBy = ' order by ';
  if (frmWorkOrders.cbxOrderBy.selectedKey == 'workOrderType') workOrders.filter.orderBy += 'bt.typs';
  else if (frmWorkOrders.cbxOrderBy.selectedKey == 'status') workOrders.filter.orderBy += "(select DL01 from UDCT where SY= '00' and RT = 'SS' and LNPG = 'KO' and KY = bt.SRST)";
  else if (frmWorkOrders.cbxOrderBy.selectedKey == 'workOrderNumber') workOrders.filter.orderBy += 'bt.doco';
  else if (frmWorkOrders.cbxOrderBy.selectedKey == 'socialReason') workOrders.filter.orderBy += 'cust.corporatename';
  else if (frmWorkOrders.cbxOrderBy.selectedKey == 'location') workOrders.filter.orderBy += 'cust.city';
  else if (frmWorkOrders.cbxOrderBy.selectedKey == 'street') workOrders.filter.orderBy += 'cust.address1';
  else if (frmWorkOrders.cbxOrderBy.selectedKey == 'activity') workOrders.filter.orderBy += 'bt.wr01';
  else if (frmWorkOrders.cbxOrderBy.selectedKey == 'taskCount') workOrders.filter.orderBy += 'bt.actcount';
  else if (frmWorkOrders.cbxOrderBy.selectedKey == 'duration') workOrders.filter.orderBy += 'bt.hrso';
  else if (frmWorkOrders.cbxOrderBy.selectedKey == 'startDate') workOrders.filter.orderBy += "bt.strt";

  //else workOrders.filter.orderBy += 'bt.doco';
  else workOrders.filter.orderBy += 'bt.strt';			//Arati:Changed code for JIRA UI-115
}

workOrders.onVbxOrderByClick = function () {
  if (workOrders.filter.orderDirection == 'asc') {
    workOrders.filter.orderDirection = 'desc';
    frmWorkOrders.imgOrderBy.src = 'down.png';
  } else {
    workOrders.filter.orderDirection = 'asc';
    frmWorkOrders.imgOrderBy.src = 'up.png';
  }
}

workOrders.preShow = function () {

  app_parameters.lifetime.itemVerifyFields = {bat:"", et:"",sit:"",num:""}; // Reinit when BT change
  
  if(app_parameters.lifetime.switchWorkOrder == null){
frmWorkOrders.e13TabFiltre.isVisible = true;
    frmWorkOrders.e13TabFiltre.skin = "sknTab";
  }
  workOrders.serializeValueArray = function (valueArray) {
    var resultArray = de.itgs.javascript.Object.clone(valueArray);
    for (var i = 0; i < valueArray.length; i++) {
      resultArray[i] = "'" + valueArray[i] + "'";
    }
    return resultArray;
  }
  frmWorkOrders.e13tabPane.containerHeight = 115;													//Arati:Changed code for JIRA UI-84
  frmWorkOrders.e13tabPane.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;	//Arati:Changed code for JIRA UI-84

  workOrders.refreshWhereClause = function () {

    var newWC = " where 1 = 1 ";

    function setNoCaseSQL(field) {
      return " COLLATE NOCASE in (" + serializeFieldToSQL(field) + ")";
    };

    function getFieldText(field) {
      //changed for ios conversion
      var formattedValue = "";
      if (frmWorkOrders[field] !== null || frmWorkOrders[field] !== undefined || frmWorkOrders[field] !== "") {
        try
        {
          formattedValue = frmWorkOrders[field].text;
          formattedValue = (formattedValue === null || formattedValue === undefined) ? "" : formattedValue.replace(/'/g, "''");
          //kony.print("formattedValue -- "+formattedValue);
        }
        catch(e)
        {
          kony.print("Error"+e);
        }
      }
      return formattedValue;
    };

    function serializeFieldToSQL(field) {
      return workOrders.serializeValueArray(getFieldText(field).split(";")).join(",");
    };

    function setFieldToSQL(field) {
      return getFieldText(field).split(";").join(",");
    };

    function isFilled(field) {
      return (getFieldText(field).length > 0);
    };

    function testCalendar(field, operator) {
      if (!validationModel.isNull(frmWorkOrders[field].date) && frmWorkOrders[field].date != 0) {
        var dateArr = frmWorkOrders[field].date.split("/");
        newWC += " and bt.strt " + operator + " '" + datePrintSql(new Date(dateArr[2], dateArr[1]-1, dateArr[0])) + "'";
      }
    };

    newWC += isFilled('txtWorkOrderType') ? " and bt.TYPS " + setNoCaseSQL('txtWorkOrderType') : "";
    newWC += isFilled('txtStatus') ? " and (select DL01 from UDCT where SY= '00' and RT = 'SS' and LNPG = 'KO' and KY = bt.SRST ) " + setNoCaseSQL('txtStatus') : "";
    newWC += isFilled('txtWorkOrderNumber') ? " and bt.DOCO in (" + setFieldToSQL('txtWorkOrderNumber') + ")" : "";
	newWC += isFilled('txtWorkOrderLinked') ? " and SAID = (SELECT said from F56BT where doco = " + setFieldToSQL('txtWorkOrderLinked') + ")" : "";
    newWC += !isFilled('txtSocialReason') ? "" : (
      (getFieldText('txtSocialReason').split(';').length== 1) ?
      " and cust.corporatename COLLATE NOCASE like '%"+ getFieldText('txtSocialReason') + "%'" :
      " and cust.corporatename " + setNoCaseSQL('txtSocialReason')
    );

    newWC += !isFilled('txtLocation') ? "" : (
      (getFieldText('txtLocation').split(';').length== 1) ?
      " and cust.city COLLATE NOCASE like '%"+ getFieldText('txtLocation') + "%'" :
      " and cust.city " + setNoCaseSQL('txtLocation')// + ")"
    );

    newWC += !isFilled('txtStreet') ? "" : (
      (getFieldText('txtStreet').split(';').length== 1) ?
      " and cust.address1 COLLATE NOCASE like '%"+ getFieldText('txtStreet') + "%'" :
      " and cust.address1 " + setNoCaseSQL('txtStreet')// + ")"
    );

    newWC += isFilled('txtActivity') ? " and bt.wr01 " + setNoCaseSQL('txtActivity') : "";
    newWC += isFilled('txtTaskCount') ?	" and bt.actcount " + frmWorkOrders.cbxTaskCount.selectedKey + " " + getFieldText('txtTaskCount').replace(",",".") : "";

    var duration = isFilled('txtDurationHours') ? parseFloat(getFieldText('txtDurationHours').replace(",",".")) : 0;
    duration += isFilled('txtDurationMins') ? parseFloat(getFieldText('txtDurationMins').replace(",",".")) / 60 : 0;
    newWC += (duration > 0) ? " and bt.hrso " + frmWorkOrders.cbxDuration.selectedKey + " " + duration : "";

    testCalendar('clnStartDate', ">=");
    testCalendar('clnEndDate', "<=");

    if(app_parameters.lifetime.pause_bool == true){
      newWC += " AND bt.srst != 55";
    }

    workOrders.filter.whereClause = newWC;
  }
  
  

  if (workOrders.setInitialFormState){
    workOrders.setInitialFormState = false;
    //workOrders.filter.orderBy = ' order by bt.doco ';
    workOrders.filter.orderBy = ' order by bt.strt '; //Arati:Changed code for JIRA UI-115
    frmWorkOrders.cbxOrderBy.selectedKey = 'none';

    if(workOrderModel.findInterventionWorkOrders().length > 0) {
      frmWorkOrders.txtWorkOrderType.text = 'I;G;S;P';
      frmWorkOrders.txtStatus.text  = "Reçu;Confirmé;Incomplet";
    }
    else {
      frmWorkOrders.txtWorkOrderType.text = '';
      frmWorkOrders.txtStatus.text  = "Reçu;Confirmé;Incomplet";
    }
  }else if(app_parameters.lifetime.switchWorkOrder == null && workOrders.linkedBT == null){
    workOrders.reloadFilters();
  }
  
  otis.application.setCurrentAppMenu("workOrdersAppMenu");//Dhaval:Invocation of custom app menu
  
  if(app_parameters.lifetime.switchWorkOrder == null){
    if(validationModel.isNull(frmWorkOrders.txtWorkOrderLinked.text) || validationModel.isStringEmpty(frmWorkOrders.txtWorkOrderLinked.text)){
      otis.application.setCurrentAppMenu("workOrdersAppMenu");//Dhaval:Invocation of custom app menu
    }
    frmWorkOrders.e13TabFiltre.isVisible = true;
    frmWorkOrders.e13TabFiltre.skin = "sknTab";
  }else{
    	frmWorkOrders.txtWorkOrderType.text = '';
  frmWorkOrders.txtStatus.text = '';
  frmWorkOrders.txtWorkOrderNumber.text = '';
  frmWorkOrders.txtWorkOrderLinked.text = app_parameters.lifetime.switchWorkOrder.doco;
  frmWorkOrders.txtSocialReason.text = '';
  frmWorkOrders.txtLocation.text = '';
  frmWorkOrders.txtStreet.text = '';
  frmWorkOrders.txtActivity.text = '';
  frmWorkOrders.txtTaskCount.text = '';
  frmWorkOrders.txtDurationHours.text = '';
  frmWorkOrders.txtDurationMins.text = '';
  frmWorkOrders.clnStartDate.clear();
  frmWorkOrders.clnEndDate.clear();
  frmWorkOrders.cbxOrderBy.selectedKey = 'none';
    otis.application.setCurrentAppMenu("workOrdersappMenuSwitch");//Dhaval:Invocation of custom app menu
    frmWorkOrders.e13TabFiltre.isVisible = false;
    frmWorkOrders.e13TabFiltre.skin = "sknTabTransparent";
  }
  
  
  frmWorkOrders.e13tabPane.activeTabs = [0];
  frmWorkOrders.btnTabPrev.skin='skntabBtn';//Dhaval:Design issue #18 for slide
  frmWorkOrders.btnTabFirst.skin='sknTabBtnFoc';//Dhaval:Design issue #18 for slide
  
    workOrders.onBtnFilterSaveClick();

  
}

workOrders.onWorkOrderSelection = function (rowNumber, context){
  var doco = frmWorkOrders.e13tabPane.panierSeg.data[rowNumber].btNumber;
  var currentWO = workOrderModel.findWorkOrderByDoco(doco);
  if ((!workOrders.isWorkOrderDataValid(doco) || !workOrders.isCustomerDataValid(doco)) && (currentWO.typeCode !='G' && currentWO.typeCode !='S'))
    return;

  workOrder = workOrderModel.findWorkOrderByDoco(doco);
 
  if(app_parameters.lifetime.switchWorkOrder!=null){
    workOrders.switchBT();
    app_parameters.lifetime.switchWorkOrder = workOrder;
  }else{
    if(context.focusedItem.btnLinked.skin == "sknBtnLinkedFocus"){
      workOrders.linkedBT = frmWorkOrders.txtWorkOrderLinked.text;
    }else{
      workOrders.saveFilters();
    }
    
  }
  workOrderOverview.tab.current = workOrderOverview.tab.info;
  frmWorkOrderOverview.ibtTabPane.activeTabs = [0];
  workOrderOverview.tab.isAlreadyDisplayed = false;
  
  frmWorkOrderOverview.show();
  ibt_PlanificationNeedUpdate = true;
}

workOrders.isCustomerDataValid = function(doco) {
  var whereClause = " userid = 0 ";
  var workOrder = workOrder = workOrderModel.findWorkOrderByDoco(doco);

  //Arati: Changed code for JIRA UI-89 start here
  if(workOrder.typeCode == 'V') {
  var count = workOrderModel.getWorkOrderCountByDoco(doco);
    if (count["count(*)"] == 0){
      popupModel.showPopError("Ce BT ne possède pas de tâches - veuillez contacter le support ");
      return;
    }
  }
  //Arati: Changed code for JIRA UI-89 End here

  var customer = validationModel.isNull(workOrder.customerAN8) ? null : customerModel.findCustomerByAN8(workOrder.customerAN8, whereClause);
  var site = validationModel.isNull(workOrder.siteAN8) ? null : customerModel.findCustomerByAN8(workOrder.siteAN8, whereClause);

  var custAN8Str = validationModel.isNull(workOrder.customerAN8) ? "inconnu" : workOrder.customerAN8;
  var siteAN8Str = validationModel.isNull(workOrder.siteAN8) ? "inconnu" : workOrder.siteAN8;
  var suffixMsg = ") incomplètes : ce BT ne peut pas être traité - veuillez contacter votre support.";

  if (validationModel.isNull(customer)){
    popupModel.showPopError("Données du client (AN8 : " + custAN8Str + suffixMsg);
    return false;
  } else if (validationModel.isNull(site)){
    popupModel.showPopError("Données du site (AN8 : " + siteAN8Str + suffixMsg);
    return false;
  } else {
    return true;
  }
};

workOrders.isWorkOrderDataValid = function(doco) {
  var workOrderData = workOrderModel.getWorkOrderDataByDoco(doco, 'WR20');

  var chapterIsValid = (!validationModel.isNull(workOrderData) && !validationModel.isNull(workOrderData.WR20));

  if (!chapterIsValid)
    popupModel.showPopError("Données du BT incomplètes (chapitre non défini) - veuillez contacter votre support");
  return chapterIsValid;
};

workOrders.switchBT = function(){

  workOrderModel.changeStatus(app_parameters.lifetime.switchWorkOrder, 66)
  sequence.changeTo(sequence.values.logedIn, app_parameters.lifetime.switchWorkOrder);

  workOrder = workOrderModel.findWorkOrderByDoco(workOrder.doco);
  // identify site access related tasks (priority between 5 and 10)
  var whereClause = "and priority >= 5 and priority <= 10 and status <> 'O'";
  var siteAccessTasks = taskModel.findTasksByItemWorkOrderAndWhereClause(whereClause, null, workOrder);

  // validate site access related tasks
  for (var i = 0; i < siteAccessTasks.length; i++) {
    siteAccessTasks[i].status = 'O';
    var realisationDate = dateTimePrintSql(new Date());
    siteAccessTasks[i].realDate = realisationDate.substring(0, 10);
    siteAccessTasks[i].realTime = realisationDate.substring(11);
  }
  taskModel.updateTasks(siteAccessTasks);
  // update site access related task components
  if (workOrder.typeCode != 'P') {
    for (var i = 0; i < siteAccessTasks.length; i++) {
      var components = articleModel.findArticleComponentsByTasks([siteAccessTasks[i]], 1);
      sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, null, components, siteAccessTasks[i], null, "plannedTask", true);
    }
  }
  workOrderModel.changeStatus(workOrder, 55);
  sequence.changeTo(sequence.values.siteAccess , workOrder);
  workOrder = workOrderModel.findWorkOrderByDoco(workOrder.doco); // Refresh the workOrder after changed the status

}

workOrders.onBtnLinkedClick = function(context){
    
  if(context.widgetInfo.focusedItem.btnLinked.skin == "sknBtnLinkedFocus"){
    frmWorkOrders.txtWorkOrderLinked.text = "";
    frmWorkOrders.txtWorkOrderType.text = workOrders.saveValuesFilter.txtWorkOrderType;
    frmWorkOrders.txtStatus.text = workOrders.saveValuesFilter.txtStatus;
    frmWorkOrders.txtSocialReason.text = workOrders.saveValuesFilter.txtSocialReason;
    frmWorkOrders.txtLocation.text = workOrders.saveValuesFilter.txtLocation;
    frmWorkOrders.txtStreet.text = workOrders.saveValuesFilter.txtStreet;
    frmWorkOrders.txtActivity.text = workOrders.saveValuesFilter.txtActivity;
    frmWorkOrders.txtTaskCount.text = workOrders.saveValuesFilter.txtTaskCount;
    frmWorkOrders.txtDurationHours.text = workOrders.saveValuesFilter.txtDurationHours;
    frmWorkOrders.txtDurationMins.text = workOrders.saveValuesFilter.txtDurationMins;
    frmWorkOrders.clnStartDate.clear();
    frmWorkOrders.clnEndDate.clear();
    frmWorkOrders.cbxOrderBy.selectedKey = 'none';
  }else{
    frmWorkOrders.txtWorkOrderLinked.text = context.widgetInfo.focusedItem.btdoco.text;
    workOrders.saveFilters();
    frmWorkOrders.txtWorkOrderType.text = '';
    frmWorkOrders.txtStatus.text = "Reçu;Confirmé;Sur site;Incomplet";
    frmWorkOrders.txtWorkOrderNumber.text = '';
  frmWorkOrders.txtSocialReason.text = '';
  frmWorkOrders.txtLocation.text = '';
  frmWorkOrders.txtStreet.text = '';
  frmWorkOrders.txtActivity.text = '';
  frmWorkOrders.txtTaskCount.text = '';
  frmWorkOrders.txtDurationHours.text = '';
  frmWorkOrders.txtDurationMins.text = '';
  frmWorkOrders.clnStartDate.clear();
  frmWorkOrders.clnEndDate.clear();
  frmWorkOrders.cbxOrderBy.selectedKey = 'none';
  }
  	
    
  workOrders.onBtnFilterSaveClick();

}

workOrders.saveFilters = function(){
  workOrders.saveValuesFilter = {
      txtWorkOrderType: frmWorkOrders.txtWorkOrderType.text,
      txtStatus: frmWorkOrders.txtStatus.text,
      txtWorkOrderNumber: frmWorkOrders.txtWorkOrderNumber.text,
      txtSocialReason: frmWorkOrders.txtSocialReason.text,
      txtLocation: frmWorkOrders.txtLocation.text,
      txtStreet: frmWorkOrders.txtStreet.text,
      txtActivity: frmWorkOrders.txtActivity.text,
      txtTaskCount: frmWorkOrders.txtTaskCount.text,
      txtDurationHours: frmWorkOrders.txtDurationHours.text,
      txtDurationMins: frmWorkOrders.txtDurationMins.text,
      cbxOrderBy : 'none'
  }};

  workOrders.reloadFilters = function (){
    frmWorkOrders.txtWorkOrderType.text = workOrders.saveValuesFilter.txtWorkOrderType;
  frmWorkOrders.txtStatus.text = workOrders.saveValuesFilter.txtStatus;
  frmWorkOrders.txtWorkOrderNumber.text = workOrders.saveValuesFilter.txtWorkOrderNumber; 
  frmWorkOrders.txtWorkOrderLinked.text = "";
  frmWorkOrders.txtSocialReason.text = workOrders.saveValuesFilter.txtSocialReason;
  frmWorkOrders.txtLocation.text = workOrders.saveValuesFilter.txtLocation;
  frmWorkOrders.txtStreet.text = workOrders.saveValuesFilter.txtStreet;
  frmWorkOrders.txtActivity.text = workOrders.saveValuesFilter.txtActivity;
  frmWorkOrders.txtTaskCount.text = workOrders.saveValuesFilter.txtTaskCount;
  frmWorkOrders.txtDurationHours.text = workOrders.saveValuesFilter.txtDurationHours;
  frmWorkOrders.txtDurationMins.text = workOrders.saveValuesFilter.txtDurationMins;
  frmWorkOrders.clnStartDate.clear();
  frmWorkOrders.clnEndDate.clear();
  frmWorkOrders.cbxOrderBy.selectedKey = 'none';
  if(workOrders.linkedBT != null){
    frmWorkOrders.txtWorkOrderLinked.text = workOrders.linkedBT;
    workOrders.linkedBT = null;
  }
  workOrders.onBtnFilterSaveClick();
  }
