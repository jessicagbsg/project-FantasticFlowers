import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdownMenu, events) {
    this.activeClass = "active";
    this.dropdownMenu = document.querySelectorAll(dropdownMenu);

    // defines touch and click as events arguments
    if (events === undefined) {
      this.events = ["touch", "click"];
    } else {
      this.events = events;
    }

    this.dropdownMenuActive = this.dropdownMenuActive.bind(this);
  }

  dropdownMenuActive(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // add events to dropdown menu
  addDropdownMenuEvent() {
    this.dropdownMenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.dropdownMenuActive);
      });
    });
  }

  init() {
    if (this.dropdownMenu.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
