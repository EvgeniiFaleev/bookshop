import React, { FC } from 'react';
import { Button } from '@ui/atoms/Button';
import { ButtonSpecificPropsType } from '@ui/atoms/ButtonPrimary';
import styles from './ButtonSecondary.module.scss';

export const ButtonSecondary:FC<ButtonSpecificPropsType> = ({
  type, onClick, children, isDisabled, path,
}) => (
  <Button
    type={type}
    onClick={onClick}
    style={styles.button_secondary}
    isDisabled={isDisabled}
    path={path}
  >
    {children}
  </Button>
);
