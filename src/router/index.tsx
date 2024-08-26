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
      },
      {
        // W związku z tym że nie trzeba odświeżać danych na stronie z produktem,
        // używam tutaj nowej funkcji react-router-dom,
        // która pozwala na wczytanie potrzebnych danych przed wyrenderowaniem komponentu
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
