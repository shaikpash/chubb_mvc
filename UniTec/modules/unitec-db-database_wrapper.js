// -------------------------------------------------------------------------------------------------
// Responsability: Provide developer-friendly local-database API
// -------------------------------------------------------------------------------------------------

if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.db) === "undefined") { unitec.db = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.db.DatabaseWrapper = function (log, onError) {
	// ---------------------------------------------------------------------------------------------
	// Private attributes
	this.log = log;
	this.name = null;
	this.onError = onError || function() {};
	this.preQueryHook = function() {};
	this.postQueryHook = function() {};
};

// -------------------------------------------------------------------------------------------------
unitec.db.DatabaseWrapper.prototype.setPreQueryHook = function(preQueryHook) {
	this.preQueryHook = preQueryHook || function() {};
};

// -------------------------------------------------------------------------------------------------
unitec.db.DatabaseWrapper.prototype.setPostQueryHook = function(postQueryHook) {
	this.postQueryHook = postQueryHook || function() {};
};

// -------------------------------------------------------------------------------------------------
unitec.db.DatabaseWrapper.prototype.init = function() {
	var that = this;
	function onInitSuccess() { };
	function onInitError(error) { that.log.error("DatabaseWrapper.init - sync.init error: " + JSON.stringify(error)); };
	sync.init(onInitSuccess, onInitError);
	this.name = kony.sync.getDBName();
};

// -------------------------------------------------------------------------------------------------
unitec.db.DatabaseWrapper.prototype.query = function(sql, blocking) {
	blocking = blocking || true;
	var result = null;
	
	if (kony.sync.isSyncInitialized(this.onError)) {
		if (blocking)
			this.preQueryHook();
		kony.sync.single_select_execute(this.name, sql, null, function (db_result) { result = db_result; }, this.onError);
		if (blocking)
			this.postQueryHook();		
	}

	return result;
};

// -------------------------------------------------------------------------------------------------
unitec.db.DatabaseWrapper.prototype.queryLine = function(sql, blocking) {
	var enhancedSql = (sql.endsWith('limit 1', true) ? sql : sql + ' limit 1');
	
	var db_result = this.query(enhancedSql, blocking);
	var result = null;
	
	if (!unitec.lang.isNull(db_result)) {
		if (db_result instanceof Array && db_result.length > 0) {
			result = db_result[0];
			if (db_result.length > 1) {
				this.log.warn("DatabaseWrapper.queryLine: db_result has more than one row! Returning first. SQL: " + sql + ", result:" + JSON.stringify(db_result));
			}
		}
		else {
			this.log.error("DatabaseWrapper.queryLine: db_result is not an array! SQL: " + sql + ", result:" + JSON.stringify(db_result));
		}
	}

	return result;
};
