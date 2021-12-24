/*================================================
[  Table of contents  ]
================================================

1. Variables
2. Mobile Menu
3. Mega Menu
4. One Page Navigation
5. Toogle Search
6. Current Year Copyright area
7. Background Image
8. wow js init
9. Tooltip
10. Nice Select
11. Default active and hover item active
12. Product Details Page
13. Isotope Gallery Active  ( Gallery / Portfolio )
14. LightCase jQuery Active
15. Slider One Active 
16. Product Slider One
17. Tab Product Slider One
18. Blog Slider One
19. Testimonial Slider - 1
20. Testimonial Slider - 2
21. Testimonial Slider - 3
22. Category Slider
23. Image Slide  - 1 (Screenshot) 
24. Image Slide - 2
25. Image Slide - 3
26. Image Slide - 4 
27. Brand Logo
28. Blog Gallery (Blog Page )
29. Countdown
30. Counter Up
31. Instagram Feed
32. Price Slider
33. Quantity plus minus
34. scrollUp active
35. Parallax active
36. Header menu sticky



======================================
[ End table content ]
======================================*/

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    /* --------------------------------------------------------
            1. Variables
        --------------------------------------------------------- */
    var $window = $(window),
      $body = $("body");

    /* --------------------------------------------------------
            2. Mobile Menu
        --------------------------------------------------------- */
    /* ---------------------------------
            Utilize Function 
        ----------------------------------- */
    (function () {
      var $ltn__utilizeToggle = $(".ltn__utilize-toggle"),
        $ltn__utilize = $(".ltn__utilize"),
        $ltn__utilizeOverlay = $(".ltn__utilize-overlay"),
        $mobileMenuToggle = $(".mobile-menu-toggle");
      $ltn__utilizeToggle.on("click", function (e) {
        e.preventDefault();
        var $this = $(this),
          $target = $this.attr("href");
        $body.addClass("ltn__utilize-open");
        $($target).addClass("ltn__utilize-open");
        $ltn__utilizeOverlay.fadeIn();
        if ($this.parent().hasClass("mobile-menu-toggle")) {
          $this.addClass("close");
        }
      });
      $(".ltn__utilize-close, .ltn__utilize-overlay").on("click", function (e) {
        e.preventDefault();
        $body.removeClass("ltn__utilize-open");
        $ltn__utilize.removeClass("ltn__utilize-open");
        $ltn__utilizeOverlay.fadeOut();
        $mobileMenuToggle.find("a").removeClass("close");
      });
    })();

    /* ------------------------------------
            Utilize Menu
        ----------------------------------- */
    function mobileltn__utilizeMenu() {
      var $ltn__utilizeNav = $(".ltn__utilize-menu, .overlay-menu"),
        $ltn__utilizeNavSubMenu = $ltn__utilizeNav.find(".sub-menu");

      /*Add Toggle Button With Off Canvas Sub Menu*/
      $ltn__utilizeNavSubMenu
        .parent()
        .prepend('<span class="menu-expand"></span>');

      /*Category Sub Menu Toggle*/
      $ltn__utilizeNav.on("click", "li a, .menu-expand", function (e) {
        var $this = $(this);
        if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
          e.preventDefault();
          if ($this.siblings("ul:visible").length) {
            $this.parent("li").removeClass("active");
            $this.siblings("ul").slideUp();
            $this.parent("li").find("li").removeClass("active");
            $this.parent("li").find("ul:visible").slideUp();
          } else {
            $this.parent("li").addClass("active");
            $this
              .closest("li")
              .siblings("li")
              .removeClass("active")
              .find("li")
              .removeClass("active");
            $this.closest("li").siblings("li").find("ul:visible").slideUp();
            $this.siblings("ul").slideDown();
          }
        }
      });
    }
    mobileltn__utilizeMenu();

    /* --------------------------------------------------------
            3. Mega Menu
        --------------------------------------------------------- */
    $(".mega-menu").each(function () {
      if ($(this).children("li").length) {
        var ulChildren = $(this).children("li").length;
        $(this).addClass("column-" + ulChildren);
      }
    });

    /* Remove Attribute( href ) from sub-menu title in mega-menu */
    /*
        $('.mega-menu > li > a').removeAttr('href');
        */

    /* Mega Munu  */
    /* $(".mega-menu").parent().css({"position": "inherit"}); */
    $(".mega-menu").parent().addClass("mega-menu-parent");

    /* Add space for Elementor Menu Anchor link */
    $(window).on("elementor/frontend/init", function () {
      elementorFrontend.hooks.addFilter(
        "frontend/handlers/menu_anchor/scroll_top_distance",
        function (scrollTop) {
          return scrollTop - 75;
        }
      );
    });

    /* --------------------------------------------------------
            3-2. Category Menu
        --------------------------------------------------------- */

    $(".ltn__category-menu-title").on("click", function () {
      $(".ltn__category-menu-toggle").slideToggle(500);
    });

    /* Category Menu More Item show */
    $(".ltn__category-menu-more-item-parent").on("click", function () {
      $(".ltn__category-menu-more-item-child").slideToggle();
      $(this).toggleClass("rx-change");
    });

    /* Category Submenu Column Count */
    $(".ltn__category-submenu").each(function () {
      if ($(this).children("li").length) {
        var ulChildren = $(this).children("li").length;
        $(this).addClass("ltn__category-column-no-" + ulChildren);
      }
    });

    /* Category Menu Responsive */
    function ltn__CategoryMenuToggle() {
      $(".ltn__category-menu-toggle .ltn__category-menu-drop > a").on(
        "click",
        function () {
          if ($(window).width() < 991) {
            $(this).removeAttr("href");
            var element = $(this).parent("li");
            if (element.hasClass("open")) {
              element.removeClass("open");
              element.find("li").removeClass("open");
              element.find("ul").slideUp();
            } else {
              element.addClass("open");
              element.children("ul").slideDown();
              element.siblings("li").children("ul").slideUp();
              element.siblings("li").removeClass("open");
              element.siblings("li").find("li").removeClass("open");
              element.siblings("li").find("ul").slideUp();
            }
          }
        }
      );
      $(".ltn__category-menu-toggle .ltn__category-menu-drop > a").append(
        '<span class="expand"></span>'
      );
    }
    ltn__CategoryMenuToggle();

    /* ---------------------------------------------------------
            4. One Page Navigation ( jQuery Easing Plugin )
        --------------------------------------------------------- */
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
      $("a.page-scroll").bind("click", function (event) {
        var $anchor = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top,
            },
            1500,
            "easeInOutExpo"
          );
        event.preventDefault();
      });
    });

    /* --------------------------------------------------------
            5. Toogle Search
        -------------------------------------------------------- */
    // Handle click on toggle search button
    $(".header-search-1").on("click", function () {
      $(".header-search-1, .header-search-1-form").toggleClass("search-open");
      return false;
    });

    /* ---------------------------------------------------------
            6. Current Year Copyright area
        --------------------------------------------------------- */
    $(".current-year").text(new Date().getFullYear());

    /* ---------------------------------------------------------
            7. Background Image
        --------------------------------------------------------- */
    var $backgroundImage = $(".bg-image, .bg-image-top");
    $backgroundImage.each(function () {
      var $this = $(this),
        $bgImage = $this.data("bg");
      $this.css("background-image", "url(" + $bgImage + ")");
    });

    /* ---------------------------------------------------------
            8. wow js init
        --------------------------------------------------------- */
    new WOW().init();

    /* ---------------------------------------------------------
            9. Tooltip
        --------------------------------------------------------- */
    $('[data-toggle="tooltip"]').tooltip();

    /* --------------------------------------------------------
            10. Nice Select
        --------------------------------------------------------- */
    $("select").niceSelect();

    /* --------------------------------------------------------
            11. Default active and hover item active
        --------------------------------------------------------- */
    var ltn__active_item = $(
      ".ltn__feature-item-6, .ltn__our-journey-wrap ul li, .ltn__pricing-plan-item"
    );
    ltn__active_item.mouseover(function () {
      ltn__active_item.removeClass("active");
      $(this).addClass("active");
    });

    /* --------------------------------------------------------
            12. Product Details Page
        --------------------------------------------------------- */
    $(".ltn__shop-details-large-img").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".ltn__shop-details-small-img",
    });
    $(".ltn__shop-details-small-img").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".ltn__shop-details-large-img",
      dots: false,
      arrows: true,
      focusOnSelect: true,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            13. Isotope Gallery Active  ( Gallery / Portfolio )
        -------------------------------------------------------- */
    var $ltnGalleryActive = $(".ltn__gallery-active"),
      $ltnGalleryFilterMenu = $(".ltn__gallery-filter-menu");
    /*Filter*/
    $ltnGalleryFilterMenu.on("click", "button, a", function () {
      var $this = $(this),
        $filterValue = $this.attr("data-filter");
      $ltnGalleryFilterMenu.find("button, a").removeClass("active");
      $this.addClass("active");
      $ltnGalleryActive.isotope({ filter: $filterValue });
    });
    /*Grid*/
    $ltnGalleryActive.each(function () {
      var $this = $(this),
        $galleryFilterItem = ".ltn__gallery-item";
      $this.imagesLoaded(function () {
        $this.isotope({
          itemSelector: $galleryFilterItem,
          percentPosition: true,
          masonry: {
            columnWidth: ".ltn__gallery-sizer",
          },
        });
      });
    });

    /* --------------------------------------------------------
            14. LightCase jQuery Active
        --------------------------------------------------------- */
    $("a[data-rel^=lightcase]").lightcase({
      transition:
        "elastic" /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */,
      swipe: true,
      maxWidth: 1170,
      maxHeight: 600,
    });

    /* --------------------------------------------------------
            15. Slider One Active 
        --------------------------------------------------------- */
    $(".ltn__slide-one-active")
      .slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        fade: true,
        cssEase: "linear",
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
          '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
        nextArrow:
          '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              dots: true,
            },
          },
        ],
      })
      .on("afterChange", function () {
        new WOW().init();
      });
    /* --------------------------------------------------------
            15-2. Slider Active 2
        --------------------------------------------------------- */
    $(".ltn__slide-active-2")
      .slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: "linear",
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
          '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
        nextArrow:
          '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              dots: true,
            },
          },
        ],
      })
      .on("afterChange", function () {
        new WOW().init();
      });

    /*----------------------
            Slider 11 active
        -----------------------*/
    $(".ltn__slider-11-active")
      .on(
        "init reInit afterChange",
        function (event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;
          $(".ltn__slider-11-pagination-count .count").text("0" + i);
          $(".ltn__slider-11-pagination-count .total").text(
            "0" + slick.slideCount
          );

          $(".ltn__slider-11-slide-item-count .count").text("0" + i);
          $(".ltn__slider-11-slide-item-count .total").text(
            "/0" + slick.slideCount
          );
          new WOW().init();
        }
      )
      .slick({
        dots: false /* slider left or right side pagination count with line */,
        arrows: false /* slider arrow  */,
        appendDots: ".ltn__slider-11-pagination-count",
        infinite: true,
        autoplay: false,
        autoplaySpeed: 10000,
        speed: 500,
        asNavFor: ".ltn__slider-11-img-slide-arrow-active",
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
          '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
        nextArrow:
          '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
            },
          },
          {
            breakpoint: 575,
            settings: {
              arrows: false,
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

    $(".ltn__slider-11-img-slide-arrow-active").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2,
      centerMode: false,
      centerPadding: "0px",
      asNavFor: ".ltn__slider-11-active",
      dots: false /* image slide dots */,
      arrows: false /* image slide arrow */,
      centerMode: true,
      focusOnSelect: true,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            dots: false,
          },
        },
        {
          breakpoint: 575,
          settings: {
            arrows: true,
            dots: false,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            16-1. Product Slider One
        --------------------------------------------------------- */
    $(".ltn__product-slider-one-active").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            16-1. Product Slider One
        --------------------------------------------------------- */
    $(".ltn__product-slider-item-three-active").slick({
      arrows: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            16-2. Product Slider Item Four
        --------------------------------------------------------- */
    $(".ltn__product-slider-item-four-active").slick({
      arrows: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            16-2. Product Slider Item Four
        --------------------------------------------------------- */
    $(".ltn__product-slider-item-four-active-full-width").slick({
      arrows: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            16-3. Related Product Slider One
        --------------------------------------------------------- */
    $(".ltn__related-product-slider-one-active").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            ## Related Product Slider One
        --------------------------------------------------------- */
    $(".ltn__related-product-slider-two-active").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            ## Related Product Slider One
        --------------------------------------------------------- */
    $(".ltn__popular-product-widget-active").slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    });

    /* --------------------------------------------------------
            17. Tab Product Slider One
        --------------------------------------------------------- */
    $(".ltn__tab-product-slider-one-active").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
    /* --------------------------------------------------------
            17. Small Product Slider One
        --------------------------------------------------------- */
    $(".ltn__small-product-slider-active").slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            18. Blog Slider One
        --------------------------------------------------------- */
    $(".ltn__blog-slider-one-active").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            19. Testimonial Slider - 1
        --------------------------------------------------------- */
    $(".ltn__testimonial-slider-active").slick({
      arrows: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            20. Testimonial Slider - 2
        --------------------------------------------------------- */
    $(".ltn__testimonial-slider-2-active").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            21. Testimonial Slider - 3
        --------------------------------------------------------- */
    $(".ltn__testimonial-slider-3-active").slick({
      arrows: true,
      centerMode: true,
      centerPadding: "80px",
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            21. Testimonial Slider - 5
        --------------------------------------------------------- */
    $(".ltn__testimonial-slider-5-active").slick({
      arrows: true,
      centerMode: false,
      centerPadding: "80px",
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            21. Testimonial Slider - 6
        --------------------------------------------------------- */
    $(".ltn__testimonial-slider-6-active").slick({
      arrows: true,
      dots: false,
      centerMode: false,
      centerPadding: "80px",
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            22. Category Slider
        --------------------------------------------------------- */
    $(".ltn__category-slider-active").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            23. Image Slide  - 1 (Screenshot) 
        --------------------------------------------------------- */
    $(".ltn__image-slider-1-active").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            24. Image Slide - 2
        --------------------------------------------------------- */
    $(".ltn__image-slider-2-active").slick({
      rtl: false,
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "80px",
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: "50px",
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "50px",
          },
        },
      ],
    });

    /* --------------------------------------------------------
            25. Image Slide - 3
        --------------------------------------------------------- */
    $(".ltn__image-slider-3-active").slick({
      rtl: false,
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            26. Image Slide - 4 
        --------------------------------------------------------- */
    $(".ltn__image-slider-4-active").slick({
      rtl: false,
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            ## Image Slide - 5
        --------------------------------------------------------- */
    $(".ltn__image-slider-5-active").slick({
      rtl: false,
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "450px",
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "250px",
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "200px",
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "150px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: "0px",
          },
        },
      ],
    });

    /* --------------------------------------------------------
            27. Brand Logo
        --------------------------------------------------------- */
    if ($(".ltn__brand-logo-active").length) {
      $(".ltn__brand-logo-active").slick({
        rtl: false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow:
          '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
        nextArrow:
          '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }

    /* --------------------------------------------------------
            # upcoming-project-slider-1
        --------------------------------------------------------- */
    $(".ltn__upcoming-project-slider-1-active").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            # ltn__search-by-place-slider-1-active
        --------------------------------------------------------- */
    $(".ltn__search-by-place-slider-1-active").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /* --------------------------------------------------------
            28. Blog Gallery (Blog Page )
        --------------------------------------------------------- */
    if ($(".ltn__blog-gallery-active").length) {
      $(".ltn__blog-gallery-active").slick({
        rtl: false,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
          '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
        nextArrow:
          '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      });
    }

    /* --------------------------------------------------------
            29. Countdown
        --------------------------------------------------------- */
    $("[data-countdown]").each(function () {
      var $this = $(this),
        finalDate = $(this).data("countdown");
      if (!$this.hasClass("countdown-full-format")) {
        $this.countdown(finalDate, function (event) {
          $this.html(
            event.strftime(
              '<div class="single"><h1>%D</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'
            )
          );
        });
      } else {
        $this.countdown(finalDate, function (event) {
          $this.html(
            event.strftime(
              '<div class="single"><h1>%Y</h1><p>Years</p></div> <div class="single"><h1>%m</h1><p>Months</p></div> <div class="single"><h1>%W</h1><p>Weeks</p></div> <div class="single"><h1>%d</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'
            )
          );
        });
      }
    });

    /* --------------------------------------------------------
            30. Counter Up
        --------------------------------------------------------- */
    // $('.ltn__counter').counterUp();

    $(".counter").counterUp({
      delay: 10,
      time: 2000,
    });
    $(".counter").addClass("animated fadeInDownBig");
    $("h3").addClass("animated fadeIn");

    /* --------------------------------------------------------
            31. Instagram Feed
        --------------------------------------------------------- */
    if ($(".ltn__instafeed").length) {
      $.instagramFeed({
        username: "envato",
        container: ".ltn__instafeed",
        display_profile: false,
        display_biography: false,
        display_gallery: true,
        styling: false,
        items: 12,
        image_size: "600" /* 320 */,
      });
      $(".ltn__instafeed").on("DOMNodeInserted", function (e) {
        if (e.target.className == "instagram_gallery") {
          $(".ltn__instafeed-slider-2 ." + e.target.className).slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:
              '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow:
              '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                },
              },
            ],
          });
          $(".ltn__instafeed-slider-1 ." + e.target.className).slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow:
              '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow:
              '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
              {
                breakpoint: 119,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                },
              },
            ],
          });
        }
      });
    }

    /* ---------------------------------------------------------
            32. Price Slider
        --------------------------------------------------------- */
    $(".slider-range").slider({
      range: true,
      min: 50,
      max: 5000,
      values: [50, 1500],
      slide: function (event, ui) {
        $(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $(".amount").val(
      "$" +
        $(".slider-range").slider("values", 0) +
        " - $" +
        $(".slider-range").slider("values", 1)
    );

    /* --------------------------------------------------------
            33. Quantity plus minus
        -------------------------------------------------------- */
    $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
    $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find("input").val(newVal);
    });

    /* --------------------------------------------------------
            34. scrollUp active
        -------------------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });

    /* --------------------------------------------------------
            35. Parallax active ( About Section  )
        -------------------------------------------------------- */
    /* 
        > 1 page e 2 ta call korle 1 ta kaj kore 
        */
    if ($(".ltn__parallax-effect-active").length) {
      var scene = $(".ltn__parallax-effect-active").get(0);
      var parallaxInstance = new Parallax(scene);
    }

    /* --------------------------------------------------------
            36. Testimonial Slider 4
        -------------------------------------------------------- */
    var ltn__testimonial_quote_slider = $(".ltn__testimonial-slider-4-active");
    ltn__testimonial_quote_slider.slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: true,
      fade: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow:
        '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 580,
          settings: {
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
      ],
    });

    /* have to write code for bind it with static images */
    ltn__testimonial_quote_slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var liIndex = nextSlide + 1;
        var slideImageliIndex =
          slick.slideCount == liIndex ? liIndex - 1 : liIndex;
        var cart = $(
          '.ltn__testimonial-slider-4 .slick-slide[data-slick-index="' +
            slideImageliIndex +
            '"]'
        ).find(".ltn__testimonial-image");
        var imgtodrag = $(
          ".ltn__testimonial-quote-menu li:nth-child(" + liIndex + ")"
        )
          .find("img")
          .eq(0);
        if (imgtodrag) {
          AnimateTestimonialImage(imgtodrag, cart);
        }
      }
    );

    /* have to write code for bind static image to slider accordion to slide index of images */
    $(document).on("click", ".ltn__testimonial-quote-menu li", function (e) {
      var el = $(this);
      var elIndex = el.prevAll().length;
      ltn__testimonial_quote_slider.slick("slickGoTo", elIndex);
      var cart = $(
        '.ltn__testimonial-slider-4 .slick-slide[data-slick-index="' +
          elIndex +
          '"]'
      ).find(".ltn__testimonial-image");
      var imgtodrag = el.find("img").eq(0);
      if (imgtodrag) {
        AnimateTestimonialImage(imgtodrag, cart);
      }
    });

    function AnimateTestimonialImage(imgtodrag, cart) {
      var imgclone = imgtodrag
        .clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left,
        })
        .css({
          opacity: "0.5",
          position: "absolute",
          height: "130px",
          width: "130px",
          "z-index": "100",
        })
        .addClass("quote-animated-image")
        .appendTo($("body"))
        .animate(
          {
            top: cart.offset().top + 10,
            left: cart.offset().left + 10,
            width: 130,
            height: 130,
          },
          300
        );

      imgclone.animate(
        {
          visibility: "hidden",
          opacity: "0",
        },
        function () {
          $(this).remove();
        }
      );
    }

    /* --------------------------------------------------------
            Newsletter Popup
        -------------------------------------------------------- */
    $("#ltn__newsletter_popup").modal("show");
  });

  /* --------------------------------------------------------
        36. Header menu sticky
    -------------------------------------------------------- */
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 445) {
      $(".ltn__header-sticky").removeClass("sticky-active");
    } else {
      $(".ltn__header-sticky").addClass("sticky-active");
    }
  });

  $(window).on("load", function () {
    /*-----------------
            preloader
        ------------------*/
    if ($("#preloader").length) {
      var preLoder = $("#preloader");
      preLoder.fadeOut(1000);
    }
  });
})(jQuery);

