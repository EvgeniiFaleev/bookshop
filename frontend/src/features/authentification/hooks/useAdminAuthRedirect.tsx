import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { ReactNode } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

export const useAdminAuthRedirect = (): void | ReactNode => {
  const isAuth = useSelector((state:RootState) => state.admin.isAuth);
  const history = useHistory();
  console.log(history);
  if (!isAuth) history.push('/admin/login');
};
