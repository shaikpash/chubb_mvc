version ={
	versions : null,
	lastVersion : null,
	isObsolete : null,
	canSync : null
}


version.check = function() {
	function checkVersions(res) {
		if (!validationModel.isNull(res)) {
			version.versions = res ;
		}
		
		kony.print("versions : " +  JSON.stringify(version.versions));
		
		var currentIndex = de.itgs.javascript.Array.find(
		 	version.versions,
		 	function (a){
		 		return a.version == app_parameters.sync.appID; 
		 	}
		);
		
		
		
		if (currentIndex == -1 ) {
			settingPopUp.btnUpdate.text = "Aucune information de version !";
			settingPopUp.btnUpdate.onClick = callBackModel.emptyCB;
			settingPopUp.btnUpdate.isVisible = true;
			return ;
		}
		
		if (currentIndex > 0) {
			version.lastVersion = version.versions[0].version;
		}
		
		version.isObsolete = 
			dateFromsql(version.versions[currentIndex].supportEndDate) <
			new Date();
		
		version.canSync = 
			dateFromsql(version.versions[currentIndex].syncEndDate) >
			new Date();
			
		
		
		if (!version.canSync) {
			settingPopUp.btnUpdate.isVisible = false;
			popupModel.showPopError("L'application est obsolète. Elle ne doit plus être utilisée. "+
									"La version " + version.lastVersion + 
									" est disponible sur le portail d'entreprise. Merci d'installer celle-ci à la place", kony.application.exit);			
		} else if (version.isObsolete) {
			settingPopUp.btnUpdate.text = "Mettre à jour vers "+ version.lastVersion + ".";
			settingPopUp.btnUpdate.onClick = syncAndExit;
			settingPopUp.btnUpdate.isVisible = true;
			
			popupModel.showPopError("L'application est obsolète. Elle ne doit plus être utilisée. "+
									"La version " + version.lastVersion + 
									" est disponible sur le portail d'entreprise." +
									" Merci d'installer celle-ci à la place." +
									"\nSouhaitez-vous synchroniser vos dernier changements ?", syncAndExit, undefined, true, kony.application.exit);
											
		} else if (!validationModel.isNull(version.lastVersion)) {
			settingPopUp.btnUpdate.text = "Mettre à jour vers "+ version.lastVersion + ".";
			settingPopUp.btnUpdate.onClick = syncAndExit;
			settingPopUp.btnUpdate.isVisible = true;
		} else {
			settingPopUp.btnUpdate.isVisible = false;
		}
	}
	
	function syncAndExit(){
		popupModel.showPopError("L'application va sychroniser vos derniers changements puis quitter.\n"+
								"Vous pourrez ensuite installer la dernière application sur le portail d'entreprise.", global.syncController.syncOldUser, kony.application.exit);
	}

	executeSql(
		"select * from [versions] v " +
		"where v.releaseDate >= ( \n " +
		" select releaseDate from versions v2 " +
		" where v2.[version] = '" + app_parameters.sync.appID + "' \n " +
		") \n " +
		"and v.releaseDate <= '" + dateTimePrintSql(new Date()) + "' " + 
		"order by releaseDate desc ",
		checkVersions,
		callBackModel.konyErrorCB);
}
