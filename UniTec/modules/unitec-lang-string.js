// -------------------------------------------------------------------------------------------------
// Responsability: enhance String prototype
// -------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------
String.prototype.endsWith = function(suffix, ignoreCase) {
	// TODO escape suffix or provide optional argument
	ignoreCase = ignoreCase || false;
	if (ignoreCase)
		var pattern = new RegExp(suffix + "$", "i");
	else
		var pattern = new RegExp(suffix + "$");
	
    return pattern.test(this);
};

// -------------------------------------------------------------------------------------------------
String.prototype.isEmpty = function() {
    return (this.trim().length == 0);
};

// -------------------------------------------------------------------------------------------------
String.prototype.padLeft = function (paddingValue) {
   return String(paddingValue + this).slice(-paddingValue.length);
};