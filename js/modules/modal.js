export default function initModal() {
  const activeClass = "active";
  const buttonOpen = document.querySelector('[data-modal="open"]');
  const buttonClose = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle(activeClass);
  }

  function clickOutside(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (buttonOpen && buttonClose && containerModal) {
    buttonOpen.addEventListener("click", toggleModal);
    buttonClose.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOutside);
  }
}
