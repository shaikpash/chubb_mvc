subsiteModel = {};


subsiteModel.copySubsiteById = function(subsite, type, siteCopy){
  var activeQuotationSubSite = null;
  var gblSubSiteObject = workOrderModel.findSubSiteByWorkOrder(workOrder);
    if (gblSubSiteObject != null) {
      activeQuotationSubSite = de.itgs.javascript.Object.clone(gblSubSiteObject);   
      activeQuotationSubSite.originalId = subsite.id;
      activeQuotationSubSite.customerId = siteCopy.id;
      activeQuotationSubSite.AN8 = subsite.AN8;
      activeQuotationSubSite.IDLN = subsite.IDLN;
      activeQuotationSubSite.ALKY = null;
      activeQuotationSubSite.MLNM = subsite.MLNM;
    }
    activeQuotationSubSite.id = subsiteModel.createSubSite(activeQuotationSubSite).id;		

  return activeQuotationSubSite;
}

subsiteModel.createSubSite = function (subSite) {
  callBackModel.result = {};
  subSite.id = null;

  de.itgs.WorkOrders.SubSite.create(subSite, callBackModel.successCB,callBackModel.konyErrorCB, true);

  return callBackModel.result;
}
