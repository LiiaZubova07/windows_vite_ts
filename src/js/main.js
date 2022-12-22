import './slider';
<<<<<<< HEAD
import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs(
    '.decoration_slider',
    '.no_click',
    '.decoration_content > div > div',
    'after_click'
  );
=======
import modals from './modules/modals.js';

//выполняется тогда, когда ДОМ-структура готова
window.addEventListener('DOMContentLoaded', () => {
  modals();
>>>>>>> c6ee0741e80ab3f337ac95d82a7ae7c9f28c9abe
});
