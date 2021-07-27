// Parameters used to configure the whole application

app_parameters = {};

app_parameters.no_survey = false;

app_parameters.debug = {
	on :				false,	// set to true to active debug functions (and debug options on login screen)
	no_sync :			false,	// set to true to deactivate all synchronisation
	bypass :			false,	// set to true to bypass login authentication
	send_quotations : 	false,	// set to true to forcefully generate quotations
	pricing_popup :		false,	// set to true to popup more info about pricing
	pricing_log :		false,	// set to true to log pricing parameters
	spSummary_Check :	false,	// set to true to show updates of F56BTCO
	spSummarySignal :	false	// set to true to signal abnormal quantity in F56BTCO
};
for (var key in app_parameters.debug) {
	app_parameters.debug[key] = app_parameters.debug.on && app_parameters.debug[key];
}

app_parameters.build = {
	target : 						'ios_test', // 'ios_test', 'vulcain_test', 'ios_prod', 'vulcain_prod', 'chubb_prod','ios_for'
	environment :					'testing', //testing, prod
  	services : 						'UniTecDevService0', // UniTecProdService0,UniTecDevService0
	training_course :				false,
	new_quotation_nb_calculation :	false
};

app_parameters.lifetime = { // these parameters can evolve through the application lifetime : for instance, they can be set after login
	limited_access : false,
	pause_bool : false,
  	switchWorkOrder: null,
	society : "", // Set Employee's Society
	auto_plannify_bool : false,
  	itemVerifyFields : {bat:"", et:"",sit:"",num:""}
};

app_parameters.sync = {
	// common parameters:
	appID :			'mf_unitec_2_9_py',
	batchSize :		'3000',
	chunkSize : 	'1024',
	historyLevel :	2,			// see ITGS_syncEvents.js for values
	maxAttempts :	3,			// number of attemps until cancelling a failing sync sessions
	networkTimeOut :	10 * 60,
	isDebugLogLevel :	false,
	imageScale :	0.1,
	// following parameters depends on app_parameters.build:
	upload_activated :	! app_parameters.build.training_course,
	userID :			null,
	password :			null,
	serverHost :		null,
	serverPort :		null,
	isSecure :			null
};


app_parameters.middleware = {
	// following parameters depends on app_parameters.build.environment:
	url : null
};

switch (app_parameters.build.environment) {
	case 'testing' :
		app_parameters.sync.userID =		"krishna.keerthi@otis.com";
		app_parameters.sync.password =		"Krishna@123";
		app_parameters.sync.serverHost =	"sync2.sicli.com";
		app_parameters.sync.serverPort =	"443";
		app_parameters.sync.isSecure =		true;

		//app_parameters.middleware.url =		"http://synctest.sicli.com:8081";//https://sync2.sicli.com
    	app_parameters.middleware.url =		"https://sync2.sicli.com:443";
//		app_parameters.middleware.url =		"https://app2.sicli.com:443";
		break;
	case 'prod' :
		app_parameters.sync.userID =		"krishna.keerthi@otis.com";
		app_parameters.sync.password =		"Krishna@123";
		app_parameters.sync.serverHost =	"sync2.sicli.com";
		app_parameters.sync.serverPort =	"443";
		app_parameters.sync.isSecure =		true;

		//app_parameters.middleware.url =		"http://synctest.sicli.com:8081";//https://sync2.sicli.com
    	app_parameters.middleware.url =		"https://sync2.sicli.com:443";
//		app_parameters.middleware.url =		"https://app2.sicli.com:443";
		break;
}

