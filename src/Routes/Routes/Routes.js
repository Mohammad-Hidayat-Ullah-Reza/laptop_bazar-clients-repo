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
import SellerRoute from "../SellerRoute/SellerRoute";

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
          fetch(
            `https://laptop-bazar-server-one.vercel.app/categories/${params.category_name}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myOrders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myWishlist",
        element: (
          <PrivateRoute>
            <MyWishlist></MyWishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addAProduct",
        element: (
          <SellerRoute>
            <AddAProduct></AddAProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myBuyers",
        element: (
          <SellerRoute>
            <MyBuyers></MyBuyers>,
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allBuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
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
