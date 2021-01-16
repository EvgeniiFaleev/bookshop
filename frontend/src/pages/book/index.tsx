import { CommonTemplate } from '@templates/CommonTemplate/CommonTemplate';
import { FC, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { booksActions } from '@books/modules';
import { RootState } from '@store/root-reducer';
import { useParams } from 'react-router-dom';
import { Book } from '@books/ui/organisms/Book';
import { Preloader } from '@ui/atoms/Preloader';
import { useCart } from '@cart/hooks/useCart';

export const BookPage:FC = () => {
  const book = useSelector((state:RootState) => state.books.book, shallowEqual);
  const dispatch = useDispatch();
  const { id } = useParams<{id: string}>();
  // console.log(id);
  useEffect(() => {
    if (!book) dispatch(booksActions.getBook(id));
    return () => { dispatch(booksActions.setBook(null)); };
  }, [id]);

  const cartBooks = useCart();
  return (
    <CommonTemplate>
      { book ? (
        <Book
          cartBooks={cartBooks}
          {...book}
        />
      ) : <Preloader />}
    </CommonTemplate>
  );
};
