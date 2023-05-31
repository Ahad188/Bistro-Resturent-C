import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../Pages/Dashboard/Mycart/Mycart";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
 

export const router = createBrowserRouter([
     {
       path: "/",
       element:  <Main></Main>,
       children:[
          {
               path:'/',
               element:<Home></Home>
          },
          {
               path:'/menu',
               element:<Menu></Menu>
          },
          {
               path:'order/:category',
               element:<Order></Order>
          },
          {
               path:'login',
               element:<Login></Login>,
          },
          {
               path:'/signup',
               element:<SingUp></SingUp>
          },
          {
               path:'secret',
               element:<PrivateRoute><Secret></Secret></PrivateRoute>,
          }
       ]
     },
     {
          path:'dashboard',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children:[
               {
                    path:'mycart',
                    element:<Mycart></Mycart>
               },
               {
                    path:'allusers',
                    element:<AllUser></AllUser>
               },
               {
                    path:'additem',
                    element:<AdminRoute><AddItem></AddItem></AdminRoute>,
               }
          ]
     }
   ]);