function atAppInit(){
  appConfig.url = app_parameters.middleware.url + "/middleware/MWServlet";
  kony.print(appConfig.url);
  loadFfiConfig();
  var appMenu = [];
  otis.application.createAppMenu("emptyAppMenu", appMenu, sknAppmenu, sknAppmenuF);
}

function executeSql(sql, successcallback, errorcallback, cb_object, blocking) {
  if(sql!==null && sql!=="" && typeof sql=="string"){
    sql = sql.replace(/(\r\n|\n|\r|\\r|\\n|\t)/g," ");
  }

  if (!kony.sync.isSyncInitialized(errorcallback)) {
    return;
  }

  kony.print("executing sql " + sql);

  if (databaseModel.isGroupedRequest) { // just execute the request
    kony.sync.single_select_execute(databaseModel.dbName, sql, null, successcallback, errorcallback);
  }
  else { // open the database for a single request
    // Show loading screen and block UI
    if (blocking == undefined || blocking == true) {
      showSyncLoadingScreen();
    }

    function mySuccCallback(res) {
      if (cb_object != null) {
        kony.sync.verifyAndCallClosure(successcallback, [res, cb_object]);
      } else {
        kony.sync.verifyAndCallClosure(successcallback, res);
      }
    }

    kony.sync.single_select_execute(kony.sync.getDBName(), sql, null, mySuccCallback, errorcallback);
    // Dismiss loading screen
    kony.application.dismissLoadingScreen();
  }
}

function onBackKeyPressed(){
  return;
}

function isValidEmailAdresses(email){
  var emailArray = email.split(";");
  var _email="";
  if(emailArray!=null){				
    for(var i=0; i<emailArray.length; i++)	
      if(isEmailAddress(emailArray[i]))	
        _email +=emailArray[i].trim()+";";
      else
        return "";

    return _email;
  }
  else{
    if(isEmailAddress(email))	
      return email;							
  }

  return "";
}

function isEmailAddress(email){
  var patt1 = /^[A-Za-z0-9]+([\_\.\-]?[a-zA-Z0-9]+)*\@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9])*\.([A-Za-z]{1,40})$/;    
  var isValid = patt1.test(email);

  return isValid;	
  /*
	// ref http://www.regular-expressions.info/email.html
	var s = s.toLowerCase();
	var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return re.test(s);
	*/
}

function putToLine(s,length) {
  if (s.length >= length) {
    var spaceIndex = s.lastIndexOf(' ', length-1);
    if(spaceIndex < 0) spaceIndex = s.indexOf(' ', length-1);
    if(spaceIndex < 0) spaceIndex = length-1;
    s = s.slice(0,spaceIndex) + "\n" + s.slice(spaceIndex);
  }
  return s;
}

function replaceAll(s, search, replace) {
  //if replace is not sent, return original string otherwise it will
  //replace search string with 'undefined'.
  if (replace === undefined || search === undefined) return s;
  return s.replace(new RegExp('[' + search + ']', 'g'), replace);
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function twinkleWidget(widget, sknOn, sknOff, myFormId, secondtime){  
  var on = true;
  function timerFunc() //nested function
  {
    if(on == true){
      widget.skin = sknOn;
      on = false;
    }else{
      widget.skin = sknOff;
      on = true;
    }
    if(kony.application.getCurrentForm().id != myFormId){
      kony.timer.cancel("twinkTimer");
    }
  }
  kony.timer.schedule("twinkTimer",timerFunc, secondtime, true);

}

function isSQLNull(value) {
  return (value === null || value === undefined || value === 'NULL');
}

function notIsSQLNull(value) {
  return !isSQLNull(value);
}

function isSQLStringEmpty(value) {
  return isSQLNull(value) || value === "";
}

function notIsSQLStringEmpty(value) {
  return !isSQLStringEmpty(value);
}


// No double in array of object 
 function getUnique(arr, comp) {

  const unique = arr
       .map(e => e[comp])

     // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);

   return unique;
}

function areJsonObjectsEqual(obj1, obj2,  ignoreProps) {
  	if(isSQLNull(ignoreProps)) {
      ignoreProps = [];
    }
  	if(isSQLNull(obj1) !== isSQLNull(obj2)) {
      return false;
    }
  	if(isSQLNull(obj1) && isSQLNull(obj2)) {
      return true;
    }
	if(typeof(obj1) !== 'object') {
      	var ident = true;
      	try {
          ident = obj1.toString() === obj2.toString();
        } catch(e) {
          ident = false;
        }
		return ident;
	}
	if(Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
	}
	for(var key in obj1) {
		if(ignoreProps.indexOf(key) === -1 && !areJsonObjectsEqual(obj1[key],obj2[key], ignoreProps)) {
			return false;
		}
	}
	return true;
}

var removeAccent = function(arg){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
     
    var str = arg;
    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }
     
    return str;
}

function MatchRegex(currentText, previousTextValue){
  var regexComment = new RegExp(/^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._();:!?´,.’\/€$&@"=+*><%«‘´»'"\s-]*$/);
  // var comment = currentText;
  if(regexComment.test(currentText)){
    currentWidget.text = currentText;
    comment = currentText;
  }else{
    currentText = woCommentText.text;
  }
}