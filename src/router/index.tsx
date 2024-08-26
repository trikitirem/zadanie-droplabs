import { createBrowserRouter } from "react-router-dom";
import {
  ProductsPage,
  ProductDetailsPage,
  MainLayout,
  HomePage,
} from "../pages";
import { ErrorBoundary } from "../components";

export enum Routes {
  HOME = "/",
  PRODUCTS = "/products",
  PRODUCT_DETAILS = "/products/:id",
}

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <MainLayout />,
    children: [
      {
        path: Routes.HOME,
        element: <HomePage />,
      },
      {
        path: Routes.PRODUCTS,
        element: <ProductsPage />,
        loader: async () => {
          const response = await fetch("https://fakestoreapi.com/products");
          return await response.json();
        },
        errorElement: <ErrorBoundary />,
      },
      {
        path: Routes.PRODUCT_DETAILS,
        element: <ProductDetailsPage />,
        loader: async ({ params: { id } }) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`,
          );
          return await response.json();
        },
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);
