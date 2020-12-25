import { Title } from '@ui/molecules/Title';
import one from '@images/book1_mini.jpg';
import two from '@images/book2_mini.webp';
import three from '@images/book3_mini.webp';
import four from '@images/book4_mini.webp';
import five from '@images/book5_mini.webp';
import six from '@images/book6_mini.webp';
import styles from './BooksChart.module.scss';

export const BooksChart = () => (
  <section className={styles.wrapper}>
    <Title />
    <div className={styles.chart}>
      <div className={styles.item_block}>
        <div className={styles.item}>
          <img src={one} alt="" />
          <div className={styles.bookInfo}>
            <p>Titlefsdfsdfsdfsdfsdfsd</p>
            <p>Author</p>
            <p>Price</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={two} alt="" />
          <div className={styles.bookInfo}>
            <p>Title</p>
            <p>Author</p>
            <p>Price</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={three} alt="" />
          <div className={styles.bookInfo}>
            <p>Title</p>
            <p>Author</p>
            <p>Price</p>
          </div>
        </div>
      </div>
      <div className={styles.item_block}>
        <div className={styles.item}>
          <img src={four} alt="" />
          <div className={styles.bookInfo}>
            <p>Title</p>
            <p>Author</p>
            <p>Price</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={five} alt="" />
          <div className={styles.bookInfo}>
            <p>Title</p>
            <p>Author</p>
            <p>Price</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={six} alt="" />
          <div className={styles.bookInfo}>
            <p>Title</p>
            <p>Author</p>
            <p>Price</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
