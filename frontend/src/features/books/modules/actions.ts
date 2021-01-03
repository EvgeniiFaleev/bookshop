import { API, IChart } from '@api/api';
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

export const getChart = (): ThunkType => (dispatch: DispatchType) => {
  API.getBooksChart().then((categories) => {
    dispatch(setCategories(categories));
  });
};

export type BooksActionTypes = ISetCategoriesAction;
