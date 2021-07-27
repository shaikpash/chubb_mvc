// ____________ woGrouping functions

// stores the chosen grouping settings
var woGrouping = {
	sitename : "", // info on the site on which the work orders can be regrouped
	city : "",
	workTime : 0, // all the work time required for the grouping realisation, in milliseconds
	workOrders : [] // all the work orders that *can* be grouped
};

// return string
woGrouping.getSite = function() {
	return woGrouping.sitename;
};

// return string
woGrouping.getCity = function() {
	return woGrouping.city;
};

// return number - duration in milliseconds
woGrouping.getWorkTime = function() {
	return woGrouping.workTime;
};

// return array
woGrouping.getAllWorkOrders = function() {
	return woGrouping.workOrders;
};

// return JSON object
woGrouping.getWorkOrder = function(index) {
	return woGrouping.workOrders[index];
};

woGrouping.resetData = function() {
	woGrouping.sitename = "";
	woGrouping.city = "";
	woGrouping.workTime = 0;
	woGrouping.workOrders = new Array();
};

woGrouping.requestData = function() {
	
	woGrouping.resetData();
	var workOrders = workOrderModel.findWorkOrdersGroupingByWorkOrder(workOrder);
	if(workOrders.length == 0) return; // there is nothing to group nor planify
	woGrouping.loadGrouping(workOrders);
	woGrouping.updateTotalWorkTime();
	
	var woLocation = workOrderModel.findWorkOrderLocationByWorkOrder(workOrder);
	if(!validationModel.isNull(woLocation)) {
		if(!validationModel.isNull(woLocation.sitename)) woGrouping.sitename = woLocation.sitename;
		if(!validationModel.isNull(woLocation.city)) woGrouping.city = woLocation.city;
	}
};

// indicates if we are grouping or only working with one work order
woGrouping.checkGroupingSize = function() {
	if(woGrouping.workOrders.length>1) return true;
	else return false;
};

// receives the SQL data and sort out the relevant data for grouping
woGrouping.loadGrouping = function(workOrders) {
	woGrouping.workOrders = new Array();
	
	for(var i=0;i<workOrders.length;i++) {
		var woData = workOrders[i];
		var woDuration = validationModel.isNull(woData.duration) 
			? 36000000 // 1 hour : 3600 seconds - duration in milliseconds
			: dateFunctions.BT_HRSOToTime(woData.duration);
		var isDeletable = woData.doco != workOrder.doco ? true : false;
      	var taskCount = validationModel.isNull(woData.actcount) ? 0 : parseInt(woData.actcount,10);	//Arati:Changed code for UI-98
		//var taskCount = validationModel.isNull(woData.taskCount) ? 0 : parseInt(woData.taskCount,10);
		
		var nextWorkOrder = {
			type : woData.typeCode,
			doco : woData.doco,
			duration : woDuration, // duration set in server, not to be modified
			workTime : woDuration, // duration chosen by user, can be modified
			termDate : woData.dateStarted,
			equipmentType : woData.equipmentType,
			taskCount : taskCount,
			status : woData.status,
			isDeletable : isDeletable // property only used for display
		};
		woGrouping.workOrders.push(nextWorkOrder);
	}
};

woGrouping.updateTotalWorkTime = function() {
	var totalWorkTime = 0;
	for(var i=0;i<woGrouping.workOrders.length;i++) {
		totalWorkTime += woGrouping.workOrders[i].workTime;
	}
	woGrouping.workTime = new Date(totalWorkTime);
};

woGrouping.moveWorkOrder = function(index) {
	var newIndex = index - 1;
	if(newIndex<0) newIndex = woGrouping.workOrders.length - 1;

	var movingRow = woGrouping.workOrders[index];
	woGrouping.workOrders[index] = woGrouping.workOrders[newIndex];
	woGrouping.workOrders[newIndex] = movingRow;
	return newIndex;
};

woGrouping.deleteWorkOrder = function(index) {
	woGrouping.workOrders.splice(index,1);
	woGrouping.updateTotalWorkTime();	
};

