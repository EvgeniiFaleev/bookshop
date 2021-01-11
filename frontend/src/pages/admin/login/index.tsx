import { AdminTemplate } from '@templates/AdminTemplate/AdminTemplate';
import { AdminLogin } from '@authentication/ui/organisms/AdminLogin';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '@store/root-reducer';
import { adminAuthActions } from '@authentication/modules/admin';
import { FieldErrors, useForm } from 'react-hook-form';
import { FC } from 'react';
import { useAdminAuthRedirect } from '@authentication/hooks/useAdminAuthRedirect';
import { Redirect } from 'react-router-dom';

interface IFormData {
  login:string,
  password: string,
  [index: string]: string,
}

type RefReturn =
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;

export interface IHookFormProps {
  register: ({ required }: { required?: boolean }) => RefReturn;
  onSubmit: () => void,
  errors: FieldErrors,
  required? : boolean,
  clearError: ()=> void
}

export const AdminLoginPage: FC = () => {
  const {
    register, handleSubmit, errors, setError, clearErrors,
  } = useForm();

  const isAuth = useSelector((state:RootState) => state.admin.isAuth);
  const dispatch:DispatchType = useDispatch();

  const onSubmit = async (data:IFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach((item) => {
      formData.append(item[0], item[1]);
    });
    const error = await dispatch(adminAuthActions.login(formData));
    if (error) setError('loginError', { message: error });
  };

  const clearError = () => {
    clearErrors();
  };

  return (
    <>
      { !isAuth ? (
        <AdminTemplate>
          <AdminLogin
            required
            register={register}
            errors={errors}
            onSubmit={handleSubmit(onSubmit)}
            clearError={clearError}
          />
        </AdminTemplate>
      ) : <Redirect to="/admin/add_book" />}
    </>
  );
};
