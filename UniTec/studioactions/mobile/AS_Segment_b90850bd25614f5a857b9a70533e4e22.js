function AS_Segment_b90850bd25614f5a857b9a70533e4e22(eventobject, sectionNumber, rowNumber) {
    var UIPasteboard = objc.import("UIPasteboard");
    var pasteBoard = UIPasteboard.generalPasteboard();
    pasteBoard.string = frmWorkOrderOverview.ibtConsSegBT.selectedItems[0].comment;
    popupModel.showPopError("Consigne copiée dans le presse papier");
}