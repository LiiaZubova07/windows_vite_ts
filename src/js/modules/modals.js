//first task
//чтобы экспортировать код, который здесь есть
const modals = () => {
<<<<<<< HEAD
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    //на несколько одинаковых элементов повесить одни и те же функции
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach(item => {
=======
  function bindModal(triggersSelector, modalSelector, closeSelector) {
    //на несколько одинаковых элементов повесить одни и те же функции
    const triggers = document.querySelectorAll(triggersSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    triggers.forEach((item) => {
>>>>>>> c6ee0741e80ab3f337ac95d82a7ae7c9f28c9abe
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        //модальное окно показывается на странице
<<<<<<< HEAD
        modal.style.display = "block";
=======
        modal.style.display = 'block';
>>>>>>> c6ee0741e80ab3f337ac95d82a7ae7c9f28c9abe
        //когда модальное окно открыто, то скролится только модальное окно
        document.body.style.overflow = 'hidden';
        //чтоб использовать класс
        // document.body.classList.add('modal-open');
      });
    });

    //модальное окно закрывается при нажатии на крестик
    close.addEventListener('click', () => {
<<<<<<< HEAD
			 modal.style.display = 'none';
			 document.body.style.overflow = '';
			 //чтоб использовать класс
			 // document.body.classList.remove('modal-open');
		 });
=======
      closeModal();
      //чтоб использовать класс
      // document.body.classList.remove('modal-open');
    });
>>>>>>> c6ee0741e80ab3f337ac95d82a7ae7c9f28c9abe

    //чтоб мод окно закрывалось при нажатии вне модального окна
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
<<<<<<< HEAD
        modal.style.display = 'none';
        document.body.style.overflow = '';
=======
        closeModal();
>>>>>>> c6ee0741e80ab3f337ac95d82a7ae7c9f28c9abe
        //чтоб использовать класс
        // document.body.classList.remove('modal-open');
      }
    });
<<<<<<< HEAD
  }

  function showModalByTime(selector, time){
	setTimeout(() => {
		document.querySelector(selector).style.display = 'block';
		document.body.style.overflow = 'hidden';
	}, time);
  }

//   const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
//     //модальное окно
//     modalEngineer = document.querySelector('.popup_engineer'),
//     //крестик, который внутри модального окна
//     modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');

  bindModal('.phone_link', '.popup', '.popup .popup_close');
//   showModalByTime('.popup', 60000);
=======

    //модальное окно закрывается при нажатии на escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
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

  bindModal(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );

  bindModal('.phone_link', '.popup', '.popup .popup_close');
  showModalByTime('.popup', 3000);
>>>>>>> c6ee0741e80ab3f337ac95d82a7ae7c9f28c9abe
};

export default modals;
