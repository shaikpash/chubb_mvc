//var DAYS_MAX_FUTURE  = 7;
//var DAYS_MAX_PAST = 7;

// use week limit instead 

var Day_today = null;

var day_currentDay = null;
var day_lastShownDay = null;

 
var planningDay_globalreq = "select \n" +
"	bt.wr01 as equ, \n" +
"	hor.TDstr as TDSTR, \n" +
"	hor.tdend as TDEND, \n" +
"	sit.corporatename as corporatename, \n" +
"	sit.address1 address1, \n" +
"	sit.address2 address2, \n" +
"	sit.address3 address3, \n" +
"	bt.said as SAID, \n" +
"	bt.typs as TYPS, \n" +
"	hor.doco as DOCO, \n" +
"	sit.zipcode as zipcode, \n" +
" (select internalname from employee where an8 = bt.anpa) secondTechnician,\n" +
" (select count(said) from f56bt where said = bt.said) linkedCount,\n" +
"	sit.city as city, \n" +
"	bt.srst as SRST, \n" +
"	coalesce((select DL01 from UDCT where SY= '00' and RT = 'SS' and LNPG = 'KO' and KY = bt.SRST), '') status, \n" +
"	stat.dl02 as DL02, \n" +
"	nbhor.cnt as cnt, \n" +
"	hor.id as hid, \n" +
"	hor.ATVCD5 as numb, \n" +
"	case \n" +
"			when coalesce (bt.WR13 , 'NULL') <> 'NULL' \n" +
"			then \n" +
"				(select rmk3 from f56prm colorQx \n" +
"				where colorQx.tydt = 'BT' \n" +
"				and colorQx.ky = bt.typs \n" +
"				and coalesce (colorQx.[rmk], 'NULL') <> 'NULL' \n" +
"				limit 1) \n" +
"			else \n" +
"				(select rmk3 from f56prm color \n" +
"				where color.tydt = 'BT' \n" +
"				and coalesce(color.RMK, 'NULL') = 'NULL' \n" +
"				and color.ky = bt.typs \n" +
"				limit 1) \n" +
"			end as color, \n" +
"	hor.subject as subject, \n" +
"	hor.location as location \n" +
"from (select * from f56301W where TYTN = 'PRV') as hor \n" +
"left join F56BT as bt on bt.doco = hor.doco \n" +
"left join (select * from UDCT where SY = '00' and RT ='SS' and LNPG = 'KO') as stat \n" +
"			on bt.SRST = stat.KY \n" +
"left join (select * from Customer where originalid = 0)as sit on bt.said = sit.an8 \n" +
"left join (select doco, count(doco)as cnt from f56301W where TYTN = 'PRV' group by doco) as nbhor on nbhor.doco = hor.doco \n" ;
	

function on_dailyPlanning_init(){

	var appMenu = [
		["on_dailyPlanning.HOME", "Accueil", "home.png", clickHome],
		["on_dailyPlanning.WEEK", "Vue Semaine", "week.png", clickWeek],
		["on_dailyPlanning.BASKET", "Panier des BT", "cart.png", clickCart]
	];
	
	var appDisplayMenu = [
		["on_dailyPlanning.BACK", "Accueil", "home.png", navigationModel.doReturn]
	];
  //Dhaval:Fix for app menu not working start
  function clickHome(){
    frmHome.show();
  }
  function clickWeek(){
    e122PanningHebdomadaire.show();
  }
  function clickCart(){
    frmWorkOrders.show();
  }
  //End
  //Arati:Changed code for JIRA UI-127 Start here
  e121PlanningJournalier.scrollbox237134513877180.vbox237134513877182.daySegment.containerHeight = 82;
  e121PlanningJournalier.scrollbox237134513877180.vbox237134513877182.daySegment.containerHeightReference = constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE;
  //Arati:Changed code for JIRA UI-127 End here
	//Dhaval:Invocation of custom app menu start
	otis.application.createAppMenu("planningDayAppMenu", appMenu, sknAppmenu, sknAppmenuF);
	otis.application.createAppMenu("planningDayAppDisplayMenu", appDisplayMenu, sknAppmenu, sknAppmenuF);
	//end
	e121PlanningJournalier.daySegment.widgetDataMap = {
		timeBeginLbl : "timeBeginLbl",
		timeLengthLbl : "timeLengthLbl",
		timeEndLbl : "timeEndLbl",
		ClientLbl : "ClientLbl",
		btTypeLbl : "btTypeLbl",
		btStatusLbl : "btStatusLbl",
		btInfoLbl : "btInfoLbl",
		btPlaceLbl : "btPlaceLbl",
		segColorHB : "segColorHB",
		btNumber : "btNumber",
		dateBegin: "dateBegin",
		dateEnd: "dateEnd"
		
	};
	if (Day_today == null){
		Day_today = new Date();
	}
}


