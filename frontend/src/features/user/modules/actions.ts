import { Action } from 'redux';
import { ThunkType } from '@store/root-reducer';
import { IBook, IUserOrder, userAPI } from '@api/API';
import * as types from './types';

interface ISetWishListAction extends Action<typeof types.SET_WISH_LIST>{
  payload: Array<IBook> | [];
}
export const setWishList = (payload: Array<IBook> | []): ISetWishListAction => ({
  type: types.SET_WISH_LIST,
  payload,

});

interface ISetOrdersListAction extends Action<typeof types.SET_ORDERS> {
  payload: Array<IUserOrder> | [];
}

export const setOrdersList = (payload: Array<IUserOrder> | []): ISetOrdersListAction => ({
  type: types.SET_ORDERS,
  payload,

});

// interface ISetOrdersAction extends Action<typeof types.SET_ORDERS>{
//   payload: IBookInCart;
// }
// export const setOrders = (payload): ISetOrdersAction => ({
//   type: types.SET_ORDERS,
//   payload,
//
// });

export const getWishList = () : ThunkType => async (dispatch) => {
  const res = await userAPI.getWishList();
  if (!res) return;
  if (res?.resultCode === 0) {
    dispatch(setWishList(res.wishList));
  } else dispatch(setWishList([]));
};
export const deleteItemWishList = (bookId:string) :ThunkType => async (dispatch) => {
  const res = await userAPI.deleteItemWishList(bookId);

  if (res.status === 200) {
    dispatch(getWishList());
  }
};
export const addItemWishList = (bookId:string) :ThunkType => async (dispatch) => {
  const res = await userAPI.addItemWishList(bookId);

  if (res.status === 200) {
    dispatch(getWishList());
  }
};
export const getOrderList = (): ThunkType => async (dispatch) => {
  const res = await userAPI.getOrders();
  if (!res) return;
  if (res?.resultCode === 0) dispatch(setOrdersList(res.orders));
};

export type UserActionTypes = ISetWishListAction | ISetOrdersListAction;
// ISetOrdersAction;
