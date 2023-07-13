import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Blog from './Blog'
import {createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    
  },

  {
    path:"blog/",
    element:<Blog/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
