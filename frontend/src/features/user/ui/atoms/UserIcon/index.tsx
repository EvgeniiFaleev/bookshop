import styles from './UserIcon.module.scss';
import user from '@images/user.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { useEffect, useState } from 'react';

export const UserIcon = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    document.addEventListener('click',
      (e) => {
        const target = e.target as Element;
        if (!target.closest(`.${styles.user_wrapper}`)) setIsShown(false);
      });
  }, []);

  const isAuth = useSelector((state:RootState) => state.auth.user.isAuth);

  return (
    <div className={styles.user_wrapper} onClick={() => setIsShown(!isShown)}>

      <img
        src={user}
        alt="user"
      />
      <div className={`${styles.account_nav} ${isShown ? styles.active : ''}`}>
        {isAuth ? (
          <>
            <Link to="/account">My account</Link>
            <Link to="/account/wishlist"> My wishlist</Link>
            {/* <Link to="/account/wishlist">Logout</Link> */}
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/sign_up">SignUp</Link>
          </>
        )}
        <div className={styles.arrow_up} />
      </div>
    </div>
  );
};
