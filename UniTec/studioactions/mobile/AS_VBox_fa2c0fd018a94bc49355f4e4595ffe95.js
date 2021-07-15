function AS_VBox_fa2c0fd018a94bc49355f4e4595ffe95(eventobject) {
    workOrder = workOrderModel.findWorkOrderByDoco('20001008');
    workOrderOverview.tab.current = workOrderOverview.tab.info;
    frmWorkOrderOverview.ibtTabPane.activeTabs = [0];
    ibt_PlanificationNeedUpdate = true;
    frmCatalogSearch.show();
}