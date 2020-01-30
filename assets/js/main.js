jQuery(window).on('load', function() {
	"use strict";
    
    
    // HIDE PRELOADER
	setTimeout(function() {
		$(".preloader").addClass("hide-preloader");
		setTimeout(function() {
			$(".preloader").addClass("remove-preloader");
		}, 700);
   	}, 1200);
    
    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){

        $("#intro .animation-container").each(function() {

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 700 );

    
});


jQuery(document).ready(function($) {
	"use strict";
    
    
    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function(event) {
        
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 500);
        
    });
	
	$(document).on('click', 'a.scroll-to-top', function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	})
    
    
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