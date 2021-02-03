import { Action, AnyAction, combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { cartReducer } from '@cart';
import { booksReducer } from '@books';
import { userReducer } from '@user';
import { authReducer } from '@authentication';

export const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
  user: userReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType,
RootState,
unknown, // extra arg
Action<string>>;

export type DispatchType = ThunkDispatch<RootState, void, AnyAction>;
