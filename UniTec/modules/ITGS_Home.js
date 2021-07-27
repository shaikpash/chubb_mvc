home = {};

home.init = function(){
	var appMenu = [
		["MODPWD", "Mot de passe", "key.png", onClickKey],
      	//TEMP : ajout d'un bouton pour tester la réconciliation séparément
      	// ["RECONCILIATE", "Réconcilier", "recycle.png", onReconciliateClick],
		["LOGOUT", "Sortie", "exit.png", onLogoutClick]
	];
  //loadFfiConfig();
  //Dhaval:Fix for issue app menu not working start
	function onClickKey(){
    home.passwordModify();
  }
  function onLogoutClick(){
    login_onLogoutClicked();
  }
  function onReconciliateClick() {    
    global.syncController.reconciliate();
  }
  //End
	otis.application.createAppMenu("homeAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
};

home.preshow = function(){

	frmHome.vbPlay.isVisible = app_parameters.lifetime.pause_bool;

	otis.application.setCurrentAppMenu("homeAppMenu");//Dhaval:Invocation of custom app menu

	frmHome.lblWelcome.text = "Bienvenue " + login.user.Username;
	frmHome.homeTimelbl.text = dateTimePrintSql(new Date());
	kony.application.dismissLoadingScreen();
  
  app_parameters.lifetime.switchWorkOrder = null;
  
  if(app_parameters.lifetime.society == "001"){
    frmHome.hbxDelegation.isVisible = true;
  }else{
    frmHome.hbxDelegation.isVisible = false;
  }

}

home.passwordModify = function () {

	if (kony.store.getItem("currentUser") != undefined) {

		login.user = kony.store.getItem("currentUser");

		if (frmLogin.IDtext.text != login.user.AN8) {
			popupModel.showPopError("L'utilisateur est inconnu ou n'est pas le dernier utilisateur connecté. (1)");
			return;
		} else {
			frmUserPasswordChange.show();
		}

	} else {
		popupModel.showPopError("L'utilisateur est inconnu ou n'est pas le dernier utilisateur connecté. (2)");
		return;
	}
}

home.syncAppDiff = function() {

	function onDiffSuccess() {
		popupModel.showPopError("Synchronisation différentielle terminée avec succès !");
	}

	function onDiffFailure() {
		popupModel.showPopError("Échec de la synchronisation différentielle : veuillez réessayer.");
	}

	function confirm() {
		global.syncController.syncAll(onDiffSuccess, onDiffFailure);
	}
	var textSync = "Désirez-vous synchroniser vos données actuelles ?";
  	if(!checkIfNetworkAvailable()){
      textSync += "\n(Vous ne semblez pas connecté à Internet)";
    }
	popupModel.showPopError(textSync, confirm, null, true);
};

home.onEquipmentOrderClick = function() {
	if (app_parameters.lifetime.limited_access)
		popupModel.showPopError("Vous ne possédez pas les droits nécessaires pour accéder à cette section.");
	else
		equipmentOrderOverview.openOrder();
};

home.onInventoryClick = function() {
	if (app_parameters.lifetime.limited_access)
		popupModel.showPopError("Vous ne possédez pas les droits nécessaires pour accéder à cette section.");
	else
		equipmentOrderOverview.openInventory();
};

home.onPlayClick = function(){
		// resumeBT
	workOrder = workOrderModel.findWorkOrderByWhereClause('55');
	kony.print(workOrder);
	app_parameters.lifetime.pause_bool = false;
	frmWOSummary.show();
}

// POST SHOW ACTION

home.postShow = function(){

};

home.resetSync = function() {
  
  function resetConfirm() {

		function resetSuccess() {
			popupModel.showPopError("Synchronisation terminée : toutes les données sont à jour.");
		}

		function resetFailure() {
			kony.store.setItem("currentUser", null);
			sequence.changeTo(sequence.values.applicationExit, null);
			popupModel.showPopError("La synchronisation n'a pas pu être complétée : veuillez vous reconnecter pour relancer la synchronisation.");
			frmLogin.show();
		}
    
    	function startSync() {
      		global.syncController.syncAll(resetSuccess, resetFailure);
    	}

		sync.reset(startSync);
	}

	function saveConfirm() {

		function onSaveSuccess() {
			resetConfirm();
		}

		function onSaveFailure() {
			var msg = "ATTENTION : l'avancement de travail depuis la dernière synchronisation n'a pas pu être sauvegardée et sera définitivement perdu si vous continuez.";
			msg += "\n\nSouhaitez-vous continuer ?";
			popupModel.showPopError(msg, resetConfirm, undefined, true);
		}

		global.syncController.saveUserWork(onSaveSuccess, onSaveFailure);
	}

	var msg = "La remise à zéro recharge l'intégralité des données et peut durer plusieurs minutes. Êtes-vous certain de vouloir réinitialiser toutes les données ?";
	popupModel.showPopError(msg, saveConfirm, undefined, true);
};



function login_onLogoutClicked(){

	function onLogoutSyncSuccess() {
		popupModel.showPopError("Données de travail synchronisées avec succès : vous pouvez fermer l'application.");
		frmLogin.show();
	}

	function onLogoutSyncFail() {
		frmLogin.show();
	}

	function warningCB(){
		sequence.changeTo(sequence.values.applicationExit, null);
		global.syncController.saveUserWork(onLogoutSyncSuccess, onLogoutSyncFail);
	}

	popupModel.showPopError("Êtes-vous certain de vouloir vous déconnecter ? (Vos données de travail seront synchronisées)", warningCB, undefined, true);
}
