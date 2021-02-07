import { CommonTemplate } from '@templates';
import { CategoryBooks } from '@books/ui/organisms/CategoryBooks';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { Redirect } from 'react-router-dom';

export const SearchPage = () => {
  const { categoryName, books, cartBooks } = useSelector((state: RootState) => ({
    categoryName: state.books.categoryName,
    books: state.books.booksOnCategory,
    cartBooks: state.cart.books,
  }), shallowEqual);
  if (!categoryName.trim()) return <Redirect to="/" />;
  return (
    <CommonTemplate>
      <CategoryBooks
        books={books}
        cartBooks={cartBooks}
        categoryName={categoryName}
      />
    </CommonTemplate>
  );
};
