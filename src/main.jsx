import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './pages/App/App.jsx'
import Products from './pages/Products/Products.jsx'
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar />
      <App />
      <Footer />
    </>,
  },
  {
    path: "/products",
    element: <>
      <Products />
      <App />
      <Footer />
    </> ,
  },
  {
    path: "/product/:id",
    element:<>
      <Navbar />
      <ProductDetail />,
      <Footer />
    </> 
  },
  {
    path: "/cart",
    element:<>
      <Navbar />
      <Cart />,
      <Footer />
      </> ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
