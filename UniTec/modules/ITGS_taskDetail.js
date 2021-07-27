taskDetail = {
	workOrderTaskDetails: null,
	elements: null,
	elementIds: [],
	lastElementIndex: -1,
	firstElementIndex: 0
};

taskDetail.init = function() {

	var appMenu = [
		["taskDetail.BACK", "Retour", "left.png", onBackClick]
	];
  //Dhaval:Fix for app menu not working
  function onBackClick(){
    navigationModel.doReturn();
  }

	otis.application.createAppMenu("taskDetailAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

taskDetail.preShow = function (taskUsualCode){

	otis.application.setCurrentAppMenu("taskDetailAppMenu");//Dhaval:Invocation of custom app menu

	frmTaskDetail.ibtTabPane.ibtClientLbl1.text = workOrder.getReference();
	frmTaskDetail.ibtTabPane.e231ClientHB.backgroundColor = workOrder.color;
	frmTaskDetail.ibtTabPane.e231ClientHB.focusSkin = workOrder.skin;
	frmTaskDetail.ibtTabPane.lblTaskName.text = 'Pas de tâche trouvée';
	frmTaskDetail.ibtTabPane.segTaskDetails.removeAll();
	
	taskDetail.addElementsToBottom = function (elementCount) {
		var currentLastElementIndex = taskDetail.lastElementIndex;
		
		// Show loading screen and block UI
		showSyncLoadingScreen();

		// Exclude ids we already retrieved from the DB
		for (var i = 0; i < taskDetail.elements.length; i++) {
			if (taskDetail.elementIds.indexOf(taskDetail.elements[i].id) == -1) {
				taskDetail.elementIds.push(taskDetail.elements[i].id);
			}
		}
		
		// Find more items if you currently don't have enough
		// in memory to add to the list	
		if (currentLastElementIndex + elementCount + 1 > taskDetail.elements.length) {
			taskDetail.elements = taskDetail.elements.concat(
									taskModel.findTaskDetailsByWorkOrderAndTask(
										workOrder,
										workOrder.task,
										taskDetail.elementIds,
										"",
										"limit 50"));
		}
		
		// Add new items to the items list
		var	segTaskDetailsMasterData = [];
		for (var i = currentLastElementIndex+1; (i < currentLastElementIndex + elementCount + 1 && i < taskDetail.elements.length); i ++) {		
			var task = {};
			
			if(!validationModel.isNull(taskDetail.elements[i].replacement) && taskDetail.elements[i].replacement != 0){
				var replacementItem = itemModel.findItemsByWhereClauseAndSortOrder(" and jdeId = " + taskDetail.elements[i].replacement + " ");
				task.lblBatchNumber = replacementItem.length>0 ? 
					"remplace : " + replacementItem[0].batchNumber : 
					"appareil remplacé inconnu";
			} 
			else {
				task.lblBatchNumber = (validationModel.isNull(taskDetail.elements[i].batchNumber) ||  taskDetail.elements[i].batchNumber == '') ? 
					"aucun code-barre associé" : 
					"code-barre : " + taskDetail.elements[i].batchNumber;
			}

			task.lblUnitDetail = "";
			task.lblUnitDetail += taskDetail.elements[i].location;
			task.lblUnitDetail += " / " + taskDetail.elements[i].floor; 
			task.lblUnitDetail +=  " / " +  taskDetail.elements[i].placement;
			task.lblUnit = taskDetail.elements[i].name;
			 
			if (!validationModel.isNull(taskDetail.elements[i].productionDate) && taskDetail.elements[i].productionDate != '') {
				task.lblUnitDate = "MES : " + datePrintCustom(new Date(taskDetail.elements[i].productionDate), "dd/MM/yyyy");
			} else {
				task.lblUnitDate = "MES : inconnu";
			}
			task.ibid = taskDetail.elements[i].itemId;
			task.N001 = taskDetail.elements[i].N001;	
			
			segTaskDetailsMasterData.push(task);
			taskDetail.elementIds.push(taskDetail.elements[i].id);
			taskDetail.lastElementIndex++;
		}
		frmTaskDetail.ibtTabPane.lblTaskName.text = taskDetail.elements[0].desc1;
		frmTaskDetail.ibtTabPane.segTaskDetails.addAll(segTaskDetailsMasterData);
		
		// Dismiss loading screen and release UI once elements are loaded
		kony.application.dismissLoadingScreen();
	}
}

taskDetail.postShow = function () {
	taskDetail.lastElementIndex = -1;
	taskDetail.firstElementIndex = 0;
	taskDetail.elements = [];
	taskDetail.elementIds = [];	
	taskDetail.addElementsToBottom(50);
}

taskDetail.onTaskDetailsReachingEnd = function () {
	taskDetail.addElementsToBottom(50);
}

taskDetail.segTaskDetailOnRowClick = function (){
	var selectedItem = taskDetail.elements[frmTaskDetail.segTaskDetails.selectedRowIndex[1]];
	if(validationModel.isNull(selectedItem.jdeId) || selectedItem.jdeId == '') return;
	itemShow.item.id = selectedItem.itemId;
	frmItemShow.show();
}