// -------------------------------------------------------------------------------------------------
// Responsability: log synchronisation events
// -------------------------------------------------------------------------------------------------
if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.db) === "undefined") { unitec.db = {}; }
if (typeof(unitec.db.model) === "undefined") { unitec.db.model = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.db.model.SyncEvents = function() {
  // ---------------------------------------------------------------------------------------------
  // Privileged functions

  var that = this; // Standard workaround for private / privileged functions

  // ---------------------------------------------------------------------------------------------
  this.currentUser = function() {
    return {
      Userid:	unitec.lang.coalesce(login.user.Userid, login.candidatUser.id, 0), // TODO replace globals
      AN8:	unitec.lang.coalesce(login.user.AN8, login.candidatUser.AN8, 0) // TODO replace globals
    };
  };

  // ---------------------------------------------------------------------------------------------
  this.resetCurrentSyncVariables = function() {
    that.currentSyncID = null;
    that.currentSyncStartTime = null;
    that.currentBatchSize = null;
  };

  // ---------------------------------------------------------------------------------------------
  this.resetCurrentScopeVariables = function() {
    that.currentSyncScopeName = null;
    that.currentSyncScopeStartTime = null;
    that.currentBatchNumber = 0;
    that.currentSyncBatchStartTime = null;
    that.currentBatchHistory = [];
  };

  // ---------------------------------------------------------------------------------------------
  this.flushBatchHistory = function() {
    var blockSize = 1000; // 1000 is SQLite upper limit for inserting records in one batch
    var historyBlocksCount = Math.ceil(this.currentBatchHistory.length / blockSize);
    for (var i = 0; i < historyBlocksCount; i++) {
      var historyBlock = this.currentBatchHistory.slice(i * blockSize, (i + 1) * blockSize);
      de.itgs.UploadOnly.SyncHistory.createAll(historyBlock, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
    }
    that.currentBatchHistory = [];
  };

  // ---------------------------------------------------------------------------------------------
  // Private attributes
  this.historyLevel = app_parameters.sync.historyLevel;
  this.MachineIP = null;
  this.MachineName = 'Generic mobile phone';
  this.resetCurrentSyncVariables();
  this.resetCurrentScopeVariables();
};

// -------------------------------------------------------------------------------------------------
// Class constants
unitec.db.model.SyncEvents.prototype.HISTORY_LEVEL_NONE = 0;
unitec.db.model.SyncEvents.prototype.HISTORY_LEVEL_SYNC = 1;
unitec.db.model.SyncEvents.prototype.HISTORY_LEVEL_SCOPES = 2;
unitec.db.model.SyncEvents.prototype.HISTORY_LEVEL_BATCHES = 3;

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.prepareSync = function(syncInfo, isHistory) {	
  if(isHistory) return;
  this.currentSyncID = this.currentUser().AN8 + datePrintCustom(new Date(), 'ddMMyyyyhhmmss');
  this.currentSyncStartTime = new Date();
  this.currentBatchSize = app_parameters.sync.batchSize;

  if (this.historyLevel >= this.HISTORY_LEVEL_SYNC) {
    var newHistory = new de.itgs.UploadOnly.SyncHistory();
    newHistory.SyncID = this.currentSyncID;
    newHistory.ScopeName = 'sync start';
    newHistory.ScopeStart = dateTimePrintSql(this.currentSyncStartTime);
    newHistory.ScopeEnd = 'ongoing';
    newHistory.BatchSize = this.currentBatchSize;
    newHistory.UserId = this.currentUser().Userid;
    newHistory.ApplicationVersion = global.kernel.getQualifiedVersion();
    newHistory.MachineIP = this.MachineIP;
    newHistory.MachineName = this.MachineName;
    newHistory.create(callBackModel.emptyCB, callBackModel.sqlErrorCB);
  }
};

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.closeSync = function(succeed, isHistory) {
  if(isHistory) return;
  if (this.historyLevel >= this.HISTORY_LEVEL_SYNC) {
    var newHistory = new de.itgs.UploadOnly.SyncHistory();
    newHistory.SyncID = this.currentSyncID;
    newHistory.ScopeName = (succeed ? 'sync success' : 'sync failed');
    newHistory.ScopeStart = dateTimePrintSql(this.currentSyncStartTime);
    newHistory.ScopeEnd = dateTimePrintSql(new Date());
    newHistory.BatchSize = this.currentBatchSize;
    newHistory.UserId = this.currentUser().Userid;
    newHistory.ApplicationVersion = global.kernel.getQualifiedVersion();
    newHistory.MachineIP = this.MachineIP;
    newHistory.MachineName = this.MachineName;
    newHistory.create(callBackModel.emptyCB, callBackModel.sqlErrorCB);
  }
  this.resetCurrentSyncVariables();
};

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.onSyncStart = function() {

};

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.onSyncEnd = function() {

};

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.onScopeStart = function(syncInfo) {

  this.currentSyncScopeName = syncInfo.currentScopeName;
  this.currentSyncScopeStartTime = new Date();
  this.currentBatchNumber = 1;

  if ('UploadOnly' != this.currentSyncScopeName && this.historyLevel >= this.HISTORY_LEVEL_SCOPES) {
    var newHistory = new de.itgs.UploadOnly.SyncHistory();
    newHistory.SyncID = this.currentSyncID;
    newHistory.ScopeName = this.currentSyncScopeName;
    newHistory.ScopeStart = dateTimePrintSql(this.currentSyncScopeStartTime);
    newHistory.ScopeEnd = "ongoing";
    newHistory.BatchSize = this.currentBatchSize;
    newHistory.UserId = this.currentUser().Userid;
    newHistory.ApplicationVersion = global.kernel.getQualifiedVersion();
    newHistory.MachineIP = this.MachineIP;
    newHistory.MachineName = this.MachineName;
    newHistory.create(callBackModel.emptyCB, callBackModel.sqlErrorCB);
  }
};

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.onScopeSuccess = function() {

  if ('UploadOnly' != this.currentSyncScopeName && this.historyLevel >= this.HISTORY_LEVEL_SCOPES) {
    if (this.currentBatchHistory.length > 0) {
      de.itgs.UploadOnly.SyncHistory.createAll(this.currentBatchHistory, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
    }
    var newHistory = new de.itgs.UploadOnly.SyncHistory();
    newHistory.SyncID = this.currentSyncID;
    newHistory.ScopeName = this.currentSyncScopeName;
    newHistory.ScopeStart = dateTimePrintSql(this.currentSyncScopeStartTime);
    newHistory.ScopeEnd = dateTimePrintSql(new Date());
    newHistory.BatchSize = this.currentBatchSize;
    newHistory.UserId = this.currentUser().Userid;
    newHistory.ApplicationVersion = global.kernel.getQualifiedVersion();
    newHistory.MachineIP = this.MachineIP;
    newHistory.MachineName = this.MachineName;
    newHistory.create(callBackModel.emptyCB, callBackModel.sqlErrorCB);
  }
  this.resetCurrentScopeVariables();
};

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.onScopeError = function() {

  if ('UploadOnly' != this.currentSyncScopeName && this.historyLevel >= this.HISTORY_LEVEL_SCOPES) {
    if (this.currentBatchHistory.length > 0) {
      de.itgs.UploadOnly.SyncHistory.createAll(this.currentBatchHistory, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
    }
    var newHistory = new de.itgs.UploadOnly.SyncHistory();
    newHistory.SyncID = this.currentSyncID;
    newHistory.ScopeName = this.currentSyncScopeName;
    newHistory.ScopeStart = dateTimePrintSql(this.currentSyncScopeStartTime);
    newHistory.ScopeEnd = "Finished with errors: " + dateTimePrintSql(new Date());
    newHistory.BatchSize = this.currentBatchSize;
    newHistory.UserId = this.currentUser().Userid;
    newHistory.ApplicationVersion = global.kernel.getQualifiedVersion();
    newHistory.MachineIP = this.MachineIP;
    newHistory.MachineName = this.MachineName;
    newHistory.create(callBackModel.emptyCB, callBackModel.sqlErrorCB);
  }
  this.resetCurrentScopeVariables();
};

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.onDownloadStart = function(syncInfo) { };

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.onDownloadSuccess = function(syncInfo) { };

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.onUploadStart = function(syncInfo) { };

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.onUploadSuccess = function(syncInfo) { };

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.onBatchProcessingStart = function() {

  this.currentSyncBatchStartTime = new Date();

  if ('UploadOnly' != this.currentSyncScopeName && this.historyLevel >= this.HISTORY_LEVEL_BATCHES) {
    var newHistory = { };
    newHistory.SyncID = this.currentSyncID;
    newHistory.ScopeName = this.currentSyncScopeName;
    newHistory.ScopeStart = dateTimePrintSql(this.currentSyncScopeStartTime);
    newHistory.ScopeEnd = "ongoing";
    newHistory.BatchId = this.currentBatchNumber;
    newHistory.BatchStart = dateTimePrintSql(this.currentSyncBatchStartTime);
    newHistory.BatchSize = this.currentBatchSize;
    newHistory.UserId = this.currentUser().Userid;
    newHistory.ApplicationVersion = global.kernel.getQualifiedVersion();
    newHistory.MachineIP = this.MachineIP;
    newHistory.MachineName = this.MachineName;
    this.currentBatchHistory.push(newHistory);
  }
};

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.onBatchProcessingSuccess = function() {

  if ('UploadOnly' != this.currentSyncScopeName && this.historyLevel >= this.HISTORY_LEVEL_BATCHES) {
    var newHistory = { };
    newHistory.SyncID = this.currentSyncID;
    newHistory.ScopeName = this.currentSyncScopeName;
    newHistory.ScopeStart = dateTimePrintSql(this.currentSyncScopeStartTime);
    newHistory.ScopeEnd = "ongoing";
    newHistory.BatchId = this.currentBatchNumber;
    newHistory.BatchStart = dateTimePrintSql(this.currentSyncBatchStartTime);
    newHistory.BatchEnd = dateTimePrintSql(new Date());
    newHistory.BatchSize = this.currentBatchSize;
    newHistory.UserId = this.currentUser().Userid;
    newHistory.ApplicationVersion = global.kernel.getQualifiedVersion();
    newHistory.MachineIP = this.MachineIP;
    newHistory.MachineName = this.MachineName;
    this.currentBatchHistory.push(newHistory);
  }
  this.currentBatchNumber++;
};

// below functions are called for the syncHistory update only
// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.prepareHistorySync = function() {
  //  alert('prepareHistorySync is called');
};

// -------------------------------------------------------------------------------------------------
unitec.db.model.SyncEvents.prototype.closeHistorySync = function() {
  //  alert('closeHistorySync is called');  
};
