
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

$('.has-dd').click(function(e){
    e.preventDefault();
    var dropdown = $(this).data("dropdown");
    var opened = $(this).data("opened");
    if(dropdown !== null){
        if(opened === false){
            $("header").css('height', "245px");
            $("#" + dropdown).css('display', "block");
            $("header.home").css('background', "linear-gradient(180deg,#005bea,#005bea)");
            $(this).data("opened", true);
        } else {
            $("header").css('height', "80px");
            $("#" + dropdown).css('display', "none");
            $("header.home").css('background', "transparent");
            $(this).data("opened", false);
        }
    }
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