// ================================= NEW SCRIPTS =========================================

// Register Form Validation
if (document.querySelector(".register-page") !== null) {
  const registerPage = document.querySelector(".register-page");
  const registerPageSubmit = registerPage.querySelector("form.register-form");

  // Register Form Items Object
  let registerFormItems = {
    firstname: {
      field: registerPageSubmit.firstname,
      valid: false,
      errMsg: "First Name Is Required !",
    },
    lastname: {
      field: registerPageSubmit.lastname,
      valid: false,
      errMsg: "Last Name Is Required !",
    },
    email: {
      field: registerPageSubmit.email,
      valid: false,
      errMsg: "Email Is Required !",
    },
    phone: {
      field: registerPageSubmit.phone,
      valid: false,
      errMsg: "Phone Is Required !",
    },
    password: {
      field: registerPageSubmit.password,
      valid: false,
      errMsg: "Password Is Required !",
    },
    confirmpassword: {
      field: registerPageSubmit.confirmpassword,
      valid: false,
      errMsg: "Confirm Password Is Required !",
    },
    check1: {
      field: registerPageSubmit.check1,
      valid: false,
    },
    check2: {
      field: registerPageSubmit.check2,
      valid: false,
    },
  };

  // All Fields From Register Form
  const registerFormFiedls = [
    registerFormItems.firstname.field,
    registerFormItems.lastname.field,
    registerFormItems.email.field,
    registerFormItems.phone.field,
    registerFormItems.password.field,
    registerFormItems.confirmpassword.field,
    registerFormItems.check1.field,
    registerFormItems.check2.field,
  ];

  // Check Inputs By Event If valid set Input in registerFormItems = {field: {valid: true || false}}
  registerFormFiedls.forEach((input) => {
    if (
      input.type == "text" ||
      input.type == "email" ||
      input.type == "number" ||
      input.type == "password"
    ) {
      input.addEventListener("keyup", () => setError(input, registerFormItems));
      input.addEventListener("blur", () => setError(input, registerFormItems));
    }

    if (input.type == "checkbox") {
      input.addEventListener("change", () =>
        setError(input, registerFormItems)
      );
    }
  });

  registerPageSubmit.addEventListener("submit", (e) => {
    if (
      registerFormItems.firstname.valid &&
      registerFormItems.lastname.valid &&
      registerFormItems.email.valid &&
      registerFormItems.phone.valid &&
      registerFormItems.password.valid &&
      registerFormItems.confirmpassword.valid &&
      registerFormItems.check1.valid &&
      registerFormItems.check2.valid
    ) {
      // On Form Submit
      e.stopPropagation();
    } else {
      // Stop Form Submit
      e.preventDefault();

      // Set Errors If Exits
      registerFormFiedls.forEach((input) => setError(input, registerFormItems));
    }
  });
}

