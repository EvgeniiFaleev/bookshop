import { FC, FormEvent, useState } from 'react';
import { AdminTemplate } from '@templates/AdminTemplate';
import { AddBook } from '@books/ui/organisms/AddBook';
import { useForm } from 'react-hook-form';
import { useAuthRedirect } from '@authentication/hooks/useAuthRedirect';
import { booksAPI } from '@api/API';

interface IFormData {
  title:string,
  author: string,
  picture: FileList,
  price: string,
  description: string
  [index: string]: string | FileList,
}

export const AddBookPage:FC = () => {
  useAuthRedirect('admin');

  const {
    register, handleSubmit, errors, setError, clearErrors,
  } = useForm();

  const [description, setDescription] = useState<string>('');

  const [isBookAdded, setIsBookAdded] = useState<boolean>(false);

  const [categoriesCount, setCategoriesCount] = useState<number>(1);

  const onClear = () => {
    if (Object.keys(errors).length > 0) clearErrors();
    if (isBookAdded) setIsBookAdded(false);
  };

  const onSubmit = async (data:IFormData, e: any) => {
    if (!description) {
      setError('descError', {
        message: 'Enter description of the book',
      });
    }
    const formData = new FormData();
    Object.entries(data).forEach((item) => {
      if (item[1] instanceof FileList) {
        formData.append(item[0], item[1][0]);
      } else {
        formData.append(item[0], item[1]);
      }
    });
    formData.append('description', description);
    // debugger;
    const res = await booksAPI.addBook(formData);
    if (res.status === 200) { setIsBookAdded(true); } else {
      const { message } = await res.json();
      setError('bookError', { message });
    }
    const target = e.target as HTMLFormElement;
    target.reset();
  };

  return (
    <AdminTemplate>
      <AddBook
        setCategoriesCount={setCategoriesCount}
        categoriesCount={categoriesCount}
        isBookAdded={isBookAdded}
        description={description}
        setDescription={setDescription}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
        onClear={onClear}
      />
    </AdminTemplate>
  );
};
