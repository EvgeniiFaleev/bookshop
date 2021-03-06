import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamation,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { IHookFormProps } from '@pages/admin/login';
import { FC } from 'react';

interface IInputFieldProps extends Omit<IHookFormProps, 'onSubmit'>{
  errorClassName: string,
  fieldText?: string,
  iconError?: IconDefinition,
  fieldName: string,
  type?: string,
  value?:string
}

export const InputField:FC<IInputFieldProps> = ({
  type = 'text', value,
  register, errors, required = true,
  fieldText,
  errorClassName, iconError = faExclamation,
  fieldName, onClear, children,
  pattern, minLength, maxLength, validate,

}) => (
  <div>
    <label>
      {fieldText && <p>{fieldText}</p>}
      <input
        ref={register({
          required, pattern, minLength, maxLength, validate,
        })}
        type={type}
        name={fieldName}
        onChange={onClear}
        value={value}
        readOnly={Boolean(value)}
      />
      {children}
      {errors[fieldName] && (
      <span className={errorClassName}>
        <FontAwesomeIcon icon={iconError} />
        {' '}
        {errors[fieldName].message || 'This field is required'}
      </span>
      )}
    </label>
  </div>
);
