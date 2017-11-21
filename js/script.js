
$('.menu').click(function () {
    $('.menu').toggleClass('on', function () {});
    $('nav').slideToggle(400, function () {});
});


$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("visible");
    }
    else {
        $("#header").removeClass("visible");
    }
});


$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
        $("header").addClass("header-shadow");
    }
    else {
        $("header").removeClass("header-shadow");
    }
});
