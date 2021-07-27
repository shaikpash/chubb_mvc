//Configuration Parameters
if(kony===undefined){
	kony = {};
}
if(kony.appgen===undefined){
	kony.appgen = {};
}

kony.appgen.comingFromDelete = false;

gblLimitForListView = 20; //Variable that holds the limit of records to be displayed in list view
limitForListView = gblLimitForListView;

function showObjectListForm(){
	gblComingFromHome = true;
	limitForListView = gblLimitForListView;
	offsetForListView = 0;
	isPageLimit = false;
showSyncLoadingScreen("Loading Data");
	if(frmHome.seguiObjects.selectedIndex[1]==0){
		getAllUsers();
	}
}
function eventErrorCallBack(err){
	if(err!=null && err["errorMessage"]!=null)
		callAlert(constructErrorMsg("Error",err),"error");
	else
		callAlert(getMessageTemplate("generalError"),"error");

	dismissSyncLoadingScreen();
}
function setAppMenuForAppGeneration(){
	kony.print("setApplicationCallbacks");
	kony.application.setApplicationCallbacks({onappterminate : onApplicationQuit});

	kony.application.setApplicationBehaviors({hideStatusBar:false});
/*
	var myAppMenu = [];
	myAppMenu[0]= ["id0", "Home", "home.png", navigateToHomeForm];

	if(kony.os.deviceInfo().name=="iPhone" || kony.os.deviceInfo().name=="iPad"){
		myAppMenu[1] = ["id1", "Users", "dflt.png", getAllUsersFromMenu];
	}
	else{
		myAppMenu[1] = ["id1", "Users", "dflt.png", getAllUsersFromMenu];
	}
	kony.application.createAppMenu("defaultAppMenu", myAppMenu, "Skin Defaults", "Skin Defaults");
	kony.application.setCurrentAppMenu("defaultAppMenu");
*/
}
function navigateToHomeForm(){
	frmHome.show();
}

function onApplicationQuit(){
	kony.print("onApplicationQuit");	
	sequence.changeTo(0, null); // immediately finish ending sequence.
}

function showSyncLoadingScreen(text){
	text = (text == undefined) ? "" : text;
	var skin = (text.length == 0) ? sknBlockedDots : sknBlockedTxt;
	var dotsColor = "FFFFFF00";
	
	text = " " + text + " \n"; 
	kony.application.showLoadingScreen(
		skin, text,
		constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,
		{	progressIndicatorColor : dotsColor});
}

function dismissSyncLoadingScreen(){
	kony.application.dismissLoadingScreen();
}

function navigateToAppMenuMoreForm(){
	//frmAppMenuMore.show(); //Dhaval:Commented as per suggestion from client
}

function showObjectListFormFromAppMenu(){
}

function searchSegment(mySegUi,searchString,key,mapObject, criteria){
	var myObj = [];
	var j=0;
	if(criteria == null) criteria = "startsWith";
	if (null == mapObject) return;
    if (null == mapObject[0]) return;
    if (null == mapObject[0][key]) return;
    if (searchString == null) searchString = "";
	searchString = searchString + "";
	
	if(kony.string.equalsIgnoreCase(criteria,"endsWith")){
		for(i in mapObject){
			if(kony.string.endsWith(mapObject[i][key] + "", searchString, true)){
				myObj[j] = mapObject[i];
				j++;
			}
		}
	}
	else if(kony.string.equalsIgnoreCase(criteria,"contains")){
		searchString = kony.string.lower(searchString + "");
		for(i in mapObject){
			var searchObject = kony.string.lower(mapObject[i][key] + "");
			if(kony.string.find(searchObject,searchString)!=null){
				myObj[j] = mapObject[i];
				j++;
			}
		}
	}
	else if(kony.string.equalsIgnoreCase(criteria,"startsWith")){
		for(i in mapObject){
			if(kony.string.startsWith(mapObject[i][key] + "", searchString, true)){
				myObj[j] = mapObject[i];
				j++;
			}
		}
	}


	mySegUi.setData(myObj);
}

//Function for checking undefined values
function checkUndefined(val){
	if(val==null || val+""=="undefined")
		return "";
	else
		return val+"";	
}

//Function to open URL
function callURL(url){
	if(kony.string.startsWith(url,"http://",true) || kony.string.startsWith(url,"https://",true)){
		kony.application.openURL(url)
	}
	else{
		kony.application.openURL("http://"+url)
	}
	
}

//common message function
function getMessageTemplate(operation,entityName){
	if(entityName == null)
		entityName=null
	//delete message template
	if(operation =="delete")
		return ("Are you sure you want to delete "+entityName+" ?")
	if(operation == "deleteSuccess")
		return (entityName + " deleted successfully.")
	if(operation == "deleteFailure")
	
	//update message template
		return ("Some problem occurred while deleting "+entityName)
	if(operation == "updateSuccess")
		return (entityName + " updated successfully.")
	if(operation == "updateFailure")
		return ("Some problem occurred while updating "+entityName)
		
	//add message template
	if(operation == "addSuccess")
		return(entityName + " added successfully.")
	if(operation == "addFailure")
		return("Some problem occurred while adding "+entityName)
		
	//sync message template
	if(operation == "syncSuccess")
		return("Sync Success")
	if(operation == "syncError")
		return("Sync Error")
	if(operation == "syncInitSuccess")
		return ("Sync Init Success")
	if(operation == "syncInitFailure")
		return ("Sync Init Failure")
	if(operation == "syncResetSuccess")
		return("Sync reset successfully")
	if(operation == "syncResetFailure")
		return("Sync reset failed")
	if(operation == "rollbackSuccess")
		return("All recent changes rollbacked successfully")
	if(operation == "rollbackFailure")
		return("Problem occurred in rollbacking recent changes")
	if(operation == "syncStopFailure")
		return("Stopping Sky Sync Failure")
	if(operation == "syncSuccessFailure")
		return("Sync Stop Success")
		
	//settings message template
	if(operation == "settingsSaveSuccess")
		return("Settings saved successfully.")
	if(operation == "settingsSaveFailure")
		return("Some problem occured while saving settings.")
		
	//misc message template
	if(operation =="noData")
		return("No Data To Display")
	if(operation == "generalError")
		return("Some error occurred while doing requested operation")
	
}

