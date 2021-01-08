import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { ReactNode } from 'react';
import { Redirect } from 'react-router-dom';

export const useAdminAuthRedirect = (path:string): void | ReactNode => {
  const isAuth = useSelector((state:RootState) => state.admin.isAuth);
  if (!isAuth) {
    return <Redirect to={path} />;
  }
};
