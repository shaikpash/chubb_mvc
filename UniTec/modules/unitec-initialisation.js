// -------------------------------------------------------------------------------------------------
// Responsability: Build core application objects
// -------------------------------------------------------------------------------------------------

//    /!\    Global objects    /!\     TODO to remove when the whole application is built with arguments
if (typeof(global) === "undefined") { global = {}; }
global.db = null;
global.kernel = null;
global.log = null;
global.printTextsModel = null;
global.siteTopologyModel = null;
global.syncController = null;

// -------------------------------------------------------------------------------------------------
function initialiseCore() {
	var log = new unitec.core.Logger();
	
	// --------------------------------------------------
	// Database
	function onQueryError(error) {
		log.error("Database error: " + JSON.stringify(error));
		popupModel.showPopError("Database error: " + JSON.stringify(error)); // TODO replace with a beautiful MessagePopup class
	};
	
	var db = new unitec.db.DatabaseWrapper(log, onQueryError);
	var syncWrapper = new unitec.db.SyncWrapper(log);
	
	var printTextsModel = new unitec.db.model.PrintTexts(db);
	var siteTopologyModel = new unitec.db.model.SiteTopology(db);
	var syncEvents = new unitec.db.model.SyncEvents();
	
	syncWrapper.registerObserver(syncEvents);
	
	// --------------------------------------------------
	// Core
	var kernel = new unitec.core.Kernel();
	var syncController = new unitec.core.SyncController(syncWrapper);
	
	// --------------------------------------------------
	// GUI
	var loadingScreen = new unitec.gui.LoadingScreen();
	
	// --------------------------------------------------
	// Bind GUI to core/db objects
	syncWrapper.registerObserver(loadingScreen);
	
	db.setPreQueryHook(function() { loadingScreen.show(); });
	db.setPostQueryHook(function() { loadingScreen.hide(); });
	
	// --------------------------------------------------
	// Debug
	if (app_parameters.debug.on) {
		syncController = new unitec.debug.core.SyncControllerMock(syncController);
	}
	
	// --------------------------------------------------
	// export -     /!\     TODO to remove when the whole application is built with arguments
	global.db = db;
	global.kernel = kernel;
	global.log = log;
	global.printTextsModel = printTextsModel; 
	global.siteTopologyModel = siteTopologyModel;
	global.syncController = syncController;
  
  	// --------------------------------------------------
  	// loading application modules
  	global.survey = new Survey();
  	global.customerNotification = new CustomerNotification();
	
	// --------------------------------------------------
	db.init();
	
	log.trace(kernel.getQualifiedVersion() + ' kernel initialised with sync ' + kernel.getSyncVersion() + '.');
}
