/*-----------------------------------------------------------------------------------
 Template Name:shopbean

 ----------------------------------------------------------------------------------- */

(function ($) {
  "use strict";
  $(".slide-1 ").slick({
    autoplay: true,
    autoplaySpeed: 2500,
  });

  $("._pdt_type_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".mobile-search").on("click", function () {
    $(".searchbar-input").addClass("open");
  });

  $(".close-searchbar").on("click", function () {
    $(".searchbar-input").removeClass("open");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
  $(".bg-img").parent().addClass("bg-size");

  jQuery(".bg-img").each(function () {
    var el = $(this),
      src = el.attr("src"),
      parent = el.parent();

    parent.css({
      "background-image": "url(" + src + ")",
      "background-size": "cover",
      "background-position": "center",
      display: "block",
    });

    el.hide();
  });
  $(".toggle-nav").on("click", function () {
    $(".sm-horizontal").css("right", "0px");
  });
  $(".mobile-back").on("click", function () {
    $(".sm-horizontal").css("right", "-410px");
  });

  $(".product-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".product-slick",
    arrows: false,
    dots: false,
    focusOnSelect: true,
  });

  $(".collapse-block-title").on("click", function (e) {
    e.preventDefault;
    var speed = 300;
    var thisItem = $(this).parent(),
      nextLevel = $(this).next(".collection-collapse-block-content");
    if (thisItem.hasClass("open")) {
      thisItem.removeClass("open");
      nextLevel.slideUp(speed);
    } else {
      thisItem.addClass("open");
      nextLevel.slideDown(speed);
    }
  });

  $(".color-selector ul li > div").on("click", function (e) {
    $(".color-selector ul li > div").removeClass("active");
    $(this).addClass("active");
  });

  $(".show-offer").on("click", function (e) {
    $(".offer-sider").slideToggle();
    $(".more-offer").fadeToggle();
    $(".less-offer").fadeToggle();
  });

  $(".size-box ul li").on("click", function (e) {
    $(".size-box ul li").removeClass("active");
    $("#selectSize").removeClass("cartMove");
    $(this).addClass("active");
    $(this).parent().addClass("selected");
  });

  $("#cartEffect").on("click", function (e) {
    if ($("#selectSize .size-box ul").hasClass("selected")) {
      $("#cartEffect").text("Added to bag ");
      $(".added-notification").addClass("show");
      setTimeout(function () {
        $(".added-notification").removeClass("show");
      }, 5000);
    } else {
      $("#selectSize").addClass("cartMove");
    }
  });

  var qtyDecs = document.querySelectorAll(".qty-minus");
  var qtyIncs = document.querySelectorAll(".qty-plus");
  qtyDecs.forEach((qtyDec) => {
    qtyDec.addEventListener("click", function (e) {
      if (e.target.nextElementSibling.value > 0) {
        e.target.nextElementSibling.value--;
      }
    });
  });
  qtyIncs.forEach((qtyDec) => {
    qtyDec.addEventListener("click", function (e) {
      e.target.previousElementSibling.value++;
    });
  });

  $(".filter-main-btn").on("click", function (e) {
    $(".collection-filter").css("left", "-15px");
  });
  $(".filter-back").on("click", function (e) {
    $(".collection-filter").css("left", "-365px");
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".tap-top").addClass("top-cls");
    } else {
      $(".tap-top").removeClass("top-cls");
    }
  });

  $(
    ' <div class="tap-top" style="display: block;"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 285 285" style="enable-background:new 0 0 285 285;" xml:space="preserve"><g><path d="M88.4,87.996c2.525-2.146,2.832-5.933,0.687-8.458C82.801,72.144,79.34,62.719,79.34,53c0-22.607,18.393-41,41-41c22.607,0,41,18.393,41,41c0,9.729-3.467,19.161-9.761,26.557c-2.148,2.523-1.843,6.311,0.681,8.458c1.129,0.961,2.511,1.431,3.886,1.431c1.698,0,3.386-0.717,4.572-2.111C168.858,77.77,173.34,65.576,173.34,53c0-29.225-23.775-53-53-53c-29.225,0-53,23.775-53,53c0,12.563,4.476,24.748,12.602,34.31C82.089,89.835,85.873,90.141,88.4,87.996z"/><path d="M120.186,41.201c13.228,0,23.812,8.105,27.313,19.879c0.761-2.562,1.176-5.271,1.176-8.08c0-15.649-12.685-28.335-28.335-28.335c-15.648,0-28.334,12.686-28.334,28.335c0,2.623,0.364,5.16,1.031,7.571C96.691,49.076,107.152,41.201,120.186,41.201z"/><path d="M234.21,169.856c-3.769-22.452-19.597-26.04-27.034-26.462c-2.342-0.133-4.516-1.32-5.801-3.282c-5.388-8.225-12.609-10.4-18.742-10.4c-4.405,0-8.249,1.122-10.449,1.932c-0.275,0.102-0.559,0.15-0.837,0.15c-0.87,0-1.701-0.47-2.163-1.262c-5.472-9.387-13.252-11.809-19.822-11.809c-3.824,0-7.237,0.82-9.548,1.564c-0.241,0.077-0.764,0.114-1.001,0.114c-1.256,0-2.637-1.03-2.637-2.376V69.753c0-11.035-8.224-16.552-16.5-16.552c-8.276,0-16.5,5.517-16.5,16.552v84.912c0,4.989-3.811,8.074-7.918,8.074c-2.495,0-4.899-1.138-6.552-3.678l-7.937-12.281c-3.508-5.788-8.576-8.188-13.625-8.189c-11.412-0.001-22.574,12.258-14.644,25.344l62.491,119.692c0.408,0.782,1.225,1.373,2.108,1.373h87.757c1.253,0,2.289-1.075,2.365-2.325l2.196-35.816c0.025-0.413,0.162-0.84,0.39-1.186C231.591,212.679,237.828,191.414,234.21,169.856z"/></g></svg></div>'
  ).appendTo($("body"));
  (function () {})();
  $(".tap-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
  $(".loader-wrapper").fadeOut("slow", function () {
    $(this).remove();
  });
})(jQuery);
