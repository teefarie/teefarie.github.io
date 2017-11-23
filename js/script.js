
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


$(document).on("click hover", "#drop-list", function() {
    $("header").css('height', "245px");
    $(".service-dropdown").css('display', "block");
    $("header.home").css('background', "linear-gradient(180deg,#005bea,#005bea)");
});


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

