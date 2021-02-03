import {
  ChangeEvent, EventHandler, FC, MouseEvent,
} from 'react';
import { IBookInCart } from '@cart/modules/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { BookInListInfo } from '@cart/ui/atoms/BookInListInfo';
import styles from './CartItem.module.scss';

interface ICartIteProps extends IBookInCart{
  onChangeQuantity: EventHandler<ChangeEvent>,
  onDeleteItem: EventHandler<MouseEvent>
}

export const CartItem: FC<ICartIteProps> = ({
  title, author, price, picture, id, quantity, onChangeQuantity, onDeleteItem,
}) => (
  <div className={styles.wrapper} data-id={id} key={id}>
    <BookInListInfo title={title} author={author} picture={picture} id={id} />
    <div className={styles.flex2}>
      <input onChange={onChangeQuantity} value={quantity} min={1} max={10} type="number" />
      <p className={styles.price}>{price * quantity}</p>
      <FontAwesomeIcon icon={faTrash} onClick={onDeleteItem} />
    </div>
  </div>
);
