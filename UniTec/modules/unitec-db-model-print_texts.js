// -------------------------------------------------------------------------------------------------
// Responsability: Provide DB API for PrintTexts table
// -------------------------------------------------------------------------------------------------
if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.db) === "undefined") { unitec.db = {}; }
if (typeof(unitec.db.model) === "undefined") { unitec.db.model = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.db.model.PrintTexts = function (db) {
	this.db = db;
};

// -------------------------------------------------------------------------------------------------
// Order = PTC = automated validated quotation
unitec.db.model.PrintTexts.prototype.getPrintTextsForOrder = function() {
	var printTexts = [{ id: -1, title: 'Default', value: 'Aucun texte trouvé.' }];
	
	var db_result = this.db.query("select id, title, value from PrintTexts where coalesce(context, 'NULL') = 'NULL' or context = 'PTC'");
	if (!unitec.lang.isNull(db_result)) {
		if (db_result instanceof Array && db_result.length > 0) {
			printTexts = db_result;
		}
	}
	
	return printTexts;
};

// -------------------------------------------------------------------------------------------------
// Quote = PTD = non-validated quotation
unitec.db.model.PrintTexts.prototype.findPrintTextIdForQuote = function() {
	var id = -1;
	
	var db_result = this.db.queryLine("select id from PrintTexts where context = 'PTD' limit 1");
	if (!unitec.lang.isNull(db_result)) {
		id = db_result.id;
	}
	
	return id;
};

// -------------------------------------------------------------------------------------------------
unitec.db.model.PrintTexts.prototype.findPrintTextById = function(id) {
	var printText = null;
	if (!unitec.lang.isNull(id)) {
		var db_line = this.db.queryLine("select value from PrintTexts where id = " + id + " limit 1");
		if (!unitec.lang.isNull(db_line)) {
			printText = db_line.value;
		}
	}
	return printText;
};
