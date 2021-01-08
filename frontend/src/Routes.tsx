import { renderRoutes } from 'react-router-config';
import { routes } from '@pages/index';

// export const Routes = () => (
//   <Switch>
//     <Route exact path="/admin/login">
//       <AdminLoginPage />
//     </Route>
//     <Route exact path="/">
//       <MainPage />
//     </Route>
//   </Switch>
// );

export const Routes = () => <>{renderRoutes(routes())}</>;
