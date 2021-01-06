import { Switch, Route } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';
import { AdminPage } from '@pages/AdminPage';

export const Routes = () => (
  <Switch>
    <Route path="/admin">
      <AdminPage />
    </Route>
    <Route exact path="/">
      <MainPage />
    </Route>
  </Switch>
);
