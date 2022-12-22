//first task
//чтобы экспортировать код, который здесь есть
const modals = () => {
  function bindModal(trigger, modal, close) {
    trigger.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }

      //модальное окно показывается на странице
      modal.style.display = 'block';
      //когда модальное окно открыто, то скролится только модальное окно
      // document.body.style.overflow = 'hidden';
		//чтоб использовать класс
		document.body.classList.add('modal-open');
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      // document.body.style.overflow = '';
				//чтоб использовать класс
				document.body.classList.remove('modal-open');
    });

    //чтоб мод окно закрывалось при нажатии вне модального окна
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      //   document.body.style.overflow = '';
				//чтоб использовать класс
				document.body.classList.remove('modal-open');
      };
    });
  }

  const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
    //модальное окно
    modalEngineer = document.querySelector('.popup_engineer'),
    //крестик, который внутри модального окна
    modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

  bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);
};

export default modals;
