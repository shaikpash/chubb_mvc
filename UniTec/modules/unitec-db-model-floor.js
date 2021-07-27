// -------------------------------------------------------------------------------------------------
// Responsability: Provide DB model for building floors
// -------------------------------------------------------------------------------------------------
if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.db) === "undefined") { unitec.db = {}; }
if (typeof(unitec.db.model) === "undefined") { unitec.db.model = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.db.model.Floor = function (name) {
	this.name = name;
	this.places = [];
};

unitec.db.model.Floor.prototype.addPlace = function (place) {
	var place_name = ((unitec.lang.isNull(place) || place.isEmpty()) ? null : place);
	var i = 0;
	var place_found = false;
	while (i < this.places.length && !place_found) {
		if (this.places[i] == place_name)
			place_found = true;
		i++;
	}
	
	if (!place_found)
		this.places.push(place_name);
};

unitec.db.model.Floor.prototype.getName = function () {
	return this.name;
};

unitec.db.model.Floor.prototype.getPlaces = function () {
	return this.places;
};
