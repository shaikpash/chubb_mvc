conformityModel = {
	checkedSurveys : {}
};

conformityModel.findConformitySurveyByPriority = function(priority, doco) {
	var surveyCodes = new Array();
  if(!doco){
    doco = workOrder.doco;
  }
	
	function findConformitySurveyByPriorityCB(res) {
		for(var i = 0; i < res.length; i++)
			surveyCodes.push(res[i].code);
	}
  
  callBackModel.context.sql = 
   	"select distinct ae.rmk3,ap.rmk,item.ITM code "+
    "from f56bt b,employee e, f56prm AP, f56prm AE,UDC u ,item "+
    "where "+
    "b.ANP = e.AN8 "+
    "and AP.rmk2 = e.serviceagencyid "+
    "and  AE.ky =  b.wr13 "+
    "and item.usualcode = ae.rmk3 "+
    "and u.SY = '13' "+
    "and u.RT = 'P2' "+
    "and u.KY = b.WR04 "+
    "and ap.sdb = 'KONI' "+
    "and ap.tydt = 'AP' "+
    "and u.SPHD = 'APSAD' "+
    "and ae.TYDT ='AE' "+
    "and coalesce(ap.rmk,'NULL') = coalesce(ae.rmk,'NULL') "+
    "and ap.ky = ae.rmk2 "+
    "and b.STRT >= ap.eft "+
    "and b.STRT < ap.efte "+
    "and b.doco = " + doco + " " +
    "order by ae.amtu ";
	
	/*callBackModel.context.sql =
		"select 	i.ITM code " +
		"from		Item i " +
		"join 		UDC u2 " +
		"on 		i.usualcode = u2.SPHD " +
		"join		UDC u1 " +
		"on			u1.DL02 = u2.KY " +
		"where		u1.SY = '00' " +
		"and		u1.RT = 'X3' " +
		"and		u2.SY = '00' " +
		"and		u2.RT = 'X3' " +
		"and 		u1.KY = '" + priority + "' ";*/
	
	executeSql(callBackModel.context.sql, findConformitySurveyByPriorityCB, callBackModel.sqlErrorCB);
	
	return surveyCodes;
};

conformityModel.testSurvey = function(doco) {
	return conformityModel.checkedSurveys[doco];
};

conformityModel.updateSurvey = function(doco, isValid) {
	conformityModel.checkedSurveys[doco] = isValid;
};

conformityModel.getAPSAD = function(doco, srcPriority){
  
  var priority = [];
  callBackModel.result = [];
  
  callBackModel.context.sql = 
   	"select distinct ae.rmk3,ap.rmk,item.ITM "+
    "from f56bt b,employee e, f56prm AP, f56prm AE,UDC u ,item "+
    "where "+
    "b.ANP = e.AN8 "+
    "and AP.rmk2 = e.serviceagencyid "+
    "and  AE.ky =  b.wr13 "+
    "and item.usualcode = ae.rmk3 "+
    "and u.SY = '13' "+
    "and u.RT = 'P2' "+
    "and u.KY = b.WR04 "+
    "and ap.sdb = 'KONI' "+
    "and ap.tydt = 'AP' "+
    "and u.SPHD = 'APSAD' "+
    "and ae.TYDT ='AE' "+
    "and coalesce(ap.rmk,'NULL') = coalesce(ae.rmk,'NULL') "+
    "and ap.ky = ae.rmk2 "+
    "and b.STRT >= ap.eft "+
    "and b.STRT < ap.efte "+
    "and b.doco = " + doco + " " +
    "order by ae.amtu ";
  
  executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
  if(!validationModel.isNull(callBackModel.result)){
    priority = callBackModel.result;
  }
  return priority;
}

//returns priority
conformityModel.triggerApsadSurvey = function(doco, srcPriority) {
	var priority = 0;
	
	if (validationModel.isNull(doco)) return priority;
	
	callBackModel.result = null;
	callBackModel.context.sql =
		"select	count(*) ref " +
		"from	f56bt b " +
		"join	employee e on b.ANP = e.AN8 " +
		"join	f56prm p on p.rmk2 = e.serviceagencyid " +
		"and	p.KY = b.WR01 " +
		"join	UDC u " +
		"on		u.SY = '13' " +
		"and	u.RT = 'P2' " +
		"and	u.KY = b.WR04 " +
		"where	p.sdb = 'KONI' " +
		"and	p.tydt = 'AP' " +
		"and	u.SPHD = 'APSAD' " +
		"and	b.STRT >= p.eft " +
		"and	b.STRT < p.efte " +
		"and	b.doco = " + doco + " " +
		"and	(coalesce(p.RMK,'NULL') = '" + srcPriority + "' " + 
      	" or	coalesce(p.RMK2,'NULL') = '" + srcPriority + "' )";
	
	executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);

	if (!validationModel.isNull(callBackModel.result) && !validationModel.isNull(callBackModel.result.ref))
		priority = callBackModel.result.ref;
		
	return priority;
};
