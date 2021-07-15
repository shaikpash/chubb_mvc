//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:12 CEST 2021Customer*******************
// **********************************Start Customer's helper methods************************
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
* Creates new Customer
*************************************************************************************/
de.itgs.WorkOrders.Customer = function(){
	this.id = null;
	this.ParentCustomerId = null;
	this.OriginalId = null;
	this.UserId = null;
	this.updmaster = null;
	this.lastsolvencydate = null;
	this.indiscore = null;
	this.indiscoretendancy = null;
	this.AN8 = null;
	this.ALKY = null;
	this.internalname = null;
	this.corporatename = null;
	this.type = null;
	this.corporatenameadd = null;
	this.address1 = null;
	this.address2 = null;
	this.address3 = null;
	this.zipcode = null;
	this.city = null;
	this.country = null;
	this.cedex = null;
	this.PA8 = null;
	this.AN81 = null;
	this.serviceagencyid = null;
	this.installagencyid = null;
	this.AN84 = null;
	this.AN85 = null;
	this.AN86 = null;
	this.AC05 = null;
	this.AC15 = null;
	this.WWS = null;
	this.WWE = null;
	this.WDS = null;
	this.WDE = null;
	this.TX2 = null;
	this.SIRET = null;
	this.SIREN = null;
	this.APEcode = null;
	this.VATtype = null;
	this.taxzone = null;
	this.creditlimit = null;
	this.DLC = null;
	this.AAP = null;
	this.AC28 = null;
	this.AC27 = null;
	this.marketingsegmentation = null;
	this.paymentcondition = null;
	this.paymentmode = null;
	this.deliverymode = null;
	this.deliverycondition = null;
	this.HDAR = null;
	this.HOLD = null;
	this.tariffcontractid = null;
	this.deliveryinstruction1 = null;
	this.deliveryinstruction2 = null;
	this.currency = null;
	this.language = null;
	this.purchaseordermandatory = null;
	this.visitformrouting = null;
	this.nbbillcopies = null;
	this.billingmode = null;
	this.billingrouting = null;
	this.billingrate = null;
	this.HasChangedFlag = null;
	this.StatusFlag = null;
	this.F56TIERSPartIsSet = null;
	this.F56CLIPartIsSet = null;
	this.SyncTimestamp = null;
	this.CPGP = null;
	this.VirtualGrouping = null;
	this.markForUpload = true;
};

