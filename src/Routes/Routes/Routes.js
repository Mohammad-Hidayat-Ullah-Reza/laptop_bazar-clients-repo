import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Page/Blog/Blog";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/SignUp/SignUp";
import LaptopCategory from "../../Page/LaptopCategory/LaptopCategory";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Page/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Page/Dashboard/Buyer/MyOrders/MyOrders";
import MyWishlist from "../../Page/Dashboard/Buyer/MyWishlist/MyWishlist";
import AddAProduct from "../../Page/Dashboard/Seller/AddAProduct/AddAProduct";
import MyProducts from "../../Page/Dashboard/Seller/MyProducts/MyProducts";
import MyBuyers from "../../Page/Dashboard/Seller/MyBuyers/MyBuyers";
import AllBuyers from "../../Page/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Page/Dashboard/Admin/AllSellers/AllSellers";
import Payment from "../../Page/Dashboard/Buyer/Payment/Payment";
import AdminRoute from "../AdminRoute/AdminRoute";

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
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/myWishlist",
        element: <MyWishlist></MyWishlist>,
      },
      {
        path: "/dashboard/addAProduct",
        element: <AddAProduct></AddAProduct>,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/myBuyers",
        element: <MyBuyers></MyBuyers>,
      },
      {
        path: "/dashboard/allBuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/allSellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
