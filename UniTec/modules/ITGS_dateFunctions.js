dateFunctions = {};

// Input: "2012-01-25"
dateFunctions.toCalendarFormat = function (dateString) {
  if(dateString.length != 10) return [];
  return new Array(dateString.substr(8,2),dateString.substr(5,2),dateString.substr(0,4));
}

// input : "2012-01-25"
// output : "25-01-2012"
dateFunctions.YearFirstToDayFirst = function(dateString) {
  if(dateString.length != 10) return;
  return dateString.substr(8,2).concat('-').concat(dateString.substr(5,2)).concat('-').concat(dateString.substr(0,4));
}

// input : "25-01-2012"
// output : "2012-01-25"
dateFunctions.DayFirstToYearFirst = function(dateString) {
  if(dateString.length != 10) return;
  return dateString.substr(6,4).concat('-').concat(dateString.substr(3,2)).concat('-').concat(dateString.substr(0,2));
}

// Input: 25/01/2012
dateFunctions.toStringFormat = function (calendarString) {
  return calendarString.substr(6,4).concat('-').concat(calendarString.substr(3,2)).concat('-').concat(calendarString.substr(0,2));
}

// Input: 25/01/2012
dateFunctions.toDateFormat = function (calendarString) {
  return new Date(parseInt(calendarString.substr(6,4)),parseInt(calendarString.substr(3,2))-1,parseInt(calendarString.substr(0,2))+1);
}

// Input: Javascript.Date, Javascript.Date
dateFunctions.getDaysBetween = function (startDate, endDate) {
  return Math.ceil((Math.abs(endDate.getTime() - startDate.getTime())) / (1000 * 3600 * 24)); 
}

// Input: Javascript.Date, Javascript.Date -- If lastDate is not set, lastDate = today
// Output: -1 if first is before last, 0 if equal, 1 if first is after last
dateFunctions.compare = function (firstDate, lastDate) {

  if (lastDate == undefined) {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
    lastDate = new Date(year,month,day+1);
  }

  if (firstDate.getTime() > lastDate.getTime()) return 1;
  else if (firstDate.getTime() < lastDate.getTime()) return -1;
  else return 0;
}

// compare dates without taking hours & minutes into account
// input : Javascript.Date, javascript.Date
// Output: -1 if first is before last, 0 if equal, 1 if first is after last
dateFunctions.compareDays = function(firstDate, lastDate) {
  if(validationModel.isNull(lastDate)) lastDate = new Date();

  if(
    firstDate.getFullYear() == lastDate.getFullYear() &&
    firstDate.getMonth() == lastDate.getMonth() &&
    firstDate.getDate() == lastDate.getDate()
  ) return 0;
  else if(firstDate.getTime() < lastDate.getTime()) return -1;
  else return 1;
}

// Input: "2012-01-25"
dateFunctions.addDaysToDateString = function (dateString, days) {
  var date = new Date(dateString);
  date.setDate(date.getDate() + parseInt(days)); 
  return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
}

// Input: Javascript.Date
// Output: "2012-01-25" or "2012-01-25_22:32:42.002" or "2012-01-25T22:32:42.002"
dateFunctions.javaDateToStringFormat = function (date, includeTime, dbFormat){
  if (includeTime != undefined && includeTime) {
    return 	dateNumDigits(date.getFullYear(),4) + '-' +
      dateNumDigits(date.getMonth()+1,2) + '-' +
      dateNumDigits(date.getDate(),2) + '_' +
      dateNumDigits(date.getHours(),2) + ':' +
      dateNumDigits(date.getMinutes(),2) + ':' +
      dateNumDigits(date.getSeconds(),2) + '.' +
      dateNumDigits(date.getMilliseconds(),3);
  } else if(dbFormat == true){
    return 	dateNumDigits(date.getFullYear(),4) + '-' +
      dateNumDigits(date.getMonth()+1,2) + '-' +
      dateNumDigits(date.getDate(),2) + ' ' +
      dateNumDigits(date.getHours(),2) + ':' +
      dateNumDigits(date.getMinutes(),2) + ':' +
      dateNumDigits(date.getSeconds(),2) + '.' +
      dateNumDigits(date.getMilliseconds(),3);
  }else {
    return 	dateNumDigits(date.getFullYear(),4) + '-' +
      dateNumDigits(date.getMonth()+1,2) + '-' +
      dateNumDigits(date.getDate(),2);
  }
}


