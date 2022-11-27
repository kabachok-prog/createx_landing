$(function () {

    var mixer = mixitup('.directions__list');

    $('.direction__filter-btn').on('click', function (p) {
        $('.direction__filter-btn').removeClass('direction__filter-btn--active')
        $(this).addClass('direction__filter-btn--active')
    })

    // ------------------------------------------

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        Infinity: true,
        draggable: false,
        appendArrows: $('.team__slider-arrows'),
        // waitForAnimate: false,
        responsive:
            [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3
                    },
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2
                    },
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        draggable: true,
                        dots: true
                    },
                }
            ]
    })

    $('.team__slider-prew').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    // ----------------------------------------------

    $('.testimonials__slider').slick({
        arrows: false,
        appendArrows: $('.testimonials__arrow'),
        dots: true,
        responsive:
            [
                {
                    breakpoint: 700,
                    settings: {

                    },
                },
            ]
    })

    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })

    // $('.program__acc-link').on('click', function(e) {
    //     e.preventDefault()
    //     $(this).toggleClass('program__acc-link--active')
    //     $(this).children('.program__acc-text').slideToggle()
    // }) 

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })

    // $(window).on('scroll', function(e) {
    //     if ($(window).scrollTop() > 0) {
    //         $('.burger').addClass('burger--follow')
    //     } else {
    //         $('.burger').removeClass('burger--follow')
    //     }
    // })

    $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0)


    $('.burger, .overlay, .header__top a').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })

    $('.footer__top-title--slide').on('click', function () {
        $(this).next().slideToggle()
    })
})

let el = document.querySelector('.footer__top-list');
let elStyles = el.style;
const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight

$(function () {
    if (pageWidth > 550 && pageHeight > 550) {
        elStyles.style = 'display: block;';
    }
})
