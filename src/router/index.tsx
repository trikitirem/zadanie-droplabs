import { createBrowserRouter } from "react-router-dom";

export enum Routes {
  HOME = "/",
  PRODUCTS = "/products",
  PRODUCT_DETAILS = "/products/:productId",
}

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <>Home</>,
  },
  {
    path: Routes.PRODUCTS,
    element: <>Products</>,
  },
  {
    path: Routes.PRODUCT_DETAILS,
    element: <>Product details</>,
  },
]);
