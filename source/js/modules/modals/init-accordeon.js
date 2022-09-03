const accordeonActiveted = document.querySelector('.main-about__accordeon--is-active');
const accordeonDisabled = document.querySelector('.main-about__accordeon--is-disabled');

const initAccordeon = () => {
    document.querySelectorAll('.main-about__trigger').forEach((item) =>
    item.addEventListener('click', () => {
      const parent = item.parentNode;
      document
        .querySelectorAll('.main-about__accordeon')
        .forEach((child) => child.classList.remove(accordeonDisabled))
        parent.classList.remove(accordeonDisabled)
        parent.classList.add(accordeonActiveted);
    })
  )
}

export {initAccordeon};
