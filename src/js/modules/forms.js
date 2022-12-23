const forms = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');

  const message = {
    loading: 'Загрузка...',
    succes: 'Спасибо! Мы с Вами скоро свяжемся',
    failure: 'Что-то пошло не так',
  };

  //запрос на сервер
  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data,
    });

	  return await res.text();
  };

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      //форма для сообщений выше
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      //сбор данных из формы
      const formData = new FormData(form);

      //formData отправляется на сервер
    });
  });
};

export default forms;
