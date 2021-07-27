//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Wed May 26 15:44:12 CEST 2021Quotation*******************
// **********************************Start Quotation's helper methods************************
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
* Creates new Quotation
*************************************************************************************/
de.itgs.WorkOrders.Quotation = function(){
	this.Quotationid = null;
	this.QuotationNumber = null;
	this.QuotationVersion = null;
	this.QuotationMaster = null;
	this.LinkedQuotationid = null;
	this.Customerid = null;
	this.CustomerCopyid = null;
	this.Type = null;
	this.SubType = null;
	this.Status = null;
	this.Employeeid = null;
	this.Flow = null;
	this.AgencyId = null;
	this.AgencyType = null;
	this.TotalAmount = null;
	this.DiscountType = null;
	this.DiscountAmount = null;
	this.DiscountPercentage = null;
	this.TotalAmountDiscounted = null;
	this.TVAAmount = null;
	this.TotalAmountWithTVA = null;
	this.DateCreated = null;
	this.DateUpdated = null;
	this.ApprovalsGenerated = null;
	this.DateRelaunched = null;
	this.DateOrderExpected = null;
	this.DatePrinted = null;
	this.DateOrdered = null;
	this.Probability = null;
	this.Source = null;
	this.InvoicingMethod = null;
	this.CustQuotationNumber = null;
	this.CustDateDeliveryExpected = null;
	this.DatePricesApplied = null;
	this.isDeleted = null;
	this.StatusFlag = null;
	this.Validity = null;
	this.issenttojde = null;
	this.reviewComment = null;
	this.SyncTimestamp = null;
	this.OrderPDF = null;
	this.ApplicationVersion = null;
	this.QuotationCategory = null;
	this.DOCO = null;
	this.isArchive = null;
	this.PtdToTreat = null;
	this.markForUpload = true;
};

de.itgs.WorkOrders.Quotation.prototype = {
	get Quotationid(){
		return this._Quotationid;
	},
	set Quotationid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute Quotationid in Quotation.\nExpected:\"integer\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._Quotationid = val;
	},
	get QuotationNumber(){
		return this._QuotationNumber;
	},
	set QuotationNumber(val){
		this._QuotationNumber = val;
	},
	get QuotationVersion(){
		return this._QuotationVersion;
	},
	set QuotationVersion(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QuotationVersion in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QuotationVersion = val;
	},
	get QuotationMaster(){
		return this._QuotationMaster;
	},
	set QuotationMaster(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute QuotationMaster in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._QuotationMaster = val;
	},
	get LinkedQuotationid(){
		return this._LinkedQuotationid;
	},
	set LinkedQuotationid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute LinkedQuotationid in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._LinkedQuotationid = val;
	},
	get Customerid(){
		return this._Customerid;
	},
	set Customerid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute Customerid in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._Customerid = val;
	},
	get CustomerCopyid(){
		return this._CustomerCopyid;
	},
	set CustomerCopyid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute CustomerCopyid in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._CustomerCopyid = val;
	},
	get Type(){
		return this._Type;
	},
	set Type(val){
		this._Type = val;
	},
	get SubType(){
		return this._SubType;
	},
	set SubType(val){
		this._SubType = val;
	},
	get Status(){
		return this._Status;
	},
	set Status(val){
		this._Status = val;
	},
	get Employeeid(){
		return this._Employeeid;
	},
	set Employeeid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute Employeeid in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._Employeeid = val;
	},
	get Flow(){
		return this._Flow;
	},
	set Flow(val){
		this._Flow = val;
	},
	get AgencyId(){
		return this._AgencyId;
	},
	set AgencyId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute AgencyId in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._AgencyId = val;
	},
	get AgencyType(){
		return this._AgencyType;
	},
	set AgencyType(val){
		this._AgencyType = val;
	},
	get TotalAmount(){
		return this._TotalAmount;
	},
	set TotalAmount(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute TotalAmount in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._TotalAmount = val;
	},
	get DiscountType(){
		return this._DiscountType;
	},
	set DiscountType(val){
		this._DiscountType = val;
	},
	get DiscountAmount(){
		return this._DiscountAmount;
	},
	set DiscountAmount(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute DiscountAmount in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DiscountAmount = val;
	},
	get DiscountPercentage(){
		return this._DiscountPercentage;
	},
	set DiscountPercentage(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute DiscountPercentage in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DiscountPercentage = val;
	},
	get TotalAmountDiscounted(){
		return this._TotalAmountDiscounted;
	},
	set TotalAmountDiscounted(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute TotalAmountDiscounted in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._TotalAmountDiscounted = val;
	},
	get TVAAmount(){
		return this._TVAAmount;
	},
	set TVAAmount(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute TVAAmount in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._TVAAmount = val;
	},
	get TotalAmountWithTVA(){
		return this._TotalAmountWithTVA;
	},
	set TotalAmountWithTVA(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute TotalAmountWithTVA in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._TotalAmountWithTVA = val;
	},
	get DateCreated(){
		return this._DateCreated;
	},
	set DateCreated(val){
		this._DateCreated = val;
	},
	get DateUpdated(){
		return this._DateUpdated;
	},
	set DateUpdated(val){
		this._DateUpdated = val;
	},
	get ApprovalsGenerated(){
		return kony.sync.getBoolean(this._ApprovalsGenerated)+"";
	},
	set ApprovalsGenerated(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute ApprovalsGenerated in Quotation.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ApprovalsGenerated = val;
	},
	get DateRelaunched(){
		return this._DateRelaunched;
	},
	set DateRelaunched(val){
		this._DateRelaunched = val;
	},
	get DateOrderExpected(){
		return this._DateOrderExpected;
	},
	set DateOrderExpected(val){
		this._DateOrderExpected = val;
	},
	get DatePrinted(){
		return this._DatePrinted;
	},
	set DatePrinted(val){
		this._DatePrinted = val;
	},
	get DateOrdered(){
		return this._DateOrdered;
	},
	set DateOrdered(val){
		this._DateOrdered = val;
	},
	get Probability(){
		return this._Probability;
	},
	set Probability(val){
		this._Probability = val;
	},
	get Source(){
		return this._Source;
	},
	set Source(val){
		this._Source = val;
	},
	get InvoicingMethod(){
		return this._InvoicingMethod;
	},
	set InvoicingMethod(val){
		this._InvoicingMethod = val;
	},
	get CustQuotationNumber(){
		return this._CustQuotationNumber;
	},
	set CustQuotationNumber(val){
		this._CustQuotationNumber = val;
	},
	get CustDateDeliveryExpected(){
		return this._CustDateDeliveryExpected;
	},
	set CustDateDeliveryExpected(val){
		this._CustDateDeliveryExpected = val;
	},
	get DatePricesApplied(){
		return this._DatePricesApplied;
	},
	set DatePricesApplied(val){
		this._DatePricesApplied = val;
	},
	get isDeleted(){
		return this._isDeleted;
	},
	set isDeleted(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute isDeleted in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._isDeleted = val;
	},
	get StatusFlag(){
		return kony.sync.getBoolean(this._StatusFlag)+"";
	},
	set StatusFlag(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute StatusFlag in Quotation.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._StatusFlag = val;
	},
	get Validity(){
		return this._Validity;
	},
	set Validity(val){
		this._Validity = val;
	},
	get issenttojde(){
		return kony.sync.getBoolean(this._issenttojde)+"";
	},
	set issenttojde(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute issenttojde in Quotation.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._issenttojde = val;
	},
	get reviewComment(){
		return this._reviewComment;
	},
	set reviewComment(val){
		this._reviewComment = val;
	},
	get SyncTimestamp(){
		return this._SyncTimestamp;
	},
	set SyncTimestamp(val){
		this._SyncTimestamp = val;
	},
	get OrderPDF(){
		return this._OrderPDF;
	},
	set OrderPDF(val){
		this._OrderPDF = val;
	},
	get ApplicationVersion(){
		return this._ApplicationVersion;
	},
	set ApplicationVersion(val){
		this._ApplicationVersion = val;
	},
	get QuotationCategory(){
		return this._QuotationCategory;
	},
	set QuotationCategory(val){
		this._QuotationCategory = val;
	},
	get DOCO(){
		return this._DOCO;
	},
	set DOCO(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute DOCO in Quotation.\nExpected:\"big_decimal\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DOCO = val;
	},
	get isArchive(){
		return kony.sync.getBoolean(this._isArchive)+"";
	},
	set isArchive(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute isArchive in Quotation.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._isArchive = val;
	},
	get PtdToTreat(){
		return kony.sync.getBoolean(this._PtdToTreat)+"";
	},
	set PtdToTreat(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute PtdToTreat in Quotation.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._PtdToTreat = val;
	},
};

