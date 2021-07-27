var ibtConsMod_currentMod = {
	'type' :null,
	'ref' :null,
	'text' : null,
	'site_numb':null,
	'site_id' : null,
	'site_an8' : null,
	'equ_numb': null};
	
var ibtModifConsignQuery =" select \n" +
	"	cust.corporatename as site_name, \n" +
	"	cust.id as site_id, \n" +
	"	cust.AN8 as site_an8, \n" +
	"	bt.numb as equ_numb, \n" +
	"	bt.SAID as site_numb, \n" +
	"	case \n" +
	"		when coalesce (bt.WR13 , 'NULL') <> 'NULL' \n" +
	"		then \n" +
	"			(select rmk3 from f56prm colorQx \n" +
	"			where colorQx.tydt = 'BT' \n" +
	"			and colorQx.ky = bt.typs \n" +
	"			and coalesce (colorQx.[rmk], 'NULL') <> 'NULL' \n" +
	"			limit 1) \n" +
	"		else \n" +
	"			(select rmk3 from f56prm color \n" +
	"			where color.tydt = 'BT' \n" +
	"			and coalesce(color.RMK, 'NULL') = 'NULL' \n" +
	"			and color.ky = bt.typs \n" +
	"			limit 1) \n" +
	"	end as color \n" +
	" 	 \n" +
	"	from f56bt as bt \n" +
	"	left join customer as cust \n" +
	"		on bt.said = cust.an8 \n" +
	"	where bt.doco = #DOCO";

function ibt_onModConsigne(typeConsigne, ref, text){
	// typeConsigne can be 'site' or 'equipement'
	// ref is the id of the concerned table (teq, trem...), null if new
	// text is the consign text, null if new

	ibtConsMod_currentMod['type'] = typeConsigne;
	ibtConsMod_currentMod['ref'] = ref;
	ibtConsMod_currentMod['text'] = text;
	
	ibt_consigneMod_onValidate.flag = false;
	
	e221ModifConsigne.show();
	
}
function ibt_modConsigneSqlCb(result){
	var res = result[0];
	
	// save stuff about the equipement
	ibtConsMod_currentMod['site_numb']  = res['site_numb'];
	ibtConsMod_currentMod['site_an8']  = res['site_an8'];
	ibtConsMod_currentMod['site_id']  = res['site_id'];
	ibtConsMod_currentMod['equ_numb']  = res['equ_numb'];
	
	kony.print("ibtConsMod_currentMod" + JSON.stringify(ibtConsMod_currentMod));
	
	e221ModifConsigne.e221ClientBarLbl.text = res['site_name'] + ' - ' + workOrder.doco;
	
	var skin = (res['color'] != null) ? "sknBT" + res['color'] : "sbkBTFallback";
	e221ModifConsigne.e221hboxclient.skin = skin;
	e221ModifConsigne.e221hboxclient.focusSkin = skin;
		
	e221ModifConsigne.e221ConsigneTxt.text = 
		ibtConsMod_currentMod['text'] == null ? "" : ibtConsMod_currentMod['text'];
		
	
}

