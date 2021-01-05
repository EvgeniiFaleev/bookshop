import styles from '@ui/organisms/BooksChart/BooksChart.module.scss';
import { FC } from 'react';

interface IBooksChartItemProps {
  picture:string,
  title:string,
  author: string,
  price: number
}

export const BookChartItem: FC<IBooksChartItemProps> = ({
  picture, title, author, price,
}) => (
  <div className={styles.item}>
    <img src={picture} alt="" />
    <div className={styles.bookInfo}>
      <p>{title}</p>
      <p>{author}</p>
      <p>{price}</p>
    </div>
  </div>
);
