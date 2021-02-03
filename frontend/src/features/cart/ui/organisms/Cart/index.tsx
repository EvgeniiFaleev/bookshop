import { IBookInCart } from '@cart/modules/reducer';
import {
  ChangeEvent, FC, ReactNode, MouseEvent,
} from 'react';
import { CartItem } from '@cart/ui/molecules/CartItem';
import { useDispatch } from 'react-redux';
import { cartActions } from '@cart';
import cartItemStyles from '@cart/ui/molecules/CartItem/CartItem.module.scss';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';

interface ICartProps {
  cartBooks: Array<IBookInCart> | null
}
const changeQuantity = (id: string, count: number, cartBooks: Array<IBookInCart>): Array<IBookInCart> => cartBooks.map((item) => {
  const newItem = { ...item };
  if (item.id === id) {
    newItem.quantity = count;
  }
  return newItem;
});

const deleteItem = (id: string, cartBooks: Array<IBookInCart>): Array<IBookInCart> => cartBooks.filter((item) => item.id !== id);


export const Cart: FC<ICartProps> = ({ cartBooks }) => {
  let cartItems: Array<ReactNode> | null = null;

  const dispatch = useDispatch();
  let totalPrice = 0;
  if (cartBooks) {
    totalPrice = cartBooks.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const onChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
      const count = +e.currentTarget.value;
      const wrapper = e.currentTarget.closest(`.${cartItemStyles.wrapper}`) as HTMLDivElement;
      const id = wrapper!.dataset.id as string;
      const newCart = changeQuantity(id, count, cartBooks);
      dispatch(cartActions.setBooks(newCart));
    };
    const onDeleteItem = (e: MouseEvent<HTMLElement>) => {
      const wrapper = e.currentTarget.closest(`.${cartItemStyles.wrapper}`) as HTMLDivElement;
      const id = wrapper!.dataset.id as string;
      const newCart = deleteItem(id, cartBooks);
      dispatch(cartActions.setBooks(newCart));
    };
    cartItems = cartBooks.map((item) => (
      <CartItem
        id={item.id}
        author={item.author}
        title={item.title}
        price={item.price}
        quantity={item.quantity}
        picture={item.picture}
        onChangeQuantity={onChangeQuantity}
        onDeleteItem={onDeleteItem}
      />
    ));
  }
  console.log(styles.wrapper)
  return (
    <div className={styles.wrapper}>
      <h1>Shopping Cart</h1>
      {cartBooks && cartBooks.length > 0 ? (
        <>
          <div className={styles.checkout_link}>
            <Link to="/checkout">
              Checkout(total:
              {' '}
              {totalPrice}
              )
            </Link>
          </div>
          <div className={styles.cart_description}>
            <p>Item</p>
            <p>
              <span className={styles.cart_description_qty}>Qty</span>
              <span>Price</span>
            </p>
          </div>
          {cartItems}
        </>
      )
        : <p>Cart is empty </p>}
    </div>
  );
};
