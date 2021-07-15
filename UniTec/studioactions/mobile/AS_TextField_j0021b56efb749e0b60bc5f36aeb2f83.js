function AS_TextField_j0021b56efb749e0b60bc5f36aeb2f83(eventobject, changedtext) {
    if (eventobject.text == "bypass") {
        app_parameters.debug.on = true;
        app_parameters.debug.bypass = true;
        app_parameters.debug.no_sync = true;
    } else if (eventobject.text == "formation") {
        app_parameters.build.training_course = true;
    } else if (eventobject.text == "wilson") {
        frmLogin.imgLogo.src = "wiltec.png";
    } else if (eventobject.text == "clear") {
        // clearBase
    } else {
        var elements = eventobject.text.split(' ');
        if (elements[0] == "incomplet") {
            var sql = "UPDATE F56BT SET SRST = '55' WHERE DOCO = " + elements[1];
            var db_result = global.db.query(sql);
            alert(db_result);
        } else if (elements[0] == "changebase") {
            konysyncClientSyncConfig.AppID = elements[1];
        }
    }
}