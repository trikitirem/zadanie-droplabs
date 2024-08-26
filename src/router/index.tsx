import { createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "../pages";

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
    element: <ProductsPage />,
  },
  {
    path: Routes.PRODUCT_DETAILS,
    element: <>Product details</>,
  },
]);
