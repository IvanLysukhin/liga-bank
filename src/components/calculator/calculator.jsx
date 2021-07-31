import {useRef, useState, useEffect} from "react";
import {Currency} from "../../constants";
import {getCurrency} from "../../api";
import flatpickr from "flatpickr";
import dayjs from "dayjs";

function Calculator() {
  const [state, setState] = useState({
    have: '',
    want: '',
    haveCurrency: Currency.RUB,
    wantCurrency: Currency.USD,
    date: new Date().toLocaleDateString(),
  })
  const [currency, setCurrency] = useState({})

  useEffect(() => {
    getCurrency(state.haveCurrency, state.wantCurrency, setCurrency, setState, state, state.requestDate)
  }, [state.haveCurrency, state.wantCurrency, state.requestDate]);

  const haveInput = useRef();
  const wantInput = useRef();
  const timeInput = useRef();

  let calendar;

  useEffect(() => {
    calendar  = flatpickr(timeInput.current,{
      dateFormat: 'd.m.Y',
      ariaDateFormat: 'Y-m-d',
      maxDate: new Date(),
      minDate: dayjs(new Date()).add(-7, 'day').format('DD.MM.YYYY'),
      onChange: (selectedDates) => {
        setState({
          ...state,
          date: timeInput.current.value,
          requestDate: dayjs(selectedDates).format('YYYY-MM-DD'),
        })
      },
    });
  })

  const onHaveCurrencyChangeHandler = ({target}) => {
    setState({
      ...state,
      have: '',
      want: '',
      haveCurrency: target.value
    });
  };

  const onWantCurrencyChangeHandler = ({target}) => {
    setState({
      ...state,
      wantCurrency: target.value
    });
  };

  const onHaveInputHandler = ({target}) => {
    setState({
      ...state,
      have: target.value,
      want: target.value * currency.haveToWant
    });
  };

  const onWantInputHandler = ({target}) => {
    setState({
      ...state,
      have: target.value * currency.wantToHave,
      want: target.value,
    });
  };

  const onTimeInputClick = () => {
    calendar.open();
  };

  return (
    <section className="app__section calculator">
      <div className="calculator__wrapper">
        <h2 className="calculator__title" onClick={() => {
          console.log(state)
          console.log(currency)
        }}>Конвертер валют</h2>
        <form className="calculator__form" action="#">
          <ul className="calculator__list">
            <li className="calculator__item">
              <label className="calculator__label" htmlFor="haveNumber">У меня есть</label>
              <input
                className="calculator__input"
                type="number"
                id="haveNumber"
                name="haveNumber"
                value={state.have}
                ref={haveInput}
                onChange={onHaveInputHandler}
              />
              <label className="visually-hidden" htmlFor="currency">currency</label>
              <select
                className="calculator__input calculator__input--currency"
                name="currency"
                id="currency"
                value={state.haveCurrency}
                onChange={onHaveCurrencyChangeHandler}
              >
                <option value={Currency.RUB}>{Currency.RUB}</option>
                <option value={Currency.USD}>{Currency.USD}</option>
                <option value={Currency.EUR}>{Currency.EUR}</option>
                <option value={Currency.GBP}>{Currency.GBP}</option>
                <option value={Currency.CNY}>{Currency.CNY}</option>
              </select>
            </li>
            <li className="calculator__item">
              <label className="calculator__label" htmlFor="wantNumber">Хочу приобрести</label>
              <input
                className="calculator__input"
                type="number"
                id="wantNumber"
                name="wantNumber"
                value={state.want}
                ref={wantInput}
                onChange={onWantInputHandler}
              />
              <label className="visually-hidden" htmlFor="currency">currency</label>
              <select
                className="calculator__input calculator__input--currency"
                name="currency"
                id="currency"
                value={state.wantCurrency}
                onChange={onWantCurrencyChangeHandler}
              >
                <option value={Currency.RUB}>{Currency.RUB}</option>
                <option value={Currency.USD}>{Currency.USD}</option>
                <option value={Currency.EUR}>{Currency.EUR}</option>
                <option value={Currency.GBP}>{Currency.GBP}</option>
                <option value={Currency.CNY}>{Currency.CNY}</option>
              </select>
            </li>
          </ul>
          <div className="calculator__submit-box">
            <div className="calculator__calendar">
              <label className="visually-hidden" htmlFor="time">Выберите дату</label>
              <input
                className="calculator__input calculator__input--calendar"
                type="text"
                id="time"
                name="time"
                readOnly
                defaultValue={state.date}
                ref={timeInput}
                onClick={onTimeInputClick}
              />
            </div>
            <button className="calculator__save-btn">Сохранить результат</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Calculator;
