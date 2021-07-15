btphotosModel = {
	context: {}
};


btphotosModel.scaleImageBase64 = function(imageBase64) {
  var imageRawBytes = kony.convertToRawBytes(imageBase64);
  var imageObject = kony.image.createImage(imageRawBytes);
  imageObject.scale(app_parameters.sync.imageScale);  
  var scaledImageBase64 = kony.convertToBase64(imageObject.getImageAsRawBytes());  
  return scaledImageBase64;
}


btphotosModel.createPhotoByCustomerInstalledBase = function(btid, cibid, comment, imageBase64) {
  callBackModel.result = {};

  var valuesArray = {};
  valuesArray.btid = btid;
  valuesArray.cibid = cibid;
  valuesArray.date = dateTimePrintSql(new Date());
  valuesArray.image = btphotosModel.scaleImageBase64(imageBase64);
  valuesArray.comment = comment;

  de.itgs.WorkOrders.btphotos.create(
    valuesArray, 
    callBackModel.successCB,
    callBackModel.konyErrorCB, 
    true);
  
  return callBackModel.result;
}


btphotosModel.createPhotoByWorkOrderId = function(btid, comment, imageBase64) {
  callBackModel.result = {};

  var valuesArray = {};
  valuesArray.btid = btid;
  valuesArray.date = dateTimePrintSql(new Date());
  valuesArray.image = btphotosModel.scaleImageBase64(imageBase64);
  valuesArray.comment = comment;

  de.itgs.WorkOrders.btphotos.create(
    valuesArray, 
    callBackModel.successCB,
    callBackModel.konyErrorCB, 
    true);
  return callBackModel.result;
}


btphotosModel.createPhotoByPrecoId = function(btid, precoid, comment, imageBase64) {
  callBackModel.result = {};

  var valuesArray = {};
  valuesArray.btid = btid;
  valuesArray.precoid = precoid;
  valuesArray.date = dateTimePrintSql(new Date());
  valuesArray.image = btphotosModel.scaleImageBase64(imageBase64);
  valuesArray.comment = comment;

  de.itgs.WorkOrders.btphotos.create(
    valuesArray, 
    callBackModel.successCB,
    callBackModel.konyErrorCB, 
    true);
  return callBackModel.result;
}


btphotosModel.findPhotoById = function(id) {
  callBackModel.result = null;
  callBackModel.context.sql = "select * " +
    "from btphotos " +
    "where id = " + id + " " +
    "limit 1";

  executeSql(callBackModel.context.sql, 
             callBackModel.successCB,
             callBackModel.sqlErrorCB);	

  return callBackModel.result;
}


btphotosModel.findAtLeastOnePhotoIdByBtId = function(id) {
  callBackModel.result = null;
  callBackModel.context.sql = "select id " +
    "from btphotos " +
    "where btid = " + id + " " +
    "order by date desc " +
    "limit 1";
  
  executeSql(callBackModel.context.sql, 
             callBackModel.successCB,
             callBackModel.sqlErrorCB);	

  return callBackModel.result;
}


btphotosModel.findPhotoIdByBtId = function(id) {
  callBackModel.result = null;
  callBackModel.context.sql = "select id " +
    "from btphotos " +
    "where btid = " + id + " " +
    "and COALESCE(cibId,'NULL') = 'NULL' " +
    "and COALESCE(precoid,'NULL') = 'NULL' " +
    "order by date desc " +
    "limit 1";
  
  executeSql(callBackModel.context.sql, 
             callBackModel.successCB,
             callBackModel.sqlErrorCB);	

  return callBackModel.result;
}


btphotosModel.findPhotoInfoByCibId = function(id, btid) {
  callBackModel.result = null;
  callBackModel.context.sql = "select id, precoid " +
    "from btphotos " +
    "where cibid = " + id + " " +
    "and btid = " + btid + " " +
    "order by date desc " +
    "limit 1";
  
  executeSql(callBackModel.context.sql, 
             callBackModel.successCB,
             callBackModel.sqlErrorCB);	

  return callBackModel.result;
}


btphotosModel.findPhotoInfoByPrecoId = function(id, btid) {
  callBackModel.result = null;
  callBackModel.context.sql = "select id " +
    "from btphotos " +
    "where precoid = " + id + " " +
    "and btid = " + btid + " " +
    "order by date desc " +
    "limit 1";
  
  executeSql(callBackModel.context.sql, 
             callBackModel.successCB,
             callBackModel.sqlErrorCB);	

  return callBackModel.result;
}


btphotosModel.updatePhotoById = function(id, comment, imageBase64) {
  var valuesArray = {};
  valuesArray.image = imageBase64;
  valuesArray.comment = comment;
  valuesArray.date = dateTimePrintSql(new Date());
  de.itgs.WorkOrders.btphotos.updateByPK(id, valuesArray, callBackModel.emptyCB, callBackModel.konyErrorCB, true);
}


btphotosModel.updatePhotoPrecoIdById = function(id, precoid) {
  callBackModel.result = null;
  callBackModel.context.sql = "update btphotos " +
    "set precoid = " + precoid + " " +
    ", date = '" + dateTimePrintSql(new Date()) + "' " +
    "where id = " + id;
  
  executeSql(callBackModel.context.sql, 
             callBackModel.successCB,
             callBackModel.sqlErrorCB);	

  return callBackModel.result;
}


btphotosModel.removePhotoById = function(id) {
	de.itgs.WorkOrders.btphotos.remove("where id = " + id,  null, eventErrorCallBack, true);
}