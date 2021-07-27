login = {
	user: {},
	localUser: {},
	candidatUser: {},
  	countEE: 0
};

login.init = function(){
	var appMenu = [];

    otis.application.createAppMenu("loginAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

login.preShow = function () {
	otis.application.setCurrentAppMenu("loginAppMenu");//Dhaval:Invocation of custom app menu
	login.localUser = kony.store.getItem("currentUser");
  frmLogin.flxContainerEE.isVisible = false;
	frmLogin.IDtext.text = "";
	frmLogin.PwdText.text = "";
	frmLogin.NameTxt.text = "";
	frmLogin.e11VersionLbl.text = global.kernel.getMarkedVersion();
	frmLogin.lblSyncVersion.text = "Sync " + global.kernel.getSyncVersion().replace('UNItec_', '');

	settingPopUp.txtBatchSize.text = app_parameters.sync.batchSize;
  	settingPopUp.txtBoxCheat.setEnabled(false); 
	settingPopUp.txtImageScale.text = app_parameters.sync.imageScale;
  
    var debugLogLevelMasterData = [];
    debugLogLevelMasterData.push(['0', 'NO']);
    debugLogLevelMasterData.push(['1', 'YES']);
    settingPopUp.CmbBoxIsDebugLogLevel.masterData = debugLogLevelMasterData;
	settingPopUp.CmbBoxIsDebugLogLevel.selectedKey = app_parameters.sync.isDebugLogLevel ? '1' : '0';
  
	if (!validationModel.isNull(login.localUser) && !validationModel.isNull(login.localUser.AN8)) {
		frmLogin.IDtext.text = login.localUser.AN8;
      frmLogin.flxFingerprint.isVisible = true;
		login.onLoginIdChange();
	}else{
      frmLogin.flxFingerprint.isVisible = false;
    }

	if (app_parameters.debug.on)
		login.debug_AddLoginOptions();

	if (app_parameters.debug.no_sync && !validationModel.isNull(login.localUser) && !validationModel.isNull(login.localUser.AN8)){
		frmLogin.IDtext.text = login.localUser.AN8;
      
		if ("209511" == login.localUser.AN8)
			frmLogin.PwdText.text = 'Unicom12345@';
		else
			frmLogin.PwdText.text = '000000';
		login.onBtnLoginClick();
	}
  
  if(!checkIfNetworkAvailable()){
    frmLogin.lblNetwork.isVisible = true;
    frmLogin.lblNetwork.text = "(Vous ne semblez pas connecté à internet)";
  }else{
    frmLogin.lblNetwork.isVisible = false;
  }
}

login.debug_AddLoginOptions = function () {
	var lblNoSync = new kony.ui.Label({ id : "lblDebugNoSync", text : "no_sync?", skin: "sknLblCodeSmall" }, {}, {});
	var chkNoSync = new kony.ui.CheckBoxGroup({
		id : "chkNoSync",
		masterData : [['NOSYNC', true]],
		selectedKeys : app_parameters.debug.no_sync ? ['NOSYNC'] : null,
		onSelection : function (chkBox) { app_parameters.debug.no_sync = (null != chkBox.selectedKeys); },
		skin : "sknCbxNormal"
	}, {}, {});

	var lblBypass = new kony.ui.Label({ id : "lblDebugBypass", text : "bypass?", skin: "sknLblCodeSmall" }, {}, {});
	var chkBypass = new kony.ui.CheckBoxGroup({
		id : "chkBypass",
		masterData : [['BYPASS', true]],
		selectedKeys : app_parameters.debug.bypass ? ['BYPASS'] : null,
		onSelection : function (chkBox) { app_parameters.debug.bypass = (null != chkBox.selectedKeys); },
		skin : "sknCbxNormal"
	}, {}, {});

	var hboxDebug = new kony.ui.Box({ id : "hboxDebug" }, {}, {});
	hboxDebug.add(lblNoSync, chkNoSync, lblBypass, chkBypass);

	frmLogin.hboxLoginButtons.addAt(hboxDebug, 0)
}

login.onLoginIdChange = function () {
  
	if (frmLogin.IDtext.text.length == 0) {
		frmLogin.NameTxt.text = "";
		login.candidatUser.AN8 = null;
	}
	else {
		frmLogin.NameTxt.text = "Recherche du nom...";
		login.candidatUser.AN8 = frmLogin.IDtext.text;
	}


	login.onLoginIdChangeCB = function (employee) {
		frmLogin.NameTxt.text =
			(!validationModel.isNull(employee.name)) ? employee.name :
				((!validationModel.isNull(login.localUser) && (login.localUser.AN8 == frmLogin.IDtext.text)) ? login.localUser.Username :
					"Identifiant non trouvé.");
	}
	var employee = employeeModel.getEmployeeByAN8(frmLogin.IDtext.text, login.onLoginIdChangeCB);
  
 
}

login.isDebugLogLevel = function () {
    var isDebugLogLevel = false;
	isDebugLogLevel = (settingPopUp.CmbBoxIsDebugLogLevel.selectedKey == '1');
	return isDebugLogLevel;
}

login.validateBatchSize = function() {
	var isValid = true;

	function isInteger(value) {
		return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
	}

	var nextBatchSize = parseFloat(settingPopUp.txtBatchSize.text, 10);
  	//iOS porting changes start
  	var chunkSize = parseFloat(settingPopUp.txtBxChunkSize.text, 10);
  	if (!isInteger(nextBatchSize) || nextBatchSize < 100) {
		popupModel.showPopError("Veuillez rentrer une valeur de batch entière et valide");
		isValid = false;
	}
	else {
		app_parameters.sync.batchSize = parseInt(nextBatchSize, 10).toString();
      app_parameters.sync.chunkSize = parseInt(chunkSize, 10).toString();
	}
	  	//iOS porting changes end
	return isValid;
}

login.onBtnCloseClick = function() {
	kony.application.exit();
}

login.logUserIn = function(user) {
	login.user.Userid = user.Userid;
	login.user.Username = user.Lastname;
	login.user.AN8 = user.UserEmployeeAN8;
	login.user.ADUsername = user.ADUsername;
	login.user.SecurityQuestionKy = user.SecurityQuestionKy;
	login.user.SecurityQuestionAnswer = user.SecurityQuestionAnswer;
	login.user.UserPassword = user.UserPassword;
	login.user.passwordDate = user.passwordDate;
  
    var agenceEmp = employeeModel.findEmployeeAgencyByEmployee(login.candidatUser.AN8);
		app_parameters.lifetime.society = societyModel.getSocietyByAgence(agenceEmp);


	// If the password is not yet entered in the history (first login), add it now
	var passwordHistoryExists = userModel.verifyUserPasswordHistory(login.user.UserPassword, 1);
	if (!passwordHistoryExists) {
		var valuesArray = {};
		valuesArray.CreatedBy = login.user.AN8;
		valuesArray.CreatedDate = dateTimePrintSql(new Date());
		valuesArray.Userid = login.user.Userid;
		valuesArray.UserPassword = login.user.UserPassword;

		de.itgs.Login.UserPasswordHistory.create(valuesArray, callBackModel.successCB, callBackModel.konyErrorCB, true);
	}

	// the user may not have full authorized access : let's check and confirm
	employeeModel.checkAllowedAccess(login.user.AN8);

	sequence.changeTo(sequence.values.logedIn, null);

	var pwd_limit;
	if (!validationModel.isNull(login.user.passwordDate)) {
		pwd_limit = dateFromsql(login.user.passwordDate);
		pwd_limit.setDate(pwd_limit.getDate() + 90);
	} else {
		pwd_limit = null;
	}

	if (!app_parameters.debug.bypass && validationModel.isNull(user.SecurityQuestionKy)) {
		frmLoginFirstTime.show();
	} else if (!app_parameters.debug.bypass && (new Date() >=  pwd_limit) || validationModel.isNull(pwd_limit)) {
	  	frmUserPasswordChange.show();
	  	popupModel.showPopError("Votre mot de passe a expiré, veuillez en entrer un nouveau.");
	} else {
		kony.store.setItem("currentUser", login.user);
		if (!workOrderModel.reOpenCurrentWO()) { // check if have to open a specific WO
			frmHome.show(); // Else just go to home page
		}

	}
}

login.onAuthenticationSuccess = function () {
	var user = userModel.findUserByLoginAndPassword(frmLogin.IDtext.text, frmLogin.PwdText.text);

	if (app_parameters.debug.bypass) {
		callBackModel.result = undefined;
		callBackModel.context.sql = "select * from Users where Useremployeean8 = '" + frmLogin.IDtext.text.toUpperCase() + "' limit 1";
		executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
		user = callBackModel.result;
	}

	if (validationModel.isNull(user))
		popupModel.showPopError("Compte inexistant en base.");
	else
		login.logUserIn(user);
}

login.onLoginSyncSuccess = function () {
	home2.lastSync = new Date();

		login.onAuthenticationSuccess();
};

login.wrongCredentialsCB = function(offline) {
	if (offline)
		popupModel.showPopError("Le couple Identifiant - Mot de passe est inconnu (base locale seulement).");
	else
		popupModel.showPopError("Le couple Identifiant - Mot de passe est inconnu.");
}

login.tryOnlineLogin = function() {
/**	function userIsAutenticatedCB(user) {
		login.candidatUser = user;

		if (app_parameters.debug.no_sync) {
			login.onAuthenticationSuccess();
			return;
		}
		//2947742
		var previousUser = kony.store.getItem('currentUser');
		if (!validationModel.isNull(previousUser) && previousUser["AN8"] != frmLogin.IDtext.text)
	 		global.syncController.syncOldUser(syncOldUserCB);
	 	else // first user or same user as previous
	 		global.syncController.syncAll(login.onLoginSyncSuccess);

		function syncOldUserCB(){
		sync.reset(syncStartLogin, eventErrorCallBack);
		}

		function syncStartLogin() {
          //Arati:changed code for Issue#93 - Sync error(7008)Start here
			getSyncCompletedStatus = function(){
            	try{
              		//return signOnGlobal.isSyncCompleted;
              		return !kony.sync.isSessionInProgress;
            	} catch(e){
              		globalException("utils.js","getSyncCompletedStatus",e);
              		return signOnGlobal.isSyncCompleted;
            	}
            };
          	getSyncCompletedStatus();
          	if(kony.sync.isSessionInProgress == false){
              global.syncController.syncAll(login.onLoginSyncSuccess);
            } else {
              //do nothing
            }
			//Arati:changed code for Issue#93 - Sync error(7008) end here
		}
	}
*/
	function userIsAutenticatedCB(user) {

		if (app_parameters.debug.no_sync) {
			login.onAuthenticationSuccess();
			return;
		}

		login.candidatUser = user;
		var previousUser = kony.store.getItem('currentUser');

      	function onSyncFailure() {
          // do nothing for now TBD
        };
      
		function startSync() {
			global.syncController.syncAll(login.onLoginSyncSuccess, onSyncFailure);
		}

		function saveOldUserSuccess() {
			sync.reset(startSync);
		}

		function saveOldUserFail() {
			var msg = "ATTENTION : l'avancement de travail du précédent utilisateur n'a pas pu être sauvegardée et sera définitivement perdu si vous continuez.";
			msg += "\n\nSouhaitez-vous continuer ?";
			popupModel.showPopError(msg, saveOldUserSuccess, undefined, true);
		}

		// if we are in the presence of an old user, the old user must be saved first.
		if (!validationModel.isNull(previousUser) && previousUser.AN8 != frmLogin.IDtext.text)
			global.syncController.saveUserWork(saveOldUserSuccess, saveOldUserFail);
		else
			startSync();
	}

	function globalFailCB() {
		popupModel.showPopError("La vérification de l'identité a échoué.");
	}

	var an8 = frmLogin.IDtext.text;
	var password = frmLogin.PwdText.text;

	if (app_parameters.debug.bypass)
		userIsAutenticatedCB({ id : null, AN8 : an8 });
	else
		userModel.authenticateUserByAN8AndPassword(an8, password, userIsAutenticatedCB, login.wrongCredentialsCB, login.tryOfflineLogin, globalFailCB);
}

login.onOfflineLoginSuccess = function () {
    // woPlanify.setPlannification(); // Plannify during tests
 	popupModel.showPopError("Connecté avec la base locale seulement.");
  	var agenceEmp = employeeModel.findEmployeeAgencyByEmployee(login.localUser.AN8);
	app_parameters.lifetime.society = societyModel.getSocietyByAgence(agenceEmp);
	employeeModel.checkAllowedAccess(login.localUser.AN8);

	// check if have to open a specific WO
	if (!workOrderModel.reOpenCurrentWO()) {
		// Else just go to home page
		frmHome.show();
	}
}

login.tryOfflineLogin = function(fingerprintAuth) {
	function userIsAutenticatedCB(user) {
		login.user = user;
		login.onOfflineLoginSuccess();
	}

	function noPreviousUserCB() {
		popupModel.showPopError("Pas d'information disponible pour vous authentifier en base locale. Merci de vous connecter au réseau.");
	}

	function newUserButOfflineCB() {
		popupModel.showPopError("Changement d'utilisateur impossible sans connexion. Merci de vous connecter au réseau.");
	}

	var an8 = frmLogin.IDtext.text;
	var password = frmLogin.PwdText.text;
	var previousUser = kony.store.getItem('currentUser');

	if ((app_parameters.debug.bypass || fingerprintAuth) && !validationModel.isNull(previousUser) && !validationModel.isNull(previousUser["AN8"]))
		userIsAutenticatedCB(previousUser);
	else
	userModel.offlineAuthenticateUserByAN8AndPassword(an8, password, previousUser, userIsAutenticatedCB, login.wrongCredentialsCB, noPreviousUserCB, newUserButOfflineCB)
}

login.onBtnLoginClick = function () {
  
	app_parameters.sync.isDebugLogLevel = login.isDebugLogLevel();
  
	if (login.validateBatchSize())
		login.tryOnlineLogin();
}

login.onBtnLoginWithoutSyncClick = function(fingerprintAuth) {
  
	app_parameters.sync.isDebugLogLevel = login.isDebugLogLevel();
  
	if (login.validateBatchSize())
		login.tryOfflineLogin(fingerprintAuth);
}

login.onBtnPasswordLostClick = function () {
	if (!validationModel.isNull(kony.store.getItem("currentUser"))) {
		login.user = kony.store.getItem("currentUser");

		if (frmLogin.IDtext.text != login.user.AN8.toString()) {
			popupModel.showPopError("Vous n'êtes pas le dernier utilisateur connecté. La récupération est impossible.");
			return;
		} else {
			frmUserPasswordLost.show();
		}
	} else {
		popupModel.showPopError("Pas de compte déjà ouvert sur ce télephone. La récupération est impossible.");
		return;
	}
}

login.fingerprint = function(){
  function statusCB(status, message) {  
    if(status == 5000)    {
      var fingerprintAuth = true;
      login.onBtnLoginWithoutSyncClick(fingerprintAuth);
        /*kony.ui.Alert({
            message: "AUTHENTICATION SUCCESSFULL",
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Close"
        }, {});*/   
    }  
    else    {     
        var messg = status + message;     
        kony.ui.Alert({
            message: messg,
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Fermer"
        }, {});  
    }
}

function authUsingTouchID() {  
    var configMap = {
        "promptMessage": "Authentifiez vous via le lecteur d'empreinte",
        "fallbackTitle": "Scanner votre empreinte"
    };  
    kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, statusCB, configMap);
}
authUsingTouchID();
}
