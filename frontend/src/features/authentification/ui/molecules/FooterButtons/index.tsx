import styles from './FooterButtons.module.scss';
import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { FC } from 'react';

export const FooterButtons: FC = () => {
  const isAuth = useSelector((state:RootState) => state.auth.user.isAuth);

  return (
    <>
      { isAuth ? ''
        : (
          <div className={styles.flex2}>
            <ButtonPrimary path="/login" type="link">login </ButtonPrimary>
            <ButtonPrimary path="/sign_up" type="link">Sign up</ButtonPrimary>
          </div>
        ) }
    </>
  );
};
