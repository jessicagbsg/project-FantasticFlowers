import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const activeClass = "active";
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add(activeClass);
    outsideClick(this, ["touch", "click"], () => {
      this.classList.remove(activeClass);
    });
  }

  dropdownMenu.forEach((menu) => {
    ["touch", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
