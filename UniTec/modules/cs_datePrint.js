var DayText = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
var MonthText = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
	 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];



function dateFromsql(dateStr){
	// from format 2015-02-15 14:26:46[,,,]
  //Dhaval:Resolved issues for Dates showing as NAN.
  if(dateStr.indexOf("T")>-1 && dateStr.length<26){
     //alert("t is present");
    return new Date(Date.parse(dateStr));
     }
  //Dhaval:Solution for issues #43 and #44
  //Arati:Changed code for JIRA UI-122
  else if(dateStr.length<25 || dateStr.length <= 29){//Dhaval:Added condition for length as it is causing issues 
    return new Date(
		dateStr.substr(0,4), 	// year
		dateStr.substr(5,2)-1,	// Month
		dateStr.substr(8,2),	// day
		dateStr.substr(11,2),	// Hours				//Arati: Changed for Range Error - Invalid Date start here
        //dateStr.substr(22,2),	// Hours				
		dateStr.substr(14,2),	// minutes
        //dateStr.substr(25,2),	// minutes				
		dateStr.substr(17,2)	// Seconds
        //dateStr.substr(28,2)	// Seconds				//Changed for Range Error - Invalid Date end here
	);
  }
  else{
	return new Date(
		dateStr.substr(0,4), 	// year
		dateStr.substr(5,2)-1,	// Month
		dateStr.substr(8,2),	// day
		//dateStr.substr(11,2),	// Hours				//Arati: Changed for Range Error - Invalid Date start here
        dateStr.substr(22,2),	// Hours				
		//dateStr.substr(14,2),	// minutes
        dateStr.substr(25,2),	// minutes				
		//dateStr.substr(17,2)	// Seconds
        dateStr.substr(28,2)	// Seconds				//Changed for Range Error - Invalid Date end here
	);
  }
}


function datePrintCustom(date, str){
	var res = "";
	res = res + str;
	kony.print("date: " + JSON.stringify(date));
	res= res.replace(/yyyy/g, dateNumDigits(date.getFullYear(), 4));
	res= res.replace(/MM/g, dateNumDigits(date.getMonth()+1, 2));
	res= res.replace(/dd/g, dateNumDigits(date.getDate(), 2));
	res= res.replace(/hh/g, dateNumDigits(date.getHours(), 2));
	res= res.replace(/mm/g, dateNumDigits(date.getMinutes(), 2));
	res= res.replace(/ss/g, dateNumDigits(date.getSeconds(), 2));
	res= res.replace(/ml/g, dateNumDigits(date.getMilliseconds(), 3));
	res= res.replace(/wd/g, DayText[date.getDay()]);
	res= res.replace(/ym/g, MonthText[date.getMonth()]);
	return res;
}

function dateGetMonday(date){
	// returns the monday of the given date

	monday = new Date(date);
	// cheat on http://www.merlyn.demon.co.uk/js-date7.htm#SoW
	monday.setDate(monday.getDate() - (7+monday.getDay()-1)%7 );
	monday.setHours(0,0,0,0);
	
	return monday;
}

function datePrintTime(date, sep){
	// format 08:42
	s = '';
	s += dateNumDigits(date.getHours(),2);
	s += sep != null ? sep : ':' ;
	s += dateNumDigits(date.getMinutes(),2);
	return s;
}

function datePrintUTCTime(date, sep){
	// format 08:42
	s = '';
	s += dateNumDigits(date.getUTCHours(),2);
	s += sep != null ? sep : ':' ;
	s += dateNumDigits(date.getUTCMinutes(),2);
	return s;
}

function datePrintShort(date){
	// format is : 'Lundi 12'  
	s = '';
	s += DayText[date.getDay()];
	s += ' ';
	s += date.getDate();
	return s;
}

function datePrintWeekTitle(date){
	// format is : '12 Février'  
	s = '';
	s += date.getDate();
	s += ' ';
	s += MonthText[date.getMonth()];
	s += ' ';
	s += date.getFullYear();
	return s;
}

