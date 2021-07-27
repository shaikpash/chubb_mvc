woShift = null;

function initWOShift() {
	woShift = new woShiftEngine();
}

function woShiftEngine() {
	this.pendingWorkOrder = null; // contains pending work order DOCO
	this.isOn = true; // allows use of this module - if off, the module is deactivated (no workorder switch available)
};

woShiftEngine.prototype.shiftWorkOrders = function(currentWorkOrder, targetWorkOrder) {
	if (!this.isOn) return;

	var openingWorkOrder = null;
	var closingWorkOrder = null;
	
	// determine if the shift is already on or not, and which are the work orders to close or open	
	if (!this.isInShiftProcess()) {
		this.pendingWorkOrder = currentWorkOrder.doco;		
		closingWorkOrder = this.pendingWorkOrder;
		openingWorkOrder = targetWorkOrder.doco;
	} 
	else {
		closingWorkOrder = null; // the current work order has already been interrupted / closed - no need to go through that step
		openingWorkOrder = this.pendingWorkOrder;
		this.pendingWorkOrder = null;
	}

	this.closeWorkOrder(closingWorkOrder);
	this.openWorkOrder(openingWorkOrder);
};

woShiftEngine.prototype.isInShiftProcess = function() {
	if (!this.isOn) return false;
	
	return (this.pendingWorkOrder != null);
};

woShiftEngine.prototype.isAvailable = function(item) {
	if (!this.isOn) return false;
	
	var isAvailable = false;
	var availableWorkOrder = itemModel.checkSameSiteByItemAndWorkOrder(item, workOrder);
	
	if (
		!validationModel.isNull(availableWorkOrder) && 
		!validationModel.isNull(availableWorkOrder.doco) && 
		workOrder.chapter != '002' &&
		!validationModel.isNull(item.batchNumber) &&
		item.batchNumber.length > 0
	) {
		isAvailable = true;
		var msg = 'Cet appareil appartient à un autre BT. Souhaitez-vous mettre le BT actuel en pause pour traiter cet appareil ?';
		function onConfirm() {woShift.shiftWorkOrders(workOrder, availableWorkOrder);};
		popupModel.showPopError(msg, onConfirm, undefined, true);
	}
	return isAvailable;
};

woShiftEngine.prototype.isRequired = function() {
	if (!this.isOn) return false;

	var isRequired = this.isInShiftProcess();
	if (isRequired) {
		var msg = 'Un bon de travail était mis en pause - reprise du précédent bon de travail.';
		popupModel.showPopError(msg);
		this.shiftWorkOrders(workOrder);
	}
	return isRequired;
}

woShiftEngine.prototype.closeWorkOrder = function(doco) {
	if (validationModel.isNull(doco) || doco == '') return;
	
	var workOrderToClose = workOrderModel.findWorkOrderByDoco(doco);
	workOrderModel.changeStatus(workOrderToClose, '66');
};

woShiftEngine.prototype.openWorkOrder = function(doco) {
	if (validationModel.isNull(doco) || doco == '') return;
	
	var workOrderToOpen = workOrderModel.findWorkOrderByDoco(doco);
	
	if (workOrderToOpen.statusCode == '33') {
		var paramNames = ["startDate","startTime","statusCode"];
		var columnNames = ["DRQJ","SEET","SRST"];
		
		var startDate = new Date();
		var startDateString = dateFunctions.isAValidDate(dateFunctions.javaDateToStringFormat(startDate), "2321-01-01");
		var startTimeString = dateFunctions.javaDateToTimeFormat(startDate);
		var nextStatus = '42';
		
		workOrderToOpen.startDate = startDateString;
		workOrderToOpen.startTime = startTimeString;
		workOrderToOpen.statusCode = nextStatus;
		
		workOrderModel.updateWorkOrderParams(workOrderToOpen, paramNames, columnNames)
	}	
	
	workOrderModel.changeStatus(workOrderToOpen, 55);
	workOrder = workOrderModel.findWorkOrderByDoco(workOrderToOpen.doco);
	
	// identify site access related tasks (priority between 5 and 10)
	var whereClause = "and priority >= 5 and priority <= 10 and status <> 'O'";
	var siteAccessTasks = taskModel.findTasksByItemWorkOrderAndWhereClause(whereClause, null, workOrder);
	// validate site access related tasks
	
	var realisationDate = dateTimePrintSql(new Date());
	var realDate = realisationDate.substring(0, 10);
	var realTime = realisationDate.substring(11);
	
	for (var i = 0; i < siteAccessTasks.length; i++) {
		siteAccessTasks[i].status = 'O';
		siteAccessTasks[i].realDate = realDate;
		siteAccessTasks[i].realTime = realTime;
	}
	taskModel.updateTasks(siteAccessTasks);
	
	// update site access related task components
	if (workOrder.typeCode != 'P') {
		for(var i=0;i<siteAccessTasks.length;i++) {
			var components = articleModel.findArticleComponentsByTasks([siteAccessTasks[i]], 1);
			sparePartModel.createSparePartsByWorkOrderAndItem(workOrder, null, components, siteAccessTasks[i], null, "plannedTask", true);
		}
	}
	
	workOrder.skin = (workOrder['color'] != null) ? "sknBT" + workOrder['color'] : "sbkBTFallback";
	
	// set the sequence
	sequence.changeTo(sequence.values.visitProceeding,workOrder);
	
	// show workorder overview
	workOrderOverview.tab.current = workOrderOverview.tab.info;
	frmWorkOrderOverview.ibtTabPane.activeTabs = [0];
	workOrderOverview.tab.isAlreadyDisplayed = false;
	
	// prevent coming back to here
	navigationModel.stack = [];
	frmWorkOrderOverview.show();
};
