jQuery(window).on("load", function() {
  "use strict";

  function hidePreloader() {
    $(".preloader").addClass("hide-preloader");
    setTimeout(function() {
      $(".preloader").addClass("remove-preloader");
    }, 700);
  }

  // select video by random
  const rand = Math.random();

  setTimeout(function() {
    $(".preloader #skip").css({ visibility: "visible" });
  }, 3600);

  $(`.preloader video:nth-child(${rand < 0.5 ? 1 : 2})`).css({
    display: "none"
  });
  // set event listener
  $(".preloader #skip").on("click", hidePreloader);
  $(`.preloader video:nth-child(${rand < 0.5 ? 2 : 1})`).on(
    "pause",
    hidePreloader
  );

  // SHOW/ANIMATE ANIMATION CONTAINER
  setTimeout(function() {
    $("#intro .animation-container").each(function() {
      var e = $(this);

      setTimeout(function() {
        e.addClass("run-animation");
      }, e.data("animation-delay"));
    });
  }, 700);
});

jQuery(document).ready(function($) {
  "use strict";

  // SMOOTH SCROLL FOR SAME PAGE LINKS
  $(document).on("click", "a.smooth-scroll", function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 80
      },
      500
    );
  });

  $(document).on("click", "a.scroll-to-top", function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0
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
    scale: 1
  });
});
