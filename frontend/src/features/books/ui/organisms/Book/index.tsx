import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import { ButtonSecondary } from '@ui/atoms/ButtonSecondary';
import { FC } from 'react';
import { IBook } from '@api/API';
import { Link } from 'react-router-dom';
import { cartActions } from '@cart/modules';
import { useDispatch } from 'react-redux';
import { IBookInCart } from '@cart/modules/reducer';
import styles from './Book.module.scss';

interface IBookProps extends IBook {
  cartBooks: Array<IBookInCart> | null
}
export const Book:FC<IBookProps > = ({
  categories, _id: id, title, price, author, picture, description, cartBooks,
}) => {
  const categoriesElements = categories.map((item, index, arr) => {
    const space = index < arr.length - 1 ? ',  ' : '';
    return <Link className={styles.categories_link} to="/">{`${item}${space}`}</Link>;
  });

  let match = -1;
  if (cartBooks) {
    match = cartBooks.findIndex((item) => id === item.id);
  }
  console.log(match);
  const dispatch = useDispatch();
  const onAddToCart = () => {
    dispatch(cartActions.addBook({
      id,
      author,
      title,
      price,
    }));
  };
  return (

    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={picture} alt="" />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <p className={styles.author}>
          <Link to="/">
            {author}
          </Link>
          <span> (Author)</span>
        </p>
        <div className={styles.price}>
          Price:
          <span>
            {` $${price}`}
          </span>
        </div>
        <div className={styles.buttons}>
          <ButtonPrimary onClick={onAddToCart} isDisabled={match >= 0} type="button">ADD TO CART</ButtonPrimary>
          <ButtonSecondary type="button">
            ADD TO
            WISHLIST
          </ButtonSecondary>
        </div>
        <h2 className={styles.description_head}>Description</h2>
        <pre>{description}</pre>
        <p className={styles.categories}>
          <span className={styles.categories_head}>Categories:  </span>
          {categoriesElements}
        </p>
      </div>
    </div>
  );
};