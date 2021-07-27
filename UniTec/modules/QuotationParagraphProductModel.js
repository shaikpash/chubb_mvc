//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:12 CEST 2021QuotationParagraphProduct*******************
// **********************************Start QuotationParagraphProduct's helper methods************************
if (typeof(kony) === "undefined") {
	kony = {};
}

if (typeof(kony.sync) === "undefined") {
	kony.sync = {};
}

if (typeof(kony.sync.log) === "undefined") {
	kony.sync.log = {};
}

if (typeof(sync) === "undefined") {
	sync = {};
}

if (typeof(sync.log) === "undefined") {
	sync.log = {};
}



if(typeof(de)=== "undefined"){ de = {}; }
if(typeof(de.itgs)=== "undefined"){ de.itgs = {}; }
if(typeof(de.itgs.WorkOrders)=== "undefined"){ de.itgs.WorkOrders = {}; }

/************************************************************************************
* Creates new QuotationParagraphProduct
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct = function(){
	this.QuotationParagraphProductid = null;
	this.QuotationParagraphid = null;
	this.ParentProductid = null;
	this.ParagraphProductOrder = null;
	this.QuantityTotal = null;
	this.QuantityAdditional = null;
	this.QuantityReplaced = null;
	this.StatusFlag = null;
	this.SyncTimestamp = null;
	this.isInstallGrouping = null;
	this.isRecycleGrouping = null;
	this.isSubcontractorGrouping = null;
	this.isSubcontractorCatProduct = null;
	this.SubcontractorItemid = null;
	this.SubcontractorItemDescription = null;
	this.SubcontractorItemDuration = null;
	this.SubcontractorItemComments = null;
	this.SubcontractorItemDate = null;
	this.SubcontractorItemFactor = null;
	this.SubcontractorItemPrice = null;
	this.SubcontractorItemPurchasePrice = null;
	this.Activity = null;
	this.Itemid = null;
	this.VATCode = null;
	this.VATPercentage = null;
	this.Category = null;
	this.SubcontractorItemSupplier = null;
	this.VATType = null;
	this.QuantityAdditionalCatalogue = null;
	this.markForUpload = true;
};

de.itgs.WorkOrders.QuotationParagraphProduct.prototype = {
	get QuotationParagraphProductid(){
		return this._QuotationParagraphProductid;
	},
	set QuotationParagraphProductid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QuotationParagraphProductid in QuotationParagraphProduct.\nExpected:\"integer\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QuotationParagraphProductid = val;
	},
	get QuotationParagraphid(){
		return this._QuotationParagraphid;
	},
	set QuotationParagraphid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QuotationParagraphid in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QuotationParagraphid = val;
	},
	get ParentProductid(){
		return this._ParentProductid;
	},
	set ParentProductid(val){
		this._ParentProductid = val;
	},
	get ParagraphProductOrder(){
		return this._ParagraphProductOrder;
	},
	set ParagraphProductOrder(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ParagraphProductOrder in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ParagraphProductOrder = val;
	},
	get QuantityTotal(){
		return this._QuantityTotal;
	},
	set QuantityTotal(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QuantityTotal in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QuantityTotal = val;
	},
	get QuantityAdditional(){
		return this._QuantityAdditional;
	},
	set QuantityAdditional(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QuantityAdditional in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QuantityAdditional = val;
	},
	get QuantityReplaced(){
		return this._QuantityReplaced;
	},
	set QuantityReplaced(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QuantityReplaced in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QuantityReplaced = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in QuotationParagraphProduct.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._StatusFlag = val;
	},
	get SyncTimestamp(){
		return this._SyncTimestamp;
	},
	set SyncTimestamp(val){
		this._SyncTimestamp = val;
	},
	get isInstallGrouping(){
		return this._isInstallGrouping;
	},
	set isInstallGrouping(val){
		this._isInstallGrouping = val;
	},
	get isRecycleGrouping(){
		return this._isRecycleGrouping;
	},
	set isRecycleGrouping(val){
		this._isRecycleGrouping = val;
	},
	get isSubcontractorGrouping(){
		return this._isSubcontractorGrouping;
	},
	set isSubcontractorGrouping(val){
		this._isSubcontractorGrouping = val;
	},
	get isSubcontractorCatProduct(){
		return this._isSubcontractorCatProduct;
	},
	set isSubcontractorCatProduct(val){
		this._isSubcontractorCatProduct = val;
	},
	get SubcontractorItemid(){
		return this._SubcontractorItemid;
	},
	set SubcontractorItemid(val){
		this._SubcontractorItemid = val;
	},
	get SubcontractorItemDescription(){
		return this._SubcontractorItemDescription;
	},
	set SubcontractorItemDescription(val){
		this._SubcontractorItemDescription = val;
	},
	get SubcontractorItemDuration(){
		return this._SubcontractorItemDuration;
	},
	set SubcontractorItemDuration(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SubcontractorItemDuration in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SubcontractorItemDuration = val;
	},
	get SubcontractorItemComments(){
		return this._SubcontractorItemComments;
	},
	set SubcontractorItemComments(val){
		this._SubcontractorItemComments = val;
	},
	get SubcontractorItemDate(){
		return this._SubcontractorItemDate;
	},
	set SubcontractorItemDate(val){
		this._SubcontractorItemDate = val;
	},
	get SubcontractorItemFactor(){
		return this._SubcontractorItemFactor;
	},
	set SubcontractorItemFactor(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SubcontractorItemFactor in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SubcontractorItemFactor = val;
	},
	get SubcontractorItemPrice(){
		return this._SubcontractorItemPrice;
	},
	set SubcontractorItemPrice(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SubcontractorItemPrice in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SubcontractorItemPrice = val;
	},
	get SubcontractorItemPurchasePrice(){
		return this._SubcontractorItemPurchasePrice;
	},
	set SubcontractorItemPurchasePrice(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SubcontractorItemPurchasePrice in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SubcontractorItemPurchasePrice = val;
	},
	get Activity(){
		return this._Activity;
	},
	set Activity(val){
		this._Activity = val;
	},
	get Itemid(){
		return this._Itemid;
	},
	set Itemid(val){
		this._Itemid = val;
	},
	get VATCode(){
		return this._VATCode;
	},
	set VATCode(val){
		this._VATCode = val;
	},
	get VATPercentage(){
		return this._VATPercentage;
	},
	set VATPercentage(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute VATPercentage in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._VATPercentage = val;
	},
	get Category(){
		return this._Category;
	},
	set Category(val){
		this._Category = val;
	},
	get SubcontractorItemSupplier(){
		return this._SubcontractorItemSupplier;
	},
	set SubcontractorItemSupplier(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SubcontractorItemSupplier in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SubcontractorItemSupplier = val;
	},
	get VATType(){
		return this._VATType;
	},
	set VATType(val){
		this._VATType = val;
	},
	get QuantityAdditionalCatalogue(){
		return this._QuantityAdditionalCatalogue;
	},
	set QuantityAdditionalCatalogue(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QuantityAdditionalCatalogue in QuotationParagraphProduct.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QuantityAdditionalCatalogue = val;
	},
};

/************************************************************************************
* Retrieves all instances of QuotationParagraphProduct SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "QuotationParagraphProductid";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "QuotationParagraphid";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.WorkOrders.QuotationParagraphProduct.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	orderByMap = kony.sync.formOrderByClause("QuotationParagraphProduct",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getAll->successcallback");
		successcallback(de.itgs.WorkOrders.QuotationParagraphProduct.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of QuotationParagraphProduct present in local database.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getAllCount function");
	de.itgs.WorkOrders.QuotationParagraphProduct.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of QuotationParagraphProduct using where clause in the local Database
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getCount->successcallback");
		if(null!==res){
			var count = null;
			count = res["count(*)"];
			kony.sync.verifyAndCallClosure(successcallback, {count:count});
		}
		else{
			sync.log.error("Some error occured while getting the count");
		}
	}
};

/************************************************************************************
* Creates a new instance of QuotationParagraphProduct in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.WorkOrders.QuotationParagraphProduct.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.QuotationParagraphProduct.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"QuotationParagraphProduct",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.QuotationParagraphProduct.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of QuotationParagraphProduct in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].QuotationParagraphid = 0;
*		valuesArray[0].ParentProductid = "ParentProductid_0";
*		valuesArray[0].ParagraphProductOrder = 0;
*		valuesArray[0].QuantityTotal = 0;
*		valuesArray[0].QuantityAdditional = 0;
*		valuesArray[0].QuantityReplaced = 0;
*		valuesArray[0].isInstallGrouping = "isInstallGrouping_0";
*		valuesArray[0].isRecycleGrouping = "isRecycleGrouping_0";
*		valuesArray[0].isSubcontractorGrouping = "isSubcontractorGrouping_0";
*		valuesArray[0].isSubcontractorCatProduct = "isSubcontractorCatProduct_0";
*		valuesArray[0].SubcontractorItemid = "SubcontractorItemid_0";
*		valuesArray[0].SubcontractorItemDescription = "SubcontractorItemDescription_0";
*		valuesArray[0].SubcontractorItemDuration = 0;
*		valuesArray[0].SubcontractorItemComments = "SubcontractorItemComments_0";
*		valuesArray[0].SubcontractorItemDate = "SubcontractorItemDate_0";
*		valuesArray[0].SubcontractorItemFactor = 0;
*		valuesArray[0].SubcontractorItemPrice = 0;
*		valuesArray[0].SubcontractorItemPurchasePrice = 0;
*		valuesArray[0].Activity = "Activity_0";
*		valuesArray[0].Itemid = "Itemid_0";
*		valuesArray[0].VATCode = "VATCode_0";
*		valuesArray[0].VATPercentage = 0;
*		valuesArray[0].Category = "Category_0";
*		valuesArray[0].SubcontractorItemSupplier = 0;
*		valuesArray[0].VATType = "VATType_0";
*		valuesArray[0].QuantityAdditionalCatalogue = 0;
*		valuesArray[1] = {};
*		valuesArray[1].QuotationParagraphid = 1;
*		valuesArray[1].ParentProductid = "ParentProductid_1";
*		valuesArray[1].ParagraphProductOrder = 1;
*		valuesArray[1].QuantityTotal = 1;
*		valuesArray[1].QuantityAdditional = 1;
*		valuesArray[1].QuantityReplaced = 1;
*		valuesArray[1].isInstallGrouping = "isInstallGrouping_1";
*		valuesArray[1].isRecycleGrouping = "isRecycleGrouping_1";
*		valuesArray[1].isSubcontractorGrouping = "isSubcontractorGrouping_1";
*		valuesArray[1].isSubcontractorCatProduct = "isSubcontractorCatProduct_1";
*		valuesArray[1].SubcontractorItemid = "SubcontractorItemid_1";
*		valuesArray[1].SubcontractorItemDescription = "SubcontractorItemDescription_1";
*		valuesArray[1].SubcontractorItemDuration = 1;
*		valuesArray[1].SubcontractorItemComments = "SubcontractorItemComments_1";
*		valuesArray[1].SubcontractorItemDate = "SubcontractorItemDate_1";
*		valuesArray[1].SubcontractorItemFactor = 1;
*		valuesArray[1].SubcontractorItemPrice = 1;
*		valuesArray[1].SubcontractorItemPurchasePrice = 1;
*		valuesArray[1].Activity = "Activity_1";
*		valuesArray[1].Itemid = "Itemid_1";
*		valuesArray[1].VATCode = "VATCode_1";
*		valuesArray[1].VATPercentage = 1;
*		valuesArray[1].Category = "Category_1";
*		valuesArray[1].SubcontractorItemSupplier = 1;
*		valuesArray[1].VATType = "VATType_1";
*		valuesArray[1].QuantityAdditionalCatalogue = 1;
*		valuesArray[2] = {};
*		valuesArray[2].QuotationParagraphid = 2;
*		valuesArray[2].ParentProductid = "ParentProductid_2";
*		valuesArray[2].ParagraphProductOrder = 2;
*		valuesArray[2].QuantityTotal = 2;
*		valuesArray[2].QuantityAdditional = 2;
*		valuesArray[2].QuantityReplaced = 2;
*		valuesArray[2].isInstallGrouping = "isInstallGrouping_2";
*		valuesArray[2].isRecycleGrouping = "isRecycleGrouping_2";
*		valuesArray[2].isSubcontractorGrouping = "isSubcontractorGrouping_2";
*		valuesArray[2].isSubcontractorCatProduct = "isSubcontractorCatProduct_2";
*		valuesArray[2].SubcontractorItemid = "SubcontractorItemid_2";
*		valuesArray[2].SubcontractorItemDescription = "SubcontractorItemDescription_2";
*		valuesArray[2].SubcontractorItemDuration = 2;
*		valuesArray[2].SubcontractorItemComments = "SubcontractorItemComments_2";
*		valuesArray[2].SubcontractorItemDate = "SubcontractorItemDate_2";
*		valuesArray[2].SubcontractorItemFactor = 2;
*		valuesArray[2].SubcontractorItemPrice = 2;
*		valuesArray[2].SubcontractorItemPurchasePrice = 2;
*		valuesArray[2].Activity = "Activity_2";
*		valuesArray[2].Itemid = "Itemid_2";
*		valuesArray[2].VATCode = "VATCode_2";
*		valuesArray[2].VATPercentage = 2;
*		valuesArray[2].Category = "Category_2";
*		valuesArray[2].SubcontractorItemSupplier = 2;
*		valuesArray[2].VATType = "VATType_2";
*		valuesArray[2].QuantityAdditionalCatalogue = 2;
*		de.itgs.WorkOrders.QuotationParagraphProduct.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var isProperData = true;
	var arrayLen = 0;
	var errorInfo = [];
	var arrayLength = valuesArray.length;
	var errObject = null;
	var isReferentialIntegrityFailure = false;
	var errMsg = null;
	if(kony.sync.enableORMValidations){
		var newValuesArray = [];

		//column level validations
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var valuestable = valuesArray[i];
			if(kony.sync.attributeValidation(valuestable,"QuotationParagraphProduct",errorcallback,true)===false){
				return;
			}

			newValuesArray[i] = valuestable;
		}
		valuesArray = newValuesArray;
		var connection = kony.sync.getConnectionOnly(dbname, dbname);
		kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);
		var isError = false;
	}
	else{
		//copying by value
		var newValuesArray = [];
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			newValuesArray[i] = kony.sync.CreateCopy(valuesArray[i]);
		}
		valuesArray = newValuesArray;
		kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
	}

	function transactionErrorCallback(){
		if(isError==true){
			//Statement error has occurred
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
		}
		else{
			//Transaction error has occurred
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
		}
	}

	function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.createAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
		}
		else{
			if(isReferentialIntegrityFailure){
				kony.sync.verifyAndCallClosure(errorcallback, errObject);
			}
		}
	}
	
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.WorkOrders.QuotationParagraphProduct.getRelationshipMap(relationshipMap,valuesArray[i]);
			errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
			if(errObject===false){
				isError = true;
				return; 
			}
			if(errObject!==true){
				isError = true;
				isReferentialIntegrityFailure = true;
				return;
			}
		}
	}
};
/************************************************************************************
* Updates QuotationParagraphProduct using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.WorkOrders.QuotationParagraphProduct.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.QuotationParagraphProduct.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.WorkOrders.QuotationParagraphProduct.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"QuotationParagraphProduct",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.WorkOrders.QuotationParagraphProduct.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates QuotationParagraphProduct(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"QuotationParagraphProduct",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.QuotationParagraphProduct.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.QuotationParagraphProduct.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.QuotationParagraphProduct.getPKTable());
	}
};

/************************************************************************************
* Updates QuotationParagraphProduct(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.QuotationParagraphid = 0;
*		inputArray[0].changeSet.ParentProductid = "ParentProductid_updated0";
*		inputArray[0].changeSet.ParagraphProductOrder = 0;
*		inputArray[0].changeSet.QuantityTotal = 0;
*		inputArray[0].whereClause = "where QuotationParagraphProductid = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.QuotationParagraphid = 1;
*		inputArray[1].changeSet.ParentProductid = "ParentProductid_updated1";
*		inputArray[1].changeSet.ParagraphProductOrder = 1;
*		inputArray[1].changeSet.QuantityTotal = 1;
*		inputArray[1].whereClause = "where QuotationParagraphProductid = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.QuotationParagraphid = 2;
*		inputArray[2].changeSet.ParentProductid = "ParentProductid_updated2";
*		inputArray[2].changeSet.ParagraphProductOrder = 2;
*		inputArray[2].changeSet.QuantityTotal = 2;
*		inputArray[2].whereClause = "where QuotationParagraphProductid = 2";
*		de.itgs.WorkOrders.QuotationParagraphProduct.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "QuotationParagraphProduct";
	var isError = false;
	var errObject = null;
	if(markForUpload == false || markForUpload == "false"){
		markForUpload="false"
	}
	else{
		markForUpload="true"
	}
	if((kony.sync.enableORMValidations)){

		var newInputArray = [];
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var v = inputArray[i];
			var valuestable = v.changeSet;
			var isEmpty = true;
			for(var key in valuestable){
				isEmpty = false;
				break;
			}
			if(isEmpty){
				errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeNullValue,kony.sync.getErrorMessage(kony.sync.errorCodeNullValue)));
				return;
			}
			var wcs = v.whereClause;
			var twcs = wcs;
			if(kony.sync.attributeValidation(valuestable,"QuotationParagraphProduct",errorcallback,false)===false){
				return;
			}

			newInputArray[i] = [];
			newInputArray[i].changeSet = valuestable;
			newInputArray[i].whereClause = wcs;
		}
		inputArray = newInputArray;
		var connection = kony.sync.getConnectionOnly(dbname, dbname);
		kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);

	}
	else{
		//copying by value
		var newInputArray = [];
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
		    var v = inputArray[i];
		    newInputArray[i] = kony.sync.CreateCopy(v);
		}
		inputArray = newInputArray;
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.WorkOrders.QuotationParagraphProduct.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.WorkOrders.QuotationParagraphProduct.getPKTable());
		}
	}

	function transactionErrorCallback(){
		if(errObject===false){
			//Sql statement error has occcurred
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
			
		}
		else if(errObject!==null){
			// Referential integrity error has occurred
			kony.sync.verifyAndCallClosure(errorcallback, errObject);
		}
		else{
			//Transaction error has occurred
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
		}
	}
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.WorkOrders.QuotationParagraphProduct.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
			sync.log.debug("Relationship Map for Integrity check created:", relationshipMap);
			errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
			if(errObject===false){
				isError = true;
				return; 
			}
			if(errObject!==true){
				isError = true;
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}
	}


}
/************************************************************************************
* Deletes QuotationParagraphProduct using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProduct.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.QuotationParagraphProduct.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.WorkOrders.QuotationParagraphProduct.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function QuotationParagraphProductTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.deleteByPK->QuotationParagraphProduct_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("QuotationParagraphProductid");
			targetAttributes.push("QuotationParagraphProductid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationParagraphProductDetail.removeCascade,"QuotationParagraphProductDetail",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
		var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
			if(deletedRows === false){
				isError = true;
			}
	}
	
	function QuotationParagraphProductErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProduct.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function QuotationParagraphProductSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProduct.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, QuotationParagraphProductTransactionCallback, QuotationParagraphProductSuccessCallback, QuotationParagraphProductErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes QuotationParagraphProduct(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.WorkOrders.QuotationParagraphProduct.remove("where ParentProductid like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function QuotationParagraphProduct_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("QuotationParagraphProductid");
			targetAttributes.push("QuotationParagraphProductid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationParagraphProductDetail.removeCascade, "QuotationParagraphProductDetail", true, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function QuotationParagraphProduct_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.remove->QuotationParagraphProduct_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, QuotationParagraphProduct_removeTransactioncallback, QuotationParagraphProduct_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes QuotationParagraphProduct using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProduct.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProduct.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.WorkOrders.QuotationParagraphProduct.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function QuotationParagraphProductTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.removeDeviceInstanceByPK -> QuotationParagraphProductTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("QuotationParagraphProductid");
			targetAttributes.push("QuotationParagraphProductid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationParagraphProductDetail.removeCascade,"QuotationParagraphProductDetail",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function QuotationParagraphProductErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProduct.removeDeviceInstanceByPK -> QuotationParagraphProductErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function QuotationParagraphProductSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.removeDeviceInstanceByPK -> QuotationParagraphProductSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProduct.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, QuotationParagraphProductTransactionCallback, QuotationParagraphProductSuccessCallback, QuotationParagraphProductErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes QuotationParagraphProduct(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function QuotationParagraphProduct_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("QuotationParagraphProductid");
			targetAttributes.push("QuotationParagraphProductid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationParagraphProductDetail.removeCascade, "QuotationParagraphProductDetail", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function QuotationParagraphProduct_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.remove->QuotationParagraphProduct_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, QuotationParagraphProduct_removeTransactioncallback, QuotationParagraphProduct_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves QuotationParagraphProduct using primary key from the local Database. 
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProduct.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProduct.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.QuotationParagraphProduct.pkCheck(pks,wcs,errorcallback,"searching")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, wcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.WorkOrders.QuotationParagraphProduct.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves QuotationParagraphProduct(s) using where clause from the local Database. 
* e.g. de.itgs.WorkOrders.QuotationParagraphProduct.find("where ParentProductid like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.QuotationParagraphProduct.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of QuotationParagraphProduct with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProduct.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProduct.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.WorkOrders.QuotationParagraphProduct.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
		return;
	}

	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);		
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = [];
		twcs = wcs;
		kony.table.insert(twcs,{key : kony.sync.historyTableChangeTypeColumn, value : record[kony.sync.historyTableChangeTypeColumn], optype : "EQ",comptype : "AND"});
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
					kony.sync.qb_where(query, twcs);
		kony.table.remove(twcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);
	}
	
	function single_transaction_callback (tx){
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_select(query, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query, tbname);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		var resultSet = kony.sync.executeSql(tx, sql, params);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		if(num_records > 0){
			recordsFound = true;
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, 0);
			var changeType = record[kony.sync.mainTableChangeTypeColumn];
			if(!kony.sync.isNullOrUndefined(changeType) && kony.string.startsWith(""+changeType,"9")){
				recordsMarkedForUpload = 1;
				if(markRecordForUpload(tx, record) === false){
					isError = true;
					return;
				}
			}
		}
					
				
		var query1 =kony.sync.qb_createQuery();
					kony.sync.qb_select(query1, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query1, tbname + kony.sync.historyTableName);
					kony.sync.qb_where(query1, wcs);
		var query1_compile = kony.sync.qb_compile(query1);
		var sql1 = query1_compile[0];
		var params1 = query1_compile[1];
		var resultSet1 = kony.sync.executeSql (tx, sql1, params1);
		if(resultSet1!==false){
			var num_records = resultSet1.rows.length;
			for(var i = 0; i <= num_records - 1; i++ ){
				var record = kony.db.sqlResultsetRowItem(tx, resultSet1, i);
				if(markRecordForUploadHistory(tx, record) === false){
					isError = true;
					return;
				}
				recordsFound = true;
			}
		}
		else{
			isError = true;
		}
	}
	function single_transaction_success_callback(){
		if(recordsFound === true){
			kony.sync.verifyAndCallClosure(successcallback , {count:recordsMarkedForUpload});
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	
	function single_transaction_error_callback(res){
		if (!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Marks instance(s) of QuotationParagraphProduct matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	var isError = false;
	var num_records_main = 0;
	wcs = kony.sync.validateWhereClause(wcs);
	if(!kony.sync.isNull(wcs) && !kony.sync.isEmptyString(wcs)) {
		wcs = wcs + " and " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}else{	
		wcs = "where " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}
	
	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0] + " " + wcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = "";
		twcs = wcs;
		twcs = twcs + " AND " + kony.sync.historyTableChangeTypeColumn + " = " + record[kony.sync.historyTableChangeTypeColumn];
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0]  + " " + twcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function single_transaction_callback (tx){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.markForUpload->single_transaction_callback");
		//updating main table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from \"" + tbname + "\" " + wcs ;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}
		
		num_records_main = resultSet.rows.length;
		for(var i = 0; i < num_records_main; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUpload(tx, record) === false){
				isError = true;
				return;
			}
		}
		
		//updating history table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + kony.sync.historyTableName + " " + wcs;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		for ( var i = 0; i <= num_records - 1; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUploadHistory(tx, record)=== false){
				isError = true;
				return;
			}
		}
	}
	
	function single_transaction_success_callback(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProduct.markForUpload->single_transaction_error_callback");
		if(!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Retrieves instance(s) of QuotationParagraphProduct pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql;
	if(typeof(wcs) === "string" && wcs != null){
		wcs = kony.sync.validateWhereClause(wcs);
		sql = "select * from \"" + tbname + "\" "+ wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	}else{
		errorcallback = successcallback;
		successcallback = wcs;
		sql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.QuotationParagraphProduct.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of QuotationParagraphProduct pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.QuotationParagraphProduct.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of QuotationParagraphProduct deferred for upload.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	var sql;
	if(typeof(wcs) === "string" && wcs != null ){
		wcs = kony.sync.validateWhereClause(wcs);
		sql = "select * from \"" + tbname +  "\" " + wcs + " and " + kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'";
	}else{
		errorcallback = successcallback;
		successcallback = wcs;
		sql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	}
	
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.QuotationParagraphProduct.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to QuotationParagraphProduct in local database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to QuotationParagraphProduct's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProduct.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProduct.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.QuotationParagraphProduct.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProduct.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether QuotationParagraphProduct's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProduct.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProduct.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.QuotationParagraphProduct.pkCheck(pks,wcs,errorcallback,"selecting")===false){
		return;
	}
	var twcs = [];
	twcs = kony.sync.CreateCopy(wcs);
	kony.table.insert(twcs, {
			key : kony.sync.mainTableChangeTypeColumn,
			value : "9%",
			optype : "LIKE",
			comptype : "AND"
		});
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, twcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.isRecordDeferredForUpload->successcallback function");
		if(res.length === 1){
			flag = true;
		}
		else{
			flag = false;
		}
		kony.sync.verifyAndCallClosure(successcallback, {deferred:flag});
	}
};

/************************************************************************************
* isRecordPendingForUpload returns true or false depending on whether QuotationParagraphProduct's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProduct.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProduct.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProduct.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.QuotationParagraphProduct.pkCheck(pks,wcs,errorcallback,"selecting")===false){
		return;
	}
	var twcs = [];
	twcs = kony.sync.CreateCopy(wcs);
	kony.table.insert(twcs, {
			key : kony.sync.mainTableChangeTypeColumn,
			value : "9%",
			optype : "NOT LIKE",
			comptype : "AND"
		});
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, twcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.isRecordPendingForUpload->successcallback function");
		if(res.length === 1){
			flag = true;
		}
		else{
			flag = false;
		}
		kony.sync.verifyAndCallClosure(successcallback, {pending:flag});
	}
};



/************************************************************************************
* Retrieves instances of QuotationParagraphProductDetail related to QuotationParagraphProduct
* with given QuotationParagraphProductid from local database.
*************************************************************************************/


