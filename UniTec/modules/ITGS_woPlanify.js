var woPlanify = {
	workOrders : [], // workOrders to be planified
	totalDuration : 0, // sum of the work orders durations - in milliseconds
	workStart : 0, // starting work time of day
	workEnd : 0, // end work time of day
	currentDay : null,
	isOn : false, // is the user planifying ?
	weekMask : 0, // days of the week valid for planification
	weekNotBestMask : 0, // days of the week valid but not optimized for planification
	plannedWOs : [],
	planning : [],
	planningData : [], // recorded days for registration in F56301W table
	planningTimes : [], // recorded times for registration in F56301W table
	flags : [1,2,4,8,16,32,64], // binary flags for weekMask
	hasChanged : false
};

woPlanify.context = {
	durationChangeIsEnabled : false
};

woPlanify.day = {
	suggestedInstances : []
};

woPlanify.init = function() {

	var planifyWeekAppMenu = [
		["woPlanify.BACK", "Retour", "left.png", onBackClick],
		["woPlanify.VALID", "Confirmer planification", "check.png", woPlanify.savePlanification]
	];

	var planifyDayAppMenu = [
		["woPlanify.WEEK", "Vue Semaine", "left.png", onBackClick],
		["woPlanify.SAVE", "Valider planification", "check.png", woPlanify.onDayValidateClick]
	];
  //Dhaval:Fix for App menu not working
  function onBackClick(){
    navigationModel.doReturn();
  }
	//Dhaval:Invocation of custom app menu start
	otis.application.createAppMenu("planifyWeekAppMenu", planifyWeekAppMenu, sknAppmenu, sknAppmenuF);
	otis.application.createAppMenu("planifyDayAppMenu", planifyDayAppMenu, sknAppmenu, sknAppmenuF);
	//End
	woPlanify.remainTimeLbls = [ // labels for remaining day time values
		e122PanningHebdomadaire.lblRemainTimeMon,
		e122PanningHebdomadaire.lblRemainTimeTue,
		e122PanningHebdomadaire.lblRemainTimeWed,
		e122PanningHebdomadaire.lblRemainTimeThu,
		e122PanningHebdomadaire.lblRemainTimeFri,
		e122PanningHebdomadaire.lblRemainTimeSat,
		e122PanningHebdomadaire.lblRemainTimeSun
	];
}

