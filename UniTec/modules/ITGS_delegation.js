/***********/

/***View***/

var delegation = {
  
};



/*** Action ***/



delegation.preShow = function(){
  
  /** View Action **/
 frmDelegation.flxAdd.onClick = delegation.addDelegation;
  frmDelegation.flxBack.onClick = delegation.back;
  /** End Action View **/
  
  delegation.initDelegationField();	
  delegation.fillDelegationSegment();
}

delegation.back = function(){
  frmHome.show();
}

/** Controler **/

delegation.addDelegation = function(){
  
  var onSucces = function(){
    delegation.fillDelegationSegment();
  }
  var onError = function(err){
    alert(err);
  }
  
  var date = frmDelegation.calDate.date;
  var hours = frmDelegation.lbHours.selectedKey
  var divDel = frmDelegation.lbDivDel.selectedKey;
  var currentDelegation = {
    date: date,
    hours: hours,
    divDel : divDel
  };
  
  delegation.setDelegation(currentDelegation, onSucces, onError); 
  popupModel.showPopError("Une ligne a été ajoutée");
  delegation.initDelegationField(divDel);
}

delegation.fillDelegationSegment = function(){
  var data = null;
  var onSucces = function(res){
    data = res;
  }
  var onError = function(err){
    alert(err);
  }
  
  delegation.getDelegation(login.user.AN8, onSucces, onError);
  
  if(data != null){
    var dataSeg = [];
    var currentRow;
    var lblType = null;
    for(var i = 0; i<data.length; i++){
      switch(data[i]._TYTN){
        case 'DIV':	
          lblType = "Diverses";
          break;
       	case 'DEL':	
          lblType = "Délégation";
          break;
        case 'REU':	
          lblType = "Réunion";
          break;
        case 'FOR':	
          lblType = "Formation";
          break;
      }
      currentRow = {
       lblDate: datePrintCustom(new Date(dateFromsql(data[i]._TDSTR)), "dd/MM/yyyy"),
      lblHours: data[i]._OPSQ + "h",
      lblDivDev: lblType,
      imgDelete: {src: "bin.png"},
      flxDelete: {onClick: function(j){return function(){delegation.deleteRow(j)}}(data[i]._id)},
      }
      dataSeg.push(currentRow);
    }
    frmDelegation.segDelegation.setData(dataSeg);
  }
  frmDelegation.lbDivDel.selectedKey = "DEL";
}

delegation.deleteRow = function(id){
  
  var onSucces = function(res){
    delegation.fillDelegationSegment();
  }
  var onError = function(err){
    alert(err);
  }
  
  delegation.removeDelegation(id, onSucces, onError);

}

delegation.initDelegationField = function(lblType){
  var today = new Date();
  frmDelegation.calDate.dateComponents = [today.getDate(), (today.getMonth() +1), today.getFullYear()];
  frmDelegation.lbHours.selectedKey = '1';
  if(lblType){
    frmDelegation.lbDivDel.selectedKey = lblType;
  }else{
	frmDelegation.lbDivDel.selectedKey = "DEL";
  }
  
}

/*Model*/

delegation.removeDelegation = function(id, onSucces, onError){
  
  var sqlCallBack = function(res) {
   	onSucces(res);
  }
  var sqlError = function(err) {
   	 alert("Erreur lors de la suppression de la délégation : " + err);
  }
  
  var sqlWhereClause = " where id = "+id;
  
  de.itgs.WorkOrders.F56301W.remove(sqlWhereClause, sqlCallBack, sqlError);
}

delegation.getDelegation = function(an8, onSucces, onError){
  var sqlWhereClause = " where TYTN in ('DEL', 'DIV', 'REU', 'FOR') and AN8 = '"+an8+"' ORDER BY TDSTR";
  var sqlCallBack = function(res) {
   	onSucces(res);
  }
  var sqlError = function(err) {
   	 alert("Erreur lors de la récupération des délégations : " + JSON.stringify(err));
  }
  de.itgs.WorkOrders.F56301W.find(sqlWhereClause, sqlCallBack, sqlError);
}

delegation.setDelegation = function(currentDelegation, onSucces, onError){
  
  var sqlCallBack = function(res) {
   kony.print(res);
    onSucces();
  }
  var sqlError = function(err) {
   	 kony.print(err);
     onError(err);
  }
  
  var now = new Date();
  var valuesTable = {
    TYTN: currentDelegation.divDel,
    TDSTR: dateTimePrintSql(new Date(dateFunctions.toStringFormat(currentDelegation.date))),
    OPSQ: currentDelegation.hours,
    AN8: login.user.AN8.toString(),
    UPMJ: datePrintCustom(now, "yyyy-MM-dd"), // date
	TDAY: datePrintCustom(now, "hh:mm:ss"), // heure
    HasChangedFlag: true
  }
  de.itgs.WorkOrders.F56301W.create(valuesTable, sqlCallBack, sqlError, true);
}




