$(function() {

    let intro = $("#intro");
    let header = $("#header");
    let subnav = $("#subnav");
    let subnav2 = $(".subnav");
    let search = $("#search");
    let introHight = intro.innerHeight();
    let headerHight = header.innerHeight();
    let scrollTop = $(window).scrollTop();

    headerScroll();

    $(window).on("scroll", function() {
        headerScroll();
    });

    // Scroll 


    function headerScroll() {
        introHight = intro.innerHeight();
        headerHight = header.innerHeight();

        let topScroll = $(this).scrollTop();
        let scrollSpy = introHight - headerHight;
        if (topScroll >= scrollSpy) {
            header.addClass("header--darken");
            subnav.addClass("subnav--darken");
            subnav2.addClass("subnav--darken");
            search.addClass("search--darken");

        } else {
            header.removeClass("header--darken");
            subnav.removeClass("subnav--darken");
            subnav2.removeClass("subnav--darken");
            search.removeClass("search--darken");
        }
    };

    // Modal

    $('[data-modal]').on('click', function(e) {
        e.preventDefault();

        let modal = $(this).data('modal');

        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'rotate(0)',
                opacity: '1'
            });
        });

    });

    $('[data-close]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).parents('.modal');


        modal.find('.modal__content').css({
            transform: 'rotate(180deg)',
            opacity: '0'
        });


        setTimeout(function() {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 400);
    });

    $('.modal').on('click', function() {

        $('body').removeClass('no-scroll');
        $(this).removeClass('show');

    });

    $('.modal__content').on('click', function(event) {
        event.stopPropagation();
    });

    // MomentsSlider

    let momentsSlider = $("#momentsSlider");

    momentsSlider.slick({
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 800
    });

    // BurgerToggle




    $('#navToggle').on('click', function(event) {
        event.preventDefault();



        $(this).toggleClass('active');
        $('#nav').toggleClass('show');
    });

    $(window).on('resize', function() {

        $("body").removeClass('show-nav');
        $('#navToggle').removeClass('active');
        $('#nav').removeClass('show');

    });


    /* Move-up */

    $('.move-up').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0

        }, 200);
    });

    // Header__logo Scroll

    $('#logo').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0

        }, 200);
    });



});
