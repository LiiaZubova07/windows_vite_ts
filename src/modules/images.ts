const images = () => {
  //модальное окно
  const imgPopup: HTMLElement = document.createElement('div') as HTMLElement;
  const workSection: HTMLElement = document.querySelector('.works') as HTMLElement;
  const bigImage: HTMLElement = document.createElement('img') as HTMLElement;

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
  workSection.addEventListener('click', (e:Event) => {
    e.preventDefault();

    const target:HTMLElement = e.target as HTMLElement;
    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path:string = (target.parentNode as HTMLElement).getAttribute('href') as string;
      bigImage.setAttribute('src', path);
    }

    //когда кликаем на подложку, картинка закрывается
    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
    }
  });
};

export default images;
