import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import logo from '@images/logo.svg';
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
      <div className={styles.flex2}>
        <ButtonPrimary type="link">login </ButtonPrimary>
        <ButtonPrimary type="link">Sign up</ButtonPrimary>
      </div>
    </div>
  </footer>
);
