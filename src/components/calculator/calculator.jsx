function Calculator() {
  return (
    <section className="app__section calculator">
      <div className="calculator__wrapper">
        <h2 className="calculator__title">Конвертер валют</h2>
        <form className="calculator__form" action="#">
          <ul className="calculator__list">
            <li className="calculator__item">
              <label className="calculator__label" htmlFor="number">У меня есть</label>
              <input className="calculator__input" type="text" id="number" name="number" defaultValue="1000"/>
              <label className="visually-hidden" htmlFor="currency">currency</label>
              <select className="calculator__input calculator__input--currency" name="currency" id="currency" defaultValue="RUB">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBR">GBR</option>
                <option value="CNY">CNY</option>
              </select>
            </li>
            <li className="calculator__item">
              <label className="calculator__label" htmlFor="number">Хочу приобрести</label>
              <input className="calculator__input" type="text" id="number" name="number" defaultValue="13,1234"/>
              <label className="visually-hidden" htmlFor="currency">currency</label>
              <select className="calculator__input calculator__input--currency" name="currency" id="currency" defaultValue="USD">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBR">GBR</option>
                <option value="CNY">CNY</option>
              </select>
            </li>
          </ul>
          <div className="calculator__submit-box">
            <div className="calculator__calendar">
              <label className="visually-hidden" htmlFor="time">Выберите дату</label>
              <input className="calculator__input calculator__input--calendar" type="text" id="time" name="time" defaultValue="1.12.2020"/>
            </div>
            <button className="calculator__save-btn">Сохранить результат</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Calculator;
