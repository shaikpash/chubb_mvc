function AS_Segment_b0e2c7a48df744d7ac881987dbbef32b(eventobject, sectionNumber, rowNumber) {
    var UIPasteboard = objc.import("UIPasteboard");
    var pasteBoard = UIPasteboard.generalPasteboard();
    pasteBoard.string = frmWorkOrderOverview.ibtConsSegBT.selectedItems[0].comment;
    popupModel.showPopError("Consigne copiée dans le presse papier");
}