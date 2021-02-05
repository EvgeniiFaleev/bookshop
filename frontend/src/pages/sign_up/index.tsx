import { CommonTemplate } from '@templates';
import { useForm } from 'react-hook-form';
import { FC, useState } from 'react';
import {
  SignUp,
  useAuthRedirect,
  userAuthActions,
} from '@authentication';
import { useDispatch } from 'react-redux';
import { DispatchType } from '@store/root-reducer';

export const SignUpPage:FC = () => {
  useAuthRedirect('user');
  const {
    register, handleSubmit, errors, watch, setError, clearErrors,
  } = useForm();
  const [isRegister, setIsRegister] = useState(false);
  const watchPassword: string = watch('password');
  const dispatch:DispatchType = useDispatch();

  const onSubmit = async (data: FormData) => {
    const error = await dispatch(userAuthActions.signUp(data));
    if (error) {
      setError('signUpError', { message: error });
    } else {
      setIsRegister(true);
    }
  };

  const validate = (value:string) => value === watchPassword || 'The'
    + ' passwords does not match';

  const onFocus = () => clearErrors('signUpError');

  return (
    <CommonTemplate>
      <SignUp
        isRegister={isRegister}
        onFocus={onFocus}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
        validate={validate}
      />
    </CommonTemplate>
  );
};
