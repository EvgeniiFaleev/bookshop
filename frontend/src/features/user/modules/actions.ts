import { Action } from 'redux';
import { ThunkType } from '@store/root-reducer';
import { IBook, userAPI } from '@api/API';
import * as types from './types';

interface ISetWishListAction extends Action<typeof types.SET_WISH_LIST>{
  payload: Array<IBook> | [];
}
export const setWishList = (payload: Array<IBook> | []): ISetWishListAction => ({
  type: types.SET_WISH_LIST,
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
  if (res?.resultCode === 0) dispatch(setWishList(res.wishList));
};

export type UserActionTypes = ISetWishListAction;
// ISetOrdersAction;
