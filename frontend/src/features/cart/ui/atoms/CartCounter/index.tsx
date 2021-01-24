import {useCart} from '@cart';
import styles from './CartCounter.module.scss';

export const CartCounter = () => {
  const books = useCart();
  let count = 0;
  if (books) count = books.length;
  return (
    <>
      {count > 0
        ? (
          <div className={styles.counter}>
            {count}
          </div>
        ) : ''}
    </>
  );
};
