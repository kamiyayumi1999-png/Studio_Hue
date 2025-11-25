$(function() {
    $(window).on('load', function() {
        $('.menu-nav').addClass('on-load');
    });

    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.menu-nav').toggleClass('open');
    });

    $('.menu-nav a').on('click', function() {
        if (window.innerWidth <= 968) {
            $('.hamburger').removeClass('active');
            $('.menu-nav').removeClass('open');
        }
    });

    $('a[href^="#"]').on('click', function(e) {
        
        e.preventDefault();
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top - 80;
        $('html, body').animate({scrollTop: position}, 500, 'swing');

        return false;
    });

    $(function() {
    $(window).on('load', function() {
        $('.sp-op').delay(1200).fadeOut(500);
    });
});


});