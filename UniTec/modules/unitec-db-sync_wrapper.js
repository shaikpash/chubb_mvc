// -------------------------------------------------------------------------------------------------
// Responsability: Provide developer-friendly synchronisation API
// -------------------------------------------------------------------------------------------------

if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.db) === "undefined") { unitec.db = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.db.SyncWrapper = function (log) {
  // ---------------------------------------------------------------------------------------------
  // Privileged functions

  var that = this; // Standard workaround for private / privileged functions
  this.ALL = 0;
  this.UPONLY = 2;
  this.WO = 3;
  this.WOUP = 6;
  this.OLDUSER = 4;
  this.HISTORY = 5;
  this.type = null;

  // ---------------------------------------------------------------------------------------------
  this.resetCurrentSyncVariables = function() {
    that.currentSync = { reason : null, attempt: null, maxAttempts: that.MaxAttempts, scopes : {}, currentScopeName : null };
  };

  function isHistory() {
    return !validationModel.isNull(that.type) && that.type == that.HISTORY;
  }

  // ---------------------------------------------------------------------------------------------
  this.updateCurrentScopes = function(konyParams) {
    var isDown = !unitec.lang.isNull(konyParams.downloadRequest);
    var isUp = !unitec.lang.isNull(konyParams.uploadRequest);

    function updateScope(scope) {
      if (!unitec.lang.isNull(konyParams.batchcontext) && isDown) {
        if (unitec.lang.isNull(scope.download)) {
          scope.download = { pendingCount: null, totalCount: null, done: false };
          scope.download.totalCount = konyParams.batchcontext.pendingbatches + 1;
        }
        scope.download.pendingCount = konyParams.batchcontext.pendingbatches;
      }
      if (isUp && unitec.lang.isNull(scope.upload)) {
        scope.upload = { done: false };
      }
    }

    that.currentSync.currentScopeName = unitec.lang.coalesce(konyParams.currentScope, 'Unknown scope name');

    if (!that.currentSync.scopes.hasOwnProperty(that.currentSync.currentScopeName)) {
      that.currentSync.scopes[that.currentSync.currentScopeName] = { success : null};
    }

    updateScope(that.currentSync.scopes[that.currentSync.currentScopeName]);
  };

  // ---------------------------------------------------------------------------------------------
  this.prepareSync = function(konyParams) {
    that.observers.forEach(function(observer) { observer.prepareSync(that.currentSync, isHistory()); });
  };

  // ---------------------------------------------------------------------------------------------
  this.closeSync = function(succeed) {
    that.observers.forEach(function(observer) { observer.closeSync(succeed, isHistory()); });
  };

  // ---------------------------------------------------------------------------------------------
  this.onSyncStart = function(konyParams) {
    if(!isHistory()) that.observers.forEach(function(observer) { observer.onSyncStart(that.currentSync); });
  };

  // ---------------------------------------------------------------------------------------------
  this.onSyncEnd = function() {
    if(!isHistory()) that.observers.forEach(function(observer) { observer.onSyncEnd(that.currentSync); });
  };

  // ---------------------------------------------------------------------------------------------
  this.onScopeStart = function(konyParams) {
    if(!isHistory()) {
      that.updateCurrentScopes(konyParams);
      that.observers.forEach(function(observer) { observer.onScopeStart(that.currentSync); });
    }
  };

  // ---------------------------------------------------------------------------------------------
  this.onScopeError = function(konyParams) {
    if(!isHistory()) {
      
      if (!validationModel.isNull(that.currentSync) && !validationModel.isNull(that.currentSync.scopes) && (that.currentSync.scopes.length > 0) && !validationModel.isNull(that.currentSync.currentScopeName)) {
	      that.currentSync.scopes[that.currentSync.currentScopeName].success = false;
      }

      that.observers.forEach(function(observer) { observer.onScopeError(that.currentSync); });
    }  
  };

  // ---------------------------------------------------------------------------------------------
  this.onScopeSuccess = function(konyParams) {
    if(!isHistory()) {
      var currentScopeName = unitec.lang.coalesce(konyParams.currentScope, 'Unknown scope name');
      if(!validationModel.isNull(that.currentSync.scopes[currentScopeName])){		//Arati:changed code for Issue#93
        that.currentSync.scopes[currentScopeName].success = true;
        that.observers.forEach(function(observer) { observer.onScopeSuccess(that.currentSync); });
      }
    }
  };

  // ---------------------------------------------------------------------------------------------
  this.onDownloadStart = function(konyParams) {
    if(!isHistory()) {
      that.updateCurrentScopes(konyParams);
      that.observers.forEach(function(observer) { observer.onDownloadStart(that.currentSync); });
    }
  };

  // ---------------------------------------------------------------------------------------------
  this.onDownloadSuccess = function(konyParams) {
    if(!isHistory()) {
      var currentScopeName = unitec.lang.coalesce(konyParams.currentScope, 'Unknown scope name');
      that.currentSync.scopes[currentScopeName].download.done = true;
      that.observers.forEach(function(observer) { observer.onDownloadSuccess(that.currentSync); });
    } 
  };

  // ---------------------------------------------------------------------------------------------
  this.onUploadStart = function(konyParams) {
    if(!isHistory()) {
      that.updateCurrentScopes(konyParams);
      that.observers.forEach(function(observer) { observer.onUploadStart(that.currentSync); });
    }
  };

  // ---------------------------------------------------------------------------------------------
  this.onUploadSuccess = function(konyParams) {

    if(!isHistory()) {
      var currentScopeName = unitec.lang.coalesce(konyParams.currentScope, 'Unknown scope name');
      that.currentSync.scopes[currentScopeName].upload.done = true;  
      that.observers.forEach(function(observer) { observer.onUploadSuccess(that.currentSync); });
    }
  };

  // ---------------------------------------------------------------------------------------------
  this.onBatchStored = function(konyParams) {};

  // ---------------------------------------------------------------------------------------------
  this.onBatchProcessingStart = function(konyParams) {
    if(!isHistory()) that.observers.forEach(function(observer) { observer.onBatchProcessingStart(that.currentSync); });
  };

  // ---------------------------------------------------------------------------------------------
  this.onBatchProcessingSuccess = function(konyParams) {
    if(!isHistory()){
    	that.updateCurrentScopes(konyParams);
      	that.observers.forEach(function(observer) { observer.onBatchProcessingSuccess(that.currentSync); });
    } 
  };
  
  // ---------------------------------------------------------------------------------------------
  this.onChunkStart = function(konyParams) {};
  
  // ---------------------------------------------------------------------------------------------
  this.onChunkSuccess = function(konyParams) {};
  
  // ---------------------------------------------------------------------------------------------
  this.onChunkError = function(konyParams) {};
  
  // ---------------------------------------------------------------------------------------------
  this.onRetry = function(konyParams) {};

  // ---------------------------------------------------------------------------------------------
  // Private attributes
  this.log = log;
  this.observers = [];
  this.MaxAttempts = app_parameters.sync.maxAttempts;
  this.resetCurrentSyncVariables();

  this.DEFAULT_CONFIGURATION = {
    userid :					app_parameters.sync.userID,
    password :					app_parameters.sync.password,
    appid :						app_parameters.sync.appID,
    issecure :					app_parameters.sync.isSecure,
    serverhost :				app_parameters.sync.serverHost,
    serverport :				app_parameters.sync.serverPort,
    batchsize :					-1, // to be defined in this.startSync function, while may change during application run
    onsyncstart :				this.onSyncStart,
    onsyncsuccess :				this.onSyncEnd,	// should be overwritten in this.startSync function
    onsyncerror :				this.onSyncEnd,	// should be overwritten in this.startSync function
    onscopestart :				this.onScopeStart,
    onscopeerror :				this.onScopeError,
    onscopesuccess :			this.onScopeSuccess,
    onuploadstart :				this.onUploadStart,
    onuploadsuccess :			this.onUploadSuccess,
    ondownloadstart :			this.onDownloadStart,
    ondownloadsuccess :			this.onDownloadSuccess,
    onbatchstored :				this.onBatchStored,
    onbatchprocessingstart :	this.onBatchProcessingStart,
    onbatchprocessingsuccess :	this.onBatchProcessingSuccess,
    onchunkstart :				this.onChunkStart,
    onchunksuccess :			this.onChunkSuccess,
    onchunkerror :				this.onChunkError,
    onretry : 					this.onRetry,
    numberofretryattempts : 	3,
    retrywaittime : 			5,
    sessiontasks : 				{}	// to be defined in this.startSync function
    //devicedbencryptionkey: "ITGS$2016&*"
  };
};

// -------------------------------------------------------------------------------------------------
unitec.db.SyncWrapper.prototype.registerObserver = function(observer) {
  this.observers.push(observer);
};

// -------------------------------------------------------------------------------------------------
unitec.db.SyncWrapper.prototype.startSync = function(reason, config, attempt, onSuccessCB, onFailureCB) {
  var that = this;
  attempt = attempt || 1;

  this.resetCurrentSyncVariables();
  this.currentSync.reason = reason;
  this.currentSync.attempt = attempt;

  if (1 == attempt) {
    this.prepareSync();
  }

  function syncEndProcess(success, konyParams) {
    that.onSyncEnd();
    that.closeSync(success);
    if(success) onSuccessCB(konyParams);
    else onFailureCB(konyParams);
  }

  function onSyncSuccess (konyParams) {
    syncEndProcess(true, konyParams);
  }

  function onSyncError (konyParams) {
    that.log.error("sync error: " + JSON.stringify(konyParams));

    if (that.currentSync.attempt < that.MaxAttempts) that.startSync(reason, config, that.currentSync.attempt + 1, onSuccessCB, onFailureCB);
    else syncEndProcess(false, konyParams);
  }

  var fullConfig = unitec.lang.hash.merge(this.DEFAULT_CONFIGURATION, {
    batchsize : app_parameters.sync.batchSize,
    chunksize : app_parameters.sync.chunkSize,
    networktimeout : app_parameters.sync.networkTimeOut,
    onsyncsuccess : onSyncSuccess,
    onsyncerror : onSyncError,
    filterparams : sync_filterparams()	// TODO improve that: get filter params in another way
  });

  fullConfig = unitec.lang.hash.merge(fullConfig, config);
  this.log.trace(fullConfig.filterparams);
  sync.startSession(fullConfig);
};

// -------------------------------------------------------------------------------------------------
unitec.db.SyncWrapper.prototype.startReconciliation = function() {

  var loadingScreen = new unitec.gui.LoadingScreen();

  function onReconciliationStart() {
    loadingScreen.show("Réconciliation des données locales / serveur...");
  }

  function closeReconciliation(errorMsg) {
    loadingScreen.hide();
    loadingScreen = null;

    var message = "Réconciliation terminée.";
    if(errorMsg.length > 0) message += " Des erreurs ont eu lieu lors de la réconciliation : " + errorMsg;
    popupModel.showPopError(message);
  }

  function onReconciliationError(errorInfo) {
    closeReconciliation("" + JSON.stringify(errorInfo));
  }

  function onReconciliationSuccess() {
    closeReconciliation("");
  }

  var reconciliationConfig = {
    "WorkOrders" : []
  };

  var fullConfig = unitec.lang.hash.merge(this.DEFAULT_CONFIGURATION, {
    batchsize : app_parameters.sync.batchSize,
    chunksize : app_parameters.sync.chunkSize,
    networktimeout : app_parameters.sync.networkTimeOut,
    reconciliation : reconciliationConfig,
    reconcilebulkgetbatchsize : "2",
    reconciledownloadbatchsize : "100",
    // reconciliation custom events
    onreconciliationstart : onReconciliationStart,
    onreconciliationerror : onReconciliationError,
    onreconciliationsuccess : onReconciliationSuccess
  });

  this.log.trace(fullConfig.filterparams);
  sync.startReconciliation(fullConfig);
};

// -------------------------------------------------------------------------------------------------
unitec.db.SyncWrapper.prototype.setSync = function(type, onSuccessCB, onFailureCB) {

  var Login, Masterdata, WorkOrders, UploadOnly, syncMsg;
  this.type = type;
  var uploadFlag = app_parameters.sync.upload_activated;

  function setSessionTask(doUpload, doDownload) {
    return { doupload: doUpload, dodownload: doDownload, uploaderrorpolicy: "continueonerror" };
  }

  // by default, all syncs set to false. Depending on the scenario, some scenarios will be updated.
  Login =			setSessionTask(false, false);
  Masterdata =	setSessionTask(false, false);
  WorkOrders =	setSessionTask(false, false);
  UploadOnly =	setSessionTask(false, false);
  syncMsg = 		"Synchronisation en cours...";

  switch(type) {
    case this.HISTORY :
      UploadOnly =	setSessionTask(true, false);
      syncMsg = 		"Mis à jour de l'historique...";
      break;
    case this.WO :
      WorkOrders =	setSessionTask(uploadFlag, false);
      Login =			setSessionTask(uploadFlag, false);
      syncMsg = 		"Sauvegarde en cours...";
      break;
    case this.ALL :
    default :
      Login =			setSessionTask(uploadFlag, true);
      Masterdata =	setSessionTask(uploadFlag, true);
      WorkOrders =	setSessionTask(uploadFlag, true);
      break;
  }

  var config = {
    sessiontasks : {
      Login:		Login,
      Masterdata:	Masterdata,
      WorkOrders: WorkOrders,
      UploadOnly: UploadOnly
    }
  };

  this.startSync(syncMsg, config, 1, onSuccessCB, onFailureCB);
};

// -------------------------------------------------------------------------------------------------
unitec.db.SyncWrapper.prototype.syncAll = function(onSuccessCB, onFailureCB) {
  this.MaxAttempts = app_parameters.sync.maxAttempts;
  this.setSync(this.ALL, onSuccessCB, onFailureCB);
};

// -------------------------------------------------------------------------------------------------
unitec.db.SyncWrapper.prototype.syncWorkOrders = function(onSuccessCB, onFailureCB) {
  this.MaxAttempts = app_parameters.sync.maxAttempts;
  this.setSync(this.WO, onSuccessCB, onFailureCB);
};

// -------------------------------------------------------------------------------------------------
unitec.db.SyncWrapper.prototype.syncHistory = function(onSuccessCB, onFailureCB) {
  this.MaxAttempts = 1;
  this.setSyncHistoryUser();
  this.setSync(this.HISTORY, onSuccessCB, onFailureCB);
};

// -------------------------------------------------------------------------------------------------
unitec.db.SyncWrapper.prototype.reconciliate = function() {
  this.startReconciliation();
};

// -------------------------------------------------------------------------------------------------
unitec.db.SyncWrapper.prototype.setSyncHistoryUser = function() {
  var sql = "select userid value from users limit 1";
  executeSql(sql, callBackModel.valueSuccessCB, eventErrorCallBack);
  var userId = validationModel.isNull(callBackModel.result) ? 0 : callBackModel.result;

  var updateSql = " where userid = 0 ";
  var values = {UserId : userId};
  de.itgs.UploadOnly.SyncHistory.update(updateSql, values, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
};
