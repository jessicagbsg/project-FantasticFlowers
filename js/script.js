import SmoothScroll from "./modules/smoothScroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabNav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchNumbers from "./modules/fetchNumbers.js";
import initDropdownMenu from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initOperation from "./modules/operation.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import initScrollAnimation from "./modules/scrollAnimation.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchNumbers("../../flowersAPI.json", ".numbers-grid");

initScrollAnimation();
initDropdownMenu();
initMenuMobile();
initOperation();

fetchBitcoin("https://blockchain.info/ticker", ".btc-price");
