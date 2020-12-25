import icon from '@images/Icon_alternative.webp';
import React from 'react';
import { ButtonPrimary } from '@ui/atoms/button_primary';
import styles from './Title.module.scss';

export const Title = () => (
  <div className={styles.category}>
    <img src={icon} alt="logo" />
    <h2>Category</h2>
    <ButtonPrimary buttonText="view List
      (10 books)"
    />
  </div>
);
