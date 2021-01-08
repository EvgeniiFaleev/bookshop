import { FC, useState } from 'react';
import { AdminTemplate } from '@templates/AdminTemplate/AdminTemplate';
import { AddBook } from '@books/ui/organisms/AddBook';
import { useForm } from 'react-hook-form';
import { useAdminAuthRedirect } from '@authentication/hooks/useAdminAuthRedirect';

interface IFormData {
  title:string,
  author: string,
  picture: File,
  price: string,
  description: string
  [index: string]: string | File,
}

export const AddBookPage:FC = () => {
  // useAdminAuthRedirect('admin/login');

  const {
    register, handleSubmit, errors, setError, clearErrors,
  } = useForm();

  const [description, setDescription] = useState<string>('');

  const onSubmit = async (data:IFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach((item) => {
      formData.append(item[0], item[1]);
    });
    formData.append('description', description);
    // for (const name in data) {
    //   if (Object.hasOwnProperty.call(data, name)) { formData.append(name, data[name]); }
    // }
    // debugger;
    // const error = await dispatch(adminAuthActions.login(formData));
    // if (error) setError('loginError', { message: error });
  };

  const clearError = () => {
    clearErrors();
  };

  return (
    <AdminTemplate>
      <AddBook
        description={description}
        setDescription={setDescription}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
        clearError={clearError}
      />
    </AdminTemplate>
  );
};
