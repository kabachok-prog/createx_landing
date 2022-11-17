$(function () {

    var mixer = mixitup('.directions__list');

    $('.direction__filter-btn').on('click', function (p) {
        $('.direction__filter-btn').removeClass('direction__filter-btn--active')
        $(this).addClass('direction__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        Infinity: true,
        draggable: false,
        appendArrows: $('.team__slider-arrows'),
        waitForAnimate: false,
    })

    $('.team__slider-prew').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        appendArrows: $('.testimonials__arrow'),
        dots: true
    })

    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
})