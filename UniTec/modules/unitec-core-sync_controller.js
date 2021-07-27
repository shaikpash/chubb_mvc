// -------------------------------------------------------------------------------------------------
// Responsability: Control synchronisation flow (with callbacks)
// -------------------------------------------------------------------------------------------------

if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.core) === "undefined") { unitec.core = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.core.SyncController = function(syncWrapper) {
  this.syncWrapper = syncWrapper;
  this.lock = false;
  this.isErrorMsgAlerted = false;
  var that = this;

  // lock system
  // ---------------------------------------------------------------------------------------------
  this.setSyncLock = function(isLocked) {
    that.lock = isLocked;
  };

  // ---------------------------------------------------------------------------------------------
  this.lockSync = function() {
    that.setSyncLock(true);
  };

  // ---------------------------------------------------------------------------------------------
  this.unlockSync = function() {
    that.setSyncLock(false);
  };

  // ---------------------------------------------------------------------------------------------
  this.isLockOpen = function() {
    return !that.lock;
  };

  this.checkAndLock = function(bypassLock) {
    if(validationModel.isNull(bypassLock)) bypassLock = false;
    var canProceed = (bypassLock || that.isLockOpen());
    if(!canProceed && app_parameters.debug.on) alert("sync already in progress - sync request is ignored.");
    that.lockSync();
    return canProceed;
  };
};

// -------------------------------------------------------------------------------------------------
unitec.core.SyncController.prototype.saveSyncHistory = function(onSuccessCB, onFailureCB, bypassLock) {

  if(!this.checkAndLock(bypassLock)) return;

  var that = this;

  function onSyncHistorySuccess() {
    that.unlockSync();
    onSuccessCB();
  }

  function onSyncHistoryFailure() {
    that.unlockSync();
    onFailureCB();
  }

  this.syncWrapper.syncHistory(onSyncHistorySuccess, onSyncHistoryFailure);
};

// -------------------------------------------------------------------------------------------------
unitec.core.SyncController.prototype.saveUserWork = function(onSuccessCB, onFailureCB, bypassLock, previousSyncFail) {

  if(!this.checkAndLock(bypassLock)) return;

  if(validationModel.isNull(previousSyncFail)) previousSyncFail = false;
  var customFailureCB = this.setErrorCB(onFailureCB);
  var that = this;

  function onSaveSuccess() {
    if(previousSyncFail) that.saveSyncHistory(onFailureCB, onFailureCB, true);
    else that.saveSyncHistory(onSuccessCB, customFailureCB, true);
  }

  function onSaveFailure() {
    if(previousSyncFail) that.saveSyncHistory(onFailureCB, onFailureCB, true);
    else that.saveSyncHistory(customFailureCB, customFailureCB, true);
  }

  this.syncWrapper.syncWorkOrders(onSaveSuccess, onSaveFailure);
};

// -------------------------------------------------------------------------------------------------
unitec.core.SyncController.prototype.syncAll = function(onSuccessCB, onFailureCB) {

  if(!this.checkAndLock(false)) return;

  var that = this;
  var customFailureCB = this.setErrorCB(onFailureCB);

  function onSyncAllSuccess() {
    databaseModel.createUniTecTableIndexes();
    var acknowledgedWOs = workOrderModel.acknoledgeReceivedWO();
    if(acknowledgedWOs) that.saveUserWork(onSuccessCB, customFailureCB, true, false);
    else that.saveSyncHistory(onSuccessCB, onSuccessCB, true);
  }

  function onSyncAllFailure() {
    databaseModel.createUniTecTableIndexes();
    var acknowledgedWOs = workOrderModel.acknoledgeReceivedWO();
    if(acknowledgedWOs) that.saveUserWork(customFailureCB, customFailureCB, true, true);
    else that.saveSyncHistory(customFailureCB, customFailureCB, true);
  }

  this.syncWrapper.syncAll(onSyncAllSuccess, onSyncAllFailure);
};

// -------------------------------------------------------------------------------------------------
unitec.core.SyncController.prototype.reconciliate = function(onSuccessCB, onFailureCB) {
  this.syncWrapper.reconciliate();
};

// -------------------------------------------------------------------------------------------------
unitec.core.SyncController.prototype.setErrorCB = function(failCB) {

  var onFailureInternalCB = function (konyParams) {
    var msg = "Une erreur de connexion s'est produite, veuillez réessayer ou contacter votre support.";
    
    if (app_parameters.sync.isDebugLogLevel || !that.isErrorMsgAlerted) {
      that.isErrorMsgAlerted = true;
      if(!validationModel.isNull(konyParams) && !validationModel.isNull(errorCode)) msg += " (code : " + konyParams.errorCode + ")";
      alert(msg);
    
      if (undefined != failCB)
        failCB();
    }
  };
  return onFailureInternalCB;
};
