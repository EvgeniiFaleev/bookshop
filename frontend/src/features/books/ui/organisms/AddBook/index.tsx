import { Dispatch, FC, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamation,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { IHookFormProps } from '@pages/admin/login';
import { InputField } from '@ui/molecules/InputField';
import styles from './AddBook.module.scss';

interface IAddBokProps extends IHookFormProps {
  description:string,
  setDescription: Dispatch<SetStateAction<string>>
  isBookAdded: boolean,
  setCategoriesCount: Dispatch<SetStateAction<number>>
  categoriesCount : number
}

export const AddBook:FC<IAddBokProps> = ({
  onSubmit,
  errors,
  register,
  clearError, setDescription, isBookAdded, categoriesCount, setCategoriesCount,
}) => {
  const categoryElements = [];
  for (let i = 0; i < categoriesCount; i++) {
    categoryElements.push(
      <InputField
        errorClassName={styles.error}
        fieldText="Category"
        fieldName="categories"
        register={register}
        errors={errors}
        clearError={clearError}
        key={i}
      >
        {i > 0 ? (
          <FontAwesomeIcon
            className={styles.minus}
            onClick={() => {
              if (categoriesCount > 1) setCategoriesCount((prevState) => prevState - 1);
            }}
            icon={faMinus}
          />
        ) : '' }
      </InputField>,
    );
  }

  return (
    <form onSubmit={onSubmit} className={styles.addBookForm}>
      <h3>Book Description</h3>
      {errors.bookError && (
      <span className={styles.mainError}>
        <FontAwesomeIcon icon={faExclamation} />
        {errors.bookError.message}
      </span>
      )}
      {isBookAdded && (
      <span className={styles.success}>
        <FontAwesomeIcon icon={faExclamation} />
        Success! You`ve been added the book
      </span>
      )}
      <InputField
        errorClassName={styles.error}
        fieldText="Author Name"
        fieldName="author"
        register={register}
        errors={errors}
        clearError={clearError}
      />
      <InputField
        errorClassName={styles.error}
        fieldText="Book Title"
        fieldName="title"
        register={register}
        errors={errors}
        clearError={clearError}
      />
      <InputField
        errorClassName={styles.error}
        fieldText="Price"
        fieldName="price"
        register={register}
        errors={errors}
        clearError={clearError}
      />
      <InputField
        type="file"
        errorClassName={styles.error}
        fieldText="Add Picture"
        fieldName="picture"
        register={register}
        errors={errors}
        clearError={clearError}
      />
      {categoryElements}
      <button
        className={styles.addCategory}
        onClick={() => { setCategoriesCount((prevState) => prevState + 1); }}
        type="button"
      >
        Add Category
      </button>
      <p className={styles.description}>
        <p>Description:</p>
        <span
          onKeyDown={(e) => { setDescription(e.currentTarget.textContent as string); }}
          className={styles.textarea}
          role="textbox"
          contentEditable
        />
        {errors.descError && (
        <div className={styles.descError}>
          <FontAwesomeIcon icon={faExclamation} />
          {errors.descError.message}
        </div>
        )}
      </p>
      <button type="submit">Add Book</button>
    </form>
  );
};
