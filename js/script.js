$(window).on('load', function() { 
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
})


/*$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("nav").addClass("nav-border");
    }
    else {
        $("nav").removeClass("nav-border");
    }
});*/


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


AOS.init({
  offset: 100,
  duration: 800,
  easing: 'ease',
  delay: 300,
  once: true,
});


function checkOffset() {
    if($('nav').offset().top + $('nav').height() <= $('footer').offset().top - 0)
    $('nav').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
    $('nav').css('position', 'fixed');
}
$(document).scroll(function() {
    checkOffset();
});


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
