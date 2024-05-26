import React from 'react';  
import HomePage from './pages/home';
import AboutPage from './pages/about';
import SignUpPage from './pages/sign';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Blog from './pages/blog';
import Shop from './pages/shop';
import Cart from './pages/Cart';
import Product from './pages/Product';
import ShopContextProvider from './Context/ShopContext';


function App() {
  return (
    <div>
      <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/sign" element={<SignUpPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path='/product/:productId' element={<Product/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;

