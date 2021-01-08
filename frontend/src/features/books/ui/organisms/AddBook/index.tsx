import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { IHookFormProps } from '@pages/admin/login';
import { InputField } from '@books/../../../../../ui/molecules/InputField';
import styles from './AddBook.module.scss';

interface IAddBokProps extends IHookFormProps {}

export const AddBook:FC<IAddBokProps> = ({
  onSubmit, errors, register, clearError,
}) => (
  <form onSubmit={onSubmit} className={styles.addBookForm}>
    <h3>Book Description</h3>
    {errors.bookError && (
      <span className={styles.mainError}>
        <FontAwesomeIcon icon={faExclamation} />
        {errors.loginError.message}
      </span>
    )}
    <InputField
      className={styles.error}
      fieldText="Author Name"
      fieldName="author"
      register={register}
      errors={errors}
      clearError={clearError}
    />
    <InputField
      className={styles.error}
      fieldText="Book Title"
      fieldName="title"
      register={register}
      errors={errors}
      clearError={clearError}
    />
    <InputField
      className={styles.error}
      fieldText="Price"
      fieldName="price"
      register={register}
      errors={errors}
      clearError={clearError}
    />
    <InputField
      type="file"
      className={styles.error}
      fieldText="Add Picture"
      fieldName="picture"
      register={register}
      errors={errors}
      clearError={clearError}
    />
    <button type="submit">Add Book</button>
  </form>
);
