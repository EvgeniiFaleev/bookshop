import {FC} from 'react';
import {Button} from '@ui/atoms/Button';
import {ButtonSpecificPropsType} from '@ui/atoms/ButtonPrimary';
import styles from './ButtonSecondary.module.scss';

export const ButtonSecondary:FC<ButtonSpecificPropsType> = ({
  type, onClick, children,
}) => (
  <Button
    type={type}
    onClick={onClick}
    style={styles.button_secondary}
  >
    {children}
  </Button>
);
