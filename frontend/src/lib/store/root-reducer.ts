import { Action, AnyAction, combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { cartReducer } from '@cart/modules';
import { booksReducer } from '@books/modules';
import { adminAuthReducer } from '@authentication/modules/admin';
import { userAuthReducer } from '@authentication/modules/user';

export const rootReducer = combineReducers({
  books: booksReducer,
  admin: adminAuthReducer,
  cart: cartReducer,
  user: userAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType,
RootState,
unknown, // extra arg
Action<string>>;

export type DispatchType = ThunkDispatch<RootState, void, AnyAction>;