woGrouping.updateWorkOrderWorkTime = function(index, duration) {
	// duration must be a date object
	woGrouping.workOrders[index].workTime = duration;
	woGrouping.updateTotalWorkTime();
};

// ____________ woGrouping display functions

var woGroupingDisplay = {
	woDisplayedInfo : [],
	isOn : false
};

woGroupingDisplay.init = function() {
	var appMenu = [
		["woGrouping.CANCEL", "Annuler", "close.png", woGroupingDisplay.onBtnCloseClick],
		["recommendationEdit.PLANNING", "Planning", "week.png", onPlanningClick],
		["woGrouping.VALID", "Valider", "check.png", woGroupingDisplay.onBtnSaveClick]
	];
  //Dhaval:Fix for app menu not working
	function onPlanningClick(){
      e122PanningHebdomadaire.show();
    }
	otis.application.createAppMenu("woGroupingAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
};

woGroupingDisplay.preShow = function() {

	// _______ internal function definitions
	
	woGroupingDisplay.update = function(index, toDelete) {
	
		var targetIndex = validationModel.isNull(index) ? -1 : index;
		var isToDelete = validationModel.isNull(toDelete) ? false : toDelete;
	
		if(targetIndex < 0) woGroupingDisplay.loadGroupingList();
		else if(!isToDelete) woGroupingDisplay.updateGroupingListRow(targetIndex);
		else woGroupingDisplay.deleteGroupingListRow(targetIndex);
		woGroupingDisplay.setTotalWorkTime();
		woGroupingDisplay.setGroupingStatus();
	};
	
	woGroupingDisplay.loadSiteInfo = function() {
		frmWOGrouping.hbHeader.backgroundColor = workOrder.color;
		frmWOGrouping.lblCustomer.text = woGrouping.getSite();
		frmWOGrouping.lblSite.text = woGrouping.getCity();
	};
	
	woGroupingDisplay.setTotalWorkTime = function() {
		frmWOGrouping.lblGroupingDuration.text = "Durée totale de travail : ";
//		var workTimeInSeconds = Math.abs((woGrouping.getWorkTime().getTime() - new Date(0,0,0,0,0,0,0).getTime())/1000);
		var displayedWorkTime = dateFunctions.formatDuration(woGrouping.getWorkTime()/1000, false);
		frmWOGrouping.lblGroupingDuration.text += displayedWorkTime;
	};
	
	woGroupingDisplay.setRowData = function(woData, onlyOne) {
		
		var name = "BT " + woData.type + " " + woData.doco + " - " + woData.status;
//		var workTimeInSeconds = Math.abs((woData.workTime.getTime() - new Date(0,0,0,0,0,0,0).getTime())/1000);
		var displayedDuration = dateFunctions.formatDuration(woData.workTime/1000);
		var activity = (!validationModel.isNull(woData.equipmentType) && woData.equipmentType) 
			? woData.equipmentType 
			: "non spécifiée";
		var woRow = {
			imgDisplayDetails : {src : "chevronright.png"},
			imgMoveWO : {src : "recycle.png", isVisible : woGrouping.checkGroupingSize()},
			imgRemoveWO : {src : "bin.png", isVisible : woData.isDeletable},
			lblWOName : {text : name},
			lblTime : {text : "actes : " + woData.taskCount, isVisible : false},
			lblCumulTime : {text : !validationModel.isNull(displayedDuration)?displayedDuration:""},
			lblDate : {text : "date de départ : " + (!validationModel.isNull(woData.termDate))?woData.termDate.substr(8,2).concat('-').concat(woData.termDate.substr(5,2)).concat('-').concat(woData.termDate.substr(0,4)):"", isVisible : false},
			lblMotive : {text : "activité : " + activity, isVisible : false}
		};
		
		return woRow;
	};
	
	woGroupingDisplay.loadGroupingList = function() {
			
      frmWOGrouping.segWOList.removeAll();
		woGroupingDisplay.woDisplayedInfo = [];
		
		var WOListMasterData = [];
		var workOrders = woGrouping.getAllWorkOrders();
	
		for(var i=0;i<workOrders.length;i++) {
			var woData = workOrders[i];
			var nextWorkOrder = woGroupingDisplay.setRowData(woData);
			
			WOListMasterData.push(nextWorkOrder);
			woGroupingDisplay.woDisplayedInfo.push(false);
		}
		
		frmWOGrouping.segWOList.setData(WOListMasterData);
	};
	
	woGroupingDisplay.updateGroupingListRow = function(index) {
		
		var woData = woGrouping.getWorkOrder(index);
		var woRowData = woGroupingDisplay.setRowData(woData);
		var selectedOriginalRow=frmWOGrouping.segWOList.selectedRowIndex;//Dhaval:Stored selected index as same is lost after setDataAt
		frmWOGrouping.segWOList.setDataAt(woRowData,index,0);
		woGroupingDisplay.updateWorkOrderInfoDisplay(index);
      	frmWOGrouping.segWOList.selectedRowIndex=selectedOriginalRow;//Dhaval:Fix for issue#43
	};

	woGroupingDisplay.deleteGroupingListRow = function(index) {
		frmWOGrouping.segWOList.removeAt(index);
	};
	
	woGroupingDisplay.setGroupingStatus = function() {
		if(woGrouping.checkGroupingSize()) frmWOGrouping.lblGroupingStatus.text = "BTs à regrouper";
		else frmWOGrouping.lblGroupingStatus.text = "Pas de BTs à regrouper";		
	};
	
	woGroupingDisplay.updateWorkOrderInfoDisplay = function(index) {
		var row = frmWOGrouping.segWOList.data[index];
		var detailDisplayState = woGroupingDisplay.woDisplayedInfo[index];
		
		row.lblTime.isVisible = detailDisplayState;

		if(!validationModel.isNull(row.lblDate.text)){row.lblDate.isVisible = detailDisplayState}else{row.lblDate.isVisible=false};
		row.lblMotive.isVisible = detailDisplayState;
		row.imgDisplayDetails.src = detailDisplayState ? "chevrondown.png" : "chevronright.png";
		
		frmWOGrouping.segWOList.setDataAt(row, index);
	};
	
	woGroupingDisplay.setWorkTimeEditor = function(woData, selectedState) {
		if(selectedState && !validationModel.isNull(woData)) {
			frmWOGrouping.lblWOEdited.text = 'Modifier le temps de travail';
			frmWOGrouping.lblDayWorkTime.text = '';
			
			var workTimeInSeconds = woData.workTime/1000;
	    	var days 	= Math.floor(workTimeInSeconds / (3600 * 7.5));
	   		var hours   = Math.floor((workTimeInSeconds - (days * 3600 * 7.5)) / 3600);
	   		var minutes = Math.floor((workTimeInSeconds - (days * 3600 * 7.5) - (hours * 3600)) / 60);

			frmWOGrouping.pvWorkTime.selectedKeys = [days.toString(),hours.toString(),minutes.toString()];
		} 
		else {
			frmWOGrouping.lblWOEdited.text = '';
			frmWOGrouping.lblDayWorkTime.text = '';
			frmWOGrouping.pvWorkTime.selectedKeys = null;
		}
		frmWOGrouping.hbWorkTimeEdition.isVisible = selectedState;
	};
	
	// _______ proper preShow execution
	
	otis.application.setCurrentAppMenu("woGroupingAppMenu");//Dhaval:Invocation of custom app menu
	if(woGroupingDisplay.isOn) return;
	woGrouping.requestData();
	
	if(woGrouping.getAllWorkOrders().length == 0) {
		popupModel.showPopError(kony.i18n.getLocalizedString("woGroupingRequestError"));
		navigationModel.doReturn();
	}
	woGroupingDisplay.loadSiteInfo();
	woGroupingDisplay.update();
	woGroupingDisplay.isOn = true;
};

woGroupingDisplay.onRowClick = function(rowIndex, selectedState) {
	var woData = woGrouping.getWorkOrder(rowIndex);
	woGroupingDisplay.setWorkTimeEditor(woData, selectedState);	
};

woGroupingDisplay.onDisplayDetailClick = function(index) {
	
	woGroupingDisplay.woDisplayedInfo[index] = !woGroupingDisplay.woDisplayedInfo[index];
  	var selectedOriginalRow=frmWOGrouping.segWOList.selectedRowIndex;  //Arati:Changed code for JIRA UI-134
	woGroupingDisplay.updateWorkOrderInfoDisplay(index);
  	frmWOGrouping.segWOList.selectedRowIndex=selectedOriginalRow;  //Arati:Changed code for JIRA UI-134
}

woGroupingDisplay.onRemoveWorkOrderClick = function(index) {

	var segIndex = frmWOGrouping.segWOList.selectedIndex;
	
	woGrouping.deleteWorkOrder(index);
	woGroupingDisplay.woDisplayedInfo.splice(index, 1);
	woGroupingDisplay.update(index, true);
	
	if(!validationModel.isNull(segIndex) && segIndex.length != 0 && index == segIndex[1]) {
		woGroupingDisplay.setWorkTimeEditor(null, false);
	}
	
	woPlanify.hasChanged = true;
};

woGroupingDisplay.onMoveWorkOrderClick = function(rowIndex) {
	
	var selectedIndex = frmWOGrouping.segWOList.selectedIndex;
	var newRowIndex = woGrouping.moveWorkOrder(rowIndex);
	
	var temp = woGroupingDisplay.woDisplayedInfo[rowIndex];
	woGroupingDisplay.woDisplayedInfo[rowIndex] = woGroupingDisplay.woDisplayedInfo[newRowIndex];
	woGroupingDisplay.woDisplayedInfo[newRowIndex] = temp;
	
	woGroupingDisplay.updateGroupingListRow(rowIndex);
	woGroupingDisplay.updateGroupingListRow(newRowIndex);
	
	if(!validationModel.isNull(selectedIndex) && selectedIndex.length != 0) {
		if(selectedIndex[1] == rowIndex) frmWOGrouping.segWOList.selectedIndex = [0,newRowIndex];
		else if(selectedIndex[1] == newRowIndex) frmWOGrouping.segWOList.selectedIndex = [0,rowIndex];
		else frmWOGrouping.segWOList.selectedIndex = selectedIndex;
		
		woGroupingDisplay.onRowClick(frmWOGrouping.segWOList.selectedIndex[1], true);
	}
	
	woPlanify.hasChanged = true;
};

woGroupingDisplay.onWorkTimeEdit = function() {
	
	var index = parseInt(frmWOGrouping.segWOList.selectedRowIndex[1],10);
	var days = parseInt(frmWOGrouping.pvWorkTime.selectedKeyValues[0][0],10);
	var hours = parseInt(frmWOGrouping.pvWorkTime.selectedKeyValues[1][0],10);
	var minutes = parseInt(frmWOGrouping.pvWorkTime.selectedKeyValues[2][0],10);
	var newWorkTime = 60*(60*(7.5*days + hours) + minutes)*1000;
	
	woGrouping.updateWorkOrderWorkTime(index, newWorkTime);
	woGroupingDisplay.update(index);
	
	woPlanify.hasChanged = true;
}

woGroupingDisplay.onBtnSaveClick = function() {

	var workOrdersToPlanify = woGrouping.getAllWorkOrders();
	for(var i=0;i<workOrdersToPlanify.length;i++) workOrdersToPlanify[i].isPlanified = false;
	woGroupingDisplay.setWorkTimeEditor(null,false);
  	frmWOGrouping.segWOList.selectedRowIndex = null;	//Arati:Changed code for JIRA UI-134
  	frmWOGrouping.segWOList.rowSkin = "sknSeg";			//Arati:Changed code for JIRA UI-134
	woPlanify.workOrders = workOrdersToPlanify;
	if(app_parameters.lifetime.auto_plannify_bool == false){
		e122PanningHebdomadaire.show();
	}
	
};

woGroupingDisplay.onBtnCloseClick = function() {
	woGroupingDisplay.close();
	woPlanify.close();
	navigationModel.doReturn();
};

woGroupingDisplay.close = function() {
	woGrouping.resetData();
	woGroupingDisplay.setWorkTimeEditor(null,false);
	woGroupingDisplay.isOn = false;
}