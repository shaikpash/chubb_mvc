//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:14 CEST 2021UDCT*******************
// **********************************Start UDCT's helper methods************************
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
if(typeof(de.itgs.Masterdata)=== "undefined"){ de.itgs.Masterdata = {}; }

/************************************************************************************
* Creates new UDCT
*************************************************************************************/
de.itgs.Masterdata.UDCT = function(){
	this.id = null;
	this.SY = null;
	this.RT = null;
	this.KY = null;
	this.LNPG = null;
	this.DL01 = null;
	this.DL02 = null;
	this.StatusFlag = null;
	this.SyncTimestamp = null;
	this.markForUpload = true;
};

de.itgs.Masterdata.UDCT.prototype = {
	get id(){
		return this._id;
	},
	set id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute id in UDCT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._id = val;
	},
	get SY(){
		return this._SY;
	},
	set SY(val){
		this._SY = val;
	},
	get RT(){
		return this._RT;
	},
	set RT(val){
		this._RT = val;
	},
	get KY(){
		return this._KY;
	},
	set KY(val){
		this._KY = val;
	},
	get LNPG(){
		return this._LNPG;
	},
	set LNPG(val){
		this._LNPG = val;
	},
	get DL01(){
		return this._DL01;
	},
	set DL01(val){
		this._DL01 = val;
	},
	get DL02(){
		return this._DL02;
	},
	set DL02(val){
		this._DL02 = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in UDCT.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
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
* Retrieves all instances of UDCT SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "id";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "SY";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.Masterdata.UDCT.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.Masterdata.UDCT.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	orderByMap = kony.sync.formOrderByClause("UDCT",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.getAll->successcallback");
		successcallback(de.itgs.Masterdata.UDCT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of UDCT present in local database.
*************************************************************************************/
de.itgs.Masterdata.UDCT.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.getAllCount function");
	de.itgs.Masterdata.UDCT.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of UDCT using where clause in the local Database
*************************************************************************************/
de.itgs.Masterdata.UDCT.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.getCount->successcallback");
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
* Creates a new instance of UDCT in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.UDCT.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.UDCT.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.Masterdata.UDCT.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.Masterdata.UDCT.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.Masterdata.UDCT.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"UDCT",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.Masterdata.UDCT.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = de.itgs.Masterdata.UDCT.getRelationshipMap(relationshipMap,valuestable);
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	
	if(kony.sync.enableORMValidations){
		errMsg = "id=" + valuestable.id;
		pks["id"] = {key:"id",value:valuestable.id};
		de.itgs.Masterdata.UDCT.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of UDCT in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].id = 0;
*		valuesArray[0].SY = "SY_0";
*		valuesArray[0].RT = "RT_0";
*		valuesArray[0].KY = "KY_0";
*		valuesArray[0].LNPG = "LNPG_0";
*		valuesArray[0].DL01 = "DL01_0";
*		valuesArray[0].DL02 = "DL02_0";
*		valuesArray[1] = {};
*		valuesArray[1].id = 1;
*		valuesArray[1].SY = "SY_1";
*		valuesArray[1].RT = "RT_1";
*		valuesArray[1].KY = "KY_1";
*		valuesArray[1].LNPG = "LNPG_1";
*		valuesArray[1].DL01 = "DL01_1";
*		valuesArray[1].DL02 = "DL02_1";
*		valuesArray[2] = {};
*		valuesArray[2].id = 2;
*		valuesArray[2].SY = "SY_2";
*		valuesArray[2].RT = "RT_2";
*		valuesArray[2].KY = "KY_2";
*		valuesArray[2].LNPG = "LNPG_2";
*		valuesArray[2].DL01 = "DL01_2";
*		valuesArray[2].DL02 = "DL02_2";
*		de.itgs.Masterdata.UDCT.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.Masterdata.UDCT.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"UDCT",errorcallback,true)===false){
				return;
			}

			newValuesArray[i] = valuestable;
		}
		valuesArray = newValuesArray;
		var isDuplicateKey = false;
		//checking for duplicate records
		var connection = kony.sync.getConnectionOnly(dbname, dbname);
		kony.sync.startTransaction(connection, checkDuplicatePkCallback, transactionSuccessCallback, transactionErrorCallback);
		var isError = false;
		function checkDuplicatePkCallback(tx){
			arrayLength = valuesArray.length;
			for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var valuestable = valuesArray[i];
				var pks = [];
				errMsg = "id=" + valuestable.id;
				pks["id"] = {key:"id",value:valuestable.id};
				var wcs = [];
				if(de.itgs.Masterdata.UDCT.pkCheck(pks,wcs,errorcallback,"searching")===false){
					isError = true;
					return;
				}
				var query = kony.sync.qb_createQuery();
							kony.sync.qb_select(query, null);
							kony.sync.qb_from(query, tbname);
							kony.sync.qb_where(query, wcs);
				var query_compile = kony.sync.qb_compile(query);
				var sql = query_compile[0];
				var params = query_compile[1];
				var resultset = kony.sync.executeSql(tx, sql, params);
				if(resultset===false){
					isError = true;
					return;
				}
				if(resultset.rows.length!=0){
					isError = true;
					errMsg = "[" + errMsg + "]";
					isDuplicateKey = true;
					return;
				}
			}
			if(!isError){
				checkIntegrity(tx);
			}
		}
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
		sync.log.trace("Entering  de.itgs.Masterdata.UDCT.createAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
		}
		else{
			if(isReferentialIntegrityFailure){
				kony.sync.verifyAndCallClosure(errorcallback, errObject);
			}
			if(isDuplicateKey){
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
			}
		}
	}
	
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  de.itgs.Masterdata.UDCT.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.Masterdata.UDCT.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates UDCT using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.UDCT.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.UDCT.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.Masterdata.UDCT.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.Masterdata.UDCT.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.Masterdata.UDCT.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.Masterdata.UDCT.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"UDCT",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.Masterdata.UDCT.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates UDCT(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.UDCT.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"UDCT",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.Masterdata.UDCT.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.Masterdata.UDCT.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.Masterdata.UDCT.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.Masterdata.UDCT.getPKTable());
	}
};

