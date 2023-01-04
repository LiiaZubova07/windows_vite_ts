const images = () => {
  //модальное окно
  const imgPopup = document.createElement('div');
  const workSection = document.querySelector('.works');
  const bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  //чтоб окно появилось на странице
  workSection.appendChild(imgPopup);

  //чтоб картинка посередине
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  //добавить изображение в окно
  imgPopup.appendChild(bigImage);

  //обработчик событий на всю секцию
  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;
    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    //когда кликаем на подложку, картинка закрывается
    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
    }
  });
};

export default images;
