//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:13 CEST 2021ApplicationConfiguration*******************
// **********************************Start ApplicationConfiguration's helper methods************************
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
* Creates new ApplicationConfiguration
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration = function(){
	this.ConfigurationId = null;
	this.InstanceId = null;
	this.SiteId = null;
	this.ConfigurationCode = null;
	this.ConfigurationDescription = null;
	this.ConfigurationValue = null;
	this.StatusFlag = null;
	this.DateAdded = null;
	this.AddedBy = null;
	this.DateChanged = null;
	this.ChangedBy = null;
	this.LocalDateChanged = null;
	this.LocalChangedBy = null;
	this.imgbase64 = null;
	this.imgProcessedDate = null;
	this.SyncTimeStamp = null;
	this.markForUpload = true;
};

de.itgs.Masterdata.ApplicationConfiguration.prototype = {
	get ConfigurationId(){
		return this._ConfigurationId;
	},
	set ConfigurationId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ConfigurationId in ApplicationConfiguration.\nExpected:\"integer\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ConfigurationId = val;
	},
	get InstanceId(){
		return this._InstanceId;
	},
	set InstanceId(val){
		this._InstanceId = val;
	},
	get SiteId(){
		return this._SiteId;
	},
	set SiteId(val){
		this._SiteId = val;
	},
	get ConfigurationCode(){
		return this._ConfigurationCode;
	},
	set ConfigurationCode(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ConfigurationCode in ApplicationConfiguration.\nExpected:\"integer\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ConfigurationCode = val;
	},
	get ConfigurationDescription(){
		return this._ConfigurationDescription;
	},
	set ConfigurationDescription(val){
		this._ConfigurationDescription = val;
	},
	get ConfigurationValue(){
		return this._ConfigurationValue;
	},
	set ConfigurationValue(val){
		this._ConfigurationValue = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in ApplicationConfiguration.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._StatusFlag = val;
	},
	get DateAdded(){
		return this._DateAdded;
	},
	set DateAdded(val){
		this._DateAdded = val;
	},
	get AddedBy(){
		return this._AddedBy;
	},
	set AddedBy(val){
		this._AddedBy = val;
	},
	get DateChanged(){
		return this._DateChanged;
	},
	set DateChanged(val){
		this._DateChanged = val;
	},
	get ChangedBy(){
		return this._ChangedBy;
	},
	set ChangedBy(val){
		this._ChangedBy = val;
	},
	get LocalDateChanged(){
		return this._LocalDateChanged;
	},
	set LocalDateChanged(val){
		this._LocalDateChanged = val;
	},
	get LocalChangedBy(){
		return this._LocalChangedBy;
	},
	set LocalChangedBy(val){
		this._LocalChangedBy = val;
	},
	get imgbase64(){
		return this._imgbase64;
	},
	set imgbase64(val){
		this._imgbase64 = val;
	},
	get imgProcessedDate(){
		return this._imgProcessedDate;
	},
	set imgProcessedDate(val){
		this._imgProcessedDate = val;
	},
	get SyncTimeStamp(){
		return this._SyncTimeStamp;
	},
	set SyncTimeStamp(val){
		this._SyncTimeStamp = val;
	},
};

