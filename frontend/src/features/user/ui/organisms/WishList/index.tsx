import { IBook } from '@api/API';
import { FC } from 'react';
import { BookInListInfo } from '@cart';
import { ButtonSecondary, ButtonPrimary } from '@ui';

import styles from './WishList.module.scss';

interface IWishListProps {
  books: Array<IBook>
}

export const WishList: FC<IWishListProps> = ({ books }) => {
  const booksElements = books.map((item) => (
    <div className={styles.wishListItem}>
      <BookInListInfo
        picture={item.picture}
        title={item.title}
        author={item.author}
        price={item.price}
        id={item._id}
      />
      <div className={styles.buttons}>
        <ButtonPrimary type="button" />
        <ButtonSecondary type="button" />
      </div>
    </div>
  ));
  return (
    <div className={styles.wrapper}>
      {booksElements}
    </div>
  );
};
