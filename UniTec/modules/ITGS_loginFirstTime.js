var loginQuestionsQuery = " \
select  \
	ky as qky, \
	RMK as question \
	from f56prm \
	where tydt = 'QL'";


function isPasswordFormat (pwd){
	upper = /[A-Z]/.test(pwd);
	lower = /[a-z]/.test(pwd);
	number = /[0-9]/.test(pwd);
	wild = /[\W]/.test(pwd);

	return (pwd.length>=8) && (pwd.length<=16) &&
	(upper + lower + number + wild >=3) ;
}

function login_confirmFirstLogin() {

	function updateUserSuccessCallback3(){
		//popupModel.showPopError("Update User Success");
		login.user["SecurityQuestionKy"] = frmLoginFirstTime.questionsCmb.selectedKey;
		login.user["SecurityQuestionAnswer"] = frmLoginFirstTime.answerTxt.text;
		login.user["UserPassword"] = frmLoginFirstTime.newPwdTxt1.text;
		login.user["passwordDate"] = changeDate;
		kony.store.setItem("currentUser", login.user);

		frmHome.show();
	}

	function errorFailCallback3(res){
		popupModel.showPopError("Update User failed with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
	}


	if (frmLoginFirstTime.answerTxt.text.trim().length == 0){
		popupModel.showPopError("Merci d'entrer une réponse à la question choisie.");
		return;
	}

	// check there a new password
	if (frmLoginFirstTime.newPwdTxt1.text.length == 0){
		popupModel.showPopError("Merci d'entrer un mot de passe.");
		return;
	}

	// check the new password is different from the old one
	var isSameAsOldPassword = userModel.verifyUserPasswordHistory(frmLoginFirstTime.newPwdTxt1.text, 5);
	if (isSameAsOldPassword) {
		popupModel.showPopError("Le mot de passe ne peut pas être le même qu'un des anciens.");
		return;
	}

	// check new password is security compliant
	if (! isPasswordFormat(frmLoginFirstTime.newPwdTxt1.text)){
		popupModel.showPopError("Mot de passe non conforme. Longueur entre 8 et 16 caractères avec au moins trois parmi les quatres des types suivants : minuscules, majuscules, chiffres, caractères spéciaux");
		return;
	}

	// check both passwords are the same
	if (frmLoginFirstTime.newPwdTxt1.text != frmLoginFirstTime.newPwdTxt2.text) {
		popupModel.showPopError("Les mots de passe sont différents !");
		return;
	}

	// save un Users Tabe
	var changeDate = new Date();
	var inputArray = [];
	inputArray[0] = {};
	inputArray[0].changeSet = {};
	inputArray[0].changeSet.SecurityQuestionKy = frmLoginFirstTime.questionsCmb.selectedKey;
	inputArray[0].changeSet.SecurityQuestionAnswer = frmLoginFirstTime.answerTxt.text;
	inputArray[0].changeSet.UserPassword = SHA256(frmLoginFirstTime.newPwdTxt1.text);
	inputArray[0].changeSet.passwordDate = dateTimePrintSql(changeDate);
	inputArray[0].whereClause = "where Userid = " + login.user["Userid"];
	de.itgs.Login.Users.updateAll(inputArray,updateUserSuccessCallback3,errorFailCallback3);


	// save in local store
	login.user["SecurityQuestionKy"] = frmLoginFirstTime.questionsCmb.selectedKey;
	login.user["SecurityQuestionAnswer"] = frmLoginFirstTime.answerTxt.text;
	login.user["UserPassword"] = SHA256(frmLoginFirstTime.newPwdTxt1.text);
	login.user["passwordDate"] = changeDate;
	kony.store.setItem('currentUser', login.user);

}
function login_onFirtsLoginInit(){
	var appMenu = [
	];

	otis.application.createAppMenu("firtsLoginAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu

}

function login_onFirtsLoginshow(){

	otis.application.setCurrentAppMenu("firtsLoginAppMenu");//Dhaval:Invocation of custom app menu

	function questionsQueryCB(res){
		var qlist = res.map(function (line){
			return [line['qky'],line['question']];}
		);
		frmLoginFirstTime.questionsCmb.masterData = qlist;
	}

	executeSql(loginQuestionsQuery, questionsQueryCB,eventErrorCallBack);

	frmLoginFirstTime.answerTxt.txt = "";
	frmLoginFirstTime.newPwdTxt1.txt ="";
	frmLoginFirstTime.newPwdTxt2.txt ="";


}


function login_changePwd(newPwd, successcallback, errorCallback){

	function updateUserSuccessCallback(){
		//popupModel.showPopError("Update User Success");
		login.user["UserPassword"] = SHA256(newPwd);
		login.user["passordDate"] = changeDate;
		kony.store.setItem("currentUser", login.user);
		popupModel.showPopError("Mot de passe modifie avec succes");

		// Update the user password history
		var valuesArray = {};
		valuesArray.CreatedBy = login.user.AN8;
		valuesArray.CreatedDate = dateTimePrintSql(new Date());
		valuesArray.Userid = login.user.Userid;
		valuesArray.UserPassword = SHA256(newPwd);

      de.itgs.Login.UserPasswordHistory.create(valuesArray, callBackModel.successCB, callBackModel.konyErrorCB, true);

      
      
	function onDiffSuccess() {
		if (successcallback){
          successcallback();
      }
	}

	function onDiffFailure() {
		if (successcallback){
          successcallback();
      }
	}
		global.syncController.syncAll(onDiffSuccess, onDiffFailure);  
    }


	var changeDate = new Date();
	var inputArray = [];
	inputArray[0] = {};
	inputArray[0].changeSet = {};
	inputArray[0].changeSet.UserPassword = SHA256(newPwd);
	inputArray[0].changeSet.passwordDate = dateTimePrintSql(changeDate);
	inputArray[0].whereClause = "where Userid = " + login.user["Userid"];
	de.itgs.Login.Users.updateAll(inputArray,updateUserSuccessCallback,errorCallback);

}
