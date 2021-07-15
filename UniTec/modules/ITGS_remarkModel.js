remarkModel = {};
remarkModel.createRemarkByWorkOrder = function (workOrder, remark, type) {
	callBackModel.result = undefined;
  	var currentForm = kony.application.getCurrentForm();
	
	var valuesArray = {};
	valuesArray.DOCO = workOrder.doco;
	valuesArray.COMMENT = remark;
	valuesArray.F56BTId = workOrder.id;
	valuesArray.MOCATCD10 = type;
  	if(currentForm.id == "frmWorkOrderOverview"){	//Arati:Changed code for JIRA UI-116
    	valuesArray.HasChangedFlag = true;				
    } else {
		valuesArray.HasChangedFlag = (type == 'ENTETE BT');
    }
		  		  
	de.itgs.WorkOrders.F56BTRE.create(valuesArray, callBackModel.successCB, callBackModel.konyErrorCB, true);
	
	return callBackModel.result;
}

remarkModel.updateRemark = function(remark, type, deletion){
	var currentForm = kony.application.getCurrentForm();
	var inputArray = [];
	inputArray[0] = {};
	inputArray[0].changeSet = {};
  	if(currentForm.id == "frmWorkOrderOverview"){
      inputArray[0].changeSet.HasChangedFlag = true;		//Arati:Changed code for JIRA UI-116
    } else {
	  inputArray[0].changeSet.HasChangedFlag = (type == 'ENTETE BT');
    }
	inputArray[0].changeSet.DOCO = remark.doco;
	inputArray[0].changeSet.COMMENT = remark.comment;
	inputArray[0].whereClause = "where id = " + remark.id;
	
	if (true === deletion) {
		inputArray.DeletedBy = app_parameters.sync.appID;
	}
	
	de.itgs.WorkOrders.F56BTRE.updateAll(inputArray, callBackModel.emptyCB, callBackModel.konyErrorCB);
}

remarkModel.deleteRemark = function(remark){
	// Update the HasChangedFlag
	remarkModel.updateRemark(remark, 'ENTETE BT', true);
	
	// Delete the remark
	de.itgs.WorkOrders.F56BTRE.deleteByPK(remark.id, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}
