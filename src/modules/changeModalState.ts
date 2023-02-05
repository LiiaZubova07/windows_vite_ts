import checkNumInputs from './checkNumInputs';

export interface IState{
	form: number;
	height: number;
	width: number;
	type: string;
	profile: string;
}

const changeModalState = (state:IState) => {
  const windowForms = document.querySelectorAll('.balcon_icons_img') as NodeListOf<HTMLInputElement>;
  const windowWidths = document.querySelectorAll('#width') as NodeListOf<HTMLInputElement>;
  const windowHeights = document.querySelectorAll('#height') as NodeListOf<HTMLInputElement>;
  const windowTypes = document.querySelectorAll('#view_type') as NodeListOf<HTMLInputElement>;
  const windowProfiles = document.querySelectorAll('.radioBtn') as NodeListOf<HTMLInputElement>;


  checkNumInputs('#width');
  checkNumInputs('#height');

  //в какой элемент кликнул пользователь
  const bindActionToElems = (event: string, elems: NodeListOf<HTMLInputElement>, prop: keyof IState) => {
    //когда кликаем на изображение, будет подписана форма, которую выбрал пользователь
    elems.forEach((elem: HTMLInputElement, i: number) => {
      elem.addEventListener(event, () => {
        switch (elem.nodeName) {
          case 'SPAN': state[prop as 'form'] = i;
            break;
          case 'INPUT': state[prop as 'type'] = elem.value;
            break;
          case 'SELECT': state[prop as 'profile'] = elem.value;
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
