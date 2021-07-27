summaryService = {
	toDoTaskTypes: [],
	ValoDisplay: false,
	validConsistency : true, 
  	activeTab : false
};

summaryService.preshow  = function(initValoDisplay) {
	summaryService.isReadOnly = !workOrderModel.isOnSite(workOrder) || WOValidationSignature.isValid(workOrder) || (workOrder.statusCode == 70);
  
	if(!summaryService.isReadOnly && workOrder.process != 'CHUBB' && !sparePartModel.isWorkOrderSPSummaryConsistent(workOrder)) {
		function confirmConsistency() {
			summaryService.validConsistency = true;
		}
		
		function unvalidConsistency() {
			summaryService.validConsistency = false;
		}
		
//		var msg = "Il existe des différences entre tâches réalisées et pièces détachées.\nSouhaitez-vous quand même valider le bilan service ?";
		var msg = "Il existe des différences entre tâches réalisées et pièces détachées - veuillez contacter le support.";
		
//		popupModel.showPopError(msg, confirmConsistency, null, true, unvalidConsistency);
		popupModel.showPopError(msg);
	} else {
		validConsistency = true;
	}

	if(app_parameters.lifetime.limited_access == true) {
		otis.application.setCurrentAppMenu("summaryServiceAppMenuNoVALO");//Dhaval:Invocation of custom app menu
	} else {
		otis.application.setCurrentAppMenu("summaryServiceAppMenu");//Dhaval:Invocation of custom app menu
	}
	
	summaryService.form = kony.application.getCurrentForm();
	summaryService.form.tabPane.segTaskDone.widgetDataMap = {
		lblDone: 'done',
		lblCount : 'count',
		lblCountN : 'countN',      	
		lblDescription : 'description',
		lblVALO : 'price',
      	//lblPu: 'pu'
	};
	summaryService.form.tabPane.segAddedTasks.widgetDataMap = {
		lblCount : 'count',
		lblDescription : 'description',
		//lblVALO : 'price'
	};
	summaryService.form.tabPane.segAddedParts.widgetDataMap = {
		lblCount : 'count',
		lblDescription : 'description',
		lblVALO : 'price',
		lblCode : 'code',
      lblPu: 'pu'
	};
	summaryService.form.tabPane.segSoldParts.widgetDataMap = {
		lblCount : 'count',
		lblDescription : 'description',
		lblVALO : 'price',
		lblCode : 'code',
      lblPu: 'pu'
	};
  summaryService.form.tabPane.segPreventiveConsumption.widgetDataMap = {
		lblCount : 'count',
		lblDescription : 'description',
		lblVALO : 'price',
		lblCode : 'code',
    lblPu: 'pu'
	};
  summaryService.form.tabPane.segCurativeConsumption.widgetDataMap = {
		lblCount : 'count',
		lblDescription : 'description',
		lblVALO : 'price',
		lblCode : 'code',
    lblPu: 'pu'
	};
	
	summaryService.tab = { summary: 0 };
	if (summaryService.form.id == 'frmSummaryServiceInstall') {
      	frmSummaryServiceInstall.tabPane.containerHeight = 115;		//Arati:Changed code for JIRA UI-84
      	frmSummaryServiceInstall.tabPane.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;//Arati:Changed code for JIRA UI-84
		summaryService.tab.nonCodedItemTasks = 1;
		summaryService.tab.canceledTasks = 2;
		summaryService.tab.todoTasks = 3;
	} else if (summaryService.form.id == 'frmSummaryServiceInstallChubb') {
      	frmSummaryServiceInstallChubb.tabPane.containerHeight = 115;	//Arati:Changed code for JIRA UI-84
      	frmSummaryServiceInstallChubb.tabPane.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;//Arati:Changed code for JIRA UI-84
		summaryService.tab.nonCodedItemTasks = 1;
		summaryService.tab.canceledTasks = 2;
		summaryService.tab.chubbTasks = 3;
	} else if (summaryService.form.id == 'frmSummaryServiceChubb') {
      	frmSummaryServiceChubb.tabPane.containerHeight = 115;	//Arati:Changed code for JIRA UI-84
      	frmSummaryServiceChubb.tabPane.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;//Arati:Changed code for JIRA UI-84
		summaryService.tab.canceledTasks = 1;
		summaryService.tab.chubbTasks = 2;
	} else {
      	frmSummaryService.tabPane.containerHeight = 115;	//Arati:Changed code for JIRA UI-84
      	frmSummaryService.tabPane.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;//Arati:Changed code for JIRA UI-84
		summaryService.tab.canceledTasks = 1;
		summaryService.tab.todoTasks = 2;
	}

      summaryService.form.tabPane.activeTabs = (navigationModel.getPreviousForm() == 'frmTaskOverview' || summaryService.activeTab== true) ? [summaryService.tab.chubbTasks] : [0];
	
	
	summaryService.activeTab = false;
	summaryService.resetDiscount = true;
	summaryService.ValoDisplay = true;
	summaryService.discountTariffs = [];


  summaryService.VALOClicked();
	      kony.application.getCurrentForm().hbxTotalPrice.isVisible = false;

    kony.application.getCurrentForm().hbxDiscountPrice.isVisible = false;
  
}

summaryService.postshow = function(){
  //summaryService.VALOClicked();
}

//Arati: changed for design issue #19 Start here
summaryService.clear = function() {
  if (summaryService.form.id == 'frmSummaryService') {
  		frmSummaryService.btnTabFirst.skin='skntabBtn';
  		frmSummaryService.btnTabPrev.skin='skntabBtn';
 		frmSummaryService.btnTabHdr1.skin='skntabBtn';
  }	else if (summaryService.form.id == 'frmSummaryServiceChubb') {
    	frmSummaryServiceChubb.btnTabFirst.skin='skntabBtn';
  		frmSummaryServiceChubb.btnTabPrev.skin='skntabBtn';
 		frmSummaryServiceChubb.btnTabHdr1.skin='skntabBtn';
  }	else if (summaryService.form.id == 'frmSummaryServiceInstall') {
	    frmSummaryServiceInstall.btnTabFirst.skin='skntabBtn';
  		frmSummaryServiceInstall.btnTabPrev.skin='skntabBtn';
 		frmSummaryServiceInstall.btnTabHdr1.skin='skntabBtn';
  		frmSummaryServiceInstall.btnTabHdr2.skin='skntabBtn';
  }	else if (summaryService.form.id == 'frmSummaryServiceInstallChubb') {
	    frmSummaryServiceInstallChubb.btnTabFirst.skin='skntabBtn';
  		frmSummaryServiceInstallChubb.btnTabPrev.skin='skntabBtn';
 		frmSummaryServiceInstallChubb.btnTabHdr1.skin='skntabBtn';
  		frmSummaryServiceInstallChubb.btnTabHdr2.skin='skntabBtn';
  }
}
//Arati: changed for design issue #19 end here

