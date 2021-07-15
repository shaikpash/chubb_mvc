//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:12 CEST 2021QuotationParagraphProductDetail*******************
// **********************************Start QuotationParagraphProductDetail's helper methods************************
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
* Creates new QuotationParagraphProductDetail
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail = function(){
	this.QuotationParagraphProductDetailid = null;
	this.QuotationParagraphProductid = null;
	this.Building = null;
	this.Floor = null;
	this.Location = null;
	this.IsReplacement = null;
	this.StatusFlag = null;
	this.SyncTimestamp = null;
	this.ReplacementReason = null;
	this.CustomerInstalledBaseId = null;
	this.IsInstall = null;
	this.IsRecycle = null;
	this.markForUpload = true;
};

de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype = {
	get QuotationParagraphProductDetailid(){
		return this._QuotationParagraphProductDetailid;
	},
	set QuotationParagraphProductDetailid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QuotationParagraphProductDetailid in QuotationParagraphProductDetail.\nExpected:\"integer\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QuotationParagraphProductDetailid = val;
	},
	get QuotationParagraphProductid(){
		return this._QuotationParagraphProductid;
	},
	set QuotationParagraphProductid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QuotationParagraphProductid in QuotationParagraphProductDetail.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QuotationParagraphProductid = val;
	},
	get Building(){
		return this._Building;
	},
	set Building(val){
		this._Building = val;
	},
	get Floor(){
		return this._Floor;
	},
	set Floor(val){
		this._Floor = val;
	},
	get Location(){
		return this._Location;
	},
	set Location(val){
		this._Location = val;
	},
	get IsReplacement(){
		return kony.sync.getBoolean(this._IsReplacement)+"";
	},
	set IsReplacement(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsReplacement in QuotationParagraphProductDetail.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsReplacement = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in QuotationParagraphProductDetail.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._StatusFlag = val;
	},
	get SyncTimestamp(){
		return this._SyncTimestamp;
	},
	set SyncTimestamp(val){
		this._SyncTimestamp = val;
	},
	get ReplacementReason(){
		return this._ReplacementReason;
	},
	set ReplacementReason(val){
		this._ReplacementReason = val;
	},
	get CustomerInstalledBaseId(){
		return this._CustomerInstalledBaseId;
	},
	set CustomerInstalledBaseId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute CustomerInstalledBaseId in QuotationParagraphProductDetail.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._CustomerInstalledBaseId = val;
	},
	get IsInstall(){
		return kony.sync.getBoolean(this._IsInstall)+"";
	},
	set IsInstall(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsInstall in QuotationParagraphProductDetail.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsInstall = val;
	},
	get IsRecycle(){
		return kony.sync.getBoolean(this._IsRecycle)+"";
	},
	set IsRecycle(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsRecycle in QuotationParagraphProductDetail.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsRecycle = val;
	},
};