de.itgs.WorkOrders.Customer.prototype = {
	get id(){
		return this._id;
	},
	set id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute id in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._id = val;
	},
	get ParentCustomerId(){
		return this._ParentCustomerId;
	},
	set ParentCustomerId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ParentCustomerId in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ParentCustomerId = val;
	},
	get OriginalId(){
		return this._OriginalId;
	},
	set OriginalId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute OriginalId in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._OriginalId = val;
	},
	get UserId(){
		return this._UserId;
	},
	set UserId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute UserId in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._UserId = val;
	},
	get updmaster(){
		return this._updmaster;
	},
	set updmaster(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute updmaster in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._updmaster = val;
	},
	get lastsolvencydate(){
		return this._lastsolvencydate;
	},
	set lastsolvencydate(val){
		this._lastsolvencydate = val;
	},
	get indiscore(){
		return this._indiscore;
	},
	set indiscore(val){
		this._indiscore = val;
	},
	get indiscoretendancy(){
		return this._indiscoretendancy;
	},
	set indiscoretendancy(val){
		this._indiscoretendancy = val;
	},
	get AN8(){
		return this._AN8;
	},
	set AN8(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute AN8 in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._AN8 = val;
	},
	get ALKY(){
		return this._ALKY;
	},
	set ALKY(val){
		this._ALKY = val;
	},
	get internalname(){
		return this._internalname;
	},
	set internalname(val){
		this._internalname = val;
	},
	get corporatename(){
		return this._corporatename;
	},
	set corporatename(val){
		this._corporatename = val;
	},
	get type(){
		return this._type;
	},
	set type(val){
		this._type = val;
	},
	get corporatenameadd(){
		return this._corporatenameadd;
	},
	set corporatenameadd(val){
		this._corporatenameadd = val;
	},
	get address1(){
		return this._address1;
	},
	set address1(val){
		this._address1 = val;
	},
	get address2(){
		return this._address2;
	},
	set address2(val){
		this._address2 = val;
	},
	get address3(){
		return this._address3;
	},
	set address3(val){
		this._address3 = val;
	},
	get zipcode(){
		return this._zipcode;
	},
	set zipcode(val){
		this._zipcode = val;
	},
	get city(){
		return this._city;
	},
	set city(val){
		this._city = val;
	},
	get country(){
		return this._country;
	},
	set country(val){
		this._country = val;
	},
	get cedex(){
		return this._cedex;
	},
	set cedex(val){
		this._cedex = val;
	},
	get PA8(){
		return this._PA8;
	},
	set PA8(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute PA8 in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._PA8 = val;
	},
	get AN81(){
		return this._AN81;
	},
	set AN81(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute AN81 in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._AN81 = val;
	},
	get serviceagencyid(){
		return this._serviceagencyid;
	},
	set serviceagencyid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute serviceagencyid in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._serviceagencyid = val;
	},
	get installagencyid(){
		return this._installagencyid;
	},
	set installagencyid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute installagencyid in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._installagencyid = val;
	},
	get AN84(){
		return this._AN84;
	},
	set AN84(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute AN84 in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._AN84 = val;
	},
	get AN85(){
		return this._AN85;
	},
	set AN85(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute AN85 in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._AN85 = val;
	},
	get AN86(){
		return this._AN86;
	},
	set AN86(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute AN86 in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._AN86 = val;
	},
	get AC05(){
		return this._AC05;
	},
	set AC05(val){
		this._AC05 = val;
	},
	get AC15(){
		return this._AC15;
	},
	set AC15(val){
		this._AC15 = val;
	},
	get WWS(){
		return this._WWS;
	},
	set WWS(val){
		this._WWS = val;
	},
	get WWE(){
		return this._WWE;
	},
	set WWE(val){
		this._WWE = val;
	},
	get WDS(){
		return this._WDS;
	},
	set WDS(val){
		this._WDS = val;
	},
	get WDE(){
		return this._WDE;
	},
	set WDE(val){
		this._WDE = val;
	},
	get TX2(){
		return this._TX2;
	},
	set TX2(val){
		this._TX2 = val;
	},
	get SIRET(){
		return this._SIRET;
	},
	set SIRET(val){
		this._SIRET = val;
	},
	get SIREN(){
		return this._SIREN;
	},
	set SIREN(val){
		this._SIREN = val;
	},
	get APEcode(){
		return this._APEcode;
	},
	set APEcode(val){
		this._APEcode = val;
	},
	get VATtype(){
		return this._VATtype;
	},
	set VATtype(val){
		this._VATtype = val;
	},
	get taxzone(){
		return this._taxzone;
	},
	set taxzone(val){
		this._taxzone = val;
	},
	get creditlimit(){
		return this._creditlimit;
	},
	set creditlimit(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute creditlimit in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._creditlimit = val;
	},
	get DLC(){
		return this._DLC;
	},
	set DLC(val){
		this._DLC = val;
	},
	get AAP(){
		return this._AAP;
	},
	set AAP(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute AAP in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._AAP = val;
	},
	get AC28(){
		return this._AC28;
	},
	set AC28(val){
		this._AC28 = val;
	},
	get AC27(){
		return this._AC27;
	},
	set AC27(val){
		this._AC27 = val;
	},
	get marketingsegmentation(){
		return this._marketingsegmentation;
	},
	set marketingsegmentation(val){
		this._marketingsegmentation = val;
	},
	get paymentcondition(){
		return this._paymentcondition;
	},
	set paymentcondition(val){
		this._paymentcondition = val;
	},
	get paymentmode(){
		return this._paymentmode;
	},
	set paymentmode(val){
		this._paymentmode = val;
	},
	get deliverymode(){
		return this._deliverymode;
	},
	set deliverymode(val){
		this._deliverymode = val;
	},
	get deliverycondition(){
		return this._deliverycondition;
	},
	set deliverycondition(val){
		this._deliverycondition = val;
	},
	get HDAR(){
		return this._HDAR;
	},
	set HDAR(val){
		this._HDAR = val;
	},
	get HOLD(){
		return this._HOLD;
	},
	set HOLD(val){
		this._HOLD = val;
	},
	get tariffcontractid(){
		return this._tariffcontractid;
	},
	set tariffcontractid(val){
		this._tariffcontractid = val;
	},
	get deliveryinstruction1(){
		return this._deliveryinstruction1;
	},
	set deliveryinstruction1(val){
		this._deliveryinstruction1 = val;
	},
	get deliveryinstruction2(){
		return this._deliveryinstruction2;
	},
	set deliveryinstruction2(val){
		this._deliveryinstruction2 = val;
	},
	get currency(){
		return this._currency;
	},
	set currency(val){
		this._currency = val;
	},
	get language(){
		return this._language;
	},
	set language(val){
		this._language = val;
	},
	get purchaseordermandatory(){
		return this._purchaseordermandatory;
	},
	set purchaseordermandatory(val){
		this._purchaseordermandatory = val;
	},
	get visitformrouting(){
		return this._visitformrouting;
	},
	set visitformrouting(val){
		this._visitformrouting = val;
	},
	get nbbillcopies(){
		return this._nbbillcopies;
	},
	set nbbillcopies(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute nbbillcopies in Customer.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._nbbillcopies = val;
	},
	get billingmode(){
		return this._billingmode;
	},
	set billingmode(val){
		this._billingmode = val;
	},
	get billingrouting(){
		return this._billingrouting;
	},
	set billingrouting(val){
		this._billingrouting = val;
	},
	get billingrate(){
		return this._billingrate;
	},
	set billingrate(val){
		this._billingrate = val;
	},
	get HasChangedFlag(){
		return kony.sync.getBoolean(this._HasChangedFlag)+"";
	},
	set HasChangedFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute HasChangedFlag in Customer.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._HasChangedFlag = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in Customer.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._StatusFlag = val;
	},
	get F56TIERSPartIsSet(){
		return kony.sync.getBoolean(this._F56TIERSPartIsSet)+"";
	},
	set F56TIERSPartIsSet(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute F56TIERSPartIsSet in Customer.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._F56TIERSPartIsSet = val;
	},
	get F56CLIPartIsSet(){
		return kony.sync.getBoolean(this._F56CLIPartIsSet)+"";
	},
	set F56CLIPartIsSet(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute F56CLIPartIsSet in Customer.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._F56CLIPartIsSet = val;
	},
	get SyncTimestamp(){
		return this._SyncTimestamp;
	},
	set SyncTimestamp(val){
		this._SyncTimestamp = val;
	},
	get CPGP(){
		return this._CPGP;
	},
	set CPGP(val){
		this._CPGP = val;
	},
	get VirtualGrouping(){
		return this._VirtualGrouping;
	},
	set VirtualGrouping(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute VirtualGrouping in Customer.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._VirtualGrouping = val;
	},
};

/************************************************************************************
* Retrieves all instances of Customer SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "id";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "ParentCustomerId";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.WorkOrders.Customer.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.WorkOrders.Customer.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	orderByMap = kony.sync.formOrderByClause("Customer",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.getAll->successcallback");
		successcallback(de.itgs.WorkOrders.Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Customer present in local database.
*************************************************************************************/
de.itgs.WorkOrders.Customer.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getAllCount function");
	de.itgs.WorkOrders.Customer.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of Customer using where clause in the local Database
