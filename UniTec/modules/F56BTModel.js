//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:12 CEST 2021F56BT*******************
// **********************************Start F56BT's helper methods************************
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
* Creates new F56BT
*************************************************************************************/
de.itgs.WorkOrders.F56BT = function(){
	this.id = null;
	this.DOCO = null;
	this.DCTO = null;
	this.TYPS = null;
	this.PTWO = null;
	this.NUMB = null;
	this.LOTN = null;
	this.ISSUE = null;
	this.VR02 = null;
	this.AN8 = null;
	this.SAID = null;
	this.SRST = null;
	this.HRSO = null;
	this.HRSA = null;
	this.RSTM = null;
	this.TRDJ = null;
	this.DPL = null;
	this.PBTM = null;
	this.STRT = null;
	this.SEST = null;
	this.DRQJ = null;
	this.SEET = null;
	this.STRX = null;
	this.TMCO = null;
	this.ANSA = null;
	this.ANP = null;
	this.ANPA = null;
	this.ANT = null;
	this.ANO = null;
	this.SEQN = null;
	this.PARS = null;
	this.WR01 = null;
	this.WR12 = null;
	this.RORN = null;
	this.RCTO = null;
	this.ASN2 = null;
	this.DOC = null;
	this.DCT = null;
	this.KCO = null;
	this.COCH = null;
	this.LNID = null;
	this.SERP = null;
	this.URRF = null;
	this.WR13 = null;
	this.WR20 = null;
	this.VR01 = null;
	this.WR04 = null;
	this.signatureId = null;
	this.TelResolvedContactId = null;
	this.actcount = null;
	this.HasChangedFlag = null;
	this.StatusFlag = null;
	this.SyncTimestamp = null;
	this.lastCheck = null;
	this.ApplicationVersion = null;
	this.markForUpload = true;
};

de.itgs.WorkOrders.F56BT.prototype = {
	get id(){
		return this._id;
	},
	set id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute id in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._id = val;
	},
	get DOCO(){
		return this._DOCO;
	},
	set DOCO(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute DOCO in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DOCO = val;
	},
	get DCTO(){
		return this._DCTO;
	},
	set DCTO(val){
		this._DCTO = val;
	},
	get TYPS(){
		return this._TYPS;
	},
	set TYPS(val){
		this._TYPS = val;
	},
	get PTWO(){
		return this._PTWO;
	},
	set PTWO(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute PTWO in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._PTWO = val;
	},
	get NUMB(){
		return this._NUMB;
	},
	set NUMB(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute NUMB in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._NUMB = val;
	},
	get LOTN(){
		return this._LOTN;
	},
	set LOTN(val){
		this._LOTN = val;
	},
	get ISSUE(){
		return this._ISSUE;
	},
	set ISSUE(val){
		this._ISSUE = val;
	},
	get VR02(){
		return this._VR02;
	},
	set VR02(val){
		this._VR02 = val;
	},
	get AN8(){
		return this._AN8;
	},
	set AN8(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute AN8 in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._AN8 = val;
	},
	get SAID(){
		return this._SAID;
	},
	set SAID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SAID in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SAID = val;
	},
	get SRST(){
		return this._SRST;
	},
	set SRST(val){
		this._SRST = val;
	},
	get HRSO(){
		return this._HRSO;
	},
	set HRSO(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute HRSO in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._HRSO = val;
	},
	get HRSA(){
		return this._HRSA;
	},
	set HRSA(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute HRSA in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._HRSA = val;
	},
	get RSTM(){
		return this._RSTM;
	},
	set RSTM(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute RSTM in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._RSTM = val;
	},
	get TRDJ(){
		return this._TRDJ;
	},
	set TRDJ(val){
		this._TRDJ = val;
	},
	get DPL(){
		return this._DPL;
	},
	set DPL(val){
		this._DPL = val;
	},
	get PBTM(){
		return this._PBTM;
	},
	set PBTM(val){
		this._PBTM = val;
	},
	get STRT(){
		return this._STRT;
	},
	set STRT(val){
		this._STRT = val;
	},
	get SEST(){
		return this._SEST;
	},
	set SEST(val){
		this._SEST = val;
	},
	get DRQJ(){
		return this._DRQJ;
	},
	set DRQJ(val){
		this._DRQJ = val;
	},
	get SEET(){
		return this._SEET;
	},
	set SEET(val){
		this._SEET = val;
	},
	get STRX(){
		return this._STRX;
	},
	set STRX(val){
		this._STRX = val;
	},
	get TMCO(){
		return this._TMCO;
	},
	set TMCO(val){
		this._TMCO = val;
	},
	get ANSA(){
		return this._ANSA;
	},
	set ANSA(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ANSA in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ANSA = val;
	},
	get ANP(){
		return this._ANP;
	},
	set ANP(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ANP in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ANP = val;
	},
	get ANPA(){
		return this._ANPA;
	},
	set ANPA(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ANPA in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ANPA = val;
	},
	get ANT(){
		return this._ANT;
	},
	set ANT(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ANT in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ANT = val;
	},
	get ANO(){
		return this._ANO;
	},
	set ANO(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ANO in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ANO = val;
	},
	get SEQN(){
		return this._SEQN;
	},
	set SEQN(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SEQN in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SEQN = val;
	},
	get PARS(){
		return this._PARS;
	},
	set PARS(val){
		this._PARS = val;
	},
	get WR01(){
		return this._WR01;
	},
	set WR01(val){
		this._WR01 = val;
	},
	get WR12(){
		return this._WR12;
	},
	set WR12(val){
		this._WR12 = val;
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
	get ASN2(){
		return this._ASN2;
	},
	set ASN2(val){
		this._ASN2 = val;
	},
	get DOC(){
		return this._DOC;
	},
	set DOC(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute DOC in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DOC = val;
	},
	get DCT(){
		return this._DCT;
	},
	set DCT(val){
		this._DCT = val;
	},
	get KCO(){
		return this._KCO;
	},
	set KCO(val){
		this._KCO = val;
	},
	get COCH(){
		return this._COCH;
	},
	set COCH(val){
		this._COCH = val;
	},
	get LNID(){
		return this._LNID;
	},
	set LNID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute LNID in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._LNID = val;
	},
	get SERP(){
		return this._SERP;
	},
	set SERP(val){
		this._SERP = val;
	},
	get URRF(){
		return this._URRF;
	},
	set URRF(val){
		this._URRF = val;
	},
	get WR13(){
		return this._WR13;
	},
	set WR13(val){
		this._WR13 = val;
	},
	get WR20(){
		return this._WR20;
	},
	set WR20(val){
		this._WR20 = val;
	},
	get VR01(){
		return this._VR01;
	},
	set VR01(val){
		this._VR01 = val;
	},
	get WR04(){
		return this._WR04;
	},
	set WR04(val){
		this._WR04 = val;
	},
	get signatureId(){
		return this._signatureId;
	},
	set signatureId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute signatureId in F56BT.\nExpected:\"big_integer\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._signatureId = val;
	},
	get TelResolvedContactId(){
		return this._TelResolvedContactId;
	},
	set TelResolvedContactId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute TelResolvedContactId in F56BT.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._TelResolvedContactId = val;
	},
	get actcount(){
		return this._actcount;
	},
	set actcount(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute actcount in F56BT.\nExpected:\"integer\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._actcount = val;
	},
	get HasChangedFlag(){
		return kony.sync.getBoolean(this._HasChangedFlag)+"";
	},
	set HasChangedFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute HasChangedFlag in F56BT.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._HasChangedFlag = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in F56BT.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._StatusFlag = val;
	},
	get SyncTimestamp(){
		return this._SyncTimestamp;
	},
	set SyncTimestamp(val){
		this._SyncTimestamp = val;
	},
	get lastCheck(){
		return this._lastCheck;
	},
	set lastCheck(val){
		this._lastCheck = val;
	},
	get ApplicationVersion(){
		return this._ApplicationVersion;
	},
	set ApplicationVersion(val){
		this._ApplicationVersion = val;
	},
};

