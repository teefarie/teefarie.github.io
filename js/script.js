//Preload
$(window).on('load', function() { 
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
})

//Back to top
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

//Animation fade in-up
AOS.init({
  offset: 100,
  duration: 800,
  easing: 'ease',
  delay: 300,
  once: true,
});


//Remove nav when footer is in view
function checkOffset() {
    if($('nav').offset().top + $('nav').height() <= $('footer').offset().top - 0)
    $('nav').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
    $('nav').css('position', 'fixed');
}

$(document).scroll(function() {
    checkOffset();
});


//Make nav active on scroll to respective divs
/*$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-container a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-container ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}*/

//Animate to view when a link tag with an id is being clicked on
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


//Hide div till nav is being clicked on
jQuery(document).ready(function() {
    jQuery('#case-studies').hide();

    jQuery('.hide-div-c').click(function(e){
        e.preventDefault();jQuery("#case-studies").slideToggle();
        jQuery('.hide-div-c').toggleClass('opened closed');
    });
});

jQuery(document).ready(function() {
    jQuery('#get-in-touch').hide();

    jQuery('.hide-div-g').click(function(e){
        e.preventDefault();jQuery("#get-in-touch").slideToggle();
        jQuery('.hide-div-g').toggleClass('opened closed');
    });

});



