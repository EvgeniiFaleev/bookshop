import { FC } from 'react';
import styles from './OrderSuccess.module.scss';

export const OrderInfo: FC<{orderId: string | null}> = ({ orderId }) => (
  <>
    { orderId
      ? (
        <div className={styles.info}>
          Your order id is
          {orderId}
          . We will call you soon for details.
        </div>
      )
      : (
        <div className={styles.info}>
          Something went wrong, please try again or call us.
        </div>
      ) }
  </>
);
