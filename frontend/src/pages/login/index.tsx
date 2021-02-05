import { CommonTemplate } from '@templates';
import { userAuthActions, UserLogin } from '@authentication';
import { useForm } from 'react-hook-form';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { DispatchType } from '@store/root-reducer';
import { useAuthRedirect } from '@authentication/hooks/useAuthRedirect';

export const LoginPage:FC = () => {
  useAuthRedirect('user');
  const {
    register, handleSubmit, errors, setError, clearErrors,
  } = useForm();
  const dispatch:DispatchType = useDispatch();

  const onSubmit = async (data: FormData) => {
    const error = await dispatch(userAuthActions.login(data));
    if (error) setError('loginError', { message: error });
  };
  const onFocus = () => { clearErrors('loginError'); };

  return (
    <CommonTemplate>
      <UserLogin
        onFocus={onFocus}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
      />
    </CommonTemplate>
  );
};
