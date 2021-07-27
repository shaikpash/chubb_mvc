travelling = {};

travelling.init = function(){
	var appMenu = [
		["travelling.STOP", "Interruption", "stopsign.png", travelling.onTravellingInterruptClick]
	];

	otis.application.createAppMenu("travellingAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

travelling.preShow = function () {
	otis.application.setCurrentAppMenu("travellingAppMenu");//Dhaval:Invocation of custom app menu

	frmTravelling.hbxReference.lblReference.text = workOrder.getReference();
	frmTravelling.hbxReference.backgroundColor = workOrder.color;
	frmTravelling.hbxReference.focusSkin = workOrder.skin;

	frmTravelling.lblAddress.text = (validationModel.isNull(workOrder.location)) ? "" : workOrder.location;
	frmTravelling.lblAddress.text += (validationModel.isNull(workOrder.locationAdd)) ? "" : "\n" + workOrder.locationAdd;
	frmTravelling.lblAddress.text += (validationModel.isNull(workOrder.address1)) ? "" : "\n" + workOrder.address1;
	frmTravelling.lblAddress.text += (validationModel.isNull(workOrder.address2)) ? "" : "\n" + workOrder.address2;
	frmTravelling.lblAddress.text += (validationModel.isNull(workOrder.address3)) ? "" : "\n" + workOrder.address3;
	if (frmTravelling.lblAddress.text.length == 0) frmTravelling.lblAddress.text = "inconnu";

	frmTravelling.lblCity.text = (validationModel.isNull(workOrder.zipcode)) ? "" : workOrder.zipcode + " ";
	frmTravelling.lblCity.text += (validationModel.isNull(workOrder.city)) ? "" : workOrder.city;
	if (frmTravelling.lblAddress.text.trim().length == 0) frmTravelling.lblAddress.text = "inconnu";
	sequence.changeTo(sequence.values.drivingToClient, workOrder);
}

travelling.onTravellingInterruptClick = function(){
	workOrderInterrupt.load();
}

travelling.onArrivedBtnClicked = function(){
  
  var launchFar = workOrderModel.countLineByDoco(workOrder.doco)[0]["count(*)"]==0?true:false;
	var prevStatus = workOrder.statusCode;
	workOrderModel.changeStatus(workOrder, 55);

	if (prevStatus == '42') {
		workOrderModel.hasStarted(workOrder);
	}
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

	sequence.changeTo(sequence.values.siteAccess , workOrder);

	function onValidateFAR() {
		workOrderOverview.tab.isAlreadyDisplayed = false;
		frmWorkOrderOverview.show();
	}
 
	function afterSync() {
//		var isPresent = woSummary.fillFARSurvey(false, onValidateFAR);
//		if (!isPresent) onValidateFAR();
      if(launchFar==true){
      	global.survey.open("FAR2", onValidateFAR, onValidateFAR);
      }else{
		workOrderOverview.tab.isAlreadyDisplayed = false;
        frmWorkOrderOverview.show();
      }
	}
  
  function startSync() {
		global.syncController.saveUserWork(afterSync, afterSync);
	}

	requestSync(startSync, afterSync);
}
