import { MainPage } from '@pages/main';
import { AdminLoginPage } from '@pages/admin/login';
import { AddBookPage } from '@pages/admin/add_book';
import { BookPage } from '@pages/book';
import { CategoryPage } from '@pages/category';
import { CartPage } from '@pages/cart';
import { CheckoutPage } from '@pages/checkout';
import { LoginPage } from '@pages/login';
import { SignUpPage } from '@pages/sign_up';
import {AccountPage} from "@pages/account";
import {WishListPage} from "@pages/account/wishlist";
import {UserOrdersPage} from "@pages/account/orders";
import {Search} from "@books/ui/molecules/Search";
import {SearchPage} from "@pages/search";

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
  {
    path: '/search',
    exact: true,
    component: SearchPage,
  },
  {
    path: '/cart',
    exact: true,
    component: CartPage,
  },
  {
    path: '/checkout',
    exact: true,
    component: CheckoutPage,
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/sign_up',
    exact: true,
    component: SignUpPage,
  },
  {
    path: '/account',
    exact: true,
    component: AccountPage,
  },
  {
    path: '/account/wishlist',
    exact: true,
    component: WishListPage,
  },
  {
    path: '/account/orders',
    exact: true,
    component: UserOrdersPage,
  },
];
