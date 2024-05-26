import React, { useContext } from 'react'
import Navbar from '../components/navbar';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import { ShopContext } from '../Context/ShopContext';
import Footer from '../components/footer';


const Product = () => {
    const {products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = products.find((e)=> e.id === Number(productId));


  return(

    <div>
      <Navbar/>
      <ProductDisplay product={product}/>
      <Footer/>
    </div>

  )
}

export default Product
