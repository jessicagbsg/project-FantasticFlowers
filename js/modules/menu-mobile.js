import outsideClick from "./outsideClick.js";

export default function iniMenuMobile() {
  const activeClass = "active";
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touch"];

  function openMenu() {
    menuList.classList.add(activeClass);
    menuBtn.classList.add(activeClass);
    outsideClick(menuList, events, () => {
      menuList.classList.remove(activeClass);
      menuBtn.classList.remove(activeClass);
    });
  }

  if (menuBtn) {
    events.forEach((event) => {
      menuBtn.addEventListener(event, openMenu);
    });
  }
}
