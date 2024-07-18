var navMenu = $("#navMenu");
var position = navMenu.offset().top;  // offset of the nav menu
function StickySideNav() {
    let vw = window.innerWidth;
    if (vw >= 576) {
        navMenu.addClass("sideNav");

        // remove padding - padding will retain if user resized browser without scrolling to the top of the page            
        $(".col-sm-9").css("padding-top", "0");
    }
    else {
        if (window.pageYOffset > position) {
            navMenu.addClass("sideNav");

            // add padding to the top of the second column to prevent jerky movement
            $(".col-sm-9").css("padding-top", "4em");
        }
        else {
            navMenu.removeClass("sideNav");

            // reduce padding
            $(".col-sm-9").css("padding-top", "2em");
        }
    }
}

// function to scroll to the top of the page
function ToTop() {
    $(window).scrollTop(0);
}

// execute StickySideNav when all content is loaded, when the window is resized or when user scrolls the page
$(document).ready(function () {
    $("body").ready(StickySideNav);
    $(window).resize(StickySideNav);
    $(window).scroll(StickySideNav);
    $(".nav-link").on('shown.bs.tab', ToTop);
})