/************************************************************************************
* Retrieves all instances of Quotation SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "Quotationid";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "QuotationNumber";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* de.itgs.WorkOrders.Quotation.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
de.itgs.WorkOrders.Quotation.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	orderByMap = kony.sync.formOrderByClause("Quotation",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getAll->successcallback");
		successcallback(de.itgs.WorkOrders.Quotation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Quotation present in local database.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getAllCount function");
	de.itgs.WorkOrders.Quotation.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of Quotation using where clause in the local Database
*************************************************************************************/
de.itgs.WorkOrders.Quotation.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getCount->successcallback");
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
* Creates a new instance of Quotation in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.prototype.create function");
	var valuestable = this.getValuesTable(true);
	de.itgs.WorkOrders.Quotation.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.Quotation.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"Quotation",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.Quotation.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of Quotation in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].QuotationNumber = "QuotationNumber_0";
*		valuesArray[0].QuotationVersion = 0;
*		valuesArray[0].QuotationMaster = 0;
*		valuesArray[0].LinkedQuotationid = 0;
*		valuesArray[0].Customerid = 0;
*		valuesArray[0].CustomerCopyid = 0;
*		valuesArray[0].Type = "Type_0";
*		valuesArray[0].SubType = "SubType_0";
*		valuesArray[0].Status = "Status_0";
*		valuesArray[0].Employeeid = 0;
*		valuesArray[0].Flow = "Flow_0";
*		valuesArray[0].AgencyId = 0;
*		valuesArray[0].AgencyType = "AgencyType_0";
*		valuesArray[0].TotalAmount = 0;
*		valuesArray[0].DiscountType = "DiscountType_0";
*		valuesArray[0].DiscountAmount = 0;
*		valuesArray[0].DiscountPercentage = 0;
*		valuesArray[0].TotalAmountDiscounted = 0;
*		valuesArray[0].TVAAmount = 0;
*		valuesArray[0].TotalAmountWithTVA = 0;
*		valuesArray[0].DateCreated = "DateCreated_0";
*		valuesArray[0].DateUpdated = "DateUpdated_0";
*		valuesArray[0].ApprovalsGenerated = true;
*		valuesArray[0].DateRelaunched = "DateRelaunched_0";
*		valuesArray[0].DateOrderExpected = "DateOrderExpected_0";
*		valuesArray[0].DatePrinted = "DatePrinted_0";
*		valuesArray[0].DateOrdered = "DateOrdered_0";
*		valuesArray[0].Probability = "Probability_0";
*		valuesArray[0].Source = "Source_0";
*		valuesArray[0].InvoicingMethod = "InvoicingMethod_0";
*		valuesArray[0].CustQuotationNumber = "CustQuotationNumber_0";
*		valuesArray[0].CustDateDeliveryExpected = "CustDateDeliveryExpected_0";
*		valuesArray[0].DatePricesApplied = "DatePricesApplied_0";
*		valuesArray[0].isDeleted = 0;
*		valuesArray[0].Validity = "Validity_0";
*		valuesArray[0].issenttojde = true;
*		valuesArray[0].reviewComment = "reviewComment_0";
*		valuesArray[0].OrderPDF = "OrderPDF_0";
*		valuesArray[0].ApplicationVersion = "ApplicationVersion_0";
*		valuesArray[0].QuotationCategory = "QuotationCategory_0";
*		valuesArray[0].DOCO = 0;
*		valuesArray[0].isArchive = true;
*		valuesArray[0].PtdToTreat = true;
*		valuesArray[1] = {};
*		valuesArray[1].QuotationNumber = "QuotationNumber_1";
*		valuesArray[1].QuotationVersion = 1;
*		valuesArray[1].QuotationMaster = 1;
*		valuesArray[1].LinkedQuotationid = 1;
*		valuesArray[1].Customerid = 1;
*		valuesArray[1].CustomerCopyid = 1;
*		valuesArray[1].Type = "Type_1";
*		valuesArray[1].SubType = "SubType_1";
*		valuesArray[1].Status = "Status_1";
*		valuesArray[1].Employeeid = 1;
*		valuesArray[1].Flow = "Flow_1";
*		valuesArray[1].AgencyId = 1;
*		valuesArray[1].AgencyType = "AgencyType_1";
*		valuesArray[1].TotalAmount = 1;
*		valuesArray[1].DiscountType = "DiscountType_1";
*		valuesArray[1].DiscountAmount = 1;
*		valuesArray[1].DiscountPercentage = 1;
*		valuesArray[1].TotalAmountDiscounted = 1;
*		valuesArray[1].TVAAmount = 1;
*		valuesArray[1].TotalAmountWithTVA = 1;
*		valuesArray[1].DateCreated = "DateCreated_1";
*		valuesArray[1].DateUpdated = "DateUpdated_1";
*		valuesArray[1].ApprovalsGenerated = true;
*		valuesArray[1].DateRelaunched = "DateRelaunched_1";
*		valuesArray[1].DateOrderExpected = "DateOrderExpected_1";
*		valuesArray[1].DatePrinted = "DatePrinted_1";
*		valuesArray[1].DateOrdered = "DateOrdered_1";
*		valuesArray[1].Probability = "Probability_1";
*		valuesArray[1].Source = "Source_1";
*		valuesArray[1].InvoicingMethod = "InvoicingMethod_1";
*		valuesArray[1].CustQuotationNumber = "CustQuotationNumber_1";
*		valuesArray[1].CustDateDeliveryExpected = "CustDateDeliveryExpected_1";
*		valuesArray[1].DatePricesApplied = "DatePricesApplied_1";
*		valuesArray[1].isDeleted = 1;
*		valuesArray[1].Validity = "Validity_1";
*		valuesArray[1].issenttojde = true;
*		valuesArray[1].reviewComment = "reviewComment_1";
*		valuesArray[1].OrderPDF = "OrderPDF_1";
*		valuesArray[1].ApplicationVersion = "ApplicationVersion_1";
*		valuesArray[1].QuotationCategory = "QuotationCategory_1";
*		valuesArray[1].DOCO = 1;
*		valuesArray[1].isArchive = true;
*		valuesArray[1].PtdToTreat = true;
*		valuesArray[2] = {};
*		valuesArray[2].QuotationNumber = "QuotationNumber_2";
*		valuesArray[2].QuotationVersion = 2;
*		valuesArray[2].QuotationMaster = 2;
*		valuesArray[2].LinkedQuotationid = 2;
*		valuesArray[2].Customerid = 2;
*		valuesArray[2].CustomerCopyid = 2;
*		valuesArray[2].Type = "Type_2";
*		valuesArray[2].SubType = "SubType_2";
*		valuesArray[2].Status = "Status_2";
*		valuesArray[2].Employeeid = 2;
*		valuesArray[2].Flow = "Flow_2";
*		valuesArray[2].AgencyId = 2;
*		valuesArray[2].AgencyType = "AgencyType_2";
*		valuesArray[2].TotalAmount = 2;
*		valuesArray[2].DiscountType = "DiscountType_2";
*		valuesArray[2].DiscountAmount = 2;
*		valuesArray[2].DiscountPercentage = 2;
*		valuesArray[2].TotalAmountDiscounted = 2;
*		valuesArray[2].TVAAmount = 2;
*		valuesArray[2].TotalAmountWithTVA = 2;
*		valuesArray[2].DateCreated = "DateCreated_2";
*		valuesArray[2].DateUpdated = "DateUpdated_2";
*		valuesArray[2].ApprovalsGenerated = true;
*		valuesArray[2].DateRelaunched = "DateRelaunched_2";
*		valuesArray[2].DateOrderExpected = "DateOrderExpected_2";
*		valuesArray[2].DatePrinted = "DatePrinted_2";
*		valuesArray[2].DateOrdered = "DateOrdered_2";
*		valuesArray[2].Probability = "Probability_2";
*		valuesArray[2].Source = "Source_2";
*		valuesArray[2].InvoicingMethod = "InvoicingMethod_2";
*		valuesArray[2].CustQuotationNumber = "CustQuotationNumber_2";
*		valuesArray[2].CustDateDeliveryExpected = "CustDateDeliveryExpected_2";
*		valuesArray[2].DatePricesApplied = "DatePricesApplied_2";
*		valuesArray[2].isDeleted = 2;
*		valuesArray[2].Validity = "Validity_2";
*		valuesArray[2].issenttojde = true;
*		valuesArray[2].reviewComment = "reviewComment_2";
*		valuesArray[2].OrderPDF = "OrderPDF_2";
*		valuesArray[2].ApplicationVersion = "ApplicationVersion_2";
*		valuesArray[2].QuotationCategory = "QuotationCategory_2";
*		valuesArray[2].DOCO = 2;
*		valuesArray[2].isArchive = true;
*		valuesArray[2].PtdToTreat = true;
*		de.itgs.WorkOrders.Quotation.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.Quotation.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"Quotation",errorcallback,true)===false){
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
		sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = de.itgs.WorkOrders.Quotation.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates Quotation using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	de.itgs.WorkOrders.Quotation.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.Quotation.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(de.itgs.WorkOrders.Quotation.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"Quotation",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = de.itgs.WorkOrders.Quotation.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates Quotation(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"Quotation",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.Quotation.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = de.itgs.WorkOrders.Quotation.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, de.itgs.WorkOrders.Quotation.getPKTable());
	}
};