*************************************************************************************/
de.itgs.WorkOrders.Customer.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.getCount->successcallback");
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
* Creates a new instance of Customer in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.Customer.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.WorkOrders.Customer.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.Customer.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.Customer.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"Customer",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.Customer.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.Customer.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of Customer in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].ParentCustomerId = 0;
*		valuesArray[0].OriginalId = 0;
*		valuesArray[0].UserId = 0;
*		valuesArray[0].updmaster = 0;
*		valuesArray[0].lastsolvencydate = 0;
*		valuesArray[0].indiscore = "indiscore_0";
*		valuesArray[0].indiscoretendancy = "indiscoretendancy_0";
*		valuesArray[0].AN8 = 0;
*		valuesArray[0].ALKY = "ALKY_0";
*		valuesArray[0].internalname = "internalname_0";
*		valuesArray[0].corporatename = "corporatename_0";
*		valuesArray[0].type = "type_0";
*		valuesArray[0].corporatenameadd = "corporatenameadd_0";
*		valuesArray[0].address1 = "address1_0";
*		valuesArray[0].address2 = "address2_0";
*		valuesArray[0].address3 = "address3_0";
*		valuesArray[0].zipcode = "zipcode_0";
*		valuesArray[0].city = "city_0";
*		valuesArray[0].country = "country_0";
*		valuesArray[0].cedex = "cedex_0";
*		valuesArray[0].PA8 = 0;
*		valuesArray[0].AN81 = 0;
*		valuesArray[0].serviceagencyid = 0;
*		valuesArray[0].installagencyid = 0;
*		valuesArray[0].AN84 = 0;
*		valuesArray[0].AN85 = 0;
*		valuesArray[0].AN86 = 0;
*		valuesArray[0].AC05 = "AC05_0";
*		valuesArray[0].AC15 = "AC15_0";
*		valuesArray[0].WWS = "WWS_0";
*		valuesArray[0].WWE = "WWE_0";
*		valuesArray[0].WDS = "WDS_0";
*		valuesArray[0].WDE = "WDE_0";
*		valuesArray[0].TX2 = "TX2_0";
*		valuesArray[0].SIRET = "SIRET_0";
*		valuesArray[0].SIREN = "SIREN_0";
*		valuesArray[0].APEcode = "APEcode_0";
*		valuesArray[0].VATtype = "VATtype_0";
*		valuesArray[0].taxzone = "taxzone_0";
*		valuesArray[0].creditlimit = 0;
*		valuesArray[0].DLC = 0;
*		valuesArray[0].AAP = 0;
*		valuesArray[0].AC28 = "AC28_0";
*		valuesArray[0].AC27 = "AC27_0";
*		valuesArray[0].marketingsegmentation = "marketingsegmentation_0";
*		valuesArray[0].paymentcondition = "paymentcondition_0";
*		valuesArray[0].paymentmode = "paymentmode_0";
*		valuesArray[0].deliverymode = "deliverymode_0";
*		valuesArray[0].deliverycondition = "deliverycondition_0";
*		valuesArray[0].HDAR = "HDAR_0";
*		valuesArray[0].HOLD = "HOLD_0";
*		valuesArray[0].tariffcontractid = "tariffcontractid_0";
*		valuesArray[0].deliveryinstruction1 = "deliveryinstruction1_0";
*		valuesArray[0].deliveryinstruction2 = "deliveryinstruction2_0";
*		valuesArray[0].currency = "currency_0";
*		valuesArray[0].language = "language_0";
*		valuesArray[0].purchaseordermandatory = "purchaseordermandatory_0";
*		valuesArray[0].visitformrouting = "visitformrouting_0";
*		valuesArray[0].nbbillcopies = 0;
*		valuesArray[0].billingmode = "billingmode_0";
*		valuesArray[0].billingrouting = "billingrouting_0";
*		valuesArray[0].billingrate = "billingrate_0";
*		valuesArray[0].HasChangedFlag = true;
*		valuesArray[0].F56TIERSPartIsSet = true;
*		valuesArray[0].F56CLIPartIsSet = true;
*		valuesArray[0].CPGP = "CPGP_0";
*		valuesArray[0].VirtualGrouping = 0;
*		valuesArray[1] = {};
*		valuesArray[1].ParentCustomerId = 1;
*		valuesArray[1].OriginalId = 1;
*		valuesArray[1].UserId = 1;
*		valuesArray[1].updmaster = 1;
*		valuesArray[1].lastsolvencydate = 1;
*		valuesArray[1].indiscore = "indiscore_1";
*		valuesArray[1].indiscoretendancy = "indiscoretendancy_1";
*		valuesArray[1].AN8 = 1;
*		valuesArray[1].ALKY = "ALKY_1";
*		valuesArray[1].internalname = "internalname_1";
*		valuesArray[1].corporatename = "corporatename_1";
*		valuesArray[1].type = "type_1";
*		valuesArray[1].corporatenameadd = "corporatenameadd_1";
*		valuesArray[1].address1 = "address1_1";
*		valuesArray[1].address2 = "address2_1";
*		valuesArray[1].address3 = "address3_1";
*		valuesArray[1].zipcode = "zipcode_1";
*		valuesArray[1].city = "city_1";
*		valuesArray[1].country = "country_1";
*		valuesArray[1].cedex = "cedex_1";
*		valuesArray[1].PA8 = 1;
*		valuesArray[1].AN81 = 1;
*		valuesArray[1].serviceagencyid = 1;
*		valuesArray[1].installagencyid = 1;
*		valuesArray[1].AN84 = 1;
*		valuesArray[1].AN85 = 1;
*		valuesArray[1].AN86 = 1;
*		valuesArray[1].AC05 = "AC05_1";
*		valuesArray[1].AC15 = "AC15_1";
*		valuesArray[1].WWS = "WWS_1";
*		valuesArray[1].WWE = "WWE_1";
*		valuesArray[1].WDS = "WDS_1";
*		valuesArray[1].WDE = "WDE_1";
*		valuesArray[1].TX2 = "TX2_1";
*		valuesArray[1].SIRET = "SIRET_1";
*		valuesArray[1].SIREN = "SIREN_1";
*		valuesArray[1].APEcode = "APEcode_1";
*		valuesArray[1].VATtype = "VATtype_1";
*		valuesArray[1].taxzone = "taxzone_1";
*		valuesArray[1].creditlimit = 1;
*		valuesArray[1].DLC = 1;
*		valuesArray[1].AAP = 1;
*		valuesArray[1].AC28 = "AC28_1";
*		valuesArray[1].AC27 = "AC27_1";
*		valuesArray[1].marketingsegmentation = "marketingsegmentation_1";
*		valuesArray[1].paymentcondition = "paymentcondition_1";
*		valuesArray[1].paymentmode = "paymentmode_1";
*		valuesArray[1].deliverymode = "deliverymode_1";
*		valuesArray[1].deliverycondition = "deliverycondition_1";
*		valuesArray[1].HDAR = "HDAR_1";
*		valuesArray[1].HOLD = "HOLD_1";
*		valuesArray[1].tariffcontractid = "tariffcontractid_1";
*		valuesArray[1].deliveryinstruction1 = "deliveryinstruction1_1";
*		valuesArray[1].deliveryinstruction2 = "deliveryinstruction2_1";
*		valuesArray[1].currency = "currency_1";
*		valuesArray[1].language = "language_1";
*		valuesArray[1].purchaseordermandatory = "purchaseordermandatory_1";
*		valuesArray[1].visitformrouting = "visitformrouting_1";
*		valuesArray[1].nbbillcopies = 1;
*		valuesArray[1].billingmode = "billingmode_1";
*		valuesArray[1].billingrouting = "billingrouting_1";
*		valuesArray[1].billingrate = "billingrate_1";
*		valuesArray[1].HasChangedFlag = true;
*		valuesArray[1].F56TIERSPartIsSet = true;
*		valuesArray[1].F56CLIPartIsSet = true;
*		valuesArray[1].CPGP = "CPGP_1";
*		valuesArray[1].VirtualGrouping = 1;
*		valuesArray[2] = {};
*		valuesArray[2].ParentCustomerId = 2;
*		valuesArray[2].OriginalId = 2;
*		valuesArray[2].UserId = 2;
*		valuesArray[2].updmaster = 2;
*		valuesArray[2].lastsolvencydate = 2;
*		valuesArray[2].indiscore = "indiscore_2";
*		valuesArray[2].indiscoretendancy = "indiscoretendancy_2";
*		valuesArray[2].AN8 = 2;
*		valuesArray[2].ALKY = "ALKY_2";
*		valuesArray[2].internalname = "internalname_2";
*		valuesArray[2].corporatename = "corporatename_2";
*		valuesArray[2].type = "type_2";
*		valuesArray[2].corporatenameadd = "corporatenameadd_2";
*		valuesArray[2].address1 = "address1_2";
*		valuesArray[2].address2 = "address2_2";
*		valuesArray[2].address3 = "address3_2";
*		valuesArray[2].zipcode = "zipcode_2";
*		valuesArray[2].city = "city_2";
*		valuesArray[2].country = "country_2";
*		valuesArray[2].cedex = "cedex_2";
*		valuesArray[2].PA8 = 2;
*		valuesArray[2].AN81 = 2;
*		valuesArray[2].serviceagencyid = 2;
*		valuesArray[2].installagencyid = 2;
*		valuesArray[2].AN84 = 2;
*		valuesArray[2].AN85 = 2;
*		valuesArray[2].AN86 = 2;
*		valuesArray[2].AC05 = "AC05_2";
*		valuesArray[2].AC15 = "AC15_2";
*		valuesArray[2].WWS = "WWS_2";
*		valuesArray[2].WWE = "WWE_2";
*		valuesArray[2].WDS = "WDS_2";
*		valuesArray[2].WDE = "WDE_2";
*		valuesArray[2].TX2 = "TX2_2";
*		valuesArray[2].SIRET = "SIRET_2";
*		valuesArray[2].SIREN = "SIREN_2";
*		valuesArray[2].APEcode = "APEcode_2";
*		valuesArray[2].VATtype = "VATtype_2";
*		valuesArray[2].taxzone = "taxzone_2";
*		valuesArray[2].creditlimit = 2;
*		valuesArray[2].DLC = 2;
*		valuesArray[2].AAP = 2;
*		valuesArray[2].AC28 = "AC28_2";
*		valuesArray[2].AC27 = "AC27_2";
*		valuesArray[2].marketingsegmentation = "marketingsegmentation_2";
*		valuesArray[2].paymentcondition = "paymentcondition_2";
*		valuesArray[2].paymentmode = "paymentmode_2";
*		valuesArray[2].deliverymode = "deliverymode_2";
*		valuesArray[2].deliverycondition = "deliverycondition_2";
*		valuesArray[2].HDAR = "HDAR_2";
*		valuesArray[2].HOLD = "HOLD_2";
*		valuesArray[2].tariffcontractid = "tariffcontractid_2";
*		valuesArray[2].deliveryinstruction1 = "deliveryinstruction1_2";
*		valuesArray[2].deliveryinstruction2 = "deliveryinstruction2_2";
*		valuesArray[2].currency = "currency_2";
*		valuesArray[2].language = "language_2";
*		valuesArray[2].purchaseordermandatory = "purchaseordermandatory_2";
*		valuesArray[2].visitformrouting = "visitformrouting_2";
*		valuesArray[2].nbbillcopies = 2;
*		valuesArray[2].billingmode = "billingmode_2";
*		valuesArray[2].billingrouting = "billingrouting_2";
*		valuesArray[2].billingrate = "billingrate_2";
*		valuesArray[2].HasChangedFlag = true;
*		valuesArray[2].F56TIERSPartIsSet = true;
*		valuesArray[2].F56CLIPartIsSet = true;
*		valuesArray[2].CPGP = "CPGP_2";
*		valuesArray[2].VirtualGrouping = 2;
*		de.itgs.WorkOrders.Customer.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.Customer.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"Customer",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.WorkOrders.Customer.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.WorkOrders.Customer.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.WorkOrders.Customer.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates Customer using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.Customer.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.WorkOrders.Customer.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.Customer.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.Customer.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.WorkOrders.Customer.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"Customer",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.WorkOrders.Customer.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates Customer(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Customer.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"Customer",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.Customer.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.Customer.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.Customer.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.Customer.getPKTable());
	}
};

