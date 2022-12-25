const changeModalState = () => {
  const windowForms = document.querySelectorAll('.balcon_icons_img');
  const windowWidths = document.querySelector('#width');
  const windowHeights = document.querySelector('#height');
  const windowTypes = document.querySelector('#view_type');
  const windowProfiles = document.querySelectorAll('.checkbox');

  //когда кликаем на изображение, будет подписана форма, которую выбрал пользователь
  windowForms.forEach((windowForm, i) => {
    windowForm.addEventListener('click', () => {
      state.form = i;
    });
  });
};

export default changeModalState;
