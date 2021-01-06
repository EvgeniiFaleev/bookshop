import { useForm } from 'react-hook-form';
import { FC } from 'react';
import styles from './AdminLogin.module.scss';

interface IAdminLoginProps {
  onSubmit: (FormData:FormData)=> void
}

export const AdminLogin:FC<IAdminLoginProps> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.adminLogin}>
      <h3>Admin Login</h3>
      <div>
        <label>
          <p>Login</p>
          <input
            ref={register({ required: true })}
            type="text"
            name="login"
          />
          {errors.login && <span className={styles.error}>This field is required</span>}
        </label>
      </div>
      <div>
        <label>
          <p>Password</p>
          <input
            ref={register({ required: true })}
            type="password"
            name="password"
          />
          {errors.password && <span className={styles.error}>This field is required</span>}
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
