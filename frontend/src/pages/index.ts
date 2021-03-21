import { MainPage } from '@pages/main';
import { lazy } from 'react';

const AdminLoginPageLazy = lazy(() => import(/* webpackChunkName:
 "adminLog" */ '@pages/admin/login'
).then(({ AdminLoginPage }) => (
  { default: AdminLoginPage }
)));
const AddBookPageLazy = lazy(() => import(/* webpackChunkName:
 "addBook" */ '@pages/admin/add_book'
).then(({ AddBookPage }) => (
  { default: AddBookPage }
)));
const BookPageLazy = lazy(() => import(/* webpackChunkName:
 "book" */ '@pages/book'
).then(({ BookPage }) => (
  { default: BookPage }
)));
const CategoryPageLazy = lazy(() => import(/* webpackChunkName:
 "category" */ '@pages/category'
).then(({ CategoryPage }) => (
  { default: CategoryPage }
)));
const CartPageLazy = lazy(() => import(/* webpackChunkName:
 "cart" */ '@pages/cart'
).then(({ CartPage }) => (
  { default: CartPage }
)));
const CheckoutPageLazy = lazy(() => import(/* webpackChunkName:
 "check" */ '@pages/checkout'
).then(({ CheckoutPage }) => (
  { default: CheckoutPage }
)));
const SignUpPageLazy = lazy(() => import(/* webpackChunkName:
 "sign_up" */ '@pages/sign_up'
).then(({ SignUpPage }) => (
  { default: SignUpPage }
)));
const LoginPageLazy = lazy(() => import(/* webpackChunkName:
 "login" */ '@pages/login'
).then(({ LoginPage }) => (
  { default: LoginPage }
)));
const AccountPageLazy = lazy(() => import(/* webpackChunkName:
 "account" */ '@pages/account'
).then(({ AccountPage }) => (
  { default: AccountPage }
)));
const WishListPageLazy = lazy(() => import(/* webpackChunkName:
 "wish" */ '@pages/account/wishlist'
).then(({ WishListPage }) => (
  { default: WishListPage }
)));
const UserOrdersPageLazy = lazy(() => import(/* webpackChunkName:
 "order" */ '@pages/account/orders'
).then(({ UserOrdersPage }) => (
  { default: UserOrdersPage }
)));
const SearchPageLazy = lazy(() => import(/* webpackChunkName:
 "search" */ '@pages/search'
).then(({ SearchPage }) => (
  { default: SearchPage }
)));

export const routes = () => [
  {
    path: '/',
    exact: true,
    component: MainPage,
  },
  {
    path: '/admin/login',
    exact: true,
    component: AdminLoginPageLazy,
  },
  {
    path: '/admin/add_book',
    exact: true,
    component: AddBookPageLazy,
  },
  {
    path: '/book/:id',
    exact: true,
    component: BookPageLazy,
  },
  {
    path: '/category/:category',
    exact: true,
    component: CategoryPageLazy,
  },
  {
    path: '/search',
    exact: true,
    component: SearchPageLazy,
  },
  {
    path: '/cart',
    exact: true,
    component: CartPageLazy,
  },
  {
    path: '/checkout',
    exact: true,
    component: CheckoutPageLazy,
  },
  {
    path: '/login',
    exact: true,
    component: LoginPageLazy,
  },
  {
    path: '/sign_up',
    exact: true,
    component: SignUpPageLazy,
  },
  {
    path: '/account',
    exact: true,
    component: AccountPageLazy,
  },
  {
    path: '/account/wishlist',
    exact: true,
    component: WishListPageLazy,
  },
  {
    path: '/account/orders',
    exact: true,
    component: UserOrdersPageLazy,
  },
];