de.itgs.WorkOrders.QuotationParagraphProduct.prototype.getQuotationParagraphProductDetailWithQuotationParagraphProductid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.prototype.getQuotationParagraphProductDetailWithQuotationParagraphProductid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProduct.getQuotationParagraphProductDetailWithQuotationParagraphProductid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProduct.getQuotationParagraphProductDetailWithQuotationParagraphProductid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getQuotationParagraphProductDetailWithQuotationParagraphProductid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.getQuotationParagraphProductDetailWithQuotationParagraphProductid",  "relationship", errorcallback)){
		return;
	}	
	function QuotationParagraphProduct_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].QuotationParagraphProductid;
			wcs.push({key:"QuotationParagraphProductid", value:targetKey});
			

			var tbname = "QuotationParagraphProductDetail"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.QuotationParagraphProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
							}
		
			kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback);
			return;
		}	
	}
	
	function mySuccesscallback(res){
		var objMap = [];
		if(res!==null){
			for(var i in res){
				var obj = new de.itgs.WorkOrders.QuotationParagraphProductDetail();
				obj.QuotationParagraphProductDetailid = res[i].QuotationParagraphProductDetailid;
				obj.QuotationParagraphProductid = res[i].QuotationParagraphProductid;
				obj.Building = res[i].Building;
				obj.Floor = res[i].Floor;
				obj.Location = res[i].Location;
				obj.IsReplacement = res[i].IsReplacement;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.ReplacementReason = res[i].ReplacementReason;
				obj.CustomerInstalledBaseId = res[i].CustomerInstalledBaseId;
				obj.IsInstall = res[i].IsInstall;
				obj.IsRecycle = res[i].IsRecycle;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.QuotationParagraphProduct.getAllDetailsByPK(pks, QuotationParagraphProduct_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of QuotationParagraphProductDetail related to QuotationParagraphProduct
* with given QuotationParagraphProductid from local database.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProduct.prototype.getCountOfQuotationParagraphProductDetailWithQuotationParagraphProductid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.prototype.getCountOfQuotationParagraphProductDetailWithQuotationParagraphProductid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProduct.getCountOfQuotationParagraphProductDetailWithQuotationParagraphProductid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProduct.getCountOfQuotationParagraphProductDetailWithQuotationParagraphProductid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getCountOfQuotationParagraphProductDetailWithQuotationParagraphProductid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProduct.getCountOfQuotationParagraphProductDetailWithQuotationParagraphProductid",  "relationship", errorcallback)){
		return;
	}
	function QuotationParagraphProduct_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].QuotationParagraphProductid;
				targetAttributes.push(QuotationParagraphProductid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"QuotationParagraphProductid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"QuotationParagraphProductid", value:targetKey});
				}
						
			var wClause = "where ";
   			var i;
        	var len = wcs.length;
        	for (i = 0; i < len; i++) {
        		wClauseMap = wcs[i];
        		wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
        		if(i != len-1)
        		{
            		 wClause += " AND "
        		}
    		}
		   de.itgs.WorkOrders.QuotationParagraphProductDetail.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.QuotationParagraphProduct.getAllDetailsByPK(pks, QuotationParagraphProduct_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.WorkOrders.QuotationParagraphProduct.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.removeCascade function");
	var tbname = de.itgs.WorkOrders.QuotationParagraphProduct.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("QuotationParagraphProductid");
			targetAttributes.push("QuotationParagraphProductid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationParagraphProductDetail.removeCascade, "QuotationParagraphProductDetail", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
	}
	if(isCascade){
		if(removeCascadeChildren()===false){
			return false;
		}
		if(kony.sync.deleteBatch(tx, tbname, wcs, isLocal,markForUpload, null)===false){
			return false;
		}
		return true;
	}else{
		var sql = "select * from \"" + tbname + "\" " + wcs;
		var resultSet = kony.sync.executeSql(tx, sql, null);
		if(resultSet===false){
			return false;
		}	
		var num_records = resultSet.rows.length;
		if(num_records === 0){
			return true;
		}else{
			sync.log.error(kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable));
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeReferentialIntegrity,kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable)));
			return false;
		}
	}
};


