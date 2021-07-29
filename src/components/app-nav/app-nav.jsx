import Logo from "../logo/logo";

function AppNav() {
  return (
    <nav className="app-header__nav app-nav">
      <Logo/>
      <ul className="app-nav__list">
        <li className="app-nav__item">
          <a className="app-nav__link" href="#">
            Услуги
          </a>
        </li>
        <li className="app-nav__item">
          <a className="app-nav__link" href="#">
            Рассчитать кредит
          </a>
        </li>
        <li className="app-nav__item">
          <a className="app-nav__link app-nav__link--current" href="#">
            Конвертер валют
          </a>
        </li>
        <li className="app-nav__item">
          <a className="app-nav__link" href="#">
            Контакты
          </a>
        </li>
        <li className="app-nav__item">
          <a className="app-nav__link" href="#">
            Задать вопрос
          </a>
        </li>
      </ul>
      <a className="app-nav__log-in" href="#">
        Войти в Интернет-банк
      </a>
    </nav>
  );
}

export default AppNav;
