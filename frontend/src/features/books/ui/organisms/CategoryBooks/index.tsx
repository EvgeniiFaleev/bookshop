import { IBook } from '@api/API';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import { IBookInCart } from '@cart/modules/reducer';
import styles from './CategoryBooks.module.scss';
import {cartActions} from "@cart/modules";
import {useDispatch} from "react-redux";

interface IcategoryBooksProps {
  books: Array<IBook>,
  categoryName: string,
  cartBooks: Array<IBookInCart> | null,
}

export const CategoryBooks: FC<IcategoryBooksProps> = ({ books, categoryName, cartBooks }) => {
  const booksElems = books.map(({
    picture, author, title, price, _id: id,
  }) => {
    const dispatch = useDispatch();
    let match = -1;
    if (cartBooks) {
      match = cartBooks.findIndex((item) => id === item.id);
    }
    const onAddToCart = () => {
      dispatch(cartActions.addBook({
        id,
        author,
        title,
        price,
      }));
    };
    return (
      <div className={styles.item_container}>
        <div className={styles.book_item}>

          <div className={styles.picture}>
            <Link to={`/book/${id}`}>
              <div className={styles.picture_cover}>
                <img
                  src={picture}
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div className={styles.info}>
            <Link to={`/book/${id}`}>
              <p className={styles.title}>
                {title}
              </p>
            </Link>
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.author}>{author}</p>
          <p
            className={styles.price}
          >
            {price}
          </p>
          <ButtonPrimary onClick={onAddToCart} isDisabled={match >= 0} type="button">
            Add To Cart
          </ButtonPrimary>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className={styles.head}>{categoryName}</h1>
      <section className={styles.wrapper}>
        {booksElems}
      </section>
    </>
  );
};