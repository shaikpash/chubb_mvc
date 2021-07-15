//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:12 CEST 2021OpportunityCommentRel*******************
// **********************************Start OpportunityCommentRel's helper methods************************
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
* Creates new OpportunityCommentRel
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel = function(){
	this.id = null;
	this.opportunityHId = null;
	this.CommentId = null;
	this.StatusFlag = null;
	this.SyncTimestamp = null;
	this.markForUpload = true;
};

de.itgs.WorkOrders.OpportunityCommentRel.prototype = {
	get id(){
		return this._id;
	},
	set id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute id in OpportunityCommentRel.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._id = val;
	},
	get opportunityHId(){
		return this._opportunityHId;
	},
	set opportunityHId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute opportunityHId in OpportunityCommentRel.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._opportunityHId = val;
	},
	get CommentId(){
		return this._CommentId;
	},
	set CommentId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute CommentId in OpportunityCommentRel.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._CommentId = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in OpportunityCommentRel.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._StatusFlag = val;
	},
	get SyncTimestamp(){
		return this._SyncTimestamp;
	},
	set SyncTimestamp(val){
		this._SyncTimestamp = val;
	},
};

/************************************************************************************
* Retrieves all instances of OpportunityCommentRel SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "id";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "opportunityHId";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.WorkOrders.OpportunityCommentRel.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	orderByMap = kony.sync.formOrderByClause("OpportunityCommentRel",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getAll->successcallback");
		successcallback(de.itgs.WorkOrders.OpportunityCommentRel.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of OpportunityCommentRel present in local database.
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getAllCount function");
	de.itgs.WorkOrders.OpportunityCommentRel.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of OpportunityCommentRel using where clause in the local Database
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getCount->successcallback");
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
* Creates a new instance of OpportunityCommentRel in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.WorkOrders.OpportunityCommentRel.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.OpportunityCommentRel.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"OpportunityCommentRel",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.OpportunityCommentRel.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of OpportunityCommentRel in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].opportunityHId = 0;
*		valuesArray[0].CommentId = 0;
*		valuesArray[1] = {};
*		valuesArray[1].opportunityHId = 1;
*		valuesArray[1].CommentId = 1;
*		valuesArray[2] = {};
*		valuesArray[2].opportunityHId = 2;
*		valuesArray[2].CommentId = 2;
*		de.itgs.WorkOrders.OpportunityCommentRel.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"OpportunityCommentRel",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.WorkOrders.OpportunityCommentRel.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates OpportunityCommentRel using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.WorkOrders.OpportunityCommentRel.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.OpportunityCommentRel.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.WorkOrders.OpportunityCommentRel.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"OpportunityCommentRel",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.WorkOrders.OpportunityCommentRel.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates OpportunityCommentRel(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"OpportunityCommentRel",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.OpportunityCommentRel.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.OpportunityCommentRel.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.OpportunityCommentRel.getPKTable());
	}
};

/************************************************************************************
* Updates OpportunityCommentRel(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.opportunityHId = 0;
*		inputArray[0].changeSet.CommentId = 0;
*		inputArray[0].whereClause = "where id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.opportunityHId = 1;
*		inputArray[1].changeSet.CommentId = 1;
*		inputArray[1].whereClause = "where id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.opportunityHId = 2;
*		inputArray[2].changeSet.CommentId = 2;
*		inputArray[2].whereClause = "where id = 2";
*		de.itgs.WorkOrders.OpportunityCommentRel.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "OpportunityCommentRel";
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
			if(kony.sync.attributeValidation(valuestable,"OpportunityCommentRel",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.WorkOrders.OpportunityCommentRel.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.WorkOrders.OpportunityCommentRel.getPKTable());
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
		sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.WorkOrders.OpportunityCommentRel.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes OpportunityCommentRel using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.OpportunityCommentRel.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.OpportunityCommentRel.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.WorkOrders.OpportunityCommentRel.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function OpportunityCommentRelTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.deleteByPK->OpportunityCommentRel_PKPresent successcallback");
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
	
	function OpportunityCommentRelErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.OpportunityCommentRel.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function OpportunityCommentRelSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.OpportunityCommentRel.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, OpportunityCommentRelTransactionCallback, OpportunityCommentRelSuccessCallback, OpportunityCommentRelErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes OpportunityCommentRel(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.WorkOrders.OpportunityCommentRel.remove("where id = 1", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function OpportunityCommentRel_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function OpportunityCommentRel_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.remove->OpportunityCommentRel_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, OpportunityCommentRel_removeTransactioncallback, OpportunityCommentRel_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes OpportunityCommentRel using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.OpportunityCommentRel.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.OpportunityCommentRel.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.WorkOrders.OpportunityCommentRel.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function OpportunityCommentRelTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.removeDeviceInstanceByPK -> OpportunityCommentRelTransactionCallback");
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
	
	function OpportunityCommentRelErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.OpportunityCommentRel.removeDeviceInstanceByPK -> OpportunityCommentRelErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function OpportunityCommentRelSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.removeDeviceInstanceByPK -> OpportunityCommentRelSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.OpportunityCommentRel.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, OpportunityCommentRelTransactionCallback, OpportunityCommentRelSuccessCallback, OpportunityCommentRelErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes OpportunityCommentRel(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function OpportunityCommentRel_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function OpportunityCommentRel_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.remove->OpportunityCommentRel_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, OpportunityCommentRel_removeTransactioncallback, OpportunityCommentRel_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves OpportunityCommentRel using primary key from the local Database. 
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.OpportunityCommentRel.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.OpportunityCommentRel.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.OpportunityCommentRel.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.WorkOrders.OpportunityCommentRel.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves OpportunityCommentRel(s) using where clause from the local Database. 
* e.g. de.itgs.WorkOrders.OpportunityCommentRel.find("where id = 1", successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.OpportunityCommentRel.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of OpportunityCommentRel with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.OpportunityCommentRel.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.WorkOrders.OpportunityCommentRel.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.WorkOrders.OpportunityCommentRel.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of OpportunityCommentRel matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.WorkOrders.OpportunityCommentRel.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of OpportunityCommentRel pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.OpportunityCommentRel.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of OpportunityCommentRel pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.OpportunityCommentRel.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of OpportunityCommentRel deferred for upload.
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.OpportunityCommentRel.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to OpportunityCommentRel in local database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to OpportunityCommentRel's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.OpportunityCommentRel.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.OpportunityCommentRel.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.OpportunityCommentRel.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.OpportunityCommentRel.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether OpportunityCommentRel's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.OpportunityCommentRel.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.OpportunityCommentRel.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.OpportunityCommentRel.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether OpportunityCommentRel's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.OpportunityCommentRel.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.OpportunityCommentRel.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.OpportunityCommentRel.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.OpportunityCommentRel.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of F56BTRE related to OpportunityCommentRel
* with given CommentId from local database.
*************************************************************************************/


