import './slider.js';
import modals from './modules/modals.js';
import tabs from './modules/tabs.js';
import forms from './modules/forms.js';

const tabsGlazing = () => {
  '.glazing_slider', '.glazing_block', '.glazing_content', 'active';
};

const tabsDecoration = () => {
  '.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click';
};

// const TabsGlazing = ('.glazing_slider', '.glazing_block', '.glazing_content', 'active') => {};

//выполняется тогда, когда ДОМ-структура готова
window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  modals();
  //   tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabsGlazing();
  //   tabs(
  //     '.decoration_slider',
  //     '.no_click',
  //     '.decoration_content > div > div',
  //     'after_click'
  //   );
  tabsDecoration();
  forms();
});
