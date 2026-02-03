/*  ---------------------------------------------------
  Template Name: Gym
  Description:  Gym Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    //Masonary
    $('.gallery').masonry({
        itemSelector: '.gs-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider with Black Fade
    --------------------*/
    var hero_s = $(".hs-slider");
    var heroSection = $('.hero-section');

    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        onTranslate: function () {
            // Add black fade overlay during transition
            heroSection.addClass('transitioning');
            // Reset animations before transition
            $('.hi-text span, .hi-text h1, .hi-text .hero-tagline, .hi-text .primary-btn').removeClass('animate-in');
        },
        onTranslated: function () {
            // Remove overlay after transition
            setTimeout(function () {
                heroSection.removeClass('transitioning');
            }, 200);
            // Trigger text animations for the new slide
            setTimeout(function() {
                $('.hs-item.active .hi-text span').addClass('animate-in');
                setTimeout(function() { $('.hs-item.active .hi-text h1').addClass('animate-in'); }, 200);
                setTimeout(function() { $('.hs-item.active .hi-text .hero-tagline').addClass('animate-in'); }, 400);
                setTimeout(function() { $('.hs-item.active .hi-text .primary-btn').addClass('animate-in'); }, 600);
            }, 300);
        }
    });

    // Trigger initial text animations
    setTimeout(function() {
        $('.hs-item.active .hi-text span').addClass('animate-in');
        setTimeout(function() { $('.hs-item.active .hi-text h1').addClass('animate-in'); }, 200);
        setTimeout(function() { $('.hs-item.active .hi-text .hero-tagline').addClass('animate-in'); }, 400);
        setTimeout(function() { $('.hs-item.active .hi-text .primary-btn').addClass('animate-in'); }, 600);
    }, 500);

    /*------------------
        Team Slider
    --------------------*/
    $(".ts-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".ts_slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });

    $('.table-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.class-timetable').removeClass('filtering');
            $('.ts-meta').removeClass('show');
        } else {
            $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

})(jQuery);