/************************************************************************************
* Updates Customer(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.ParentCustomerId = 0;
*		inputArray[0].changeSet.OriginalId = 0;
*		inputArray[0].changeSet.UserId = 0;
*		inputArray[0].changeSet.updmaster = 0;
*		inputArray[0].whereClause = "where id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.ParentCustomerId = 1;
*		inputArray[1].changeSet.OriginalId = 1;
*		inputArray[1].changeSet.UserId = 1;
*		inputArray[1].changeSet.updmaster = 1;
*		inputArray[1].whereClause = "where id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.ParentCustomerId = 2;
*		inputArray[2].changeSet.OriginalId = 2;
*		inputArray[2].changeSet.UserId = 2;
*		inputArray[2].changeSet.updmaster = 2;
*		inputArray[2].whereClause = "where id = 2";
*		de.itgs.WorkOrders.Customer.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.Customer.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "Customer";
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
			if(kony.sync.attributeValidation(valuestable,"Customer",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.WorkOrders.Customer.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.Customer.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.WorkOrders.Customer.getPKTable());
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
		sync.log.trace("Entering  de.itgs.WorkOrders.Customer.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.WorkOrders.Customer.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes Customer using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.Customer.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.WorkOrders.Customer.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function CustomerTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.deleteByPK->Customer_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Contact.removeCascade,"Contact",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.ThirdPartyComment.removeCascade,"ThirdPartyComment",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Media.removeCascade,"Media",false, errorcallback, markForUpload, record, false)){
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
	
	function CustomerErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.Customer.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function CustomerSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.Customer.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, CustomerTransactionCallback, CustomerSuccessCallback, CustomerErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes Customer(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.WorkOrders.Customer.remove("where lastsolvencydate like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.Customer.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Customer_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Contact.removeCascade, "Contact", true, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.ThirdPartyComment.removeCascade, "ThirdPartyComment", true, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Media.removeCascade, "Media", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Customer_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.remove->Customer_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Customer_removeTransactioncallback, Customer_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes Customer using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Customer.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.WorkOrders.Customer.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function CustomerTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.removeDeviceInstanceByPK -> CustomerTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Contact.removeCascade,"Contact",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.ThirdPartyComment.removeCascade,"ThirdPartyComment",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.Media.removeCascade,"Media",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function CustomerErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.Customer.removeDeviceInstanceByPK -> CustomerErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function CustomerSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.removeDeviceInstanceByPK -> CustomerSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.Customer.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, CustomerTransactionCallback, CustomerSuccessCallback, CustomerErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes Customer(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.Customer.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Customer_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Contact.removeCascade, "Contact", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.ThirdPartyComment.removeCascade, "ThirdPartyComment", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Media.removeCascade, "Media", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Customer_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.remove->Customer_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Customer_removeTransactioncallback, Customer_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves Customer using primary key from the local Database. 
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Customer.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.Customer.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.WorkOrders.Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves Customer(s) using where clause from the local Database. 
* e.g. de.itgs.WorkOrders.Customer.find("where lastsolvencydate like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.Customer.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Customer with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.WorkOrders.Customer.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.WorkOrders.Customer.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of Customer matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Customer.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.WorkOrders.Customer.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of Customer pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.WorkOrders.Customer.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Customer pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.WorkOrders.Customer.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Customer deferred for upload.
*************************************************************************************/
de.itgs.WorkOrders.Customer.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Customer in local database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.Customer.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to Customer's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Customer.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.Customer.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.Customer.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether Customer's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.Customer.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Customer.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.Customer.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether Customer's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.Customer.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Customer.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.Customer.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.Customer.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of Contact related to Customer
* with given CustomerId from local database.
*************************************************************************************/