de.itgs.WorkOrders.QuotationParagraphProduct.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new de.itgs.WorkOrders.QuotationParagraphProduct();
			obj.QuotationParagraphProductid = res[i].QuotationParagraphProductid;
			obj.QuotationParagraphid = res[i].QuotationParagraphid;
			obj.ParentProductid = res[i].ParentProductid;
			obj.ParagraphProductOrder = res[i].ParagraphProductOrder;
			obj.QuantityTotal = res[i].QuantityTotal;
			obj.QuantityAdditional = res[i].QuantityAdditional;
			obj.QuantityReplaced = res[i].QuantityReplaced;
			obj.StatusFlag = res[i].StatusFlag;
			obj.SyncTimestamp = res[i].SyncTimestamp;
			obj.isInstallGrouping = res[i].isInstallGrouping;
			obj.isRecycleGrouping = res[i].isRecycleGrouping;
			obj.isSubcontractorGrouping = res[i].isSubcontractorGrouping;
			obj.isSubcontractorCatProduct = res[i].isSubcontractorCatProduct;
			obj.SubcontractorItemid = res[i].SubcontractorItemid;
			obj.SubcontractorItemDescription = res[i].SubcontractorItemDescription;
			obj.SubcontractorItemDuration = res[i].SubcontractorItemDuration;
			obj.SubcontractorItemComments = res[i].SubcontractorItemComments;
			obj.SubcontractorItemDate = res[i].SubcontractorItemDate;
			obj.SubcontractorItemFactor = res[i].SubcontractorItemFactor;
			obj.SubcontractorItemPrice = res[i].SubcontractorItemPrice;
			obj.SubcontractorItemPurchasePrice = res[i].SubcontractorItemPurchasePrice;
			obj.Activity = res[i].Activity;
			obj.Itemid = res[i].Itemid;
			obj.VATCode = res[i].VATCode;
			obj.VATPercentage = res[i].VATPercentage;
			obj.Category = res[i].Category;
			obj.SubcontractorItemSupplier = res[i].SubcontractorItemSupplier;
			obj.VATType = res[i].VATType;
			obj.QuantityAdditionalCatalogue = res[i].QuantityAdditionalCatalogue;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.WorkOrders.QuotationParagraphProduct.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.filterAttributes function");
	var attributeTable = {};
	attributeTable.QuotationParagraphProductid = "QuotationParagraphProductid";
	attributeTable.QuotationParagraphid = "QuotationParagraphid";
	attributeTable.ParentProductid = "ParentProductid";
	attributeTable.ParagraphProductOrder = "ParagraphProductOrder";
	attributeTable.QuantityTotal = "QuantityTotal";
	attributeTable.QuantityAdditional = "QuantityAdditional";
	attributeTable.QuantityReplaced = "QuantityReplaced";
	attributeTable.isInstallGrouping = "isInstallGrouping";
	attributeTable.isRecycleGrouping = "isRecycleGrouping";
	attributeTable.isSubcontractorGrouping = "isSubcontractorGrouping";
	attributeTable.isSubcontractorCatProduct = "isSubcontractorCatProduct";
	attributeTable.SubcontractorItemid = "SubcontractorItemid";
	attributeTable.SubcontractorItemDescription = "SubcontractorItemDescription";
	attributeTable.SubcontractorItemDuration = "SubcontractorItemDuration";
	attributeTable.SubcontractorItemComments = "SubcontractorItemComments";
	attributeTable.SubcontractorItemDate = "SubcontractorItemDate";
	attributeTable.SubcontractorItemFactor = "SubcontractorItemFactor";
	attributeTable.SubcontractorItemPrice = "SubcontractorItemPrice";
	attributeTable.SubcontractorItemPurchasePrice = "SubcontractorItemPurchasePrice";
	attributeTable.Activity = "Activity";
	attributeTable.Itemid = "Itemid";
	attributeTable.VATCode = "VATCode";
	attributeTable.VATPercentage = "VATPercentage";
	attributeTable.Category = "Category";
	attributeTable.SubcontractorItemSupplier = "SubcontractorItemSupplier";
	attributeTable.VATType = "VATType";
	attributeTable.QuantityAdditionalCatalogue = "QuantityAdditionalCatalogue";

	var PKTable = {};
	PKTable.QuotationParagraphProductid = {}
	PKTable.QuotationParagraphProductid.name = "QuotationParagraphProductid";
	PKTable.QuotationParagraphProductid.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject QuotationParagraphProduct. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject QuotationParagraphProduct. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject QuotationParagraphProduct. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
			}else{
				newvaluestable[k] = v;
			}
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

