import { Title } from '@books/ui/molecules/Title';
import { ISliderProps } from '@books/ui/organisms/Slider';
import { FC } from 'react';
import { BookChartItem } from '@books/ui/atoms/BookChartItem';
import styles from './BooksChart.module.scss';

interface IBooksChartProps extends ISliderProps{}

export const BooksChart:FC<IBooksChartProps> = ({ categoryName, booksCount, items }) => {
  const bookChartElems = items
    .map((item) => (
      <BookChartItem
        key={item._id}
        picture={item.picture}
        author={item.author}
        title={item.title}
        price={item.price}
      />
    ));

  return (
    <section className={styles.wrapper}>
      <Title categoryName={categoryName} booksCount={booksCount} />
      <div className={styles.chart}>
        {bookChartElems}
      </div>
    </section>
  );
};
