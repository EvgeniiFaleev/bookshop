import { InputField } from '@ui/molecules/InputField';
import { FC } from 'react';
import { IHookFormProps } from '@pages/admin/login';
import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './SignUp.module.scss';
import {CommonTemplate} from "@templates";

export const SignUp: FC<IHookFormProps & {isRegister: boolean}> = ({
  errors, register, onSubmit, validate, onFocus,isRegister
}) => (
  <div className={styles.wrapper}>
    {isRegister ? <div>Your account has been created</div> :
<>
      <h1 className={styles.signUp_head}>Create an account</h1>
        < form className={styles.form} onSubmit={onSubmit}>
    {errors.signUpError && (
      <span className={styles.error}>
      <FontAwesomeIcon icon={faExclamation} />
      {errors.signUpError.message}
      </span>
      )}
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
      onFocus={onFocus}
      />
      <InputField type="password" onFocus={onFocus} errorClassName={styles.error} fieldText="Password" fieldName="password" register={register} errors={errors} />
      <InputField type="password" onFocus={onFocus} errorClassName={styles.error} validate={validate} fieldText="Password confirmation" fieldName="password_repeat" register={register} errors={errors} />
      <ButtonPrimary type="submit">
      Create
      </ButtonPrimary>
      </form>
</>
    }
  </div>
);
