//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:12 CEST 2021SupplyOrders*******************
// **********************************Start SupplyOrders's helper methods************************
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
* Creates new SupplyOrders
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders = function(){
	this.id = null;
	this.issuerAN8 = null;
	this.addressType = null;
	this.addressId = null;
	this.state = null;
	this.dueDate = null;
	this.comment = null;
	this.cmdNummer = null;
	this.syncTimeStamp = null;
	this.statusFlag = null;
	this.markForUpload = true;
};

de.itgs.WorkOrders.SupplyOrders.prototype = {
	get id(){
		return this._id;
	},
	set id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute id in SupplyOrders.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._id = val;
	},
	get issuerAN8(){
		return this._issuerAN8;
	},
	set issuerAN8(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute issuerAN8 in SupplyOrders.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._issuerAN8 = val;
	},
	get addressType(){
		return this._addressType;
	},
	set addressType(val){
		this._addressType = val;
	},
	get addressId(){
		return this._addressId;
	},
	set addressId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute addressId in SupplyOrders.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._addressId = val;
	},
	get state(){
		return this._state;
	},
	set state(val){
		this._state = val;
	},
	get dueDate(){
		return this._dueDate;
	},
	set dueDate(val){
		this._dueDate = val;
	},
	get comment(){
		return this._comment;
	},
	set comment(val){
		this._comment = val;
	},
	get cmdNummer(){
		return this._cmdNummer;
	},
	set cmdNummer(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute cmdNummer in SupplyOrders.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._cmdNummer = val;
	},
	get syncTimeStamp(){
		return this._syncTimeStamp;
	},
	set syncTimeStamp(val){
		this._syncTimeStamp = val;
	},
	get statusFlag(){
		return kony.sync.getBoolean(this._statusFlag)+"";
	},
	set statusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute statusFlag in SupplyOrders.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._statusFlag = val;
	},
};

