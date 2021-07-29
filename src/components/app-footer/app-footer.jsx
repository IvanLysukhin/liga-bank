import Logo from "../logo/logo";

function AppFooter() {
  return (
    <ul className="app-footer">
      <li className="app-footer__item">
        <Logo/>
        <p className="app-footer__license-text">
          150015, г. Москва, ул. Московская, д. 32<br/>
          Генеральная лицензия Банка России №1050<br/>
          Ⓒ Лига Банк, 2019
        </p>
      </li>
      <li className="app-footer__item">
        <ul className="app-footer__services-list">
          <li className="app-footer__services-item">
            <a className="app-footer__services-link" href="#">Услуги</a>
          </li>
          <li className="app-footer__services-item">
            <a className="app-footer__services-link" href="#">Рассчитать кредит</a>
          </li>
          <li className="app-footer__services-item">
            <a className="app-footer__services-link" href="#">Контакты</a>
          </li>
          <li className="app-footer__services-item">
            <a className="app-footer__services-link" href="#">Задать вопрос</a>
          </li>
        </ul>
      </li>
      <li className="app-footer__item">
        <a className="app-footer__contact-link app-footer__contact-link--message" href="tel:*0904">*0904</a>
        <p className="app-footer__message-text">Бесплатно для абонентов<br/> МТС, Билайн, Мегафон, Теле2</p>
      </li>
      <li className="app-footer__item">
        <a className="app-footer__contact-link app-footer__contact-link--phone" href="tel:+78001112233">8 800 111 22 33</a>
        <p className="app-footer__message-text">Бесплатно для абонентов<br/> МТС, Билайн, Мегафон, Теле2</p>
      </li>
      <li className="app-footer__item">
        <ul className="app-footer__social-list social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="https://www.facebook.com">Facebook</a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://www.instagram.com">Instagram</a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://twitter.com">Twitter</a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://vk.com">Vkontakte</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default AppFooter;
