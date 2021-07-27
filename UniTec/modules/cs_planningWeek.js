var WEEKS_MAX_FUTURE  = 8;
var WEEKS_MAX_PAST = 4;

var JOT_SKIN = "sknBT94433b";

var inFutureWeeks = 0;

var week_segList= null;
var weekDayLblList = null;
var weekDays = [];

var week_lastShown = null;

var week_globalreq = "select  \n" +
"	hor.TDstr as TDSTR,  \n" +
"	hor.tdend as TDEND, \n" +
"	sit.corporatename as corporatename,  \n" +
"	bt.said as SAID,  \n" +
"	bt.TYPS as TYPS,  \n" +
" (select internalname from employee where an8 = bt.anpa) secondTechnician,\n" +
"	case   \n" +
"	when coalesce (bt.WR13 , 'NULL') <> 'NULL'   \n" +
"	then   \n" +
"		(select rmk3 from f56prm colorQx   \n" +
"		where colorQx.tydt = 'BT'   \n" +
"		and colorQx.ky = bt.typs   \n" +
"		and coalesce (colorQx.[rmk], 'NULL') <> 'NULL'    \n" +
"		limit 1)   \n" +
"	else   \n" +
"		(select rmk3 from f56prm color    \n" +
"		where color.tydt = 'BT'    \n" +
"		and coalesce(color.RMK, 'NULL') = 'NULL'    \n" +
"		and color.ky = bt.typs   \n" +
"		limit 1)   \n" +
"	end as color,    \n" +
"	hor.subject as subject,  \n" +
"	hor.location as location,  \n" +
"	hor.doco as DOCO  \n" +
"from (select * from f56301W where TYTN = 'PRV') as hor  \n" +
"left join F56BT as bt on bt.doco = hor.doco  \n" +
"left join (select * from Customer where originalid = 0) as sit on bt.said = sit.an8 \n";

function on_weekPlanningInit(){
	var appMenu = [
		["on_weekPlanning.HOME", "Accueil", "home.png", homeClick],
		["on_weekPlanning.DAY", "Vue journalière", "day.png", dayClick],
		["on_weekPlanning.BASKET", "Panier des BT", "cart.png", cartClick]
	];
	
	var appDisplayMenu = [
		["on_weekPlanning.BACK", "Retour", "left.png", navigationModel.doReturn]
	];
	
	otis.application.createAppMenu("planningWeekAppMenu", appMenu, sknAppmenu, sknAppmenuF);
	otis.application.createAppMenu("planningWeekAppDisplayMenu", appDisplayMenu, sknAppmenu, sknAppmenuF);

  function backClick(){
    kony.print("backClick called");
    navigationModel.doReturn();
  }
  
  function homeClick(){
     kony.print("homeClick called");
    frmHome.show();
  }
  function dayClick()
  {
     kony.print("dayClick called");
    e121PlanningJournalier.show();
  }
  
  function cartClick()
  {
     kony.print("cartClick called");
    frmWorkOrders.show();
  }

	if (Day_today == null){
		Day_today = new Date();
	}
	
	week_segList = [
		e122PanningHebdomadaire.mondaySeg,
		e122PanningHebdomadaire.tuesdaySeg,
		e122PanningHebdomadaire.wednesdaySeg,
		e122PanningHebdomadaire.thursdaySeg,
		e122PanningHebdomadaire.fridaySeg,
		e122PanningHebdomadaire.saturdaySeg,
		e122PanningHebdomadaire.sundaySeg
	];
	
	weekDayLblList = [
		e122PanningHebdomadaire.mondayLbl,
		e122PanningHebdomadaire.tuesdayLbl,
		e122PanningHebdomadaire.wednesdayLbl,
		e122PanningHebdomadaire.thurdayLbl,
		e122PanningHebdomadaire.fridayLbl,
		e122PanningHebdomadaire.saturdayLbl,
		e122PanningHebdomadaire.sundayLbl
	];
	
	weekDayCollisionImgList = [
		e122PanningHebdomadaire.imgMondayCollision,
		e122PanningHebdomadaire.imgTuesdayCollision,
		e122PanningHebdomadaire.imgWednesdayCollision,
		e122PanningHebdomadaire.imgThursdayCollision,
		e122PanningHebdomadaire.imgFridayCollision,
		e122PanningHebdomadaire.imgSaturdayCollision,
		e122PanningHebdomadaire.imgSundayCollision
	];
	
	
	function set_mapping(seg){
		seg.widgetDataMap ={
			weektimeBeginLbl: 'timeBeginLbl',
			weekClientLbl : 'ClientLbl',
			weekSegHBox : 'weekSegHBox',
			dateBegin: "dateBegin",
			dateEnd: "dateEnd"
		};
	}
	week_segList.forEach(set_mapping);
	woPlanify.init();

}

