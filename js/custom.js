$(document).ready(function () {
    'use strict';

    //WOW
    var wow = new WOW({
        mobile: false
    });
    wow.init();

    //Window resize events
    $(window).on('resize orientationchange', function () {
        mobileNavigatin();
    });

    //fancybox
    $('.js-fancybox').fancybox();

    $(window).load(function(){
        $('body').addClass('g-show');
    })
});