/************************************************************************************
* Updates UDCT(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.SY = "SY_updated0";
*		inputArray[0].changeSet.RT = "RT_updated0";
*		inputArray[0].changeSet.KY = "KY_updated0";
*		inputArray[0].changeSet.LNPG = "LNPG_updated0";
*		inputArray[0].whereClause = "where id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.SY = "SY_updated1";
*		inputArray[1].changeSet.RT = "RT_updated1";
*		inputArray[1].changeSet.KY = "KY_updated1";
*		inputArray[1].changeSet.LNPG = "LNPG_updated1";
*		inputArray[1].whereClause = "where id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.SY = "SY_updated2";
*		inputArray[2].changeSet.RT = "RT_updated2";
*		inputArray[2].changeSet.KY = "KY_updated2";
*		inputArray[2].changeSet.LNPG = "LNPG_updated2";
*		inputArray[2].whereClause = "where id = 2";
*		de.itgs.Masterdata.UDCT.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.Masterdata.UDCT.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "UDCT";
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
			if(kony.sync.attributeValidation(valuestable,"UDCT",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.Masterdata.UDCT.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.Masterdata.UDCT.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.Masterdata.UDCT.getPKTable());
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
		sync.log.trace("Entering  de.itgs.Masterdata.UDCT.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.Masterdata.UDCT.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes UDCT using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.UDCT.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.UDCT.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.Masterdata.UDCT.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.Masterdata.UDCT.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function UDCTTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.deleteByPK->UDCT_PKPresent successcallback");
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
	
	function UDCTErrorCallback(){
		sync.log.error("Entering de.itgs.Masterdata.UDCT.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function UDCTSuccessCallback(){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.Masterdata.UDCT.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, UDCTTransactionCallback, UDCTSuccessCallback, UDCTErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes UDCT(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.Masterdata.UDCT.remove("where SY like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.Masterdata.UDCT.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function UDCT_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function UDCT_removeSuccess(){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.remove->UDCT_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, UDCT_removeTransactioncallback, UDCT_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes UDCT using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.Masterdata.UDCT.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.UDCT.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.UDCT.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.Masterdata.UDCT.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function UDCTTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.removeDeviceInstanceByPK -> UDCTTransactionCallback");
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
	
	function UDCTErrorCallback(){
		sync.log.error("Entering de.itgs.Masterdata.UDCT.removeDeviceInstanceByPK -> UDCTErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function UDCTSuccessCallback(){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.removeDeviceInstanceByPK -> UDCTSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.Masterdata.UDCT.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, UDCTTransactionCallback, UDCTSuccessCallback, UDCTErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes UDCT(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.Masterdata.UDCT.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function UDCT_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function UDCT_removeSuccess(){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.remove->UDCT_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, UDCT_removeTransactioncallback, UDCT_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves UDCT using primary key from the local Database. 
*************************************************************************************/
de.itgs.Masterdata.UDCT.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.UDCT.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.UDCT.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	var wcs = [];
	if(de.itgs.Masterdata.UDCT.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.Masterdata.UDCT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves UDCT(s) using where clause from the local Database. 
* e.g. de.itgs.Masterdata.UDCT.find("where SY like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.Masterdata.UDCT.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.UDCT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of UDCT with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.UDCT.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.UDCT.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.Masterdata.UDCT.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.Masterdata.UDCT.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of UDCT matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.UDCT.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
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
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.Masterdata.UDCT.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of UDCT pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.Masterdata.UDCT.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
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
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.UDCT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of UDCT pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.Masterdata.UDCT.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.UDCT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of UDCT deferred for upload.
*************************************************************************************/
de.itgs.Masterdata.UDCT.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
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
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.UDCT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to UDCT in local database to last synced state
*************************************************************************************/
de.itgs.Masterdata.UDCT.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to UDCT's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.Masterdata.UDCT.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.UDCT.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.UDCT.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	var wcs = [];
	if(de.itgs.Masterdata.UDCT.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.Masterdata.UDCT.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether UDCT's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.Masterdata.UDCT.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.UDCT.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.UDCT.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.UDCT.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.Masterdata.UDCT.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether UDCT's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.Masterdata.UDCT.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.UDCT.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.UDCT.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.UDCT.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.UDCT.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.Masterdata.UDCT.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.Masterdata.UDCT.isRecordPendingForUpload->successcallback function");
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
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.Masterdata.UDCT.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.removeCascade function");
	var tbname = de.itgs.Masterdata.UDCT.getTableName();
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


de.itgs.Masterdata.UDCT.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new de.itgs.Masterdata.UDCT();
			obj.id = res[i].id;
			obj.SY = res[i].SY;
			obj.RT = res[i].RT;
			obj.KY = res[i].KY;
			obj.LNPG = res[i].LNPG;
			obj.DL01 = res[i].DL01;
			obj.DL02 = res[i].DL02;
			obj.StatusFlag = res[i].StatusFlag;
			obj.SyncTimestamp = res[i].SyncTimestamp;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.Masterdata.UDCT.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.filterAttributes function");
	var attributeTable = {};
	attributeTable.id = "id";
	attributeTable.SY = "SY";
	attributeTable.RT = "RT";
	attributeTable.KY = "KY";
	attributeTable.LNPG = "LNPG";
	attributeTable.DL01 = "DL01";
	attributeTable.DL02 = "DL02";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject UDCT. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject UDCT. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject UDCT. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.Masterdata.UDCT.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.Masterdata.UDCT.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.Masterdata.UDCT.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.SY = this.SY;
	valuesTable.RT = this.RT;
	valuesTable.KY = this.KY;
	valuesTable.LNPG = this.LNPG;
	valuesTable.DL01 = this.DL01;
	valuesTable.DL02 = this.DL02;
	return valuesTable;
};

de.itgs.Masterdata.UDCT.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	return pkTable;
};

de.itgs.Masterdata.UDCT.getPKTable = function(){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	return pkTable;
};

de.itgs.Masterdata.UDCT.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key id not specified in  " + opName + "  an item in UDCT");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"UDCT")));
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
			sync.log.error("Primary Key id not specified in  " + opName + "  an item in UDCT");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"UDCT")));
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

de.itgs.Masterdata.UDCT.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.validateNull function");
	return true;
};

de.itgs.Masterdata.UDCT.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.validateNullInsert function");
	if(kony.sync.isNull(valuestable.id) || kony.sync.isEmptyString(valuestable.id)){
		sync.log.error("Mandatory attribute id is missing for the SyncObject UDCT.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "UDCT", "id")));
		return false;
	}
	return true;
};

de.itgs.Masterdata.UDCT.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.Masterdata.UDCT.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


de.itgs.Masterdata.UDCT.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.Masterdata.UDCT.getTableName = function(){
	return "UDCT";
};




// **********************************End UDCT's helper methods************************