import { IBook, IBooksList } from '@api/API';
import { Reducer } from 'redux';
import * as types from './types';
import {BooksActionTypes, ISearchResult} from './actions';

interface IBooksState {
  categories: null | IBooksList,
  topLists: null | IBooksList,
  book: null | IBook,
  categoryName: string,
  booksOnCategory: Array<IBook> | null,
  searchResults : Array<ISearchResult> | null;
}

const initialState: IBooksState = {
  categories: null,
  topLists: null,
  book: null,
  categoryName: '',
  booksOnCategory: null,
  searchResults: null
};

export const reducer: Reducer<IBooksState, BooksActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
        topLists: action.payload.topLists,
      };
    case types.SET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case types.SET_BOOKS:
      return {
        ...state,
        booksOnCategory: action.payload,
      };
    case types.SET_CATEGORY:
      return {
        ...state,
        categoryName: action.payload,
      };
    case types.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
