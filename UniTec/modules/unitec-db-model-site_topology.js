// -------------------------------------------------------------------------------------------------
// Responsability: Provide DB model for site topology
// -------------------------------------------------------------------------------------------------
if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.db) === "undefined") { unitec.db = {}; }
if (typeof(unitec.db.model) === "undefined") { unitec.db.model = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.db.model.SiteTopology = function (db) {
	this.db = db;
};

// -------------------------------------------------------------------------------------------------
unitec.db.model.SiteTopology.prototype.getRawTopologyFromEquipmentNumber = function(equipmentNumber) {
	var rawTopology = [];
	
	var db_result = this.db.query(
		"select distinct " +
		unitec.db.sql.escapeNull('cib.Y56EMPLA') + " building, " +
		unitec.db.sql.escapeNull('cib.Y56ETAG') + " floor, " +
		unitec.db.sql.escapeNull('cib.Y56LIEU') + " place " +
		"from CustomerInstalledBase cib " +
		"join Item on Item.ITM = cib.ITM " +
		"where cib.NUMB = " + equipmentNumber +
		" and Item.PRP0 in ('D','G','V')" +
		" and cib.Y56INDLA in ('A','I')"
	);
	if (!unitec.lang.isNull(db_result)) {
		if (db_result instanceof Array && db_result.length > 0) {
			rawTopology = db_result;
		}
	}
	
	return rawTopology;
};

// -------------------------------------------------------------------------------------------------
// rawTopology shall be an array of [building, floor, place] strings.
unitec.db.model.SiteTopology.prototype.getDynamicalTopology = function(rawTopology) {
	var buildings = [];

	for (var i = 0; i < rawTopology.length; i++) {
		var building_name = ((unitec.lang.isNull(rawTopology[i].building) || rawTopology[i].building.isEmpty()) ? null : rawTopology[i].building);
		var building_idx = 0;
		var building_found = false;
		while (building_idx < buildings.length && !building_found) {
			if (buildings[building_idx].getName() == building_name)
				building_found = true;
			else
				building_idx++;
		}
		
		if (!building_found)
			buildings.push(new unitec.db.model.Building(building_name));
		buildings[building_idx].addFloorAndPlace(rawTopology[i].floor, rawTopology[i].place);
	}
	
	return buildings;
};
