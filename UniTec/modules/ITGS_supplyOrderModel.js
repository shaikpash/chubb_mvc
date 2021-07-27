supplyOrder = {};

supplyOrder.getSupplyOrders = function (state){
	// state in sent, saved, notValid 
	var orders = []; 
	var sql =
		"select " +
		" id, " +
		" issuerAN8, " +
		" addressId, " +
		" addressType, " +
		" [state], " +
		" dueDate, " +
		" comment, " +
		" cmdNummer, " +
		" (select count(*) from supplyOrderLines where supplyOrderId = SupplyOrders.id) nbLines, \n " +
        " (select count(*) from supplyOrderLines where supplyOrderId = SupplyOrders.id and supplyOrderLines.Quantity <>'NULL') nbDoneLinesInv, \n " +
		" (select count(*) from supplyOrderLines where supplyOrderId = SupplyOrders.id " +
		"   and supplyOrderLines.Quantitydelivered = supplyOrderLines.Quantityvalidated \n " +
		"   and not ifnull(supplyOrderLines.Quantityvalidated, 0) = 0) nbDoneLines, \n " +
		" (select max(notAvailable) from supplyOrderLines where supplyOrderId = SupplyOrders.id) hasNotAvailable, \n " +
		" ifnull((select max(deliveryDate) from supplyOrderLines where supplyOrderId = SupplyOrders.id and not( coalesce(deliveryDate, 'NULL') = 'NULL')), dueDate) maxDate, \n " +
		" (select sum(not coalesce(replacementCode, 'NULL')  = 'NULL') > 0 from supplyOrderLines  \n " +
		"  where supplyOrderId = SupplyOrders.id) hasReplacement, \n " +
		" (select count(*) from supplyOrderLines " +
		"  where supplyOrderId = SupplyOrders.id " +
		"   and not supplyOrderLines.Quantitydelivered = supplyOrderLines.Quantityvalidated \n " +
		"   and not ifnull(supplyOrderLines.quantityDelivered, 0) = 0) nbPartial \n " +
		"from SupplyOrders \n ";
		
	switch (state){
		case 'sent' : 
			sql += " where [state] = 'APEX' ";
			break;
		case 'saved' : 
			sql += " where [state] in ('APAT','APTF','APVA','APPA') ";
			break;
		case 'notValid' : 
			sql += " where [state] = 'APEC' ";
			break;
		case 'inventory_saved' :
			sql += " where [state] = 'INAT' ";
			break;
		case 'inventory_notValid' :
			sql += " where [state] = 'INEC' ";
			break;
		default :
			break;
	}

	function getSupplyOrdersCB(res) {
		if (res != null && res.length> 0) {
			orders = res;
		}
	}
		
	executeSql(sql, getSupplyOrdersCB, eventErrorCallBack);
	return orders;
}

supplyOrder.getSupplyOrderLinesForOrder = function (order, whereClause){
	var lines = []; 
	var blasql =
		"select " +
		" sl.id,  \n " +
		" sl.supplyOrderid,  \n " +
		" sl.line,  \n " +
		" sl.articleCode,  \n " +
		" ifnull(sl.replacementCode, 'NULL')  replacementCode,  \n " +
		" ifnull(sl.quantity, 0) quantity,  \n " +
		" ifnull(sl.quantityValidated, 0) quantityValidated,  \n " +
		" ifnull(sl.quantityDelivered, 0) quantityDelivered,  \n " +
		" sl.notAvailable,  \n " +
		" sl.deliveryDate, \n " +
		" i.description1 ||  CASE WHEN i.description2 = 'NULL' THEN '' ELSE i.description2 END name, \n " +
		" i.usualcode usualCode, \n " +
		" (CASE WHEN COALESCE(i.CNV18, 'NULL') <> 'NULL' and i.CNV18 > 0 THEN cast(1/i.CNV18 as integer) ELSE 1 END) orderMultiple, \n " +
		" (select DL01 from UDCT where RT='UM' and SY='00' and KY = i.measurementunit limit 1) unit, \n " +
		" ir.description1 replacementName, \n " +
		" ir.usualcode replacementUsualCode, \n " +
		" (CASE WHEN COALESCE(ir.CNV18, 'NULL') <> 'NULL' and ir.CNV18 > 0 THEN cast(1/ir.CNV18 as integer) ELSE 1 END) replacementOrderMultiple, \n " +
		" (select DL01 from UDCT where RT='UM' and SY='00' and KY = ir.measurementunit limit 1) replacementUnit \n " +
		"from SupplyOrderlines sl \n " +
		"join item i on i.ITM = sl.articleCode \n " +
		"left join item ir on ir.ITM = sl.replacementCode \n " +
		"where supplyOrderid = " + order.id;
			
	if (whereClause != null) {
		blasql += " and (" + whereClause + ") \n";
	}
	if (equipmentOrderOverview.isInventory()) {  blasql += " order by usualCode "; }
  
	function getSupplyOrderLinesForOrderCB(res) {
		if (!validationModel.isNull(res) && res.length> 0) {
			lines = res;
		}
	}
		
	executeSql(blasql, getSupplyOrderLinesForOrderCB, eventErrorCallBack);
	return lines;
}