// Login Form Validation
if (document.querySelector(".login-page") !== null) {
  const loginPage = document.querySelector(".login-page");
  const loginPageSubmit = loginPage.querySelector("form.login-form");

  // Login Form Items Object
  let loginFormItems = {
    email: {
      field: loginPageSubmit.email,
      valid: false,
      errMsg: "Email Is Required !",
    },
    password: {
      field: loginPageSubmit.password,
      valid: false,
      errMsg: "Password Is Required !",
    },
  };

  // All Fields From Login Form
  const loginFormFiedls = [
    loginFormItems.email.field,
    loginFormItems.password.field,
  ];

  // Check Inputs By Event If valid set Input in loginFormItems = {field: {valid: true || false}}
  loginFormFiedls.forEach((input) => {
    if (input.type == "email" || input.type == "password") {
      input.addEventListener("keyup", () => setError(input, loginFormItems));
      input.addEventListener("blur", () => setError(input, loginFormItems));
    }
  });

  loginPageSubmit.addEventListener("submit", (e) => {
    if (loginFormItems.email.valid && loginFormItems.password.valid) {
      // On Form Submit
      e.stopPropagation();
    } else {
      // Stop Form Submit
      e.preventDefault();

      // Set Errors If Exits
      loginFormFiedls.forEach((input) => setError(input, loginFormItems));
    }
  });
}

