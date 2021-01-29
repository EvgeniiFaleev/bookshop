import { CommonTemplate } from '@templates';
import { useForm } from 'react-hook-form';
import { FC, useState } from 'react';
import { SignUp } from '@authentication';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '@store/root-reducer';
import { userAuthActions } from '@authentication/modules/user';
import { Redirect } from 'react-router';

export const SignUpPage:FC = () => {
  const {
    register, handleSubmit, errors, watch, setError, clearErrors,
  } = useForm();
  const [isRegister, setIsRegister] = useState(false);
  const watchPassword: string = watch('password');
  const dispatch:DispatchType = useDispatch();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  const onSubmit = async (data: FormData) => {
    const error = await dispatch(userAuthActions.signUp(data));
    if (error) { setError('signUpError', { message: error }); } else { setIsRegister(true); }
  };

  const validate = (value:string) => value === watchPassword || 'The'
    + ' passwords do not match';

  const onFocus = () => { clearErrors('signUpError'); };

  return (
    <CommonTemplate>
      <SignUp isRegister={isRegister} onFocus={onFocus} register={register} onSubmit={handleSubmit(onSubmit)} errors={errors} validate={validate} />
    </CommonTemplate>
  );
};