woPlanify.weekPreShow = function() {

// _____________ functions _____________

	// reset all values to default

	// calculates how much days will be needed, and how much time must be allocated per day
	woPlanify.findTimeDistribution = function(initialStart, duration, stdStart, stdEnd) {

		if(validationModel.isNull(stdStart)) stdStart = woPlanify.workStart;
		if(validationModel.isNull(stdEnd)) stdEnd = woPlanify.workEnd;

		var workTimeDistribution = new Array();
		var workTime = Math.abs(stdEnd.getTime() - initialStart.getTime());
		var usualWorkTime = Math.abs(stdEnd.getTime() - stdStart.getTime());

		while(duration > workTime) { // another full day will be necessary
			duration -= workTime;
			workTimeDistribution.push(workTime);
			workTime = usualWorkTime;
		}
		workTimeDistribution.push(duration); // add the remaining time inferior to a day work
		return workTimeDistribution;
	};

	// set the next working day's begin and end
	woPlanify.setWorkingDay = function(refDate, targetDate, currentDate) {

		var workingDay = new Date(refDate.getFullYear(),refDate.getMonth(),(refDate.getDate() + targetDate));

		var hour = woPlanify.workStart.getHours();
		var minute = woPlanify.workStart.getMinutes();
		var hour_cr = currentDate.getHours();
		var minute_cr = currentDate.getMinutes();

		if( !validationModel.isNull(currentDate)
			&& (dateFunctions.compareDays(workingDay, currentDate) == 0)
			&& (hour_cr > hour || (hour_cr == hour && minute_cr > minute)))
		{
			hour = hour_cr;
			minute = minute_cr;
		}

		workingDay.setHours(hour,minute);
		var workingStartDay = new Date(workingDay.getTime());

		workingDay.setHours(woPlanify.workEnd.getHours(),woPlanify.workEnd.getMinutes());
		var workingEndDay = new Date(workingDay.getTime());

		return [workingStartDay,workingEndDay];
	};

	woPlanify.setThisWeekplannedWOs = function(week) {
		var firstDay = woPlanify.setWorkingDay(week[0], 0, woPlanify.currentDay)[0];
		var lastDay = woPlanify.setWorkingDay(week[week.length-4], 0, woPlanify.currentDay)[1];

		var wosToExclude = new Array();
		for(var i=0;i<woPlanify.workOrders.length;i++) wosToExclude.push(woPlanify.workOrders[i].doco);
		woPlanify.plannedWOs = woPlanify.findWorkOrdersBetweenDays(firstDay,lastDay,wosToExclude);
	};

	// determinates, for each day of the tested week, if planification is possible
	woPlanify.findWeekPossiblePlanifications = function(week) {

		var timeDistribution = woPlanify.findTimeDistribution(woPlanify.workStart,woPlanify.totalDuration);

		if(week.length < 8) return;
		var dayTime = 86400000;
		var possibleDays = new Array();
		woPlanify.weekMask = 0;
		woPlanify.weekNotBestMask = 0;

		for(var i=0;i<week.length-3;i++) {

			if(dateFunctions.compareDays(week[i], woPlanify.currentDay)<0) continue;

			var workingDayTimes = woPlanify.setWorkingDay(week[i], 0, woPlanify.currentDay);
			var dayStart = new Date(workingDayTimes[0]);
			var dayEnd = new Date(workingDayTimes[1]);
			var availableTime = woPlanify.findRemainingTime(dayStart,dayEnd);
			if(availableTime <= 0) continue;

			var validPlanning = true;
			var k = 0;
			// determinates if a whole planification of the work orders are possible starting by day i
			for(var j=0;j<timeDistribution.length;j++) {

				var workingDayTimes = woPlanify.setWorkingDay(week[i], j + k, woPlanify.currentDay);
				var dayStart = new Date(workingDayTimes[0]);
				var dayEnd = new Date(workingDayTimes[1]);

				if(dayStart.getDay() == 0 || dayStart.getDay() == 6) {
					k++;
					j--;
					continue;
				}
				// calculate available time for planning in this day of the week
				var instanceStartDate = woPlanify.findInstanceStartDate(dayStart,dayEnd,timeDistribution[j]);
				if(validationModel.isNull(instanceStartDate)) {
					validPlanning = false;
					break;
				}
			}
			// have we found an array of successive days available for planifications ?
			// if so, we can register these valid days
			if(validPlanning && j == timeDistribution.length) woPlanify.weekMask |= woPlanify.flags[i];
			else woPlanify.weekNotBestMask |= woPlanify.flags[i];
		}
	}

	woPlanify.findThatDayWorkOrders = function(dayStart, dayEnd, workOrders) {
		var thatDayWorkOrders = new Array();

		var dayStartTime = dayStart.getTime();
		var dayEndTime = dayEnd.getTime();
		for(var i=0;i<workOrders.length;i++) {
			var woStartTime = dateFromsql(workOrders[i].startDate).getTime();
			var woEndTime = dateFromsql(workOrders[i].endDate).getTime();
			if(
				(woStartTime >= dayStartTime && woStartTime < dayEndTime) ||
				(woEndTime >= dayStartTime && woEndTime < dayEndTime)
			) {
				thatDayWorkOrders.push(workOrders[i]);
			}
		}
		return thatDayWorkOrders;
	};

	woPlanify.findThatDayInstances = function(dayStart, dayEnd, instances) {
		var thatDayInstances = new Array();

		var dayStartTime = dayStart.getTime();
		var dayEndTime = dayEnd.getTime();
		for(var i=0;i<instances.length;i++) {
			var instanceStartTime = instances[i][2].getTime();
			var instanceEndTime = instances[i][3].getTime();
			if(
				(instanceStartTime >= dayStartTime && instanceStartTime < dayEndTime) ||
				(instanceEndTime >= dayStartTime && instanceEndTime < dayEndTime)
			) {
				thatDayInstances.push(instances[i]);
			}
		}
		return thatDayInstances;
	}

	woPlanify.findWorkOrdersBetweenDays = function(firstDay,lastDay, excludedWorkOrders) {
		var plannedWOs = new Array();
		var whereClause = 	" where TYTN = 'PRV' and startDate >= '" + dateTimePrintSql(firstDay) +
							"' and startDate < '" + dateTimePrintSql(lastDay) + "' ";
		if(!validationModel.isNull(excludedWorkOrders)) {
			whereClause += " and doco not in (" + excludedWorkOrders.join(',') + ") ";
		};
		plannedWOs = workOrderModel.findPlanningsByWhereClauseAndSortOrder(whereClause);
		return plannedWOs;
	};

	woPlanify.updateWeekDisplay = function(week) {
		if(week.length < 8) return;

		for(var i=0;i<week.length-3;i++) {
			var workingDayTimes = woPlanify.setWorkingDay(week[i], 0, woPlanify.currentDay);
			var dayStart = workingDayTimes[0];
			var dayEnd = workingDayTimes[1];
			var remainingTime = woPlanify.findRemainingTime(dayStart, dayEnd);
			woPlanify.remainTimeLbls[i].text = 'temps restant : ';

			if((woPlanify.weekMask & woPlanify.flags[i])) {
				weekDayLblList[i].skin = "sknLblGreenBG";
				woPlanify.remainTimeLbls[i].text += dateFunctions.formatTimeDuration(remainingTime/1000);
			}
			else if((woPlanify.weekNotBestMask & woPlanify.flags[i]) && remainingTime > 0 && dayEnd.getTime() > dayStart.getTime()){
				weekDayLblList[i].skin = "sknLblOrangeBG";
				woPlanify.remainTimeLbls[i].text += dateFunctions.formatTimeDuration(remainingTime/1000);
			}
			else {
					weekDayLblList[i].skin = "sknLblRedBG";
					woPlanify.remainTimeLbls[i].text = "journée complète";
			}
		}
	};

	woPlanify.findRemainingTime = function(refStartDate, refEndDate, workOrders, instances) {

		if (validationModel.isNull(workOrders)) workOrders = woPlanify.plannedWOs;
		if (validationModel.isNull(instances)) instances = woPlanify.planning;

		var refStartTime = refStartDate.getTime();
		var refEndTime = refEndDate.getTime();

		if (refEndTime < refStartTime) return 0;

		var remainingTime = refEndTime - refStartTime;
		var thatDayWorkOrders = woPlanify.findThatDayWorkOrders(refStartDate, refEndDate, workOrders);

		for (var i = 0; i < thatDayWorkOrders.length; i++) {
			var endDateTime = dateFromsql(thatDayWorkOrders[i].endDate).getTime();
			if (endDateTime > refEndTime) endDateTime = refEndTime;

			var startDateTime = dateFromsql(thatDayWorkOrders[i].startDate).getTime();
			if (startDateTime < refStartTime) startDateTime = refStartTime;

			remainingTime -= Math.abs(endDateTime - startDateTime);
		}

		if (!validationModel.isNull(instances)) {
			var thatDayInstances = woPlanify.findThatDayInstances(refStartDate, refEndDate, instances);
			for (var i = 0; i < thatDayInstances.length; i++) {
				var endDateTime = thatDayInstances[i][3].getTime();
				if (endDateTime > refEndTime) endDateTime = refEndTime;

				var startDateTime = thatDayInstances[i][2].getTime();
				if (startDateTime < refStartTime) startDateTime = refStartTime;

				remainingTime -= Math.abs(endDateTime - startDateTime);
			}
		}

		if (remainingTime < 0) remainingTime = 0;
		return remainingTime;
	};

	woPlanify.setInstances = function(instances, timeDistribution, days, workOrders, currentDay) {
		//purpose : determinates hours and organization of each work order accordingly to suggested days
		// these informations can then be used for display

		if (timeDistribution.length != days.length) {
			kony.print('erreur dans la distribution du temps de travail');
			return;
		}

		if (validationModel.isNull(workOrders)) workOrders = woPlanify.workOrders;
		if (validationModel.isNull(currentDay)) currentDay = woPlanify.currentDay;

		var nextInstances = new Array();
		var woIndex = !instances.length ? 0 : instances[instances.length-1][0];
		if (instances.length > 0 && woIndex < workOrders.length && instances[instances.length-1][4])
			woIndex++;

		if (woIndex >= workOrders.length) {
			kony.print('all work orders have been planified');
			return nextInstances;
		}

		var woStartDate = new Date();
		var woEndDate = new Date();

		for (var i = 0; i < days.length; i++) {

			var refDate = new Date();
			refDate.setTime(days[i].getTime());
			var workTime = timeDistribution[i];
			var workDayTimes = woPlanify.setWorkingDay(days[i], 0, currentDay);
			var workStartDate = new Date(days[i].getTime());
			var workEndDate = new Date(workDayTimes[1]);
			var instanceStartDate = woPlanify.findInstanceStartDate(workStartDate, workEndDate, workTime);

			if (validationModel.isNull(instanceStartDate))
				instanceStartDate = new Date(workStartDate);
			var instanceEndDate = new Date();

			while (workTime > 0 && woIndex < workOrders.length) {
				var relatedInstances = instances.filter(function(e) {return ( e[0] == woIndex);});
				var woDuration = workOrders[woIndex].workTime - woPlanify.findAllocatedWorkTime(relatedInstances);
				if (workTime >= woDuration) {
					instanceEndDate.setTime(instanceStartDate.getTime() + woDuration);
					var nextStartDate = new Date();
					nextStartDate.setTime(instanceStartDate.getTime());
					var nextEndDate = new Date();
					nextEndDate.setTime(instanceEndDate.getTime());
					nextInstances.push([woIndex, refDate, nextStartDate, nextEndDate, true]);
					woIndex++;// all the work order is planified : we go to the next work order
					workTime -= woDuration;// there remains time to be allocated to a work order
					instanceStartDate.setTime(instanceEndDate.getTime());// next work order begins after previous work order
				}
				else {
					instanceEndDate.setTime(instanceStartDate.getTime() + workTime);
					var nextStartDate = new Date();
					nextStartDate.setTime(instanceStartDate.getTime());
					var nextEndDate = new Date();
					nextEndDate.setTime(instanceEndDate.getTime());
					nextInstances.push([woIndex, refDate, nextStartDate, nextEndDate, false]);
					workTime = 0;// all the remaining time has been relocated
				}
			}
		}
		return nextInstances;
	};

	woPlanify.displayWeekPlanification = function(week, targetDays, instances) {

		woPlanify.setSegData = function(res) {

			var planifications = instances.filter(function(e) {
				return (e[1].getFullYear() == targetDay.getFullYear()
					&& e[1].getMonth() == targetDay.getMonth()
					&& e[1].getDate() == targetDay.getDate());
			});

			for (var k = 0; k < planifications.length; k++) {
				var workOrder = woPlanify.workOrders[planifications[k][0]];
				var woData = workOrderModel.findWorkOrderByDoco(workOrder.doco);
				var workOrderSuggestion = {
					TDSTR: dateTimePrintSql(planifications[k][2]),
					TDEND: dateTimePrintSql(planifications[k][3]),
					corporatename: woData.location,
					SAID: woData.siteAN8,
					TYPS: woData.typeCode,
					color: '888888',
					subject: null,
					location: null,
					DOCO: workOrder.doco
				}

				res[0].push(workOrderSuggestion);
			}

			res[0].sort(function(a,b) {
				return dateFromsql(a.TDSTR).getTime() - dateFromsql(b.TDSTR).getTime();
			});
			week_updateSeg(res);
		};

		var targetDay = new Date();
		for (var i = 0; i < week.length - 1; i++) {

			targetDay = week[i];
			var workingDayTimes = woPlanify.setWorkingDay(week[i], 0, woPlanify.currentDay);
			var dayStart = workingDayTimes[0];
			var dayEnd = workingDayTimes[1];
			dayEnd.setDate(dayEnd.getDate() + 1);

			var workOrdersToExclude = new Array();
			for (var k = 0; k < woPlanify.workOrders.length; k++) {
				workOrdersToExclude.push(woPlanify.workOrders[k].doco);
			}

			var request = 	week_globalreq +
				" where tdstr >= '" + datePrintSql(dayStart) +
				"' and tdstr < '" + datePrintSql(dayEnd) + "'" +
				" and bt.doco not in (" + workOrdersToExclude.join(',') + ")" +
				" order by hor.tdstr";
			executeSql(request, woPlanify.setSegData, eventErrorCallBack, i);
		}
	};

	woPlanify.displayDayPlanification = function(currentDay, targetDays, instances) {

		woPlanify.setDaySegData = function(res) {

			var planifications = instances.filter(function(e) {
				return (dateFunctions.compareDays(e[1],currentDay) == 0);
			});

			for (var k = 0; k < planifications.length; k++) {

				var workOrder = woPlanify.workOrders[planifications[k][0]];
				var woData = workOrderModel.findWorkOrderByDoco(workOrder.doco);

				var workOrderSuggestion = {
					equ: woData.equipmentActivity,
					TDSTR: dateTimePrintSql(planifications[k][2]),
					TDEND: dateTimePrintSql(planifications[k][3]),
					corporatename: woData.location,
					SAID: woData.siteAN8,
					TYPS: woData.typeCode,
					zipcode: woData.zipcode,
					city: woData.city,
					address1: woData.address1,
					address2: woData.address2,
					address3: woData.address3,
					SRST: woData.statusCode,
					status: woData.status,
					DL02: woData.statusShort,
					cnt: null,
					numb: null,
					color: '888888',
					subject: null,
					location: null,
					DOCO: workOrder.doco,
					onClick : woPlanify.onInstanceClick,
					instanceIndex : k
				};

				res.push(workOrderSuggestion);
			}

			res.sort(function(a,b) {
				return dateFromsql(a.TDSTR).getTime() - dateFromsql(b.TDSTR).getTime();
			});
			day_segReqCB(res);
		}

		var targetDay;
		for (var j = 0; j < targetDays.length; j++) {
				targetDay = targetDays[j];
				var workingDayTimes = woPlanify.setWorkingDay(currentDay, 0, woPlanify.currentDay);
				var dayStart = workingDayTimes[0];
				var dayEnd = workingDayTimes[1];
				dayEnd.setDate(dayEnd.getDate() + 1);

				var workOrdersToExclude = new Array();
				for (var k = 0; k < woPlanify.workOrders.length; k++) {
					workOrdersToExclude.push(woPlanify.workOrders[k].doco);
				}

				var request = 	planningDay_globalreq +
					" where tdstr >= '" + datePrintSql(dayStart) +
					"' and tdstr < '" + datePrintSql(dayEnd) + "'" +
					" and bt.doco not in (" + workOrdersToExclude.join(',') + ") " +
					" order by hor.tdstr";
				executeSql(request, woPlanify.setDaySegData, eventErrorCallBack);
		}
	};

	woPlanify.findInstanceStartDate = function(startDate, endDate, workTime, workOrders) {

		if (validationModel.isNull(workOrders))
			workOrders = woPlanify.plannedWOs;

		var validStartDate = null;
		var refDate = new Date(startDate);
		var nextStartDate = null;
		var thatDayWorkOrders = woPlanify.findThatDayWorkOrders(startDate,endDate,workOrders);

		for (var i = 0; i < thatDayWorkOrders.length; i++) {
			nextStartDate = new Date(dateFromsql(thatDayWorkOrders[i].startDate));
			if (Math.abs(nextStartDate.getTime() - refDate.getTime()) >= workTime)
				return new Date(refDate);
			refDate = new Date(dateFromsql(thatDayWorkOrders[i].endDate));
		}

		nextStartDate = new Date(endDate);
		if (Math.abs(nextStartDate.getTime() - refDate.getTime()) >= workTime)
			validStartDate = new Date(refDate);

		return validStartDate;
	};

	woPlanify.setTotalDuration = function(grouping, instances) {
		woPlanify.totalDuration = 0;
		for (var i = 0; i < grouping.length; i++) {
			woPlanify.totalDuration += grouping[i].workTime;
		}
		if (!validationModel.isNull(instances)){
			for (var i = 0; i < instances.length; i++) {
				var instance = instances[i];
				woPlanify.totalDuration -= Math.abs(instance[3].getTime() - instance[2].getTime());
			}
		}
	};

// _____________ execution _____________

	if (!woPlanify.workOrders.length) {
		kony.print("no work orders to planify");
		woPlanify.resetData();
		return;
	}

	for (var i = 0; i < woPlanify.remainTimeLbls.length; i++) {
		woPlanify.remainTimeLbls[i].text = "";
		//weekDayLblList[i].skin = "Skin Defaults";
      	weekDayLblList[i].skin = "sknLblNormal";//Dhaval:Fix for issue #100

	}

	otis.application.setCurrentAppMenu("planifyWeekAppMenu");//Dhaval:Invocation of custom app menu

	if (woPlanify.hasChanged) {
		var workOrdersTemp = woPlanify.workOrders;
		woPlanify.resetData();
		woPlanify.workOrders = workOrdersTemp;
	}
	woPlanify.hasChanged = false;
	woPlanify.isOn = true;
	woPlanify.workEnd = new Date(0,0,0,18,0,0);
 	woPlanify.workStart = new Date(0,0,0,8,0,0);
	woPlanify.currentDay = new Date();
	woPlanify.setTotalDuration(woPlanify.workOrders, woPlanify.planning);
};


