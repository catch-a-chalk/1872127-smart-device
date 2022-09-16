import IMask from 'imask';

export function initMask() {
  const phoneInputs = document.querySelectorAll('.phone');
  phoneInputs.forEach(
    (input) =>
      new IMask(input, {
        mask: '+{7}(000)000-00-00',
      })
  );
}
