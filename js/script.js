import SmoothScroll from "./modules/smoothScroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabNav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchNumbers from "./modules/fetchNumbers.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import ScrollAnimation from "./modules/scrollAnimation.js";
import DropdownMenu from "./modules/dropdownMenu.js";
import MenuMobile from "./modules/menuMobile.js";
import Operation from "./modules/operation.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-animation="accordion"] dt');
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

const scrollAnimation = new ScrollAnimation('[data-animation="scroll"]');
scrollAnimation.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const operation = new Operation("[data-week]", "open");
operation.init();

fetchNumbers("./flowersAPI.json", ".numbers-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-price");
