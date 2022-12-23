const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    contents.forEach((content) => {
      content.style.display = 'none';
    });

    //при клике на таб, меняется класс активности у этого таба
    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  };

  //отследит на какой по счёту таб нажал пользователь
  const showTabContent = (i = 0) => {
    contents[i].style.display = 'block';
    tabs[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  //отследить какой таб кликнул пользователь
  header.addEventListener('click', (e) => {
    const target = e.target;
    //точно ли пользователь кликнул туда, куда надо
    //регулярное выражение и то, на что меняем это выражение
    //.class => class
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
    ) {
      tabs.forEach((tab, i) => {
        if (target == tab || target.parentNode == tab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

export default tabs;
