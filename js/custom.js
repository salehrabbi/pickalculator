//fixed menu
$(document).ready(function () {
    $(".arbeid .port-left").css({
        "height": $(".port-right").outerHeight()
    });
});

$(document).ready(function () {
    $(".search-top .fa-search").click(function () {
        $(".search-top form").css("display", "block");
        $(".search-top .fa-search").css("display", "none");
        $(".search-top .fa-times").css("display", "inline-block");
    });
    $(".search-top .fa-times").click(function () {
        $(".search-top form").css("display", "none");
        $(".search-top .fa-search").css("display", "inline-block");
        $(".search-top .fa-times").css("display", "none");
    });
    $('.fa-plus').click(function () {
        $('.profile .content .fa-plus').not(this).removeClass('clicked');
        $(this).toggleClass('clicked');
    });

});
$('a[href*="#s"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


$(document).ready(function () {
    var owl = $('.owl');
    owl.owlCarousel({
        margin: 0,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: false,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.car-content .tabs-silder-1');
    owl.owlCarousel({
        margin: 0,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<img src="styles/images/rightArrow.png" alt="">', '<img src="styles/images/leftArrow.png" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('#profile-slide');
    owl.owlCarousel({
        margin: 0,
        nav: true,
        loop: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<img src="styles/images/leftArrow.png" alt="">', '<img src="styles/images/rightArrow.png" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
})

$(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 500){
        console.log(scrollTop);
        $('header').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    } else {
        $('header').removeClass('navbar-fixed-top').addClass('navbar-static-top');
    }
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});



jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});