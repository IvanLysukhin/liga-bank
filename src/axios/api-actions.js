import {loadEndCurrency, loadStartCurrency} from '../store/actions';

export const fetchCurrencyRates = (date = 'latest', end, start) => (dispatch, _getState, api) => (
  api.get(`${date}/currencies/${end.toLowerCase()}/${start.toLowerCase()}.json`)
    .then(({data}) => {
      dispatch(loadStartCurrency(data[start.toLowerCase()]));
    })
);

export const fetchCurrencyRatesEnd = (date = 'latest', end, start) => (dispatch, _getState, api) => (
  api.get(`${date}/currencies/${start.toLowerCase()}/${end.toLowerCase()}.json`)
    .then(({data}) => {
      dispatch(loadEndCurrency(data[end.toLowerCase()]));
    })
);
