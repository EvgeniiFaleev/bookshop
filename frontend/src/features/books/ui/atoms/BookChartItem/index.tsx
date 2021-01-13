import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './BooksChartItem.module.scss';

interface IBooksChartItemProps {
  picture:string,
  title:string,
  author: string,
  price: number,
  id: string
}

export const BookChartItem: FC<IBooksChartItemProps> = ({
  picture, title, author, price, id
}) => (
  <div className={styles.item}>
    <Link to={`/book/${id}`}><img src={picture} alt="" /></Link>
    <div className={styles.bookInfo}>
      <p><Link to={`/book/${id}`}>{title}</Link></p>
      <p>{author}</p>
      <p>{price}</p>
    </div>
  </div>
);