supplyOrder.getPossibleDeliveryAddresses = function(orderBy){
	//id	name	name2	street	more	more2	postCode	city
	// id is null for agency
	var addresses = [];
	
	var sqlAgency = "select distinct " + 
		" agency.id as id," +
		" 'agency' as type," +
		" coalesce(MLNM, '') as name," +
		" coalesce(ADD1, '') as name2," +
		" coalesce(ADD2, '') as street," +
		" coalesce(ADD3, '') as more," +
		" coalesce(ADD4, '') as more2," +
		" coalesce(ADDZ, '') as zipCode," +
		" coalesce(CTY1, '') as city " +
		"from 	agency,udc,f56mcu,employee " +
		"where 	agency.an8 = f56mcu.an8 " +
		"and 	LTRIM(f56mcu.MCU) = LTRIM(udc.DL01) and udc.sy = 56 and udc.rt='MA' " +
		"and 	udc.ky = cast(  employee.serviceagencyid as nvarchar(10)) " +
		"and 	employee.an8 = " + login.user.AN8 + " ";
	
	
	var sqlAltAdds = "select distinct " +
		" id as id, " +
		" 'technician' as type," +
		" coalesce((select MLNM from agency where agency.an8 = (select serviceagencyid from employee where an8 = "+ login.user.AN8 +") ), '') as name, " +
		" coalesce(corporatenameadd, '') as name2," +
		" coalesce(address1, '') as street," +
		" coalesce(address2, '') as more," +
		" coalesce(address3, '') as more2," +
		" coalesce(zipcode, '') as zipCode," +
		" coalesce(city, '') as city " +
		"from alternativeaddress " + 
		"where an8 = " + login.user.AN8 + " ";
		
	var sqlSites = "select	distinct site.id," +
					"		'site' as type," +
					"		coalesce(site.corporatename, '') as name," +
					"		coalesce(site.corporatenameadd, '') as name2," +
					"		coalesce(site.address1, '') as street," +
					"		coalesce(site.address2, '') as more," +
					"		coalesce(site.address3, '') as more2," +
					"		coalesce(site.zipcode, '') as zipCode," +
					"		coalesce(site.city, '') as city " +
					"from 	Customer site " +
					"join 	F56BT bt " + 
					"on 	site.AN8 = bt.SAID " + 
					"join 	workordertechnicians wt " +
					"on 	bt.id =  wt.workorderid " +
					"where 	(site.OriginalId is null or site.OriginalId = 0) " +
					"and 	bt.SRST < 70 " +
					"and	bt.WR20 = '002' ";
  
    var sqlAgencyAndAltAdds = sqlAgency;    
    sqlAgencyAndAltAdds += " union ";    
    sqlAgencyAndAltAdds += sqlAltAdds;    
  
    if (!validationModel.isNull(orderBy) && (orderBy.toLowerCase() === 'desc') ) {
      	sqlAgencyAndAltAdds += " order by name desc, name2 desc, street desc, zipCode desc, city desc";
      	sqlSites += " order by name desc, name2 desc, street desc, zipCode desc, city desc"; // otherwhise the DESC is not working at all
    } else {
      	sqlAgencyAndAltAdds += " order by name, name2, street, zipCode, city asc";
      	sqlSites += " order by name, name2, street, zipCode, city asc";
    }
  
	function sqlCB(res) {
		if (!validationModel.isNull(res) && res.length > 0) {
			addresses = addresses.concat(res);
		}
	}
  
	executeSql(sqlAgencyAndAltAdds, sqlCB, eventErrorCallBack);
	executeSql(sqlSites, sqlCB, eventErrorCallBack);
	
	return addresses;
}