/************************************************************************************
* Retrieves all instances of F56BT SyncObject present in local database with
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
* de.itgs.WorkOrders.F56BT.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.WorkOrders.F56BT.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	orderByMap = kony.sync.formOrderByClause("F56BT",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getAll->successcallback");
		successcallback(de.itgs.WorkOrders.F56BT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of F56BT present in local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getAllCount function");
	de.itgs.WorkOrders.F56BT.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of F56BT using where clause in the local Database
*************************************************************************************/
de.itgs.WorkOrders.F56BT.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCount->successcallback");
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
* Creates a new instance of F56BT in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.WorkOrders.F56BT.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56BT.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"F56BT",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.F56BT.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of F56BT in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].DOCO = 0;
*		valuesArray[0].DCTO = "DCTO_0";
*		valuesArray[0].TYPS = "TYPS_0";
*		valuesArray[0].PTWO = 0;
*		valuesArray[0].NUMB = 0;
*		valuesArray[0].LOTN = "LOTN_0";
*		valuesArray[0].ISSUE = "ISSUE_0";
*		valuesArray[0].VR02 = "VR02_0";
*		valuesArray[0].AN8 = 0;
*		valuesArray[0].SAID = 0;
*		valuesArray[0].SRST = "SRST_0";
*		valuesArray[0].HRSO = 0;
*		valuesArray[0].HRSA = 0;
*		valuesArray[0].RSTM = 0;
*		valuesArray[0].TRDJ = 0;
*		valuesArray[0].DPL = 0;
*		valuesArray[0].PBTM = 0;
*		valuesArray[0].STRT = 0;
*		valuesArray[0].SEST = 0;
*		valuesArray[0].DRQJ = 0;
*		valuesArray[0].SEET = 0;
*		valuesArray[0].STRX = 0;
*		valuesArray[0].TMCO = 0;
*		valuesArray[0].ANSA = 0;
*		valuesArray[0].ANP = 0;
*		valuesArray[0].ANPA = 0;
*		valuesArray[0].ANT = 0;
*		valuesArray[0].ANO = 0;
*		valuesArray[0].SEQN = 0;
*		valuesArray[0].PARS = "PARS_0";
*		valuesArray[0].WR01 = "WR01_0";
*		valuesArray[0].WR12 = "WR12_0";
*		valuesArray[0].RORN = "RORN_0";
*		valuesArray[0].RCTO = "RCTO_0";
*		valuesArray[0].ASN2 = "ASN2_0";
*		valuesArray[0].DOC = 0;
*		valuesArray[0].DCT = "DCT_0";
*		valuesArray[0].KCO = "KCO_0";
*		valuesArray[0].COCH = "COCH_0";
*		valuesArray[0].LNID = 0;
*		valuesArray[0].SERP = "SERP_0";
*		valuesArray[0].URRF = "URRF_0";
*		valuesArray[0].WR13 = "WR13_0";
*		valuesArray[0].WR20 = "WR20_0";
*		valuesArray[0].VR01 = "VR01_0";
*		valuesArray[0].WR04 = "WR04_0";
*		valuesArray[0].signatureId = 0;
*		valuesArray[0].TelResolvedContactId = 0;
*		valuesArray[0].actcount = 0;
*		valuesArray[0].HasChangedFlag = true;
*		valuesArray[0].lastCheck = 0;
*		valuesArray[0].ApplicationVersion = "ApplicationVersion_0";
*		valuesArray[1] = {};
*		valuesArray[1].DOCO = 1;
*		valuesArray[1].DCTO = "DCTO_1";
*		valuesArray[1].TYPS = "TYPS_1";
*		valuesArray[1].PTWO = 1;
*		valuesArray[1].NUMB = 1;
*		valuesArray[1].LOTN = "LOTN_1";
*		valuesArray[1].ISSUE = "ISSUE_1";
*		valuesArray[1].VR02 = "VR02_1";
*		valuesArray[1].AN8 = 1;
*		valuesArray[1].SAID = 1;
*		valuesArray[1].SRST = "SRST_1";
*		valuesArray[1].HRSO = 1;
*		valuesArray[1].HRSA = 1;
*		valuesArray[1].RSTM = 1;
*		valuesArray[1].TRDJ = 1;
*		valuesArray[1].DPL = 1;
*		valuesArray[1].PBTM = 1;
*		valuesArray[1].STRT = 1;
*		valuesArray[1].SEST = 1;
*		valuesArray[1].DRQJ = 1;
*		valuesArray[1].SEET = 1;
*		valuesArray[1].STRX = 1;
*		valuesArray[1].TMCO = 1;
*		valuesArray[1].ANSA = 1;
*		valuesArray[1].ANP = 1;
*		valuesArray[1].ANPA = 1;
*		valuesArray[1].ANT = 1;
*		valuesArray[1].ANO = 1;
*		valuesArray[1].SEQN = 1;
*		valuesArray[1].PARS = "PARS_1";
*		valuesArray[1].WR01 = "WR01_1";
*		valuesArray[1].WR12 = "WR12_1";
*		valuesArray[1].RORN = "RORN_1";
*		valuesArray[1].RCTO = "RCTO_1";
*		valuesArray[1].ASN2 = "ASN2_1";
*		valuesArray[1].DOC = 1;
*		valuesArray[1].DCT = "DCT_1";
*		valuesArray[1].KCO = "KCO_1";
*		valuesArray[1].COCH = "COCH_1";
*		valuesArray[1].LNID = 1;
*		valuesArray[1].SERP = "SERP_1";
*		valuesArray[1].URRF = "URRF_1";
*		valuesArray[1].WR13 = "WR13_1";
*		valuesArray[1].WR20 = "WR20_1";
*		valuesArray[1].VR01 = "VR01_1";
*		valuesArray[1].WR04 = "WR04_1";
*		valuesArray[1].signatureId = 1;
*		valuesArray[1].TelResolvedContactId = 1;
*		valuesArray[1].actcount = 1;
*		valuesArray[1].HasChangedFlag = true;
*		valuesArray[1].lastCheck = 1;
*		valuesArray[1].ApplicationVersion = "ApplicationVersion_1";
*		valuesArray[2] = {};
*		valuesArray[2].DOCO = 2;
*		valuesArray[2].DCTO = "DCTO_2";
*		valuesArray[2].TYPS = "TYPS_2";
*		valuesArray[2].PTWO = 2;
*		valuesArray[2].NUMB = 2;
*		valuesArray[2].LOTN = "LOTN_2";
*		valuesArray[2].ISSUE = "ISSUE_2";
*		valuesArray[2].VR02 = "VR02_2";
*		valuesArray[2].AN8 = 2;
*		valuesArray[2].SAID = 2;
*		valuesArray[2].SRST = "SRST_2";
*		valuesArray[2].HRSO = 2;
*		valuesArray[2].HRSA = 2;
*		valuesArray[2].RSTM = 2;
*		valuesArray[2].TRDJ = 2;
*		valuesArray[2].DPL = 2;
*		valuesArray[2].PBTM = 2;
*		valuesArray[2].STRT = 2;
*		valuesArray[2].SEST = 2;
*		valuesArray[2].DRQJ = 2;
*		valuesArray[2].SEET = 2;
*		valuesArray[2].STRX = 2;
*		valuesArray[2].TMCO = 2;
*		valuesArray[2].ANSA = 2;
*		valuesArray[2].ANP = 2;
*		valuesArray[2].ANPA = 2;
*		valuesArray[2].ANT = 2;
*		valuesArray[2].ANO = 2;
*		valuesArray[2].SEQN = 2;
*		valuesArray[2].PARS = "PARS_2";
*		valuesArray[2].WR01 = "WR01_2";
*		valuesArray[2].WR12 = "WR12_2";
*		valuesArray[2].RORN = "RORN_2";
*		valuesArray[2].RCTO = "RCTO_2";
*		valuesArray[2].ASN2 = "ASN2_2";
*		valuesArray[2].DOC = 2;
*		valuesArray[2].DCT = "DCT_2";
*		valuesArray[2].KCO = "KCO_2";
*		valuesArray[2].COCH = "COCH_2";
*		valuesArray[2].LNID = 2;
*		valuesArray[2].SERP = "SERP_2";
*		valuesArray[2].URRF = "URRF_2";
*		valuesArray[2].WR13 = "WR13_2";
*		valuesArray[2].WR20 = "WR20_2";
*		valuesArray[2].VR01 = "VR01_2";
*		valuesArray[2].WR04 = "WR04_2";
*		valuesArray[2].signatureId = 2;
*		valuesArray[2].TelResolvedContactId = 2;
*		valuesArray[2].actcount = 2;
*		valuesArray[2].HasChangedFlag = true;
*		valuesArray[2].lastCheck = 2;
*		valuesArray[2].ApplicationVersion = "ApplicationVersion_2";
*		de.itgs.WorkOrders.F56BT.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.F56BT.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"F56BT",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.WorkOrders.F56BT.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates F56BT using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.WorkOrders.F56BT.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56BT.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.WorkOrders.F56BT.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"F56BT",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.WorkOrders.F56BT.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates F56BT(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"F56BT",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.F56BT.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.F56BT.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.F56BT.getPKTable());
	}
};

