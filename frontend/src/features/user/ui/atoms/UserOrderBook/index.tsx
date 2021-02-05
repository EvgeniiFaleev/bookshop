import { BookInListInfo } from '@cart';
import { FC } from 'react';
import { IBookInCart } from '@cart/modules/reducer';
import styles from './UserOrderBook.module.scss';

export const UserOrderBook: FC<IBookInCart> = ({
  picture, title, author, id, price, quantity,
}) => (
  <div className={styles.wrapper} data-id={id} key={id}>
    <BookInListInfo title={title} author={author} picture={picture} id={id} />
    <div className={styles.flex2}>
      <p>{quantity}</p>
      <p className={styles.price}>{+price * +quantity}</p>
    </div>
  </div>
);
