import checkNumInputs from './checkNumInputs';

const changeModalState = () => {
  const windowForms = document.querySelectorAll('.balcon_icons_img');
  const windowWidths = document.querySelector('#width');
  const windowHeights = document.querySelector('#height');
  const windowTypes = document.querySelector('#view_type');
  const windowProfiles = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionToElems = (event, elems, prop) => {
    //когда кликаем на изображение, будет подписана форма, которую выбрал пользователь
    elems.forEach((elem, i) => {
      elem.addEventListener(event, () => {
        state[prop] = i;
      });
    });
  };

  bindActionToElems('click', windowForms, 'form');
};

export default changeModalState;
