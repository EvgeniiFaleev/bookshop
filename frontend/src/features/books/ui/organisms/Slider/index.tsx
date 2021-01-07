import React, { FC, useRef } from 'react';
import left from '@images/left.svg';
import right from '@images/right.svg';
import { Title } from '@books/ui/molecules/Title';
import { BookSliderItem } from '@books/ui/atoms/BookSliderItem';
import { IBook } from '@api/API';
import styles from './Slider.module.scss';

export interface ISliderProps {
  categoryName: string,
  items: Array<IBook>,
  booksCount: number,
}

export const Slider:FC<ISliderProps> = ({ categoryName, items, booksCount }) => {
  const slider = useRef<HTMLDivElement>(null);

  const arrowScroll = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const sliderElement = slider.current;
    if (target.dataset.direction === 'left') {
      sliderElement!.scrollLeft -= Math.floor(sliderElement!.scrollWidth / 3);
    } else {
      sliderElement!.scrollLeft += Math.floor(sliderElement!.scrollWidth / 3);
    }
  };

  const bookElements = items.map((item) => (
    <BookSliderItem
      key={item._id}
      pictureLink={item.picture}
    />
  ));

  return (
    <section className={styles.wrapper}>
      <Title categoryName={categoryName} booksCount={booksCount} />
      <div ref={slider} className={styles.slider}>
        <img src={left} onClick={arrowScroll} className={styles.left_arrow} data-direction="left" alt="" />
        {bookElements}
        <img src={right} onClick={arrowScroll} className={styles.right_arrow} data-direction="right" alt="" />
      </div>

    </section>
  );
};
