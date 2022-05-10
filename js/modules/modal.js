export default class Modal {
  constructor(buttonOpen, buttonClose, containerModal) {
    this.activeClass = "active";
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
  }

  // opens or closes modal
  toggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }

  // adds toggle event to modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // closes modal when there's a click outside
  clickOutside(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  // add events to modal elemtns
  addModalEvents() {
    this.buttonOpen.addEventListener("click", this.eventToggleModal);
    this.buttonClose.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutside);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvents();
    }
  }
}
