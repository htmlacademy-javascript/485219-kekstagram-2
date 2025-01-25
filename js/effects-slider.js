const effectSliderElement = document.querySelector('.effect-level__slider');
const effectsListElememt = document.querySelector('.effects__list');

noUiSlider.create(effectSliderElement, {
  start: [100],
  range: {
    'min': [0],
    'max': [100]
  }
});

effectsListElememt.addEventListener('click', (evt) => {
  const labelElement = evt.target.closest('label');

  if (labelElement) {
    const effect = labelElement.getAttribute('for');
    console.log(effect);
  }
});
