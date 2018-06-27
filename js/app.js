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

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });

    // init contact form
    emailjs.init("user_W09P5tea0Imck0MgFk76k");

    var sendMessageForm = $('.send_message_form');
    // Default server url
    var messageServerUrl = 'https://api.sparkpost.com/api/v1/transmissions';

    // Use form define action attribute
    if (sendMessageForm.attr('action') && (sendMessageForm.attr('action') != '')) {
        messageServerUrl = sendMessageForm.attr('action');
    }

    sendMessageForm.initForm({
        serverUrl: messageServerUrl,
    });

    // loader
    var contextWindow = $(window);

    contextWindow.on('load', function() {
        $('#page-loader').addClass('p-hidden');
    });

})(jQuery); // End of use strict