import checkNumInputs from './checkNumInputs';

const changeModalState = (state: object) => {
  const windowForms: NodeListOf<Element> = document.querySelectorAll(
    '.balcon_icons_img'
  ) as NodeListOf<Element>;
  const windowWidths: NodeListOf<Element> = document.querySelectorAll(
    '#width'
  ) as NodeListOf<Element>;
  const windowHeights: NodeListOf<Element> = document.querySelectorAll(
    '#height'
  ) as NodeListOf<Element>;
  const windowTypes: NodeListOf<Element> = document.querySelectorAll(
    '#view_type'
  ) as NodeListOf<Element>;
  const windowProfiles: NodeListOf<Element> = document.querySelectorAll(
    '.radioBtn'
  ) as NodeListOf<Element>;

  checkNumInputs('#width');
  checkNumInputs('#height');

  //в какой элемент кликнул пользователь
  const bindActionToElems = (event: string, elems: NodeListOf<Element>, prop: string) => {
    //когда кликаем на изображение, будет подписана форма, которую выбрал пользователь
    elems.forEach((elem: any, i: number) => {
      elem.addEventListener(event, () => {
        switch (elem.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
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
