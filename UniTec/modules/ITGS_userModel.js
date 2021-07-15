userModel = {};

userModel.authenticateUserByAN8AndPassword = function (an8, password, userIsAutenticatedCB, wrongCredentialsCB, onlineCallFailedCB, globalFailCB) {
	showSyncLoadingScreen('Authentification en cours, veuillez patienter.');
	function userAuthenticationServiceCB(status, res) {
		if (status == 400 && res.opstatus == 0) {
		kony.print("userAuthenticationServiceCB -- status == "+status+" >>> res == "+JSON.stringify(res))
			if ((!validationModel.isNull(res.userData)) && (res.userData.length > 0) && res.userData[0].isValid) {
				userIsAutenticatedCB({AN8 : an8});
			}
			else
				wrongCredentialsCB(false);
		} else if (status == 400) {
			if (["1000", "1011", "1014", "1016", "1015", "1200", "1001"].indexOf(res.opstatus.toString()) != -1 && onlineCallFailedCB != undefined)
				onlineCallFailedCB();
			else
				globalFailCB();
		}
	}
	
	if (app_parameters.debug.no_sync) {
		userIsAutenticatedCB();
	}
	else {
	    authenticateUniTecUser(an8, password, userAuthenticationServiceCB);
	}
	dismissSyncLoadingScreen();
};

userModel.offlineAuthenticateUserByAN8AndPassword = function (an8, password, previousUser, userIsAutenticatedCB, wrongCredentialsCB, noPreviousUserCB, newUserButOfflineCB) {
	if (validationModel.isNull(previousUser) || validationModel.isNull(previousUser["AN8"])) {
		noPreviousUserCB();
	} else {
		if (previousUser["AN8"] == an8) { // same user
			if (previousUser["UserPassword"] == SHA256(password))
				userIsAutenticatedCB(previousUser);
			else
				wrongCredentialsCB(true);
		} else { // try to change use without network
			newUserButOfflineCB();
		}
	}
}

userModel.findUserByLoginAndPassword = function (login, password) {
	callBackModel.result = undefined;
	callBackModel.context.sql = "select * from Users where Useremployeean8 = '" + login.toUpperCase() + "' and UserPassword = '" + SHA256(password) + "' limit 1";

	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

userModel.verifyUserPasswordHistory = function (password, depth) {
	callBackModel.result = 0;
	
	callBackModel.context.sql =
		"select count(1) value " +
		"from ( " +
		" select up.UserPassWord UserPassWord " + 
		" from UserPasswordHistory up " +
		" join Users u on u.userId = up.userId " +
		" where u.Useremployeean8 = '" + login.user.AN8 + "' " +
		" order by createdDate desc " +
		" limit " + depth + " " +
		") hist " +
		"where hist.UserPassWord = '" + SHA256(password) + "' ";

	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	return callBackModel.result;
}

userModel.getAndUpdateNextQuotationNumber = function(user) {
	if (app_parameters.build.new_quotation_nb_calculation) {
		var UNITEC_MARK = "2";
		var nextQuotationNumber = null;
		var quotationCounter = null;
		var db_result = global.db.query("select quotationCounter from Users where UserId = " + user.Userid + " limit 1");
		if (!unitec.lang.isNull(db_result)) {
			if (db_result instanceof Array && db_result.length > 0) {
				quotationCounter = db_result[0].quotationCounter;
			}
		}
		
		if (unitec.lang.isNull(quotationCounter)) {
			quotationCounter = 1;
		}
		
		nextQuotationNumber = parseInt(user.Userid + UNITEC_MARK + String(quotationCounter).padLeft("000000"));
		
		var values = { quotationCounter : quotationCounter + 1 };
		de.itgs.Login.Users.updateByPK(user.Userid, values, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
		
		return nextQuotationNumber;
	}
	else {
		var nextQuotationNumber = null;
		var db_result = global.db.query("select QuotationNextValue from Users where UserId = " + user.Userid + " limit 1");
		if (!unitec.lang.isNull(db_result)) {
			if (db_result instanceof Array && db_result.length > 0) {
				nextQuotationNumber = db_result[0].QuotationNextValue;
			}
		}
		
		if (unitec.lang.isNull(nextQuotationNumber)) {
			nextQuotationNumber = parseInt((user.Userid + "0000").substring(0, 4) + "0001");
		}
		
		var values = { QuotationNextValue : nextQuotationNumber + 1 };
		de.itgs.Login.Users.updateByPK(user.Userid, values, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
		
		return nextQuotationNumber;
	}
};