/************************************************************************************
* Retrieves all instances of QuotationParagraphProductDetail SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "QuotationParagraphProductDetailid";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "QuotationParagraphProductid";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.WorkOrders.QuotationParagraphProductDetail.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	orderByMap = kony.sync.formOrderByClause("QuotationParagraphProductDetail",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getAll->successcallback");
		successcallback(de.itgs.WorkOrders.QuotationParagraphProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of QuotationParagraphProductDetail present in local database.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getAllCount function");
	de.itgs.WorkOrders.QuotationParagraphProductDetail.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of QuotationParagraphProductDetail using where clause in the local Database
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getCount->successcallback");
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
* Creates a new instance of QuotationParagraphProductDetail in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.WorkOrders.QuotationParagraphProductDetail.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.QuotationParagraphProductDetail.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"QuotationParagraphProductDetail",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.QuotationParagraphProductDetail.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of QuotationParagraphProductDetail in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].QuotationParagraphProductid = 0;
*		valuesArray[0].Building = "Building_0";
*		valuesArray[0].Floor = "Floor_0";
*		valuesArray[0].Location = "Location_0";
*		valuesArray[0].IsReplacement = true;
*		valuesArray[0].ReplacementReason = "ReplacementReason_0";
*		valuesArray[0].CustomerInstalledBaseId = 0;
*		valuesArray[0].IsInstall = true;
*		valuesArray[0].IsRecycle = true;
*		valuesArray[1] = {};
*		valuesArray[1].QuotationParagraphProductid = 1;
*		valuesArray[1].Building = "Building_1";
*		valuesArray[1].Floor = "Floor_1";
*		valuesArray[1].Location = "Location_1";
*		valuesArray[1].IsReplacement = true;
*		valuesArray[1].ReplacementReason = "ReplacementReason_1";
*		valuesArray[1].CustomerInstalledBaseId = 1;
*		valuesArray[1].IsInstall = true;
*		valuesArray[1].IsRecycle = true;
*		valuesArray[2] = {};
*		valuesArray[2].QuotationParagraphProductid = 2;
*		valuesArray[2].Building = "Building_2";
*		valuesArray[2].Floor = "Floor_2";
*		valuesArray[2].Location = "Location_2";
*		valuesArray[2].IsReplacement = true;
*		valuesArray[2].ReplacementReason = "ReplacementReason_2";
*		valuesArray[2].CustomerInstalledBaseId = 2;
*		valuesArray[2].IsInstall = true;
*		valuesArray[2].IsRecycle = true;
*		de.itgs.WorkOrders.QuotationParagraphProductDetail.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"QuotationParagraphProductDetail",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.WorkOrders.QuotationParagraphProductDetail.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates QuotationParagraphProductDetail using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.WorkOrders.QuotationParagraphProductDetail.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.QuotationParagraphProductDetail.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.WorkOrders.QuotationParagraphProductDetail.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"QuotationParagraphProductDetail",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.WorkOrders.QuotationParagraphProductDetail.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates QuotationParagraphProductDetail(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"QuotationParagraphProductDetail",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.QuotationParagraphProductDetail.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.QuotationParagraphProductDetail.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.QuotationParagraphProductDetail.getPKTable());
	}
};

/************************************************************************************
* Updates QuotationParagraphProductDetail(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.QuotationParagraphProductid = 0;
*		inputArray[0].changeSet.Building = "Building_updated0";
*		inputArray[0].changeSet.Floor = "Floor_updated0";
*		inputArray[0].changeSet.Location = "Location_updated0";
*		inputArray[0].whereClause = "where QuotationParagraphProductDetailid = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.QuotationParagraphProductid = 1;
*		inputArray[1].changeSet.Building = "Building_updated1";
*		inputArray[1].changeSet.Floor = "Floor_updated1";
*		inputArray[1].changeSet.Location = "Location_updated1";
*		inputArray[1].whereClause = "where QuotationParagraphProductDetailid = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.QuotationParagraphProductid = 2;
*		inputArray[2].changeSet.Building = "Building_updated2";
*		inputArray[2].changeSet.Floor = "Floor_updated2";
*		inputArray[2].changeSet.Location = "Location_updated2";
*		inputArray[2].whereClause = "where QuotationParagraphProductDetailid = 2";
*		de.itgs.WorkOrders.QuotationParagraphProductDetail.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "QuotationParagraphProductDetail";
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
			if(kony.sync.attributeValidation(valuestable,"QuotationParagraphProductDetail",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.WorkOrders.QuotationParagraphProductDetail.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.WorkOrders.QuotationParagraphProductDetail.getPKTable());
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
		sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.WorkOrders.QuotationParagraphProductDetail.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes QuotationParagraphProductDetail using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProductDetail.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.QuotationParagraphProductDetail.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.WorkOrders.QuotationParagraphProductDetail.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function QuotationParagraphProductDetailTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.deleteByPK->QuotationParagraphProductDetail_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
		}else{
			pkNotFound = true;
		}
		var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
			if(deletedRows === false){
				isError = true;
			}
	}
	
	function QuotationParagraphProductDetailErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function QuotationParagraphProductDetailSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, QuotationParagraphProductDetailTransactionCallback, QuotationParagraphProductDetailSuccessCallback, QuotationParagraphProductDetailErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes QuotationParagraphProductDetail(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.WorkOrders.QuotationParagraphProductDetail.remove("where Building like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function QuotationParagraphProductDetail_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function QuotationParagraphProductDetail_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.remove->QuotationParagraphProductDetail_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, QuotationParagraphProductDetail_removeTransactioncallback, QuotationParagraphProductDetail_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes QuotationParagraphProductDetail using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProductDetail.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProductDetail.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.WorkOrders.QuotationParagraphProductDetail.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function QuotationParagraphProductDetailTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.removeDeviceInstanceByPK -> QuotationParagraphProductDetailTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function QuotationParagraphProductDetailErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.removeDeviceInstanceByPK -> QuotationParagraphProductDetailErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function QuotationParagraphProductDetailSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.removeDeviceInstanceByPK -> QuotationParagraphProductDetailSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, QuotationParagraphProductDetailTransactionCallback, QuotationParagraphProductDetailSuccessCallback, QuotationParagraphProductDetailErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes QuotationParagraphProductDetail(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function QuotationParagraphProductDetail_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function QuotationParagraphProductDetail_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.remove->QuotationParagraphProductDetail_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, QuotationParagraphProductDetail_removeTransactioncallback, QuotationParagraphProductDetail_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves QuotationParagraphProductDetail using primary key from the local Database. 
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProductDetail.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProductDetail.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.QuotationParagraphProductDetail.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.WorkOrders.QuotationParagraphProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves QuotationParagraphProductDetail(s) using where clause from the local Database. 
* e.g. de.itgs.WorkOrders.QuotationParagraphProductDetail.find("where Building like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.QuotationParagraphProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of QuotationParagraphProductDetail with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProductDetail.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProductDetail.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.WorkOrders.QuotationParagraphProductDetail.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of QuotationParagraphProductDetail matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of QuotationParagraphProductDetail pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.QuotationParagraphProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of QuotationParagraphProductDetail pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.QuotationParagraphProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of QuotationParagraphProductDetail deferred for upload.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.QuotationParagraphProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to QuotationParagraphProductDetail in local database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to QuotationParagraphProductDetail's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProductDetail.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProductDetail.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.QuotationParagraphProductDetail.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether QuotationParagraphProductDetail's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProductDetail.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProductDetail.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.QuotationParagraphProductDetail.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether QuotationParagraphProductDetail's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProductDetail.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProductDetail.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.QuotationParagraphProductDetail.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of CustomerInstalledBase related to QuotationParagraphProductDetail
* with given CustomerInstalledBaseId from local database.
*************************************************************************************/


