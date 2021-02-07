import search from '@images/search.svg';
import { useDispatch } from 'react-redux';
import { booksActions } from '@books/index';
import {
  ChangeEvent, FormEvent, useCallback, useEffect, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Search.module.scss';

const debounce = (fn: ()=> void, time: number) => {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
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
  const searchBooks = () => dispatch(booksActions.search(inputValue));

  const debounceSearch = useCallback(debounce(searchBooks, 3000),[]);
  useEffect(() => {
    if (inputValue) debounceSearch();
  }, [inputValue]);

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input type="search" placeholder="Search" onChange={onChange} value={inputValue} />
      <button type="submit"><img src={search} alt="find" /></button>
    </form>
  );
};
