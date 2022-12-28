import './slider.js';
import modals from './modules/modals.js';
import tabs from './modules/tabs.js';
import forms from './modules/forms.js';
import changeModalState from './modules/changeModalState.js';
import timer from './modules/timer.js';
import images from './modules/images.js';

//выполняется тогда, когда ДОМ-структура готова
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const modalState = {};
  const deadline = '2023-02-01';

  changeModalState(modalState);
  modals();

  tabs({
    headerSelector: '.glazing_slider',
    tabSelector: '.glazing_block',
    contentSelector: '.glazing_content',
    activeClass: 'active',
  });

  tabs({
    headerSelector: '.decoration_slider',
    tabSelector: '.no_click',
    contentSelector: '.decoration_content > div > div',
    activeClass: 'after_click',
  });

  forms(modalState);

  timer('.container1', deadline);

  images();
});
