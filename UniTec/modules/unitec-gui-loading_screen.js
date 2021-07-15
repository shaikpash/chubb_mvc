// -------------------------------------------------------------------------------------------------
// Responsability: show loading screen on events
// -------------------------------------------------------------------------------------------------
if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.gui) === "undefined") { unitec.gui = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.gui.LoadingScreen = function() {

  // ---------------------------------------------------------------------------------------------
  this.formatSyncMessage = function(syncInfo) {
    var lines = [];

    function formatUpOrDown(direction, directionInfo) {
      var info = null;
      if (!unitec.lang.isNull(directionInfo)) {
        line += " : " + direction + " : ";
        if (directionInfo.done)
          line += "OK";
        else if (!unitec.lang.isNull(directionInfo.totalCount)) // on going
          line += (directionInfo.totalCount - directionInfo.pendingCount).toString();// + "/" + directionInfo.totalCount.toString();
        else // on going (unknown count)
          line += "...";
      }
      return info;
    };

    lines.push(syncInfo.reason);
    if (!unitec.lang.isNull(syncInfo.attempt)) {
      var attemptInfo = "Tentative " + syncInfo.attempt;
      if (!unitec.lang.isNull(syncInfo.maxAttempts))
        attemptInfo += " / " + syncInfo.maxAttempts;
      lines.push(attemptInfo);
    }

    for (var scope in syncInfo.scopes) {
      var line = scope;
      if (!unitec.lang.isNull(syncInfo.scopes[scope].success) && !syncInfo.scopes[scope].success) {
        line += " : erreur";
      }
      else {
        var upInfo = formatUpOrDown("up", syncInfo.scopes[scope].upload);
        var downInfo = formatUpOrDown("down", syncInfo.scopes[scope].download);

        line += unitec.lang.coalesce(upInfo, "");
        if (!unitec.lang.isNull(upInfo) && !unitec.lang.isNull(downInfo))
          line += " ,";
        line += unitec.lang.coalesce(downInfo, "");
      }

      lines.push(line);
    }

    return lines.join("\n");
  };

};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.show = function(text) {
  // TODO better algorithm
  text = (text == undefined) ? "" : text;
  var skin = (text.length == 0) ? sknBlockedDots : sknBlockedTxt;
  var dotsColor = "FFFFFF00";

  text = " " + text + " \n";
  this.hide();
  kony.application.showLoadingScreen(skin, text, constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, { progressIndicatorColor : dotsColor});
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.hide = function() {
  kony.application.dismissLoadingScreen();
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.prepareSync = function(syncInfo, isHistory) {
  //	this.hide();
  if(isHistory) this.show("Enregistrement de l'historique...");
  else this.show(this.formatSyncMessage(syncInfo));
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.closeSync = function(succeed, isHistory) {
  this.hide();
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.onSyncStart = function(syncInfo) {
  //	this.hide();
  this.show(this.formatSyncMessage(syncInfo));
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.onSyncEnd = function(syncInfo) {
  this.hide();
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.onScopeStart = function(syncInfo) {
  //	this.hide();
  this.show(this.formatSyncMessage(syncInfo));
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.onScopeError = function(syncInfo) {
  this.hide();
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.onScopeSuccess = function(syncInfo) {
  //	this.hide();
  this.show(this.formatSyncMessage(syncInfo));
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.onDownloadStart = function(syncInfo) {
  //	this.hide();
  this.show(this.formatSyncMessage(syncInfo));
};


// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.onDownloadSuccess = function(syncInfo) {
  //	this.hide();
  this.show(this.formatSyncMessage(syncInfo));
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.onUploadStart = function(syncInfo) {
  //	this.hide();
  this.show(this.formatSyncMessage(syncInfo));
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.onUploadSuccess = function(syncInfo) {
  //	this.hide();
  this.show(this.formatSyncMessage(syncInfo));
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.onBatchProcessingStart = function(syncInfo) { };

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.onBatchProcessingSuccess = function(syncInfo) {
  //	this.hide();
  this.show(this.formatSyncMessage(syncInfo));
};

// below functions are called for the syncHistory update only
// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.prepareHistorySync = function() {
  this.show("Enregistrement de l'historique...");
};

// -------------------------------------------------------------------------------------------------
unitec.gui.LoadingScreen.prototype.prepareHistorySync = function() {
  this.hide();
};
