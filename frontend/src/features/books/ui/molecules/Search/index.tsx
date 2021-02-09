import search from '@images/search.svg';
import { useDispatch } from 'react-redux';
import { booksActions } from '@books/index';
import React, {
  ChangeEvent, FormEvent, useCallback, useEffect, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { SearchResults } from '@books';
import styles from './Search.module.scss';

const debounce = (fn: (input: string)=> void, time: number) => {
  let timer: NodeJS.Timeout;

  return (input: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(input);
    }, time);
  };
};

export const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onChange = (e:ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };
  const history = useHistory();
  const onSubmit = (e:FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) history.push('/search');
  };
  const searchBooks = (input: string) => dispatch(booksActions.search(input));
  const debounceSearch = useCallback(debounce(searchBooks, 1000), []);

  const clearSearch = useCallback((e) => {
    const target = e.target as Element;
    if (!target.closest(`.${styles.search}`)) dispatch(booksActions.setSearchResults(null));
  }, []);

  useEffect(() => {
    document.addEventListener('click', clearSearch);
    return () => removeEventListener('click', clearSearch);
  }, []);

  useEffect(() => {
    if (inputValue) debounceSearch(inputValue);
  }, [inputValue]);

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input type="search" placeholder="Search" onChange={onChange} value={inputValue} />
      <button type="submit"><img src={search} alt="find" /></button>
      <SearchResults />
    </form>
  );
};
