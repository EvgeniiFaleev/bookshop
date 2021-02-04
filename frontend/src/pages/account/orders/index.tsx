import { CommonTemplate } from '@templates';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { useEffect } from 'react';
import { userActions } from '@user';
import { UserOrders } from '../../../features/user/ui/organisms/UserOrders';

export const UserOrdersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getOrderList());
  }, []);
  const orders = useSelector((state:RootState) => state.user.orders);
  return (
    <CommonTemplate>
      <UserOrders orders={orders} />
    </CommonTemplate>
  );
};
