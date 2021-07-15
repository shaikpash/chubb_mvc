customerModel = {};

customerModel.findCustomerByWorkOrder = function (workOrder) {
  callBackModel.result = null;
  callBackModel.context.sql = 			"select c.AN8 code, " +
    "		c.ID id, " +
    "		c.AN84 salesman, " +
    " c.purchaseordermandatory purchaseordermandatory " + 
    "from 	CUSTOMER c, " +
    "		F56BT bt " +
    "where	bt.said = c.an8 " +
    "and	bt.doco = " + workOrder.doco + " " +
    "and	bt.ANP = " + login.user.AN8 + " " +
    "and    c.Originalid = 0 " +
    "limit 1";

  executeSql(	callBackModel.context.sql, 
             callBackModel.successCB,
             callBackModel.sqlErrorCB);	

  return callBackModel.result;
}

customerModel.findCustomerById = function (id) {
  callBackModel.result = null;
  callBackModel.context.sql = 			"select * " +
    "from 	CUSTOMER " +
    "where	id = " + id + " " +
    "limit 1";

  executeSql(	callBackModel.context.sql, 
             callBackModel.successCB,
             callBackModel.sqlErrorCB);	

  return callBackModel.result;
}

customerModel.findCustomerByAN8 = function (an8, whereClause) {
  callBackModel.result = null;
  callBackModel.context.sql = "select * from CUSTOMER where AN8 = " + an8 + " ";
  if (!validationModel.isNull(whereClause))
    callBackModel.context.sql += " and " + whereClause + " ";
  callBackModel.context.sql += " limit 1";
  executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
  return callBackModel.result;
}

customerModel.findCustomerAddressTypesByWorkOrder = function (workOrder) {
  callBackModel.resultArray = [];
  callBackModel.context.sql = 	"select     distinct " +
    "			(CASE WHEN c.type in ('CC','CL') THEN 'SITE' " +
    "				  ELSE '' END) code, " +
    "           (CASE WHEN c.type in ('CC','CL') THEN 'Site' " +
    "				  ELSE '' END) name " +
    "from       F56BT bt, " +
    "			Customer c " +
    "where		bt.said = c.an8 " +
    "and		bt.doco = " + workOrder.doco + " " +
    "and		bt.ANP = " + login.user.AN8 + " " +
    "and		c.Originalid = 0 " +
    "union " +
    "select     distinct " +
    "			'AGENCY' code, " +
    "           'Agence' name " +
    "from       agency ag " +
    "inner join employee emp " +
    "on		    emp.serviceagencyid = ag.an8 " +
    "and        emp.an8 = " + login.user.AN8 + " " +
    "union " +
    "select     distinct " +
    "			(CASE WHEN a.type = 'D01' THEN 'DROP1' " +
    "				  WHEN a.type = 'D02' THEN 'DROP2' " +
    "				  ELSE '' END) code, " +
    "           (CASE WHEN a.type = 'D01' THEN 'Quai 1' " +
    "				  WHEN a.type = 'D02' THEN 'Quai 2' " +
    "				  ELSE '' END) name " +
    "from       AlternativeAddress a " +
    "where		a.an8 = " + login.user.AN8 + " ";

  executeSql(	callBackModel.context.sql, 
             callBackModel.arraySuccessCB,
             callBackModel.sqlErrorCB);	

  return callBackModel.resultArray;
}

customerModel.findCustomerAddressByWorkOrderAndType = function (workOrder, addressType) {
  callBackModel.result = null;

  if (validationModel.isNull(addressType) || addressType == 'SITE') {
    callBackModel.context.sql = 	"select    c.corporatename corporateName, " +
      "          c.corporatenameadd corporateNameAdd, " +
      "          c.address1 address1, " +
      "          c.address2 address2, " +
      "          c.address3 address3, " +
      "          c.zipcode zipcode, " +
      "          c.city city " +
      "from      Customer c, " +
      "          F56BT bt " +
      "where     bt.said = c.an8 " +
      "and       bt.doco = " + workOrder.doco + " " +
      "and		bt.ANP = " + login.user.AN8 + " " +
      "and	   c.Originalid = 0 " +
      "and       c.type in ('CC','CL') " +
      "limit 1";
  } else if (addressType == 'AGENCY') {
    callBackModel.context.sql = 	"select    ag.MLNM corporateName, " +
      "          ag.ADD1 corporateNameAdd, " +
      "          ag.ADD2 address1, " +
      "          ag.ADD3 address2, " +
      "          ag.ADD4 address3, " +
      "          ag.ADDZ zipcode, " +
      "          ag.CTY1 city " +
      "from      agency ag " +
      "inner join employee emp " +
      "on		   emp.serviceagencyid = ag.an8 " +
      "and       emp.an8 = " + login.user.AN8 + " " +
      "limit 1";
  } else if (addressType == 'DROP1' || addressType == 'DROP2') {
    callBackModel.context.sql = 	"select    (select MLNM \n" +
      "			from 	agency   \n" +
      "			where 	agency.an8 = (  \n" +
      "						select serviceagencyid \n" +
      "						from   employee  \n" +
      "						where  an8 = " + login.user.AN8 + ")) as corporateName,  \n" +
      "          a.corporatenameadd corporateNameAdd, " +
      "          a.address1 address1, " +
      "          a.address2 address2, " +
      "          a.address3 address3, " +
      "          a.zipcode zipcode, " +
      "          a.city city " +
      "from      AlternativeAddress a " +
      "where     an8 = " + login.user.AN8 + " ";
    callBackModel.context.sql += (!validationModel.isNull(addressType)) ? (
      (addressType == 'DROP1') ?  "and       a.type = 'D01' " : (
        (addressType == 'DROP2') ?  "and       a.type = 'D02' " : "" )) : "";
    callBackModel.context.sql +=	"limit 1";
  }

  executeSql(	callBackModel.context.sql, 
             callBackModel.successCB,
             callBackModel.sqlErrorCB);	

  return callBackModel.result;
}

customerModel.copyCustomerById = function (id, type, copy) {
  var activeQuotationCustomer = null;
  var gblCustomerObject = customerModel.findCustomerById(id);

  if (gblCustomerObject != null) {
    activeQuotationCustomer = de.itgs.javascript.Object.clone(gblCustomerObject);
    activeQuotationCustomer.OriginalId = gblCustomerObject.id;
    activeQuotationCustomer.UserId = !validationModel.isNull(gblCustomerObject.AN84) ? gblCustomerObject.AN84 : login.user.AN8;
    if(type == 'Site'){
			activeQuotationCustomer.ParentCustomerId = copy.id;
        }
    if(type == 'Customer'){
			activeQuotationCustomer.ParentCustomerId = null;
        }
    activeQuotationCustomer.id = id;
		
  }

  return activeQuotationCustomer;
}

customerModel.createCustomer = function (customer) {
  callBackModel.result = {};
  customer.id = null;

  de.itgs.WorkOrders.Customer.create(customer, callBackModel.successCB,callBackModel.konyErrorCB, true);

  return callBackModel.result;
}
