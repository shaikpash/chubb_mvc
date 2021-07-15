//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:12 CEST 2021F56BTDT*******************
// **********************************Start F56BTDT's helper methods************************
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
* Creates new F56BTDT
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT = function(){
	this.id = null;
	this.F56BTId = null;
	this.DOCO = null;
	this.CPNB = null;
	this.N001 = null;
	this.LITM = null;
	this.KITL = null;
	this.STRX = null;
	this.CK01 = null;
	this.AA05 = null;
	this.SHAN = null;
	this.ACTYPE = null;
	this.RKCO = null;
	this.RORN = null;
	this.RCTO = null;
	this.RLLN = null;
	this.RMK = null;
	this.Y56ZONL = null;
	this.Y56LIEU = null;
	this.Y56ETAG = null;
	this.Y56EMPLA = null;
	this.HasChangedFlag = null;
	this.StatusFlag = null;
	this.SyncTimestamp = null;
	this.TMCO = null;
	this.URCD = null;
	this.SOURCE = null;
	this.SparePartsId = null;
	this.cibid = null;
	this.DeletedBy = null;
	this.markForUpload = true;
};

de.itgs.WorkOrders.F56BTDT.prototype = {
	get id(){
		return this._id;
	},
	set id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute id in F56BTDT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._id = val;
	},
	get F56BTId(){
		return this._F56BTId;
	},
	set F56BTId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute F56BTId in F56BTDT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._F56BTId = val;
	},
	get DOCO(){
		return this._DOCO;
	},
	set DOCO(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute DOCO in F56BTDT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DOCO = val;
	},
	get CPNB(){
		return this._CPNB;
	},
	set CPNB(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute CPNB in F56BTDT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._CPNB = val;
	},
	get N001(){
		return this._N001;
	},
	set N001(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute N001 in F56BTDT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._N001 = val;
	},
	get LITM(){
		return this._LITM;
	},
	set LITM(val){
		this._LITM = val;
	},
	get KITL(){
		return this._KITL;
	},
	set KITL(val){
		this._KITL = val;
	},
	get STRX(){
		return this._STRX;
	},
	set STRX(val){
		this._STRX = val;
	},
	get CK01(){
		return this._CK01;
	},
	set CK01(val){
		this._CK01 = val;
	},
	get AA05(){
		return this._AA05;
	},
	set AA05(val){
		this._AA05 = val;
	},
	get SHAN(){
		return this._SHAN;
	},
	set SHAN(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SHAN in F56BTDT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SHAN = val;
	},
	get ACTYPE(){
		return this._ACTYPE;
	},
	set ACTYPE(val){
		this._ACTYPE = val;
	},
	get RKCO(){
		return this._RKCO;
	},
	set RKCO(val){
		this._RKCO = val;
	},
	get RORN(){
		return this._RORN;
	},
	set RORN(val){
		this._RORN = val;
	},
	get RCTO(){
		return this._RCTO;
	},
	set RCTO(val){
		this._RCTO = val;
	},
	get RLLN(){
		return this._RLLN;
	},
	set RLLN(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute RLLN in F56BTDT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._RLLN = val;
	},
	get RMK(){
		return this._RMK;
	},
	set RMK(val){
		this._RMK = val;
	},
	get Y56ZONL(){
		return this._Y56ZONL;
	},
	set Y56ZONL(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute Y56ZONL in F56BTDT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._Y56ZONL = val;
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
	get HasChangedFlag(){
		return kony.sync.getBoolean(this._HasChangedFlag)+"";
	},
	set HasChangedFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute HasChangedFlag in F56BTDT.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._HasChangedFlag = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in F56BTDT.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._StatusFlag = val;
	},
	get SyncTimestamp(){
		return this._SyncTimestamp;
	},
	set SyncTimestamp(val){
		this._SyncTimestamp = val;
	},
	get TMCO(){
		return this._TMCO;
	},
	set TMCO(val){
		this._TMCO = val;
	},
	get URCD(){
		return this._URCD;
	},
	set URCD(val){
		this._URCD = val;
	},
	get SOURCE(){
		return this._SOURCE;
	},
	set SOURCE(val){
		this._SOURCE = val;
	},
	get SparePartsId(){
		return this._SparePartsId;
	},
	set SparePartsId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SparePartsId in F56BTDT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SparePartsId = val;
	},
	get cibid(){
		return this._cibid;
	},
	set cibid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute cibid in F56BTDT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._cibid = val;
	},
	get DeletedBy(){
		return this._DeletedBy;
	},
	set DeletedBy(val){
		this._DeletedBy = val;
	},
};

