import React, { FC } from 'react';
import styles from './BookPicture.module.scss';

interface IBookPictureProps {
  pictureLink:string
}
export const BookPicture:FC<IBookPictureProps> = ({ pictureLink }) => (<div className={styles.item}><img src={pictureLink} alt="" /></div>);
