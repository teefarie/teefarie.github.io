
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


function hasAtrr(element, attrKey) {
    var attr = $(element).attr(attrKey);
    return typeof attr != typeof undefined && attr !== false;
}
(function ($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function (j) {
        if (hasAtrr(this, "href")) {
            return true;
        }

        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);


jQuery(document).ready(function($){
    var offset = 500,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.back-to-top');

    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ?
         $back_to_top.addClass('visible') : 
         $back_to_top.removeClass('visible fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('fade-out');
        }
    });

    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
});


