const accordions = document.querySelectorAll(".footer__accordion");
const accordionTriggers = document.querySelectorAll(".footer__trigger");

const mobileQuery = "(max-width: 767px)";
const mobileMedia = window.matchMedia(mobileQuery);

/* Проверяем мобильный квери */

updateMatches();
mobileMedia.addEventListener("change", updateMatches);

function updateMatches() {
  if (mobileMedia.matches) {
    accordions.forEach((accordion) => {
      /* По умолчанию открыты, но закрывает на мобильных
       */
      accordion.open = false;
      /* Востанавливем функционал, если он был отменён */
      const summary = accordion.firstElementChild;
      summary.removeEventListener("click", cancelEvent);
    });
  } else {
    accordions.forEach((accordion) => {
      /* По умолчанию открыты, но закрывает на мобильных
       */
      accordion.open = true;

      const summary = accordion.firstElementChild;
      summary.addEventListener("click", cancelEvent);
    });
  }
}

function cancelEvent(evt) {
  evt.preventDefault();
}

export {updateMatches};
