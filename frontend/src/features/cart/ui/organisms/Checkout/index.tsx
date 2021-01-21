import { useForm } from 'react-hook-form';
import { InputField } from '@ui/molecules/InputField';
import styles from './Checkout.module.scss';
import {ButtonPrimary} from "@ui/atoms/ButtonPrimary";

export const Checkout = () => {
  const {
    register, handleSubmit, errors, setError, clearErrors,
  } = useForm();
  const clearError = () => {
    clearErrors();
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <p className={styles.email}>Email Address</p>

        <InputField
          errorClassName={styles.error}
              // fieldText="E-mail"
          fieldName="email"
          register={register}
          errors={errors}
          clearError={clearError}
        />
        <p className={styles.billing}>Billing Address</p>
        <InputField
          errorClassName={styles.error}
          fieldText="First Name"
          fieldName="firstName"
          register={register}
          errors={errors}
          clearError={clearError}
        />
        <InputField
          errorClassName={styles.error}
          fieldText="Last Name"
          fieldName="lastName"
          register={register}
          errors={errors}
          clearError={clearError}
        />
        <InputField
          errorClassName={styles.error}
          fieldText="Street Address"
          fieldName="streetAddress"
          register={register}
          errors={errors}
          clearError={clearError}
        />
        <InputField
          errorClassName={styles.error}
          fieldText="City"
          fieldName="city"
          register={register}
          errors={errors}
          clearError={clearError}
        />
        <InputField
          errorClassName={styles.error}
          fieldText="Country"
          fieldName="country"
          value="Russia"
          register={register}
          errors={errors}
          clearError={clearError}
        />
        <InputField
          errorClassName={styles.error}
          fieldText="Zip Code"
          fieldName="zip"
          register={register}
          errors={errors}
          clearError={clearError}
        />
      </form>
      <div className={styles.summary}>
        <p className={styles.summary_head}>Order Summary</p>
        <p className={styles.summary_total}>
          <span>Order total</span>
          <span>1000</span>
        </p>
        <ButtonPrimary type={'button'}>
          Make an order
        </ButtonPrimary>
      </div>
    </div>
  );
};
