import { Home } from '@ui/organisms/Home';
import { CommonTemplate } from '@templates/CommonTemplate/CommonTemplate';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { booksActions } from '@books/modules';
import { Preloader } from '@ui/atoms/Preloader';
import { useParams } from 'react-router-dom';
import { RootState } from '@store/root-reducer';

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

  return (
    <CommonTemplate>
      <Home booksCount={10} />
      {categoryName ? categoryName : <Preloader />}
    </CommonTemplate>
  );
};
