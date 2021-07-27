employeeModel = {};

employeeModel.getEmployeeByAN8 = function (employeeAN8, getEmployeeByAN8CustomCB) {
	if (employeeAN8 == "")
		return { name: null };

	var employee = {};
	employeeModel.requestId = Date.now();

	employeeModel.getEmployeeByAN8CB = function (status, res) {
		if(status == 400) {
			if(res.opstatus == 0) {
				if ((!validationModel.isNull(res.employeeData)) && (res.employeeData.length > 0)) {
					employee.name = res.employeeData[0].userName;
				}
				if (!validationModel.isNull(getEmployeeByAN8CustomCB)) {
					getEmployeeByAN8CustomCB(employee);
				}
			} else if (!validationModel.isNull(getEmployeeByAN8CustomCB)) {
				getEmployeeByAN8CustomCB(employee);
			}
		}
	}

	identifyUniTecUser(employeeAN8, employeeModel.requestId, employeeModel.getEmployeeByAN8CB);
    return employee;
}

employeeModel.findEmployeeAgencyByEmployee = function (an8, agencyType) {
	if (agencyType = 'SERVICE') // It's an error but don't touch now
		callBackModel.context.sql  = "select serviceagencyid value ";
	else
		callBackModel.context.sql  = "select installagencyid value ";
	callBackModel.context.sql += "from Employee where AN8 = " + an8;

	callBackModel.result = null;
	executeSql(callBackModel.context.sql, callBackModel.intValueSuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}


employeeModel.checkAllowedAccess = function(AN8) {

	callBackModel.result = null;

	function checkAllowedAccessSuccessCB(r) {
		app_parameters.lifetime.limited_access = (!validationModel.isNull(r) && r.length > 0);
	};

	callBackModel.context.sql =
		"SELECT	1 " +
		"FROM	Employee e " +
		"WHERE	e.AN8 = " + AN8 + " " +
		"AND	AT1	in ('SE', 'SEX') limit 1";

	callBackModel.executeWithCB(checkAllowedAccessSuccessCB);
};

employeeModel.getEmployeeInfo = function(AN8){
  callBackModel.result = null;

	callBackModel.context.sql =
		"SELECT	* " +
		"FROM	Employee e " +
		"WHERE	e.AN8 = " + AN8;

	executeSql(callBackModel.context.sql, callBackModel.intValueSuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

employeeModel.getMedia = function (AN, media, type) {

	callBackModel.result = "";

	if(validationModel.isNull(media)) return callBackModel.result;

	var source = "media";
	switch(type) {
		case "employee" :
			source = "employeeMedia";
			break;
		case "agency" :
			source = "agencyMedia";
			break;
		default :
			break;
	}

	callBackModel.context.sql =
			"select	m.data value "
		+	"from 	" + source + " m "
		+	"where	m.AN8 = " + AN + " "
		+	"and	m.PHTP = '" + media + "' ";

	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	if(validationModel.isNull(callBackModel.result)) callBackModel.result = "";
	return callBackModel.result;
};
