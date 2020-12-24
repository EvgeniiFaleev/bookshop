import { FC } from 'react';
import { Header } from '@ui/molecules/Header/Header';
import { Footer } from '@ui/molecules/Footer/Footer';
import styles from './CommonTemplate.module.scss';

export const CommonTemplate :FC = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.content}>
      {children}
    </main>
    <Footer />
  </div>
);
