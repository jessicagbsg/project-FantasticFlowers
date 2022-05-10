import initAccordion from "./modules/accordion.js";
import initScrollAnimation from "./modules/scrollAnimation.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initOperation from "./modules/operation.js";
import initFetchNumbers from "./modules/fetchNumbers.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";
import SmoothScroll from "./modules/smoothScroll.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

initAccordion();
initScrollAnimation();

initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchNumbers();
initFetchBitcoin();
