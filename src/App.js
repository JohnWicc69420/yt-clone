import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Products from './pages/Products/Products'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (newItem) => {
    const existingItem = cartItems.find((item) => item.id === newItem.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === newItem.id 
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeItem = (newItem) => {
    const newItems = cartItems.filter((item) => item !== newItem )
    setCartItems(newItems)
  }


  const Layout = ({ cartItems }) => {
    return (
      <div className='app'>
        <Navbar cartItems={cartItems} removeItem={removeItem}/>
        <Outlet />
        <Footer />
      </div>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout cartItems={cartItems}/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/products/:catId",
          element: <Products />
        },
        {
          path: "/product/:id",
          element: <Product addItem={addItem}/>
        }
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
