define({ 

//   //Type your controller code here 
//   onNavigate: function(){
//     this.view.init = this.init;
//     this.view.preShow = this.preShow;
//   },
//   init: function(){
//     login.init();
//     initialiseCore();
//     initWOShift();
//   },
//   preShow: function () {
//     otis.application.setCurrentAppMenu("loginAppMenu");//Dhaval:Invocation of custom app menu
//     login.localUser = kony.store.getItem("currentUser");
//     frmLogin.flxContainerEE.isVisible = false;
//     frmLogin.IDtext.text = "";
//     frmLogin.PwdText.text = "";
//     frmLogin.NameTxt.text = "";
//     frmLogin.e11VersionLbl.text = global.kernel.getMarkedVersion();
//     frmLogin.lblSyncVersion.text = "Sync " + global.kernel.getSyncVersion().replace('UNItec_', '');

//     settingPopUp.txtBatchSize.text = app_parameters.sync.batchSize;
//     settingPopUp.txtBoxCheat.setEnabled(false); 
//     settingPopUp.txtImageScale.text = app_parameters.sync.imageScale;

//     var debugLogLevelMasterData = [];
//     debugLogLevelMasterData.push(['0', 'NO']);
//     debugLogLevelMasterData.push(['1', 'YES']);
//     settingPopUp.CmbBoxIsDebugLogLevel.masterData = debugLogLevelMasterData;
//     settingPopUp.CmbBoxIsDebugLogLevel.selectedKey = app_parameters.sync.isDebugLogLevel ? '1' : '0';

//     if (!validationModel.isNull(login.localUser) && !validationModel.isNull(login.localUser.AN8)) {
//       frmLogin.IDtext.text = login.localUser.AN8;
//       frmLogin.flxFingerprint.isVisible = true;
//       login.onLoginIdChange();
//     }else{
//       frmLogin.flxFingerprint.isVisible = false;
//     }

//     if (app_parameters.debug.on)
//       login.debug_AddLoginOptions();

//     if (app_parameters.debug.no_sync && !validationModel.isNull(login.localUser) && !validationModel.isNull(login.localUser.AN8)){
//       frmLogin.IDtext.text = login.localUser.AN8;

//       if ("209511" == login.localUser.AN8)
//         frmLogin.PwdText.text = 'Unicom12345@';
//       else
//         frmLogin.PwdText.text = '000000';
//       login.onBtnLoginClick();
//     }

//     if(!checkIfNetworkAvailable()){
//       frmLogin.lblNetwork.isVisible = true;
//       frmLogin.lblNetwork.text = "(Vous ne semblez pas connecté à internet)";
//     }else{
//       frmLogin.lblNetwork.isVisible = false;
//     }

//     cameraComment.preshow();

//   }

});

