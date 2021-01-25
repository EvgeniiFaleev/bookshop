import { InputField } from '@ui/molecules/InputField';
import { FC } from 'react';
import { IHookFormProps } from '@pages/admin/login';
import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import styles from './SignUp.module.scss';

export const SignUp: FC<IHookFormProps> = ({
  errors, register, onSubmit, validate,
}) => (
  <div className={styles.wrapper}>
    <h1 className={styles.signUp_head}>Create an account</h1>
    <form className={styles.form} onSubmit={onSubmit}>

      <InputField
        errorClassName={styles.error}
        pattern={{
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'Enter a valid e-mail address',
        }}
        fieldText="Email"
        fieldName="email"
        register={register}
        errors={errors}
      />
      <InputField type="password" errorClassName={styles.error} fieldText="Password" fieldName="password" register={register} errors={errors} />
      <InputField type="password" errorClassName={styles.error} validate={validate} fieldText="Password confirmation" fieldName="password_repeat" register={register} errors={errors} />
      <ButtonPrimary type="submit">
        Create
      </ButtonPrimary>
    </form>
  </div>
);