de.itgs.WorkOrders.QuotationParagraphProduct.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.WorkOrders.QuotationParagraphProduct.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.WorkOrders.QuotationParagraphProduct.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.QuotationParagraphProductid = this.QuotationParagraphProductid;
	}
	valuesTable.QuotationParagraphid = this.QuotationParagraphid;
	valuesTable.ParentProductid = this.ParentProductid;
	valuesTable.ParagraphProductOrder = this.ParagraphProductOrder;
	valuesTable.QuantityTotal = this.QuantityTotal;
	valuesTable.QuantityAdditional = this.QuantityAdditional;
	valuesTable.QuantityReplaced = this.QuantityReplaced;
	valuesTable.isInstallGrouping = this.isInstallGrouping;
	valuesTable.isRecycleGrouping = this.isRecycleGrouping;
	valuesTable.isSubcontractorGrouping = this.isSubcontractorGrouping;
	valuesTable.isSubcontractorCatProduct = this.isSubcontractorCatProduct;
	valuesTable.SubcontractorItemid = this.SubcontractorItemid;
	valuesTable.SubcontractorItemDescription = this.SubcontractorItemDescription;
	valuesTable.SubcontractorItemDuration = this.SubcontractorItemDuration;
	valuesTable.SubcontractorItemComments = this.SubcontractorItemComments;
	valuesTable.SubcontractorItemDate = this.SubcontractorItemDate;
	valuesTable.SubcontractorItemFactor = this.SubcontractorItemFactor;
	valuesTable.SubcontractorItemPrice = this.SubcontractorItemPrice;
	valuesTable.SubcontractorItemPurchasePrice = this.SubcontractorItemPurchasePrice;
	valuesTable.Activity = this.Activity;
	valuesTable.Itemid = this.Itemid;
	valuesTable.VATCode = this.VATCode;
	valuesTable.VATPercentage = this.VATPercentage;
	valuesTable.Category = this.Category;
	valuesTable.SubcontractorItemSupplier = this.SubcontractorItemSupplier;
	valuesTable.VATType = this.VATType;
	valuesTable.QuantityAdditionalCatalogue = this.QuantityAdditionalCatalogue;
	return valuesTable;
};

