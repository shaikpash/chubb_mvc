societyModel = {};


	societyModel.getSocietyByAgence = function(agenceId){
	
		callBackModel.result = null;
		callBackModel.context.sql = "SELECT SPHD FROM UDC WHERE SY='56' AND RT='MA' AND KY='"+agenceId + "' ";
		callBackModel.resultArray = [];
		executeSql(callBackModel.context.sql, callBackModel.arraySuccessCB, callBackModel.sqlErrorCB);
		if(callBackModel.resultArray.length == 0){
			alert("Erreur lors de la détection de l'agence. Chubb par défaut");
			return "002";
		}else{
			return callBackModel.resultArray[0].SPHD;
		}	
		};