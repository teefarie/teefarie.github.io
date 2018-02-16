$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(".calculate").click(function(){
    $("#calculator").addClass("hvr-buzz");
    setTimeout(()=>{
        $("#calculator").removeClass("hvr-buzz");
    }, 500)
});


