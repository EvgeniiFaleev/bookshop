import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamation,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { IHookFormProps } from '@pages/admin/login';
import { FC } from 'react';

interface IInputFieldProps extends Omit<IHookFormProps, 'onSubmit'>{
  className: string,
  fieldText: string,
  iconError?: IconDefinition,
  fieldName: string,
  type?: string
}

export const InputField:FC<IInputFieldProps> = ({
  type = 'text',
  register, errors, required = true, fieldText, className, iconError = faExclamation, fieldName, clearError,
}) => (
  <div>
    <label>
      <p>{fieldText}</p>
      <input
        ref={register({ required })}
        type={type}
        name={fieldName}
        onFocus={clearError}
      />
      {errors[fieldName] && (
      <span className={className}>
        <FontAwesomeIcon icon={iconError} />
        This field is required
      </span>
      )}
    </label>
  </div>
);
