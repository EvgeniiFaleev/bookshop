import { IUserOrderItem } from '@api/API';
import { FC } from 'react';
import styles from '@cart/ui/organisms/Cart/Cart.module.scss';
import { UserOrderBook } from '../../atoms/UserOrderBook';

export const UserOrderBooks:FC<{books: Array<IUserOrderItem>}> = ({ books }) => {
  const orderBooks = books.map(({
    picture, title, author, bookId: id, price, quantity,
  }) => (
    <UserOrderBook
      picture={picture}
      title={title}
      author={author}
      id={id}
      price={price}
      quantity={quantity}
    />
  ));

  return (
    <div className={styles.orderBooks}>
      <div className={styles.cart_description}>
        <p>Item</p>
        <p>
          <span className={styles.cart_description_qty}>Qty</span>
          <span>Price</span>
        </p>
      </div>
      {orderBooks}
    </div>
  );
};
