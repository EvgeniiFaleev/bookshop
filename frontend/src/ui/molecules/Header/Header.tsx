import logo from '@images/logo.svg';
import basket from '@images/basket.svg';
import user from '@images/user.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import styles from './Header.module.scss';

export const Header = () => (
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
        <Link className={styles.basket} to="/basket"><img src={basket} alt="basket" /></Link>
        <Link className={styles.user} to="/user"><img src={user} alt="user" /></Link>
        <div />
      </div>
    </div>
  </header>
);
