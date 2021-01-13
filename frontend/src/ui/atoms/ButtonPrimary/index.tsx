import React, { FC } from 'react';
import { Button, IButtonProps } from '@ui/atoms/Button';
import styles from './ButtonPrimary.module.scss';

export type ButtonSpecificPropsType = Omit<IButtonProps, 'style'>;

export const ButtonPrimary:FC<ButtonSpecificPropsType> = ({
  type, onClick, children,
}) => (
  <Button
    type={type}
    onClick={onClick}
    style={styles.button_primary}
  >
    {children}
  </Button>
);
