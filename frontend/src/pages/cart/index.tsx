import { CommonTemplate } from '@templates/CommonTemplate/CommonTemplate';
import { Cart } from '@cart/ui/organisms/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '@store/root-reducer';
import { useEffect, useRef } from 'react';
import { cartActions } from '@cart/modules';
import { Preloader } from '@ui/atoms/Preloader';

export const CartPage = () => {
  const cartBooks = useSelector((state: RootState) => state.cart.books);
  const dispatch:DispatchType = useDispatch();
  useEffect(() => dispatch(cartActions.updateCart()), []);
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (cartBooks) {
      console.log(cartBooks);
      localStorage.setItem('books', JSON.stringify(cartBooks));
    }
  }, [cartBooks]);


  return (
    <CommonTemplate>
      {isFirstRun.current ? <Preloader /> : <Cart cartBooks={cartBooks} /> }
    </CommonTemplate>
  );
};