de.itgs.WorkOrders.Customer.prototype.getContactWithCustomerId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.getContactWithCustomerId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.getContactWithCustomerId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Customer.getContactWithCustomerId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getContactWithCustomerId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.getContactWithCustomerId",  "relationship", errorcallback)){
		return;
	}	
	function Customer_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"CustomerId", value:targetKey});
			

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
	
	de.itgs.WorkOrders.Customer.getAllDetailsByPK(pks, Customer_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of Contact related to Customer
* with given CustomerId from local database.
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.getCountOfContactWithCustomerId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.getCountOfContactWithCustomerId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.getCountOfContactWithCustomerId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Customer.getCountOfContactWithCustomerId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getCountOfContactWithCustomerId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.getCountOfContactWithCustomerId",  "relationship", errorcallback)){
		return;
	}
	function Customer_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(CustomerId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"CustomerId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"CustomerId", value:targetKey});
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
	
	de.itgs.WorkOrders.Customer.getAllDetailsByPK(pks, Customer_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of ThirdPartyComment related to Customer
* with given CustomerId from local database.
*************************************************************************************/


de.itgs.WorkOrders.Customer.prototype.getThirdPartyCommentWithCustomerId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.getThirdPartyCommentWithCustomerId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.getThirdPartyCommentWithCustomerId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Customer.getThirdPartyCommentWithCustomerId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getThirdPartyCommentWithCustomerId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.getThirdPartyCommentWithCustomerId",  "relationship", errorcallback)){
		return;
	}	
	function Customer_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"CustomerId", value:targetKey});
			

			var tbname = "ThirdPartyComment"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.ThirdPartyComment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.ThirdPartyComment();
				obj.id = res[i].id;
				obj.CustomerId = res[i].CustomerId;
				obj.AN8 = res[i].AN8;
				obj.IDLN = res[i].IDLN;
				obj.ALKY = res[i].ALKY;
				obj.type = res[i].type;
				obj.comment = res[i].comment;
				obj.HasChangedFlag = res[i].HasChangedFlag;
				obj.StatusFlag = res[i].StatusFlag;
				obj.isConsistent = res[i].isConsistent;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.DeletedBy = res[i].DeletedBy;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.Customer.getAllDetailsByPK(pks, Customer_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of ThirdPartyComment related to Customer
* with given CustomerId from local database.
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.getCountOfThirdPartyCommentWithCustomerId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.getCountOfThirdPartyCommentWithCustomerId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.getCountOfThirdPartyCommentWithCustomerId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Customer.getCountOfThirdPartyCommentWithCustomerId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getCountOfThirdPartyCommentWithCustomerId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.getCountOfThirdPartyCommentWithCustomerId",  "relationship", errorcallback)){
		return;
	}
	function Customer_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(CustomerId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"CustomerId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"CustomerId", value:targetKey});
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
		   de.itgs.WorkOrders.ThirdPartyComment.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.Customer.getAllDetailsByPK(pks, Customer_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of Media related to Customer
* with given CustomerId from local database.
*************************************************************************************/


de.itgs.WorkOrders.Customer.prototype.getMediaWithCustomerId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.getMediaWithCustomerId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.getMediaWithCustomerId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Customer.getMediaWithCustomerId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getMediaWithCustomerId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.getMediaWithCustomerId",  "relationship", errorcallback)){
		return;
	}	
	function Customer_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].id;
			wcs.push({key:"CustomerId", value:targetKey});
			

			var tbname = "Media"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.Media.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.Media();
				obj.id = res[i].id;
				obj.ContactId = res[i].ContactId;
				obj.CustomerId = res[i].CustomerId;
				obj.AN8 = res[i].AN8;
				obj.ALKY = res[i].ALKY;
				obj.IDLN = res[i].IDLN;
				obj.RCK7 = res[i].RCK7;
				obj.PHTP = res[i].PHTP;
				obj.data = res[i].data;
				obj.HasChangedFlag = res[i].HasChangedFlag;
				obj.StatusFlag = res[i].StatusFlag;
				obj.isConsistent = res[i].isConsistent;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.EmployeeId = res[i].EmployeeId;
				obj.DeletedBy = res[i].DeletedBy;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.Customer.getAllDetailsByPK(pks, Customer_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of Media related to Customer
* with given CustomerId from local database.
*************************************************************************************/
de.itgs.WorkOrders.Customer.prototype.getCountOfMediaWithCustomerId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.getCountOfMediaWithCustomerId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Customer.getCountOfMediaWithCustomerId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Customer.getCountOfMediaWithCustomerId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getCountOfMediaWithCustomerId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Customer.getCountOfMediaWithCustomerId",  "relationship", errorcallback)){
		return;
	}
	function Customer_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].id;
				targetAttributes.push(CustomerId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"CustomerId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"CustomerId", value:targetKey});
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
		   de.itgs.WorkOrders.Media.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.Customer.getAllDetailsByPK(pks, Customer_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.WorkOrders.Customer.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.removeCascade function");
	var tbname = de.itgs.WorkOrders.Customer.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Contact.removeCascade, "Contact", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.ThirdPartyComment.removeCascade, "ThirdPartyComment", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("id");
			targetAttributes.push("CustomerId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.Media.removeCascade, "Media", false, errorcallback, markForUpload, null, isLocal)){
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


de.itgs.WorkOrders.Customer.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new de.itgs.WorkOrders.Customer();
			obj.id = res[i].id;
			obj.ParentCustomerId = res[i].ParentCustomerId;
			obj.OriginalId = res[i].OriginalId;
			obj.UserId = res[i].UserId;
			obj.updmaster = res[i].updmaster;
			obj.lastsolvencydate = res[i].lastsolvencydate;
			obj.indiscore = res[i].indiscore;
			obj.indiscoretendancy = res[i].indiscoretendancy;
			obj.AN8 = res[i].AN8;
			obj.ALKY = res[i].ALKY;
			obj.internalname = res[i].internalname;
			obj.corporatename = res[i].corporatename;
			obj.type = res[i].type;
			obj.corporatenameadd = res[i].corporatenameadd;
			obj.address1 = res[i].address1;
			obj.address2 = res[i].address2;
			obj.address3 = res[i].address3;
			obj.zipcode = res[i].zipcode;
			obj.city = res[i].city;
			obj.country = res[i].country;
			obj.cedex = res[i].cedex;
			obj.PA8 = res[i].PA8;
			obj.AN81 = res[i].AN81;
			obj.serviceagencyid = res[i].serviceagencyid;
			obj.installagencyid = res[i].installagencyid;
			obj.AN84 = res[i].AN84;
			obj.AN85 = res[i].AN85;
			obj.AN86 = res[i].AN86;
			obj.AC05 = res[i].AC05;
			obj.AC15 = res[i].AC15;
			obj.WWS = res[i].WWS;
			obj.WWE = res[i].WWE;
			obj.WDS = res[i].WDS;
			obj.WDE = res[i].WDE;
			obj.TX2 = res[i].TX2;
			obj.SIRET = res[i].SIRET;
			obj.SIREN = res[i].SIREN;
			obj.APEcode = res[i].APEcode;
			obj.VATtype = res[i].VATtype;
			obj.taxzone = res[i].taxzone;
			obj.creditlimit = res[i].creditlimit;
			obj.DLC = res[i].DLC;
			obj.AAP = res[i].AAP;
			obj.AC28 = res[i].AC28;
			obj.AC27 = res[i].AC27;
			obj.marketingsegmentation = res[i].marketingsegmentation;
			obj.paymentcondition = res[i].paymentcondition;
			obj.paymentmode = res[i].paymentmode;
			obj.deliverymode = res[i].deliverymode;
			obj.deliverycondition = res[i].deliverycondition;
			obj.HDAR = res[i].HDAR;
			obj.HOLD = res[i].HOLD;
			obj.tariffcontractid = res[i].tariffcontractid;
			obj.deliveryinstruction1 = res[i].deliveryinstruction1;
			obj.deliveryinstruction2 = res[i].deliveryinstruction2;
			obj.currency = res[i].currency;
			obj.language = res[i].language;
			obj.purchaseordermandatory = res[i].purchaseordermandatory;
			obj.visitformrouting = res[i].visitformrouting;
			obj.nbbillcopies = res[i].nbbillcopies;
			obj.billingmode = res[i].billingmode;
			obj.billingrouting = res[i].billingrouting;
			obj.billingrate = res[i].billingrate;
			obj.HasChangedFlag = res[i].HasChangedFlag;
			obj.StatusFlag = res[i].StatusFlag;
			obj.F56TIERSPartIsSet = res[i].F56TIERSPartIsSet;
			obj.F56CLIPartIsSet = res[i].F56CLIPartIsSet;
			obj.SyncTimestamp = res[i].SyncTimestamp;
			obj.CPGP = res[i].CPGP;
			obj.VirtualGrouping = res[i].VirtualGrouping;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.WorkOrders.Customer.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.filterAttributes function");
	var attributeTable = {};
	attributeTable.id = "id";
	attributeTable.ParentCustomerId = "ParentCustomerId";
	attributeTable.OriginalId = "OriginalId";
	attributeTable.UserId = "UserId";
	attributeTable.updmaster = "updmaster";
	attributeTable.lastsolvencydate = "lastsolvencydate";
	attributeTable.indiscore = "indiscore";
	attributeTable.indiscoretendancy = "indiscoretendancy";
	attributeTable.AN8 = "AN8";
	attributeTable.ALKY = "ALKY";
	attributeTable.internalname = "internalname";
	attributeTable.corporatename = "corporatename";
	attributeTable.type = "type";
	attributeTable.corporatenameadd = "corporatenameadd";
	attributeTable.address1 = "address1";
	attributeTable.address2 = "address2";
	attributeTable.address3 = "address3";
	attributeTable.zipcode = "zipcode";
	attributeTable.city = "city";
	attributeTable.country = "country";
	attributeTable.cedex = "cedex";
	attributeTable.PA8 = "PA8";
	attributeTable.AN81 = "AN81";
	attributeTable.serviceagencyid = "serviceagencyid";
	attributeTable.installagencyid = "installagencyid";
	attributeTable.AN84 = "AN84";
	attributeTable.AN85 = "AN85";
	attributeTable.AN86 = "AN86";
	attributeTable.AC05 = "AC05";
	attributeTable.AC15 = "AC15";
	attributeTable.WWS = "WWS";
	attributeTable.WWE = "WWE";
	attributeTable.WDS = "WDS";
	attributeTable.WDE = "WDE";
	attributeTable.TX2 = "TX2";
	attributeTable.SIRET = "SIRET";
	attributeTable.SIREN = "SIREN";
	attributeTable.APEcode = "APEcode";
	attributeTable.VATtype = "VATtype";
	attributeTable.taxzone = "taxzone";
	attributeTable.creditlimit = "creditlimit";
	attributeTable.DLC = "DLC";
	attributeTable.AAP = "AAP";
	attributeTable.AC28 = "AC28";
	attributeTable.AC27 = "AC27";
	attributeTable.marketingsegmentation = "marketingsegmentation";
	attributeTable.paymentcondition = "paymentcondition";
	attributeTable.paymentmode = "paymentmode";
	attributeTable.deliverymode = "deliverymode";
	attributeTable.deliverycondition = "deliverycondition";
	attributeTable.HDAR = "HDAR";
	attributeTable.HOLD = "HOLD";
	attributeTable.tariffcontractid = "tariffcontractid";
	attributeTable.deliveryinstruction1 = "deliveryinstruction1";
	attributeTable.deliveryinstruction2 = "deliveryinstruction2";
	attributeTable.currency = "currency";
	attributeTable.language = "language";
	attributeTable.purchaseordermandatory = "purchaseordermandatory";
	attributeTable.visitformrouting = "visitformrouting";
	attributeTable.nbbillcopies = "nbbillcopies";
	attributeTable.billingmode = "billingmode";
	attributeTable.billingrouting = "billingrouting";
	attributeTable.billingrate = "billingrate";
	attributeTable.HasChangedFlag = "HasChangedFlag";
	attributeTable.F56TIERSPartIsSet = "F56TIERSPartIsSet";
	attributeTable.F56CLIPartIsSet = "F56CLIPartIsSet";
	attributeTable.CPGP = "CPGP";
	attributeTable.VirtualGrouping = "VirtualGrouping";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject Customer. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject Customer. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject Customer. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.WorkOrders.Customer.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.WorkOrders.Customer.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.WorkOrders.Customer.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.ParentCustomerId = this.ParentCustomerId;
	valuesTable.OriginalId = this.OriginalId;
	valuesTable.UserId = this.UserId;
	valuesTable.updmaster = this.updmaster;
	valuesTable.lastsolvencydate = this.lastsolvencydate;
	valuesTable.indiscore = this.indiscore;
	valuesTable.indiscoretendancy = this.indiscoretendancy;
	valuesTable.AN8 = this.AN8;
	valuesTable.ALKY = this.ALKY;
	valuesTable.internalname = this.internalname;
	valuesTable.corporatename = this.corporatename;
	valuesTable.type = this.type;
	valuesTable.corporatenameadd = this.corporatenameadd;
	valuesTable.address1 = this.address1;
	valuesTable.address2 = this.address2;
	valuesTable.address3 = this.address3;
	valuesTable.zipcode = this.zipcode;
	valuesTable.city = this.city;
	valuesTable.country = this.country;
	valuesTable.cedex = this.cedex;
	valuesTable.PA8 = this.PA8;
	valuesTable.AN81 = this.AN81;
	valuesTable.serviceagencyid = this.serviceagencyid;
	valuesTable.installagencyid = this.installagencyid;
	valuesTable.AN84 = this.AN84;
	valuesTable.AN85 = this.AN85;
	valuesTable.AN86 = this.AN86;
	valuesTable.AC05 = this.AC05;
	valuesTable.AC15 = this.AC15;
	valuesTable.WWS = this.WWS;
	valuesTable.WWE = this.WWE;
	valuesTable.WDS = this.WDS;
	valuesTable.WDE = this.WDE;
	valuesTable.TX2 = this.TX2;
	valuesTable.SIRET = this.SIRET;
	valuesTable.SIREN = this.SIREN;
	valuesTable.APEcode = this.APEcode;
	valuesTable.VATtype = this.VATtype;
	valuesTable.taxzone = this.taxzone;
	valuesTable.creditlimit = this.creditlimit;
	valuesTable.DLC = this.DLC;
	valuesTable.AAP = this.AAP;
	valuesTable.AC28 = this.AC28;
	valuesTable.AC27 = this.AC27;
	valuesTable.marketingsegmentation = this.marketingsegmentation;
	valuesTable.paymentcondition = this.paymentcondition;
	valuesTable.paymentmode = this.paymentmode;
	valuesTable.deliverymode = this.deliverymode;
	valuesTable.deliverycondition = this.deliverycondition;
	valuesTable.HDAR = this.HDAR;
	valuesTable.HOLD = this.HOLD;
	valuesTable.tariffcontractid = this.tariffcontractid;
	valuesTable.deliveryinstruction1 = this.deliveryinstruction1;
	valuesTable.deliveryinstruction2 = this.deliveryinstruction2;
	valuesTable.currency = this.currency;
	valuesTable.language = this.language;
	valuesTable.purchaseordermandatory = this.purchaseordermandatory;
	valuesTable.visitformrouting = this.visitformrouting;
	valuesTable.nbbillcopies = this.nbbillcopies;
	valuesTable.billingmode = this.billingmode;
	valuesTable.billingrouting = this.billingrouting;
	valuesTable.billingrate = this.billingrate;
	valuesTable.HasChangedFlag = this.HasChangedFlag;
	valuesTable.F56TIERSPartIsSet = this.F56TIERSPartIsSet;
	valuesTable.F56CLIPartIsSet = this.F56CLIPartIsSet;
	valuesTable.CPGP = this.CPGP;
	valuesTable.VirtualGrouping = this.VirtualGrouping;
	return valuesTable;
};

de.itgs.WorkOrders.Customer.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	return pkTable;
};

de.itgs.WorkOrders.Customer.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	return pkTable;
};

