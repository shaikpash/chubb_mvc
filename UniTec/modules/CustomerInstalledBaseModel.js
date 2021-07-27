//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:12 CEST 2021CustomerInstalledBase*******************
// **********************************Start CustomerInstalledBase's helper methods************************
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
* Creates new CustomerInstalledBase
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase = function(){
	this.id = null;
	this.NUMB = null;
	this.N001 = null;
	this.LOTN = null;
	this.LANO = null;
	this.ZE01 = null;
	this.ZE02 = null;
	this.ZE03 = null;
	this.ACL7 = null;
	this.ITM = null;
	this.KIT = null;
	this.DOCO = null;
	this.COCH = null;
	this.DCTO = null;
	this.KCOO = null;
	this.Y56INDLA = null;
	this.QTY = null;
	this.FBDUMSDJ = null;
	this.SVDB = null;
	this.Y56DATEP = null;
	this.U74SCDV = null;
	this.Y56LIEU = null;
	this.Y56ETAG = null;
	this.Y56ZONL = null;
	this.Y56EMPLA = null;
	this.HasChangedFlag = null;
	this.StatusFlag = null;
	this.SyncTimestamp = null;
	this.etat = null;
	this.etatcibCId = null;
	this.LNID = null;
	this.UNItecStatus = null;
	this.Y56ATYPE = null;
	this.Y56QTY = null;
	this.markForUpload = true;
};

de.itgs.WorkOrders.CustomerInstalledBase.prototype = {
	get id(){
		return this._id;
	},
	set id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute id in CustomerInstalledBase.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._id = val;
	},
	get NUMB(){
		return this._NUMB;
	},
	set NUMB(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute NUMB in CustomerInstalledBase.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._NUMB = val;
	},
	get N001(){
		return this._N001;
	},
	set N001(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute N001 in CustomerInstalledBase.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._N001 = val;
	},
	get LOTN(){
		return this._LOTN;
	},
	set LOTN(val){
		this._LOTN = val;
	},
	get LANO(){
		return this._LANO;
	},
	set LANO(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute LANO in CustomerInstalledBase.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._LANO = val;
	},
	get ZE01(){
		return this._ZE01;
	},
	set ZE01(val){
		this._ZE01 = val;
	},
	get ZE02(){
		return this._ZE02;
	},
	set ZE02(val){
		this._ZE02 = val;
	},
	get ZE03(){
		return this._ZE03;
	},
	set ZE03(val){
		this._ZE03 = val;
	},
	get ACL7(){
		return this._ACL7;
	},
	set ACL7(val){
		this._ACL7 = val;
	},
	get ITM(){
		return this._ITM;
	},
	set ITM(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ITM in CustomerInstalledBase.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ITM = val;
	},
	get KIT(){
		return this._KIT;
	},
	set KIT(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute KIT in CustomerInstalledBase.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._KIT = val;
	},
	get DOCO(){
		return this._DOCO;
	},
	set DOCO(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute DOCO in CustomerInstalledBase.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DOCO = val;
	},
	get COCH(){
		return this._COCH;
	},
	set COCH(val){
		this._COCH = val;
	},
	get DCTO(){
		return this._DCTO;
	},
	set DCTO(val){
		this._DCTO = val;
	},
	get KCOO(){
		return this._KCOO;
	},
	set KCOO(val){
		this._KCOO = val;
	},
	get Y56INDLA(){
		return this._Y56INDLA;
	},
	set Y56INDLA(val){
		this._Y56INDLA = val;
	},
	get QTY(){
		return this._QTY;
	},
	set QTY(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QTY in CustomerInstalledBase.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QTY = val;
	},
	get FBDUMSDJ(){
		return this._FBDUMSDJ;
	},
	set FBDUMSDJ(val){
		this._FBDUMSDJ = val;
	},
	get SVDB(){
		return this._SVDB;
	},
	set SVDB(val){
		this._SVDB = val;
	},
	get Y56DATEP(){
		return this._Y56DATEP;
	},
	set Y56DATEP(val){
		this._Y56DATEP = val;
	},
	get U74SCDV(){
		return this._U74SCDV;
	},
	set U74SCDV(val){
		this._U74SCDV = val;
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
	get Y56ZONL(){
		return this._Y56ZONL;
	},
	set Y56ZONL(val){
		this._Y56ZONL = val;
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
			sync.log.error("Invalid data type for the attribute HasChangedFlag in CustomerInstalledBase.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._HasChangedFlag = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in CustomerInstalledBase.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._StatusFlag = val;
	},
	get SyncTimestamp(){
		return this._SyncTimestamp;
	},
	set SyncTimestamp(val){
		this._SyncTimestamp = val;
	},
	get etat(){
		return this._etat;
	},
	set etat(val){
		this._etat = val;
	},
	get etatcibCId(){
		return this._etatcibCId;
	},
	set etatcibCId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute etatcibCId in CustomerInstalledBase.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._etatcibCId = val;
	},
	get LNID(){
		return this._LNID;
	},
	set LNID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute LNID in CustomerInstalledBase.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._LNID = val;
	},
	get UNItecStatus(){
		return this._UNItecStatus;
	},
	set UNItecStatus(val){
		this._UNItecStatus = val;
	},
	get Y56ATYPE(){
		return this._Y56ATYPE;
	},
	set Y56ATYPE(val){
		this._Y56ATYPE = val;
	},
	get Y56QTY(){
		return this._Y56QTY;
	},
	set Y56QTY(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute Y56QTY in CustomerInstalledBase.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._Y56QTY = val;
	},
};

