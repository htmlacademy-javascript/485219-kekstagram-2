const effectSliderElement = document.querySelector('.effect-level__slider');
const effectsListElement = document.querySelector('.effects__list');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const photoPreviewElement = document.querySelector('.img-upload__preview');

let isVisibleSlider;

const effectsConfig = {
  chrome: {
    filter: (value) => `grayscale(${value})`,
    start: [1],
    step: 0.1,
    connect: [true, false],
    range: {
      'min': [0],
      'max': [1]
    }
  },
  sepia: {
    filter: (value) => `sepia(${value})`,
    start: [1],
    step: 0.1,
    connect: [true, false],
    range: {
      'min': [0],
      'max': [1]
    }
  },
  marvin: {
    filter: (value) => `invert(${value}%)`,
    start: [100],
    step: 1,
    connect: [true, false],
    range: {
      'min': [0],
      'max': [100]
    }
  },
  phobos: {
    filter: (value) => `blur(${value}px)`,
    start: [3],
    step: 0.1,
    connect: [true, false],
    range: {
      'min': [0],
      'max': [3]
    }
  },
  heat: {
    filter: (value) => `brightness(${value})`,
    start: [3],
    step: 0.1,
    connect: [true, false],
    range: {
      'min': [1],
      'max': [3]
    }
  }
};

hideSlider();

effectsListElement.addEventListener('click', (evt) => {
  const labelElement = evt.target.closest('label');
  if (!labelElement) {
    return;
  }

  const effect = labelElement.getAttribute('for').replace('effect-', '');

  if (effect === 'none') {
    hideSlider();
    photoPreviewElement.style.removeProperty('filter');
    return;
  }

  if (!effectSliderElement.noUiSlider) {
    noUiSlider.create(effectSliderElement, effectsConfig[effect]);
  }

  effectSliderElement.noUiSlider.off();

  if (!isVisibleSlider) {
    showSlider();
  }

  effectSliderElement.noUiSlider.updateOptions(effectsConfig[effect]);
  effectSliderElement.noUiSlider.set(effectsConfig[effect].range.max);

  effectSliderElement.noUiSlider.on('update', () => {
    const value = effectSliderElement.noUiSlider.get(true).toFixed(1);
    photoPreviewElement.style.setProperty('filter', effectsConfig[effect].filter(value));
  });
});

function hideSlider() {
  sliderContainerElement.classList.add('visually-hidden');
  isVisibleSlider = false;
}

function showSlider() {
  sliderContainerElement.classList.remove('visually-hidden');
  isVisibleSlider = true;
}


