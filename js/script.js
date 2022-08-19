const txts = document.querySelector(".animate-text").children,
    txtsLen = txts.length;
let index = 0;
const textInTimer = 4000,
    textOutTimer = 4800;

function animateText() {
    for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
    }
    txts[index].classList.add("text-in");

    setTimeout(function() {
        txts[index].classList.add("text-out");
    }, textOutTimer)

    setTimeout(function() {

        if (index == txtsLen - 1) {
            index = 0;
        } else {
            index++;
        }
        animateText();
    }, textInTimer);
}

window.onload = animateText;


/*==========Carousel============*/


$('#hospital-location').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


$('#specialists').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});


$('#patients').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


$('#latest').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});