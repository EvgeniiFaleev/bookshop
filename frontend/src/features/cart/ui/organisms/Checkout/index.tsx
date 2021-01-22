import { useForm } from 'react-hook-form';
import { InputField } from '@ui/molecules/InputField';
import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import styles from './Checkout.module.scss';
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from "@store/root-reducer";

export const Checkout = () => {
  const {
    register, handleSubmit, errors, setError, clearErrors, trigger,
  } = useForm();
  // const clearError = (e:FocusEvent<HTMLInputElement>) => {
  //   clearErrors(e.currentTarget.name);
  // };
  const cartBooks = useSelector((state:RootState) => state.cart.books, shallowEqual);
  const onSubmit = (data: FormData) => {
    const order = {...data, orderList:  cartBooks}
    console.log(JSON.stringify(order)); };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputs}>
        <p className={styles.email}>Email Address</p>

        <InputField
          type="email"
          errorClassName={styles.error}
              // fieldText="E-mail"
          fieldName="email"
          register={register}
          errors={errors}
          required="Enter your e-mail"
          pattern={{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Enter a valid e-mail address',
          }}
          // clearError={clearError}
        />
        <p className={styles.billing}>Billing Address</p>
        <InputField
          errorClassName={styles.error}
          fieldText="First Name"
          fieldName="firstName"
          register={register}
          errors={errors}
          // clearError={clearError}
        />
        <InputField
          errorClassName={styles.error}
          fieldText="Last Name"
          fieldName="lastName"
          register={register}
          errors={errors}
          // clearError={clearError}
        />
        <InputField
          errorClassName={styles.error}
          fieldText="Street Address"
          fieldName="streetAddress"
          register={register}
          errors={errors}
          // clearError={clearError}
        />
        <InputField
          errorClassName={styles.error}
          fieldText="City"
          fieldName="city"
          register={register}
          errors={errors}
          // clearError={clearError}
        />
        <InputField
          errorClassName={styles.error}
          fieldText="Country"
          fieldName="country"
          value="Russia"
          register={register}
          errors={errors}
          // clearError={clearError}
        />
        <InputField
          errorClassName={styles.error}
          fieldText="Phone Number"
          fieldName="phoneNumber"
          register={register}
          type="tel"
          required="Enter valid phone number"
          errors={errors}
          // clearError={clearError}
        />
      </div>

      <div className={styles.summary}>
        <p className={styles.summary_head}>Order Summary</p>
        <p className={styles.summary_total}>
          <span>Order total</span>
          <span>1000</span>
        </p>
        <ButtonPrimary
          type="submit"
        >
          Make an order
        </ButtonPrimary>
      </div>
    </form>

  );
};
