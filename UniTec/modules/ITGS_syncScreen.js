var syncSituation = {};

function syncSituationPrint(situation){
	// Gracefully prints the situation of the sync
	var res = situation.reason + " : \n";
	if (validationModel.isNull(situation.scopes)){
		return res;
	}
	
	for (var s in situation.scopes){
		res += s ;
		
		if (!validationModel.isNull(situation.scopes[s].upload)){
			res += " up : ";
			if (situation.scopes[s].upload.done){
				res += "OK ";
			}else{
				if (!validationModel.isNull(situation.scopes[s].upload.nbBatches)){
					//on Going
					res += 
					(situation.scopes[s].upload.nbBatches - 
						situation.scopes[s].upload.nbPending).toString() +
					"/" + situation.scopes[s].nbBatches.toString();
				}
			}
		}
		
		if (!validationModel.isNull(situation.scopes[s].upload)){
			res += ",";	
		}
		
		if (!validationModel.isNull(situation.scopes[s].download)){
			res += " ceci est un down : ";
			if (situation.scopes[s].download.done){
				res += "OK ";
			}else{
				if (!validationModel.isNull(situation.scopes[s].download.nbBatches)){
					//on Going
					res += 
					(situation.scopes[s].download.nbBatches - 
						situation.scopes[s].download.nbPending).toString() +
					"/" + situation.scopes[s].download.nbBatches.toString();
				}
			}
		}
		
		res += "\n";
	}
	return res;
}

function syncSituationInit(situation, reason){
	situation.reason = reason;
	situation.scopes = {};
}

function syncSituationUpdate(situation, outputParam){
	// outputparams comes from callbacks (batch success and scopeStart mainly)
	var scope = outputParam.currentScope;
	var upDown = null;
	
	if (validationModel.isNull(situation.scopes[scope])){
		// scope start only
		situation.scopes[scope] = {};
	}
	
	if (!validationModel.isNull(outputParam.uploadRequest)){
		// upload start
		if (validationModel.isNull(situation.scopes[scope].upload)){
			situation.scopes[scope].upload = {};
		}
		upDown = "upload";
	}
	
	if (!validationModel.isNull(outputParam.downloadRequest)){
		// download start
		if (validationModel.isNull(situation.scopes[scope].download)){
			situation.scopes[scope].download = {};
		}
		upDown = "download";
	}

	if (!validationModel.isNull(outputParam.batchcontext) && !validationModel.isNull(upDown)){
		// batch success
		if (validationModel.isNull(situation.scopes[scope][upDown].nbBatches))
		{
			// first batch success for this scope
			situation.scopes[scope][upDown] = {
				nbPending : outputParam.batchcontext.pendingbatches,
				nbBatches : outputParam.batchcontext.pendingbatches +1,
				done : false
			};
		}else{
			// update
			situation.scopes[scope][upDown].nbPending = outputParam.batchcontext.pendingbatches;
		}
	}
}

function syncSituationLoadDone(situation, outputParam){
	var scope = outputParam.currentScope;
	var upDown = null;
	
	if (!validationModel.isNull(outputParam.uploadRequest)){
		upDown = "upload";
	}
	if (!validationModel.isNull(outputParam.downloadRequest)){
		upDown = "download";
	}
	
	if (validationModel.isNull(upDown)){
		return;
	}
	
	situation.scopes[scope][upDown].done = true;
}