import React, { FC } from 'react';
import { Button, IButtonProps } from '@ui/atoms/Button';
import styles from './ButtonPrimary.module.scss';

export type ButtonSpecificPropsType = Omit<IButtonProps, 'style'>;

export const ButtonPrimary:FC<ButtonSpecificPropsType> = ({
  type, onClick, children, path, isDisabled = false,
}) => (
  <Button
    path={path}
    type={type}
    onClick={onClick}
    isDisabled={isDisabled}
    style={isDisabled ? styles.button_primary_disabled : styles.button_primary}
  >
    {children}
  </Button>
);
