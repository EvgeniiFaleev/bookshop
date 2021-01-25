import { CommonTemplate } from '@templates';
import { UserLogin } from '@authentication';
import { useForm } from 'react-hook-form';
import { FC } from 'react';

export const LoginPage:FC = () => {
  const {
    register, handleSubmit, errors,
  } = useForm();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <CommonTemplate>
      <UserLogin register={register} onSubmit={handleSubmit(onSubmit)} errors={errors} />
    </CommonTemplate>
  );
};
