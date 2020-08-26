(function ($) {
    'use strict';

    var akame_window = $(window);

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    akame_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#akameNav').classyNav();
    }

    // *********************************
    // :: 3.0 Welcome Slides Active Code
    // *********************************

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500
        })
        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // *************************************
    // :: 4.0 Testimonial Slides Active Code
    // *************************************
    if ($.fn.owlCarousel) {
        var testiSlide = $('.testimonial-slides');
        testiSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            dots: true
        });
    }
    // **************************************
    // :: 5.0 Booking Table Slide Active Code
    // **************************************
    if ($.fn.owlCarousel) {
        var bookingSlide = $('.booking-table-slider');
        bookingSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: false,
            smartSpeed: 1500,
            dots: true,
            nav: true,
            navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>']
        });
    }

    // ****************************
    // :: 6.0 Portfolio Active Code
    // ****************************
    if ($.fn.imagesLoaded) {
        $('.akame-portfolio-area, .akame-blog-masonary').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.akame-portfolio-area, .akame-blog-masonary').isotope({
                itemSelector: '.akame-portfolio-item, .akame-blog-masonary-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.akame-portfolio-item, .akame-blog-masonary-item'
                }
            });
        });
    }

    // *********************************
    // :: 7.0 Portfolio Menu Active Code
    // *********************************
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // *********************************
    // :: 8.0 Magnific Popup Active Code
    // *********************************
    if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'iframe'
        });
        $('.thumbnail-zoom').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }

    // **************************
    // :: 9.0 Tooltip Active Code
    // **************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 10.0 WOW Active Code
    // ***********************
    if (akame_window.width() > 767) {
        new WOW().init();
    }

    // ****************************
    // :: 11.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // ****************************
    // :: 12.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        akame_window.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="arrow_carrot-up"</i>'
        });
    }

    // ******************************
    // :: 13.0 Counter Up Active Code
    // ******************************
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 15,
            time: 1500
        });
    }

    // *********************************
    // :: 14.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // ******************************
    // :: 15.0 Countdown Active Code
    // ******************************
    if ($.fn.countdown) {
        $("#clock").countdown("2020/11/10", function (event) {
            $(this).html(event.strftime("<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>"));
        });
    }

})(jQuery);