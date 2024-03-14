"use strict";

$(document).ready(function () {
  "use strict";

  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  $('.circle').on('click', function () {
    $(".circleFill").attr("class", "circleFill filled");
  });
  PageLoad();
  HomeSlider(); //CursorAnimation();

  NavigationClick();
  fixedHeader();
  SwiperSlider();
  YoutubeVideoThumb();
  CustomPageScroll();
  OnScrollAnimation(); // if ($(window).width() < 520) {
  // 	var bannerHeight = $('.slide-bgimg img').height();
  // 	$('.sec-banner').css('height',bannerHeight);
  // }

  $('.mapBtn').on('click', function () {
    $('.artistMapSec').toggleClass('hide');
    var $this = $(this);
    $this.toggleClass("expanded");

    if ($this.hasClass("expanded")) {
      $this.html("Image Map View");
    } else {
      $this.html("Google Map View");
    }
  });
});
/*----------------------------------------------------
Function Page Load
----------------------------------------------------*/

function PageLoad() {
  TweenMax.to(".logoLoading", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  });
  TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
  });
  TweenMax.from("main", 1, {
    delay: 1.5,
    // alpha: 0,
    y: 200,
    ease: Expo.easeInOut
  });
  TweenMax.from(".logo", 1, {
    delay: 2.6,
    alpha: 0,
    y: 20,
    ease: Expo.easeInOut
  });
  TweenMax.from(".bannerTxt .bannerTxt1", 1, {
    delay: 3.2,
    alpha: 0,
    y: 20,
    ease: Expo.easeInOut
  });
  TweenMax.from(".bannerTxt .para", 1, {
    delay: 3.4,
    alpha: 0,
    y: 20,
    ease: Expo.easeInOut
  });
  TweenMax.from(".bannerTxt .title1", 1, {
    delay: 3.6,
    alpha: 0,
    y: 20,
    ease: Expo.easeInOut
  });
  TweenMax.from(".scrollDown", 1, {
    delay: 4.2,
    alpha: 0,
    y: 20,
    ease: Expo.easeInOut
  });
  TweenMax.from(".callNow", 1, {
    delay: 3,
    alpha: 0,
    y: 20,
    ease: Expo.easeInOut
  });
  TweenMax.from(".eq-header", 1, {
    delay: 3.4,
    alpha: 0,
    y: 20,
    ease: Expo.easeInOut
  });

  if ($(window).width() > 800) {
    TweenMax.staggerFrom("nav li", 1, {
      delay: 2.8,
      alpha: 0,
      y: 20,
      ease: Power3.easeInOut
    }, 0.08);
    TweenMax.from(".sec-eq", 1, {
      delay: 4.4,
      alpha: 0,
      y: 20,
      ease: Expo.easeInOut
    });
  }

  if ($(window).width() < 800) {
    TweenMax.from(".hamburger", 1, {
      delay: 3.2,
      alpha: 0,
      y: 20,
      ease: Expo.easeInOut
    });
    var t1 = new TimelineMax({
      paused: true
    }),
        $menu__wpr = $('nav'),
        $openMenu = $('.hamburger');
    t1.to($('body'), 0.2, {
      className: '+=showMenu'
    }, "-=0.1");
    t1.to($openMenu, 0.3, {
      className: '+=open'
    }, "-=0.1");
    t1.to($menu__wpr, 0.2, {
      className: '+=open'
    });
    t1.staggerFrom("nav li", 0.8, {
      x: 40,
      alpha: 0,
      ease: Expo.easeOut
    }, 0.1);
    t1.reverse();
    $(document).on("click", ".hamburger", function () {
      t1.reversed(!t1.reversed());
    });
    t1.reverse();
    $(document).on("click", "nav li", function () {
      t1.reversed(!t1.reversed());
    });
  }
}
/*----------------------------------------------------
Function Home Slider
----------------------------------------------------*/


function HomeSlider() {
  $('.banner-slider .swiper-slide').each(function () {
    var getImageSrc = $(this).children('img').attr('src');
    $(this).css({
      'background-image': 'url(' + getImageSrc + ')'
    });
    $(this).children('img').remove();
  });
  var mainSliderSelector = '.main-slider',
      pagdots = ['1', '2', '3'],
      interleaveOffset = 0.5;
  var mainSliderOptions = {
    direction: 'vertical',
    loop: true,
    allowTouchMove: false,
    speed: 3000,
    delay: 2000,
    noSwiping: false,
    noSwipingClass: 'swiper-no-swiping',
    draggable: false,
    simulateTouch: false,
    grabCursor: false,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + pagdots[index] + '</span>';
      }
    },
    on: {
      init: function init() {
        this.autoplay.stop();
      },
      progress: function progress() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress,
              innerOffset = swiper.width * interleaveOffset,
              innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-bgimg").style.transform = "translate3d(0, " + innerTranslate + "px, 0)";
        }
      },
      touchStart: function touchStart() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function setTransition(speed) {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-bgimg").style.transition = speed + "ms";
        }
      }
    }
  };
  var mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
  setTimeout(function () {
    mainSlider.autoplay.start();
  }, 2000);
}
/*----------------------------------------------------
Function Cursor Animation
----------------------------------------------------*/


function CursorAnimation() {
  document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px", t.style.top = n.clientY + "px", e.style.left = n.clientX + "px", e.style.top = n.clientY + "px", i.style.left = n.clientX + "px", i.style.top = n.clientY + "px";
  });
  var t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");

  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }

  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }

  s();

  for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a]);
  }

  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }
}
/*----------------------------------------------------
Function Scroll to Section
----------------------------------------------------*/


