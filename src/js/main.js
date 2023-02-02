<<<<<<< HEAD
import './slider.js';
import modals from './modules/modals.js';
import tabs from './modules/tabs.js';
import forms from './modules/forms.js';
import changeModalState from './modules/changeModalState.js';
import timer from './modules/timer.js';
import images from './modules/images.js';
=======
import '/src/js/slider.js';
import modals from '/src/js/modules/modals.js';
import tabs from '/src/js/modules/tabs.js';
import forms from '/src/js/modules/forms.js';
import changeModalState from '/src/js/modules/changeModalState.js';
>>>>>>> a0ab1dc6c356f9e89ec46853efd0c49452886e0c

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

  tabs({
    headerSelector: '.balcon_icons',
    tabSelector: '.balcon_icons_img',
    contentSelector: '.big_img > img',
    activeClass: 'do_image_more',
	 display: 'inline-block'
  });

  forms(modalState);

  timer('.container1', deadline);

  images();

});
