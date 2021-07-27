validationModel = {};

validationModel.numberIsWithinBounds = function (number, lowerBound, upperBound) {
	if (number >= lowerBound && number <= upperBound) {
		return true;
	}
	return false;
}

validationModel.numberHasMaxDecimals = function (number, maxDecimals) {
	var numberString = number + "";
	var seperator = (numberString.indexOf(".") > -1) ? "." : (
					(numberString.indexOf(",") > -1) ? "," : "");
	
	if (seperator.length > 0) {
		var numberArray = numberString.split(seperator);
		if (numberArray[1].length == 0 || 
			(numberArray.length > 1 && numberArray[1].length > maxDecimals)) {
			return false;
		}
	}
	return true;
}

validationModel.isValidDate = function (dateString) {
	if (isNaN(dateString.substr(0,4)) || // Year
		dateString.substr(4,1) != '-' ||
		isNaN(dateString.substr(5,2)) || // Month
		dateString.substr(7,1) != '-' ||
		isNaN(dateString.substr(8,2)) 	 // Day
		) {
		return false;
	}
	return true;
}
//Dhaval:Generic fix handled "undefined" string
validationModel.isNull = function(object) {
	if (object == undefined ||object == "undefined"|| object == null || (typeof object === 'string' && object.toUpperCase() == 'NULL')) return true;
	else return false; 
}

validationModel.isStringEmpty = function(string) {
	return (validationModel.isNull(string) || string.length == 0);
}