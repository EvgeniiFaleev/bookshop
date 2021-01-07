import { FC } from 'react';
import { FieldErrors } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './AdminLogin.module.scss';

type RefReturn =
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;

interface IAdminLoginProps {
  register: ({ required }: { required?: boolean }) => RefReturn;
  onSubmit: () => void,
  errors: FieldErrors,
  required : boolean,
  clearError: ()=> void
}

export const AdminLogin:FC<IAdminLoginProps> = ({
  onSubmit, errors, register, required, clearError,
}) => (
  <form onSubmit={onSubmit} className={styles.adminLogin}>
    <h3>Admin Login</h3>
    {errors.loginError && (
    <span className={styles.mainError}>
      <FontAwesomeIcon icon={faExclamation} />
      {errors.loginError.message}
    </span>
    )}
    <div>
      <label>
        <p>Login</p>
        <input
          ref={register({ required })}
          type="text"
          name="login"
          onFocus={clearError}
        />
        {errors.login && (
        <span className={styles.error}>
          <FontAwesomeIcon icon={faExclamation} />
          This field is required
        </span>
        )}
      </label>
    </div>
    <div>
      <label>
        <p>Password</p>
        <input
          onFocus={clearError}
          ref={register({ required: true })}
          type="password"
          name="password"
        />
        {errors.password && (
        <span className={styles.error}>
          <FontAwesomeIcon icon={faExclamation} />
          This field is required
        </span>
        )}
      </label>
    </div>
    <button type="submit">Login</button>
  </form>
);
