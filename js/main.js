// wow js initialize /
if($('.wow').hasClass('wow')){
wow = new WOW(
{
boxClass: 'wow',
animateClass: 'animated',
offset: 0,
mobile: false,
live: true
}
)
wow.init();
}
// wow js initialize /


/* tooltip */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
/* tooltip end*/

/* popover */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})
/* popover end*/



/*header-spacer*/
$(function () {
    headerSpacer = function () {
        $('.header-spacer').css('height', $('header').outerHeight());
    }
    headerSpacer();
    $(window).resize(function () {
        headerSpacer();
    });
});
/*header-spacer*/
/*  Hide Header on on scroll down */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var headerHeight = $('header').outerHeight();
var navbarHeight = headerHeight / 2;

$(window).scroll(function (event) {
    didScroll = true;
    if ($(window).scrollTop() >= navbarHeight) {
        $('header').addClass('small-header');
    }
    else {
        $('header').removeClass('small-header');
    }
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight) {
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}
/* / Hide Header on on scroll down */

/* RXT Travel */
function viewport() { var t = window, r = "inner"; return "innerWidth" in window || (r = "client", t = document.documentElement || document.body), t[r + "Width"] } viewport(); var rxtTravelRef = 1; $(".rxt-travel").each(function () { $(this).wrap('<div class="rxt-travel-container-' + rxtTravelRef + '" data-ref="' + rxtTravelRef + '"></div>'), $(this).closest('[class*="rxt-travel-container-"]').before('<div class="rxt-travel-ref-' + rxtTravelRef + '"></div>'), rxtTravelRef++ }), travelMaxWidth = function () { $('[class*="rxt-travel-container-"]').each(function () { var t = $(this).find(".rxt-travel").attr("data-rxt-travel-max"), r = $(this).find(".rxt-travel").attr("data-rxt-travel-appendTo"), e = $(this).attr("data-ref"), a = $(this).attr("data-ref"); viewport() <= t ? $(this).appendTo(r) : $(r).find(".rxt-travel-container-" + a).insertAfter(".rxt-travel-ref-" + e) }) }, travelMaxWidth(), $(window).on("resize", function () { travelMaxWidth() });
/* / RXT Travel */

/*banner-spacer-img-shape*/
$(function () {
    bannerWrapSpacer = function () {
        $('.banner-spacer-height').css('height', $('.img-spacer').outerHeight());
        var imgHeight = $('.img-spacer').outerHeight();
        $('.img-spacer').css('margin-top', -imgHeight);
        $('.img-spacer').css('margin-bottom', -1);

        $('.banner-spacer-height').css('margin-top', -imgHeight / 2);
        
    }
    bannerWrapSpacer();
    $(window).resize(function () {
        bannerWrapSpacer();
    });
});
/*banner-spacer-img-shape*/



/* Back To Top Button */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".backtop").addClass("backtopActive");
        } else {
            $(".backtop").removeClass("backtopActive");
        }
    });
    $('.backtop').click(function () {
        $('.backtop').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('.backtop').tooltip('show');
});
/* /Back To Top Button */

/* pass Video URL Dynamically*/
$(document).ready(function () {
    function videoURLDynamic() {
        var n = $("body").find('[data-bs-toggle="modal"]');
        n.click(function () {
            var n = $(this).data("target"),
                t = $(this).attr("data-theVideo"),
                i = t + "&autoplay=1";
            $(n + " iframe").attr("src", i);
             /*Stop Video*/ 
            $(n + " button.close").click(function () {
                $(n + " iframe").attr("src", "")
            });
            $(".modal").click(function () {
                $(n + " iframe").attr("src", "")
            })
            /*Stop Video*/
        })
    }
    videoURLDynamic();
    /* Video Stop */
    $('#modalVideo .close').click(function () {
        $('.embed-responsive-item').each(function (index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });
    });
    /* / Video Stop */
});
/* pass Video URL Dynamically*/




/* /success-stories-clients*/
$(".owl-carousel-multiple").each(function () {
    $(document).ready(function () {
        var owl = $('.owl-carousel-multiple');
        owl.owlCarousel({
            margin: 10,
            animateOut: 'fadeOut',
            autoHeight: false,
            autoplay: true,
            drag:true,
            nav: false,
            dots: false,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true
                },
                575: {
                    items: 2,
                    dots: true
                },
                767: {
                    items: 2,
                    dots: true
                },
                1000: {
                    mouseDrag:false,
                    autoplay: false,
                    items: 3
                },
                1199: {
                    mouseDrag:false,          
                    autoplay: false,
                    items: 4
                }
            }
        });
    })
});
/* /success-stories-clients*/

/* testimonials */
$(".owl-carousel-testimonials").each(function () {
    $(document).ready(function () {
        var owl = $('.owl-carousel-testimonials');
        owl.owlCarousel({
            margin: 10,
            animateOut: 'fadeOut',
            autoHeight: false,
            autoplay: true,
            drag:true,
            nav: false,
            dots: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true
                },
                575: {
                    items: 1,
                    dots: true
                },
                767: {
                    items: 1,
                    dots: true
                },
                1000: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });
    })
});
/*testimonials*/

/* success-stories-clients */
$(".owl-carousel-partners").each(function () {
    $(document).ready(function () {
        var owl = $('.owl-carousel-partners');
        owl.owlCarousel({
            margin: 20,
            autoHeight: false,
            autoplay: true,
            drag:true,
            nav: false,
            dots: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 3
                },
                575: {
                    items: 4
                },
                767: {
                    items: 4
                },
                1000: {
                    items: 5
                },
                1199: {
                    items: 6
                },
                1399:{
                    items:6
                }
            }
        });
    })
});
/* /success-stories-clients*/





