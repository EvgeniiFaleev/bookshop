import { MainPage } from '@pages/main';
import { AdminLoginPage } from '@pages/admin/login';
import { AddBookPage } from '@pages/admin/add_book';

export const routes = () => [
  {
    path: '/',
    exact: true,
    component: MainPage,
  },
  {
    path: '/admin/login',
    exact: true,
    component: AdminLoginPage,
  },
  {
    path: '/admin/add_book',
    exact: true,
    component: AddBookPage,
  },
];
