
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import ServicesSection from "../Pages/Servicesection/Servicesection";
import ErrorPage from "../Pages/Errorpage/Errorpage";


import NewOrder from "../Pages/NewOrder/NewOrder";
import PrivateRoutes from './PrivateRoutes'

import AllProductsLayout from "../Layouts/AllProductsLayout";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import DashboardLayout from "../Layouts/DashboardLayout";
;
import AllOrders from "../Pages/Dashboard/AllOrders/AllOrders";
import Products from "../Pages/Products/Products";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";
import EditProducts from "../Pages/Dashboard/EditProducts/EditProducts";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import AdminRoute from '../Routes/AdminRoute'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        index:true,
        element: <Home />,

      }
    ]
  },
  {
    path:"/",
   
    element:<AuthLayout/>,
    children:[
      {
        path:'login',
        
        element:<Login/>,

      },
      {
        path:'Register',
        
        element:<Register/>,
      }
    ]
  },
  {
    path:"/servicesection",
   
    element:<ServicesSection/>,
  },
 
  {
    path:"/",
    element:<AllProductsLayout/>,
    children:[
      {
          path:"/products",
    element:<Products/>,
    loader: async () => {
  const res = await fetch("http://localhost:5000/products");

  if (!res.ok) {
    throw new Response("Failed to load products", {
      status: res.status,
    });
  }

  return res.json();
}

      }
    ]
  },
    
  {
    path:"/product-details/:id",
    element:<PrivateRoutes> 
             <ProductDetails/>
           </PrivateRoutes>,
  
    
  
  loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
  },
  {
   path: '/paymentsuccess',
  element: <PaymentSuccess />,
  },

  {
    path:'/myorder',
     element: (
          <PrivateRoutes>
            
          </PrivateRoutes>
        ),
  },
    
  
{
  path: "/neworder/:id",
  element: (
    <PrivateRoutes>
      <NewOrder />
    </PrivateRoutes>
  ),
  loader: async ({ params }) => {
    const res = await fetch(`http://localhost:5000/products/${params.id}`);

    if (!res.ok) {
      throw new Response("Product not found", { status: res.status });
    }

    return res.json();
  }
},
{
  path:"/payment-success",
  element:<PaymentSuccess/>
},
{
  path:"/dashboard",
  element:<PrivateRoutes><DashboardLayout/></PrivateRoutes>,
    children:[
    
     {
      path:"allorders",
      element:<AllOrders/>,
     },
     {
        path:"products",
       element:<AllProducts/>
    },
    {
    path:  "edit-product/:id",
    element: <EditProducts/>
    },
    {
     path: "manage-users",
     element:(
      <AdminRoute>
        <ManageUsers/>
      </AdminRoute>
     )
    }
      

    ]

}






]);