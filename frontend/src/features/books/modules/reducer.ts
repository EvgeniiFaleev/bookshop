import { IChart } from '@api/api';
import { Reducer } from 'redux';
import * as types from './types';
import { BooksActionTypes } from './actions';

interface IBooksState {
  categories: null | IChart
}

const initialState: IBooksState = {
  categories: null,
};

export const reducer: Reducer<IBooksState, BooksActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
