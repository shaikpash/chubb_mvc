userPasswordChange = {};

userPasswordChange.init = function(){
	var appMenu = [
		["userPasswordChange.BACK", "Annuler", "left.png", onBackClick],
		["userPasswordChange.VALID", "Enregistrer", "check.png", userPasswordChange.onBtnSaveClick]
	];
  //Dhaval:Fix for app menu not working
function onBackClick(){
      navigationModel.doReturn();
    }
	otis.application.createAppMenu("userPasswordChangeAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu

}

userPasswordChange.preshow = function(){

	otis.application.setCurrentAppMenu("userPasswordChangeAppMenu");//Dhaval:Invocation of custom app menu
	
	frmUserPasswordChange.oldPwdtxt.text= '';
	frmUserPasswordChange.newPwdTxt1.text= '';
	frmUserPasswordChange.newPwdTxt2.text= '';
}

userPasswordChange.onBtnSaveClick = function () {
	// check old password is correct
	if (SHA256(frmUserPasswordChange.oldPwdtxt.text) != login.user.UserPassword) {
		popupModel.showPopError("Votre ancien mot de passe n'est pas correct.");
		return;
	}

	// check there a new password
	if (frmUserPasswordChange.newPwdTxt1.text.length == 0){
		popupModel.showPopError("Merci d'entrer un mot de passe.");
		return;
	}
	
	// check the new password is different from the old one
	var isSameAsOldPassword = userModel.verifyUserPasswordHistory(frmUserPasswordChange.newPwdTxt1.text, 5);
	if (frmUserPasswordChange.oldPwdtxt.text == frmUserPasswordChange.newPwdTxt1.text || isSameAsOldPassword) {
		popupModel.showPopError("Le nouveau mot de passe ne peut pas être le même qu'un des anciens.");
		return;
	}
	
	// check new password is security compliant
	if (! isPasswordFormat(frmUserPasswordChange.newPwdTxt1.text)){
		popupModel.showPopError("Mot de passe non conforme. Longueur entre 8 et 16 caractères avec au moins trois parmi les quatres des types suivants : minuscules, majuscules, chiffres, caractères spéciaux");
		return;
	}

	// check both passwords are the same
	if (frmUserPasswordChange.newPwdTxt1.text != frmUserPasswordChange.newPwdTxt2.text) {
		popupModel.showPopError("Les mots de passe sont différents!");
		return;
	}
	
	login_changePwd(frmUserPasswordChange.newPwdTxt1.text, 
					function(){frmLogin.show()},
					eventErrorCallBack);
}