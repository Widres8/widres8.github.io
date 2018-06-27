"use strict";

/* Ajax Form Plugin V 1.0.1
 * Send contact and newsletter form data to a server and waiting for its response.
 * Compatible with jqery validator plugin
 */

(function($) {

    $.fn.initForm = function(options) {

        var settings = $.extend({
            loaderContact: this.find('.loader-contact'),
            successClean: this.find('.form-success-clean'),
            successGone: this.find('.form-success-gone'),
            successInvisible: this.find('.form-success-invisible'),
            successVisible: this.find('.form-success-visible'),
            textFeedback: this.find('.form-text-feedback'),
        }, options);

        var $ajax = {
            sendRequest: function(p) {
                settings.loaderContact
                    .addClass('visible')
                    .removeClass('invisible');

                var form_fill = $(p);

                // Get the form data.
                var form_inputs = form_fill.find(':input');
                var form_data = {};

                form_inputs.each(function() {
                    form_data[this.name] = $(this).val();
                });

                var templateParams = {
                    from_email: form_data.email,
                    name_send: form_data.name,
                    message_html: form_data.message
                };

                emailjs.send('gmail-widres', 'template_sIdSKKNP', templateParams)
                    .then(function(response) {
                        // console.log('SUCCESS!', response.status, response.text);
                        settings.successClean.val("");
                        settings.successInvisible.addClass('invisible');
                        settings.successGone.addClass('gone');
                        settings.successVisible.removeClass('invisible');
                        settings.successVisible.removeClass('gone');
                        settings.loaderContact
                            .addClass('invisible')
                            .removeClass('visible');
                    }, function(error) {
                        console.log('FAILED...', error);
                        settings.loaderContact
                            .addClass('invisible')
                            .removeClass('visible');
                    });
            }

        };


        //if jquery validator plugin is enable, use it	
        if (jQuery.validator) {
            jQuery.validator.setDefaults({
                success: "valid"
            });
            this.validate({
                rules: {
                    field: {
                        required: true,
                        email: true
                    }
                }
            });
        }



        this.submit(function(event) {
            // prevent default submit
            console.log('Send request');
            event.preventDefault();

            // use jquery validator plugin if it is enabled
            if (jQuery.validator) {
                if ($(this).valid()) {
                    $ajax.sendRequest(this);
                }
            } else {
                $ajax.sendRequest(this);
            }
        });

    };

}(jQuery));

/* End of ajax */


// Make them as plugin