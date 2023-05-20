import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login";
import Registar from "../pages/Home/Registar";
import ErrorPage from "../pages/Home/ErrorPage";
import AddToy from "../AddToy/AddToy";
import ClientCar from "../pages/ClientCar/ClientCar";
import PriveteRoute from "../privetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registar',
        element:<Registar></Registar>
      },
      {
        path:'/addtoy',
        element:<AddToy></AddToy>
      },
      {
        path:'/mytoy',
        element:<PriveteRoute><ClientCar></ClientCar></PriveteRoute>
      }
    
    ]
    },
      {
        path:'*',
        element:<ErrorPage></ErrorPage>
      }
  ]);
  export default router;