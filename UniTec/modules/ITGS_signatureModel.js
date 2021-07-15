signature = {};
signatureModel = {
	context: {}
};

signatureModel.createSignatureByContact = function (rawSig, contact) {
	callBackModel.result = {};
	
	var valuesArray = {};
	valuesArray.contactid = contact.id;
	valuesArray.date = dateTimePrintSql(new Date());
	valuesArray.signature = rawSig;
	
	de.itgs.WorkOrders.signatures.create(
				valuesArray, 
				callBackModel.successCB,
			 	callBackModel.konyErrorCB, 
				true);
	
	return callBackModel.result;
}

signatureModel.findSignatureById = function (id) {

	var signature;

	signatureModel.findSignatureByIdCB = function (l_signature) {
		if (!validationModel.isNull(l_signature) && l_signature.length > 0) {
			signature = {};
			signature.id = l_signature[0].id;
			signature.object = l_signature[0].object;
			signature.contact = {};
			signature.contact.title = l_signature[0].title;
			signature.contact.firstName = l_signature[0].firstName;
			signature.contact.lastName = l_signature[0].lastName;
		}
	}
	
	if (id != undefined) {
		callBackModel.context.sql = 	"select	sig.id, " +
										"		sig.signature object, " +
										" 		(select DL01 from UDC where SY = '01' and RT = 'GD' and KY = COALESCE(ct.TITLE,'')) title, " +
										"		ct.lastname lastName, " +
										"		ct.firstname firstName " +
										"from 	signatures sig " +
										"left outer join contact ct " +
										"on 	ct.id = sig.contactid " +
										"where 	sig.id = " + id + " " +
										"limit 1 ";

		executeSql( callBackModel.context.sql, 
					signatureModel.findSignatureByIdCB, 
					callBackModel.sqlErrorCB);
	}
	
	return signature;
}

signature.getSignatureforWorkOrders = function (wos){
	callBackModel.resultArray = [];
	

	var ids = wos.map(
		function(w){
			return w.signatureId;
		}
	);
	
	ids = ids.filter(
		function (i){
			return i != null;
		}
	);
	
	
	if (ids.length > 0){
		de.itgs.WorkOrders.signatures.find(
			" id in  ("+ids.join(', ') + ") ",
			callBackModel.arraySuccessCB,
			callBackModel.konyErrorCB);
	}
	
	return callBackModel.resultArray;
}



signature.save = function (sig){
	var id = sig.id;
	
	function saveCB(stuff){
		id = stuff.id;
	}

	if (!validationModel.isNull(sig.id)){
		
		var o = [{}];
		o[0].changeSet = sig;
		o[0].whereClause = "where id = "+ sig.id;
		de.itgs.WorkOrders.signatures.updateAll(
			o, 
			null,
			callBackModel.konyErrorCB, 
			true);
	} else {
		de.itgs.WorkOrders.signatures.create(
			sig, 
			saveCB,
			callBackModel.konyErrorCB, 
			true);
	}
	
	return id;
}

signature.saveForWorkorder = function(sig, wo){
	var id = signature.save(sig);
	
	de.itgs.WorkOrders.signatures.find(
		"where id = " +id,
		callBackModel.emptyCB,
		callBackModel.konyErrorCB
	);
	
	var o = [{}];
	o[0].changeSet = {
		"signatureId" : id,
		"ApplicationVersion" : global.kernel.getQualifiedVersion(),
		"HasChangedFlag" : true};
	o[0].whereClause = "where id = "+ wo.id;
	
	de.itgs.WorkOrders.F56BT.updateAll(
			o, 
			callBackModel.emptyCB,
			callBackModel.konyErrorCB, 
			true);
	
		
	de.itgs.WorkOrders.F56BT.find(
		"where id = " + wo.id,
		callBackModel.emptyCB,
		callBackModel.konyErrorCB
	);
	
	wo.signatureId = id;
  WOValidationSignature.signatureId = id;
}

signature.getMotifsNonSignature = function () {
	var motifsNonSignature = [];
	motifsNonSignature.push(["NONE", "Choisir motif non signature"]);
 	
	signature.getMotifsNonSignatureCB = function (l_motifs) { 
		if (!validationModel.isNull(l_motifs) && l_motifs.length > 0) {
			for (var i = 0; i < l_motifs.length; i ++) {
				motifsNonSignature.push([l_motifs[i].KY, l_motifs[i].DL01]);
			}
		}			
	} 

	callBackModel.context.sql =
		"select distinct u.KY, u.DL01 " + 
		"from udc u " + 
		"where u.SY = '56' and u.RT = 'K2' " + 
		"and COALESCE(u.DL01,'NULL') <> 'NULL'";
		  		  
	executeSql(callBackModel.context.sql, signature.getMotifsNonSignatureCB, callBackModel.sqlErrorCB);
	return motifsNonSignature;
}