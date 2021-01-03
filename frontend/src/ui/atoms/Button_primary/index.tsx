import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import styles from './ButtonPrimary.module.scss';

interface IButtonProps {
  buttonText:string
}

export const ButtonPrimary:FC<IButtonProps> = ({ buttonText }) => (

  <Link className={styles.button_primary} to="/">
    {buttonText}
  </Link>

);