/************************************************************************************
* Retrieves all instances of F56BTDT SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "id";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "F56BTId";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.WorkOrders.F56BTDT.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	orderByMap = kony.sync.formOrderByClause("F56BTDT",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getAll->successcallback");
		successcallback(de.itgs.WorkOrders.F56BTDT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of F56BTDT present in local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getAllCount function");
	de.itgs.WorkOrders.F56BTDT.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of F56BTDT using where clause in the local Database
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getCount->successcallback");
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
* Creates a new instance of F56BTDT in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.WorkOrders.F56BTDT.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56BTDT.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"F56BTDT",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.F56BTDT.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of F56BTDT in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].F56BTId = 0;
*		valuesArray[0].DOCO = 0;
*		valuesArray[0].CPNB = 0;
*		valuesArray[0].N001 = 0;
*		valuesArray[0].LITM = "LITM_0";
*		valuesArray[0].KITL = "KITL_0";
*		valuesArray[0].STRX = 0;
*		valuesArray[0].CK01 = "CK01_0";
*		valuesArray[0].AA05 = "AA05_0";
*		valuesArray[0].SHAN = 0;
*		valuesArray[0].ACTYPE = "ACTYPE_0";
*		valuesArray[0].RKCO = "RKCO_0";
*		valuesArray[0].RORN = "RORN_0";
*		valuesArray[0].RCTO = "RCTO_0";
*		valuesArray[0].RLLN = 0;
*		valuesArray[0].RMK = "RMK_0";
*		valuesArray[0].Y56ZONL = 0;
*		valuesArray[0].Y56LIEU = "Y56LIEU_0";
*		valuesArray[0].Y56ETAG = "Y56ETAG_0";
*		valuesArray[0].Y56EMPLA = "Y56EMPLA_0";
*		valuesArray[0].HasChangedFlag = true;
*		valuesArray[0].TMCO = 0;
*		valuesArray[0].URCD = "URCD_0";
*		valuesArray[0].SOURCE = "SOURCE_0";
*		valuesArray[0].SparePartsId = 0;
*		valuesArray[0].cibid = 0;
*		valuesArray[0].DeletedBy = "DeletedBy_0";
*		valuesArray[1] = {};
*		valuesArray[1].F56BTId = 1;
*		valuesArray[1].DOCO = 1;
*		valuesArray[1].CPNB = 1;
*		valuesArray[1].N001 = 1;
*		valuesArray[1].LITM = "LITM_1";
*		valuesArray[1].KITL = "KITL_1";
*		valuesArray[1].STRX = 1;
*		valuesArray[1].CK01 = "CK01_1";
*		valuesArray[1].AA05 = "AA05_1";
*		valuesArray[1].SHAN = 1;
*		valuesArray[1].ACTYPE = "ACTYPE_1";
*		valuesArray[1].RKCO = "RKCO_1";
*		valuesArray[1].RORN = "RORN_1";
*		valuesArray[1].RCTO = "RCTO_1";
*		valuesArray[1].RLLN = 1;
*		valuesArray[1].RMK = "RMK_1";
*		valuesArray[1].Y56ZONL = 1;
*		valuesArray[1].Y56LIEU = "Y56LIEU_1";
*		valuesArray[1].Y56ETAG = "Y56ETAG_1";
*		valuesArray[1].Y56EMPLA = "Y56EMPLA_1";
*		valuesArray[1].HasChangedFlag = true;
*		valuesArray[1].TMCO = 1;
*		valuesArray[1].URCD = "URCD_1";
*		valuesArray[1].SOURCE = "SOURCE_1";
*		valuesArray[1].SparePartsId = 1;
*		valuesArray[1].cibid = 1;
*		valuesArray[1].DeletedBy = "DeletedBy_1";
*		valuesArray[2] = {};
*		valuesArray[2].F56BTId = 2;
*		valuesArray[2].DOCO = 2;
*		valuesArray[2].CPNB = 2;
*		valuesArray[2].N001 = 2;
*		valuesArray[2].LITM = "LITM_2";
*		valuesArray[2].KITL = "KITL_2";
*		valuesArray[2].STRX = 2;
*		valuesArray[2].CK01 = "CK01_2";
*		valuesArray[2].AA05 = "AA05_2";
*		valuesArray[2].SHAN = 2;
*		valuesArray[2].ACTYPE = "ACTYPE_2";
*		valuesArray[2].RKCO = "RKCO_2";
*		valuesArray[2].RORN = "RORN_2";
*		valuesArray[2].RCTO = "RCTO_2";
*		valuesArray[2].RLLN = 2;
*		valuesArray[2].RMK = "RMK_2";
*		valuesArray[2].Y56ZONL = 2;
*		valuesArray[2].Y56LIEU = "Y56LIEU_2";
*		valuesArray[2].Y56ETAG = "Y56ETAG_2";
*		valuesArray[2].Y56EMPLA = "Y56EMPLA_2";
*		valuesArray[2].HasChangedFlag = true;
*		valuesArray[2].TMCO = 2;
*		valuesArray[2].URCD = "URCD_2";
*		valuesArray[2].SOURCE = "SOURCE_2";
*		valuesArray[2].SparePartsId = 2;
*		valuesArray[2].cibid = 2;
*		valuesArray[2].DeletedBy = "DeletedBy_2";
*		de.itgs.WorkOrders.F56BTDT.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"F56BTDT",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.WorkOrders.F56BTDT.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates F56BTDT using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.WorkOrders.F56BTDT.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56BTDT.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.WorkOrders.F56BTDT.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"F56BTDT",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.WorkOrders.F56BTDT.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates F56BTDT(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"F56BTDT",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.F56BTDT.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.F56BTDT.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.F56BTDT.getPKTable());
	}
};

/************************************************************************************
* Updates F56BTDT(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.F56BTId = 0;
*		inputArray[0].changeSet.DOCO = 0;
*		inputArray[0].changeSet.CPNB = 0;
*		inputArray[0].changeSet.N001 = 0;
*		inputArray[0].whereClause = "where id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.F56BTId = 1;
*		inputArray[1].changeSet.DOCO = 1;
*		inputArray[1].changeSet.CPNB = 1;
*		inputArray[1].changeSet.N001 = 1;
*		inputArray[1].whereClause = "where id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.F56BTId = 2;
*		inputArray[2].changeSet.DOCO = 2;
*		inputArray[2].changeSet.CPNB = 2;
*		inputArray[2].changeSet.N001 = 2;
*		inputArray[2].whereClause = "where id = 2";
*		de.itgs.WorkOrders.F56BTDT.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "F56BTDT";
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
			if(kony.sync.attributeValidation(valuestable,"F56BTDT",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.WorkOrders.F56BTDT.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.WorkOrders.F56BTDT.getPKTable());
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.WorkOrders.F56BTDT.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes F56BTDT using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56BTDT.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.WorkOrders.F56BTDT.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function F56BTDTTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.deleteByPK->F56BTDT_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTDTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.SpareParts.removeCascade,"SpareParts",false, errorcallback, markForUpload, record, false)){
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
	
	function F56BTDTErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BTDT.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function F56BTDTSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BTDT.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, F56BTDTTransactionCallback, F56BTDTSuccessCallback, F56BTDTErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes F56BTDT(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.WorkOrders.F56BTDT.remove("where LITM like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function F56BTDT_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTDTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SpareParts.removeCascade, "SpareParts", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function F56BTDT_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.remove->F56BTDT_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, F56BTDT_removeTransactioncallback, F56BTDT_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes F56BTDT using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BTDT.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.WorkOrders.F56BTDT.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function F56BTDTTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.removeDeviceInstanceByPK -> F56BTDTTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTDTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.SpareParts.removeCascade,"SpareParts",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function F56BTDTErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BTDT.removeDeviceInstanceByPK -> F56BTDTErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function F56BTDTSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.removeDeviceInstanceByPK -> F56BTDTSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BTDT.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, F56BTDTTransactionCallback, F56BTDTSuccessCallback, F56BTDTErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes F56BTDT(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function F56BTDT_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTDTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SpareParts.removeCascade, "SpareParts", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function F56BTDT_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.remove->F56BTDT_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, F56BTDT_removeTransactioncallback, F56BTDT_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves F56BTDT using primary key from the local Database. 
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BTDT.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.F56BTDT.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.WorkOrders.F56BTDT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves F56BTDT(s) using where clause from the local Database. 
* e.g. de.itgs.WorkOrders.F56BTDT.find("where LITM like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56BTDT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of F56BTDT with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.WorkOrders.F56BTDT.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.WorkOrders.F56BTDT.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of F56BTDT matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BTDT.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of F56BTDT pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56BTDT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of F56BTDT pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56BTDT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of F56BTDT deferred for upload.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56BTDT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to F56BTDT in local database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to F56BTDT's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BTDT.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.F56BTDT.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BTDT.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether F56BTDT's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BTDT.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.F56BTDT.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether F56BTDT's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BTDT.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BTDT.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.F56BTDT.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of SpareParts related to F56BTDT
* with given F56BTDTId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BTDT.prototype.getSparePartsWithF56BTDTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.getSparePartsWithF56BTDTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.getSparePartsWithF56BTDTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BTDT.getSparePartsWithF56BTDTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getSparePartsWithF56BTDTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.getSparePartsWithF56BTDTId",  "relationship", errorcallback)){
		return;
	}	
	function F56BTDT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"F56BTDTId", value:targetKey});
			

			var tbname = "SpareParts"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.SpareParts.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.SpareParts();
				obj.id = res[i].id;
				obj.F56BTId = res[i].F56BTId;
				obj.F56BTDTId = res[i].F56BTDTId;
				obj.F56BTCOId = res[i].F56BTCOId;
				obj.UsualCodeLITM = res[i].UsualCodeLITM;
				obj.EstimatedQtyUORG = res[i].EstimatedQtyUORG;
				obj.UnitOfMeasureUM = res[i].UnitOfMeasureUM;
				obj.WareHouseMCU = res[i].WareHouseMCU;
				obj.UnitPriceESUNB = res[i].UnitPriceESUNB;
				obj.PriceEBILL = res[i].PriceEBILL;
				obj.RealQtyTRQT = res[i].RealQtyTRQT;
				obj.TarificationMethodMTHPR = res[i].TarificationMethodMTHPR;
				obj.IsBillableBILL = res[i].IsBillableBILL;
				obj.VendorVEND = res[i].VendorVEND;
				obj.RKCO = res[i].RKCO;
				obj.RORN = res[i].RORN;
				obj.RCTO = res[i].RCTO;
				obj.RLLN = res[i].RLLN;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.SalesReasonAA05 = res[i].SalesReasonAA05;
				obj.CIBId = res[i].CIBId;
				obj.EUSE = res[i].EUSE;
				obj.PRICINGORIGIN = res[i].PRICINGORIGIN;
				obj.DiscountTRDC = res[i].DiscountTRDC;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BTDT.getAllDetailsByPK(pks, F56BTDT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of SpareParts related to F56BTDT
* with given F56BTDTId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.getCountOfSparePartsWithF56BTDTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.getCountOfSparePartsWithF56BTDTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.getCountOfSparePartsWithF56BTDTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BTDT.getCountOfSparePartsWithF56BTDTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getCountOfSparePartsWithF56BTDTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.getCountOfSparePartsWithF56BTDTId",  "relationship", errorcallback)){
		return;
	}
	function F56BTDT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(F56BTDTId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"F56BTDTId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"F56BTDTId", value:targetKey});
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
		   de.itgs.WorkOrders.SpareParts.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BTDT.getAllDetailsByPK(pks, F56BTDT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of SpareParts related to F56BTDT
* with given SparePartsId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BTDT.prototype.getSparePartsWithSparePartsId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.getSparePartsWithSparePartsId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.getSparePartsWithSparePartsId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BTDT.getSparePartsWithSparePartsId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getSparePartsWithSparePartsId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.getSparePartsWithSparePartsId",  "relationship", errorcallback)){
		return;
	}	
	function F56BTDT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].SparePartsId;
			wcs.push({key:"id", value:targetKey});
			

			var tbname = "SpareParts"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.SpareParts.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.SpareParts();
				obj.id = res[i].id;
				obj.F56BTId = res[i].F56BTId;
				obj.F56BTDTId = res[i].F56BTDTId;
				obj.F56BTCOId = res[i].F56BTCOId;
				obj.UsualCodeLITM = res[i].UsualCodeLITM;
				obj.EstimatedQtyUORG = res[i].EstimatedQtyUORG;
				obj.UnitOfMeasureUM = res[i].UnitOfMeasureUM;
				obj.WareHouseMCU = res[i].WareHouseMCU;
				obj.UnitPriceESUNB = res[i].UnitPriceESUNB;
				obj.PriceEBILL = res[i].PriceEBILL;
				obj.RealQtyTRQT = res[i].RealQtyTRQT;
				obj.TarificationMethodMTHPR = res[i].TarificationMethodMTHPR;
				obj.IsBillableBILL = res[i].IsBillableBILL;
				obj.VendorVEND = res[i].VendorVEND;
				obj.RKCO = res[i].RKCO;
				obj.RORN = res[i].RORN;
				obj.RCTO = res[i].RCTO;
				obj.RLLN = res[i].RLLN;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.SalesReasonAA05 = res[i].SalesReasonAA05;
				obj.CIBId = res[i].CIBId;
				obj.EUSE = res[i].EUSE;
				obj.PRICINGORIGIN = res[i].PRICINGORIGIN;
				obj.DiscountTRDC = res[i].DiscountTRDC;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BTDT.getAllDetailsByPK(pks, F56BTDT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of SpareParts related to F56BTDT
* with given SparePartsId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.getCountOfSparePartsWithSparePartsId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.getCountOfSparePartsWithSparePartsId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.getCountOfSparePartsWithSparePartsId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BTDT.getCountOfSparePartsWithSparePartsId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getCountOfSparePartsWithSparePartsId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.getCountOfSparePartsWithSparePartsId",  "relationship", errorcallback)){
		return;
	}
	function F56BTDT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].SparePartsId;
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
		   de.itgs.WorkOrders.SpareParts.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BTDT.getAllDetailsByPK(pks, F56BTDT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of CustomerInstalledBase related to F56BTDT
* with given cibid from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BTDT.prototype.getCustomerInstalledBaseWithcibid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.getCustomerInstalledBaseWithcibid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.getCustomerInstalledBaseWithcibid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BTDT.getCustomerInstalledBaseWithcibid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getCustomerInstalledBaseWithcibid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.getCustomerInstalledBaseWithcibid",  "relationship", errorcallback)){
		return;
	}	
	function F56BTDT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].cibid;
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
	
	de.itgs.WorkOrders.F56BTDT.getAllDetailsByPK(pks, F56BTDT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of CustomerInstalledBase related to F56BTDT
* with given cibid from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BTDT.prototype.getCountOfCustomerInstalledBaseWithcibid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.getCountOfCustomerInstalledBaseWithcibid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BTDT.getCountOfCustomerInstalledBaseWithcibid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BTDT.getCountOfCustomerInstalledBaseWithcibid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getCountOfCustomerInstalledBaseWithcibid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BTDT.getCountOfCustomerInstalledBaseWithcibid",  "relationship", errorcallback)){
		return;
	}
	function F56BTDT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].cibid;
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
	
	de.itgs.WorkOrders.F56BTDT.getAllDetailsByPK(pks, F56BTDT_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.WorkOrders.F56BTDT.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.removeCascade function");
	var tbname = de.itgs.WorkOrders.F56BTDT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTDTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SpareParts.removeCascade, "SpareParts", false, errorcallback, markForUpload, null, isLocal)){
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


de.itgs.WorkOrders.F56BTDT.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new de.itgs.WorkOrders.F56BTDT();
			obj.id = res[i].id;
			obj.F56BTId = res[i].F56BTId;
			obj.DOCO = res[i].DOCO;
			obj.CPNB = res[i].CPNB;
			obj.N001 = res[i].N001;
			obj.LITM = res[i].LITM;
			obj.KITL = res[i].KITL;
			obj.STRX = res[i].STRX;
			obj.CK01 = res[i].CK01;
			obj.AA05 = res[i].AA05;
			obj.SHAN = res[i].SHAN;
			obj.ACTYPE = res[i].ACTYPE;
			obj.RKCO = res[i].RKCO;
			obj.RORN = res[i].RORN;
			obj.RCTO = res[i].RCTO;
			obj.RLLN = res[i].RLLN;
			obj.RMK = res[i].RMK;
			obj.Y56ZONL = res[i].Y56ZONL;
			obj.Y56LIEU = res[i].Y56LIEU;
			obj.Y56ETAG = res[i].Y56ETAG;
			obj.Y56EMPLA = res[i].Y56EMPLA;
			obj.HasChangedFlag = res[i].HasChangedFlag;
			obj.StatusFlag = res[i].StatusFlag;
			obj.SyncTimestamp = res[i].SyncTimestamp;
			obj.TMCO = res[i].TMCO;
			obj.URCD = res[i].URCD;
			obj.SOURCE = res[i].SOURCE;
			obj.SparePartsId = res[i].SparePartsId;
			obj.cibid = res[i].cibid;
			obj.DeletedBy = res[i].DeletedBy;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.WorkOrders.F56BTDT.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.filterAttributes function");
	var attributeTable = {};
	attributeTable.id = "id";
	attributeTable.F56BTId = "F56BTId";
	attributeTable.DOCO = "DOCO";
	attributeTable.CPNB = "CPNB";
	attributeTable.N001 = "N001";
	attributeTable.LITM = "LITM";
	attributeTable.KITL = "KITL";
	attributeTable.STRX = "STRX";
	attributeTable.CK01 = "CK01";
	attributeTable.AA05 = "AA05";
	attributeTable.SHAN = "SHAN";
	attributeTable.ACTYPE = "ACTYPE";
	attributeTable.RKCO = "RKCO";
	attributeTable.RORN = "RORN";
	attributeTable.RCTO = "RCTO";
	attributeTable.RLLN = "RLLN";
	attributeTable.RMK = "RMK";
	attributeTable.Y56ZONL = "Y56ZONL";
	attributeTable.Y56LIEU = "Y56LIEU";
	attributeTable.Y56ETAG = "Y56ETAG";
	attributeTable.Y56EMPLA = "Y56EMPLA";
	attributeTable.HasChangedFlag = "HasChangedFlag";
	attributeTable.TMCO = "TMCO";
	attributeTable.URCD = "URCD";
	attributeTable.SOURCE = "SOURCE";
	attributeTable.SparePartsId = "SparePartsId";
	attributeTable.cibid = "cibid";
	attributeTable.DeletedBy = "DeletedBy";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject F56BTDT. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject F56BTDT. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject F56BTDT. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.WorkOrders.F56BTDT.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.WorkOrders.F56BTDT.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.WorkOrders.F56BTDT.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.F56BTId = this.F56BTId;
	valuesTable.DOCO = this.DOCO;
	valuesTable.CPNB = this.CPNB;
	valuesTable.N001 = this.N001;
	valuesTable.LITM = this.LITM;
	valuesTable.KITL = this.KITL;
	valuesTable.STRX = this.STRX;
	valuesTable.CK01 = this.CK01;
	valuesTable.AA05 = this.AA05;
	valuesTable.SHAN = this.SHAN;
	valuesTable.ACTYPE = this.ACTYPE;
	valuesTable.RKCO = this.RKCO;
	valuesTable.RORN = this.RORN;
	valuesTable.RCTO = this.RCTO;
	valuesTable.RLLN = this.RLLN;
	valuesTable.RMK = this.RMK;
	valuesTable.Y56ZONL = this.Y56ZONL;
	valuesTable.Y56LIEU = this.Y56LIEU;
	valuesTable.Y56ETAG = this.Y56ETAG;
	valuesTable.Y56EMPLA = this.Y56EMPLA;
	valuesTable.HasChangedFlag = this.HasChangedFlag;
	valuesTable.TMCO = this.TMCO;
	valuesTable.URCD = this.URCD;
	valuesTable.SOURCE = this.SOURCE;
	valuesTable.SparePartsId = this.SparePartsId;
	valuesTable.cibid = this.cibid;
	valuesTable.DeletedBy = this.DeletedBy;
	return valuesTable;
};

de.itgs.WorkOrders.F56BTDT.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	return pkTable;
};

de.itgs.WorkOrders.F56BTDT.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	return pkTable;
};

de.itgs.WorkOrders.F56BTDT.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key id not specified in  " + opName + "  an item in F56BTDT");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"F56BTDT")));
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
			sync.log.error("Primary Key id not specified in  " + opName + "  an item in F56BTDT");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"F56BTDT")));
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

de.itgs.WorkOrders.F56BTDT.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.validateNull function");
	if(valuestable.HasChangedFlag!==undefined){
		if(kony.sync.isNull(valuestable.HasChangedFlag) || kony.sync.isEmptyString(valuestable.HasChangedFlag)){
			sync.log.error("Mandatory attribute HasChangedFlag is missing for the SyncObject F56BTDT.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "F56BTDT", "HasChangedFlag")));
			return false;
		}
	}
	return true;
};

de.itgs.WorkOrders.F56BTDT.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.validateNullInsert function");
	if(kony.sync.isNull(valuestable.HasChangedFlag) || kony.sync.isEmptyString(valuestable.HasChangedFlag)){
		sync.log.error("Mandatory attribute HasChangedFlag is missing for the SyncObject F56BTDT.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "F56BTDT", "HasChangedFlag")));
		return false;
	}
	return true;
};

de.itgs.WorkOrders.F56BTDT.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BTDT.getRelationshipMap function");
	var r1 = {};
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.F56BTId)){
		r1.sourceAttribute.push("id");
		r1.foreignKeyAttribute.push("F56BTId");
		r1.targetAttributeValue.push(valuestable.F56BTId);
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
	
	if (!kony.sync.isNullOrUndefined(valuestable.SparePartsId)){
		r1.sourceAttribute.push("id") ;
		r1.foreignKeyAttribute.push("SparePartsId");
		r1.targetAttributeValue.push(valuestable.SparePartsId) ;
	}
		
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.SpareParts===undefined){
			relationshipMap.SpareParts = [];
		}
		relationshipMap.SpareParts.push(r1);
	}
		
	r1={}
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];	
	r1.targetAttributeValue = [];
	
	if (!kony.sync.isNullOrUndefined(valuestable.cibid)){
		r1.sourceAttribute.push("id") ;
		r1.foreignKeyAttribute.push("cibid");
		r1.targetAttributeValue.push(valuestable.cibid) ;
	}
		
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.CustomerInstalledBase===undefined){
			relationshipMap.CustomerInstalledBase = [];
		}
		relationshipMap.CustomerInstalledBase.push(r1);
	}
		
	return relationshipMap;
};


de.itgs.WorkOrders.F56BTDT.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.WorkOrders.F56BTDT.getTableName = function(){
	return "F56BTDT";
};




// **********************************End F56BTDT's helper methods************************