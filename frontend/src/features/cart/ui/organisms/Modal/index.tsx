import { ButtonPrimary } from '@ui/atoms/ButtonPrimary';
import { FC, useCallback, useEffect } from 'react';
import styles from './Modal.module.scss';

export interface IModalProps {
  picture:string,
  price: number,
  title: string,
  closeModal: ()=>void
}
export const Modal:FC<IModalProps> = ({
  picture, price, title, closeModal,
}) => {
  const onCloseModal = useCallback((e:MouseEvent) => {
    const target = e.target as Element;
    if (target?.closest(`.${styles.modal}`)) return;
    closeModal();
  }, []);

  useEffect(() => {
    document.addEventListener('click', onCloseModal);
    return () => document.removeEventListener('click', onCloseModal);
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.info}>
          <div className={styles.picture_link}><img src={picture} alt="" /></div>
          <div className={styles.description}>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>Is now in your cart.</p>
            <p className={`${styles.text} ${styles.price}`}>
              <span>{price}</span>
              {' '}
              total
            </p>
          </div>
        </div>
        <div className={styles.buttons}>
          <ButtonPrimary onClick={closeModal} type="button">KEEP SHOPPING</ButtonPrimary>
          <ButtonPrimary type="link" path="/cart">CHECK OUT</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};
