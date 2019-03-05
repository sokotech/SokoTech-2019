(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".main-navigation-home").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 600) {
                $('.main-navigation-home').fadeIn();
            } else {
                $('.main-navigation-home').fadeOut();
            }
        });
    });

});
  }(jQuery));
