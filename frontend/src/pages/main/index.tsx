import { Home } from '@ui/organisms/Home';
import { CommonTemplate } from '@templates/CommonTemplate/CommonTemplate';
import { Slider } from '@books/ui/organisms/Slider';
import { BooksChart } from '@books/ui/organisms/BooksChart';
import { ReactNode, useEffect } from 'react';
import { RootState } from '@store/root-reducer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { booksActions } from '@books/modules';
import { Preloader } from '@ui/atoms/Preloader';
import { useCart } from '@cart';

export const MainPage = () => {

  const { categories, topLists } = useSelector((state: RootState) => ({
    categories: state.books.categories,
    topLists: state.books.topLists,
  }), shallowEqual);
  const dispatch = useDispatch();
  let categoryElems:Array<ReactNode>;
  let topListsElems:Array<ReactNode>;
  const mixedElems :Array<ReactNode | void> = [];

  if (categories) {
    categoryElems = Object.entries(categories)
      .map((item) => (
        <Slider
          key={item[0]}
          categoryName={item[0]}
          items={item[1]}
          booksCount={item[1].length}
        />
      ));
  }
  if (topLists) {
    topListsElems = Object.entries(topLists)
      .map((item) => (
        <BooksChart
          key={item[0]}
          categoryName={item[0]}
          items={item[1]}
          booksCount={item[1].length}
        />
      ));
  }

  if (categories && categoryElems!.length > 0) {
    categoryElems!.forEach((item: ReactNode, i: number) => {
      mixedElems.push(item);
      if (topListsElems[i]) mixedElems.push(topListsElems[i]);
    });
  }

  useEffect(() => {
    dispatch(booksActions.getChart());
  }, []);

  return (
    <CommonTemplate>
      <Home booksCount={10} />
      {categories ? mixedElems : <Preloader />}
    </CommonTemplate>
  );
};