de.itgs.WorkOrders.Customer.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key id not specified in  " + opName + "  an item in Customer");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"Customer")));
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
			sync.log.error("Primary Key id not specified in  " + opName + "  an item in Customer");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"Customer")));
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

de.itgs.WorkOrders.Customer.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.validateNull function");
	if(valuestable.HasChangedFlag!==undefined){
		if(kony.sync.isNull(valuestable.HasChangedFlag) || kony.sync.isEmptyString(valuestable.HasChangedFlag)){
			sync.log.error("Mandatory attribute HasChangedFlag is missing for the SyncObject Customer.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Customer", "HasChangedFlag")));
			return false;
		}
	}
	if(valuestable.F56TIERSPartIsSet!==undefined){
		if(kony.sync.isNull(valuestable.F56TIERSPartIsSet) || kony.sync.isEmptyString(valuestable.F56TIERSPartIsSet)){
			sync.log.error("Mandatory attribute F56TIERSPartIsSet is missing for the SyncObject Customer.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Customer", "F56TIERSPartIsSet")));
			return false;
		}
	}
	if(valuestable.F56CLIPartIsSet!==undefined){
		if(kony.sync.isNull(valuestable.F56CLIPartIsSet) || kony.sync.isEmptyString(valuestable.F56CLIPartIsSet)){
			sync.log.error("Mandatory attribute F56CLIPartIsSet is missing for the SyncObject Customer.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Customer", "F56CLIPartIsSet")));
			return false;
		}
	}
	return true;
};