summaryService.tabChange = function(){
	var tab = summaryService.form.tabPane.activeTabs[0];
  	//Arati: changed for design issue #19 Start here
  	summaryService.clear();
  	if (summaryService.form.id == 'frmSummaryService') {
      if (tab == 0){
        frmSummaryService.btnTabFirst.skin='sknTabBtnFoc';
      } else if (tab == 1) {
        frmSummaryService.btnTabPrev.skin='sknTabBtnFoc';
      }	else if (tab == 2) {
        frmSummaryService.btnTabHdr1.skin='sknTabBtnFoc';
      }
    } else if (summaryService.form.id == 'frmSummaryServiceChubb') {
      if (tab == 0){
        frmSummaryServiceChubb.btnTabFirst.skin='sknTabBtnFoc';
      } else if (tab == 1) {
        frmSummaryServiceChubb.btnTabPrev.skin='sknTabBtnFoc';
      }	else if (tab == 2) {
        frmSummaryServiceChubb.btnTabHdr1.skin='sknTabBtnFoc';
      }
    } else if (summaryService.form.id == 'frmSummaryServiceInstall') {
      if (tab == 0){
        frmSummaryServiceInstall.btnTabFirst.skin='sknTabBtnFoc';
      } else if (tab == 1) {
        frmSummaryServiceInstall.btnTabPrev.skin='sknTabBtnFoc';
      }	else if (tab == 2) {
        frmSummaryServiceInstall.btnTabHdr1.skin='sknTabBtnFoc';
      } else if (tab == 3) {
        frmSummaryServiceInstall.btnTabHdr2.skin='sknTabBtnFoc';
      }
    } else if (summaryService.form.id == 'frmSummaryServiceInstallChubb') {
      if (tab == 0){
        frmSummaryServiceInstallChubb.btnTabFirst.skin='sknTabBtnFoc';
      } else if (tab == 1) {
        frmSummaryServiceInstallChubb.btnTabPrev.skin='sknTabBtnFoc';
      }	else if (tab == 2) {
        frmSummaryServiceInstallChubb.btnTabHdr1.skin='sknTabBtnFoc';
      } else if (tab == 3) {
        frmSummaryServiceInstallChubb.btnTabHdr2.skin='sknTabBtnFoc';
      }
    }
  	//Arati: changed for design issue #19 end here
  
	switch(tab){
		case undefined:
		case summaryService.tab.summary:{
			summaryService.serviceClear();
			summaryService.loadTasksDone();
			summaryService.loadTasksAdded();
			summaryService.loadSpareParts();
			summaryService.loadSoldParts();
          	summaryService.loadConsumtion();
			summaryService.countTotal();
			summaryService.form.tabPane.lblLoadingService.isVisible = false;
			break;
		}
		case summaryService.tab.nonCodedItemTasks:{
			summaryService.nonCodedItemTasksClear();
			summaryService.loadNonCodedItemTasks();
			break;
		}
		case summaryService.tab.canceledTasks:{
			summaryService.canceledClear();
			summaryService.loadCanceledTasks();
			break;
		}
		case summaryService.tab.todoTasks:{
			summaryService.todoClear();
			summaryService.loadTodoTasks();
			break;
		}
		case summaryService.tab.chubbTasks: {
			summaryService.chubbTasksClear();
			summaryService.loadChubbTasks();
			break;
		}
		default :
			kony.print("Warning, summaryService.form showing unknown tab :" + tab);
	}
    var totalHTtoOrder = taskModel.totalHTtoOrder(workOrder);
  var totalHTFromBT = taskModel.totalHTFromBT(workOrder);
  if(totalHTFromBT == null){
    kony.application.getCurrentForm().hbxTotalPrice.isVisible = false;
  }else{
    kony.application.getCurrentForm().hbxTotalPrice.isVisible = true;
    kony.application.getCurrentForm().lblTotalPrice.text = totalHTFromBT.toFixed(2)+ "€";
  }

  if(totalHTtoOrder == null || totalHTtoOrder == undefined){
    kony.application.getCurrentForm().hbxDiscountPrice.isVisible = false;
  }else{
    kony.application.getCurrentForm().hbxDiscountPrice.isVisible = true;
    kony.application.getCurrentForm().lblDiscountPrice.text = totalHTtoOrder.toFixed(2) +"€";
  }
}

summaryService.serviceClear = function(){
	summaryService.form.tabPane.lblLoadingService.isVisible = true;
	summaryService.form.tabPane.segAddedParts.data = [];
	summaryService.form.tabPane.segAddedTasks.data = [];
	summaryService.form.tabPane.segSoldParts.data = [];
	summaryService.form.tabPane.segTaskDone.data = [];
    summaryService.form.tabPane.segPreventiveConsumption.data = [];
    summaryService.form.tabPane.segCurativeConsumption.data = [];
  
}

summaryService.canceledClear = function(){
	summaryService.form.tabPane.lblLoadingCanceled.isVisible = true;
		// empty box
	while(summaryService.form.tabPane.hbCanceledTaskGroup.widgets().length>0){
		summaryService.form.tabPane.hbCanceledTaskGroup.removeAt(0);
	}
}

summaryService.nonCodedItemTasksClear = function(){
	summaryService.form.tabPane.segNonCodedItemTasks.removeAll();
	summaryService.form.lblNonCodedItemTasksNone.isVisible = false;
}

summaryService.todoClear = function(){
	summaryService.form.tabPane.segToDoTasks.removeAll();
	summaryService.form.lblTodoNone.isVisible = false;
}

summaryService.chubbTasksClear = function(){
	summaryService.form.tabPane.segChubbTasks.removeAll();
	summaryService.form.lblChubbTasks.isVisible = false;
}

summaryService.init = function(frmRef) { 
  
	var appMenu = [
		["summaryService.BACK", "Retour", "left.png", onBackClick],
		["summaryService.DISCOUNT", "Valorisation", "euro.png", summaryService.VALOClicked]
	];
	
	var appMenuNoVALO = [
		["summaryService.BACK", "Retour", "left.png", onBackClick]
	];
  //Arati: changed for design issue #19 Start here
  if(frmRef == "frmSummaryService") {
    initFormProcess("frmSummaryService", frmSummaryService);
  } else if(frmRef == "frmSummaryServiceChubb") {
    initFormProcess("frmSummaryServiceChubb", frmSummaryServiceChubb);
  }	else if(frmRef == "frmSummaryServiceInstall") {
  	initFormProcess("frmSummaryServiceInstall", frmSummaryServiceInstall);	
  } else if(frmRef == "frmSummaryServiceInstallChubb") {
  	initFormProcess("frmSummaryServiceInstallChubb", frmSummaryServiceInstallChubb);	
  }
  //Arati: changed for design issue #19 end here
  
  //Dhaval:Fix for app menu not working
	function onBackClick(){
      frmWOSummary.show();
    }
  //Dhaval:Invocation of custom app menu start
	otis.application.createAppMenu("summaryServiceAppMenu", appMenu, sknAppmenu, sknAppmenuF);
	otis.application.createAppMenu("summaryServiceAppMenuNoVALO", appMenuNoVALO, sknAppmenu, sknAppmenuF);
//End
}

summaryService.loadTasksDone = function(){
	function fillTeskSegment(res){
      
		if (validationModel.isNull(res) || res.length == 0){
			summaryService.form.tabPane.segTaskDone.setData(
				[{'done': 'x',
				 'count': 'x',
                  'countN': 'x',
				 'description': 'Pas de tâche planifiée'
                 }]
			);
			
		}else{
			var data = new Array();
			for(var i in res) {
             
              for(var o=0; o<res.length; o++){
                if(res[i].code == res[o].code && res[i].price == res[o].price && i != o){
                 	res[o].done = res[o].done + res[i].done;
                    res[o].count = res[o].count + res[i].count;
                  res[o].canceled = res[o].canceled + res[i].canceled;
                  	res[o].price = res[o].price + res[i].price;
                  list.splice(list.indexOf(res[i].code), 1);
                }
              }
				var dataRow = {
					'done':res[i].done+"",
					'count':res[i].count+"",
                  	'countN': res[i].canceled == 0?"":res[i].canceled+" Refusée(s)",
					'description':res[i].description
				};
				data.push(dataRow);
			}
			summaryService.form.tabPane.segTaskDone.setData(data);
		}
	}
  
  
	
	taskModel.getTaskSummaryForWorkOrder(
		workOrder,
		false,
		"CAST (substr(descr.SPHD, 4,3) AS INT) > 10 \n" +
		"and CAST (substr(descr.SPHD, 4,3) AS INT) < 91 " ,
		fillTeskSegment,
		eventErrorCallBack);
}

