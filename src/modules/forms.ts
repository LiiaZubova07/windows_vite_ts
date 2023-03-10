import checkNumInputs from './checkNumInputs';

const forms = (state: any) => {
  const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('form') as NodeListOf<HTMLFormElement>;
  const inputs:NodeListOf<HTMLInputElement> = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>;

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка...',
    succes: 'Спасибо! Мы с Вами скоро свяжемся',
    failure: 'Что-то пошло не так',
  };

  //запрос на сервер
  const postData = async (url: string, data: FormData) => {
    (document.querySelector('.status') as HTMLElement).textContent = message.loading;
    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await res.text();
  };

  //функция очищает все инпуты
  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
  };

  //перебор форм
  forms.forEach((form) => {
    form.addEventListener('submit', (e:Event) => {
      e.preventDefault();

      //форма для сообщений выше
      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      //сбор данных из формы
      const formData = new FormData(form);
      if (form.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      //formData отправляется на сервер
      postData('.src/assets/server.php', formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.succes;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;
