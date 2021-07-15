callBackModel = {
	context : {sql: null},
	result: null,
	resultArray: [],
	sqlErrorCB : 
		function (error) { 
			popupModel.showPopError("Error executing: " + callBackModel.context.sql); 
		},
	konyErrorCB : 
		function (error) { 
			popupModel.showPopError("Kony error occurred: " + JSON.stringify(error)); 
		},
  konyErrorCB1 : 
		function (error) { 
			popupModel.showPopError("Kony error occurred1: " + JSON.stringify(error)); 
		},
  konyErrorCB2 : 
		function (error) { 
			popupModel.showPopError("Kony error occurred2: " + JSON.stringify(error)); 
		},
  konyErrorCB3 : 
		function (error) { 
			popupModel.showPopError("Kony error occurred3: " + JSON.stringify(error)); 
		},
  konyErrorCB4 : 
		function (error) { 
			popupModel.showPopError("Kony error occurred4: " + JSON.stringify(error)); 
		},
  konyErrorCB5 : 
		function (error) { 
			popupModel.showPopError("Kony error occurred5: " + JSON.stringify(error)); 
		},
	arraySuccessCB : 
		function (l_resultArray) { 
          	kony.print("l_resultArray"+JSON.stringify(l_resultArray));
			if (!validationModel.isNull(l_resultArray) && l_resultArray.length > 0) callBackModel.resultArray = l_resultArray; 
			//kony.print("Results found: " + JSON.stringify(callBackModel.resultArray));
		},
	valueSuccessCB : 
		function (l_result) { 
			if (!validationModel.isNull(l_result) && l_result.length > 0) callBackModel.result = l_result[0].value;
			//kony.print("Result found: " + JSON.stringify(callBackModel.result));
		},
	intValueSuccessCB : 
		function (l_result) { 
			if (!validationModel.isNull(l_result) && l_result.length > 0)
				callBackModel.result = parseInt(l_result[0].value);
		},
	successCB : 
		function (l_result) { 
			if (!validationModel.isNull(l_result)) {
				if (l_result instanceof Array && l_result.length > 0) callBackModel.result = l_result[0];
				else if (l_result instanceof Array && l_result.length == 0) callBackModel.result = undefined;
				else callBackModel.result = l_result;
			}
			//kony.print("Result found: " + JSON.stringify(callBackModel.result));
		},
	emptyCB :
		function () {},
	executeSingleResult : 
		function() {
			executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
		},
	executeWithCB :
		function(customCallBack) {
			executeSql(callBackModel.context.sql, customCallBack, callBackModel.sqlErrorCB);
		}
};
