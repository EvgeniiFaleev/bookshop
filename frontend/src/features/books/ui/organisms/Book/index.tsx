import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import { ButtonSecondary } from '@ui/atoms/ButtonSecondary';
import { FC } from 'react';
import { IBook } from '@api/API';
import { Link } from 'react-router-dom';
import styles from './Book.module.scss';

export const Book:FC<IBook > = ({
  categories, _id: id, title, price, author, picture, description,
}) => {
  const categoriesElements = categories.map((item, index, arr) => {
    const space = index < arr.length - 1 ? ',  ' : '';
    return <Link className={styles.categories_link} to="/">{`${item}${space}`}</Link>;
  });

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
          <ButtonPrimary type="button">ADD TO CART</ButtonPrimary>
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
