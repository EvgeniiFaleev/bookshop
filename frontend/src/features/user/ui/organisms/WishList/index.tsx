import { IBook } from '@api/API';
import { FC } from 'react';
import { BookInListInfo } from '@cart';
import { ButtonSecondary, ButtonPrimary } from '@ui';

import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <ButtonPrimary type="button">
          <FontAwesomeIcon icon={faShoppingBasket} />
          Add to Cart
        </ButtonPrimary>
        <ButtonSecondary type="button">Delete</ButtonSecondary>
      </div>
    </div>
  ));
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.head}>My Wishlist</h1>

      {booksElements}
      <div className={styles.home_button}>
        <ButtonPrimary path="/" type="link">Continue Shopping</ButtonPrimary>
      </div>
    </div>
  );
};