/************************************************************************************
* Updates F56BT(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.DOCO = 0;
*		inputArray[0].changeSet.DCTO = "DCTO_updated0";
*		inputArray[0].changeSet.TYPS = "TYPS_updated0";
*		inputArray[0].changeSet.PTWO = 0;
*		inputArray[0].whereClause = "where id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.DOCO = 1;
*		inputArray[1].changeSet.DCTO = "DCTO_updated1";
*		inputArray[1].changeSet.TYPS = "TYPS_updated1";
*		inputArray[1].changeSet.PTWO = 1;
*		inputArray[1].whereClause = "where id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.DOCO = 2;
*		inputArray[2].changeSet.DCTO = "DCTO_updated2";
*		inputArray[2].changeSet.TYPS = "TYPS_updated2";
*		inputArray[2].changeSet.PTWO = 2;
*		inputArray[2].whereClause = "where id = 2";
*		de.itgs.WorkOrders.F56BT.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.F56BT.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "F56BT";
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
			if(kony.sync.attributeValidation(valuestable,"F56BT",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.WorkOrders.F56BT.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.WorkOrders.F56BT.getPKTable());
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
		sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.WorkOrders.F56BT.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes F56BT using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.F56BT.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.WorkOrders.F56BT.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function F56BTTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.deleteByPK->F56BT_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56BTCO.removeCascade,"F56BTCO",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("ANB");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56TEQ.removeCascade,"F56TEQ",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Contract.removeCascade,"Contract",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56BTDT.removeCascade,"F56BTDT",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56BTCD.removeCascade,"F56BTCD",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56BTTP.removeCascade,"F56BTTP",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F561207.removeCascade,"F561207",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56BTRE.removeCascade,"F56BTRE",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Topology.removeCascade,"Topology",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Reporting.removeCascade,"Reporting",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56PRECO.removeCascade,"F56PRECO",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.SpareParts.removeCascade,"SpareParts",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.OpportunityHeader.removeCascade,"OpportunityHeader",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Quotation.removeCascade,"Quotation",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.CustomerInstalledBase.removeCascade,"CustomerInstalledBase",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.WorkOrderBaseSnapshot.removeCascade,"WorkOrderBaseSnapshot",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.IntermediateReports.removeCascade,"IntermediateReports",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("btid");
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
	
	function F56BTErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BT.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function F56BTSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BT.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, F56BTTransactionCallback, F56BTSuccessCallback, F56BTErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes F56BT(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.WorkOrders.F56BT.remove("where DCTO like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.F56BT.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function F56BT_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTCO.removeCascade, "F56BTCO", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("ANB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56TEQ.removeCascade, "F56TEQ", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Contract.removeCascade, "Contract", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTDT.removeCascade, "F56BTDT", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTCD.removeCascade, "F56BTCD", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTTP.removeCascade, "F56BTTP", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F561207.removeCascade, "F561207", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTRE.removeCascade, "F56BTRE", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Topology.removeCascade, "Topology", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Reporting.removeCascade, "Reporting", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56PRECO.removeCascade, "F56PRECO", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SpareParts.removeCascade, "SpareParts", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.OpportunityHeader.removeCascade, "OpportunityHeader", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Quotation.removeCascade, "Quotation", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.CustomerInstalledBase.removeCascade, "CustomerInstalledBase", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.WorkOrderBaseSnapshot.removeCascade, "WorkOrderBaseSnapshot", true, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.IntermediateReports.removeCascade, "IntermediateReports", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("btid");
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
	function F56BT_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.remove->F56BT_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, F56BT_removeTransactioncallback, F56BT_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes F56BT using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.WorkOrders.F56BT.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function F56BTTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.removeDeviceInstanceByPK -> F56BTTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56BTCO.removeCascade,"F56BTCO",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("ANB");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56TEQ.removeCascade,"F56TEQ",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Contract.removeCascade,"Contract",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56BTDT.removeCascade,"F56BTDT",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56BTCD.removeCascade,"F56BTCD",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56BTTP.removeCascade,"F56BTTP",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F561207.removeCascade,"F561207",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56BTRE.removeCascade,"F56BTRE",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Topology.removeCascade,"Topology",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Reporting.removeCascade,"Reporting",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.F56PRECO.removeCascade,"F56PRECO",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.SpareParts.removeCascade,"SpareParts",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.OpportunityHeader.removeCascade,"OpportunityHeader",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Quotation.removeCascade,"Quotation",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.CustomerInstalledBase.removeCascade,"CustomerInstalledBase",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.WorkOrderBaseSnapshot.removeCascade,"WorkOrderBaseSnapshot",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.IntermediateReports.removeCascade,"IntermediateReports",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("btid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.btphotos.removeCascade,"btphotos",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function F56BTErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BT.removeDeviceInstanceByPK -> F56BTErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function F56BTSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.removeDeviceInstanceByPK -> F56BTSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BT.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, F56BTTransactionCallback, F56BTSuccessCallback, F56BTErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes F56BT(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.F56BT.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function F56BT_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTCO.removeCascade, "F56BTCO", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("ANB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56TEQ.removeCascade, "F56TEQ", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Contract.removeCascade, "Contract", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTDT.removeCascade, "F56BTDT", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTCD.removeCascade, "F56BTCD", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTTP.removeCascade, "F56BTTP", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F561207.removeCascade, "F561207", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTRE.removeCascade, "F56BTRE", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Topology.removeCascade, "Topology", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Reporting.removeCascade, "Reporting", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56PRECO.removeCascade, "F56PRECO", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SpareParts.removeCascade, "SpareParts", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.OpportunityHeader.removeCascade, "OpportunityHeader", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Quotation.removeCascade, "Quotation", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.CustomerInstalledBase.removeCascade, "CustomerInstalledBase", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.WorkOrderBaseSnapshot.removeCascade, "WorkOrderBaseSnapshot", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.IntermediateReports.removeCascade, "IntermediateReports", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("btid");
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
	function F56BT_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.remove->F56BT_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, F56BT_removeTransactioncallback, F56BT_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves F56BT using primary key from the local Database. 
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.F56BT.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.WorkOrders.F56BT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves F56BT(s) using where clause from the local Database. 
* e.g. de.itgs.WorkOrders.F56BT.find("where DCTO like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.F56BT.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56BT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of F56BT with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.WorkOrders.F56BT.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.WorkOrders.F56BT.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of F56BT matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BT.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of F56BT pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56BT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of F56BT pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56BT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of F56BT deferred for upload.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.F56BT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to F56BT in local database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.F56BT.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to F56BT's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.F56BT.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.F56BT.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether F56BT's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.F56BT.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether F56BT's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.F56BT.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.F56BT.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.F56BT.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of F56BTCO related to F56BT
* with given F56BTId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getF56BTCOWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getF56BTCOWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getF56BTCOWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getF56BTCOWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getF56BTCOWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getF56BTCOWithF56BTId",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"F56BTId", value:targetKey});
			

			var tbname = "F56BTCO"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.F56BTCO.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.F56BTCO();
				obj.id = res[i].id;
				obj.F56BTId = res[i].F56BTId;
				obj.pricingOrigin = res[i].pricingOrigin;
				obj.DOCO = res[i].DOCO;
				obj.DCTO = res[i].DCTO;
				obj.CPIL = res[i].CPIL;
				obj.CPNB = res[i].CPNB;
				obj.ALKY = res[i].ALKY;
				obj.UORG = res[i].UORG;
				obj.MCU = res[i].MCU;
				obj.ESUNB = res[i].ESUNB;
				obj.EBILL = res[i].EBILL;
				obj.TRQT = res[i].TRQT;
				obj.ASN2 = res[i].ASN2;
				obj.MTHPR = res[i].MTHPR;
				obj.BILL = res[i].BILL;
				obj.AN8 = res[i].AN8;
				obj.VEND = res[i].VEND;
				obj.RKCO = res[i].RKCO;
				obj.RORN = res[i].RORN;
				obj.RCTO = res[i].RCTO;
				obj.RLLN = res[i].RLLN;
				obj.HasChangedFlag = res[i].HasChangedFlag;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.UM = res[i].UM;
				obj.LOTN = res[i].LOTN;
				obj.SOURCE = res[i].SOURCE;
				obj.EUSE = res[i].EUSE;
				obj.TRDC = res[i].TRDC;
				obj.FUN2 = res[i].FUN2;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F56BTCO related to F56BT
* with given F56BTId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfF56BTCOWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfF56BTCOWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfF56BTCOWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfF56BTCOWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfF56BTCOWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfF56BTCOWithF56BTId",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(F56BTId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"F56BTId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"F56BTId", value:targetKey});
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
		   de.itgs.WorkOrders.F56BTCO.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of F56TEQ related to F56BT
* with given ANB from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getF56TEQWithANB  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getF56TEQWithANB function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getF56TEQWithANB(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getF56TEQWithANB = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getF56TEQWithANB function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getF56TEQWithANB",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].NUMB;
			wcs.push({key:"ANB", value:targetKey});
			

			var tbname = "F56TEQ"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.F56TEQ.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.F56TEQ();
				obj.id = res[i].id;
				obj.ANB = res[i].ANB;
				obj.IDLN = res[i].IDLN;
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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F56TEQ related to F56BT
* with given ANB from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfF56TEQWithANB  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfF56TEQWithANB function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfF56TEQWithANB(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfF56TEQWithANB = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfF56TEQWithANB function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfF56TEQWithANB",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].NUMB;
				targetAttributes.push(ANB);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"ANB", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"ANB", value:targetKey});
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
		   de.itgs.WorkOrders.F56TEQ.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of Contract related to F56BT
* with given NUMB from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getContractWithNUMB  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getContractWithNUMB function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getContractWithNUMB(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getContractWithNUMB = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getContractWithNUMB function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getContractWithNUMB",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].NUMB;
			wcs.push({key:"NUMB", value:targetKey});
			

			var tbname = "Contract"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.Contract.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.Contract();
				obj.id = res[i].id;
				obj.CustomerId = res[i].CustomerId;
				obj.DOCO = res[i].DOCO;
				obj.DCTO = res[i].DCTO;
				obj.COCH = res[i].COCH;
				obj.LNID = res[i].LNID;
				obj.DL01 = res[i].DL01;
				obj.CSDT = res[i].CSDT;
				obj.CDTE = res[i].CDTE;
				obj.CHD = res[i].CHD;
				obj.LNTY = res[i].LNTY;
				obj.AN8 = res[i].AN8;
				obj.LANO = res[i].LANO;
				obj.NUMB = res[i].NUMB;
				obj.SERP = res[i].SERP;
				obj.UM = res[i].UM;
				obj.U = res[i].U;
				obj.UP = res[i].UP;
				obj.PTC = res[i].PTC;
				obj.RYIN = res[i].RYIN;
				obj.CD01 = res[i].CD01;
				obj.CD02 = res[i].CD02;
				obj.CD03 = res[i].CD03;
				obj.CD04 = res[i].CD04;
				obj.CD05 = res[i].CD05;
				obj.ASN2 = res[i].ASN2;
				obj.AN8PB = res[i].AN8PB;
				obj.URAB = res[i].URAB;
				obj.StatusFlag = res[i].StatusFlag;
				obj.isConsistent = res[i].isConsistent;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.MXMET2 = res[i].MXMET2;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of Contract related to F56BT
* with given NUMB from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfContractWithNUMB  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfContractWithNUMB function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfContractWithNUMB(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfContractWithNUMB = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfContractWithNUMB function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfContractWithNUMB",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].NUMB;
				targetAttributes.push(NUMB);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"NUMB", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"NUMB", value:targetKey});
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
		   de.itgs.WorkOrders.Contract.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of F56BTDT related to F56BT
* with given F56BTId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getF56BTDTWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getF56BTDTWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getF56BTDTWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getF56BTDTWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getF56BTDTWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getF56BTDTWithF56BTId",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"F56BTId", value:targetKey});
			

			var tbname = "F56BTDT"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.F56BTDT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F56BTDT related to F56BT
* with given F56BTId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfF56BTDTWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfF56BTDTWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfF56BTDTWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfF56BTDTWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfF56BTDTWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfF56BTDTWithF56BTId",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(F56BTId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"F56BTId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"F56BTId", value:targetKey});
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
		   de.itgs.WorkOrders.F56BTDT.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of F56BTCD related to F56BT
* with given DOCO from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getF56BTCDWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getF56BTCDWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getF56BTCDWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getF56BTCDWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getF56BTCDWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getF56BTCDWithDOCO",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].DOCO;
			wcs.push({key:"DOCO", value:targetKey});
			

			var tbname = "F56BTCD"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.F56BTCD.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.F56BTCD();
				obj.id = res[i].id;
				obj.F56BTId = res[i].F56BTId;
				obj.VR02 = res[i].VR02;
				obj.ALKY = res[i].ALKY;
				obj.VR01 = res[i].VR01;
				obj.DOCO = res[i].DOCO;
				obj.DCTO = res[i].DCTO;
				obj.KCOO = res[i].KCOO;
				obj.LNID = res[i].LNID;
				obj.DOC = res[i].DOC;
				obj.AN8 = res[i].AN8;
				obj.SHAN = res[i].SHAN;
				obj.DVAN = res[i].DVAN;
				obj.ATYP = res[i].ATYP;
				obj.LTTR = res[i].LTTR;
				obj.NXTR = res[i].NXTR;
				obj.ITM = res[i].ITM;
				obj.UOM = res[i].UOM;
				obj.UORG = res[i].UORG;
				obj.SOQS = res[i].SOQS;
				obj.DRQJ = res[i].DRQJ;
				obj.RSDJ = res[i].RSDJ;
				obj.ADDJ = res[i].ADDJ;
				obj.StatusFlag = res[i].StatusFlag;
				obj.isConsistent = res[i].isConsistent;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F56BTCD related to F56BT
* with given DOCO from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfF56BTCDWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfF56BTCDWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfF56BTCDWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfF56BTCDWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfF56BTCDWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfF56BTCDWithDOCO",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].DOCO;
				targetAttributes.push(DOCO);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"DOCO", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"DOCO", value:targetKey});
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
		   de.itgs.WorkOrders.F56BTCD.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of F56BTTP related to F56BT
* with given DOCO from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getF56BTTPWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getF56BTTPWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getF56BTTPWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getF56BTTPWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getF56BTTPWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getF56BTTPWithDOCO",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].DOCO;
			wcs.push({key:"DOCO", value:targetKey});
			

			var tbname = "F56BTTP"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.F56BTTP.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.F56BTTP();
				obj.id = res[i].id;
				obj.F56BTId = res[i].F56BTId;
				obj.DOCO = res[i].DOCO;
				obj.DCTO = res[i].DCTO;
				obj.OPSQ = res[i].OPSQ;
				obj.ALKY = res[i].ALKY;
				obj.RUNL = res[i].RUNL;
				obj.LABA = res[i].LABA;
				obj.OPSC = res[i].OPSC;
				obj.OPST = res[i].OPST;
				obj.RUNM = res[i].RUNM;
				obj.SETL = res[i].SETL;
				obj.AN8 = res[i].AN8;
				obj.HRW = res[i].HRW;
				obj.STRT = res[i].STRT;
				obj.PBTM = res[i].PBTM;
				obj.STRX = res[i].STRX;
				obj.PETM = res[i].PETM;
				obj.HasChangedFlag = res[i].HasChangedFlag;
				obj.StatusFlag = res[i].StatusFlag;
				obj.isConsistent = res[i].isConsistent;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F56BTTP related to F56BT
* with given DOCO from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfF56BTTPWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfF56BTTPWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfF56BTTPWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfF56BTTPWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfF56BTTPWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfF56BTTPWithDOCO",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].DOCO;
				targetAttributes.push(DOCO);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"DOCO", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"DOCO", value:targetKey});
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
		   de.itgs.WorkOrders.F56BTTP.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of F561207 related to F56BT
* with given NUMB from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getF561207WithNUMB  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getF561207WithNUMB function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getF561207WithNUMB(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getF561207WithNUMB = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getF561207WithNUMB function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getF561207WithNUMB",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].NUMB;
			wcs.push({key:"NUMB", value:targetKey});
			

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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F561207 related to F56BT
* with given NUMB from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfF561207WithNUMB  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfF561207WithNUMB function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfF561207WithNUMB(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfF561207WithNUMB = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfF561207WithNUMB function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfF561207WithNUMB",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].NUMB;
				targetAttributes.push(NUMB);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"NUMB", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"NUMB", value:targetKey});
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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of F56BTRE related to F56BT
* with given F56BTId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getF56BTREWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getF56BTREWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getF56BTREWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getF56BTREWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getF56BTREWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getF56BTREWithF56BTId",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"F56BTId", value:targetKey});
			

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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F56BTRE related to F56BT
* with given F56BTId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfF56BTREWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfF56BTREWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfF56BTREWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfF56BTREWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfF56BTREWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfF56BTREWithF56BTId",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(F56BTId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"F56BTId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"F56BTId", value:targetKey});
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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of Topology related to F56BT
* with given F56BTId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getTopologyWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getTopologyWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getTopologyWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getTopologyWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getTopologyWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getTopologyWithF56BTId",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"F56BTId", value:targetKey});
			

			var tbname = "Topology"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.Topology.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.Topology();
				obj.id = res[i].id;
				obj.F56BTId = res[i].F56BTId;
				obj.NAME = res[i].NAME;
				obj.TYPE = res[i].TYPE;
				obj.PARENTId = res[i].PARENTId;
				obj.CREATEDBY = res[i].CREATEDBY;
				obj.CREATEDDATE = res[i].CREATEDDATE;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of Topology related to F56BT
* with given F56BTId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfTopologyWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfTopologyWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfTopologyWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfTopologyWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfTopologyWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfTopologyWithF56BTId",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(F56BTId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"F56BTId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"F56BTId", value:targetKey});
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
		   de.itgs.WorkOrders.Topology.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of Reporting related to F56BT
* with given F56BTId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getReportingWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getReportingWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getReportingWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getReportingWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getReportingWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getReportingWithF56BTId",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"F56BTId", value:targetKey});
			

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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of Reporting related to F56BT
* with given F56BTId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfReportingWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfReportingWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfReportingWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfReportingWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfReportingWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfReportingWithF56BTId",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(F56BTId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"F56BTId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"F56BTId", value:targetKey});
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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of F56PRECO related to F56BT
* with given DOCO from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getF56PRECOWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getF56PRECOWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getF56PRECOWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getF56PRECOWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getF56PRECOWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getF56PRECOWithDOCO",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].DOCO;
			wcs.push({key:"DOCO", value:targetKey});
			

			var tbname = "F56PRECO"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.F56PRECO.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of F56PRECO related to F56BT
* with given DOCO from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfF56PRECOWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfF56PRECOWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfF56PRECOWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfF56PRECOWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfF56PRECOWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfF56PRECOWithDOCO",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].DOCO;
				targetAttributes.push(DOCO);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"DOCO", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"DOCO", value:targetKey});
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
		   de.itgs.WorkOrders.F56PRECO.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of SpareParts related to F56BT
* with given F56BTId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getSparePartsWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getSparePartsWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getSparePartsWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getSparePartsWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getSparePartsWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getSparePartsWithF56BTId",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"F56BTId", value:targetKey});
			

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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of SpareParts related to F56BT
* with given F56BTId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfSparePartsWithF56BTId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfSparePartsWithF56BTId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfSparePartsWithF56BTId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfSparePartsWithF56BTId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfSparePartsWithF56BTId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfSparePartsWithF56BTId",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(F56BTId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"F56BTId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"F56BTId", value:targetKey});
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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of OpportunityHeader related to F56BT
* with given DOCO from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getOpportunityHeaderWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getOpportunityHeaderWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getOpportunityHeaderWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getOpportunityHeaderWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getOpportunityHeaderWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getOpportunityHeaderWithDOCO",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].DOCO;
			wcs.push({key:"DOCO", value:targetKey});
			

			var tbname = "OpportunityHeader"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.OpportunityHeader.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.OpportunityHeader();
				obj.id = res[i].id;
				obj.DOCO = res[i].DOCO;
				obj.chapter = res[i].chapter;
				obj.ownerAN8 = res[i].ownerAN8;
				obj.originAN8 = res[i].originAN8;
				obj.customerAN8 = res[i].customerAN8;
				obj.siteAN8 = res[i].siteAN8;
				obj.agencyAN8 = res[i].agencyAN8;
				obj.status = res[i].status;
				obj.creationDate = res[i].creationDate;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of OpportunityHeader related to F56BT
* with given DOCO from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfOpportunityHeaderWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfOpportunityHeaderWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfOpportunityHeaderWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfOpportunityHeaderWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfOpportunityHeaderWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfOpportunityHeaderWithDOCO",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].DOCO;
				targetAttributes.push(DOCO);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"DOCO", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"DOCO", value:targetKey});
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
		   de.itgs.WorkOrders.OpportunityHeader.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of Quotation related to F56BT
* with given DOCO from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getQuotationWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getQuotationWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getQuotationWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getQuotationWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getQuotationWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getQuotationWithDOCO",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].DOCO;
			wcs.push({key:"DOCO", value:targetKey});
			

			var tbname = "Quotation"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.Quotation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.Quotation();
				obj.Quotationid = res[i].Quotationid;
				obj.QuotationNumber = res[i].QuotationNumber;
				obj.QuotationVersion = res[i].QuotationVersion;
				obj.QuotationMaster = res[i].QuotationMaster;
				obj.LinkedQuotationid = res[i].LinkedQuotationid;
				obj.Customerid = res[i].Customerid;
				obj.CustomerCopyid = res[i].CustomerCopyid;
				obj.Type = res[i].Type;
				obj.SubType = res[i].SubType;
				obj.Status = res[i].Status;
				obj.Employeeid = res[i].Employeeid;
				obj.Flow = res[i].Flow;
				obj.AgencyId = res[i].AgencyId;
				obj.AgencyType = res[i].AgencyType;
				obj.TotalAmount = res[i].TotalAmount;
				obj.DiscountType = res[i].DiscountType;
				obj.DiscountAmount = res[i].DiscountAmount;
				obj.DiscountPercentage = res[i].DiscountPercentage;
				obj.TotalAmountDiscounted = res[i].TotalAmountDiscounted;
				obj.TVAAmount = res[i].TVAAmount;
				obj.TotalAmountWithTVA = res[i].TotalAmountWithTVA;
				obj.DateCreated = res[i].DateCreated;
				obj.DateUpdated = res[i].DateUpdated;
				obj.ApprovalsGenerated = res[i].ApprovalsGenerated;
				obj.DateRelaunched = res[i].DateRelaunched;
				obj.DateOrderExpected = res[i].DateOrderExpected;
				obj.DatePrinted = res[i].DatePrinted;
				obj.DateOrdered = res[i].DateOrdered;
				obj.Probability = res[i].Probability;
				obj.Source = res[i].Source;
				obj.InvoicingMethod = res[i].InvoicingMethod;
				obj.CustQuotationNumber = res[i].CustQuotationNumber;
				obj.CustDateDeliveryExpected = res[i].CustDateDeliveryExpected;
				obj.DatePricesApplied = res[i].DatePricesApplied;
				obj.isDeleted = res[i].isDeleted;
				obj.StatusFlag = res[i].StatusFlag;
				obj.Validity = res[i].Validity;
				obj.issenttojde = res[i].issenttojde;
				obj.reviewComment = res[i].reviewComment;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.OrderPDF = res[i].OrderPDF;
				obj.ApplicationVersion = res[i].ApplicationVersion;
				obj.QuotationCategory = res[i].QuotationCategory;
				obj.DOCO = res[i].DOCO;
				obj.isArchive = res[i].isArchive;
				obj.PtdToTreat = res[i].PtdToTreat;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of Quotation related to F56BT
* with given DOCO from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfQuotationWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfQuotationWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfQuotationWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfQuotationWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfQuotationWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfQuotationWithDOCO",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].DOCO;
				targetAttributes.push(DOCO);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"DOCO", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"DOCO", value:targetKey});
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
		   de.itgs.WorkOrders.Quotation.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of CustomerInstalledBase related to F56BT
* with given NUMB from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getCustomerInstalledBaseWithNUMB  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCustomerInstalledBaseWithNUMB function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCustomerInstalledBaseWithNUMB(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCustomerInstalledBaseWithNUMB = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCustomerInstalledBaseWithNUMB function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCustomerInstalledBaseWithNUMB",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].NUMB;
			wcs.push({key:"NUMB", value:targetKey});
			

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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of CustomerInstalledBase related to F56BT
* with given NUMB from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfCustomerInstalledBaseWithNUMB  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfCustomerInstalledBaseWithNUMB function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfCustomerInstalledBaseWithNUMB(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfCustomerInstalledBaseWithNUMB = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfCustomerInstalledBaseWithNUMB function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfCustomerInstalledBaseWithNUMB",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].NUMB;
				targetAttributes.push(NUMB);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"NUMB", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"NUMB", value:targetKey});
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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of WorkOrderBaseSnapshot related to F56BT
* with given F56BTid from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getWorkOrderBaseSnapshotWithF56BTid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getWorkOrderBaseSnapshotWithF56BTid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getWorkOrderBaseSnapshotWithF56BTid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getWorkOrderBaseSnapshotWithF56BTid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getWorkOrderBaseSnapshotWithF56BTid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getWorkOrderBaseSnapshotWithF56BTid",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"F56BTid", value:targetKey});
			

			var tbname = "WorkOrderBaseSnapshot"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.WorkOrderBaseSnapshot.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.WorkOrderBaseSnapshot();
				obj.id = res[i].id;
				obj.F56BTid = res[i].F56BTid;
				obj.SubFamilyCode = res[i].SubFamilyCode;
				obj.InitialQuantity = res[i].InitialQuantity;
				obj.Quantity = res[i].Quantity;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of WorkOrderBaseSnapshot related to F56BT
* with given F56BTid from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfWorkOrderBaseSnapshotWithF56BTid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfWorkOrderBaseSnapshotWithF56BTid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfWorkOrderBaseSnapshotWithF56BTid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfWorkOrderBaseSnapshotWithF56BTid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfWorkOrderBaseSnapshotWithF56BTid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfWorkOrderBaseSnapshotWithF56BTid",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(F56BTid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"F56BTid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"F56BTid", value:targetKey});
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
		   de.itgs.WorkOrders.WorkOrderBaseSnapshot.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of IntermediateReports related to F56BT
* with given DOCO from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getIntermediateReportsWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getIntermediateReportsWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getIntermediateReportsWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getIntermediateReportsWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getIntermediateReportsWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getIntermediateReportsWithDOCO",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].DOCO;
			wcs.push({key:"DOCO", value:targetKey});
			

			var tbname = "IntermediateReports"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.IntermediateReports.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.IntermediateReports();
				obj.id = res[i].id;
				obj.DOCO = res[i].DOCO;
				obj.Signatureid = res[i].Signatureid;
				obj.InstallState = res[i].InstallState;
				obj.CompensatoryMeasure = res[i].CompensatoryMeasure;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.StatusFlag = res[i].StatusFlag;
				obj.lastChangeDate = res[i].lastChangeDate;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of IntermediateReports related to F56BT
* with given DOCO from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfIntermediateReportsWithDOCO  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfIntermediateReportsWithDOCO function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfIntermediateReportsWithDOCO(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfIntermediateReportsWithDOCO = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfIntermediateReportsWithDOCO function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfIntermediateReportsWithDOCO",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].DOCO;
				targetAttributes.push(DOCO);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"DOCO", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"DOCO", value:targetKey});
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
		   de.itgs.WorkOrders.IntermediateReports.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of btphotos related to F56BT
* with given btid from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getbtphotosWithbtid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getbtphotosWithbtid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getbtphotosWithbtid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getbtphotosWithbtid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getbtphotosWithbtid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getbtphotosWithbtid",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"btid", value:targetKey});
			

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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of btphotos related to F56BT
* with given btid from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfbtphotosWithbtid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfbtphotosWithbtid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfbtphotosWithbtid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfbtphotosWithbtid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfbtphotosWithbtid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfbtphotosWithbtid",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(btid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"btid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"btid", value:targetKey});
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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of signatures related to F56BT
* with given signatureId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getsignaturesWithsignatureId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getsignaturesWithsignatureId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getsignaturesWithsignatureId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getsignaturesWithsignatureId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getsignaturesWithsignatureId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getsignaturesWithsignatureId",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].signatureId;
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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of signatures related to F56BT
* with given signatureId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfsignaturesWithsignatureId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfsignaturesWithsignatureId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfsignaturesWithsignatureId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfsignaturesWithsignatureId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfsignaturesWithsignatureId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfsignaturesWithsignatureId",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].signatureId;
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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of Contact related to F56BT
* with given TelResolvedContactId from local database.
*************************************************************************************/


