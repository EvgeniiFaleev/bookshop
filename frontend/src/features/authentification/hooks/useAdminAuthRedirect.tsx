import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';

export const useAdminAuthRedirect = (): void | ReactNode => {
  const isAuth = useSelector((state:RootState) => state.auth.admin.isAuth);
  const history = useHistory();
  if (!isAuth) history.push('/admin/login');
};
