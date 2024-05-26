import React, { useState } from 'react';
import '../styles.css'; 
import logo from '../imgvid/logo.jpg'; 
import down from '../imgvid/down.webp'; 
import pay from '../imgvid/pay.webp'; 
import products from './data.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

function Shop(){
       const [searchTerm, setSearchTerm] = useState('');
       const [filteredProducts, setFilteredProducts] = useState([]);

       const handleInputChange = (event) => {
       const term = event.target.value.trim().toLowerCase();
       setSearchTerm(term);
      
       const filtered = products.filter(product => 
         product.name.toLowerCase().includes(term)
       );
       setFilteredProducts(filtered);
     };


    return (
      <div>
        <Navbar/>
        
  
        <div className='feats'>
          <h1>Check out our wide variety of products</h1><br></br><br></br>
          <div>
            <input type="text" id="search-input" placeholder="Search" value={searchTerm} onChange={handleInputChange}/>
            <div className="products">
            {filteredProducts.map(product => (
              <div className="procontain">
                <div className="contain">
                  {product.element}
                </div>
              </div>
            ))}
            </div> 
          </div> 
        </div>
  
        <Footer/>
      </div>
    );
}

  
export default Shop;