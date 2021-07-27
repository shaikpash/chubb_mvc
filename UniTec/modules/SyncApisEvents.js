syncConfigKey = "syncConfig";
skyConfigKey = "skyConfig";
syncUserIDKey = "syncUserID";
syncPwdKey = "syncPwd";
syncAppIDKey = "syncAppID";
syncServerHostKey = "syncServerHost";
syncServerPortKey = "syncServerPort";
syncBatchSizeKey = "syncBatchSize";

function requestSync(startSync, afterSync, msg) {
	if(app_parameters.debug.no_sync) {
		if(!validationModel.isNull(afterSync)) {
			afterSync();
		}
	}
	else {
		if(validationModel.isNull(msg)) msg = "Voulez-vous synchroniser ?";//"Voulez-vous synchroniser maintenant ?";//Arati:Changed code for JIRA UI-70
		popupModel.showPopError(msg, startSync, undefined, true, afterSync);
	}
}

function sync_filterparams() {
	var employeeAn8 = frmLogin.IDtext.text;
	 return {
		WorkOrders: [
			{ WorkOrderTechnicians: 				[{ Name: "technicianAN8", Value1: employeeAn8}] },
			{ F56301W: 								[{ Name: "btanp", Value1: employeeAn8}] },
			{ Item: 								[{ Name: "techid", Value1: employeeAn8}] },
			{ CustomerInstalledBase:				[{ Name: "userId", Value1: employeeAn8}] },
			{ CustomerInstalledBaseCharacteristic:	[{ Name: "techid", Value1: employeeAn8}] },
			{ Media: 								[{ Name: "techid", Value1: employeeAn8}] },
			{ Employee: 							[{ Name: "userId", Value1: employeeAn8}] },
			{ F561207: 								[{ Name: "userId", Value1: employeeAn8}] },
			{ SupplyOrders: 						[{ Name: "userId", Value1: employeeAn8}] },
			{ Customer: 							[{ Name: "userId", Value1: employeeAn8}] },
			{ SubSite: 								[{ Name: "userId", Value1: employeeAn8 }] },
			{ F56REP: 								[{ Name: "userId", Value1: employeeAn8 }] }
		],
		
		Login: [
			{ Users : [{ Name: "userid", Value1: employeeAn8}] }
		],
		
		Masterdata: [
			{ Employee :			[{ Name: "btanp", Value1: employeeAn8}] },
			{ Agency :				[{ Name: "userId", Value1: employeeAn8}] },
			{ AlternativeAddress :	[{ Name: "userId", Value1: employeeAn8}] },
			{ F56TARC :				[{ Name: "tecId", Value1: employeeAn8}] },
			{ F56TARC_CPGP :		[{ Name: "tecId", Value1: employeeAn8}] },
			{ PriceGridAN8:			[{ Name: "technicianAN8", Value1: employeeAn8}] },
			{ PriceGridCPGP:		[{ Name: "technicianAN8", Value1: employeeAn8}] },
			{ PriceGridNull:		[{ Name: "technicianAN8", Value1: employeeAn8}] },
			{ F56MCU :				[{ Name: "userId", Value1: employeeAn8}] },
			{ VAT :					[{ Name: "userID", Value1: employeeAn8}] }
		]
	};
}

function NavigateToForm(formname) {
	formname.show();
}

function navigateToTableForm() {
}

function showSyncForm() {
	NavigateToForm(frmSync)
}

function loadSyncSettingsFromDevice() {
	var syncConfigArr = kony.store.getItem(syncConfigKey);
	if (null != syncConfigArr) {
    	app_parameters.sync.serverHost = syncConfigArr[syncServerHostKey];
    	app_parameters.sync.serverPort = syncConfigArr[syncServerPortKey];
    	app_parameters.sync.userID = syncConfigArr[syncUserIDKey];
    	app_parameters.sync.password = syncConfigArr[syncPwdKey];
    	app_parameters.sync.appID = syncConfigArr[syncAppIDKey];
    	app_parameters.sync.batchSize = syncConfigArr[syncBatchSizeKey];
	}
}

function loadSkySettingsFromDevice() {
}

function showSyncSettingsForm () {
	//Sync Settings
	loadSyncSettingsFromDevice();
	frmSyncSettings.txtIP.text = app_parameters.sync.serverHost;
	frmSyncSettings.txtPort.text = app_parameters.sync.serverPort;
	frmSyncSettings.txtUserID.text = app_parameters.sync.userID;
	frmSyncSettings.txtUserPwd.text = app_parameters.sync.password;
	frmSyncSettings.txtAppID.text = app_parameters.sync.appID;
	frmSyncSettings.txtBatchSize.text = app_parameters.sync.batchSize;
	frmSyncSettings.show();		
}

function saveSyncSettings() {
	//Sync Settings
	app_parameters.sync.serverHost = frmSyncSettings.txtIP.text;
	app_parameters.sync.serverPort = frmSyncSettings.txtPort.text;
	app_parameters.sync.userID = frmSyncSettings.txtUserID.text;
	app_parameters.sync.password = frmSyncSettings.txtUserPwd.text;
	app_parameters.sync.appID = frmSyncSettings.txtAppID.text;
	app_parameters.sync.batchSize = frmSyncSettings.txtBatchSize.text;

	//updating the sync datastore with new settings
	var syncConfigArr = {};	
	syncConfigArr[syncServerHostKey] = app_parameters.sync.serverHost;
    syncConfigArr[syncServerPortKey] = app_parameters.sync.serverPort;
    syncConfigArr[syncUserIDKey] = app_parameters.sync.userID;
    syncConfigArr[syncPwdKey] = app_parameters.sync.password;
    syncConfigArr[syncAppIDKey] = app_parameters.sync.appID;
    syncConfigArr[syncBatchSizeKey] = app_parameters.sync.batchSize;
	kony.store.setItem(syncConfigKey, syncConfigArr);
	
	callAlert(getMessageTemplate("settingsSaveSuccess"), "info");
}

