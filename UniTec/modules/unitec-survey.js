/**
*	@author Maxime Castagnet
*	@creation 17/07/2018
*	this script contains the MVC pattern applied to the survey object of the UNItec application.
*	Each time it is requested, a Survey object will be created with a set of fields
*	on survey completion, the survey object will return a set of answers associated with these fields and destroy itself.
*/

function Survey () {
  that = this;

  // survey variables
  this.model = {};
  this.form = frmSurvey;
  this.header = this.form.hbxWOReference;
  this.headerLabel = this.header.lblWOReference;
  this.title = this.form.hbxTitle.lblTitle;
  this.container = this.form.hbxSurvey;
  this.appMenu = this.form.hbxAppMenu;
  this.fields = [];
  this.fieldMargin = 10;
  this.onCompletion = undefined;
  this.onCancellation = undefined;
  this.appMenuType = "default";
  this.alertMsg = [];
  this.formLoaded = false;
  
  this.appMenuOptions = {
    "checkOnly" : ["check"],
    "backOnly" : ["back"],
    "default" : ["back","check"]
    
  };

  // form event handlers
  var onInit = function() {

  };

  var onShow = function() {
    navigationModel.push();
    that.buildView();
  };
  
  var onPostShow = function() {
    dismissSyncLoadingScreen();
    
    for(var i = 0; i < that.alertMsg.length; i++){
      alert(that.alertMsg[i]);
    }
    that.alertMsg.length = 0;
    that.formLoaded = true;
  };

  // form events
  this.form.init = onInit;
  this.form.preShow = onShow;
  this.form.postShow = onPostShow;

  //form widget event handlers
  var onReturnClick = function (){
    that.formLoaded = false;
    that.close(false);
  };
  
  var onSaveClick = function () {
    that.formLoaded = false;
    that.close(true);
  };

  var onFinishClick = function (){
    if(that.areMandatoryFieldsCompleted()) {
      that.formLoaded = false;
      that.close(true);
    } else {
      var msg = "Veuillez renseigner tous les champs marqués avec un astérisque * avant de clôturer le questionnaire.";
      that.warnUser(msg);
    }
  };

  // form widget events
//  this.appMenu.hbxCancelSurvey.onClick = onReturnClick;
//  this.appMenu.hbxConfirmSurvey.onClick = onConfirmClick;
  this.appMenuActions = {
    "back" : onReturnClick,
    "save" : onSaveClick,
    "check" : onFinishClick
  };

}

Survey.prototype.open = function(surveyType, onCompletion, onCancellation) {

  showSyncLoadingScreen("Chargement en cours, veuillez patienter...");
  var that = this;

  var defineCallBacks = function(onCompletion, onCancellation) {

    if(!validationModel.isNull(onCompletion)) {
      that.onCompletion = onCompletion;
    }
    else {
      that.onCompletion = navigationModel.doReturn;
    }

    if(!validationModel.isNull(onCancellation)) {
      that.onCancellation = onCancellation;
    }
    else {
      that.onCancellation = navigationModel.doReturn;
    } 
  };

  var recoverFAREntries = function(refs) {
    var results = questionnaireModel2.findWORelatedSurveyReferences(refs);
    var articleReferences = [];

    for(var index in results) {
      articleReferences.push(results[index].ITM);
    }

    return articleReferences;
  };

  var referenceItems = [];
  switch(surveyType) {
    case "sample" :
      that.appMenuType = 'default';
      referenceItems = [41075818];
      break;
    case "FAR" :
      that.appMenuType = 'checkOnly';
      referenceItems = recoverFAREntries(['QF']);
      break;
    case "FAR2" :
      that.appMenuType = 'checkOnly';
      referenceItems = recoverFAREntries(['QF2']);
      break;
    case "FARSUMMARY" : 
      that.appMenuType = 'default';
      referenceItems = recoverFAREntries(['QF2']);
    default :
      break;
  }

  if(referenceItems.length === 0) {
    this.onLoadError();
  } 
  else {
    defineCallBacks(onCompletion, onCancellation);

    var woProfile = {
      equipmentNumber : null,
      doco : workOrder.doco,
      dcto : workOrder.dcto  	
    };

    var locationProfile = {
      AN8 : workOrder.siteAN8
    };

    var userProfile = {
      AN8 : login.user.AN8
    };

    this.model = new SurveyModel(referenceItems, surveyType, woProfile, locationProfile, userProfile);
    this.getSummaryData();
  }
};

