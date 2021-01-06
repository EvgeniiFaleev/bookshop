import { Action } from 'redux';
import * as types from './types';
import {DispatchType} from "@store/root-reducer";

interface IAuthAdminAction extends Action<typeof types.AUTH_ADMIN>{
  payload:boolean
}

export const authAdmin = (payload: boolean): IAuthAdminAction => ({
  type: types.AUTH_ADMIN,
  payload
});

export const login = (data:FormData) => (dispatch: DispatchType) =>{

};

export type AuthAdminActionsType = IAuthAdminAction;
