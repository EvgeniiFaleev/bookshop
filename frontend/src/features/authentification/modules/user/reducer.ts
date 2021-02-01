import { Reducer } from 'redux';
import * as types from './types';
import {AuthUserActionsType, IUserInfo} from './actions';

const initialState = {
  isAuth: false,
  userInfo: null,
};

type UserStateType = {
  isAuth: boolean,
  userInfo: null | IUserInfo;
};

export const reducer: Reducer<UserStateType, AuthUserActionsType> = (state = initialState,
  action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        ...state,
        isAuth: action.payload,
      };
    case types.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
