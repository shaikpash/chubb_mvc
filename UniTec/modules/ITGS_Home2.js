home2 = {
	lastSync : null
};

home2.init = function() {
//loadFfiConfig();
	var appMenu = [
		["HOME2.MODPWD", "Mot de passe", "key.png", onClickKey],
		["HOME2.LOGOUT", "Logout", "exit.png", onLogoutClick],
		["HOME2.PLANNING", "Planning", "week.png", onPlanningClick],
		["HOME2.BASKET", "Panier BT", "cart.png", onCartClick],
		["HOME2.HOME", "retour Accueil", "home.png", homeClick],
		["HOME2.RESETSYNC", "reset base + sync", "updown.png", onClickResetSync]
	];
  //Dhaval:Fix for app menu start
  function onClickKey(){
    home.passwordModify();
  }
  function onLogoutClick(){
    login_onLogoutClicked();
  }
  function onPlanningClick(){
    e122PanningHebdomadaire.show();
  }
  function onCartClick(){
    frmWorkOrders.show();
  }
  function homeClick(){
    navigationModel.doReturn();
  }
  function onClickResetSync(){
    home2.resetSync();
  }
	//End
	otis.application.createAppMenu("home2AppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
};

home2.preShow = function() {

	otis.application.setCurrentAppMenu("home2AppMenu");//Dhaval:Invocation of custom app menu

	// data initialization
	var nextAppointment = null;
	var nextEvent = null;
	var nextNotice = null;
	var currentUser = null;
	var lastSyncDate = null;
	var lastSyncTime = null;
	var leftWorkOrders = null;

	// data load
	currentUser = login.user.Username;

	var whereClause = " where statusCode < 70 and ANP = " + login.user.AN8;
	leftWorkOrders = workOrderModel.findWorkOrdersByWhereClauseAndSortOrder(whereClause).length;

	whereClause = " where AN8 = " + login.user.AN8 + " and TYTN = 'PRV' and DOCO != 'NULL' and DOCO IS NOT NULL and startDate >= date('now') " ;
	var sortOrder = " order by startDate limit 1 ";
	var appointmentsPlannings = workOrderModel.findPlanningsByWhereClauseAndSortOrder(whereClause, sortOrder);
	if(!validationModel.isNull(appointmentsPlannings) && appointmentsPlannings.length > 0) {
		var nextAppointmentRelatedWorkOrder = workOrderModel.findWorkOrderByDoco(appointmentsPlannings[0].DOCO);
		var nextAppointmentDate = (!validationModel.isNull(nextAppointmentRelatedWorkOrder.dateStarted) ? nextAppointmentRelatedWorkOrder.dateStarted : "0000/00/00");
		var nextAppointmentTime = (!validationModel.isNull(nextAppointmentRelatedWorkOrder.timeRequested) ? nextAppointmentRelatedWorkOrder.timeRequested : "00:00:00");
		nextAppointment = nextAppointmentRelatedWorkOrder.location + "\n" + datePrintCustom(dateFromsql(nextAppointmentDate + " " + nextAppointmentTime),"dd/MM/yyyy - hh:mm");
	}

	whereClause = " where AN8 = " + login.user.AN8 + " and TYTN = 'PRV' and (DOCO = 'NULL' or DOCO IS NULL) and startDate >= date('now') " ;
	sortOrder = " order by startDate limit 1 ";
	var eventsPlannings = workOrderModel.findPlanningsByWhereClauseAndSortOrder(whereClause,sortOrder);
	if(!validationModel.isNull(eventsPlannings) && eventsPlannings.length > 0){
		var nextEventJavaDate = dateFromsql(eventsPlannings[0].startDate);
		var nextEventDateTime = !validationModel.isNull(eventsPlannings[0].startDate) ? datePrintCustom(dateFromsql(eventsPlannings[0].startDate),"dd/MM/yyyy - hh:mm") : "";
		nextEvent = eventsPlannings[0].subject + ", " + eventsPlannings[0].detail + "\n" + nextEventDateTime;
	}

	if(!validationModel.isNull(home2.lastSync)) {
		lastSyncDate = datePrintCustom(home2.lastSync,"dd/MM/yyyy");
		lastSyncTime = datePrintCustom(home2.lastSync,"hh:mm");
	}

	// form build
	var lastSync = "";
	lastSync += (validationModel.isNull(lastSyncDate) || lastSyncDate.length == 0) ? "" : " le " + lastSyncDate;
	lastSync += (validationModel.isNull(lastSyncTime) || lastSyncTime.length == 0) ? "" : " à " + lastSyncTime;

	frmHome2.lblLastSync.text = (validationModel.isNull(lastSync) || lastSync.length == 0) ? "Dernière synchronisation inconnue" : "Dernière synchronisation" + lastSync;
	frmHome2.lblUserWelcome.text = (validationModel.isNull(currentUser) || currentUser.length == 0) ? "Bienvenue, utilisateur" : "Bienvenue, " + currentUser;
	frmHome2.tabPaneHome.lblNextAppointment.text = (validationModel.isNull(nextAppointment) || nextAppointment.length == 0) ? "Pas de rendez-vous planifié" : nextAppointment;
	frmHome2.tabPaneHome.lblNextEvent.text = (validationModel.isNull(nextEvent) || nextEvent.length == 0) ? "Pas d'événement planifié" : nextEvent;
	frmHome2.tabPaneHome.lblNotice.text = (validationModel.isNull(nextNotice) || nextNotice.length == 0) ? "Pas d'information récente" : nextNotice;
	frmHome2.tabPaneHome.lblWONotClosed.text = (validationModel.isNull(leftWorkOrders) || leftWorkOrders.length == 0) ? "" : "BTs non clos : " + leftWorkOrders;

};

/**home2.resetSync = function() {
*
*	home2.resetSyncCB = function() {
*		sync.reset(home2.resetSyncCBSuccess);
*	};

*	home2.resetSyncCBSuccess = function() {
*		global.syncController.syncAll(home2.syncCBSuccess, home2.syncCBFail);
*	};
*
*	home2.syncCBSuccess = function () {
*		popupModel.showPopError("Synchronisation terminée : toutes les données sont à jour.");
*	};
*
*	home2.syncCBFail = function() {
*		kony.store.setItem("currentUser", null);
*		sequence.changeTo(sequence.values.applicationExit, null);
*		popupModel.showPopError("La synchronisation n'a pas pu être complétée : veuillez vous reconnecter pour relancer la synchronisation.");
*		frmLogin.show();
*	};
*
*	var msg = "La remise à zéro recharge l'intégralité des données et peut durer plusieurs minutes. Êtes-vous certain de vouloir réinitialiser toutes les données ?";
*
*	popupModel.showPopError(msg, home2.resetSyncCB, undefined, true);
*};
**/