summaryService.loadTasksAdded = function(){
	function fillTeskSegment(res){

		if (validationModel.isNull(res) || res.length == 0){
			summaryService.form.tabPane.segAddedTasks.setData(
				[{'count': ' ',
				 'description': 'Pas de tâche ajoutée'
                 }]
			);
			
		}else{
			var data = new Array();
			for(var i in res) {
				var dataRow = {
					'count':res[i].count+"",
					'description':res[i].description
					//'price': res[i].price.toFixed(2)+""
				};
				data.push(dataRow);
			}
			summaryService.form.tabPane.segAddedTasks.setData(data);
		}
	}
	
	taskModel.getTaskSummaryForWorkOrder(
		workOrder,
		true,
		"CAST (substr(descr.SPHD, 4,3) AS INT) > 10 \n" +
		"and CAST (substr(descr.SPHD, 4,3) AS INT) < 91 " ,
		fillTeskSegment,
		eventErrorCallBack);
}


summaryService.loadSpareParts = function(){
	var parts = sparePartModel.makeSparePartsSummaryForWorkorder(
		workOrder,
		"(co.MTHPR<>'V' or co.MTHPR is null)");
	
	if (parts == null || parts.length == 0){
		summaryService.form.tabPane.segAddedParts.setData(
			[{'count': '',
			 'price': 0,
			 'description': 'Pas de pièce',
			 'code': '',
             'pu': ''}]
		);		
	}else{
		parts= parts.filter(
			function(a){
				return a.count != 0;
			}
		);
		var data = new Array();
		for(var i in parts) {
          for(var o=0; o<parts.length; o++){
                if(parts[i].code == parts[o].code && parts[i].price == parts[o].price && i != o){
                 	parts[o].fullPrice = parts[o].fullPrice + parts[i].fullPrice;
                    parts[o].count = parts[o].count + parts[i].count;
                  	parts[o].price = parts[o].price + parts[i].price;
                  list.splice(list.indexOf(parts[i].code), 1);
                }
              }
			var dataRow = {
				'count': parts[i].count + "",
				'description': parts[i].description + ' (' + parts[i].code + ')',
				'price': parts[i].discountPrice.toFixed(2) + "",
				'fullPrice': parts[i].price.toFixed(2) + "",
				'code': parts[i].code + "",
              	'pu': parts[i].price == 0 || parts[i].count == 1?"":("Prix Uni. : "+(parts[i].price/parts[i].count).toFixed(2)+"€")
			};
			data.push(dataRow);
		}
		summaryService.form.tabPane.segAddedParts.setData(data);
		
	}
}

summaryService.loadSoldParts = function(){
	var parts = sparePartModel.makeSparePartsSummaryForWorkorder(
		workOrder,
		"co.MTHPR='V'");
	
	if (validationModel.isNull(parts) || parts.length == 0){
		summaryService.form.tabPane.segSoldParts.setData(
			[{'count': '',
			 'price': 0,
			 'description': 'Pas de pièce',
			 'code': '',
             'pu': ''}]
		);
	}else{
		parts= parts.filter(
			function(a){
				return a.count != 0;
			}
		);
		var data = new Array();
		for(var i in parts) {
			var dataRow = {
				'count': parts[i].count + "",
				'description': parts[i].description + ' (' + parts[i].code + ')',
				'price': parts[i].discountPrice.toFixed(2) + "",
				'fullPrice': parts[i].price.toFixed(2) + "",
				'code': parts[i].code + "",
              'pu': parts[i].price == 0 || parts[i].count == 1?"":("Prix Uni. : "+(parts[i].price/parts[i].count).toFixed(2)+"€")
			};
			data.push(dataRow);
		}
		summaryService.form.tabPane.segSoldParts.setData(data);
	}
}

summaryService.loadConsumtion = function(){
  
  var fillConsumtionSeg = function(currentForm, filter){
     	var parts = sparePartModel.makeSparePartsSummaryForWorkorder(
		workOrder,
		"co.MTHPR='"+filter+"'");
  
  if (parts == null || parts.length == 0){
		currentForm.setData(
			[{'count': '',
			 'price': 0,
			 'description': 'Pas de pièce',
			 'code': '',
             'pu': ''}]
		);		
	}else{
		parts= parts.filter(
			function(a){
				return a.count != 0;
			}
		);
		var data = new Array();
		for(var i in parts) {
			var dataRow = {
				'count': parts[i].count + "",
				'description': parts[i].description + ' (' + parts[i].code + ')',
				'price': parts[i].discountPrice.toFixed(2) + "",
				'fullPrice': parts[i].price.toFixed(2) + "",
				'code': parts[i].code + "",
              'pu': parts[i].price == 0 || parts[i].count == 1?"":("Prix Uni. : "+(parts[i].price/parts[i].count).toFixed(2)+"€")
			};
			data.push(dataRow);
		}
		currentForm.setData(data);
	}
  }
  
    fillConsumtionSeg(summaryService.form.tabPane.segPreventiveConsumption, 'E');
  fillConsumtionSeg(summaryService.form.tabPane.segCurativeConsumption, 'I');
 
}



summaryService.countTotal = function (){
	var total = 0; 
	var discountTotal = 0; 
	
	function sumPrices(data, property){
		if (validationModel.isNull(data) || validationModel.isNull(data[0][property])){
			return 0;
		}
		
		var sum = 0;
		for (var d in data){
			sum += parseFloat(data[d][property]);
		}
		return sum;
	}
	
	total += sumPrices(summaryService.form.tabPane.segAddedParts.data, "fullPrice");
	total += sumPrices(summaryService.form.tabPane.segSoldParts.data, "fullPrice");
	discountTotal += sumPrices(summaryService.form.tabPane.segAddedParts.data, "price");
	discountTotal += sumPrices(summaryService.form.tabPane.segSoldParts.data, "price");
	
  
	
	summaryService.form.tabPane.lblDiscount.text = (total - discountTotal).toFixed(2);
}

summaryService.checkAllTasksDone = function(currentWo){
	var res = false;
	var todoTasks = {};
	
	if(currentWo){
		todoTasks = taskModel.findTasksSummaryByWorkOrder(
		currentWo,
		"COALESCE(dt.SOURCE, 'NULL') in ('NULL', 'TPJ', 'TPK')  and \n" + 
		"Coalesce(dt.CK01, 'NULL') = 'NULL' " );
	}else{
		todoTasks = taskModel.findTasksSummaryByWorkOrder(
		workOrder,
		"COALESCE(dt.SOURCE, 'NULL') in ('NULL', 'TPJ', 'TPK')  and \n" + 
		"Coalesce(dt.CK01, 'NULL') = 'NULL' " );
	}
		
	if (todoTasks.length > 0 || !summaryService.validConsistency) {
		res = false;
	} else {
		res = true;
	}
	
	return res;
}

summaryService.checkActiveDevice = function(currentWo){
  
  var wo = workOrder;
  if(currentWo){
    wo = currentWo;
  }
  
  callBackModel.context.sql = "select count(*) count from CustomerInstalledBase where numb = "+wo.equipmentNumber+" and COALESCE(y56ATYPE, 'NULL') in ('A','NULL') and y56indla = 'A'";
   
  	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
  if(callBackModel.result.count == 0){
    return false;
  }else{
    return true;
  }
  
  
}