// Dashboard Update Form Validation
if (document.querySelector(".update-account-data") !== null) {
  const updateAccountPage = document.querySelector(".update-account-data");
  const updateAccountPageSubmit = updateAccountPage.querySelector(
    "form.update-account-form"
  );

  // update Account Form Items Object
  let updateAccountFormItems = {
    firstname: {
      field: updateAccountPageSubmit.firstname,
      valid: false,
      errMsg: "First Name Is Required !",
    },
    lastname: {
      field: updateAccountPageSubmit.lastname,
      valid: false,
      errMsg: "Last Name Is Required !",
    },
    phone: {
      field: updateAccountPageSubmit.phone,
      valid: false,
      errMsg: "Phone Is Required !",
    },
    password: {
      field: updateAccountPageSubmit.password,
      valid: false,
      errMsg: "Password Is Required !",
    },
  };

  // All Fields From update Account Form
  const updateAccountFormFiedls = [
    updateAccountFormItems.firstname.field,
    updateAccountFormItems.lastname.field,
    updateAccountFormItems.phone.field,
    updateAccountFormItems.password.field,
  ];

  // Check Inputs By Event If valid set Input in updateAccountFormItems = {field: {valid: true || false}}
  updateAccountFormFiedls.forEach((input) => {
    if (
      input.type == "text" ||
      input.type == "email" ||
      input.type == "number" ||
      input.type == "password"
    ) {
      input.addEventListener("keyup", () =>
        setError(input, updateAccountFormItems)
      );
      input.addEventListener("blur", () =>
        setError(input, updateAccountFormItems)
      );
    }

    if (input.type == "checkbox") {
      input.addEventListener("change", () =>
        setError(input, updateAccountFormItems)
      );
    }
  });

  updateAccountPageSubmit.addEventListener("submit", (e) => {
    if (
      updateAccountFormItems.firstname.valid &&
      updateAccountFormItems.lastname.valid &&
      updateAccountFormItems.phone.valid &&
      updateAccountFormItems.password.valid
    ) {
      // On Form Submit
      e.stopPropagation();
    } else {
      // Stop Form Submit
      e.preventDefault();

      // Set Errors If Exits
      updateAccountFormFiedls.forEach((input) =>
        setError(input, updateAccountFormItems)
      );
    }
  });
}

