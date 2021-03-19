import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { IHookFormProps } from '@pages/admin/login';
import { InputField } from '@ui/molecules/InputField';
import styles from './AdminLogin.module.scss';

interface IAdminLoginProps extends IHookFormProps{}

export const AdminLogin:FC<IAdminLoginProps> = ({
  onSubmit, errors, register, required, onClear,
}) => (
  <form onSubmit={onSubmit} className={styles.adminLogin}>
    <h3>Admin Login</h3>
    {errors.loginError && (
    <span className={styles.mainError}>
      <FontAwesomeIcon icon={faExclamation} />
      {errors.loginError.message}
    </span>
    )}
    <InputField
      type="text"
      errorClassName={styles.error}
      fieldText="Login"
      iconError={faExclamation}
      fieldName="login"
      register={register}
      errors={errors}
      required={required}
      onClear={onClear}
    />
    <InputField
      errorClassName={styles.error}
      fieldText="Password"
      iconError={faExclamation}
      fieldName="password"
      type="password"
      register={register}
      errors={errors}
      required={required}
      onClear={onClear}
    />
    <button type="submit">Login</button>
  </form>
);
