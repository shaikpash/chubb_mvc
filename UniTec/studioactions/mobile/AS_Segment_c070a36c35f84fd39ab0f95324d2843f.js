function AS_Segment_c070a36c35f84fd39ab0f95324d2843f(eventobject, sectionNumber, rowNumber) {
    function TRANSFORM_ACTION_NEW____b68b88d272ab4bd98a5b70f16e71d01d_Callback() {}

    function SCALE_ACTION____f2e6a30e97d145298ed38530ebfcadbd_Callback() {}
    undefined.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {},
            "rectified": true
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": SCALE_ACTION____f2e6a30e97d145298ed38530ebfcadbd_Callback
    });
    var trans100 = kony.ui.makeAffineTransform();
    undefined.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {},
            "rectified": true,
            "transform": trans100
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": TRANSFORM_ACTION_NEW____b68b88d272ab4bd98a5b70f16e71d01d_Callback
    });
}