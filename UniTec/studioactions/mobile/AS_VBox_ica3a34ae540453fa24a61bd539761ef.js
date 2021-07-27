function AS_VBox_ica3a34ae540453fa24a61bd539761ef(eventobject) {
    workOrder = workOrderModel.findWorkOrderByDoco('20001008');
    workOrderOverview.tab.current = workOrderOverview.tab.info;
    frmWorkOrderOverview.ibtTabPane.activeTabs = [0];
    ibt_PlanificationNeedUpdate = true;
    frmCatalogSearch.show();
}