/************************************************************************************
* Retrieves all instances of ApplicationConfiguration SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "ConfigurationId";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "InstanceId";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.Masterdata.ApplicationConfiguration.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	orderByMap = kony.sync.formOrderByClause("ApplicationConfiguration",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getAll->successcallback");
		successcallback(de.itgs.Masterdata.ApplicationConfiguration.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of ApplicationConfiguration present in local database.
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getAllCount function");
	de.itgs.Masterdata.ApplicationConfiguration.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of ApplicationConfiguration using where clause in the local Database
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getCount->successcallback");
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
* Creates a new instance of ApplicationConfiguration in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.Masterdata.ApplicationConfiguration.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.Masterdata.ApplicationConfiguration.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"ApplicationConfiguration",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.Masterdata.ApplicationConfiguration.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of ApplicationConfiguration in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].InstanceId = "InstanceId_0";
*		valuesArray[0].SiteId = "SiteId_0";
*		valuesArray[0].ConfigurationCode = 0;
*		valuesArray[0].ConfigurationDescription = "ConfigurationDescription_0";
*		valuesArray[0].ConfigurationValue = "ConfigurationValue_0";
*		valuesArray[0].DateAdded = 0;
*		valuesArray[0].AddedBy = "AddedBy_0";
*		valuesArray[0].DateChanged = 0;
*		valuesArray[0].ChangedBy = "ChangedBy_0";
*		valuesArray[0].LocalDateChanged = 0;
*		valuesArray[0].LocalChangedBy = "LocalChangedBy_0";
*		valuesArray[0].imgbase64 = "imgbase64_0";
*		valuesArray[0].imgProcessedDate = 0;
*		valuesArray[1] = {};
*		valuesArray[1].InstanceId = "InstanceId_1";
*		valuesArray[1].SiteId = "SiteId_1";
*		valuesArray[1].ConfigurationCode = 1;
*		valuesArray[1].ConfigurationDescription = "ConfigurationDescription_1";
*		valuesArray[1].ConfigurationValue = "ConfigurationValue_1";
*		valuesArray[1].DateAdded = 1;
*		valuesArray[1].AddedBy = "AddedBy_1";
*		valuesArray[1].DateChanged = 1;
*		valuesArray[1].ChangedBy = "ChangedBy_1";
*		valuesArray[1].LocalDateChanged = 1;
*		valuesArray[1].LocalChangedBy = "LocalChangedBy_1";
*		valuesArray[1].imgbase64 = "imgbase64_1";
*		valuesArray[1].imgProcessedDate = 1;
*		valuesArray[2] = {};
*		valuesArray[2].InstanceId = "InstanceId_2";
*		valuesArray[2].SiteId = "SiteId_2";
*		valuesArray[2].ConfigurationCode = 2;
*		valuesArray[2].ConfigurationDescription = "ConfigurationDescription_2";
*		valuesArray[2].ConfigurationValue = "ConfigurationValue_2";
*		valuesArray[2].DateAdded = 2;
*		valuesArray[2].AddedBy = "AddedBy_2";
*		valuesArray[2].DateChanged = 2;
*		valuesArray[2].ChangedBy = "ChangedBy_2";
*		valuesArray[2].LocalDateChanged = 2;
*		valuesArray[2].LocalChangedBy = "LocalChangedBy_2";
*		valuesArray[2].imgbase64 = "imgbase64_2";
*		valuesArray[2].imgProcessedDate = 2;
*		de.itgs.Masterdata.ApplicationConfiguration.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"ApplicationConfiguration",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.Masterdata.ApplicationConfiguration.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates ApplicationConfiguration using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.Masterdata.ApplicationConfiguration.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.Masterdata.ApplicationConfiguration.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.Masterdata.ApplicationConfiguration.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"ApplicationConfiguration",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.Masterdata.ApplicationConfiguration.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates ApplicationConfiguration(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"ApplicationConfiguration",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.Masterdata.ApplicationConfiguration.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.Masterdata.ApplicationConfiguration.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.Masterdata.ApplicationConfiguration.getPKTable());
	}
};

/************************************************************************************
* Updates ApplicationConfiguration(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.InstanceId = "InstanceId_updated0";
*		inputArray[0].changeSet.SiteId = "SiteId_updated0";
*		inputArray[0].changeSet.ConfigurationCode = 0;
*		inputArray[0].changeSet.ConfigurationDescription = "ConfigurationDescription_updated0";
*		inputArray[0].whereClause = "where ConfigurationId = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.InstanceId = "InstanceId_updated1";
*		inputArray[1].changeSet.SiteId = "SiteId_updated1";
*		inputArray[1].changeSet.ConfigurationCode = 1;
*		inputArray[1].changeSet.ConfigurationDescription = "ConfigurationDescription_updated1";
*		inputArray[1].whereClause = "where ConfigurationId = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.InstanceId = "InstanceId_updated2";
*		inputArray[2].changeSet.SiteId = "SiteId_updated2";
*		inputArray[2].changeSet.ConfigurationCode = 2;
*		inputArray[2].changeSet.ConfigurationDescription = "ConfigurationDescription_updated2";
*		inputArray[2].whereClause = "where ConfigurationId = 2";
*		de.itgs.Masterdata.ApplicationConfiguration.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "ApplicationConfiguration";
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
			if(kony.sync.attributeValidation(valuestable,"ApplicationConfiguration",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.Masterdata.ApplicationConfiguration.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.Masterdata.ApplicationConfiguration.getPKTable());
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
		sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.Masterdata.ApplicationConfiguration.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes ApplicationConfiguration using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.ApplicationConfiguration.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.Masterdata.ApplicationConfiguration.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.Masterdata.ApplicationConfiguration.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function ApplicationConfigurationTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.deleteByPK->ApplicationConfiguration_PKPresent successcallback");
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
	
	function ApplicationConfigurationErrorCallback(){
		sync.log.error("Entering de.itgs.Masterdata.ApplicationConfiguration.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function ApplicationConfigurationSuccessCallback(){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.Masterdata.ApplicationConfiguration.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, ApplicationConfigurationTransactionCallback, ApplicationConfigurationSuccessCallback, ApplicationConfigurationErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes ApplicationConfiguration(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.Masterdata.ApplicationConfiguration.remove("where InstanceId like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function ApplicationConfiguration_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function ApplicationConfiguration_removeSuccess(){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.remove->ApplicationConfiguration_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, ApplicationConfiguration_removeTransactioncallback, ApplicationConfiguration_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes ApplicationConfiguration using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.ApplicationConfiguration.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.ApplicationConfiguration.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.Masterdata.ApplicationConfiguration.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function ApplicationConfigurationTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.removeDeviceInstanceByPK -> ApplicationConfigurationTransactionCallback");
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
	
	function ApplicationConfigurationErrorCallback(){
		sync.log.error("Entering de.itgs.Masterdata.ApplicationConfiguration.removeDeviceInstanceByPK -> ApplicationConfigurationErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function ApplicationConfigurationSuccessCallback(){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.removeDeviceInstanceByPK -> ApplicationConfigurationSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.Masterdata.ApplicationConfiguration.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, ApplicationConfigurationTransactionCallback, ApplicationConfigurationSuccessCallback, ApplicationConfigurationErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes ApplicationConfiguration(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function ApplicationConfiguration_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function ApplicationConfiguration_removeSuccess(){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.remove->ApplicationConfiguration_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, ApplicationConfiguration_removeTransactioncallback, ApplicationConfiguration_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves ApplicationConfiguration using primary key from the local Database. 
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.ApplicationConfiguration.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.ApplicationConfiguration.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	var wcs = [];
	if(de.itgs.Masterdata.ApplicationConfiguration.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.Masterdata.ApplicationConfiguration.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves ApplicationConfiguration(s) using where clause from the local Database. 
* e.g. de.itgs.Masterdata.ApplicationConfiguration.find("where InstanceId like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.ApplicationConfiguration.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of ApplicationConfiguration with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.ApplicationConfiguration.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.Masterdata.ApplicationConfiguration.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.Masterdata.ApplicationConfiguration.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of ApplicationConfiguration matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
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
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.Masterdata.ApplicationConfiguration.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of ApplicationConfiguration pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
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
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.ApplicationConfiguration.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of ApplicationConfiguration pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.ApplicationConfiguration.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of ApplicationConfiguration deferred for upload.
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
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
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.ApplicationConfiguration.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to ApplicationConfiguration in local database to last synced state
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to ApplicationConfiguration's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.ApplicationConfiguration.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.ApplicationConfiguration.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	var wcs = [];
	if(de.itgs.Masterdata.ApplicationConfiguration.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.Masterdata.ApplicationConfiguration.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether ApplicationConfiguration's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.ApplicationConfiguration.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.ApplicationConfiguration.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.Masterdata.ApplicationConfiguration.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether ApplicationConfiguration's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.Masterdata.ApplicationConfiguration.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.ApplicationConfiguration.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.ApplicationConfiguration.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.ApplicationConfiguration.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.ApplicationConfiguration.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.Masterdata.ApplicationConfiguration.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.isRecordPendingForUpload->successcallback function");
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
de.itgs.Masterdata.ApplicationConfiguration.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.removeCascade function");
	var tbname = de.itgs.Masterdata.ApplicationConfiguration.getTableName();
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


de.itgs.Masterdata.ApplicationConfiguration.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new de.itgs.Masterdata.ApplicationConfiguration();
			obj.ConfigurationId = res[i].ConfigurationId;
			obj.InstanceId = res[i].InstanceId;
			obj.SiteId = res[i].SiteId;
			obj.ConfigurationCode = res[i].ConfigurationCode;
			obj.ConfigurationDescription = res[i].ConfigurationDescription;
			obj.ConfigurationValue = res[i].ConfigurationValue;
			obj.StatusFlag = res[i].StatusFlag;
			obj.DateAdded = res[i].DateAdded;
			obj.AddedBy = res[i].AddedBy;
			obj.DateChanged = res[i].DateChanged;
			obj.ChangedBy = res[i].ChangedBy;
			obj.LocalDateChanged = res[i].LocalDateChanged;
			obj.LocalChangedBy = res[i].LocalChangedBy;
			obj.imgbase64 = res[i].imgbase64;
			obj.imgProcessedDate = res[i].imgProcessedDate;
			obj.SyncTimeStamp = res[i].SyncTimeStamp;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.Masterdata.ApplicationConfiguration.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.filterAttributes function");
	var attributeTable = {};
	attributeTable.ConfigurationId = "ConfigurationId";
	attributeTable.InstanceId = "InstanceId";
	attributeTable.SiteId = "SiteId";
	attributeTable.ConfigurationCode = "ConfigurationCode";
	attributeTable.ConfigurationDescription = "ConfigurationDescription";
	attributeTable.ConfigurationValue = "ConfigurationValue";
	attributeTable.DateAdded = "DateAdded";
	attributeTable.AddedBy = "AddedBy";
	attributeTable.DateChanged = "DateChanged";
	attributeTable.ChangedBy = "ChangedBy";
	attributeTable.LocalDateChanged = "LocalDateChanged";
	attributeTable.LocalChangedBy = "LocalChangedBy";
	attributeTable.imgbase64 = "imgbase64";
	attributeTable.imgProcessedDate = "imgProcessedDate";

	var PKTable = {};
	PKTable.ConfigurationId = {}
	PKTable.ConfigurationId.name = "ConfigurationId";
	PKTable.ConfigurationId.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject ApplicationConfiguration. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject ApplicationConfiguration. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject ApplicationConfiguration. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.Masterdata.ApplicationConfiguration.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.Masterdata.ApplicationConfiguration.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.Masterdata.ApplicationConfiguration.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.ConfigurationId = this.ConfigurationId;
	}
	valuesTable.InstanceId = this.InstanceId;
	valuesTable.SiteId = this.SiteId;
	valuesTable.ConfigurationCode = this.ConfigurationCode;
	valuesTable.ConfigurationDescription = this.ConfigurationDescription;
	valuesTable.ConfigurationValue = this.ConfigurationValue;
	valuesTable.DateAdded = this.DateAdded;
	valuesTable.AddedBy = this.AddedBy;
	valuesTable.DateChanged = this.DateChanged;
	valuesTable.ChangedBy = this.ChangedBy;
	valuesTable.LocalDateChanged = this.LocalDateChanged;
	valuesTable.LocalChangedBy = this.LocalChangedBy;
	valuesTable.imgbase64 = this.imgbase64;
	valuesTable.imgProcessedDate = this.imgProcessedDate;
	return valuesTable;
};

de.itgs.Masterdata.ApplicationConfiguration.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.prototype.getPKTable function");
	var pkTable = {};
	pkTable.ConfigurationId = {key:"ConfigurationId",value:this.ConfigurationId};
	return pkTable;
};

de.itgs.Masterdata.ApplicationConfiguration.getPKTable = function(){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getPKTable function");
	var pkTable = [];
	pkTable.push("ConfigurationId");
	return pkTable;
};

de.itgs.Masterdata.ApplicationConfiguration.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key ConfigurationId not specified in  " + opName + "  an item in ApplicationConfiguration");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("ConfigurationId",opName,"ApplicationConfiguration")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.ConfigurationId)){
			if(!kony.sync.isNull(pks.ConfigurationId.value)){
				wc.key = "ConfigurationId";
				wc.value = pks.ConfigurationId.value;
			}
			else{
				wc.key = "ConfigurationId";
				wc.value = pks.ConfigurationId;
			}
		}else{
			sync.log.error("Primary Key ConfigurationId not specified in  " + opName + "  an item in ApplicationConfiguration");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("ConfigurationId",opName,"ApplicationConfiguration")));
			return false;
		}
	}
	else{
		wc.key = "ConfigurationId";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};

de.itgs.Masterdata.ApplicationConfiguration.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.validateNull function");
	if(valuestable.InstanceId!==undefined){
		if(kony.sync.isNull(valuestable.InstanceId) || kony.sync.isEmptyString(valuestable.InstanceId)){
			sync.log.error("Mandatory attribute InstanceId is missing for the SyncObject ApplicationConfiguration.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ApplicationConfiguration", "InstanceId")));
			return false;
		}
	}
	if(valuestable.SiteId!==undefined){
		if(kony.sync.isNull(valuestable.SiteId) || kony.sync.isEmptyString(valuestable.SiteId)){
			sync.log.error("Mandatory attribute SiteId is missing for the SyncObject ApplicationConfiguration.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ApplicationConfiguration", "SiteId")));
			return false;
		}
	}
	if(valuestable.DateAdded!==undefined){
		if(kony.sync.isNull(valuestable.DateAdded) || kony.sync.isEmptyString(valuestable.DateAdded)){
			sync.log.error("Mandatory attribute DateAdded is missing for the SyncObject ApplicationConfiguration.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ApplicationConfiguration", "DateAdded")));
			return false;
		}
	}
	if(valuestable.AddedBy!==undefined){
		if(kony.sync.isNull(valuestable.AddedBy) || kony.sync.isEmptyString(valuestable.AddedBy)){
			sync.log.error("Mandatory attribute AddedBy is missing for the SyncObject ApplicationConfiguration.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ApplicationConfiguration", "AddedBy")));
			return false;
		}
	}
	return true;
};

de.itgs.Masterdata.ApplicationConfiguration.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.validateNullInsert function");
	if(kony.sync.isNull(valuestable.InstanceId) || kony.sync.isEmptyString(valuestable.InstanceId)){
		sync.log.error("Mandatory attribute InstanceId is missing for the SyncObject ApplicationConfiguration.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ApplicationConfiguration", "InstanceId")));
		return false;
	}
	if(kony.sync.isNull(valuestable.SiteId) || kony.sync.isEmptyString(valuestable.SiteId)){
		sync.log.error("Mandatory attribute SiteId is missing for the SyncObject ApplicationConfiguration.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ApplicationConfiguration", "SiteId")));
		return false;
	}
	if(kony.sync.isNull(valuestable.DateAdded) || kony.sync.isEmptyString(valuestable.DateAdded)){
		sync.log.error("Mandatory attribute DateAdded is missing for the SyncObject ApplicationConfiguration.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ApplicationConfiguration", "DateAdded")));
		return false;
	}
	if(kony.sync.isNull(valuestable.AddedBy) || kony.sync.isEmptyString(valuestable.AddedBy)){
		sync.log.error("Mandatory attribute AddedBy is missing for the SyncObject ApplicationConfiguration.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ApplicationConfiguration", "AddedBy")));
		return false;
	}
	return true;
};

de.itgs.Masterdata.ApplicationConfiguration.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.Masterdata.ApplicationConfiguration.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


de.itgs.Masterdata.ApplicationConfiguration.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.Masterdata.ApplicationConfiguration.getTableName = function(){
	return "ApplicationConfiguration";
};




// **********************************End ApplicationConfiguration's helper methods************************