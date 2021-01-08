import { AdminTemplate } from '@templates/AdminTemplate/AdminTemplate';
import { AdminLogin } from '@authentication/ui/organisms/AdminLogin';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '@store/root-reducer';
import { adminAuthActions } from '@authentication/modules/admin';
import { FieldErrors, useForm } from 'react-hook-form';
import { FC } from 'react';
import { useAdminAuthRedirect } from '@authentication/hooks/useAdminAuthRedirect';

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
  // useAdminAuthRedirect('admin/add_book');
  const {
    register, handleSubmit, errors, setError, clearErrors,
  } = useForm();

  const dispatch:DispatchType = useDispatch();

  const onSubmit = async (data:IFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach((item) => {
      formData.append(item[0], item[1]);
    });
    // for (const name in data) {
    //   if (Object.hasOwnProperty.call(data, name)) { formData.append(name, data[name]); }
    // }
    const error = await dispatch(adminAuthActions.login(formData));
    if (error) setError('loginError', { message: error });
  };

  const clearError = () => {
    clearErrors();
  };

  return (
    <AdminTemplate>
      <AdminLogin
        required
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        clearError={clearError}
      />
    </AdminTemplate>
  );
};
