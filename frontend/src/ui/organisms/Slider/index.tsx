import React, { FC, useRef } from 'react';
import one from '@images/1.webp';
import two from '@images/2.webp';
import three from '@images/3.webp';
import four from '@images/4.webp';
import five from '@images/5.webp';
import six from '@images/6.webp';
import seven from '@images/7.jpg';
import eight from '@images/8.webp';
import nine from '@images/9.jpg';
import ten from '@images/10.webp';
import eleven from '@images/11.webp';
import left from '@images/left.svg';
import right from '@images/right.svg';
import { Link } from 'react-router-dom';
import icon from '@images/Icon_alternative.webp';
import { Title } from '@ui/molecules/Title';
import styles from './Slider.module.scss';

export const Slider:FC = () => {
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

  return (
    <section className={styles.wrapper}>
      <Title />
      <div ref={slider} onClick={arrowScroll} className={styles.slider}>
        <img src={left} className={styles.left_arrow} data-direction="left" alt="" />
        <div className={styles.item}>
          <img src={one} alt="" />
        </div>
        <div className={styles.item}><img src={two} alt="" /></div>
        <div className={styles.item}>
          <img src={three} alt="" />
        </div>
        <div className={styles.item}><img src={four} alt="" /></div>
        <div className={styles.item}><img src={five} alt="" /></div>
        <div className={styles.item}><img src={six} alt="" /></div>
        <div className={styles.item}>
          <img src={seven} alt="" />
        </div>
        <div className={styles.item}>
          <img src={eight} alt="" />
        </div>
        <div className={styles.item}><img src={nine} alt="" /></div>
        <div className={styles.item}><img src={ten} alt="" /></div>
        <div className={styles.item}>
          <img src={eleven} alt="" />
        </div>
        <img src={right} onClick={arrowScroll} className={styles.right_arrow} data-direction="right" alt="" />
      </div>

    </section>
  );
};