// *********** Appointment Form Validation ***********
if (document.querySelector(".appointment-form") !== null) {
  const form = document.querySelector(".appointment-form");
  const formTabs = form.querySelectorAll(".ltn__tab-menu .nav a");

  // =========================================================================
  // =================== 1- Choice Consultant Tab Settings ===================
  // =========================================================================

  const choiceConsultantNext = form.querySelector(
    ".choiceConsultant-tab .btn-next"
  );
  const choiceConsultantPrev = form.querySelector(
    ".choiceConsultant-tab .btn-prev"
  );

  // Choice Consultant Items Object
  let choiceConsultantItems = {
    category: {
      field: "#category",
      type: "selectbox",
      valid: false,
      errMsg: "Category Is Required !",
    },
    day: {
      field: form.day,
      valid: false,
      errMsg: "Day Is Required !",
    },
    time: {
      field: form.time,
      valid: false,
      errMsg: "Time Is Required !",
    },
    date: {
      field: form.date,
      valid: false,
      errMsg: "Date Is Required !",
    },
    choiceConsultant: {
      field: form.choiceConsultant,
      valid: false,
      errMsg: "Consultant Is Required !",
    },
  };

  setSelectBoxError(
    form,
    choiceConsultantItems,
    choiceConsultantItems.category.field,
    ".category-errMsg"
  );

  // Check Select box value on change And Add Day HTML DOM
  $(`${choiceConsultantItems.category.field}`)
    .parent()
    .on("change", "select", function (e) {
      if (e.target.value !== "None") {
        // Add Day Content To Html
        $(".day-container").html(`

                <label class="fw-bold"> Choice the day </label>

                <div class="inputTypeChoice">
                  <input
                    type="radio"
                    name="day"
                    id="day-saturday"
                    value="Saturday"
                  />
                  <label for="day-saturday">Saturday</label>

                  <input
                    type="radio"
                    id="day-sunday"
                    name="day"
                    value="Sunday"
                  />
                  <label for="day-sunday">Sunday</label>

                  <input
                    type="radio"
                    id="day-monday"
                    name="day"
                    value="Monday"
                  />
                  <label for="day-monday">Monday</label>

                  <input
                    type="radio"
                    id="day-tuesday"
                    name="day"
                    value="Tuesday"
                  />
                  <label for="day-tuesday">Tuesday</label>

                  <input
                    type="radio"
                    id="day-wednesday"
                    name="day"
                    value="Wednesday"
                  />
                  <label for="day-wednesday">Wednesday</label>

                  <input
                    type="radio"
                    id="day-thursday"
                    name="day"
                    value="Thursday"
                  />
                  <label for="day-thursday">Thursday</label>

                  <input
                    type="radio"
                    id="day-friday"
                    name="day"
                    value="Friday"
                  />
                  <label for="day-friday">Friday</label>
                </div>
                <small class="day-errMsg errMsg text-danger"></small>
        
        `);

        // Set Day In Items After Add To Html Dom
        choiceConsultantItems.day.field = form.day;

        // Check Day Validation On Change And Add Day Time To HTML DOM
        choiceConsultantItems.day.field.forEach((input) => {
          input.addEventListener("change", (e) => {
            if (
              e.target.value !== "" &&
              e.target.value !== null &&
              e.target.value !== undefined
            ) {
              // Set Valid true
              choiceConsultantItems.day.valid = true;

              // Remove Error Message If There Value
              document.querySelector(".day-errMsg").innerHTML = "";

              // Add Time Content To Html
              $(".time-container").html(`


                    <label class="fw-bold"> Choice the time </label>

                    <div class="inputTypeChoice">
                      <input
                        type="radio"
                        name="time"
                        id="time-one"
                        value="01:00PM - 02:00PM"
                      />
                      <label for="time-one">01:00PM - 02:00PM</label>

                      <input
                        type="radio"
                        name="time"
                        id="time-two"
                        value="02:00PM - 03:00PM"
                      />
                      <label for="time-two">02:00PM - 03:00PM</label>

                      <input
                        type="radio"
                        name="time"
                        id="time-three"
                        value="03:00PM - 04:00PM"
                      />
                      <label for="time-three">03:00PM - 04:00PM</label>

                      <input
                        type="radio"
                        name="time"
                        id="time-four"
                        value="04:00PM - 05:00PM"
                      />
                      <label for="time-four">04:00PM - 05:00PM</label>

                      <input
                        type="radio"
                        name="time"
                        id="time-five"
                        value="04:00PM - 05:00PM"
                      />
                      <label for="time-five">05:00PM - 06:00PM</label>
                    </div>
                    <small class="time-errMsg errMsg text-danger"></small>
              
              
              `);

              // Set Time In Items After Add To Html Dom
              choiceConsultantItems.time.field = form.time;

              // Check Time Validation On Change And Add Date To HTML DOM
              choiceConsultantItems.time.field.forEach((input) => {
                input.addEventListener("change", (e) => {
                  if (
                    e.target.value !== "" &&
                    e.target.value !== null &&
                    e.target.value !== undefined
                  ) {
                    // Set Valid true
                    choiceConsultantItems.time.valid = true;

                    // Remove Error Message If There Value
                    document.querySelector(".time-errMsg").innerHTML = "";

                    // Add Time Content To Html
                    $(".date-container").html(`


                        <label for="date" class="fw-bold">
                          Choice Date
                        </label>
                        <div
                          class="
                            input-item input-item-textarea
                            ltn__custom-icon
                            mb-4
                          "
                        >
                          <input
                            class="mt-0"
                            type="date"
                            name="date"
                            id="date"
                          />
                          <small
                            class="date-errMsg errMsg text-danger"
                          ></small>
                        </div>

                    `);

                    // Set Date In Items After Add To Html Dom
                    choiceConsultantItems.date.field = form.date;

                    // Check Date Validation On Change And Add Consultant Cards To HTML DOM
                    choiceConsultantItems.date.field.addEventListener(
                      "change",
                      (e) => {
                        if (
                          e.target.value !== "" &&
                          e.target.value !== null &&
                          e.target.value !== undefined
                        ) {
                          choiceConsultantItems.date.valid = true;

                          // Remove Error Message If There Value
                          document.querySelector(".date-errMsg").innerHTML = "";

                          // Set Field Color Error
                          document.querySelector("#date").style.borderColor =
                            "#9d1bc7";

                          // Add Consultant Content To Html
                          $(".consultant-container").html(`
                          
                                  <label for="categoryDetails" class="fw-bold">
                                    Choice Consultant
                                  </label>
                  
                                  <div class="radio-cards-select">
                                    <div class="row gap-y-20">
                                      <div class="col-xl-4 col-lg-6">
                                        <div class="radio-item">
                                          <input
                                            value="mohammedAli"
                                            class="d-none"
                                            type="radio"
                                            name="choiceConsultant"
                                            id="choiceConsultant-1"
                                          />
                                          <label for="choiceConsultant-1">
                                            <div class="card card_v2 text-center">
                                              <img
                                                src="img/person.jpg"
                                                alt=""
                                                class="card-img rounded"
                                              />
                            
                                              <h3 class="card-title mt-4">
                                                Mohammed Ali
                                              </h3>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                      <div class="col-xl-4 col-lg-6">
                                        <div class="radio-item">
                                          <input
                                            value="mohammedAli"
                                            class="d-none"
                                            type="radio"
                                            name="choiceConsultant"
                                            id="choiceConsultant-2"
                                          />
                                          <label for="choiceConsultant-2">
                                            <div class="card card_v2 text-center">
                                              <img
                                                src="img/person.jpg"
                                                alt=""
                                                class="card-img rounded"
                                              />
                            
                                              <h3 class="card-title mt-4">
                                                Mohammed Ali
                                              </h3>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                      <div class="col-xl-4 col-lg-6">
                                        <div class="radio-item">
                                          <input
                                            value="mohammedAli"
                                            class="d-none"
                                            type="radio"
                                            name="choiceConsultant"
                                            id="choiceConsultant-3"
                                          />
                                          <label for="choiceConsultant-3">
                                            <div class="card card_v2 text-center">
                                              <img
                                                src="img/person.jpg"
                                                alt=""
                                                class="card-img rounded"
                                              />
                            
                                              <h3 class="card-title mt-4">
                                                Mohammed Ali
                                              </h3>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                      <div class="col-xl-4 col-lg-6">
                                        <div class="radio-item">
                                          <input
                                            value="mohammedAli"
                                            class="d-none"
                                            type="radio"
                                            name="choiceConsultant"
                                            id="choiceConsultant-4"
                                          />
                                          <label for="choiceConsultant-4">
                                            <div class="card card_v2 text-center">
                                              <img
                                                src="img/person.jpg"
                                                alt=""
                                                class="card-img rounded"
                                              />
                            
                                              <h3 class="card-title mt-4">
                                                Mohammed Ali
                                              </h3>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                      <div class="col-xl-4 col-lg-6">
                                        <div class="radio-item">
                                          <input
                                            value="mohammedAli"
                                            class="d-none"
                                            type="radio"
                                            name="choiceConsultant"
                                            id="choiceConsultant-5"
                                          />
                                          <label for="choiceConsultant-5">
                                            <div class="card card_v2 text-center">
                                              <img
                                                src="img/person.jpg"
                                                alt=""
                                                class="card-img rounded"
                                              />
                            
                                              <h3 class="card-title mt-4">
                                                Mohammed Ali
                                              </h3>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                      <div class="col-xl-4 col-lg-6">
                                        <div class="radio-item">
                                          <input
                                            value="mohammedAli"
                                            class="d-none"
                                            type="radio"
                                            name="choiceConsultant"
                                            id="choiceConsultant-6"
                                          />
                                          <label for="choiceConsultant-6">
                                            <div class="card card_v2 text-center">
                                              <img
                                                src="img/person.jpg"
                                                alt=""
                                                class="card-img rounded"
                                              />
                            
                                              <h3 class="card-title mt-4">
                                                Mohammed Ali
                                              </h3>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                      <div class="col-xl-4 col-lg-6">
                                        <div class="radio-item">
                                          <input
                                            value="mohammedAli"
                                            class="d-none"
                                            type="radio"
                                            name="choiceConsultant"
                                            id="choiceConsultant-7"
                                          />
                                          <label for="choiceConsultant-7">
                                            <div class="card card_v2 text-center">
                                              <img
                                                src="img/person.jpg"
                                                alt=""
                                                class="card-img rounded"
                                              />
                            
                                              <h3 class="card-title mt-4">
                                                Mohammed Ali
                                              </h3>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                      <div class="col-xl-4 col-lg-6">
                                        <div class="radio-item">
                                          <input
                                            value="mohammedAli"
                                            class="d-none"
                                            type="radio"
                                            name="choiceConsultant"
                                            id="choiceConsultant-8"
                                          />
                                          <label for="choiceConsultant-8">
                                            <div class="card card_v2 text-center">
                                              <img
                                                src="img/person.jpg"
                                                alt=""
                                                class="card-img rounded"
                                              />
                            
                                              <h3 class="card-title mt-4">
                                                Mohammed Ali
                                              </h3>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                      <div class="col-xl-4 col-lg-6">
                                        <div class="radio-item">
                                          <input
                                            value="mohammedAli"
                                            class="d-none"
                                            type="radio"
                                            name="choiceConsultant"
                                            id="choiceConsultant-9"
                                          />
                                          <label for="choiceConsultant-9">
                                            <div class="card card_v2 text-center">
                                              <img
                                                src="img/person.jpg"
                                                alt=""
                                                class="card-img rounded"
                                              />
                            
                                              <h3 class="card-title mt-4">
                                                Mohammed Ali
                                              </h3>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                          `);

                          // Set Choice Consultant In Items After Add To Html Dom
                          choiceConsultantItems.choiceConsultant.field =
                            form.choiceConsultant;

                          // Check Consultant Validation On Change
                          choiceConsultantItems.choiceConsultant.field.forEach(
                            (input) => {
                              input.addEventListener("change", (e) => {
                                if (
                                  e.target.value !== "" &&
                                  e.target.value !== null &&
                                  e.target.value !== undefined
                                ) {
                                  // Set Valid true
                                  choiceConsultantItems.choiceConsultant.valid = true;

                                  choiceConsultantItems.choiceConsultant.field.forEach(
                                    (el) => {
                                      // Set Color Success
                                      el.nextElementSibling.querySelector(
                                        ".card"
                                      ).style.borderColor = "#9d1bc7";
                                    }
                                  );
                                }

                                console.log(choiceConsultantItems);
                              });
                            }
                          );
                        }
                      }
                    );
                  }
                });
              });
            }
          });
        });
      } else {
        // Empty Day Container And set valid false
        $(".day-container").html("");
        choiceConsultantItems.day.valid = false;

        // Empty Time Container And set valid false
        $(".time-container").html("");
        choiceConsultantItems.time.valid = false;

        // Empty Date Container And set valid false
        $(".date-container").html("");
        choiceConsultantItems.date.valid = false;

        // Empty Consultant Container And set valid false
        $(".consultant-container").html("");
        choiceConsultantItems.choiceConsultant.valid = false;
      }
    });

  choiceConsultantNext.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      choiceConsultantItems.category.valid &&
      choiceConsultantItems.day.valid &&
      choiceConsultantItems.time.valid &&
      choiceConsultantItems.date.valid &&
      choiceConsultantItems.choiceConsultant.valid
    ) {
      formTabs.forEach((tab) => {
        if (tab.getAttribute("href") == "#liton_tab_3_2") {
          tab.classList.remove("disabled");
          tab.click();
        } else {
          tab.classList.add("disabled");
        }
      });
    } else {
      // Set Errors If Exits

      checkSeletBoxOnSubmit(
        form,
        choiceConsultantItems,
        choiceConsultantItems.category.field,
        ".category-errMsg"
      );

      // Validation For Items Render By Javascript

      if (choiceConsultantItems.day.field !== undefined) {
        if (!choiceConsultantItems.day.valid) {
          // Set Error Message From Items Object
          document.querySelector(".day-errMsg").innerHTML =
            choiceConsultantItems.day.errMsg;
        }
      }

      if (choiceConsultantItems.time.field !== undefined) {
        if (!choiceConsultantItems.time.valid) {
          // Set Error Message From Items Object
          document.querySelector(".time-errMsg").innerHTML =
            choiceConsultantItems.time.errMsg;
        }
      }

      if (choiceConsultantItems.date.field !== undefined) {
        if (choiceConsultantItems.date.field.value.trim() == "") {
          // Set Field Color Error
          document.querySelector("#date").style.borderColor = "#bc3928";

          // Set Error Message From Items Object
          document.querySelector(".date-errMsg").innerHTML =
            choiceConsultantItems.date.errMsg;
        }
      }

      if (choiceConsultantItems.choiceConsultant.field !== undefined) {
        if (!choiceConsultantItems.choiceConsultant.valid) {
          choiceConsultantItems.choiceConsultant.field.forEach((input) => {
            input.nextElementSibling.querySelector(".card").style.borderColor =
              "#bc3928";
          });
        }
      }
    }
  });

  // =========================================================================
  // ===================== 2- Main Informations Settings =====================
  // =========================================================================
  const mainInfoNext = form.querySelector(".mainInformations-tab .btn-next");
  const mainInfoPrev = form.querySelector(".mainInformations-tab .btn-prev");

  // Main Informations Items Object
  let mainInformationsItems = {
    firstname: {
      field: form.querySelector("#firstname"),
      valid: false,
      errMsg: "First Name Is Required !",
    },
    lastname: {
      field: form.querySelector("#lastname"),
      valid: false,
      errMsg: "Last Name Is Required !",
    },
    gender: {
      field: "#gender",
      type: "selectbox",
      valid: false,
      errMsg: "Gender Is Required !",
    },
    age: {
      field: "#age",
      type: "selectbox",
      valid: false,
      errMsg: "Age Is Required !",
    },
    relationshipStatus: {
      field: "#relationshipStatus",
      type: "selectbox",
      valid: false,
      errMsg: "Relationship Status Is Required !",
    },
    email: {
      field: form.querySelector("#email"),
      valid: false,
      errMsg: "Email Is Required !",
    },
    phone: {
      field: form.querySelector("#phone"),
      valid: false,
      errMsg: "Phone Is Required !",
    },
  };

  // All Fields From Main Informations Form
  const mainInformationsFiedls = [
    mainInformationsItems.firstname.field,
    mainInformationsItems.lastname.field,
    mainInformationsItems.gender.field,
    mainInformationsItems.age.field,
    mainInformationsItems.relationshipStatus.field,
    mainInformationsItems.email.field,
    mainInformationsItems.phone.field,
  ];

  // Check Inputs By Event If valid set Input in mainInformationsItems = {field: {valid: true || false}}
  mainInformationsFiedls.forEach((input) => {
    if (
      input.type == "email" ||
      input.type == "text" ||
      input.type == "number"
    ) {
      input.addEventListener("keyup", () =>
        setError(input, mainInformationsItems)
      );
      input.addEventListener("blur", () =>
        setError(input, mainInformationsItems)
      );
    }
  });

  // Check Gender Select box value on submit & Change
  setSelectBoxError(
    form,
    mainInformationsItems,
    mainInformationsItems.gender.field,
    ".gender-errMsg"
  );

  // Check Age Select box value on submit & Change
  setSelectBoxError(
    form,
    mainInformationsItems,
    mainInformationsItems.age.field,
    ".age-errMsg"
  );

  // Check Relationship Status Select box value on submit & Change
  setSelectBoxError(
    form,
    mainInformationsItems,
    mainInformationsItems.relationshipStatus.field,
    ".relationshipStatus-errMsg"
  );

  // Check if All Inputs And SelectBoxs Valid Go To Next
  mainInfoNext.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      mainInformationsItems.firstname.valid &&
      mainInformationsItems.lastname.valid &&
      mainInformationsItems.gender.valid &&
      mainInformationsItems.age.valid &&
      mainInformationsItems.relationshipStatus.valid &&
      mainInformationsItems.email.valid &&
      mainInformationsItems.phone.valid
    ) {
      formTabs.forEach((tab) => {
        if (tab.getAttribute("href") == "#liton_tab_3_3") {
          tab.classList.remove("disabled");
          tab.click();
        } else {
          tab.classList.add("disabled");
        }
      });
    } else {
      // Set Errors For inputs Only If Exits
      mainInformationsFiedls.forEach((input) =>
        setError(input, mainInformationsItems)
      );

      checkSeletBoxOnSubmit(
        form,
        mainInformationsItems,
        mainInformationsItems.gender.field,
        ".gender-errMsg"
      );

      checkSeletBoxOnSubmit(
        form,
        mainInformationsItems,
        mainInformationsItems.age.field,
        ".age-errMsg"
      );

      checkSeletBoxOnSubmit(
        form,
        mainInformationsItems,
        mainInformationsItems.relationshipStatus.field,
        ".relationshipStatus-errMsg"
      );
    }
  });

  mainInfoPrev.addEventListener("click", (e) => {
    e.preventDefault();
    formTabs.forEach((tab) => {
      if (tab.getAttribute("href") == "#liton_tab_3_1") {
        tab.classList.remove("disabled");
        tab.click();
      } else {
        tab.classList.add("disabled");
      }
    });
  });

  // =========================================================================
  // ===================== 3- Some Questions Settings =========================
  // =========================================================================

  const formSubmit = form.querySelector(".someQuestions-tab .btn-submit");
  const someQuestionsPrev = form.querySelector(".someQuestions-tab .btn-prev");

  // Radios
  const doYouHaveChildren = form.doYouHaveChildren;
  const hasSomeoneIntervened = form.hasSomeoneIntervened;
  const isProblemConstant = form.isProblemConstant;
  const pastDivorce = form.pastDivorce;

  // Some Questions Items Object
  let someQuestionsItems = {
    natureIssue: {
      field: "#natureIssue",
      type: "selectbox",
      valid: false,
      errMsg: "Nature Issue Is Required !",
    },
    natureIssueDetails: {
      field: form.natureIssueDetails,
      valid: true,
      errMsg: "Nature Issue Details Is Required !",
    },
    isWantSolveProblem: {
      field: form.isWantSolveProblem,
      valid: false,
      errMsg: "Is Want Solve Problem Is Required !",
    },
    meetingSolveProblem: {
      field: form.meetingSolveProblem,
      valid: false,
      errMsg: "Meeting Solve Problem Is Required !",
    },
    pastDivorce: {
      field: form.pastDivorce,
      valid: false,
      errMsg: "Past Divorce Is Required !",
    },
    pastDivorceDetails: {
      field: "#pastDivorceDetails",
      type: "selectbox",
      valid: true,
      errMsg: "Past Divorce Details Is Required !",
    },
    financialSituation: {
      field: "#financialSituation",
      type: "selectbox",
      valid: false,
      errMsg: "Financial Situation Is Required !",
    },
  };

  let someQuestionsFields = [someQuestionsItems.natureIssueDetails.field];

  // Check Inputs By Event If valid set Input in someQuestionsItems = {field: {valid: true || false}}
  someQuestionsFields.forEach((input) => {
    if (
      input.type == "email" ||
      input.type == "text" ||
      input.type == "number" ||
      input.type == "textarea"
    ) {
      input.addEventListener("keyup", () =>
        setError(input, someQuestionsItems)
      );
      input.addEventListener("blur", () => setError(input, someQuestionsItems));
    }
  });

  // Radio Buttons Validation

  checkRadioButtonValidate(
    someQuestionsItems,
    someQuestionsItems.isWantSolveProblem.field
  );

  checkRadioButtonValidate(
    someQuestionsItems,
    someQuestionsItems.meetingSolveProblem.field
  );

  checkRadioButtonValidate(
    someQuestionsItems,
    someQuestionsItems.pastDivorce.field
  );

  // Select Boxs Validation

  setSelectBoxError(
    form,
    someQuestionsItems,
    someQuestionsItems.natureIssue.field,
    ".natureIssue-errMsg"
  );

  setSelectBoxError(
    form,
    someQuestionsItems,
    someQuestionsItems.financialSituation.field,
    ".financialSituation-errMsg"
  );

  showContentWithSelectBox(someQuestionsItems, "#natureIssue", "Other", true);
  showContentWithSelectBox(
    someQuestionsItems,
    "#causeOfProblem",
    "Other",
    false
  );

  showContentWithRadio(form, someQuestionsItems, doYouHaveChildren, false);
  showContentWithRadio(form, someQuestionsItems, hasSomeoneIntervened, false);
  showContentWithRadio(form, someQuestionsItems, isProblemConstant, false);
  showContentWithRadio(form, someQuestionsItems, pastDivorce, true);

  formSubmit.addEventListener("click", (e) => {
    if (
      someQuestionsItems.natureIssue.valid &&
      someQuestionsItems.natureIssueDetails.valid &&
      someQuestionsItems.isWantSolveProblem.valid &&
      someQuestionsItems.meetingSolveProblem.valid &&
      someQuestionsItems.pastDivorce.valid &&
      someQuestionsItems.pastDivorceDetails.valid &&
      someQuestionsItems.financialSituation.valid
    ) {
      // On Form Submit
      e.stopPropagation();
    } else {
      // Stop Form Submit
      e.preventDefault();

      // Show Radio Buttons Error Message

      showRadioMessageOnSubmit(
        someQuestionsItems,
        someQuestionsItems.isWantSolveProblem.field
      );

      showRadioMessageOnSubmit(
        someQuestionsItems,
        someQuestionsItems.meetingSolveProblem.field
      );

      showRadioMessageOnSubmit(
        someQuestionsItems,
        someQuestionsItems.pastDivorce.field
      );

      // Show All Inputs And TextArea Message

      someQuestionsFields.forEach((input) =>
        setError(input, someQuestionsItems)
      );

      // Show All Select Boxs Message

      checkSeletBoxOnSubmit(
        form,
        someQuestionsItems,
        someQuestionsItems.natureIssue.field,
        ".natureIssue-errMsg"
      );

      checkSeletBoxOnSubmit(
        form,
        someQuestionsItems,
        someQuestionsItems.financialSituation.field,
        ".financialSituation-errMsg"
      );

      checkSeletBoxOnSubmit(
        form,
        someQuestionsItems,
        someQuestionsItems.pastDivorceDetails.field,
        `.pastDivorceDetails-errMsg`
      );
    }
  });

  someQuestionsPrev.addEventListener("click", (e) => {
    e.preventDefault();
    formTabs.forEach((tab) => {
      if (tab.getAttribute("href") == "#liton_tab_3_2") {
        tab.classList.remove("disabled");
        tab.click();
      } else {
        tab.classList.add("disabled");
      }
    });
  });
}

