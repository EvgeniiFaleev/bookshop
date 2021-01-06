import { AdminTemplate } from '@templates/AdminTemplate/AdminTemplate';
import { AdminLogin } from '@ui/organisms/AdminLogin';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';

export const AdminPage = () => {
  const isAuth = useSelector((state:RootState) => state.admin.isAuth);

  const onSubmit = (data:FormData) => {

  };

  return (
    <AdminTemplate>
      <AdminLogin onSubmit={onSubmit}/>
    </AdminTemplate>
  );
};
