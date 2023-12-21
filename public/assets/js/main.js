/*-----------------------------------------------------------------------------------
 Template Name: Posh - Auto Parts eCommerce Bootstrap 4 Html Template
 Description: A perfect template to build beautiful and unique Autopart websites. It comes with nice and clean design.
 Version: 1.0
 ----------------------------------------------------------------------------------- */

/* ========================================================================
 *  Main JS List:
 * ========================================================================
 01. Page Preloader
 02. Sticky Header 
 03. Header Top Navbar
 04. Navbar
 05. Cart Drawer 
 06. Cart Popup Toggle
 07. Setting Menu 
 08. YMM Search Box Toggle
 09. Sticky Header 3 Menu Toggle
 10. Slick Slider
 10.1 Slideshow Slider
 10.2 Product Collection Slider
 10.3 Product Three Slider
 10.4 Product Collection Five Products Slider
 10.5 Product Collection Slider
 10.6 Collection Four Slider
 10.7 Product Brand Slider
 10.8 Testimonial Sidebar
 10.9 Quotes Sidebar
 10.10 Quotes Sidebar	
 10.11 Product Suggestion slider
 11. Product Horizontal Thumbnails Slider	
 12. Product Vertical Thumbnails Slider
 13. Product TabsResponsive
 14. Form Validation
 15. Write Review Toggle Box
 16. Sidebar Submenu Categories
 17. Timer Count Down
 18. Price Range Slider
 19. Product Filter Dropdown
 20. Blog Post Gallery slider
 21. Quantity Increment
 22. Tooltip
 23. Select2 jQuery replacement for select boxes 
 24. Number Counter
 25. Product Details LightGallery
 26. Product Details Image Zoom
 27. Newsletter Popup
 28. Footer Accodian
 29. Scroll Top
 30. Magnific Popup
 31. Product Details Sticky
 32. Sticky Products 
 33. YMM Accordion Mobile
 * ==========================================================================
 *  End of Main JS List
 * ==========================================================================*/


