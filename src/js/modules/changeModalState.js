import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
  const windowForms = document.querySelectorAll('.balcon_icons_img');
  const windowWidths = document.querySelectorAll('#width');
  const windowHeights = document.querySelectorAll('#height');
  const windowTypes = document.querySelectorAll('#view_type');
  const windowProfiles = document.querySelectorAll('.radio');

  checkNumInputs('#width');
  checkNumInputs('#height');

  //в какой элемент кликнул пользователь
  const bindActionToElems = (event, elems, prop) => {
    //когда кликаем на изображение, будет подписана форма, которую выбрал пользователь
    elems.forEach((elem, i) => {
      elem.addEventListener(event, () => {
        switch (elem.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
          //  case 'INPUT':
          //    if (elem.getAttribute('type') === 'checkbox') {
          //      i === 0 ? (state[prop] = 'Холодное') : (state[prop] = 'Тёплое');
          //      elems.forEach((box, j) => {
          //        box.checked = false;
          //        if (i == j) {
          //          box.checked = true;
          //        }
          //      });
          //    } else {
          //      state[prop] = elem.value;
          //    }
          //    break;
          case 'INPUT':
            state[prop] = elem.value;
            break;

          case 'SELECT':
            state[prop] = elem.value;
            break;
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
