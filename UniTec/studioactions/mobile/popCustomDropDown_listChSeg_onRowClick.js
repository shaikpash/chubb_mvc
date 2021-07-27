function popCustomDropDown_listChSeg_onRowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_c2b9335cb7a443cfb5d101a53d66581a(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_c2b9335cb7a443cfb5d101a53d66581a(eventobject, sectionNumber, rowNumber) {
    return onCustomDropdownSelect.call(this);
}