function callAlert(msg,type,alertHandler,title,yesLabel,noLabel) {

	var numType;
	var pspConf = {};
	var basicConf;
	
	          

	if(yesLabel==null) yesLabel = "Ok"
	if(noLabel==null)  noLabel = "Cancel"
	if(alertHandler == null) alertHandler = null;
	if(title == null) title = ""
	if(type=="info"){
		numType = constants.ALERT_TYPE_INFO;
	}
	if(type=="error"){
		numType = constants.ALERT_TYPE_ERROR;
	}
	if(type=="confirmation"){
		numType = constants.ALERT_TYPE_CONFIRMATION; 
	}
		basicConf = {message: msg,alertType:numType ,alertTitle: title ,yesLabel:yesLabel,noLabel: noLabel, alertHandler: alertHandler};
		kony.ui.Alert(basicConf,pspConf);
}


function convertDateToYYYYMMDD(inDate,inChar){
	// inDate format should be: DD/MM/YYYY	
	var outDate = "";
	if(inDate != null && inDate != "0"){
    	var dateTab = inDate.split(inChar)
    	outDate = dateTab[2] + dateTab[1] + dateTab[0]; 
	}
	return outDate;
}


/*
************************************************************************************************
This function is used to convert date yyyymmdd format of ddmmyyy,mmddyyyy,yyyymmdd with required
spliter.
input parameters are :
	inDate: date in yyyymmdd
	dateFormat : ddmmyyy,mmddyyyy,yyyymmdd (one of these)
	spliter : -,/ which ever needed.
************************************************************************************************
--*/

function formatDateFromSky( inDate, dateFormat, spliter ){
	var outDate = "";
	if((inDate != null && inDate != "0")){
		var year = kony.string.sub(inDate, 0, 3);
		var month = kony.string.sub(inDate, 4, 5);
		var day = kony.string.sub(inDate, 6, 7);
		if((dateFormat == "ddmmyyyy")){
			outDate = day + spliter + month + spliter + year;
		}else if((dateFormat == "mmddyyyy")){
			outDate = month + spliter + day + spliter + year;
		}else if((dateFormat == "yyyymmdd")){
			outDate = year + spliter + month + spliter + day;
		}
	}
	return outDate;
}

/*
***********************************************************************
*	Name    : formatToSetDate
*	Purpose : This function will change the format of given date as table to set calendar widget
*   Params  : date
***********************************************************************
--*/

function formatToSetDate( givendate ){
	var calWidgetTab = [  ];
	if(givendate != null && givendate != ""){
    	calWidgetTab = (givendate).split ("/");    	
    	if((kony.os.deviceInfo().name == "blackberry")){
    		var mmm = kony.os.toNumber(calWidgetTab[ kony.decrement(2) ]);
    		var ddd = kony.os.toNumber(calWidgetTab[ kony.decrement(1) ]);
    		var yyy = kony.os.toNumber(calWidgetTab[ kony.decrement(3) ]);
    		var temp = [  ];
    		temp = [ mmm, ddd, yyy ];
    		return temp;
    	}else{
    		var mmm = calWidgetTab[ kony.decrement(2) ];
    		var ddd = calWidgetTab[ kony.decrement(1) ];
    		var yyy = calWidgetTab[ kony.decrement(3) ];
    		calWidgetTab = [ ddd , mmm , yyy ];
    		return calWidgetTab;
    	}
	}
	return givendate;
}

function goBack(expr){
	expr();
}
//Function to build error message from error code and message
function constructErrorMsg(operation,errorArguments){
	var errMsg = "";
	if(!kony.sync.isNull(operation)){
		errMsg = errMsg.concat(operation);		
		if(!kony.sync.isNull(errorArguments)){			
			if(!kony.sync.isNull(errorArguments.errorCode) && !kony.sync.isNull(errorArguments.errorMessage)){
				errMsg = errMsg.concat("\n");
				errMsg = errMsg.concat("Error Code : ");
				errMsg = errMsg.concat(errorArguments.errorCode);		
				errMsg = errMsg.concat("\n");
				errMsg = errMsg.concat("Error Message : ");
				errMsg = errMsg.concat(errorArguments.errorMessage);
				if(!kony.sync.isNull(errorArguments.errorInfo)){
					errMsg = errMsg.concat("\n");
					errMsg = errMsg.concat("Error Info : ");
					errMsg = errMsg.concat(JSON.stringify(errorArguments.errorInfo, null, " "));
				}
			}	
		}
	}
	return errMsg;
}

function clearCalenderWidget(id){
	//#ifdef android
	id.dateComponents = {};
	//#else
		//#ifdef tabrcandroid
	id.dateComponents = {};
		//#else
	id.clear();
		//#endif
	//#endif
}