function initSyncSkySession() {
	showSyncLoadingScreen("Initializing Sky Sync");
	loadSkySettingsFromDevice();
	var config = {};
	config.SERVER = skyServerHost;
	config.PORT = skyServerPort;
	config.PROFILE = skyProfile;
	config.onProvisionError = syncskyinit_errorcallback ;
    config.onProvisionSuccess = syncskyinit_successcallback;
	skySync.init(config);
}

function syncskyinit_successcallback(outputparams) {
	callAlert(getMessageTemplate("syncInitSuccess"), "info");
	showSyncLoadingScreen("Initializing Sync Success");
	dismissSyncLoadingScreen();
	
} 

function syncskyinit_errorcallback(outputparams) {
	//callAlert(constructErrorMsg(getMessageTemplate("syncInitFailure"),outputparams),"error");
	popupModel.showPopError("Une erreur s'est produite, veuillez contacter votre support. (syncinit)" );
	dismissSyncLoadingScreen();
}

function syncSkyStartSession() {
	var config = {};	
    //iOS Porting changes - Start
  	//config.retrywittime = 5;	
	//config.numberofretryattempts = 3;
	//config.retryerrorcodes = [1000, 1011, 1012, 1013, 1014, 1015, 1016];	
    //iOS Porting changes - End
	config.onSkyStart = onSkySyncStartCallback;	
	config.onSkySuccess = onSkySyncSuccessCallback;
	config.onSkyError = onSkySyncErrorCallback;	
	config.onIndentifyStart = onIndentifyStartCallback;
	config.onIndentifyError = onIndentifyErrorCallback;
	config.onIndentifySuccess = onIndentifySuccessCallback;
	config.onSessionStart = onSessionStartCallback;	
	config.onSessionSuccess = onSessionSuccessCallback;
	config.onSessionError = onSessionErrorCallback;	
	showSyncLoadingScreen("Starting SkySync Session")
	loadSkySettingsFromDevice();
	config.USER = skyUserID;
   	config.PASSWORD = skyPwd;    	
	skySync.startSession(config);
}

function onSkySyncStartCallback(outputparams) {
	showSyncLoadingScreen("Sky Sync Started");
}

function onSkySyncSuccessCallback(outputparams) {
	callAlert(getMessageTemplate("syncSuccess"), "info")
	showSyncLoadingScreen("Sky Sync Success");
	dismissSyncLoadingScreen();
}

function onSkySyncErrorCallback(outputparams) {
	popupModel.showPopError("Une erreur s'est produite, veuillez contacter votre support." );
	dismissSyncLoadingScreen();
}

function onIndentifyStartCallback(outputparams) {
	showSyncLoadingScreen("Sky Sync Started");
}

function onIndentifySuccessCallback(outputparams) {
	showSyncLoadingScreen("Identified Successfully");
}

function onIndentifyErrorCallback(outputparams) {	
	popupModel.showPopError("Une erreur s'est produite, veuillez contacter votre support. (identify)" );
	dismissSyncLoadingScreen();
}

function onSessionStartCallback(outputparams) {
	showSyncLoadingScreen("Session Started");
}

function onSessionSuccessCallback(outputparams) {
	showSyncLoadingScreen("Session Successfully");
}

function onSessionErrorCallback(outputparams) {	
	popupModel.showPopError("Une erreur s'est produite, veuillez contacter votre support. (session)" );
	dismissSyncLoadingScreen();
}

function resetSyncSkySession() {
	var config = {};
	showSyncLoadingScreen("Starting Sync Session")
	
	config.onResetError =syncskyreset_errorcallback ;
	config.onResetSuccess = syncskyreset_successcallback;
	skySync.reset(config);
}

function syncskyreset_successcallback(outputparams) {	
	popupModel.showPopError("Une erreur s'est produite, veuillez contacter votre support.");
	showSyncLoadingScreen("Reset Sky Sync Success");
	dismissSyncLoadingScreen();
}

function syncskyreset_errorcallback(outputparams) {
	popupModel.showPopError("Une erreur s'est produite, veuillez contacter votre support.");
	showSyncLoadingScreen("Reset Sky Sync Failure");
	dismissSyncLoadingScreen();
}

function stopSyncSkySession() {
	var config = {};
	showSyncLoadingScreen("Stopping Sync Session");
	
	config.onStopError = syncskystop_errorcallback;
	config.onStopSuccess = syncskystop_successcallback;
	skySync.stop(config);
}

function syncskystop_successcallback(outputparams) {
	popupModel.showPopError("Une erreur s'est produite, veuillez contacter votre support.");
	showSyncLoadingScreen("Stopping Sky Sync Success");
	dismissSyncLoadingScreen();
}

function syncskystop_errorcallback(outputparams) {
	popupModel.showPopError("Une erreur s'est produite, veuillez contacter votre support.");
	showSyncLoadingScreen("Stopping Sky Sync Failure");
	dismissSyncLoadingScreen();
}

function NavigateToFormScopes() {
	form.show(frmSyncScopes)
}
