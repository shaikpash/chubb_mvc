function p2kwiet168597368521100_vbxStatusTP_onClick_seq0(eventobject, context) {
    if (!taskOverview.isReadOnly) {
        taskOverview.segTasksPlannedInfo = taskOverview.form.segTasksPlanned.data[context.rowIndex];
        taskOverview.onVbxStatusTPClick();
    }
}