equipmentOrderWrite.findAddress = function(addressId, addressType) {
	var sql = null;
	var address = null;
	switch (addressType) {
		case 'agency' : 
			sql = "select \n" + 
			" 0 as id," +
			" 'agency' as type," +
			" coalesce(MLNM, '') as name," +
			" coalesce(ADD1, '') as name2," +
			" coalesce(ADD2, '') as street," +
			" coalesce(ADD3, '') as more," +
			" coalesce(ADD4, '') as more2," +
			" coalesce(ADDZ, '') as zipCode," +
			" coalesce(CTY1, '') as city \n" +
			"from agency \n " + 
			"where agency.an8 = (select serviceagencyid from employee where an8 = " + login.user.AN8 + ") \n";;
			break;
		case 'technician' : 
			sql = "select \n " +
			" id as id, \n " +
			" 'technician' as type," +
			" coalesce((select MLNM from agency where agency.an8 = (select serviceagencyid from employee where an8 = "+ login.user.AN8 +") ), '') as name, \n" +
			" coalesce(corporatenameadd, '') as name2," +
			" coalesce(address1, '') as street," +
			" coalesce(address2, '') as more," +
			" coalesce(address3, '') as more2," +
			" coalesce(zipcode, '') as zipCode," +
			" coalesce(city, '') as city \n" +
			"from alternativeaddress \n" + 
			"where id = " + addressId + " \n";
			break;
		case 'site' : 
			sql = "select" +
			" id," +
			" 'site' as type," +
			" coalesce(corporatename, '') as name," +
			" coalesce(corporatenameadd, '') as name2," +
			" coalesce(address1, '') as street," +
			" coalesce(address2, '') as more," +
			" coalesce(address3, '') as more2," +
			" coalesce(zipcode, '') as zipCode," +
			" coalesce(city, '') as city " +
			"from Customer " +
			"where id = " + addressId;
			break;
	}
	
	if (null != sql) {
		callBackModel.result = null;
		executeSql(sql, callBackModel.successCB, eventErrorCallBack);
		address = callBackModel.result;
	}
	
	return address;
}

supplyOrder.updateLineQuantity = function (line, newQty) {
	var lineUpdate = [{
		changeSet : { quantity : newQty },
		whereClause : "where id = "+ line.id
	}];
	
	de.itgs.WorkOrders.SupplyOrderLines.updateAll(lineUpdate, null, eventErrorCallBack, true);
}

supplyOrder.addLine = function (line) {
	var lineUpdate = [{
		changeSet : { quantity : newQty },
		whereClause : "where id = " + line.id
	}];
	
	de.itgs.WorkOrders.SupplyOrderLines.updateAll(lineUpdate, null, eventErrorCallBack, true);
}

supplyOrder.commit = function (order, lines, isInventory) {
	var orderId = null;
	
	var addressType = isInventory ? 'NULL' :  order.addressType;
	var addressId = isInventory ? 'NULL' :  order.addressId;
	
	if (validationModel.isNull(order.id)) {
		// create new order
		var o = {
			issuerAN8 : order.issuerAN8,
			addressType : addressType,
			addressId : addressId,
			state : order.state,
			dueDate : (!validationModel.isNull(order.dueDate)) ? order.dueDate : null,
			comment : order.comment,
			cmdNummer : userModel.getAndUpdateNextQuotationNumber(login.user)
		};
		
		function createOrderCB (res) {
			orderId = res[0].id;
		}
		
		// get id
		de.itgs.WorkOrders.SupplyOrders.createAll([o], createOrderCB, eventErrorCallBack, true);
	} else {
		// update order
		var o = {
			changeSet : {
				state : order.state,
				addressType : addressType,
				addressId : addressId,
				dueDate :  (!validationModel.isNull(order.dueDate)) ? order.dueDate : null,
				comment : order.comment
			},
			whereClause : "where id = " + order.id
		}
		de.itgs.WorkOrders.SupplyOrders.updateAll([o], null, eventErrorCallBack, true);

		orderId = order.id;
	}
	
	var oldLines = supplyOrder.getSupplyOrderLinesForOrder(order); 
	function putLine(line) {
		var l = {
			supplyOrderid : orderId,
			line : line.line, // yeah, you know...
			articleCode : line.articleCode,
			replacementCode : line.replacementCode,
			quantity : line.quantity,
			quantityValidated : line.quantityValidated,
			quantityDelivered : line.quantityDelivered,
			notAvailable : line.notAvailable,
			deliveryDate : line.deliveryDate
		};
		if (validationModel.isNull(line.id)) {
			//create line
			de.itgs.WorkOrders.SupplyOrderLines.createAll([l], null, eventErrorCallBack, true);
		} else {
			//update line
			var c = { changeSet : l, whereClause : "where id = " + line.id }
			de.itgs.WorkOrders.SupplyOrderLines.updateAll([c], null, eventErrorCallBack, true);
				
			// remove line for old lines
			oldLines = de.itgs.javascript.Array.removeAt(
				oldLines,
				de.itgs.javascript.Array.find(
					oldLines,
					function (a) { return a.line == line.line; })
				,1
			);
		}
	}
	
	// commit all line
	lines.forEach(putLine);
	
	// remove remaining old lines
	de.itgs.WorkOrders.SupplyOrderLines.remove(
		"where id in (" + 
		oldLines.map(function(a) { return a.id; }).join(", ") + 
		") " , null, eventErrorCallBack, true);
	
}

supplyOrder.removeOrder = function(order){
	// first remove lines for this order
	var lines = supplyOrder.getSupplyOrderLinesForOrder(order);
	
	de.itgs.WorkOrders.SupplyOrderLines.remove(
		"where id in (" + 
		lines.map(function(a) { return a.id; }).join(", ") + 
		") " , null, eventErrorCallBack, true);
	
	// then remove the order
	de.itgs.WorkOrders.SupplyOrders.remove("where id = " + order.id,  null, eventErrorCallBack, true);
}