/************************************************************************************
* Updates Quotation(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.QuotationNumber = "QuotationNumber_updated0";
*		inputArray[0].changeSet.QuotationVersion = 0;
*		inputArray[0].changeSet.QuotationMaster = 0;
*		inputArray[0].changeSet.LinkedQuotationid = 0;
*		inputArray[0].whereClause = "where Quotationid = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.QuotationNumber = "QuotationNumber_updated1";
*		inputArray[1].changeSet.QuotationVersion = 1;
*		inputArray[1].changeSet.QuotationMaster = 1;
*		inputArray[1].changeSet.LinkedQuotationid = 1;
*		inputArray[1].whereClause = "where Quotationid = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.QuotationNumber = "QuotationNumber_updated2";
*		inputArray[2].changeSet.QuotationVersion = 2;
*		inputArray[2].changeSet.QuotationMaster = 2;
*		inputArray[2].changeSet.LinkedQuotationid = 2;
*		inputArray[2].whereClause = "where Quotationid = 2";
*		de.itgs.WorkOrders.Quotation.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.Quotation.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "mf_unitec_2_9_py";
	var tbname = "Quotation";
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
			if(kony.sync.attributeValidation(valuestable,"Quotation",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, de.itgs.WorkOrders.Quotation.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, de.itgs.WorkOrders.Quotation.getPKTable());
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
		sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = de.itgs.WorkOrders.Quotation.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes Quotation using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.deleteByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
de.itgs.WorkOrders.Quotation.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(de.itgs.WorkOrders.Quotation.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function QuotationTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.deleteByPK->Quotation_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationParagraph.removeCascade,"QuotationParagraph",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationGrid.removeCascade,"QuotationGrid",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationEmployee.removeCascade,"QuotationEmployee",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationSummaryLine.removeCascade,"QuotationSummaryLine",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationVAT.removeCascade,"QuotationVAT",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationHistory.removeCascade,"QuotationHistory",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationTransmission.removeCascade,"QuotationTransmission",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationWonSiteInfo.removeCascade,"QuotationWonSiteInfo",false, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("QuotationId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.RecommendationQuotations.removeCascade,"RecommendationQuotations",false, errorcallback, markForUpload, record, false)){
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
	
	function QuotationErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.Quotation.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function QuotationSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.Quotation.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, QuotationTransactionCallback, QuotationSuccessCallback, QuotationErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes Quotation(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. de.itgs.WorkOrders.Quotation.remove("where QuotationNumber like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
de.itgs.WorkOrders.Quotation.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Quotation_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationParagraph.removeCascade, "QuotationParagraph", true, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationGrid.removeCascade, "QuotationGrid", true, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationEmployee.removeCascade, "QuotationEmployee", true, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationSummaryLine.removeCascade, "QuotationSummaryLine", true, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationVAT.removeCascade, "QuotationVAT", true, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationHistory.removeCascade, "QuotationHistory", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationTransmission.removeCascade, "QuotationTransmission", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationWonSiteInfo.removeCascade, "QuotationWonSiteInfo", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("QuotationId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.RecommendationQuotations.removeCascade, "RecommendationQuotations", false, errorcallback, markForUpload, null, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Quotation_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.remove->Quotation_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Quotation_removeTransactioncallback, Quotation_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes Quotation using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(de.itgs.WorkOrders.Quotation.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function QuotationTransactionCallback(tx){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.removeDeviceInstanceByPK -> QuotationTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationParagraph.removeCascade,"QuotationParagraph",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationGrid.removeCascade,"QuotationGrid",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationEmployee.removeCascade,"QuotationEmployee",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationSummaryLine.removeCascade,"QuotationSummaryLine",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationVAT.removeCascade,"QuotationVAT",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationHistory.removeCascade,"QuotationHistory",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationTransmission.removeCascade,"QuotationTransmission",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.QuotationWonSiteInfo.removeCascade,"QuotationWonSiteInfo",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("QuotationId");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", de.itgs.WorkOrders.RecommendationQuotations.removeCascade,"RecommendationQuotations",false, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function QuotationErrorCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.Quotation.removeDeviceInstanceByPK -> QuotationErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function QuotationSuccessCallback(){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.removeDeviceInstanceByPK -> QuotationSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.Quotation.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, QuotationTransactionCallback, QuotationSuccessCallback, QuotationErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes Quotation(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
de.itgs.WorkOrders.Quotation.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Quotation_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationParagraph.removeCascade, "QuotationParagraph", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationGrid.removeCascade, "QuotationGrid", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationEmployee.removeCascade, "QuotationEmployee", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationSummaryLine.removeCascade, "QuotationSummaryLine", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationVAT.removeCascade, "QuotationVAT", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationHistory.removeCascade, "QuotationHistory", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationTransmission.removeCascade, "QuotationTransmission", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationWonSiteInfo.removeCascade, "QuotationWonSiteInfo", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("QuotationId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.RecommendationQuotations.removeCascade, "RecommendationQuotations", false, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Quotation_removeSuccess(){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.remove->Quotation_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Quotation_removeTransactioncallback, Quotation_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves Quotation using primary key from the local Database. 
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.Quotation.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getAllDetailsByPK-> success callback function");
		successcallback(de.itgs.WorkOrders.Quotation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves Quotation(s) using where clause from the local Database. 
* e.g. de.itgs.WorkOrders.Quotation.find("where QuotationNumber like 'A%'", successcallback,errorcallback);
*************************************************************************************/
de.itgs.WorkOrders.Quotation.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.Quotation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Quotation with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.markForUploadbyPK(pks, successcallback, errorcallback);
};
de.itgs.WorkOrders.Quotation.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(de.itgs.WorkOrders.Quotation.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of Quotation matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering de.itgs.WorkOrders.Quotation.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of Quotation pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.Quotation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Quotation pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.Quotation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Quotation deferred for upload.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
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
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, de.itgs.WorkOrders.Quotation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Quotation in local database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.Quotation.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to Quotation's record with given primary key in local 
* database to last synced state
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	var wcs = [];
	if(de.itgs.WorkOrders.Quotation.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering de.itgs.WorkOrders.Quotation.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether Quotation's record  
* with given primary key got deferred in last sync
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.Quotation.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether Quotation's record  
* with given primary key is pending for upload
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  de.itgs.WorkOrders.Quotation.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	var wcs = [] ;
	var flag;
	if(de.itgs.WorkOrders.Quotation.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering de.itgs.WorkOrders.Quotation.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of QuotationParagraph related to Quotation
* with given Quotationid from local database.
*************************************************************************************/


de.itgs.WorkOrders.Quotation.prototype.getQuotationParagraphWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getQuotationParagraphWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getQuotationParagraphWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getQuotationParagraphWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getQuotationParagraphWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getQuotationParagraphWithQuotationid",  "relationship", errorcallback)){
		return;
	}	
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].Quotationid;
			wcs.push({key:"Quotationid", value:targetKey});
			

			var tbname = "QuotationParagraph"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.QuotationParagraph.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.QuotationParagraph();
				obj.QuotationParagraphid = res[i].QuotationParagraphid;
				obj.Quotationid = res[i].Quotationid;
				obj.SubSiteid = res[i].SubSiteid;
				obj.Description = res[i].Description;
				obj.DateCreated = res[i].DateCreated;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.Chapter = res[i].Chapter;
				obj.Qtype = res[i].Qtype;
				obj.Qsubtype = res[i].Qsubtype;
				obj.Customerid = res[i].Customerid;
				obj.ParagraphOrder = res[i].ParagraphOrder;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of QuotationParagraph related to Quotation
* with given Quotationid from local database.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationParagraphWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationParagraphWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getCountOfQuotationParagraphWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getCountOfQuotationParagraphWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getCountOfQuotationParagraphWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getCountOfQuotationParagraphWithQuotationid",  "relationship", errorcallback)){
		return;
	}
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].Quotationid;
				targetAttributes.push(Quotationid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"Quotationid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"Quotationid", value:targetKey});
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
		   de.itgs.WorkOrders.QuotationParagraph.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of QuotationGrid related to Quotation
* with given Quotationid from local database.
*************************************************************************************/


de.itgs.WorkOrders.Quotation.prototype.getQuotationGridWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getQuotationGridWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getQuotationGridWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getQuotationGridWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getQuotationGridWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getQuotationGridWithQuotationid",  "relationship", errorcallback)){
		return;
	}	
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].Quotationid;
			wcs.push({key:"Quotationid", value:targetKey});
			

			var tbname = "QuotationGrid"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.QuotationGrid.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.QuotationGrid();
				obj.QuotationGridid = res[i].QuotationGridid;
				obj.Quotationid = res[i].Quotationid;
				obj.Family = res[i].Family;
				obj.SubFamily = res[i].SubFamily;
				obj.FamilyText = res[i].FamilyText;
				obj.SubFamilyText = res[i].SubFamilyText;
				obj.Grid = res[i].Grid;
				obj.Percentage = res[i].Percentage;
				obj.Allowed = res[i].Allowed;
				obj.TariffContractId = res[i].TariffContractId;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of QuotationGrid related to Quotation
