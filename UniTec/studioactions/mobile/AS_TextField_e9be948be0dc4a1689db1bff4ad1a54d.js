function AS_TextField_e9be948be0dc4a1689db1bff4ad1a54d(eventobject, changedtext) {
    frmItemVerify.txtLocation.text = frmItemVerify.txtLocation.text.toUpperCase();
    frmItemVerify.txtLocation.text = removeAccent(frmItemVerify.txtLocation.text);
}