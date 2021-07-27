itemNeed = {};

itemNeed.init = function(){
	var appMenu = [
		["itemNeed.BACK", "Retour", "left.png", onBackClick]
	];
  //Dhaval:Fix for app menu not working
	function onBackClick(){
      navigationModel.doReturn();
    }
	otis.application.createAppMenu("itemNeedAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu

}

itemNeed.preshow = function(){

	otis.application.setCurrentAppMenu("itemNeedAppMenu");//Dhaval:Invocation of custom app menu
	
	frmItemNeed.hbxReference.lblReference.text = workOrder.getReference();
	frmItemNeed.hbxReference.backgroundColor = workOrder.color;
	frmItemNeed.hbxReference.focusSkin = workOrder.skin;
	
	var tasks = taskModel.findTasksByItemWorkOrderAndWhereClause(
		undefined, undefined, workOrder, 'planned', undefined);
		
	if (tasks.length > 0) {
		var articleComponents = articleModel.findArticleComponentsByTasks(tasks, undefined, 'P');
		var segItemsTPMasterData = [];
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
		frmItemNeed.segItemsTP.setData(segItemsTPMasterData);	
	}
}
