import { IBook } from '@api/API';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import { IBookInCart } from '@cart/modules/reducer';
import { cartActions, Modal } from '@cart';
import { useDispatch } from 'react-redux';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createPortal } from 'react-dom';
import styles from './CategoryBooks.module.scss';

interface IcategoryBooksProps {
  books: Array<IBook> | null,
  categoryName: string,
  cartBooks: Array<IBookInCart> | null,
}

export const CategoryBooks: FC<IcategoryBooksProps> = ({ books, categoryName, cartBooks }) => {
  const dispatch = useDispatch();
  const [modalsId, setModalsId] = useState('');
  const booksElems = books?.map(({
    picture, author, title, price, _id: id,
  }) => {
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
        quantity: 1,
        picture,
      }));
      setModalsId(id);
    };
    return (
      <div className={styles.item_container} key={id}>
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
            <FontAwesomeIcon icon={faShoppingBasket} />
            {' '}
            {match >= 0 ? 'In Cart' : 'Add To Cart'}
          </ButtonPrimary>
          {modalsId === id ? createPortal(<Modal
            picture={picture}
            price={price}
            title={title}
            closeModal={() => setModalsId('')}
          />, document.getElementById('root') as Element) : null}
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className={styles.head}>{categoryName}</h1>
      <section className={styles.wrapper}>
        {booksElems || <div> Nothing Found</div>}
      </section>

    </>
  );
};
