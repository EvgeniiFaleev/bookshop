import logo from '@images/logo.svg';
import basket from '@images/basket.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { FC, ReactNode } from 'react';
import styles from './Header.module.scss';

export const Header:FC<{children: Array<ReactNode>}> = ({ children }) => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <Link to="/" className={styles.flex_1}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h1 className={styles.title}>Bookshop</h1>
      </Link>
      <div className={styles.flex_2}>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <p className={styles.browse}>Find a bookstore browse</p>
        <Link className={styles.basket} to="/cart">
          <img src={basket} alt="basket" />
          {children[0]}
        </Link>
        {children[1]}
        <div />
      </div>
    </div>
  </header>
);
