import { IBookInCart } from '@cart/modules/reducer';
import { FC } from 'react';

interface ICartProps {
  cartBooks: Array<IBookInCart> | null
}

export const Cart: FC<ICartProps> = ({ cartBooks }) => (
  <h1>Shopping Cart</h1>
);
