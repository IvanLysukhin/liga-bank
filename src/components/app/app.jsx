import AppNav from '../app-nav/app-nav';
import PromoBlock from '../promo-block/promo-block';
import Calculator from '../calculator/calculator';
import ResultsList from '../results-list/results-list';
import AppFooter from '../app-footer/app-footer';
import {useState} from 'react';
import React from 'react';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="app">
      <header className="app__header">
        <AppNav/>
      </header>
      <main>
        <h1 className="app__title visually-hidden">Интернет-банк ЛИГА банк</h1>
        <PromoBlock/>
        <Calculator saveButtonHandler={setResults} results={results}/>
        <ResultsList resetButtonHandler={setResults} results={results}/>
      </main>
      <footer className="app__footer">
        <AppFooter/>
      </footer>
    </div>
  );
}

export default App;
