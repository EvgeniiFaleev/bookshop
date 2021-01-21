import { FC } from 'react';
import { Header } from '@ui/organisms/Header';
import { Footer } from '@ui/organisms/Footer';
import { CartCounter } from '@cart/ui/atoms/CartCounter';
import styles from './CommonTemplate.module.scss';

export const CommonTemplate :FC = ({ children }) => (
  <div className={styles.wrapper}>
    <Header>
      <CartCounter />
    </Header>
    <main className={styles.content}>
      {children}
    </main>
    <Footer />
  </div>
);
