import { Reducer } from 'redux';
import * as types from './types';
import { AuthUserActionsType } from './actions';

const initialState = {
  isAuth: false,
};

type AuthStateType = typeof initialState;

export const reducer: Reducer<AuthStateType, AuthUserActionsType> = (state = initialState,
  action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};
