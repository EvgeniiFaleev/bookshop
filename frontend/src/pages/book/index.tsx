import { CommonTemplate } from '@templates/CommonTemplate';
import { FC, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { booksActions } from '@books';
import { RootState } from '@store/root-reducer';
import { useParams } from 'react-router-dom';
import { Book } from '@books/ui/organisms/Book';
import { Preloader } from '@ui/atoms/Preloader';
import { userActions } from '@user';

export const BookPage:FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{id: string}>();

  const book = useSelector((state:RootState) => state.books.book, shallowEqual);

  useEffect(() => {
    if (!book) dispatch(booksActions.getBook(id));
    dispatch(userActions.getWishList());
    return () => { dispatch(booksActions.setBook(null)); };
  }, [id]);

  const wishList = useSelector((state: RootState) => state.user.wishList);

  const cartBooks = useSelector((state:RootState) => state.cart.books, shallowEqual);

  const addItemWishList = (bookId:string) => {
    dispatch(userActions.addItemWishList(bookId));
  };
  return (
    <CommonTemplate>
      { book ? (
        <Book
          addItemWishList={addItemWishList}
          wishList={wishList}
          cartBooks={cartBooks}
          {...book}
        />
      ) : <Preloader />}
    </CommonTemplate>
  );
};