* with given Quotationid from local database.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationGridWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationGridWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getCountOfQuotationGridWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getCountOfQuotationGridWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getCountOfQuotationGridWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getCountOfQuotationGridWithQuotationid",  "relationship", errorcallback)){
		return;
	}
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].Quotationid;
				targetAttributes.push(Quotationid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"Quotationid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"Quotationid", value:targetKey});
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
		   de.itgs.WorkOrders.QuotationGrid.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of QuotationEmployee related to Quotation
* with given Quotationid from local database.
*************************************************************************************/


de.itgs.WorkOrders.Quotation.prototype.getQuotationEmployeeWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getQuotationEmployeeWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getQuotationEmployeeWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getQuotationEmployeeWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getQuotationEmployeeWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getQuotationEmployeeWithQuotationid",  "relationship", errorcallback)){
		return;
	}	
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].Quotationid;
			wcs.push({key:"Quotationid", value:targetKey});
			

			var tbname = "QuotationEmployee"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.QuotationEmployee.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.QuotationEmployee();
				obj.QuotationEmployeeid = res[i].QuotationEmployeeid;
				obj.Quotationid = res[i].Quotationid;
				obj.Chapter = res[i].Chapter;
				obj.Siteid = res[i].Siteid;
				obj.EmployeeType = res[i].EmployeeType;
				obj.EmployeeAN8 = res[i].EmployeeAN8;
				obj.PrincipalEmployee = res[i].PrincipalEmployee;
				obj.IsSource = res[i].IsSource;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of QuotationEmployee related to Quotation