summaryService.toggleVisibility = function(widget, img) {
	var vis = widget.isVisible;
	if (!validationModel.isNull(vis)) {
		vis = !vis;
		widget.isVisible = vis;
		img.src = vis ? "chevrondown.png" : "chevronright.png";
	}
}

summaryService.onDiscountSelection = function (positiveDiscount) {
	summaryService.form.tabPane.lblDiscountPc.text = positiveDiscount;
	sparePartModel.updateSparePartsDiscountByWorkOrder(workOrder, positiveDiscount, summaryService.discountTariffs);
	summaryService.tabChange();
}

// Displays item prices on/off
summaryService.VALOClicked = function() {
  //kony.application.getCurrentForm().destroy();
  summaryService.tabChange();
	summaryService.ValoDisplay = !summaryService.ValoDisplay;
	if (summaryService.ValoDisplay) {
		summaryService.form.tabPane.segTaskDone.rowTemplate = hbTplTaskDone;
		summaryService.form.tabPane.segAddedTasks.rowTemplate = hbTplTaskAdded;
		summaryService.form.tabPane.segAddedParts.rowTemplate = hbTplSummaryPartsVALO;
		summaryService.form.tabPane.segSoldParts.rowTemplate = hbTplSummaryPartsVALO;
      	summaryService.form.tabPane.segPreventiveConsumption.rowTemplate = hbTplSummaryPartsVALO;
     	summaryService.form.tabPane.segCurativeConsumption.rowTemplate = hbTplSummaryPartsVALO;
      
    
		
		if (summaryService.resetDiscount) {
			// Load the discounts
			var cbxDiscountMasterData = [];
			var maxDiscount = pricing.getOneShotDiscount(workOrder);
			cbxDiscountMasterData.push(["0", 0]);
			if (!validationModel.isNull(maxDiscount)) {
				summaryService.discountTariffs = maxDiscount[maxDiscount.minDiscount];
				for (var i = 1; i <= parseInt(maxDiscount.minDiscount); i++) {
					cbxDiscountMasterData.push([i.toString(), i]);
				}
			}
			summaryService.form.tabPane.cbxDiscount.masterData = cbxDiscountMasterData;
			var sparePartSummaryEntries = sparePartModel.findSparePartSummaryEntriesByWorkOrder(workOrder, 'UNITECH', true, summaryService.discountTariffs);
			summaryService.form.tabPane.cbxDiscount.selectedKey = (!validationModel.isNull(sparePartSummaryEntries) && sparePartSummaryEntries.length > 0) ? -(sparePartSummaryEntries[0].discount) : "0";
			summaryService.resetDiscount = false;
		}
      
		summaryService.onDiscountSelection(summaryService.form.tabPane.cbxDiscount.selectedKey);
      kony.application.getCurrentForm().hbxTotalPrice.isVisible = true;
	} else {
		summaryService.form.tabPane.segTaskDone.rowTemplate = hbTplTaskDone;
		summaryService.form.tabPane.segAddedTasks.rowTemplate = hbTplTaskAdded;
		summaryService.form.tabPane.segAddedParts.rowTemplate = hbTplSummaryParts;
		summaryService.form.tabPane.segSoldParts.rowTemplate = hbTplSummaryParts;
            	summaryService.form.tabPane.segPreventiveConsumption.rowTemplate = hbTplSummaryParts;
     	summaryService.form.tabPane.segCurativeConsumption.rowTemplate = hbTplSummaryParts;
            kony.application.getCurrentForm().hbxTotalPrice.isVisible = false;

    kony.application.getCurrentForm().hbxDiscountPrice.setVisibility(false);

	}
	summaryService.form.tabPane.lblDiscountPc.isVisible = false; //summaryService.ValoDisplay && summaryService.isReadOnly;
	summaryService.form.tabPane.cbxDiscount.isVisible = summaryService.ValoDisplay && !summaryService.isReadOnly;
	//summaryService.form.tabPane.hbxTotalPrice.isVisible = summaryService.ValoDisplay;		
	//summaryService.form.tabPane.hbxDiscount.isVisible = summaryService.ValoDisplay;		
	//summaryService.form.tabPane.hbxDiscountPrice.isVisible = summaryService.ValoDisplay;
	summaryService.form.tabPane.lnTop.isVisible = summaryService.ValoDisplay;
	summaryService.form.tabPane.lnBottom.isVisible = summaryService.ValoDisplay;
	
	
	discountSummary.displayOrHideCheckboxForDiscounts(workOrder, summaryService.form.tabPane.cbxDiscount, summaryService.form.tabPane.lblDiscountPc);
  
 /* if(kony.application.getCurrentForm().hbxTotalPrice.isVisible == true){
        kony.application.getCurrentForm().hbxTotalPrice.isVisible = false;
        kony.application.getCurrentForm().hbxDiscountPrice.isVisible = false;

      }else{
        kony.application.getCurrentForm().hbxTotalPrice.isVisible = true;
        kony.application.getCurrentForm().hbxDiscountPrice.isVisible = true;
      }*/
}

summaryService.loadCanceledTasks = function(){

	var data = [];
	
	// get task families for the WO 
	var taskTypes =
		taskModel.findTasksTypesForWorkOrderAndWhereClause(workOrder,
			"((COALESCE(btdt.SOURCE, 'NULL') in ('NULL', 'TPJ') and COALESCE(btdt.N001, 'NULL') <> 'NULL') \n" +
			"or (COALESCE(btdt.SOURCE, 'NULL') in ('TPK'))) \n" +
			"and itm.PRP0 in (select KY from udc where sy = '41' and rt = '05' and SPHD in ('2','3')) \n" +
			"and btdt.CK01 = 'N' \n" +
			"and CAST (substr(descr.SPHD, 4,3) AS INT) > 10 \n" +
			"and CAST (substr(descr.SPHD, 4,3) AS INT) < 91 "
	);
 
	
	
	// for each type
	for (var i in taskTypes){

		// get tasks
		var typedTasks = taskModel.findTasksByItemWorkOrderAndWhereClause(
			"and itm.srp2 = '" + taskTypes[i].typeCode + "' \n" +
			"and ((COALESCE(btdt.SOURCE, 'NULL') in ('NULL', 'TPJ') and COALESCE(btdt.N001, 'NULL') <> 'NULL') \n" +
			"or   (COALESCE(btdt.SOURCE, 'NULL') in ('TPK'))) \n" +
			"and itm.PRP0 in (select KY from udc where sy = '41' and rt = '05' and SPHD in ('2','3')) \n" +
			"and btdt.CK01 = 'N' \n" +
			"and CAST (substr(descr.SPHD, 4,3) AS INT) > 10 \n" +
			"and CAST (substr(descr.SPHD, 4,3) AS INT) < 91 ",
			null,
			workOrder
		);
		
		//get matching Items (in desorder)
		var items = itemModel.findItemForTasks(typedTasks);
		var sortedItems = typedTasks.map(
			function(t){
				return items[
					de.itgs.javascript.Array.find(
						items,
						function (i){
							return i.jdeId == t.jdeId;
						}
					)
				];
			}
		);
		
		
		var typedData = [];
		for (var j in typedTasks){
			// get Item details from code
			if(validationModel.isNull(sortedItems[j])) {
				var whereClause = " and dt.id = " + typedTasks[j].id + " ";
				typedTasks[j].KY = taskTypes[i].typeCode;
				var taskDetail = taskModel.findTaskDetailsByWorkOrderAndTask(workOrder,typedTasks[j],null,whereClause);
				if(validationModel.isNull(taskDetail) || taskDetail.length != 1) continue;
				typedData.push(
					{
						description : typedTasks[j].name,
						place : taskDetail[0].location + " / " +
							taskDetail[0].floor + " / " +
							taskDetail[0].placement,
						motive : typedTasks[j].reasonLabel,
						SN : "(" + typedTasks[j].usualCode + ")"
					}
				);
			}
			else {
				typedData.push(
					{
						description : sortedItems[j].name,
						place : sortedItems[j].location + " / " +
							sortedItems[j].floor + " / " +
							sortedItems[j].placement,
						motive : typedTasks[j].reasonLabel?typedTasks[j].reasonLabel:"",//////
						SN : "ID : " + sortedItems[j].batchNumber
					}
				);
			}
		}
		
		// put in data array
		data.push(
			{
				title : "" + typedData.length + " " + taskTypes[i].type,
				data : typedData
			}
		);
	}
	
	
	summaryService.form.tabPane.hbCanceledTaskGroup.add(
		widgetFunctions.makeSectionnedSegments(
			data,
			hbTplItem,
			{
				lblCar : 'description',
				lblPlace : 'place',
				lblMotive : 'motive',
				lblId : 'SN'
			},
			false
		)
	);
	
	summaryService.form.tabPane.lblCanceledNone.isVisible = (data.length ==0);
	
	summaryService.form.tabPane.lblLoadingCanceled.isVisible = false;
	
}


