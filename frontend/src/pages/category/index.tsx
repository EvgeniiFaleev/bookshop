import { Home } from '@ui/organisms/Home';
import { CommonTemplate } from '@templates/CommonTemplate/CommonTemplate';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { booksActions } from '@books/modules';
import { Preloader } from '@ui/atoms/Preloader';
import { useParams } from 'react-router-dom';
import { RootState } from '@store/root-reducer';
import { CategoryBooks } from '@books/ui/organisms/CategoryBooks';
import {useCart} from "@cart/hooks/useCart";

export const CategoryPage = () => {
  const { category } = useParams<{category: string}>();
  const dispatch = useDispatch();

  const { categoryName, books } = useSelector((state: RootState) => ({
    categoryName: state.books.categoryName,
    books: state.books.books,
  }), shallowEqual);

  useEffect(() => {
    if (!categoryName) dispatch(booksActions.getBooksByCategory(category));
  }, []);

  const cartBooks = useCart();
  return (
    <CommonTemplate>
      <Home booksCount={10} />
      {categoryName && books
        ? <CategoryBooks books={books} cartBooks={cartBooks} categoryName={categoryName} />
        : <Preloader />}
    </CommonTemplate>
  );
};
