// takes charge of how frequently our function is running to improve the performance
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlideTime(event) {
    sliderImages.forEach(sliderImage => {

        const slideIn = (window.scrollY + window.innerHeight) - sliderImage.height / 2; // we want the image to slide in when 50% of it is visible to us.
        const imageExit = sliderImage.offsetTop + sliderImage.height;
        const isItTimeToSlideIn = slideIn > sliderImage.offsetTop;
        const ImageBottomNotPassed = imageExit > window.scrollY;
        if (isItTimeToSlideIn && ImageBottomNotPassed) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlideTime));