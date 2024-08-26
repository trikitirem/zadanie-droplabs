import { createBrowserRouter } from "react-router-dom";
import { ProductsPage, ProductDetailsPage, MainLayout } from "../pages";
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
        element: <>Home</>,
      },
      {
        path: Routes.PRODUCTS,
        element: <ProductsPage />,
        loader: async () => {
          const response = await fetch(
            "https://fakestoreapi.com/products?limit=1000",
          );
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