de.itgs.WorkOrders.OpportunityCommentRel.prototype.getF56BTREWithCommentId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.prototype.getF56BTREWithCommentId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.OpportunityCommentRel.getF56BTREWithCommentId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.OpportunityCommentRel.getF56BTREWithCommentId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getF56BTREWithCommentId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.getF56BTREWithCommentId",  "relationship", errorcallback)){
		return;
	}	
	function OpportunityCommentRel_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].CommentId;
			wcs.push({key:"id", value:targetKey});
			

			var tbname = "F56BTRE"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.F56BTRE.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.F56BTRE();
				obj.id = res[i].id;
				obj.F56BTId = res[i].F56BTId;
				obj.DOCO = res[i].DOCO;
				obj.ALKY = res[i].ALKY;
				obj.MOCATCD10 = res[i].MOCATCD10;
				obj.COMMENT = res[i].COMMENT;
				obj.HasChangedFlag = res[i].HasChangedFlag;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.DeletedBy = res[i].DeletedBy;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.OpportunityCommentRel.getAllDetailsByPK(pks, OpportunityCommentRel_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F56BTRE related to OpportunityCommentRel
* with given CommentId from local database.
*************************************************************************************/
de.itgs.WorkOrders.OpportunityCommentRel.prototype.getCountOfF56BTREWithCommentId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.prototype.getCountOfF56BTREWithCommentId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.OpportunityCommentRel.getCountOfF56BTREWithCommentId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.OpportunityCommentRel.getCountOfF56BTREWithCommentId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getCountOfF56BTREWithCommentId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.OpportunityCommentRel.getCountOfF56BTREWithCommentId",  "relationship", errorcallback)){
		return;
	}
	function OpportunityCommentRel_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].CommentId;
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
		   de.itgs.WorkOrders.F56BTRE.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.OpportunityCommentRel.getAllDetailsByPK(pks, OpportunityCommentRel_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.WorkOrders.OpportunityCommentRel.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.removeCascade function");
	var tbname = de.itgs.WorkOrders.OpportunityCommentRel.getTableName();
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


de.itgs.WorkOrders.OpportunityCommentRel.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new de.itgs.WorkOrders.OpportunityCommentRel();
			obj.id = res[i].id;
			obj.opportunityHId = res[i].opportunityHId;
			obj.CommentId = res[i].CommentId;
			obj.StatusFlag = res[i].StatusFlag;
			obj.SyncTimestamp = res[i].SyncTimestamp;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.WorkOrders.OpportunityCommentRel.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.filterAttributes function");
	var attributeTable = {};
	attributeTable.id = "id";
	attributeTable.opportunityHId = "opportunityHId";
	attributeTable.CommentId = "CommentId";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject OpportunityCommentRel. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject OpportunityCommentRel. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject OpportunityCommentRel. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.WorkOrders.OpportunityCommentRel.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.WorkOrders.OpportunityCommentRel.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.WorkOrders.OpportunityCommentRel.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.opportunityHId = this.opportunityHId;
	valuesTable.CommentId = this.CommentId;
	return valuesTable;
};

