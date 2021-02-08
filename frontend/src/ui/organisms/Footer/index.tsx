import logo from '@images/logo.svg';
import { FooterButtons } from '@authentication';
import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <div className={styles.flex1}>
        <div>
          <img src={logo} alt="" />
          <span>Bookshop</span>
        </div>
      </div>
      <FooterButtons />
    </div>
  </footer>
);