summaryService.removeItem = function(){
	var disabledItem = itemModel.findItemsByWhereClauseAndSortOrder(" and cib.id = " + this.info.cibid + " \n")[0];
	itemRemove.show(disabledItem, 'summary');
}

summaryService.deactivateTask = function(){
	var disabledTask = taskModel.findTaskById(this.info.taskId);
	var item = itemModel.findItemByBaseId(disabledTask.cibid);
	if(!validationModel.isNull(item)) {
		itemVerify.item = item;
		itemVerify.item.isScanned = 'N';
		taskModel.setTasksScannedFlagForItem(itemVerify.item, workOrder);  
		frmItemVerify.show();
	} else {
		popupModel.showPopError("Cette tâche n'est rattachée à aucun appareil");
	}
}

summaryService.loadTodoTasks = function(){

	summaryService.toDoTaskTypes = [];
	summaryService.form.lblTodoNone.isVisible = false;
	summaryService.form.segToDoTasks.removeAll();
	
	
	
	// Find tasks by task type, exluding task ids in the excludeIds array
	summaryService.findToDoTasksByType = function (type, excludeIds) {
		var tasks = taskModel.findTasksByItemWorkOrderAndWhereClause(
						"and itm.srp2 = '" + type.typeCode + "' \n" +
						"and ((COALESCE(btdt.SOURCE, 'NULL') in ('NULL', 'TPJ') and COALESCE(btdt.N001, 'NULL') <> 'NULL') \n" +
						"or   (COALESCE(btdt.SOURCE, 'NULL') in ('TPK'))) \n" +
						"and itm.PRP0 in (select KY from udc where sy = '41' and rt = '05' and SPHD in ('2','3')) \n" +
						"and COALESCE(btdt.CK01, 'NULL') = 'NULL'  \n" +
						"and CAST (substr(descr.SPHD, 4,3) AS INT) > 10 \n" +
						"and CAST (substr(descr.SPHD, 4,3) AS INT) < 91 \n",
						null,
						workOrder,
						undefined,
						undefined,
						20,
						excludeIds
					);
	
		// if we found the limit of 20 tasks, assume there are more to load
		type.hasMoreTasks = (tasks.length == 20);
		
		// get matching Items (in desorder)
		var items = itemModel.findItemForTasks(tasks);
		for (var i = 0; i < tasks.length; i ++) {
			for (var j = 0; j < items.length; j ++) {
				if (tasks[i].jdeId == items[j].jdeId) {
					tasks[i].item = items[j];
					break;
				}
			}
		}
		
		return tasks;
	}

	// Load task type section headers
	summaryService.loadSegToDoTaskTypes = function () {
		summaryService.toDoTaskTypes = taskModel.findTasksTypesForWorkOrderAndWhereClause(
											workOrder,
											"((COALESCE(btdt.SOURCE, 'NULL') in ('NULL', 'TPJ') and COALESCE(btdt.N001, 'NULL') <> 'NULL') \n" +
											"or (COALESCE(btdt.SOURCE, 'NULL') in ('TPK'))) \n" +
											"and itm.PRP0 in (select KY from udc where sy = '41' and rt = '05' and SPHD in ('2','3')) \n" +
											"and COALESCE(btdt.CK01, 'NULL') = 'NULL'  \n" +
											"and CAST (substr(descr.SPHD, 4,3) AS INT) > 10 \n" +
											"and CAST (substr(descr.SPHD, 4,3) AS INT) < 91 \n");

		var segToDoTasksMasterData = [];
		for (var i = 0; i < summaryService.toDoTaskTypes.length; i ++) {
			summaryService.toDoTaskTypes[i].isSelected = true;
			segToDoTasksMasterData.push([{lblType: "" + summaryService.toDoTaskTypes[i].taskCount + " " + summaryService.toDoTaskTypes[i].type, imgDisplay: {src: "chevronright.png"}},[]]);
		}
		summaryService.form.segToDoTasks.isVisible = (segToDoTasksMasterData.length > 0);
		summaryService.form.lblTodoNone.isVisible = (segToDoTasksMasterData.length == 0);
		summaryService.form.segToDoTasks.setData(segToDoTasksMasterData);
	}
	
	// Collapse a given task type section
	summaryService.collapseToDoTaskType = function (sectionIndex) {
		var type = summaryService.toDoTaskTypes[sectionIndex];
		
		// Clear the section
		var segToDoTasksMasterData = [[{lblType: "" + type.taskCount + " " + type.type, imgDisplay: {src: "chevronright.png"}},[]]];
		//summaryService.form.segToDoTasks.setSectionAt(segToDoTasksMasterData, sectionIndex);
      	summaryService.form.segToDoTasks.setSectionAt(segToDoTasksMasterData[0], sectionIndex);				//Arati : #100086 Changed for NSRangeException

		type.isVisible = false;
	}
	
	// Expand a given task type section
	summaryService.expandToDoTaskType = function (sectionIndex) {
		var type = summaryService.toDoTaskTypes[sectionIndex];

		// Populate the section
		var segToDoTasksMasterData = [[{lblType: "" + type.taskCount + " " + type.type, imgDisplay: {src: "chevrondown.png"}},[]]];
		
		for (var i = 0; i < type.tasks.length; i ++) {
			if (!validationModel.isNull(type.tasks[i].item)) {
				var task = {};
				task.lblCar = type.tasks[i].item.name;
				task.lblPlace = type.tasks[i].item.location + " / " + type.tasks[i].item.floor + " / " + type.tasks[i].item.placement;
				task.lblDate = "MeS : " + type.tasks[i].item.productionDate;
				task.lblId = "ID : " + type.tasks[i].item.batchNumber;
				var isUnknown = (workOrder.process == 'SICLI' && (validationModel.isNull(type.tasks[i].item.batchNumber) || type.tasks[i].item.batchNumber == ''));
				task.vbDelete = summaryService.isReadOnly? 
					{} :
					{	onClick : summaryService.removeItem,
						info : {cibid : type.tasks[i].cibid}};
				task.imgDelete = {src: summaryService.isReadOnly ? "" : "bin.png"};
				task.vbDeactivate = (summaryService.isReadOnly || isUnknown) ? 
					{} :
					{
						onClick : summaryService.deactivateTask,
						info : {taskId : type.tasks[i].id}};
				task.imgDeactivate = {src: (summaryService.isReadOnly || isUnknown) ? "" : "close.png"};
			
				segToDoTasksMasterData[0][1].push(task);
			}
			else {
				var whereClause = " and dt.id = " + type.tasks[i].id + " ";
				type.tasks[i].KY = type.typeCode;
				var taskDetail = taskModel.findTaskDetailsByWorkOrderAndTask(workOrder,type.tasks[i],null,whereClause, 'limit 1');
				if(validationModel.isNull(taskDetail) || taskDetail.length != 1) continue;
				var task = {};
				task.lblCar = taskDetail[0].name;
				task.lblPlace = taskDetail[0].location + " / " + taskDetail[0].floor + " / " + taskDetail[0].placement;
				task.lblDate = " ";
				task.lblId = "(" + type.tasks[i].usualCode + ")";
				task.vbDelete = {};
				task.imgDelete = {src: ""};
				task.vbDeactivate =  summaryService.isReadOnly? 
					{} :
					{	onClick : summaryService.deactivateTask, 
						info : {taskId : type.tasks[i].id}};
				task.imgDeactivate = {src: summaryService.isReadOnly ? "" : "close.png"};
			
				segToDoTasksMasterData[0][1].push(task);
			}
		}
		
		if (type.hasMoreTasks) segToDoTasksMasterData[0][1].push({lblCar: "Voir plus ..", imgDelete: ""});
		
		//summaryService.form.segToDoTasks.setSectionAt(segToDoTasksMasterData, sectionIndex);
      	summaryService.form.segToDoTasks.setSectionAt(segToDoTasksMasterData[0], sectionIndex);     //Arati : #100086 Changed for NSRangeException
		
		type.isVisible = true;
	}
	
	summaryService.loadSegToDoTaskTypes();
}

