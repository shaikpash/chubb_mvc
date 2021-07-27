function frmItemShow_detappTabPane_onTabClick(eventobject, currentindex, isexpanded) {
    return AS_TabPane_fb4c2476c0284a9da3e032137676d1bb(eventobject, currentindex, isexpanded);
}

function AS_TabPane_fb4c2476c0284a9da3e032137676d1bb(eventobject, currentindex, isexpanded) {
    if (currentindex == 0) {
        frmItemShow.btnTabPrev.skin = 'skntabBtn';
        frmItemShow.btnTabFirst.skin = 'sknTabBtnFoc';
    } else {
        frmItemShow.btnTabPrev.skin = 'sknTabBtnFoc';
        frmItemShow.btnTabFirst.skin = 'skntabBtn';
    }
}