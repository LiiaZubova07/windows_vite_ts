//first task
//чтобы экспортировать код, который здесь есть
const modals = () => {
  function bindModal({ triggersSelector, modalSelector, closeSelector, closeClickOverlay = true}) {
    //на несколько одинаковых элементов повесить одни и те же функции
    const triggers = document.querySelectorAll(triggersSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    triggers.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((window) => {
          window.style.display = 'none';
        });
        //модальное окно показывается на странице
        modal.style.display = 'block';
        //когда модальное окно открыто, то скролится только модальное окно
        document.body.style.overflow = 'hidden';
        //чтоб использовать класс
        // document.body.classList.add('modal-open');
      });
    });

    //модальное окно закрывается при нажатии на крестик
    close.addEventListener('click', () => {
      windows.forEach((window) => {
        window.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      //чтоб использовать класс
      // document.body.classList.remove('modal-open');
    });

    //чтоб мод окно закрывалось при нажатии вне модального окна
    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((window) => {
          window.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        //чтоб использовать класс
        // document.body.classList.remove('modal-open');
      }
    });

    //модальное окно закрывается при нажатии на escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  };

  //   const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
  //     //модальное окно
  //     modalEngineer = document.querySelector('.popup_engineer'),
  //     //крестик, который внутри модального окна
  //     modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

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
