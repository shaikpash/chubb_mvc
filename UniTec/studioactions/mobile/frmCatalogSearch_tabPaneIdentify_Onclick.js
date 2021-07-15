function frmCatalogSearch_tabPaneIdentify_Onclick(eventobject, currentindex, isexpanded) {
    return AS_TabPane_d8c6507cf2754317be8eaf8a74464a0c(eventobject, currentindex, isexpanded);
}

function AS_TabPane_d8c6507cf2754317be8eaf8a74464a0c(eventobject, currentindex, isexpanded) {
    if (currentindex == 0) {
        frmCatalogSearch.btnTabPrev.skin = 'skntabBtn';
        frmCatalogSearch.btnTabFirst.skin = 'sknTabBtnFoc';
    } else {
        frmCatalogSearch.btnTabPrev.skin = 'sknTabBtnFoc';
        frmCatalogSearch.btnTabFirst.skin = 'skntabBtn';
    }
}