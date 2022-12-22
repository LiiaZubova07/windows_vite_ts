const tabs = (headerSelector, TabSelector, ContentSelector, activeClass) => {
  const headers = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    contents.forEach((content) => {
      content.style.display = 'none';
    });

	    //при клике на таб, меняется класс активности у этого таба
		 tabs.forEach(tab => {
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

};
 


export default tabs;
