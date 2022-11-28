import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Page/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-blue-100 md:px-10">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 uppercase font-bold text-blue-900">
              dashboard of {user?.displayName}
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <Link to="/dashboard/myOrders">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/myWishlist">My Wishlist</Link>
                </li>
                <li>
                  <Link to="/dashboard/addAProduct">Add A Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/myBuyers">My Buyers</Link>
                </li>
                {isAdmin && (
                  <>
                    <li>
                      <Link to="/dashboard/allBuyers">All Buyers</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/allSellers">All Sellers</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* <!------- Page content here -------> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard/myOrders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/myWishlist">My Wishlist</Link>
            </li>
            <li>
              <Link to="/dashboard/addAProduct">Add A Product</Link>
            </li>
            <li>
              <Link to="/dashboard/myProducts">My Products</Link>
            </li>
            <li>
              <Link to="/dashboard/myBuyers">My Buyers</Link>
            </li>
            <li>
              <Link to="/dashboard/allBuyers">All Buyers</Link>
            </li>
            <li>
              <Link to="/dashboard/allSellers">All Sellers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
