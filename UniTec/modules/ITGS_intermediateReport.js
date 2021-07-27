//Type your code here


intermediateReport = {};

intermediateReport.validate = function(o, wo, comment){
  	
   
}

intermediateReport.save = function(sig, wo, comment){

  success = function(){

  }
  error = function(err){

  }
  var id = signature.save(sig);

  var valuesArray = {};
  valuesArray = {
    "Signatureid" : id,
    "DOCO": wo.doco,
    "InstallState": comment.installState,
    "CompensatoryMeasure" : comment.compensatoryMeasure
  };


  de.itgs.WorkOrders.IntermediateReports.create(valuesArray, success, error, true);
  /*de.itgs.WorkOrders.intermediateReport.createAll(
			valuesArray, 
			callBackModel.emptyCB,
			callBackModel.konyErrorCB, 
			true);*/

  // WOValidationSignature.signatureId = id;

}

intermediateReport.close = function(){
  var updatedWorkOrder = workOrder;
  updatedWorkOrder.statusCode = "66";
  workOrderModel.updateWorkOrderParams(updatedWorkOrder, ['statusCode','WR12'], ['SRST','WR12']);
    function afterSync() {
      //		var isPresent = woSummary.fillFARSurvey(false, onValidateFAR);
      //		if (!isPresent) onValidateFAR();
      frmHome.show();
      frmWorkOrders.destroy();
      sequence.changeTo(sequence.values.logedIn, null);
      app_parameters.lifetime.switchWorkOrder = null;
      frmWorkOrders.txtWorkOrderLinked.text = "";
      workOrders.linkedBT = null;
    }
  function startSync(){
    global.syncController.saveUserWork(afterSync, afterSync);
  }
    startSync();

}
