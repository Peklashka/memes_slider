const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');


sliderItems.forEach(function (slide, index) {

    // скрываем слайды, кроме первого
    if (index !== 0) slide.classList.add('hidden');

    // добавляем индексы
    slide.dataset.index = index;

    //добавляем атрибут актив
    sliderItems[0].setAttribute('data-active', '');
    // клик по слайдам
    slide.addEventListener('click', function () {
        showNextSlide ('next');
    });
});

function showNextSlide (direction) {

    // скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // рассчитываем следующий индекс в зав-ти от направления
    let nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex -1;
    };

    // показываем следующий слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
};

btnNext.onclick = function() {
    showNextSlide('next');

};

btnPrev.onclick = function() {
    showNextSlide('prev');

};

