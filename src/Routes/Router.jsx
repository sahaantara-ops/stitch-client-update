
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import ServicesSection from "../Pages/Servicesection/Servicesection";
import ErrorPage from "../Pages/Errorpage/Errorpage";
import DashBoard from '../Pages/DashBoard/DashBoard';

import NewOrder from "../Pages/NewOrder/NewOrder";
import PrivateRoutes from './PrivateRoutes'
import AllProducts from "../Pages/AllProducts/AllProducts";
import AllProductsLayout from "../Layouts/AllProductsLayout";

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
    path:"/dashboard",
    element:<DashBoard/>,
  },
  {
    path:"/",
    element:<AllProductsLayout/>,
    children:[
      {
          path:"/allproducts",
    element:<AllProducts/>,
    loader: ()=> fetch("http://localhost:5000/products")
      }
    ]
  },
    
  
    
  
  {
    path:"/neworder",
    element:  <PrivateRoutes>
      <NewOrder/>
    </PrivateRoutes>,
  }

]);