jQuery(window).on("load", function () {
  "use strict";

  function hidePreloader() {
    $(".preloader").addClass("hide-preloader");
    setTimeout(function () {
      $(".preloader").addClass("remove-preloader");
    }, 700);
  }

  // select video by random
  const index = Math.floor(Math.random() * 3) + 1;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? true
    : false;
  const baseURL = "https://rucy-website.oss-cn-beijing.aliyuncs.com/min";
  const path = isMobile ? "mobile10s_" : "rucychina_web";

  setTimeout(function () {
    $(".preloader #skip").css({ visibility: "visible" });
  }, 3600);

  $(".preloader").append(`
  <video autoplay muted>
    <source src="${baseURL}/${path}${index}.mp4" type="video/mp4" />
    抱歉，您的浏览器不支持嵌入式视频
  </video>`);

  // set event listener
  $(".preloader #skip").on("click", hidePreloader);
  $(".preloader video").on("pause", hidePreloader);

  // SHOW/ANIMATE ANIMATION CONTAINER
  setTimeout(function () {
    $("#intro .animation-container").each(function () {
      var e = $(this);

      setTimeout(function () {
        e.addClass("run-animation");
      }, e.data("animation-delay"));
    });
  }, 700);
});

jQuery(document).ready(function ($) {
  "use strict";

  // SMOOTH SCROLL FOR SAME PAGE LINKS
  $(document).on("click", "a.smooth-scroll", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 80,
      },
      500
    );
  });

  $(document).on("click", "a.scroll-to-top", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // SCROLL REVEAL SETUP
  window.sr = ScrollReveal();
  sr.reveal(".scroll-animated", {
    duration: 600,
    delay: 0,
    origin: "left",
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    distance: "20vh",
    viewFactor: 0.4,
    scale: 1,
  });
});
