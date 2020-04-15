jQuery(window).on("load", function() {
  "use strict";

  function hidePreloader() {
    $(".preloader").addClass("hide-preloader");
    setTimeout(function() {
      $(".preloader").addClass("remove-preloader");
    }, 700);
  }

  // select video by random
  const index = Math.random() < 0.5 ? 1 : 2;

  setTimeout(function() {
    $(".preloader #skip").css({ visibility: "visible" });
  }, 3600);

  $(".preloader").append(`<video autoplay muted>
    <source src="assets/video/preview_${index}.mp4" type="video/mp4" />
    Sorry, your browser doesn't support embedded video
  </video>`);

  // set event listener
  $(".preloader #skip").on("click", hidePreloader);
  $(".preloader video").on("pause", hidePreloader);

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