function ibt_ConsigneModInit(){
	var appMenu = [
		["CANCEL", "Annuler", "close.png", ibt_consigneMod_onCancel],
		["REMOVE", "Supprimer", "bin.png", ibt_consigneMod_onRemoveClicked],
		["VALID", "Enregistrer", "check.png", ibt_consigneMod_onValidate]
	];

	ibt_consigneMod_onValidate.flag = false;
	otis.application.createAppMenu("instructionEditAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu

}

function ibt_consigneModPreshow(){

	otis.application.setCurrentAppMenu("instructionEditAppMenu");//Dhaval:Invocation of custom app menu
	
	executeSql(ibtModifConsignQuery.replace('#DOCO', workOrder.doco),
		ibt_modConsigneSqlCb, eventErrorCallBack);
	
	switch(ibtConsMod_currentMod['type']){
		case 'site':{
			e221ModifConsigne.e221ModifConsigneTitle.text =
				'Consigne Site';
		
		break;
		}
		
		case 'equipement':{
			e221ModifConsigne.e221ModifConsigneTitle.text =
				'Consigne Equipement';
		break;
		}
		default:
		kony.print ("Consigne Modif: unknown type " +ibtConsMod_currentMod['type']);
	}
		
}

function ibt_consigneMod_onValidate(){

	if(ibt_consigneMod_onValidate.flag ==true){
		return; 
	}
	
	ibt_consigneMod_onValidate.flag = true;
	
	showSyncLoadingScreen("Chargement...");
	if (e221ModifConsigne.e221ConsigneTxt.text== ""){
		dismissSyncLoadingScreen();
		ibt_consigneMod_onValidate.flag = false;
		popupModel.showPopError("Veuillez entrer une consigne dans la zone de texte.");
		return;
	}

	if (ibtConsMod_currentMod['type']== 'site'){
		if (ibtConsMod_currentMod['ref']== null){
			//new consigne site
			var newline = {};
			newline.CustomerId = ibtConsMod_currentMod['site_id'];
			newline.AN8 = ibtConsMod_currentMod['site_an8'];
			newline.IDLN = null;
			newline.ALKY = null;
			newline.type = 'CSITE';
			newline.comment = e221ModifConsigne.e221ConsigneTxt.text;
			newline.HasChangedFlag = true;
			de.itgs.WorkOrders.ThirdPartyComment.create(newline, e221_onModifSuccess,e221_onModifFailure, true);
		}else{
			//Change Consigne site
			var changeLine = {};
			changeLine.comment = e221ModifConsigne.e221ConsigneTxt.text;
			changeLine.HasChangedFlag = true;
			var whereClause = "where id  = " + ibtConsMod_currentMod['ref'];
			de.itgs.WorkOrders.ThirdPartyComment.update(whereClause, changeLine, e221_onModifSuccess, e221_onModifFailure, true);
		}
			
		
	}else if (ibtConsMod_currentMod['type']== 'equipement'){
		if (ibtConsMod_currentMod['ref']== null){
			// new consigne equipement
			var newline = {};
			newline.ANB = ibtConsMod_currentMod['equ_numb'];
			newline.IDLN = null;
			newline.ALKY = null;
			newline.MOCATDC10 = '??';
			newline.COMMENT = e221ModifConsigne.e221ConsigneTxt.text;
			newline.HasChangedFlag = true;
			de.itgs.WorkOrders.F56TEQ.create(newline, e221_onModifSuccess,e221_onModifFailure, true);
			
		}else{
			// Change consigne equipement
			var changeLine = {};
			changeLine.COMMENT = e221ModifConsigne.e221ConsigneTxt.text;
			changeLine.HasChangedFlag = true;
			var whereClause = "where id  = " + ibtConsMod_currentMod['ref'];
			de.itgs.WorkOrders.F56TEQ.update(whereClause, changeLine, e221_onModifSuccess, e221_onModifFailure, true);
		}
	
	}else{
		kony.print ("Consigne Modif validate: unknown type " +ibtConsMod_currentMod['type']);
	}
}

function ibt_consigneMod_onCancel(){
	navigationModel.doReturn();
}

function ibt_consigneMod_onRemoveClicked(){
	popupModel.showPopError("La consigne va être supprimée, continuer ?", ibt_consigneMod_onRemove, undefined, true);
}

function ibt_consigneMod_onRemove(){
	if (ibtConsMod_currentMod['ref']== null){
		ibt_consigneMod_onCancel();
	}else{
		if (ibtConsMod_currentMod['type']== 'site'){
			var inputArray = [];
			inputArray[0] = {};
			inputArray[0].changeSet = {};
			inputArray[0].changeSet.HasChangedFlag = true;
			inputArray[0].changeSet.DeletedBy = app_parameters.sync.appID;
			inputArray[0].whereClause = "where id = " + ibtConsMod_currentMod['ref'];
			
			de.itgs.WorkOrders.ThirdPartyComment.updateAll(inputArray, callBackModel.emptyCB, eventErrorCallBack);
			de.itgs.WorkOrders.ThirdPartyComment.deleteByPK(ibtConsMod_currentMod['ref'], e221_onModifSuccess,eventErrorCallBack, true);
		}else if (ibtConsMod_currentMod['type']== 'equipement'){
			var inputArray = [];
			inputArray[0] = {};
			inputArray[0].changeSet = {};
			inputArray[0].changeSet.HasChangedFlag = true;
			inputArray[0].changeSet.DeletedBy = app_parameters.sync.appID;
			inputArray[0].whereClause = "where id = " + ibtConsMod_currentMod['ref'];
			
			de.itgs.WorkOrders.F56TEQ.updateAll(inputArray, callBackModel.emptyCB, eventErrorCallBack);
			de.itgs.WorkOrders.F56TEQ.deleteByPK(ibtConsMod_currentMod['ref'], e221_onModifSuccess, eventErrorCallBack, true);
		
		}else{
			kony.print ("Consigne Modif remove: unknown type " +ibtConsMod_currentMod['type']);
		}
	}
}

function e221_onModifFailure(event){
	popupModel.showPopError("Le changement de la consigne  a échoué.");
	navigationModel.doReturn();
	dismissSyncLoadingScreen();
}

function e221_onModifSuccess(){
	navigationModel.doReturn();
	dismissSyncLoadingScreen();
}