woPlanify.savePlanificationConfirm = function() {
	if (woPlanify.planning.length == 0) {
		kony.print("no planning proposed");
		return;
	}

	woPlanify.planning.sort(function(a,b) {
		return a[2].getTime() - b[2].getTime();
	});

	var targetUser = validationModel.isNull(login.user.AN8) ? login.candidatUser.AN8 : login.user.AN8;
	var user = "" + targetUser;
	var updatedWorkOrders = [woPlanify.workOrders[woPlanify.planning[0][0]]];
	for (var i = 1; i < woPlanify.planning.length; i++){
		if (woPlanify.planning[i][0] != woPlanify.planning[i - 1][0]) {
			updatedWorkOrders.push(woPlanify.workOrders[woPlanify.planning[i][0]]);
		}
	}

	var DOCOs = new Array();
	for(var i = 0; i < updatedWorkOrders.length; i++)
		DOCOs.push(updatedWorkOrders[i].doco);
	var whereClause = " where TYTN = 'PRV' and DOCO IN (" + DOCOs.join(', ') + ") and AN8 = '" + user + "' ";
//		var currentPlannings = workOrderModel.findPlanningsByWhereClauseAndSortOrder(whereClause);
//		if (currentPlannings.length > 0)	workOrderModel.removePlanningsById(currentPlannings);

	var newPlannings = new Array();
	var updatedWOsData = new Array();
	var nextInstance = 0;
	var paramNames = ["startDate","startTime","statusCode"];
	var columnNames = ["DRQJ","SEET","SRST"];

	for (var i = 0; i < woPlanify.planning.length; i++){

		if (i > 0 && woPlanify.planning[i][0] == woPlanify.planning[i-1][0])
			nextInstance++;
		else
			nextInstance = 0;

		var nextPlanning = {
			doco : woPlanify.workOrders[woPlanify.planning[i][0]].doco,
			user : user,
			startDate : datePrintCustom(woPlanify.planning[i][2], "yyyy-MM-dd hh:mm:ss.ml"),
			endDate : datePrintCustom(woPlanify.planning[i][3], "yyyy-MM-dd hh:mm:ss.ml"),
			instance : "" + nextInstance
		}
		newPlannings.push(nextPlanning);
		
		if (nextInstance == 0) {
			var updatedWO = workOrderModel.findWorkOrderByDoco(nextPlanning.doco);
			updatedWO.startDate = dateFunctions.isAValidDate(dateFunctions.javaDateToStringFormat(woPlanify.planning[i][2]), "2221-01-01");
			updatedWO.startTime = dateFunctions.javaDateToTimeFormat(woPlanify.planning[i][2]);
			updatedWO.statusCode = updatedWO.statusCode == '33' ? '42' : updatedWO.statusCode;
			updatedWOsData.push(updatedWO);
		}

	}

	workOrderModel.setPlannings(DOCOs, newPlannings);

	for (var i = 0; i < updatedWOsData.length; i++)
		workOrderModel.updateWorkOrderParams(updatedWOsData[i], paramNames, columnNames);
	woPlanify.end();
};

