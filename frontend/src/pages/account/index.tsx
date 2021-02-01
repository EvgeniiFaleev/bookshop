import { CommonTemplate } from '@templates';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { Account } from '@authentication';

export const AccountPage = () => {
  const { email, wishListCount, ordersCount } = useSelector((state: RootState) => ({
    email: state.user.userInfo?.email,
    ordersCount: state.user.userInfo?.ordersCount,
    wishListCount: state.user.userInfo?.wishListCount,
  }), shallowEqual);

  return (
    <CommonTemplate>
      <Account email={email} wishListCount={wishListCount} ordersCount={ordersCount} />
    </CommonTemplate>
  );
};
