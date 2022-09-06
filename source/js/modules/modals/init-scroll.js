export default function initScroll() {
  const navLink = document.querySelectorAll('.main-introduction__btn');

  navLink.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const elementId = e.currentTarget.attributes.href.nodeValue;
      document.querySelector(elementId).scrollIntoView({behavior: 'smooth'});
    });
  });
}
