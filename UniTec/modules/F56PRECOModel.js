//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:12 CEST 2021F56PRECO*******************
// **********************************Start F56PRECO's helper methods************************
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
* Creates new F56PRECO
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO = function(){
	this.id = null;
	this.DOCO = null;
	this.TYPE = null;
	this.SALESTYPE = null;
	this.SALESREASON = null;
	this.REPLACEMENTREASON = null;
	this.STATUS = null;
	this.STATUSDATE = null;
	this.CREATEDBY = null;
	this.CREATEDDATE = null;
	this.OWNER = null;
	this.CONTACT = null;
	this.ITEMSTATUSREASON = null;
	this.StatusFlag = null;
	this.SyncTimestamp = null;
	this.QUOTATIONID = null;
	this.CIBId = null;
	this.signatureid = null;
	this.CLIENTORDERNUMBER = null;
	this.DELIVERYADDRESSTYPE = null;
	this.wishedDeliveryDate = null;
	this.DISCOUNT = null;
	this.markForUpload = true;
};

de.itgs.WorkOrders.F56PRECO.prototype = {
	get id(){
		return this._id;
	},
	set id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute id in F56PRECO.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._id = val;
	},
	get DOCO(){
		return this._DOCO;
	},
	set DOCO(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute DOCO in F56PRECO.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DOCO = val;
	},
	get TYPE(){
		return this._TYPE;
	},
	set TYPE(val){
		this._TYPE = val;
	},
	get SALESTYPE(){
		return this._SALESTYPE;
	},
	set SALESTYPE(val){
		this._SALESTYPE = val;
	},
	get SALESREASON(){
		return this._SALESREASON;
	},
	set SALESREASON(val){
		this._SALESREASON = val;
	},
	get REPLACEMENTREASON(){
		return this._REPLACEMENTREASON;
	},
	set REPLACEMENTREASON(val){
		this._REPLACEMENTREASON = val;
	},
	get STATUS(){
		return this._STATUS;
	},
	set STATUS(val){
		this._STATUS = val;
	},
	get STATUSDATE(){
		return this._STATUSDATE;
	},
	set STATUSDATE(val){
		this._STATUSDATE = val;
	},
	get CREATEDBY(){
		return this._CREATEDBY;
	},
	set CREATEDBY(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute CREATEDBY in F56PRECO.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._CREATEDBY = val;
	},
	get CREATEDDATE(){
		return this._CREATEDDATE;
	},
	set CREATEDDATE(val){
		this._CREATEDDATE = val;
	},
	get OWNER(){
		return this._OWNER;
	},
	set OWNER(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute OWNER in F56PRECO.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._OWNER = val;
	},
	get CONTACT(){
		return this._CONTACT;
	},
	set CONTACT(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute CONTACT in F56PRECO.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._CONTACT = val;
	},
	get ITEMSTATUSREASON(){
		return this._ITEMSTATUSREASON;
	},
	set ITEMSTATUSREASON(val){
		this._ITEMSTATUSREASON = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in F56PRECO.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._StatusFlag = val;
	},
	get SyncTimestamp(){
		return this._SyncTimestamp;
	},
	set SyncTimestamp(val){
		this._SyncTimestamp = val;
	},
	get QUOTATIONID(){
		return this._QUOTATIONID;
	},
	set QUOTATIONID(val){
		this._QUOTATIONID = val;
	},
	get CIBId(){
		return this._CIBId;
	},
	set CIBId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute CIBId in F56PRECO.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._CIBId = val;
	},
	get signatureid(){
		return this._signatureid;
	},
	set signatureid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute signatureid in F56PRECO.\nExpected:\"integer\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._signatureid = val;
	},
	get CLIENTORDERNUMBER(){
		return this._CLIENTORDERNUMBER;
	},
	set CLIENTORDERNUMBER(val){
		this._CLIENTORDERNUMBER = val;
	},
	get DELIVERYADDRESSTYPE(){
		return this._DELIVERYADDRESSTYPE;
	},
	set DELIVERYADDRESSTYPE(val){
		this._DELIVERYADDRESSTYPE = val;
	},
	get wishedDeliveryDate(){
		return this._wishedDeliveryDate;
	},
	set wishedDeliveryDate(val){
		this._wishedDeliveryDate = val;
	},
	get DISCOUNT(){
		return this._DISCOUNT;
	},
	set DISCOUNT(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute DISCOUNT in F56PRECO.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DISCOUNT = val;
	},
};

