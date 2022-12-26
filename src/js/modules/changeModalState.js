import checkNumInputs from './checkNumInputs';

const changeModalState = () => {
  const windowForms = document.querySelectorAll('.balcon_icons_img');
  const windowWidths = document.querySelectorAll('#width');
  const windowHeights = document.querySelectorAll('#height');
  const windowTypes = document.querySelectorAll('#view_type');
  const windowProfiles = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionToElems = (event, elems, prop) => {
    //когда кликаем на изображение, будет подписана форма, которую выбрал пользователь
    elems.forEach((elem, i) => {
      elem.addEventListener(event, () => {
        if (elems.length > 1) {
          state[prop];
        } else {
          state[prop] = elem.value;
        }
        console.log(state);
      });
    });
  };

  bindActionToElems('click', windowForms, 'form');
  bindActionToElems('input', windowHeights, 'height');
  bindActionToElems('input', windowWidths, 'width');
  bindActionToElems('change', windowTypes, 'type');
  bindActionToElems('change', windowProfiles, 'profile');

};

export default changeModalState;
