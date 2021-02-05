import { CommonTemplate } from '@templates';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { Account, useAuthRedirect } from '@authentication';

export const AccountPage = () => {
  const { email, wishListCount, ordersCount } = useSelector((state: RootState) => ({
    email: state.auth.user.userInfo?.email,
    ordersCount: state.auth.user.userInfo?.ordersCount,
    wishListCount: state.auth.user.userInfo?.wishListCount,
  }), shallowEqual);

  return (
    <CommonTemplate>
      <Account email={email} wishListCount={wishListCount} ordersCount={ordersCount} />
    </CommonTemplate>
  );
};
