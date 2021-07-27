navigationModel = {
	stack: [],
	maxStackSize: 100
};

navigationModel.getFormById = function (id) {
	
	var form;
	
	switch (id) {
		case 'e121PlanningJournalier': form = e122PanningHebdomadaire; break;
		case 'e122PanningHebdomadaire': form = e122PanningHebdomadaire; break;
		case 'e221ModifConsigne': form = e221ModifConsigne; break;
		case 'frmArticleRecommendationAdd': form = frmArticleRecommendationAdd; break;
		case 'frmArticleRecommendations': form = frmArticleRecommendations; break;
		case 'frmArticleSales': form = frmArticleSales; break;
		case 'frmArticleSalesConfirm': form = frmArticleSalesConfirm; break;
		case 'frmArticleSalesSummary': form = frmArticleSalesSummary; break;
		case 'frmArticleSalesTasks': form = frmArticleSalesTasks; break;
		case 'frmArticleSalesOrders': form = frmArticleSalesOrders; break;
		case 'frmArticleSalesQuotation': form = frmArticleSalesQuotation; break;
		case 'frmCameraComment': form = frmCameraComment; break;
		case 'frmCameraOverlay': form = frmCameraOverlay; break;
		case 'frmCatalog': form = frmCatalog; break;
		case 'frmCatalogSearch': form = frmCatalogSearch; break;
		case 'frmChubbTaskTopology': form = frmChubbTaskTopology; break;
		case 'frmEquipmentOrderOverview': form = frmEquipmentOrderOverview; break;
		case 'frmEquipmentOrderVerify': form = frmEquipmentOrderVerify; break;
		case 'frmEquipmentOrderWrite': form = frmEquipmentOrderWrite; break;
		case 'frmHome': form = frmHome; break;
		case 'frmItemBatchNumberChange': form = frmItemBatchNumberChange; break;
		case 'frmItemNeed': form = frmItemNeed; break;
		case 'frmItemRemove': form = frmItemRemove; break;
		case 'frmItems': form = frmItems; break;
		case 'frmInventory': form = frmInventory; break;
		case 'frmInventoryAllocation': form = frmInventoryAllocation; break;
		case 'frmTopology': form = frmTopology; break;
		case 'frmItemScan': form = frmItemScan; break;
		case 'frmItemScanConfig': form = frmItemScanConfig; break;
		case 'frmItemShow': form = frmItemShow; break;
		case 'frmItemVerify': form = frmItemVerify; break;
		case 'frmLogin': form = frmLogin; break;
		case 'frmLoginFirstTime': form = frmLoginFirstTime; break;
		case 'frmPartialQuotationComment': form = frmPartialQuotationComment; break;
		case 'frmPartialQuotationPrintText': form = frmPartialQuotationPrintText; break;
		case 'frmPartialQuotationSummary': form = frmPartialQuotationSummary; break;
		case 'frmQxReport': form = frmQxReport; break;
		case 'frmRecommendationEdit': form = frmRecommendationEdit; break;
		case 'frmRelatedProductAdd': form = frmRelatedProductAdd; break;
		case 'frmSparePartAdd': form = frmSparePartAdd; break;
		case 'frmSummaryService': form = frmSummaryService; break;
		case 'frmSummaryServiceChubb': form = frmSummaryServiceChubb; break;
		case 'frmSummaryServiceInstall': form = frmSummaryServiceInstall; break;
		case 'frmSummaryServiceInstallChubb': form = frmSummaryServiceInstallChubb; break;
		case 'frmTaskDetail': form = frmTaskDetail; break;
		case 'frmTaskOverview': form = frmTaskOverview; break;
		case 'frmTaskOverviewInstall': form = frmTaskOverviewInstall; break;
		case 'frmTelephoneCall': form = frmTelephoneCall; break;
		case 'frmTravelling': form = frmTravelling; break;
		case 'frmTravelStart': form = frmTravelStart; break;
		case 'frmUserPasswordChange': form = frmUserPasswordChange; break;
		case 'frmUserPasswordLost': form = frmUserPasswordLost; break;
		case 'frmWOComment': form = frmWOComment; break;
		case 'frmWOGrouping': form = frmWOGrouping; break;
		case 'frmWorkOrderContactEdit': form = frmWorkOrderContactEdit; break;
		case 'frmWorkOrderInterrupt': form = frmWorkOrderInterrupt; break;
		case 'frmWOResolve': form = frmWOResolve; break;
		case 'frmWorkOrderOverview': form = frmWorkOrderOverview; break;
		case 'frmWorkOrders': form = frmWorkOrders; break;
		case 'frmWOSummary': form = frmWOSummary; break;
		case 'frmWOValidationSignature': form = frmWOValidationSignature; break;
		case 'frmQuestionnaire': form = frmQuestionnaire; break;
		case 'SignatureTest': form = SignatureTest; break;
	}
	
	return form;
};