Survey.prototype.getSummaryData = function() {
  var that = this;

  var setHeader = function(workOrder) {
    that.headerLabel.text = workOrder.getReference() + "\n" + workOrder.status;
    that.header.backgroundColor = workOrder.color;
  };

  var setSurveyName = function(name) {
    that.title.text = name;
  };

  var onSuccess = function(data) {
    setHeader(data.workOrder);
    setSurveyName(data.name);
    that.getContentData();
  };

  var onError = function() {
    that.onLoadError();
  };

  this.model.getSummaryData(onSuccess, onError);
};

Survey.prototype.getContentData = function() {
  var that = this;

  var onError = function() {
    that.onLoadError();
  };

  var onSuccess = function() {
    that.buildModel();
    that.onLoadSuccess();
  };

  this.model.getContentData(onSuccess, onError);
};

Survey.prototype.buildModel = function() {

  var fields = this.model.fields;
  var actions = this.model.actions;

  for(var modelFieldIndex in fields) {
    var nextRow = fields[modelFieldIndex];
    if(validationModel.isNull(nextRow.type)) nextRow.type = "comment";
    
    var input = {
      key : nextRow.inputKey,
      value : nextRow.inputValue,
      type : nextRow.inputType.type,
      isMandatory : nextRow.isMandatory,
      permittedValues : nextRow.inputType.permittedValues
    };
    
    var nextField = new Field(nextRow.label, input, nextRow.type, nextRow.refQst, nextRow.refPref);
    nextField.updateVisibility(!nextRow.isHidden);
    this.fields.push(nextField);
  }

  for(i = 0; i < actions.length; i++) {
    var nextAction = actions[i];
    var field = this.fields[nextAction.field];
    var nextActionType = nextAction.type;

    if(nextActionType === "alert") {
      field.addAction(nextAction.btn, new Action("alert", nextAction.value));
    }
    else if(nextActionType === "showhide" || nextActionType === "showhidereversed") {
      var targetField = this.fields[nextAction.target];
      var showKey = nextActionType === "showhide" ? "01" : "NULL";
      var hideKey = showKey === "01" ? "NULL" : "01";
      field.addAction(showKey, new Action("show", targetField, this));
      field.addAction(hideKey, new Action("hide", targetField, this));
    }  
  }
};

Survey.prototype.buildView = function() {
  this.setInstanceCoordinates();

  for(var i = 0; i < this.fields.length;i++) {
    this.container.add(this.fields[i].instanciate());
  }
  
  for(var index in this.fields) {
    var nextField = this.fields[index];
    nextField.updateInput(nextField.inputKey, nextField.inputValue);
  }
  
  this.setAppMenu();
};

