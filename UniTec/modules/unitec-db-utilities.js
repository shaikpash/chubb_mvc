// -------------------------------------------------------------------------------------------------
// Responsability: defines database utilities functions
// -------------------------------------------------------------------------------------------------

if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.db) === "undefined") { unitec.db = {}; }
if (typeof(unitec.db.sql) === "undefined") { unitec.db.sql = {}; }

// -------------------------------------------------------------------------------------------------
// SQL: return empty string if null value or 'NULL' string
unitec.db.sql.escapeNull = function(column) {
	return "(CASE WHEN COALESCE(" + column + ", 'NULL') == 'NULL' THEN '' ELSE " + column + " END)";
};
