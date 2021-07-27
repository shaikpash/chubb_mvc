// -------------------------------------------------------------------------------------------------
// Responsability: Provide logging wrapper
// -------------------------------------------------------------------------------------------------

if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.core) === "undefined") { unitec.core = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.core.Logger = function () { };

// -------------------------------------------------------------------------------------------------
unitec.core.Logger.prototype.error = function(message) {
	kony.print("---! ERROR !--- " + JSON.stringify(message));
};

// -------------------------------------------------------------------------------------------------
unitec.core.Logger.prototype.warn = function(message) {
	kony.print("---! WARNING !--- " + JSON.stringify(message));
};

// -------------------------------------------------------------------------------------------------
unitec.core.Logger.prototype.trace = function(message) {
	kony.print(message);
};