function NavigationClick() {
  $('nav a[href^="#"]').on('click', function (e) {
    var headerHeight = $('header').height();
    $('nav a').removeClass('active');
    $(this).addClass('active');
    $('nav').removeClass('open');
    var target = this.hash;
    var $target = $(target);
    $('html, body').animate({
      'scrollTop': $target.offset().top - headerHeight
    }, 800, 'swing');
    e.preventDefault();
  });
  var section1Btn = document.getElementById("scrollDown");

  section1Btn.onclick = function () {
    TweenLite.to(window, 0.4, {
      delay: 1,
      scrollTo: {
        y: "#sec-overview",
        offsetY: 70,
        ease: Power3.easeOut,
        autoKill: false
      }
    });
  };
}
/*----------------------------------------------------
Function Fixed Header
----------------------------------------------------*/


function fixedHeader() {
  var stickyOffset = 1;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= stickyOffset) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
}
/*----------------------------------------------------
Function Swiper Slider
----------------------------------------------------*/


function SwiperSlider() {
  var swiper = new Swiper('#gallery-carousel', {
    direction: "horizontal",
    loop: false,
    grabCursor: true,
    resistance: true,
    resistanceRatio: 0.6,
    speed: 1000,
    spaceBetween: 40,
    slidesPerView: 1,
    autoplay: false,
    effect: "slide",
    mousewheel: false,
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev'
    },
    breakpoints: {
      800: {
        slidesPerView: 2
      },
      520: {
        slidesPerView: 1
      }
    }
  });
  
  var swiper = new Swiper('#gallery-carousel1', {
    direction: "horizontal",
    loop: false,
    grabCursor: true,
    resistance: true,
    resistanceRatio: 0.6,
    speed: 1000,
    spaceBetween: 40,
    slidesPerView: 3,
    autoplay: false,
    effect: "slide",
    mousewheel: false,
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev'
    },
    breakpoints: {
      800: {
        slidesPerView: 2
      },
      520: {
        slidesPerView: 1
      }
    }
  });
  
  var swiper = new Swiper('#amenities-carousel', {
    direction: "horizontal",
    loop: false,
    grabCursor: true,
    resistance: true,
    resistanceRatio: 0.6,
    speed: 1000,
    spaceBetween: 0,
    slidesPerView: 4,
    autoplay: false,
    effect: "slide",
    mousewheel: false,
    navigation: {
      nextEl: '.ame-next',
      prevEl: '.ame-prev'
    },
    breakpoints: {
      800: {
        slidesPerView: 2
      },
      520: {
        slidesPerView: 1
      }
    }
  }); //    var swiper = new Swiper('#about-carousel', {
  // direction: "horizontal",
  // loop: false,
  // grabCursor: true,
  // resistance : true,
  // resistanceRatio : 0.6,
  // speed:1000,
  // spaceBetween: 40,
  // slidesPerView: 4,
  // autoplay: true,
  // effect: "slide",
  // mousewheel: true,
  // breakpoints: {
  // 	800: {
  // 		slidesPerView: 2
  // 	}
  // },
  // pagination: {
  //    	el: '.swiper-pagination',
  //    },
  //   });
}
/*----------------------------------------------------
Function Youtube Video
----------------------------------------------------*/


function YoutubeVideoThumb() {
  $('.yt-thumb').on('click', function () {
    $(this).css('z-index', '1');
    var symbol = $("#ytVideo")[0].src.indexOf("?") > -1 ? "&" : "?";
    $("#ytVideo")[0].src += symbol + "autoplay=1";
  });
  $('.yt-thumb').each(function () {
    var getImageSrc = $(this).children('img').attr('src');
    var getImageSrcW = $(this).children('img').width();
    var getImageSrcH = $(this).children('img').height();
    $(this).css({
      'width': getImageSrcW + 'px',
      'height': getImageSrcH + 'px'
    });
    $(this).css({
      'background-image': 'url(' + getImageSrc + ')'
    });
    $(this).children('img').remove();
  });
}
/*----------------------------------------------------
Function Custom Page Scroll
----------------------------------------------------*/


function CustomPageScroll() {} // 

/*----------------------------------------------------
Function On Scroll Animation
----------------------------------------------------*/


function OnScrollAnimation() {
  var controller = new ScrollMagic.Controller();
  $('[data-scrollmagic]').each(function (index) {
    var tl = new TimelineMax();
    tl.fromTo(this, 0.4, {
      delay: 1,
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      ease: Power2.EaseInOut
    });
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.6,
      reverse: false
    }).setTween(tl).addTo(controller);
  });
  var controller2 = new ScrollMagic.Controller();
  $('[data-scrollmagic2]').each(function (index) {
    var tl = new TimelineMax();
    tl.to($('.bgInner'), 0.4, {
      width: "100%"
    });
    tl.to($('.yt-video'), 0.4, {
      delay: 1,
      alpha: 1,
      className: '+=reveal'
    });
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.6,
      reverse: false
    }).setTween(tl).addTo(controller2);
  });
  $('.has-animation').each(function () {
    var $this = $(this);
    var $thisHeight = $(this).height();
    var scene = new ScrollMagic.Scene({
      triggerElement: $this[0],
      duration: $thisHeight
    }).addTo(controller);
    scene.triggerHook(1);
    scene.on('enter', function () {
      $this.delay($this.attr('data-delay')).queue(function (next) {
        TweenMax.to($this, 0.6, {
          force3D: true,
          opacity: 1,
          y: 0,
          scale: 1,
          delay: 0.1,
          ease: Power2.easeOut
        });
        next();
      });
    });
    scene.on('leave', function (event) {
      $this.removeClass('active');
    });

    if ($("body").hasClass("smooth-scroll")) {
      scrollbar.addListener(function () {
        scene.refresh();
      });
    }
  });
}