/************************************************************************************
* Retrieves all instances of F56PRECO SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "id";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "DOCO";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.WorkOrders.F56PRECO.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	orderByMap = kony.sync.formOrderByClause("F56PRECO",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getAll->successcallback");
		successcallback(de.itgs.WorkOrders.F56PRECO.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of F56PRECO present in local database.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getAllCount function");
	de.itgs.WorkOrders.F56PRECO.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of F56PRECO using where clause in the local Database
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getCount->successcallback");
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
* Creates a new instance of F56PRECO in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.WorkOrders.F56PRECO.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56PRECO.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"F56PRECO",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.F56PRECO.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of F56PRECO in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].DOCO = 0;
*		valuesArray[0].TYPE = "TYPE_0";
*		valuesArray[0].SALESTYPE = "SALESTYPE_0";
*		valuesArray[0].SALESREASON = "SALESREASON_0";
*		valuesArray[0].REPLACEMENTREASON = "REPLACEMENTREASON_0";
*		valuesArray[0].STATUS = "STATUS_0";
*		valuesArray[0].STATUSDATE = 0;
*		valuesArray[0].CREATEDBY = 0;
*		valuesArray[0].CREATEDDATE = 0;
*		valuesArray[0].OWNER = 0;
*		valuesArray[0].CONTACT = 0;
*		valuesArray[0].ITEMSTATUSREASON = "ITEMSTATUSREASON_0";
*		valuesArray[0].QUOTATIONID = "QUOTATIONID_0";
*		valuesArray[0].CIBId = 0;
*		valuesArray[0].signatureid = 0;
*		valuesArray[0].CLIENTORDERNUMBER = "CLIENTORDERNUMBER_0";
*		valuesArray[0].DELIVERYADDRESSTYPE = "DELIVERYADDRESSTYPE_0";
*		valuesArray[0].wishedDeliveryDate = 0;
*		valuesArray[0].DISCOUNT = 0;
*		valuesArray[1] = {};
*		valuesArray[1].DOCO = 1;
*		valuesArray[1].TYPE = "TYPE_1";
*		valuesArray[1].SALESTYPE = "SALESTYPE_1";
*		valuesArray[1].SALESREASON = "SALESREASON_1";
*		valuesArray[1].REPLACEMENTREASON = "REPLACEMENTREASON_1";
*		valuesArray[1].STATUS = "STATUS_1";
*		valuesArray[1].STATUSDATE = 1;
*		valuesArray[1].CREATEDBY = 1;
*		valuesArray[1].CREATEDDATE = 1;
*		valuesArray[1].OWNER = 1;
*		valuesArray[1].CONTACT = 1;
*		valuesArray[1].ITEMSTATUSREASON = "ITEMSTATUSREASON_1";
*		valuesArray[1].QUOTATIONID = "QUOTATIONID_1";
*		valuesArray[1].CIBId = 1;
*		valuesArray[1].signatureid = 1;
*		valuesArray[1].CLIENTORDERNUMBER = "CLIENTORDERNUMBER_1";
*		valuesArray[1].DELIVERYADDRESSTYPE = "DELIVERYADDRESSTYPE_1";
*		valuesArray[1].wishedDeliveryDate = 1;
*		valuesArray[1].DISCOUNT = 1;
*		valuesArray[2] = {};
*		valuesArray[2].DOCO = 2;
*		valuesArray[2].TYPE = "TYPE_2";
*		valuesArray[2].SALESTYPE = "SALESTYPE_2";
*		valuesArray[2].SALESREASON = "SALESREASON_2";
*		valuesArray[2].REPLACEMENTREASON = "REPLACEMENTREASON_2";
*		valuesArray[2].STATUS = "STATUS_2";
*		valuesArray[2].STATUSDATE = 2;
*		valuesArray[2].CREATEDBY = 2;
*		valuesArray[2].CREATEDDATE = 2;
*		valuesArray[2].OWNER = 2;
*		valuesArray[2].CONTACT = 2;
*		valuesArray[2].ITEMSTATUSREASON = "ITEMSTATUSREASON_2";
*		valuesArray[2].QUOTATIONID = "QUOTATIONID_2";
*		valuesArray[2].CIBId = 2;
*		valuesArray[2].signatureid = 2;
*		valuesArray[2].CLIENTORDERNUMBER = "CLIENTORDERNUMBER_2";
*		valuesArray[2].DELIVERYADDRESSTYPE = "DELIVERYADDRESSTYPE_2";
*		valuesArray[2].wishedDeliveryDate = 2;
*		valuesArray[2].DISCOUNT = 2;
*		de.itgs.WorkOrders.F56PRECO.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"F56PRECO",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.WorkOrders.F56PRECO.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates F56PRECO using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.WorkOrders.F56PRECO.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56PRECO.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.WorkOrders.F56PRECO.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"F56PRECO",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.WorkOrders.F56PRECO.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates F56PRECO(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"F56PRECO",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.F56PRECO.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.F56PRECO.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.F56PRECO.getPKTable());
	}
};

/************************************************************************************
* Updates F56PRECO(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.DOCO = 0;
*		inputArray[0].changeSet.TYPE = "TYPE_updated0";
*		inputArray[0].changeSet.SALESTYPE = "SALESTYPE_updated0";
*		inputArray[0].changeSet.SALESREASON = "SALESREASON_updated0";
*		inputArray[0].whereClause = "where id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.DOCO = 1;
*		inputArray[1].changeSet.TYPE = "TYPE_updated1";
*		inputArray[1].changeSet.SALESTYPE = "SALESTYPE_updated1";
*		inputArray[1].changeSet.SALESREASON = "SALESREASON_updated1";
*		inputArray[1].whereClause = "where id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.DOCO = 2;
*		inputArray[2].changeSet.TYPE = "TYPE_updated2";
*		inputArray[2].changeSet.SALESTYPE = "SALESTYPE_updated2";
*		inputArray[2].changeSet.SALESREASON = "SALESREASON_updated2";
*		inputArray[2].whereClause = "where id = 2";
*		de.itgs.WorkOrders.F56PRECO.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "F56PRECO";
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
			if(kony.sync.attributeValidation(valuestable,"F56PRECO",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.WorkOrders.F56PRECO.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.WorkOrders.F56PRECO.getPKTable());
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.WorkOrders.F56PRECO.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes F56PRECO using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56PRECO.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.WorkOrders.F56PRECO.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function F56PRECOTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.deleteByPK->F56PRECO_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56PRECOId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56PRECOITEMS.removeCascade,"F56PRECOITEMS",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56PRECOId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Reporting.removeCascade,"Reporting",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("RecommendationId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.RecommendationQuotations.removeCascade,"RecommendationQuotations",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("precoid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.btphotos.removeCascade,"btphotos",false, errorcallback, markForUpload, record, false)){
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
	
	function F56PRECOErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECO.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function F56PRECOSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECO.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, F56PRECOTransactionCallback, F56PRECOSuccessCallback, F56PRECOErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes F56PRECO(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.WorkOrders.F56PRECO.remove("where TYPE like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function F56PRECO_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56PRECOId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56PRECOITEMS.removeCascade, "F56PRECOITEMS", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56PRECOId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Reporting.removeCascade, "Reporting", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("RecommendationId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.RecommendationQuotations.removeCascade, "RecommendationQuotations", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("precoid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.btphotos.removeCascade, "btphotos", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function F56PRECO_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.remove->F56PRECO_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, F56PRECO_removeTransactioncallback, F56PRECO_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes F56PRECO using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.WorkOrders.F56PRECO.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function F56PRECOTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.removeDeviceInstanceByPK -> F56PRECOTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56PRECOId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56PRECOITEMS.removeCascade,"F56PRECOITEMS",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56PRECOId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Reporting.removeCascade,"Reporting",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("RecommendationId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.RecommendationQuotations.removeCascade,"RecommendationQuotations",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("precoid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.btphotos.removeCascade,"btphotos",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function F56PRECOErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECO.removeDeviceInstanceByPK -> F56PRECOErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function F56PRECOSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.removeDeviceInstanceByPK -> F56PRECOSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECO.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, F56PRECOTransactionCallback, F56PRECOSuccessCallback, F56PRECOErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes F56PRECO(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function F56PRECO_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56PRECOId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56PRECOITEMS.removeCascade, "F56PRECOITEMS", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56PRECOId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Reporting.removeCascade, "Reporting", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("RecommendationId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.RecommendationQuotations.removeCascade, "RecommendationQuotations", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("precoid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.btphotos.removeCascade, "btphotos", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function F56PRECO_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.remove->F56PRECO_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, F56PRECO_removeTransactioncallback, F56PRECO_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves F56PRECO using primary key from the local Database. 
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.F56PRECO.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.WorkOrders.F56PRECO.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves F56PRECO(s) using where clause from the local Database. 
* e.g. de.itgs.WorkOrders.F56PRECO.find("where TYPE like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56PRECO.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of F56PRECO with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.WorkOrders.F56PRECO.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.WorkOrders.F56PRECO.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of F56PRECO matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECO.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of F56PRECO pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56PRECO.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of F56PRECO pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56PRECO.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of F56PRECO deferred for upload.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56PRECO.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to F56PRECO in local database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to F56PRECO's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.F56PRECO.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECO.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether F56PRECO's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.F56PRECO.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether F56PRECO's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECO.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.F56PRECO.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of F56PRECOITEMS related to F56PRECO
* with given F56PRECOId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56PRECO.prototype.getF56PRECOITEMSWithF56PRECOId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getF56PRECOITEMSWithF56PRECOId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getF56PRECOITEMSWithF56PRECOId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getF56PRECOITEMSWithF56PRECOId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getF56PRECOITEMSWithF56PRECOId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getF56PRECOITEMSWithF56PRECOId",  "relationship", errorcallback)){
		return;
	}	
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"F56PRECOId", value:targetKey});
			

			var tbname = "F56PRECOITEMS"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.F56PRECOITEMS.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.F56PRECOITEMS();
				obj.id = res[i].id;
				obj.TYPE = res[i].TYPE;
				obj.ITM = res[i].ITM;
				obj.QUANTITY = res[i].QUANTITY;
				obj.QUANTITYDELIVERED = res[i].QUANTITYDELIVERED;
				obj.REASON = res[i].REASON;
				obj.Y56LIEU = res[i].Y56LIEU;
				obj.Y56ETAG = res[i].Y56ETAG;
				obj.Y56EMPLA = res[i].Y56EMPLA;
				obj.Y56ZONL = res[i].Y56ZONL;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.F56BTREId = res[i].F56BTREId;
				obj.F56PRECOId = res[i].F56PRECOId;
				obj.CIBId = res[i].CIBId;
				obj.SUBTYPE = res[i].SUBTYPE;
				obj.basicPrice = res[i].basicPrice;
				obj.grossPrice = res[i].grossPrice;
				obj.VATPercentage = res[i].VATPercentage;
				obj.PRICINGORIGIN = res[i].PRICINGORIGIN;
				obj.UPC1 = res[i].UPC1;
				obj.EUSE = res[i].EUSE;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F56PRECOITEMS related to F56PRECO
* with given F56PRECOId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.getCountOfF56PRECOITEMSWithF56PRECOId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getCountOfF56PRECOITEMSWithF56PRECOId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getCountOfF56PRECOITEMSWithF56PRECOId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getCountOfF56PRECOITEMSWithF56PRECOId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getCountOfF56PRECOITEMSWithF56PRECOId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getCountOfF56PRECOITEMSWithF56PRECOId",  "relationship", errorcallback)){
		return;
	}
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(F56PRECOId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"F56PRECOId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"F56PRECOId", value:targetKey});
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
		   de.itgs.WorkOrders.F56PRECOITEMS.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of Reporting related to F56PRECO
* with given F56PRECOId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56PRECO.prototype.getReportingWithF56PRECOId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getReportingWithF56PRECOId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getReportingWithF56PRECOId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getReportingWithF56PRECOId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getReportingWithF56PRECOId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getReportingWithF56PRECOId",  "relationship", errorcallback)){
		return;
	}	
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"F56PRECOId", value:targetKey});
			

			var tbname = "Reporting"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.Reporting.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.Reporting();
				obj.id = res[i].id;
				obj.MEDIA = res[i].MEDIA;
				obj.TYPE = res[i].TYPE;
				obj.COPYN1 = res[i].COPYN1;
				obj.CONTACTId = res[i].CONTACTId;
				obj.F56PRECOId = res[i].F56PRECOId;
				obj.F56BTId = res[i].F56BTId;
				obj.QUOTATIONTRANSMISSIONId = res[i].QUOTATIONTRANSMISSIONId;
				obj.PRETRANSMITTED = res[i].PRETRANSMITTED;
				obj.PRETRANSMISSIONDATE = res[i].PRETRANSMISSIONDATE;
				obj.ERRORCODE = res[i].ERRORCODE;
				obj.ERRORMESSAGE = res[i].ERRORMESSAGE;
				obj.CREATEDBY = res[i].CREATEDBY;
				obj.CREATEDDATE = res[i].CREATEDDATE;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of Reporting related to F56PRECO
* with given F56PRECOId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.getCountOfReportingWithF56PRECOId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getCountOfReportingWithF56PRECOId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getCountOfReportingWithF56PRECOId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getCountOfReportingWithF56PRECOId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getCountOfReportingWithF56PRECOId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getCountOfReportingWithF56PRECOId",  "relationship", errorcallback)){
		return;
	}
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(F56PRECOId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"F56PRECOId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"F56PRECOId", value:targetKey});
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
		   de.itgs.WorkOrders.Reporting.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of RecommendationQuotations related to F56PRECO
* with given RecommendationId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56PRECO.prototype.getRecommendationQuotationsWithRecommendationId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getRecommendationQuotationsWithRecommendationId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getRecommendationQuotationsWithRecommendationId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getRecommendationQuotationsWithRecommendationId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getRecommendationQuotationsWithRecommendationId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getRecommendationQuotationsWithRecommendationId",  "relationship", errorcallback)){
		return;
	}	
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"RecommendationId", value:targetKey});
			

			var tbname = "RecommendationQuotations"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.RecommendationQuotations.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.RecommendationQuotations();
				obj.id = res[i].id;
				obj.RecommendationId = res[i].RecommendationId;
				obj.QuotationId = res[i].QuotationId;
				obj.QuotationNumber = res[i].QuotationNumber;
				obj.QuotationVersion = res[i].QuotationVersion;
				obj.ContactId = res[i].ContactId;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of RecommendationQuotations related to F56PRECO
* with given RecommendationId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.getCountOfRecommendationQuotationsWithRecommendationId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getCountOfRecommendationQuotationsWithRecommendationId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getCountOfRecommendationQuotationsWithRecommendationId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getCountOfRecommendationQuotationsWithRecommendationId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getCountOfRecommendationQuotationsWithRecommendationId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getCountOfRecommendationQuotationsWithRecommendationId",  "relationship", errorcallback)){
		return;
	}
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(RecommendationId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"RecommendationId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"RecommendationId", value:targetKey});
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
		   de.itgs.WorkOrders.RecommendationQuotations.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of btphotos related to F56PRECO
* with given precoid from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56PRECO.prototype.getbtphotosWithprecoid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getbtphotosWithprecoid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getbtphotosWithprecoid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getbtphotosWithprecoid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getbtphotosWithprecoid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getbtphotosWithprecoid",  "relationship", errorcallback)){
		return;
	}	
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"precoid", value:targetKey});
			

			var tbname = "btphotos"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.btphotos.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.btphotos();
				obj.id = res[i].id;
				obj.btid = res[i].btid;
				obj.cibid = res[i].cibid;
				obj.date = res[i].date;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.StatusFlag = res[i].StatusFlag;
				obj.image = res[i].image;
				obj.typedoc = res[i].typedoc;
				obj.precoid = res[i].precoid;
				obj.comment = res[i].comment;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of btphotos related to F56PRECO
* with given precoid from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.getCountOfbtphotosWithprecoid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getCountOfbtphotosWithprecoid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getCountOfbtphotosWithprecoid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getCountOfbtphotosWithprecoid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getCountOfbtphotosWithprecoid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getCountOfbtphotosWithprecoid",  "relationship", errorcallback)){
		return;
	}
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(precoid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"precoid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"precoid", value:targetKey});
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
		   de.itgs.WorkOrders.btphotos.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of signatures related to F56PRECO
* with given signatureid from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56PRECO.prototype.getsignaturesWithsignatureid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getsignaturesWithsignatureid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getsignaturesWithsignatureid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getsignaturesWithsignatureid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getsignaturesWithsignatureid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getsignaturesWithsignatureid",  "relationship", errorcallback)){
		return;
	}	
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].signatureid;
			wcs.push({key:"id", value:targetKey});
			

			var tbname = "signatures"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.signatures.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.signatures();
				obj.id = res[i].id;
				obj.contactid = res[i].contactid;
				obj.date = res[i].date;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.StatusFlag = res[i].StatusFlag;
				obj.signature = res[i].signature;
				obj.motifnonsignature = res[i].motifnonsignature;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of signatures related to F56PRECO
* with given signatureid from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.getCountOfsignaturesWithsignatureid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getCountOfsignaturesWithsignatureid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getCountOfsignaturesWithsignatureid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getCountOfsignaturesWithsignatureid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getCountOfsignaturesWithsignatureid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getCountOfsignaturesWithsignatureid",  "relationship", errorcallback)){
		return;
	}
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].signatureid;
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
		   de.itgs.WorkOrders.signatures.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of Contact related to F56PRECO
* with given CONTACT from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56PRECO.prototype.getContactWithCONTACT  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getContactWithCONTACT function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getContactWithCONTACT(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getContactWithCONTACT = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getContactWithCONTACT function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getContactWithCONTACT",  "relationship", errorcallback)){
		return;
	}	
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].CONTACT;
			wcs.push({key:"id", value:targetKey});
			

			var tbname = "Contact"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.Contact.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.Contact();
				obj.id = res[i].id;
				obj.CustomerId = res[i].CustomerId;
				obj.AN8 = res[i].AN8;
				obj.IDLN = res[i].IDLN;
				obj.ALKY = res[i].ALKY;
				obj.type = res[i].type;
				obj.title = res[i].title;
				obj.lastname = res[i].lastname;
				obj.firstname = res[i].firstname;
				obj.function = res[i].function;
				obj.maincontactflag = res[i].maincontactflag;
				obj.activeflag = res[i].activeflag;
				obj.mailingfamily = res[i].mailingfamily;
				obj.HasChangedFlag = res[i].HasChangedFlag;
				obj.StatusFlag = res[i].StatusFlag;
				obj.isConsistent = res[i].isConsistent;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.DeletedBy = res[i].DeletedBy;
				obj.lastChangeSource = res[i].lastChangeSource;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of Contact related to F56PRECO
* with given CONTACT from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.getCountOfContactWithCONTACT  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getCountOfContactWithCONTACT function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getCountOfContactWithCONTACT(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getCountOfContactWithCONTACT = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getCountOfContactWithCONTACT function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getCountOfContactWithCONTACT",  "relationship", errorcallback)){
		return;
	}
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].CONTACT;
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
		   de.itgs.WorkOrders.Contact.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of CustomerInstalledBase related to F56PRECO
* with given CIBId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56PRECO.prototype.getCustomerInstalledBaseWithCIBId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getCustomerInstalledBaseWithCIBId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getCustomerInstalledBaseWithCIBId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getCustomerInstalledBaseWithCIBId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getCustomerInstalledBaseWithCIBId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getCustomerInstalledBaseWithCIBId",  "relationship", errorcallback)){
		return;
	}	
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].CIBId;
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
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of CustomerInstalledBase related to F56PRECO
* with given CIBId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECO.prototype.getCountOfCustomerInstalledBaseWithCIBId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getCountOfCustomerInstalledBaseWithCIBId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECO.getCountOfCustomerInstalledBaseWithCIBId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECO.getCountOfCustomerInstalledBaseWithCIBId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getCountOfCustomerInstalledBaseWithCIBId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECO.getCountOfCustomerInstalledBaseWithCIBId",  "relationship", errorcallback)){
		return;
	}
	function F56PRECO_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].CIBId;
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
	
	de.itgs.WorkOrders.F56PRECO.getAllDetailsByPK(pks, F56PRECO_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.WorkOrders.F56PRECO.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.removeCascade function");
	var tbname = de.itgs.WorkOrders.F56PRECO.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56PRECOId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56PRECOITEMS.removeCascade, "F56PRECOITEMS", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56PRECOId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Reporting.removeCascade, "Reporting", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("RecommendationId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.RecommendationQuotations.removeCascade, "RecommendationQuotations", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("precoid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.btphotos.removeCascade, "btphotos", false, errorcallback, markForUpload, null, isLocal)){
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


de.itgs.WorkOrders.F56PRECO.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new de.itgs.WorkOrders.F56PRECO();
			obj.id = res[i].id;
			obj.DOCO = res[i].DOCO;
			obj.TYPE = res[i].TYPE;
			obj.SALESTYPE = res[i].SALESTYPE;
			obj.SALESREASON = res[i].SALESREASON;
			obj.REPLACEMENTREASON = res[i].REPLACEMENTREASON;
			obj.STATUS = res[i].STATUS;
			obj.STATUSDATE = res[i].STATUSDATE;
			obj.CREATEDBY = res[i].CREATEDBY;
			obj.CREATEDDATE = res[i].CREATEDDATE;
			obj.OWNER = res[i].OWNER;
			obj.CONTACT = res[i].CONTACT;
			obj.ITEMSTATUSREASON = res[i].ITEMSTATUSREASON;
			obj.StatusFlag = res[i].StatusFlag;
			obj.SyncTimestamp = res[i].SyncTimestamp;
			obj.QUOTATIONID = res[i].QUOTATIONID;
			obj.CIBId = res[i].CIBId;
			obj.signatureid = res[i].signatureid;
			obj.CLIENTORDERNUMBER = res[i].CLIENTORDERNUMBER;
			obj.DELIVERYADDRESSTYPE = res[i].DELIVERYADDRESSTYPE;
			obj.wishedDeliveryDate = res[i].wishedDeliveryDate;
			obj.DISCOUNT = res[i].DISCOUNT;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.WorkOrders.F56PRECO.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.filterAttributes function");
	var attributeTable = {};
	attributeTable.id = "id";
	attributeTable.DOCO = "DOCO";
	attributeTable.TYPE = "TYPE";
	attributeTable.SALESTYPE = "SALESTYPE";
	attributeTable.SALESREASON = "SALESREASON";
	attributeTable.REPLACEMENTREASON = "REPLACEMENTREASON";
	attributeTable.STATUS = "STATUS";
	attributeTable.STATUSDATE = "STATUSDATE";
	attributeTable.CREATEDBY = "CREATEDBY";
	attributeTable.CREATEDDATE = "CREATEDDATE";
	attributeTable.OWNER = "OWNER";
	attributeTable.CONTACT = "CONTACT";
	attributeTable.ITEMSTATUSREASON = "ITEMSTATUSREASON";
	attributeTable.QUOTATIONID = "QUOTATIONID";
	attributeTable.CIBId = "CIBId";
	attributeTable.signatureid = "signatureid";
	attributeTable.CLIENTORDERNUMBER = "CLIENTORDERNUMBER";
	attributeTable.DELIVERYADDRESSTYPE = "DELIVERYADDRESSTYPE";
	attributeTable.wishedDeliveryDate = "wishedDeliveryDate";
	attributeTable.DISCOUNT = "DISCOUNT";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject F56PRECO. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject F56PRECO. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject F56PRECO. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.WorkOrders.F56PRECO.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.WorkOrders.F56PRECO.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.WorkOrders.F56PRECO.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.DOCO = this.DOCO;
	valuesTable.TYPE = this.TYPE;
	valuesTable.SALESTYPE = this.SALESTYPE;
	valuesTable.SALESREASON = this.SALESREASON;
	valuesTable.REPLACEMENTREASON = this.REPLACEMENTREASON;
	valuesTable.STATUS = this.STATUS;
	valuesTable.STATUSDATE = this.STATUSDATE;
	valuesTable.CREATEDBY = this.CREATEDBY;
	valuesTable.CREATEDDATE = this.CREATEDDATE;
	valuesTable.OWNER = this.OWNER;
	valuesTable.CONTACT = this.CONTACT;
	valuesTable.ITEMSTATUSREASON = this.ITEMSTATUSREASON;
	valuesTable.QUOTATIONID = this.QUOTATIONID;
	valuesTable.CIBId = this.CIBId;
	valuesTable.signatureid = this.signatureid;
	valuesTable.CLIENTORDERNUMBER = this.CLIENTORDERNUMBER;
	valuesTable.DELIVERYADDRESSTYPE = this.DELIVERYADDRESSTYPE;
	valuesTable.wishedDeliveryDate = this.wishedDeliveryDate;
	valuesTable.DISCOUNT = this.DISCOUNT;
	return valuesTable;
};

de.itgs.WorkOrders.F56PRECO.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	return pkTable;
};

de.itgs.WorkOrders.F56PRECO.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	return pkTable;
};

de.itgs.WorkOrders.F56PRECO.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key id not specified in  " + opName + "  an item in F56PRECO");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"F56PRECO")));
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
			sync.log.error("Primary Key id not specified in  " + opName + "  an item in F56PRECO");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"F56PRECO")));
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

de.itgs.WorkOrders.F56PRECO.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.validateNull function");
	return true;
};

de.itgs.WorkOrders.F56PRECO.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.validateNullInsert function");
	return true;
};

de.itgs.WorkOrders.F56PRECO.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECO.getRelationshipMap function");
	var r1 = {};
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.DOCO)){
		r1.sourceAttribute.push("DOCO");
		r1.foreignKeyAttribute.push("DOCO");
		r1.targetAttributeValue.push(valuestable.DOCO);
	}
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.F56BT===undefined){
			relationshipMap.F56BT = [];
		}
		relationshipMap.F56BT.push(r1);
	}
	

	r1={}
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];	
	r1.targetAttributeValue = [];
	
	if (!kony.sync.isNullOrUndefined(valuestable.signatureid)){
		r1.sourceAttribute.push("id") ;
		r1.foreignKeyAttribute.push("signatureid");
		r1.targetAttributeValue.push(valuestable.signatureid) ;
	}
		
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.signatures===undefined){
			relationshipMap.signatures = [];
		}
		relationshipMap.signatures.push(r1);
	}
		
	r1={}
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];	
	r1.targetAttributeValue = [];
	
	if (!kony.sync.isNullOrUndefined(valuestable.CONTACT)){
		r1.sourceAttribute.push("id") ;
		r1.foreignKeyAttribute.push("CONTACT");
		r1.targetAttributeValue.push(valuestable.CONTACT) ;
	}
		
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.Contact===undefined){
			relationshipMap.Contact = [];
		}
		relationshipMap.Contact.push(r1);
	}
		
	r1={}
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];	
	r1.targetAttributeValue = [];
	
	if (!kony.sync.isNullOrUndefined(valuestable.CIBId)){
		r1.sourceAttribute.push("id") ;
		r1.foreignKeyAttribute.push("CIBId");
		r1.targetAttributeValue.push(valuestable.CIBId) ;
	}
		
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.CustomerInstalledBase===undefined){
			relationshipMap.CustomerInstalledBase = [];
		}
		relationshipMap.CustomerInstalledBase.push(r1);
	}
		
	return relationshipMap;
};


de.itgs.WorkOrders.F56PRECO.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.WorkOrders.F56PRECO.getTableName = function(){
	return "F56PRECO";
};




// **********************************End F56PRECO's helper methods************************