function datePrintLiteralDay(date){
	// form is : Lundi 12 Février 2015
	s = '';
	s += DayText[date.getDay()];
	s += ' ';
	s += date.getDate();
	s += ' ';
	s += MonthText[date.getMonth()];
	return s;
}

function dateTimePrintSql(date){
	// format is : '2015-02-15 22:32:42.002'
  	kony.print("date:"+date);
	s = '';
  	if(validationModel.isNull(date)){//Dhaval:Fix for 93:Added current date in case no date is passed
    date = new Date();
    }
	s += dateNumDigits(date.getFullYear(), 4);
	s += '-';
	s += dateNumDigits(date.getMonth()+1,2);
	s += '-';
	s += dateNumDigits(date.getDate(),2);
	s += ' ';
	s += dateNumDigits(date.getHours(), 2);
	s += ':';
	s += dateNumDigits(date.getMinutes(), 2);
	s += ':';
	s += dateNumDigits(date.getSeconds(), 2);
	s += '.';
	s += dateNumDigits(date.getMilliseconds(),3);
    
  	
	return s;
}

function datePrintSql(date){
	// format is : '2015-02-15'
	s = '';
	s += date.getFullYear();
	s += '-';
	s += dateNumDigits(date.getMonth()+1, 2);
	s += '-';
	s += dateNumDigits(date.getDate(), 2);
	return s;
}

function dateNumDigits(num, dig){
	// set a number on n digits
	s = num.toString();
	for (i = s.length; i< dig; i++){
		s = '0' + s;
	}
	return s;
}

function getCurrentDateForPrintout() {

  var weekday = new Array(7);
  weekday[0]=  "Dimanche";
  weekday[1] = "Lundi";
  weekday[2] = "Mardi";
  weekday[3] = "Mercredi";
  weekday[4] = "Jeudi";
  weekday[5] = "Vendredi";
  weekday[6] = "Samedi";

  var today = new Date();
  var d = today.getDay();
  var dd = today.getDate();
  var mm = today.getMonth(); 
  var yyyy = today.getFullYear();
  var n = weekday[d];

  if (mm == 0) {
    mm = "janvier";
  } else if (mm == 1) {
    mm = "fevrier";
  } else if (mm == 2) {
    mm = "mars";
  } else if (mm == 3) {
    mm = "avril";
  } else if (mm == 4) {
    mm = "mai";
  } else if (mm == 5) {
    mm = "juin";
  } else if (mm == 6) {
    mm = "juillet";
  } else if (mm == 7) {
    mm = "aout";
  } else if (mm == 8) {
    mm = "septembre";
  } else if (mm == 9) {
    mm = "octobre";
  } else if (mm == 10) {
    mm = "novembre";
  } else if (mm == 11) {
    mm = "decembre";
  } 

  return dd+' '+mm+' '+yyyy;
}

function getQuotationPrintDate() {
	var d = new Date();
	
	var month = new Array();
	month[0] = "janvier";
	month[1] = "février";
	month[2] = "mars";
	month[3] = "avril";
	month[4] = "mai";
	month[5] = "juin";
	month[6] = "juillet";
	month[7] = "aout";
	month[8] = "septembre";
	month[9] = "octobre";
	month[10] = "novembre";
	month[11] = "décembre";
	var n = month[d.getMonth()];
	
	return "le " + d.getDate() + " " + n + " " + d.getFullYear();
}

function getCurrentDayForPrintout() {

  var weekday = new Array(7);
  weekday[0]=  "Dimanche";
  weekday[1] = "Lundi";
  weekday[2] = "Mardi";
  weekday[3] = "Mercredi";
  weekday[4] = "Jeudi";
  weekday[5] = "Vendredi";
  weekday[6] = "Samedi";


  var today = new Date();
  var d = today.getDay();

  return weekday[d];
}

function numRound(value, places) {
    var multiplier = Math.pow(10, places);

    return (Math.round(value * multiplier) / multiplier);
}