/************************************************************************************
* Retrieves all instances of CustomerInstalledBase SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "id";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "NUMB";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.WorkOrders.CustomerInstalledBase.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	orderByMap = kony.sync.formOrderByClause("CustomerInstalledBase",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getAll->successcallback");
		successcallback(de.itgs.WorkOrders.CustomerInstalledBase.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of CustomerInstalledBase present in local database.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getAllCount function");
	de.itgs.WorkOrders.CustomerInstalledBase.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of CustomerInstalledBase using where clause in the local Database
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getCount->successcallback");
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
* Creates a new instance of CustomerInstalledBase in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.WorkOrders.CustomerInstalledBase.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.CustomerInstalledBase.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"CustomerInstalledBase",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.CustomerInstalledBase.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of CustomerInstalledBase in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].NUMB = 0;
*		valuesArray[0].N001 = 0;
*		valuesArray[0].LOTN = "LOTN_0";
*		valuesArray[0].LANO = 0;
*		valuesArray[0].ZE01 = "ZE01_0";
*		valuesArray[0].ZE02 = "ZE02_0";
*		valuesArray[0].ZE03 = "ZE03_0";
*		valuesArray[0].ACL7 = "ACL7_0";
*		valuesArray[0].ITM = 0;
*		valuesArray[0].KIT = 0;
*		valuesArray[0].DOCO = 0;
*		valuesArray[0].COCH = "COCH_0";
*		valuesArray[0].DCTO = "DCTO_0";
*		valuesArray[0].KCOO = "KCOO_0";
*		valuesArray[0].Y56INDLA = "Y56INDLA_0";
*		valuesArray[0].QTY = 0;
*		valuesArray[0].FBDUMSDJ = 0;
*		valuesArray[0].SVDB = 0;
*		valuesArray[0].Y56DATEP = 0;
*		valuesArray[0].U74SCDV = 0;
*		valuesArray[0].Y56LIEU = "Y56LIEU_0";
*		valuesArray[0].Y56ETAG = "Y56ETAG_0";
*		valuesArray[0].Y56ZONL = "Y56ZONL_0";
*		valuesArray[0].Y56EMPLA = "Y56EMPLA_0";
*		valuesArray[0].HasChangedFlag = true;
*		valuesArray[0].etat = "etat_0";
*		valuesArray[0].etatcibCId = 0;
*		valuesArray[0].LNID = 0;
*		valuesArray[0].UNItecStatus = "UNItecStatus_0";
*		valuesArray[0].Y56ATYPE = "Y56ATYPE_0";
*		valuesArray[0].Y56QTY = 0;
*		valuesArray[1] = {};
*		valuesArray[1].NUMB = 1;
*		valuesArray[1].N001 = 1;
*		valuesArray[1].LOTN = "LOTN_1";
*		valuesArray[1].LANO = 1;
*		valuesArray[1].ZE01 = "ZE01_1";
*		valuesArray[1].ZE02 = "ZE02_1";
*		valuesArray[1].ZE03 = "ZE03_1";
*		valuesArray[1].ACL7 = "ACL7_1";
*		valuesArray[1].ITM = 1;
*		valuesArray[1].KIT = 1;
*		valuesArray[1].DOCO = 1;
*		valuesArray[1].COCH = "COCH_1";
*		valuesArray[1].DCTO = "DCTO_1";
*		valuesArray[1].KCOO = "KCOO_1";
*		valuesArray[1].Y56INDLA = "Y56INDLA_1";
*		valuesArray[1].QTY = 1;
*		valuesArray[1].FBDUMSDJ = 1;
*		valuesArray[1].SVDB = 1;
*		valuesArray[1].Y56DATEP = 1;
*		valuesArray[1].U74SCDV = 1;
*		valuesArray[1].Y56LIEU = "Y56LIEU_1";
*		valuesArray[1].Y56ETAG = "Y56ETAG_1";
*		valuesArray[1].Y56ZONL = "Y56ZONL_1";
*		valuesArray[1].Y56EMPLA = "Y56EMPLA_1";
*		valuesArray[1].HasChangedFlag = true;
*		valuesArray[1].etat = "etat_1";
*		valuesArray[1].etatcibCId = 1;
*		valuesArray[1].LNID = 1;
*		valuesArray[1].UNItecStatus = "UNItecStatus_1";
*		valuesArray[1].Y56ATYPE = "Y56ATYPE_1";
*		valuesArray[1].Y56QTY = 1;
*		valuesArray[2] = {};
*		valuesArray[2].NUMB = 2;
*		valuesArray[2].N001 = 2;
*		valuesArray[2].LOTN = "LOTN_2";
*		valuesArray[2].LANO = 2;
*		valuesArray[2].ZE01 = "ZE01_2";
*		valuesArray[2].ZE02 = "ZE02_2";
*		valuesArray[2].ZE03 = "ZE03_2";
*		valuesArray[2].ACL7 = "ACL7_2";
*		valuesArray[2].ITM = 2;
*		valuesArray[2].KIT = 2;
*		valuesArray[2].DOCO = 2;
*		valuesArray[2].COCH = "COCH_2";
*		valuesArray[2].DCTO = "DCTO_2";
*		valuesArray[2].KCOO = "KCOO_2";
*		valuesArray[2].Y56INDLA = "Y56INDLA_2";
*		valuesArray[2].QTY = 2;
*		valuesArray[2].FBDUMSDJ = 2;
*		valuesArray[2].SVDB = 2;
*		valuesArray[2].Y56DATEP = 2;
*		valuesArray[2].U74SCDV = 2;
*		valuesArray[2].Y56LIEU = "Y56LIEU_2";
*		valuesArray[2].Y56ETAG = "Y56ETAG_2";
*		valuesArray[2].Y56ZONL = "Y56ZONL_2";
*		valuesArray[2].Y56EMPLA = "Y56EMPLA_2";
*		valuesArray[2].HasChangedFlag = true;
*		valuesArray[2].etat = "etat_2";
*		valuesArray[2].etatcibCId = 2;
*		valuesArray[2].LNID = 2;
*		valuesArray[2].UNItecStatus = "UNItecStatus_2";
*		valuesArray[2].Y56ATYPE = "Y56ATYPE_2";
*		valuesArray[2].Y56QTY = 2;
*		de.itgs.WorkOrders.CustomerInstalledBase.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"CustomerInstalledBase",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.WorkOrders.CustomerInstalledBase.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates CustomerInstalledBase using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.WorkOrders.CustomerInstalledBase.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.CustomerInstalledBase.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.WorkOrders.CustomerInstalledBase.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"CustomerInstalledBase",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.WorkOrders.CustomerInstalledBase.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates CustomerInstalledBase(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"CustomerInstalledBase",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.CustomerInstalledBase.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.CustomerInstalledBase.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.CustomerInstalledBase.getPKTable());
	}
};

/************************************************************************************
* Updates CustomerInstalledBase(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.NUMB = 0;
*		inputArray[0].changeSet.N001 = 0;
*		inputArray[0].changeSet.LOTN = "LOTN_updated0";
*		inputArray[0].changeSet.LANO = 0;
*		inputArray[0].whereClause = "where id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.NUMB = 1;
*		inputArray[1].changeSet.N001 = 1;
*		inputArray[1].changeSet.LOTN = "LOTN_updated1";
*		inputArray[1].changeSet.LANO = 1;
*		inputArray[1].whereClause = "where id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.NUMB = 2;
*		inputArray[2].changeSet.N001 = 2;
*		inputArray[2].changeSet.LOTN = "LOTN_updated2";
*		inputArray[2].changeSet.LANO = 2;
*		inputArray[2].whereClause = "where id = 2";
*		de.itgs.WorkOrders.CustomerInstalledBase.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "CustomerInstalledBase";
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
			if(kony.sync.attributeValidation(valuestable,"CustomerInstalledBase",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.WorkOrders.CustomerInstalledBase.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.WorkOrders.CustomerInstalledBase.getPKTable());
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
		sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.WorkOrders.CustomerInstalledBase.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes CustomerInstalledBase using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.CustomerInstalledBase.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.WorkOrders.CustomerInstalledBase.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function CustomerInstalledBaseTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.deleteByPK->CustomerInstalledBase_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F561207.removeCascade,"F561207",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.removeCascade,"CustomerInstalledBaseCharacteristic",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CIBId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.SpareParts.removeCascade,"SpareParts",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
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
	
	function CustomerInstalledBaseErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.CustomerInstalledBase.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function CustomerInstalledBaseSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.CustomerInstalledBase.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, CustomerInstalledBaseTransactionCallback, CustomerInstalledBaseSuccessCallback, CustomerInstalledBaseErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes CustomerInstalledBase(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.WorkOrders.CustomerInstalledBase.remove("where LOTN like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function CustomerInstalledBase_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F561207.removeCascade, "F561207", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.removeCascade, "CustomerInstalledBaseCharacteristic", true, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CIBId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SpareParts.removeCascade, "SpareParts", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
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
	function CustomerInstalledBase_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.remove->CustomerInstalledBase_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, CustomerInstalledBase_removeTransactioncallback, CustomerInstalledBase_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes CustomerInstalledBase using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.WorkOrders.CustomerInstalledBase.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function CustomerInstalledBaseTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.removeDeviceInstanceByPK -> CustomerInstalledBaseTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F561207.removeCascade,"F561207",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.removeCascade,"CustomerInstalledBaseCharacteristic",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CIBId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.SpareParts.removeCascade,"SpareParts",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.btphotos.removeCascade,"btphotos",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function CustomerInstalledBaseErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.CustomerInstalledBase.removeDeviceInstanceByPK -> CustomerInstalledBaseErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function CustomerInstalledBaseSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.removeDeviceInstanceByPK -> CustomerInstalledBaseSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.CustomerInstalledBase.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, CustomerInstalledBaseTransactionCallback, CustomerInstalledBaseSuccessCallback, CustomerInstalledBaseErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes CustomerInstalledBase(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function CustomerInstalledBase_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F561207.removeCascade, "F561207", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.removeCascade, "CustomerInstalledBaseCharacteristic", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CIBId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SpareParts.removeCascade, "SpareParts", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
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
	function CustomerInstalledBase_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.remove->CustomerInstalledBase_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, CustomerInstalledBase_removeTransactioncallback, CustomerInstalledBase_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves CustomerInstalledBase using primary key from the local Database. 
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.CustomerInstalledBase.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.WorkOrders.CustomerInstalledBase.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves CustomerInstalledBase(s) using where clause from the local Database. 
* e.g. de.itgs.WorkOrders.CustomerInstalledBase.find("where LOTN like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.CustomerInstalledBase.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of CustomerInstalledBase with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.WorkOrders.CustomerInstalledBase.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of CustomerInstalledBase matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.WorkOrders.CustomerInstalledBase.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of CustomerInstalledBase pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.CustomerInstalledBase.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of CustomerInstalledBase pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.CustomerInstalledBase.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of CustomerInstalledBase deferred for upload.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.CustomerInstalledBase.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to CustomerInstalledBase in local database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to CustomerInstalledBase's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.CustomerInstalledBase.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.CustomerInstalledBase.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether CustomerInstalledBase's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.CustomerInstalledBase.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether CustomerInstalledBase's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.CustomerInstalledBase.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.CustomerInstalledBase.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of F561207 related to CustomerInstalledBase
* with given cibid from local database.
*************************************************************************************/


