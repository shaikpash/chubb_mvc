function AS_VBox_a09d8990f5ea46168570b7634a4c70a3(eventobject) {
    workOrder = workOrderModel.findWorkOrderByDoco('20001008');
    workOrderOverview.tab.current = workOrderOverview.tab.info;
    frmWorkOrderOverview.ibtTabPane.activeTabs = [0];
    ibt_PlanificationNeedUpdate = true;
    frmCatalogSearch.show();
}