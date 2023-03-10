import './modules/slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import images from './modules/images';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState.js';
import timer from './modules/timer';
import {IState} from './modules/changeModalState';

//выполняется тогда, когда ДОМ-структура готова
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  //состояние окна, где пользователь что-то выбирает
  const modalState:IState = { form: 0, height: 0, width: 0, type: '', profile: '' };

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
    display: 'inline-block',
  });

  forms(modalState);

  timer('.container1', deadline);

  images();
});
