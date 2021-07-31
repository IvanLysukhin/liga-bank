import Result from '../result/result';
import React from 'react';
import PropTypes from 'prop-types';
import {resultProp} from '../../prop-types/prop-types';

function ResultsList({results, resetButtonHandler}) {
  return (
    <section className="app__section results-list">
      <div className="results-list__wrapper">
        <h2 className="results-list__title">История конвертация</h2>
      </div>
      <ul className="results-list__list">
        {results.slice(0, 10).map((result) => <Result result={result} key={result.id}/>)}
      </ul>
      <button
        className="results-list__reset-btn"
        onClick={() => {
          resetButtonHandler([]);
        }}
      >
        Очистить историю
      </button>
    </section>
  );
}


ResultsList.propTypes = {
  results: PropTypes.arrayOf(resultProp),
  resetButtonHandler: PropTypes.func.isRequired,
};

export default ResultsList;