de.itgs.WorkOrders.QuotationParagraphProduct.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.prototype.getPKTable function");
	var pkTable = {};
	pkTable.QuotationParagraphProductid = {key:"QuotationParagraphProductid",value:this.QuotationParagraphProductid};
	return pkTable;
};

de.itgs.WorkOrders.QuotationParagraphProduct.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getPKTable function");
	var pkTable = [];
	pkTable.push("QuotationParagraphProductid");
	return pkTable;
};

de.itgs.WorkOrders.QuotationParagraphProduct.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key QuotationParagraphProductid not specified in  " + opName + "  an item in QuotationParagraphProduct");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("QuotationParagraphProductid",opName,"QuotationParagraphProduct")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.QuotationParagraphProductid)){
			if(!kony.sync.isNull(pks.QuotationParagraphProductid.value)){
				wc.key = "QuotationParagraphProductid";
				wc.value = pks.QuotationParagraphProductid.value;
			}
			else{
				wc.key = "QuotationParagraphProductid";
				wc.value = pks.QuotationParagraphProductid;
			}
		}else{
			sync.log.error("Primary Key QuotationParagraphProductid not specified in  " + opName + "  an item in QuotationParagraphProduct");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("QuotationParagraphProductid",opName,"QuotationParagraphProduct")));
			return false;
		}
	}
	else{
		wc.key = "QuotationParagraphProductid";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};

