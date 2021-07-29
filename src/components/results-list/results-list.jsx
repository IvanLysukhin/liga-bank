import Result from "../result/result";

function ResultsList() {
  return (
    <section className="app__section results-list">
      <div className="results-list__wrapper">
        <h2 className="results-list__title">История конвертация</h2>
      </div>
      <ul className="results-list__list">
        {new Array(10).fill('').map((_, i) => <Result key={i}/>)}
      </ul>
      <button className="results-list__reset-btn">Очистить историю</button>
    </section>
  );
}

export default ResultsList;
