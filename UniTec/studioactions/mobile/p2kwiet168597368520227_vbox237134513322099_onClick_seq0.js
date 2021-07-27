function p2kwiet168597368520227_vbox237134513322099_onClick_seq0(eventobject) {
    workOrder = workOrderModel.findWorkOrderByDoco('20001008');
    workOrderOverview.tab.current = workOrderOverview.tab.info;
    frmWorkOrderOverview.ibtTabPane.activeTabs = [0];
    ibt_PlanificationNeedUpdate = true;
    frmCatalogSearch.show();
}