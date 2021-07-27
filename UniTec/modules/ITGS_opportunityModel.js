opportunityModel = {};

opportunityModel.createOpportunityForWorkOrder = function(wo){
	// looking for comments in precos
	
	callBackModel.context.sql ="select  \n " +
		"re.id commentId \n " +
		"from f56btre re, \n " +
		"	f56precoitems pi, \n " +
		"	f56preco p \n " +
		"where  \n " +
		"re.id = pi.f56btreid \n " +
		"and pi.f56precoid = p.id \n " +
		"and p.type = 'I4' \n " +
		"and p.doco = "+ wo.doco +" \n ";
	
	callBackModel.resultArray = undefined;
	executeSql(callBackModel.context.sql,
		callBackModel.arraySuccessCB,
		callBackModel.sqlErrorCB);
		
	var comments = callBackModel.resultArray;
	if 	(validationModel.isNull(comments)){
		kony.print("No opportinuty found for this WO");
		return;
	}
		
	// if found, we make a opportunity header
	var ohId = opportunityModel.createOpportunityHeaderForWorkOrder(wo);
	
	for (var i = 0; i< comments.length; i++){
		opportunityModel.linkCommentToOpportunityHeader(
			ohId, comments[i].commentId);
	}
}

opportunityModel.createOpportunityHeaderForWorkOrder = function(wo){
	var oid = undefined;

	function succesCB(res){
		oid = res[0].id; 
	}
	
	callBackModel.context.sql ="select an84 salesman \n " +
		"from customer s \n " +
		"join f56bt bt \n " +
		"	on bt.said = s.an8 \n " +
		"   and s.Originalid = 0 \n " +
		"	and bt.doco =  "+ wo.doco + " and bt.ANP = " + login.user.AN8 + " \n ";
	callBackModel.result = undefined;
	executeSql(callBackModel.context.sql,
		callBackModel.successCB,
		callBackModel.sqlErrorCB);
	
	var salesman =  !validationModel.isNull(callBackModel.result )?
		callBackModel.result.salesman : null;
	
	var agencyAN8 = employeeModel.findEmployeeAgencyByEmployee(wo.technicianAN8, 'SERVICE');

	var valuesArray = [];
	valuesArray[0] = {};
	valuesArray[0].DOCO = wo.doco;
	valuesArray[0].chapter = "001";
	valuesArray[0].ownerAN8 = salesman;
	valuesArray[0].originAN8 = login.user.AN8;
	valuesArray[0].customerAN8 = wo.customerAN8;
	valuesArray[0].siteAN8 = wo.siteAN8;
	valuesArray[0].agencyAN8 = agencyAN8;
	valuesArray[0].status = "STATUS_ONGOING";
	valuesArray[0].creationDate = dateTimePrintSql(new Date());
	
	de.itgs.WorkOrders.OpportunityHeader.createAll(valuesArray, succesCB, eventErrorCallBack, true);
	
	return oid;
}

opportunityModel.linkCommentToOpportunityHeader = function(ohId, comId){
	id = undefined;
	
	function succesCB(res){
		id = res.id; 
	}
	var valuesArray = [];
	valuesArray[0] = {};
	valuesArray[0].opportunityHId = ohId;
	valuesArray[0].CommentId = comId;
	de.itgs.WorkOrders.OpportunityCommentRel.createAll(
		valuesArray, succesCB, eventErrorCallBack, true);
	
	return id;
}