/************************************************************************************
* Retrieves all instances of SupplyOrders SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "id";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "issuerAN8";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.WorkOrders.SupplyOrders.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	orderByMap = kony.sync.formOrderByClause("SupplyOrders",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getAll->successcallback");
		successcallback(de.itgs.WorkOrders.SupplyOrders.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of SupplyOrders present in local database.
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getAllCount function");
	de.itgs.WorkOrders.SupplyOrders.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of SupplyOrders using where clause in the local Database
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getCount->successcallback");
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
* Creates a new instance of SupplyOrders in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.WorkOrders.SupplyOrders.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.SupplyOrders.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"SupplyOrders",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.SupplyOrders.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of SupplyOrders in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].issuerAN8 = 0;
*		valuesArray[0].addressType = "addressType_0";
*		valuesArray[0].addressId = 0;
*		valuesArray[0].state = "state_0";
*		valuesArray[0].dueDate = 0;
*		valuesArray[0].comment = "comment_0";
*		valuesArray[0].cmdNummer = 0;
*		valuesArray[1] = {};
*		valuesArray[1].issuerAN8 = 1;
*		valuesArray[1].addressType = "addressType_1";
*		valuesArray[1].addressId = 1;
*		valuesArray[1].state = "state_1";
*		valuesArray[1].dueDate = 1;
*		valuesArray[1].comment = "comment_1";
*		valuesArray[1].cmdNummer = 1;
*		valuesArray[2] = {};
*		valuesArray[2].issuerAN8 = 2;
*		valuesArray[2].addressType = "addressType_2";
*		valuesArray[2].addressId = 2;
*		valuesArray[2].state = "state_2";
*		valuesArray[2].dueDate = 2;
*		valuesArray[2].comment = "comment_2";
*		valuesArray[2].cmdNummer = 2;
*		de.itgs.WorkOrders.SupplyOrders.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"SupplyOrders",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.WorkOrders.SupplyOrders.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates SupplyOrders using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.WorkOrders.SupplyOrders.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.SupplyOrders.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.WorkOrders.SupplyOrders.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"SupplyOrders",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.WorkOrders.SupplyOrders.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates SupplyOrders(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"SupplyOrders",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.SupplyOrders.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.SupplyOrders.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.SupplyOrders.getPKTable());
	}
};

/************************************************************************************
* Updates SupplyOrders(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.issuerAN8 = 0;
*		inputArray[0].changeSet.addressType = "addressType_updated0";
*		inputArray[0].changeSet.addressId = 0;
*		inputArray[0].changeSet.state = "state_updated0";
*		inputArray[0].whereClause = "where id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.issuerAN8 = 1;
*		inputArray[1].changeSet.addressType = "addressType_updated1";
*		inputArray[1].changeSet.addressId = 1;
*		inputArray[1].changeSet.state = "state_updated1";
*		inputArray[1].whereClause = "where id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.issuerAN8 = 2;
*		inputArray[2].changeSet.addressType = "addressType_updated2";
*		inputArray[2].changeSet.addressId = 2;
*		inputArray[2].changeSet.state = "state_updated2";
*		inputArray[2].whereClause = "where id = 2";
*		de.itgs.WorkOrders.SupplyOrders.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "SupplyOrders";
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
			if(kony.sync.attributeValidation(valuestable,"SupplyOrders",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.WorkOrders.SupplyOrders.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.WorkOrders.SupplyOrders.getPKTable());
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
		sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.WorkOrders.SupplyOrders.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes SupplyOrders using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.SupplyOrders.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.SupplyOrders.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.WorkOrders.SupplyOrders.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function SupplyOrdersTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.deleteByPK->SupplyOrders_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("supplyOrderid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.SupplyOrderLines.removeCascade,"SupplyOrderLines",false, errorcallback, markForUpload, record, false)){
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
	
	function SupplyOrdersErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.SupplyOrders.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function SupplyOrdersSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.SupplyOrders.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, SupplyOrdersTransactionCallback, SupplyOrdersSuccessCallback, SupplyOrdersErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes SupplyOrders(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.WorkOrders.SupplyOrders.remove("where addressType like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function SupplyOrders_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("supplyOrderid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SupplyOrderLines.removeCascade, "SupplyOrderLines", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function SupplyOrders_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.remove->SupplyOrders_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, SupplyOrders_removeTransactioncallback, SupplyOrders_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes SupplyOrders using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.SupplyOrders.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.SupplyOrders.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.WorkOrders.SupplyOrders.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function SupplyOrdersTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.removeDeviceInstanceByPK -> SupplyOrdersTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("supplyOrderid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.SupplyOrderLines.removeCascade,"SupplyOrderLines",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function SupplyOrdersErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.SupplyOrders.removeDeviceInstanceByPK -> SupplyOrdersErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function SupplyOrdersSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.removeDeviceInstanceByPK -> SupplyOrdersSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.SupplyOrders.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, SupplyOrdersTransactionCallback, SupplyOrdersSuccessCallback, SupplyOrdersErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes SupplyOrders(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function SupplyOrders_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("supplyOrderid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SupplyOrderLines.removeCascade, "SupplyOrderLines", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function SupplyOrders_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.remove->SupplyOrders_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, SupplyOrders_removeTransactioncallback, SupplyOrders_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves SupplyOrders using primary key from the local Database. 
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.SupplyOrders.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.SupplyOrders.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.SupplyOrders.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.WorkOrders.SupplyOrders.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves SupplyOrders(s) using where clause from the local Database. 
* e.g. de.itgs.WorkOrders.SupplyOrders.find("where addressType like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.SupplyOrders.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of SupplyOrders with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.SupplyOrders.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.WorkOrders.SupplyOrders.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.WorkOrders.SupplyOrders.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of SupplyOrders matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.WorkOrders.SupplyOrders.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of SupplyOrders pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.SupplyOrders.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of SupplyOrders pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.SupplyOrders.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of SupplyOrders deferred for upload.
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.SupplyOrders.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to SupplyOrders in local database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to SupplyOrders's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.SupplyOrders.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.SupplyOrders.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.SupplyOrders.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.SupplyOrders.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether SupplyOrders's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.SupplyOrders.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.SupplyOrders.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.SupplyOrders.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether SupplyOrders's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.SupplyOrders.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.SupplyOrders.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.SupplyOrders.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.SupplyOrders.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of SupplyOrderLines related to SupplyOrders
* with given supplyOrderid from local database.
*************************************************************************************/