navigationModel.getNextForm = function () {

	var stackSize = navigationModel.stack.length;
	var currentForm = navigationModel.stack[stackSize-1];
	var form;
	
	/*
	*	Usage:
	* 		- formArray: the sequence of forms you want to look for in the stack 
	* 		- targetForm: if the sequence matches the last elements in the stack, this will be the target form 
	* 		- defaultForm: if the sequence does not match the last elements in the stack, this will be the target form
	* 		- excludeForms: forms to exclude when matching the sequence (i.e. intermediate forms)
	*/
	navigationModel.getNextFormCB = function (formArray, targetForm, defaultForm, excludeForms) {
		var form;
		
		// The current form needs to be the last in the array
		if (formArray.length > 0 &&
			currentForm == formArray[formArray.length-1]) {
			var isMatch = false;
			
			if (stackSize > formArray.length) {
				isMatch = true;
				// Loop through the last elements of the stack
				for (var i = stackSize - 1; i > -1; i--) {
					// If the form is to be ignored (i.e. intermediate form, current form), continue
					if (excludeForms.indexOf(navigationModel.stack[i]) > -1) {
						continue;
					// If the form is one we are looking for and if follows directly before the current form,
					// Check whether the sequence matches the formArray
					} else if (formArray.indexOf(navigationModel.stack[i]) ==  formArray.length - 2 && 
							   navigationModel.stack[i + 1] == currentForm) {
						isMatch = true;
						var k = 0;
						for (var j = formArray.length - 2; j > -1; j--) {
							if (formArray[j] != navigationModel.stack[i - k]) {
								isMatch = false;
								break;
							}
							k++;
						}
						break;
					// We did not find what we were looking for
					} else {
						isMatch = false
						break;
					}
				}
			}
			
			// If match, return the target form, if not return the default if any
			if (isMatch) form = targetForm;
			else form = defaultForm;
		}
		
		return form;
	}

	/* 
	* 	Flow:
	* 		- If you scan a new recommendation to add it as item to the parc, 
	* 		  return back to the article sales tasks screen when done
	* 		- In all other cases, proceed to the taks overview for the scanned item
	*/
	var targetForm = (workOrder.typeCode == 'P') ? 'frmTaskOverviewInstall' : 'frmTaskOverview';
	if (currentForm == 'frmItemVerify')
		form = navigationModel.getNextFormCB(
			['frmArticleSalesTasks','frmItemScan',currentForm],
			'frmArticleSalesTasks',
			targetForm,
			['frmItemRemove','frmItemBatchNumberChange',currentForm]
		);
	
	/* 
	* 	Flow:
	* 		- If you send out a sales contract before signing the contract 
	* 		  return back to the sales summary
	* 		- In all other cases, proceed to the workorder summary (i.e. 
	* 		  you are at the end of the recommendation sales/quotation flow)
	*/
	if (currentForm == 'frmArticleSalesQuotation')
		form = navigationModel.getNextFormCB(
			['frmArticleSalesOrders','frmArticleSalesSummary',currentForm],
			'frmWOSummary',
			'frmArticleSalesSummary',
			['frmWorkOrderContactEdit',currentForm]
		);
	
	/* 
	* 	Flow:
	* 		- If you send out a partial quotation 
	* 		  return back to the sales summary
	* 		- In all other cases, proceed to the workorder summary (i.e. 
	* 		  you are at the end of the recommendation sales/quotation flow)
	*/
	if (currentForm == 'frmArticleSalesQuotation') {
		form = navigationModel.getNextFormCB(
			['frmArticleSales', 'frmPartialQuotationSummary', currentForm],
			'frmArticleSales',
			'frmArticleSales',
			['frmWorkOrderContactEdit', currentForm]
		);
		navigationModel.removeForm('frmPartialQuotationComment');
		navigationModel.removeForm('frmPartialQuotationPrintText');
		navigationModel.removeForm('frmPartialQuotationSummary');
		navigationModel.removeForm('frmArticleSalesQuotation');
	}

	return form;
}

// Add this function to the preShow() event on every form
navigationModel.push = function (form) {
	var formName = (validationModel.isNull(form)) ? kony.application.getCurrentForm().id : form.id;
	var stackSize = navigationModel.stack.length;
	
	// If the last form on the stack is the same, don't add it again
	if (!(stackSize > 0 && navigationModel.stack[stackSize-1] == formName)) {
		navigationModel.stack.push(formName);
		// Remove i number of items above the maxStackSize
		for (var i = 0; i < (navigationModel.stack.length - navigationModel.maxStackSize); i ++) {
			navigationModel.stack.shift();
		}
	}
//	kony.print("Navigation stack (last 10): " + JSON.stringify(navigationModel.stack.slice(navigationModel.stack.length-10)));
};

navigationModel.doReturn = function (steps) {
 kony.print(steps); 
	if (validationModel.isNull(steps)||isNaN(steps)) steps = 1;//Dhaval:Fix for back button not working as steps was passing EventObject
	if (navigationModel.stack.length > steps) {
		var currentForm = navigationModel.stack.pop();
		var targetForm;
		for (var i = 0; i < steps; i ++) {
			targetForm = navigationModel.stack.pop();
		}
		navigationModel.getFormById(targetForm).show();
	}
};

navigationModel.doReturnTo = function (formId) {
	var formIndex = navigationModel.stack.lastIndexOf(formId);
	var steps = navigationModel.stack.length - 1 - formIndex;
	if(steps == 0) return;
	navigationModel.doReturn(steps);
};

navigationModel.doContinue = function () {
	var nextForm = navigationModel.getNextForm();
	if (!validationModel.isNull(nextForm)) {
		navigationModel.getFormById(nextForm).show();
	}
};

navigationModel.removeForm = function(formId) {
	var formIndex = navigationModel.stack.indexOf(formId);
	if(formIndex >= 0) {
		navigationModel.stack.splice(formIndex,1);
	}
};

navigationModel.getPreviousForm = function (steps) {
	if (validationModel.isNull(steps)) steps = 1;
 	if (navigationModel.stack.length > steps) return navigationModel.stack[navigationModel.stack.length-steps-1];
 	else return navigationModel.stack[0];
};
