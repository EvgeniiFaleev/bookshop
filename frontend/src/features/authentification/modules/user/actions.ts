import { Action } from 'redux';
import { ThunkType } from '@store/root-reducer';
import { authAPI } from '@api/API';
import { batch } from 'react-redux';
import * as types from './types';

interface IAuthUserAction extends Action<typeof types.AUTH_USER>{
  payload:boolean
}

export const authUser = (payload: boolean): IAuthUserAction => ({
  type: types.AUTH_USER,
  payload,
});

export interface IUserInfo {
  userId: string,
  email:string,
  ordersCount: number,
  wishListCount: number
}

interface ISetUserInfoAction extends Action<typeof types.SET_USER_INFO>{
  payload:IUserInfo | null
}

export const setUserInfo = (payload: IUserInfo | null): ISetUserInfoAction => ({
  type: types.SET_USER_INFO,
  payload,
});

export const login = (data:FormData): ThunkType<Promise<string | void>> => async (dispatch) => {
  const response = await authAPI.userLogin(data);
  if (response.status === 200) { dispatch(authUser(true)); } else {
    const { message } = await response.json() as {message:string};
    return message;
  }
};
//
// export const logout = (): ThunkType<Promise<void>> => async (dispatch) => {
//   const response = await authAPI.adminLogout();
//   if (response.status === 200) { dispatch(authUser(false)); } else {
//     const { message } = await response.json() as {message:string};
//     console.log(message);
//   }
// };

export const signUp = (data:FormData): ThunkType<Promise<string | void>> => async (dispatch) => {
  const response = await authAPI.signUp(data);
  if (response.status === 200) { dispatch(authUser(true)); } else {
    const { message } = await response.json() as {message:string};
    return message;
  }
};
export const me = (): ThunkType<Promise<string | void>> => async (dispatch) => {
  const response = await authAPI.me();
  if (!response) return;
  if (response.resultCode === 0) {
    batch(() => {
      dispatch(setUserInfo(response.userInfo));
      dispatch(authUser(true));
    });
  }
};

export type AuthUserActionsType = IAuthUserAction | ISetUserInfoAction;
