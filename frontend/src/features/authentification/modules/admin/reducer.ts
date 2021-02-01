import { Reducer } from 'redux';
import * as types from './types';
import { AuthAdminActionsType } from './actions';

const initialState = {
  isAuth: false,
};

type AdminStateType = typeof initialState;

export const reducer: Reducer<AdminStateType, AuthAdminActionsType> = (state = initialState,
  action) => {
  switch (action.type) {
    case types.AUTH_ADMIN:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};
