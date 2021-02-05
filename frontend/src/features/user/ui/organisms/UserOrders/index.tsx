import { FC } from 'react';
import { IUserOrder } from '@api/API';
import { UserOrderBooks } from '../../molecules/UserOrderBooks';
import styles from './UserOrders.module.scss';
import {ButtonPrimary} from "@ui/atoms/ButtonPrimary";

export const UserOrders:FC<{orders:Array<IUserOrder>}> = ({ orders }) => {
  const ordersElements = orders.map(({
    _id: id, orderList, totalPrice, totalCount,
  }) => (
    <div className={styles.order}>
      <h1>
        Order №:
        {' '}
        {id}
      </h1>
      <UserOrderBooks books={orderList} />
      <div className={styles.total}>
        <p>
          <span>Total Count:</span>
          {' '}
          {totalCount}
        </p>
        <p>
          <span>Total Price:</span>
          {' '}
          {totalPrice}
        </p>
      </div>
    </div>
  ));

  return (
    <div className={styles.orders}>
      {ordersElements}
      <ButtonPrimary path="/" type="link">Continue Shopping</ButtonPrimary>
    </div>
  );
};
