contactModel = {};

contactModel.findContactsByWorkOrderAndTypeCode = function (workOrder, typeCode, contactId) {
	callBackModel.context.sql =
		"select cont.ID id, " +
		" (CASE WHEN COALESCE(cont.LASTNAME,'NULL') == 'NULL' THEN '' ELSE cont.LASTNAME END) lastName, " + 
		" (CASE WHEN COALESCE(cont.FIRSTNAME,'NULL') == 'NULL' THEN '' ELSE cont.FIRSTNAME END) firstName, " + 
		" cont.TYPE typeCode, " + 
		" cont.FUNCTION roleCode, " +
		" cont.TITLE titleCode, " +
		" cont.IDLN idln, " +
		" (CASE WHEN COALESCE(udc.DL01,'NULL') == 'NULL' THEN '' ELSE udc.DL01 END) title, " + 
		" (select DL01 from UDC where SY = '01' and RT = 'CT' and KY = COALESCE(cont.TYPE,'')) type, " +
		" (select (CASE WHEN DL01 == 'SAV' AND cont.MAINCONTACTFLAG == '1' THEN 1 ELSE 0 END) from UDC where SY = '01' and RT = 'CT' and KY = COALESCE(cont.TYPE,'')) isMainTechnicalContact, " +
		" (select data from MEDIA where CONTACTID = cont.ID and PHTP = 'E') email, " +
		" (select data from MEDIA where CONTACTID = cont.ID and PHTP = 'MOB') mobile, " +
		" (select data from MEDIA where CONTACTID = cont.ID and PHTP = 'TEL') tel, " +
		" (select data from MEDIA where CONTACTID = cont.ID and PHTP = 'FAX') fax, " +
		" (select DL01 from UDC where KY = cont.FUNCTION and SY = '01' and RT = 'FC') role " +
		"from CONTACT cont " + 
		"join F56BT bt on cont.AN8 = bt.SAID " +
		"left join udc on udc.SY = '01' and udc.RT = 'GD' and udc.KY = COALESCE(cont.TITLE, '') " +
		"where bt.DOCO = " + workOrder.doco + " and bt.ANP = " + login.user.AN8;
	
	if (!validationModel.isNull(typeCode)) {
		callBackModel.context.sql += " and cont.TYPE = '" + typeCode + "' ";
	}
	
	if (!validationModel.isNull(contactId)) {
		callBackModel.context.sql += " and cont.id = " + contactId + " ";
	}

	callBackModel.resultArray = [];
	executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);	
	return callBackModel.resultArray;
}

contactModel.findContactTypesByWorkOrder = function (workOrder) {
	var contactTypes = [];
	contactTypes.push(["NONE", "Choisir Type de contact"]);
	
	contactModel.findContactTypesByWorkOrderCB = function (l_contactTypes) { 
		if (!validationModel.isNull(l_contactTypes) && l_contactTypes.length > 0) {
			for (var i = 0; i < l_contactTypes.length; i ++) {
				contactTypes.push([l_contactTypes[i].KY, l_contactTypes[i].DL01]);
			}
		}			
	} 

	callBackModel.context.sql =
		"select distinct u.KY, u.DL01 " + 
		"from contact c " + 
		"inner join udc u on u.KY = c.type and u.SY = '01' and u.RT = 'CT' " + 
		"where AN8 = (select SAID from F56BT where DOCO = " + workOrder.doco + " and ANP = " + login.user.AN8 + ") " +
		"and COALESCE(u.KY,'NULL') <> 'NULL' " +
		"and u.KY <> '*' " +
		"and COALESCE(u.DL01,'NULL') <> 'NULL'";
		  		  
	executeSql(callBackModel.context.sql, contactModel.findContactTypesByWorkOrderCB, callBackModel.sqlErrorCB);

	return contactTypes;
}

contactModel.findContactParameterOptions = function (parameter) {
	var contactParameterOptions = [];
	
	contactModel.findContactParameterOptionsCB = function (l_contactParameterOptions) { 
		if (!validationModel.isNull(l_contactParameterOptions) && l_contactParameterOptions.length > 0) {
			for (var i = 0; i < l_contactParameterOptions.length; i ++) {
				contactParameterOptions.push([l_contactParameterOptions[i].KY, l_contactParameterOptions[i].DL01]);
			}
		}			
	} 

	callBackModel.context.sql = "select KY, DL01 from UDC ";	
														
	callBackModel.context.sql += parameter == 'title' ? " where sy = '01' and rt = 'GD'" : "";
	callBackModel.context.sql += parameter == 'type' ? " where sy = '01' and rt = 'CT'" : "";
	callBackModel.context.sql += parameter == 'role' ? " where sy = '01' and rt = 'FC'" : "";
		  		  
	executeSql(callBackModel.context.sql, contactModel.findContactParameterOptionsCB, callBackModel.sqlErrorCB);

	return contactParameterOptions;
}

contactModel.findMediaByContactAndCustomer = function(contactId, customerAN8, mediaType) {
	callBackModel.result = null;
	
	callBackModel.context.sql =
		"select	id, " +
		"		data " +
		"from	media " +
		"where 	ContactId = " + contactId + " " +
		"and	AN8 = " + customerAN8 + " " + 
		"and	PHTP = '" + mediaType + "' ";
								
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	
	return callBackModel.result;
}

