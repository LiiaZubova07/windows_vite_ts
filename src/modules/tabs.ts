interface ITabs {
  headerSelector: string;
  tabSelector: string;
  contentSelector: string;
  activeClass: string;
  display?: string;
}

const tabs = ({
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = 'block',
}: ITabs) => {
  const header: HTMLElement = document.querySelector(headerSelector) as HTMLElement;
  const tabs: NodeListOf<HTMLElement> = document.querySelectorAll(tabSelector) as NodeListOf<HTMLElement>;
  const contents: NodeListOf<HTMLElement> = document.querySelectorAll(contentSelector) as NodeListOf<HTMLElement>;

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
    contents[i].style.display = display;
    tabs[i].classList.add(activeClass);
  };

  const handleAction = (e:any) => {
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
  };

  hideTabContent();
  showTabContent();

  //отследить какой таб кликнул пользователь
  header.addEventListener('click', (e) => {
    handleAction(e);
  });

  //чтоб по энтеру нажималась статья
  header.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleAction(e);
    }
  });
};

export default tabs;
