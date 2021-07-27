// -------------------------------------------------------------------------------------------------
// Responsability: Provide application core API
// -------------------------------------------------------------------------------------------------

if (typeof(unitec) === "undefined") { unitec = {}; }
if (typeof(unitec.core) === "undefined") { unitec.core = {}; }

// -------------------------------------------------------------------------------------------------
// Constructor
unitec.core.Kernel = function() {
	// ---------------------------------------------------------------------------------------------
	// Private attributes
	this.version = String(appConfig.appVersion);
	this.versionEnvironmentMark = '';
	this.qualifiedVersion = 'UNItec '.concat(appConfig.appVersion);
	this.syncVersion = app_parameters.sync.appID;
	
	switch (app_parameters.build.environment) {
	case 'testing' :
		this.versionEnvironmentMark = 't';
		break;
	case 'validation_ts':
		this.versionEnvironmentMark = 'v';
		break;
	case 'prod':
		this.versionEnvironmentMark = '';
		break;
	case 'loadtesting':
		this.versionEnvironmentMark = 'L';
		break;
	case 'local':
		this.versionEnvironmentMark = 'l';
		break;
	case 'recup_ts' :
		this.versionEnvironmentMark = 'r';
		break;
	}
	
	if (app_parameters.build.training_course)
		this.versionEnvironmentMark += 'f';
};

// -------------------------------------------------------------------------------------------------
unitec.core.Kernel.prototype.getVersion = function() {
	return this.version;
};

// -------------------------------------------------------------------------------------------------
unitec.core.Kernel.prototype.getQualifiedVersion = function() {
	return this.qualifiedVersion;
};

// -------------------------------------------------------------------------------------------------
unitec.core.Kernel.prototype.getSyncVersion = function() {
	return this.syncVersion;
};

// -------------------------------------------------------------------------------------------------
unitec.core.Kernel.prototype.getMarkedVersion = function() {
	return this.version + this.versionEnvironmentMark;
};
