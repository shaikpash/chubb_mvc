// -------------------------------------------------------------------------------------------------
// Responsability: Control synchronisation flow (with callbacks)
// -------------------------------------------------------------------------------------------------

if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.debug) === "undefined") { unitec.debug = {}; }
if (typeof(unitec.debug.core) === "undefined") { unitec.debug.core = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.debug.core.SyncControllerMock = function(realSyncController) {
	this.realSyncController = realSyncController;
	this.sync_activated = true;
	this.shall_success = true;
};

// -------------------------------------------------------------------------------------------------
unitec.debug.core.SyncControllerMock.prototype.syncShallSuccess = function() { this.shall_success = true; };
unitec.debug.core.SyncControllerMock.prototype.syncShallFail = function() { this.shall_success = false; };

// -------------------------------------------------------------------------------------------------
unitec.debug.core.SyncControllerMock.prototype.syncAll = function(onSuccessCB, onFailureCB) {
	if (!app_parameters.debug.no_sync) {
		this.realSyncController.syncAll(onSuccessCB, onFailureCB);
	}
	else if (this.shall_success) {
		if (undefined != onSuccessCB)
			onSuccessCB()
	}
	else if (!this.shall_success) {
		if (undefined != onFailureCB)
			onFailureCB();
	}
};

// -------------------------------------------------------------------------------------------------
unitec.debug.core.SyncControllerMock.prototype.syncUpOnly = function() {
	if (!app_parameters.debug.no_sync)
		this.realSyncController.syncUpOnly();
};

// -------------------------------------------------------------------------------------------------
unitec.debug.core.SyncControllerMock.prototype.syncWorkOrders = function() {
	if (!app_parameters.debug.no_sync)
		this.realSyncController.syncWorkOrders();
};

// -------------------------------------------------------------------------------------------------
unitec.debug.core.SyncControllerMock.prototype.saveUserWork = function() {
	if (!app_parameters.debug.no_sync)
		this.realSyncController.saveUserWork();
};

// -------------------------------------------------------------------------------------------------
unitec.debug.core.SyncControllerMock.prototype.syncOldUser = function(onSuccessCB, onFailureCB) {
	if (!app_parameters.debug.no_sync) {
		this.realSyncController.syncOldUser(onSuccessCB, onFailureCB);
	}
	else if (this.shall_success) {
		if (undefined != onSuccessCB)
			onSuccessCB()
	}
	else if (!this.shall_success) {
		if (undefined != onFailureCB)
			onFailureCB();
	}
};
