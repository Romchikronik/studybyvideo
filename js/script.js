$(document).ready(function () {
  // favicon

  const setFavicon = (emoji) => {
    const canvas = document.createElement("canvas");
    canvas.height = 32;
    canvas.width = 32;

    const ctx = canvas.getContext("2d");
    ctx.font = "28px serif";
    ctx.fillText(emoji, -2, 24);

    const favicon = document.querySelector("link[rel=icon]");
    if (favicon) {
      favicon.href = canvas.toDataURL();
    }
  };
  setFavicon("🤙");

  // menu
  $(".menu__link").click(function (e) {
    e.preventDefault();
    // $(".nav-menu__link").removeClass("nav-menu__link_active");
    $("html").css("overflow-y", "scroll");
    $(".nav-menu").removeClass("menu-open");
    $(".nav-menu__burger").removeClass("open");
    $("html").animate(
      {
        scrollTop:
          $($(this).attr("href")).offset().top - $(".nav").outerHeight() - 10, //30 .addClass("nav-menu__link_active")
      },
      1000
    );
  });
  $(window).scroll(function () {
    var scrolled = $(this).scrollTop();
    $(".nav-menu__link").each(function () {
      if (
        scrolled >=
        $($(this).attr("href")).offset().top - $(".nav").outerHeight() - 40 // 50
      ) {
        $(".nav-menu__link").removeClass("nav-menu__link_active");
        $(this).addClass("nav-menu__link_active");
      }
    });
    if ($(this).scrollTop() < $(".header").outerHeight()) {
      $(".nav-menu__link").removeClass("nav-menu__link_active");
    } //else {
  });

  $(".nav-menu__burger").click(function () {
    if (!$(this).hasClass("open")) {
      $(this).addClass("open");
      $(".nav-menu").addClass("menu-open");
      $(".nav").addClass("fixed-top");
      $("html").css("overflow-y", "hidden");
    } else {
      $(this).removeClass("open");
      $(".nav-menu").removeClass("menu-open");
      $(".nav").removeClass("fixed-top");
      $("html").css("overflow-y", "scroll");
    }
  });

  // слайдер с отзывами
  if ($(".thm__owl-carousel").length) {
    $(".thm__owl-carousel").each(function () {
      var Self = $(this);
      var carouselOptions = Self.data("options");
      var carouselPrevSelector = Self.data("carousel-prev-btn");
      var carouselNextSelector = Self.data("carousel-next-btn");
      var thmCarousel = Self.owlCarousel(carouselOptions);
      if (carouselPrevSelector !== undefined) {
        $(carouselPrevSelector).on("click", function () {
          thmCarousel.trigger("prev.owl.carousel");
          return false;
        });
      }
      if (carouselNextSelector !== undefined) {
        $(carouselNextSelector).on("click", function () {
          thmCarousel.trigger("next.owl.carousel");
          return false;
        });
      }
    });
  }

  // выпадающее окошко

  $(".modal_btn").click(function (e) {
    e.preventDefault();
    $(".overlay").show().css("overflow", "auto");
    $("html").css("overflow-y", "hidden");
    $(".modal-manager").animate({
      top: "50%",
    });
  });

  $(".overlay, .modal-manager__exit").click(function () {
    $(".overlay").hide();
    $("html").css("overflow-y", "scroll");
    $(".modal-manager").animate({
      top: "-100%",
    });
  });
});
