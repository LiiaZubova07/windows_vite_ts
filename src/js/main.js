import './slider.js';
import modals from './modules/modals.js';
import tabs from './modules/tabs.js';
import forms from './modules/forms.js';
import changeModalState from './modules/changeModalState.js';

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

  tabs({
    headerSelector: '.balcon_icons',
    tabSelector: '.balcon_icons_img',
    contentSelector: '.big_img > img',
    activeClass: 'do_image_more',
	 display: 'inline-block'
  });

  forms();
});
