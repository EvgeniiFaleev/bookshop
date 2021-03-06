import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import { ButtonSecondary } from '@ui/atoms/ButtonSecondary';
import { FC } from 'react';
import { IBook } from '@api/API';
import { Link } from 'react-router-dom';
import { cartActions } from '@cart';
import { useDispatch, useSelector } from 'react-redux';
import { IBookInCart } from '@cart/modules/reducer';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '@store/root-reducer';
import styles from './Book.module.scss';

interface IBookProps extends IBook {
  cartBooks: Array<IBookInCart> | null,
  wishList: Array<IBook> | [],
  addItemWishList: (bookId:string) => void,
  openModal: ()=> void
}
export const Book:FC<IBookProps > = ({
  categories, _id: id, title, price, author, picture, description, cartBooks, wishList,
  addItemWishList, openModal,
}) => {
  const categoriesElements = categories.map((item, index, arr) => {
    const space = index < arr.length - 1 ? ',  ' : '';
    return <Link key={uuidv4() as string} className={styles.categories_link} to="/">{`${item}${space}`}</Link>;
  });
  const isAuth = useSelector((state:RootState) => state.auth.user.isAuth);
  let match = -1;
  let wishListMatch = -1;
  if (cartBooks) {
    match = cartBooks.findIndex((item) => id === item.id);
  }
  if (wishList) {
    wishListMatch = wishList.findIndex((item) => id === item._id);
  }
  console.log(match);
  const dispatch = useDispatch();
  const onAddToCart = () => {
    dispatch(cartActions.addBook({
      id,
      author,
      title,
      price,
      quantity: 1,
      picture,
    }));
    openModal()
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
          <ButtonPrimary
            onClick={onAddToCart}
            isDisabled={match >= 0}
            type="button"
          >
            {match >= 0 ? 'IN CART' : 'ADD TO CART'}
          </ButtonPrimary>
          { isAuth ? (
            <ButtonSecondary
              isDisabled={wishListMatch >= 0}
              type="button"
              onClick={() => addItemWishList(id)}
            >
              {wishListMatch >= 0 ? 'IN WISHLIST' : 'ADD TO WISHLIST'}
            </ButtonSecondary>
          ) : (
            <ButtonSecondary type="link" path="/sign_up">
              ADD TO WISHLIST
            </ButtonSecondary>
          )}
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