de.itgs.WorkOrders.QuotationParagraphProduct.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.validateNull function");
	if(valuestable.QuotationParagraphid!==undefined){
		if(kony.sync.isNull(valuestable.QuotationParagraphid) || kony.sync.isEmptyString(valuestable.QuotationParagraphid)){
			sync.log.error("Mandatory attribute QuotationParagraphid is missing for the SyncObject QuotationParagraphProduct.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "QuotationParagraphProduct", "QuotationParagraphid")));
			return false;
		}
	}
	return true;
};

de.itgs.WorkOrders.QuotationParagraphProduct.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.validateNullInsert function");
	if(kony.sync.isNull(valuestable.QuotationParagraphid) || kony.sync.isEmptyString(valuestable.QuotationParagraphid)){
		sync.log.error("Mandatory attribute QuotationParagraphid is missing for the SyncObject QuotationParagraphProduct.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "QuotationParagraphProduct", "QuotationParagraphid")));
		return false;
	}
	return true;
};

de.itgs.WorkOrders.QuotationParagraphProduct.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProduct.getRelationshipMap function");
	var r1 = {};
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.QuotationParagraphid)){
		r1.sourceAttribute.push("QuotationParagraphid");
		r1.foreignKeyAttribute.push("QuotationParagraphid");
		r1.targetAttributeValue.push(valuestable.QuotationParagraphid);
	}
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.QuotationParagraph===undefined){
			relationshipMap.QuotationParagraph = [];
		}
		relationshipMap.QuotationParagraph.push(r1);
	}
	

	return relationshipMap;
};


de.itgs.WorkOrders.QuotationParagraphProduct.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.WorkOrders.QuotationParagraphProduct.getTableName = function(){
	return "QuotationParagraphProduct";
};




// **********************************End QuotationParagraphProduct's helper methods************************