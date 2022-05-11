import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(menuBtn, menuList, events) {
    this.activeClass = "active";
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);

    if (events === undefined) {
      this.events = ["touch", "click"];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuBtn.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuBtn.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuBtn.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuBtn && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
