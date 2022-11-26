import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Page/Blog/Blog";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/SignUp/SignUp";
import LaptopCategory from "../../Page/LaptopCategory/LaptopCategory";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:category_name",
        element: (
          <PrivateRoute>
            <LaptopCategory></LaptopCategory>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.category_name}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
