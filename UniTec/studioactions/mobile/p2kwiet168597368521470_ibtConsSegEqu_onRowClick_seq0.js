function p2kwiet168597368521470_ibtConsSegEqu_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    return ibt_onModConsigne.call(this, 'equipement', frmWorkOrderOverview.ibtTabPane.ibtConsSegEqu.data[rowNumber]['id'], frmWorkOrderOverview.ibtTabPane.ibtConsSegEqu.data[rowNumber]['comment']);
}