de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.getCustomerInstalledBaseWithCustomerInstalledBaseId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.getCustomerInstalledBaseWithCustomerInstalledBaseId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProductDetail.getCustomerInstalledBaseWithCustomerInstalledBaseId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProductDetail.getCustomerInstalledBaseWithCustomerInstalledBaseId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getCustomerInstalledBaseWithCustomerInstalledBaseId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.getCustomerInstalledBaseWithCustomerInstalledBaseId",  "relationship", errorcallback)){
		return;
	}	
	function QuotationParagraphProductDetail_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].CustomerInstalledBaseId;
			wcs.push({key:"id", value:targetKey});
			

			var tbname = "CustomerInstalledBase"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.CustomerInstalledBase.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.CustomerInstalledBase();
				obj.id = res[i].id;
				obj.NUMB = res[i].NUMB;
				obj.N001 = res[i].N001;
				obj.LOTN = res[i].LOTN;
				obj.LANO = res[i].LANO;
				obj.ZE01 = res[i].ZE01;
				obj.ZE02 = res[i].ZE02;
				obj.ZE03 = res[i].ZE03;
				obj.ACL7 = res[i].ACL7;
				obj.ITM = res[i].ITM;
				obj.KIT = res[i].KIT;
				obj.DOCO = res[i].DOCO;
				obj.COCH = res[i].COCH;
				obj.DCTO = res[i].DCTO;
				obj.KCOO = res[i].KCOO;
				obj.Y56INDLA = res[i].Y56INDLA;
				obj.QTY = res[i].QTY;
				obj.FBDUMSDJ = res[i].FBDUMSDJ;
				obj.SVDB = res[i].SVDB;
				obj.Y56DATEP = res[i].Y56DATEP;
				obj.U74SCDV = res[i].U74SCDV;
				obj.Y56LIEU = res[i].Y56LIEU;
				obj.Y56ETAG = res[i].Y56ETAG;
				obj.Y56ZONL = res[i].Y56ZONL;
				obj.Y56EMPLA = res[i].Y56EMPLA;
				obj.HasChangedFlag = res[i].HasChangedFlag;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.etat = res[i].etat;
				obj.etatcibCId = res[i].etatcibCId;
				obj.LNID = res[i].LNID;
				obj.UNItecStatus = res[i].UNItecStatus;
				obj.Y56ATYPE = res[i].Y56ATYPE;
				obj.Y56QTY = res[i].Y56QTY;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.QuotationParagraphProductDetail.getAllDetailsByPK(pks, QuotationParagraphProductDetail_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of CustomerInstalledBase related to QuotationParagraphProductDetail
* with given CustomerInstalledBaseId from local database.
*************************************************************************************/
de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.getCountOfCustomerInstalledBaseWithCustomerInstalledBaseId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.getCountOfCustomerInstalledBaseWithCustomerInstalledBaseId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.QuotationParagraphProductDetail.getCountOfCustomerInstalledBaseWithCustomerInstalledBaseId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.QuotationParagraphProductDetail.getCountOfCustomerInstalledBaseWithCustomerInstalledBaseId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getCountOfCustomerInstalledBaseWithCustomerInstalledBaseId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.QuotationParagraphProductDetail.getCountOfCustomerInstalledBaseWithCustomerInstalledBaseId",  "relationship", errorcallback)){
		return;
	}
	function QuotationParagraphProductDetail_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].CustomerInstalledBaseId;
				targetAttributes.push(id);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"id", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"id", value:targetKey});
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
		   de.itgs.WorkOrders.CustomerInstalledBase.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.QuotationParagraphProductDetail.getAllDetailsByPK(pks, QuotationParagraphProductDetail_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.WorkOrders.QuotationParagraphProductDetail.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.removeCascade function");
	var tbname = de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
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


de.itgs.WorkOrders.QuotationParagraphProductDetail.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.convertTableToObject function");
	objMap = [];
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
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.WorkOrders.QuotationParagraphProductDetail.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.filterAttributes function");
	var attributeTable = {};
	attributeTable.QuotationParagraphProductDetailid = "QuotationParagraphProductDetailid";
	attributeTable.QuotationParagraphProductid = "QuotationParagraphProductid";
	attributeTable.Building = "Building";
	attributeTable.Floor = "Floor";
	attributeTable.Location = "Location";
	attributeTable.IsReplacement = "IsReplacement";
	attributeTable.ReplacementReason = "ReplacementReason";
	attributeTable.CustomerInstalledBaseId = "CustomerInstalledBaseId";
	attributeTable.IsInstall = "IsInstall";
	attributeTable.IsRecycle = "IsRecycle";

	var PKTable = {};
	PKTable.QuotationParagraphProductDetailid = {}
	PKTable.QuotationParagraphProductDetailid.name = "QuotationParagraphProductDetailid";
	PKTable.QuotationParagraphProductDetailid.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject QuotationParagraphProductDetail. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject QuotationParagraphProductDetail. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject QuotationParagraphProductDetail. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.WorkOrders.QuotationParagraphProductDetail.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.WorkOrders.QuotationParagraphProductDetail.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.QuotationParagraphProductDetailid = this.QuotationParagraphProductDetailid;
	}
	valuesTable.QuotationParagraphProductid = this.QuotationParagraphProductid;
	valuesTable.Building = this.Building;
	valuesTable.Floor = this.Floor;
	valuesTable.Location = this.Location;
	valuesTable.IsReplacement = this.IsReplacement;
	valuesTable.ReplacementReason = this.ReplacementReason;
	valuesTable.CustomerInstalledBaseId = this.CustomerInstalledBaseId;
	valuesTable.IsInstall = this.IsInstall;
	valuesTable.IsRecycle = this.IsRecycle;
	return valuesTable;
};

