import { booksAPI, IBook, IChart } from '@api/API';
import { Action } from 'redux';
import { DispatchType, ThunkType } from '@store/root-reducer';
import * as types from './types';

interface ISetCategoriesAction extends Action<typeof types.SET_CATEGORIES>{
  payload: IChart
}

export const setCategories = (payload: IChart): ISetCategoriesAction => ({
  type: types.SET_CATEGORIES,
  payload,
});
interface ISetBookAction extends Action<typeof types.SET_BOOK>{
  payload: IBook
}

export const setBook = (payload: IBook): ISetBookAction => ({
  type: types.SET_BOOK,
  payload,
});

export const getChart = (): ThunkType => (dispatch: DispatchType) => {
  booksAPI.getBooksChart().then((res) => {
    dispatch(setCategories(res));
  });
};

export const getBook = (id:string): ThunkType => (dispatch: DispatchType) => {
  booksAPI.getBook(id).then((res) => {
    dispatch(setBook(res));
  });
};

export type BooksActionTypes = ISetCategoriesAction | ISetBookAction;