de.itgs.WorkOrders.OpportunityCommentRel.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	return pkTable;
};

de.itgs.WorkOrders.OpportunityCommentRel.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	return pkTable;
};

de.itgs.WorkOrders.OpportunityCommentRel.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key id not specified in  " + opName + "  an item in OpportunityCommentRel");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"OpportunityCommentRel")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.id)){
			if(!kony.sync.isNull(pks.id.value)){
				wc.key = "id";
				wc.value = pks.id.value;
			}
			else{
				wc.key = "id";
				wc.value = pks.id;
			}
		}else{
			sync.log.error("Primary Key id not specified in  " + opName + "  an item in OpportunityCommentRel");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"OpportunityCommentRel")));
			return false;
		}
	}
	else{
		wc.key = "id";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};

de.itgs.WorkOrders.OpportunityCommentRel.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.validateNull function");
	return true;
};

de.itgs.WorkOrders.OpportunityCommentRel.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.validateNullInsert function");
	return true;
};

de.itgs.WorkOrders.OpportunityCommentRel.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.WorkOrders.OpportunityCommentRel.getRelationshipMap function");
	var r1 = {};
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.opportunityHId)){
		r1.sourceAttribute.push("id");
		r1.foreignKeyAttribute.push("opportunityHId");
		r1.targetAttributeValue.push(valuestable.opportunityHId);
	}
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.OpportunityHeader===undefined){
			relationshipMap.OpportunityHeader = [];
		}
		relationshipMap.OpportunityHeader.push(r1);
	}
	

	r1={}
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];	
	r1.targetAttributeValue = [];
	
	if (!kony.sync.isNullOrUndefined(valuestable.CommentId)){
		r1.sourceAttribute.push("id") ;
		r1.foreignKeyAttribute.push("CommentId");
		r1.targetAttributeValue.push(valuestable.CommentId) ;
	}
		
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.F56BTRE===undefined){
			relationshipMap.F56BTRE = [];
		}
		relationshipMap.F56BTRE.push(r1);
	}
		
	return relationshipMap;
};


de.itgs.WorkOrders.OpportunityCommentRel.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.WorkOrders.OpportunityCommentRel.getTableName = function(){
	return "OpportunityCommentRel";
};




// **********************************End OpportunityCommentRel's helper methods************************