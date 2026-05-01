var activeSlide = 0;
var autoPlayTimer;

var slides      = document.getElementsByClassName('featured-slide');
var dotsWrapper = document.getElementById('slider-dots');
var btnPrev     = document.getElementById('prev-btn');
var btnNext     = document.getElementById('next-btn');

var dots = dotsWrapper.getElementsByClassName('slider-dot');


function goToSlide(index) {

    activeSlide = index;

    for (var i = 0; i < slides.length; i++) {
        if (i === activeSlide) {
            slides[i].className = 'featured-slide active';
        } else {
            slides[i].className = 'featured-slide';
        }
    }

    for (var j = 0; j < dots.length; j++) {
        if (j === activeSlide) {
            dots[j].className = 'slider-dot active';
        } else {
            dots[j].className = 'slider-dot';
        }
    }

    resetAutoPlay();
}


function nextSlide() {
    activeSlide = (activeSlide + 1) % slides.length;
    goToSlide(activeSlide);
}

function prevSlide() {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    goToSlide(activeSlide);
}


function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(nextSlide, 5000);
}


btnPrev.addEventListener('click', function() {
    prevSlide();
});

btnNext.addEventListener('click', function() {
    nextSlide();
});

for (var k = 0; k < dots.length; k++) {
    dots[k].onclick = function() {
        var index = parseInt(this.getAttribute('data-index'));
        goToSlide(index);
    };
}


resetAutoPlay();
goToSlide(0);
