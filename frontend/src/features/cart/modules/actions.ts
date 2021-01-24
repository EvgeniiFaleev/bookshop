import { Action } from 'redux';
import { ThunkType } from '@store/root-reducer';
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
  payload: Array<IBookInCart> | null;
}
export const setBooks = (payload: Array<IBookInCart> | null): ISetBooksAction => ({
  type: types.SET_BOOKS,
  payload,

});

interface ISetOrderIdAction extends Action<typeof types.SET_ORDER_ID>{
  payload: string | null;
}

export const setOrderId = (payload: string | null): ISetOrderIdAction => (
  {
    type: types.SET_ORDER_ID,
    payload,
  }
);
interface ISetOrderErrorAction extends Action<typeof types.SET_ORDER_ERROR>{
  payload: boolean;
}

export const setOrderError = (payload: boolean): ISetOrderErrorAction => (
  {
    type: types.SET_ORDER_ERROR,
    payload,
  }
);

export const updateCart = (): ThunkType => async (dispatch) => {
  const cart = localStorage.getItem('books');
  if (cart) {
    const response = await booksAPI.updateCart(cart);
    if (response.status === 200) {
      const updatedCart = await response.json();
      dispatch(setBooks(updatedCart));
    }
  }
};

export interface IOrderInfo {
  email: string,
  firstName: string,
  lastName: string,
  streetAddress: string,
  city: string,
  country: string,
  phoneNumber: string,
}

interface IOrder extends IOrderInfo {
  orderList: Array<IBookInCart>
}

export const makeOrder = (orderInfo: IOrderInfo): ThunkType => async (dispatch, getState) => {
  const cartBooks = getState().cart.books;
  if (cartBooks) {
    const order: IOrder = { ...orderInfo, orderList: cartBooks };
    const res = await booksAPI.order(JSON.stringify(order));
    if (res.status === 200) {
      const orderId = (await res.json()).id;
      dispatch(setOrderId(orderId));
    } else {
      dispatch(setOrderError(true));
    }
    dispatch(setBooks(null));
    localStorage.setItem('books', '');
  }
};

export type CartActionTypes = IAddBookAction |
ISetBooksAction | ISetOrderIdAction | ISetOrderErrorAction;
