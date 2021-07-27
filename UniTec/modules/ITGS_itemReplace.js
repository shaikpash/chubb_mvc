/**	
	Author : Maxime Castagnet
 	creation date : 27/04/2017
 	last update : 27/04/2017
	
	description :
	"this scripts contains the related methods to perform a replacement of an item such as a fire extinguisher by another similar item.
	its point of entry should be the item to be replaced and the necessary data to realize the new item.
	its return point should be a flag informing of the success or failure of the process and/or at least an id of the new item.
	it is based on the module design pattern."
**/

// closure to avoid using reserved names
(function(){

	itemReplace = {};
	
	itemReplace.init = function(workOrder, barCode, itemToReplace, isScanned) {
	
		itemReplace.target = itemToReplace;

		var callBack = function() {
			var catalogCallback = function(codes) {
				// parameters save item
				var sql = "usualcode = '" + codes[0] + "' ";
				var targetArticle = itemModel.findItemAttributeByWhereClause(["articleId", "usualCode", "measurementUnit"], sql);
				itemScan.replacementScan = itemReplace.setParameters(itemToReplace, targetArticle, targetArticle, "PlannedTask", null, "remplacement");
				var newItem = itemScan.saveNewItem(barCode, false, true, true, false);
				if(!validationModel.isNull) newItem.isScanned = isScanned;
				taskModel.setTasksScannedFlagForItem(newItem, workOrder);	
				
				itemVerify.item = newItem;
				frmItemVerify.show();
				
				navigationModel.removeForm('frmCatalogSearch');
				navigationModel.removeForm('frmCatalog');
			};
			
			catalogSearch.resetFullSearchFields();  
			catalogSearch.catalogType = "maintenance";
			catalogSearch.process = 'replaceObsolete';
			catalogSearch.selectionBehavior = 'single';
			catalog.callback = catalogCallback;
			
			frmCatalogSearch.show();
		}
		
		var msg = "Appareil à identifier. Souhaitez-vous l'identifier maintenant ?";
		
		popupModel.showPopError(msg, callBack, null, true);
	};
	
	itemReplace.setParameters = function(srcItem, newArticle, newItem, origin, tasksToCreate, motive, replacementTask) {
		var replacementData = new Array(7);
		
		function check(object) {
			if(validationModel.isNull(object)) return null;
			else return object;
		}
		
		replacementData[0] = check(srcItem);
		replacementData[1] = check(newArticle);
		replacementData[2] = check(newItem);
		replacementData[3] = check(origin);
		replacementData[4] = check(tasksToCreate);
		replacementData[5] = check(motive);
		replacementData[6] = check(replacementTask);

		return replacementData;
	};
})();