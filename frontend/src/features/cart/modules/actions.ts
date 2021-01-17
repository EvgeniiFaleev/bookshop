import { Action } from 'redux';
import { DispatchType, RootState, ThunkType } from '@store/root-reducer';
import { booksAPI } from '@api/API';
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

export const updateCart = (): ThunkType => async (dispatch: DispatchType) => {
  const cart = localStorage.getItem('books');
  if (cart) {
    const response = await booksAPI.updateCart(cart);
    if (response.status === 200) {
      const updatedCart = await response.json();
      debugger;
      dispatch(setBooks(updatedCart));
    }
  }
};

export type CartActionTypes = IAddBookAction | ISetBooksAction;
