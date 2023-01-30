import '/src/js/slider.js';
import modals from '/src/js/modules/modals.js';
import tabs from '/src/js/modules/tabs.js';
import forms from '/src/js/modules/forms.js';
import changeModalState from '/src/js/modules/changeModalState.js';

//выполняется тогда, когда ДОМ-структура готова
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const modalState = {};

  changeModalState();
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

  forms();
});
