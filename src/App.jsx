import './App.css'
import * as $ from "jquery"


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout"
import Home from "./components/Layout/Home.jsx"
import About from "./components/About"
import Markets from "./components/Markets"





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", 
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "markets",
        element: <Markets />
      }
    ]
  },
])


function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
