import {Home} from '@ui/organisms/Home';
import {CommonTemplate} from '@templates/CommonTemplate/CommonTemplate';
import {Slider} from '@ui/organisms/Slider';
import {BooksChart} from '@ui/organisms/BooksChart';
import {ReactNode, useEffect} from 'react';
import {RootState} from '@store/root-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {booksActions} from '@books/modules';
import {Preloader} from '@ui/atoms/Preloader';

export const MainPage = () => {
  const categories = useSelector((state: RootState) => state.books.categories);
  const dispatch = useDispatch();
  let categoryElems:ReactNode;

  if (categories) {
    categoryElems = Object.entries(categories).map((item) => <Slider categoryName={item[0]} items={item[1]} booksCount={item[1].length} />);
  }

  useEffect(() => {
    dispatch(booksActions.getChart());
  }, []);

  return (
    <CommonTemplate>
      <Home booksCount={10} />
      {categories ? categoryElems : <Preloader />}
      <BooksChart />
    </CommonTemplate>
  );
};
