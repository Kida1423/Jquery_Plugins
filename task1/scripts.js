$(document).ready(function() {
    $('#menu').metisMenu();
});

       
$('.slider').slick({
    dots: true,
    speed:1000,
    autoplay: true,
    autoplaySpeed: 2000,
});

$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 40) { 
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});


       