// Set Error Msg
function setError(input, formItems) {
  const errMsgTag = document.querySelector(`.${input.name}-errMsg`);

  // Check If All Inputs Not Empty
  if (
    input.type == "text" ||
    input.type == "email" ||
    input.type == "number" ||
    input.type == "password" ||
    input.type == "textarea"
  ) {
    if (input.hasAttribute("required")) {
      if (input.value.trim() == "") {
        // Set Valid , formItems = {field: {valid: false}}
        formItems[input.name].valid = false;

        // Set input border color Error
        input.style.borderColor = "#bc3928";

        // Set errMsg , formItems = errMsg: errMsg
        errMsgTag.innerHTML = formItems[input.name].errMsg;
      } else {
        // Set Valid , formItems = {field: {valid: true}}
        formItems[input.name].valid = true;

        // Set input border color Valid
        input.style.borderColor = "#9d1bc7";

        // Set errMsg , formItems = errMsg: ""
        document.querySelector(`.${input.name}-errMsg`).innerHTML = "";
      }
    }
  }

  // Check If Input Type Email Valid
  if (input.type == "email") {
    if (input.hasAttribute("required")) {
      if (input.value.trim() === "") {
        // Set Valid , formItems = {field: {valid: false}}
        formItems[input.name].valid = false;

        // Set input border color Error
        input.style.borderColor = "#bc3928";

        // Set errMsg , formItems = errMsg: errMsg
        errMsgTag.innerHTML = formItems[input.name].errMsg;
      } else if (validateEmail(input.value) == null) {
        // Set errMsg , formItems = errMsg: errMsg
        formItems[input.name].valid = false;
        formItems[input.name].errMsg = "Email Not Valid !";
        // Set input border color Error
        input.style.borderColor = "#bc3928";

        errMsgTag.innerHTML = formItems[input.name].errMsg;
      } else {
        formItems[input.name].valid = true;
        formItems[input.name].errMsg = "";
        // Set input border color Valid
        input.style.borderColor = "#9d1bc7";
      }
    }
  }

  // Check If Confirm Password Value = Password Value
  if (input.name === "confirmpassword") {
    if (input.hasAttribute("required")) {
      const passVal = document.getElementById("password").value.trim();
      const confirmpassVal = input.value.trim();

      if (confirmpassVal === "") {
        // Set errMsg , formItems = errMsg: errMsg
        formItems[input.name].valid = false;

        // Set input border color Error
        input.style.borderColor = "#bc3928";

        errMsgTag.innerHTML = formItems[input.name].errMsg;
      } else if (passVal !== confirmpassVal) {
        // Set errMsg , formItems = errMsg: errMsg
        formItems[input.name].valid = false;
        formItems[input.name].errMsg = "Password Not Match !";
        // Set input border color Error
        input.style.borderColor = "#bc3928";

        errMsgTag.innerHTML = formItems[input.name].errMsg;
      } else {
        formItems[input.name].valid = true;
        formItems[input.name].errMsg = "";
        // Set input border color Valid
        input.style.borderColor = "#9d1bc7";
      }
    }
  }

  // Check If checkbox is checked
  if (input.type == "checkbox") {
    if (input.hasAttribute("required")) {
      if (input.checked) {
        formItems[input.name].valid = true;
        // Set input border color Valid
        errMsgTag.style.color = "#9d1bc7";
      } else {
        formItems[input.name].valid = false;
        // Set input border color Valid
        errMsgTag.style.color = "#bc3928";
      }
    }
  }
}

