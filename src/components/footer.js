import React from 'react'
import logo from '../imgvid/logo.jpg'; 
import down from '../imgvid/down.webp'; 
import pay from '../imgvid/pay.webp'; 

const Footer = () => {
  return (
    <div>
       <footer>
          <div className="col1">
            <img src={logo} alt="Logo" />
            <h3>Contact</h3>
            <p><strong>Address:</strong> 287 Bharat Roads, Street 32, Gandhinagar</p>
            <p><strong>Phone:</strong> (+91) 8590521964/(+91) 9819165791</p>
            <p><strong>Hours:</strong> 10:00 - 20:00, Mon-Sat</p>
            <br />
            <h3>Follow Us</h3>
            <div className="icon">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <br />
            <div className="copy">
              <p><strong>© 2024, SwiftStore or its affiliates</strong></p>
            </div>
          </div>
  
          <div className="col1">
            <h3>About</h3>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms &amp; Conditions</p>
            <p>Contact Us</p>
          </div>
  
          <div className="col1">
            <h3>My Account</h3>
            <p>Sign In</p>
            <p>View Cart</p>
            <p>My Wishlist</p>
            <p>Track My Order</p>
            <p>Help</p>
          </div>
  
          <div className="col1">
            <h3>Install App</h3>
            <p>From App Store or Google Pay</p>
            <img src={down} alt="Download" />
            <h3>Payment Gateways</h3><br />
            <img src={pay} alt="Payment" />
          </div>
        </footer>
    </div>
  )
}

export default Footer;
