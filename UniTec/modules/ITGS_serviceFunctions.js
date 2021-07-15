// service management module.
// contains default call functions for asynchronous services and common logic and builder.

// call functions
function identifyUniTecUser(AN8, requestId, successCallBack) {
  	var service = new serviceInvoker("identifyUniTecUser", successCallBack);
  	service.addParameter("AN8", AN8);
  	service.execute();
}

function authenticateUniTecUser(AN8, password, successCallBack) {
  	var service = new serviceInvoker("authenticateUniTecUser", successCallBack);
  	service.addParameter("AN8", AN8);
  	service.addParameter("pwd", SHA256(password));
  	service.execute();
}

// serviceInvoker class
function serviceInvoker(operationID, successCallBack) {
  	
  	this.serviceID = app_parameters.build.services;
  	this.operationID = operationID;
  	this.env = app_parameters.build.target;
  	this.callback = successCallBack;
  
  	this.parameters = {
		operationID : this.serviceID + '$' + this.operationID,
    	env : this.env,
    	httpheaders : {},
    	httpconfig : {"timeout": 5}
	};
}

serviceInvoker.prototype.addParameter = function(name, value) {
  	this.parameters[name] = value;
};

serviceInvoker.prototype.execute = function() {
  	mfintegrationsecureinvokerasync(this.parameters, this.serviceID, this.operationID, this.callback);
};