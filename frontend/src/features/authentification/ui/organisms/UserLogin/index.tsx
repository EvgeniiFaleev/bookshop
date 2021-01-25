import { InputField } from '@ui/molecules/InputField';
import { FC } from 'react';
import { IHookFormProps } from '@pages/admin/login';
import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import styles from './UserLogin.module.scss';

export const UserLogin:FC<IHookFormProps> = ({ errors, register }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.login_head}>Login as Existing Customer</h1>
    <form className={styles.form}>

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
      />
      <InputField type="password" errorClassName={styles.error} fieldText="Password" fieldName="password" register={register} errors={errors} />
      <ButtonPrimary type="submit">
        Login
      </ButtonPrimary>
    </form>
  </div>
);