de.itgs.WorkOrders.Customer.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.validateNullInsert function");
	if(kony.sync.isNull(valuestable.HasChangedFlag) || kony.sync.isEmptyString(valuestable.HasChangedFlag)){
		sync.log.error("Mandatory attribute HasChangedFlag is missing for the SyncObject Customer.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Customer", "HasChangedFlag")));
		return false;
	}
	if(kony.sync.isNull(valuestable.F56TIERSPartIsSet) || kony.sync.isEmptyString(valuestable.F56TIERSPartIsSet)){
		sync.log.error("Mandatory attribute F56TIERSPartIsSet is missing for the SyncObject Customer.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Customer", "F56TIERSPartIsSet")));
		return false;
	}
	if(kony.sync.isNull(valuestable.F56CLIPartIsSet) || kony.sync.isEmptyString(valuestable.F56CLIPartIsSet)){
		sync.log.error("Mandatory attribute F56CLIPartIsSet is missing for the SyncObject Customer.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Customer", "F56CLIPartIsSet")));
		return false;
	}
	return true;
};

de.itgs.WorkOrders.Customer.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.WorkOrders.Customer.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


de.itgs.WorkOrders.Customer.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.WorkOrders.Customer.getTableName = function(){
	return "Customer";
};




// **********************************End Customer's helper methods************************