travelStart = {};

travelStart.init = function(){
	var appMenu = [
		["travelStart.BACK", "Retour", "left.png", navigationModel.doReturn],
		["travelStart.HOME", "Accueil", "home.png", onHomeClick]
	];
  //Dhaval:Fix for app menu not working start
	function onBackClick(){
      navigationModel.doReturn();
    }
  	function onHomeClick(){
      frmHome.show();
    }
  //End
	otis.application.createAppMenu("travelStartAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

travelStart.preShow = function () {
	otis.application.setCurrentAppMenu("travelStartAppMenu");//Dhaval:Invocation of custom app menu
	
	frmTravelStart.hbxReference.lblReference.text = workOrder.getReference();
	frmTravelStart.hbxReference.backgroundColor = workOrder.color;
	frmTravelStart.hbxReference.focusSkin = workOrder.skin;
	
	frmTravelStart.lblAddress.text = (validationModel.isNull(workOrder.location)) ? "" : workOrder.location;
	frmTravelStart.lblAddress.text += (validationModel.isNull(workOrder.locationAdd)) ? "" : "\n" + workOrder.locationAdd;
	frmTravelStart.lblAddress.text += (validationModel.isNull(workOrder.address1)) ? "" : "\n" + workOrder.address1;
	frmTravelStart.lblAddress.text += (validationModel.isNull(workOrder.address2)) ? "" : "\n" + workOrder.address2;
	frmTravelStart.lblAddress.text += (validationModel.isNull(workOrder.address3)) ? "" : "\n" + workOrder.address3;
	if (frmTravelStart.lblAddress.text.length == 0) frmTravelStart.lblAddress.text = "inconnu"; 
	
	frmTravelStart.lblCity.text = (validationModel.isNull(workOrder.zipcode)) ? "" : workOrder.zipcode + " ";
	frmTravelStart.lblCity.text += (validationModel.isNull(workOrder.city)) ? "" : workOrder.city;
	if (frmTravelStart.lblAddress.text.trim().length == 0) frmTravelStart.lblAddress.text = "inconnu"; 
}

travelStart.onGoClicked = function (launchMapApp){
  
  if(launchMapApp == true){
    var addresse = "";	
  addresse += (validationModel.isNull(workOrder.address1)) ? "" : workOrder.address1 + " ";
	addresse += (validationModel.isNull(workOrder.address2)) ? "" : workOrder.address2 + " ";
	addresse += (validationModel.isNull(workOrder.address3)) ? "" : workOrder.address3 + " ";
    addresse += (validationModel.isNull(workOrder.zipcode)) ? "" : "," + workOrder.zipcode + " ";
	addresse += (validationModel.isNull(workOrder.city)) ? "" : workOrder.city;
  kony.application.openURL("waze://?q="+addresse+"&navigate=yes");
  }

	function afterSync() {
		frmTravelling.show();
	};

	function startSync() {
		global.syncController.syncAll(afterSync, afterSync);
	};
	
	
	if (workOrder.statusCode == '42')
		//var msg = "Vous vous apprêtez à démarrer un nouveau BT. Souhaitez-vous mettre à jour vos données de travail ?";
      	var msg = "Voulez-vous synchroniser?";		//Arati:Changed code for JIRA UI-70
		requestSync(startSync, afterSync, msg);
}