// Input: Javascript.Date
// Output: "22:32:42.002"
dateFunctions.javaDateToTimeFormat = function (date){
  return 	dateNumDigits(date.getHours(),2) + ':' +
    dateNumDigits(date.getMinutes(),2) + ':' +
    dateNumDigits(date.getSeconds(),2) + '.' +
    dateNumDigits(date.getMilliseconds(),3);
}

// Input: Javascript.Date
// Output: Javascript.Date
dateFunctions.addMonthsToDate = function (date, months){
  var newDate = date;
  return new Date(newDate.setMonth(date.getMonth() + months));
}

dateFunctions.formatDuration = function (seconds, shorten) {
  if(shorten == null) shorten = true;
  var sec_num = parseInt(seconds, 10);
  var days 	= Math.floor(sec_num / (3600 * 7.5));
  var time    = '';
  if(shorten) {
    time += (days > 0) ? days + 'j ' : '';
  }
  else {
    var daysText = (days > 0) ? days + ' jour ' : '';
    daysText = (days > 1) ? days + ' jours ' : daysText;
    time += daysText;
  }
  time += dateFunctions.formatTimeDuration((sec_num - (days * 3600 * 7.5)), shorten);
  return time.trim();
}

dateFunctions.formatTimeDuration = function(seconds, shorten) {
  if(shorten == null) shorten = true;
  var sec_num = parseInt(seconds, 10);
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var time    = '';
  if(shorten) {
    time += (hours > 0) ? hours + 'h ' : '';
    time += (minutes > 0) ? minutes + 'min ' : '';
  } 
  else {
    var hoursText = (hours > 0) ? hours + ' heure ' : '';
    hoursText = (hours > 1) ? hours + ' heures ' : hoursText;
    time += hoursText;

    var minutesText = (minutes > 0) ? minutes + ' minute ' : '';
    minutesText = (minutes > 1) ? minutes + ' minutes ' : minutesText;
    time += minutesText;
  }
  return time.trim();
}

function BT_HRSOToTime(hrso_f){
  // time in milisecond
  // need to kill  time zone offset
  d = new Date(hrso_f*3600*1000); 
  return d;
}

dateFunctions.BT_HRSOToTime = function(hrso_f){
  var hrso = parseFloat(hrso_f,10);
  return hrso * 3600 * 1000;
}

dateFunctions.isAValidDate = function(currentDate, fakeDate){
  // currentDate = "";
  function isDate(value, sepVal, dayIdx, monthIdx, yearIdx) {
    try {
      value = value.split(" ")[0];
      value = value.replace(/-/g, "/").replace(/\./g, "/");
      sepVal = (sepVal === undefined ? "/" : sepVal.replace(/-/g, "/").replace(/\./g, "/"));

      var SplitValue = value.split(sepVal);
      if (SplitValue.length != 3) {
        return false;
      }

      //Auto  detection of indexes
      if (dayIdx === undefined || monthIdx === undefined || yearIdx === undefined) {
        if (SplitValue[0] > 31) {
          yearIdx = 0;
          monthIdx = 1;
          dayIdx = 2;
        } else {
          yearIdx = 2;
          monthIdx = 1;
          dayIdx = 0;
        }
      }

      //Change the below values to determine which format of date you wish to check. It is set to dd/mm/yyyy by default.
      var DayIndex = dayIdx !== undefined ? dayIdx : 0;
      var MonthIndex = monthIdx !== undefined ? monthIdx : 1;
      var YearIndex = yearIdx !== undefined ? yearIdx : 2;

      var OK = true;
      if (!(SplitValue[DayIndex].length == 1 || SplitValue[DayIndex].length == 2)) {
        OK = false;
      }
      if (OK && !(SplitValue[MonthIndex].length == 1 || SplitValue[MonthIndex].length == 2)) {
        OK = false;
      }
      if (OK && SplitValue[YearIndex].length != 4) {
        OK = false;
      }
      if (OK) {
        var Day = parseInt(SplitValue[DayIndex], 10);
        var Month = parseInt(SplitValue[MonthIndex], 10);
        var Year = parseInt(SplitValue[YearIndex], 10);
        var MonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if(OK == (Month <= 12 && Month > 0)){

          var LeapYear = (Year & 3) == 0 && ((Year % 25) != 0 || (Year & 15) == 0);
          MonthDays[1] = (LeapYear ? 29 : 28);

          OK = Day > 0 && Day <= MonthDays[Month - 1];
        }
      }
      return OK;
    }
    catch (e) {
      return false;
    }
  }
	if(isDate(currentDate, "-", 2,1,0) == true || validationModel.isNull(currentDate) == true || currentDate == ""){
      return currentDate;
    }else{
      return fakeDate;
    }
}