// -------------------------------------------------------------------------------------------------
// Responsability: defines general utilities functions
// -------------------------------------------------------------------------------------------------

if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.lang) === "undefined") { unitec.lang = {}; }

// -------------------------------------------------------------------------------------------------
unitec.lang.isNull = function(object) {
	return (object == undefined || object == null || (typeof object === 'string' && object.toUpperCase() == 'NULL'));
};

// -------------------------------------------------------------------------------------------------
// Returns the first non-null (null as unitec.lang.isNull defines it) argument if any, and null otherwise
unitec.lang.coalesce = function() {
	var returnValue = null;
	var i = 0;
	while(i < arguments.length && null == returnValue) {
		if (!this.isNull(arguments[i]))
			returnValue = arguments[i];
		i++;
	}
	return returnValue;
};
