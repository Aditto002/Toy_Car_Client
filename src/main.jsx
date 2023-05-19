import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route.jsx';
import AuthProbider from './providers/AuthProbider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
    
    <AuthProbider><RouterProvider router={router} /></AuthProbider>
  </React.StrictMode>,
 </div>
)
