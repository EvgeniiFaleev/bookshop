import { Link } from 'react-router-dom';
import { FC } from 'react';
import styles from './BookCartInfo.module.scss';

interface IBookInListInfo {
  picture: string,
  title: string,
  author: string,
  id:string,
  price? : number
}
export const BookInListInfo: FC<IBookInListInfo> = ({
  picture, title, author, id, price
}) => (
  <div className={styles.bookInfo}>
    <Link to={`/book/${id}`}><img src={picture} alt="" /></Link>
    <div className={styles.info}>
      <p className={styles.title}>{title}</p>
      <p className={styles.author}>{author}</p>
      {price && <p className={styles.price}>{price}</p>}
    </div>
  </div>
);
