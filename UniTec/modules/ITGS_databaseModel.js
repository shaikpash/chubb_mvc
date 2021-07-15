databaseModel = {
	isGroupedRequest : false,
	openedSequences : 0,
	dbName : null
};
databaseModel.context = {
	sql: null
};

databaseModel.openDBExchange = function(msg) {
	if (databaseModel.isGroupedRequest) {
		databaseModel.openedSequences++;
		return; // db already set for exchange, nothing to do
	}

	showSyncLoadingScreen(msg);
	databaseModel.isGroupedRequest = true;
	databaseModel.openedSequences = 1;
	databaseModel.dbName = kony.sync.getDBName();
};

databaseModel.closeDBExchange = function() {
	if (!databaseModel.isGroupedRequest) return; // db already closed, nothing to do

	if(databaseModel.openedSequences > 1) {
		databaseModel.openedSequences--;
		return;
	}
	
	function DBExchangeSuccessClosed() {
		databaseModel.isGroupedRequest = false;
		databaseModel.dbName = null;
		databaseModel.openedSequences = 0;
		dismissSyncLoadingScreen();
	
	};
	kony.sync.verifyAndCallClosure(DBExchangeSuccessClosed);
};

databaseModel.getDbConnection = function () {

	databaseModel.getDbConnectionCBe = function (res) {
		popupModel.showPopError("error opening db" + JSON.stringify(res));
	}

	var dbname = kony.sync.getDBName();
	return kony.sync.getConnectionOnly(dbname, dbname, databaseModel.getDbConnectionCBe);
}

databaseModel.createTableIndexes = function (dbConnection, indexes, cb) {

	databaseModel.createTableIndexesImpl = function (transaction) {
		for (var i = 0; i < indexes.length; i ++) {
			databaseModel.createTableIndex(transaction, indexes[i]);
		}
	}

	kony.sync.startTransaction(	dbConnection, 
								databaseModel.createTableIndexesImpl, 
								(cb)?cb:callBackModel.emptyCB, 
								callBackModel.sqlErrorCB);
}

databaseModel.createTableIndex = function (transaction, index) {
	callBackModel.context.sql = " CREATE " + ((!validationModel.isNull(index.isUnique) && index.isUnique) ? "UNIQUE " : " ") + 
								" INDEX IF NOT EXISTS " + index.name + 
								" ON " + index.table + 
								" (" + index.column + ")";

	kony.sync.executeSql(transaction, callBackModel.context.sql, null);	
}

