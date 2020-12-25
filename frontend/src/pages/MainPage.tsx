import { Home } from '@ui/organisms/Home';
import { CommonTemplate } from '@templates/CommonTemplate/CommonTemplate';
import { Slider } from '@ui/organisms/Slider';
import { BooksChart } from '@ui/organisms/BooksChart';

export const MainPage = () => (
  <CommonTemplate>
    <Home booksCount={10} />
    <Slider />
    <BooksChart />
  </CommonTemplate>
);
