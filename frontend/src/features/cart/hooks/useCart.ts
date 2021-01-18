import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { useEffect, useRef } from 'react';
import { cartActions } from '@cart/modules';

export const useCart = () => {
  const dispatch = useDispatch();

  const cartBooks = useSelector((state:RootState) => state.cart.books, shallowEqual);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (cartBooks) localStorage.setItem('books', JSON.stringify(cartBooks));
  }, [cartBooks]);

  useEffect(() => {
    const books = localStorage.getItem('books');
    if (books) dispatch(cartActions.setBooks(JSON.parse(books)));
  }, []);
  return cartBooks;
};