woPlanify.savePlanification = function() {

	if(app_parameters.lifetime.auto_plannify_bool == false){
      if(woPlanify.totalDuration <= 0) {
        kony.print("tous les BTs sont planifiés");
        woPlanify.savePlanificationConfirm();
      } else {
       	//popupModel.showPopError("Avez-vous fini votre planification ?", woPlanify.savePlanificationConfirm, undefined, true);
        popupModel.showPopError("Il vous reste des instances/des BT à planifier.", woPlanify.savePlanificationConfirm, undefined, true); //Arati:Changed code for JIRA UI-70
      }
	}

};

woPlanify.end = function() {
if(app_parameters.lifetime.auto_plannify_bool == false){
	woPlanify.close();
	woGroupingDisplay.close();

	navigationModel.removeForm('e122PanningHebdomadaire');
	navigationModel.removeForm('frmWOGrouping');
	workOrder = workOrderModel.findWorkOrderByDoco(workOrder.doco); // refresh work order
	workOrderOverview.tab.isAlreadyDisplayed = false;
	frmWorkOrderOverview.show();
	}

};

// ___________________ day planning

woPlanify.dayPreShow = function() {

	otis.application.setCurrentAppMenu("planifyDayAppMenu");//Dhaval:Invocation of custom app menu

	woPlanify.setInstance = function(targetDay, isUpdate) {
		var dayStart = woPlanify.setWorkingDay(targetDay, 0, woPlanify.currentDay)[0];
		var initialStart = new Date(0,0,0,dayStart.getHours(),dayStart.getMinutes(),dayStart.getSeconds());

		var workTimeDistribution = woPlanify.findTimeDistribution(initialStart,woPlanify.totalDuration);
		woPlanify.day.suggestedInstances = woPlanify.setInstances(woPlanify.planning,[workTimeDistribution[0]],[dayStart]);
		woPlanify.displayDayPlanification(targetDay,[dayStart],woPlanify.planning.concat(woPlanify.day.suggestedInstances));
	};

	woPlanify.validateInstances = function(instances) {
		woPlanify.planning = woPlanify.planning.concat(instances);
	};

	woPlanify.onChkChangeDurationClick = function(chkBox) {
		woPlanify.context.durationChangeIsEnabled = (null != chkBox.selectedKeys);
		planningPop.hBxDuration.setVisibility(woPlanify.context.durationChangeIsEnabled);
	};

	woPlanify.setInstanceTimes = function(index) {

		var allInstances = woPlanify.planning;
		if (woPlanify.day.suggestedInstances.length > 0)
			allInstances = allInstances.concat(woPlanify.day.suggestedInstances);
		var selectedInstance = allInstances[index];

		woPlanify.setInstanceTimesClose = function () {
			planningPop.hboxDurationEnabling.setVisibility(false);
			planningPop.hBxDuration.setVisibility(true);
			planningPop.dismiss();
		};

		woPlanify.setInstanceTimesConfirm = function (hoursAndMinutesTab) {
		var startHrs;
		var startMins;
		if(app_parameters.lifetime.auto_plannify_bool == true){
			startHrs = hoursAndMinutesTab[0];
			startMins = hoursAndMinutesTab[1];
		}else{
			startHrs = parseInt(planningPop.pvStart.selectedKeyValues[0][0], 10);
			startMins = parseInt(planningPop.pvStart.selectedKeyValues[1][0], 10);
		}

			var start = new Date(0, 0, 0, startHrs, startMins, 0);

			if (woPlanify.context.durationChangeIsEnabled) {
				var durationHrs = parseInt(planningPop.pvDuration.selectedKeyValues[0][0], 10);
				var durationMins = parseInt(planningPop.pvDuration.selectedKeyValues[1][0], 10);
				var duration = 60 * (60 * durationHrs + durationMins) * 1000;

				if (duration == 0 && index != (allInstances.length - 1)) {
					planningPop.lblRules.text = "Seule la dernière instance de la liste peut être supprimée";
					return;
				}
			}

			var now = new Date();
			var selectedDate = new Date(day_currentDay.getFullYear(), day_currentDay.getMonth(), day_currentDay.getDate(), startHrs, startMins, 0);
			if (selectedDate < now) {
				planningPop.lblRules.text = "La date et l'heure de début doit se situer dans le futur";
				return;
			}

			woPlanify.setInstanceTimesClose();

			var toUpdateInstance = allInstances.splice(index, 1)[0];
			if (woPlanify.context.durationChangeIsEnabled) {
				if (duration > 0) {
					var updatedInstances = woPlanify.updateInstanceTimeData(toUpdateInstance, allInstances, start, duration);
					var args = [index, 0].concat(updatedInstances);
					Array.prototype.splice.apply(allInstances, args);
				}
				// Else instance is removed (in fact, not re-added into allInstances)
			}
			else {
				var updatedInstances = woPlanify.updateInstanceTimeData(toUpdateInstance, allInstances, start);
				var args = [index, 0].concat(updatedInstances);
				Array.prototype.splice.apply(allInstances, args);
			}

//			allInstances = woPlanify.planning;
//			if(woPlanify.day.suggestedInstances.length > 0) allInstances = allInstances.concat(woPlanify.day.suggestedInstances);
			var dayStart = woPlanify.setWorkingDay(day_currentDay, 0, woPlanify.currentDay)[0];
			woPlanify.displayDayPlanification(day_currentDay, [dayStart], allInstances);
		};


		var workOrder = woPlanify.workOrders[selectedInstance[0]];

		var startHrs = Math.floor(selectedInstance[2].getHours());
		var startMins = Math.floor(selectedInstance[2].getMinutes());
		if (startMins % 5)
			startMins -= startMins % 5;

		var duration = Math.abs(selectedInstance[3].getTime() - selectedInstance[2].getTime())/1000;
	   	var dHrs	= Math.floor(duration / 3600);
	   	var dMins	= Math.floor((duration - (dHrs * 3600)) / 60);

		planningPop.pvStart.selectedKeys = [startHrs.toString(),startMins.toString()];
		planningPop.pvDuration.selectedKeys = [dHrs.toString(),dMins.toString()];
		planningPop.lblRules.text = "";
		planningPop.lblStart.text = 'Commencer le BT à : ';

		woPlanify.context.durationChangeIsEnabled = false;
		planningPop.hboxDurationEnabling.setVisibility(true);
		planningPop.chkChangeDuration.masterData = [['CHANGE', ' ']];
		planningPop.chkChangeDuration.selectedKeys = null;
		planningPop.chkChangeDuration.onSelection = woPlanify.onChkChangeDurationClick;
		planningPop.hBxDuration.setVisibility(false);

		planningPop.lblDuration.text = 'Fixer la durée à : ';
		planningPop.lblPlanningInfo.text = "Définir l'heure de départ et la durée de cette instance du BT " + workOrder.doco;
		planningPop.vBxConfirm.onClick = woPlanify.setInstanceTimesConfirm;
		planningPop.vBxCancel.onClick = woPlanify.setInstanceTimesClose;
		if(app_parameters.lifetime.auto_plannify_bool == false){
			planningPop.show();
		}
	};

	woPlanify.day.suggestedInstances = new Array();
};