function on_dailyPlanning_open(){
  //Dhaval:Invocation of custom app menu
	if(woGroupingDisplay.isOn || woPlanify.isOn) otis.application.setCurrentAppMenu("planningDayAppDisplayMenu");
	else otis.application.setCurrentAppMenu("planningDayAppMenu");
	if(woPlanify.isOn) woPlanify.dayPreShow();
	if (day_currentDay == null){
		day_currentDay = Day_today;
	}
	day_setDayView();
}


function on_planning_BT_clicked(sectionNumber, rowNumber, selectedState)
{
	var lineData =   e121PlanningJournalier.daySegment.data[rowNumber];
	if (lineData.btNumber == null){ //JOT
		return;
	}else{ //BT
		if(woPlanify.isOn) {
			return;
		}
		else {
			workOrder = workOrderModel.findWorkOrderByDoco(lineData.btNumber);
			workOrder.skin = lineData.segColorHB.skin;
			workOrderOverview.tab.current = workOrderOverview.tab.info;
			frmWorkOrderOverview.ibtTabPane.activeTabs = [0];
			workOrderOverview.tab.isAlreadyDisplayed = false;
          
			frmWorkOrderOverview.show();
			ibt_PlanificationNeedUpdate = true;
		}
	}
	

}

function day_setDayView(){
	//set elements on e121Dailyview 

	if ( day_lastShownDay == day_currentDay && !woPlanify.isOn){
		//return;
      	kony.print("since there is issue with refresh let us not return this");
	}
	
	//dates band
	var prev_day = new Date(day_currentDay);
	prev_day.setDate(prev_day.getDate() - 1);
	var next_day = new Date(day_currentDay);
	next_day.setDate(next_day.getDate() + 1);
	
	e121PlanningJournalier.e121DayfullLbl.text = datePrintLiteralDay(day_currentDay);
	e121PlanningJournalier.dayCurrentLbl.text = datePrintShort(day_currentDay);
	
	
	var limitup = new Date();
	limitup.setDate(limitup.getDate() + WEEKS_MAX_FUTURE * 7);
	var limitdown = new Date();
	limitdown.setDate(limitdown.getDate() - WEEKS_MAX_PAST * 7);
	// if ((next_day > limitup || next_day < limitdown) || woPlanify.isOn){
if ( woPlanify.isOn){
		e121PlanningJournalier.dayBtnNext.isVisible = false;
	}else{
		e121PlanningJournalier.dayBtnNext.isVisible = true;
		e121PlanningJournalier.dayBtnNext.text = datePrintShort(next_day);
	}
	

//	if ((prev_day > limitup || prev_day < limitdown) || woPlanify.isOn){
	if ( woPlanify.isOn){
		e121PlanningJournalier.dayBtnPrev.isVisible = false;
	}else{
		e121PlanningJournalier.dayBtnPrev.isVisible = true;
		e121PlanningJournalier.dayBtnPrev.text = datePrintShort(prev_day);
	}
	
	if (e121PlanningJournalier.dayBtnPrev.isVisible ||
		e121PlanningJournalier.dayBtnNext.isVisible ||
		woPlanify.isOn){
		e121PlanningJournalier.dayBtnToday.isVisible = false;
	}else{
		e121PlanningJournalier.dayBtnToday.isVisible = true;
	}
	
	if(woPlanify.isOn) woPlanify.setInstance(day_currentDay);
	else day_updateSegment(day_currentDay);
	day_lastShownDay = day_currentDay;
	
}

function day_onScrollEvent(){
	
}

function day_updateSegment(day){
	var next_day = new Date(day);
	next_day.setDate(next_day.getDate() + 1);
	
	executeSql(
		planningDay_globalreq + 
			" where tdstr >= \'" + datePrintSql(day) +
			"\' and tdstr < \'" + datePrintSql(next_day) + "\'" +
			" and SRST < 70" +
			" order by hor.tdstr", 
		day_segReqCB, eventErrorCallBack 
	);
	
	e121PlanningJournalier.daySegment.setData(null);

}

function day_segReqCB(res){
	var data = res.map(day_makeData);
	
	e121PlanningJournalier.daySegment.setData(data);
	e121PlanningJournalier.imgColision.isVisible = day_computeColisions(data);
}


