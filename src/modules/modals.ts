 //first task
//чтобы экспортировать код, который здесь есть
interface IBindModals {
  triggersSelector: string;
  modalSelector: string;
  closeSelector: string;
  closeClickOverlay?: boolean;
}

const modals = () => {
  function bindModal({
    triggersSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true,
  }: IBindModals) {
    //на несколько одинаковых элементов повесить одни и те же функции
    const triggers = document.querySelectorAll(triggersSelector);
    const modal: HTMLElement = document.querySelector(modalSelector) as HTMLElement;
    const close: HTMLElement = document.querySelector(closeSelector) as HTMLElement;
    const windows: NodeListOf<HTMLElement> = document.querySelectorAll('[data-modal]') as NodeListOf<HTMLElement>;
    const scroll = calcScroll();

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    //---------------------------------------------

    triggers.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((window: HTMLElement) => {
          window.style.display = 'none';
        });
        //модальное окно показывается на странице
        modal.style.display = 'block';
        //когда модальное окно открыто, то скролится только модальное окно
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        //чтоб использовать класс
        // document.body.classList.add('modal-open');
        const input = modal.querySelector('input');
        if (input) input.focus();
      });
    });

    //модальное окно закрывается при нажатии на крестик
    close.addEventListener('click', () => {
      windows.forEach((window) => {
        window.style.display = 'none';
      });
      closeModal();
      document.body.style.marginRight = `0`;
      //чтоб использовать класс
      // document.body.classList.remove('modal-open');
    });

    //чтоб мод окно закрывалось при нажатии вне модального окна
    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((window) => {
          window.style.display = 'none';
        });
        closeModal();
        document.body.style.marginRight = `0px`;
        //чтоб использовать класс
        // document.body.classList.remove('modal-open');
      }
    });

    //модальное окно закрывается при нажатии на escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.body.style.marginRight = `0px`;
      }
    });
  }

//   const showModalByTime = (selector:string, time:number) => {
//     setTimeout(() => {
//       (document.querySelector(selector) as HTMLElement).style.display = 'block';
//       document.body.style.overflow = 'hidden';
//     }, time);
//   };

  function calcScroll() {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    //вычислить размер прокрутки
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal({
    triggersSelector: '.popup_engineer_btn',
    modalSelector: '.popup_engineer',
    closeSelector: '.popup_engineer .popup_close',
  });

  bindModal({
    triggersSelector: '.phone_link',
    modalSelector: '.popup',
    closeSelector: '.popup .popup_close',
  });
  bindModal({
    triggersSelector: '.popup_calc_btn',
    modalSelector: '.popup_calc',
    closeSelector: '.popup_calc_close',
  });
  //   showModalByTime('.popup', 3000);

  bindModal({
    triggersSelector: '.popup_calc_button',
    modalSelector: '.popup_calc_profile',
    closeSelector: '.popup_calc_profile_close',
    closeClickOverlay: false,
  });

  bindModal({
    triggersSelector: '.popup_calc_profile_button',
    modalSelector: '.popup_calc_end',
    closeSelector: '.popup_calc_end_close',
    closeClickOverlay: false,
  });
};

export default modals;
