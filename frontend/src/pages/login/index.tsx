import { CommonTemplate } from '@templates';
import { UserLogin } from '@authentication';
import { useForm } from 'react-hook-form';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthActions } from '@authentication/modules/user';
import { DispatchType, RootState } from '@store/root-reducer';
import { Redirect } from 'react-router-dom';

export const LoginPage:FC = () => {
  const {
    register, handleSubmit, errors, setError, clearErrors,
  } = useForm();
  const dispatch:DispatchType = useDispatch();

  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const onSubmit = async (data: FormData) => {
    const error = await dispatch(userAuthActions.login(data));
    if (error) setError('loginError', { message: error });
  };
  const onFocus = () => { clearErrors('loginError'); };
  if (isAuth) {
    return <Redirect to="/" />;
  }
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
