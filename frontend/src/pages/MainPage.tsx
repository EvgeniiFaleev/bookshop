import { Home } from '@ui/molecules/Home';
import { CommonTemplate } from '@templates/CommonTemplate/CommonTemplate';

export const MainPage = () => (
  <CommonTemplate>
    <Home booksCount={10} />
  </CommonTemplate>
);