de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.prototype.getPKTable function");
	var pkTable = {};
	pkTable.QuotationParagraphProductDetailid = {key:"QuotationParagraphProductDetailid",value:this.QuotationParagraphProductDetailid};
	return pkTable;
};

de.itgs.WorkOrders.QuotationParagraphProductDetail.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getPKTable function");
	var pkTable = [];
	pkTable.push("QuotationParagraphProductDetailid");
	return pkTable;
};

de.itgs.WorkOrders.QuotationParagraphProductDetail.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key QuotationParagraphProductDetailid not specified in  " + opName + "  an item in QuotationParagraphProductDetail");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("QuotationParagraphProductDetailid",opName,"QuotationParagraphProductDetail")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.QuotationParagraphProductDetailid)){
			if(!kony.sync.isNull(pks.QuotationParagraphProductDetailid.value)){
				wc.key = "QuotationParagraphProductDetailid";
				wc.value = pks.QuotationParagraphProductDetailid.value;
			}
			else{
				wc.key = "QuotationParagraphProductDetailid";
				wc.value = pks.QuotationParagraphProductDetailid;
			}
		}else{
			sync.log.error("Primary Key QuotationParagraphProductDetailid not specified in  " + opName + "  an item in QuotationParagraphProductDetail");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("QuotationParagraphProductDetailid",opName,"QuotationParagraphProductDetail")));
			return false;
		}
	}
	else{
		wc.key = "QuotationParagraphProductDetailid";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};

