// -------------------------------------------------------------------------------------------------
// Responsability: provide Hash utilities
// -------------------------------------------------------------------------------------------------
if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.lang) === "undefined") { unitec.lang = {}; }
if (typeof(unitec.lang.hash) === "undefined") { unitec.lang.hash = {}; }

// -------------------------------------------------------------------------------------------------
unitec.lang.hash.merge = function(leftHash, rigthHash) {
	var mergedHash = {};
	
	Object.keys(leftHash).forEach(function (key) { mergedHash[key] = leftHash[key]; });
	Object.keys(rigthHash).forEach(function (key) { mergedHash[key] = rigthHash[key]; });
	
    return mergedHash;
};