topologyModel = {};

topologyModel.createTopology = function (topologyArray, workOrder) {
	topologyModel.createTopologyCB = function (l_resultArray) {
		if (!validationModel.isNull(l_resultArray) && l_resultArray.length > 0) {
			for (var i = 0 ; i < topologyArray.length ; i ++) {
				if (l_resultArray.length > i) topologyArray[i].id = l_resultArray[i].id;
			}
		}
	}

	var valuesArray = [];
	
	for (var i = 0 ; i < topologyArray.length ; i ++) {
		valuesArray[i] = {};	
		valuesArray[i].CREATEDBY = login.user.AN8;
		valuesArray[i].CREATEDDATE = dateTimePrintSql(new Date());
		valuesArray[i].F56BTId = workOrder.id;
		valuesArray[i].NAME = topologyArray[i].name;
		valuesArray[i].PARENTId = topologyArray[i].parentId;
     	valuesArray[i].TYPE = topologyArray[i].type;
	}
	
	if (valuesArray.length > 0) {
		de.itgs.WorkOrders.Topology.createAll(
			valuesArray, 
			topologyModel.createTopologyCB,
			callBackModel.konyErrorCB1, 
			true);
	}

	return topologyArray;
}

topologyModel.updateTopology = function (topology, allocationSessionId){

	// Update all related items affected by the related topology
	var oldItems = topology.items;
	var newItems = oldItems.map(function (oldItem)  {	var item = de.itgs.javascript.Object.clone(oldItem);
														if (topology.type == 'LOCATION') item.location = topology.name;
											    		if (topology.type == 'FLOOR') item.floor = topology.name;
														return item;
											  	 	});

	itemModel.updateItems(newItems, oldItems, allocationSessionId);

	// Check if the topology already exists
	var topologyItems = topologyModel.findTopologyItems(workOrder, topology);

	if (topologyItems.length == 0) {
		// If not, update the topology
		var inputArray = [];
		inputArray[0] = {};
		inputArray[0].changeSet = {};
		inputArray[0].changeSet.NAME = topology.name;
		inputArray[0].whereClause = "where id = " + topology.id;
		
		de.itgs.WorkOrders.Topology.updateAll(	inputArray, 
												callBackModel.emptyCB, 
												callBackModel.konyErrorCB2);
	} else {
		// Else, relink all children to the other topology
		var inputArray = [];
		inputArray[0] = {};
		inputArray[0].changeSet = {};
		inputArray[0].changeSet.PARENTId = topologyItems[0].id;
		inputArray[0].whereClause = "where parentId = " + topology.id;

		de.itgs.WorkOrders.Topology.updateAll(	inputArray, 
												callBackModel.emptyCB, 
												callBackModel.konyErrorCB3);
		
		// Removes all duplicates (if any)
		topologyItems = topologyModel.findDuplicateTopologyItemsByWhereClause(" and parentId = " + topologyItems[0].id + " ");
		for (var i = 0 ; i < topologyItems.length ; i ++) {
			var ids = topologyItems[i].ids.split(",");
			for (var j = 1 ; j < ids.length ; j ++) {
				de.itgs.WorkOrders.Topology.remove(
					"where id = " + ids[j], 
					callBackModel.emptyCB,
					callBackModel.konyErrorCB4,
					true
					);
			}
		}
		
		// And, remove the duplicate topology
		de.itgs.WorkOrders.Topology.remove(
			"where id = " + topology.id, 
			callBackModel.emptyCB,
			callBackModel.konyErrorCB5,
			true
			);
	}
}

topologyModel.deleteTopology = function (topology, allocationSessionId){
	// Update all related items affected by the related topology
	var oldItems = topology.items;
	var newItems = oldItems.map(function (oldItem){	var item = de.itgs.javascript.Object.clone(oldItem);
													if (topology.type == 'LOCATION') item.location = 'NULL';
												    if (topology.type == 'FLOOR') item.floor = 'NULL';
													return item;
												  });
	itemModel.updateItems(newItems, oldItems, allocationSessionId);
	
	// Remove the topology
	de.itgs.WorkOrders.Topology.remove(
			"where id = " + topology.id, 
			callBackModel.emptyCB,
			callBackModel.konyErrorCB6,
			true
			);
	
	// Remove all children of the topology
	var children = topologyModel.findTopologyItems(workOrder, {parentId: topology.id});
	for (var i = 0 ; i < children.length ; i ++) {
		topologyModel.deleteTopology(children[i], allocationSessionId);
	}
}

topologyModel.findTopologyItems = function (workOrder, topology) {
	callBackModel.resultArray = [];
	callBackModel.context.sql = "select id id, " +
								"		name name, " +
								"		parentId parentId, " +
								"		type type " +
								"from	topology " +
								"where	f56btid = " + workOrder.id + " ";
	if (!validationModel.isNull(topology)) {
		callBackModel.context.sql +=(!validationModel.isNull(topology.name)) ?
								"and	name = '" + topology.name + "' " : 
								"and	coalesce(name, 'NULL') == 'NULL' ";
		callBackModel.context.sql +=(!validationModel.isNull(topology.type)) ?
								"and	type = '" + topology.type + "' " : 
								"and	coalesce(type, 'NULL') == 'NULL' ";
		callBackModel.context.sql +=(!validationModel.isNull(topology.parentId)) ?
								"and	parentId = " + topology.parentId + " " : 
								"and	coalesce(parentId, 'NULL') == 'NULL' ";
	}

	executeSql(	callBackModel.context.sql, 
				callBackModel.arraySuccessCB,
			 	callBackModel.sqlErrorCB);

	return callBackModel.resultArray;
}

topologyModel.findDuplicateTopologyItemsByWhereClause = function (whereClause) {
	callBackModel.resultArray = [];
	callBackModel.context.sql = "select F56BTId, " +
								"		type, " +
								"		name, " +
								"		parentId, " +
								"		count(id) cnt, " +
								"		group_concat(id) ids " +
								"from 	topology " +
								"where 	1 = 1 " +
								 (!validationModel.isNull(whereClause) ? whereClause : "") +
								"group by F56BTId, type, name, parentId " +
								"having count(id) > 1 ";

	executeSql(	callBackModel.context.sql, 
				callBackModel.arraySuccessCB,
			 	callBackModel.sqlErrorCB);

	return callBackModel.resultArray;
}

topologyModel.findTopologyByWorkOrder = function (workOrder) {
	var topology = {
		locations: []
	};
	
	topologyModel.findTopologyByWorkOrderCB = function (items) {
		if (!validationModel.isNull(items)) {		
			for (var i = 0; i < items.length; i ++) {
				if (items[i].type == 'LOCATION') {
					items[i].floors = [];
					for (var j = 0; j < items.length; j ++) {
						if (items[j].type == 'FLOOR' && 
							items[j].parentId == items[i].id) {
							items[i].floors.push(items[j]);
						}
					}
					topology.locations.push(items[i]);
				}
			}
		}	
	}
	
	callBackModel.context.sql = "select id id, " +
								"		name name, " +
								"		parentId parentId, " +
								"		type type " +
								"from	topology " +
								"where	f56btid = " + workOrder.id + " ";

	executeSql(	callBackModel.context.sql, 
				topologyModel.findTopologyByWorkOrderCB,
			 	callBackModel.sqlErrorCB);

	return topology;
}