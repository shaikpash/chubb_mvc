// -------------------------------------------------------------------------------------------------
// Responsability: Provide DB model for buildings
// -------------------------------------------------------------------------------------------------
if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.db) === "undefined") { unitec.db = {}; }
if (typeof(unitec.db.model) === "undefined") { unitec.db.model = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.db.model.Building = function (name) {
	this.name = name;
	this.floors = [];
};

unitec.db.model.Building.prototype.addFloorAndPlace = function (floor, place) {
	var floor_name = ((unitec.lang.isNull(floor) || floor.isEmpty()) ? null : floor);
	var i = 0;
	var floor_found = false;
	while (i < this.floors.length && !floor_found) {
		if (this.floors[i].getName() == floor_name)
			floor_found = true;
		else
			i++;
	}
	
	if (!floor_found)
		this.floors.push(new unitec.db.model.Floor(floor_name));
	this.floors[i].addPlace(place);
};

unitec.db.model.Building.prototype.getName = function () {
	return this.name;
};

unitec.db.model.Building.prototype.getFloors = function () {
	return this.floors;
};
