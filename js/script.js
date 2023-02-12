import ScrollSuave from "./modules/scroll-suave";
import Accordion from "./modules/accordion";
import initAnimacaoScroll from "./modules/scroll-animacao";
import TabNav from "./modules/tabnav";
import Modal from "./modules/modal";
import Tooltip from "./modules/tooltip";
import initDropdownMenu from "./modules/dropdown-menu";
import initMenuMobile from "./modules/menu-mobile";
import initFuncionamento from "./modules/funcionamento";
import initFetchAnimais from "./modules/fetch-animais";
import initFetchBitcoin from "./modules/fetch-bitcoin";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