* with given Quotationid from local database.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationEmployeeWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationEmployeeWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getCountOfQuotationEmployeeWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getCountOfQuotationEmployeeWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getCountOfQuotationEmployeeWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getCountOfQuotationEmployeeWithQuotationid",  "relationship", errorcallback)){
		return;
	}
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].Quotationid;
				targetAttributes.push(Quotationid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"Quotationid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"Quotationid", value:targetKey});
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
		   de.itgs.WorkOrders.QuotationEmployee.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of QuotationSummaryLine related to Quotation
* with given Quotationid from local database.
*************************************************************************************/


de.itgs.WorkOrders.Quotation.prototype.getQuotationSummaryLineWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getQuotationSummaryLineWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getQuotationSummaryLineWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getQuotationSummaryLineWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getQuotationSummaryLineWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getQuotationSummaryLineWithQuotationid",  "relationship", errorcallback)){
		return;
	}	
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].Quotationid;
			wcs.push({key:"Quotationid", value:targetKey});
			

			var tbname = "QuotationSummaryLine"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.QuotationSummaryLine.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.QuotationSummaryLine();
				obj.QuotationSummaryLineid = res[i].QuotationSummaryLineid;
				obj.Quotationid = res[i].Quotationid;
				obj.Productid = res[i].Productid;
				obj.ProductDescription = res[i].ProductDescription;
				obj.FamilyText = res[i].FamilyText;
				obj.SubfamilyText = res[i].SubfamilyText;
				obj.Activity = res[i].Activity;
				obj.PricingFamily = res[i].PricingFamily;
				obj.PricingSubFamily = res[i].PricingSubFamily;
				obj.QuantityTotal = res[i].QuantityTotal;
				obj.QuantityAdditional = res[i].QuantityAdditional;
				obj.QuantityReplaced = res[i].QuantityReplaced;
				obj.BasePrice = res[i].BasePrice;
				obj.UnitPrice = res[i].UnitPrice;
				obj.TaplaPrice = res[i].TaplaPrice;
				obj.TaproPrice = res[i].TaproPrice;
				obj.Sortval = res[i].Sortval;
				obj.TotalPrice = res[i].TotalPrice;
				obj.DiscountedPrice = res[i].DiscountedPrice;
				obj.Discount = res[i].Discount;
				obj.VatPercentage = res[i].VatPercentage;
				obj.VatAmount = res[i].VatAmount;
				obj.PRP0 = res[i].PRP0;
				obj.PurchasePrice = res[i].PurchasePrice;
				obj.Price = res[i].Price;
				obj.Factor = res[i].Factor;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.Category = res[i].Category;
				obj.UnitDiscountedPrice = res[i].UnitDiscountedPrice;
				obj.TariffContractId = res[i].TariffContractId;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of QuotationSummaryLine related to Quotation
* with given Quotationid from local database.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationSummaryLineWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationSummaryLineWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getCountOfQuotationSummaryLineWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getCountOfQuotationSummaryLineWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getCountOfQuotationSummaryLineWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getCountOfQuotationSummaryLineWithQuotationid",  "relationship", errorcallback)){
		return;
	}
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].Quotationid;
				targetAttributes.push(Quotationid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"Quotationid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"Quotationid", value:targetKey});
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
		   de.itgs.WorkOrders.QuotationSummaryLine.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of QuotationVAT related to Quotation
* with given Quotationid from local database.
*************************************************************************************/


de.itgs.WorkOrders.Quotation.prototype.getQuotationVATWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getQuotationVATWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getQuotationVATWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getQuotationVATWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getQuotationVATWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getQuotationVATWithQuotationid",  "relationship", errorcallback)){
		return;
	}	
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].Quotationid;
			wcs.push({key:"Quotationid", value:targetKey});
			

			var tbname = "QuotationVAT"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.QuotationVAT.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.QuotationVAT();
				obj.QuotationVATid = res[i].QuotationVATid;
				obj.Quotationid = res[i].Quotationid;
				obj.VATpercentage = res[i].VATpercentage;
				obj.VATamount = res[i].VATamount;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of QuotationVAT related to Quotation
* with given Quotationid from local database.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationVATWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationVATWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getCountOfQuotationVATWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getCountOfQuotationVATWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getCountOfQuotationVATWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getCountOfQuotationVATWithQuotationid",  "relationship", errorcallback)){
		return;
	}
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].Quotationid;
				targetAttributes.push(Quotationid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"Quotationid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"Quotationid", value:targetKey});
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
		   de.itgs.WorkOrders.QuotationVAT.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of QuotationHistory related to Quotation
* with given Quotationid from local database.
*************************************************************************************/


de.itgs.WorkOrders.Quotation.prototype.getQuotationHistoryWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getQuotationHistoryWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getQuotationHistoryWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getQuotationHistoryWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getQuotationHistoryWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getQuotationHistoryWithQuotationid",  "relationship", errorcallback)){
		return;
	}	
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].Quotationid;
			wcs.push({key:"Quotationid", value:targetKey});
			

			var tbname = "QuotationHistory"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.QuotationHistory.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.QuotationHistory();
				obj.QuotationHistoryid = res[i].QuotationHistoryid;
				obj.Quotationid = res[i].Quotationid;
				obj.Status = res[i].Status;
				obj.StatusDate = res[i].StatusDate;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.Userid = res[i].Userid;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of QuotationHistory related to Quotation
