function AS_Form_bfb7958aa1774e3b923f50c0bc46de3b(eventobject) {
    version.check();
    otis.application.setCurrentAppMenu("loginAppMenu");
    frmLogin.flxLogo.animate(kony.ui.createAnimation({
        "0": {
            "opacity": 0,
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "rectified": true
        },
        "100": {
            "opacity": 1,
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "rectified": true
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": null
    });
}