function setSelectBoxError(form, items, selector, errEleSelector) {
  if (document.querySelector(selector).hasAttribute("required")) {
    // Check Select box value on change
    $(`${selector}`)
      .parent()
      .on("change", "select", function (e) {
        const niceSelectEle = document.querySelector(
          `${selector}`
        ).nextElementSibling;
        const errMsgTag = form.querySelector(errEleSelector);

        if (e.target.value == "None") {
          // Set Valid , formItems = {field: {valid: false}}
          items[`${selector.split("#").join("").trim()}`].valid = false;

          // Set input border color Error
          niceSelectEle.style.borderColor = "#bc3928";

          // Set errMsg , formItems = errMsg: errMsg
          errMsgTag.innerHTML =
            items[`${selector.split("#").join("").trim()}`].errMsg;
        } else {
          // Set Valid , formItems = {field: {valid: true}}
          items[`${selector.split("#").join("").trim()}`].valid = true;

          // Set input border color Error
          niceSelectEle.style.borderColor = "#9d1bc7";

          // Set errMsg , formItems = errMsg: ""
          errMsgTag.innerHTML = "";
        }
      });
  }
}

function checkSeletBoxOnSubmit(form, items, selector, errEleSelector) {
  if (document.querySelector(selector).hasAttribute("required")) {
    // Check Select box value on submit

    const niceSelectEle = document.querySelector(
      `${selector}`
    ).nextElementSibling;

    const errMsgTag = form.querySelector(errEleSelector);

    if (niceSelectEle.querySelector(".current").innerText == "None") {
      // Set Valid , formItems = {field: {valid: false}}
      items[`${selector.split("#").join("").trim()}`].valid = false;

      // Set input border color Error
      niceSelectEle.style.borderColor = "#bc3928";

      // Set errMsg , formItems = errMsg: errMsg
      errMsgTag.innerHTML =
        items[`${selector.split("#").join("").trim()}`].errMsg;
    } else {
      // Set Valid , formItems = {field: {valid: true}}
      items[`${selector.split("#").join("").trim()}`].valid = true;

      // Set input border color Error
      niceSelectEle.style.borderColor = "#9d1bc7";

      // Set errMsg , formItems = errMsg: ""
      errMsgTag.innerHTML = "";
    }
  }
}

