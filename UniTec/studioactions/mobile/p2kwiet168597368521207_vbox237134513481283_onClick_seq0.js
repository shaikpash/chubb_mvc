function p2kwiet168597368521207_vbox237134513481283_onClick_seq0(eventobject) {
    travelling.onArrivedBtnClicked();
    inventory.filter = false; //Reinit filter in inventory
    inventory.saveFilter.Realised = true;
    inventory.saveFilter.Refused = true;
    inventory.saveFilter.Statued = true;
    invent.cbxFilter.building = "";
    invent.cbxFilter.floor = "";
    invent.cbxFilter.place = "";
    inventory.saveFilter.customerNumber = "";
    inventory.saveFilter.batchNo = "";
}