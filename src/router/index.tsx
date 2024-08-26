import { createBrowserRouter } from "react-router-dom";
import { ProductsPage, ProductDetailsPage } from "../pages";

export enum Routes {
  HOME = "/",
  PRODUCTS = "/products",
  PRODUCT_DETAILS = "/products/:id",
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
    element: <ProductDetailsPage />,
  },
]);