de.itgs.WorkOrders.CustomerInstalledBase.prototype.getF561207Withcibid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getF561207Withcibid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.getF561207Withcibid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.getF561207Withcibid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getF561207Withcibid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getF561207Withcibid",  "relationship", errorcallback)){
		return;
	}	
	function CustomerInstalledBase_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"cibid", value:targetKey});
			

			var tbname = "F561207"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.F561207.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.F561207();
				obj.id = res[i].id;
				obj.UKID = res[i].UKID;
				obj.ALKY = res[i].ALKY;
				obj.NUMB = res[i].NUMB;
				obj.N001 = res[i].N001;
				obj.ITM = res[i].ITM;
				obj.LITM = res[i].LITM;
				obj.AITM = res[i].AITM;
				obj.MSTS = res[i].MSTS;
				obj.AA03 = res[i].AA03;
				obj.TDT = res[i].TDT;
				obj.PNST = res[i].PNST;
				obj.LCPD = res[i].LCPD;
				obj.CPLD = res[i].CPLD;
				obj.SRVD = res[i].SRVD;
				obj.FRIN = res[i].FRIN;
				obj.WONA = res[i].WONA;
				obj.PDFG = res[i].PDFG;
				obj.MLTW = res[i].MLTW;
				obj.PMC1 = res[i].PMC1;
				obj.PMC2 = res[i].PMC2;
				obj.SRP8 = res[i].SRP8;
				obj.HasChangedFlag = res[i].HasChangedFlag;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.cibid = res[i].cibid;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK(pks, CustomerInstalledBase_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F561207 related to CustomerInstalledBase
* with given cibid from local database.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCountOfF561207Withcibid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCountOfF561207Withcibid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.getCountOfF561207Withcibid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.getCountOfF561207Withcibid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getCountOfF561207Withcibid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getCountOfF561207Withcibid",  "relationship", errorcallback)){
		return;
	}
	function CustomerInstalledBase_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(cibid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"cibid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"cibid", value:targetKey});
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
		   de.itgs.WorkOrders.F561207.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK(pks, CustomerInstalledBase_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of CustomerInstalledBaseCharacteristic related to CustomerInstalledBase
* with given cibid from local database.
*************************************************************************************/


de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCustomerInstalledBaseCharacteristicWithcibid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCustomerInstalledBaseCharacteristicWithcibid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.getCustomerInstalledBaseCharacteristicWithcibid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.getCustomerInstalledBaseCharacteristicWithcibid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getCustomerInstalledBaseCharacteristicWithcibid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getCustomerInstalledBaseCharacteristicWithcibid",  "relationship", errorcallback)){
		return;
	}	
	function CustomerInstalledBase_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"cibid", value:targetKey});
			

			var tbname = "CustomerInstalledBaseCharacteristic"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic();
				obj.id = res[i].id;
				obj.N001 = res[i].N001;
				obj.ITM = res[i].ITM;
				obj.OSEQ = res[i].OSEQ;
				obj.ITMCAT = res[i].ITMCAT;
				obj.SDSC1 = res[i].SDSC1;
				obj.UOM = res[i].UOM;
				obj.HasChangedFlag = res[i].HasChangedFlag;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.cibid = res[i].cibid;
				obj.DeletedBy = res[i].DeletedBy;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK(pks, CustomerInstalledBase_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of CustomerInstalledBaseCharacteristic related to CustomerInstalledBase
* with given cibid from local database.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCountOfCustomerInstalledBaseCharacteristicWithcibid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCountOfCustomerInstalledBaseCharacteristicWithcibid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.getCountOfCustomerInstalledBaseCharacteristicWithcibid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.getCountOfCustomerInstalledBaseCharacteristicWithcibid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getCountOfCustomerInstalledBaseCharacteristicWithcibid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getCountOfCustomerInstalledBaseCharacteristicWithcibid",  "relationship", errorcallback)){
		return;
	}
	function CustomerInstalledBase_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(cibid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"cibid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"cibid", value:targetKey});
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
		   de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK(pks, CustomerInstalledBase_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of SpareParts related to CustomerInstalledBase
* with given CIBId from local database.
*************************************************************************************/


de.itgs.WorkOrders.CustomerInstalledBase.prototype.getSparePartsWithCIBId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getSparePartsWithCIBId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.getSparePartsWithCIBId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.getSparePartsWithCIBId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getSparePartsWithCIBId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getSparePartsWithCIBId",  "relationship", errorcallback)){
		return;
	}	
	function CustomerInstalledBase_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"CIBId", value:targetKey});
			

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
	
	de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK(pks, CustomerInstalledBase_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of SpareParts related to CustomerInstalledBase
* with given CIBId from local database.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCountOfSparePartsWithCIBId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCountOfSparePartsWithCIBId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.getCountOfSparePartsWithCIBId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.getCountOfSparePartsWithCIBId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getCountOfSparePartsWithCIBId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getCountOfSparePartsWithCIBId",  "relationship", errorcallback)){
		return;
	}
	function CustomerInstalledBase_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(CIBId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"CIBId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"CIBId", value:targetKey});
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
	
	de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK(pks, CustomerInstalledBase_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of btphotos related to CustomerInstalledBase
* with given cibid from local database.
*************************************************************************************/


de.itgs.WorkOrders.CustomerInstalledBase.prototype.getbtphotosWithcibid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getbtphotosWithcibid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.getbtphotosWithcibid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.getbtphotosWithcibid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getbtphotosWithcibid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getbtphotosWithcibid",  "relationship", errorcallback)){
		return;
	}	
	function CustomerInstalledBase_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"cibid", value:targetKey});
			

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
	
	de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK(pks, CustomerInstalledBase_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of btphotos related to CustomerInstalledBase
* with given cibid from local database.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCountOfbtphotosWithcibid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCountOfbtphotosWithcibid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.getCountOfbtphotosWithcibid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.getCountOfbtphotosWithcibid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getCountOfbtphotosWithcibid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getCountOfbtphotosWithcibid",  "relationship", errorcallback)){
		return;
	}
	function CustomerInstalledBase_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(cibid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"cibid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"cibid", value:targetKey});
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
	
	de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK(pks, CustomerInstalledBase_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of CustomerInstalledBaseCharacteristic related to CustomerInstalledBase
* with given etatcibCId from local database.
*************************************************************************************/


de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCustomerInstalledBaseCharacteristicWithetatcibCId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCustomerInstalledBaseCharacteristicWithetatcibCId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.getCustomerInstalledBaseCharacteristicWithetatcibCId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.getCustomerInstalledBaseCharacteristicWithetatcibCId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getCustomerInstalledBaseCharacteristicWithetatcibCId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getCustomerInstalledBaseCharacteristicWithetatcibCId",  "relationship", errorcallback)){
		return;
	}	
	function CustomerInstalledBase_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].etatcibCId;
			wcs.push({key:"id", value:targetKey});
			

			var tbname = "CustomerInstalledBaseCharacteristic"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic();
				obj.id = res[i].id;
				obj.N001 = res[i].N001;
				obj.ITM = res[i].ITM;
				obj.OSEQ = res[i].OSEQ;
				obj.ITMCAT = res[i].ITMCAT;
				obj.SDSC1 = res[i].SDSC1;
				obj.UOM = res[i].UOM;
				obj.HasChangedFlag = res[i].HasChangedFlag;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.cibid = res[i].cibid;
				obj.DeletedBy = res[i].DeletedBy;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK(pks, CustomerInstalledBase_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of CustomerInstalledBaseCharacteristic related to CustomerInstalledBase
* with given etatcibCId from local database.
*************************************************************************************/
de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCountOfCustomerInstalledBaseCharacteristicWithetatcibCId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getCountOfCustomerInstalledBaseCharacteristicWithetatcibCId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.CustomerInstalledBase.getCountOfCustomerInstalledBaseCharacteristicWithetatcibCId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.CustomerInstalledBase.getCountOfCustomerInstalledBaseCharacteristicWithetatcibCId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getCountOfCustomerInstalledBaseCharacteristicWithetatcibCId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.CustomerInstalledBase.getCountOfCustomerInstalledBaseCharacteristicWithetatcibCId",  "relationship", errorcallback)){
		return;
	}
	function CustomerInstalledBase_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].etatcibCId;
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
		   de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.CustomerInstalledBase.getAllDetailsByPK(pks, CustomerInstalledBase_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.WorkOrders.CustomerInstalledBase.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.removeCascade function");
	var tbname = de.itgs.WorkOrders.CustomerInstalledBase.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F561207.removeCascade, "F561207", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.CustomerInstalledBaseCharacteristic.removeCascade, "CustomerInstalledBaseCharacteristic", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CIBId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SpareParts.removeCascade, "SpareParts", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("cibid");
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


de.itgs.WorkOrders.CustomerInstalledBase.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.convertTableToObject function");
	objMap = [];
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
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.WorkOrders.CustomerInstalledBase.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.filterAttributes function");
	var attributeTable = {};
	attributeTable.id = "id";
	attributeTable.NUMB = "NUMB";
	attributeTable.N001 = "N001";
	attributeTable.LOTN = "LOTN";
	attributeTable.LANO = "LANO";
	attributeTable.ZE01 = "ZE01";
	attributeTable.ZE02 = "ZE02";
	attributeTable.ZE03 = "ZE03";
	attributeTable.ACL7 = "ACL7";
	attributeTable.ITM = "ITM";
	attributeTable.KIT = "KIT";
	attributeTable.DOCO = "DOCO";
	attributeTable.COCH = "COCH";
	attributeTable.DCTO = "DCTO";
	attributeTable.KCOO = "KCOO";
	attributeTable.Y56INDLA = "Y56INDLA";
	attributeTable.QTY = "QTY";
	attributeTable.FBDUMSDJ = "FBDUMSDJ";
	attributeTable.SVDB = "SVDB";
	attributeTable.Y56DATEP = "Y56DATEP";
	attributeTable.U74SCDV = "U74SCDV";
	attributeTable.Y56LIEU = "Y56LIEU";
	attributeTable.Y56ETAG = "Y56ETAG";
	attributeTable.Y56ZONL = "Y56ZONL";
	attributeTable.Y56EMPLA = "Y56EMPLA";
	attributeTable.HasChangedFlag = "HasChangedFlag";
	attributeTable.etat = "etat";
	attributeTable.etatcibCId = "etatcibCId";
	attributeTable.LNID = "LNID";
	attributeTable.UNItecStatus = "UNItecStatus";
	attributeTable.Y56ATYPE = "Y56ATYPE";
	attributeTable.Y56QTY = "Y56QTY";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject CustomerInstalledBase. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject CustomerInstalledBase. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject CustomerInstalledBase. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.WorkOrders.CustomerInstalledBase.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.WorkOrders.CustomerInstalledBase.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.WorkOrders.CustomerInstalledBase.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.NUMB = this.NUMB;
	valuesTable.N001 = this.N001;
	valuesTable.LOTN = this.LOTN;
	valuesTable.LANO = this.LANO;
	valuesTable.ZE01 = this.ZE01;
	valuesTable.ZE02 = this.ZE02;
	valuesTable.ZE03 = this.ZE03;
	valuesTable.ACL7 = this.ACL7;
	valuesTable.ITM = this.ITM;
	valuesTable.KIT = this.KIT;
	valuesTable.DOCO = this.DOCO;
	valuesTable.COCH = this.COCH;
	valuesTable.DCTO = this.DCTO;
	valuesTable.KCOO = this.KCOO;
	valuesTable.Y56INDLA = this.Y56INDLA;
	valuesTable.QTY = this.QTY;
	valuesTable.FBDUMSDJ = this.FBDUMSDJ;
	valuesTable.SVDB = this.SVDB;
	valuesTable.Y56DATEP = this.Y56DATEP;
	valuesTable.U74SCDV = this.U74SCDV;
	valuesTable.Y56LIEU = this.Y56LIEU;
	valuesTable.Y56ETAG = this.Y56ETAG;
	valuesTable.Y56ZONL = this.Y56ZONL;
	valuesTable.Y56EMPLA = this.Y56EMPLA;
	valuesTable.HasChangedFlag = this.HasChangedFlag;
	valuesTable.etat = this.etat;
	valuesTable.etatcibCId = this.etatcibCId;
	valuesTable.LNID = this.LNID;
	valuesTable.UNItecStatus = this.UNItecStatus;
	valuesTable.Y56ATYPE = this.Y56ATYPE;
	valuesTable.Y56QTY = this.Y56QTY;
	return valuesTable;
};