summaryService.loadChubbTasks = function () {
	summaryService.chubbTasks = taskModel.findChubbTasksByWorkOrder(workOrder);

	var	segChubbTasksMasterData = [];
	for (var i = 0 ; i < summaryService.chubbTasks.length ; i ++) {
		var task = {};
		task.lblQuantity = summaryService.chubbTasks[i].quantity;
		task.lblName = summaryService.chubbTasks[i].subFamilyName;
		if (summaryService.chubbTasks[i].quantity == 1) {
			var item = itemModel.findItemsByWhereClauseAndSortOrder(undefined, undefined, undefined, [summaryService.chubbTasks[i].itemIds])[0];
			task.lblLocation = (item.location.length == 0) ? "" : item.location;
			task.lblLocation += (item.location.length == 0 && item.floor.length == 0) ? "" : "/";
			task.lblLocation += (item.floor.length == 0) ? "" : item.floor;
			task.lblLocation += (item.floor.length == 0 && item.placement.length == 0) ? "" : "/";
			task.lblLocation += (item.placement.length == 0) ? "" : item.placement;
		}
		task.hbxTask = 	summaryService.isReadOnly ? { skin : "Skin Defaults" } : (
						summaryService.chubbTasks[i].type == 0 ? { skin : "sknVBBtnFocusSquare" } : { skin : "Skin Defaults" });
		task.imgSelect = (summaryService.chubbTasks[i].isCompleted > 0) ? { src: "selected.png" } : (
		                 (summaryService.chubbTasks[i].isCancelled > 0) ? { src: "close.png" } : { src: "selectednot.png" });
      task.hbxTaskBouton = (summaryService.chubbTasks[i].type == 0 ? { isVisible : true } : { isVisible : true }); // Change to show button everytime
		segChubbTasksMasterData.push(task);
	}
	summaryService.form.segChubbTasks.setData(segChubbTasksMasterData);
}

summaryService.onChubbTaskCompletion = function (rowIndex) {
	var chubbTask = summaryService.chubbTasks[rowIndex];
	if (chubbTask.type == 0 || summaryService.isReadOnly) return;

	showSyncLoadingScreen('Mise à jour des tâches en cours...');
	summaryService.onChubbTaskCompletionCB = function () {
		// showSyncLoadingScreen('Mise à jour des tâches en cours...');
		var tasks = taskModel.findTasksByItemWorkOrderAndWhereClause("and btdt.id in (" + chubbTask.ids + ")");
		workOrder = workOrderModel.findWorkOrderByDoco(workOrder.doco);
		showSyncLoadingScreen('Mise à jour des tâches en cours...');
		var updatedTasks = new Array();
		var nextStatus = (chubbTask.isCompleted == 0 && chubbTask.isCancelled == 0) ? 'O' : ((chubbTask.isCompleted > 0) ? 'N' : 'NULL');
		// showSyncLoadingScreen('Mise à jour des tâches en cours...');
		for (var i = 0; i < tasks.length; i ++) {
			// Update the task
			var task = tasks[i];
			task.status = nextStatus;
			if (nextStatus == 'O') {
				var realisationDate = dateTimePrintSql(new Date());
				task.realDate = realisationDate.substring(0, 10);
				task.realTime = realisationDate.substring(11);
			}
			task.nonCompletionReason = 'NULL';
			updatedTasks.push(task);
		}
		//showSyncLoadingScreen('Mise à jour des tâches en cours...');
		// update all tasks together than through multiple calls.
		if (updatedTasks.length > 0)
			taskModel.updateTasks(updatedTasks);
		//showSyncLoadingScreen('Mise à jour des tâches en cours...');
		if (workOrder.typeCode != 'P') {
		// first step : identify the different tasks (distinct task code) 
			//showSyncLoadingScreen('Mise à jour des tâches en cours...');
			var qtyCoef = nextStatus == 'O' ? 1 : (nextStatus == 'N' ? -1 : 0);
			var distinctTasks = {};
			var distinctTaskCodes = new Array();
			for(var i = 0; i < updatedTasks.length; i++) {
				var task = updatedTasks[i];
				var taskCode = task.articleId;
				if (distinctTaskCodes.indexOf(taskCode) >= 0) distinctTasks[taskCode].quantity += qtyCoef;
				else {
					distinctTasks[taskCode] = {data : task ,quantity : qtyCoef};
					distinctTaskCodes.push(taskCode);
				}
			}
			// showSyncLoadingScreen('Mise à jour des tâches en cours...');
			for(var i = 0; i < distinctTaskCodes.length; i++) {
				var task = distinctTasks[distinctTaskCodes[i]].data;
				var quantity = distinctTasks[distinctTaskCodes[i]].quantity;
				sparePartModel.updateSparePartSummaryEntryByChubbTask(task, quantity, workOrder);
			}
		}
		summaryService.loadChubbTasks();
	}
	summaryService.onChubbTaskCompletionCB();
	dismissSyncLoadingScreen();
	// popupModel.showPopError("Voulez-vous modifier cettes Tâches?", summaryService.onChubbTaskCompletionCB, undefined, true);
}

summaryService.onChubbTaskSelection = function (rowIndex) {
	var chubbTask = summaryService.chubbTasks[rowIndex];
	if (chubbTask.quantity > 1) {
		chubbTaskTopology.itemIds = chubbTask.itemIds.split(",");
		frmChubbTaskTopology.show();
	} else {
		itemVerify.item = itemModel.findItemsByWhereClauseAndSortOrder(undefined, undefined, undefined, [chubbTask.itemIds])[0];
		frmItemVerify.show();
	}	
}

summaryService.onToDoTaskTypeSelection = function (sectionIndex) {
	// Load the task type section
	var type = summaryService.toDoTaskTypes[sectionIndex];
	if (validationModel.isNull(type.tasks)) {
		type.tasks = summaryService.findToDoTasksByType(type);	
		summaryService.expandToDoTaskType(sectionIndex);
	} else if (type.isVisible) {
		summaryService.collapseToDoTaskType(sectionIndex);
	} else {
		summaryService.expandToDoTaskType(sectionIndex);
	}
}

