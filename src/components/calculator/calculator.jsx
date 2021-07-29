function Calculator() {
  return (
    <section className="app__section calculator">
      <div className="calculator__wrapper">
        <h2 className="calculator__title">Конвертер валют</h2>
        <form className="calculator__form" action="#">
          <ul className="calculator__list">
            <li className="calculator__item">
              <label className="calculator__label" htmlFor="number">У меня есть</label>
              <input className="calculator__input" type="text" id="number" name="number"/>
              <label className="visually-hidden" htmlFor="currency">currency</label>
              <select name="currency" id="currency" defaultValue="RUB">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBR">GBR</option>
                <option value="CNY">CNY</option>
              </select>
            </li>
            <li className="calculator__item">
              <label className="calculator__label" htmlFor="number">Хочу приобрести</label>
              <input className="calculator__input" type="text" id="number" name="number"/>
              <label className="visually-hidden" htmlFor="currency">currency</label>
              <select name="currency" id="currency" defaultValue="USD">
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
              <label htmlFor="time">Выберите дату</label>
              <input type="text" id="time" name="time"/>
            </div>
            <button className="calculator__save-btn">Сохранить результат</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Calculator;
