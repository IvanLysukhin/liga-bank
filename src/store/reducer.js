import {createReducer} from '@reduxjs/toolkit';
import {saveResult, clearResults, loadStartCurrency, loadEndCurrency} from './actions';

const initialState = {
  results: [],
  startCurrency: 0,
  endCurrency: 0,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(saveResult, (state, action) => {
      state.results = [action.payload, ...state.results];
    })
    .addCase(clearResults, (state, action) => {
      state.results = [];
    })
    .addCase(loadStartCurrency, (state, action) => {
      state.startCurrency = action.payload;
    })
    .addCase(loadEndCurrency, (state, action) => {
      state.endCurrency = action.payload;
    });
});
