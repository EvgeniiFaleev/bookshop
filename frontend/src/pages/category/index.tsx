import { Home } from '@ui/organisms/Home';
import { CommonTemplate } from '@templates/CommonTemplate';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { booksActions, Search } from '@books';
import { Preloader } from '@ui/atoms/Preloader';
import { useParams } from 'react-router-dom';
import { RootState } from '@store/root-reducer';
import { CategoryBooks } from '@books/ui/organisms/CategoryBooks';

export const CategoryPage = () => {
  const { category } = useParams<{category: string}>();
  const dispatch = useDispatch();

  const { categoryName, books, cartBooks } = useSelector((state: RootState) => ({
    categoryName: state.books.categoryName,
    books: state.books.booksOnCategory,
    cartBooks: state.cart.books,
  }), shallowEqual);

  useEffect(() => {
    if (!categoryName) dispatch(booksActions.getBooksByCategory(category));
    return () => { dispatch(booksActions.setCategory('')); };
  }, []);

  return (
    <CommonTemplate>
      <Home booksCount={10}>
        <Search />
      </Home>
      {categoryName && books
        ? <CategoryBooks books={books} cartBooks={cartBooks} categoryName={categoryName} />
        : <Preloader />}
    </CommonTemplate>
  );
};
