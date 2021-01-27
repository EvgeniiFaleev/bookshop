import { InputField } from '@ui/molecules/InputField';
import { FC } from 'react';
import { IHookFormProps } from '@pages/admin/login';
import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './UserLogin.module.scss';

export const UserLogin:FC<IHookFormProps> = ({
  errors, register, onSubmit, onFocus,
}) => (
  <div className={styles.wrapper}>
    <h1 className={styles.login_head}>Login as Existing Customer</h1>
    <form className={styles.form} onSubmit={onSubmit}>
      {errors.loginError && (
      <span className={styles.error}>
        <FontAwesomeIcon icon={faExclamation} />
        {errors.loginError.message}
      </span>
      )}
      <InputField
        errorClassName={styles.error}
        fieldText="Email"
        fieldName="email"
        register={register}
        errors={errors}
        required="Enter your e-mail"
        pattern={{
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'Enter a valid e-mail address',
        }}
        onFocus={onFocus}
      />
      <InputField onFocus={onFocus} type="password" errorClassName={styles.error} fieldText="Password" fieldName="password" register={register} errors={errors} />
      <ButtonPrimary type="submit">
        Login
      </ButtonPrimary>
    </form>
  </div>
);
