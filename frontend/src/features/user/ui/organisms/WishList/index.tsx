import { IBook } from '@api/API';
import { FC } from 'react';
import { BookInListInfo } from '@cart';
import { ButtonPrimary, ButtonSecondary } from '@ui';

import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IBookInCart } from '@cart/modules/reducer';
import styles from './WishList.module.scss';

interface IWishListProps {
  books: Array<IBook>,
  onAddToCart: (book: IBookInCart) => void,
  cartBooks: Array<IBookInCart> | null,
  deleteItem: (bookId:string) => void
}

export const WishList: FC<IWishListProps> = ({
  books, onAddToCart, cartBooks, deleteItem,
}) => {
  let match = -1;

  const booksElements = books.map(({
    picture, author, title, price, _id: id,
  }) => {
    if (cartBooks) {
      match = cartBooks.findIndex((item) => id === item.id);
    }
    return (
      <div className={styles.wishListItem} key={id}>
        <BookInListInfo
          picture={picture}
          title={title}
          author={author}
          price={price}
          id={id}
        />
        <div className={styles.buttons}>
          <ButtonPrimary
            isDisabled={match >= 0}
            type="button"
            onClick={() => {
              onAddToCart({
                picture, author, title, price, id, quantity: 1,
              });
            }}
          >
            <FontAwesomeIcon icon={faShoppingBasket} />
            {match >= 0 ? 'In Cart' : 'Add To Cart'}
          </ButtonPrimary>
          <ButtonSecondary onClick={() => deleteItem(id)} type="button">Delete</ButtonSecondary>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.head}>My Wishlist</h1>

      {books.length === 0 ? <div> You Have an empty Wishlist</div> : booksElements}
      <div className={styles.home_button}>
        <ButtonPrimary path="/" type="link">Continue Shopping</ButtonPrimary>
      </div>
    </div>
  );
};