function checkRadioButtonValidate(items, field) {
  field.forEach((input) => {
    input.addEventListener("change", (e) => {
      if (input.hasAttribute("required")) {
        items[`${input.name}`].valid = true;

        // Set errMsg , formItems = errMsg: errMsg
        document.querySelector(`.${input.name}-errMsg`).innerHTML = "";
      }
    });
  });
}

function showRadioMessageOnSubmit(items, field) {
  field.forEach((input) => {
    if (!items[`${input.name}`].valid) {
      // Set errMsg , formItems = errMsg: errMsg
      document.querySelector(`.${input.name}-errMsg`).innerHTML =
        items[`${input.name}`].errMsg;
    }
  });
}

function showContentWithSelectBox(items, selector, targetVal, required) {
  $(selector)
    .parent()
    .on("change", "select", function (e) {
      // Select The Unvisible Element Container

      const showsEleContaienr = document.querySelector(
        `.${$(this).attr("id")}Details-container`
      );

      // Select The Unvisible Element
      const showsEle = showsEleContaienr.querySelector(
        `#${$(this).attr("id")}Details`
      );

      if (e.target.value == targetVal) {
        // if value eqal yes show The Unvisible Element

        showsEleContaienr.classList.remove("d-none");
        required && showsEle.setAttribute("required", "");

        if (items[`${selector.split("#").join("")}Details`]) {
          items[`${selector.split("#").join("")}Details`].valid = false;
        }
      } else {
        // if value Not eqal yes hide The Unvisible Element

        showsEleContaienr.classList.add("d-none");
        showsEle.removeAttribute("required");

        if (items[`${selector.split("#").join("")}Details`]) {
          items[`${selector.split("#").join("")}Details`].valid = true;
        }
      }
    });
}

function showContentWithRadio(form, items, radioName, required = false) {
  radioName.forEach((input) => {
    input.addEventListener("change", (e) => {
      // Select The Unvisible Element Container
      const showsEleContaienr = document.querySelector(
        `.${input.id.split("-")[0].trim()}Details-container`
      );

      // Select The Unvisible Element
      const showsEle = showsEleContaienr.querySelector(
        `#${input.id.split("-")[0].trim()}Details`
      );

      if (e.target.value == "yes") {
        // if value eqal yes show The Unvisible Element

        showsEleContaienr.classList.remove("d-none");
        required && showsEle.setAttribute("required", "");

        if (items[`${radioName[0].name}Details`]) {
          setSelectBoxError(
            form,
            items,
            items[`${radioName[0].name}Details`].field,
            `.${radioName[0].name}Details-errMsg`
          );

          items[`${radioName[0].name}Details`].valid = false;
        }
      } else {
        // if value Not eqal yes hide The Unvisible Element

        showsEleContaienr.classList.add("d-none");
        showsEle.removeAttribute("required");

        if (items[`${radioName[0].name}Details`]) {
          items[`${radioName[0].name}Details`].valid = true;
        }
      }
    });
  });
}

// Check is Email Value is Valid
function validateEmail(emailValue) {
  return String(emailValue)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