function day_makeData(btLine){
	//kony.print("btLine : "+ JSON.stringify(btLine));
	var dateBegin = dateFromsql(btLine['TDSTR']);
	var dateEnd = dateFromsql(btLine['TDEND']);

	if (!validationModel.isNull(btLine['DOCO'])){ //is a bt
		var rowskin = (!validationModel.isNull(btLine['color'])) ? "sknBT" + btLine['color'] : "sbkBTFallback";
									
		//kony.print ("Rowskin : "+ rowskin);
		var btInfoLbl = btLine['equ'] + " - " + btLine['DOCO'];
		if(!validationModel.isNull(btLine['numb']) && !validationModel.isNull(btLine['cnt'])) btInfoLbl += ' - ' + (parseInt(btLine['numb'],10) + 1) + '/' + btLine['cnt'];
		
		var btStatusLbl = "";
		if(!validationModel.isNull(btLine.status)) btStatusLbl = btLine.status;
		else btStatusLbl = !validationModel.isNull(btLine['DL02']) ? btLine['DL02'].substring(0, 1) : '?'+btLine['SRST'];
		
		var addressLbl = '';
		var woAddressData = new Array();
		if(!validationModel.isNull(btLine['address1']) && btLine['address1'].length != 0) woAddressData.push(btLine['address1']);
		if(!validationModel.isNull(btLine['address2']) && btLine['address2'].length != 0) woAddressData.push(btLine['address2']);
		if(!validationModel.isNull(btLine['address3']) && btLine['address3'].length != 0) woAddressData.push(btLine['address3']);
		if(woAddressData.length > 0) addressLbl = woAddressData.join(' ');
		
		bt = {
			// substr strips the miliseconds that bug
			"timeBeginLbl"	 : datePrintTime(dateBegin, 'H'),
			"timeLengthLbl" : datePrintTime(new Date(0,0,0,0,0,0,dateEnd-dateBegin)),
			"timeEndLbl" :	 datePrintTime(dateEnd,'H'),
			"ClientLbl" : 	 !validationModel.isNull(btLine['corporatename']) ? btLine['corporatename'] :'?' + btLine['SAID'] ,
			"btTypeLbl" : 	btLine['TYPS'] + ((btLine["linkedCount"] > 1)?"🔗":"") + (validationModel.isNull(btLine.secondTechnician)==true?"":(" "+"👥")),
			"btInfoLbl" : 	btInfoLbl,
			"btStatusLbl" 	: btStatusLbl,
			"btPlaceLbl" :	addressLbl + ' ' + btLine['zipcode'] + ' ' + btLine['city'],
			"segColorHB" :	 {
				'skin': rowskin,
              'backgroundColor': btLine.color,
				//'focusSkin': rowskin,//Dhaval:Fix for click area of daily view
				'onClick': /*!validationModel.isNull(btLine['instanceIndex']) ?*/ btLine.onClick //: null
			},
			"btNumber": btLine['DOCO'],
			"dateBegin" : dateBegin,
			"dateEnd" : dateEnd,
			"instanceIndex" : btLine['instanceIndex']
		};
	}else{ // is a JOT
		var rowskin = JOT_SKIN;
		
		bt = {
			// substr strips the miliseconds that bug
			"timeBeginLbl"	 : datePrintTime(dateBegin, 'H'),
			"timeLengthLbl" : datePrintTime(new Date(0,0,0,0,0,0,dateEnd-dateBegin)),
			"timeEndLbl" :	 datePrintTime(dateEnd,'H'),
			"ClientLbl" : !validationModel.isNull(btLine['subject']) ? btLine['subject'] : ' ',
			"btTypeLbl" : 	' ',
			"btInfoLbl" : !validationModel.isNull(btLine['location']) ? btLine['location']: ' ',
			"btStatusLbl" 	: ' ',
			"btPlaceLbl" :	  ' ',
			"segColorHB" :	 {
				'skin': rowskin, 
				'focusSkin': rowskin,
              'backgroundColor': btLine.color,
			},
			"btNumber": null,
			"dateBegin" : dateBegin,
			"dateEnd" : dateEnd
		};
	}
	
	return bt;
}

function day_computeColisions(bts){
	// no colision if only one bt
	if (bts.length < 2){
		return false;
	}
	
	// ordered bt comparisons 
	for (var i = 0; i < bts.length -1; i++){
		if (day_isColision(bts[i], bts[i+1])){
			kony.print("Colision on " + bts[i]["btNumber"] + " and " + bts[i+1]["btNumber"]);
			return true;
		}
	}
	return false;
}

function day_isColision(bt1, bt2){
	// note  : we take the case were 1.begin <= 2.begin (ordered by)
	return (
		(bt2["dateBegin"] < bt1["dateEnd"]) 
	);
		
}

		
function day_setNextDay(){
	var next_day = new Date(day_currentDay);
	next_day.setDate(next_day.getDate() + 1);
	day_currentDay = next_day;
	day_setDayView();
}

function day_setPrevDay(){
	var prev_day = new Date(day_currentDay);
	prev_day.setDate(prev_day.getDate() - 1);
	day_currentDay = prev_day;
	day_setDayView();
}

function day_setToday(){
	var dadate = new Date();
	day_currentDay = dadate;
	day_setDayView();
}
