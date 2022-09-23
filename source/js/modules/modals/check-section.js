const hideSection = document.querySelector(".main-about__description");
const trigger = hideSection.querySelector(".main-about__trigger");
const hiddenElement = hideSection.querySelector("[data-hide]");
const trimmedElement = hideSection.querySelector("[data-trim]");
const savedTrimedText = trimmedElement.innerText;

checkSection();

export function checkSection() {
  updateSectionState(checkIsExpanded());
}

window.addEventListener("resize", checkSection);

trigger.addEventListener("click", () => {
  const isWillBeExpanded = !checkIsExpanded();
  trigger.innerText = isWillBeExpanded ? "Свернуть" : "Подробнее";
  trigger.ariaExpanded = String(isWillBeExpanded);

  updateSectionState(isWillBeExpanded);
});

function updateSectionState(isWillBeExpanded = false) {
  return isWillBeExpanded ? exapandSection() : collapseSection();
}

function collapseSection() {
  hiddenElement.hidden = true;
  trimText();
}

function exapandSection() {
  hiddenElement.hidden = false;
  trimmedElement.innerText = savedTrimedText;
}

function trimText() {
  const { trim, trimOn } = trimmedElement.dataset;

  if (trimOn === "mobile") {
    const isMobile = window.innerWidth < 768;
    trimmedElement.innerText = isMobile
      ? savedTrimedText.slice(0, Number(trim))
      : savedTrimedText;
  }
}

function checkIsExpanded() {
  return trigger.ariaExpanded === "true";
}
