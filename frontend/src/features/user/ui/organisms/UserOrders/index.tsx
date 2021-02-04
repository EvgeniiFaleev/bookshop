import { FC } from 'react';
import { IUserOrder } from '@api/API';
import { UserOrderBooks } from '../../molecules/UserOrderBooks';
import styles from './UserOrders.module.scss';

export const UserOrders:FC<{orders:Array<IUserOrder>}> = ({ orders }) => {
  const ordersElements = orders.map(({ _id: id, orderList }) => (
    <div className={styles.order}>
      <h1>
        Order:
        {id}
      </h1>
      <UserOrderBooks books={orderList} />
    </div>
  ));

  return (
    <div className={styles.orders}>
      {ordersElements}
    </div>
  );
};
