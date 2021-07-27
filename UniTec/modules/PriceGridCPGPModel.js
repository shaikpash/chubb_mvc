//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:14 CEST 2021PriceGridCPGP*******************
// **********************************Start PriceGridCPGP's helper methods************************
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
* Creates new PriceGridCPGP
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP = function(){
	this.id = null;
	this.AST = null;
	this.UPC1 = null;
	this.EUSE = null;
	this.IGP1 = null;
	this.IGP2 = null;
	this.IGP3 = null;
	this.APRP6 = null;
	this.APRP5 = null;
	this.ITM = null;
	this.SDV1 = null;
	this.EXDJ = null;
	this.CRCD = null;
	this.UOM = null;
	this.BSCD = null;
	this.FVTR = null;
	this.CPGP = null;
	this.EFTJ = null;
	this.AN8 = null;
	this.LOB = null;
	this.PRGR = null;
	this.StatusFlag = null;
	this.SyncTimestamp = null;
	this.markForUpload = true;
};

de.itgs.Masterdata.PriceGridCPGP.prototype = {
	get id(){
		return this._id;
	},
	set id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute id in PriceGridCPGP.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._id = val;
	},
	get AST(){
		return this._AST;
	},
	set AST(val){
		this._AST = val;
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
	get IGP1(){
		return this._IGP1;
	},
	set IGP1(val){
		this._IGP1 = val;
	},
	get IGP2(){
		return this._IGP2;
	},
	set IGP2(val){
		this._IGP2 = val;
	},
	get IGP3(){
		return this._IGP3;
	},
	set IGP3(val){
		this._IGP3 = val;
	},
	get APRP6(){
		return this._APRP6;
	},
	set APRP6(val){
		this._APRP6 = val;
	},
	get APRP5(){
		return this._APRP5;
	},
	set APRP5(val){
		this._APRP5 = val;
	},
	get ITM(){
		return this._ITM;
	},
	set ITM(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ITM in PriceGridCPGP.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ITM = val;
	},
	get SDV1(){
		return this._SDV1;
	},
	set SDV1(val){
		this._SDV1 = val;
	},
	get EXDJ(){
		return this._EXDJ;
	},
	set EXDJ(val){
		this._EXDJ = val;
	},
	get CRCD(){
		return this._CRCD;
	},
	set CRCD(val){
		this._CRCD = val;
	},
	get UOM(){
		return this._UOM;
	},
	set UOM(val){
		this._UOM = val;
	},
	get BSCD(){
		return this._BSCD;
	},
	set BSCD(val){
		this._BSCD = val;
	},
	get FVTR(){
		return this._FVTR;
	},
	set FVTR(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute FVTR in PriceGridCPGP.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._FVTR = val;
	},
	get CPGP(){
		return this._CPGP;
	},
	set CPGP(val){
		this._CPGP = val;
	},
	get EFTJ(){
		return this._EFTJ;
	},
	set EFTJ(val){
		this._EFTJ = val;
	},
	get AN8(){
		return this._AN8;
	},
	set AN8(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute AN8 in PriceGridCPGP.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._AN8 = val;
	},
	get LOB(){
		return this._LOB;
	},
	set LOB(val){
		this._LOB = val;
	},
	get PRGR(){
		return this._PRGR;
	},
	set PRGR(val){
		this._PRGR = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in PriceGridCPGP.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
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
* Retrieves all instances of PriceGridCPGP SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "id";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "AST";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.Masterdata.PriceGridCPGP.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	orderByMap = kony.sync.formOrderByClause("PriceGridCPGP",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getAll->successcallback");
		successcallback(de.itgs.Masterdata.PriceGridCPGP.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of PriceGridCPGP present in local database.
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getAllCount function");
	de.itgs.Masterdata.PriceGridCPGP.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of PriceGridCPGP using where clause in the local Database
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getCount->successcallback");
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
* Creates a new instance of PriceGridCPGP in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.Masterdata.PriceGridCPGP.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.Masterdata.PriceGridCPGP.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"PriceGridCPGP",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.Masterdata.PriceGridCPGP.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of PriceGridCPGP in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].AST = "AST_0";
*		valuesArray[0].UPC1 = "UPC1_0";
*		valuesArray[0].EUSE = "EUSE_0";
*		valuesArray[0].IGP1 = "IGP1_0";
*		valuesArray[0].IGP2 = "IGP2_0";
*		valuesArray[0].IGP3 = "IGP3_0";
*		valuesArray[0].APRP6 = "APRP6_0";
*		valuesArray[0].APRP5 = "APRP5_0";
*		valuesArray[0].ITM = 0;
*		valuesArray[0].SDV1 = "SDV1_0";
*		valuesArray[0].EXDJ = 0;
*		valuesArray[0].CRCD = "CRCD_0";
*		valuesArray[0].UOM = "UOM_0";
*		valuesArray[0].BSCD = "BSCD_0";
*		valuesArray[0].FVTR = 0;
*		valuesArray[0].CPGP = "CPGP_0";
*		valuesArray[0].EFTJ = 0;
*		valuesArray[0].AN8 = 0;
*		valuesArray[0].LOB = "LOB_0";
*		valuesArray[0].PRGR = "PRGR_0";
*		valuesArray[1] = {};
*		valuesArray[1].AST = "AST_1";
*		valuesArray[1].UPC1 = "UPC1_1";
*		valuesArray[1].EUSE = "EUSE_1";
*		valuesArray[1].IGP1 = "IGP1_1";
*		valuesArray[1].IGP2 = "IGP2_1";
*		valuesArray[1].IGP3 = "IGP3_1";
*		valuesArray[1].APRP6 = "APRP6_1";
*		valuesArray[1].APRP5 = "APRP5_1";
*		valuesArray[1].ITM = 1;
*		valuesArray[1].SDV1 = "SDV1_1";
*		valuesArray[1].EXDJ = 1;
*		valuesArray[1].CRCD = "CRCD_1";
*		valuesArray[1].UOM = "UOM_1";
*		valuesArray[1].BSCD = "BSCD_1";
*		valuesArray[1].FVTR = 1;
*		valuesArray[1].CPGP = "CPGP_1";
*		valuesArray[1].EFTJ = 1;
*		valuesArray[1].AN8 = 1;
*		valuesArray[1].LOB = "LOB_1";
*		valuesArray[1].PRGR = "PRGR_1";
*		valuesArray[2] = {};
*		valuesArray[2].AST = "AST_2";
*		valuesArray[2].UPC1 = "UPC1_2";
*		valuesArray[2].EUSE = "EUSE_2";
*		valuesArray[2].IGP1 = "IGP1_2";
*		valuesArray[2].IGP2 = "IGP2_2";
*		valuesArray[2].IGP3 = "IGP3_2";
*		valuesArray[2].APRP6 = "APRP6_2";
*		valuesArray[2].APRP5 = "APRP5_2";
*		valuesArray[2].ITM = 2;
*		valuesArray[2].SDV1 = "SDV1_2";
*		valuesArray[2].EXDJ = 2;
*		valuesArray[2].CRCD = "CRCD_2";
*		valuesArray[2].UOM = "UOM_2";
*		valuesArray[2].BSCD = "BSCD_2";
*		valuesArray[2].FVTR = 2;
*		valuesArray[2].CPGP = "CPGP_2";
*		valuesArray[2].EFTJ = 2;
*		valuesArray[2].AN8 = 2;
*		valuesArray[2].LOB = "LOB_2";
*		valuesArray[2].PRGR = "PRGR_2";
*		de.itgs.Masterdata.PriceGridCPGP.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"PriceGridCPGP",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.Masterdata.PriceGridCPGP.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates PriceGridCPGP using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.Masterdata.PriceGridCPGP.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.Masterdata.PriceGridCPGP.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.Masterdata.PriceGridCPGP.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"PriceGridCPGP",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.Masterdata.PriceGridCPGP.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates PriceGridCPGP(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"PriceGridCPGP",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.Masterdata.PriceGridCPGP.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.Masterdata.PriceGridCPGP.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.Masterdata.PriceGridCPGP.getPKTable());
	}
};

/************************************************************************************
* Updates PriceGridCPGP(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.AST = "AST_updated0";
*		inputArray[0].changeSet.UPC1 = "UPC1_updated0";
*		inputArray[0].changeSet.EUSE = "EUSE_updated0";
*		inputArray[0].changeSet.IGP1 = "IGP1_updated0";
*		inputArray[0].whereClause = "where id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.AST = "AST_updated1";
*		inputArray[1].changeSet.UPC1 = "UPC1_updated1";
*		inputArray[1].changeSet.EUSE = "EUSE_updated1";
*		inputArray[1].changeSet.IGP1 = "IGP1_updated1";
*		inputArray[1].whereClause = "where id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.AST = "AST_updated2";
*		inputArray[2].changeSet.UPC1 = "UPC1_updated2";
*		inputArray[2].changeSet.EUSE = "EUSE_updated2";
*		inputArray[2].changeSet.IGP1 = "IGP1_updated2";
*		inputArray[2].whereClause = "where id = 2";
*		de.itgs.Masterdata.PriceGridCPGP.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "PriceGridCPGP";
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
			if(kony.sync.attributeValidation(valuestable,"PriceGridCPGP",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.Masterdata.PriceGridCPGP.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.Masterdata.PriceGridCPGP.getPKTable());
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
		sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.Masterdata.PriceGridCPGP.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes PriceGridCPGP using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.PriceGridCPGP.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.Masterdata.PriceGridCPGP.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.Masterdata.PriceGridCPGP.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function PriceGridCPGPTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.deleteByPK->PriceGridCPGP_PKPresent successcallback");
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
	
	function PriceGridCPGPErrorCallback(){
		sync.log.error("Entering de.itgs.Masterdata.PriceGridCPGP.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function PriceGridCPGPSuccessCallback(){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.Masterdata.PriceGridCPGP.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, PriceGridCPGPTransactionCallback, PriceGridCPGPSuccessCallback, PriceGridCPGPErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes PriceGridCPGP(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.Masterdata.PriceGridCPGP.remove("where AST like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function PriceGridCPGP_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function PriceGridCPGP_removeSuccess(){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.remove->PriceGridCPGP_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, PriceGridCPGP_removeTransactioncallback, PriceGridCPGP_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes PriceGridCPGP using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.PriceGridCPGP.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.PriceGridCPGP.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.Masterdata.PriceGridCPGP.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function PriceGridCPGPTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.removeDeviceInstanceByPK -> PriceGridCPGPTransactionCallback");
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
	
	function PriceGridCPGPErrorCallback(){
		sync.log.error("Entering de.itgs.Masterdata.PriceGridCPGP.removeDeviceInstanceByPK -> PriceGridCPGPErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function PriceGridCPGPSuccessCallback(){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.removeDeviceInstanceByPK -> PriceGridCPGPSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.Masterdata.PriceGridCPGP.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, PriceGridCPGPTransactionCallback, PriceGridCPGPSuccessCallback, PriceGridCPGPErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes PriceGridCPGP(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function PriceGridCPGP_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function PriceGridCPGP_removeSuccess(){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.remove->PriceGridCPGP_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, PriceGridCPGP_removeTransactioncallback, PriceGridCPGP_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves PriceGridCPGP using primary key from the local Database. 
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.PriceGridCPGP.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.PriceGridCPGP.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	var wcs = [];
	if(de.itgs.Masterdata.PriceGridCPGP.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.Masterdata.PriceGridCPGP.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves PriceGridCPGP(s) using where clause from the local Database. 
* e.g. de.itgs.Masterdata.PriceGridCPGP.find("where AST like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.PriceGridCPGP.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of PriceGridCPGP with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.PriceGridCPGP.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.Masterdata.PriceGridCPGP.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.Masterdata.PriceGridCPGP.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of PriceGridCPGP matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
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
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.Masterdata.PriceGridCPGP.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of PriceGridCPGP pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
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
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.PriceGridCPGP.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of PriceGridCPGP pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.PriceGridCPGP.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of PriceGridCPGP deferred for upload.
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
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
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.Masterdata.PriceGridCPGP.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to PriceGridCPGP in local database to last synced state
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to PriceGridCPGP's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.PriceGridCPGP.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.PriceGridCPGP.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	var wcs = [];
	if(de.itgs.Masterdata.PriceGridCPGP.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.Masterdata.PriceGridCPGP.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether PriceGridCPGP's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.PriceGridCPGP.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.PriceGridCPGP.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.Masterdata.PriceGridCPGP.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether PriceGridCPGP's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.Masterdata.PriceGridCPGP.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.Masterdata.PriceGridCPGP.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.Masterdata.PriceGridCPGP.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.Masterdata.PriceGridCPGP.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.Masterdata.PriceGridCPGP.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.Masterdata.PriceGridCPGP.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.isRecordPendingForUpload->successcallback function");
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
de.itgs.Masterdata.PriceGridCPGP.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.removeCascade function");
	var tbname = de.itgs.Masterdata.PriceGridCPGP.getTableName();
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


de.itgs.Masterdata.PriceGridCPGP.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new de.itgs.Masterdata.PriceGridCPGP();
			obj.id = res[i].id;
			obj.AST = res[i].AST;
			obj.UPC1 = res[i].UPC1;
			obj.EUSE = res[i].EUSE;
			obj.IGP1 = res[i].IGP1;
			obj.IGP2 = res[i].IGP2;
			obj.IGP3 = res[i].IGP3;
			obj.APRP6 = res[i].APRP6;
			obj.APRP5 = res[i].APRP5;
			obj.ITM = res[i].ITM;
			obj.SDV1 = res[i].SDV1;
			obj.EXDJ = res[i].EXDJ;
			obj.CRCD = res[i].CRCD;
			obj.UOM = res[i].UOM;
			obj.BSCD = res[i].BSCD;
			obj.FVTR = res[i].FVTR;
			obj.CPGP = res[i].CPGP;
			obj.EFTJ = res[i].EFTJ;
			obj.AN8 = res[i].AN8;
			obj.LOB = res[i].LOB;
			obj.PRGR = res[i].PRGR;
			obj.StatusFlag = res[i].StatusFlag;
			obj.SyncTimestamp = res[i].SyncTimestamp;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.Masterdata.PriceGridCPGP.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.filterAttributes function");
	var attributeTable = {};
	attributeTable.id = "id";
	attributeTable.AST = "AST";
	attributeTable.UPC1 = "UPC1";
	attributeTable.EUSE = "EUSE";
	attributeTable.IGP1 = "IGP1";
	attributeTable.IGP2 = "IGP2";
	attributeTable.IGP3 = "IGP3";
	attributeTable.APRP6 = "APRP6";
	attributeTable.APRP5 = "APRP5";
	attributeTable.ITM = "ITM";
	attributeTable.SDV1 = "SDV1";
	attributeTable.EXDJ = "EXDJ";
	attributeTable.CRCD = "CRCD";
	attributeTable.UOM = "UOM";
	attributeTable.BSCD = "BSCD";
	attributeTable.FVTR = "FVTR";
	attributeTable.CPGP = "CPGP";
	attributeTable.EFTJ = "EFTJ";
	attributeTable.AN8 = "AN8";
	attributeTable.LOB = "LOB";
	attributeTable.PRGR = "PRGR";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject PriceGridCPGP. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject PriceGridCPGP. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject PriceGridCPGP. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.Masterdata.PriceGridCPGP.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.Masterdata.PriceGridCPGP.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.Masterdata.PriceGridCPGP.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.AST = this.AST;
	valuesTable.UPC1 = this.UPC1;
	valuesTable.EUSE = this.EUSE;
	valuesTable.IGP1 = this.IGP1;
	valuesTable.IGP2 = this.IGP2;
	valuesTable.IGP3 = this.IGP3;
	valuesTable.APRP6 = this.APRP6;
	valuesTable.APRP5 = this.APRP5;
	valuesTable.ITM = this.ITM;
	valuesTable.SDV1 = this.SDV1;
	valuesTable.EXDJ = this.EXDJ;
	valuesTable.CRCD = this.CRCD;
	valuesTable.UOM = this.UOM;
	valuesTable.BSCD = this.BSCD;
	valuesTable.FVTR = this.FVTR;
	valuesTable.CPGP = this.CPGP;
	valuesTable.EFTJ = this.EFTJ;
	valuesTable.AN8 = this.AN8;
	valuesTable.LOB = this.LOB;
	valuesTable.PRGR = this.PRGR;
	return valuesTable;
};

de.itgs.Masterdata.PriceGridCPGP.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	return pkTable;
};

de.itgs.Masterdata.PriceGridCPGP.getPKTable = function(){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	return pkTable;
};

de.itgs.Masterdata.PriceGridCPGP.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key id not specified in  " + opName + "  an item in PriceGridCPGP");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"PriceGridCPGP")));
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
			sync.log.error("Primary Key id not specified in  " + opName + "  an item in PriceGridCPGP");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"PriceGridCPGP")));
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

de.itgs.Masterdata.PriceGridCPGP.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.validateNull function");
	return true;
};

de.itgs.Masterdata.PriceGridCPGP.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.validateNullInsert function");
	return true;
};

de.itgs.Masterdata.PriceGridCPGP.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.Masterdata.PriceGridCPGP.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


de.itgs.Masterdata.PriceGridCPGP.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.Masterdata.PriceGridCPGP.getTableName = function(){
	return "PriceGridCPGP";
};




// **********************************End PriceGridCPGP's helper methods************************