de.itgs.WorkOrders.F56BT.prototype.getContactWithTelResolvedContactId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getContactWithTelResolvedContactId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getContactWithTelResolvedContactId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getContactWithTelResolvedContactId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getContactWithTelResolvedContactId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getContactWithTelResolvedContactId",  "relationship", errorcallback)){
		return;
	}	
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].TelResolvedContactId;
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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of Contact related to F56BT
* with given TelResolvedContactId from local database.
*************************************************************************************/
de.itgs.WorkOrders.F56BT.prototype.getCountOfContactWithTelResolvedContactId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getCountOfContactWithTelResolvedContactId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.F56BT.getCountOfContactWithTelResolvedContactId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.F56BT.getCountOfContactWithTelResolvedContactId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getCountOfContactWithTelResolvedContactId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.F56BT.getCountOfContactWithTelResolvedContactId",  "relationship", errorcallback)){
		return;
	}
	function F56BT_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].TelResolvedContactId;
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
	
	de.itgs.WorkOrders.F56BT.getAllDetailsByPK(pks, F56BT_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.WorkOrders.F56BT.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.removeCascade function");
	var tbname = de.itgs.WorkOrders.F56BT.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTCO.removeCascade, "F56BTCO", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("ANB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56TEQ.removeCascade, "F56TEQ", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Contract.removeCascade, "Contract", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTDT.removeCascade, "F56BTDT", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTCD.removeCascade, "F56BTCD", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTTP.removeCascade, "F56BTTP", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F561207.removeCascade, "F561207", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56BTRE.removeCascade, "F56BTRE", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Topology.removeCascade, "Topology", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Reporting.removeCascade, "Reporting", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.F56PRECO.removeCascade, "F56PRECO", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.SpareParts.removeCascade, "SpareParts", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.OpportunityHeader.removeCascade, "OpportunityHeader", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Quotation.removeCascade, "Quotation", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("NUMB");
			targetAttributes.push("NUMB");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.CustomerInstalledBase.removeCascade, "CustomerInstalledBase", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("F56BTid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.WorkOrderBaseSnapshot.removeCascade, "WorkOrderBaseSnapshot", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("DOCO");
			targetAttributes.push("DOCO");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.IntermediateReports.removeCascade, "IntermediateReports", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("btid");
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


de.itgs.WorkOrders.F56BT.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new de.itgs.WorkOrders.F56BT();
			obj.id = res[i].id;
			obj.DOCO = res[i].DOCO;
			obj.DCTO = res[i].DCTO;
			obj.TYPS = res[i].TYPS;
			obj.PTWO = res[i].PTWO;
			obj.NUMB = res[i].NUMB;
			obj.LOTN = res[i].LOTN;
			obj.ISSUE = res[i].ISSUE;
			obj.VR02 = res[i].VR02;
			obj.AN8 = res[i].AN8;
			obj.SAID = res[i].SAID;
			obj.SRST = res[i].SRST;
			obj.HRSO = res[i].HRSO;
			obj.HRSA = res[i].HRSA;
			obj.RSTM = res[i].RSTM;
			obj.TRDJ = res[i].TRDJ;
			obj.DPL = res[i].DPL;
			obj.PBTM = res[i].PBTM;
			obj.STRT = res[i].STRT;
			obj.SEST = res[i].SEST;
			obj.DRQJ = res[i].DRQJ;
			obj.SEET = res[i].SEET;
			obj.STRX = res[i].STRX;
			obj.TMCO = res[i].TMCO;
			obj.ANSA = res[i].ANSA;
			obj.ANP = res[i].ANP;
			obj.ANPA = res[i].ANPA;
			obj.ANT = res[i].ANT;
			obj.ANO = res[i].ANO;
			obj.SEQN = res[i].SEQN;
			obj.PARS = res[i].PARS;
			obj.WR01 = res[i].WR01;
			obj.WR12 = res[i].WR12;
			obj.RORN = res[i].RORN;
			obj.RCTO = res[i].RCTO;
			obj.ASN2 = res[i].ASN2;
			obj.DOC = res[i].DOC;
			obj.DCT = res[i].DCT;
			obj.KCO = res[i].KCO;
			obj.COCH = res[i].COCH;
			obj.LNID = res[i].LNID;
			obj.SERP = res[i].SERP;
			obj.URRF = res[i].URRF;
			obj.WR13 = res[i].WR13;
			obj.WR20 = res[i].WR20;
			obj.VR01 = res[i].VR01;
			obj.WR04 = res[i].WR04;
			obj.signatureId = res[i].signatureId;
			obj.TelResolvedContactId = res[i].TelResolvedContactId;
			obj.actcount = res[i].actcount;
			obj.HasChangedFlag = res[i].HasChangedFlag;
			obj.StatusFlag = res[i].StatusFlag;
			obj.SyncTimestamp = res[i].SyncTimestamp;
			obj.lastCheck = res[i].lastCheck;
			obj.ApplicationVersion = res[i].ApplicationVersion;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.WorkOrders.F56BT.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.filterAttributes function");
	var attributeTable = {};
	attributeTable.id = "id";
	attributeTable.DOCO = "DOCO";
	attributeTable.DCTO = "DCTO";
	attributeTable.TYPS = "TYPS";
	attributeTable.PTWO = "PTWO";
	attributeTable.NUMB = "NUMB";
	attributeTable.LOTN = "LOTN";
	attributeTable.ISSUE = "ISSUE";
	attributeTable.VR02 = "VR02";
	attributeTable.AN8 = "AN8";
	attributeTable.SAID = "SAID";
	attributeTable.SRST = "SRST";
	attributeTable.HRSO = "HRSO";
	attributeTable.HRSA = "HRSA";
	attributeTable.RSTM = "RSTM";
	attributeTable.TRDJ = "TRDJ";
	attributeTable.DPL = "DPL";
	attributeTable.PBTM = "PBTM";
	attributeTable.STRT = "STRT";
	attributeTable.SEST = "SEST";
	attributeTable.DRQJ = "DRQJ";
	attributeTable.SEET = "SEET";
	attributeTable.STRX = "STRX";
	attributeTable.TMCO = "TMCO";
	attributeTable.ANSA = "ANSA";
	attributeTable.ANP = "ANP";
	attributeTable.ANPA = "ANPA";
	attributeTable.ANT = "ANT";
	attributeTable.ANO = "ANO";
	attributeTable.SEQN = "SEQN";
	attributeTable.PARS = "PARS";
	attributeTable.WR01 = "WR01";
	attributeTable.WR12 = "WR12";
	attributeTable.RORN = "RORN";
	attributeTable.RCTO = "RCTO";
	attributeTable.ASN2 = "ASN2";
	attributeTable.DOC = "DOC";
	attributeTable.DCT = "DCT";
	attributeTable.KCO = "KCO";
	attributeTable.COCH = "COCH";
	attributeTable.LNID = "LNID";
	attributeTable.SERP = "SERP";
	attributeTable.URRF = "URRF";
	attributeTable.WR13 = "WR13";
	attributeTable.WR20 = "WR20";
	attributeTable.VR01 = "VR01";
	attributeTable.WR04 = "WR04";
	attributeTable.signatureId = "signatureId";
	attributeTable.TelResolvedContactId = "TelResolvedContactId";
	attributeTable.actcount = "actcount";
	attributeTable.HasChangedFlag = "HasChangedFlag";
	attributeTable.lastCheck = "lastCheck";
	attributeTable.ApplicationVersion = "ApplicationVersion";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject F56BT. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject F56BT. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject F56BT. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.WorkOrders.F56BT.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.WorkOrders.F56BT.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.WorkOrders.F56BT.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.DOCO = this.DOCO;
	valuesTable.DCTO = this.DCTO;
	valuesTable.TYPS = this.TYPS;
	valuesTable.PTWO = this.PTWO;
	valuesTable.NUMB = this.NUMB;
	valuesTable.LOTN = this.LOTN;
	valuesTable.ISSUE = this.ISSUE;
	valuesTable.VR02 = this.VR02;
	valuesTable.AN8 = this.AN8;
	valuesTable.SAID = this.SAID;
	valuesTable.SRST = this.SRST;
	valuesTable.HRSO = this.HRSO;
	valuesTable.HRSA = this.HRSA;
	valuesTable.RSTM = this.RSTM;
	valuesTable.TRDJ = this.TRDJ;
	valuesTable.DPL = this.DPL;
	valuesTable.PBTM = this.PBTM;
	valuesTable.STRT = this.STRT;
	valuesTable.SEST = this.SEST;
	valuesTable.DRQJ = this.DRQJ;
	valuesTable.SEET = this.SEET;
	valuesTable.STRX = this.STRX;
	valuesTable.TMCO = this.TMCO;
	valuesTable.ANSA = this.ANSA;
	valuesTable.ANP = this.ANP;
	valuesTable.ANPA = this.ANPA;
	valuesTable.ANT = this.ANT;
	valuesTable.ANO = this.ANO;
	valuesTable.SEQN = this.SEQN;
	valuesTable.PARS = this.PARS;
	valuesTable.WR01 = this.WR01;
	valuesTable.WR12 = this.WR12;
	valuesTable.RORN = this.RORN;
	valuesTable.RCTO = this.RCTO;
	valuesTable.ASN2 = this.ASN2;
	valuesTable.DOC = this.DOC;
	valuesTable.DCT = this.DCT;
	valuesTable.KCO = this.KCO;
	valuesTable.COCH = this.COCH;
	valuesTable.LNID = this.LNID;
	valuesTable.SERP = this.SERP;
	valuesTable.URRF = this.URRF;
	valuesTable.WR13 = this.WR13;
	valuesTable.WR20 = this.WR20;
	valuesTable.VR01 = this.VR01;
	valuesTable.WR04 = this.WR04;
	valuesTable.signatureId = this.signatureId;
	valuesTable.TelResolvedContactId = this.TelResolvedContactId;
	valuesTable.actcount = this.actcount;
	valuesTable.HasChangedFlag = this.HasChangedFlag;
	valuesTable.lastCheck = this.lastCheck;
	valuesTable.ApplicationVersion = this.ApplicationVersion;
	return valuesTable;
};

de.itgs.WorkOrders.F56BT.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	return pkTable;
};

de.itgs.WorkOrders.F56BT.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	return pkTable;
};

