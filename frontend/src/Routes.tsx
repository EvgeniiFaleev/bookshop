import { Switch, Route } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';

export const Routes = () => (
  <Switch>
    <Route path="/">
      <MainPage />
    </Route>
  </Switch>
);
