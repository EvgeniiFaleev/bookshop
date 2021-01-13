import icon from '@images/Icon_alternative.webp';
import React, { FC } from 'react';
import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import { ISliderProps } from '@books/ui/organisms/Slider';
import styles from './Title.module.scss';

type TitlePropsType = Omit<ISliderProps, 'items'>;

export const Title:FC<TitlePropsType> = ({ categoryName, booksCount }) => (
  <div className={styles.category}>
    <img src={icon} alt="logo" />
    <h2>{categoryName}</h2>
    <ButtonPrimary path={`/category/${categoryName}`} type="link">{`view List (${booksCount})`}</ButtonPrimary>
  </div>
);
