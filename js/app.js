(function($) {
    "use strict"; // Start of use strict
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Scroll to fullPage.js next/previous section
    // $('.scrolldown a, .scroll.down').on('click', function() {
    //     try {
    //         // fullpage scroll
    //         $.fn.fullpage.moveSectionDown();
    //     } catch (error) {
    //         // normal scroll
    //         $('html, body').animate({
    //             scrollTop: window.innerHeight
    //         }, 400, function() {});
    //     }

    // });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });
    var contextWindow = $(window);

    contextWindow.on('load', function() {
        $('#page-loader').addClass('p-hidden');
    });

})(jQuery); // End of use strict