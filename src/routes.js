import CartPage from "./components/pages/cart-page/cart-page";
import FavoritePage from "./components/pages/favorite-page";
import HomePage from "./components/pages/home-page";
import LoginPage from "./components/pages/login-page";
import SignUpPage from "./components/pages/signup-page";
import { LOGIN_ROUTE, HOME_ROUTE, CART_ROUTE, SIGNUP_ROUTE, FAVORITE_ROUTE } from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage
  },
  {
    path: SIGNUP_ROUTE,
    Component: SignUpPage

  }
]

export const privatRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage
  },
  {
    path: CART_ROUTE,
    Component: CartPage
  },
  {
    path: FAVORITE_ROUTE,
    Component: FavoritePage
  }
]