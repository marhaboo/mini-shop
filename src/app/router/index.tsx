import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home-page/home-page";
import ProductPage from "../../pages/product-page/product-page";
import { Layout } from "../../features/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product:id",
        element: <ProductPage />,
      },
    ],
  },
]);