* with given Quotationid from local database.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationHistoryWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationHistoryWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getCountOfQuotationHistoryWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getCountOfQuotationHistoryWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getCountOfQuotationHistoryWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getCountOfQuotationHistoryWithQuotationid",  "relationship", errorcallback)){
		return;
	}
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].Quotationid;
				targetAttributes.push(Quotationid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"Quotationid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"Quotationid", value:targetKey});
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
		   de.itgs.WorkOrders.QuotationHistory.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of QuotationTransmission related to Quotation
* with given Quotationid from local database.
*************************************************************************************/


de.itgs.WorkOrders.Quotation.prototype.getQuotationTransmissionWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getQuotationTransmissionWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getQuotationTransmissionWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getQuotationTransmissionWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getQuotationTransmissionWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getQuotationTransmissionWithQuotationid",  "relationship", errorcallback)){
		return;
	}	
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].Quotationid;
			wcs.push({key:"Quotationid", value:targetKey});
			

			var tbname = "QuotationTransmission"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.QuotationTransmission.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.QuotationTransmission();
				obj.QuotationTransmissionid = res[i].QuotationTransmissionid;
				obj.Quotationid = res[i].Quotationid;
				obj.QuotationXML = res[i].QuotationXML;
				obj.TransmissionType = res[i].TransmissionType;
				obj.UserId = res[i].UserId;
				obj.StatusFlag = res[i].StatusFlag;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.Recipient = res[i].Recipient;
				obj.QuotationNumber = res[i].QuotationNumber;
				obj.QuotationVersion = res[i].QuotationVersion;
				obj.Sender = res[i].Sender;
				obj.BCC = res[i].BCC;
				obj.CC = res[i].CC;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of QuotationTransmission related to Quotation
* with given Quotationid from local database.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationTransmissionWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationTransmissionWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getCountOfQuotationTransmissionWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getCountOfQuotationTransmissionWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getCountOfQuotationTransmissionWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getCountOfQuotationTransmissionWithQuotationid",  "relationship", errorcallback)){
		return;
	}
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].Quotationid;
				targetAttributes.push(Quotationid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"Quotationid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"Quotationid", value:targetKey});
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
		   de.itgs.WorkOrders.QuotationTransmission.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of QuotationWonSiteInfo related to Quotation
* with given Quotationid from local database.
*************************************************************************************/


de.itgs.WorkOrders.Quotation.prototype.getQuotationWonSiteInfoWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getQuotationWonSiteInfoWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getQuotationWonSiteInfoWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getQuotationWonSiteInfoWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getQuotationWonSiteInfoWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getQuotationWonSiteInfoWithQuotationid",  "relationship", errorcallback)){
		return;
	}	
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].Quotationid;
			wcs.push({key:"Quotationid", value:targetKey});
			

			var tbname = "QuotationWonSiteInfo"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, de.itgs.WorkOrders.QuotationWonSiteInfo.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
				var obj = new de.itgs.WorkOrders.QuotationWonSiteInfo();
				obj.QuotationWonSiteInfoid = res[i].QuotationWonSiteInfoid;
				obj.Quotationid = res[i].Quotationid;
				obj.Siteid = res[i].Siteid;
				obj.AgencyWarehouse = res[i].AgencyWarehouse;
				obj.Technician = res[i].Technician;
				obj.AdditionalAddress = res[i].AdditionalAddress;
				obj.StockLocation = res[i].StockLocation;
				obj.DeliveryPhone = res[i].DeliveryPhone;
				obj.DeliveryDate = res[i].DeliveryDate;
				obj.Deliverycorporatename = res[i].Deliverycorporatename;
				obj.Deliverycorporatenameadd = res[i].Deliverycorporatenameadd;
				obj.Deliveryaddress1 = res[i].Deliveryaddress1;
				obj.Deliveryaddress2 = res[i].Deliveryaddress2;
				obj.Deliveryaddress3 = res[i].Deliveryaddress3;
				obj.Deliveryzipcode = res[i].Deliveryzipcode;
				obj.Deliverycity = res[i].Deliverycity;
				obj.Deliverycountry = res[i].Deliverycountry;
				obj.Deliverycedex = res[i].Deliverycedex;
				obj.StatusFlag = res[i].StatusFlag;
				obj.Comments = res[i].Comments;
				obj.SyncTimestamp = res[i].SyncTimestamp;
				obj.DeliveryContactid = res[i].DeliveryContactid;
				obj.InstallPhone = res[i].InstallPhone;
				obj.InstallContactId = res[i].InstallContactId;
				obj.chkDifferentDeliveryAddress = res[i].chkDifferentDeliveryAddress;
				obj.chkIdenticalAddress = res[i].chkIdenticalAddress;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of QuotationWonSiteInfo related to Quotation
* with given Quotationid from local database.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationWonSiteInfoWithQuotationid  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getCountOfQuotationWonSiteInfoWithQuotationid function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getCountOfQuotationWonSiteInfoWithQuotationid(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getCountOfQuotationWonSiteInfoWithQuotationid = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getCountOfQuotationWonSiteInfoWithQuotationid function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getCountOfQuotationWonSiteInfoWithQuotationid",  "relationship", errorcallback)){
		return;
	}
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].Quotationid;
				targetAttributes.push(Quotationid);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"Quotationid", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"Quotationid", value:targetKey});
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
		   de.itgs.WorkOrders.QuotationWonSiteInfo.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of RecommendationQuotations related to Quotation
* with given QuotationId from local database.
*************************************************************************************/


