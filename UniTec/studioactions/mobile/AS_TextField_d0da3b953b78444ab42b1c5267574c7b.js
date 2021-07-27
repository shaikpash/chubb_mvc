function AS_TextField_d0da3b953b78444ab42b1c5267574c7b(eventobject, changedtext) {
    frmItemVerify.txtCustomerNumb.text = frmItemVerify.txtCustomerNumb.text.toUpperCase();
    frmItemVerify.txtCustomerNumb.text = removeAccent(frmItemVerify.txtCustomerNumb.text);
}