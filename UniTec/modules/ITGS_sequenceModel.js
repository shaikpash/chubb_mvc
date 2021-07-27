
/* jira unitec 46, UDC 56/k5
 * ID	Désignation
1	Session ouverte
2	TBD
3	TBD
4	En route vers agence/dépôt
5	retour vers domicile
6	en route vers client
7	Accès au site
8	Déroulé de visite
9	Devoir de conseil (devis, infocom, signature client)
10	relance devis
11	Pause déjeuner
12	Contre appel dépannage
13	prise de rendez vous
14	Inventaire
15	Délégation
16	Réunion
17	Formation
18	appro piéce
19	activités diverses
20	En astreinte
21	Quitte UNITEC
 
 */

sequence = {
	current : null,
	last_updated : null,
	doco : null
}

sequence.changeTo = function(seq, workorder){
	kony.print("sequence changeTo " + seq);
	var now = new Date();
	
	// don't change anything if reapplying same sequence
	if ((seq == sequence.current) &&
		(((workorder != null) ? workorder.doco : null) == sequence.doco) ){
		// just go away 
		return ; 
	}
	
	if (validationModel.isNull(sequence.current)){
		// is first sequence setting;
		// can't close last sequence 
	}
	
	else{
		// register change in F56301
		//var line = new de.itgs.WorkOrders.F56301W();
		var line = {};
			//line.id = null;
			line.TYTN = 'REA';
			line.AN8 = login.user.AN8.toString();// tec
			line.SUBJECT = null; //rien
			line.LOCATION = null; //rien
			line.ACTVDESC = null; //rien
			line.TDSTR = dateTimePrintSql(sequence.last_updated); //date heure - last update
			line.TDEND = dateTimePrintSql(now); //date heure - courant
			line.COMITLVL = '1'; // = realisé
			line.ATVCD5 = null; // n instance
			line.DOCO = sequence.doco; // doco :)
			line.OPSQ = sequence.current; // no seq
			line.AA10 = null; // rien
			line.EV01 = null; //rien
			line.UPMJ = datePrintCustom(now, "yyyy-MM-dd"); // date
			line.TDAY = datePrintCustom(now, "hh:mm:ss"); // heure
			line.HasChangedFlag = !validationModel.isNull(sequence.doco);
			line.markForUpload = true;
		kony.print("sequence writing : " + sequence.current);
		de.itgs.WorkOrders.F56301W.create(line, null,eventErrorCallBack,true);
		//line.create(null, eventErrorCallBack);
	}
	
	// anyway apply
	sequence.current = seq;
	sequence.doco = (!validationModel.isNull(workorder)) ? workorder.doco : null;
	sequence.last_updated = new Date(now);
	
}
	
sequence.values = {
	logedIn : 1,  // Session ouverte
//2	TBD
//3	TBD
	drivingToAgency : 4,	// En route vers agence/dépôt
	drivingHome : 5,	// retour vers domicile
	drivingToClient : 6,	// en route vers client
	siteAccess : 7,	// Accès au site
	visitProceeding : 8,	// Déroulé de visite
	AdviceDuty : 9,	// Devoir de conseil (devis, infocom, signature client)
	quotationRelaunch : 10,	//relance devis
	lunchTime : 11,	// Pause déjeuner
	troubleshootingCallback : 12,	// Contre appel dépannage
	meetingPlanning : 13,	// prise de rendez vous
	Inventory : 14,	// Inventaire
	delegation : 15,	// Délégation
	meeting : 16,	// Réunion
	training : 17,	// Formation
	partsResupply : 18,	// appro piéce
	misc : 19,	// activités diverses
	onCall : 20,	//En astreinte
	applicationExit : 21	// Quitte UNITEC
}