function on_weeklyPlanning_open(){
	if(woGroupingDisplay.isOn) otis.application.setCurrentAppMenu("planningWeekAppDisplayMenu");
	else otis.application.setCurrentAppMenu("planningWeekAppMenu");

	if (day_currentDay == null){
		day_currentDay = Day_today;
	}
	
	for(var i=0;i<weekDayLblList.length;i++) {
		//weekDayLblList[i].skin = "Skin Defaults";
      	weekDayLblList[i].skin = "sknLblNormal";//Dhaval:Fix for issue #100:Skin default seems not accepted in IOS
		woPlanify.remainTimeLbls[i].text = '';
	}
	
	if(woPlanify.workOrders.length != 0) woPlanify.weekPreShow();
	if(woPlanify.isOn && !validationModel.isNull(woPlanify.suggestedDay)){
		day_currentDay = woPlanify.suggestedDay[0];
	}
	week_setWeekView();
}


function week_setWeekView(){

	if (week_lastShown == day_currentDay && !woPlanify.isOn){
		return;
	}
	
	week_lastShown = day_currentDay;

	//set elements on e121Dailyview 
	
	// Get date's week monday
	var monday = dateGetMonday(day_currentDay);
	
	//dates band
	var prev_week = new Date(monday);
	prev_week.setDate(prev_week.getDate() - 7);
	var next_week = new Date(monday);
	next_week.setDate(next_week.getDate() + 7);
	
	
	e122PanningHebdomadaire.weekCurrentLbl.text = datePrintWeekTitle(monday);
	
	var limit = new Date();
	limit.setDate(limit.getDate() + 7 * WEEKS_MAX_FUTURE);
	//UI-343 if (next_week > limit){
	//UI-343 	 e122PanningHebdomadaire.weekBtnNext.isVisible = false;
	//UI-343 }else{
		e122PanningHebdomadaire.weekBtnNext.isVisible = true;
		e122PanningHebdomadaire.weekBtnNext.text = datePrintWeekTitle(next_week);
	//UI-343 }
	
	//UI-343 limit = new Date();
	//UI-343 if(!woPlanify.isOn) limit.setDate(limit.getDate() - 7 * WEEKS_MAX_PAST);
	//UI-343 else limit.setDate(limit.getDate() - 7 * inFutureWeeks);
	//UI-343 if (prev_week < limit){
	//UI-343 	 e122PanningHebdomadaire.weekBtnPrev.isVisible = false;
	//UI-343 }else{
		e122PanningHebdomadaire.weekBtnPrev.isVisible = true;
		e122PanningHebdomadaire.weekBtnPrev.text = datePrintWeekTitle(prev_week);
	//UI-343 }
	
	
	
	var d = new Date(monday);
	
	weekDays = [];
	var i =0;
	do{
		weekDays.push(d);
		var d1 = new Date(d);
		d1.setDate(d1.getDate() + 1);
		d = d1;
		i++;
	}while (i < 8);
	
	for(var j=0;j<7;j++) weekDayLblList[j].text = datePrintShort(weekDays[j]);

	if(woPlanify.isOn) {
		woPlanify.setThisWeekplannedWOs(weekDays);
		woPlanify.findWeekPossiblePlanifications(weekDays);
		woPlanify.updateWeekDisplay(weekDays);
		woPlanify.displayWeekPlanification(weekDays, weekDays, woPlanify.planning);
	}
	else {
		i=0;
		for (; i< 7; i++){
			kony.print(dateTimePrintSql(new Date()) + " " + week_segList[i].id + "week req launch");
			executeSql(week_globalreq + 
				" where tdstr >= \'" + datePrintSql(weekDays[i]) +
				"\' and tdstr < \'" + datePrintSql(weekDays[i+1]) + "\'" +
				" and SRST < 70" +
				" order by hor.tdstr",
				week_updateSeg,
				eventErrorCallBack, 
				i);
			kony.print(dateTimePrintSql(new Date()) + " " + week_segList[i].id + "week req launched ");
//			weekDayLblList[i].text = datePrintShort(weekDays[i]);
		}
	}
}

