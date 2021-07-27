function p2kwiet168597368521102_vbxStatusTNP_onClick_seq0(eventobject, context) {
    if (!taskOverview.isReadOnly) {
        taskOverview.segTasksNonPlannedInfo = taskOverview.form.segTasksNonPlanned.data[context.rowIndex];
        taskOverview.onVbxStatusTNPClick();
    }
}