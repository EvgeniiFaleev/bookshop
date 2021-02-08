import { FC } from 'react';
import { Header } from '@ui/organisms/Header';
import { Footer } from '@ui/organisms/Footer';
import { CartCounter } from '@cart';
import { UserIcon } from '@user';
import styles from './CommonTemplate.module.scss';

export const CommonTemplate :FC = ({ children }) => (
  <div className={styles.wrapper}>
    <Header>
      <CartCounter />
      <UserIcon />
    </Header>
    <main className={styles.content}>
      {children}
    </main>
    <Footer />
  </div>
);
