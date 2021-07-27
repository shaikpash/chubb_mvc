function AS_Segment_a0602bdd27294f8fb40ac56a004a9025(eventobject, sectionNumber, rowNumber) {
    var UIPasteboard = objc.import("UIPasteboard");
    var pasteBoard = UIPasteboard.generalPasteboard();
    pasteBoard.string = frmWorkOrderOverview.ibtConsSegBT.selectedItems[0].comment;
    popupModel.showPopError("Consigne copiée dans le presse papier");
}