de.itgs.WorkOrders.QuotationParagraphProductDetail.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.validateNull function");
	if(valuestable.QuotationParagraphProductid!==undefined){
		if(kony.sync.isNull(valuestable.QuotationParagraphProductid) || kony.sync.isEmptyString(valuestable.QuotationParagraphProductid)){
			sync.log.error("Mandatory attribute QuotationParagraphProductid is missing for the SyncObject QuotationParagraphProductDetail.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "QuotationParagraphProductDetail", "QuotationParagraphProductid")));
			return false;
		}
	}
	return true;
};

de.itgs.WorkOrders.QuotationParagraphProductDetail.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.validateNullInsert function");
	if(kony.sync.isNull(valuestable.QuotationParagraphProductid) || kony.sync.isEmptyString(valuestable.QuotationParagraphProductid)){
		sync.log.error("Mandatory attribute QuotationParagraphProductid is missing for the SyncObject QuotationParagraphProductDetail.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "QuotationParagraphProductDetail", "QuotationParagraphProductid")));
		return false;
	}
	return true;
};

de.itgs.WorkOrders.QuotationParagraphProductDetail.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.WorkOrders.QuotationParagraphProductDetail.getRelationshipMap function");
	var r1 = {};
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.QuotationParagraphProductid)){
		r1.sourceAttribute.push("QuotationParagraphProductid");
		r1.foreignKeyAttribute.push("QuotationParagraphProductid");
		r1.targetAttributeValue.push(valuestable.QuotationParagraphProductid);
	}
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.QuotationParagraphProduct===undefined){
			relationshipMap.QuotationParagraphProduct = [];
		}
		relationshipMap.QuotationParagraphProduct.push(r1);
	}
	

	r1={}
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];	
	r1.targetAttributeValue = [];
	
	if (!kony.sync.isNullOrUndefined(valuestable.CustomerInstalledBaseId)){
		r1.sourceAttribute.push("id") ;
		r1.foreignKeyAttribute.push("CustomerInstalledBaseId");
		r1.targetAttributeValue.push(valuestable.CustomerInstalledBaseId) ;
	}
		
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.CustomerInstalledBase===undefined){
			relationshipMap.CustomerInstalledBase = [];
		}
		relationshipMap.CustomerInstalledBase.push(r1);
	}
		
	return relationshipMap;
};


de.itgs.WorkOrders.QuotationParagraphProductDetail.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.WorkOrders.QuotationParagraphProductDetail.getTableName = function(){
	return "QuotationParagraphProductDetail";
};




// **********************************End QuotationParagraphProductDetail's helper methods************************