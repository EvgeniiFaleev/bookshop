import { Link } from 'react-router-dom';
import { FC } from 'react';
import styles from './Account.module.scss';

interface IAccountProps {
  email?:string,
  ordersCount?: number,
  wishListCount?: number
}

export const Account: FC<IAccountProps> = ({ email, ordersCount, wishListCount }) => (
  <div className={styles.wrapper}>
    <h1>My acoount</h1>
    <p className={styles.email}>
      <span>Email: </span>
      {email}
    </p>
    <div className={styles.orders}>
      <Link to="/account/orders">My Orders</Link>
      <p>
        You have  {' '}
        {ordersCount || 'no'}
        {' '}
        orders
      </p>
    </div>
    <div className={styles.wishlist}>
      <Link to="/account/wishlist">My WishList</Link>
      <p>
        You have {' '}
        {wishListCount || 'no'}
        {' '}
        items in wishlist
      </p>
    </div>
  </div>
);