woPlanify.onDayValidateClick = function() {
	var instances = woPlanify.day.suggestedInstances;
	woPlanify.validateInstances(instances);
	woPlanify.day.suggestedInstances.length = 0;
	woPlanify.setTotalDuration(woPlanify.workOrders, woPlanify.planning);
	if(app_parameters.lifetime.auto_plannify_bool == false){
	navigationModel.doReturn();
		if(woPlanify.totalDuration <= 0) kony.print("tous les BTs sont planifiés"); //popupModel.showPopError('tous les BTs sont planifiés');  	//Arati:Changed code for JIRA UI-70
		else popupModel.showPopError('Il reste ' + dateFunctions.formatTimeDuration(woPlanify.totalDuration/1000) + ' à planifier');
	}
};

woPlanify.onInstanceClick = function(index, forcedIndex) {
	var index;
	if(app_parameters.lifetime.auto_plannify_bool == false){
		index = parseInt(e121PlanningJournalier.daySegment.selectedItems[0].instanceIndex,10);

	}else{
		index = forcedIndex;
	}
	if(validationModel.isNull(index))
		return;
	woPlanify.setInstanceTimes(index);
}

woPlanify.updateInstanceTimeData = function(instance, allInstances, start, duration, workOrders) {
	if (validationModel.isNull(workOrders))
		workOrders = woPlanify.workOrders;

	var workDates = woPlanify.setWorkingDay(day_currentDay, 0, woPlanify.currentDay);
	var startDate = workDates[0];
	var endDate = workDates[1];

	if (!validationModel.isNull(start)) {
		var instanceDuration = Math.abs(instance[3].getTime() - instance[2].getTime());
		instance[2].setHours(start.getHours());
		instance[2].setMinutes(start.getMinutes());
		instance[3].setTime(instance[2].getTime() + instanceDuration);
//		instances[0] = instance;
	}

	if (!validationModel.isNull(duration) && !validationModel.isNull(workOrders)) {
		var woIndex = instance[0];
		var workTime = workOrders[woIndex].workTime;

		var relatedInstances = allInstances.filter(function(e, i) { return (e[0] == woIndex); });
		var allocatedTime = woPlanify.findAllocatedWorkTime(relatedInstances);
		allocatedTime -= Math.abs(instance[3].getTime() - instance[2].getTime());
		var leftTime = workTime - allocatedTime;

		if ((leftTime - duration) >= 0) {
			instance[3].setTime(instance[2].getTime() + duration);
			if(leftTime == duration) instance[4] = true;
			else instance[4] = false;
//			instances[0] = instance;
		}
		else {
			instance[3].setTime(instance[2].getTime() + leftTime);
			instance[4] = true;
//			instances[0] = instance;
		}
	}

	return [instance];
}

