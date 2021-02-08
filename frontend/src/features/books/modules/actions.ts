import { booksAPI, IBook, IChart } from '@api/API';
import { Action } from 'redux';
import { DispatchType, ThunkType } from '@store/root-reducer';
import { batch } from 'react-redux';
import * as types from './types';

interface ISetCategoriesAction extends Action<typeof types.SET_CATEGORIES>{
  payload: IChart
}

export const setCategories = (payload: IChart): ISetCategoriesAction => ({
  type: types.SET_CATEGORIES,
  payload,
});

interface ISetCategoryAction extends Action<typeof types.SET_CATEGORY>{
  payload: string
}

export const setCategory = (payload: string): ISetCategoryAction => ({
  type: types.SET_CATEGORY,
  payload,
});

interface ISetBookAction extends Action<typeof types.SET_BOOK>{
  payload: IBook | null
}

export const setBook = (payload: IBook | null): ISetBookAction => ({
  type: types.SET_BOOK,
  payload,
});

interface ISetSearchResultsAction extends Action<typeof types.SET_SEARCH_RESULTS>{
  payload: Array<ISearchResult> | null
}

export interface ISearchResult {
  id: string,
  keyword: string
}
export const setSearchResults = (payload: Array<ISearchResult> | null): ISetSearchResultsAction => ({
  type: types.SET_SEARCH_RESULTS,
  payload,
});
interface ISetBooksAction extends Action<typeof types.SET_BOOKS>{
  payload: Array<IBook> | null
}
export const setBooks = (payload: Array<IBook> | null): ISetBooksAction => ({
  type: types.SET_BOOKS,
  payload,
});

export const getChart = (): ThunkType => (dispatch: DispatchType) => {
  booksAPI.getBooksChart().then((res) => {
    dispatch(setCategories(res));
  });
};

export const getBook = (id:string): ThunkType => (dispatch: DispatchType) => {
  booksAPI.getBook(id).then((book) => {
    dispatch(setBook(book));
  });
};

export const getBooksByCategory = (category: string) :ThunkType => async (dispatch: DispatchType) => {
  const res = await booksAPI.getBooksByCategory(category);
  if (res.status === 200) {
    const { categoryName, books } = await res.json();
    batch(() => {
      dispatch(setBooks(books));
      dispatch(setCategory(categoryName));
    });
  } else {
    const { message } = await res.json();
    console.log(message);
  }
};

export const search = (keyword:string) :ThunkType => async (dispatch) => {
  const res = await booksAPI.search(keyword);
  if (!res) return;
  const { authors, titles } = res;
  const filteredTitles = titles.filter((titleItem) => {
    const index = authors.findIndex((authorItem) => titleItem._id === authorItem._id);
    if (index >= 0) return false;
    return true;
  });
  const authorsNames = authors.map((item) => ({
    keyword: item.author,
    id: item._id,
  }));
  const bookTitles = titles.map((item) => ({
    keyword: item.title,
    id: item._id,
  }));
  const searchedBooks = [...filteredTitles, ...authors];
  dispatch(setSearchResults([...authorsNames, ...bookTitles]));
  dispatch(setBooks(searchedBooks));
  dispatch(setCategory(keyword));
};

export type BooksActionTypes = ISetCategoriesAction
| ISetBookAction | ISetBooksAction | ISetCategoryAction | ISetSearchResultsAction;
