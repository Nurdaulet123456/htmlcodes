$(function() {

    let intro = $("#intro");
    let content = $("#content");
    let header = $("#header");
    let subnav = $("#subnav");
    let subnav2 = $(".subnav");
    let search = $("#search");
    let introHight = intro.innerHeight();
    let contentHight = content.innerHeight();
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

        if (topScroll >= (introHight - headerHight)) {
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

    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();



        $(this).toggleClass('active');
        nav.toggleClass('show');
    });

    $(window).on('resize', function() {

        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');

    });


    /* Typed.js */

    var typed = new Typed(".type", {
        strings: ["Everyday", "Fullday"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true

    });

    /* Move-up */

    $('.move-up').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0

        }, 500);
    });

    // Header__logo Scroll

    $('#logo').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0

        }, 500);
    });



    /* AOS.js https://github.com/michalsnik/aos */


    AOS.init({
        // Global settings:
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 150, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });





















});