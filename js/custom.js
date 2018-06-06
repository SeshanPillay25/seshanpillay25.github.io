(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        /***MENU TOGGLE ANIMATION***/
        $('.toggle-normal').on('click', function() {
                $('.top-bar').toggleClass('top-transform');
                $('.middle-bar').toggleClass('middle-transform');
                $('.bottom-bar').toggleClass('bottom-transform');
            });


        /***MENU CLOSE***/
        $('.section,div#menu-options a').on('click', function () {
            $('nav#theMenu').removeClass('menu-open');
            $('.top-bar').removeClass('top-transform');
            $('.middle-bar').removeClass('middle-transform');
            $('.bottom-bar').removeClass('bottom-transform');
        });

        /***MENU OPEN***/
        $('div#menuToggle').on('click', function () {
            $('div#menuToggle').toggleClass('active');
            $('body').toggleClass('body-push-toright');
            $('nav#theMenu').toggleClass('menu-open');
        });


        /***SMOOTH SCROLL***/
        $(function () {
            $('div#menu-options,div#about-btn').find('a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 900, "swing");
                        return false;
                    }
                }
            });
        });


        /***SCROLL TO TOP***/
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
                $('div#scrollup').addClass('animated flipInY').fadeIn(200);    // Fade in the arrow
            } else {
                $('div#scrollup').fadeOut(200);
            }
        });


        $('div#scrollup').on('click', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600);

            return false;
        });


        /***PORTFOLIO GALLERY***/
        var all = '#a,#b,#c';
        var afterFirst = '#b,#c';

        $(afterFirst).addClass('hide');

        $('a#all-sample').on('click', function () {
            $('#add-more').removeClass('hide');
            $(all).removeClass('tab-pane');
            $(afterFirst).addClass('hide');
        });
        $('a.cate').on('click', function () {
            $('#add-more').addClass('hide');
            $(afterFirst).removeClass('hide');
            $(all).addClass('tab-pane');

        });
        $('#add-more').on('click', function () {
            if ($(all).hasClass('')) {
                $(all).removeClass('tab-pane hide').addClass('x');
                $('#port-add-icon').removeClass('fa-plus').addClass('fa-arrow-up');
            } else {
                $(afterFirst).addClass('hide');
                $(all).removeClass('x');
                $('#port-add-icon').addClass('fa-plus').removeClass('fa-arrow-up');
            }

        });


        /***PORTFOLIO***/
        $('li.list-shuffle,#add-more').on('click', function () {
            $(".inLeft")
                .removeClass('InLeft')
                .hide()
                .addClass('InLeft')
                .show();
            $(".inRight")
                .removeClass('InRight')
                .hide()
                .addClass('InRight')
                .show();
        });


        /***SKILLS***/
        $('div.skillbar').each(function () {
            $(this).find('div.skillbar-bar').css({
                width: $(this).attr('data-percent')
            });
        });

    });


    jQuery(window).load(function () {

        /***FADES OUT PRE-LOADER***/
        $('div#loading').fadeOut(500);

        /***SCROLL ANIMATION***/
        window.sr = ScrollReveal({reset: false}); // reset false stops repetition of animation
        var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,' +
            '.timeline-dot, .timeline-content,#add-more,#skills-card,' +
            '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#contact-card';
        // Customizing a reveal set
        sr.reveal(commonCards, {duration: 1100});
        sr.reveal('#about-card,.map-label', {duration: 1400, delay: 500});
        sr.reveal('#v-card-holder', {duration: 1400, distance: '150px'});
        sr.reveal('.skillbar-bar', {duration: 1800, delay: 300, distance: '0'});});


})(jQuery);


