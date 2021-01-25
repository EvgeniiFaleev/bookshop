import { CommonTemplate } from '@templates';
import { useForm } from 'react-hook-form';
import { FC } from 'react';
import { SignUp } from '@authentication';

export const SignUpPage:FC = () => {
  const {
    register, handleSubmit, errors, watch,
  } = useForm();
  const watchPassword: string = watch('password');
  const onSubmit = (data: FormData) => {
    console.log(data);
    console.log(watchPassword);
  };
  const validate = (value:string) => value === watchPassword || 'The'
    + ' passwords do not match';
  return (
    <CommonTemplate>
      <SignUp register={register} onSubmit={handleSubmit(onSubmit)} errors={errors}  validate={validate} />
    </CommonTemplate>
  );
};
