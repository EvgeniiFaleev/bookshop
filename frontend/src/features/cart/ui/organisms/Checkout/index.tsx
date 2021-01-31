import { InputField } from '@ui/molecules/InputField';
import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import { FC } from 'react';
import { IHookFormProps } from '@pages/admin/login';
import styles from './Checkout.module.scss';

export const Checkout: FC<IHookFormProps & {totalPrice: undefined | number}> = ({ register, errors, onSubmit,totalPrice }) => (
  <form onSubmit={onSubmit} className={styles.form}>
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
      />
      <p className={styles.billing}>Billing Address</p>
      <InputField
        errorClassName={styles.error}
        fieldText="First Name"
        fieldName="firstName"
        register={register}
        errors={errors}
      />
      <InputField
        errorClassName={styles.error}
        fieldText="Last Name"
        fieldName="lastName"
        register={register}
        errors={errors}
      />
      <InputField
        errorClassName={styles.error}
        fieldText="Street Address"
        fieldName="streetAddress"
        register={register}
        errors={errors}
      />
      <InputField
        errorClassName={styles.error}
        fieldText="City"
        fieldName="city"
        register={register}
        errors={errors}
      />
      <InputField
        errorClassName={styles.error}
        fieldText="Country"
        fieldName="country"
        value="Russia"
        register={register}
        errors={errors}
      />
      <InputField
        errorClassName={styles.error}
        fieldText="Phone Number"
        fieldName="phoneNumber"
        register={register}
        type="tel"
        pattern={{
          value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
          message: 'Enter a valid phone number',
        }}
        required="Enter your phone number"
        errors={errors}
      />
    </div>

    <div className={styles.summary}>
      <p className={styles.summary_head}>Order Summary</p>
      <p className={styles.summary_total}>
        <span>Order total</span>
        <span>{totalPrice}</span>
      </p>
      <ButtonPrimary
        type="submit"
      >
        Make an order
      </ButtonPrimary>
    </div>
  </form>
);
