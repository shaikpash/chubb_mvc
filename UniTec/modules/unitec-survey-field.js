/**
*	@author Maxime Castagnet
*	@creation 18/07/2018
*	this script contains the MVC pattern applied to the survey object of the UNItec application.
*	Each time it is requested, a Survey object will be created with a set of questions
*	on survey completion, the survey object will return a set of answers associated with these questions and destroy itself.
*/

function Field(label, input, type, refQst, refPref, refId) {
  
  if(validationModel.isNull(refId)) refId = "r" + (Math.floor(Math.random() * Math.floor(1000)) + 1000);
  
  this.type = type;
  this.id = refId;
  this.top = 0;
  this.actions = [];
  this.label = label;
  this.inputType = input.type;
  this.inputList = input.permittedValues;
  this.inputKey = input.key;
  this.inputValue = input.value;
  this.isVisible = true;
  this.instanciated = false;
  this.refQst = refQst;
  this.refPref = refPref;
  this.isUserEnabled = false;
  this.isMandatory = input.isMandatory;
  
  switch(type) {
    case "text" : 
  		this.containerHeight = 120;
      	this.isUserEnabled = true;
      break;
    case "switch" :
      this.containerHeight = 35;
      this.isUserEnabled = true;
      break;
    case "radio" :
      this.containerHeight = 35;
      this.isUserEnabled = true;
      break;
    case "comment" :
      this.containerHeight = 35;
      this.isUserEnabled = false;
      break;
    default :
      this.containerHeight = 35;
      this.isUserEnabled = false;
      break;
  }
}

Field.prototype.setTop = function(top) {
  this.top = top;
  if(this.instanciated) this.model.top = this.top;
};

Field.prototype.instanciate = function() {
  
  var field = this;
  var refId = field.id;
  var top = field.top;
  var containerHeight = field.containerHeight;
  var label = field.label;
  var key = field.inputKey;
  var value = field.inputValue;
  
  function createFieldFlexContainer() {
    
    if(validationModel.isNull(containerHeight)) containerHeight = 35;

    var flexProperties = {
      id : "flexQst" + refId,
      skin : "slFbox",
      isVisible : true
    };

    var flexLayout = {
      left : "0dp",
      top : top + "dp",
      width: "100%",
      height: containerHeight + "dp"
    };

    var flexPSP = {};

    return new kony.ui.FlexContainer(flexProperties,flexLayout,flexPSP);
  }
  
  function createFieldLabel(width, height) {
    
    if(validationModel.isNull(width)) width = 85;
    if(validationModel.isNull(height)) height = 100;
    
    var fieldLabel = label;
    if(field.isMandatory) fieldLabel = " * " + fieldLabel;
    
    var lblProperties = {
      id : "lblQst" + refId,
      skin : "sknLblSmall",
      text : fieldLabel,
      isVisible : true
    };

    var lblLayout = {
      left : "0dp",
      top : "0dp",
      width : width + "%",
      height :height + "%"
    };

    var lblPSP = {};

    return new kony.ui.Label(lblProperties,lblLayout,lblPSP);
  }

  function createFieldSwitch() {

    var switchProperties = {
      id : "swtQst" + refId,
      skin : "sknSwitch",
      isVisible : true
    };

    var switchLayout = {
      left : "352dp",
      top : "13%",
      width:"15%",
      height:"100%"
    };

    var switchPSP = {}; 

    var swt = new kony.ui.Switch(switchProperties,switchLayout,switchPSP);
    if(validationModel.isNull(key)) key = "NULL";
    swt.selectedIndex = key === "01" ? "0" : "1";

    swt.onSlide = function(e) {
      if(e.selectedIndex === 1) field.updateInput("NULL", null);
      else field.updateInput("01", null);
      //field.updateInput(e.selectedIndex, null);
    };
	return swt;
  } 
  
  function createFieldRadio() {

    var radioProperties = {
      id : "swtQst" + refId,
      skin : "sknRadioSurvey",
      focusSkin : "sknRadioSurveyFocus",
      masterData:[],
      isVisible : true
    };
    
    for(var index in field.inputList) {
      var nextInput = field.inputList[index];
      radioProperties.masterData.push([nextInput.key, nextInput.value]);
    }

    var radioLayout = {
      left : "331dp",
      top : "0dp",
      width:"20%",
      height:"100%"
    };

    var radioPSP = {
      viewType:constants.RADIOGROUP_VIEW_TYPE_TOGGLEVIEW
    }; 

    var radio = new kony.ui.RadioButtonGroup(radioProperties,radioLayout,radioPSP);
    radio.viewConfig = {
      toggleViewConfig : {
        enableTintColor : true,
        tintColor : 'ffffff00'
      }
  	};
    radio.selectedKeys = key === null ? null : [key];
    radio.onSelection = function(e) {
      field.updateInput(e.selectedKeys[0], null);
    };
    return radio;
  }
  
  function createFieldText() {
    
    var properties = {
      id : "txtQst" + refId,
      skin : "sknTxtBxVal",
      focusSkin :"sknTxtBxValF",
      isVisible : true
    };

    var layout = {
      left : "0dp",
      top : "46dp",
      width : "100%",
      height :"62%"
    };

    var psp = {};

    var comment = new kony.ui.TextBox2(properties,layout,psp);
    comment.text = value === null ? "" : value;
    comment.onEndEditing = function(e) {
      field.updateInput(null, e.text);
    };
    return comment;
  }

  var flex = createFieldFlexContainer();

  switch(this.type) {
    case "switch" :
      flex.add(createFieldLabel());
      flex.add(createFieldSwitch());
      break;
    case "radio" : 
      flex.add(createFieldLabel(80));
     flex.add(createFieldRadio());
      break; 
    case "text" : 
      flex.add(createFieldLabel(100,38));
      flex.add(createFieldText());
      break;
    case "comment" :
    default :
      flex.add(createFieldLabel(100));
      break;
  }

  this.model = flex;
  this.instanciated = true;
  this.setModelVisibility();
  return this.model;
};

Field.prototype.addAction = function(key, action) {
  action.setKey(key);
  this.actions.push(action);
};

Field.prototype.executeActions = function(fieldKey) {
  for(var i = 0; i < this.actions.length; i++)
    if(fieldKey !== undefined && this.actions[i].key == fieldKey) this.actions[i].execute();
};

Field.prototype.updateInput = function(key, value) {
  if((key === undefined || key === null) && (value === undefined || value === null)) return;
  this.inputKey = key;
  this.inputValue = value;
  this.executeActions(key);
};

Field.prototype.hide = function() {
  this.updateVisibility(false);
};

Field.prototype.show = function() {
  this.updateVisibility(true);
};

Field.prototype.updateVisibility = function(isVisible) {
  this.isVisible = isVisible;
  if(this.instanciated) this.setModelVisibility();
  
};

Field.prototype.setModelVisibility = function() {
  this.model.setVisibility(this.isVisible);
};