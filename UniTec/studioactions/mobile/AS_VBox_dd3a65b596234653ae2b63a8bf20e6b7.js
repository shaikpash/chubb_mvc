function AS_VBox_dd3a65b596234653ae2b63a8bf20e6b7(eventobject) {
    workOrder = workOrderModel.findWorkOrderByDoco('20001008');
    workOrderOverview.tab.current = workOrderOverview.tab.info;
    frmWorkOrderOverview.ibtTabPane.activeTabs = [0];
    ibt_PlanificationNeedUpdate = true;
    frmCatalogSearch.show();
}