import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { ReactNode } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const useAuthRedirect = (person: 'user' | 'admin'): void | ReactNode => {
  const location = useLocation();
  console.log(location.pathname)
  if (person === 'admin') {
    const isAuth = useSelector((state:RootState) => state.auth.admin.isAuth);
    const history = useHistory();
    if (!isAuth) history.push('/admin/login');
  }
  if (person === 'user') {
    const isAuth = useSelector((state:RootState) => state.auth.user.isAuth);
    const history = useHistory();
    if (isAuth) history.push('/');
  }
};