contactModel.createContactByCustomer = function (contact, customer) {
	contact.id = null;
	
	contactModel.createContactByCustomerCB = function (l_contact) { 
		contact.id = l_contact.id;
	} 

	var valuesArray = {};
		
	valuesArray.CustomerId = customer.id;
	valuesArray.AN8 = customer.code;
	valuesArray.IDLN = null;
	valuesArray.type = contact.typeCode;
	valuesArray.title = contact.titleCode;
	valuesArray.lastname = contact.lastName;
	valuesArray.firstname = contact.firstName;
	valuesArray['function'] = contact.roleCode;
	valuesArray.maincontactflag = contact.isMainTechnicalContact;
	valuesArray.activeflag = null;
	valuesArray.mailingfamily = null;
	valuesArray.HasChangedFlag = true;
	valuesArray.markForUpload = true;
	valuesArray.lastChangeSource = 'UNItec';
		  		  
	de.itgs.WorkOrders.Contact.create(valuesArray, contactModel.createContactByCustomerCB, callBackModel.konyErrorCB, true);
	return contact;
}

contactModel.updateContactByCustomer = function (contact, customer, deletion) {
	var valuesArray = {};
		
	valuesArray.CustomerId = customer.id;
	valuesArray.AN8 = customer.code;
	valuesArray.IDLN = null;
	valuesArray.type = contact.typeCode;
	valuesArray.title = contact.titleCode;
	valuesArray.lastname = contact.lastName;
	valuesArray.firstname = contact.firstName;
	valuesArray['function'] = contact.roleCode;
	valuesArray.maincontactflag = contact.isMainTechnicalContact;
	valuesArray.activeflag = null;
	valuesArray.mailingfamily = null;
	valuesArray.HasChangedFlag = true;
	valuesArray.markForUpload = true;
	valuesArray.lastChangeSource = 'UNItec';
		  		  
	de.itgs.WorkOrders.Contact.updateByPK(contact.id, valuesArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
	return contact;
}

contactModel.isContactReferenced = function (contact) {
	callBackModel.context.sql =
		"select 1 value from (" +
		" select 1 from Reporting where ContactId = " + contact.id +
		" union select 1 from F56PRECO where Contact = " + contact.id +
		" union select 1 from Signatures where ContactId = " + contact.id +
		")";

	callBackModel.result = null;
	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	return !validationModel.isNull(callBackModel.result);
}

contactModel.deleteContact = function (contact, customer) {
	var values = { HasChangedFlag: true, lastChangeSource: 'UNItec', DeletedBy: app_parameters.sync.appID };
	de.itgs.WorkOrders.Contact.updateByPK(contact.id, values, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
	de.itgs.WorkOrders.Contact.deleteByPK(contact.id, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}

contactModel.createContactMediaByTypeAndContactAndCustomer = function (value, type, contact, customer) {
	var valuesArray = {};
		
	valuesArray.ContactId = contact.id;
	valuesArray.CustomerId = customer.id;
	valuesArray.AN8 = customer.code;
	valuesArray.IDLN = contact.idln;
	valuesArray.RCK7 = null;
	valuesArray.PHTP = type;
	valuesArray.data = value;
	valuesArray.HasChangedFlag = true;			
	valuesArray.markForUpload = true;
		
	de.itgs.WorkOrders.Media.create(valuesArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}

contactModel.deleteContactMediaByWhereClause = function (whereClause) {
	var values = { HasChangedFlag: true, DeletedBy: app_parameters.sync.appID };
	de.itgs.WorkOrders.Media.update(whereClause, values, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
	de.itgs.WorkOrders.Media.remove(whereClause, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}

contactModel.deleteContactMediaByContact = function (contact) {
	var whereClause = "where ContactId = " + contact.id;
	contactModel.deleteContactMediaByWhereClause(whereClause);
}

contactModel.deleteContactMediaByTypeAndContact = function (type, contact) {
	var whereClause = "where ContactId = " + contact.id + " and PHTP = '" + type + "'";
	contactModel.deleteContactMediaByWhereClause(whereClause);
}

contactModel.updateContactMediaByTypeAndContact = function (value, type, contact) {
	var whereClause = "where ContactId = " + contact.id + " and PHTP = '" + type + "'";
	if (!validationModel.isNull(value) && value.length > 0) {
		var valuesArray = {};
		valuesArray.data = value;
		valuesArray.HasChangedFlag = true;
		de.itgs.WorkOrders.Media.update(whereClause, valuesArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
	} else {
		contactModel.deleteContactMediaByWhereClause(whereClause);
	}
}

contactModel.findDefaultTypeAndContactForWorkOrder = function(currentWorkOrder){
	// returns {typecode, contactId}
	// {typeCode : NONE, contactId : NONE} if no idea

	var res = { typeCode : null, contactId : null };
	if (!validationModel.isNull(currentWorkOrder.selectedContact)) {
		res.typeCode = currentWorkOrder.selectedContact.typeCode;
		res.contactId = currentWorkOrder.selectedContact.id;
	} else {
		var types = contactModel.findContactTypesByWorkOrder(currentWorkOrder);
		var indexOfSAV = types[
			de.itgs.javascript.Array.find(
				types,
				function(o) {
					return o[0] == 'SAV';
				}
			)
		];
		
		if (indexOfSAV != -1) {
			var contactsSAV = contactModel.findContactsByWorkOrderAndTypeCode(currentWorkOrder, 'SAV');
			if (contactsSAV.length != 1) {
				res.typeCode = 'SAV';
				res.contactId = 'NONE';
			} else {
				res.typeCode = 'SAV';
				res.contactId = contactsSAV[0].id;
			}
		} else {
			res.typeCode = 'NONE';
			res.contactId = 'NONE';
		}
	}
	return res;
}

contactModel.findContactForSignature = function(sig){
	callBackModel.result = null;
	
	if (!validationModel.isNull(sig) && !validationModel.isNull(sig.contactid)) {
		de.itgs.WorkOrders.Contact.find(" id = " + sig.contactid , callBackModel.successCB, callBackModel.konyErrorCB);
	}
	
	return callBackModel.result;
}