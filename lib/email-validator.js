function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }



$(document).ready(function() {
    $('<div class="error-message">email is invalid</div>').insertAfter("input");
    $('.error-message').hide();
    $("input").on("keyup", function(event) {
        let inputValue = $(this).val();

        let isEmail = validateEmail(inputValue);
        
        if (!isEmail) {
            $(this).css('border-color', 'red');
            $('.error-message').show();
        } else {
            $(this).css('border', 'none');
            $('.error-message').hide();
        }  
    })
}) 