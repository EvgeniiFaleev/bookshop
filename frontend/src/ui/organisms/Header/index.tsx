import logo from '@images/logo.svg';
import basket from '@images/basket.svg';
import user from '@images/user.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { FC, useState } from 'react';
import styles from './Header.module.scss';

export const Header:FC = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  return (
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
            {children}
          </Link>
          <div className={styles.user_wrapper} onClick={()=> setIsShown(!isShown)}>

              <img
                src={user}
                alt="user"
              />
            <div className={`${styles.account_nav} ${isShown ? styles.active : ''}`}>
              <Link to="/account">My account</Link>
              <Link to="/account/wishlist">My wishlist</Link>
              <div className={styles.arrow_up} />
            </div>
          </div>
          <div />
        </div>
      </div>
    </header>
  );
};