de.itgs.WorkOrders.SupplyOrders.prototype.getSupplyOrderLinesWithsupplyOrderid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.prototype.getSupplyOrderLinesWithsupplyOrderid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.SupplyOrders.getSupplyOrderLinesWithsupplyOrderid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.SupplyOrders.getSupplyOrderLinesWithsupplyOrderid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getSupplyOrderLinesWithsupplyOrderid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.getSupplyOrderLinesWithsupplyOrderid",  "relationship", errorcallback)){
		return;
	}	
	function SupplyOrders_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"supplyOrderid", value:targetKey});
			

			var tbname = "SupplyOrderLines"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.SupplyOrderLines.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.SupplyOrderLines();
				obj.id = res[i].id;
				obj.supplyOrderid = res[i].supplyOrderid;
				obj.line = res[i].line;
				obj.articleCode = res[i].articleCode;
				obj.replacementCode = res[i].replacementCode;
				obj.quantity = res[i].quantity;
				obj.quantityValidated = res[i].quantityValidated;
				obj.quantityDelivered = res[i].quantityDelivered;
				obj.notAvailable = res[i].notAvailable;
				obj.deliveryDate = res[i].deliveryDate;
				obj.syncTimeStamp = res[i].syncTimeStamp;
				obj.statusFlag = res[i].statusFlag;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.SupplyOrders.getAllDetailsByPK(pks, SupplyOrders_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of SupplyOrderLines related to SupplyOrders
* with given supplyOrderid from local database.
*************************************************************************************/
de.itgs.WorkOrders.SupplyOrders.prototype.getCountOfSupplyOrderLinesWithsupplyOrderid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.prototype.getCountOfSupplyOrderLinesWithsupplyOrderid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.SupplyOrders.getCountOfSupplyOrderLinesWithsupplyOrderid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.SupplyOrders.getCountOfSupplyOrderLinesWithsupplyOrderid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getCountOfSupplyOrderLinesWithsupplyOrderid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.SupplyOrders.getCountOfSupplyOrderLinesWithsupplyOrderid",  "relationship", errorcallback)){
		return;
	}
	function SupplyOrders_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(supplyOrderid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"supplyOrderid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"supplyOrderid", value:targetKey});
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
		   de.itgs.WorkOrders.SupplyOrderLines.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.SupplyOrders.getAllDetailsByPK(pks, SupplyOrders_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.WorkOrders.SupplyOrders.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.removeCascade function");
	var tbname = de.itgs.WorkOrders.SupplyOrders.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("supplyOrderid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SupplyOrderLines.removeCascade, "SupplyOrderLines", false, errorcallback, markForUpload, null, isLocal)){
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


de.itgs.WorkOrders.SupplyOrders.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new de.itgs.WorkOrders.SupplyOrders();
			obj.id = res[i].id;
			obj.issuerAN8 = res[i].issuerAN8;
			obj.addressType = res[i].addressType;
			obj.addressId = res[i].addressId;
			obj.state = res[i].state;
			obj.dueDate = res[i].dueDate;
			obj.comment = res[i].comment;
			obj.cmdNummer = res[i].cmdNummer;
			obj.syncTimeStamp = res[i].syncTimeStamp;
			obj.statusFlag = res[i].statusFlag;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.WorkOrders.SupplyOrders.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.filterAttributes function");
	var attributeTable = {};
	attributeTable.id = "id";
	attributeTable.issuerAN8 = "issuerAN8";
	attributeTable.addressType = "addressType";
	attributeTable.addressId = "addressId";
	attributeTable.state = "state";
	attributeTable.dueDate = "dueDate";
	attributeTable.comment = "comment";
	attributeTable.cmdNummer = "cmdNummer";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject SupplyOrders. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject SupplyOrders. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject SupplyOrders. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.WorkOrders.SupplyOrders.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.WorkOrders.SupplyOrders.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.WorkOrders.SupplyOrders.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.issuerAN8 = this.issuerAN8;
	valuesTable.addressType = this.addressType;
	valuesTable.addressId = this.addressId;
	valuesTable.state = this.state;
	valuesTable.dueDate = this.dueDate;
	valuesTable.comment = this.comment;
	valuesTable.cmdNummer = this.cmdNummer;
	return valuesTable;
};

de.itgs.WorkOrders.SupplyOrders.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	return pkTable;
};

de.itgs.WorkOrders.SupplyOrders.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	return pkTable;
};

de.itgs.WorkOrders.SupplyOrders.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key id not specified in  " + opName + "  an item in SupplyOrders");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"SupplyOrders")));
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
			sync.log.error("Primary Key id not specified in  " + opName + "  an item in SupplyOrders");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"SupplyOrders")));
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

de.itgs.WorkOrders.SupplyOrders.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.validateNull function");
	return true;
};

de.itgs.WorkOrders.SupplyOrders.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.validateNullInsert function");
	return true;
};

de.itgs.WorkOrders.SupplyOrders.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.WorkOrders.SupplyOrders.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


de.itgs.WorkOrders.SupplyOrders.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.WorkOrders.SupplyOrders.getTableName = function(){
	return "SupplyOrders";
};




// **********************************End SupplyOrders's helper methods************************