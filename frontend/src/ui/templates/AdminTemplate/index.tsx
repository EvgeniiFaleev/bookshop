import logo from '@images/Icon_alternative.webp';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {FC} from 'react';
import {adminAuthActions} from '@authentication/modules/admin';
import {useDispatch} from 'react-redux';
import styles from './AdminTemplate.module.scss';

export const AdminTemplate:FC = ({ children }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(adminAuthActions.logout());
  };
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <p className={styles.logo}>
          <img src={logo} alt="" />
          <span>Books Shop</span>
        </p>
        <p className={styles.item}>
          <FontAwesomeIcon icon={faBook} />
          <span className={styles.item_text}>Add Book</span>
        </p>
      </nav>
      <div className={styles.header_wrapper}>
        <header className={styles.header}>
          <div className={styles.header_item} onClick={logout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <p>Log Out</p>
          </div>
        </header>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
};
