
/**
 * This file contains the All App Menus Creation and Register functions.
 * Also contains some menu call functions. 
 */
gbl_Menu_jsName ="Menu";
var isJHAPerformed = false;// ** TD#68
var isHazardSurveyPerform = false;
var gblCheckServiceCallArrivalTime = false;//** Added by ABA(29/9/15) TD#350
var frmMyJobsAdditionalRO=false;

/**
 * Function to create App Menus.
 * @returns {} 
 */
function createAppMenu() {

	var appMenuMechanic =[ 
					//[ "ok", kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					// rejectGiveToOtherMech ],	
					 [ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", cancelMech ]
					];

	var appMenuItemScheduledOMMSTab = [
			[ "ok", kony.i18n.getLocalizedString("appMenuOk"),
					"tick.png", onClickPerformScheduleOMMS ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuUnscheduledBuildingVisit = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuUnscheduledJobs = [
			[ "accept", kony.i18n.getLocalizedString("appMenuAccept"),
					"tick.png", onUnscheduledAcceptClick ],
			[ "details", kony.i18n.getLocalizedString("Details"),
					"details.png", onDetailClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemDepatBuildingArraival = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
					onChangeDepatArraivaltime ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onRejectDepatArraivaltime ] ];

	var appMenuItemDepatBuilding = [
			[ "Accept", kony.i18n.getLocalizedString("appMenuAcceptCap"),
					"tick.png", onacceptTLeads ],
			[ "Depat", kony.i18n.getLocalizedString("appMenuDepartCap"), "exit.png", onchangedepatbuilding ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appMenuItemDepatBuildingBundleOMMS = [
			[ "Accept", kony.i18n.getLocalizedString("appMenuAcceptCap"),
					"tick.png", onacceptTLeads ],
			[ "Depat", kony.i18n.getLocalizedString("appMenuDepartCap"), "exit.png", onClickDepartBundleOMMS ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
					
	var appMenuItemDepatBuildingHelper = [
			[ "Depat", kony.i18n.getLocalizedString("appMenuDepartCap"), "exit.png", onchangedepatbuilding ]
			//[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",onHomeClick ] COmmented by ABA(30/03/16) TD#895 Remove home from app menu
			];				

	var appMenuItemDepatBuildingDepature = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
					onChangeDepatDepaturetime ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onRejectDepatDepaturetime ] ];

	var appMenuItemFilterJobs = [
			[ "accept", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onFilClick ],
			[ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onFilCanClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appDetailsSummary = [
			[ "accept", kony.i18n.getLocalizedString("appMenureportSmall"),
					"servicereport.png", onClickServiceReport ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ]]; // Removed JHA
					
	var appDetailsSummaryCloseSuspend = [
			[ "accept", kony.i18n.getLocalizedString("appMenureportSmall"),
					"servicereport.png", onClickServiceReport ],
			[ "suspend", kony.i18n.getLocalizedString("lblappmenususpend"),"suspend_jobs.png", OnClickSuspendJob ],
			[ "close", kony.i18n.getLocalizedString("lblappmenuclose"),"stopjob_appmenu.png", OnClickCloseJob ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ]]; // Removed JHA
					
	var appDetailsSummarySafetyCloseSuspend = [
			[ "close", kony.i18n.getLocalizedString("lblappmenuclose"),"closeoutsumappmenu.png", OnClickCloseJob ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];					

    var appDetailsSummaryRepair = [
            [ "accept", kony.i18n.getLocalizedString("appMenureportSmall"),
                    "servicereport.png", onClickServiceReport ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES 
            ];// removed JHA
                    
   var appMenuItemEnterJobEndTime = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
					onChangeSummaryJobEndTime ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onRejectSummaryJobEndTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appMenuItemEnterHelperJobEndTime = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
					onChangeSummaryHelperJobEndTime ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onRejectSummaryHelperJobEndTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];				
					
	var appMenuItemEnterJobEndTimeForSuspended = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
					onChangeSummaryJobEndTimeForSuspended ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onRejectSummaryJobEndTimeForSuspended ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];	                 
                    
    var appDetailsSummaryRepairCloseSuspend = [
            [ "accept", kony.i18n.getLocalizedString("appMenureportSmall"),
                    "servicereport.png", onClickServiceReport ],
			[ "suspend", kony.i18n.getLocalizedString("lblappmenususpend"),"suspend_jobs.png", OnClickSuspendJob ],
			[ "close", kony.i18n.getLocalizedString("lblappmenuclose"),"stopjob_appmenu.png", OnClickCloseJob ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES
            ]; // JHA removed               
					
	var appDetailsSummaryReports = [
			[ "accept", kony.i18n.getLocalizedString("appMenureportSmall"),
					"servicereport.png", onClickServiceReport ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];				

	var appDetailsSummarySR = [
	        //[ "closeout", kony.i18n.getLocalizedString("appMenucloseout"), "closeoutappmenu.png", onCloseOutJobSummary ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; // JHA removed
					
	var appDetailsSummarySRCloseSuspend = [
			[ "closeout", kony.i18n.getLocalizedString("appMenucloseout"), "closeoutsumappmenu.png", onCloseOutJobSummary ],
			/*[ "suspend", kony.i18n.getLocalizedString("lblappmenususpend"),"suspend_jobs.png", OnClickSuspendJob ],
			[ "close", kony.i18n.getLocalizedString("lblappmenuclose"),"stopjob_appmenu.png", OnClickCloseJob ],*/					
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; //JHA removed				
	
	//R11.0 TD#99 start				
	var appNonProductiveSummarySRCloseSuspend = [
			[ "closeout", kony.i18n.getLocalizedString("appMenucloseout"), "closeoutsumappmenu.png", onCloseOutJobSummary ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; 						
	//R11.0 TD#99 end				
					
    var appDetailsSummarySRRepair = [
            //[ "closeout", kony.i18n.getLocalizedString("appMenucloseout"), "closeoutappmenu.png", onCloseOutJobSummary ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES 
            ]; // JHA removed
                    
     var appDetailsSummarySRRepairCloseSuspend = [
     		[ "closeout", kony.i18n.getLocalizedString("appMenucloseout"), "closeoutsumappmenu.png", onCloseOutJobSummary ],
            /*[ "suspend", kony.i18n.getLocalizedString("lblappmenususpend"),"suspend_jobs.png", OnClickSuspendJob ],
			[ "close", kony.i18n.getLocalizedString("lblappmenuclose"),"stopjob_appmenu.png", OnClickCloseJob ],*/
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES
            ];  // JHA removed        
                    

    var NoAppMenuItem = [	
	[" "," " ," ",Check]
	];	

	var appDetailsSummaryHelper = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; // JHA removed
	
	var appDetailsSummaryHelperStopWork = [
            [ "stop work", kony.i18n.getLocalizedString("appmenustopwork"),"closeoutsumappmenu.png", OnClickHelperCloseJob ],           
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; // JHA removed

	var appMenuServiceReport = [
			[ "ok", kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					/*insertSignature*/ insertJobSignature ],
			/*[ "depart", kony.i18n.getLocalizedString("appMenudepartSmall"),
					"exit.png", onClickDepartBuilding ],*/
			[ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", OnClickSignatureCancel ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]
					/*,
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ],
			[ "jha", kony.i18n.getLocalizedString("appMenuJHAsurvey"),
					"jha.png", onJHAClick ]*/ ];
					
	var appMenuServiceReportSignSubmit  = [			
			/*[ "depart", kony.i18n.getLocalizedString("appMenudepartSmall"),
					"exit.png", onClickDepartBuilding ],*/
			[ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", OnClickSignatureCancel ],		
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]
				/*,
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ],
			[ "jha", kony.i18n.getLocalizedString("appMenuJHAsurvey"),
					"jha.png", onJHAClick ]*/ ];

	var appMenuUnscheduledCallBackJobs = [
			[ "accept", kony.i18n.getLocalizedString("appMenuAccept"),
					"tick.png", onUnscheduledAcceptClick ],
			[ "reject", kony.i18n.getLocalizedString("appMenurejectSmall"),
					"cross.png", onUnscheduledRejectClick ],
			[ "details", kony.i18n.getLocalizedString("Details"),
					"details.png", onDetailClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuScheduledCallBackJobs = [
			[ "Travel", kony.i18n.getLocalizedString("appMenuTravel"),
					"travel.png", onTravelClick ],
			[ "ChangePlan", kony.i18n.getLocalizedString("appMenuChangePlan"),
					"edit.png", onChangePlanClick ],
			[ "details", kony.i18n.getLocalizedString("Details"),
					"details.png", onDetailClick ],
			[ "reject", kony.i18n.getLocalizedString("appMenurejectSmall"),
					"cross.png", onScheduledRejectClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
    //for building search select				
	var appMenuBulSearchSelect = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeBuildSearchClick ]];	
					
	var appMenuShutdownUnitsList = [
	        [ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeBuildSearchClick ] ];									

	var appMenuItemAddHelper = [ [ "Cancel",
			kony.i18n.getLocalizedString("appMenucancelSmall"), "cross.png",
			onClickRejectHelper ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemAddTask = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddtaskSmall"), "tick.png", onClickAcceptTask ],
			[ "Cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onClickRejectTask ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemAddJob = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddjobSmall"), "tick.png", onClickAcceptCreateJob ],
			[ "Cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onClickRejectCreateJob ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
   var appMenuItemShutDownAddJob = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddjobSmall"), "tick.png", onClickAcceptShutDownCreateJob ],
			[ "Cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),	"cross.png", onClickRejectShutDownCreateJob ],
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];				
	var appMenuProposeTleadCreateJob = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddjobSmall"), "tick.png", createTotalTLeadDetails ],
			[ "Cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),	"cross.png", onClickRejectSpotSaleCreateJob ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];				
	
	var appMenuItemAddMaterial = [
			[ "Save", kony.i18n.getLocalizedString("appMenuSave"), "tick.png",
					onClickAcceptMaterial ],
			[ "Cancel", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onClickRejectMaterial ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	
	var appMenuItemAddUnit = [
			[ "Add", kony.i18n.getLocalizedString("appMenuchangeunitSmall"), "tick.png", onClickAcceptAddUnit ],
			[ "Cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onClickRejectUnit ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	
	var appMenuItemChangeUnit = [
			[ "Change", kony.i18n.getLocalizedString("appMenuchangeunitSmall"), "tick.png", onClickAcceptChangeUnit ],
			[ "Cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onClickRejectUnit ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemAddExpenses = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddexpensesSmall"),
					"plus.png", onClickAcceptExpenses ],
			[ "Cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onClickRejectExpenses ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];

	var appMenuItemAddTime = [
			[ "Add", kony.i18n.getLocalizedString("appMenuAddTimeSmall"),
					"plus.png", onClickAcceptTime ],
			[ "Cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onClickRejectTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appDetailsAddUnit = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddunitSmall"),
					"plus.png", onDetailsAddUnit ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"), "degree.png", 
                    on360ViewClick ] ]; // JHA removed

    var appDetailsAddUnitRepair = [
            [ "Add", kony.i18n.getLocalizedString("appMenuaddunitSmall"),
                    "plus.png", onDetailsAddUnit ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"), "degree.png", 
                    on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES
			 ]; // JHA removed

	var appDetailsAddUnitHelper = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddunitSmall"),
					"plus.png", onDetailsAddUnit ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; // JHA removed

	var appDetailsAddHelper = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];// JHA removed

	var appDetailsAddHelperHelper = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddhelperSmall"), "plus.png", onDetailsAddHelper ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; // JHA removed
	//R9.0 TD#408 start
	var appDetailsHelperExistHelper = [
			[ "Remove", kony.i18n.getLocalizedString("appMenuRemoveHelperSmall"), "minus.png", confirmDeleteHelper ], //R11.1 TD#297 - Option to remove helper
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; //JHA removed
	//R9.0 TD#408 end
	
	//R11.0 TD#99 start
	var appMenuNonProductiveAddHelper = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddhelperSmall"), "plus.png", onDetailsAddHelper ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; 
	//R11.0 TD#99 end
	
	//R11.1 TD#297 start
	var appMenuNonProductiveRemoveHelper = [
			[ "Remove", kony.i18n.getLocalizedString("appMenuRemoveHelperSmall"), "minus.png", confirmDeleteHelper ], //R11.1 TD#297 - Option to remove helper
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; 
	//R11.1 TD#297 end

    var appDetailsAddHelperHelperRepair = [
            [ "Add", kony.i18n.getLocalizedString("appMenuaddhelperSmall"), "plus.png", onDetailsAddHelper ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES  
			]; // JHA removed
	//R9.0 TD#408 start
	var appDetailsExistHelperRepairJobType = [
			[ "Remove", kony.i18n.getLocalizedString("appMenuRemoveHelperSmall"), "minus.png", confirmDeleteHelper ], //R11.1 TD#297 - Option to remove helper
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES 
            ]; // JHA removed
    //R9.0 TD#408 end
                
	var appDetailsAddHelperNoUnits = [
	//R8.1 TD#316 [ "Add", kony.i18n.getLocalizedString("appMenuaddhelperSmall"), "plus.png", onDetailsAddHelper ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuItemAddHelperBundleOMMS = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddhelperSmall"), "plus.png", goAddMechanicForBundleOMMS ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	//R11.1 TD#297 - Option to remove helper for OMMs				
	var appMenuRemoveHelperBundleOMMS = [
			[ "Remove", kony.i18n.getLocalizedString("appMenuRemoveHelperSmall"), "minus.png", confirmDeleteHelper ], 
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuItemAddHelperBundleOMMSForm = [ [ "Cancel",
		kony.i18n.getLocalizedString("appMenucancelSmall"), "cross.png",
		onClickRejectHelperBundleOMMS ],
		[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
				onHomeClick ] ];
	var appDetailsAddTimeBundleOMMS = [
		[ "Add", kony.i18n.getLocalizedString("appMenuAddTimeSmall"),
				"plus.png", openAddTimeForBundleOMMS ],
		[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
				onHomeClick ] ];
	// TD#317  added app menu for OMMS			
	var appDetailsAddTimeBundleOMMSWithTimeEntry = [
		[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
				onHomeClick ] ];			
	var appMenuItemAddTimeBundleOMMS = [
		[ "AddTime", kony.i18n.getLocalizedString("appMenuokSmall"),
				"tick.png", validateProcedures ],//TD#571//validateProcedures - TD#732
		[ "RejectTime", kony.i18n.getLocalizedString("appMenucancelSmall"),
				"cross.png", onRejectTimeClick ],
		[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
				onHomeClick ] ];
	var appMenuItemBundleOMMSCloseOut = [
		[  "close", kony.i18n.getLocalizedString("appMenucloseout"),  //R12.3 TD#1060
                    "closeoutsumappmenu.png", onClickCloseJobBundleOMMS ],
		[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
				onHomeClick ] ];
	var appDetailsAddExpenses = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; //JHA removed

	var appDetailsAddExpensesHelper = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddexpensesSmall"),
					"plus.png", onDetailsAddExpenses ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; //JHA removed
//R11.0 TD#99 start
var appNonProductiveAddExpensesHelper = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddexpensesSmall"),
					"plus.png", onDetailsAddExpenses ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; 
//R11.0 TD#99 end

    var appDetailsAddExpensesHelperRepair = [
            [ "Add", kony.i18n.getLocalizedString("appMenuaddexpensesSmall"),
                    "plus.png", onDetailsAddExpenses ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES 
            ]; //JHA removed

	var appDetailsAddExpHelperNoUnits = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddexpensesSmall"),
					"plus.png", onDetailsAddExpenses ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appDetailsAddTime = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; //JHA removed

	var appDetailsTasks = [
			// ["save", "save", "tick.png", onClickSaveSummary],
			//[ "Add", kony.i18n.getLocalizedString("appMenuaddTask"), "plus.png", onAddTaskClick ], //** Updated by ABA TD#316
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ]]; // JHA removed

    var appDetailsTasksRepair = [
            // ["save", "save", "tick.png", onClickSaveSummary],
          //  [ "Add", kony.i18n.getLocalizedString("appMenuaddTask"), "plus.png", onAddTaskClick ],//** updated by ABA TD#316
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES 
            ]; //JHA removed

	var appDetailsTasksNoUnits = [
			// ["save", "save", "tick.png", onClickSaveSummary],
			[ "Add", kony.i18n.getLocalizedString("appMenuaddTask"), "plus.png", onAddTaskClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appDetailsJobs = [
			// ["save", "save", "tick.png", onClickSaveSummary],
			//R10.1 TD#239	[ "Add", kony.i18n.getLocalizedString("lbladdjob"), "plus.png", onAddJobClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ]]; // JHA removed
					
	var appDetailsJobsOnlyDepart = [
			[ "depart", kony.i18n.getLocalizedString("appMenudepartSmall"),
                    "exit.png", onClickDepartBuilding ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; // JHA removed				

    var appDetailsJobsRepair = [
            // ["save", "save", "tick.png", onClickSaveSummary],
    		//R10.1 TD#239 [ "Add", kony.i18n.getLocalizedString("lbladdjob"), "plus.png", onAddJobClick ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES 
            ]; // JHA removed
                    
   var appDetailsJobsDepart = [
			// ["save", "save", "tick.png", onClickSaveSummary],
   			//R10.1 TD#239	[ "Add", kony.i18n.getLocalizedString("lbladdjob"), "plus.png", onAddJobClick ],
			[ "depart", kony.i18n.getLocalizedString("appMenudepartSmall"),
                    "exit.png", onClickDepartBuilding ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; //JHA removed

    var appDetailsJobsRepairDepart = [
            // ["save", "save", "tick.png", onClickSaveSummary],
    		//R10.1 TD#239   [ "Add", kony.i18n.getLocalizedString("lbladdjob"), "plus.png", onAddJobClick ],
            [ "depart", kony.i18n.getLocalizedString("appMenudepartSmall"),
                    "exit.png", onClickDepartBuilding ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES 
            ]; //JHA removed                   

	var appDetailsJobsNoUnits = [
			//R10.1 TD#239	[ "Add", kony.i18n.getLocalizedString("lbladdjob"), "plus.png", onAddJobClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appDetailsTasksMaintenance = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ]]; //JHA removed

    var appDetailsTasksMaintenanceRepair = [
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ]  //IOS PORTING CHANGES
            ]; //JHA removed

	
   var appMenuAllJobSummaryList = [	      
			[ "depart", kony.i18n.getLocalizedString("appMenudepartSmall"),"exit.png", checkServiceReportSigBeforeDepart ],            
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];     
					
	var appMenuAllJobSummaryListServiceReport = [
	        /*[ "accept", kony.i18n.getLocalizedString("appMenureportSmall"),"servicereport.png", onClickServiceReport ],*/
			[ "depart", kony.i18n.getLocalizedString("appMenudepartSmall"),"exit.png", checkServiceReportSigBeforeDepart ],            
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; 				            

	var appDetailsAddTasks = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; //JHA removed

	var appDetailsDefault = [
			// ["save", "save", "tick.png", onClickSaveSummary],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; //JHA removed

	var appDetailsDefaultMore = [
			// ["save", "save", "tick.png", onClickSaveSummary],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; // JHA removed

    var appDetailsDefaultMoreRepair = [
            // ["save", "save", "tick.png", onClickSaveSummary],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES 
            ]; // JHA removed

	var appDetailsAddTimeHelper = [
			[ "Add", kony.i18n.getLocalizedString("appMenuAddTimeSmall"),
					"plus.png", onDetailsAddTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; //JHA removed

//R11.0 TD#99 start
	var appNonProductiveAddTimeHelper = [
			[ "Add", kony.i18n.getLocalizedString("appMenuAddTimeSmall"),
					"plus.png", onDetailsAddTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
//R11.0 TD#99 end

	// TD#317 added for removing "add time" app menu				
	var appDetailsAddTimeHelperWithTimeEntry = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; //JHA removed				

    var appDetailsAddTimeHelperRepair = [
            [ "Add", kony.i18n.getLocalizedString("appMenuAddTimeSmall"),
                    "plus.png", onDetailsAddTime ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES 
            ];// JHA removed
   // TD#317 added for removing "add time" app menu                 
    var appDetailsAddTimeHelperRepairWithTimeEntry = [
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES
			]; //JHA removed               

	var appDetailsAddTimeNoUnits = [
			[ "Add", kony.i18n.getLocalizedString("appMenuAddTimeSmall"),
					"plus.png", onDetailsAddTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appDetailsEditTimeHelper = [
			[ "Edit", kony.i18n.getLocalizedString("appMenuEditTimeSmall"),
					"edit.png", onDetailsAddTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ]; // JHA removed

	//R11.0 TD#99 start
	var appNonProductiveEditTimeHelper = [
				[ "Edit", kony.i18n.getLocalizedString("appMenuEditTimeSmall"),
						"edit.png", onDetailsAddTime ],
				[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
						onHomeClick ] ]; 
	//R11.0 TD#99 end

    var appDetailsEditTimeHelperRepair = [
            [ "Edit", kony.i18n.getLocalizedString("appMenuEditTimeSmall"),
                    "edit.png", onDetailsAddTime ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES 
            ]; // JHA removed

	var appDetailsEditTimeNoUnits = [
			[ "Edit", kony.i18n.getLocalizedString("appMenuEditTimeSmall"),
					"edit.png", onDetailsAddTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];				

	var appDetailsSearchMaterial = [
			[ "Add", kony.i18n.getLocalizedString("appMenupurchaseSmall"), "plus.png", onDetailsSearchMaterial ],
			[ "Cancel", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onClickRejectSearchMaterial ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appPlaceOrderSearchMaterial = [ [ "Cancel", kony.i18n.getLocalizedString("appMenuCancel"), "cross.png",
			onClkRejPlaceOrdSearchMaterial ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png", onHomeClick ] ];

	var appDetailsAddMaterial = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; //JHA removed

	var appDetailsAddMaterialHelper = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddparts"), "plus.png", onDetailsAddMaterial ],
			[ "order", kony.i18n.getLocalizedString("appMenuplaceorderSmall"), "pmoappmenu.png",
					onPlaceOrderAppMenuClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ]];// JHA removed
					
	var appDetailsAddMaterialHelperPlaceOrder = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddparts"), "plus.png", onDetailsAddMaterial ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ] ];// JHA removed			

    var appDetailsAddMaterialHelperRepair = [
            [ "Add", kony.i18n.getLocalizedString("appMenuaddparts"), "plus.png", onDetailsAddMaterial ],
            [ "order", kony.i18n.getLocalizedString("appMenuplaceorderSmall"), "pmoappmenu.png",
                    onPlaceOrderAppMenuClick ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES
            ]; //JHA removed
                    
    var appDetailsAddMaterialHelperRepairPlaceOrder = [
            [ "Add", kony.i18n.getLocalizedString("appMenuaddparts"), "plus.png", onDetailsAddMaterial ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES 
            ];  // JHA removed               

    var appDetailsNoAddMaterialHelper = [
            [ "order", kony.i18n.getLocalizedString("appMenuplaceorderSmall"), "pmoappmenu.png",
                    onPlaceOrderAppMenuClick ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ] ]; // JHA removed
                    
   var appDetailsNoAddMaterialHelperPlaceOrder = [
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]]; // JHA removed                

    var appDetailsNoAddMaterialHelperRepair = [
            [ "order", kony.i18n.getLocalizedString("appMenuplaceorderSmall"), "pmoappmenu.png",
                    onPlaceOrderAppMenuClick ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ] //IOS PORTING CHANGES
            ]; // JHA removed
                    
   var appDetailsNoAddMaterialHelperRepairPlaceOrder = [
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ]
            //,[ "746A", "746A form", "", on746AFormClick ]  //IOS PORTING CHANGES 
            ]; // JHA removed                
                    
   var appDetailsUnit360TabTechnicalData = [
			[ "OK", kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onClickAcceptTechnicalData],
			[ "Cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onClickCancelTechnicalData ] ,
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
            onHomeClick ]];                 

	var appDetailsAddMaterialNoUnits = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddparts"), "plus.png", onDetailsAddMaterial ],
			[ "order", kony.i18n.getLocalizedString("appMenuplaceorderSmall"), "pmoappmenu.png", onPlaceOrderAppMenuClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appDetailsAddMaterialNoUnitsPlaceOrder = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddparts"), "plus.png", onDetailsAddMaterial ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];				

	var appMenuItemBuildingArraival = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
					onChangeArraivaltime ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onRejectArraivaltime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuItemReturnToService = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
					ChangeTimeOnReturnToService ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onRejectClickReturnToService ] ];//iOS11.0 TD#2034
	var appMenuItemBuildingDepature = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
					onChangeDepaturetime ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onRejectDepaturetime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemTravelChangePlan = [
			[ "Travel", kony.i18n.getLocalizedString("appMenutravelSmall"),
					"travel.png", onTravelClick ],
			[ "ChangePlan", "change Plan", "edit.png", onChangePlanClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemHSDefault = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
//[ "more details", kony.i18n.getLocalizedString("lblpopupmoreDetails"),    "details.png", detailClickFunc ], //IOS_PORTING_CHANGE need to add it to appMenuItemCurJobInProgState after adding 6th menu item. 

	var appMenuItemCurJobInProgState = [
			//[ "directions", kony.i18n.getLocalizedString("appMenudirectionsSmall"), "directions.png", onDirectionsClick ],/*commented by prd for #1002 */
            [ "Enter", kony.i18n.getLocalizedString("appMenuenterbuildingSmall"), "enter.png", onEnterClick ],
            [ "stop", kony.i18n.getLocalizedString("lblstop"), "stoptravel_appmenu.png", onSTOPClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),    "degree.png", on360CurrentViewClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png", onHomeClick ]
			//[ "more details", kony.i18n.getLocalizedString("lblpopupmoreDetails"),    "details.png", detailClickFunc ]//IOS PORTING CHANGES /*commented by prd for #1002 */
				];

	var appMenuItemCurJobBldgVisitState = [
			/**[ "jha", kony.i18n.getLocalizedString("appMenuJHAsurvey"),"jha.png", onJHAClick ],*/ // TD#68
			[ "start work", kony.i18n.getLocalizedString("appMenustartworkSmall"), "start_work.png", onStartWorkClickCurrenTab ],
			[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"),"exit.png", onClickDepartBuildingWithOutStartWork ],
           // [ "more details", kony.i18n.getLocalizedString("lblpopupmoreDetails"),    "details.png", detailClickFunc ],/*commented by prd for #1002 */
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),    "degree.png", on360CurrentViewClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
   var appMenuItemCurJobCloseBldgVisitState = [
			[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"),"exit.png", onClickCurrentJobDepartBuilding ],
           // [ "more details", kony.i18n.getLocalizedString("lblpopupmoreDetails"),    "details.png", detailClickFunc ],/*commented by prd for #1002 */
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),    "degree.png", on360CurrentViewClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];				

	var appMenuItemCurJobCloseOutState = [
			[ "closeout", kony.i18n.getLocalizedString("appMenucloseout"), "closeoutappmenu.png", onStartCloseOutCurrentTab ],
           // [ "more details", kony.i18n.getLocalizedString("lblpopupmoreDetails"),    "details.png", detailClickFunc ],/*commented by prd for #1002 */
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),    "degree.png", on360CurrentViewClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];
		
	//** Added by ABA(20/1/16) TD#474
 var appMenuItemCurJobCloseBldgVisitStateCurrent = [
			[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"),"exit.png", onClickCurrentJobDepartBuildingFromCurrent ], //** Upadated by ABA(19/2/16) App Crash hazar blank issue
         //   [ "more details", kony.i18n.getLocalizedString("lblpopupmoreDetails"),    "details.png", detailClickFunc ],
          //  [ "360", kony.i18n.getLocalizedString("appMenu360View"),    "degree.png", on360CurrentViewClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];	
		var appMenuItemCurOMMSJobCloseOut = [
			[ "closeout", kony.i18n.getLocalizedString("appMenucloseout"), "closeoutappmenu.png", onStartCloseOutOMMSCurrentTab ],
            //[ "more details", kony.i18n.getLocalizedString("lblpopupmoreDetails"),    "details.png", detailClickFunc ],
           // [ "360", kony.i18n.getLocalizedString("appMenu360View"),    "degree.png", on360CurrentViewClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];
		var appMenuItemCurAddOMMSJobCloseOut = [
			[ "closeout", kony.i18n.getLocalizedString("appMenucloseout"), "closeoutappmenu.png", onStartCloseOutAddOMMSCurrentTab ],
            //[ "more details", kony.i18n.getLocalizedString("lblpopupmoreDetails"),    "details.png", detailClickFunc ],
           // [ "360", kony.i18n.getLocalizedString("appMenu360View"),    "degree.png", on360CurrentViewClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];
	//** End
    var appMenuItemUnit360Tab = [
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ] ];

    var appMenuItemEBUnit360Tab = [
            [ "Enter", kony.i18n.getLocalizedString("appMenuenterbuildingSmall"), "enter.png", onEnterClick ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ] ];

	var appMenuAccUnSchPlanTime = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAcceptUnSchPlanTime ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejectUnSchPlanTime ]
					];

	var appMenuItemChangeAccRejTime = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onChangeAccPlanClick ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejectUnSchPlanTime ]
					 ];

	var appMenuItemAccRejNotes = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAddNoteClick ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onCancelNoteClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];

	var appMenuRejectReason = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAcceptRejectReason ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejUnScheduledJob ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuDepartReason = [
			[ "Accept", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAcceptDepartReason ],
			[ "Reject", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejectDepartReason ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];

	var appMenuAdditionalJobsRejectReason = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAcceptAdditionalJobsRejectReason ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejAdditionalJob ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuScheduledRejectReason = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAcceptScheduledRejectReason ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejScheduledJob ] ];

	var appMenuaccRejUnscheduledJob = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAccUnScheduledJob ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejUnScheduledJob ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemTravelAccRej = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onTravelAcceptClickAcc ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onTravelRejectClickRej ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appMenuItemETAUnscheduledVisit = [ 
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onETAUnscheduledAccept ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onETAUnscheduledReject ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemDefault = [
			[ "def1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAcceptClickk ],
			[ "def2", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejectClickk ] ];
					
	var NoAppMenu = [
			[ "", "","", onClickNoAppMenu ] ];				

	var appMenuScheduledJobs = [
			[ "Travel", kony.i18n.getLocalizedString("appMenuTravel"),
					"travel.png", onTravelClick ],
			[ "ChangePlan", kony.i18n.getLocalizedString("appMenuChangePlan"),
					"edit.png", onChangePlanClick ],
			[ "details", kony.i18n.getLocalizedString("Details"),
					"details.png", onDetailClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuHelperScheduledJobs = [
			[ "details", kony.i18n.getLocalizedString("Details"),
					"details.png", onDetailHelperClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];

	var appMenuItemAddEnter = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddnoteSmall"), "plus.png", onAddNotesClick ],			
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemAddTasks = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddTask"), "plus.png", onAddTaskClick ],
			[ "360", kony.i18n.getLocalizedString("appmenu360ViewCap"),
					"degree.png", on360ViewClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemEnter = [
			[ "Enter", kony.i18n.getLocalizedString("appMenuenterbuildingSmall"), "enter.png", onEnterClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "", onHomeClick ] ];

	var appMenuItemEnterBuilding = [
			/**[ "jha", kony.i18n.getLocalizedString("appMenuJHAsurvey"),
					"jha.png", onJHAClick ],*/ //TD#68
			[ "start work", kony.i18n.getLocalizedString("appMenustartworkSmall"), "start_work.png", onStartWorkClick ],
			[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"),"exit.png", onClickDepartBuildingWithOutStartWork ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; // Changed by Jignasa

	var appMenuItemEnterBuildingChangeSCArrivalTime = [ 
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onSCArrivalTimeAccept ]
		//	[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",onHomeClick ] 
			];

	var appMenuItemAdd = [ [ "Add",
			kony.i18n.getLocalizedString("appMenuAddCap"), "plus.png",
			onAddClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemAdd360 = [
			[ "Add1", kony.i18n.getLocalizedString("appMenuAddCap"),
					"plus.png", onAddClick ],
			[ "360", kony.i18n.getLocalizedString("appmenu360ViewCap"),
					"degree.png", on360ViewClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemAddSearch = [
			[ "Add2", kony.i18n.getLocalizedString("appMenuAddCap"),
					"plus.png", onAddClick ],
			[ "Search", kony.i18n.getLocalizedString("appMenuSearch"), "search.png", onSearchClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemChangePlanDepart = [
			[ "ChangePlan", kony.i18n.getLocalizedString("appMenuChangePlan"),
					"edit.png", onChangePlanClick ],
			[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"),
					"exit.png", onDepartClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];

	var appMenuItemHomeDepart = [
			[ "Home", kony.i18n.getLocalizedString("appMenuHomeCap"),
					"home.png", onHomeClick ],
			[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"),
					"exit.png", onDepartClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemCollapse = [
		// ["details", "details", "details.png", onDetailClick],
		/*	[ "options", kony.i18n.getLocalizedString("appMenuoptionsSmall"),
					"options.png", onSortClick ],*/ //commented by prd for #1002
		/*	[ "nearby", kony.i18n.getLocalizedString("NearBy"),
					"map_appmenu.png", loadMapData ], */ //commented by prd for #1002
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]  ];
					
	var appMenuItemCollapseUnPlaned = [
			// ["details", "details", "details.png", onDetailClick],
		/*	[ "options", kony.i18n.getLocalizedString("appMenuoptionsSmall"),
					"options.png", onSortClick ], */ //commented by prd for #1002
		/*	[ "nearby", kony.i18n.getLocalizedString("NearBy"),
					"map_appmenu.png", loadMapData ], */ //commented by prd for #1002
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]
			//[ "createjob", kony.i18n.getLocalizedString("appmenuCreateJob"), "plus.png",onCreatJobClick ]
			];				 
					 	 

	var appMenuItemClear = [
			// ["details", "details", "details.png", onDetailClick],
            //[ "options", kony.i18n.getLocalizedString("appMenuoptionsSmall"),"options.png", onSortClick ],
			[ "clear", kony.i18n.getLocalizedString("appMenuclearSmall"), "minus.png", onOptionClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
				
	var appMenuItemClearBuildingJobs = [
			[ "clear", kony.i18n.getLocalizedString("appMenuclearSmall"), "minus.png", onOptionClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemCall = [
			[ "accept", kony.i18n.getLocalizedString("appMenucallSmall"),
					"tick.png", onCallClick ],
			[ "reject", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onCancelCallClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemUnits = [
			[ "Add2", kony.i18n.getLocalizedString("appMenuAddCap"),
					"plus.png", onAddUnitClick ],
			[ "Home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appmenu360ViewCap"),
					"degree.png", on360ViewClick ] ];

	var appMenuStartServiceCall = [ [ "startservice", kony.i18n.getLocalizedString("appMenustartserviceSmall"),
			"startservice.png", onStartServiceCallClick ] ];

	var appMenuStopServiceCall = [ [ "stopservice", kony.i18n.getLocalizedString("appMenustopserviceSmall"),
			"stopservice.png", checkPendingCalls],// beforeStopServices  //TD#1780 changed for handling stop service validation
			[ "about", kony.i18n.getLocalizedString("appMenuAbout"),
			"about_icon.png", openappversionpopup ] ,
			[ "sync", kony.i18n.getLocalizedString("appMenuSync"), "sync.png",
					callGetPendingUploads ]];//TD#1351

	//TD#1998 - Included reset buton in Menu bar
	var appMenuResetStopService = [ [ "stopservice", kony.i18n.getLocalizedString("appMenustopserviceSmall"),
			"stopservice.png", checkPendingCalls],
			[ "about", kony.i18n.getLocalizedString("appMenuAbout"),
			"about_icon.png", openappversionpopup ] ,
			[ "sync", kony.i18n.getLocalizedString("appMenuSync"), "sync.png",
					callGetPendingUploads ],
			[ "syncReset", "reset", "refresh.png",resetSync]];

	var appMenuAddTime = [
			[ "AddTime", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAddTimeClick ],
			[ "RejectTime", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejectTimeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuEditTime = [
			[ "AddTime", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onEditTimeClick ],
			[ "RejectTime", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejectEditTimeClick],// TD#418 added new function while rejecting edit time
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemEditTime = [ [ "Edit2", kony.i18n.getLocalizedString("appMenueditSmall"), "edit.png", openEditTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuAddExpense = [
			[ "add", kony.i18n.getLocalizedString("appMenuAddCap"), "tick.png",
					onAddExpenseClick ],
			[ "cancel", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onCancelAddExpenseClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuAddExpenseForNonProductiveJobs = [
			[ "add", kony.i18n.getLocalizedString("appMenuAddCap"), "tick.png",
					addExpensesForNonProductiveJobs ],
			[ "cancel", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onCancelAddExpenseForNonProductiveJobsClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appMenuEditExpense = [
			[ "save", kony.i18n.getLocalizedString("appMenuSave"), "tick.png",
					onEditExpenseClick ],
			[ "cancel", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onCancelEditExpenseClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemAtBuilding = [
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", onViewClick ],
			[ "enter", kony.i18n.getLocalizedString("appMenuenterbuildingSmall"), "enter.png", onEnterBuildClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuProposeTLead = [
			[ "accept", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAcceptProposeTLead ],
			[ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onCancelProposeTLead ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuProposeTLeadQuestions = [
			[ "accept", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAcceptProposeTLeadQuestions ],
			[ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onCancelProposeTLeadQuestions ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuItemTravel = [
			//[ "directions", kony.i18n.getLocalizedString("appMenudirectionsSmall"), "directions.png", onDirectionsClick ],// commented by prd for #1002
			[ "buildarrival", kony.i18n.getLocalizedString("appMenuatbuildingSmall"), "buildingarrival.png",
					onAtBuildClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuItemTravelUnscheduled = [
		//	[ "directions", kony.i18n.getLocalizedString("appMenudirectionsSmall"), "directions.png", onDirectionsClick ],// commented by prd for #1002
			[ "stop", kony.i18n.getLocalizedString("lblstop"), "stoptravel_appmenu.png", onSTOPClick ],
			[ "enter", kony.i18n.getLocalizedString("appMenuenterbuildingSmall"), "enter.png", 
					onUnscheduleAtBuildClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	//** Added by ABA(18/1/16) TD#474
var appMenuItemCurrentBuildStartWork = [			
			[ "start work", kony.i18n.getLocalizedString("appMenustartworkSmall"), "start_work.png", onStartWorkClickCurrenBuilding ],
			[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"),"exit.png", departFromCurrent ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];	
var appMenuItemTravelUnscheduledCurrent = [
			//[ "directions", kony.i18n.getLocalizedString("appMenudirectionsSmall"), "directions.png", onDirectionsClick ],
			[ "stop", kony.i18n.getLocalizedString("lblstop"), "stoptravel_appmenu.png", onSTOPClick ],
			[ "enter", kony.i18n.getLocalizedString("appMenuenterbuildingSmall"), "enter.png", 
					syncAndNavigateToSchOMMS ],//TD#740
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];	
//** End
	var appMenuItemTravelScheduledOMMS = [
		[ "directions", kony.i18n.getLocalizedString("appMenudirectionsSmall"), "directions.png", onDirectionsClick ],
		[ "enter", kony.i18n.getLocalizedString("appMenuenterbuildingSmall"), "enter.png",
				performscheduledOMMS ],
		[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
				onHomeClick ] ];
	var appMenuItemUnscheduledBuldngVisit = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	
	var appMenuItemUnscheduledNoJobPresent = [
		/*[ "accept", kony.i18n.getLocalizedString("appMenuokSmall"),
				"tick.png", onClickPerformSelectedJob ],*/
		[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"), "exit.png", departFromCurrent ],
		[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
				onHomeClick ]];
	
	var appMenuItemUnscheduledJobPerform = [
		[ "hazard", kony.i18n.getLocalizedString("appMenuJHAsurvey"),
				"haz.png", showHazardScan ], //TD#68 Haz button added
		[ "accept", kony.i18n.getLocalizedString("appMenuokSmall"),
				"tick.png", onClickPerformSelectedJob ],				
		[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"), "exit.png", departFromCurrent ],
		[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
				onHomeClick ]];
	
	var appMenuItemUnscheduledBuildingUnitsCurrent = [
		[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
				onHomeClick ] ];
	var appMenuItemUnscheduledBuildingUnitsAdditional = [
		[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
				onHomeClick ]];
		/**,// TD#319 removing create job app menu icon
		[ "createjob", kony.i18n.getLocalizedString("appmenuCreateJob"), "plus.png",
				onCreatJobAdditionalClick ] ];*/

	var appMenuSelectView = [
			[ "ok1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAcceptSelectView ],
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];

	var appMenuJHA = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenusubmitSmall"),
					"tick.png", onJHASubmitClick ],
			[ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onJHACancelClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuPlaceMaterialOrder = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenusubmitSmall"),
					"tick.png", onPlaceOrderClick ],
			[ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onOrderCancelClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];	

	var appMenuTargetDepartExceed = [ [ "Accept1",
			kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
			onChangeTargetDeparttime ]
	// ,["Reject1", "Cancel", "cross.png", onRejectTargetDeparttime]
	];

	var AppMenuSafConfirmTimePicker = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", ValidatingTimeWithCurrentTime ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onUpdateDepartureTimeRej ] ];

	var appMenuNoNetWorkScreen = [ [ "Accept1",
			kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
			showNoNetWorkAccept ] ];

	var appDetailsNoUnit = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	// app menu for reports material orders, building list by Aishwarya
	var appMenuOptionsMaterial = [
		/*	[ "options", kony.i18n.getLocalizedString("appMenuoptionsSmall"),
					"options.png", onMaterialSortClick ], */  //commented by prd for #1002
			[ "order", kony.i18n.getLocalizedString("appMenuplaceorderSmall"), "pmoappmenu.png", repoPlaceMatOrdClick ],
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	
   // app menu for reports material orders, building list by Aishwarya
	var appMenuOptionsMaterialPlaceOrder = [
		/*	[ "options", kony.i18n.getLocalizedString("appMenuoptionsSmall"),
					"options.png", onMaterialSortClick ], */ //commented by prd for #1002
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];


	// app menu for reports material orders, select view by Aishwarya
	var appMenuOptionsSelectView = [
			[ "accept", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAcceptSelectViewMaterial ],
			[ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onCancelSelectViewMaterial ],
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuReportsMOJobs = [
			[ "order", kony.i18n.getLocalizedString("appMenuplaceorderSmall"), "pmoappmenu.png", repoPlaceMatOrdClick ],
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuReportsMOMaterialOrders = [
            [ "options", kony.i18n.getLocalizedString("appMenuoptionsSmall"),  "options.png", onMaterialSortClick ],
			[ "order", kony.i18n.getLocalizedString("appMenuplaceorderSmall"), "pmoappmenu.png", repoPlaceMatOrdClick ],
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
var appMenuReportsMOJobsPlaceOrder = [
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuReportsMOMaterialOrdersPlaceOrder = [
          //  [ "options", kony.i18n.getLocalizedString("appMenuoptionsSmall"),  "options.png", onMaterialSortClick ], //commented by prd for #1002
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];				

	var appMenuSubmitTimeSheet = [
		/*	[ "submittimesheet", "submit timesheet", 		
					"submittimesheet.png", onClickSubmitTimeSheet ], */ //R11.0 TD#99
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuTimeSheetExpenseDaySummary = [
		/*	[ "submittimesheet", kony.i18n.getLocalizedString("appMenusubmittimesheet"),
					"submittimesheet.png", onClickSubmitTimeSheet ], */ //R11.0 TD#99
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appMenuTimeSheetExpenseDaySummaryForNonProductiveJobs = [
			[ "Add", "add expense", "plus.png", onReportsAddExpenseFormAction ],
		/*	[ "submittimesheet", kony.i18n.getLocalizedString("appMenusubmittimesheet"),
					"submittimesheet.png", onClickSubmitTimeSheet ],  */ //R11.0 TD#99
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appMenuTimeSheetAddDaySummary = [
			[ "AddSafety", kony.i18n.getLocalizedString("appMenuAddSafety"), "plussft.png", onAddSafetyJobClickDaily ],	//R11.0 TD#99
			[ "AddRoute", kony.i18n.getLocalizedString("appMenuAddRoute"), "plusroute.png", onAddRouteJobClickDaily ],
			
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuTimeSheetTimeDaySummary = [
			[ "AddSafety", kony.i18n.getLocalizedString("appMenuAddSafety"), "plussft.png", onAddSafetyJobClickDaily ],	//R11.0 TD#99
			[ "AddRoute", kony.i18n.getLocalizedString("appMenuAddRoute"), "plusroute.png", onAddRouteJobClickDaily ],
		/*	[ "submittimesheet", kony.i18n.getLocalizedString("appMenusubmittimesheet"), //R11.0 TD#99
					"submittimesheet.png", onClickSubmitTimeSheet ], */
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];

	var appMenuEditTimeinTimeSheet = [
			[ "EditTimeSheetTime",
					kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onEditTimeinTimeSheet ],
			[ "RejectTimeSheetTime",
					kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejectEditTimeSheet ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appMenuEditExpensesinTimeSheet = [
			[ "EditExpensesSheetTime",
					kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onEditExpensesinTimeSheet ],
			[ "RejectExpensesSheetTime",
					kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onRejectEditTimeSheet ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	// app menu for reports material orders, select view by Aishwarya
	var appMenuOptionsSelectView = [
			[ "accept", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onAcceptSelectViewMaterial ],
			[ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onCancelSelectViewMaterial ],
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	// app menu for reports - navigation given to reports dashboard screen

	var appMenuItemReportsCompletedJobsHS = [
		/*	[ "sendmail", kony.i18n.getLocalizedString("appMenusendmailSmall"), "email.png",
					onReportsCompleatedJobsEmail ],*/  //commented by prd for #1002
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];

	var appMenuItemReportsHSDefault = [			
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuItemReportsHSDefaultCreateJob = [	
	        //[ "Add", kony.i18n.getLocalizedString("lbladdjob"), "plus.png", onAddJobClickWeekly ],		
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuItemReportsHSDefaultSearch = [
			[ "clear", kony.i18n.getLocalizedString("appMenuclearSmall"), "minus.png", onClearTLeadsBldgSearchClick ],
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
    var appMenuItemReportsComJobsDefaultSearch = [
			[ "clear", kony.i18n.getLocalizedString("appMenuclearSmall"), "minus.png", onClearRptCmpJobsBldgSearchClick ],
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appServiceReportMail = [ 
           [ "mail", kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
			onClickSendServiceReport ] ,
            [ "Reject1", kony.i18n.getLocalizedString("appMenuCancel"),
                    "cross.png", onClickSendServiceReportReject ],
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];
	var appSelectViewTleads = [ 
			[ "Accept1", kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
					onTleadFilterAccept ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onTleadFilterReject ] ];
	var appReportsTleadsFilter = [
		/*	[ "options", kony.i18n.getLocalizedString("appMenuoptionsSmall"),
					"options.png", onTleadFilterClick ], */ //commented by prd for #1002		
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appFilterReportsTleadsFilter = [
			[ "clear", kony.i18n.getLocalizedString("appMenuclearSmall"), "minus.png", onClearReportsTleadsFilter ],
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuItemStartWork = [
			[ "closeout", kony.i18n.getLocalizedString("appMenucloseout"), "closeoutappmenu.png", onStartCloseOut ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; // added by Jignasa
	var appMenuTimeSheetSTime = [
			[ "accept",
					kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onAppMenuAccStartTime ],
			[ "cancel",
					kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onCancelCreateTimePicker ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuTimeSheetETime = [
			[ "accept",
					kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onAppMenuAccEndTime ],
			[ "cancel",
					kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onCancelCreateTimePicker ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];
	var appMenuTimeSheetFilterOptions = [
			[ "acceptFilter", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", loadTimesheetReports ],					
			[ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];
	
    var appMenuNoItemDefault = [];
	var appMenuTimeesheetViewCurrent = [
			[ "previous", kony.i18n.getLocalizedString("lblPrevious"),
                    "leftarrow.png", onClickPreviousTimeSheet ],
            [ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuTimeesheetViewPrevious = [
			[ "next", kony.i18n.getLocalizedString("lblNext"),
                    "rightarrow.png", onClickNextTimeSheet ],
            [ "reports", kony.i18n.getLocalizedString("appMenureportSmall"),
					"reportsappmenu.png", onReportsHomeClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
    var appMenuItem746AForm = [
            [ "accept", kony.i18n.getLocalizedString("appMenuokSmall"),
                    "tick.png", onAcceptRepairRequest ],
            [ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),
                    "cross.png", onCancelRepairRequest ],
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ] ];
   var appMenuItemUpdateHazard = [
			//[ "edit", kony.i18n.getLocalizedString("updateHazardsKey"), "edit.png", onUpdateHazardsClick ], /* commented by prd for #1002 */
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png", onHomeClick ] ];
			
			
	var appMenuUpdateHazardDetails = [
			[ "accept", kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png", onClickUpdateHazards ],
			[ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"), "cross.png", onClickrejectUpdateHazards ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png", onHomeClick ] ];
			
   var appMenuUpdateNoHazardDetails = [			
			[ "cancel", kony.i18n.getLocalizedString("appMenucancelSmall"), "cross.png", onClickrejectUpdateHazards ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png", onHomeClick ] ];		
			
	var appMenuItemUpdateHazardBundleOMMS = [
		//[ "edit", kony.i18n.getLocalizedString("updateHazardsKey"), "edit.png", onUpdateHazardsClick ], /* commented by prd for #1002 */
		[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"), "exit.png", checkJobTaskStatusbeforeDepart ],
		[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png", onHomeClick ] ];
	
var appMenuItemUpdateDepartHazard = [
			//[ "edit", kony.i18n.getLocalizedString("updateHazardsKey"), "edit.png", onUpdateHazardsClick ],  /* commented by prd for #1002 */
			[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"), "exit.png", getClosedJobsList ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png", onHomeClick ] ];
			
	var appMenuItalyStartTraveTime = [
			[ "accept",
					kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onAcceptItalyStartTime ],
			[ "cancel",
					kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onAppMenuRejStartEndTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appMenuEditDayStartTime = [
			[ "acceptEditDayStart",
					kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onAppMenuAccEditStartTime ],
			[ "cancel",
					kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onAppMenuCancelEditStartEndTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuEditDayEndTime = [
			[ "acceptEditDayEnd",
					kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onAppMenuAccEditEndTime ],
			[ "cancel",
					kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onAppMenuCancelEditStartEndTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];						
	var appMenuItemAddJobUnplan = [
			[ "Add", kony.i18n.getLocalizedString("appMenuaddjobSmall"), "tick.png", onClickAcceptCreateJobUnplan ],
			[ "Cancel", kony.i18n.getLocalizedString("appMenucancelSmall"),	"cross.png", onClickRejectCreateJobUnplan ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",onHomeClick ] ];

	var appMenuItalyCurrentJobTime = [
			[ "accept",
					kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onAcceptItalyCurrJobTime ],
			[ "cancel",
					kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onAppMenuRejStartEndTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	
	var appMenuEditStartTime = [
			[ "acceptEditStart",
					kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onAccEditStartTime ],
			[ "cancel",
					kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onCancelEditStartEndTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ]];
					
	var appMenuEditEndTime = [
			[ "acceptEditEnd",
					kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onAccEditEndTime ],
			[ "cancel",
					kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onCancelEditStartEndTime ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	/*var appMenuCaptureSignature = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "sync", kony.i18n.getLocalizedString("appMenuSync"), "sync.png",
					onSyncClick ]];*/
	var appMenuGeoCodeEdit = [
			[ "updateCurrentLocation", kony.i18n.getLocalizedString("updateLocation"),
                    "edit.png", updateCurrLocation ],
            [ "close",	kony.i18n.getLocalizedString("lblappmenuclose"),	"cross.png", 
					onCloseMapClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; 
	var appMenuGeoCode = [
			[ "close",	kony.i18n.getLocalizedString("lblappmenuclose"),	"cross.png", 
					onCloseMapClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; 
   var appMenuNotesGeoCodeEdit = [
			[ "updateCurrentLocation", kony.i18n.getLocalizedString("updateLocation"),
                    "edit.png", updateCurrLocation ],            
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; 
	var appMenuNotesGeoCode = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; 
	var appMenuItemAddEditTimeED1 = [
			[ "ok", kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onOkClickEditTimeED1 ],
			[ "cancel",	kony.i18n.getLocalizedString("appMenucancelSmall"),	"cross.png", 
					onAppMenuRejEditTimeED1 ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
	var appMenuItemBuildingDepatureCurrentJob = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuOk"), "tick.png",
					onChangeDepaturetimeCurrentJob ],
			[ "Reject1", kony.i18n.getLocalizedString("appMenuCancel"),
					"cross.png", onRejectDepaturetimeCurrentJob ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appDetailsFormInProgress = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ]; 				
	//Navin
	var appMenuNewJobs = [
			[ "refresh", kony.i18n.getLocalizedString("appMenurefreshSmall"), "refresh.png", refreshClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png", onHomeClick ] 
	]; 
	
	var appMenuWorkOrderDetail = 
	[
			//[ "back", "","", setNewJobsScreenFilteredOrNonFiltered ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",onHomeClick ]
	];
	
	var appMenuNewJobsFiltered = 
	[
			[ "clear", kony.i18n.getLocalizedString("appMenuclearSmall"), "minus.png", onClearNewJobClick ],
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png", onHomeClick ]
	 ];
	 var appMenuNewJobRejectForm = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png", onNewJobAcceptRejectReason ],			
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];
					
	var appMenuAcceptNewJob = [
			[ "Accept1", kony.i18n.getLocalizedString("appMenuokSmall"),
					"tick.png",  onAccNewJob],			
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ] ];				
	//R9.0 TD#312		
	var appMenuItemUnscheduledAdditionalOMMS = [
			[ "Haz Scan", kony.i18n.getLocalizedString("appMenuJHAsurvey"), 
					"haz.png",showHazardScan],// TD#68 Added Haz button on App menu
			[ "OK", kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onClickOkAdditionalOMMS],		
			//[ "back", "back","", additionalOMMSBack ],//TD#312
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
            onHomeClick ]];   	
            //
	var appMenuItemUnscheduledAdditionalOMMSNoJob = [
			//[ "back", "back","", additionalOMMSBack ],//TD#312 //IOS PORTING CHANGE
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
            onHomeClick ]];
	//ends here								
 //Start:Added for TD#791
    var appDetailsTasksRepairDepart = [
            [ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
                    onHomeClick ],
            [ "360", kony.i18n.getLocalizedString("appMenu360View"),
                    "degree.png", on360ViewClick ],
            //[ "746A", "746A form", "", on746AFormClick ], //IOS PORTING CHANGES
            ["Depart",kony.i18n.getLocalizedString("appMenuDepartCap"),"exit.png",onDepartFromTaskScreen]
            ];	
             
	var appDetailsDefaultMoreDepart = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			[ "360", kony.i18n.getLocalizedString("appMenu360View"),
					"degree.png", on360ViewClick ],
			["Depart",kony.i18n.getLocalizedString("appMenuDepartCap"),"exit.png",onServiceCallDepartFromDetailsScreen]		
			];  
	var appMenuItemUnscheduledBuldngVisitDepart = [
			[ "home", kony.i18n.getLocalizedString("appMenuHome"), "home.png",
					onHomeClick ],
			["Depart",kony.i18n.getLocalizedString("appMenuDepartCap"),"exit.png",onDepartFromDetailsScreen]		
					 ];		
	var appMenuItemDepatBuildingBundleOMMSDepart = [
			[ "Depart", kony.i18n.getLocalizedString("appMenuDepartCap"), "exit.png", onClickDepartBundleOMMS ]
			];	
	var appMenuItemDepatBuildingDepart = [
			[ "Depat", kony.i18n.getLocalizedString("appMenuDepartCap"), "exit.png", onchangedepatbuilding ]];							 	           				
	//End:Added for TD#791						
					
	/*var appMenuItalyAddSafetyJobTime = [
			[ "accept",
					kony.i18n.getLocalizedString("appMenuokSmall"), "tick.png",
					onAcceptItalyAddSafetyJobTime ],
			[ "cancel",
					kony.i18n.getLocalizedString("appMenucancelSmall"),
					"cross.png", onAppMenuRejStartEndTime ] ];*/
					
    	//Navin
	otis.application.createAppMenu("appMenuMechanic", appMenuMechanic, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuNewJobs", appMenuNewJobs, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuWorkOrderDetail", appMenuWorkOrderDetail, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuNewJobsFiltered", appMenuNewJobsFiltered, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuNewJobRejectForm", appMenuNewJobRejectForm, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuAcceptNewJob", appMenuAcceptNewJob, "sknAppMenuCommon", "sknAppMenuCommon");
	//ends here
				
    otis.application.createAppMenu("appDetailsSummaryHelper", appDetailsSummaryHelper, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsSummaryHelperStopWork", appDetailsSummaryHelperStopWork, "sknAppMenuCommon", "sknAppMenuCommon");
    // Added app menu for Safety and Other jobs #Rohan #11-Dec-13
	otis.application.createAppMenu("appMenuEditDayStartTime", appMenuEditDayStartTime, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuEditDayEndTime", appMenuEditDayEndTime, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuEditStartTime", appMenuEditStartTime, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuEditEndTime", appMenuEditEndTime, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsNoUnit", appDetailsNoUnit, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuBulSearchSelect", appMenuBulSearchSelect, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuShutdownUnitsList", appMenuShutdownUnitsList, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddExpHelperNoUnits", appDetailsAddExpHelperNoUnits, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddTimeNoUnits", appDetailsAddTimeNoUnits, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsTasksNoUnits", appDetailsTasksNoUnits, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsJobsNoUnits", appDetailsJobsNoUnits, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddHelperNoUnits", appDetailsAddHelperNoUnits, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddMaterialNoUnits", appDetailsAddMaterialNoUnits, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddMaterialNoUnitsPlaceOrder", appDetailsAddMaterialNoUnitsPlaceOrder, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsUnit360TabTechnicalData", appDetailsUnit360TabTechnicalData, "sknAppMenuCommon", "sknAppMenuCommon");
    // end edit by Rohan Repair
    otis.application.createAppMenu("appDetailsSummary", appDetailsSummary, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsSummaryRepair", appDetailsSummaryRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsSummaryReports", appDetailsSummaryReports, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsSummarySR", appDetailsSummarySR, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsSummarySRRepair", appDetailsSummarySRRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsSummaryCloseSuspend", appDetailsSummaryCloseSuspend, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsSummarySafetyCloseSuspend", appDetailsSummarySafetyCloseSuspend, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsSummaryRepairCloseSuspend", appDetailsSummaryRepairCloseSuspend, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsSummarySRCloseSuspend", appDetailsSummarySRCloseSuspend, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsSummarySRRepairCloseSuspend", appDetailsSummarySRRepairCloseSuspend, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuServiceReport", appMenuServiceReport, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuServiceReportSignSubmit", appMenuServiceReportSignSubmit, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuScheduledJobs", appMenuScheduledJobs, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("NoAppMenu", NoAppMenuItem, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemDepatBuildingArraival", appMenuItemDepatBuildingArraival, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemDepatBuildingDepature", appMenuItemDepatBuildingDepature, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuDepatBuilding", appMenuItemDepatBuilding, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuDepatBuildingBundleOMMS", appMenuItemDepatBuildingBundleOMMS, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuDepatBuildingHelper", appMenuItemDepatBuildingHelper, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuHelperScheduledJobs", appMenuHelperScheduledJobs, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAddHelper", appMenuItemAddHelper, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAddTask", appMenuItemAddTask, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAddJob", appMenuItemAddJob, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuShutDownAddJob", appMenuItemShutDownAddJob, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuProposeTleadCreateJob", appMenuProposeTleadCreateJob, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAddMaterial", appMenuItemAddMaterial, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAddUnit", appMenuItemAddUnit, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAddExpenses", appMenuItemAddExpenses, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAddTime1", appMenuItemAddTime, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddHelper", appDetailsAddHelper, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddHelperHelper", appDetailsAddHelperHelper, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddHelperHelperRepair", appDetailsAddHelperHelperRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsHelperExistHelper", appDetailsHelperExistHelper, "sknAppMenuCommon", "sknAppMenuCommon"); //R9.0 TD#408
    otis.application.createAppMenu("appDetailsExistHelperRepairJobType", appDetailsExistHelperRepairJobType, "sknAppMenuCommon", "sknAppMenuCommon"); //R9.0 TD#408
    otis.application.createAppMenu("appDetailsAddExpenses", appDetailsAddExpenses, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddExpensesHelper", appDetailsAddExpensesHelper, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddExpensesHelperRepair", appDetailsAddExpensesHelperRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddTime", appDetailsAddTime, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsTasks", appDetailsTasks, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsTasksRepair", appDetailsTasksRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsJobs", appDetailsJobs, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemEnterJobEndTime", appMenuItemEnterJobEndTime, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemEnterHelperJobEndTime", appMenuItemEnterHelperJobEndTime, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemEnterJobEndTimeForSuspended", appMenuItemEnterJobEndTimeForSuspended, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsJobsOnlyDepart", appDetailsJobsOnlyDepart, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsJobsRepair", appDetailsJobsRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsJobsDepart", appDetailsJobsDepart, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsJobsRepairDepart", appDetailsJobsRepairDepart, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsTasksMaintenance", appDetailsTasksMaintenance, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsTasksMaintenanceRepair", appDetailsTasksMaintenanceRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddTasks", appDetailsAddTasks, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsDefault", appDetailsDefault, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsDefaultMore", appDetailsDefaultMore, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddTimeHelper", appDetailsAddTimeHelper, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddTimeHelperWithTimeEntry", appDetailsAddTimeHelperWithTimeEntry, "sknAppMenuCommon", "sknAppMenuCommon");//TD#317 
    otis.application.createAppMenu("appDetailsAddTimeHelperRepair", appDetailsAddTimeHelperRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddTimeHelperRepairWithTimeEntry", appDetailsAddTimeHelperRepairWithTimeEntry, "sknAppMenuCommon", "sknAppMenuCommon");// TD#317 
    otis.application.createAppMenu("appDetailsSearchMaterial", appDetailsSearchMaterial, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appPlaceOrderSearchMaterial", appPlaceOrderSearchMaterial, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddUnit", appDetailsAddUnit, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddUnitHelper", appDetailsAddUnitHelper, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddMaterial", appDetailsAddMaterial, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddMaterialHelper", appDetailsAddMaterialHelper, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddMaterialHelperPlaceOrder", appDetailsAddMaterialHelperPlaceOrder, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddMaterialHelperRepair", appDetailsAddMaterialHelperRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddMaterialHelperRepairPlaceOrder", appDetailsAddMaterialHelperRepairPlaceOrder, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsNoAddMaterialHelper", appDetailsNoAddMaterialHelper, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsNoAddMaterialHelperPlaceOrder", appDetailsNoAddMaterialHelperPlaceOrder, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsNoAddMaterialHelperRepair", appDetailsNoAddMaterialHelperRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsNoAddMaterialHelperRepairPlaceOrder", appDetailsNoAddMaterialHelperRepairPlaceOrder, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAddEnter", appMenuItemAddEnter, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemAddTasks", appMenuItemAddTasks, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuDefault", appMenuItemDefault, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("NoAppMenu", NoAppMenu, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuNoDefault", appMenuNoItemDefault, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuUnscheduledJobs", appMenuUnscheduledJobs, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAllJobSummaryList", appMenuAllJobSummaryList, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAllJobSummaryListServiceReport", appMenuAllJobSummaryListServiceReport, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuUnscheduledCallBackJobs", appMenuUnscheduledCallBackJobs, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuScheduledCallBackJobs", appMenuScheduledCallBackJobs, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemBuildingArraival", appMenuItemBuildingArraival, "sknAppMenuCommon", "sknAppMenuCommon");
     otis.application.createAppMenu("appMenuItemReturnToService", appMenuItemReturnToService, "sknAppMenuCommon", "sknAppMenuCommon");//iOS11.0 TD#2034
    otis.application.createAppMenu("appMenuItemBuildingDepature", appMenuItemBuildingDepature, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuEnter", appMenuItemEnter, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAccUnSchPlanTime", appMenuAccUnSchPlanTime, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemChangeAccRejTime", appMenuItemChangeAccRejTime, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuRejectReason", appMenuRejectReason, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuDepartReason", appMenuDepartReason, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAdditionalJobsRejectReason", appMenuAdditionalJobsRejectReason, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuScheduledRejectReason", appMenuScheduledRejectReason, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuEnterBuilding", appMenuItemEnterBuilding, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuEnterBuildingChangeSCArrivalTime", appMenuItemEnterBuildingChangeSCArrivalTime, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuaccRejUnscheduledJob", appMenuaccRejUnscheduledJob, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuTravelAccRej", appMenuItemTravelAccRej, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAdd", appMenuItemAdd, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAdd360", appMenuItemAdd360, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemSearch", appMenuItemAddSearch, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuChangePlanDepart", appMenuItemChangePlanDepart, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuHomeDepart", appMenuItemHomeDepart, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemHSDefault", appMenuItemHSDefault, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemCurJobInProgState", appMenuItemCurJobInProgState, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemCurJobBldgVisitState", appMenuItemCurJobBldgVisitState, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemCurJobCloseBldgVisitState", appMenuItemCurJobCloseBldgVisitState, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemCurJobCloseOutState", appMenuItemCurJobCloseOutState, "sknAppMenuCommon", "sknAppMenuCommon");
    //** Added by ABA(20/1/16) TD#474
	otis.application.createAppMenu("appMenuItemCurJobCloseBldgVisitStateCurrent", appMenuItemCurJobCloseBldgVisitStateCurrent, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuItemCurOMMSJobCloseOut", appMenuItemCurOMMSJobCloseOut, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuItemCurAddOMMSJobCloseOut", appMenuItemCurAddOMMSJobCloseOut, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuCollapse", appMenuItemCollapse, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuCall", appMenuItemCall, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuClear", appMenuItemClear, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuClearBuildingJobs", appMenuItemClearBuildingJobs, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuUnits", appMenuItemUnits, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuStartService", appMenuStartServiceCall, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuStopService", appMenuStopServiceCall, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuStopServiceReset", appMenuResetStopService, "sknAppMenuCommon", "sknAppMenuCommon");//TD#1998
    otis.application.createAppMenu("appMenuJHA", appMenuJHA, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuPlaceMaterialOrder", appMenuPlaceMaterialOrder, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAddTime", appMenuAddTime, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuEditTime", appMenuEditTime, "sknAppMenuCommon", "sknAppMenuCommon")
    otis.application.createAppMenu("appMenuItemEditTime", appMenuItemEditTime, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAddExpense", appMenuAddExpense, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAddExpenseForNonProductiveJobs", appMenuAddExpenseForNonProductiveJobs, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuEditExpense", appMenuEditExpense, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAccRejNotes", appMenuItemAccRejNotes, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuAtBuilding", appMenuItemAtBuilding, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuTravel", appMenuItemTravel, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuFilterJobs", appMenuItemFilterJobs, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuProposeTLead", appMenuProposeTLead, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuProposeTLeadQuestions", appMenuProposeTLeadQuestions, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuSelectView", appMenuSelectView, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuTargetDepartExceed", appMenuTargetDepartExceed, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("AppMenuSafConfirmTimePicker", AppMenuSafConfirmTimePicker, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuNoNetWorkScreen", appMenuNoNetWorkScreen, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuOptionsMaterial", appMenuOptionsMaterial, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuOptionsMaterialPlaceOrder", appMenuOptionsMaterialPlaceOrder, "sknAppMenuCommon", "sknAppMenuCommon");    
    otis.application.createAppMenu("appMenuOptionsSelectView", appMenuOptionsSelectView, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuReportsMOJobs", appMenuReportsMOJobs, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuReportsMOJobsPlaceOrder", appMenuReportsMOJobsPlaceOrder, "sknAppMenuCommon", "sknAppMenuCommon");    
    otis.application.createAppMenu("appMenuReportsMOMaterialOrders", appMenuReportsMOMaterialOrders, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuReportsMOMaterialOrdersPlaceOrder", appMenuReportsMOMaterialOrdersPlaceOrder, "sknAppMenuCommon", "sknAppMenuCommon");    
	otis.application.createAppMenu("appMenuSubmitTimeSheet", appMenuSubmitTimeSheet, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuTimeSheetExpenseDaySummary", appMenuTimeSheetExpenseDaySummary, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuTimeSheetExpenseDaySummaryForNonProductiveJobs", appMenuTimeSheetExpenseDaySummaryForNonProductiveJobs, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuTimeSheetAddDaySummary", appMenuTimeSheetAddDaySummary, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuTimeSheetTimeDaySummary", appMenuTimeSheetTimeDaySummary, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuEditTimeinTimeSheet", appMenuEditTimeinTimeSheet, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuEditExpensesinTimeSheet", appMenuEditExpensesinTimeSheet, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuItemReportsHSDefault", appMenuItemReportsHSDefault, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuItemReportsHSDefaultCreateJob", appMenuItemReportsHSDefaultCreateJob, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemReportsHSDefaultSearch", appMenuItemReportsHSDefaultSearch, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemReportsComJobsDefaultSearch", appMenuItemReportsComJobsDefaultSearch, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuItemReportsCompletedJobsHS", appMenuItemReportsCompletedJobsHS, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appServiceReportMail", appServiceReportMail, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appSelectViewTleads", appSelectViewTleads, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appReportsTleadsFilter", appReportsTleadsFilter, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appFilterReportsTleadsFilter", appFilterReportsTleadsFilter, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuStartWork", appMenuItemStartWork, "sknAppMenuCommon", "sknAppMenuCommon"); // added by Jignasa
	otis.application.createAppMenu("appMenuTimeSheetFilterOptions", appMenuTimeSheetFilterOptions, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuChangeUnit", appMenuItemChangeUnit, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuTimeSheetSTime", appMenuTimeSheetSTime, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuTimeSheetETime", appMenuTimeSheetETime, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemUnit360Tab", appMenuItemUnit360Tab, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItemEBUnit360Tab", appMenuItemEBUnit360Tab, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsDefaultMoreRepair", appDetailsDefaultMoreRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsAddUnitRepair", appDetailsAddUnitRepair, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appMenuItem746AForm", appMenuItem746AForm, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuItemUpdateHazard", appMenuItemUpdateHazard, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuUpdateHazardDetails", appMenuUpdateHazardDetails, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuUpdateNoHazardDetails", appMenuUpdateNoHazardDetails, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuAddJobUnplan", appMenuItemAddJobUnplan, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuTimeesheetViewCurrent", appMenuTimeesheetViewCurrent, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuTimeesheetViewPrevious", appMenuTimeesheetViewPrevious, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuItemUpdateDepartHazard", appMenuItemUpdateDepartHazard, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuCollapseUnPlaned", appMenuItemCollapseUnPlaned, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuItalyStartTraveTime", appMenuItalyStartTraveTime, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuItalyCurrentJobTime", appMenuItalyCurrentJobTime, "sknAppMenuCommon", "sknAppMenuCommon");
	//otis.application.createAppMenu("appMenuCaptureSignature", appMenuCaptureSignature, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuGeoCode", appMenuGeoCode, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuGeoCodeEdit", appMenuGeoCodeEdit, "sknAppMenuCommonOk", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuNotesGeoCode", appMenuNotesGeoCode, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuNotesGeoCodeEdit", appMenuNotesGeoCodeEdit, "sknAppMenuCommonOk", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuItemAddEditTimeED1", appMenuItemAddEditTimeED1, "sknAppMenuCommon", "sknAppMenuCommon");
	//otis.application.createAppMenu("appMenuItalyAddSafetyJobTime", appMenuItalyAddSafetyJobTime, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appDetailsEditTimeHelper", appDetailsEditTimeHelper, "sknAppMenuCommon", "sknAppMenuCommon");
    otis.application.createAppMenu("appDetailsEditTimeHelperRepair", appDetailsEditTimeHelperRepair, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appDetailsEditTimeNoUnits", appDetailsEditTimeNoUnits, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuItemBuildingDepatureCurrentJob", appMenuItemBuildingDepatureCurrentJob, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appDetailsFormInProgress", appDetailsFormInProgress, "sknAppMenuCommon", "sknAppMenuCommon");
	//** Added by ABA(18/1/16) Td#474
	otis.application.createAppMenu("appMenuCurrentBuildStartWork", appMenuItemCurrentBuildStartWork, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuTravelUnscheduledCurrent", appMenuItemTravelUnscheduledCurrent, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuTravelUnscheduled", appMenuItemTravelUnscheduled, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuUnscheduledBuldngVisit", appMenuItemUnscheduledBuldngVisit, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuUnscheduledBuildingUnitsCurrent", appMenuItemUnscheduledBuildingUnitsCurrent, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuUnscheduledBuildingUnitsAdditional", appMenuItemUnscheduledBuildingUnitsAdditional, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuETAUnscheduledVisit", appMenuItemETAUnscheduledVisit, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuUnscheduledJobPerform", appMenuItemUnscheduledJobPerform, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuUnscheduledNoJobPresent", appMenuItemUnscheduledNoJobPresent, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuAddHelperBundleOMMS", appMenuItemAddHelperBundleOMMS, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuAddHelperBundleOMMSForm", appMenuItemAddHelperBundleOMMSForm, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuDetailsAddTimeBundleOMMS", appDetailsAddTimeBundleOMMS, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuDetailsAddTimeBundleOMMSWithTimeEntry", appDetailsAddTimeBundleOMMSWithTimeEntry, "sknAppMenuCommon", "sknAppMenuCommon");// TD#317 
	otis.application.createAppMenu("appMenuAddTimeBundleOMMS", appMenuItemAddTimeBundleOMMS, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuBundleOMMSCloseOut", appMenuItemBundleOMMSCloseOut, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuScheduledOMMSTab", appMenuItemScheduledOMMSTab, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuTravelScheduledOMMS", appMenuItemTravelScheduledOMMS, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuUpdateHazardBundleOMMS", appMenuItemUpdateHazardBundleOMMS, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("frmUnscheduledAdditionalOMMS", appMenuItemUnscheduledAdditionalOMMS, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appMenuUnscheduledAdditionalOMMSNoJob", appMenuItemUnscheduledAdditionalOMMSNoJob, "sknAppMenuCommon", "sknAppMenuCommon");//TD#312
	
	otis.application.createAppMenu("appMenuNonProductiveAddHelper", appMenuNonProductiveAddHelper, "sknAppMenuCommon", "sknAppMenuCommon"); //R11.0 TD#99
	otis.application.createAppMenu("appNonProductiveAddExpensesHelper", appNonProductiveAddExpensesHelper, "sknAppMenuCommon", "sknAppMenuCommon"); //R11.0 TD#99
    otis.application.createAppMenu("appNonProductiveSummarySRCloseSuspend", appNonProductiveSummarySRCloseSuspend, "sknAppMenuCommon", "sknAppMenuCommon"); //R11.0 TD#99
	otis.application.createAppMenu("appNonProductiveEditTimeHelper", appNonProductiveEditTimeHelper, "sknAppMenuCommon", "sknAppMenuCommon"); //R11.0 TD#99
	otis.application.createAppMenu("appNonProductiveAddTimeHelper", appNonProductiveAddTimeHelper, "sknAppMenuCommon", "sknAppMenuCommon"); //R11.0 TD#99
	
	otis.application.createAppMenu("appMenuNonProductiveRemoveHelper", appMenuNonProductiveRemoveHelper, "sknAppMenuCommon", "sknAppMenuCommon"); //R11.1 TD#297
	otis.application.createAppMenu("appMenuRemoveHelperBundleOMMS", appMenuRemoveHelperBundleOMMS, "sknAppMenuCommon", "sknAppMenuCommon");
	otis.application.createAppMenu("appDetailsTasksRepairDepart", appDetailsTasksRepairDepart, "sknAppMenuCommon", "sknAppMenuCommon");//TD#791
	otis.application.createAppMenu("appDetailsDefaultMoreDepart", appDetailsDefaultMoreDepart, "sknAppMenuCommon", "sknAppMenuCommon");//TD#791
	otis.application.createAppMenu("appMenuUnscheduledBuldngVisitDepart", appMenuItemUnscheduledBuldngVisitDepart, "sknAppMenuCommon", "sknAppMenuCommon");//TD#791
	otis.application.createAppMenu("appMenuDepatBuildingBundleOMMSDepart", appMenuItemDepatBuildingBundleOMMSDepart, "sknAppMenuCommon", "sknAppMenuCommon");//TD#791
	otis.application.createAppMenu("appMenuDepatBuildingDepart", appMenuItemDepatBuildingDepart, "sknAppMenuCommon", "sknAppMenuCommon");//TD#791	
	//
}

/**
 * Function is to set App Menus to the respective forms/screens
 * @returns {} 
 */
function setAppMenu() {
    var currentForm = selectedForm;
     kony.print("setAppMenu() - Current form: " + currentForm);
	try
	{
		
	    switch (currentForm) {
	    case "frmDashboard":
	        {
	        //signOnGlobal.isServicesStarted=true;
	            if (signOnGlobal.isServicesStarted) {
	            	var showReset = kony.store.getItem("showSyncResetMenu");
	            	showReset = retEmptyIfNotValid(showReset);
	            	if(showReset == "true" || showReset == true)//TD#1998 - Added descision for showing Reset button in App menu
	            	{
	            		otis.application.setCurrentAppMenu("appMenuStopServiceReset");
	            		globalException("Menu","setAppMenu","Sync reset is enabled"); //TD#2096
	            	}
	                else
	                {
	                	otis.application.setCurrentAppMenu("appMenuStopService");
	                }
	                break;
	            } else {
	                otis.application.setCurrentAppMenu("appMenuStartService");
	                break;
	            }
	        }
	    case "frmBuildingUnscheduleVisit":
	    	otis.application.setCurrentAppMenu("appMenuUnscheduledBuldngVisit");
	        break;
	    case "frmPlanJob":
	        otis.application.setCurrentAppMenu("appMenuDefault");
	        break;
	    case "DepatBuildingTimeArrivalTime":
	        kony.print("frmPlanJob case -->");
	        otis.application.setCurrentAppMenu("appMenuItemDepatBuildingArraival");
	        break;
	    case "frmDepatBuilding":
	        otis.application.setCurrentAppMenu("appMenuDepatBuilding");
	        break;
	    case "frmDepatBuildingBundleOMMS":
	        otis.application.setCurrentAppMenu("appMenuDepatBuildingBundleOMMS");
	        break;
	    case "frmDepatBuildingHelper":
	        otis.application.setCurrentAppMenu("appMenuDepatBuildingHelper");
	        break;
	    case "DepatBuildingTimeDepatureTime":
	        otis.application.setCurrentAppMenu("appMenuItemDepatBuildingDepature");
	        break;
	    case "frmCollapse":
	        otis.application.setCurrentAppMenu("appMenuCollapse");
	        break;
	    case "frmDetailsAddHelper":
	        otis.application.setCurrentAppMenu("appDetailsAddHelper");
	        break;
	    case "frmDetailsAddHelperHelper":
	        otis.application.setCurrentAppMenu("appDetailsAddHelperHelper");
	        break;
	    case "frmDetailsAddHelperHelperRepair":
	        otis.application.setCurrentAppMenu("appDetailsAddHelperHelperRepair");
	        break;
	    case "frmDetailsHelperExistHelper":
	        otis.application.setCurrentAppMenu("appDetailsHelperExistHelper"); //R9.0 TD#408
	        break;
	    case "frmDetailsExistHelperRepairJobType":
	        otis.application.setCurrentAppMenu("appDetailsExistHelperRepairJobType"); //R9.0 TD#408
	        break;
	    case "frmDetailsSummary":
	        otis.application.setCurrentAppMenu("appDetailsSummary");
	        break;
	    case "frmDetailsSummaryRepair":
	        otis.application.setCurrentAppMenu("appDetailsSummaryRepair");
	        break;
	    case "frmDetailsSummaryReports":
	        otis.application.setCurrentAppMenu("appDetailsSummaryReports");
	        break;
	    case "frmDetailsSummarySR":
	        otis.application.setCurrentAppMenu("appDetailsSummarySR");
	        break;
	    case "frmDetailsSummarySRRepair":
	        otis.application.setCurrentAppMenu("appDetailsSummarySRRepair");
	        break;
	    case "frmDetailsSummaryCloseSuspend":
	        otis.application.setCurrentAppMenu("appDetailsSummaryCloseSuspend");
	        break;
	    case "frmDetailsSummarySafetyCloseSuspend":
	        otis.application.setCurrentAppMenu("appDetailsSummarySafetyCloseSuspend");
	        break;    
	    case "frmDetailsSummaryRepairCloseSuspend":
	        otis.application.setCurrentAppMenu("appDetailsSummaryRepairCloseSuspend");
	        break;
	    case "frmDetailsSummarySRCloseSuspend":
	        otis.application.setCurrentAppMenu("appDetailsSummarySRCloseSuspend");
	        break;
	    case "frmDetailsSummarySRRepairCloseSuspend":
	        otis.application.setCurrentAppMenu("appDetailsSummarySRRepairCloseSuspend");
	        break;
	    case "frmDetailsSummaryHelper":
	        otis.application.setCurrentAppMenu("appDetailsSummaryHelper");
	        break;
	    case "frmDetailsSummaryHelperStopWork":
	        otis.application.setCurrentAppMenu("appDetailsSummaryHelperStopWork");
	        break;    
		case "frmAppMenuEditDayStartTime":
	        otis.application.setCurrentAppMenu("appMenuEditDayStartTime");
	        break; 
	    case "frmAppMenuEditDayEndTime":
	        otis.application.setCurrentAppMenu("appMenuEditDayEndTime");
	        break; 
	    case "frmAppMenuEditStartTime":
	        otis.application.setCurrentAppMenu("appMenuEditStartTime");
	        break; 
	    case "frmAppMenuEditEndTime":
	        otis.application.setCurrentAppMenu("appMenuEditEndTime");
	        break;
	    // Added app menu for Safety jobs and other jobs #Rohan #11-Dec-13
	    case "frmDetailsNoUnits":
	        otis.application.setCurrentAppMenu("appDetailsNoUnit");
	        break;
	    case "frmDetailsAddExpHelperNoUnits":
	        otis.application.setCurrentAppMenu("appDetailsAddExpHelperNoUnits");
	        break;
	    case "frmDetailsAddTimeNoUnits":
	        otis.application.setCurrentAppMenu("appDetailsAddTimeNoUnits");
	        break;
	    case "frmDetailsTasksNoUnits":
	        otis.application.setCurrentAppMenu("appDetailsTasksNoUnits");
	        break;
	    case "frmDetailsJobsNoUnits":
	        otis.application.setCurrentAppMenu("appDetailsJobsNoUnits");
	        break;
	    case "frmDetailsAddHelperNoUnits":
	        otis.application.setCurrentAppMenu("appDetailsAddHelperNoUnits");
	        break;
	    case "frmDetailsAddMaterialNoUnits":
	        otis.application.setCurrentAppMenu("appDetailsAddMaterialNoUnits");
	        break;
	   case "frmDetailsAddMaterialNoUnitsPlaceOrder":
	        otis.application.setCurrentAppMenu("appDetailsAddMaterialNoUnitsPlaceOrder");
	        break;
	   case "frmUnit360TabTechnicalData":
	        otis.application.setCurrentAppMenu("appDetailsUnit360TabTechnicalData");
	        break;     
	    // End edit by Rohan
	    case "frmServiceReport":
	        otis.application.setCurrentAppMenu("appMenuServiceReport");
	        break;
	    case "frmServiceReportSignSubmit":
	        otis.application.setCurrentAppMenu("appMenuServiceReportSignSubmit");
	        break;
	    case "frmDetailsSearchMaterial":
	        otis.application.setCurrentAppMenu("appDetailsSearchMaterial");
	        break;
	    case "frmPlaceOrderSearchMaterial":
	        otis.application.setCurrentAppMenu("appPlaceOrderSearchMaterial");
	        break;
	    case "frmDetailsAddMaterial":
	        otis.application.setCurrentAppMenu("appDetailsAddMaterial");
	        break;
	    case "frmDetailsAddMaterialHelper":
	        otis.application.setCurrentAppMenu("appDetailsAddMaterialHelper");
	        break;
	    case "frmDetailsAddMaterialHelperPlaceOrder":
	        otis.application.setCurrentAppMenu("appDetailsAddMaterialHelperPlaceOrder");
	        break;
	    case "frmDetailsAddMaterialHelperRepair":
	        otis.application.setCurrentAppMenu("appDetailsAddMaterialHelperRepair");
	        break;
	    case "frmDetailsAddMaterialHelperRepairPlaceOrder":
	        otis.application.setCurrentAppMenu("appDetailsAddMaterialHelperRepairPlaceOrder");
	        break;
	    case "frmDetailsNoAddMaterialHelper":
	        otis.application.setCurrentAppMenu("appDetailsNoAddMaterialHelper");
	        break;
	    case "frmDetailsNoAddMaterialHelperPlaceOrder":
	        otis.application.setCurrentAppMenu("appDetailsNoAddMaterialHelperPlaceOrder");
	        break;
	    case "frmDetailsNoAddMaterialHelperRepair":
	        otis.application.setCurrentAppMenu("appDetailsNoAddMaterialHelperRepair");
	        break;
	    case "frmDetailsNoAddMaterialHelperRepairPlaceOrder":
	        otis.application.setCurrentAppMenu("appDetailsNoAddMaterialHelperRepairPlaceOrder");
	        break;
	    case "frmDetailsAddUnit":
	        otis.application.setCurrentAppMenu("appDetailsAddUnit");
	        break;
	    case "frmDetailsAddUnitRepair":
	        otis.application.setCurrentAppMenu("appDetailsAddUnitRepair");
	        break;
	    case "frmDetailsAddUnitHelper":
	        otis.application.setCurrentAppMenu("appDetailsAddUnitHelper");
	        break;
	    case "frmDetailsAddTime":
	        otis.application.setCurrentAppMenu("appDetailsAddTime");
	        break;
	    case "frmDetailsTasks":
	        otis.application.setCurrentAppMenu("appDetailsTasks");
	        break;
	    case "frmDetailsTasksRepair":
	        otis.application.setCurrentAppMenu("appDetailsTasksRepair");
	        break;
	    case "frmDetailsJobs":
	        otis.application.setCurrentAppMenu("appDetailsJobs");
	        break;
	    case "frmDetailsJobsOnlyDepart":
	        otis.application.setCurrentAppMenu("appDetailsJobsOnlyDepart");
	        break;    
	    case "frmDetailsJobsRepair":
	        otis.application.setCurrentAppMenu("appDetailsJobsRepair");
	        break;
	    case "frmDetailsJobsDepart":
	        otis.application.setCurrentAppMenu("appDetailsJobsDepart");
	        break;
	    case "frmDetailsJobsRepairDepart":
	        otis.application.setCurrentAppMenu("appDetailsJobsRepairDepart");
	        break;    
	    case "frmCreateJob":
	        otis.application.setCurrentAppMenu("appMenuAddJob");
	        break;
	    case "frmShutDownCreateJob":
	    	{
	            if (CreateJob.shutDownUnitCreateJobFlag) {
	            	kony.print("shutDownUnitCreateJobFlag is set");
	                otis.application.setCurrentAppMenu("appMenuShutDownAddJob");
	                break;
	            } else if(CreateJob.tleadsSpotSaleCreateJobFlag){
	            	kony.print("tleadsSpotSaleCreateJobFlag is set");
	                otis.application.setCurrentAppMenu("appMenuProposeTleadCreateJob");
	                break;
	            }
	        }
	    case "frmDetailsTasksMaintenance":
	        otis.application.setCurrentAppMenu("appDetailsTasksMaintenance");
	        break;
	    case "frmDetailsTasksMaintenanceRepair":
	        otis.application.setCurrentAppMenu("appDetailsTasksMaintenanceRepair");
	        break;
	    case "frmDetailsAddTasks":
	        otis.application.setCurrentAppMenu("appDetailsAddTasks");
	        break;
	    case "frmDetailsDefault":
	        otis.application.setCurrentAppMenu("appDetailsDefault");
	        break;
	    case "frmDetailsDefaultMore":
	        otis.application.setCurrentAppMenu("appDetailsDefaultMore");
	        break;
	    case "frmDetailsDefaultMoreRepair":
	        otis.application.setCurrentAppMenu("appDetailsDefaultMoreRepair");
	        break;
	    case "frmDetailsAddTimeHelper":
	        otis.application.setCurrentAppMenu("appDetailsAddTimeHelper");
	        break;
	    // TD#317    
	    case "frmDetailsAddTimeHelperWithTimeEntry":
	        otis.application.setCurrentAppMenu("appDetailsAddTimeHelperWithTimeEntry");
	        break;    
	    case "frmDetailsAddTimeHelperRepair":
	        otis.application.setCurrentAppMenu("appDetailsAddTimeHelperRepair");
	        break;
	    // TD#317     
	    case "frmDetailsAddTimeHelperRepairWithTimeEntry":
	        otis.application.setCurrentAppMenu("appDetailsAddTimeHelperRepairWithTimeEntry");
	        break;    
	    case "frmDetailsAddExpenses":
	        otis.application.setCurrentAppMenu("appDetailsAddExpenses");
	        break;
	    case "frmDetailsAddExpensesHelper":
	        otis.application.setCurrentAppMenu("appDetailsAddExpensesHelper");
	        break;
	    case "frmDetailsAddExpensesHelperRepair":
	        otis.application.setCurrentAppMenu("appDetailsAddExpensesHelperRepair");
	        break;
	    case "frmCall":
	        otis.application.setCurrentAppMenu("appMenuCall");
	        break;
	    case "UnscheduledJobs":
	        otis.application.setCurrentAppMenu("appMenuUnscheduledJobs");
	        break;
	    case "enterJobEndTime":
	        otis.application.setCurrentAppMenu("appMenuItemEnterJobEndTime");
	        break; 
	    case "enterJobEndTimeHelper":
	        otis.application.setCurrentAppMenu("appMenuItemEnterHelperJobEndTime");
	        break;     
	    case "enterJobEndTimeForSuspended":
	        otis.application.setCurrentAppMenu("appMenuItemEnterJobEndTimeForSuspended");
	        break;    
	    case "UnscheduledCallBackJobs":
	        otis.application.setCurrentAppMenu("appMenuUnscheduledCallBackJobs");
	        break;
	    case "ScheduledCallBackJobs":
	        otis.application.setCurrentAppMenu("appMenuScheduledCallBackJobs");
	        break;
	    case "ScheduledJobs":
	        otis.application.setCurrentAppMenu("appMenuScheduledJobs");
	        break;
	    case "HelperScheduledJobs":
	        otis.application.setCurrentAppMenu("appMenuHelperScheduledJobs");
	        break;
	    case "enterBuildingTimeArrivalTime":
	        kony.print("frmPlanJob case -->");
	        otis.application.setCurrentAppMenu("appMenuItemBuildingArraival");
	        break;
	    case "editTimeForReturnToService":
	    kony.print("frmReturnToService case -->");
	    otis.application.setCurrentAppMenu("appMenuItemReturnToService");
	    break;//iOS11.0 TD#2034
	    case "frmEnterBuilding":
	        otis.application.setCurrentAppMenu("appMenuEnterBuilding");
	        break;
	    case "frmEnterBuildingChangeSCArrivalTime":
	        otis.application.setCurrentAppMenu("appMenuEnterBuildingChangeSCArrivalTime");
	        break;	        
	    case "enterBuildingTimeDepatureTime":
	        kony.print("frmPlanJob case -->");
	        otis.application.setCurrentAppMenu("appMenuItemBuildingDepature");
	        break;
	    case "frmNotes":
	        otis.application.setCurrentAppMenu("appMenuAddEnter");
	        break;
	    case "TaskDetails":
	        otis.application.setCurrentAppMenu("appMenuItemAddTasks");
	        break;
	    case "frmHistory":
	        otis.application.setCurrentAppMenu("appMenuEnter");
	        break;
	    case "frmContacts":
	        otis.application.setCurrentAppMenu("appMenuEnter");
	        break;
	    case "frmTLeads":
	        otis.application.setCurrentAppMenu("appMenuEnter");
	        break;
	    case "frmBuildingHazards":
	    	otis.application.setCurrentAppMenu("appMenuItemUpdateHazard");
	    	break;
	    case "onAccUnSchPlannedTime":
	        kony.print("frmPlanJob case -->");
	        otis.application.setCurrentAppMenu("appMenuAccUnSchPlanTime");
	        break;
	    case "onAccSchPlannedTime":
	        kony.print("frmPlanJob case -->");
	        otis.application.setCurrentAppMenu("appMenuItemChangeAccRejTime");
	        break;
	    case "frmAddHelper":
	        otis.application.setCurrentAppMenu("appMenuAddHelper");
	        break;
	    case "frmAddTask":
	        otis.application.setCurrentAppMenu("appMenuAddTask");
	        break;
	    case "frmAddMaterial":
	        otis.application.setCurrentAppMenu("appMenuAddMaterial");
	        break;
	    case "frmAddUnit":
	        otis.application.setCurrentAppMenu("appMenuAddUnit");
	        break;
	    case "frmChangeUnit":
	        otis.application.setCurrentAppMenu("appMenuChangeUnit");
	        break;
	    case "frmAddExpenses":
	        otis.application.setCurrentAppMenu("appMenuAddExpenses");
	        break;
	    case "frmTravelPlan":
	        kony.print("frmPlanJob case -->");
	        otis.application.setCurrentAppMenu("appMenuTravelAccRej");
	        break;
	    case "frmTravel":
	        kony.print("frmPlanJob case -->");
	        otis.application.setCurrentAppMenu("appMenuItemHSDefault");
	        break;
	   //** Added by ABA(18/1/16) TD#474
	   case "frmCurrentBuildStartWork":
	    	otis.application.setCurrentAppMenu("appMenuCurrentBuildStartWork");
	    	break;	   
	    case "frmTravelUnschedule":
	    	otis.application.setCurrentAppMenu("appMenuTravelUnscheduled");
	    	break;
	    //** Added by ABA(21/1/16) TD#474
		 case "frmTravelUnscheduleCurrent":
	    	otis.application.setCurrentAppMenu("appMenuTravelUnscheduledCurrent");
	    	break;
	    case "frmUnscheduledJobsCurrent":
	    	otis.application.setCurrentAppMenu("appMenuUnscheduledJobPerform");
	    	break;
	    case "frmUnscheduledCurrentNoJob":
	    	otis.application.setCurrentAppMenu("appMenuUnscheduledNoJobPresent");
	    	break;
	    case "frmUnscheduledBuildingUnitsCur":
	    	otis.application.setCurrentAppMenu("appMenuUnscheduledBuildingUnitsCurrent");
	    	break;
	    case "frmUnscheduledBuildingUnitsAdd":
	    	otis.application.setCurrentAppMenu("appMenuUnscheduledBuildingUnitsAdditional");
	    	break;
		case "frmETAUnscheduledVisit":
	    	otis.application.setCurrentAppMenu("appMenuETAUnscheduledVisit");
	    	break;
	    case "frmDetailsAddHelperBundleOMMS":
	        otis.application.setCurrentAppMenu("appMenuAddHelperBundleOMMS");
	        break;
	    //R11.1 TD#297 - Option to remove helper for OMMS job type
	    case "frmDetailsRemoveHelperBundleOMMS":
	        otis.application.setCurrentAppMenu("appMenuRemoveHelperBundleOMMS");
	        break;
		case "frmAddHelperBundleOMMS":
	        otis.application.setCurrentAppMenu("appMenuAddHelperBundleOMMSForm");
	        break;
		case "frmAddTimeBundleOMMS":
	        otis.application.setCurrentAppMenu("appMenuDetailsAddTimeBundleOMMS");
	        break;
	    // TD#317     
	    case "frmAddTimeBundleOMMSWithTimeEntry":
	        otis.application.setCurrentAppMenu("appMenuDetailsAddTimeBundleOMMSWithTimeEntry");
	        break;    
		case "frmAddTimeFormBundleOMMS":
	        otis.application.setCurrentAppMenu("appMenuAddTimeBundleOMMS");
	        break;
		case "frmBundleOMMSCloseOut":
	        otis.application.setCurrentAppMenu("appMenuBundleOMMSCloseOut");
	        break;
	    case "frmCurrentJob":
	        kony.print("currentJob case -->");
	        otis.application.setCurrentAppMenu("appMenuItemHSDefault");
	        break;
		case "frmUpdateOMMSHazard":
	        otis.application.setCurrentAppMenu("appMenuUpdateHazardBundleOMMS");
	        break;
		case "frmScheduledOMMSTab":
	        otis.application.setCurrentAppMenu("appMenuScheduledOMMSTab");
	        break;
		case "frmTravelScheduledOMMS":
	        otis.application.setCurrentAppMenu("appMenuTravelScheduledOMMS");
	        break;
	    case "frmCurrentJob":
	        kony.print("currentJob case -->");
	        otis.application.setCurrentAppMenu("appMenuItemHSDefault");
	        break;
	    case "frmCurrentJobInProgState":
	        kony.print("currentJob InProgress case -->");
	        otis.application.setCurrentAppMenu("appMenuItemCurJobInProgState");
	        break;
	    case "frmAllJobSummaryList":
	        otis.application.setCurrentAppMenu("appMenuAllJobSummaryList");
	        break; 
	    case "frmAllJobSummaryListServiceReport":
	        otis.application.setCurrentAppMenu("appMenuAllJobSummaryListServiceReport");
	        break;        
	    case "frmCurrentJobBldgVisitState":
	        kony.print("currentJob BuildingVisit case -->");
	        otis.application.setCurrentAppMenu("appMenuItemCurJobBldgVisitState");
	        break;
	    case "frmCurrentJobCloseBldgVisitState":
	        kony.print("currentJob BuildingVisit case -->");
	        otis.application.setCurrentAppMenu("appMenuItemCurJobCloseBldgVisitState");
	        break;
	       //** Added by ABA(20/1/16) TD#474 OMMS Closeout app menu on current screen
 		case "frmCurrentOMMSJobCloseOut":
	        kony.print("currentJob BuildingVisit case -->");
	        otis.application.setCurrentAppMenu("appMenuItemCurOMMSJobCloseOut");
	        break;
	    case "frmCurrentAddOMMSJobCloseOut":
	        kony.print("currentJob BuildingVisit case -->");
	        otis.application.setCurrentAppMenu("appMenuItemCurAddOMMSJobCloseOut");
	        break;
	    case "frmCurrentJobCloseBldgVisitStateCurrent":
	        kony.print("currentJob BuildingVisit case -->");
	        otis.application.setCurrentAppMenu("appMenuItemCurJobCloseBldgVisitStateCurrent");
	        break;
	        //** End
	    case "frmCurrentJobCloseOutState":
	        kony.print("currentJob CloseOut case -->");
	        otis.application.setCurrentAppMenu("appMenuItemCurJobCloseOutState");
	        break;
	    case "RejectReason":
	        kony.print("frmPlanJob case -->");
	        otis.application.setCurrentAppMenu("appMenuRejectReason");
	        break;
	    case "frmDepartReason":
	        otis.application.setCurrentAppMenu("appMenuDepartReason");
	        break;
	    case "AdditionalJobsRejectReason":
	        kony.print("frmPlanJob case -->");
	        otis.application.setCurrentAppMenu("appMenuAdditionalJobsRejectReason");
	        break;
	    case "ScheduledRejectReason":
	        kony.print("frmPlanJob case -->");
	        otis.application.setCurrentAppMenu("appMenuScheduledRejectReason");
	        break;
	    case "accRejUnscheduledJob":
	        kony.print("frmPlanJob case -->");
	        otis.application.setCurrentAppMenu("appMenuaccRejUnscheduledJob");
	        break;
	    case "frmClear":
	        kony.print("frmClear case -->");
	        otis.application.setCurrentAppMenu("appMenuClear");
	        break;
	    case "frmClearBuildingJobs":
	        kony.print("frmClear case -->");
	        otis.application.setCurrentAppMenu("appMenuClearBuildingJobs");
	        break;
	    case "frmDetailsPan":
	        otis.application.setCurrentAppMenu("appMenuUnits");
	        break;
	    case "frmJHA":
	        otis.application.setCurrentAppMenu("appMenuJHA");
	        break;
	    case "frmAddTime":
	        otis.application.setCurrentAppMenu("appMenuAddTime");
	        break;
	    case "frmEditTime":
	        otis.application.setCurrentAppMenu("appMenuEditTime");
	        break;
	    case "EditTime":
	        otis.application.setCurrentAppMenu("appMenuItemEditTime");
	        break;
	    case "frmAddExpense":
	        otis.application.setCurrentAppMenu("appMenuAddExpense");
	        break;
	    case "frmAddExpenseForNonProductiveJobs":
	        otis.application.setCurrentAppMenu("appMenuAddExpenseForNonProductiveJobs");
	        break;    
	    case "frmEditExpense":
	        otis.application.setCurrentAppMenu("appMenuEditExpense");
	        break;
	    case "frmdefaultnoapp":
	        otis.application.setCurrentAppMenu("appMenuNoDefault");
	        break;
	    case "frmAddNote":
	        otis.application.setCurrentAppMenu("appMenuAccRejNotes");
	        break;
	    case "frmAtBuilding":
	        otis.application.setCurrentAppMenu("appMenuAtBuilding");
	        break;
	    case "frmProposeTLead":
	        otis.application.setCurrentAppMenu("appMenuProposeTLead");
	        break;
	    case "frmProposeTLeadQuestions":
	        otis.application.setCurrentAppMenu("appMenuProposeTLeadQuestions");
	        break;
	    case "frmTravelTo":
	        otis.application.setCurrentAppMenu("appMenuTravel");
	        break;
	    case "frmSortFilter":
	        otis.application.setCurrentAppMenu("appMenuFilterJobs");
	        break;
	    case "frmSelectView":
	        otis.application.setCurrentAppMenu("appMenuSelectView");
	        break;
	    case "frmStartWork":
			otis.application.setCurrentAppMenu("appMenuStartWork");	
			break; //added by Jignasa
	    case "frmSafetyConfirmed":
	        otis.application.setCurrentAppMenu("appMenuTargetDepartExceed"); 
	        break;
	    case "frmSafConfirmTimePicker":
	        otis.application.setCurrentAppMenu("AppMenuSafConfirmTimePicker"); 
	        break;
	    case "frmNoNetworkScreen":
	        otis.application.setCurrentAppMenu("appMenuNoNetWorkScreen"); 
	        break;       
	        //app menu for tleads buildings list by Aishwarya
	    case "frmReportsTLeadsBuildings":
	        otis.application.setCurrentAppMenu("appMenuItemReportsHSDefault");
	        break;      
	    case "frmReportsTLeadsBuildingsSearch":
	        otis.application.setCurrentAppMenu("appMenuItemReportsHSDefaultSearch");
	        break;   
	    case "frmReportsComJobsBuildingsSearch":
	        otis.application.setCurrentAppMenu("appMenuItemReportsComJobsDefaultSearch");
	        break;    
	        //app menu for tleads list by Aishwarya
	    case "frmReportsTLeadsList":
	        otis.application.setCurrentAppMenu("appMenuItemReportsHSDefault");
	        break;
	      //app menu for tleads details by Aishwarya
	    case "frmReportsTLeadsDetails":
	        otis.application.setCurrentAppMenu("appMenuItemReportsHSDefault");
	        break;
	    case "frmPlaceMaterialOrder":
	        otis.application.setCurrentAppMenu("appMenuPlaceMaterialOrder"); 
	        break;       
	       //app menu for reports material orders buildings list by Aishwarya  
	    case "frmReportsMaterialBuildingsList":
	        otis.application.setCurrentAppMenu("appMenuOptionsMaterial");
	        break;
	    case "frmReportsMaterialBuildingsListPlaceOrder":
	        otis.application.setCurrentAppMenu("appMenuOptionsMaterialPlaceOrder");
	        break;    
	        //app menu for reports material orders select view by Aishwarya  
	    case "frmReportsSelectViewMaterial":
	        otis.application.setCurrentAppMenu("appMenuOptionsSelectView");
	        break; 
	        //app menu for reports material orders Jobs List screen by Aishwarya
	    case "frmReportsMaterialsJobsList":
	        otis.application.setCurrentAppMenu("appMenuReportsMOJobs");
	        break; 
	    case "frmReportsMaterialsJobsListPlaceOrder":
	        otis.application.setCurrentAppMenu("appMenuReportsMOJobsPlaceOrder");
	        break;     
	     	//app menu for material orders List screen by Aishwarya
	    case "frmReportsMaterialsOrders":
	        otis.application.setCurrentAppMenu("appMenuReportsMOMaterialOrders");
	        break; 
	   case "frmReportsMaterialsOrdersPlaceOrder":
	        otis.application.setCurrentAppMenu("appMenuReportsMOMaterialOrdersPlaceOrder");
	        break; 
	     	//app menu for material orders details screen by Aishwarya
	    case "frmReportsMaterialsOrdersDetails":
	        otis.application.setCurrentAppMenu("appMenuItemReportsHSDefault");
	        break; 
	    case "frmTimeSheetFilter":
	    	otis.application.setCurrentAppMenu("appMenuTimeSheetFilterOptions");
	    	break;
	         //app menu for submit the timesheet
	    case "frmTimeSheetDaily":
	    	otis.application.setCurrentAppMenu("appMenuSubmitTimeSheet");
	    	break;
	    case "frmTimeSheetExpenseDaySummary":
	    	otis.application.setCurrentAppMenu("appMenuTimeSheetExpenseDaySummary");
	    	break;
	    case "frmTimeSheetExpenseDaySummaryForNonProductiveJobs":
	    	otis.application.setCurrentAppMenu("appMenuTimeSheetExpenseDaySummaryForNonProductiveJobs");
	    	break;	
	    case "frmTimeSheetAddDaySummary":
	    	otis.application.setCurrentAppMenu("appMenuTimeSheetAddDaySummary");
	    	break;
	    case "frmTimeSheetTimeDaySummary":
	    	otis.application.setCurrentAppMenu("appMenuTimeSheetTimeDaySummary");
	    	break;
	    //app menu for edit time in timeSheet
	    case "frmEditTimeinTimeSheet":
	    	otis.application.setCurrentAppMenu("appMenuEditTimeinTimeSheet");
	    	break;
	     //default appmenu
	    case "frmDefaultMenu":
	    	otis.application.setCurrentAppMenu("appDetailsNoUnit");
	        break;
	        //app menu for buildings list in reports - completed jobs
	    case "frmReportsBuildings":
	    	otis.application.setCurrentAppMenu("appMenuItemReportsHSDefault");
	        break;
	     //app menu for jobs list for selected building in reports - completed jobs
	    case "frmReportsCompletedJobs":
	    	otis.application.setCurrentAppMenu("appMenuItemReportsHSDefault");
	        break;
	    case "frmReportsCompletedJobsCreateJob":
	    	otis.application.setCurrentAppMenu("appMenuItemReportsHSDefaultCreateJob");
	        break;
	        //app menu for job details for selected job in reports - completed jobs
	    case "frmReportsCompletedJobDetails":
	    	otis.application.setCurrentAppMenu("appMenuItemReportsCompletedJobsHS");
	        break;
	    case "frmBuildingSearchSelect":
	        otis.application.setCurrentAppMenu("appMenuBulSearchSelect");
	        break;
	    case "frmShutdownUnitsList":
	        otis.application.setCurrentAppMenu("appMenuShutdownUnitsList");
	        break;    
	    case "frmEditExpensesTimeSheet":
	    	otis.application.setCurrentAppMenu("appMenuEditExpensesinTimeSheet");
	    	break;
	    case "frmBuildingContacts":
	    	otis.application.setCurrentAppMenu("appServiceReportMail");
	        break;
	    case "frmReportsSelectViewTleads":
	    	otis.application.setCurrentAppMenu("appSelectViewTleads");
	        break;
	    case "frmReportsTLeadsFilter":
	    	otis.application.setCurrentAppMenu("appReportsTleadsFilter");
	        break;
	    case "filterReportsTLeadsBuildings":
	    	otis.application.setCurrentAppMenu("appFilterReportsTleadsFilter");
	        break;          
	    case "frmUnit360Tab":
	        otis.application.setCurrentAppMenu("appMenuItemUnit360Tab");
	        break; 
	    case "frmUnit360EBTab":
	        otis.application.setCurrentAppMenu("appMenuItemEBUnit360Tab");
	        break; 
	    case "frmAppMAcceptStartTime":
	        otis.application.setCurrentAppMenu("appMenuTimeSheetSTime");
	        break; 
	    case "frmAppMenuItalyStartTraveTime":
	        otis.application.setCurrentAppMenu("appMenuItalyStartTraveTime");
	        break;       
	    case "frmAppMAcceptEndTime":
	    	otis.application.setCurrentAppMenu("appMenuTimeSheetETime");
	        break;
	    case "frmRepairRequest":
	        otis.application.setCurrentAppMenu("appMenuItem746AForm");
	        break;
	    case "frmUpdateBuildingHazards":
	    	otis.application.setCurrentAppMenu("appMenuUpdateHazardDetails");
	    	break;
	    case "frmUpdateBuildingNoHazards":
	    	otis.application.setCurrentAppMenu("appMenuUpdateNoHazardDetails");
	    	break;	
		case "frmCreateJobUnplan":
	        otis.application.setCurrentAppMenu("appMenuAddJobUnplan");
	        break;
		case "frmTimesheetViewCurrent":
	    	otis.application.setCurrentAppMenu("appMenuTimeesheetViewCurrent");
	    	break;
	    case "frmTimesheetViewPrevious":
	    	otis.application.setCurrentAppMenu("appMenuTimeesheetViewPrevious");
	    	break;
	    case "frmUpdateDapartHazards":
	    	otis.application.setCurrentAppMenu("appMenuItemUpdateDepartHazard");
	    	break;
	    case "frmCollapseUnPlaned":
	        otis.application.setCurrentAppMenu("appMenuCollapseUnPlaned");
	        break;
	    case "frmAppMenuItalyCurrentJobTime":
	    	otis.application.setCurrentAppMenu("appMenuItalyCurrentJobTime");
	    	break;	
	    /*case "frmCaptureSignature":
	    	otis.application.setCurrentAppMenu("appMenuCaptureSignature");
	    	break;*/	
	    case "frmGeoCodeTab":
	    	
	    	if(!(updateLocation.locationUpdated)&&(updateLocation.enterBuilding)){
	    		otis.application.setCurrentAppMenu("appMenuGeoCodeEdit");
	    	}/*else if(updateLocation.building360View || ((!updateLocation.enterBuilding)&& (updateLocation.locationUpdated))){
	    		otis.application.setCurrentAppMenu("appMenuGeoCode");
	    	}*/else{
	    		otis.application.setCurrentAppMenu("appMenuGeoCode");
	    	}
	    	break; 
	    case "frmNotesGeoCodeTab":
	    	
	    	if(!(updateLocation.locationUpdated)&&(updateLocation.enterBuilding)){
	    		otis.application.setCurrentAppMenu("appMenuNotesGeoCodeEdit");
	    	}/*else if(updateLocation.building360View || ((!updateLocation.enterBuilding)&& (updateLocation.locationUpdated))){
	    		otis.application.setCurrentAppMenu("appMenuGeoCode");
	    	}*/else{
	    		otis.application.setCurrentAppMenu("appMenuNotesGeoCode");
	    	}
	    	break; 
	    case "frmNotesGeoCode":
	        otis.application.setCurrentAppMenu("appMenuNotesGeoCode");
	        break;
	    case "frmAddEditTimeED1":
	    	otis.application.setCurrentAppMenu("appMenuItemAddEditTimeED1");
	    	break; 
	    case "frmNoAppMenu":
	    	otis.application.setCurrentAppMenu("NoAppMenu");
	    	break;	  
	    /*case "frmAppMenuItalyAddSafetyJobTime":
	    	otis.application.setCurrentAppMenu("appMenuItalyAddSafetyJobTime");
	    	break;*/
	    case "frmDetailsEditTimeHelper":
	        otis.application.setCurrentAppMenu("appDetailsEditTimeHelper");
	        break;
	    case "frmDetailsEditTimeHelperRepair":
	        otis.application.setCurrentAppMenu("appDetailsEditTimeHelperRepair");
	        break;
	    case "frmDetailsEditTimeNoUnits":
	        otis.application.setCurrentAppMenu("appDetailsEditTimeNoUnits");
	        break;
	    case "enterBuildingTimeDepatureTimeCurrentJob":
	        kony.print("frmCurrentJob case -->");
	        otis.application.setCurrentAppMenu("appMenuItemBuildingDepatureCurrentJob");
	        break;
	    case "frmFormInProgress":
	        otis.application.setCurrentAppMenu("appDetailsFormInProgress");
	        break;
	    //Navin
	    case "frmNewJobs":
			otis.application.setCurrentAppMenu("appMenuNewJobs");
			break;
		case "frmWorkOrderDetail":
			otis.application.setCurrentAppMenu("appMenuWorkOrderDetail");
			break;
		case "frmNewJobsFiltered":
			otis.application.setCurrentAppMenu("appMenuNewJobsFiltered");
			break;
		case "NewJobRejectForm":
			otis.application.setCurrentAppMenu("appMenuNewJobRejectForm");
			break;
		case "AcceptNewJob":
			otis.application.setCurrentAppMenu("appMenuAcceptNewJob");
			break;
		case "frmUnscheduledAdditionalOMMS":
	    	otis.application.setCurrentAppMenu("frmUnscheduledAdditionalOMMS");
	    	break;
		case "frmUnscheduledAdditionalOMMSNoJobs"://TD#312
	    	otis.application.setCurrentAppMenu("appMenuUnscheduledAdditionalOMMSNoJob");
	    	break;
	    	
	     case "frmNonProductiveAddHelper": //R11.0 TD#99
	        otis.application.setCurrentAppMenu("appMenuNonProductiveAddHelper");
	        break;
	     case "frmNonProductiveAddExpensesHelper": //R11.0 TD#99
	        otis.application.setCurrentAppMenu("appNonProductiveAddExpensesHelper");
	        break;
	     case "frmNonProductiveSummarySRCloseSuspend": //R11.0 TD#99
	        otis.application.setCurrentAppMenu("appNonProductiveSummarySRCloseSuspend");
	        break;	
	     case "frmNonProductiveEditTimeHelper": //R11.0 TD#99
	        otis.application.setCurrentAppMenu("appNonProductiveEditTimeHelper");
	        break;
	     case "frmNonProductiveAddTimeHelper": //R11.0 TD#99
	        otis.application.setCurrentAppMenu("appNonProductiveAddTimeHelper");
	        break;
	     case "frmNonProductiveRemoveHelper": //R11.1 TD#297
	        otis.application.setCurrentAppMenu("appMenuNonProductiveRemoveHelper");
	        break;	
	     case "frmDetailsTasksRepairDepart"://R12.0 TD#791
	        otis.application.setCurrentAppMenu("appDetailsTasksRepairDepart");
	        break;	 
	     case "frmDetailsDefaultMoreDepart"://R12.0 TD#791
	        otis.application.setCurrentAppMenu("appDetailsDefaultMoreDepart");
	        break;	    
	    case "frmBuildingUnscheduleVisitDepart"://R12.0 TD#791
	    	otis.application.setCurrentAppMenu("appMenuUnscheduledBuldngVisitDepart");
	        break;	 
	    case "frmDepatBuildingBundleOMMSDepart"://R12.0 TD#791
	        otis.application.setCurrentAppMenu("appMenuDepatBuildingBundleOMMSDepart");
	        break;	
		case "frmDepatBuildingDepart"://R12.0 TD#791
	        otis.application.setCurrentAppMenu("appMenuDepatBuildingDepart");
	        break;	
	    case "frmMechanicName":
	    	otis.application.setCurrentAppMenu("appMenuMechanic");	
	    	break;        
		//ends here	
			
	    default:
	        kony.print("Default case");
	        otis.application.setCurrentAppMenu("appMenuDefault");
	    }
	}
	catch (e)
	{
		kony.print("Exception inside SetAppMenu - "+e);// todo: handle exception
	}
}

//Processes user filled JHA Survey 
function onJHASubmitClick() {
    processSubmittedSurvey();
}

//Form navigation when cancelling JHA Survey 
function onJHACancelClick() {
    onFrmMiniDetailsBack();
}

/*********************************************************************************************
 * Function to set the selected time from frmTimePicker to Plan job screen
 *********************************************************************************************/
function setTimerPlanned() {
	try{
		var time = kony.os.time();
	    var tArray = time.split(":");
	    var hrs = tArray[0];
	    var ampm;
	    var dates = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
	    var strDays1 = dates.getDay();
	    var strDate1 = dates.getDate();
	    var strMonth1 = dates.getMonth();
	    strMonth1 = strMonth1 + 1;
	    var strYear1 = dates.getFullYear();
	    var reqDateFormat = getDateFormatReq();
    	frmPlanJob.calDate.dateFormat = reqDateFormat;
		//frmPlanJob.calDate.validStartDate = [strDate1, strMonth1, strYear1]; commmented for iOS11.0 TD#2034
	    frmPlanJob.calDate.dateComponents = [strDate1, strMonth1, strYear1];
	    if (hrs >= 12) {
	        ampm = "PM";
	    } else {
	        ampm = "AM";
	    }
	    if (hrs > 12) {
	        hrs = hrs - 12;
	    } 
	    
	    hrs = hrs.toString();
	    if(hrs.length == 1){
	        hrs = "0" + hrs;
	    }
	    var currenTime = hrs + ":" + tArray[1] + " " + ampm;
	    frmPlanJob.btnPickTime.text = currenTime;
	}catch (err) {
        kony.print("Exception in setTimerPlanned function : " + err);
        globalException(gbl_Menu_jsName,"setTimerPlanned",err);
    }    
}

/*********************************************************************************************
 * Function to set the current time in Plan job for unplanned jobs on accept unplanned job-Updated by Rishika for Enhancement#746-Job flow - ETA and Planned Date/Time
 *********************************************************************************************/
function onUnscheduledAcceptClick() {
	try{	
		kony.print("in onUnscheduledAcceptClick");
		//R12.0 TD#756 - To capture current date & time in Plan job screen
		frmPlanJob.calDate.setEnabled(true);//iOS11.0 TD#2034
		frmPlanJob.btnPickTime.setEnabled(true);//iOS11.0 TD#2034
	    gblfromMap = false;
	    //R10.1 TD#587 - Issue #4
	    gblIsAdditionalRepairAndOpenOrder = false;
		checkAndGetLocalJobIdForShutDown();
		if(gblFromNewJobs)
		{
			kony.print("in onUnscheduledAcceptClick - gblFromNewJobs");
			showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
			frmPlanJob.lblPlan.text = kony.i18n.getLocalizedString("PlanJob");
			setTimerPlanned();
			dismissLoadingScreen();
			frmPlanJob.hbxETA.isVisible = false;
			frmPlanJob.hboxNewJobsETA.isVisible = true;
			loadETA();
			dismissPopupNewJobs();    
	    	frmPlanJob.show();
		}
		else if(gblFromShutdownUnit)
		{
			kony.print("in onUnscheduledAcceptClick - gblFromShutdownUnit");
			showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
			frmPlanJob.lblPlan.text = kony.i18n.getLocalizedString("returnedToService");
			setTimerPlanned();
			dismissLoadingScreen();
			frmPlanJob.hbxETA.isVisible = false;
			frmPlanJob.hboxNewJobsETA.isVisible = false;
			
			var dates = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
		    var strDays1 = dates.getDay();
		    var strDate1 = dates.getDate();
		    var strMonth1 = dates.getMonth();
		    strMonth1 = strMonth1 + 1;
		    var strYear1 = dates.getFullYear();
		    var reqDateFormat = getDateFormatReq();
		    frmPlanJob.calDate.dateFormat = reqDateFormat;
			//frmPlanJob.calDate.validStartDat = [strDate1, strMonth1, strYear1];
			frmPlanJob.calDate.dateComponents = [strDate1, strMonth1, strYear1];
			//loadETA();
			dismissPopupNewJobs();    
	    	frmPlanJob.show();
		}
		else
		{
			frmPlanJob.hbxETA.isVisible = false;
			frmPlanJob.hboxNewJobsETA.isVisible = false;
			
		kony.print("!!! Inside kony.application.getPreviousForm() !!!"+kony.application.getPreviousForm().id);
		if(kony.application.getCurrentForm().id!="frmCreateJobUnplan"){
			gbFromMyjobs=false;
		}
		
		if (!gbFromMyjobs){
			popupJobDetails.dismiss();
		}
	    showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
	    frmPlanJob.lblPlan.text = kony.i18n.getLocalizedString("PlanJob");
	    frmPlanJob.lblETA.text="";
	    setTimerPlanned();
	    gblApply = false;
	    gblAlert =false;
	    var network = isNetworkAvailable();
	    
	    //Added by Rishika for Enhancement#746
	  	    if (isNetworkAvailable())
            {
            	kony.print("network is on ! "+network);
				//getCurrentLocation();
				var date1 = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
				kony.print("getGeoLocationDetails started "+date1);
				getGeoLocationDetails();
				var date2 = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
				kony.print("getGeoLocationDetails finished "+date2);
				var ETA = frmPlanJob.lblETA.text;
				kony.print("ETA "+ETA);
				if(ETA == null || ETA == 'null' || ETA == undefined || ETA == 'NULL'){
					frmPlanJob.btnApply.setEnabled(true);//Updated by Rishika
	                frmPlanJob.lblETA.text = kony.i18n.getLocalizedString("lblETAErrorMessage");
	                frmPlanJob.btnApply.skin = "sknBtnBlue";
	                frmPlanJob.btnApply.focusSkin = "sknBtnBlueBorder";
	                gblApply =false ;
				   
               //    frmPlanJob.btnApply.skin = "sknBtnGray";
				}else{
				    frmPlanJob.lblETA.text = ETA;
				    frmPlanJob.btnApply.skin = "sknBtnBlue";
	                frmPlanJob.btnApply.focusSkin = "sknBtnBlueBorder";
	                frmPlanJob.btnApply.setEnabled(true);
				    gblApply = true;
				}
		    }else {
		    	kony.print("network is off ! "+network);
		        frmPlanJob.btnApply.setEnabled(false);
		        frmPlanJob.btnApply.skin = "sknBtnGray";
                frmPlanJob.lblETA.text  = kony.i18n.getLocalizedString("distanceNetworkFailure");
            }
        dismissLoadingScreen();    
	    frmPlanJob.show();		
	    }	
	}catch (err) {
	        kony.print("Exception in setTimerPlanned function : " + err);
	        globalException(gbl_Menu_jsName,"setTimerPlanned",err);
	}
}


/*********************************************************************************************
 * Function to set the current time in Plan job for unplanned jobs on accept unplanned job-Updated by Rishika for Enhancement#746-Job flow - ETA and Planned Date/Time
 *********************************************************************************************/
function onUnscheduledROAcceptClick() {// TD#319 added new function for Additional RO
	try{	
	    gblfromMap = false;
	    
		checkAndGetLocalJobIdForShutDown();//checked
	    gblApply = false;
	    gblAlert =false;
	    var network = isNetworkAvailable();
	    
	    //Added by Rishika for Enhancement#746
	  	    if (isNetworkAvailable())
            {
            	kony.print("network is on ! "+network);
				//getCurrentLocation();
				var date1 = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
				kony.print("getGeoLocationDetails started "+date1);
				//getGeoLocationDetails();
				var date2 = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
				kony.print("getGeoLocationDetails finished "+date2);
				gblApply=false;
		    }else {
		    	kony.print("network is off ! "+network);
            }
            
			//onAccUnScheduledJob(); 
			onAccUnScheduledROJob();
			
	}catch (err) {
		kony.print("Exception in setTimerPlanned function : " + err);
	    globalException(gbl_Menu_jsName,"setTimerPlanned",err);
	}
}

/*********************************************************************************************
 * Function to update plan dat and change plan of the job into the Device DB
 *********************************************************************************************/
function updatePlannedDate(pks, valuestable,tempDTfmt) {
	try{
		//updatePlannedDate successcall back
		function updatePlannedDate_successcallback(res) {
        	kony.print("inside success of update. res: " + JSON.stringify(res));        	
	        if(fromDashBuild360)
	        {
	        	//alert("Planned successfully");
	        	schedulepopup(2);
                popupMessages.show();
                popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobPlanSuccess");
                frmMyJobs.tpMyJobs.activeTabs = [1];
            	isFilterSearchDone = false;
                isBuildingSearchDone = false;
                gblSerachBuildingCheck=false;
                dismissLoadingScreen();
				fetchValuesForScheduledDate();
                loadPopupJobDetail();
	        }
	        else if (fromDashboard) {
	            fromDashboard = false;
	            fromSyncSuccess = false;
	            showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
				timer.schedule("populateIndicator", loadShowRecommendedJobs, 0.001, false);
				//to show Loading Indicator
				/**
				 * Function to load the Recommended Next Job on dashboard.
				 * @returns {} 
				 */
				function loadShowRecommendedJobs(){
					timer.cancel("populateIndicator");
					if(frmPlanJob.lblPlan.text == kony.i18n.getLocalizedString("PlanJob"))
					{
						signOnGlobal.showDashboard = false
						timer.cancel("populateIndicator");
						
						showRecommendedJobs();
						frmMyJobs.tpMyJobs.segScheduled.setVisibility(true);
		                frmMyJobs.tpMyJobs.hbxSchNoRecord.setVisibility(false);
		                frmMyJobs.tpMyJobs.activeTabs = [1];
		                setAppMenuJobs();
		                isFilterSearchDone = false;
		                isBuildingSearchDone = false;
		                setMyJobsData();
		                dismissLoadingScreen();
		                schedulepopup(2);
		                popupMessages.show();
		                popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobPlanSuccess");
		                frmMyJobs.txtSearchBuild.text = "";
		                frmMyJobs.tpMyJobs.segScheduled.setFocus(true);
		                frmMyJobs.show();	                
		                
					}else
					{
						showRecommendedJobs();
					}
					
				}
	        }else if(gbFromMyjobs){
	        		frmMyJobs.tpMyJobs.activeTabs = [1];
	        		setMyJobsData();   
	                frmMyJobs.txtSearchBuild.text = "";
	                isFilterSearchDone = false;
	                isBuildingSearchDone = false;
	                gblSerachBuildingCheck=false;
	                schedulepopup(2);
	                popupMessages.show();
	                popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobPlanSuccess");
	                frmMyJobs.tpMyJobs.segScheduled.setFocus(true);
	                gbFromMyjobs=false;
	                frmMyJobs.show();
	        
	        } else if(gblfromMap){
	                loadBuildingMapData(gblMapBuildingId);  
	                isFilterSearchDone = false;
	                isBuildingSearchDone = false;
	                gblSerachBuildingCheck=false;
	                schedulepopup(2);
	                popupMessages.show();
	                popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobPlanSuccess");
	                gbFromMyjobs=false;
	        }
	        else if(gblFromNewJobs)
	        {
	        		/*
	        		alert(" updatePlannedDate gblFromNewJobs setting gblFromNewJobs & gblFromNewJobSearch = false")
	        		gblFromNewJobs = false;
	        		gblFromNewJobSearch = false;
	        		frmMyJobs.tpMyJobs.activeTabs = [1];
	        		setMyJobsData();   
	                frmMyJobs.txtSearchBuild.text = "";
	                isFilterSearchDone = false;
	                isBuildingSearchDone = false;
	                gblSerachBuildingCheck=false;
	                schedulepopup(2);
	                popupMessages.show();
	                popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobPlanSuccess");
	                frmMyJobs.tpMyJobs.segScheduled.setFocus(true);
	                gbFromMyjobs=false;
	                frmMyJobs.show();
	                */
	        }
	        else{  
	            if(highPriorityJob[currentRecommendedJob]!=null && highPriorityJob[currentRecommendedJob]!= 'NULL' && highPriorityJob[currentRecommendedJob]!="") 
	            {    
		            if(pks["JobId"] == highPriorityJob[currentRecommendedJob]["jobId"]){
		                signOnGlobal.showDashboard = false;
		                fromSyncSuccess = false;
		                showRecommendedJobs();
		            }
	            }
	            if (frmMyJobs.tpMyJobs.activeTabs == 0) {
	                selectedForm = "UnscheduledJobs";
	                var selJobScheduledJob = [];
	                var tempTime = valuestable["PlannedDate"];
	                
	                frmMyJobs.tpMyJobs.segUnscheduled.removeAt(gblUnscheduledIndex);
	                
	                frmMyJobs.tpMyJobs.segScheduled.setVisibility(true);
	                frmMyJobs.tpMyJobs.hbxSchNoRecord.setVisibility(false);
	                frmMyJobs.tpMyJobs.activeTabs = [1];
	                setAppMenuJobs();
	                isFilterSearchDone = false;
	                isBuildingSearchDone = false;
	                setMyJobsData();
	               
	                schedulepopup(2);
	                popupMessages.show();
	                popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobPlanSuccess");
	                frmMyJobs.txtSearchBuild.text = "";
	                frmMyJobs.tpMyJobs.segScheduled.setFocus(true);
	                frmMyJobs.show();
	            } else if (frmMyJobs.tpMyJobs.activeTabs == 1) {
	                setAppMenuJobs();
	                isFilterSearchDone = false;
	                isBuildingSearchDone = false;
	                gblScheduled.lblSchPlannedDate.text = tempDTfmt;
	                //Start--Added for DEF908
	                gblScheduled.lblSchPlanDate.text = kony.i18n.getLocalizedString("lblPlannedDate")+" : "+convertToCountrySpecDateFormat(tempDTfmt, true);
	                //End--Added for DEF908
	              //  frmMyJobs.tpMyJobs.segScheduled.setDataAt(gblScheduled, gblScheduledIndex, 0);
                    setMyJobsData();
	                schedulepopup(2);
	                popupMessages.show();
	                popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobChangePlanSuccess");
	
	                frmMyJobs.tpMyJobs.activeTabs = [1];
	                frmMyJobs.tpMyJobs.segScheduled.setFocus(true);
	                frmMyJobs.show();
	            } else if (frmMyJobs.tpMyJobs.activeTabs == 3) {
					//selectedForm = gblCurrentTabAppmenu;
        	 		//setAppMenu();
               //var planneddate = tempDTfmt;
//                
//                kony.print("planneddate is $$$$$$$$$$$$ "+planneddate);
//                
//                if (planneddate != '' && planneddate.indexOf("Planned") != -1) {
//
//                    var tempTextPlanned = planneddate.substring(15,planneddate.length);
//                    
//                    kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ tempTextPlanned is--"+tempTextPlanned);     
//                    
//                    tempDTfmt =  tempTextPlanned;         
//                }        
//                else
//                {
//                    tempDTfmt = planneddate;
//                }    
//                
//                     kony.print("tempDTfmt is &&&&&&&&&&&&&&&&&&&&&&&&&&&&&--"+tempDTfmt);
					
					var formattedDate = convertToCountrySpecDateFormat(tempDTfmt, true);
					frmMyJobs.tpMyJobs.lblPlanDate.text=formattedDate;// + " "+tempDTfmt.substring(11, 16);
	               // frmMyJobs.tpMyJobs.lblPlanDate.text= tempDTfmt.substring(0, 16);
	            	schedulepopup(2);
	            	gblCurrentJob.lblCurPlannedDate.text = tempDTfmt;
	                popupMessages.show();
	                popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobChangePlanSuccess");
	                frmMyJobs.show();
	                frmMyJobs.tpMyJobs.activeTabs = [3];
					loadCurrentJob();	            
	            }
        	}
    	}
		//updatePlannedDate Errorcall back
	    function updatePlannedDate_errorcallback(res) {
	        kony.print("Plan failed -- "+JSON.stringify(res));
	        kony.print("inside error of update. Error: " + JSON.stringify(res));
	    }
	    var jobTypeTemp = "";
	    if(fromDashBuild360)
	    {
	    	jobTypeTemp = gblUnscheduled.lblHiddenJobType.text;
	    }
	    else if(gblfromMap){
	       jobTypeTemp = gblMapJobList.lblMapHiddenJobType.text;
	    }
	    else if (fromDashboard) {
	        jobTypeTemp = highPriorityJob[currentRecommendedJob]["JobTypeCode"];
	    }else if(gbFromMyjobs || gblFromNewJobs){
	    	jobTypeTemp = globalJobCreated["JobType"]; 
	    	
	    }else {
	        if (frmMyJobs.tpMyJobs.activeTabs == 1) {
	            jobTypeTemp = gblScheduled.lblSchHiddenJobType.text;	
	        } else if (frmMyJobs.tpMyJobs.activeTabs == 0) {
	            jobTypeTemp = gblUnscheduled.lblHiddenJobType.text;
	        } else if (frmMyJobs.tpMyJobs.activeTabs == 3) {
	            jobTypeTemp = gblCurrentJob.lblCurHiddenJobType.text;
	        }
	    }
		
	    jobTypeTemp = jobTypeTemp.trim();
	    
	    if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeMNT"))
	         com.kony.TransactionOMMS.MaintenanceJob.updateByPK(pks, valuestable, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);//TD#1155 LAM
	    else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeSc"))
	        com.kony.Transaction.ServiceCallJob.updateByPK(pks, valuestable, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);
	    else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeRO"))
	        com.kony.Transaction.RepairCallJob.updateByPK(pks, valuestable, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);
	    else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeSFT"))
	        com.kony.Transaction.SafetyJob.updateByPK(pks, valuestable, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);
	    else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeOTR"))
	        com.kony.Transaction.OtherJob.updateByPK(pks, valuestable, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);				
	}catch (err) {
	        kony.print("Exception in setTimerPlanned function : " + err);
	        globalException(gbl_Menu_jsName,"updatePlannedDate",err);
	}
}

/*********************************************************************************************
 * Function to reject a job and update the status in DB
 *********************************************************************************************/

function updateRejectJob(pks, valuestable) {
	try{
		//updatePlannedDate successcall back
	    function updatePlannedDate_successcallback(res) {
	        //kony.print("Response : "+ JSON.stringify(res));
	        kony.print("inside success of updtae");
	        //kony.print("fromDashboard --> " +fromDashboard+" , gblfromMap -->" +gblfromMap);
	        if (fromDashboard) {
	            fromDashboard = false;
	            fromSyncSuccess = false;
	            showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
				timer.schedule("populateIndicator", loadShowRecommendedJobs, 0.001, false);
				
				/**
				 * Function to load the Recommended Next Job on dashboard.
				 * @returns {} 
				 */
				function loadShowRecommendedJobs(){
					timer.cancel("populateIndicator");
					showRecommendedJobs();
					schedulepopup(2);
		        	popupMessages.show();
		        	popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobRejectSuccess");
				}
	        }
	        else if(gblfromMap){
	            loadBuildingMapData(gblMapBuildingId);
	            schedulepopup(2);
	        	popupMessages.show();
	        	popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobRejectSuccess");
	        }
	        else {
	            if(highPriorityJob[currentRecommendedJob]!=null && highPriorityJob[currentRecommendedJob]!= 'NULL' && highPriorityJob[currentRecommendedJob]!="") 
	            { 
		            if(pks["JobId"] == highPriorityJob[currentRecommendedJob]["jobId"]){
		                signOnGlobal.showDashboard = false;
						fromSyncSuccess = false;
						showRecommendedJobs();	               
		            }
	            }
	            
	            if (frmMyJobs.tpMyJobs.activeTabs == 0) {
	                frmMyJobs.tpMyJobs.segUnscheduled.removeAt(gblUnscheduledIndex);
	                frmMyJobs.tpMyJobs.activeTabs = [0];
	            } else if (frmMyJobs.tpMyJobs.activeTabs == 1) {
	                frmMyJobs.tpMyJobs.segScheduled.removeAt(gblScheduledIndex);
	                frmMyJobs.tpMyJobs.activeTabs = [1];
	            }
	
	            frmMyJobs.txtSearchBuild.text = "";
	            setNoAppmenuitem();
	            setAppMenuJobs();
	            frmMyJobs.show();
	            schedulepopup(2);
	        	popupMessages.show();
	        	popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobRejectSuccess");
	        }
	
	    }
		
		//updatePlannedDate Errorcall back
	    function updatePlannedDate_errorcallback(res) {
	        kony.print("inside error of updtae"+JSON.stringify(res))
	    }
	    var jobTypeTemp = "";
	
	    if(gblfromMap){
	    jobTypeTemp = gblMapJobList.lblMapHiddenJobType.text;	    
	    }
	    else if (fromDashboard) {
	        jobTypeTemp = highPriorityJob[currentRecommendedJob]["JobTypeCode"];
	    }else if(gbFromMyjobs) {
	        jobTypeTemp = gblUnscheduled.lblHiddenJobType.text
	    } else if(frmMyJobs.tpMyJobs.activeTabs == 0) {
	        jobTypeTemp = gblUnscheduled.lblHiddenJobType.text
	    } else
	    {
	        jobTypeTemp = gblScheduled.lblSchHiddenJobType.text;
	    }
	    jobTypeTemp = jobTypeTemp.trim();
		kony.print("Job Type : "+jobTypeTemp+" ------- JobId : " + JSON.stringify(pks)+" ----- values table : "+JSON.stringify(valuestable));
	    if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeMNT")) {
	        //com.kony.Transaction.MaintenanceJob.updateByPK(pks, valuestable, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);
	         var employeeId = kony.store.getItem("EmployeeId");//Changes for TD#1093
			valuestable["MechId"] = employeeId;//Changes for TD#1093
	        com.kony.TransactionOMMS.MaintenanceJob.updateByPK(pks, valuestable, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);//TD#1155 LAM
	    } else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeSc")) {
	        com.kony.Transaction.ServiceCallJob.updateByPK(pks, valuestable, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);
	    } else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeRO")) {
	        com.kony.Transaction.RepairCallJob.updateByPK(pks, valuestable, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);
	    }else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeSFT")){
	        com.kony.Transaction.SafetyJob.updateByPK(pks, valuestable, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);
	    }else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeOTR")){
	        com.kony.Transaction.OtherJob.updateByPK(pks, valuestable, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);
	    }
	}catch (err) {
	        kony.print("Exception in updateRejectJob function : " + err);
	        globalException(gbl_Menu_jsName,"updateRejectJob",err);
	}
}

/*********************************************************************************************
 * Function to updating the reject time of job of additional jobs
 *********************************************************************************************/
function updateAdditionalJobsRejectJob(pks, valuestable) {
    
  try{
	    //success callback of updating jobs reject time
	    function updateAdditionalJobsPlannedDate_successcallback() {
	        kony.print("inside success of updtae")
	        schedulepopup(2);
	        popupMessages.show();
	        popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobRejectSuccess");
			//frmDetailsPan.show();
	        //loadAdditionalJobsFirstTime(); TD#552        
	    }
	     //error callback of updating jobs reject time
	    function updateAdditionalJobsPlannedDate_errorcallback() {
	        kony.print("inside error of updtae")
	    }
	    var jobTypeTemp = "";
	    jobTypeTemp = gblseladditionaljobs.lblSchHiddenJobType.text;
	    
	    jobTypeTemp = jobTypeTemp.trim();
	    if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeMNT")) {
	        //com.kony.Transaction.MaintenanceJob.updateByPK(pks, valuestable, updateAdditionalJobsPlannedDate_successcallback, updateAdditionalJobsPlannedDate_errorcallback, true);
	        var employeeId = kony.store.getItem("EmployeeId");//Changes for TD#1093
			valuestable["MechId"] = employeeId;//Changes for TD#1093
	        com.kony.TransactionOMMS.MaintenanceJob.updateByPK(pks, valuestable, updateAdditionalJobsPlannedDate_successcallback, updateAdditionalJobsPlannedDate_errorcallback, true);//TD#1155 LAM
	    } else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeSc")) {
	        com.kony.Transaction.ServiceCallJob.updateByPK(pks, valuestable, updateAdditionalJobsPlannedDate_successcallback, updateAdditionalJobsPlannedDate_errorcallback, true);
	    } else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeRO")) {
	        com.kony.Transaction.RepairCallJob.updateByPK(pks, valuestable, updateAdditionalJobsPlannedDate_successcallback, updateAdditionalJobsPlannedDate_errorcallback, true);
	    }else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeSFT")){
	        com.kony.Transaction.SafetyJob.updateByPK(pks, valuestable, updateAdditionalJobsPlannedDate_successcallback, updateAdditionalJobsPlannedDate_errorcallback, true);
	    }else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeOTR")){
	        com.kony.Transaction.OtherJob.updateByPK(pks, valuestable, updateAdditionalJobsPlannedDate_successcallback, updateAdditionalJobsPlannedDate_errorcallback, true);
	    }
    
   } catch (err) {
        kony.print("exception in updateAdditionalJobsRejectJob is : " + err);
        globalException("Menu","updateAdditionalJobsRejectJob",err);
   } 
}

/*********************************************************************************************
 * Function to updating the reject time of job of schedule jobs
 *********************************************************************************************/
function updateScheduledRejectJob(pks, valuestable) {
	try{	
		//updateSchPlannedDate successcall back
		function updateSchPlannedDate_successcallback() {
		        setAppMenuJobs();
		        frmMyJobs.tpMyJobs.segScheduled.removeAt(gblScheduledIndex);
		        setMyJobsData(0);
		        schedulepopup(2);
		        popupMessages.show();
		        popupMessages.lblmessage.text = kony.i18n.getLocalizedString("JobRejectSuccess");
		        if (fromDashboard) {
		            fromDashboard = false;
		            fromSyncSuccess = false;
		            showRecommendedJobs();
		        } else {
		            frmMyJobs.tpMyJobs.activeTabs = [1];
		            frmMyJobs.tpMyJobs.segScheduled.setFocus(true);
		            frmMyJobs.show();
		        }
		    }
			//updateSchPlannedDate Errorcall back
		    function updateSchPlannedDate_errorcallback() {
		        kony.print("inside error of updtae")
		    }
		    var jobTypeTemp = "";
		
		    if (fromDashboard) {
		        jobTypeTemp = highPriorityJob[currentRecommendedJob]["JobTypeCode"];
		    } else {
		        jobTypeTemp = gblScheduled.lblSchHiddenJobType.text;
		    }
		    jobTypeTemp = jobTypeTemp.trim();
		    if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeMNT"))
		        //com.kony.Transaction.MaintenanceJob.updateByPK(pks, valuestable, updateSchPlannedDate_successcallback, updateSchPlannedDate_errorcallback, true);
		     {
		        var employeeId = kony.store.getItem("EmployeeId");//Changes for TD#1093
				valuestable["MechId"] = employeeId;//Changes for TD#1093
		        com.kony.TransactionOMMS.MaintenanceJob.updateByPK(pks, valuestable, updateSchPlannedDate_successcallback, updateSchPlannedDate_errorcallback, true);//TD#1155 LAM
		    }
		    else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeSc"))
		        com.kony.Transaction.ServiceCallJob.updateByPK(pks, valuestable, updateSchPlannedDate_successcallback, updateSchPlannedDate_errorcallback, true);
		    else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeRO"))
		        com.kony.Transaction.RepairCallJob.updateByPK(pks, valuestable, updateSchPlannedDate_successcallback, updateSchPlannedDate_errorcallback, true);
		    else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeSFT"))
		        com.kony.Transaction.SafetyJob.updateByPK(pks, valuestable, updateSchPlannedDate_successcallback, updateSchPlannedDate_errorcallback, true);
		    else if (jobTypeTemp == kony.i18n.getLocalizedString("JobTypeOTR"))
		        com.kony.Transaction.OtherJob.updateByPK(pks, valuestable, updateSchPlannedDate_successcallback, updateSchPlannedDate_errorcallback, true);			
	}catch (err) {
	        kony.print("Exception in updateScheduledRejectJob function : " + err);
	        globalException(gbl_Menu_jsName,"updateScheduledRejectJob",err);
	}
    
}

/*********************************************************************************************
 * Utility Function to parse date 
 *********************************************************************************************/
function date_split(input_date) {
	try{
		var split_dateparts
	    var hyphen = ["-"]
	    var slash = ["/"]
	   
	
	    if (kony.string.containsChars(input_date, hyphen)) {
	        split_dateparts = input_date.split("-")
	    } else if (kony.string.containsChars(input_date, slash)) {
	        split_dateparts = input_date.split("/")
	    }
	
	    return split_dateparts
	}catch (err) {
        kony.print("Exception in date_split function : " + err);
        globalException(gbl_Menu_jsName,"date_split",err);
	}
    
}

/*********************************************************************************************
 * Function to set the time in the frmPlanJob screen from the Time Picker-Updated by Rishika for Enhancement#746-Job flow - ETA and Planned Date/Time
 *********************************************************************************************/
function onAcceptUnSchPlanTime() {
	try{		
		kony.print("onAcceptUnSchPlanTime>>>111");
		var hours = frmTimePicker.lstHr.selectedKeyValue[1];
	    var mins = frmTimePicker.lstMin.selectedKeyValue[1];
	    var apm = frmTimePicker.lblAMPM.text;
	    frmPlanJob.btnPickTime.text = hours + ":" + mins + " " + apm;
	    frmPlanJob.lblETA.text="";
	    gblApply = false;
	    gblAlert =false;
	    //Added by Rishika for Enhancement#746
	    if (isNetworkAvailable())
            {
				//getCurrentLocation();
				getGeoLocationDetails();
				var ETA =	frmPlanJob.lblETA.text ;
				if(ETA == null || ETA == 'null' || ETA == undefined || ETA == 'NULL'){
				   frmPlanJob.btnApply.setEnabled(true);//Updated by Rishika
                  frmPlanJob.lblETA.text = kony.i18n.getLocalizedString("lblETAErrorMessage");
                  frmPlanJob.btnApply.skin = "sknBtnBlue";
                  frmPlanJob.btnApply.focusSkin = "sknBtnBlueBorder";
                  gblApply =false ;
				}else{
			      frmPlanJob.lblETA.text = ETA;
			      frmPlanJob.btnApply.skin = "sknBtnBlue";
                  frmPlanJob.btnApply.focusSkin = "sknBtnBlueBorder";
                           
                 frmPlanJob.btnApply.setEnabled(true);
			     gblApply = true;
			}
		    } else {
                frmPlanJob.btnApply.setEnabled(false);
		        frmPlanJob.btnApply.skin = "sknBtnGray";
                frmPlanJob.lblETA.text  = kony.i18n.getLocalizedString("distanceNetworkFailure");
               
            }
	    frmPlanJob.show();		
	}catch (err) {
	        kony.print("Exception in onAcceptUnSchPlanTime function : " + err);
	        globalException(gbl_Menu_jsName,"onAcceptUnSchPlanTime",err);
	}
   
}

//function for app menu in the buildings list screen
function onClearReportsTleadsFilter(){
	isTleadsFilterSearchDone = false;
	AppMenuTLeads();
	
	setCurrentFormFocus();
}

/*********************************************************************************************
 * Function onAcceptClickk
 *********************************************************************************************/
function onAcceptClickk() {
	try{	
		if (selectedForm == "frmPlanJob") {
	        if(fromDashBuild360)
	        {
	        	//DO nothing
	        }
	        else if(gblFromShutdownUnit)
	        {	
	        	//alert("onAcceptClickk(), in gblShutdownJob");
	        	gblFromShutdownUnit = false;
	        	//getChargeTimeAndChangeStatusNo();
				var selectedDate = getDateAndTimeForReturnUnitToService();
				if(selectedDate != "" && selectedDate != null){
					getChargeTimeAndChangeStatusNo(selectedDate);
				}
	        	frmPlanJob.destroy();
	        }
	        else if (fromDashboard) {
	            fromDashboard = false;
	            fromSyncSuccess = false;
	            showRecommendedJobs();
	            frmPlanJob.destroy();
	        } else {
	            frmMyJobs.tpMyJobs.activeTabs = [1];
	            frmMyJobs.tpMyJobs.segScheduled.setFocus(true);
	            frmMyJobs.show();
	            frmPlanJob.destroy();
	        }
	    }			
	}catch (err) {
	        kony.print("Exception in onAcceptClickk function : " + err);
	        globalException(gbl_Menu_jsName,"onAcceptClickk",err);
	}
    
}

/*********************************************************************************************
 * Reject Job Function of unplanned jobs
 *********************************************************************************************/

function onUnscheduledRejectClick() {
	try{
		popupJobDetails.dismiss();	
		gblfromMap = false;
	    checkAndGetLocalJobIdForShutDown();

    	frmReject.hbxDefer.setVisibility(false);
		frmReject.taOther.text = "";
        frmReject.hbxOther.setVisibility(true);
	    kony.print("Loading reject Type");
	    loadRejectType();
	    loadRejectReason();
	    showRejectType(); //TD#239
	    /**END*/
	    frmReject.show();
	    selectedForm = "RejectReason";
	    frmReject.maxAppMenuButtons = 2;
	    setAppMenu();
	    kony.print("After loading rej Type");
	    //loadRejectReason();
	    if (fromDashboard) {
	        frmReject.lblJobId.text = highPriorityJob[currentRecommendedJob]["jobId"];
	    } else {
	        frmReject.lblJobId.text = gblUnscheduled.lblJobId.text;
	    
	    	}			
	}catch (err) {
	        kony.print("Exception in onUnscheduledRejectClick function : " + err);
	        globalException(gbl_Menu_jsName,"onUnscheduledRejectClick",err);
	}
   
}

/*********************************************************************************************
 * Reject Job Function of planned jobs
 *********************************************************************************************/
function onScheduledRejectClick() {
	try{	
	 	popupJobDetails.dismiss();
	 	gblfromMap = false;
	    checkAndGetLocalJobIdForShutDown();

	    frmReject.hbxDefer.setVisibility(false);
		frmReject.taOther.text = "";
        frmReject.hbxOther.setVisibility(true);
	    kony.print("Loading reject Type");
	    loadRejectType();
	    loadRejectReason();
		showRejectType(); //TD#239
	    
	    selectedForm = "RejectReason";
	    setAppMenu();
	    frmReject.show();
	    frmReject.maxAppMenuButtons = 2;
	    if (fromDashboard) {
	        frmReject.lblJobId.text = highPriorityJob[currentRecommendedJob]["jobId"];
	    } else {
	        frmReject.lblJobId.text = gblScheduled.lblSchJobId.text;
	    }			
	}catch (err) {
	        kony.print("Exception in onScheduledRejectClick function : " + err);
	        globalException(gbl_Menu_jsName,"onScheduledRejectClick",err);
	}
   
}

/*********************************************************************************************
 * Reject Job Function of Additional jobs
 *********************************************************************************************/
function onAdditionalJobsRejectClick() {
	try{	
		popupAdditionalJobDetails.dismiss();
		gblcheckadditionaljobs = false;
        checkAndGetLocalJobIdForShutDown();
	    /**Added for R4 Change functionality*/
	    frmReject.hbxDefer.setVisibility(false);
		frmReject.taOther.text = "";
        frmReject.hbxOther.setVisibility(true);
	    kony.print("Loading reject Type");
	    loadRejectType();
	    loadRejectReason();
	    showRejectType(); //TD#239
	    /**END*/
	    selectedForm = "AdditionalJobsRejectReason";
	    setAppMenu();
	    frmReject.show();
	    frmReject.maxAppMenuButtons = 2;
	    kony.print("Loading reject Type");
	    //loadRejectType();
	    kony.print("After loading rej Type");
	    frmReject.lblJobId.text = gblseladditionaljobs.lblSchJobId.text;			
	}catch (err) {
        kony.print("Exception in onAdditionalJobsRejectClick function : " + err);
        globalException(gbl_Menu_jsName,"onAdditionalJobsRejectClick",err);
	}	  
}

/*********************************************************************************************
 * Function to show  loading indicator on onclick of home in Appmenu
 *********************************************************************************************/

function onHomeClick() {
	gblIsPastWeekJob = false;//TD#769 fix - Past week validation
	syncForOMMS = false;//TD#740
	gblCheckServiceCallArrivalTime = false; //** added by ABA(29/9/15) TD#350
	/*TD#670 for recording onHomeClick transaction start time*/
	var temTime = getDateandTimeinMMDDYYYFormat();
	kony.print("Transaction onHomeClick start time -->" + temTime)
	kony.store.setItem("storeTransStartTime", temTime);//Storing Start time for further use
	/*TD#670 END*/
	//** Added by ABA(20/8/15)
	//** TD#178 closeout appmenu on dashboard issue
	var currentForm = kony.application.getCurrentForm(); //** Added by ABA(25/1/16) TD#343 Setting app menu when click on home btn
	currentForm.maxAppMenuButtons = 0;
	setAppMenu();
	//** end
    showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
    timer.schedule("populateIndicator", loadOnHomeClick, 0.001, false);
	//to show Loading Indicator
    function loadOnHomeClick() {
        timer.cancel("populateIndicator");
        onHomeClickLoading();
        insertTransactionTimeinDB("menu", "Navigating to dashboard", "onHomeClick");//TD#670 - Inserting Data regarding transaction in DB
        //dismissLoadingScreen();
    }

}

/*********************************************************************************************
* Function to show  loading indicator on onclick of home in Appmenu of building search
 *********************************************************************************************/

function onHomeBuildSearchClick() {
    gblSerachBuildingCheck = false;
    showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
    timer.schedule("populateIndicator", loadOnHomeClick, 0.001, false);
	//to show Loading Indicator
    function loadOnHomeClick() {
        timer.cancel("populateIndicator");
        onHomeClickLoading();
        //dismissLoadingScreen();
    }

}

/*********************************************************************************************
 * onclick Function of home in Appmenu
 *********************************************************************************************/
function onHomeClickLoading() {
	try{	
		//alert("onHomeClickLoading gblFromNewJobs & gblFromNewJobSearch = false & showRejectType");
		gblFromNewJobs = false;
		additionalOMMSClosure = false;//TD#312
		gblSelectedJobIdAdditionalOMMS = [];//TD#312
		responseArrayForUnscheduledJobsAdditionalOMMS = [];//TD#312
		responseArrayForUnscheduledJobs = [];//TD#312
		fromDashBundleOMMS = false;
		gblOMMSJobInProgress = false;
		gblFromNewJobSearch = false;
		showRejectType(); //to show rejectType of frmReject
		gblIsAdditionalRepairAndOpenOrder = false;//Added 30/09/2015
		isFilterSearchDone = false;
		signOnGlobal.showDashboard = true;
	    signOnGlobal.isJobCompleted = false;
	    isAppMenuHome = true;
	    isDashboardMoreDetails = false;
	    isDashboardNotes = false;
	    fromSyncSuccess = false; 
	    fromDashboard = false;
	    fromDashBuild360 = false;
	    departCurrentTab = false;
		scheduledBundleOMMS = false;
	    fromReports = false;
	    fromNonProductiveJob = false; //R11.0 TD#99
		gblJobTypeForNonProductiveJob = ""; //R11.0 TD#99
	    
	    showRecommendedJobs();
	    //selectedForm = "frmDashboard";
	    //setAppMenu();    
	    //frmDashboard.show();				
	}catch (err) {
	        kony.print("Exception in onHomeClick function : " + err);
	        globalException(gbl_Menu_jsName,"onHomeClick",err);
	}	
    
}

/*********************************************************************************************
 * onclick Function of reports in Appmenu
 *********************************************************************************************/
function onReportsHomeClick() {
    frmReportsLanding.show();
}

/**
 * For destroying unwanted forms
 */
function reportsDestroy(){
	frmReportsBuildings.destroy();
	frmReportsCompletedJobDetails.destroy();
	frmReportsCompletedJobs.destroy();
	frmReportsMaterialBuildingsList.destroy();
	frmReportsMaterialsJobsList.destroy();
	frmReportsMaterialsOrders.destroy();
	frmReportsMaterialsOrdersDetails.destroy();
	frmReportsSelectViewMaterial.destroy();
	frmReportsTLeadsBuildings.destroy();
	frmReportsTLeadsDetails.destroy();
	frmReportsTLeadsList.destroy();
	frmAddTime.destroy();
	frmAddEditExpense.destroy();
	frmSearchMaterial.destroy();
	frmTimeSheetDaily.destroy();
	frmTimeSheetJob.destroy();
	frmTimeSheetSumary.destroy();
	frmTimeSheetWeekly.destroy();
	frmDetailsPan.destroy();
	frmDepartReason.destroy();
	frmDepartBuilding.destroy();
	frmSelectView.destroy();
	frmPlaceMaterialOrder.destroy();
	dismissSyncLoadingScreen();
}

//Function to filter the TLead Buildings
function onTleadFilterAccept(){
	onTLeadsFilter();
}


//Shows TLeads Buildings screen upon clicking Filter screen.
function onTleadFilterReject(){
	//frmReportsTLeadsBuildings.show();
	frmReportsTLeadsList.maxAppMenuButtons = 0;
	frmReportsTLeadsBuildings.maxAppMenuButtons = 0;
	AppMenuTLeads();
}

/*********************************************************************************************
 * Function on cancel of unplanned jobs from frmPlanjob
 *********************************************************************************************/
function onRejectUnSchPlanTime() {
    frmPlanJob.show();
}

/*********************************************************************************************
 * Function on cancel of Travel
 *********************************************************************************************/  
 function onTravelRejectClickRej() {
    gblPlannedFrmName = "PlanJobs";
    frmMyJobs.show();
    loadCurrentJob();
    frmMyJobs.tpMyJobs.activeTabs = [3];
}

/*********************************************************************************************
 * Function on click of Filter in TLeads Reports screen
 *********************************************************************************************/
function onTleadFilterClick(){
	frmReportsTLeadsBuildings.maxAppMenuButtons = 0;
	frmReportsSelectViewTleads.maxAppMenuButtons = 2;
    selectedForm = "frmReportsSelectViewTleads";
    setAppMenu();
    frmReportsSelectViewTleads.radioSelectViewTlead.selectedKey = 1;
    frmReportsSelectViewTleads.show();
}

/**
 * Function onETAUnscheduledReject
 */

function onETAUnscheduledReject()
{
	try
	{
		frmTravel.maxAppMenuButtons = 3;
		selectedForm = "frmTravelUnschedule";
		setAppMenu();
		frmTravel.show();
	}
	catch (e)
	{
		kony.print("Exception in onETAUnscheduledReject : "+e);// todo: handle exception
	}
}

/**
 * Function onETAUnscheduledReject
 */

function onETAUnscheduledAccept()
{
	try
	{
		var hours = frmTimePicker.lstHr.selectedKeyValue[1];
	    var mins = frmTimePicker.lstMin.selectedKeyValue[1];
	    var apm = frmTimePicker.lblAMPM.text;
	    var dates1 = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
	    var hour1 = dates1.getHours();
	    var minute1 = dates1.getMinutes();
	    var second1 = dates1.getSeconds();
	    frmTimePicker.lstHr.selectedKey = frmTimePicker.lstHr.selectedKeyValue[0];
	    frmTimePicker.lstMin.selectedKey = frmTimePicker.lstMin.selectedKeyValue[0];
	    frmTimePicker.lblAMPM.text = frmTimePicker.lblAMPM.text;
		frmTravel.lblETA.text = hours + ":" + mins + " " + apm;
		frmTravel.vbxETA.setVisibility(true);
		frmTravel.vbxEditETA.setVisibility(true);
		frmTravel.maxAppMenuButtons = 3;
		selectedForm = "frmTravelUnschedule";
		setAppMenu();
		frmTravel.show();
	}
	catch (e)
	{
		kony.print("Exception in onETAUnscheduledAccept -> "+e);// todo: handle exception
	}
}

/*********************************************************************************************
 * Function set the data in travel of travel screen before loading
 *********************************************************************************************/
function onTravelAcceptClickAcc() {
	try{
		 gblPlannedFrmName = "PlanJobs";
		    var hours = frmTimePicker.lstHr.selectedKeyValue[1];
		    var mins = frmTimePicker.lstMin.selectedKeyValue[1];
		    var apm = frmTimePicker.lblAMPM.text;
		    var dates1 = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
		    var hour1 = dates1.getHours();
		    var minute1 = dates1.getMinutes();
		    var second1 = dates1.getSeconds();
		    frmTimePicker.lstHr.selectedKey = frmTimePicker.lstHr.selectedKeyValue[0];
		    frmTimePicker.lstMin.selectedKey = frmTimePicker.lstMin.selectedKeyValue[0];
		    frmTimePicker.lblAMPM.text = frmTimePicker.lblAMPM.text;
	   //     frmMyJobs.tpMyJobs.lblETA.text = hours + ":" + mins + " " + apm;
		    var timeDiff = diftime(hour1, minute1, second1, hours, mins, 0);
		    if (parseInt(timeDiff) > 1800) {
		       retriveEmailInfo();
		    }
		    frmMyJobs.show();
		    setAppMenuJobs();
		    loadCurrentJob();
		    frmMyJobs.tpMyJobs.activeTabs = [3];
		    				
	}catch (err) {
	        kony.print("Exception in onTravelAcceptClickAcc function : " + err);
	        globalException(gbl_Menu_jsName,"onTravelAcceptClickAcc",err);
	}	
   
}

/*********************************************************************************************
 * Utility function to calculate the diff of time
 *********************************************************************************************/
function diftime(h1, m1, s1, h2, m2, s2) {
    var time1 = parseInt(h1) * 3600 + parseInt(m1) * 60 + s1;
    var time2 = parseInt(h2) * 3600 + parseInt(m2) * 60 + s2;
    return (time1 - time2);

}

/*********************************************************************************************
 * Utility function to calculate the diff of date
 *********************************************************************************************/
function difDate(fullPlannedDate) {
	kony.print("fullPlannedDate-->"+fullPlannedDate);
	var plannedDate = fullPlannedDate.substring(0, 10).split("-");
	var plannedYear = parseInt(plannedDate[0]);	
	var plannedMonth = parseInt(plannedDate[1]);
	plannedMonth = plannedMonth - 1;	
	var plannedDay = parseInt(plannedDate[2]);	
    kony.print("planned Date-->"+plannedDate+"@"+plannedDay+"@"+plannedMonth+"@"+plannedYear);
    var currentDate = new Date;
    var currentDay = parseInt(currentDate.getDate());
    var currentMonth = parseInt(currentDate.getMonth());
    var currentYear = parseInt(currentDate.getFullYear());
    kony.print("current Date-->"+currentDate+"@"+currentDay+"@"+currentMonth+"@"+currentYear);
    var yearCount = currentYear-plannedYear;
    var monthCount = currentMonth-plannedMonth;
    var dayCount = currentDay-plannedDay;
    var totalDays = 0;
    
    //var sd = startDate.split("-");
	//var ed = endDate.split("-");
	
	var firstDate = new Date(plannedYear,plannedMonth,plannedDay);
	var secondDate = new Date(currentYear,currentMonth,currentDay);
	kony.print("firstDate>>>"+firstDate);
	kony.print("secondDate>>>"+secondDate);
	var oneDay = 1000*60*60*24;
	var totalDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	kony.print("totalDays>>>"+totalDays);

    return totalDays;
}

/*********************************************************************************************
 * onclick Function of sync in Appmenu
 *********************************************************************************************/
function onSyncClick() {
    if(isNetworkAvailable()){
    	if(signOnGlobal.isSyncCompleted){
			var employeeStatus = kony.store.getItem("StatusFlag");
	    	if(employeeStatus == null || employeeStatus == "0"){
									
				dismissSyncLoadingScreen();
				frmLogin.show();
				
			}else if(employeeStatus == "1"){
			
				//IOS_PORTING_CHANGES_START			
				var encryptPwdOri = kony.store.getItem("Password");
				kony.print("&&& menu.js:: onSyncClick :: encryptPwdOri "+encryptPwdOri)
				var encryptPwd = kony.convertToRawBytes(encryptPwdOri);
				//IOS_PORTING_CHANGES_END
				var password = kony.crypto.decrypt(gblAlgo,encryptDecryptKey,
						encryptPwd,prptobj);
						kony.print("Password-->"+password);
				var checkemployeestatus_inputparams = {};	
				
				//Start:Changes for TD#720
				var signalStrength = getSignalStrength();	
				if (signalStrength == "1" || signalStrength == 1){
					otis.ui.Alert(kony.i18n.getLocalizedString("lowNetworkStrengthManualSyncIphone"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);		
				}
				else
				{
					//R4 - Employee current location (geo code stamping) at event - Manual Sync
					if(!gblFromStopService){
						gblEmployeeManualSync = true; //** Added by ABA(27/09/16) TD#1351  
						//updateEmployeeStatus("Manual Sync");
					}
			  		
					checkemployeestatus_inputparams["serviceID"] = "CheckEmployeeStatus";
					checkemployeestatus_inputparams["EmployeeId"] = kony.store.getItem("EmployeeId");
					checkemployeestatus_inputparams["EmployeeStatus"] = employeeStatus;
					checkemployeestatus_inputparams["password"] = password;
					checkemployeestatus_inputparams["wsContextURL"] = kony.i18n.getLocalizedString("wsContextURL");
					checkemployeestatus_inputparams["DeviceId"] = otis.os.deviceInfo().deviceid;	
					showSyncLoadingScreen(kony.i18n.getLocalizedString("syncInProgress")); 
					kony.print("checkemployeestatus_inputparams-->"+JSON.stringify(checkemployeestatus_inputparams))	
					callOtisServiceAsync(checkemployeestatus_inputparams, checkEmployeeSyncStatusCallback);
				}
				//End:Changes for TD#720
			}
    	
        }else{
        	dismissSyncLoadingScreen();			
            if(syncForOMMS)
            {
            	showLoadingScreen(kony.i18n.getLocalizedString("syncInProgress"));
            }
            else
            {	
            	if(syncForStopService){
					  showLoadingScreen(kony.i18n.getLocalizedString("syncInProgress"));	
            	}else{
            		otis.ui.Alert(kony.i18n.getLocalizedString("AutoSyncInProgress"), null, "", "", "", "", null);
            	}	
            }
        }
    	
        
    }else{
    	//R8.0 TD#259 fix
        otis.ui.Alert(kony.i18n.getLocalizedString("networkNotAvailable"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
        //TD#2096 START
		storeSyncTimestampinDB("Sync Initiation Failed Network Not Available");
		//globalException("Menu", "onSyncClick", "Auto Sync Failed, Network Not Available");
		//TD#2096 END	
		//TD#2094 - Check pending uploads and inform user
		if(runPendingSyncCheck) //TD#2129 - Issue #2
		{
			checkPendingUploads();
		}	
		else
		{
			runPendingSyncCheck = true;
		}
    }
}



/*********************************************************************************************
 * onclick Function of Reject
 *********************************************************************************************/
function onRejectClickk() {
	try{
		//alert("In onRejectClickk(), gblIsAdditionalRepairAndOpenOrder="+gblIsAdditionalRepairAndOpenOrder);
		if(gblIsAdditionalRepairAndOpenOrder){
	      	fromDashBuild360 = true;
			setAppmenuOnfrmUnscheduledBuildingUnits(2);
			frmUnscheduledBuildingUnits.show();
	    }	
		else if(fromDashBuild360)
		{
			//DO nothing
		}
		else if(gblFromShutdownUnit)
	    {
			gblFromShutdownUnit = false;
			frmShutdownUnitsList.show();
		    //frmPlanJob.destroy();
	    }
		else if (fromDashboard) {
	        fromDashboard = false;
	        selectedForm = "frmDashboard";
	        setAppMenu();
	        frmDashboard.show();
	    } else {
	        frmMyJobs.tpMyJobs.activeTabs = [0];
	        frmMyJobs.tpMyJobs.segUnscheduled.setFocus(true);
	        frmMyJobs.show();
	    }			
	}catch (err) {
	        kony.print("Exception in onRejectClickk function : " + err);
	        globalException(gbl_Menu_jsName,"onRejectClickk",err);
	}
}

//Unwanted function
function onAddClick() {}

//Unwanted function
function onDepartClick() {}


/**
 *function called when clicked on add note icon of 360 page
 */
function onAddNotesClick() {
    frmAddNote.taNotes.text = "";
    frmAddNote.maxAppMenuButtons = 0;
    frmAddNote.show();
}

/**
 *function called on click of travel to icon of jobpopup
 */
function onTravelClick() {
	try{
		//R12.0 TD#753
		if(!CheckCutOffDateWithCurrentTime(false)){
			return; //As cut off time
		} else {
			kony.print("do nothing as valid time period");
		}
		
		//** Added by Sharmas(27/8/15)
		//** TD#87 Able to perform work on another Job even if there is already a job present in the current screen.
		var jobStatusCode="";
		/*TD#670 for recording onTravelClick transaction start time*/
		//R12.3.4 (29/06/16)
		isGettingOMMSTransactionInProgress = true;
		var temTime = getDateandTimeinMMDDYYYFormat();
		kony.print("Transaction onTravelClick start time -->" + temTime)
		kony.store.setItem("storeTransStartTime", temTime);//Storing Start time for further use
		/*TD#670 END*/
		//R9.0 TD#508 - Fix issue - Mechanic is able to perform job on other building even though he didnt depart the earlier building.
		var jobStartTime = "";
		var curjobstatuscode = "";
		var tmpState = "";
		var isAnyJobInProgress = false;
		
	 	kony.print("JobConstants.CurrentJobstate = "+JobConstants.CurrentJobstate+", tmpState = "+tmpState);
	   	kony.print("gblCurrentJob =  "+JSON.stringify(gblCurrentJob));
	   	
		if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) {
	        jobStatusCode = gblCurrentJob.lblCurJobstatus.text;
	        
	        //R9.0 TD#508
	        jobStartTime = gblCurrentJob["lblJobStartTime"].text;
			curjobstatuscode = gblCurrentJob["lblCurJobstatus"].text;
		}else{
	  		var employeeId = kony.store.getItem("EmployeeId");
	  		var gblCurrentJobStatusCode="I";
	  		var statusCode;
	  		//var sql="Select count(1) AS 'InProgressJob' from ( Select JobStatusCode from ServiceCallJob where JobStatusCode = "+gblCurrentJobStatusCode+" and MechId="+employeeId+" union ALL select JobStatusCode from MaintenanceJob where JobStatusCode = "+gblCurrentJobStatusCode+" and MechId="+employeeId+" UNION ALL select JobStatusCode from RepairCallJob where JobStatusCode = "+gblCurrentJobStatusCode+" and MechId="+employeeId+" UNION ALL select JobStatusCode from Otherjob where JobStatusCode = "+gblCurrentJobStatusCode+" and MechId="+employeeId+" )A";
	  		var sql="Select count(1) AS 'InProgressJob' from ( Select JobStatusCode from ServiceCallJob where JobStatusCode = '"+gblCurrentJobStatusCode+"' and MechId="+employeeId+" UNION ALL select JobStatusCode from RepairCallJob where JobStatusCode = '"+gblCurrentJobStatusCode+"' and MechId="+employeeId+" )A";
	  		getAllSelectQuery(getCurrentJobStatusDBDetails_SucessCallback, getCurrentJobStatusDBDetails_ErrorCallback, sql);
	  		//successCallBack 
			
            function getCurrentJobStatusDBDetails_SucessCallback(res) {
           	 	if (null !== res && res.length > 0) {
                  statusCode = res[0]["InProgressJob"];
                } else {
                	kony.print("do nothing");
                }
            }
              
         	//errorCallBack 
            function getCurrentJobStatusDBDetails_ErrorCallback(err) {
            	kony.print(err);
            }
            // Number of jobs with Status inprogress 
            if(statusCode > 0){
             	jobStatusCode="I";
            } else {
            	kony.print("do nothing");
            }             
		}
		//R9.0 TD#508 - to check current job status
		tmpState = checkCurrentJobStatus();
		
		kony.print("jobStartTime = "+jobStartTime+", curjobstatuscode = "+curjobstatuscode);
		if(jobStatusCode == kony.i18n.getLocalizedString("lblJobStatusInProgress")){//TD#87 removing open condition
			isAnyJobInProgress = true;
     	} else if(jobStartTime != null && jobStartTime != "null" && jobStartTime != '' && curjobstatuscode != 'O') { //Start-Time exists
	    	//R9.0 TD#508 - Fix issue - Mechanic is able to perform job on other building even though he didnt depart the earlier building.
			if (curjobstatuscode == kony.i18n.getLocalizedString("lblJobStatusComplete") || jobStatusCode == kony.i18n.getLocalizedString("lblJobStatusSuspend")) {
	    		
	    		isAnyJobInProgress = true;
	    	} else {
	    		isAnyJobInProgress = false;
	    	}
	    } else if(tmpState === JobConstants.STOP_TRAVEL_STATE) { 
	  		isAnyJobInProgress = true;
		}
		kony.print("isAnyJobInProgress = "+isAnyJobInProgress);
		
		//** Added by ABA(15/1/16) TD#474
		var insideBuildingStatus =  checkMechBuildingStatus();
		kony.print("isAnyJobInProgress = "+isAnyJobInProgress);
		kony.print("insideBuildingStatus = "+insideBuildingStatus[0]["insideBuilding"]);
		if(isAnyJobInProgress || insideBuildingStatus[0]["insideBuilding"]){
			otis.ui.Alert(kony.i18n.getLocalizedString("msgCurrentJobExist"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
            kony.print("jobstatuscode is " + jobStatusCode);
            return;
		} else { // add closing curly parenthesis after end of else condition
		showLoadingScreen("Loading...");
		scheduledBundleOMMS = false;
		fromDashboard = false;
		//alert("1 onTravelClick gblSearchBuildingsData -- "+JSON.stringify(gblSearchBuildingsData));
		fromDashBuild360 = true;//TD#312
		gblIsAdditionalRepairAndOpenOrder = false;//TD#312
		//R8.0 TD#62 implementation
		setTravelValuestoBuildingVisit(false);
		
		if(!scheduledBundleOMMS)
		{
			fromDashBuild360 = true;
			gblPreviousNotes = "";
			//fromDashboard = true;
		}
	    //gblcheckadditionaljobs = false;
	    //gblweeklycreatejob = false;
	    //Details.fromadditionaljobs = false;
	    //gblcheckenteradditionaljobs = false;
	    //gblfromMap = false;
	    Helper.gblHelperCheck = "NormalJob";
	    popupJobDetails.dismiss();
	    if (isNetworkAvailable()) 
	    {
            getCurrentLocation();
        }
        else 
        {
            //alert("Network not available");
            //frmMyJobs.tpMyJobs.lblETA.text = "00:00";
            //popupJobDetails.lblDistance.text = kony.i18n.getLocalizedString("distanceNetworkFailure");
        }
	  
		if(scheduledBundleOMMS)
		{	
			frmTravel.lblTrvlBuild.text = frmBuildingUnscheduleVisit.lblBuildingNameUnSch.text.trim();//trim() Added by ABA(23/9/15)
			selectedForm = "frmTravelScheduledOMMS";
		}
		else if(fromDashboard)
		{
			/*frmNotesTab.lblHdrBuilding.text = highPriorityJob[currentRecommendedJob]["BuildingName"];
            frmNotesTab.lblHdrAddressOne.text = highPriorityJob[currentRecommendedJob]["BAddress1"];
            frmNotesTab.lblHdrAddressTwo.text = highPriorityJob[currentRecommendedJob]["BAddress2"];*/
			frmTravel.lblTrvlBuild.text = highPriorityJob[currentRecommendedJob]["BuildingName"].trim();//trim() Added by ABA(23/9/15)
		    selectedForm = "frmTravelUnschedule";
		}
		else
		{	
			frmTravel.lblTrvlBuild.text = gblSearchBuildingsData.lblBuildName.text.trim(); //trim() Added by ABA(23/9/15)
		    selectedForm = "frmTravelUnschedule";
		}
		/*TD#740*/
		gblletMechEnter = false;
		isSyncForOMMSDone = false;
		var lastSyncTimeMins = kony.store.getItem("LastSyncTime");
		var flagToPerformSync = false;
		var date = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
		var totalSec =date.getTime()/1000;
		var minutes = parseInt( totalSec / 60);
		var durationLastSync = minutes - lastSyncTimeMins;
		durationLastSync = parseInt(durationLastSync);
		isSyncForOMMSDone = false;
		var signalStrength = getSignalStrength();
		kony.print("signalStrength "+signalStrength);
		if((durationLastSync > 1 || lastSyncTimeMins == null) && repairOpenTaskJobFlow == false && signOnGlobal.isSyncCompleted && isNetworkAvailable())//TD#2105      ----TD#720 && (signalStrength > "1" || signalStrength > 1)
		{
			syncForOMMS = true;//TD#740
			//checkEmployeeStatusSync();//TD#740
			signOnGlobal.showDashboard = false;//TD#740
			signOnGlobal.isAutoSync = true;//TD#740
			syncPerformDownloadOnly = "Full";//TD#1351
			syncStartSession();//TD#740
		}
		else
		{
			isSyncForOMMSDone = true;
		}
		//TD#740 End
		frmTravel.maxAppMenuButtons = 2; //changed by prd for #1002
		setAppMenu();
	    frmTravel.show();
	    dismissLoadingScreen();
	    gblSerachBuildingCheck = false;
	    insertTransactionTimeinDB("menu", "Travel to Building 360", "onTravelClick");//TD#670 - Inserting Data regarding transaction in DB
	  }
	}catch (err) {
	        dismissLoadingScreen();
	        kony.print("Exception in onTravelClick function : " + err);
	        globalException(gbl_Menu_jsName,"onTravelClick",err);
	}
	
}

/**
 *function called on click of travel to icon of jobpopup for helper job
 */
function onTravelClickHelper() {
	try{
		//R12.0 TD#753
		if(!CheckCutOffDateWithCurrentTime(false)){
			return; //As cut off time
		} else {
			kony.print("do nothing as valid time period");
		}
			
	    gblfromMap = false;
	    checkAndGetLocalJobIdForShutDown();
		gblcheckadditionaljobs = false;
		gblweeklycreatejob = false;
	    Details.fromadditionaljobs = false;
	    gblcheckenteradditionaljobs = false;
	    Helper.gblHelperCheck = "HelperJob";
	    popupJobDetails.dismiss();
	    frmTravel.vbxETA.setEnabled(false);
	    selectedForm = "frmTravelTo";
	    setAppMenu();
	    frmTravel.show();
	    frmSortFilter.destroy();				
	}catch (err) {
	        kony.print("Exception in onTravelClickHelper function : " + err);
	        globalException(gbl_Menu_jsName,"onTravelClickHelper",err);
	}
    
}

/*********************************************************************************************
 * onclick Function of accept of change plan-Updated by Rishika for Enhancement#746-Job flow - ETA and Planned Date/Time
 *********************************************************************************************/
function onChangeAccPlanClick() {
	try{	
		kony.print("onChangeAccPlanClick>>>111");
		if(gblFromShutdownUnit == true)
	    {
	    	frmPlanJob.lblPlan.text = kony.i18n.getLocalizedString("returnedToService");
		}else {
			frmPlanJob.lblPlan.text = kony.i18n.getLocalizedString("ChangePlan");
		}
		var hours = frmTimePicker.lstHr.selectedKeyValue[1];
	    var mins = frmTimePicker.lstMin.selectedKeyValue[1];
	    var apm = frmTimePicker.lblAMPM.text;
	    frmTimePicker.lstHr.selectedKey = frmTimePicker.lstHr.selectedKeyValue[0];
	    frmTimePicker.lstMin.selectedKey = frmTimePicker.lstMin.selectedKeyValue[0];
	    frmTimePicker.lblAMPM.text = frmTimePicker.lblAMPM.text;
	    frmPlanJob.btnPickTime.text = hours + ":" + mins + " " + apm;
	    frmPlanJob.lblETA.text="";
	    gblApply =false;
	    if (isNetworkAvailable())
            {
				//getCurrentLocation();
				getGeoLocationDetails();
				var ETA =	frmPlanJob.lblETA.text ;
				if(ETA == null || ETA == 'null' || ETA == undefined || ETA == 'NULL'){
				   frmPlanJob.btnApply.setEnabled(true);//Updated by Rishika
                  frmPlanJob.btnApply.skin = "sknBtnBlue";
                  frmPlanJob.btnApply.focusSkin = "sknBtnBlueBorder";
                  gblApply =false ;
				}else{
			frmPlanJob.lblETA.text = ETA;
			frmPlanJob.btnApply.skin = "sknBtnBlue";
            frmPlanJob.btnApply.focusSkin = "sknBtnBlueBorder";
                           
           frmPlanJob.btnApply.setEnabled(true);
			gblApply = true;
			}
		    }else {
                frmPlanJob.btnApply.setEnabled(false);
		        frmPlanJob.btnApply.skin = "sknBtnGray";
                frmPlanJob.lblETA.text  = kony.i18n.getLocalizedString("distanceNetworkFailure");
               
            }
	    	var dates = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
		    var strDays1 = dates.getDay();
		    var strDate1 = dates.getDate();
		    var strMonth1 = dates.getMonth();
		    strMonth1 = strMonth1 + 1;
		    var strYear1 = dates.getFullYear();
		    var reqDateFormat = getDateFormatReq();
		    frmPlanJob.calDate.dateFormat = reqDateFormat;
			//frmPlanJob.calDate.validStartDat = [strDate1, strMonth1, strYear1];
			frmPlanJob.calDate.dateComponents = [strDate1, strMonth1, strYear1];
			
	    	frmPlanJob.show();			
	}catch (err) {
	        kony.print("Exception in onChangeAccPlanClick function : " + err);
	        globalException(gbl_Menu_jsName,"onChangeAccPlanClick",err);
	}
    
}

/*********************************************************************************************
 * onclick Function of accept of change plan
 *********************************************************************************************/
function onChangePlanClick() {
	kony.print("in onChangePlanClick()");
   	gblfromMap = false;
    popupJobDetails.dismiss();
    checkAndGetLocalJobIdForShutDown();
	gbFromMyjobs=false;
    //frmPlanJob.lblPlan.text = "Change Plan"
    frmPlanJob.lblPlan.text = kony.i18n.getLocalizedString("ChangePlan")

    //var selJob;
    var plannedDate,nottoExceed;
    if (fromDashboard) {
    	nottoExceed = highPriorityJob[currentRecommendedJob]["NotToExceedDate"];
        plannedDate = highPriorityJob[currentRecommendedJob]["PlannedDate"];
    } else if (frmMyJobs.tpMyJobs.activeTabs == 3) {
    	nottoExceed = gblCurrentJob.lblCurNotToExceedDate.text;
        plannedDate = gblCurrentJob.lblCurPlannedDate.text;
    } else {
    	nottoExceed = gblScheduled.lblSchNotToExceedDate.text;
        plannedDate = gblScheduled.lblSchPlannedDate.text;
    }
    var temp = plannedDate.split(" ");
    var tempEndDate = nottoExceed.split(" ");
    var tempDate = date_split(temp[0]);
    var tempEndDate = date_split(tempEndDate[0]);
    var time = kony.os.time();
    var tarray = time.split(":");
    var hrs = tarray[0];
    var ampm;
    var dates = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
    var strDays1 = dates.getDay();
    var strDate1 = dates.getDate();
    var strMonth1 = dates.getMonth();
    strMonth1 = strMonth1 + 1;
    var strYear1 = dates.getFullYear();
    var reqDateFormat = getDateFormatReq();
    frmPlanJob.calDate.dateFormat = reqDateFormat;
	frmPlanJob.calDate.validStartDate = [strDate1, strMonth1, strYear1];
	//frmPlanJob.calDate.validStartDate = [tempDate[1], tempDate[0], tempDate[2]];
	frmPlanJob.calDate.validEndDate = [tempEndDate[2], tempEndDate[1], tempEndDate[0]];
    frmPlanJob.calDate.dateComponents = [tempDate[2], tempDate[1], tempDate[0]];
    var tempTime = temp[1];
    kony.print("in change plab tempTime is "+tempTime);
    var tArray = tempTime.split(":");
    var hrs = tArray[0];
    var ampm;
    if (hrs == 0) {
    	hrs = 12;
    	ampm = "AM";
    }else if (hrs > 12) {
        hrs = hrs - 12;
        ampm = "PM";
    }else if (hrs == 12) {
        ampm = "PM";
    }else {
        ampm = "AM";
    }
    hrs = hrs.toString();
    if(hrs.length == 1)
    {
        hrs = "0" + hrs;
    }
    
    kony.print(" hrs "+hrs +" tArray[1] "+tArray[1] +" ampm "+ampm);
    frmPlanJob.btnPickTime.text = hrs + ":" + tArray[1] + " " + ampm;
    frmPlanJob.lblETA.text="";
    gblApply = false;
    gblAlert =false;
    if (isNetworkAvailable())
            {
				//getCurrentLocation();
				 getGeoLocationDetails();
				var ETA = frmPlanJob.lblETA.text;
				if(ETA == null || ETA == 'null' || ETA == undefined || ETA == 'NULL'){
				   frmPlanJob.btnApply.setEnabled(true);//Updated by Rishika
                  frmPlanJob.lblETA.text = kony.i18n.getLocalizedString("lblETAErrorMessage");
                  frmPlanJob.btnApply.skin = "sknBtnBlue";
                  frmPlanJob.btnApply.focusSkin = "sknBtnBlueBorder";
                  gblApply =false ;
				}else{
				frmPlanJob.lblETA.text = ETA;
			frmPlanJob.btnApply.skin = "sknBtnBlue";
            frmPlanJob.btnApply.focusSkin = "sknBtnBlueBorder";
                           
           frmPlanJob.btnApply.setEnabled(true);
			gblApply = true;
				}
		    }else {
                frmPlanJob.btnApply.setEnabled(false);
		        frmPlanJob.btnApply.skin = "sknBtnGray";
                frmPlanJob.lblETA.text  = kony.i18n.getLocalizedString("distanceNetworkFailure");
               
            }
    //setAppMenu()
    frmPlanJob.show();
}

//** Added by ABA(5/1/12)
//** TD#383 Reject planned service call
function onPlannedJobRejectClick() {
try { 
	var rowIndex = frmMyJobs.tpMyJobs.segScheduled.selectedIndex[1];
	var rowData = frmMyJobs.tpMyJobs.segScheduled.data[rowIndex];
	kony.print("rowData " + JSON.stringify(rowData));

	var officeId = getOfficeIdForMachineNo(rowData["lblSchHiddenMachDesc"].text);

	//** Added by ABA(07/12/15) for office code log
	try {
		globalException("Service Call officeId", "officeId", JSON.stringify(officeId));
	} catch (err) {
		kony.print("Exception in fetching officeId " + JSON.stringify(err));
		globalException("Exception in fetching officeId", "officeId", JSON.stringify(err));
	}
	
	if (officeId.trim() == "" || officeId == null || officeId.toLowerCase() == 'null') {
		popupJobDetails.dismiss();
		otis.ui.Alert(kony.i18n.getLocalizedString("invalidMcOfficePayroll"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
	} else {

		showPlannedJobRejectForm();
		
	}
	//** end*/
} catch (err) {
	kony.print("error in function onPlannedJobRejectClick " + err);

	globalException("Menu", "onPlannedJobRejectClick", err);
}
}
//** End


/*********************************************************************************************
 * onclick Function of accept of plan job
 *********************************************************************************************/
function onAccUnScheduledJob() {
	try{
	    kony.print("Inside onAccUnScheduledJob !!!");
	    
	    
	    var pk = {}, jobTypeTemp = 0,
		jobNoTemp = "";
	    var jobId;
	    var timeFlag = true;
	    var dates = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
	    var strDays1 = dates.getDay();
	    var strDate1 = dates.getDate();
	    var strMonth1 = dates.getMonth();
	    strMonth1 = strMonth1 + 1;
	    var strYear1 = dates.getFullYear();
	    var dateCheck = frmPlanJob.calDate.formattedDate;
	    dateCheck = date_split(dateCheck);
	   // if(strDate1 == dateCheck[1] && strMonth1 == dateCheck[0] && strYear1 == dateCheck[2]){
    	var timeCheck = frmPlanJob.btnPickTime.text;	    	
    	kony.print("timeCheck is "+timeCheck);	    	
    	tempTimeCheck = timeCheck.split(" ");
    	ampm = tempTimeCheck[1];
    	hrsMins = tempTimeCheck[0].split(":");
    	hrs = hrsMins[0];
    	mins = hrsMins[1];
    	kony.print("ampm is "+ampm);
	    	//timeFlag = ValidatingPlanTimeWithCurrentTime(hrs,mins,ampm);
	    //}
	    if(gblFromShutdownUnit == true)
	    {	
	        	//alert("onAccUnScheduledJob(), in gblShutdownJob");
	        	//getChargeTimeAndChangeStatusNo();
				var selectedDate = getDateAndTimeForReturnUnitToService();
				if(selectedDate != "" && selectedDate != null){
					//iOS11.0 TD#2034 Start
					var shutdownStatus = changeReturnToServiceDate();
					if(shutdownStatus){
					getChargeTimeAndChangeStatusNo(selectedDate);
					frmShutdownUnitsList.show();
					//frmPlanJob.destroy();
					gblFromShutdownUnit = false;
					return;			
					}else{
						kony.print("do nothing");
					}
					//iOS11.0 TD#2034 End
				}
				return;
	    }
	    timeFlag = ValidatingPlanTimeWithCurrentTime(frmPlanJob.calDate.year,frmPlanJob.calDate.month, frmPlanJob.calDate.day, hrs,mins,ampm);
	    if(timeFlag){
	        if(fromDashBuild360)
	        {
	        	jobId = gblUnscheduled.lblJobId.text;
		        jobTypeTemp = gblUnscheduled.lblHiddenJobType.text
	        }
	        else if (gblfromMap) {
		        jobId = gblMapJobList.lblMapJobId.text;
		        jobTypeTemp = gblMapJobList.lblMapHiddenJobType.text;		       
		    }
		    else if (fromDashboard) {
		        jobId = highPriorityJob[currentRecommendedJob]["jobId"];
		        jobTypeTemp = highPriorityJob[currentRecommendedJob]["JobTypeCode"];
		    }else if (gbFromMyjobs) {
		        jobId = globalJobCreated["Jobid"];
		        jobTypeTemp = globalJobCreated["JobType"];
		       
		    } else {
		        if (frmMyJobs.tpMyJobs.activeTabs == 1) {
		        	jobId = gblScheduled.lblSchJobId.text;
		            jobTypeTemp = gblScheduled.lblSchHiddenJobType.text;
		        } else if (frmMyJobs.tpMyJobs.activeTabs == 0) {
		        	jobId = gblUnscheduled.lblJobId.text;
		            jobTypeTemp = gblUnscheduled.lblHiddenJobType.text
		        }else if (frmMyJobs.tpMyJobs.activeTabs == 3) {
		        	jobId = gblCurrentJob.lblCurJobId.text;
		            jobTypeTemp = gblCurrentJob.lblCurHiddenJobType.text;
		        }
		    }
		    jobTypeTemp = jobTypeTemp.trim();
		    kony.print("jobTypeTemp is " + jobTypeTemp);
		    
		   
		    if(ampm == kony.i18n.getLocalizedString("lblPM") && parseInt(hrs) <= 11) {
            	hrs = parseInt(hrs)+ 12;
	        }else if(ampm == kony.i18n.getLocalizedString("lblAM") && parseInt(hrs) == 12) {
            	hrs = "00";
	        }else {
	            hrs = hrs;
	        }
	        var temptime = hrs +":"+ mins +":00";
	       
	        //var tempDate = frmPlanJob.calDate.formattedDate + " " + temptime;
			//var dObj = date2MMDDYYYY(tempDate);

			var day = frmPlanJob.calDate.day;
			var mon = frmPlanJob.calDate.month;
			var obtyear = frmPlanJob.calDate.year;
			
			var obtDate = day <= 9 ? '0'+day : day
			var obtMonth = mon <= 9 ? '0'+mon : mon
			kony.print("Planned Date - "+obtDate+"/"+obtMonth+"/"+obtyear);
			var dObj = date2MMDDYYYY(obtDate, obtMonth, obtyear, temptime);
		    tempDate = dObj["MMDDYYYY"];
		    
		    kony.print(" tempDate is "+tempDate);
	    
		    if(checkPlannedDateConflict(tempDate,jobId)){
        		otis.ui.Alert(kony.i18n.getLocalizedString("plannedDateConflict"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
        		return;    
    		}
		    
		    pk = {JobId: jobId};
		    
		    kony.print("pk is " + JSON.stringify(pk));
		    var valuesTable1 = [];
		    //alert("Mech Id - "+kony.store.getItem("EmployeeId"));
		    if(fromDashBuild360 && frmPlanJob.lblPlan.text == kony.i18n.getLocalizedString("PlanJob"))
		    {
		    	var currentdatetime = getCurrentDateTimeInFormat("yyyy-MM-dd HH:mm:ss");
				valuesTable1 = {PlannedDate: tempDate,MechId:kony.store.getItem("EmployeeId"), AcceptedTime:currentdatetime };
		    }
		    else if(frmPlanJob.lblPlan.text == kony.i18n.getLocalizedString("PlanJob"))
			{
			    var currentdatetime = getCurrentDateTimeInFormat("yyyy-MM-dd HH:mm:ss");
				valuesTable1 = {PlannedDate: tempDate, AcceptedTime:currentdatetime };
			}else{
				valuesTable1 = {PlannedDate: tempDate };
			}
		    valuesTable1 = updateTrackingColumns(valuesTable1);
		    updatePlannedDate(pk, valuesTable1,tempDate);
	    }else{
	    	otis.ui.Alert(kony.i18n.getLocalizedString("lblPlanDateTimeValidation"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
	    }
    }catch (e) {
		kony.print("Exception in onAccUnScheduledJob "+JSON.stringify(e));
		globalException("Menu","onAccUnScheduledJob",e);
	}
}

/*********************************************************************************************
 * onclick Function of RO job // added for Additional RO
 *********************************************************************************************/
function onAccUnScheduledROJob() {// TD#319
	try{
	    var pk = {}, jobTypeTemp = 0,
		jobNoTemp = "";
	    var jobId;
	    //var timeFlag = true;
	    var dates = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
	    var strDays1 = dates.getDay();
	    var strDate1 = dates.getDate();
	    var strMonth1 = dates.getMonth();
	    strMonth1 = strMonth1 + 1;
	    var strYear1 = dates.getFullYear();
    	var timeCheck = getCurrentTime();	  //frmPlanJob.btnPickTime.text  	
    	kony.print("timeCheck is "+timeCheck);	    	
    	tempTimeCheck = timeCheck.split(" ");
    	ampm = tempTimeCheck[1];
    	hrsMins = tempTimeCheck[0].split(":");
    	hrs = hrsMins[0];
    	mins = hrsMins[1];
    	kony.print("ampm is "+ampm);
		kony.print("shutdown--"+gblFromShutdownUnit);
	    jobId = gblUnscheduled.lblJobId.text;
		jobTypeTemp = gblUnscheduled.lblHiddenJobType.text
	        
		jobTypeTemp = jobTypeTemp.trim();
		kony.print("jobTypeTemp is " + jobTypeTemp);
		    
		   
		    if(ampm == kony.i18n.getLocalizedString("lblPM") && parseInt(hrs) <= 11) {
            	hrs = parseInt(hrs)+ 12;
	        }else if(ampm == kony.i18n.getLocalizedString("lblAM") && parseInt(hrs) == 12) {
            	hrs = "00";
	        }else {
	            hrs = hrs;
	        }
	        var temptime = hrs +":"+ mins +":00";

			var day = strDate1;//Fixed TD#831 29/02/2016
			var mon = strMonth1;
			var obtyear = strYear1;
			
			var obtDate = day <= 9 ? '0'+day : day
			var obtMonth = mon <= 9 ? '0'+mon : mon
			kony.print("Planned Date - "+obtDate+"/"+obtMonth+"/"+obtyear+", strDays1 - "+strDays1);
			var dObj = date2MMDDYYYY(obtDate, obtMonth, obtyear, temptime);
		    tempDate = dObj["MMDDYYYY"];
		    
		    pk = {JobId: jobId};
		    
		    kony.print("pk is " + JSON.stringify(pk));
		    var valuesTable1 = [];//TD#319
		    var currentdatetime = getCurrentDateTimeInFormat("yyyy-MM-dd HH:mm:ss");
			valuesTable1 = {PlannedDate: tempDate,MechId:kony.store.getItem("EmployeeId"), AcceptedTime:currentdatetime };
		   /** }
		    else if(frmPlanJob.lblPlan.text == kony.i18n.getLocalizedString("PlanJob"))
			{
			    var currentdatetime = getCurrentDateTimeInFormat("yyyy-MM-dd HH:mm:ss");
				valuesTable1 = {PlannedDate: tempDate, AcceptedTime:currentdatetime };
			}else{
				valuesTable1 = {PlannedDate: tempDate };
			}*/
		    valuesTable1 = updateTrackingColumns(valuesTable1);
		    //updatePlannedDate(pk, valuesTable1,tempDate);
		    
		    com.kony.Transaction.RepairCallJob.updateByPK(pk, valuesTable1, updatePlannedDate_successcallback, updatePlannedDate_errorcallback, true);
		
			//updatePlannedDate successcall back
			function updatePlannedDate_successcallback(res) {
		        if(fromDashBuild360)// TD#319
		        {
		        	//alert("fromDashBuild360");
	                frmMyJobs.tpMyJobs.activeTabs = [1];
	            	isFilterSearchDone = false;
	                isBuildingSearchDone = false;
	                gblSerachBuildingCheck=false;
					fetchValuesForScheduledDate();//checked TD#319
	                loadPopupAdditionalROJobDetail();
	                //loadPopupJobDetail();
		        }
	    	}
			//updatePlannedDate Errorcall back
		    function updatePlannedDate_errorcallback(res) {
		        kony.print("Plan failed -- "+JSON.stringify(res));
		        kony.print("inside error of update. Error: " + JSON.stringify(res));
		    }
	    /**}else{
	    	otis.ui.Alert(kony.i18n.getLocalizedString("lblPlanDateTimeValidation"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
	    }*/
    }catch (e) {
		kony.print("Exception in onAccUnScheduledJob "+JSON.stringify(e));
		globalException("Menu","onAccUnScheduledJob",e);
	}
}

/*********************************************************************************************
 * onclick Function of Reject of unplanned job
 *********************************************************************************************/
function onRejUnScheduledJob() {
//alert("onRejUnScheduledJob set gblFromNewJobs & gblFromNewJobSearch = false");
    /*
    if(gblFromNewJobs)
    {
    	gblFromNewJobs = false;
    	gblFromNewJobSearch = false;
    	frmMyJobs.tpMyJobs.activeTabs = [1];
		setMyJobsData();   
	    frmMyJobs.txtSearchBuild.text = "";
	    isFilterSearchDone = false;
	    isBuildingSearchDone = false;
	    gblSerachBuildingCheck=false;
	    frmMyJobs.tpMyJobs.segScheduled.setFocus(true);
	    gbFromMyjobs=false;
	    frmMyJobs.show();
    }
    else*/
    
    if(gblIsAdditionalRepairAndOpenOrder){
		fromDashBuild360 = true;
		setAppmenuOnfrmUnscheduledBuildingUnits(2);
		frmUnscheduledBuildingUnits.show();
	}
    else if(gblFromShutdownUnit == true)
    {
		gblFromShutdownUnit = false;
		frmShutdownUnitsList.show();
	   // frmPlanJob.destroy();
    }
    else if(fromDashBuild360)
    {
    	setAppmenuOnfrmUnscheduledBuildingUnits(1);

    	frmUnscheduledBuildingUnits.show();
    }
    else if(gblfromMap)
    {
      frmMapBuilding.show();
    }
    else if (fromDashboard) {
        fromDashboard = false;
        selectedForm = "frmDashboard";
        setAppMenu();
        frmDashboard.show();
    } else {
        setNoAppmenuitem();
        var currentFrm = kony.application.getCurrentForm().id;
		var previousFrm = kony.application.getPreviousForm().id;

        if(currentFrm == "frmPlanJob" && frmMyJobs.tpMyJobs.activeTabs == 3){
        	//selectedForm =gblCurrentTabAppmenu;
        	 //setAppMenu();
			frmPlanJob.maxAppMenuButtons = 0;
			loadCurrentJob();
        }else{
        	setAppMenuJobs();
        }
        
        frmMyJobs.show();
    }
}

/**
 *function called on click of cross icon of reject option for additional jobs
 */
function onRejAdditionalJob() {
   frmDetailsPan.show();
 }

/*********************************************************************************************
 * onclick Function of Reject  of plan job
 *********************************************************************************************/
function onRejScheduledJob() {

    if (fromDashboard) {
        fromDashboard = false;
        fromSyncSuccess = false;
        showRecommendedJobs();
    } else {
        setAppMenuJobs();
        frmMyJobs.tpMyJobs.activeTabs = [1];
        frmMyJobs.show();
    }
}

/*********************************************************************************************
 * onclick Function of accept of Reject Reason
 *********************************************************************************************/
function onAcceptRejectReason() {

	try
	{
		//alert("service flow:");
		frmReject.cbxRejectType.setFocus(true);	
		var rejectTypeKey = frmReject.cbxRejectType.selectedKeyValue[0];
	    var rejectKey = null;
	    if(rejectTypeKey == 0){
	        otis.ui.Alert(kony.i18n.getLocalizedString("alertRejectType"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
	        return;        
	    }else{
		    selectedKey = frmReject.comboReject.selectedKeyValue[0];
	
		    //var rejectReason = "";
		    if (selectedKey == 0) {
		        otis.ui.Alert(kony.i18n.getLocalizedString("alertSlctResn"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
		        return;
		    }else{
		        var val = selectedKey;//.split("-");
				rejectKey = val;
				//var isCaptureInput = val[1];
				//var isDifferToMech = val[2];
				
			    rejectKey = rejectKey.trim();
			    
				kony.print("rejectKey--->"+rejectKey)
				//kony.print("isCaptureInput--->"+isCaptureInput)
				//kony.print("isDifferToMech--->"+isDifferToMech)
		    	//if (isCaptureInput.trim() == "true") {
		        var tempOther = frmReject.taOther.text;
		        tempOther = tempOther.trim();
		        if (tempOther == "" || tempOther == null) {
		            /*otis.ui.Alert(kony.i18n.getLocalizedString("alertSlctOtherRsn"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
		            return;*/
		            rejectReason = "";
		        }
		        else
		        {
		        	rejectReason = tempOther;
		        }
			    //} 
			    /* if (isDifferToMech.trim() == "D") {
			
			        var selDefMechName = frmReject.cbxDeferToMech.selectedKeyValue[1];
			        var selKey = frmReject.cbxDeferToMech.selectedKeyValue[0];
			        selKey = selKey.toString().trim();
			        if (selKey == 0) {
			        	otis.ui.Alert(kony.i18n.getLocalizedString("alertPlsSlctTech"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
			            return;
			        } else
			            rejectReason = selKey;
			    }*/
		    }
		    
	    }
	
	    var pk = {}
	    var jobId;
	    var jobTypeTemp = "";
	    
		if(gblfromMap)
		{
		  jobId = gblMapJobList.lblMapJobId.text;
		}
	    else if (fromDashboard) {
	        jobId = highPriorityJob[currentRecommendedJob]["jobId"];
	    } else {
	        if (frmMyJobs.tpMyJobs.activeTabs == 0) {
	            jobId = gblUnscheduled.lblJobId.text;
	        } else if (frmMyJobs.tpMyJobs.activeTabs == 1) {
	            jobId = gblScheduled.lblSchJobId.text;
	        }
	    }
	
		if(gblfromMap){
	    jobTypeTemp = gblMapJobList.lblMapHiddenJobType.text;	    
	    }
	    else if (fromDashboard) {
	        jobTypeTemp = highPriorityJob[currentRecommendedJob]["JobTypeCode"];
	    }else if(gbFromMyjobs) {
	        jobTypeTemp = gblUnscheduled.lblHiddenJobType.text
	    } else if(frmMyJobs.tpMyJobs.activeTabs == 0) {
	        jobTypeTemp = gblUnscheduled.lblHiddenJobType.text
	    } else
	    {
	        jobTypeTemp = gblScheduled.lblSchHiddenJobType.text;
	    }
	    jobTypeTemp = jobTypeTemp.trim();
	
	    pk = {
	        JobId: jobId
	    };
	    var tempCurTime = getCurrentDateandTime();
	    //TD#753_KK - Regular pay week, extended period functionality
	    kony.print("onAcceptRejectReason - before - tempCurTime "+tempCurTime);
	    kony.print("onAcceptRejectReason - jobTypeTemp "+jobTypeTemp);
        if (jobTypeTemp != kony.i18n.getLocalizedString("JobTypeSc")) {
        	tempCurTime = checkCutOffTimeandChange(tempCurTime);
        } else {
        	kony.print("do nothing, since it's a service call job");	
        }
        kony.print("onAcceptRejectReason - after - tempCurTime "+tempCurTime);
	    var valuesTable1 = [];
	    if(jobTypeTemp == "RO")
	    {
	    	valuesTable1 = {
	        RejectTypeCode : rejectTypeKey,
	        RejReasonCode : rejectKey,
	        RejRsnOthrText : rejectReason,
	        JobStatusCode: 'O',
	        RejectedTime :tempCurTime
	    	};
	    	
	    }
	    else
	    {
	    	valuesTable1 = {
	        RejectTypeCode : rejectTypeKey,
	        RejectCode: rejectKey,
	        RejectReason: rejectReason,
	        JobStatusCode: 'O',
	        RejectedTime :tempCurTime
	    	};
	    }
		
	    valuesTable1 = updateTrackingColumns(valuesTable1);
	    updateRejectJob(pk, valuesTable1);	
	}
	catch (e)
	{
		kony.print("Exception in onAcceptRejectReason : " + e);
		globalException("Menu","onAcceptRejectReason",e);// todo: handle exception
	}
}

/**
 *function called onclick of reject icon on job popup of additional jobs
 */
function onAcceptAdditionalJobsRejectReason() {

try{
	frmReject.cbxRejectType.setFocus(true);
    var rejectTypeKey = frmReject.cbxRejectType.selectedKeyValue[0];
    var rejectKey = null;
    if(rejectTypeKey == 0){
    	otis.ui.Alert(kony.i18n.getLocalizedString("alertRejectType"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
        return;        
    }else{
    	selectedKey = frmReject.comboReject.selectedKeyValue[0];
	    var val = selectedKey;//.split("-");
		rejectKey = selectedKey;
		//var isCaptureInput = val[1];
		//var isDifferToMech = val[2];
	    rejectKey = rejectKey.trim();
	    var rejectReason = ""
	    if (rejectKey == 0) {
	        otis.ui.Alert(kony.i18n.getLocalizedString("alertRejectReasonJob"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
	        return;
	    } 
	    //if (isCaptureInput.trim() == "true") {
	        var tempOther = frmReject.taOther.text;
	        tempOther = tempOther.trim();
	        if (tempOther == "" || tempOther == null) {
	            /*otis.ui.Alert(kony.i18n.getLocalizedString("alertOtherReason"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
	            return;*/
	            rejectReason = "";
	        } 
	        else
	        {
	            rejectReason = tempOther;
	        }
	    //} 
	     /*if (isDifferToMech.trim() == "D") {
	
	        var selDefMechName = frmReject.cbxDeferToMech.selectedKeyValue[1];
	        var selKey = frmReject.cbxDeferToMech.selectedKeyValue[0];
	        selKey = selKey.toString().trim();
	        if (selKey == 0) {
	            otis.ui.Alert(kony.i18n.getLocalizedString("alertTechnician"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
	            return;
	        } else
	            rejectReason = selKey;
	    }*/
    }
    
        
    var jobTypeTemp = "";
    if(gblfromMap){
	    jobTypeTemp = gblMapJobList.lblMapHiddenJobType.text;	    
	    }
	    else if (fromDashboard) {
	        jobTypeTemp = highPriorityJob[currentRecommendedJob]["JobTypeCode"];
	    }else if(gbFromMyjobs) {
	        jobTypeTemp = gblUnscheduled.lblHiddenJobType.text
	    } else if(frmMyJobs.tpMyJobs.activeTabs == 0) {
	        jobTypeTemp = gblUnscheduled.lblHiddenJobType.text
	    } else
	    {
	        jobTypeTemp = gblScheduled.lblSchHiddenJobType.text;
	    }
	    jobTypeTemp = jobTypeTemp.trim();
    
    var pk = {}
    var jobId;
    jobId = gblseladditionaljobs.lblSchJobId.text;
    
    pk = {
        JobId: jobId
    };
    var tempCurTime = getCurrentDateandTime();
    //TD#753_KK - Regular pay week, extended period functionality
    kony.print("onAcceptAdditionalJobsRejectReason - before - tempCurTime "+tempCurTime);
    kony.print("onAcceptAdditionalJobsRejectReason - jobTypeTemp "+jobTypeTemp);
    if (jobTypeTemp != kony.i18n.getLocalizedString("JobTypeSc")) {
    	tempCurTime = checkCutOffTimeandChange(tempCurTime);
    } else {
    	kony.print("do nothing, since it's a service call job");	
    }
    kony.print("onAcceptAdditionalJobsRejectReason - after - tempCurTime "+tempCurTime);
    var valuesTable1 = [];
    if(jobTypeTemp == "RO")
    {
    	valuesTable1 = {
        RejectTypeCode : rejectTypeKey,
        RejReasonCode : rejectKey,
        RejRsnOthrText : rejectReason,
        JobStatusCode: 'O',
        RejectedTime :tempCurTime
    	};
    	
    }
    else
    {
    	valuesTable1 = {
        RejectTypeCode : rejectTypeKey,
        RejectCode: rejectKey,
        RejectReason: rejectReason,
        JobStatusCode: 'O',
        RejectedTime :tempCurTime
    	};
    }   
    valuesTable1 = updateTrackingColumns(valuesTable1);
    updateAdditionalJobsRejectJob(pk, valuesTable1);
   
  } catch (err) {
        kony.print("exception in onAcceptAdditionalJobsRejectReason is : " + err);
        globalException("Menu","onAcceptAdditionalJobsRejectReason",err);
  }   
}

/*********************************************************************************************
 * post show function to set appmenu in plan job screen
 *********************************************************************************************/
function frmpostshowPlanJob(){
	if(gblFromNewJobs)
	{
		frmPlanJob.maxAppMenuButtons = 1;
	    selectedForm = "AcceptNewJob";
	    setAppMenu();
	}
	else
	{
		frmPlanJob.maxAppMenuButtons = 2;
	    selectedForm = "accRejUnscheduledJob";
	    setAppMenu();
	}
}


//** Added by ABA(18/2/16)
//** Hazard Depart from Current
function onClickCurrentJobDepartBuildingFromCurrent() {
	try {

		isHazardSurveyPerform = true;
		gblSerachBuildingCheck = false;
		
		//R12.6 TD#1215 - Fix for issue, User is not able to depart building. Lock out in building/current job. 
		isDepartOMMSCurrentFlow = true;
		getBuildingHazardWarningsList();

		frmNotesTab.lblHdrBuilding.text = gblSearchBuildingsData.lblBuildName.text;
		frmNotesTab.lblHdrAddressOne.text = gblSearchBuildingsData.lblAddrLine1.text;
		frmNotesTab.lblHdrAddressTwo.text = gblSearchBuildingsData.lblCity.text;

		gblJobvisitStatus = false;
		gblCurrentDepartCheck = true;
		Details.fromadditionaljobs = false;
		gblcheckadditionaljobs = false;
		gblweeklycreatejob = false;
		gblcheckenteradditionaljobs = false;
		gblfromMap = false;
		gblStartWork = true;
		gblPreviousNotes = kony.application.getCurrentForm().id;
		var retObj = retrieveDetails();
	 	var worktypeCode = retObj["WorkTypeCode"];//TD#786
		/** TD#319 condition added to show Mini Details screen*/
		//** Added by ABA(24/11/2015) TD#553
		frmNotesTab.maxAppMenuButtons = 2;
		frmNotesTab.tpNotes.activeTabs = [5];
		selectedForm = "frmUpdateDapartHazards";
		//alert("selectedForm - "+selectedForm);
		setAppMenu();
		frmNotesTab.show();

		var characterArray = ["~"];
		//TD#786
	  if(worktypeCode == kony.i18n.getLocalizedString("JobTypeSc") || worktypeCode == kony.i18n.getLocalizedString("JobTypeMNT")){ //R 12.3.3 TD#1121 for OMMS completed jobs
	  		frmMyJobsAdditionalRO = false;
			isHazardSurveyPerform = true;
	  
	  }else if (worktypeCode == kony.i18n.getLocalizedString("JobTypeRO")) {  //** Updated by ABA(22/06/16) Removed tilde sign TD#1131 comparision
			frmMyJobsAdditionalRO = true; // TD#319
			isHazardSurveyPerform = true;
		}
	  else{
			kony.print("do nothing");
		
		}
		// else {
//			frmMyJobsAdditionalRO = false;
//			isHazardSurveyPerform = true;
//		}
     
		//R12.6 TD#1215 - Fix for issue, User is not able to depart building. Lock out in building/current job. 
		isDepartOMMSCurrentFlow = false;
	} catch (err) {
		kony.print("Exception in onClickCurrentJobDepartBuildingFromCurrent is : " + err);
		globalException("Menu", "onClickCurrentJobDepartBuildingFromCurrent", err);
	}
}

/*********************************************************************************************
 * onclick Function of accept of Reject Reason
 *********************************************************************************************/
function onAcceptScheduledRejectReason() {
	
	frmReject.cbxRejectType.setFocus(true);
    var rejectTypeKey = frmReject.cbxRejectType.selectedKeyValue[0];
    var rejectKey = null;
    if(rejectTypeKey == 0){
        otis.ui.Alert(kony.i18n.getLocalizedString("alertRejectType"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
        return;        
    }else{
        selectedKey = frmReject.comboReject.selectedKeyValue[0];
	    var val = selectedKey.split("-");
		rejectKey = val[0];
		var isCaptureInput = val[1];
		var isDifferToMech = val[2];
	    rejectKey = rejectKey.trim();
	    var rejectReason = ""
	    if (rejectKey == 0) {
	    	//alert("reject key is null");
	        otis.ui.Alert(kony.i18n.getLocalizedString("alertRejectReasonJob"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
	    } 
	    if (isCaptureInput.trim() == "true") {
	        var tempOther = frmReject.taOther.text;
	        tempOther = tempOther.trim();
	        if (tempOther == "" || tempOther == null) {
	            otis.ui.Alert(kony.i18n.getLocalizedString("alertOtherReason"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
	            return;
	        } else
	            rejectReason = tempOther;
	    } 
		 if (isDifferToMech.trim() == "D") {
	
	        var selDefMechName = frmReject.cbxDeferToMech.selectedKeyValue[1];
	        var selKey = frmReject.cbxDeferToMech.selectedKeyValue[0];
	        selKey = selKey.toString().trim();
	        if (selKey == 0) {
	            otis.ui.Alert(kony.i18n.getLocalizedString("alertTechnician"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
	            return;
	        } else
	            rejectReason = selKey;
	    }
    }
    var pk = {}
    var jobId;
    if (fromDashboard) {
        jobId = highPriorityJob[currentRecommendedJob]["jobId"];
    } else {
        if (frmMyJobs.tpMyJobs.activeTabs == 0) {
            jobId = gblUnscheduled.lblJobId.text;
        } else if (frmMyJobs.tpMyJobs.activeTabs == 1) {
            jobId = gblScheduled.lblSchJobId.text;
        }
    }

    pk = {
        JobId: jobId
    };

    var valuesTable1 = {
        RejectCode: rejectKey,
        RejectReason: rejectReason,
        JobStatusCode: 'C'
    };
    valuesTable1 = updateTrackingColumns(valuesTable1);
    updateScheduledRejectJob(pk, valuesTable1);
}

var tempTime;

/**
 *function called when click of accept of arrival tiem in enter building
 */
function updateArrivalTime(pks, valuestable) {

  try{
    	//success callback of update arrival time
	    function updateArrivalTime_successcallback() {
	        checkarrivaltimeupdate();
	        frmEnterBuilding.lblArrivalTime.text = EnteredArrivalTime;
	        frmEnterBuilding.show();
	    }
	    //error callback of update arrival time
	    function updateArrivalTime_errorcallback() {
	        kony.print("inside error of updtae arrivcal time")
	    }
	  //  com.kony.Transaction.BuildingVisit.updateByPK(pks, valuestable, updateArrivalTime_successcallback, updateArrivalTime_errorcallback, true);
         com.kony.BuildingVisitScope.BuildingVisit.updateByPK(pks, valuestable, updateArrivalTime_successcallback, updateArrivalTime_errorcallback, true);
   } catch (err) {
        kony.print("Exception in updateArrivalTime is : " + err);
        globalException("Menu","updateArrivalTime",err);
   }
}

//function called when click of accept icon of departure time of enter building time picker
function updateDepatureTime(pks, valuestable) {
    
   try
   { 
    //success callback of update departure time
    function updateDepatureTime_successcallback() {
        frmEnterBuilding.lblDepatureTime.text = EnteredDepatureTime;
        frmEnterBuilding.show();
    }
    //error callback of update departure time
    function updateDepatureTime_errorcallback() {
        kony.print("inside error of updtae departure");
    }
   // com.kony.Transaction.BuildingVisit.updateByPK(pks, valuestable, updateDepatureTime_successcallback, updateDepatureTime_errorcallback, true);
   com.kony.BuildingVisitScope.BuildingVisit.updateByPK(pks, valuestable, updateDepatureTime_successcallback, updateDepatureTime_errorcallback, true);
   } catch (err) {
        kony.print("Exception in updateDepatureTime is : " + err);
        globalException("Menu","updateDepatureTime",err);
   }
}

//function called when click of accept icon of departure time of current job time picker-Added by Rishika for Enhancement#746
function  updateDepatureTimeCurrentJob(pks, valuestable) {
    
   try
   { 
    //success callback of update departure time
    function updateDepatureTime_successcallback() {
        frmMyJobs.tpMyJobs.lblTargetDepartDate.text = EnteredDepatureTime;
        frmMyJobs.show();
        loadCurrentJob();
        frmMyJobs.tpMyJobs.activeTabs= [3];
    }
    //error callback of update departure time
    function updateDepatureTime_errorcallback() {
        kony.print("inside error of updtae departure");
    }
   // com.kony.Transaction.BuildingVisit.updateByPK(pks, valuestable, updateDepatureTime_successcallback, updateDepatureTime_errorcallback, true);
    com.kony.BuildingVisitScope.BuildingVisit.updateByPK(pks, valuestable, updateDepatureTime_successcallback, updateDepatureTime_errorcallback, true);
   
   } catch (err) {
        kony.print("Exception in updateDepatureTime is : " + err);
        globalException("Menu","updateDepatureTimeCurrentJob",err);
   }
}
/**
 *function called when click of accept icon arrival time of enter building time picker
 */
function onChangeArraivaltime() {
    gblPlannedFrmName = "PlanJobs";
    try {
        var hours = frmTimePicker.lstHr.selectedKeyValue[1];
        var tempHours;
        tempHours = hours;
        /*if (hours == "00") {
            hours = "12";
        }*/

        var mins = frmTimePicker.lstMin.selectedKeyValue[1];
        var apm = frmTimePicker.lblAMPM.text;
        tempTime = hours + ":" + mins + " " + apm
        var dates = getDateObject(); //** Added by ABA(23/2/16) TD#778 Get current datetime througn FFI;
        if(apm== "PM" && parseInt(hours) < 12){
        	tempHours = parseInt(hours) + 12;
        }     
        
		
        var selHours =  frmTimePicker.lstHr.selectedKeyValue[1];
        var selMins  =  frmTimePicker.lstMin.selectedKeyValue[1];
        
        var timeArray = EnteredDepatureTime.split(":");
        var currentHour = timeArray[0];
        /*if(currenthour=="12"){
        	currenthour="00";
        }*/
        var newTime = timeArray[1];
        var ctime = newTime.split(" ");
        var currentminute = ctime[0];
        var campm = ctime[1];

        if(campm== "PM" && parseInt(currentHour) < 12){
        	currentHour = parseInt(currentHour) + 12;
        }

        selHours = convToNum(selHours);
        selMins = convToNum(selMins);
        /*if (selHours == 0) {
            selHours = 12;
        }*/
        
        var tempArrivalTime = tempTime;
		var tempArrivalTimeInSec = checkDepartTimeWithCurrentTime(tempArrivalTime);
		
		var tempDepartTime = EnteredDepatureTime;
		var tempDepartTimeInSec = checkDepartTimeWithCurrentTime(tempDepartTime);
		
		if (tempDepartTimeInSec < tempArrivalTimeInSec)
		{
		  gblPlannedFrmName = "AdditionalJobs";
          otis.ui.Alert(kony.i18n.getLocalizedString("InValidArraivalTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
      	}
		else
		{
		 EnteredArrivalTime = tempTime;
         checkifArrivalAlreadyExists();
		}
        
       /* if(apm == "PM" && selHours<12) selHours = selHours+12;
        //if(apm == "AM" && selHours==12) selHours = selHours-12;  
        var totSelMins = selHours * 60 + selMins;
        var curTotMins = (new Date().getHours())*60 +  currentminute; 
        kony.print("Cur and Total Sel "+curTotMins+"-"+totSelMins); 

        if (campm == "PM" && apm == "AM") {
             EnteredArrivalTime = tempTime;
             checkifArrivalAlreadyExists();
        } else if (campm == "AM" && apm == "PM") {
            gblPlannedFrmName = "AdditionalJobs";
            otis.ui.Alert(kony.i18n.getLocalizedString("InValidArraivalTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
        } else {
            if (tempHours > currentHour) {
                gblPlannedFrmName = "AdditionalJobs";
                otis.ui.Alert(kony.i18n.getLocalizedString("InValidArraivalTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
            } else if (currentHour == tempHours && mins > currentminute) {
                gblPlannedFrmName = "AdditionalJobs";
                otis.ui.Alert(kony.i18n.getLocalizedString("InValidArraivalTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
            } else {
                EnteredArrivalTime = tempTime;
                checkifArrivalAlreadyExists();
            }
        }*/

    } catch (err) {
        kony.print("Exception in Arraival Time updation is : " + err);
        globalException("Menu","onChangeArraivaltime",err);
    }
}

/**
 *function called when click of cross icon arrival time of enter building time picker
 */
function onRejectArraivaltime() {
    gblPlannedFrmName = "PlanJobs";
    frmEnterBuilding.show();
}

/**
 *function called when click of accept icon departure time of enter building time picker
 */
function onChangeDepaturetime() {

    try {
        var hours = frmTimePicker.lstHr.selectedKeyValue[1];
        var tempHours;
        tempHours = hours;
        /*if (hours == "00") {
            hours = "12";
        }*/
        var mins = frmTimePicker.lstMin.selectedKeyValue[1];
        var apm = frmTimePicker.lblAMPM.text;        
        if(apm== kony.i18n.getLocalizedString("lblPM") && parseInt(hours) < 12){
        	tempHours = parseInt(hours) + 12;
        }
        /*var timeArray = EnteredArrivalTime.split(":");
        var currentHour = timeArray[0];*///Chnged 1/10/2015
        /*if(currenthour=="12"){
        	currenthour="00";
        }*/
        
        /*var newTime = timeArray[1];
        var cTime = newTime.split(" ");
        var currentMinute = cTime[0];
        var campm = cTime[1];*/
        if (isEmptyORNullDepart(retEmptyIfNotValid(EnteredArrivalTime))) {
        	kony.print("Do nothing");
        } else {
            var tempArrivalTime = getArrivalandDepaturetime();
            EnteredArrivalTime = tempArrivalTime;
        }
        var tempArrivalTime = EnteredArrivalTime;
		var tempArrivalTimeInSec = checkDepartTimeWithCurrentTime(tempArrivalTime);
		
		var tempDepartTime = hours + ":" + mins + " " + apm;
		var tempDepartTimeInSec = checkDepartTimeWithCurrentTime(tempDepartTime);
		
		if (tempDepartTimeInSec < tempArrivalTimeInSec)
		{
		    gblPlannedFrmName = "AdditionalJobs";
            otis.ui.Alert(kony.i18n.getLocalizedString("InValidDeptTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
        }
		else
		{
		        gblPlannedFrmName = "PlanJobs";
                var depatTime2 = hours + ":" + mins + " " + apm;
                EnteredDepatureTime = depatTime2;
                frmEnterBuilding.lblDepatureTime.text = EnteredDepatureTime;//TD#560
        		frmEnterBuilding.show();
                //checkifDepatureAlreadyExists();
		}
        
        /*if(campm== kony.i18n.getLocalizedString("lblPM") && parseInt(currentHour) < 12){
        	currentHour = parseInt(currentHour) + 12;
        }

        if (campm == kony.i18n.getLocalizedString("lblAM") && apm == kony.i18n.getLocalizedString("lblPM")) {
            gblPlannedFrmName = "PlanJobs";
            var depatTime1 = hours + ":" + mins + " " + apm;
            EnteredDepatureTime = depatTime1;
            checkifDepatureAlreadyExists();
        } else if (campm == kony.i18n.getLocalizedString("lblPM") && apm == kony.i18n.getLocalizedString("lblAM")) {
            gblPlannedFrmName = "AdditionalJobs";
            otis.ui.Alert(kony.i18n.getLocalizedString("InValidDeptTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
        } else {
            if (currentHour > tempHours) {
                gblPlannedFrmName = "AdditionalJobs";
                otis.ui.Alert(kony.i18n.getLocalizedString("InValidDeptTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
            } else if (currentHour == tempHours && currentMinute > mins) {
                gblPlannedFrmName = "AdditionalJobs";
                otis.ui.Alert(kony.i18n.getLocalizedString("InValidDeptTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
            } else {
                gblPlannedFrmName = "PlanJobs";
                var depatTime2 = hours + ":" + mins + " " + apm;
                EnteredDepatureTime = depatTime2;
                checkifDepatureAlreadyExists();
            }
        }*/
    } catch (err) {
        kony.print("Exception in Depature Time updation is : " + err);
        globalException("Menu","onChangeDepaturetime",err);
    }
}

/**
 *function called when click of accept icon departure time of current job time picker-Added by Rishika for Enhancement#746
 */

function onChangeDepaturetimeCurrentJob() {

    try {
        var hours = frmTimePicker.lstHr.selectedKeyValue[1];
        var tempHours;
        tempHours = hours;
        /*if (hours == "00") {
            hours = "12";
        }*/
        var mins = frmTimePicker.lstMin.selectedKeyValue[1];
        var apm = frmTimePicker.lblAMPM.text;        
        if(apm== kony.i18n.getLocalizedString("lblPM") && parseInt(hours) < 12){
        	tempHours = parseInt(hours) + 12;
        }
        var timeArray = EnteredArrivalTime.split(":");
        var currentHour = timeArray[0];
        /*if(currenthour=="12"){
        	currenthour="00";
        }*/
        
        var newTime = timeArray[1];
        var cTime = newTime.split(" ");
        var currentMinute = cTime[0];
        var campm = cTime[1];
        
        var tempArrivalTime = EnteredArrivalTime;
		var tempArrivalTimeInSec = checkDepartTimeWithCurrentTime(tempArrivalTime);
		
		var tempDepartTime = hours + ":" + mins + " " + apm;
		var tempDepartTimeInSec = checkDepartTimeWithCurrentTime(tempDepartTime);
		
		if (tempDepartTimeInSec < tempArrivalTimeInSec)
		{
		 //   gblPlannedFrmName = "AdditionalJobs";
            otis.ui.Alert(kony.i18n.getLocalizedString("InValidDeptTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null)
        }
		else
		{
		    //    gblPlannedFrmName = "PlanJobs";
                var depatTime2 = hours + ":" + mins + " " + apm;
                EnteredDepatureTime = depatTime2;
                checkifDepatureAlreadyExistsCurrentJob();
		}
   } catch (err) {
        kony.print("Exception in Depature Time updation is : " + err);
        globalException("Menu","onChangeDepaturetimeCurrentJob",err);
    }
}
        
/**
 *function called when click of cross icon departure time of enter building time picker
 */
function onRejectDepaturetime() {
    gblPlannedFrmName = "PlanJobs";
    frmEnterBuilding.show();
}

/**
 *function called when click of cross icon departure time of current job time picker-Updated by Rishika to fix Enhancement#746
 */
function onRejectDepaturetimeCurrentJob() {
//    gblPlannedFrmName = "PlanJobs";
    frmMyJobs.show();
    loadCurrentJob();
    frmMyJobs.tpMyJobs.activeTabs=[3];
}


/**
 *function called when click of accept icon of arrival time of depart building time picker
 */
function onChangeDepatArraivaltime() {
    gblPlannedFrmName = "PlanJobs";
    try {
        var hours = frmTimePicker.lstHr.selectedKeyValue[1];
        /*if (hours == "00") {
            hours = "12";
        }*/
        var mins = frmTimePicker.lstMin.selectedKeyValue[1];
        var apm = frmTimePicker.lblAMPM.text;
        tempTime = hours + ":" + mins + " " + apm
        var dates = getDateObject(); //** Added by ABA(23/2/16) TD#778 Get current datetime througn FFI;
        var currenthour = dates.getHours()
        var currentminute = dates.getMinutes()
        if (currenthour > 12) {
            currenthour = currenthour - 12;
        }
        /*if (currenthour == 0) {
            currenthour = 12;
        }*/
        EnteredArrivalTime = tempTime;

        checkifDepatArrivalAlreadyExists();

    } catch (err) {
        kony.print("Exception in Arraival Time updation is : " + err);
        globalException("Menu","onChangeDepatArraivaltime",err);
    }
}

/**
 *function called when click of cross icon of arrival time of depart building time picker
 */
function onRejectDepatArraivaltime() {
    gblPlannedFrmName = "PlanJobs";
    frmDepartBuilding.show();
}

/**
 *function called when click of cross icon of departure time of depart building time picker
 */
function onRejectDepatDepaturetime() {
    gblPlannedFrmName = "PlanJobs";
    frmDepartBuilding.show();
}

/**
 *function called when clicked on 360 icon in app menu
 */
function on360ViewClick() {
    kony.print("!!! Inside on360ViewClick !!!");
    if (gblClickedOne == "Dashboard") {
        isDashboardNotes = true;
    } else {
        isDashboardNotes = false;
    }
    gblPreviousNotes = kony.application.getCurrentForm().id;
    onNotesShow();
    frmNotesTab.imgTravel.src = "";
    //frmNotesTab.show(); //changed by Jignasa
}

/**
 *function called when clicked on 360 icon in app menu for helper job
 */
function on360ViewHelperClick() {
    
    if (gblClickedOne == "Dashboard") {
        isDashboardNotes = true;
    } else {
        isDashboardNotes = false;
    }
    gblPreviousNotes = kony.application.getCurrentForm().id;
    gblJobvisitStatus = false;
    onNotesShow();
    frmNotesTab.imgTravel.src = "";
    //frmNotesTab.show();
}

//unused function
function onSearchClick() {}

/**
 *function called on click of enter building icon in app menu
 */
function onEnterClick() {
	
	try{
		//R12.0 TD#753
		if(!CheckCutOffDateWithCurrentTime(false)){
			return; //As cut off time
		} else {
			kony.print("do nothing as valid time period");
		}
			
		var buildingId;
		gblPreviousEnterBuilding = kony.application.getCurrentForm().id;
		if(gblfromMap){
		  buildingId = gblMapJobList.lblMapBuildingId.text;
		}
	    else if(gblCheckShutdownUnits){
	          buildingId = gblShutdownJob.buildingId;
	          }
	    else if (fromDashboard || isDashboardMoreDetails) {
	       	buildingId = highPriorityJob[currentRecommendedJob]["BuildingId"];
	    } else {
	    	if (frmMyJobs.tpMyJobs.activeTabs == 1) {
	           	buildingId = gblScheduled.lblSchBuildingId.text;
	           	JobConstants.CurrentJobstate = "Building";
	       	} else if (frmMyJobs.tpMyJobs.activeTabs == 2) {
	           	buildingId = gblPartiallyDone.lblParBuildingId.text;           	
	          	JobConstants.CurrentJobstate = "Building";
	       	} else if (frmMyJobs.tpMyJobs.activeTabs == 3) {
	            buildingId = gblCurrentJob.lblCurBuildingId.text;
	            gblCurrentJob["imgCurStatus"].src = "imgbuilding.png";  
	        }
	    }
	    
	       // selectedForm = "frmDetailsNoUnits";
	        var currentFrm = kony.application.getCurrentForm();
	        var previousFrm = kony.application.getPreviousForm();
	        currentFrm.maxAppMenuButtons = 0;
	        previousFrm.maxAppMenuButtons = 0;
	       // setAppMenu();
	        
	        
	        
	    var enterBuildId = null;//getEnteredBuildingId();
	    if(enterBuildId == null || enterBuildId == buildingId ){
	       	showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
			timer.schedule("populateIndicatorEnterBuilding",loadEnterBuilding, 0.001, false);
			//function used to call enter building screen
			function loadEnterBuilding(){
				timer.cancel("populateIndicatorEnterBuilding");
				updateTravelEndTimeToBuildingVisit();
				SetAdditionalJobsData();
				dismissLoadingScreen();
			}
	    }else{
	    	otis.ui.Alert(kony.i18n.getLocalizedString("RestrictEnterBuilding"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
	    }
	       
	    var enterBuildId = getEnteredBuildingId();
	    if(enterBuildId == null){       
	    	kony.store.setItem("timeElapsedCount", 0);
	    }
    } catch (err) {
        kony.print("Exception in onEnterClick() is : " + err);
        globalException("Menu","onEnterClick",err);
    }
}

/**
 *function called on click of filter
 */
function onFilterClick() {
    //loadFilterData();	
    frmSortFilter.radioSort.selectedKey = 4;
	frmSortFilter.maxAppMenuButtons = 2;
	frmSortFilter.cbxSearchType.selectedKey =0;
	frmSortFilter.txtSearchText.text = "";
	setTimerSearchJobByDate();
	//frmSortFilter.calStartPeriod.clear();
	//frmSortFilter.calEndPeriod.clear();
	//frmSortFilter.calSearchDate.clear();
	selectedForm = "frmSortFilter";
	setAppMenu();
    frmSortFilter.show();
    loadFilterFieldsBasedOnSearch();
}
/**
 *function to dismiss popupjob details
 */
function dismissPopJobDetails()
{
	popupJobDetails.dismiss();
}
/**
 *function to dismiss popupjob details
 */
function dismissPopJobUnit()
{
//	popupjobunitno.chkBxUnitNo.selectedKeyValues=[];
	//popupjobunitno.chkBxUnitNo.selectedKeyValues=null;
	popupjobunitno.dismiss();
}
/**
 *function called on click of sort
 */
function onSortClick() {
    //loadFilterData();    
    frmSortFilter.radioSort.selectedKey = 4;
	frmSortFilter.maxAppMenuButtons = 2;
	frmSortFilter.cbxSearchType.selectedKey =0;
	frmSortFilter.txtSearchText.text = "";
	setTimerSearchJobByDate();
	//frmSortFilter.calStartPeriod.clear();
	//frmSortFilter.calEndPeriod.clear();
	//frmSortFilter.calSearchDate.clear();
	selectedForm = "frmSortFilter";
	setAppMenu();
	if (frmMyJobs.tpMyJobs.activeTabs == 0){
    var arrayCmbboxSearchType = new Array();
            arrayCmbboxSearchType.push([0, kony.i18n.getLocalizedString("appMenuSearch")],[1, kony.i18n.getLocalizedString("lblCategoryJob")],
			[2, kony.i18n.getLocalizedString("lblCustomerName")],[3, kony.i18n.getLocalizedString("lblContractsNo")],
			[4, kony.i18n.getLocalizedString("lblAccountNo")],[5, kony.i18n.getLocalizedString("lblNotToExceed")],
			[6, kony.i18n.getLocalizedString("lblScheduledPeriod")],[7, kony.i18n.getLocalizedString("lblLocalUnitNo")],
			[8, kony.i18n.getLocalizedString("lblFilterBuildingAddress")]);
			        }
    else if	((frmMyJobs.tpMyJobs.activeTabs == 1)|| (frmMyJobs.tpMyJobs.activeTabs == 2)){	
     var arrayCmbboxSearchType = new Array();
            arrayCmbboxSearchType.push([0, kony.i18n.getLocalizedString("appMenuSearch")],[1, kony.i18n.getLocalizedString("lblCategoryJob")],
			[2, kony.i18n.getLocalizedString("lblCustomerName")],[3, kony.i18n.getLocalizedString("lblContractsNo")],
			[4, kony.i18n.getLocalizedString("lblAccountNo")],[5, kony.i18n.getLocalizedString("lblNotToExceed")],
			[6, kony.i18n.getLocalizedString("lblPlannedPeriod")],[7, kony.i18n.getLocalizedString("lblLocalUnitNo")],
			[8, kony.i18n.getLocalizedString("lblFilterBuildingAddress")]);
			      }		
			
frmSortFilter.cbxSearchType.masterData = arrayCmbboxSearchType;	
    frmSortFilter.show();
    loadFilterFieldsBasedOnSearch();
    //frmSort.show();
}

/**
 *function called when click on cross of add helper
 */
function onClickRejectHelper() {
	// Td#319 show previous form on helper reject
	var previousFormId=kony.application.getPreviousForm().id;
	if(previousFormId == "frmAdditionalDetailsPan"){
		selectedForm = "frmDetailsNoUnits";
    	frmDetailsPan.maxAppMenuButtons = 0;
    	frmHelper.maxAppMenuButtons = 0;
    	setAppMenu();
    	frmAdditionalDetailsPan.show();
	} else if(previousFormId == "frmNonProductiveJobDetailsPan"){ //R11.0 TD#99
		frmNonProductiveJobDetailsPan.show();
	}
	else{
	    setCreateHelperNoAppmenuitem();
	    frmDetailsPan.show();
    }
}

/**
 *function used for contacts in 360 view
 */
function onCallClick() {
    kony.phone.dial(conNum);
}

/**
 *function used for contacts cancel call in 360 view
 */
function onCancelCallClick() {
	//R10.0 TD#476 - navigate on frmWorkOrderDetail form
	if(gblFromNewJobs || frmMyJobs.tpMyJobs.activeTabs == 1){ //** Added by ABA(11/1/16) TD#356 form show on back btn or cancel click
		
		frmWorkOrderDetail.maxAppMenuButtons = 0;
		selectedForm = "frmWorkOrderDetail";
		setAppMenu(); 
		frmWorkOrderDetail.show();	
		
	} else if(frmMyJobs.tpMyJobs.activeTabs == 2) 
	{ //** Added by ABA(6/1/15) TD#561            
		 frmMyJobs.show();
		 frmMyJobs.tpMyJobs.activeTabs = [2];
		 setAppMenuJobs();
    }else
	{
		//IOS PORTING CHANGES STARTS
		selectedForm = "frmBuildingSearchSelect";
		setAppMenu();
		//IOS PORTING CHANGES ENDS
	   	frmNotesTab.show();
	    frmNotesTab.tpNotes.activeTabs = [3];
    }
}

/**
 *function called when click more details icon of job popup
 */
function detailClickFunc(){

	showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
	timer.schedule("populateIndicator", loadOnDetailsClick, 0.001, false);
	//call function to load job details screen
	function loadOnDetailsClick(){
		timer.cancel("populateIndicator");			
		onDetailClick();
		dismissLoadingScreen();
	}
}

/**
 *function called when click more details icon of job popup 
 */
function onDetailClick() {
    gblfromMap = false;
    checkAndGetLocalJobIdForShutDown();
    gblStartWork = false;
    gblJobvisitStatus = false;	
    gblCurrentDepartCheck = false;
    setpreviousformfordetails();
    popupJobDetails.dismiss();
    Helper.gblHelperCheck = "NormalJob";
    Details.fromadditionaljobs = false;
    gblcheckadditionaljobs = false;
    gblweeklycreatejob = false;
    gblcheckenteradditionaljobs = false;    
    showDetails();
}

/**
 *function called when click more details icon of job popup for helper job
 */
function detailHelperClickFunc(){

	showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
	timer.schedule("populateIndicator", loadDetailHelperClick, 0.001, false);
	//function used to load details tab for helper job
	function loadDetailHelperClick(){
		timer.cancel("populateIndicator");
		onDetailHelperClick();
		dismissLoadingScreen();
	}
}

/**
 *function called when click more details icon of job popup for helper job
 */
function onDetailHelperClick() {
    gblfromMap = false;
    checkAndGetLocalJobIdForShutDown();
    gblStartWork = false;
    gblJobvisitStatus = false;
    gblCurrentDepartCheck = false;
    setpreviousformfordetails();
    popupJobDetails.dismiss();
    Helper.gblHelperCheck = "HelperJob";
    Details.fromadditionaljobs = false;
    gblcheckadditionaljobs = false;
    gblweeklycreatejob = false;
    gblcheckenteradditionaljobs = false;
    showDetails();
}

/**
 *function called when click more details icon of additional job popup
 */
function onDetailAdditionalJobClick() {
    gblStartWork = false;
    popupAdditionalJobDetails.dismiss();
    Helper.gblAdditionalHelperCheck = "NormalJob";
    Details.fromadditionaljobs = false;
    gblcheckadditionaljobs = true;
    gblweeklycreatejob = false;
    gblcheckenteradditionaljobs = false;
    showDetails();
}

/**
 *function called when navigating o details screen from Weekly create job
 */
function onDetailWeeklySummaryCreateJob() {
    kony.print("in details weekly summary");
    gblStartWork = false;
    popupAdditionalJobDetails.dismiss();
    setpreviousformfordetails();
    Helper.gblAdditionalHelperCheck = "NormalJob";
    Details.fromadditionaljobs = false;
    gblcheckadditionaljobs = false;
    gblweeklycreatejob = true;
    fromDashboard = false;
    isDashboardMoreDetails = false;
    fromReports = false;
    OtherJob.unitsAvailableForOtherJob = false;
    var jobid = getWeeklyCreateJobId(gblweekcreatejob.Worktypecode);
    gblweekcreatejob.jobId = "";
    gblweekcreatejob.jobId = jobid;
    kony.print("in details weekly summary job id is "+gblweekcreatejob.jobId);
    gblcheckenteradditionaljobs = false;
    gblfromMap = false;
    showDetails();
}

/**
 *function called when click start work icon of additional job popup
 */
function onDetailAdditionalJobStartClick() {
    gblStartWork = false;
    popupAdditionalJobDetails.dismiss();
    Details.fromadditionaljobs = true;
    gblcheckadditionaljobs = true;
    //gblfromMap = false;
    checkAndGetLocalJobIdForShutDown();
    gblweeklycreatejob = false;
    gblcheckenteradditionaljobs = false;
    showDetails();
}

/**
 *function called when click close out icon of additional job popup
 */
function onDetailAdditionalJobCloseOutClick() {
    gblStartWork = false;
    popupAdditionalJobDetails.dismiss();
    Details.fromadditionaljobs = false;
    gblcheckadditionaljobs = true;
    //gblfromMap = false;
    checkAndGetLocalJobIdForShutDown();
    gblweeklycreatejob = false;
    gblcheckenteradditionaljobs = false;
    showDetails();
}

/**
 *function called when click more details icon of enter building additional job popup
 */
function onDetailEnterAdditionalJobStartClick() {
    gblStartWork = false;
    popupAdditionalJobs.dismiss();
    setpreviousformfordetails();
    Details.fromadditionaljobs = false;
    gblcheckadditionaljobs = false;
    gblweeklycreatejob = false;
    gblcheckenteradditionaljobs = true;
    gblfromMap = false;
    Helper.gblHelperCheck = "NormalJob";
    Helper.gblAdditionalHelperCheck = "NormalJob";
    showDetails();
}

/**
 *function called when click more details icon of additional job popup of helper job
 */
function onDetailAdditionalJobHelperClick() {
    gblStartWork = false;
    popupAdditionalJobDetails.dismiss();
    Helper.gblAdditionalHelperCheck = "AdditionalHelperJob";
    Details.fromadditionaljobs = true;
    gblcheckenteradditionaljobs = false;
    gblfromMap = false;
    gblcheckadditionaljobs = true;
    gblweeklycreatejob = false;
    showDetails();
}

/**
 *function called when click start work icon of additional job popup of helper job
 */
function onDetailAddJobStartWorkHelperClick() {
    gblStartWork = false;
    popupAdditionalJobDetails.dismiss();
    Helper.gblAdditionalHelperCheck = "AdditionalHelperJob";
    Details.fromadditionaljobs = false;
    gblcheckenteradditionaljobs = false;
    gblfromMap = false;
    gblcheckadditionaljobs = true;
    gblweeklycreatejob = false;
    showDetails();
}

/**
 * Function to choose option to sort the Job
 * @returns {} 
 */
function onOptionClick() {
    kony.print("!!! Inside onOptionClick !!!");
    frmMyJobs.txtSearchBuild.text = "";
    frmMyJobs.tpMyJobs.segUnscheduled.removeAll();
    frmMyJobs.tpMyJobs.segScheduled.removeAll();
    frmMyJobs.tpMyJobs.segUnscheduled.setVisibility(true);
    frmMyJobs.tpMyJobs.segScheduled.setVisibility(true);
    frmMyJobs.tpMyJobs.hbxNoRecord.setVisibility(false);
    frmMyJobs.tpMyJobs.hbxSchNoRecord.setVisibility(false);
    isFilterSearchDone = false;
    setMyJobsData();
	frmMyJobs.tpMyJobs.lblNoRecords.text = kony.i18n.getLocalizedString("lblNomatchingrecordsfound");
	frmMyJobs.tpMyJobs.lblSchNoRecords.text = kony.i18n.getLocalizedString("lblNomatchingrecordsfound");
	frmMyJobs.tpMyJobs.lblParNoRecords.text = kony.i18n.getLocalizedString("lblNomatchingrecordsfound");
	
	setCurrentFormFocus();
}

/**
 * Function to update time while click on start service app menu.
 * @returns {} 
 */
function onStartServiceCallClick() {
	getDateTimeVersionfromserver(); //R11.2 TD#716
	loadserviceproviderData();//R12.0 TD#745
}

//R11.2 TD#716
function onStartServiceaftercheckingVersionanddatetime(infoMessage) {
	try {
		if( !gblVersionCheck ) {
			//R11.2 TD#766
			otis.ui.Alert(infoMessage, onOkAppClose, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
				
	    }else{
			//Navin	
			//var LocationTogglerObject = new LocationToggleTracker.LocationToggler();	
			//var returnedValue = LocationTogglerObject.isEnabled();
			var returnedValueDev = AccessLocationServices.isGpsEnabled();
			var returnedValueApp = AccessLocationServices.isGpsEnabledInApp();	
			var employeeName = kony.store.getItem("DisplayName");
			/*TD#1904 - Logic to handle mechanic names which are not in expected format*/
			var indexOfComma = employeeName.indexOf(",");
			kony.print("employeeName - "+employeeName+", indexOfComma - "+indexOfComma);
			if(indexOfComma >= 0)
			{
				employeeName = employeeName.split(",");
				employeeName = employeeName[1];	
			}
			else
			{
				kony.print("Do nothing");
			}
			employeeName = retEmptyIfNotValid(employeeName);
			/*TD#1904 - END*/
			popupStartService.lblMechanicName.text = "Hello, "+employeeName;
			if(returnedValueDev && returnedValueApp)
			{
				locationOnData();
			}
			else
			{
				if(returnedValueDev && !returnedValueApp){
				  	locationOffData();
				}else{
				  	locationOffDataDev();
				}	
			}
			popupStartService.show();	
		}
	} catch (e) {
		kony.print("Exception in onStartServiceaftercheckingVersionanddatetime + "+e)// todo: handle exception
		globalException("Menu.js", "onStartServiceaftercheckingVersionanddatetime", e);
	}
}

function onClickOKinPopupStartService() {
/*
Commmented by Navin	
	popupStartService.dismiss();
	getBadgeCountFromMF();
	updateServiceTime("Start");
	//R4 - Employee current location (geo code stamping) at event - Start Service
	updateEmployeeStatus("Start Service");
	navigateToLocationServices();
Previous Logic ends here
*/	
	
	//Navin
	try
	{
		showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
		popupStartService.dismiss();
		//var LocationTogglerObject = new LocationToggleTracker.LocationToggler();	
		//var returnedValue = LocationTogglerObject.isEnabled();
		var returnedValueDev = AccessLocationServices.isGpsEnabled();
		var returnedValueApp = AccessLocationServices.isGpsEnabledInApp();
		kony.print("returnedValueDev ::"+returnedValueDev);
		kony.print("returnedValueApp ::"+returnedValueApp);
		if(returnedValueDev && returnedValueApp)
		{
			//R8.0-TD#133 implementation
			kony.store.setItem("isLunchBreakOn", false);
			
			setPushNotifications();//TD#1733

			getBadgeCountFromMF();
			updateServiceTime("Start");
			//R4 - Employee current location (geo code stamping) at event - Start Service
			updateEmployeeStatus("Start Service");
			if(frmDashboard.lblRecommended.text==locationOffMsg)//i18 -- To show recommended jobs if location is turned on after sync
			{				
				//showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));	// it will be dismissed in function calculateDeviceCoordinates_ErrorCallback
				showRecommendedJobs();				
			}
			else
			{
				//do nothing since location is on from start			
			}
		}
		else
		{
			if(returnedValueDev == true && returnedValueApp == false){
				kony.print("111111111");
			   navigateToLocationServices();	
			}else{
				kony.print("22222222");
			}
		}	
		dismissLoadingScreen();
	}
	catch (e)
	{
		dismissLoadingScreen();// todo: handle exception
		kony.print("Exception in onClickOKinPopupStartService -- "+e);
	}
	//ends here
}

/**
 * function to validate pending calls before start service
 * TD#1780
 */
function checkPendingCalls()
{
	try 
	{
		getBadgeCountFromMF();
		var callCount = gblNewJobCount;//kony.store.getItem("setServicecallsCount");
		callCount = retEmptyIfNotValid(callCount);
		if(callCount != "" && parseInt(callCount) > 0)
		{
			kony.ui.Alert(kony.i18n.getLocalizedString("stopServiceCallCheck"), stopServiceAlertHandler,constants.ALERT_TYPE_CONFIRMATION,kony.i18n.getLocalizedString("stopServiceButton"),kony.i18n.getLocalizedString("returnToNewJobs"),kony.i18n.getLocalizedString("InfoMessage") , null);
		}
		else
		{
			beforeStopServices();// Proceed to stop service if no pending calls are present
		}
		
		/**
		 * stopServiceAlertHandler - handler for stop service check open calls validation 
		 * @param {} response {boolean returned by alert response}
		 * @returns {} 
		 */
		function stopServiceAlertHandler(response)
		{
			try 
			{
				if(response)
				{
					beforeStopServices();// Proceed to stop service if user clicks on Stop service button
				}
			    else
				{
					processPushNotification(response);// This function navigates to New Jobs screen in case user click on View button
				}
			} 
			catch (e) 
			{
				beforeStopServices();
				globalException("menu.js","stopServiceAlertHandler",e);
				kony.print("Exception inside stopServiceAlertHandler - "+e);// todo: handle exception
			}
		}
	} 
	catch (e) 
	{
		beforeStopServices();
		globalException("menu.js","CheckPendingCalls",e);
		kony.print("Exception inside CheckPendingCalls - "+e);// todo: handle exception
	}
}


/**
 * Function to update time while click on stop service app menu.
 * @returns {} 
 */
function onStopServiceCallClick(eventType) {
	try {
		//R8.0-TD#133 implementation
		kony.print("gblLocationServicesStatus while stoping service: "+gblLocationServicesStatus);
		popupStopService.dismiss();
		//R4 - Employee current location (geo code stamping) at event - Stop Service
		
		//Td#1733 - Notification will be pushed to devices only when (Tech Tool) service is started	
		deRegisterPushNotifications();
	
		updateEmployeeStatus(eventType); //("Stop Service");
		gblFromStopService = true;
		
		if(eventType == "Break"){
			kony.store.setItem("isLunchBreakOn", true);
			var gblLunchBreakStartTime = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
			kony.store.setItem("gblLunchBreakStartTime", JSON.stringify(gblLunchBreakStartTime));	
		} else {
			kony.print("do nothing");
		}
		//** Added by ABA(16/09/16) TD#1238 Truncate unit history data on stop service 
		if(eventType == "Stop Service"){
			truncateUnitHistoryTable();
		}else{
			kony.print("do nothing");
		}
		//** End
		syncForStopService = true;// TD#280 
		gblSyncForEttReview = false;//TD#1736 flag to handle eTT review sync flow
		//onSyncClick();
		callGetPendingUploads();//TD#1427
		/** TD#280 update service time and navigate to location service
		*	only when ayto sync is not in progress
		*	else this code snippet will be called in auto sync success callback
		* 	SyncApiEventsInt.js function name: syncSuccess
		*/
		/**if(signOnGlobal.isSyncCompleted){ 
			syncForStopService = false;
			isSyncForStopServiceDone = false;*/
			updateServiceTime("Stop");
			//navigateToLocationServices();
		//}
	}
	catch(error){
		kony.print("In onStopServiceCallClick(), error = "+error);
	}
}

function beforeStopServices() {
	try 
	{
		var employeeName = kony.store.getItem("DisplayName");
		/*TD#1904 - Logic to handle mechanic names which are not in expected format*/
		var indexOfComma = employeeName.indexOf(",");
		kony.print("employeeName - "+employeeName+", indexOfComma - "+indexOfComma);
		if(indexOfComma >= 0)
		{
			employeeName = employeeName.split(",");
			employeeName = employeeName[1];	
		}
		else
		{
			kony.print("Do nothing");
		}
		employeeName = retEmptyIfNotValid(employeeName);
		/*TD#1904 - END*/
		popupStopService.lblMechanicName.text = employeeName+",";
		popupStopService.show();
	}
	catch(err)
	{
		kony.print("error in beforeStopServices " + err);
		globalException("menu.js","beforeStopServices",err);
	}
}


/**
 *function called when click on create task icon
 */
function onAddTaskClick() {
	frmDetailsPan.maxAppMenuButtons = 0;
	frmCreateTask.maxAppMenuButtons = 0;
	checkNumberofCompletedJobs();
    if(WorkTypeConfig.restrictToOneTaskFlag && gblTotalTasks!=0)
    {
     otis.ui.Alert(kony.i18n.getLocalizedString("lblNotAllowToAddTask"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
	 return;
    }
    else
    {
      loadCreateTaskDetails();
    }
}

/**
 *function called when click on create job icon
 */
function onAddJobClick() {
    createjobweekly = false;
    frmDetailsPan.maxAppMenuButtons = 0;
    //frmCreateJob.maxAppMenuButtons = 0;
    kony.print("onAddJobClick")
    frmTimeSheetDaySummary.tbpDaySummary.segTimeSheetDaily.selectedIndex = null
    setWorkDateComboData()
    loadcreateJobdetails();
     
}

/**
 *function called when clicked on craete job function of timesheet weekly
 */
function onAddJobClickWeekly() {
    createjobweekly = true;
    kony.print("onAddJobClickWeekly");
    frmTimesheetItalyWeekly.maxAppMenuButtons = 0;
    frmCreateJob.maxAppMenuButtons = 0;
    //frmTimeSheetDaySummary.tbpDaySummary.segTimeSheetDaily.selectedIndex = null
    setWorkDateComboData()
    loadcreateJobdetails();
    
}

/**
 *function called when clicked on craete job function of timesheet daily
 */ 
/* function onAddJobClickDaily(selectedJobType) { //R11.0 TD#99
	createjobweekly = true;
    kony.print("onAddJobClickDaily")
    frmTimeSheetDaySummary.tbpDaySummary.segTimeSheetDaily.selectedIndex = null
    setWorkDateComboData()
    loadcreateJobdetails(selectedJobType); //R11.0 TD#99
    
} */

/**
 *function called when clicked on craete job function of timesheet daily
 */
function onAddSafetyJobClickDaily() { //R11.0 TD#99
	try {
		gblArrivalTimeCheck = true;
		kony.print("onAddSafetyJobClickDaily()");
		//R12.0 TD#753
		if(!CheckCutOffDateWithCurrentTime(false)){
			return; //As cut off time
		} else {
			kony.print("do nothing as valid time period");
		}
			
	    createjobweekly = true;
	    kony.print("onAddJobClickDaily");
	    frmTimeSheetDaySummary.tbpDaySummary.segTimeSheetDaily.selectedIndex = null;
	    setWorkDateComboData();
	    gblJobTypeForNonProductiveJob = "99K";
	    
	    loadcreateJobdetails(); //R11.0 TD#99
	} catch(error){
		kony.print("Exception in onAddSafetyJobClickDaily(), error = "+error);
	}
    
}

/**
 *function called when clicked on craete job function of timesheet daily
 */
function onAddRouteJobClickDaily() { //R11.0 TD#99
	try {
		gblArrivalTimeCheck = true;
		kony.print("onAddRouteJobClickDaily()");
		//R12.0 TD#753
		if(!CheckCutOffDateWithCurrentTime(false)){
			return; //As cut off time
		} else {
			kony.print("do nothing as valid time period");
		}
	
	    createjobweekly = true;
	    kony.print("onAddJobClickDaily")
	    frmTimeSheetDaySummary.tbpDaySummary.segTimeSheetDaily.selectedIndex = null
	    setWorkDateComboData();
	    gblJobTypeForNonProductiveJob = "Route";
	    var isRouteAssigned = checkRouteAssignedValidation();
	    if(isRouteAssigned){
	    	loadcreateJobdetails(); //R11.0 TD#99
	    } else {
	    	kony.print("do nothing");
	    }
	    
	} catch(error){
		kony.print("Exception in onAddSafetyJobClickDaily(), error = "+error);
	}
    
}

/**
 * Function to add time from Details.
 * Currently this function is not using.
 * @returns {} 
 */
function onAddDetailsClick() {

    frmAddTime.lblAddTime.text = "Add Time";
    //frmAddTime.cbxSelectMechanic.masterData = ListofMechanice;
    selectedForm = "frmAddTime";
     //R12.3.1 TD#1091
	frmAddTime.maxAppMenuButtons = 2;
    setAppMenu();
    populateRateCode();
    frmAddTime.show();
}


/**
 * Function to Reject the Add/Edit Time. 
 * @returns {} 
 */
function onRejectTimeClick() {
	if(!gblIsEventHandlingInProgress){ //R11.2 TD#659
		setgblIsEventHandlingInProgress();
		
	    if(fromDashBuild360 || scheduledBundleOMMS)
	    {
		    frmMiniDetailsPan.maxAppMenuButtons = 1;
	   		selectedForm = "frmAddTimeBundleOMMS";
	   		setAppMenu();
	   		frmMiniDetailsPan.show();
	    }
	    else
	    {
		//TD#319 show appropriate form on rejecting Time
	    	if(kony.application.getPreviousForm().id == "frmAdditionalDetailsPan"){
	    		frmAdditionalDetailsPan.show();
	    	} else if(kony.application.getPreviousForm().id == "frmNonProductiveJobDetailsPan"){ //R11.0 TD#99
	    		frmNonProductiveJobDetailsPan.show();
	    	} else {
	    		frmDetailsPan.show();	
	    	}	
		    selectedForm = "frmDetailsAddTime";
		    setAppMenu();
	    }
	 }else { //R11.2 TD#659
		kony.print("do nothing");
	}
}

/**
 * Function to Reject the Edit Time - TD#418 this function is called onrejecting Edit time screen
 * @returns {} 
 */
function onRejectEditTimeClick() { 
	if(!gblIsEventHandlingInProgress){ //R11.2 TD#659
		setgblIsEventHandlingInProgress();
		
	    if(fromDashBuild360 || scheduledBundleOMMS)
	    {
		   // frmMiniDetailsPan.maxAppMenuButtons = 0;
//	   		selectedForm = "frmAddTimeBundleOMMSWithTimeEntry";
//	   		setAppMenu();
//	   		frmMiniDetailsPan.show();
			//kony.print("scheduledBundleOMMS ::Reject "+scheduledBundleOMMS +"fromDashBuild360 ::"+fromDashBuild360+"gblIsAdditionalRepairAndOpenOrder is ::"+gblIsAdditionalRepairAndOpenOrder);
//			if((scheduledBundleOMMS || fromDashBuild360) && !gblIsAdditionalRepairAndOpenOrder)
//			{
//				frmMiniDetailsPan.maxAppMenuButtons = 1;
//				selectedForm = "frmAddTimeBundleOMMS";
//				setAppMenu();
//				frmMiniDetailsPan.show();
//			}
//			else
//			{
//				frmMiniDetailsPan.maxAppMenuButtons = 0;
//				selectedForm = "frmAddTimeBundleOMMSWithTimeEntry";
//				setAppMenu();
//				frmMiniDetailsPan.show();
//			}
			if(appmenuStatus == "frmAddTimeBundleOMMS"){
				frmMiniDetailsPan.maxAppMenuButtons = 1;
				selectedForm = "frmAddTimeBundleOMMS";
				setAppMenu();
				frmMiniDetailsPan.show();
			}else if(appmenuStatus == "frmAddTimeBundleOMMSWithTimeEntry"){
				frmMiniDetailsPan.maxAppMenuButtons = 0;
				selectedForm = "frmAddTimeBundleOMMSWithTimeEntry";
				setAppMenu();
				frmMiniDetailsPan.show();
			
			}


	    }
	    else
	    {
			// TD#319 showing appropriate form on rejecting edit time
	    	if(kony.application.getPreviousForm().id == "frmAdditionalDetailsPan"){
	    		frmAdditionalDetailsPan.show();
	    	} else if(kony.application.getPreviousForm().id == "frmNonProductiveJobDetailsPan"){ //R11.0 TD#99
	    		frmNonProductiveJobDetailsPan.show();
	    	} else {
	    		frmDetailsPan.show();
	    	}	
		    selectedForm = "frmDetailsAddTime";
		    setAppMenu();
	    }
	}else { //R11.2 TD#659
		kony.print("do nothing");
	}
}

//Action upon clicking on tick on AddExpense Form
function onAddExpenseClick() {
	kony.print("in onaddexpenseclick");
    frmActionAddExpense_onClick_seq.call(this);
}

//Action upon clicking on tick on EditExpense Form
function onEditExpenseClick() {
kony.print("in onEditExpenseClick");
    frmActionEditExpense_onClick_seq.call(this);
}

//Form navigation upon canceling AddExpense Operation
function onCancelAddExpenseClick() {
	if(!gblIsEventHandlingInProgress){ //R11.2 TD#659
		setgblIsEventHandlingInProgress();
		
	    setNoAppmenuExpenses();
	    // TD#319 showing appropraite form on cancelling expenses screen
	    if(kony.application.getPreviousForm().id == "frmAdditionalDetailsPan"){
	    	frmAdditionalDetailsPan.show();
	    } else if(kony.application.getPreviousForm().id == "frmNonProductiveJobDetailsPan"){ //R11.0 TD#99
	    	frmNonProductiveJobDetailsPan.show();
	    } else  {
	    	frmDetailsPan.show();
	    }
	    frmAddEditExpense.maxAppMenuButtons = 2;                
	    //selectedForm = "frmDetailsAddExpenses";
	    //setAppMenu();
	}else { //R11.2 TD#659
		kony.print("do nothing");
	}
}

//Form navigation upon canceling AddExpenseForNonProductiveJobs Operation
function onCancelAddExpenseForNonProductiveJobsClick() {
//alert("TODO");
    kony.print("on cancel report expenses");
	frmTimeSheetDaySummary.maxAppMenuButtons= 2;
	frmTimeSheetDaySummary.tbpDaySummary.activeTabs = [1];
	frmTimeSheetDaySummary.show();
	selectedForm = "frmTimeSheetExpenseDaySummaryForNonProductiveJobs";
	setAppMenu();
}

//Form navigation upon canceling EditExpense Operation
function onCancelEditExpenseClick() {// TD#319 showing appropriate form on cancelling edit expense screen
	if(!gblIsEventHandlingInProgress){ //R11.2 TD#659
		setgblIsEventHandlingInProgress();
		
		if(kony.application.getPreviousForm().id == "frmAdditionalDetailsPan"){
			frmAdditionalDetailsPan.maxAppMenuButtons = 1;
			frmAdditionalDetailsPan.tpDetails.activeTabs = [3]
	    	frmAdditionalDetailsPan.show();
		} else if(kony.application.getPreviousForm().id == "frmNonProductiveJobDetailsPan"){ //R11.0 TD#99
			frmNonProductiveJobDetailsPan.maxAppMenuButtons = 1;
			frmNonProductiveJobDetailsPan.tpDetails.activeTabs = [3]
	    	frmNonProductiveJobDetailsPan.show();
		} else if(kony.application.getPreviousForm().id == "frmDetailsPan"){ //TD#659
			frmDetailsPan.maxAppMenuButtons = 1;
			frmDetailsPan.tpDetails.activeTabs = [5]//TD#197
		    frmDetailsPan.show();
	    }   
    }else { //R11.2 TD#659
		kony.print("do nothing");
	}
}

/**
 *function called when click on add helper
 */
function onDetailsAddHelper() {
    goAddMechanic();
}

//Action upon clicking on AddExpense.
function onDetailsAddExpenses() {
    expenseAddFormAction();
}

/**
 * Function to open Add Time screen from details.
 * @returns {} 
 */
function onDetailsAddTime() {
openAddTime();
}

/**
 * Functionto load the list of Units in the Building
 * to Add/Change. 
 * @returns {} 
 */
function onDetailsAddUnit() {
	var worktypeCode;
	var retObj = retrieveDetails();
	worktypeCode = retObj["WorkTypeCode"];        
    if(worktypeCode == kony.i18n.getLocalizedString("JobTypeSc") || worktypeCode == kony.i18n.getLocalizedString("JobTypeMNT")){
	    otis.ui.Alert(kony.i18n.getLocalizedString("lblNotAllowToAddUnit"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
		return;
	} else {
		 onAddUnitClick();
	}
}

/**
 * Function to open search material screen to add material in details.
 * @returns {} 
 */
function onDetailsAddMaterial() {
    frmSearchMaterial.maxAppMenuButtons = 2; 
    selectedForm = "frmDetailsSearchMaterial";
    setAppMenu();    
    frmSearchMaterial.txtSearchMaterial.placeholder = kony.i18n.getLocalizedString("frmSearchMaterial.txtSearchMaterial.placeholder");
    frmSearchMaterial.show();
}

//Shows loadingScreen and shows PlaceMaterialOrder screen.
function onPlaceOrderAppMenuClick() {    
    selectedForm = "frmPlaceMaterialOrder";
    setAppMenu();
    showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
	timer.schedule("populateIndicator", loadPlaceOrder, 0.001, false);
    //Dismisses loadingScreen and shows PlaceMaterialOrder screen.
	function loadPlaceOrder()
	 {
	  timer.cancel("populateIndicator");
	  initPlaceMaterialOrder();
	  dismissLoadingScreen();
	 }    
}

//Loads LocalPurchase screen
function onDetailsSearchMaterial() {
    selectedForm = "frmAddMaterial";
    setAppMenu();
    frmAddMaterial.show();
}

//Function upon clicking cancel in LocalPurchase screen
function onClickRejectMaterial() {
	frmSearchMaterial.txtSearchMaterial.placeholder = kony.i18n.getLocalizedString("frmSearchMaterial.txtSearchMaterial.placeholder");
    frmSearchMaterial.show();
    frmSearchMaterial.maxAppMenuButtons = 2; 
    selectedForm = "frmDetailsSearchMaterial";
    setAppMenu();
}

//Function invoked when technician clicks on 'ok' when adding a local purchase.
function onClickAcceptMaterial() {
    onClickAddMaterial();
}

/**
 * Function call on Click of App Menu Reject
 * in frmAddUnit form. 
 * @returns {} 
 */
function onClickRejectUnit() {

    frmDetailsPan.show();
    selectedForm = "frmDetailsAddUnit";
    setAppMenu();
}

/**
 * Function call on after selecting the Units
 * for Add.
 * @returns {} 
 */
function onClickAcceptAddUnit() {
    callUpdateUnitsList();
}

/**
 * Function call on after selecting the Units
 * for Change.
 * @returns {} 
 */
function onClickAcceptChangeUnit() {
    callUpdateChangedUnitList();
}

/**
 *function called when click on accept task creation
 */
function onClickAcceptTask() {
    insertTaskDetails();
}

/**
 *function called when click on reject task creation
 */
function onClickRejectTask() {
    frmDetailsPan.show();
}

/**
 *function called when click on accept of create job
 */
function onClickAcceptCreateJob() {
	
		gbFromMyjobs=false;
		insertjobdetails();
	    
}

/**
 *function called when click on accept of shut down create job
 */
function onClickAcceptShutDownCreateJob() {
    createShutDownUnitsJob();
}

/**
 *function called when click on cross of shut down create job
 */
function onClickRejectShutDownCreateJob() {
    frmShutdownUnitsList.show();
}

/**
 *function called when click on cross of create job
 */
function onClickRejectCreateJob() {
	popupjobunitno.dismiss();
	frmCreateJob.maxAppMenuButtons = 0;
	if(frmCreateJob.LblHiddenPreviousForm.text=="frmTimeSheetWeekly")
	{
		frmTimeSheetWeekly.show();
	}else if (frmCreateJob.LblHiddenPreviousForm.text=="frmTimeSheetDaily")
	{
		frmTimeSheetDaily.show();
	}else if (frmCreateJob.LblHiddenPreviousForm.text=="frmTimesheetItalyWeekly")
	{
		frmTimeSheetDaySummary.tbpDaySummary.segTimeSheetDaily.selectedIndex = null;
		selectedForm = "frmReportsCompletedJobsCreateJob";
		setAppMenu();
		frmTimesheetItalyWeekly.maxAppMenuButtons = 0;
		frmTimesheetItalyWeekly.show();
	}else if (frmCreateJob.LblHiddenPreviousForm.text=="frmTimeSheetDaySummary")
	{
		loadTimeSheetDataSummary(gblSelectedDate);
	}
	else if(frmCreateJob.LblHiddenPreviousForm.text=="frmDetailsPan")
	{
		frmDetailsPan.show();
	}
}

/**
 *function called when click on accept of depart time picker
 */
function onAcceptDepartReason(){
	frmDepartReason.show();
}

/**
 *function called when click on cross of depart time picker
 */
function onRejectDepartReason(){
	frmDetailsPan.show();
}

//Setting the appMenu upon clicking OK in Expenses screen.
function onClickAcceptExpenses() {
    //callUpdateUnitsList();
    selectedForm = "frmDetailsAddExpenses";
    setAppMenu();
}

/**
 * Function call on App Menu Accept in the 
 * frmAddTime form.
 * @returns {} 
 */
function onClickAcceptTime() 
{
    kony.print("in onClickAcceptTime");
    //callUpdateUnitsList();
    selectedForm = "frmDetailsAddTime";
    setAppMenu();
}

//Setting the appMenu upon clicking Reject in Expenses screen.
function onClickRejectExpenses() {// TD#319 shwoing appropriate screen on rejecting expenses
	if(kony.application.getPreviousForm().id == "frmAdditionalDetailsPan"){
    	setAdditionalRONoAppmenuExpenses();
    	frmAdditionalDetailsPan.show();
    } else if(kony.application.getPreviousForm().id == "frmNonProductiveJobDetailsPan"){ //R11.0 TD#99
    	setNonProductiveNoAppmenuExpenses();
    	frmNonProductiveJobDetailsPan.show();
    } else {
    	setNoAppmenuExpenses();
    	frmDetailsPan.show();
    }	
    frmAddEditExpense.maxAppMenuButtons = 2;                
    //selectedForm = "frmDetailsAddExpenses";
    //setAppMenu();

}

//Function upon clicking Cancel in SearchMaterial
function onClickRejectSearchMaterial() {
    frmDetailsPan.show();
}

//Setting the appMenu upon clicking Reject in PlaceOrderSearchMaterial screen.
function onClkRejPlaceOrdSearchMaterial() {
    selectedForm = "frmPlaceMaterialOrder";
    setAppMenu();
    frmPlaceMaterialOrder.show();
}

/**
 * Function to Reject Addtime.
 * @returns {} 
 */
function onClickRejectTime() {//TD#319 showing appropriate screen on rehecting time
	if(kony.application.getPreviousForm().id == "frmAdditionalDetailsPan"){
		frmAdditionalDetailsPan.show();
	} else if(kony.application.getPreviousForm().id == "frmNonProductiveJobDetailsPan"){ //R11.0 TD#99
		frmNonProductiveJobDetailsPan.show();
	} else {
    	frmDetailsPan.show();
    }	
    selectedForm = "frmDetailsAddTime";
    setAppMenu();
}

/**
 *function called when click on accept icon of add note screen
 */
function onAddNoteClick() {
    addNote();
}

/**
 *function called when click on cancel icon of add note screen
 */
function onCancelNoteClick() {
    frmNotesTab.show();
}

/**
 *function called when click on 360 app menu in AtBuilding screen
 */
function onViewClick() {
	kony.print("!!! Inside onViewClick !!!");
    isDashboardNotes = false;
    gblClickedOne = "AtBuilding";
    gblPreviousNotes = kony.application.getCurrentForm().id;
    onNotesShow();
}

//function called when click on enter building icon to check if user already entered building
function onEnterBuildClick() {
	try {
		kony.print("onEnterBuildClick()");
		//R12.0 TD#753
		if(!CheckCutOffDateWithCurrentTime(false)){
			return; //As cut off time
		} else {
			kony.print("do nothing as valid time period");
		}
			
		var buildingId;
		gblPreviousEnterBuilding = kony.application.getCurrentForm().id;
		kony.print("gblCheckShutdownUnits is "+gblCheckShutdownUnits);
		if(gblCheckShutdownUnits){
	          buildingId = gblShutdownJob.buildingId;
	          }
	    else if (fromDashboard || isDashboardMoreDetails) {
	        buildingId = highPriorityJob[currentRecommendedJob]["BuildingId"];
	    } else {
		    if (frmMyJobs.tpMyJobs.activeTabs == 1) {
		         buildingId = gblScheduled.lblSchBuildingId.text;
		    } else if (frmMyJobs.tpMyJobs.activeTabs == 2) {
		         buildingId = gblPartiallyDone.lblParBuildingId.text;
		    }
	    }
	    
	    kony.print("buildingId is "+buildingId);
	    var enterBuildId = null;//getEnteredBuildingId();
	
	    if(enterBuildId == undefined || enterBuildId == null || enterBuildId == buildingId ){
	        showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
			timer.schedule("populateIndicator", loadEnterBuildingscreen, 0.001, false);
			//function used to call enter building screen	
			function loadEnterBuildingscreen(){
				timer.cancel("populateIndicator");
				gblStartWork = true;
				updateTravelEndTimeToBuildingVisit();
	    	    SetAdditionalJobsData();
				dismissLoadingScreen();
			}
	   	}else{
	   		otis.ui.Alert(kony.i18n.getLocalizedString("RestrictEnterBuilding"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
	    }
	} catch (err) {
        kony.print("Exception in onEnterBuildClick function : " + err);
        globalException("Menu", "onEnterBuildClick", err);
    }  
}

//Change the Images based on the previous Form in JHA Screen.
function onJHAClick() {
	try
	{
		selectedForm = "frmDetailsNoUnits";
	    var currentFrm = kony.application.getCurrentForm();
	    var previousFrm = kony.application.getPreviousForm();
	    currentFrm.maxAppMenuButtons = 0;
	    previousFrm.maxAppMenuButtons = 0;
	    frmNotesTab.maxAppMenuButtons = 0;
	    setAppMenu();
	    selectedForm = "frmJHA";
	    setAppMenu();   
	    frmJHASurveyTab.maxAppMenuButtons = 2;
	    frmJHASurveyTab.show();
	    jhaPerformedUl=true;
	    jhaFlagUl=1;
	    var prevForm = kony.application.getPreviousForm().id;
	    glbPrevFrmForJHASurvey = prevForm;
	    if(prevForm == "frmDetailsPan"){
	        //frmJHASurveyTab.imgTravel.setVisibility(true);
	        //frmJHASurveyTab.imgTravel.src = "atwork.png";     
	        if(gblcheckadditionaljobs){     
	            if(fromDashboard || isDashboardMoreDetails){
	                //frmJHASurveyTab.imgTravel.setVisibility(false);
	            }else if(fromReports){
	                if(signOnGlobal.isJobCompleted){
	                    //frmJHASurveyTab.imgTravel.setVisibility(false);
	                }   
	            }else{   
	                if(gblStartWork){
	                    //frmJHASurveyTab.imgTravel.setVisibility(true);
	                }else{
	                    //frmJHASurveyTab.imgTravel.setVisibility(false);
	                }
	            }   
	         }else if(fromDashboard || isDashboardMoreDetails){
		        //frmJHASurveyTab.imgTravel.setVisibility(false);
		     }else if(fromReports){
		        if(signOnGlobal.isJobCompleted){
		            //frmJHASurveyTab.imgTravel.setVisibility(false);
		        }   
		     }else{   
		        if(gblStartWork){
		            //frmJHASurveyTab.imgTravel.setVisibility(true);
		        }else{
		            //frmJHASurveyTab.imgTravel.setVisibility(false);
		        }
		     }
	     }else {
	        //frmJHASurveyTab.imgTravel.setVisibility(true);
	        //frmJHASurveyTab.imgTravel.src = "imgbuildingsmall.png";
	     }
	
	    initJHA();
	}
	catch (e)
	{
		kony.print("Exception in onJHAClick -- "+e);// todo: handle exception
	}
}

/**
 * Function to start work.
 * @returns {} 
 */
 function onStartWorkClick() {
	try
	{
		kony.print("Inside onStartWorkClick");
		
		//R12.0 TD#753
		if(!CheckCutOffDateWithCurrentTime(false)){
			return; //As cut off time
		} else {
			kony.print("do nothing as valid time period");
		}
		
		/*TD#670 for recording onStartWorkClick transaction start time*/
		//R12.3.4 (29/06/16)
		isStartWorkTransactionInProgress = true;
		var temTime = getDateandTimeinMMDDYYYFormat();
		kony.print("Transaction onStartWorkClick start time -->" + temTime)
		kony.store.setItem("storeTransStartTime", temTime);//Storing Start time for further use
		/*TD#670 END*/
		//R10.1 TD#239 - commented code, moved in to onStartWorkClickLoadingdata()
		/*selectedForm = "frmDetailsNoUnits";
	    var currentFrm = kony.application.getCurrentForm();
	    var previousFrm = kony.application.getPreviousForm();
	    currentFrm.maxAppMenuButtons = 0;
	    previousFrm.maxAppMenuButtons = 0;
	    setAppMenu(); */
	        
	 	showLoadingScreen(kony.i18n.getLocalizedString("msgLoading"));
	    timer.schedule("populateIndicatorStartWork", loadonStartWorkClick, 0.001, false);
	    //function used to call enter building screen
	    function loadonStartWorkClick() {
	        timer.cancel("populateIndicatorStartWork");
	        onStartWorkClickLoadingdata();
	        dismissLoadingScreen();
	    } 
	}
	catch (e)
	{
		kony.print("Exception in onStartWorkClick -- "+e);// todo: handle exception
	}
}


//** Added by ABA(29/9/15) on accept change SC Arrival time
function onSCArrivalTimeAccept()
{
	try{
		gblCheckServiceCallArrivalTime = false; //** added by ABA(29/9/15) TD#350
		frmDetailsPan.tpDetails.activeTabs = [6]; // TD#197 removing material tab
		frmDetailsPan.show();

	}catch(err)
	{
		kony.print("Exception in onSCArrivalTimeAccept " + JSON.stringify(err));
	}
}
//** End
/**
 * Function to start work loading function.
 * @returns {} 
 */    
function onStartWorkClickLoadingdata() {
    /*
     * Forcing a user to perform JHA if a JHA hasn't been submitted for any Unit.
     */
     //alert("in onStartWorkClickLoadingdata()");
     try{   
    
     		otis.ui.Alert(kony.i18n.getLocalizedString("msgJHAMandatory"),alertHandler, constants.ALERT_TYPE_CONFIRMATION, 
							 "Ok", "Cancel", kony.i18n.getLocalizedString("InfoMessage"), null);
			/************************************************************************************
			 * Function called start work of scheduled or partially done jobs
			*************************************************************************************/
			function alertHandler(response)
			{
				if(response){
					showStartWorkClickLoadingData();
				} else {
					kony.print("do nothing");
				}
			} 
     }catch(err){
		kony.print("Exception in currentTimer : "+err);
		globalException("Menu","onStartWorkClickLoadingdata",err);
	 }
}

function showStartWorkClickLoadingData(){
	try {
		//R10.1 TD#239 - start
		selectedForm = "frmDetailsNoUnits";
	    var currentFrm = kony.application.getCurrentForm();
	    var previousFrm = kony.application.getPreviousForm();
	    currentFrm.maxAppMenuButtons = 0;
	    previousFrm.maxAppMenuButtons = 0;
	    setAppMenu(); 
	    //end
		var additionalhelperValue = "";
	    if (fromDashboard || isDashboardMoreDetails) {
			additionalhelperValue = highPriorityJob[currentRecommendedJob]["isJobHelper"];
			if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) 
	        {
	        	//kony.print("gblCurrentJob val is 111 ::"+JSON.stringify(gblCurrentJob));
	            gblCurrentJob["imgCurStatus"].src = "menatwork.png";  
	        } 
	    } else if (fromReports || gblCheckShutdownUnits) {
			additionalhelperValue = "N";
	        	} else {
	            	if(gblfromMap)
	            	{
	              		additionalhelperValue = "N";
	            	}
	            	else if (frmMyJobs.tpMyJobs.activeTabs == 0) {
	              		additionalhelperValue = "N";
	            	} else if (frmMyJobs.tpMyJobs.activeTabs == 1) {
	              		additionalhelperValue = gblScheduled.lblSchIsHelper.text;
	              		JobConstants.CurrentJobstate = "InProgress";
	            	} else if (frmMyJobs.tpMyJobs.activeTabs == 2) {
	              		additionalhelperValue = gblPartiallyDone.lblParIsHelper.text;	
	              		JobConstants.CurrentJobstate = "InProgress";
	            	} else if (frmMyJobs.tpMyJobs.activeTabs == 3) {
	            		//kony.print("gblCurrentJob val is 222 ::"+JSON.stringify(gblCurrentJob));
	               		additionalhelperValue = gblCurrentJob.lblCurIsHelper.text;  
	            	}
	            
	            	if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) 
	              	{
	              		//kony.print("gblCurrentJob val is 333 ::"+JSON.stringify(gblCurrentJob));
	              		gblCurrentJob["imgCurStatus"].src = "menatwork.png";  
	              	} 
	        }
	        
	        if(additionalhelperValue == 'S')
	        {
	        	Helper.gblHelperCheck = "HelperJob";
	        }
	        else
	        {
	        	Helper.gblHelperCheck = "NormalJob";
	        }
	    
	       setpreviousformfordetails();
	       var jobStatusCode = checkSummaryExistingJobStatus();
	       gblpreviousStartWork = kony.application.getCurrentForm().id;
	       if(Helper.gblHelperCheck != "HelperJob")
	   		{
		   		 if(jobStatusCode == kony.i18n.getLocalizedString("lblJobStatusSuspend"))
		   		 {
		   		 	updateEnteredJobStatusForSuspendedJobs();		   		 
		   		 }
		   		 else
		   		 {
		   		 	updateEnteredJobStatusAndTime();
		   		 }
			   	 if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) 
	             {
			   		gblCurrentJob.lblCurJobstatus.text = kony.i18n.getLocalizedString("lblJobStatusInProgress");
			   		gblCurrentJob.lblJobStartTime.text = getCurrentDateandTime();
			   	 }
	   		}
	   	    else
	   		 {
		   		 if(configCountrySpecData.eventDrivenTimesheetFlag)
		   		 {
		   			if(!isNonProductiveJob()){ 
		   			  //TD# fix
		   		      //setStartTimeToJobTimeTable();
		   			}
		   		 }
		   		 if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) 
	              {
		   		   gblCurrentJob.lblCurJobstatus.text = kony.i18n.getLocalizedString("lblJobStatusInProgress");
		   		   gblCurrentJob.lblJobStartTime.text = getCurrentDateandTime();		   		   
		   		  }
	   		 }
	   		 
	        kony.store.setItem("currentJobDetails", JSON.stringify(gblCurrentJob));  
	        storeHasValidCurrentJob(); 
	        
            var retObj = retrieveDetails();	
            onStartCloseOut();
			frmJHASurveyTab.destroy();
			frmNotesTab.destroy();
			frmAddNote.destroy();
			
	} catch (err) {
			kony.print("Exception in currentTimer : "+err);
			globalException("Menu","showStartWorkClickLoadingData",err);
	}		
}

/**
 * Function to start work loading function.
 * @returns {} Td#319 new function added for Additional RO
 */    
function onStartROWorkClickLoadingdata() {
    
     try{     	
	        var additionalhelperValue = "";
	     	/**if (fromDashboard || isDashboardMoreDetails) {
				additionalhelperValue = highPriorityJob[currentRecommendedJob]["isJobHelper"];
				if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) 
	              {
	              	gblCurrentJob["imgCurStatus"].src = "menatwork.png";  
	              } 
	        } else if (fromReports || gblCheckShutdownUnits) {
			additionalhelperValue = "N";
	        } else {*/
	            if(gblfromMap)
	            {
	              additionalhelperValue = "N";
	            }
	            else if (frmMyJobs.tpMyJobs.activeTabs == 0) {
	              additionalhelperValue = "N";
	            } else if (frmMyJobs.tpMyJobs.activeTabs == 1) {
	              additionalhelperValue = gblScheduled.lblSchIsHelper.text;
	              JobConstants.CurrentJobstate = "InProgress";
	            } else if (frmMyJobs.tpMyJobs.activeTabs == 2) {
	              additionalhelperValue = gblPartiallyDone.lblParIsHelper.text;	
	              JobConstants.CurrentJobstate = "InProgress";
	            } else if (frmMyJobs.tpMyJobs.activeTabs == 3) {
	               additionalhelperValue = gblCurrentJob.lblCurIsHelper.text;  
	            }
	            
	            if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) {
	            	gblCurrentJob["imgCurStatus"].src = "menatwork.png";  
	            } else {
	            	kony.print("do nothing");
	            }
	        //}
	        
	        if(additionalhelperValue == 'S') {
	        	Helper.gblHelperCheck = "HelperJob";
	        } else {
	        	Helper.gblHelperCheck = "NormalJob";
	        }
	    
	       setpreviousformfordetails();
	       var jobStatusCode = checkSummaryExistingJobStatus();
	       gblpreviousStartWork = kony.application.getCurrentForm().id;
	       if(Helper.gblHelperCheck != "HelperJob")
	   		{
		   		 if(jobStatusCode == kony.i18n.getLocalizedString("lblJobStatusSuspend"))
		   		 {
		   		 	updateEnteredJobStatusForSuspendedJobs();		   		 
		   		 } else {
		   		 	updateEnteredJobStatusAndTime();
		   		 }
			     if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) 
	             {
			   		gblCurrentJob.lblCurJobstatus.text = kony.i18n.getLocalizedString("lblJobStatusInProgress");
			   		gblCurrentJob.lblJobStartTime.text = getCurrentDateandTime();
			   	 } else {
	            	kony.print("do nothing");
	             }
	   		}
	   	    else {
		   		 if(configCountrySpecData.eventDrivenTimesheetFlag)
		   		 {
		   			if(!isNonProductiveJob()){ 
		   			  //TD# fix
		   		      //setStartTimeToJobTimeTable();
		   			} else {
	            		kony.print("do nothing");
	            	}
		   		 }
		   		 if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) 
	             {
		   		   gblCurrentJob.lblCurJobstatus.text = kony.i18n.getLocalizedString("lblJobStatusInProgress");
		   		   gblCurrentJob.lblJobStartTime.text = getCurrentDateandTime();		   		   
		   		 }
	   		 }
	   		 
	        kony.store.setItem("currentJobDetails", JSON.stringify(gblCurrentJob));  
	        storeHasValidCurrentJob(); 
	        
           //R12.4 TD#1156
     		//var retObj = retrieveDetails();	
            //onStartCloseOut();

			//R12.4 TD#1156
			//setpreviousformfordetails();
		    Details.fromadditionaljobs = false;       
		    isDashboardMoreDetails = false;
		    gblcheckadditionaljobs = false;
		    gblweeklycreatejob = false;
		    gblcheckenteradditionaljobs = false;
		    //gblfromMap = false;
		    gblJobvisitStatus = true;
		    gblStartWork = true;
		    //setNoAppmenuDetailsTab();
			selectedForm = "frmDetailsNoUnits";
        	frmAdditionalDetailsPan.maxAppMenuButtons = 0;
        	frmMyJobs.maxAppMenuButtons = 0;
        	setAppMenu();	
		    //gblfrmdetailsprevform = "frmStartWork";
		    //Start the timer for confirm safety
		    //R12.4 TD#1159 - Locking up on ‘I am safe’ screen. Disable Screen temporary as it is not completely working.
		    //startConfirmSafetySchedule();
		    frmAdditionalDetailsPan.tpDetails.activeTabs = [0];//319 TD#
		    showAdditionalRODetails(); 
			//frmJHASurveyTab.destroy();
			frmNotesTab.destroy();
			frmAddNote.destroy();
	    //}
     }catch(err){
		kony.print("Exception in currentTimer : "+err);
		globalException("Menu","onStartWorkClickLoadingdata",err);
	 }
}

/**
 * Function to start work loading function.
 * @returns {} Td#99 new function added for 99k and Route
 */    
function onStartNonProductiveWorkClickLoadingdata() {
    
     try{     	
	        var additionalhelperValue = "";
	     	
	            if(gblfromMap)
	            {
	              additionalhelperValue = "N";
	            }
	            else if (frmMyJobs.tpMyJobs.activeTabs == 0) {
	              additionalhelperValue = "N";
	            } else if (frmMyJobs.tpMyJobs.activeTabs == 1) {
	              additionalhelperValue = gblScheduled.lblSchIsHelper.text;
	              JobConstants.CurrentJobstate = "InProgress";
	            } else if (frmMyJobs.tpMyJobs.activeTabs == 2) {
	              additionalhelperValue = gblPartiallyDone.lblParIsHelper.text;	
	              JobConstants.CurrentJobstate = "InProgress";
	            } else if (frmMyJobs.tpMyJobs.activeTabs == 3) {
	               additionalhelperValue = gblCurrentJob.lblCurIsHelper.text;  
	            }
	            
	            if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) {
	            	gblCurrentJob["imgCurStatus"].src = "menatwork.png";  
	            } else {
	            	kony.print("do nothing");
	            }
	        //}
	        
	        if(additionalhelperValue == 'S') {
	        	Helper.gblHelperCheck = "HelperJob";
	        } else {
	        	Helper.gblHelperCheck = "NormalJob";
	        }
	    
	       setpreviousformfordetails();
	       var jobStatusCode = checkSummaryExistingJobStatus();
	       gblpreviousStartWork = kony.application.getCurrentForm().id;
	       if(Helper.gblHelperCheck != "HelperJob")
	   		{
		   		 if(jobStatusCode == kony.i18n.getLocalizedString("lblJobStatusSuspend"))
		   		 {
		   		 	updateEnteredJobStatusForSuspendedJobs();		   		 
		   		 } else {
		   		 	updateEnteredJobStatusAndTime();
		   		 }
			     if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) 
	             {
			   		gblCurrentJob.lblCurJobstatus.text = kony.i18n.getLocalizedString("lblJobStatusInProgress");
			   		gblCurrentJob.lblJobStartTime.text = getCurrentDateandTime();
			   	 } else {
	            	kony.print("do nothing");
	             }
	   		}
	   	    else {
		   		 if(configCountrySpecData.eventDrivenTimesheetFlag)
		   		 {
		   			if(!isNonProductiveJob()){ 
		   			  //TD# fix
		   		      //setStartTimeToJobTimeTable();
		   			} else {
	            		kony.print("do nothing");
	            	}
		   		 }
		   		 if (gblCurrentJob != null && gblCurrentJob != "" && gblCurrentJob != "null" && !isEmptyObject(gblCurrentJob)) 
	             {
		   		   gblCurrentJob.lblCurJobstatus.text = kony.i18n.getLocalizedString("lblJobStatusInProgress");
		   		   gblCurrentJob.lblJobStartTime.text = getCurrentDateandTime();		   		   
		   		 }
	   		 }
	   		 
	        kony.store.setItem("currentJobDetails", JSON.stringify(gblCurrentJob));  
	        storeHasValidCurrentJob(); 
	        
            var retObj = retrieveDetails();	
            //onStartCloseOut();
			setpreviousformfordetails();
		    Details.fromadditionaljobs = false;       
		    isDashboardMoreDetails = false;
		    gblcheckadditionaljobs = false;
		    gblweeklycreatejob = false;
		    gblcheckenteradditionaljobs = false;
		    //gblfromMap = false;
		    gblJobvisitStatus = true;
		    gblStartWork = true;
		    //setNoAppmenuDetailsTab();
			selectedForm = "frmDetailsNoUnits";
        	frmNonProductiveJobDetailsPan.maxAppMenuButtons = 0;
        	frmMyJobs.maxAppMenuButtons = 0;
        	setAppMenu();	
		    
		    //Start the timer for confirm safety
		    //R12.4 TD#1159 - Locking up on ‘I am safe’ screen. Disable Screen temporary as it is not completely working.
		    //startConfirmSafetySchedule();
		    frmNonProductiveJobDetailsPan.tpDetails.activeTabs = [0];
		    showAdditionalRODetails(); 
			//frmJHASurveyTab.destroy();
			frmNotesTab.destroy();
			frmAddNote.destroy();
	    //}
     }catch(err){
		kony.print("Exception in function onStartROWorkClickLoadingdata() : "+err);
		globalException("Menu","function onStartROWorkClickLoadingdata()",err);
	 }
}


//function called when clicked on atbuilding icon of travel screen
function onAtBuildClick() {
    onBuildingArival();
}



/************************************************************************************
 * AppMenu function on accept in frmSortFilter
 *************************************************************************************/
function onFilClick() {
    getFilterSortData();
}

/************************************************************************************
 * AppMenu function on cancel in frmSortFilter
 *************************************************************************************/
function onFilCanClick() {
    setNoAppmenuitem();
    setMyJobsData();
    setAppMenuJobs();
    frmMyJobs.show();
}

/************************************************************************************
 * AppMenu function on accept in Propose TLead  Screen
 *************************************************************************************/
function onacceptTLeads() {
	//kony.print("onacceptTLeads - start");
    preshowProposeTlead();
    //loadUnitNo();
    //loadTLeadProduct();
    //loadTLeadProductCat();
    loadTLeadCustomerName();
    frmProposeTLeads.show();
    //kony.print("onacceptTLeads - end");
}

/************************************************************************************
 * AppMenu function on cancel in Propose TLead  Screen
 *************************************************************************************/
function onCancelProposeTLead() {
    gblimgTProduct_base64 = "";
    frmDepartBuilding.show();
}



/************************************************************************************
 * AppMenu function on cancel in Propose TLead Question Screen
 *************************************************************************************/
function onCancelProposeTLeadQuestions(){
    frmProposeTLeads.show();    
}

/**
 *function called on click of depart icon of depart building
 */
function onchangedepatbuilding() {
   
       //checkJobTaskStatusbeforeDepart();
       changeDepatDepatureTime();    
   
}

/**
 * function called on click of direction icon of travelTo screen
 */
function onDirectionsClick() {
	getDirectionFunc();
}


/**
 *function for app menu for Reports - Materials buildings list screen
 */
function onMaterialSortClick() {
    frmReportsSelectViewMaterial.show();
    selectedForm = "frmReportsSelectViewMaterial";
    setAppMenu();
     
}

//function upon clicking cancel in Filter in MaterialOrders Reports screen
function onCancelSelectViewMaterial() {
    appMenuOptionsMaterialOrderListMO();
}

//function upon clicking ok in Filter in MaterialOrders Reports screen
function onAcceptSelectViewMaterial(){
    loadSelectedMaterialListType();
}


/**
 *function called when clicked on craete job function unplan jobs
 */
function onClickAcceptCreateJobUnplan() {
    insertjobdetailsUnplan();
}


/**
 *function called when clicked on reject of create job function unplan jobs
 */
function onClickRejectCreateJobUnplan(){

	if(fromDashBuild360){
        setAppmenuOnfrmUnscheduledBuildingUnits(2);

    	frmUnscheduledBuildingUnits.show();
    } else {
		frmCreateJobUnplan.maxAppMenuButtons = 0;
		frmSearchBuildingsList.maxAppMenuButtons = 0;
		frmSearchBuildingsList.show();
	}
} 

/**
 * Function to set default App Menu for the 
 * Completed Jobs Module.
 * @returns {} 
 */
function defaultAppMenu(){
	selectedForm = "frmReportsCompletedJobs";
	setAppMenu();
}

/**
 * Function to set default App Menu for Timesheet Weekly.
 * @returns {} 
 */
function defaultWeeklyTimesheetAppMenu(){
	selectedForm = "frmReportsCompletedJobs";
	setAppMenu();
}


/**
 *function called for loading app menu of create weekly timesheet
 */
function CreateWeeklyTimesheetAppMenu(){
	selectedForm = "frmReportsCompletedJobsCreateJob";
	frmTimeSheetWeekly.maxAppMenuButtons = 0;
	setAppMenu();
}
/**
 * Function to set default App Menu for Timesheet Module.
 * @returns {} 
 */
function TimesheetReportsDefaultAppMenu(){
	frmReportsLanding.maxAppMenuButtons = 0;
	selectedForm = "frmDetailsNoUnits";
	setAppMenu();
}

/**
 * Function to Stop Work
 * @returns {} 
 */
function onStartCloseOut(){
	/*
     * Forcing a user to perform JHA if a JHA hasn't been submitted for any Unit.
     */
     showLoadingScreen("Please wait...");	
     checkAndGetLocalJobIdForShutDown();//Changed 30/09/2015
     setpreviousformfordetails();
     Details.fromadditionaljobs = false;       
     isDashboardMoreDetails = false;
     gblcheckadditionaljobs = false;
     gblweeklycreatejob = false;
     gblcheckenteradditionaljobs = false;
     //gblfromMap = false;
     gblJobvisitStatus = true;
     gblStartWork = true;
     setNoAppmenuDetailsTab();
      var retObj = retrieveDetails();
      gblBuildingId = retObj["BuildingId"];
      //kony.print("menu.js :: retObjval :: 111 ::"+JSON.stringify(retObj));
	 var worktypeCode = retObj["WorkTypeCode"];//TD#786
     //gblfrmdetailsprevform = "frmStartWork";
     //Start the timer for confirm safety
     //R12.4 TD#1159 - Locking up on ‘I am safe’ screen. Disable Screen temporary as it is not completely working.
     //startConfirmSafetySchedule();
     var characterArray = ["~"];
		 if(worktypeCode == kony.i18n.getLocalizedString("JobTypeSc") || worktypeCode == kony.i18n.getLocalizedString("JobTypeMNT")){  //R 12.3.3 TD#1121 for OMMS completed jobs
     		setNoAppmenuDetailsTab();
			frmDetailsPan.tpDetails.activeTabs = [0];
	    	showDetails();  //TD#786
  	   }else if(worktypeCode == kony.i18n.getLocalizedString("JobTypeRO")){  //** Updated by ABA(22/06/16) Removed tilde sign TD#1131 comparision
            // TD#319
		    frmMyJobsAdditionalRO = true;
			isPrimaryUnitIdUpdated = false;
			setAdditionalRONoAppmenuDetailsTab();
			frmAdditionalDetailsPan.tpDetails.activeTabs = [0];
			showAdditionalRODetails();
			}else{
			 kony.print("do nothing");
			
			}
//		else{
//		alert("in else");
//			setNoAppmenuDetailsTab();
//			frmDetailsPan.tpDetails.activeTabs = [0];
//	    	showDetails();
//		}
     dismissLoadingScreen();
     //showDetails();             
} //Changed by Jignasa


//function added for noappmenu display
function Check(){

}


//function to toggle AM PM 
function onlclickTimeAMPM()
{
	if(frmTimePicker.lblAMPM.text==kony.i18n.getLocalizedString("lblAM"))
	{
		frmTimePicker.lblAMPM.text=kony.i18n.getLocalizedString("lblPM");
	}
	else
	{
		
		frmTimePicker.lblAMPM.text=kony.i18n.getLocalizedString("lblAM");
	}
}

//Function to be called when Suspend job selected
function OnClickSuspendJob()
{
    var jobEndTime = checkEndTimeOfJobTimeTable();
    
    if(WorkTypeConfig.forceToEnterTimeFlag && !isEmptyORNullJobEndTime(jobEndTime))
    {  
      //popupSuspendReason.dismiss();    
	  otis.ui.Alert(kony.i18n.getLocalizedString("lblCheckJobEndTimeBeforeClose"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
	}
	else if(getListOfUnitsandCheckTechdata())
    {
    //popupSuspendReason.dismiss();
    confirmTechdataBeforeSuspend();
    }
    else
    {
     getSuspendedReason();  
    }
}

// Updated by Rishika for fixing Enhancement#1003 added gblUnitCondition && gblBillableCondition flag

function OnClickCloseJob()
{
	kony.print("Inside OnClickCloseJob");
	//R12.0 TD#753
  try {
	if(!CheckCutOffDateWithCurrentTime(true)){
		return; //As cut off time
	} else {
		kony.print("OnClickCloseJob - do nothing as valid time period");
	}
			
   //R12.0 TD#753
	var isValidWorkDateForCurrentPayweek = isWorkDateInCurrentPayweek(true);
	if(!isValidWorkDateForCurrentPayweek){
		return; //As cut off time
	} else {
		kony.print("OnClickCloseJob - do nothing as work date valid time period");
	}


    var jobId, worktypeCode;
    var retObj = retrieveDetails();
    jobId = retObj["JobId"];
    worktypeCode = retObj["WorkTypeCode"]; 
    
    //R11.0 TD#99
    //if (worktypeCode == kony.i18n.getLocalizedString("JobTypeSFT") || (worktypeCode == kony.i18n.getLocalizedString("JobTypeOTR") && !(OtherJob.unitsAvailableForOtherJob))) {
	if (worktypeCode == kony.i18n.getLocalizedString("JobTypeSFT") || worktypeCode == kony.i18n.getLocalizedString("JobTypeOTR")) {
    	//confirmCloseJobStatus();
		kony.print("OnClickCloseJob - its a non-productive job - jobtype"+worktypeCode);
			var jobWorkTime = checkWorkTimeOfJobTimeTable();
			if(WorkTypeConfig.forceToEnterTimeFlag && !isEmptyORNullJobEndTime(jobWorkTime))
			{
			      //popupSuspendReason.dismiss();
				  otis.ui.Alert(kony.i18n.getLocalizedString("validateJobWorkTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
			} else{
			       //confirmCloseJobStatus();

					//R9.0 TD#2055 - To add new validation of minimum 15 mins. to be submitted for a 99k job type
				   	if (worktypeCode == kony.i18n.getLocalizedString("JobTypeSFT")){
					   	
						//R9.1 TD#2083 - Unable to close a 99k job. An error occurs stating, "Please add at least 15 mins for the helper"
						var isHelperAdded = isHelperAddedForJob();	
	
						if (isHelperAdded)
						{
					  		var totalHelperTime = getHelperTotalTimeForSafetyJob(jobId);
					  		
						   	if(totalHelperTime < 15){
								otis.ui.Alert(kony.i18n.getLocalizedString("alertAddTimeSafetyTrainingHelper"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
								dismissLoadingScreen();
								cleargblIsEventHandlingInProgress();
								return;
							} else {
								kony.print("do nothing for added time - 99k job");
							}
						} else {
							kony.print("do nothing if helper not addded - 99k job");
						}
						//R9.1 TD#2083 - end
						
				    } else {
				    	kony.print("do nothing for other than 99k jobs");
				    }
				    //R9.0 TD#2055 - end
	
					//R12.3.4 TD#1136
					var isValidTimeEntries	= checkIsValidTimeEntries();
					kony.print("OnClickCloseJob(), isValidTimeEntries  = "+isValidTimeEntries);
			       	if(isValidTimeEntries){
			       	 // if(isNetworkAvailable()){
			       		confirmCloseJobStatus();
			       	 // }else{
			       	  //	dismissLoadingScreen();
					//	otis.ui.Alert(kony.i18n.getLocalizedString("networkNotAvailable"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null); 
			       	//  }
			       	} else {
			       		kony.print("invalid time for non productive jobs");
			       		frmNonProductiveJobDetailsPan.tpDetails.activeTabs = [2];
			       	}
			}
    } else {
    	kony.print("OnClickCloseJob - its a productive job - jobtype"+worktypeCode);
           if (WorkTypeConfig.atleastOneTaskRequiredFlag)
           {
		    var taskstatus = checkAtleastOneTaskCompleted(jobId, worktypeCode);
		    kony.print("OnClickCloseJob - taskstatus "+taskstatus);
				if (!taskstatus) 
				{
				    //popupSuspendReason.dismiss();
				    otis.ui.Alert(kony.i18n.getLocalizedString("CompleteTaskBeforeDepart"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
				}
				else
				{
				    //** Updated by ABA(27/11/2015) TD#594
				    var jobWorkTime = checkWorkTimeOfJobTimeTable();
				    kony.print("OnClickCloseJob - jobWorkTime "+jobWorkTime);
				    if(WorkTypeConfig.forceToEnterTimeFlag && !isEmptyORNullJobEndTime(jobWorkTime))
				    {
				      //popupSuspendReason.dismiss();
					  kony.print("OnClickCloseJob - validateJobWorkTime");
					  otis.ui.Alert(kony.i18n.getLocalizedString("validateJobWorkTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
					}
					else if(getListOfUnitsandCheckTechdata())
				    {
				    kony.print("OnClickCloseJob - getListOfUnitsandCheckTechdata");
				    // popupSuspendReason.dismiss();
				    confirmTechdataBeforeSuspend();
				    }
				    else
				    {
					     if(worktypeCode == kony.i18n.getLocalizedString("JobTypeSc")){
						       kony.print("inside Service call job");
						       // alert("validateTimeOrder(retObj[JobId]) "  + validateTimeOrder(retObj["JobId"]));
						       loadUnitConditionOnArrival(retObj["WorkTypeCode"], retObj["JobId"]);
			                   loadJobStatus(retObj["JobId"], retObj["WorkTypeCode"]);
			                   if(gblUnitCondition == false || gblUnitCondition == "false" ){
			                     
			                    otis.ui.Alert(kony.i18n.getLocalizedString("PleaseSelectUnit"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
			                    }
			                   else if(gblBillableCondition == false || gblBillableCondition == "false" ){
			                     otis.ui.Alert(kony.i18n.getLocalizedString("PleaseSelectBillable"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
						        }/*else if(!validateTimeOrder(retObj["JobId"])) Commented by ABA(20/10/15) TD#478
						        {
						        	//checkarrivaltimeupdate();
						        	kony.print("EnteredArrivalTime " + EnteredArrivalTime )
						        	gblCheckServiceCallArrivalTime = true;
				      			  	frmEnterBuilding.lblArrivalTime.text = EnteredArrivalTime;
				       			 	frmEnterBuilding.show();
						        }*/else{
						        kony.print("OnClickCloseJob - its SC job - in last else");
						               
						        //confirmCloseJobStatus();

								//R12.3.4 TD#1136
								var isValidTimeEntries	= checkIsValidTimeEntries();
								kony.print("OnClickCloseJob(), isValidTimeEntries  = "+isValidTimeEntries);
						       	if(isValidTimeEntries){
						       	//if(isNetworkAvailable()){
						       		confirmCloseJobStatus();
						       	// }else{
						       	  //	dismissLoadingScreen();
						       	//  	showDepartBuildingPostScreen();
								//	otis.ui.Alert(kony.i18n.getLocalizedString("networkNotAvailable"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null); 
						       	 //}
						       	} 
						       	else {
						       		kony.print("invalid time for Service call jobs");
						       		frmDetailsPan.tpDetails.activeTabs = [4];
						       	}
			       	
						       }
					     } else {
					     	kony.print("OnClickCloseJob - not SC job");
					         //confirmCloseJobStatus();   
							//R12.3.4 TD#1136
							var isValidTimeEntries	= checkIsValidTimeEntries();
							kony.print("OnClickCloseJob(), isValidTimeEntries  = "+isValidTimeEntries);
						    if(isValidTimeEntries){
						       	confirmCloseJobStatus();
						    } else {
						    	kony.print("invalid time for Repair and Open Order jobs");
						       	frmAdditionalDetailsPan.tpDetails.activeTabs = [2];
						    }

					     }
				    }
		    	}
	    }
	    else
		{
			kony.print("before 594 check");
            //** Updated by ABA(27/11/15) TD#594
            var jobWorkTime = checkWorkTimeOfJobTimeTable();
		    if(WorkTypeConfig.forceToEnterTimeFlag && !isEmptyORNullJobEndTime(jobWorkTime))
		    {
		      //popupSuspendReason.dismiss();
			  otis.ui.Alert(kony.i18n.getLocalizedString("validateJobWorkTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
			}
			else if(getListOfUnitsandCheckTechdata())
		    {
		    //popupSuspendReason.dismiss();
		    confirmTechdataBeforeSuspend();
		    }
		    else
		    {
		    	if(worktypeCode == kony.i18n.getLocalizedString("JobTypeSc"))
		    	{
		       		kony.print("inside Service call job");
		       		loadUnitConditionOnArrival(retObj["WorkTypeCode"], retObj["JobId"]);
               		loadJobStatus(retObj["JobId"], retObj["WorkTypeCode"]);
               		kony.print("gblBillableCondition"+ gblBillableCondition + "gblUnitCondition" + gblUnitCondition);
                 
               		if(gblUnitCondition == false || gblUnitCondition == "false")
               		{
                		otis.ui.Alert(kony.i18n.getLocalizedString("PleaseSelectUnit"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
                	}
                	else if(gblBillableCondition == false || gblBillableCondition == "false")
                	{
                    	otis.ui.Alert(kony.i18n.getLocalizedString("PleaseSelectBillable"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
			    	}/*else if(!validateTimeOrder(retObj["JobId"])) Commented by ABA(20/10/15) TD#478
			        {
			        	//checkarrivaltimeupdate();
			        	kony.print("EnteredArrivalTime " + EnteredArrivalTime )
			        	gblCheckServiceCallArrivalTime = true;
	      			  	frmEnterBuilding.lblArrivalTime.text = EnteredArrivalTime;
	       			 	frmEnterBuilding.show();
			        }*/
			    	else 
			    	{
				    	kony.print(" in SC - gblBillableCondition "+ gblBillableCondition + "gblUnitCondition " + gblUnitCondition);
				    	//confirmCloseJobStatus();
						
						//R12.3.4 TD#1136
						var isValidTimeEntries	= checkIsValidTimeEntries();
						kony.print("OnClickCloseJob(), isValidTimeEntries  = "+isValidTimeEntries);
						if(isValidTimeEntries){
						 	//if(isNetworkAvailable()){
					       		confirmCloseJobStatus();
					       //	}else{
					       	//  	dismissLoadingScreen();
					       	//  	showDepartBuildingPostScreen();
							//	otis.ui.Alert(kony.i18n.getLocalizedString("networkNotAvailable"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null); 
					       	//}
						} else {
							kony.print("invalid time for Service call jobs");
							frmDetailsPan.tpDetails.activeTabs = [4];
						}
			    	}
		     	}
		     	else
		     	{
			     	kony.print("gblBillableCondition "+ gblBillableCondition + "gblUnitCondition " + gblUnitCondition);
			     		//confirmCloseJobStatus(); 
			     	
			     	//R12.3.4 TD#1136
					var isValidTimeEntries	= checkIsValidTimeEntries();
					kony.print("OnClickCloseJob(), isValidTimeEntries  = "+isValidTimeEntries);
					if(isValidTimeEntries){
					   	//if(isNetworkAvailable()){
				       		confirmCloseJobStatus();
				       	//}else{
				       	//  	dismissLoadingScreen();
						//	otis.ui.Alert(kony.i18n.getLocalizedString("networkNotAvailable"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null); 
				       	//}
					} else {
					 	kony.print("invalid time for Repair and Open Order jobs");
					   	frmAdditionalDetailsPan.tpDetails.activeTabs = [2];
					}  
		     	}
		    }
	    } 
	}   
	}catch(err){
		kony.print("Exception in OnClickCloseJob() : "+err);
		globalException("Menu", "OnClickCloseJob()", err);
	}
}	
	

//** Added by ABA(23/11/2015) TD#594 Validate Work Time in job time table
function checkWorkTimeOfJobTimeTable()
{
 var jobWorkTime = "";
    try 
    {
        var retObj = retrieveDetails();
        var jobId = retObj["JobId"];
        var worktypeCode = retObj["WorkTypeCode"];
        
        var sql = checkWorkTimeOfJobTimeTableQuery();
        
       getAllSelectQuery(checkWorkTimeOfJobTimeTable_successcallback, checkWorkTimeOfJobTimeTable_errorcallback, sql);
	   function checkWorkTimeOfJobTimeTable_successcallback(res)
	   {
	            if (null != res && res.length > 0) 
	            {
	               jobWorkTime = res[0]["WorkDate"]; 
	            }
		}
		function checkWorkTimeOfJobTimeTable_errorcallback(res)
		{
		    kony.print("inside error callback of getting job work time")
		}	        	
     return jobWorkTime;   
    }
    catch (err) {
        kony.print("exception in checking job work time is : " + err);
        globalException("Menu", "checkWorkTimeOfJobTimeTable", err);
    }

}
//** End
//**Added by ABA(27/11/15) TD#594
/*********************************************************************************************
 * function to return query to check if job work time is entered or not
 *********************************************************************************************/
function checkWorkTimeOfJobTimeTableQuery() 
{
	    try 
	    {
	        var retObj = retrieveDetails();
	        var jobId = retObj["JobId"];
	        var worktypeCode = retObj["WorkTypeCode"];
	        var employeeId = kony.store.getItem("EmployeeId");
	        
	        var sql;
	        if (worktypeCode == kony.i18n.getLocalizedString("JobTypeMNT")) {
	        	sql = "select WorkDate from MaintenanceJobTime where JobId =" + jobId + " and MechanicId =" +employeeId+ " order by LocalDateChange desc";
	        }
	        else if (worktypeCode == kony.i18n.getLocalizedString("JobTypeRO")) {
	        	sql = "select WorkDate from RepairCallJobTime where JobId =" + jobId + " and MechanicId =" +employeeId+ " order by LocalDateChange desc";
	        }
	        else if (worktypeCode == kony.i18n.getLocalizedString("JobTypeSc")) {
	        	sql = "select WorkDate from ServiceCallJobTime where JobId =" + jobId + " and MechanicId =" +employeeId+ " order by LocalDateChange desc";
	        }
	        else if (worktypeCode == kony.i18n.getLocalizedString("JobTypeOTR")) {
	        	sql = "select WorkDate from OtherJobTime where JobId =" + jobId + " and MechanicId =" +employeeId+ " order by LocalDateChange desc";
	        }
	        else if (worktypeCode == kony.i18n.getLocalizedString("JobTypeSFT")) {
	        	//R11.0 TD#99 
	        	sql = "select WorkDate from safetyjobtime where JobId =" + jobId + " and MechanicId =" +employeeId+ " order by LocalDateChange desc";
	        }
	        
	        return sql;
	    }
	    catch (err) {
	        kony.print("exception in getting query of checking job Work time is : " + err);
	        globalException("Menu.js", "checkWorkTimeOfJobTimeTableQuery", err);
	    }
 }
//** End

//** Added by ABA(28/9/15) TD#350
function validateTimeOrder(jobId) {
	try {
		kony.print("validateTimeOrder");
		var jobId = jobId;
		var mechId = kony.store.getItem("EmployeeId");
		var callTime = "";
		var completeTime = "";
		var dispatchTime = "";
		var buildingId = "";
		var arrivalTime = "";

		var validationSuccess = false;
		var sql = "select SC.CallTime,SC.DispatchTime,SC.JobCompTime as completeTime,B.BuildingId from servicecalljob SC,Unit U, building B where SC.UnitId = U.UnitId and U.BuildingId = B.BuildingId and SC.JobId = " + jobId; //SC.CallDetailId as callStatus,//TD#267
		getAllSelectQuery(SCTime_successcallback, SCTime_errorcallback, sql);

		function SCTime_successcallback(resSC) {
			if (resSC.length > 0 && resSC != null) {

				callTime = retEmptyIfNotValid(resSC[0]["CallTime"]);
				completeTime = retEmptyIfNotValid(resSC[0]["completeTime"]);
				dispatchTime = retEmptyIfNotValid(resSC[0]["DispatchTime"]);
				buildingId = retEmptyIfNotValid(resSC[0]["BuildingId"]);

			} else {
				//alert("Employee details not found");
			}
		}
		function SCTime_errorcallback(res) {
			kony.print("SCTime_errorcallback " + JSON.stringify(res));
		}

		var sqlArrival = "select ArrivalTime from buildingvisit where MechanicId = " + mechId + " and BuildingId = " + buildingId + "  and ArrivalTime <> 'NULL' and DepartureTime = 'NULL' order by ArrivalTime Desc limit 1";
		kony.print("sqlArrival -- " + sqlArrival);
		getAllSelectQuery(SCArrival_successcallback, SCArrival_errorcallback, sqlArrival);
		function SCArrival_successcallback(resArrival) {
			try {
				if (resArrival.length > 0 && resArrival != null) {
					arrivalTime = retEmptyIfNotValid(resArrival[0]["ArrivalTime"]);

				} else {
					kony.print("sqlArrival details not found");
				}
			} catch (e) {
				kony.print("Exception in sqlArrival_successcallback -- " + e); // todo: handle exception
			}
		}

		function SCArrival_errorcallback(res) {
			kony.print("SCTime_errorcallback " + JSON.stringify(res));
		}

		kony.print("callTime " + callTime);
		kony.print("dispatchTime " + dispatchTime);
	   	kony.print("arrivalTime " + arrivalTime);
		
		var formatedCallTime = stringToDateFormat(callTime);
		var formatedArrivalTime = stringToDateFormat(arrivalTime);
		var formatedDispatchTime = stringToDateFormat(dispatchTime);
		
		kony.print("formatedCallTime " + formatedCallTime);
		kony.print("formatedDispatchTime " + formatedDispatchTime);
		kony.print("formatedArrivalTime " + formatedArrivalTime);
		
		
		if (formatedCallTime < formatedArrivalTime) {
			if (formatedDispatchTime < formatedArrivalTime) {
					validationSuccess = true;
			} else {
				validationSuccess = false;
				otis.ui.Alert(kony.i18n.getLocalizedString("incorrectDeviceDateTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
			}

		} else {
			validationSuccess = false;
			otis.ui.Alert(kony.i18n.getLocalizedString("incorrectDeviceDateTime"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
		}
		kony.print("validationSuccess " + validationSuccess);
		return validationSuccess;
	} catch (err) {
		kony.print("Exception in validateTimeOrder " + JSON.stringify(err));
	}
}
//** End

//** Added by ABA(10/6/15)
//** making date object from string date
function stringToDateFormat(dateTime)
{
	try{	
		
		var tempdatetime = dateTime.split(" ");
        var formattime = tempdatetime[1].split(":");
        var formatdate	= tempdatetime[0].split("-");
        
        var year = parseInt(formatdate[0]);
        var month = parseInt(formatdate[1]);
        var date = parseInt(formatdate[2]);
       
        var hour = parseInt(formattime[0]);
        var min = parseInt(formattime[1]);
        var sec = parseInt(formattime[2]);
        
       return new Date(year,month,date,hour,min,sec,0);
		
	}catch(err)
	{
	kony.print("Exception in Date Time " + JSON.stringify(err));
	}
}
//** End
      
//Function to be called when Close job selected
function OnClickHelperCloseJob()
{
    var jobEndTime = checkEndTimeOfJobTimeTable();
	if(WorkTypeConfig.forceToEnterTimeFlag && !isEmptyORNullJobEndTime(jobEndTime))
	{
	  otis.ui.Alert(kony.i18n.getLocalizedString("lblCheckJobEndTimeBeforeClose"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
	}
	else
	{
	   confirmHelperCloseJobStatus();  
	} 
}
/*********************************************************************************************
 * Function to set the selected time as current date in Search option for jobs
 *********************************************************************************************/
function setTimerSearchJobByDate() {
	try{
		var time = kony.os.time();
	    var tArray = time.split(":");
	    var hrs = tArray[0];
	    var ampm;
	    var dates = getDateObject(); //** Added by ABA(23/10/15) TD#500 Get current datetime througn FFI;
	    var strDays1 = dates.getDay();
	    var strDate1 = dates.getDate();
	    var strMonth1 = dates.getMonth();
	    strMonth1 = strMonth1 + 1;
	    var strYear1 = dates.getFullYear();
	    var reqDateFormat = getDateFormatReq();
	    frmSortFilter.calSearchDate.dateFormat = reqDateFormat;
	    frmSortFilter.calStartPeriod.dateFormat = reqDateFormat;
	    frmSortFilter.calEndPeriod.dateFormat = reqDateFormat;
		frmSortFilter.calSearchDate.dateComponents = [strDate1, strMonth1, strYear1];	
		frmSortFilter.calStartPeriod.dateComponents = [strDate1, strMonth1, strYear1];	
		frmSortFilter.calEndPeriod.dateComponents = [strDate1, strMonth1, strYear1];	
	}catch (err) {
        kony.print("Exception in setTimerSearchJobByDate function : " + err);
        globalException(gbl_Menu_jsName,"setTimerSearchJobByDate",err);
    }    
}

/*********************************************************************************************
 * Function to show additional jobs on click of closeout in summary
 *********************************************************************************************/
function onCloseOutJobSummary()
{
  try{
	//R12.0 TD#753
	if(!CheckCutOffDateWithCurrentTime(true)){
		return; //As cut off time
	} else {
		kony.print("onCloseOutJobSummary - do nothing as valid time period");
	}
			
   //R12.0 TD#753
	var isValidWorkDateForCurrentPayweek = isWorkDateInCurrentPayweek(true);
	kony.print("isValidWorkDateForCurrentPayweek = "+isValidWorkDateForCurrentPayweek);
	if(!isValidWorkDateForCurrentPayweek){
		return; //As cut off time
	} else {
		kony.print("onCloseOutJobSummary - do nothing as work date valid time period");
	}
	
	
	if(fromNonProductiveJob){
		OnClickCloseJob();
	} else {
		//R8.1 TD#316 implementation
		var isTaskDetailsValid = validateTaskTabDetails();
		kony.print("onCloseOutJobSummary(),	isTaskDetailsValid = "+isTaskDetailsValid);
		if(isTaskDetailsValid){
			kony.print("Task details are valid for closeout");
		  	popupSuspendReason.hbxJobStatusOptions.setVisibility(true);
		    popupSuspendReason.hbxSuspendReason.setVisibility(false);
		    OnClickCloseJob(); //  remove Suspend option from popup TD#72 Suspending a Productive job is not allowed
		    //popupSuspendReason.show();
		} else {
			kony.print("Task details are not valid for this job");
		}
	}
	} catch (err) { //R12.2 TD#979
        kony.print("exception in onCloseOutJobSummary, error : " + err);
        globalException("Menu", "onCloseOutJobSummary", err);
    }
}

/*********************************************************************************************
 * Function for no app menu
 *********************************************************************************************/
function onClickNoAppMenu()
{
kony.print("no app menu");
}

/*********************************************************************************************
 * Function called when user click on accept button of technical data
 *********************************************************************************************/
function onClickAcceptTechnicalData()
{
	onClickOKUnitAllListOfTechData();
}

/*********************************************************************************************
 * Function called when user click on cancel button of technical data
 *********************************************************************************************/
function onClickCancelTechnicalData()
{
    gblTempTechMappingData = {};
    var previousFrm = kony.application.getPreviousForm().id;            
    if(previousFrm == "frmDetailsPan")
    {
    frmDetailsPan.tpDetails.activeTabs = [1];
    frmDetailsPan.show();
    }
    else
    {
    getUnitTechData_Unit360();
    }
}

/**
 *function called when clicked on craete job from building search
 */
function onCreatJobClick(){

	gbFromMyjobs=true;
	getBuildingSearch();

}

/**
 *function called when clicked on craete job from Additional tab
 */
function onCreatJobAdditionalClick(){
	gbFromMyjobs=true;
	onClickSearchBuildingList();
}


function onClickRejectProcessFlagNotTrue(){
	otis.ui.Alert(kony.i18n.getLocalizedString("lblRejectErrorMessage"), null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
}

function showFrmInProgress() {
	if (signOnGlobal.isServicesStarted) {
			frmInProgress.show();
        } else {
        	var testtext = "Please start the service before proceeding further. Click on the 'play' icon located at the bottom of the screen";
        	otis.ui.Alert(testtext, null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
    }
}
        
/**
 * Function to set default App Menu for InProgress screen.
 * @returns {} 
 */
function formInProgressDefaultAppMenu(){
	frmInProgress.maxAppMenuButtons = 0;
	selectedForm = "frmFormInProgress";
	setAppMenu();
}

function showLookAheadPopup() {
	if (signOnGlobal.isServicesStarted) {
			popupLookAhead.show();
	} else {
        	var testtext = "Please start the service before proceeding further. Click on the 'play' icon located at the bottom of the screen";
        	otis.ui.Alert(testtext, null, "", "", "", kony.i18n.getLocalizedString("InfoMessage"), null);
    }
}

function locationOnData()
{	
	//popupStartService.lblDuration.text = "Location Service is enabled on this device";
	//popupStartService.lblMsg.text = "Please click OK to proceed";
	popupStartService.lblMsg.text = "Press ok to enable Tech Tool location services and proceed."; //R8.0 TD#133 - message change Please 
	popupStartService.btnCancel.isVisible = false;
	popupStartService.lblCancel.isVisible = false;
	popupStartService.imgCancel.isVisible = false;
	
	//R8.0-TD#133 implementation start
	//Calculate lunch break
	if(kony.store.getItem("isLunchBreakOn")){
		var totalBreaktime = "";
		totalBreaktime = getLunchBreakTime();
		popupStartService.lblDuration.text = totalBreaktime;
	} else {
		popupStartService.lblDuration.text = "";
	}
	//R8.0-TD#133 implementation end
}

function locationOffDataDev()
{
	popupStartService.lblDuration.text = "Location Services has to be enabled.";
	popupStartService.lblMsg.text = "To enable please go to Settings>Privacy>Location Services";
	popupStartService.btnCancel.isVisible = true;
	popupStartService.lblCancel.isVisible = true;
	popupStartService.imgCancel.isVisible = true;
	
}

function locationOffData()
{
	popupStartService.lblDuration.text = "Location Services has to be enabled";
	popupStartService.lblMsg.text = "on this device in order to login.";
	popupStartService.btnCancel.isVisible = true;
	popupStartService.lblCancel.isVisible = true;
	popupStartService.imgCancel.isVisible = true;
	
} 

/**
Function added for TD#791
Confirmation message while departing from task screen for repair job
*/
function onDepartFromTaskScreen(){
kony.print("onDepartFromTaskScreen");
otis.ui.Alert(kony.i18n.getLocalizedString("alertForJobDeparture"), onClickDepartConfirmationForRO, constants.ALERT_TYPE_CONFIRMATION, 
					 kony.i18n.getLocalizedString("lblYes"), kony.i18n.getLocalizedString("lblNo"), kony.i18n.getLocalizedString("InfoMessage"), null);	


}

/**
Function added for TD#791
Confirmation message while departing from depart screen for OMMS 
*/
function onDepartFromDetailsScreen(){
kony.print("onDepartFromDetailsScreen");
otis.ui.Alert(kony.i18n.getLocalizedString("alertForJobDeparture"), onClickDepartConfirmationForMNT, constants.ALERT_TYPE_CONFIRMATION, 
					 kony.i18n.getLocalizedString("lblYes"), kony.i18n.getLocalizedString("lblNo"), kony.i18n.getLocalizedString("InfoMessage"), null);	
}

/**
Function added for TD#791
Confirmation message while departing from depart screen for ServiceCall 
*/
function onServiceCallDepartFromDetailsScreen(){
kony.print("onServiceCallDepartFromDetailsScreen");
gblToEnableDetails = false;
otis.ui.Alert(kony.i18n.getLocalizedString("alertForJobDeparture"), onClickDepartConfirmationForSC, constants.ALERT_TYPE_CONFIRMATION, 
					 kony.i18n.getLocalizedString("lblYes"), kony.i18n.getLocalizedString("lblNo"), kony.i18n.getLocalizedString("InfoMessage"), null);	
}

/**
 * Function added for TD#791
 * 
 */
function onClickDepartConfirmationForRO(response)
{
	if(response==true){
		onClickDepartDeleteRepairData();
 	}
}

/**
 * Function added for TD#791
 */
function onClickDepartConfirmationForMNT(response)
{
	if(response==true){
		onClickDepartDeleteOMMSData();
 	}
}

/**
 * Function added for TD#791
 */
function onClickDepartConfirmationForSC(response)
{
	if(response==true){
		onClickDepartDeleteServiceCallData();
 	}
}

//R9.0 TD#2055 - To add new validation of minimum 15 mins. to be submitted for a 99k job type
function getHelperTotalTimeForSafetyJob(jobId){
	try{

		var totalTimeForHelper = 0;
		var sql = "select SUM(JT.RegWorkMin+JT.OT1WorkMin+JT.OT2WorkMin+JT.OT3WorkMin) as totalWorkTime from SafetyJobTime JT,  SafetyTrainingJobHelper JH  where JH.MechanicId = JT.MechanicId and JT.jobid =  "+jobId+" and JH.jobid = "+jobId ; 
		getAllSelectQuery(getHelperTotalTime_SuccessCallBack, getHelperTotalTime_ErrorCallBack, sql);
		
		function getHelperTotalTime_SuccessCallBack(res) {
			try {
				kony.print("getHelperTotalTime_SuccessCallBack - "+JSON.stringify(res));
		        if (null != res && res.length > 0) 
		        {
		            for (var i in res) 
		            { 
					    if(res[i]["totalWorkTime"] != null && res[i]["totalWorkTime"] != 'NULL'){
					    	totalTimeForHelper = totalTimeForHelper + parseInt(res[i]["totalWorkTime"]);
					    } else {
							kony.print("do nothing");
						}
					}
				} else {
					kony.print("do nothing");
				}
			}
			catch(err)
			{
				kony.print("Exception in getHelperTotalTime_SuccessCallBack : "+err);
				globalException("menu","getHelperTotalTime_SuccessCallBack",err);
			}
			return totalTimeForHelper;
		}
	
		function getHelperTotalTime_ErrorCallBack(res){
			kony.print("Error getHelperTotalTime_ErrorCallBack -- "+JSON.stringify(res));
		}
		return totalTimeForHelper;
		
	}catch(err){
		kony.print("Exception in getHelperTotalTimeForSafetyJob : "+err);
		globalException("Menu", "getHelperTotalTimeForSafetyJob", err);
	}

}
