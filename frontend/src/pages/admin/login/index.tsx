import { AdminTemplate } from '@templates/AdminTemplate';
import { AdminLogin } from '@authentication/ui/organisms/AdminLogin';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '@store/root-reducer';
import { adminAuthActions } from '@authentication/modules/admin';
import {
  FieldErrors,
  RegisterOptions,
  useForm,
  UseFormMethods,
} from 'react-hook-form';
import { FC, FocusEvent } from 'react';
import { Redirect } from 'react-router-dom';

interface IFormData {
  login:string,
  password: string,
  [index: string]: string,
}
//
// type RefReturn =
//     | string
//     | ((instance: HTMLInputElement | null) => void)
//     | React.RefObject<HTMLInputElement>
//     | null
//     | undefined;

export interface IHookFormProps {
  register: UseFormMethods['register'],
  onSubmit: () => void,
  errors: FieldErrors,
  required? : RegisterOptions['required'],
  clearError?: (e:FocusEvent<HTMLInputElement>)=> void,
  pattern? : RegisterOptions['pattern'],
  minLength?: RegisterOptions['minLength'],
  maxLength?: RegisterOptions['maxLength'],
  validate?: RegisterOptions['validate']
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
