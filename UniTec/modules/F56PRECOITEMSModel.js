//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:12 CEST 2021F56PRECOITEMS*******************
// **********************************Start F56PRECOITEMS's helper methods************************
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
* Creates new F56PRECOITEMS
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS = function(){
	this.id = null;
	this.TYPE = null;
	this.ITM = null;
	this.QUANTITY = null;
	this.QUANTITYDELIVERED = null;
	this.REASON = null;
	this.Y56LIEU = null;
	this.Y56ETAG = null;
	this.Y56EMPLA = null;
	this.Y56ZONL = null;
	this.StatusFlag = null;
	this.SyncTimestamp = null;
	this.F56BTREId = null;
	this.F56PRECOId = null;
	this.CIBId = null;
	this.SUBTYPE = null;
	this.basicPrice = null;
	this.grossPrice = null;
	this.VATPercentage = null;
	this.PRICINGORIGIN = null;
	this.UPC1 = null;
	this.EUSE = null;
	this.markForUpload = true;
};

de.itgs.WorkOrders.F56PRECOITEMS.prototype = {
	get id(){
		return this._id;
	},
	set id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute id in F56PRECOITEMS.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._id = val;
	},
	get TYPE(){
		return this._TYPE;
	},
	set TYPE(val){
		this._TYPE = val;
	},
	get ITM(){
		return this._ITM;
	},
	set ITM(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ITM in F56PRECOITEMS.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ITM = val;
	},
	get QUANTITY(){
		return this._QUANTITY;
	},
	set QUANTITY(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QUANTITY in F56PRECOITEMS.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QUANTITY = val;
	},
	get QUANTITYDELIVERED(){
		return this._QUANTITYDELIVERED;
	},
	set QUANTITYDELIVERED(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QUANTITYDELIVERED in F56PRECOITEMS.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QUANTITYDELIVERED = val;
	},
	get REASON(){
		return this._REASON;
	},
	set REASON(val){
		this._REASON = val;
	},
	get Y56LIEU(){
		return this._Y56LIEU;
	},
	set Y56LIEU(val){
		this._Y56LIEU = val;
	},
	get Y56ETAG(){
		return this._Y56ETAG;
	},
	set Y56ETAG(val){
		this._Y56ETAG = val;
	},
	get Y56EMPLA(){
		return this._Y56EMPLA;
	},
	set Y56EMPLA(val){
		this._Y56EMPLA = val;
	},
	get Y56ZONL(){
		return this._Y56ZONL;
	},
	set Y56ZONL(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute Y56ZONL in F56PRECOITEMS.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._Y56ZONL = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in F56PRECOITEMS.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._StatusFlag = val;
	},
	get SyncTimestamp(){
		return this._SyncTimestamp;
	},
	set SyncTimestamp(val){
		this._SyncTimestamp = val;
	},
	get F56BTREId(){
		return this._F56BTREId;
	},
	set F56BTREId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute F56BTREId in F56PRECOITEMS.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._F56BTREId = val;
	},
	get F56PRECOId(){
		return this._F56PRECOId;
	},
	set F56PRECOId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute F56PRECOId in F56PRECOITEMS.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._F56PRECOId = val;
	},
	get CIBId(){
		return this._CIBId;
	},
	set CIBId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute CIBId in F56PRECOITEMS.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._CIBId = val;
	},
	get SUBTYPE(){
		return this._SUBTYPE;
	},
	set SUBTYPE(val){
		this._SUBTYPE = val;
	},
	get basicPrice(){
		return this._basicPrice;
	},
	set basicPrice(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute basicPrice in F56PRECOITEMS.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._basicPrice = val;
	},
	get grossPrice(){
		return this._grossPrice;
	},
	set grossPrice(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute grossPrice in F56PRECOITEMS.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._grossPrice = val;
	},
	get VATPercentage(){
		return this._VATPercentage;
	},
	set VATPercentage(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute VATPercentage in F56PRECOITEMS.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._VATPercentage = val;
	},
	get PRICINGORIGIN(){
		return this._PRICINGORIGIN;
	},
	set PRICINGORIGIN(val){
		this._PRICINGORIGIN = val;
	},
	get UPC1(){
		return this._UPC1;
	},
	set UPC1(val){
		this._UPC1 = val;
	},
	get EUSE(){
		return this._EUSE;
	},
	set EUSE(val){
		this._EUSE = val;
	},
};

