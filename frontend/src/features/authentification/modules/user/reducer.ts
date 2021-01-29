import { Reducer } from 'redux';
import * as types from './types';
import { AuthUserActionsType } from './actions';

const initialState = {
  isAuth: false,
  userInfo: null,
};

type AuthStateType = {
  isAuth: boolean,
  userInfo: null | {
    email: string,
    userId: string
  }
};

export const reducer: Reducer<AuthStateType, AuthUserActionsType> = (state = initialState,
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
