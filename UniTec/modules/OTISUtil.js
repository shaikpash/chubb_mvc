//Dhaval:Utility file containing generic functionalities
var gblAppMenuData ={};
var gbl_Util_jsName = 'OTISUtil.js';
//Dhaval:Function to set up App Menu so that it can be created and displayed
function loadFfiConfig(){
  try{
    loadFfiUConfig();
  }catch(error){
    kony.print("loadFfiConfig :: "+error);
  }
}
function loadFfiUConfig(){
  otis = {};


  otis.application = {};
  otis.application.createAppMenu = function(menuId, menuSet, menuSkin, menuFocusSkin){
    kony.print("application.createAppMenu :: "+menuId);
    kony.print("menuSet.length :: "+menuSet.length);
    gblAppMenuData[menuId] = menuSet;
  }
  otis.application.setCurrentAppMenu=function(strMenuId){
    kony.print("&&&& Setting current appmenu with id "+strMenuId)
    var menuArray = gblAppMenuData[strMenuId];
    focusCurrentAppMenu(menuArray);
    focusTabHdr();
  };
  //loadConfigForApp();	
}
function loadConfigForApp(){
  appmenuStatus = "";
  gblMechId = ""; //iOS6.5 TD#1971 - fix for issue while rejecting Service call   
  gblArrivalTimeCheck = false;
  gblOMMSLblSkin = "sknFirstLineBlack";
  gblSpokenCust = false; //iOS7.2 fixes by Kony team
  localJobNumOMMS = ""; //iOS7.2 fixes by Kony team
  localJobNumAddOMMS = ""; //iOS7.2 fixes by Kony team
  resultIsValidTimeEntry = false;
  gblOpenOrderRfrsh = false;
  isAppmenu = true;
  isIPhone = false;
  gblToEnableDetails = true;
  isAndroid = false;
  isBlackBerry = false;
  isBlackBerry10 = false;
  isWindowsPhone = false; 
  deviceInfo = getDeviceInfo();
  var deviceIdent = deviceInfo.name;
  if(startsWith(deviceIdent,"ip", true)){
    isIPhone = true;
  }else if(startsWith(deviceIdent, "WindowsPhone", true)){
    isWindowsPhone = true;
  }else if(startsWith(deviceIdent, "and", true)){
    isAndroid = true;
  }else if(startsWith(deviceIdent, "blackberry10", true)){
    isBlackBerry10 = true;
  }else if(startsWith(deviceIdent, "blackberry", true)){
    isBlackBerry = true;
  } 	
}

function getDeviceInfo(){
  var deviceInfo = kony.os.deviceInfo(); 
  kony.print("device Info is");
  kony.print(deviceInfo);
  return deviceInfo;
}

function startsWith(sourceString, compareString, ignoreCase){
  if(ignoreCase){
    sourceString = sourceString.toLowerCase();
    compareString = compareString.toLowerCase();
  }
  var length = compareString.length;
  return (sourceString.substring(0, length) == compareString);
}
function endsWith(sourceString, compareString, ignoreCase){
  if(ignoreCase){
    sourceString = sourceString.toLowerCase();
    compareString = compareString.toLowerCase();
  }
  var length = sourceString.length;
  return (sourceString.substring(length-compareString.length, length) == compareString);
}
timer = {};
timer.cancel = function(timerId){
  try{
    kony.timer.cancel(timerId);
  }catch(error){
    kony.print("Timer cancel error :: "+error);
  }
};
timer.schedule = function(timerid, functionobj, interval, repeat){
  try{
    kony.timer.schedule(timerid, functionobj, interval, repeat);
  }catch(error){
    kony.print("Timer schedule error :: "+error);
    if(error.errorCode != 103){
      throw error;
    }
  }
};
function invokeMiddlewareService(url, inputparams, callBackAsync){
  kony.net.invokeServiceAsync(url, inputparams, function(status, result){
    if(status == 400){
      kony.print("RESPONSE");
      kony.print(result);
      callBackAsync(status, result);
    }
  });
}

//Dhaval:Function for creating custom tab header
function initFormProcess(formId, formName){
  addTabHeaders(formId, formName);
  //changeRadioView(formId, formName);
}
function preFormProcess(formName){
}
function postFormProcess(formName){
}