de.itgs.WorkOrders.F56BT.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key id not specified in  " + opName + "  an item in F56BT");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"F56BT")));
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
			sync.log.error("Primary Key id not specified in  " + opName + "  an item in F56BT");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"F56BT")));
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

de.itgs.WorkOrders.F56BT.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.validateNull function");
	if(valuestable.HasChangedFlag!==undefined){
		if(kony.sync.isNull(valuestable.HasChangedFlag) || kony.sync.isEmptyString(valuestable.HasChangedFlag)){
			sync.log.error("Mandatory attribute HasChangedFlag is missing for the SyncObject F56BT.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "F56BT", "HasChangedFlag")));
			return false;
		}
	}
	return true;
};

de.itgs.WorkOrders.F56BT.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.validateNullInsert function");
	if(kony.sync.isNull(valuestable.HasChangedFlag) || kony.sync.isEmptyString(valuestable.HasChangedFlag)){
		sync.log.error("Mandatory attribute HasChangedFlag is missing for the SyncObject F56BT.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "F56BT", "HasChangedFlag")));
		return false;
	}
	return true;
};

de.itgs.WorkOrders.F56BT.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.WorkOrders.F56BT.getRelationshipMap function");
	var r1 = {};
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.id)){
		r1.sourceAttribute.push("workOrderId");
		r1.foreignKeyAttribute.push("id");
		r1.targetAttributeValue.push(valuestable.id);
	}
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.WorkOrderTechnicians===undefined){
			relationshipMap.WorkOrderTechnicians = [];
		}
		relationshipMap.WorkOrderTechnicians.push(r1);
	}
	

	r1={}
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];	
	r1.targetAttributeValue = [];
	
	if (!kony.sync.isNullOrUndefined(valuestable.signatureId)){
		r1.sourceAttribute.push("id") ;
		r1.foreignKeyAttribute.push("signatureId");
		r1.targetAttributeValue.push(valuestable.signatureId) ;
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
	
	if (!kony.sync.isNullOrUndefined(valuestable.TelResolvedContactId)){
		r1.sourceAttribute.push("id") ;
		r1.foreignKeyAttribute.push("TelResolvedContactId");
		r1.targetAttributeValue.push(valuestable.TelResolvedContactId) ;
	}
		
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.Contact===undefined){
			relationshipMap.Contact = [];
		}
		relationshipMap.Contact.push(r1);
	}
		
	return relationshipMap;
};


de.itgs.WorkOrders.F56BT.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.WorkOrders.F56BT.getTableName = function(){
	return "F56BT";
};




// **********************************End F56BT's helper methods************************