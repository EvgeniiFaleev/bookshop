import { Link } from 'react-router-dom';
import { FC } from 'react';
import styles from './BookCartInfo.module.scss';

interface IBookCartInfo {
  picture: string,
  title: string,
  author: string,
  id:string
}
export const BookCartInfo: FC<IBookCartInfo> = ({
  picture, title, author, id,
}) => (
  <div className={styles.bookInfo}>
    <Link to={`/book/${id}`}><img src={picture} alt="" /></Link>
    <div className={styles.info}>
      <p className={styles.title}>{title}</p>
      <p className={styles.author}>{author}</p>
    </div>
  </div>
);