databaseModel.createUniTecTableIndexes = function (cb) {
	var indexes = [];
	
	indexes.push({name: 'contract_idx0', table: 'contract', column: 'id', isUnique: true});
	indexes.push({name: 'contract_idx1', table: 'contract', column: 'doco', isUnique: false});
	indexes.push({name: 'contract_idx2', table: 'contract', column: 'coch', isUnique: false});
	indexes.push({name: 'contract_idx3', table: 'contract', column: 'lnid', isUnique: false});
	indexes.push({name: 'contract_idx4', table: 'contract', column: 'numb', isUnique: false});
	
	indexes.push({name: 'item_idx0', table: 'item', column: 'id', isUnique: true});
	indexes.push({name: 'item_idx1', table: 'item', column: 'itm', isUnique: false});
	indexes.push({name: 'item_idx2', table: 'item', column: 'usualCode', isUnique: false});
	indexes.push({name: 'item_idx3', table: 'item', column: 'prp0', isUnique: false});
	indexes.push({name: 'item_idx4', table: 'item', column: 'srp0, srp1', isUnique: false});
	
	indexes.push({name: 'itemcomp_idx0', table: 'itemComposition', column: 'id', isUnique: true});
	indexes.push({name: 'itemcomp_idx1', table: 'itemComposition', column: 'tbm', isUnique: false});
	indexes.push({name: 'itemcomp_idx2', table: 'itemComposition', column: 'compoundItm', isUnique: false});
	indexes.push({name: 'itemcomp_idx3', table: 'itemComposition', column: 'componentItm', isUnique: false});
	indexes.push({name: 'itemcomp_idx4', table: 'itemComposition', column: 'optionType', isUnique: false});
	indexes.push({name: 'itemcomp_idx5', table: 'itemComposition', column: 'compoundITM, TBM', isUnique: false});
	
	indexes.push({name: 'cib_idx0', table: 'customerInstalledBase', column: 'id', isUnique: true});
	indexes.push({name: 'cib_idx1', table: 'customerInstalledBase', column: 'numb', isUnique: false});
	indexes.push({name: 'cib_idx2', table: 'customerInstalledBase', column: 'n001', isUnique: false});
	indexes.push({name: 'cib_idx3', table: 'customerInstalledBase', column: 'lotn', isUnique: false});
	indexes.push({name: 'cib_idx4', table: 'customerInstalledBase', column: 'itm', isUnique: false});
	indexes.push({name: 'cib_idx5', table: 'customerInstalledBase', column: 'doco', isUnique: false});
	indexes.push({name: 'cib_idx6', table: 'customerInstalledBase', column: 'ze02', isUnique: false});
	indexes.push({name: 'cib_idx7', table: 'customerInstalledBase', column: 'coch', isUnique: false});
	indexes.push({name: 'cib_idx8', table: 'customerInstalledBase', column: 'lnid', isUnique: false});
	indexes.push({name: 'cib_idx9', table: 'customerInstalledBase', column: 'Y56LIEU', isUnique: false});
	indexes.push({name: 'cib_idx10', table: 'customerInstalledBase', column: 'Y56ETAG', isUnique: false});
	indexes.push({name: 'cib_idx11', table: 'customerInstalledBase', column: 'Y56INDLA', isUnique: false});
	indexes.push({name: 'cib_idx12', table: 'customerInstalledBase', column: 'Y56EMPLA', isUnique: false});
	indexes.push({name: 'cib_idx13', table: 'customerInstalledBase', column: 'Y56ZONL', isUnique: false});

	indexes.push({name: 'cibc_idx0', table: 'customerInstalledBaseCharacteristic', column: 'id', isUnique: true});
	indexes.push({name: 'cibc_idx1', table: 'customerInstalledBaseCharacteristic', column: 'itmcat', isUnique: false});
	indexes.push({name: 'cibc_idx2', table: 'customerInstalledBaseCharacteristic', column: 'sdsc1', isUnique: false});
	indexes.push({name: 'cibc_idx3', table: 'customerInstalledBaseCharacteristic', column: 'itm', isUnique: false});
	indexes.push({name: 'cibc_idx4', table: 'customerInstalledBaseCharacteristic', column: 'uom', isUnique: false});

	indexes.push({name: 'ic_idx0', table: 'itemCharacteristics', column: 'id', isUnique: true});
	indexes.push({name: 'ic_idx1', table: 'itemCharacteristics', column: 'itmcat', isUnique: false});
	indexes.push({name: 'ic_idx2', table: 'itemCharacteristics', column: 'value', isUnique: false});
	indexes.push({name: 'ic_idx3', table: 'itemCharacteristics', column: 'itm', isUnique: false});
	indexes.push({name: 'ic_idx4', table: 'itemCharacteristics', column: 'measurementunit', isUnique: false});
	indexes.push({name: 'ic_idx5', table: 'itemCharacteristics', column: 'litm', isUnique: false});

	indexes.push({name: 'ic_idx6', table: 'itemCharacteristics', column: 'itmcat, litm, value', isUnique: false});

	indexes.push({name: 'f56bt_idx0', table: 'f56bt', column: 'id', isUnique: true});
	indexes.push({name: 'f56bt_idx1', table: 'f56bt', column: 'doco', isUnique: false});
	indexes.push({name: 'f56bt_idx2', table: 'f56bt', column: 'numb', isUnique: false});
	indexes.push({name: 'f56bt_idx3', table: 'f56bt', column: 'lotn', isUnique: false});
	indexes.push({name: 'f56bt_idx4', table: 'f56bt', column: 'typs', isUnique: false});
	indexes.push({name: 'f56bt_idx5', table: 'f56bt', column: 'wr01', isUnique: false});
	indexes.push({name: 'f56bt_idx6', table: 'f56bt', column: 'hrso', isUnique: false});
	indexes.push({name: 'f56bt_idx7', table: 'f56bt', column: 'drqj', isUnique: false});
	indexes.push({name: 'f56bt_idx8', table: 'f56bt', column: 'said', isUnique: false});
	indexes.push({name: 'f56bt_idx9', table: 'f56bt', column: 'doc', isUnique: false});
	indexes.push({name: 'f56bt_idx10', table: 'f56bt', column: 'coch', isUnique: false});
	indexes.push({name: 'f56bt_idx11', table: 'f56bt', column: 'lnid', isUnique: false});

	indexes.push({name: 'f56btdt_idx0', table: 'f56btdt', column: 'id', isUnique: true});
	indexes.push({name: 'f56btdt_idx1', table: 'f56btdt', column: 'doco', isUnique: false});
	indexes.push({name: 'f56btdt_idx2', table: 'f56btdt', column: 'n001', isUnique: false});
	indexes.push({name: 'f56btdt_idx3', table: 'f56btdt', column: 'litm', isUnique: false});
	indexes.push({name: 'f56btdt_idx4', table: 'f56btdt', column: 'ck01', isUnique: false});
	indexes.push({name: 'f56btdt_idx5', table: 'f56btdt', column: 'sparePartsId', isUnique: false});
	
	indexes.push({name: 'f56prm_idx0', table: 'f56prm', column: 'id', isUnique: true});
	indexes.push({name: 'f56prm_idx1', table: 'f56prm', column: 'rmk', isUnique: false});
	indexes.push({name: 'f56prm_idx2', table: 'f56prm', column: 'tydt', isUnique: false});
	indexes.push({name: 'f56prm_idx3', table: 'f56prm', column: 'ky', isUnique: false});
	indexes.push({name: 'f56prm_idx4', table: 'f56prm', column: 'rmk3', isUnique: false});
	indexes.push({name: 'f56prm_idx5', table: 'f56prm', column: 'sdb', isUnique: false});
	indexes.push({name: 'f56prm_idx6', table: 'f56prm', column: 'rmk2', isUnique: false});
	indexes.push({name: 'f56prm_idx7', table: 'f56prm', column: 'cls', isUnique: false});
	
	indexes.push({name: 'f56prm_idx8', table: 'f56prm', column: 'SDB, TYDT, KY, RMK2, RMK3', isUnique: false});
	
	indexes.push({name: 'udc_idx0', table: 'udc', column: 'id', isUnique: true});
	indexes.push({name: 'udc_idx1', table: 'udc', column: 'sy', isUnique: false});
	indexes.push({name: 'udc_idx2', table: 'udc', column: 'rt', isUnique: false});
	indexes.push({name: 'udc_idx3', table: 'udc', column: 'sy, rt', isUnique: false});
	indexes.push({name: 'udc_idx4', table: 'udc', column: 'sphd', isUnique: false});
	indexes.push({name: 'udc_idx5', table: 'udc', column: 'dl01', isUnique: false});
	indexes.push({name: 'udc_idx6', table: 'udc', column: 'sy, rt, ky', isUnique: false});

	indexes.push({name: 'udct_idx0', table: 'udct', column: 'id', isUnique: true});
	indexes.push({name: 'udct_idx1', table: 'udct', column: 'sy', isUnique: false});
	indexes.push({name: 'udct_idx2', table: 'udct', column: 'rt', isUnique: false});
	indexes.push({name: 'udct_idx3', table: 'udct', column: 'sy, rt', isUnique: false});
	indexes.push({name: 'udct_idx5', table: 'udct', column: 'lnpg', isUnique: false});

	indexes.push({name: 'employee_idx0', table: 'employee', column: 'id', isUnique: true});
	indexes.push({name: 'employee_idx1', table: 'employee', column: 'an8', isUnique: false});

	indexes.push({name: 'cust_idx0', table: 'customer', column: 'id', isUnique: true});
	indexes.push({name: 'cust_idx1', table: 'customer', column: 'corporatename', isUnique: false});
	indexes.push({name: 'cust_idx2', table: 'customer', column: 'city', isUnique: false});
	indexes.push({name: 'cust_idx3', table: 'customer', column: 'an8', isUnique: false});
	indexes.push({name: 'cust_idx4', table: 'customer', column: 'tariffcontractid', isUnique: false});

	indexes.push({name: 'spareParts_idx0', table: 'spareParts', column: 'id', isUnique: true});
	indexes.push({name: 'spareParts_idx1', table: 'spareParts', column: 'CIBId', isUnique: false});
	indexes.push({name: 'spareParts_idx2', table: 'spareParts', column: 'F56BTCOId', isUnique: false});
	indexes.push({name: 'spareParts_idx3', table: 'spareParts', column: 'F56BTDTId', isUnique: false});
	indexes.push({name: 'spareParts_idx4', table: 'spareParts', column: 'F56BTId', isUnique: false});
	indexes.push({name: 'spareParts_idx5', table: 'spareParts', column: 'UsualCodeLITM', isUnique: false});

	indexes.push({name: 'basicPrice_idx0', table: 'basicPrice', column: 'id', isUnique: true});
	indexes.push({name: 'basicPrice_idx3', table: 'basicPrice', column: 'itm, cpgp, exdj', isUnique: false});


	indexes.push({name: 'PriceGridAN8_idx',			table: 'PriceGridAN8', column: 'id', isUnique: true});
	indexes.push({name: 'PriceGridAN8_idx_ITM',		table: 'PriceGridAN8', column: 'ITM', isUnique: false});
	indexes.push({name: 'PriceGridAN8_idx_BSCD', 	table: 'PriceGridAN8', column: 'BSCD', isUnique: false});
	indexes.push({name: 'PriceGridAN8_idx_AN8',		table: 'PriceGridAN8', column: 'AN8', isUnique: false});
	indexes.push({name: 'PriceGridAN8_idx_UPC1',	table: 'PriceGridAN8', column: 'UPC1', isUnique: false});
	indexes.push({name: 'PriceGridAN8_idx_APRP5',	table: 'PriceGridAN8', column: 'APRP5', isUnique: false});

	indexes.push({name: 'PriceGridAN8_idx_tarif',	table: 'PriceGridAN8', column: 'UPC1, EUSE, LOB, IGP1, IGP2, SDV1, APRP5, APRP6', isUnique: false});

	indexes.push({name: 'PriceGridCPGP_idx_id',		table: 'PriceGridCPGP', column: 'id', isUnique: true});
	indexes.push({name: 'PriceGridCPGP_idx_ITM',	table: 'PriceGridCPGP', column: 'ITM', isUnique: false});
	indexes.push({name: 'PriceGridCPGP_idx_BSCD',	table: 'PriceGridCPGP', column: 'BSCD', isUnique: false});
	indexes.push({name: 'PriceGridCPGP_idx_CPGP',	table: 'PriceGridCPGP', column: 'CPGP', isUnique: false});
	indexes.push({name: 'PriceGridCPGP_idx_UPC1',	table: 'PriceGridCPGP', column: 'UPC1', isUnique: false});
	indexes.push({name: 'PriceGridCPGP_idx_APRP5',	table: 'PriceGridCPGP', column: 'APRP5', isUnique: false});

	indexes.push({name: 'PriceGridCPGP_idx_tarif',	table: 'PriceGridCPGP', column: 'UPC1, EUSE, LOB, IGP1, IGP2, SDV1, APRP5, APRP6', isUnique: false});

	indexes.push({name: 'PriceGridNull_idx_id',		table: 'PriceGridNull', column: 'id', isUnique: true});
	indexes.push({name: 'PriceGridNull_idx_ITM',	table: 'PriceGridNull', column: 'ITM', isUnique: false});
	indexes.push({name: 'PriceGridNull_idx_BSCD',	table: 'PriceGridNull', column: 'BSCD', isUnique: false});
	indexes.push({name: 'PriceGridNull_idx_UPC1',	table: 'PriceGridNull', column: 'UPC1', isUnique: false});
	indexes.push({name: 'PriceGridNull_idx_APRP5',	table: 'PriceGridNull', column: 'APRP5', isUnique: false});

	indexes.push({name: 'PriceGridNull_idx_tarif',	table: 'PriceGridNull', column: 'UPC1, EUSE, LOB, IGP1, IGP2, SDV1, APRP5, APRP6', isUnique: false});

	indexes.push({name: 'F56TARC_idx0', table: 'F56TARC', column: 'id', isUnique: true});
	indexes.push({name: 'F56TARC_idx1', table: 'F56TARC', column: 'AN8', isUnique: false});
	indexes.push({name: 'F56TARC_idx2', table: 'F56TARC', column: 'SRP3', isUnique: false});
	indexes.push({name: 'F56TARC_idx3', table: 'F56TARC', column: 'UPC1', isUnique: false});

	indexes.push({name: 'F56TARC_CPGP_idx0', table: 'F56TARC_CPGP', column: 'id', isUnique: true});
	indexes.push({name: 'F56TARC_CPGP_idx1', table: 'F56TARC_CPGP', column: 'CPGP', isUnique: false});
	indexes.push({name: 'F56TARC_CPGP_idx2', table: 'F56TARC_CPGP', column: 'SRP3', isUnique: false});
	indexes.push({name: 'F56TARC_CPGP_idx3', table: 'F56TARC_CPGP', column: 'UPC1', isUnique: false});

	indexes.push({name: 'F56REP_idx0', table: 'F56REP', column: 'QTST, LOCN, DOCO, topic', isUnique: false});
	indexes.push({name: 'F56REP_idx1', table: 'F56REP', column: 'AN8', isUnique: false});

	indexes.push({name:	'F561207_idx0',	table: 'F561207', column : 'cibid', isUnique: false});

	indexes.push({name : 'F56PRECO_ITEMS_idx0', table : 'F56PRECOITEMS', column : 'F56PRECOId', isUnique : false});

	databaseModel.createTableIndexes(databaseModel.getDbConnection(), indexes, cb);
}

databaseModel.findItemScanTimeOutConfiguration = function () {
	callBackModel.result = null;
	callBackModel.context.sql = "select	prm.RMK value " +
								"from	f56prm prm " +
								"where	prm.SDB = 'KONI' " +
								"and	prm.TYDT = 'ET' limit 1";

	executeSql(	callBackModel.context.sql, 
				callBackModel.successCB,
			 	callBackModel.sqlErrorCB);	

	return callBackModel.result;
};

databaseModel.removeFromWhere = function(target, whereClause, callBack) {
	if(validationModel.isNull(callBack)) callBack = callBackModel.emptyCB;
	de.itgs.WorkOrders[target].remove(whereClause, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
};
