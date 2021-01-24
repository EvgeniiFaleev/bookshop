import { Reducer } from 'redux';
import * as types from './types';
import { CartActionTypes } from './actions';

export interface IBookInCart {
  id: string,
  author: string,
  title: string,
  price: number,
  quantity: number,
  picture:string
}
interface ICartState {
  books: Array<IBookInCart> | null;
  orderId: null | string,
  orderError: boolean
}

const initialState : ICartState = {
  books: null,
  orderId: null,
  orderError: false,
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
      if (action.payload) {
        return {
          ...state,
          books: [...action.payload],
        };
      }
      return {
        ...state,
        books: action.payload,
      };
    case types.SET_ORDER_ID:
      return {
        ...state,
        orderId: action.payload,
      };
    case types.SET_ORDER_ERROR:
      return {
        ...state,
        orderError: action.payload,
      };
    default:
      return state;
  }
};
