import { CommonTemplate } from '@templates';
import { userActions, WishList } from '@user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { useEffect } from 'react';
import { cartActions } from '@cart/index';
import { IBookInCart } from '@cart/modules/reducer';

export const WishListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getWishList());
  }, []);
  const wishList = useSelector((state: RootState) => state.user.wishList);
  const cartBooks = useSelector((state: RootState) => state.cart.books);
  const onAddToCart = (book: IBookInCart) => {
    dispatch(cartActions.addBook(book));
  };
  const deleteItem = (bookId: string) => {
    dispatch(userActions.deleteItemWishList(bookId));
  };

  return (
    <CommonTemplate>
      <WishList
        books={wishList}
        cartBooks={cartBooks}
        deleteItem={deleteItem}
        onAddToCart={onAddToCart}
      />
    </CommonTemplate>
  );
};