de.itgs.WorkOrders.Quotation.prototype.getRecommendationQuotationsWithQuotationId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getRecommendationQuotationsWithQuotationId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getRecommendationQuotationsWithQuotationId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getRecommendationQuotationsWithQuotationId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getRecommendationQuotationsWithQuotationId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getRecommendationQuotationsWithQuotationId",  "relationship", errorcallback)){
		return;
	}	
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].Quotationid;
			wcs.push({key:"QuotationId", value:targetKey});
			

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
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of RecommendationQuotations related to Quotation
* with given QuotationId from local database.
*************************************************************************************/
de.itgs.WorkOrders.Quotation.prototype.getCountOfRecommendationQuotationsWithQuotationId  = function(successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getCountOfRecommendationQuotationsWithQuotationId function");
	var pks = this.getPKTable();
	de.itgs.WorkOrders.Quotation.getCountOfRecommendationQuotationsWithQuotationId(pks,successcallback,errorcallback);
};
de.itgs.WorkOrders.Quotation.getCountOfRecommendationQuotationsWithQuotationId = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getCountOfRecommendationQuotationsWithQuotationId function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "de.itgs.WorkOrders.Quotation.getCountOfRecommendationQuotationsWithQuotationId",  "relationship", errorcallback)){
		return;
	}
	function Quotation_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].Quotationid;
				targetAttributes.push(QuotationId);
				if(kony.type(targetKey)==="string") {
					wcs.push({key:"QuotationId", value:"'"+targetKey+"'"});	
				}else{
					wcs.push({key:"QuotationId", value:targetKey});
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
	
	de.itgs.WorkOrders.Quotation.getAllDetailsByPK(pks, Quotation_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
de.itgs.WorkOrders.Quotation.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.removeCascade function");
	var tbname = de.itgs.WorkOrders.Quotation.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationParagraph.removeCascade, "QuotationParagraph", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationGrid.removeCascade, "QuotationGrid", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationEmployee.removeCascade, "QuotationEmployee", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationSummaryLine.removeCascade, "QuotationSummaryLine", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationVAT.removeCascade, "QuotationVAT", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationHistory.removeCascade, "QuotationHistory", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationTransmission.removeCascade, "QuotationTransmission", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("Quotationid");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.QuotationWonSiteInfo.removeCascade, "QuotationWonSiteInfo", false, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("Quotationid");
			targetAttributes.push("QuotationId");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, de.itgs.WorkOrders.RecommendationQuotations.removeCascade, "RecommendationQuotations", false, errorcallback, markForUpload, null, isLocal)){
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


de.itgs.WorkOrders.Quotation.convertTableToObject = function(res){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.convertTableToObject function");
	objMap = [];
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
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

de.itgs.WorkOrders.Quotation.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.filterAttributes function");
	var attributeTable = {};
	attributeTable.Quotationid = "Quotationid";
	attributeTable.QuotationNumber = "QuotationNumber";
	attributeTable.QuotationVersion = "QuotationVersion";
	attributeTable.QuotationMaster = "QuotationMaster";
	attributeTable.LinkedQuotationid = "LinkedQuotationid";
	attributeTable.Customerid = "Customerid";
	attributeTable.CustomerCopyid = "CustomerCopyid";
	attributeTable.Type = "Type";
	attributeTable.SubType = "SubType";
	attributeTable.Status = "Status";
	attributeTable.Employeeid = "Employeeid";
	attributeTable.Flow = "Flow";
	attributeTable.AgencyId = "AgencyId";
	attributeTable.AgencyType = "AgencyType";
	attributeTable.TotalAmount = "TotalAmount";
	attributeTable.DiscountType = "DiscountType";
	attributeTable.DiscountAmount = "DiscountAmount";
	attributeTable.DiscountPercentage = "DiscountPercentage";
	attributeTable.TotalAmountDiscounted = "TotalAmountDiscounted";
	attributeTable.TVAAmount = "TVAAmount";
	attributeTable.TotalAmountWithTVA = "TotalAmountWithTVA";
	attributeTable.DateCreated = "DateCreated";
	attributeTable.DateUpdated = "DateUpdated";
	attributeTable.ApprovalsGenerated = "ApprovalsGenerated";
	attributeTable.DateRelaunched = "DateRelaunched";
	attributeTable.DateOrderExpected = "DateOrderExpected";
	attributeTable.DatePrinted = "DatePrinted";
	attributeTable.DateOrdered = "DateOrdered";
	attributeTable.Probability = "Probability";
	attributeTable.Source = "Source";
	attributeTable.InvoicingMethod = "InvoicingMethod";
	attributeTable.CustQuotationNumber = "CustQuotationNumber";
	attributeTable.CustDateDeliveryExpected = "CustDateDeliveryExpected";
	attributeTable.DatePricesApplied = "DatePricesApplied";
	attributeTable.isDeleted = "isDeleted";
	attributeTable.Validity = "Validity";
	attributeTable.issenttojde = "issenttojde";
	attributeTable.reviewComment = "reviewComment";
	attributeTable.OrderPDF = "OrderPDF";
	attributeTable.ApplicationVersion = "ApplicationVersion";
	attributeTable.QuotationCategory = "QuotationCategory";
	attributeTable.DOCO = "DOCO";
	attributeTable.isArchive = "isArchive";
	attributeTable.PtdToTreat = "PtdToTreat";

	var PKTable = {};
	PKTable.Quotationid = {}
	PKTable.Quotationid.name = "Quotationid";
	PKTable.Quotationid.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject Quotation. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject Quotation. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject Quotation. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

de.itgs.WorkOrders.Quotation.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = de.itgs.WorkOrders.Quotation.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

de.itgs.WorkOrders.Quotation.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.Quotationid = this.Quotationid;
	}
	valuesTable.QuotationNumber = this.QuotationNumber;
	valuesTable.QuotationVersion = this.QuotationVersion;
	valuesTable.QuotationMaster = this.QuotationMaster;
	valuesTable.LinkedQuotationid = this.LinkedQuotationid;
	valuesTable.Customerid = this.Customerid;
	valuesTable.CustomerCopyid = this.CustomerCopyid;
	valuesTable.Type = this.Type;
	valuesTable.SubType = this.SubType;
	valuesTable.Status = this.Status;
	valuesTable.Employeeid = this.Employeeid;
	valuesTable.Flow = this.Flow;
	valuesTable.AgencyId = this.AgencyId;
	valuesTable.AgencyType = this.AgencyType;
	valuesTable.TotalAmount = this.TotalAmount;
	valuesTable.DiscountType = this.DiscountType;
	valuesTable.DiscountAmount = this.DiscountAmount;
	valuesTable.DiscountPercentage = this.DiscountPercentage;
	valuesTable.TotalAmountDiscounted = this.TotalAmountDiscounted;
	valuesTable.TVAAmount = this.TVAAmount;
	valuesTable.TotalAmountWithTVA = this.TotalAmountWithTVA;
	valuesTable.DateCreated = this.DateCreated;
	valuesTable.DateUpdated = this.DateUpdated;
	valuesTable.ApprovalsGenerated = this.ApprovalsGenerated;
	valuesTable.DateRelaunched = this.DateRelaunched;
	valuesTable.DateOrderExpected = this.DateOrderExpected;
	valuesTable.DatePrinted = this.DatePrinted;
	valuesTable.DateOrdered = this.DateOrdered;
	valuesTable.Probability = this.Probability;
	valuesTable.Source = this.Source;
	valuesTable.InvoicingMethod = this.InvoicingMethod;
	valuesTable.CustQuotationNumber = this.CustQuotationNumber;
	valuesTable.CustDateDeliveryExpected = this.CustDateDeliveryExpected;
	valuesTable.DatePricesApplied = this.DatePricesApplied;
	valuesTable.isDeleted = this.isDeleted;
	valuesTable.Validity = this.Validity;
	valuesTable.issenttojde = this.issenttojde;
	valuesTable.reviewComment = this.reviewComment;
	valuesTable.OrderPDF = this.OrderPDF;
	valuesTable.ApplicationVersion = this.ApplicationVersion;
	valuesTable.QuotationCategory = this.QuotationCategory;
	valuesTable.DOCO = this.DOCO;
	valuesTable.isArchive = this.isArchive;
	valuesTable.PtdToTreat = this.PtdToTreat;
	return valuesTable;
};

de.itgs.WorkOrders.Quotation.prototype.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.prototype.getPKTable function");
	var pkTable = {};
	pkTable.Quotationid = {key:"Quotationid",value:this.Quotationid};
	return pkTable;
};

de.itgs.WorkOrders.Quotation.getPKTable = function(){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getPKTable function");
	var pkTable = [];
	pkTable.push("Quotationid");
	return pkTable;
};

