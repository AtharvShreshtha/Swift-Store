import React, { useContext } from 'react';
import '../styles.css';
import logo from '../imgvid/logo.jpg'; 
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

function Navbar() {

  const {getTotalCartItems} = useContext(ShopContext);

    return (
      <div>
        <nav id="header">
          
          <img src={logo} className="logo" alt="Logo" />
          <div>
            <ul id="navbar" type="none">
              
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/shop'>Shop</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              <li><Link to='/sign'>Sign Up</Link></li>
              
              
              <li>
                <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>
                
              </li>
              <div className='count'>{getTotalCartItems()}</div>
            </ul>
          </div>
        </nav>       
      </div>
    );
  }
  
  export default Navbar;


