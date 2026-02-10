import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import AuthLayout from "../Layouts/AuthLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import ErrorPage from "../Pages/Errorpage/Errorpage";

import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import ServicesSection from "../Pages/Servicesection/Servicesection";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import NewOrder from "../Pages/NewOrder/NewOrder";
import AllOrders from "../Pages/Dashboard/AllOrders/AllOrders"
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";
import AllProducts from "../Pages/Products/Products"
import ManageUser from "../Pages/ManageUsers/ManageUsers"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      { path: "servicesection", element: <ServicesSection /> },

      {
        path: "products",
        element: <Products />,
        loader: async () => {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/products`
          );
          if (!res.ok) throw new Response("Failed to load products");
          return res.json();
        },
      },

      {
        path: "product-details/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
      },

      {
        path: "neworder/:id",
        element: (
          <PrivateRoutes>
            <NewOrder />
          </PrivateRoutes>
        ),
      },

      {
        path: "dashboard",
        element: (
          <PrivateRoutes>
            <DashboardLayout />
          </PrivateRoutes>
        ),
        children: [
          { path: "allorders", element: <AdminRoute><AllOrders /></AdminRoute> },
          { path: "products", element: <AdminRoute><AllProducts /></AdminRoute> },
          { path: "manageusers", element:<AdminRoute> <ManageUser /></AdminRoute>  },
        ],
      },
    ],
  },
]);