/************************************************************************************
* Retrieves all instances of F56PRECOITEMS SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "id";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "TYPE";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.WorkOrders.F56PRECOITEMS.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	orderByMap = kony.sync.formOrderByClause("F56PRECOITEMS",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getAll->successcallback");
		successcallback(de.itgs.WorkOrders.F56PRECOITEMS.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of F56PRECOITEMS present in local database.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getAllCount function");
	de.itgs.WorkOrders.F56PRECOITEMS.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of F56PRECOITEMS using where clause in the local Database
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getCount->successcallback");
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
* Creates a new instance of F56PRECOITEMS in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.WorkOrders.F56PRECOITEMS.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56PRECOITEMS.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"F56PRECOITEMS",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.F56PRECOITEMS.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of F56PRECOITEMS in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].TYPE = "TYPE_0";
*		valuesArray[0].ITM = 0;
*		valuesArray[0].QUANTITY = 0;
*		valuesArray[0].QUANTITYDELIVERED = 0;
*		valuesArray[0].REASON = "REASON_0";
*		valuesArray[0].Y56LIEU = "Y56LIEU_0";
*		valuesArray[0].Y56ETAG = "Y56ETAG_0";
*		valuesArray[0].Y56EMPLA = "Y56EMPLA_0";
*		valuesArray[0].Y56ZONL = 0;
*		valuesArray[0].F56BTREId = 0;
*		valuesArray[0].F56PRECOId = 0;
*		valuesArray[0].CIBId = 0;
*		valuesArray[0].SUBTYPE = "SUBTYPE_0";
*		valuesArray[0].basicPrice = 0;
*		valuesArray[0].grossPrice = 0;
*		valuesArray[0].VATPercentage = 0;
*		valuesArray[0].PRICINGORIGIN = "PRICINGORIGIN_0";
*		valuesArray[0].UPC1 = "UPC1_0";
*		valuesArray[0].EUSE = "EUSE_0";
*		valuesArray[1] = {};
*		valuesArray[1].TYPE = "TYPE_1";
*		valuesArray[1].ITM = 1;
*		valuesArray[1].QUANTITY = 1;
*		valuesArray[1].QUANTITYDELIVERED = 1;
*		valuesArray[1].REASON = "REASON_1";
*		valuesArray[1].Y56LIEU = "Y56LIEU_1";
*		valuesArray[1].Y56ETAG = "Y56ETAG_1";
*		valuesArray[1].Y56EMPLA = "Y56EMPLA_1";
*		valuesArray[1].Y56ZONL = 1;
*		valuesArray[1].F56BTREId = 1;
*		valuesArray[1].F56PRECOId = 1;
*		valuesArray[1].CIBId = 1;
*		valuesArray[1].SUBTYPE = "SUBTYPE_1";
*		valuesArray[1].basicPrice = 1;
*		valuesArray[1].grossPrice = 1;
*		valuesArray[1].VATPercentage = 1;
*		valuesArray[1].PRICINGORIGIN = "PRICINGORIGIN_1";
*		valuesArray[1].UPC1 = "UPC1_1";
*		valuesArray[1].EUSE = "EUSE_1";
*		valuesArray[2] = {};
*		valuesArray[2].TYPE = "TYPE_2";
*		valuesArray[2].ITM = 2;
*		valuesArray[2].QUANTITY = 2;
*		valuesArray[2].QUANTITYDELIVERED = 2;
*		valuesArray[2].REASON = "REASON_2";
*		valuesArray[2].Y56LIEU = "Y56LIEU_2";
*		valuesArray[2].Y56ETAG = "Y56ETAG_2";
*		valuesArray[2].Y56EMPLA = "Y56EMPLA_2";
*		valuesArray[2].Y56ZONL = 2;
*		valuesArray[2].F56BTREId = 2;
*		valuesArray[2].F56PRECOId = 2;
*		valuesArray[2].CIBId = 2;
*		valuesArray[2].SUBTYPE = "SUBTYPE_2";
*		valuesArray[2].basicPrice = 2;
*		valuesArray[2].grossPrice = 2;
*		valuesArray[2].VATPercentage = 2;
*		valuesArray[2].PRICINGORIGIN = "PRICINGORIGIN_2";
*		valuesArray[2].UPC1 = "UPC1_2";
*		valuesArray[2].EUSE = "EUSE_2";
*		de.itgs.WorkOrders.F56PRECOITEMS.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"F56PRECOITEMS",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.WorkOrders.F56PRECOITEMS.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates F56PRECOITEMS using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.WorkOrders.F56PRECOITEMS.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56PRECOITEMS.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.WorkOrders.F56PRECOITEMS.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"F56PRECOITEMS",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.WorkOrders.F56PRECOITEMS.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates F56PRECOITEMS(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"F56PRECOITEMS",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.F56PRECOITEMS.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.F56PRECOITEMS.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.F56PRECOITEMS.getPKTable());
	}
};

/************************************************************************************
* Updates F56PRECOITEMS(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.TYPE = "TYPE_updated0";
*		inputArray[0].changeSet.ITM = 0;
*		inputArray[0].changeSet.QUANTITY = 0;
*		inputArray[0].changeSet.QUANTITYDELIVERED = 0;
*		inputArray[0].whereClause = "where id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.TYPE = "TYPE_updated1";
*		inputArray[1].changeSet.ITM = 1;
*		inputArray[1].changeSet.QUANTITY = 1;
*		inputArray[1].changeSet.QUANTITYDELIVERED = 1;
*		inputArray[1].whereClause = "where id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.TYPE = "TYPE_updated2";
*		inputArray[2].changeSet.ITM = 2;
*		inputArray[2].changeSet.QUANTITY = 2;
*		inputArray[2].changeSet.QUANTITYDELIVERED = 2;
*		inputArray[2].whereClause = "where id = 2";
*		de.itgs.WorkOrders.F56PRECOITEMS.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "F56PRECOITEMS";
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
			if(kony.sync.attributeValidation(valuestable,"F56PRECOITEMS",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.WorkOrders.F56PRECOITEMS.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.WorkOrders.F56PRECOITEMS.getPKTable());
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.WorkOrders.F56PRECOITEMS.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes F56PRECOITEMS using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECOITEMS.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56PRECOITEMS.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.WorkOrders.F56PRECOITEMS.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function F56PRECOITEMSTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.deleteByPK->F56PRECOITEMS_PKPresent successcallback");
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
	
	function F56PRECOITEMSErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECOITEMS.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function F56PRECOITEMSSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECOITEMS.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, F56PRECOITEMSTransactionCallback, F56PRECOITEMSSuccessCallback, F56PRECOITEMSErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes F56PRECOITEMS(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.WorkOrders.F56PRECOITEMS.remove("where TYPE like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function F56PRECOITEMS_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function F56PRECOITEMS_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.remove->F56PRECOITEMS_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, F56PRECOITEMS_removeTransactioncallback, F56PRECOITEMS_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes F56PRECOITEMS using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECOITEMS.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECOITEMS.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.WorkOrders.F56PRECOITEMS.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function F56PRECOITEMSTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.removeDeviceInstanceByPK -> F56PRECOITEMSTransactionCallback");
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
	
	function F56PRECOITEMSErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECOITEMS.removeDeviceInstanceByPK -> F56PRECOITEMSErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function F56PRECOITEMSSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.removeDeviceInstanceByPK -> F56PRECOITEMSSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECOITEMS.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, F56PRECOITEMSTransactionCallback, F56PRECOITEMSSuccessCallback, F56PRECOITEMSErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes F56PRECOITEMS(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function F56PRECOITEMS_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function F56PRECOITEMS_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.remove->F56PRECOITEMS_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, F56PRECOITEMS_removeTransactioncallback, F56PRECOITEMS_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves F56PRECOITEMS using primary key from the local Database. 
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECOITEMS.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECOITEMS.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.F56PRECOITEMS.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.WorkOrders.F56PRECOITEMS.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves F56PRECOITEMS(s) using where clause from the local Database. 
* e.g. de.itgs.WorkOrders.F56PRECOITEMS.find("where TYPE like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56PRECOITEMS.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of F56PRECOITEMS with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECOITEMS.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.WorkOrders.F56PRECOITEMS.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.WorkOrders.F56PRECOITEMS.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of F56PRECOITEMS matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECOITEMS.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of F56PRECOITEMS pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56PRECOITEMS.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of F56PRECOITEMS pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56PRECOITEMS.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of F56PRECOITEMS deferred for upload.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56PRECOITEMS.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to F56PRECOITEMS in local database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to F56PRECOITEMS's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECOITEMS.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECOITEMS.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.F56PRECOITEMS.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56PRECOITEMS.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether F56PRECOITEMS's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECOITEMS.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECOITEMS.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.F56PRECOITEMS.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether F56PRECOITEMS's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56PRECOITEMS.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECOITEMS.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECOITEMS.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.F56PRECOITEMS.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of F56BTRE related to F56PRECOITEMS
* with given F56BTREId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56PRECOITEMS.prototype.getF56BTREWithF56BTREId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.prototype.getF56BTREWithF56BTREId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECOITEMS.getF56BTREWithF56BTREId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECOITEMS.getF56BTREWithF56BTREId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getF56BTREWithF56BTREId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.getF56BTREWithF56BTREId",  "relationship", errorcallback)){
		return;
	}	
	function F56PRECOITEMS_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].F56BTREId;
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
	
	de.itgs.WorkOrders.F56PRECOITEMS.getAllDetailsByPK(pks, F56PRECOITEMS_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F56BTRE related to F56PRECOITEMS
* with given F56BTREId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.prototype.getCountOfF56BTREWithF56BTREId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.prototype.getCountOfF56BTREWithF56BTREId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECOITEMS.getCountOfF56BTREWithF56BTREId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECOITEMS.getCountOfF56BTREWithF56BTREId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getCountOfF56BTREWithF56BTREId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.getCountOfF56BTREWithF56BTREId",  "relationship", errorcallback)){
		return;
	}
	function F56PRECOITEMS_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].F56BTREId;
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
	
	de.itgs.WorkOrders.F56PRECOITEMS.getAllDetailsByPK(pks, F56PRECOITEMS_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of CustomerInstalledBase related to F56PRECOITEMS
* with given CIBId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56PRECOITEMS.prototype.getCustomerInstalledBaseWithCIBId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.prototype.getCustomerInstalledBaseWithCIBId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECOITEMS.getCustomerInstalledBaseWithCIBId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECOITEMS.getCustomerInstalledBaseWithCIBId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getCustomerInstalledBaseWithCIBId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.getCustomerInstalledBaseWithCIBId",  "relationship", errorcallback)){
		return;
	}	
	function F56PRECOITEMS_successcallback(res){
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
	
	de.itgs.WorkOrders.F56PRECOITEMS.getAllDetailsByPK(pks, F56PRECOITEMS_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of CustomerInstalledBase related to F56PRECOITEMS
* with given CIBId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56PRECOITEMS.prototype.getCountOfCustomerInstalledBaseWithCIBId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.prototype.getCountOfCustomerInstalledBaseWithCIBId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56PRECOITEMS.getCountOfCustomerInstalledBaseWithCIBId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56PRECOITEMS.getCountOfCustomerInstalledBaseWithCIBId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getCountOfCustomerInstalledBaseWithCIBId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56PRECOITEMS.getCountOfCustomerInstalledBaseWithCIBId",  "relationship", errorcallback)){
		return;
	}
	function F56PRECOITEMS_successcallback(res){
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
	
	de.itgs.WorkOrders.F56PRECOITEMS.getAllDetailsByPK(pks, F56PRECOITEMS_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.WorkOrders.F56PRECOITEMS.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.removeCascade function");
	var tbname = de.itgs.WorkOrders.F56PRECOITEMS.getTableName();
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


de.itgs.WorkOrders.F56PRECOITEMS.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.convertTableToObject function");
	objMap = [];
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
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.WorkOrders.F56PRECOITEMS.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.filterAttributes function");
	var attributeTable = {};
	attributeTable.id = "id";
	attributeTable.TYPE = "TYPE";
	attributeTable.ITM = "ITM";
	attributeTable.QUANTITY = "QUANTITY";
	attributeTable.QUANTITYDELIVERED = "QUANTITYDELIVERED";
	attributeTable.REASON = "REASON";
	attributeTable.Y56LIEU = "Y56LIEU";
	attributeTable.Y56ETAG = "Y56ETAG";
	attributeTable.Y56EMPLA = "Y56EMPLA";
	attributeTable.Y56ZONL = "Y56ZONL";
	attributeTable.F56BTREId = "F56BTREId";
	attributeTable.F56PRECOId = "F56PRECOId";
	attributeTable.CIBId = "CIBId";
	attributeTable.SUBTYPE = "SUBTYPE";
	attributeTable.basicPrice = "basicPrice";
	attributeTable.grossPrice = "grossPrice";
	attributeTable.VATPercentage = "VATPercentage";
	attributeTable.PRICINGORIGIN = "PRICINGORIGIN";
	attributeTable.UPC1 = "UPC1";
	attributeTable.EUSE = "EUSE";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject F56PRECOITEMS. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject F56PRECOITEMS. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject F56PRECOITEMS. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.WorkOrders.F56PRECOITEMS.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.WorkOrders.F56PRECOITEMS.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.WorkOrders.F56PRECOITEMS.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.TYPE = this.TYPE;
	valuesTable.ITM = this.ITM;
	valuesTable.QUANTITY = this.QUANTITY;
	valuesTable.QUANTITYDELIVERED = this.QUANTITYDELIVERED;
	valuesTable.REASON = this.REASON;
	valuesTable.Y56LIEU = this.Y56LIEU;
	valuesTable.Y56ETAG = this.Y56ETAG;
	valuesTable.Y56EMPLA = this.Y56EMPLA;
	valuesTable.Y56ZONL = this.Y56ZONL;
	valuesTable.F56BTREId = this.F56BTREId;
	valuesTable.F56PRECOId = this.F56PRECOId;
	valuesTable.CIBId = this.CIBId;
	valuesTable.SUBTYPE = this.SUBTYPE;
	valuesTable.basicPrice = this.basicPrice;
	valuesTable.grossPrice = this.grossPrice;
	valuesTable.VATPercentage = this.VATPercentage;
	valuesTable.PRICINGORIGIN = this.PRICINGORIGIN;
	valuesTable.UPC1 = this.UPC1;
	valuesTable.EUSE = this.EUSE;
	return valuesTable;
};

de.itgs.WorkOrders.F56PRECOITEMS.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	return pkTable;
};

de.itgs.WorkOrders.F56PRECOITEMS.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	return pkTable;
};

de.itgs.WorkOrders.F56PRECOITEMS.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key id not specified in  " + opName + "  an item in F56PRECOITEMS");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"F56PRECOITEMS")));
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
			sync.log.error("Primary Key id not specified in  " + opName + "  an item in F56PRECOITEMS");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"F56PRECOITEMS")));
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

de.itgs.WorkOrders.F56PRECOITEMS.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.validateNull function");
	return true;
};

de.itgs.WorkOrders.F56PRECOITEMS.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.validateNullInsert function");
	return true;
};

de.itgs.WorkOrders.F56PRECOITEMS.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.WorkOrders.F56PRECOITEMS.getRelationshipMap function");
	var r1 = {};
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.F56PRECOId)){
		r1.sourceAttribute.push("id");
		r1.foreignKeyAttribute.push("F56PRECOId");
		r1.targetAttributeValue.push(valuestable.F56PRECOId);
	}
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.F56PRECO===undefined){
			relationshipMap.F56PRECO = [];
		}
		relationshipMap.F56PRECO.push(r1);
	}
	

	r1={}
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];	
	r1.targetAttributeValue = [];
	
	if (!kony.sync.isNullOrUndefined(valuestable.F56BTREId)){
		r1.sourceAttribute.push("id") ;
		r1.foreignKeyAttribute.push("F56BTREId");
		r1.targetAttributeValue.push(valuestable.F56BTREId) ;
	}
		
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.F56BTRE===undefined){
			relationshipMap.F56BTRE = [];
		}
		relationshipMap.F56BTRE.push(r1);
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


de.itgs.WorkOrders.F56PRECOITEMS.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.WorkOrders.F56PRECOITEMS.getTableName = function(){
	return "F56PRECOITEMS";
};




// **********************************End F56PRECOITEMS's helper methods************************