de.itgs.WorkOrders.CustomerInstalledBase.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	return pkTable;
};

de.itgs.WorkOrders.CustomerInstalledBase.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	return pkTable;
};

de.itgs.WorkOrders.CustomerInstalledBase.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key id not specified in  " + opName + "  an item in CustomerInstalledBase");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"CustomerInstalledBase")));
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
			sync.log.error("Primary Key id not specified in  " + opName + "  an item in CustomerInstalledBase");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"CustomerInstalledBase")));
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

de.itgs.WorkOrders.CustomerInstalledBase.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.validateNull function");
	if(valuestable.HasChangedFlag!==undefined){
		if(kony.sync.isNull(valuestable.HasChangedFlag) || kony.sync.isEmptyString(valuestable.HasChangedFlag)){
			sync.log.error("Mandatory attribute HasChangedFlag is missing for the SyncObject CustomerInstalledBase.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "CustomerInstalledBase", "HasChangedFlag")));
			return false;
		}
	}
	return true;
};

de.itgs.WorkOrders.CustomerInstalledBase.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.validateNullInsert function");
	if(kony.sync.isNull(valuestable.HasChangedFlag) || kony.sync.isEmptyString(valuestable.HasChangedFlag)){
		sync.log.error("Mandatory attribute HasChangedFlag is missing for the SyncObject CustomerInstalledBase.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "CustomerInstalledBase", "HasChangedFlag")));
		return false;
	}
	return true;
};

de.itgs.WorkOrders.CustomerInstalledBase.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.WorkOrders.CustomerInstalledBase.getRelationshipMap function");
	var r1 = {};
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.NUMB)){
		r1.sourceAttribute.push("NUMB");
		r1.foreignKeyAttribute.push("NUMB");
		r1.targetAttributeValue.push(valuestable.NUMB);
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
	
	if (!kony.sync.isNullOrUndefined(valuestable.etatcibCId)){
		r1.sourceAttribute.push("id") ;
		r1.foreignKeyAttribute.push("etatcibCId");
		r1.targetAttributeValue.push(valuestable.etatcibCId) ;
	}
		
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.CustomerInstalledBaseCharacteristic===undefined){
			relationshipMap.CustomerInstalledBaseCharacteristic = [];
		}
		relationshipMap.CustomerInstalledBaseCharacteristic.push(r1);
	}
		
	return relationshipMap;
};


de.itgs.WorkOrders.CustomerInstalledBase.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.WorkOrders.CustomerInstalledBase.getTableName = function(){
	return "CustomerInstalledBase";
};




// **********************************End CustomerInstalledBase's helper methods************************