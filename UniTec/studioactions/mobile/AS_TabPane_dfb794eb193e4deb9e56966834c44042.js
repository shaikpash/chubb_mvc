function AS_TabPane_dfb794eb193e4deb9e56966834c44042(eventobject, currentindex, isexpanded) {
    if (currentindex == 0) {
        frmItemVerify.btnTabPrev.skin = 'skntabBtn';
        frmItemVerify.btnTabFirst.skin = 'sknTabBtnFoc';
    } else {
        frmItemVerify.btnTabPrev.skin = 'sknTabBtnFoc';
        frmItemVerify.btnTabFirst.skin = 'skntabBtn';
    }
}