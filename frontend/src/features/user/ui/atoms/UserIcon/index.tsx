import user from '@images/user.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { useEffect, useState } from 'react';
import { userAuthActions } from '@authentication/index';
import styles from './UserIcon.module.scss';

export const UserIcon = () => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener('click',
      (e) => {
        const target = e.target as Element;
        if (!target.closest(`.${styles.user_wrapper}`)) setIsShown(false);
      });
  }, []);

  const onLogout = () => {
    dispatch(userAuthActions.logout());
  };
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
            <p className={styles.logout} onClick={onLogout}>Logout</p>
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