de.itgs.WorkOrders.Quotation.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key Quotationid not specified in  " + opName + "  an item in Quotation");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Quotationid",opName,"Quotation")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.Quotationid)){
			if(!kony.sync.isNull(pks.Quotationid.value)){
				wc.key = "Quotationid";
				wc.value = pks.Quotationid.value;
			}
			else{
				wc.key = "Quotationid";
				wc.value = pks.Quotationid;
			}
		}else{
			sync.log.error("Primary Key Quotationid not specified in  " + opName + "  an item in Quotation");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Quotationid",opName,"Quotation")));
			return false;
		}
	}
	else{
		wc.key = "Quotationid";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};

de.itgs.WorkOrders.Quotation.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.validateNull function");
	if(valuestable.QuotationNumber!==undefined){
		if(kony.sync.isNull(valuestable.QuotationNumber) || kony.sync.isEmptyString(valuestable.QuotationNumber)){
			sync.log.error("Mandatory attribute QuotationNumber is missing for the SyncObject Quotation.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "QuotationNumber")));
			return false;
		}
	}
	if(valuestable.QuotationVersion!==undefined){
		if(kony.sync.isNull(valuestable.QuotationVersion) || kony.sync.isEmptyString(valuestable.QuotationVersion)){
			sync.log.error("Mandatory attribute QuotationVersion is missing for the SyncObject Quotation.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "QuotationVersion")));
			return false;
		}
	}
	if(valuestable.QuotationMaster!==undefined){
		if(kony.sync.isNull(valuestable.QuotationMaster) || kony.sync.isEmptyString(valuestable.QuotationMaster)){
			sync.log.error("Mandatory attribute QuotationMaster is missing for the SyncObject Quotation.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "QuotationMaster")));
			return false;
		}
	}
	if(valuestable.Customerid!==undefined){
		if(kony.sync.isNull(valuestable.Customerid) || kony.sync.isEmptyString(valuestable.Customerid)){
			sync.log.error("Mandatory attribute Customerid is missing for the SyncObject Quotation.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "Customerid")));
			return false;
		}
	}
	if(valuestable.Type!==undefined){
		if(kony.sync.isNull(valuestable.Type) || kony.sync.isEmptyString(valuestable.Type)){
			sync.log.error("Mandatory attribute Type is missing for the SyncObject Quotation.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "Type")));
			return false;
		}
	}
	if(valuestable.Status!==undefined){
		if(kony.sync.isNull(valuestable.Status) || kony.sync.isEmptyString(valuestable.Status)){
			sync.log.error("Mandatory attribute Status is missing for the SyncObject Quotation.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "Status")));
			return false;
		}
	}
	if(valuestable.Employeeid!==undefined){
		if(kony.sync.isNull(valuestable.Employeeid) || kony.sync.isEmptyString(valuestable.Employeeid)){
			sync.log.error("Mandatory attribute Employeeid is missing for the SyncObject Quotation.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "Employeeid")));
			return false;
		}
	}
	if(valuestable.Flow!==undefined){
		if(kony.sync.isNull(valuestable.Flow) || kony.sync.isEmptyString(valuestable.Flow)){
			sync.log.error("Mandatory attribute Flow is missing for the SyncObject Quotation.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "Flow")));
			return false;
		}
	}
	if(valuestable.ApprovalsGenerated!==undefined){
		if(kony.sync.isNull(valuestable.ApprovalsGenerated) || kony.sync.isEmptyString(valuestable.ApprovalsGenerated)){
			sync.log.error("Mandatory attribute ApprovalsGenerated is missing for the SyncObject Quotation.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "ApprovalsGenerated")));
			return false;
		}
	}
	if(valuestable.isDeleted!==undefined){
		if(kony.sync.isNull(valuestable.isDeleted) || kony.sync.isEmptyString(valuestable.isDeleted)){
			sync.log.error("Mandatory attribute isDeleted is missing for the SyncObject Quotation.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "isDeleted")));
			return false;
		}
	}
	return true;
};

de.itgs.WorkOrders.Quotation.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.validateNullInsert function");
	if(kony.sync.isNull(valuestable.QuotationNumber) || kony.sync.isEmptyString(valuestable.QuotationNumber)){
		sync.log.error("Mandatory attribute QuotationNumber is missing for the SyncObject Quotation.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "QuotationNumber")));
		return false;
	}
	if(kony.sync.isNull(valuestable.QuotationVersion) || kony.sync.isEmptyString(valuestable.QuotationVersion)){
		sync.log.error("Mandatory attribute QuotationVersion is missing for the SyncObject Quotation.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "QuotationVersion")));
		return false;
	}
	if(kony.sync.isNull(valuestable.QuotationMaster) || kony.sync.isEmptyString(valuestable.QuotationMaster)){
		sync.log.error("Mandatory attribute QuotationMaster is missing for the SyncObject Quotation.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "QuotationMaster")));
		return false;
	}
	if(kony.sync.isNull(valuestable.Customerid) || kony.sync.isEmptyString(valuestable.Customerid)){
		sync.log.error("Mandatory attribute Customerid is missing for the SyncObject Quotation.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "Customerid")));
		return false;
	}
	if(kony.sync.isNull(valuestable.Type) || kony.sync.isEmptyString(valuestable.Type)){
		sync.log.error("Mandatory attribute Type is missing for the SyncObject Quotation.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "Type")));
		return false;
	}
	if(kony.sync.isNull(valuestable.Status) || kony.sync.isEmptyString(valuestable.Status)){
		sync.log.error("Mandatory attribute Status is missing for the SyncObject Quotation.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "Status")));
		return false;
	}
	if(kony.sync.isNull(valuestable.Employeeid) || kony.sync.isEmptyString(valuestable.Employeeid)){
		sync.log.error("Mandatory attribute Employeeid is missing for the SyncObject Quotation.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "Employeeid")));
		return false;
	}
	if(kony.sync.isNull(valuestable.Flow) || kony.sync.isEmptyString(valuestable.Flow)){
		sync.log.error("Mandatory attribute Flow is missing for the SyncObject Quotation.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "Flow")));
		return false;
	}
	if(kony.sync.isNull(valuestable.ApprovalsGenerated) || kony.sync.isEmptyString(valuestable.ApprovalsGenerated)){
		sync.log.error("Mandatory attribute ApprovalsGenerated is missing for the SyncObject Quotation.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "ApprovalsGenerated")));
		return false;
	}
	if(kony.sync.isNull(valuestable.isDeleted) || kony.sync.isEmptyString(valuestable.isDeleted)){
		sync.log.error("Mandatory attribute isDeleted is missing for the SyncObject Quotation.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Quotation", "isDeleted")));
		return false;
	}
	return true;
};

de.itgs.WorkOrders.Quotation.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering de.itgs.WorkOrders.Quotation.getRelationshipMap function");
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
	

	return relationshipMap;
};


de.itgs.WorkOrders.Quotation.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

de.itgs.WorkOrders.Quotation.getTableName = function(){
	return "Quotation";
};




// **********************************End Quotation's helper methods************************