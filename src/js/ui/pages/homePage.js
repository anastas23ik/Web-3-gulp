import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initExpectations from "./../components/initExpectations.js";
import initPossibilities from "../components/initPossibilities.js";
import initBlog from "../components/initBlog.js";
import initFooter from "../components/initFooter.js";
import initBurger from "./../components/initBurger.js";

const initHomePage = (element) => {
  const template = `
  <div class="wrapper">
    <div class="page">
      <section class="section header"></section>
      <section class="section hero_section"></section>
      <section class="section brands_section"></section>
      <section class="section what_is_chatgpt_section"></section>
      <section class="section future_here"></section>
      <section class="section exceeding_all_expectations"></section>
      <section class="section limitless_possibilities"></section>
      <section class="section blog"></section>
      <section class="section footer__end"></section>
    </div>

    <div  class="footer_line">
      <p>© 2023 GPT-3. Все права защищены.</p>
    </div>
  </div>
  `;

  element.insertAdjacentHTML("beforeend", template);
};

const rootNode = document.querySelector("#root");
// const rootNode2 = document.querySelector("#root2");

const homePage = () => {
  // инициализация элементов Главной страницы
  initHomePage(rootNode);
  // initHomePage(rootNode2);

  // инициализация шапки страницы с мок датой
  initHeader(rootNode);
  // initHeader(rootNode2);

  // инициализация хиро раздела
  initHero(rootNode);
  // initHero(rootNode2);

  // инициализация хиро раздела
  initBrands();

  // инициализация хиро раздела
  initWhatIsGpt();

  // инициализация раздела "Будущее наступило" с мок датой
  initFutureHere();

  initExpectations();

  initPossibilities();

  initBlog();

  initFooter();

  // инициализация бургера для адаптивного меню
  initBurger();
};

export default homePage;