woPlanify.findAllocatedWorkTime = function(instances) {
	var allocatedTime = 0;
	for (var i = 0; i < instances.length; i++) {
		allocatedTime += Math.abs(instances[i][3].getTime() - instances[i][2].getTime());
	}
	return allocatedTime;
}

woPlanify.isDayValid = function(day) {
	return (dateFunctions.compareDays(day,woPlanify.currentDay) >= 0);
}

woPlanify.isWeekValid = function(week) {
	return (
		dateFunctions.compareDays(week[0],woPlanify.currentDay) >= 0 ||
		dateFunctions.compareDays(week[7],woPlanify.currentDay) >= 0
	);
}

woPlanify.close = function(){
	woPlanify.resetData();
	woPlanify.isOn = false;
	woPlanify.hasChanged = false;
}

woPlanify.setPlannification = function(){

	databaseModel.openDBExchange('Mise à jour des BTs en cours...');
	var currentForm = kony.application.getCurrentForm();
	var currentAppMenu = kony.application.getCurrentAppMenu();
	app_parameters.lifetime.auto_plannify_bool = true;
	var woList = workOrderModel.findAllWorkOrders();

	var workOrderToPlanify = [];
  var allNewPlannings = [];

	for(var i = 0; i<woList.length; i++){
		var currentWo = woList[i];
		if(currentWo.dateStarted == null || currentWo.dateStarted == 'NULL' || validationModel.isNull(currentWo.timeRequested)){ // dateStarted is DRQJ
			////////////
		}else if(currentWo.statusCode < 42){
          	workOrderToPlanify.push(currentWo.doco);
          var hourStarted = new Date(currentWo.timeRequested);
          hourStarted = hourStarted.getTime();
          var dateStarted = new Date(currentWo.dateStarted);
          dateStarted = dateStarted.getTime();
          dateStarted = dateStarted + hourStarted;
            var endDate = dateStarted;
            endDate += dateFunctions.BT_HRSOToTime(currentWo.duration);
            endDate = new Date(endDate);
            endDate = datePrintCustom(endDate, "yyyy-MM-dd hh:mm:ss.ml"),
          dateStarted = new Date(dateStarted);
          dateStarted = datePrintCustom(dateStarted, "yyyy-MM-dd hh:mm:ss.ml");
           	var targetUser = validationModel.isNull(login.user.AN8) ? login.candidatUser.AN8 : login.user.AN8;
			var user = "" + targetUser;
          	allNewPlannings.push({"doco": currentWo.doco,
                                  "user" : user,
                                  "startDate": dateStarted,
                                  "endDate": endDate,
                                  "instance": 0});

			workOrderModel.changeStatus(currentWo, 42);
		}

	}
  if(workOrderToPlanify.length > 0){
    workOrderModel.setPlannings(workOrderToPlanify, allNewPlannings);
  }

	if(currentForm != frmLogin){
		currentForm.show();
	}
	//otis.application.setCurrentAppMenu(currentAppMenu);//Dhaval:Invocation of custom app menu
	databaseModel.closeDBExchange();
	app_parameters.lifetime.auto_plannify_bool = false;
}

woPlanify.resetData = function() {
	woPlanify.workOrders = new Array;
	woPlanify.totalDuration = 0;
	woPlanify.workStart = 0;
	woPlanify.workEnd = 0;
	woPlanify.currentDay = null;
	woPlanify.isOn = false;
	woPlanify.weekMask = 0;
	woPlanify.weekNotBestMask = 0;
	woPlanify.planningData = new Array();
	woPlanify.planningTimes = new Array();
	woPlanify.plannedWOs = new Array();
	woPlanify.planning = new Array();
	woPlanify.day.suggestedInstances = new Array();
	week_lastShown = null;
};
