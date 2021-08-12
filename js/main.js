$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready


    /*
    ################
    Add navbar background color when scrolled
    */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 56) {
            $(".navbar").addClass("bg-light navbar-light");
        } else {
            $(".navbar").removeClass("bg-light navbar-dark");
        }
    });

    // If Mobile, add background color when toggler is clicked
    $(".navbar-toggler").click(function () {
        if (!$(".navbar-collapse").hasClass("show")) {
            $(".navbar").addClass("bg-light");
        } else {
            if ($(window).scrollTop() < 56) {
                $(".navbar").removeClass("bg-dark");
            } else {
            }
        }
    });
    // ############
    // document ready
});