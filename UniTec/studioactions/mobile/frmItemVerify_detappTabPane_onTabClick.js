function frmItemVerify_detappTabPane_onTabClick(eventobject, currentindex, isexpanded) {
    return AS_TabPane_jcb2540e4245450398f6d818ec1eb732(eventobject, currentindex, isexpanded);
}

function AS_TabPane_jcb2540e4245450398f6d818ec1eb732(eventobject, currentindex, isexpanded) {
    if (currentindex == 0) {
        frmItemVerify.btnTabPrev.skin = 'skntabBtn';
        frmItemVerify.btnTabFirst.skin = 'sknTabBtnFoc';
    } else {
        frmItemVerify.btnTabPrev.skin = 'sknTabBtnFoc';
        frmItemVerify.btnTabFirst.skin = 'skntabBtn';
    }
}