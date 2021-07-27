itemCrossModel = {};
itemCrossModel.context = {
	sql : null
};

// select request to find cross references
// makes a select request on the itemCrossReference table, with details from the Item table
// returns list of items
itemCrossModel.findCrossItemsByWhereClauseAndSortOrder = function(whereClause, sortOrder) {
	
	callBackModel.resultArray = [];
	callBackModel.context.sql = 	"select icr.id icrid, " + 
									"		i.description1 ||  CASE WHEN i.description2 = 'NULL' THEN '' ELSE i.description2 END name, " + 
									"		i.usualcode usualCode, " +
									"		i.ITM articleId, " +
									"		i.measurementunit unitOfMeasureCode " +
									"from 	ItemCrossReference icr " +
									"join 	Item i " +
									"on 	i.usualcode = icr.CITM";
								
	if (!validationModel.isNull(whereClause) && whereClause.length > 0) callBackModel.context.sql += " " + whereClause;
	if (!validationModel.isNull(sortOrder)) callBackModel.context.sql += " " + sortOrder;
	
	executeSql(	callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.resultArray;
}

// select request with conditions
// only return items crossed with a specific item and with a specific type such as 'ES' : standard exchange
itemCrossModel.findCrossItemsByUsualCodeAndCrossType = function (usualcode,crossType) {
  	var whereFindClause = " where icr.LITM = '" + usualcode + "' and icr.XRT = '" + crossType + "' ";
  	if(crossType == "R"){
      whereFindClause += " and i.STKT <> 'O' ";
    }
	var items = itemCrossModel.findCrossItemsByWhereClauseAndSortOrder(whereFindClause);
	return items;
}

itemCrossModel.findReplacementItem = function(usualcode) {
	var items = itemCrossModel.findCrossItemsByUsualCodeAndCrossType(usualcode, 'R');
	var replacementItem = (!validationModel.isNull(items) && items.length > 0)? items[0] : null;
	return replacementItem;
}

itemCrossModel.findCrossItemsAndComponent = function (usualcode) {
	var components = itemCrossModel.findCrossItemsAndComponentByWhereClause(" where pri.CIBid = '" + usualcode + "' ");
	return components;
}

itemCrossModel.findCrossItemsAndComponentByWhereClause = function(whereClause) {
	callBackModel.resultArray = [];
	callBackModel.context.sql =  
		"select icr.id icrid, i2.usualcode usualCode, i2.ITM articleId, i2.measurementunit unitOfMeasureCode, " + 
		" ic.componentITM componentID, ic.quantity, pri.quantity QTY, " + 
		"(CASE WHEN COALESCE(pri.Reason,'NULL')           == 'NULL' THEN '' ELSE pri.Reason END)   statusReason, " +
		"(CASE WHEN COALESCE(pr.salesType,'NULL')         == 'NULL' THEN '' ELSE pr.salesType END) salesType, " +
		"(CASE WHEN COALESCE(pri.y56lieu,'NULL')          == 'NULL' THEN '' ELSE pri.y56lieu END)  placement, " + 
		"(CASE WHEN COALESCE(pri.y56etag,'NULL')          == 'NULL' THEN '' ELSE pri.y56etag END)  floor, " +
		"(CASE WHEN COALESCE(pri.y56empla,'NULL')         == 'NULL' THEN '' ELSE pri.y56empla END) location, " +
		"(CASE WHEN COALESCE(pri.y56zonl,'NULL')          == 'NULL' THEN '' ELSE pri.y56zonl END)  customerNumber " + 
		" from f56precoitems   pri "                      +
		" join  f56preco     pr   on pri.f56PRECOid  = pr.id "                +
		" join  Item     i  on i.ITM          = pri.ITM "               +
		" join ItemCrossReference  icr  on pri.ITM   = icr.ITM "               +
		" join Itemcomposition   ic  on ic.compoundITM  = i.ITM  and  ic.TBM = 'AP' "         +
		" join  Item     i2   on i2.ITM    = ic.componentITM ";

	if (!validationModel.isNull(whereClause) && whereClause.length > 0)
		callBackModel.context.sql += " " + whereClause; 

	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);

	return callBackModel.resultArray;
}