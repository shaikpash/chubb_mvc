/**
*	@author Maxime Castagnet
*	@creation 18/07/2018
*	this script contains the MVC pattern applied to the survey object of the UNItec application.
*	Each time it is requested, a Survey object will be created with a set of questions
*	on survey completion, the survey object will return a set of answers associated with these questions and destroy itself.
*/

function Action(type) {
  this.type = type;

  switch(type) {
    case "hide" :
    case "show" :
      this.field = arguments[1];
      this.survey = arguments[2];
      break;
    case "alert" : 
    default :
      this.msg = arguments[1];
      break;
  }
}

Action.prototype.setKey = function(key) {
  this.key = key;
};

Action.prototype.execute = function() {
  switch (this.type) {
    case "hide" :
      this.field.hide();
      this.survey.setInstanceCoordinates(this.field.id, this.field.top );
      break;
    case "show" :
      this.field.show();
      this.survey.setInstanceCoordinates(this.field.id, this.field.top );
      break;
    case "alert" :
    default :
      if(that.formLoaded == true){
        alert(this.msg);
      }else{
      	that.alertMsg.push(this.msg);
      }
  	break;
  }  
};