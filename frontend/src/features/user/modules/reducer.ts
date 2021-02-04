import { Reducer } from 'redux';
import {IBook, IUserOrder} from '@api/API';
import * as types from './types';
import { UserActionTypes } from './actions';

interface IUserState {
  wishList: Array<IBook> | []
  orders: Array<IUserOrder> | []
}

const initialState : IUserState = {
  wishList: [],
  orders: [],
};

export const reducer: Reducer<IUserState, UserActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_WISH_LIST:
      return {
        ...state,
        wishList: action.payload,
      };
    case types.SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
