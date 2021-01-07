import { Action } from 'redux';
import { DispatchType, ThunkType } from '@store/root-reducer';
import { authAPI } from '@api/API';
import * as types from './types';

interface IAuthAdminAction extends Action<typeof types.AUTH_ADMIN>{
  payload:boolean
}

export const authAdmin = (payload: boolean): IAuthAdminAction => ({
  type: types.AUTH_ADMIN,
  payload,
});

export const login = (data:FormData): ThunkType<Promise<string | void>> => async (dispatch: DispatchType) => {
  const response = await authAPI.adminLogin(data);
  if (response.status === 200) { dispatch(authAdmin(true)); } else {
    const { message } = await response.json() as {message:string};
    return message;
  }
};

export type AuthAdminActionsType = IAuthAdminAction;
