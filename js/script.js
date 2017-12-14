
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
        $(".links a").css("color", "#65666A");
        $(".menu li").css("background", "#02558B");
    }

    else {
        $("header").removeClass("header-shadow");
        $(".links a").css("color", "#fff");
        $(".menu li").css("background", "#fff");
    }
});




$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});








