$(function () {

    'use strict';



    $('#mv-intro__car_container').twentytwenty();



    $('.section-1__slider_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
        dots: false,
        asNavFor: '.section-1__slider_card',
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.section-1__slider_card').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        arrows: false,
        dots: true,
        asNavFor: '.section-1__slider_img',
        appendDots: $('.section-1__slider__counter'),
        customPaging: function (slider, i) {
            return '<span class="slide-current">' + (i + 1) + '</span>' + '<span>из</span>' + '<span class="slide-length">' + slider.slideCount +'</span>';
        },
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    });



    $('.section-3__slider_top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        arrows: false,
        dots: false,
        asNavFor: '.section-3__slider_bot',
    });

    $('.section-3__slider_bot').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        fade: false,
        arrows: true,
        dots: false,
        asNavFor: '.section-3__slider_top',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });



    $('.section-6__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: false,
        arrows: true,
        dots: false,
        appendArrows: '.section-6__slider_nav',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });



    const section1Link = $('.section-1__slider_card_item');
    const section1Img = $('.section-1__slider_img_item');

    section1Link.on('click', function (e) {
        e.preventDefault();
        let thisImg = $(this).attr('href');
        section1Link.removeClass('active');
        $(this).addClass('active');
        section1Img.removeClass('active');
        $(thisImg).addClass('active');
    });

});