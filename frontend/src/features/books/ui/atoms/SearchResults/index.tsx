import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { Link } from 'react-router-dom';
import styles from './SearchResults.module.scss';

export const SearchResults = () => {
  const searchResults = useSelector((state: RootState) => state.books.searchResults);

  const searchResultList = searchResults?.map((item,index) => (
    <li key={index} className={styles.listItem}>
      <Link to={`/book/${item.id}`}>{item.keyword}</Link>
    </li>
  ));
  return (
    <ul className={styles.resultsList}>
      {searchResultList}

    </ul>
  );
};
