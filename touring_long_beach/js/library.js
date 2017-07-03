(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            console.log('yo!');
            //form validation rules
            $(".register-party-form").validate({
                rules: {
                  Full Name: {
                    required: true,
                  },
                    email: {
                        required: true,
                        email: true
                    },
                    Message: {
                      required: true,
                    }
                },
                messages: {
                    Full Name: {
                      required: "Please enter full name",
                    },
                    email: {
                      "Please enter a valid email address",
                    },
                    message: {
                      "Please enter a message",
                    },

                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);