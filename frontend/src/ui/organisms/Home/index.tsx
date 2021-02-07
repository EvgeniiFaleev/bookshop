import search from '@images/search.svg';
import { FC } from 'react';
import banner from '@images/banner.webp';
import banner_mobile from '@images/banner_mobile.webp';
import styles from './Home.module.scss';

export interface IHomeProps {
  booksCount: number;
}

export const Home:FC<IHomeProps> = ({ booksCount, children }) => (
  <>
    <section className={styles.home}>
      <h1 className={styles.slogan}>
        Support Local Bookstores.
        <br />
        Shop Online
        with Bookshop.
      </h1>
      {children}
    </section>
    <p className={styles.booksCount}>
      At this moment our count is
      <span className={styles.booksCount_number}>
        {` ${booksCount} `}
      </span>
      books
    </p>
    <picture className={styles.banner}>
      <source srcSet={banner} media="(min-width: 1024px)" />
      <source srcSet={banner_mobile} />
      <img src={banner} alt="banner" />
    </picture>
  </>
);