(function ($) {
    'use strict';

    /* ==========================================================================
     * 1. Page Preloader
     * ========================================================================== */
    function preloader() {
        $('.page-loading').delay(500).fadeOut(500);
    }
    preloader();

    /* ==========================================================================
     * 2. Sticky Header 
     * ========================================================================== */
    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 150) {
            $('.header').addClass('header-sticky fadeInDown');
        }
        if ($(window).scrollTop() < 151) {
            $('.header').removeClass('header-sticky fadeInDown');
        }
    });

    /* ==========================================================================
     * 3. Header Top Navbar
     * ========================================================================== */
    function top_links() {
        $('.toplink-toggle').on("click", function () {
            if ($(window).width() < 991) {
                $('.top-links .link-items').slideToggle();
            }
            $('.top-links .link-items').toggleClass('active');
        });

        $(window).on("load resize", function (e) {
            if ($(window).width() > 992) {
                $(".top-links .link-items").show();
            } else {
                $(".top-links .link-items").hide();
            }
        });
    }
    top_links();

    /* ==========================================================================
     * 4. Navbar
     * ========================================================================== */
    $('.navbar-toggler').on("click", function () {
        if ($(window).width() < 991) {
            $('.navbar-collapse').slideToggle();
        }
        $('.navbar-collapse').toggleClass('toggled-on');
    });

    $(".navbar-collapse .nav-link").on("click", function () {
        if ($(window).width() < 991) {
            $(this).next(".megamenu").slideToggle();
            $(this).toggleClass("minus");
        }
    });

    $(".megamenu-lvl h3").on("click", function () {
        if ($(window).width() < 991) {
            $(this).next("ul").slideToggle();
            $(this).toggleClass("minus");
        }
    });

    $(".dropmenu .item").on("click", function () {
        if ($(window).width() < 991) {
            $(this).next("ul").slideToggle();
            $(this).toggleClass("minus");
        }
    });

    var resizeTimer;
    $(window).resize(function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            $(window).trigger('delayed-resize', e);
        }, 250);
    });

    // Resize Function
    $(window).on("load resize", function (e) {
        if ($(window).width() > 991) {
            $(".navbar-collapse").show();
        } else {
            $(".navbar-collapse").hide();
        }
    });

    // Navbar closed onclick close button
    $(".closeNav-btn").click(function () {
        $(".navbar-collapse").removeClass("show");
    });

    /* ==========================================================================
     * 5. Cart Drawer 
     * ========================================================================== */
    $('.cart-btn, .close-btn').on("click", function () {
        $(this).toggleClass('active');
        $('.cart-drawer-push').toggleClass('cart-drawer-pushtoleft');
        $('.cart-drawer-right').toggleClass('cart-drawer-open');
        $('html').toggleClass('drawer-cart-open');
    });

    // Drawer Out side click by hide
    $(document).mouseup(function (e) {
        e.preventDefault();
        //Cart drawer Out side click by hide
        if (!$(event.target).closest(".cart-drawer,.close-btn").length) {
            $(".main-wrapper").removeClass("cart-drawer-pushtoleft");
            $(".main-wrapper").find(".cart-drawer").removeClass("cart-drawer-open");
            $('html').removeClass('drawer-cart-open');
        }

        // Navbar Out side click by hide
        if (!$(event.target).closest(".navbar-collapse,.closeNav-btn").length) {
            $(".navbar-collapse").removeClass("show");
        }
    });

    /* ==========================================================================
     * 6. Cart Popup Toggle
     * ========================================================================== */
    jQuery(".minicart-v2 .cart-btns").click(function (e) {
        jQuery(".minicart-v2 .minicart-toggle-popup").slideToggle();
        $('.minicart-v2 .cart-btns').toggleClass('toggled-up');
        $('.minicart-v2 .minicart-toggle-popup').toggleClass('active');
        e.preventDefault();
    });

    /* ==========================================================================
     * 7. Setting Menu 
     * ========================================================================== */
    jQuery(".setting-toggle").click(function (e) {
        jQuery(".settinglinks").slideToggle();
        e.preventDefault();
    });

    /* ==========================================================================
     * 8. YMM Search Box Toggle 
     * ========================================================================== */
    jQuery(".ymm-search-box-toggle .ymm-title-toggle").click(function (e) {
        jQuery(".ymm-search-box-toggle .ymm-formField").slideToggle();
        $('.ymm-search-box-toggle .ymm-title-toggle').toggleClass('toggled-up');
        $('.ymm-search-box-toggle .ymm-formField').toggleClass('active');
        e.preventDefault();
    });

    /* ==========================================================================
     * Search Box Toggle > 991
     * ========================================================================== */
    $('.site-header-search .search-toggle').on("click", function () {
        if ($(window).width() < 991) {
            $('.site-header-search .search-form').slideToggle();
        }
        $('.site-header-search .search-form').toggleClass('active');
    });

    // Resize Function
    $(window).on("load resize", function (e) {
        if ($(window).width() > 991) {
            $(".site-header-search .search-form").show();
        } else {
            $(".site-header-search .search-form").hide();
        }
    });

    /* ==========================================================================
     * 9. Sticky Header 3 Menu Toggle
     * ========================================================================== */
    jQuery(".home-version-3 .sticky-menu-button").click(function (e) {
        $('.home-version-3 .sticky-menu-button').toggleClass('active');
        jQuery(".home-version-3 .header-sticky .main-navbar").slideToggle();
        $('.home-version-3 .header-sticky .main-navbar').toggleClass('active');
        e.preventDefault();
    });

    /* ==========================================================================
     * 10.1 Slideshow Slider
     * ========================================================================== */
    function slideshow_banner() {
        $('.slideshow-banner').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            lazyLoad: 'ondemand'
        });
    }
    slideshow_banner();

    /* ==========================================================================
     * 10.2 Product Collection Slider
     * ========================================================================== */
    function prcarousel_slider() {
        $('.prcarousel').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: 'linear',
            arrows: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }
    prcarousel_slider();

    /* ==========================================================================
     * 10.3 Product Three Slider
     * ========================================================================== */
    function three_prcarousel_slider() {
        $('.three-prcarousel').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }
    three_prcarousel_slider();

    /* ==========================================================================
     * 10.4 Product Collection Five Products Slider
     * ========================================================================== */
    function prcarousel_pro5_slider() {
        $('.prcarousel-pro5').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            cssEase: 'linear',
            arrows: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    prcarousel_pro5_slider();

    /* ==========================================================================
     * 10.5 Product Collection Slider
     * ========================================================================== */
    function home_collection_prcarousel_slider() {
        $('.home-collection-prcarousel').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }
    home_collection_prcarousel_slider();

    /* ==========================================================================
     * 10.6 Collection Four Slider
     * ========================================================================== */
    function home_collection_four_prcarousel_slider() {
        $('.home-collection-four-prcarousel').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }
    home_collection_four_prcarousel_slider();

    /* ==========================================================================
     * 10.7 Product Brand Slider
     * ========================================================================== */
    function brand_slider() {
        $('.brand-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }
    brand_slider();

    /* ==========================================================================
     * 10.8 Testimonial Sidebar
     * ========================================================================== */
    function testimonial_sidebar() {
        $('.testimonial-sidebar').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }
    testimonial_sidebar();

    /* ==========================================================================
     * 10.9 Quotes Sidebar
     * ========================================================================== */
    function quotes_slider() {
        $('.quotes-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }
    quotes_slider();

    /* ==========================================================================
     * 10.10 Quotes Sidebar
     * ========================================================================== */
    function blog_post_slider() {
        $('.blog-post-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }
    blog_post_slider();

    /* ==========================================================================
     * 10.11 Product Suggestion slider
     * ========================================================================== */
    function product_suggestion_slider() {
        $('.product-suggestion').slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            adaptiveHeight: true
        });
    }
    product_suggestion_slider();

    /* ==========================================================================
     * 11. Product Horizontal Thumbnails Slider
     * ========================================================================== */
    function horizontal_thumbnails_slider() {
        $('.thumbnails-single').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            infinite: false,
            speed: 1000,
            asNavFor: '.thumbnail-items'
        });
        $('.thumbnail-items').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.thumbnails-single',
            speed: 1000,
            dots: false,
            arrows: true,
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
            centerMode: false,
            focusOnSelect: true
        });
    }
    horizontal_thumbnails_slider();

    $('.open-quickview-popup').on('click', function (e) {
        $('.thumbnails-single').resize();
    });

    /* ==========================================================================
     * 12. Product Vertical Thumbnails Slider
     * ========================================================================== */
    function vertical_thumbnails_slider() {
        $('.thumbnails-vertical-single').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            infinite: false,
            speed: 1000,
            asNavFor: '.thumbnail-vertical-items'
        });
        $('.thumbnail-vertical-items').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical: true,
            asNavFor: '.thumbnails-vertical-single',
            speed: 1000,
            dots: false,
            arrows: true,
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
            centerMode: false,
            focusOnSelect: true
        });
    }
    vertical_thumbnails_slider();

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.thumbnails-vertical-single').slick('slickGoTo', slideno - 1);
    });

    /* ==========================================================================
     * 13. Product TabsResponsive 
     * ========================================================================== */
    $(".drawertab-content").hide();
    $(".drawertab-content:first").show();
    /* if in tab mode */
    $("ul.drawer-tabs li").on('click', function () {
        $(".drawertab-content").hide();
        var activeTab = $(this).attr("data-tab");
        $("#" + activeTab).fadeIn();

        $("ul.drawer-tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab-drawer-heading").removeClass("d-active");
        $(".tab-drawer-heading[data-tab^='" + activeTab + "']").addClass("d_active");

        $('.prcarousel').slick('refresh');
    });

    $(".tab_container").css("min-height", function () {
        return $(".drawer-tabs").outerHeight() + 50;
    });

    /* if in drawer mode */
    $(".tab-drawer-heading").on('click', function () {
        $(".drawertab-content").hide();
        var d_activeTab = $(this).attr("data-tab");
        $("#" + d_activeTab).fadeIn();

        $(".tab-drawer-heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.drawer-tabs li").removeClass("active");
        $("ul.drawer-tabs li[data-tab^='" + d_activeTab + "']").addClass("active");

        $('.prcarousel').slick('refresh');
    });

    /* ==========================================================================
     * 14. Form Validation
     * ========================================================================== */
    function form_validation() {
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    }
    form_validation();

    /* ==========================================================================
     * 15. Write Review Toggle Box
     * ========================================================================== */
    jQuery(".write-review-btn").click(function (e) {
        $('.write-review-btn').toggleClass('active');
        jQuery(".product-review-form").slideToggle();
        e.preventDefault();
    });

    /* ==========================================================================
     * 16. Sidebar Submenu Categories 
     * ========================================================================== */
    function categories_menu() {
        $('.block-item .sub-title').click(function () {
            $(this).toggleClass('active');
            $(this).next('.block-details').slideToggle();
        });
    }
    categories_menu();

    function categories_submenu() {
        $('.cat-submenu-link a').click(function () {
            $(this).toggleClass('active');
            $(this).next('.cat-submenu-list').slideToggle();
        });
    }
    categories_submenu();

    /* ==========================================================================
     * 17. Timer Count Down
     * ========================================================================== */
    $('[data-countdown]').each(function () {
        var $this = $(this),
                finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<ul class="counter timer clearfix"><li class="ht-count days"><span id="day" class="digit days">%-D</span> <span class="smalltext">Days</span></li> <li class="ht-count hour"><span id="hour" class="digit hours">%-H</span> <span class="smalltext">Hrs</span></li> <li class="ht-count minutes"><span id="minute" class="digit minutes">%M</span> <span class="smalltext">Min</span></li> <li class="ht-count second"><span id="second" class="digit seconds">%S</span> <span class="smalltext">Sec</span></li></ul>'));
        });
    });

    /* ==========================================================================
     * 18. Price Range Slider
     * ========================================================================== */
    function slider_range() {
        $(".slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $(".range-number").text("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
            }
        });
        $(".range-number").text("$" + $(".slider-range").slider("values", 0) + " - $" + $(".slider-range").slider("values", 1));
    }
    slider_range();

    /* ==========================================================================
     * 19. Product Filter Dropdown
     * ========================================================================== */
    $('.filter-block .block-title,.cms-block .sub-title').on("click", function () {
        if ($(window).width() < 991) {
            $(this).next(".block-content,.cms-block-content").slideToggle();
            $(this).toggleClass("active");
        }
        $('.filter-block .block-content,.cms-block .cms-block-content').toggleClass('toggled-on');
        $('.testimonial-sidebar').slick('refresh');
    });
    // Resize Function
    $(window).on("load resize", function (e) {
        if ($(window).width() > 991) {
            $(".filter-block .block-content,.cms-block .cms-block-content").show();
        } else {
            $(".filter-block .block-content,.cms-block .cms-block-content").hide();
        }
    });

    /* ==========================================================================
     * 20. Blog Post Gallery slider
     * ========================================================================== */
    function blog_post_gallery() {
        $('.blog-post-gallery').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            adaptiveHeight: true
        });
    }
    blog_post_gallery();

    /* ==========================================================================
     * 21. Quantity Increment
     * ========================================================================== */
    $('.qtyplus').click(function () {
        var $input = $(this).parents('.qty-box').find('.qty-input');
        var val = parseInt($input.val(), 10);
        $input.val(val + 1);
    });

    $('.qtyminus').click(function () {
        var $input = $(this).parents('.qty-box').find('.qty-input');
        var val = parseInt($input.val(), 10);
        $input.val(val - 1);
    });

    /* ==========================================================================
     * 22. Tooltip
     * ========================================================================== */
    function tooltip() {
        $('[data-toggle="tooltip"]').tooltip();
    }
    tooltip();

    /* ==========================================================================
     * 23. Select2 jQuery replacement for select boxes 
     * ========================================================================== */
    function ui_select2() {
        $(".select2").select2({});
    }
    ui_select2();

    function ui_select2_country() {
        $(".js-country").select2({
            placeholder: "Select country"
        });
    }
    ui_select2_country();

    function ui_select2_states() {
        $(".js-states").select2({
            placeholder: "Select state"
        });
    }
    ui_select2_states();

    function ui_select2_city() {
        $(".js-city").select2({
            placeholder: "Select city"
        });
    }
    ui_select2_city();

    /* ==========================================================================
     * 24. Number Counter
     * ========================================================================== */
    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function () {
                count($this);
            }, 50);
        }
    }
    $(".stat-count").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    /* ==========================================================================
     * 25. Product Details LightGallery
     * ========================================================================== */
    var productThumb = $(".product-gallery-image img"),
            imageSrcLength = productThumb.length,
            images = [],
            indexNumbArray = [];
    for (var i = 0; i < productThumb.length; i++) {
        images[i] = {"src": productThumb[i].src};
    }
    $('.lightgallery-btn').on('click', function (e) {
        $(this).lightGallery({
            pager: false,
            thumbnail: false,
            dynamic: true,
            dynamicEl: images,
            //autoplayControls: false,
            download: false,
            actualSize: false,
            share: false,
            hash: true,
            index: 0
        });
    });

    /* ==========================================================================
     * 26. Product Details Image Zoom 
     * ========================================================================== */
    function zoom_image() {
        $('.zoom').zoom();
    }
    zoom_image();

    /* ==========================================================================
     * 27. Newsletter Popup
     * ========================================================================== */
    $(window).ready(function () {
        setTimeout(function () {
            $('#newsletter-popup').modal("show");
        }, 7000);
    });

    /* ==========================================================================
     * 28. Footer Accodian
     * ========================================================================== */
    $('.menu-items h4').on("click", function () {
        if ($(window).width() < 767) {
            $(this).next().slideToggle();
        }
        $(this).parent().toggleClass("active");
    });
    // Resize Function
    $(window).on("load resize", function (e) {
        if ($(window).width() > 767) {
            $(".menu-items ul").show();
        } else {
            $(".menu-items ul").hide();
        }
    });

    /* ==========================================================================
     * 29. Scroll Top
     * ========================================================================== */
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 400) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });
    $('#scrollTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    /* ==========================================================================
     * 30. Magnific Popup
     * ========================================================================== */
    function open_video_popup() {
        $('.open-video-popup').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            preloader: true,
            midClick: true
        });
    }
    open_video_popup();

    function open_addtocart_popup() {
        $('.open-addtocart-popup').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            preloader: false,
            midClick: true
        });
    }
    open_addtocart_popup();

    function open_quickview_popup() {
        $('.open-quickview-popup').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            preloader: true,
            midClick: true
        });
    }
    open_quickview_popup();

    function open_wishlist_popup() {
        $('.open-wishlist-popup').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            preloader: true,
            midClick: true
        });
    }
    open_wishlist_popup();

    /* ==========================================================================
     * 31. Product Details Sticky
     * ========================================================================== */

    if ($('#pro-details-sticky').length) {
        var top = $('#pro-details-sticky').offset().top - parseFloat($('#pro-details-sticky').css('marginTop').replace(/auto/, 0));
    }
    if ($('#products-detail-tabs').length) {
        var footTop = $('#products-detail-tabs').offset().top - parseFloat($('#products-detail-tabs').css('marginTop').replace(/auto/, 0));
    }
    var maxY = footTop - $('#pro-details-sticky').outerHeight();

    $(window).scroll(function (evt) {
        var y = $(this).scrollTop();
        if (y > top) {
            //Quand scroll, ajoute une classe ".fixed" et supprime le Css existant 
            if (y < maxY) {
                $('#pro-details-sticky').addClass('fixed').removeAttr('style');
            } else {

                //Quand la pro-details-sticky arrive au products-detail-tabs, supprime la classe "fixed" prÃ©cÃ¨dement ajoutÃ©
                $('#pro-details-sticky').removeClass('fixed').css({
                    position: 'absolute',
                    top: (maxY - top) + 'px'
                });
            }
        } else {
            $('#pro-details-sticky').removeClass('fixed');
        }
    });

    /* ==========================================================================
     * 32. Sticky Products 
     * ========================================================================== */
    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 800) {
            $('.sticky-view-product').addClass('product-sticky-show');
        }
        if ($(window).scrollTop() < 801) {
            $('.sticky-view-product').removeClass('product-sticky-show');
        }
    });

    /* ==========================================================================
     * 33. YMM Accordion Mobile Accordion
     * ========================================================================== */
    $('.ymm-title').on("click", function () {
        if ($(window).width() < 991) {
            $('.ymm-formFields').slideToggle();
        }
        $('.ymm-title').toggleClass('toggled-up');
        $('.ymm-formFields').toggleClass('active');
    });

    $(window).on("load resize", function (e) {
        if ($(window).width() > 992) {
            $(".ymm-formFields").show();
        } else {
            $(".ymm-formFields").hide();
        }
    });

})(jQuery);

