import { Action, AnyAction, combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { booksReducer } from '../../features/books/modules';
import { adminAuthReducer } from '../../features/authentification/modules/admin';

export const rootReducer = combineReducers({
  books: booksReducer,
  admin: adminAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType,
RootState,
unknown, // extra arg
Action<string>>;

export type DispatchType = ThunkDispatch<RootState, void, AnyAction>;