summaryService.onTodoTaskSelection = function (sectionIndex, rowIndex, selectedItem) {
	var type = summaryService.toDoTaskTypes[sectionIndex];

	// If there are more tasks to be loaded, look for more 
	// and attach them to the bottom of the list
	if (type.hasMoreTasks && selectedItem.lblCar == 'Voir plus ..') {
		var taskIds = [];
		for (var i = 0; i < type.tasks.length; i ++) {
			taskIds.push(type.tasks[i].id);
		}
		
		type.tasks = type.tasks.concat(summaryService.findToDoTasksByType(type, taskIds));
	 	summaryService.expandToDoTaskType(sectionIndex);
	}	
}

summaryService.getMotive = function(title, choices, callback, canCancel){
		function cancelCB(){
			callback(null);
		}
		function okCB(){
			callback(popDefault.cbx.selectedKeyValue);
		}
		
		var popupConfig = [
			{confirm: true,
			 confirmCB: okCB,
			 cancel: canCancel,
			 cancelCB: cancelCB},
			undefined,
			{lblCbx: title,
			 masterData: choices,
			 selectedKey: "0"}
		];
		popupModel.showPopDefault(popupConfig);
}

summaryService.loadNonCodedItemTasks = function(){

	summaryService.nonCodedItemTaskTypes = [];
	summaryService.form.lblNonCodedItemTasksNone.isVisible = false;
	summaryService.form.segNonCodedItemTasks.removeAll();
	
	// Find tasks by task type, exluding task ids in the excludeIds array
	summaryService.findNonCodedItemTasksByType = function (type) {
		var tasks = taskModel.findTasksByItemWorkOrderAndWhereClause(
						"and btdt.id in (" + type.taskIds + ") \n",
						null,
						workOrder,
						undefined,
						undefined,
						undefined,
						undefined,
						true,
						true
					);
		
		return tasks;
	}

	// Load task type section headers
	summaryService.loadSegNonCodedItemTaskTypes = function () {
      
		summaryService.nonCodedItemTaskTypes = taskModel.findTasksTypesForWorkOrderAndWhereClause(
											workOrder,
											"COALESCE(btdt.SOURCE, 'NULL') in ('NULL', 'TPJ') \n" +
											"and COALESCE(btdt.N001, 'NULL') = 'NULL' \n" +
											"and itm.PRP0 in (select KY from udc where sy = '41' and rt = '05' and SPHD in ('2','3')) \n" +
											"and CAST (substr(descr.SPHD, 4,3) AS INT) > 10 \n" +
											"and CAST (substr(descr.SPHD, 4,3) AS INT) < 91 \n");

		var segNonCodedItemTasksMasterData = [];
		for (var i = 0; i < summaryService.nonCodedItemTaskTypes.length; i ++) {
			var type = summaryService.nonCodedItemTaskTypes[i];
			var typeHasNeutralTasks = (type.taskStatuses.indexOf('NULL') > -1);
			var typeHasCompletedTasks = (type.taskStatuses.indexOf('O') > -1);
			var typeHasCancelledTasks = (type.taskStatuses.indexOf('N') > -1);
			type.status = (typeHasCompletedTasks && !typeHasNeutralTasks && !typeHasCancelledTasks) ? 'O' : (
						  (typeHasCancelledTasks && !typeHasNeutralTasks && !typeHasCompletedTasks) ? 'N' : '');
			
			segNonCodedItemTasksMasterData.push([{
				lblType: "" + type.taskCount + " " + type.type, 
				imgDisplay: {src: "chevronright.png"},
				imgSelectAll: (type.status == 'O') ? {src: "selected.png"} : (
							  (type.status == 'N') ? {src: "close.png"} : 
													 {src: "selectednot.png"})},[]]);
		}
		summaryService.form.segNonCodedItemTasks.isVisible = (segNonCodedItemTasksMasterData.length > 0);
		summaryService.form.lblNonCodedItemTasksNone.isVisible = (segNonCodedItemTasksMasterData.length == 0);
		summaryService.form.segNonCodedItemTasks.setData(segNonCodedItemTasksMasterData);
	}
	
	// Collapse a given task type section
	summaryService.collapseNonCodedItemTaskType = function (sectionIndex) {
		var type = summaryService.nonCodedItemTaskTypes[sectionIndex];
		
		// Clear the section
		var segNonCodedItemTasksMasterData = [[{lblType: "" + type.taskCount + " " + type.type, imgDisplay: {src: "chevronright.png"}},[]]];
		segNonCodedItemTasksMasterData[0][0].imgSelectAll = (type.status == 'O') ? {src: "selected.png"} : (
															(type.status == 'N') ? {src: "close.png"} : 
															 					   {src: "selectednot.png"});
		//summaryService.form.segNonCodedItemTasks.setSectionAt(segNonCodedItemTasksMasterData, sectionIndex);
		summaryService.form.segNonCodedItemTasks.setSectionAt(segNonCodedItemTasksMasterData[0], sectionIndex);				//Arati : #100086 Changed for NSRangeException
		type.isVisible = false;
	}
	
	// Expand a given task type section
	summaryService.expandNonCodedItemTaskType = function (sectionIndex) {
		var type = summaryService.nonCodedItemTaskTypes[sectionIndex];

		// Populate the section
		var segNonCodedItemTasksMasterData = [[{lblType: "" + type.taskCount + " " + type.type, imgDisplay: {src: "chevrondown.png"}},[]]];
		var typeStatusMap = [];
		
		for (var i = 0; i < type.tasks.length; i ++) {
			var task = {};
			task.lblName = type.tasks[i].nonCodedItemName;
			task.lblCode = type.tasks[i].nonCodedItemUsualCode;
			task.lblQuantity = "Quantité : " + type.tasks[i].quantity;
			task.lblLocation = type.tasks[i].location + " / " + type.tasks[i].floor + " / " + type.tasks[i].placement;
			task.lblReason = (validationModel.isNull(type.tasks[i].reasonLabel) || type.tasks[i].reasonLabel.length == 0) ? '' :  'Motif : ' + type.tasks[i].reasonLabel;
			task.vbEdit = {isVisible: !summaryService.isReadOnly};
			task.imgEdit = {src:  summaryService.isReadOnly ? "" : "edit.png"};
			task.vbSelect = {isVisible: !summaryService.isReadOnly};
			task.imgSelect = summaryService.isReadOnly ? "" : (
					(type.tasks[i].status == 'O') ? {src: "selected.png"} : (
					(type.tasks[i].status == 'N') ? {src: "close.png"} : 
													{src: "selectednot.png"}
				) 
			);
			if (typeStatusMap.indexOf(type.tasks[i].status) == -1) typeStatusMap.push(type.tasks[i].status);
			segNonCodedItemTasksMasterData[0][1].push(task);
		}
		
		type.status = (typeStatusMap.length != 1) ? '' : typeStatusMap[0];
		segNonCodedItemTasksMasterData[0][0].imgSelectAll = (type.status == 'O') ? {src: "selected.png"} : (
															(type.status == 'N') ? {src: "close.png"} : 
															 					   {src: "selectednot.png"});

		//summaryService.form.segNonCodedItemTasks.setSectionAt(segNonCodedItemTasksMasterData, sectionIndex);
		summaryService.form.segNonCodedItemTasks.setSectionAt(segNonCodedItemTasksMasterData[0], sectionIndex); 				//Arati : #100086 Changed for NSRangeException
		type.isVisible = true;
	}
	
	summaryService.loadSegNonCodedItemTaskTypes();
}

