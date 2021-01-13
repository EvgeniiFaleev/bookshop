import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './BookPicture.module.scss';

interface IBookPictureProps {
  pictureLink:string,
  id: string
}
export const BookSliderItem:FC<IBookPictureProps> = ({ pictureLink, id }) => (
  <div className={styles.item}>
    <Link to={`/book/${id}`}><img src={pictureLink} alt="" /></Link>
  </div>
);
