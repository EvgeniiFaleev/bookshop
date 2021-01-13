import { MainPage } from '@pages/main';
import { AdminLoginPage } from '@pages/admin/login';
import { AddBookPage } from '@pages/admin/add_book';
import { BookPage } from '@pages/book';
import { CategoryPage } from '@pages/category';

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
  {
    path: '/book/:id',
    exact: true,
    component: BookPage,
  },
  {
    path: '/category/:category',
    exact: true,
    component: CategoryPage,
  },
];
