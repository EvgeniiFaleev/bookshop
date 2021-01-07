import { IBooksList } from '@api/API';
import { Reducer } from 'redux';
import * as types from './types';
import { BooksActionTypes } from './actions';

interface IBooksState {
  categories: null | IBooksList,
  topLists: null | IBooksList
}

const initialState: IBooksState = {
  categories: null,
  topLists: null,
};

export const reducer: Reducer<IBooksState, BooksActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
        topLists: action.payload.topLists,
      };
    default:
      return state;
  }
};
