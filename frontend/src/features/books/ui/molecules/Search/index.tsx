import search from '@images/search.svg';
import { useDispatch } from 'react-redux';
import { booksActions } from '@books/index';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Search.module.scss';

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
  useEffect(() => {
    if (inputValue)dispatch(booksActions.search(inputValue));
  }, [inputValue]);

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input type="search" placeholder="Search" onChange={onChange} value={inputValue} />
      <button type="submit"><img src={search} alt="find" /></button>
    </form>
  );
};