function week_updateSeg(a)
// recieves [res, dayN]
{	
	
	var res = a[0];
	var segment = week_segList[a[1]];
	var imgCollision = weekDayCollisionImgList[a[1]];
	//kony.print(dateTimePrintSql(new Date()) + " " + segment.id + ": week req got"); 
	var data = res.map(week_btmakeLine);
	//kony.print(dateTimePrintSql(new Date()) + " " + segment.id + ': setting data on segment ');
	segment.setData(data);
	//kony.print(dateTimePrintSql(new Date()) + " " + segment.id + ': setting data on segment done');
	imgCollision.isVisible =  day_computeColisions(data);
	
}

function week_btmakeLine(btLine){

	if (!validationModel.isNull(btLine['DOCO'])){
		var rowskin = (btLine['color'] != null) ? "sknBT" + btLine['color'] : "sbkBTFallback";

		var bt = {
			'timeBeginLbl' : datePrintTime(dateFromsql(btLine['TDSTR'])) + (validationModel.isNull(btLine.secondTechnician)==true?"":(" "+"👥")),
			'ClientLbl' : btLine['corporatename']!=null ? btLine['corporatename'] :'?' + btLine['SAID'] ,
			'weekSegHBox' : {'skin': rowskin, 'backgroundColor':btLine.color},//, 
								//'focusSkin': "sknHBPop"},//Dhaval:Fix for issue#16
			"dateBegin" : dateFromsql(btLine['TDSTR']),
			"dateEnd" : dateFromsql(btLine['TDEND'])	
		};
	}else{
		var rowskin = JOT_SKIN;

		var bt = {
			'timeBeginLbl' : datePrintTime(dateFromsql(btLine['TDSTR'])) + (validationModel.isNull(btLine.secondTechnician)==true?"":(" "+"👥")),
			'ClientLbl' : btLine['subject'] ,
			'weekSegHBox' : {'skin': rowskin, 
								'focusSkin': rowskin, 'backgroundColor':btLine.color},
			"dateBegin" : dateFromsql(btLine['TDSTR']),
			"dateEnd" : dateFromsql(btLine['TDEND'])			
		};
	}
	
	return bt;

}

function week_OnNext(){
	var next_week = new Date(day_currentDay);
	next_week.setDate(next_week.getDate() + 7);
	day_currentDay = next_week;
	inFutureWeeks++;
	if(inFutureWeeks > WEEKS_MAX_FUTURE) inFutureWeeks = WEEKS_MAX_FUTURE;
	week_setWeekView();
  	//e122PanningHebdomadaire.scrollToBeginning();
}

function week_OnPrevious(){
	var prev_week = new Date(day_currentDay);
	prev_week.setDate(prev_week.getDate() - 7);
	day_currentDay = prev_week;
	inFutureWeeks--;
	if(inFutureWeeks < 0) inFutureWeeks = 0;
	week_setWeekView();
  	//e122PanningHebdomadaire.scrollToBeginning();
}

function week_onDayClick(dayNum) {
		if(woPlanify.isOn && !woPlanify.isDayValid(weekDays[dayNum])) return;
		
		day_currentDay = weekDays[dayNum];
		kony.print("###date : "+JSON.stringify(day_currentDay));
		if(app_parameters.lifetime.auto_plannify_bool == false){
			e121PlanningJournalier.show();
		}
}

function week_setDay(date) {
		if(woPlanify.isOn && !woPlanify.isDayValid(date)) return;
		
		day_currentDay = date;
		kony.print("###date : "+JSON.stringify(day_currentDay));
		if(app_parameters.lifetime.auto_plannify_bool == false){
			e121PlanningJournalier.show();
	}
}
