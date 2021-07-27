function p2kwiet168597368521470_ibtConsSegSit_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    return ibt_onModConsigne.call(this, 'site', frmWorkOrderOverview.ibtTabPane.ibtConsSegSit.data[rowNumber]['id'], frmWorkOrderOverview.ibtTabPane.ibtConsSegSit.data[rowNumber]['comment']);
}