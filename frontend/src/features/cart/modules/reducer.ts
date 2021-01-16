import { Reducer } from 'redux';
import * as types from './types';
import { CartActionTypes } from './actions';

export interface IBookInCart {
  id: string,
  author: string,
  title: string,
  price: number,
}
interface ICartState {
  books: Array<IBookInCart> | null;
}

const initialState : ICartState = {
  books: null,
};

export const reducer: Reducer<ICartState, CartActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      if (state.books) {
        return {
          ...state,
          books: [...state.books, action.payload],
        };
      }
      return {
        ...state,
        books: [action.payload],
      };

    case types.SET_BOOKS:
      return {
        ...state,
        books: [...action.payload],
      };
    default:
      return state;
  }
};
