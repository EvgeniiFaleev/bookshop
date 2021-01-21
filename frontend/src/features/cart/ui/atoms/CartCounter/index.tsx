import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { Link } from 'react-router-dom';
import styles from './CartCounter.module.scss';

export const CartCounter = () => {
  const books = useSelector((state:RootState) => state.cart.books);
  let count = 0;
  if (books) count = books.length;
  return <>{count > 0 ? <div className={styles.counter}><Link to="/cart">{count}</Link></div> : ''}</>;
};
