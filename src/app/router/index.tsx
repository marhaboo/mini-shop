import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home-page/home-page";
import ProductPage from "../../pages/product-page/product-page";

export const  router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
  path: "/product:id",
  element: <ProductPage/>
  }
])