Survey.prototype.setAppMenu = function() {
  // what buttons should be displayed ?
  var that = this;
  var optionsToInstanciate = [];
  var containerLocations = [];
  
  var setAppMenuParameters = function() {
    optionsToInstanciate = that.appMenuOptions[that.appMenuType];
      
    switch(optionsToInstanciate.length) {
      case 2 :
        containerLocations.push({right : "55%", left : "Default"});
        containerLocations.push({left : "55%", right : "Default"});
        break;
      case 1 :
        containerLocations.push({left : "43%", right : "Default"});
        break;
      default :
        containerLocations.push({left : "43%", right : "Default"});
        break;
    }
  };
  
  var createAppMenuButtonInstance = function(index, type) {
    var flexProperties = {
      id : "flxAppMenu" + type + index,
      skin : "slFbox",
      isVisible : true
    };

    var flexLayout = {
      left : containerLocations[index].left,
      right : containerLocations[index].right,
      top : "0dp",
      width: "50dp",
      height: "100%"
    };

    var flexPSP = {};

    var container = new kony.ui.FlexContainer(flexProperties,flexLayout,flexPSP);
    container.onClick = that.appMenuActions[type]; // adding form action to app menu button
    var imgWidget = createImageWidget(index, type);
    container.add(imgWidget); // adding image within flex container.
    return container;
  };
  
  var createImageWidget = function(index, type) {
    
    var imgSources = {
      "check" : "check.png",
      "back" : "left.png"
    };
    
    var imgProperties = {
      id : "img" + type + index,
      skin : "slImage",
      src : imgSources[type],
      isVisible : true
    };

    var imgLayout = {
      left : "0dp",
      top : "0dp",
      width: "100%",
      height: "100%"
    };

    var imgPSP = {};

    return new kony.ui.Image2(imgProperties,imgLayout,imgPSP);
  }; // called within createdhbxWidget
  
  setAppMenuParameters();
  that.appMenu.removeAll()
  for(var i = 0; i < optionsToInstanciate.length;i++) {
    var newInstance = createAppMenuButtonInstance(i, optionsToInstanciate[i]);
    that.appMenu.add(newInstance);
  }
};

Survey.prototype.setInstanceCoordinates = function(fieldId, top) {  
  if(validationModel.isNull(top)) top = this.fieldMargin;
  var startIndex = (validationModel.isNull(fieldId)) ? 0 : this.fields.findIndex(function(field) {return field.id === fieldId;});

  for(var i = startIndex; i < this.fields.length; i++) {
    var nextTop = top;
    this.fields[i].setTop(nextTop);
    if(this.fields[i].isVisible) {
      top = nextTop + this.fieldMargin + this.fields[i].containerHeight;
    }
  }
};

Survey.prototype.close = function(isComplete) {
  if(validationModel.isNull(isComplete)) isComplete = false;

  if(isComplete) {
    this.saveModel();
    this.onCompletion();
  }
  else {
    this.onCancellation();
  }

  this.form.hbxSurvey.removeAll();
  this.header.backgroundColor = '000000';
  this.headerLabel.text = 'Référence BT';
  this.title.text = 'Questionnaire';
  this.fields = [];
  this.model = {};
  this.appMenu = this.form.hbxAppMenu;
  this.onCompletion = null;
  this.onCancellation = null;
  //frmSurvey.remove(frmSurvey.hbxAppMenu);
};

Survey.prototype.areMandatoryFieldsCompleted = function() {
  var allFieldsAreComplete = true;
  for(var i = 0; allFieldsAreComplete && i < this.fields.length;i++) {
    var field = this.fields[i];
    if(field.isMandatory && field.isVisible) {
      var key = field.inputKey;
      var value = field.inputValue;
      allFieldsAreComplete = ((key !== null && key!== undefined) || (value !== null && value!== undefined));      
    }

  }
  return allFieldsAreComplete;
};

Survey.prototype.saveModel = function() {

  // 1 : identify existing survey answer data
  var inputData = [];
  
  var formattedTypes = ["switch","radio"];
  var nonFormattedTypes = ["comment"];
  var noInputTypes = ["text"];

  for(var index in this.fields) {
    var nextField = this.fields[index];
	if(nextField.isUserEnabled) {
      var input = {
        code : nextField.refQst,
        refPref : nextField.refPref,
        inputKey : nextField.isVisible ? nextField.inputKey : null,
        inputValue : nextField.isVisible ?nextField.inputValue : null
      };

      inputData.push(input);  
    }
  }

  this.model.setUserInputData(inputData, null, this.warnUser);
};

Survey.prototype.warnUser = function(msg) {
  if(validationModel.isNull(msg)) msg = "Erreur lors du chargement du questionnaire : veuillez contacter le support Kony.";
  alert(msg);
};

Survey.prototype.onLoadError = function() {
  this.warnUser();
  this.close(false);  
};

Survey.prototype.onLoadSuccess = function() {
  this.form.show();
};
