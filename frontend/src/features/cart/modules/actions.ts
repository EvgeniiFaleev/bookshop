import { Action } from 'redux';
import * as types from './types';
import { IBookInCart } from './reducer';

interface IAddBookAction extends Action<typeof types.ADD_BOOK>{
  payload: IBookInCart;
}
export const addBook = (payload: IBookInCart): IAddBookAction => ({
  type: types.ADD_BOOK,
  payload,

});
interface ISetBooksAction extends Action<typeof types.SET_BOOKS>{
  payload: Array<IBookInCart>;
}
export const setBooks = (payload: Array<IBookInCart>): ISetBooksAction => ({
  type: types.SET_BOOKS,
  payload,

});

export type CartActionTypes = IAddBookAction | ISetBooksAction;