summaryService.onNonCodedItemTaskTypeSelection = function (sectionIndex) {
	// Load the task type section
	var type = summaryService.nonCodedItemTaskTypes[sectionIndex];
	if (validationModel.isNull(type.tasks)) {
		type.tasks = summaryService.findNonCodedItemTasksByType(type);	
		summaryService.expandNonCodedItemTaskType(sectionIndex);
	} else if (type.isVisible) {
		summaryService.collapseNonCodedItemTaskType(sectionIndex);
	} else {
		summaryService.expandNonCodedItemTaskType(sectionIndex);
	}
}

summaryService.onNonCodedItemTaskSelection = function (sectionIndex, rowIndex, selectedItem) {
    if (summaryService.isReadOnly) return;
  
	var type = summaryService.nonCodedItemTaskTypes[sectionIndex];
	var task = type.tasks[rowIndex];
	// Toggle the status (unselected >> selected >> cancelled >> unselected)
	task.status = (task.status == 'O') ? 'N' : (
				  (task.status == 'N') ? '' : 'O');
	
	// Update the tasks (set status + clear completionReason)
	var currentDate = dateTimePrintSql(new Date());
	var realDate = (task.status == 'O') ? currentDate.substring(0, 10) : 'NULL';
	var realTime = (task.status == 'O') ? currentDate.substring(11) : 'NULL';
	taskModel.updateParamsForTaskIds(
		['CK01','AA05','STRX','TMCO'], 
		[task.status,'NULL',realDate,realTime], 
		task.taskIds.split(","));

	task.reasonLabel = '';
	
	// Update the section / rows
	if (type.isVisible) summaryService.expandNonCodedItemTaskType(sectionIndex);
	else summaryService.collapseNonCodedItemTaskType(sectionIndex);
	
	// Ask for a nonCompletionReason if task.status == 'N'
	if (task.status == 'N') {
		summaryService.onNonCodedItemTaskEdit(sectionIndex, rowIndex, selectedItem);
	}
}

summaryService.onNonCodedItemTaskEdit = function (sectionIndex, rowIndex, selectedItem) {
	var type = summaryService.nonCodedItemTaskTypes[sectionIndex];
	var task = type.tasks[rowIndex];
	var popupConfig;

	summaryService.onNonCodedItemTaskEditCB = function () {
		// Motive is mandatory if task not done
		if (task.status == 'N' && popDefault.cbx.selectedKey == "NONE") {
			popupModel.showPopError("Veuillez choisir le motif de non-réalisation avant de continuer",
			                        popupModel.showPopDefault,
									popupConfig);
		} else {
			// If quantity affected is empty or smaller than 0, set the quantity to 0
			if (popDefault.txt.text.length == 0 || parseInt(popDefault.txt.text) < -1) {
				popDefault.txt.text = 0;
			}
		
			// Set the motive if applicable
			if (task.status == 'N' && parseInt(popDefault.txt.text) > 0) {
				task.nonCompletionReason = popDefault.cbx.selectedKeyValue[0];
				taskModel.updateParamsForTaskIds(['AA05'], [task.nonCompletionReason], task.taskIds.split(","));
			}
			
			// If less tasks were done then given, set the remainder to neutral
			if (task.quantity - parseInt(popDefault.txt.text) > 0) {
				var deallocatedTaskIds = task.taskIds.split(",").slice(0,task.quantity - parseInt(popDefault.txt.text));
				taskModel.updateParamsForTaskIds(
					['CK01','AA05','STRX','TMCO'], 
					['NULL','NULL','NULL','NULL'], 
					deallocatedTaskIds);
			}
			
			// Update the section / rows
			type.tasks = summaryService.findNonCodedItemTasksByType(type);
			if (type.isVisible) summaryService.expandNonCodedItemTaskType(sectionIndex);
			else summaryService.collapseNonCodedItemTaskType(sectionIndex);
		}
	}

	if (task.status == 'N') {
		var taskCompletionReasons = taskModel.findTaskCompletionReasonsByType('NonCompleted');
		var cbxEditMasterData = [["NONE",""]];
		for (var i = 0; i < taskCompletionReasons.length; i++) {
			cbxEditMasterData.push([taskCompletionReasons[i].code, taskCompletionReasons[i].name]);
		}
	}
	
	popupConfig = [
		{confirm: true,
		 confirmCB: summaryService.onNonCodedItemTaskEditCB,
		 cancel: (task.status != 'N')},
		{lblText: 'Quantité à traiter (max. ' + task.quantity + ')',
		 txtText: task.quantity},
		((task.status == 'N') ? 
		{lblCbx: 'Veuillez choisir le motif de non-réalisation',
		 masterData: cbxEditMasterData,
		 selectedKey: "NONE"} : undefined)
	];
	popupModel.showPopDefault(popupConfig);
}

summaryService.onBtnSelectAllNonCodedItemTasksClick = function (sectionIndex) {
    if (summaryService.isReadOnly) return;
  
	var type = summaryService.nonCodedItemTaskTypes[sectionIndex];
	var popupConfig;
	
	// Toggle the status (unselected >> selected >> cancelled >> unselected)
	type.status = (type.status == 'O') ? 'N' : (
				  (type.status == 'N') ? '' : 'O');
	
	// Update the tasks
	var currentDate = dateTimePrintSql(new Date());
	var realDate = (type.status == 'O') ? currentDate.substring(0, 10) : 'NULL';
	var realTime = (type.status == 'O') ? currentDate.substring(11) : 'NULL';
	taskModel.updateParamsForTaskIds(
		['CK01','AA05','STRX','TMCO'], 
		[type.status,'NULL',realDate,realTime], 
		type.taskIds.split(","));
		
		// Ask for a motive, if type.status = 'N'
		if (type.status == 'N') {
			summaryService.onBtnSelectAllNonCodedItemTasksClickCB = function () {
				// Motive is mandatory if task not done
				if (popDefault.cbx.selectedKey == "NONE") {
					popupModel.showPopError("Veuillez choisir le motif de non-réalisation avant de continuer",
											popupModel.showPopDefault,
											popupConfig);
				} else {				
					// Set the motive
					type.nonCompletionReason = popDefault.cbx.selectedKeyValue[0];
					taskModel.updateParamsForTaskIds(['AA05'], [type.nonCompletionReason], type.taskIds.split(","));
					
					// Update the section / rows
					type.tasks = summaryService.findNonCodedItemTasksByType(type);
					if (type.isVisible) summaryService.expandNonCodedItemTaskType(sectionIndex);
					else summaryService.collapseNonCodedItemTaskType(sectionIndex);
				}
			}
		
			var taskCompletionReasons = taskModel.findTaskCompletionReasonsByType('NonCompleted');
			var cbxEditMasterData = [["NONE",""]];
			for (var i = 0; i < taskCompletionReasons.length; i++) {
				cbxEditMasterData.push([taskCompletionReasons[i].code, taskCompletionReasons[i].name]);
			}
			
			popupConfig = [
				{confirm: true,
				 confirmCB: summaryService.onBtnSelectAllNonCodedItemTasksClickCB,
				 cancel: false},
				 undefined,
				{lblCbx: 'Veuillez choisir le motif de non-réalisation',
				 masterData: cbxEditMasterData,
				 selectedKey: "NONE"}
			];
			popupModel.showPopDefault(popupConfig);
		} else {
			// Update the section / rows
			type.tasks = summaryService.findNonCodedItemTasksByType(type);
			if (type.isVisible) summaryService.expandNonCodedItemTaskType(sectionIndex);
			else summaryService.collapseNonCodedItemTaskType(sectionIndex);
		}
	}
