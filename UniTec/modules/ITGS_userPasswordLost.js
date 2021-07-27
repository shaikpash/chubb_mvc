userPasswordLost = {};

userPasswordLost.init = function(){
	var appMenu = [
		["userPasswordLost.BACK", "Retour", "left.png", onBackClick],
		["userPasswordLost.VALID", "Valider", "check.png",userPasswordLost.onBtnSaveClick]
	];
  	//Dhaval:Fix for app menu not working
	function onBackClick(){
      navigationModel.doReturn();
    }
	otis.application.createAppMenu("userPasswordLostAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu

}

userPasswordLost.preShow = function () {
	otis.application.setCurrentAppMenu("userPasswordLostAppMenu");//Dhaval:Invocation of custom app menu
	
	function setQuestion(res){
		if (!validationModel.isNull(res) && res.length !=0){
			frmUserPasswordLost.questionLbl.text = res[0].RMK;
		}else{
			popupModel.showPopError("Erreur : Pas de question enregistrée !");
		}
		
	}
	
	frmUserPasswordLost.answerTxt.text = "";
	frmUserPasswordLost.newPwdTxt1.text = "";
	frmUserPasswordLost.newPwdTxt2.text = "";
	
	localUser = kony.store.getItem("currentUser");
	if (validationModel.isNull(localUser)) {
		popupModel.showPopError("Erreur : Utilisateur local introuvable.");
		return ;
	}
	de.itgs.Masterdata.F56PRM.find("where tydt = 'QL' and ky = '" + localUser["SecurityQuestionKy"] + "' ", setQuestion ,eventErrorCallBack);
}

userPasswordLost.onBtnSaveClick = function () {
	// check answer to question is correct
	if (login.user["SecurityQuestionAnswer"].toUpperCase() == frmUserPasswordLost.answerTxt.text.toUpperCase()) {
		
	} else {
		popupModel.showPopError("Votre réponse est incorrecte.");
		return;
	}

	// check there is a new password
	if (frmUserPasswordLost.newPwdTxt1.text.length == 0){
		popupModel.showPopError("Merci d'entrer nouveau un mot de passe.");
		return;
	}
	
	// check the new password is different from the old one
	var isSameAsOldPassword = userModel.verifyUserPasswordHistory(frmUserPasswordLost.newPwdTxt1.text, 5);
	if (isSameAsOldPassword) {
		popupModel.showPopError("Le nouveau mot de passe ne peut pas être le même qu'un des anciens.");
		return;
	}
	
	// check the new password is different from the old one
	var isSameAsOldPassword = userModel.verifyUserPasswordHistory(frmUserPasswordLost.newPwdTxt1.text, 5);
	if (isSameAsOldPassword) {
		popupModel.showPopError("Le nouveau mot de passe ne peut pas être le même qu'un des anciens.");
		return;
	}

	// check new password is security compliant
	if (! isPasswordFormat(frmUserPasswordLost.newPwdTxt1.text)){
		popupModel.showPopError("Mot de passe non conforme. Longueur entre 8 et 16 caractères avec au moins trois parmi les quatres des types suivants : minuscules, majuscules, chiffres, caractères spéciaux");
		return;
	}
	
	// check both passwords are the same
	if (frmUserPasswordLost.newPwdTxt1.text != frmUserPasswordLost.newPwdTxt2.text) {
		popupModel.showPopError("Les mots de passe sont différents !");
		return;
	}
	
	login_changePwd(frmUserPasswordLost.newPwdTxt1.text, 
				function(){frmLogin.show()},
				eventErrorCallBack);
}