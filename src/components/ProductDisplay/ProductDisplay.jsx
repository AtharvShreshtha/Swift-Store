import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../imgvid/star_icon.png'
import dull_star_icon from '../../imgvid/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

function  ProductDisplay  (props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    const handleAddToCart = () => {
        addToCart(product.id);
        console.log("Item added to cart:", product.name);
    };

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={dull_star_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-price">
                ${product.price}
            </div>
            <div className="description">
                <h3>Product Description</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos doloremque at ut quibusdam quidem fuga necessitatibus, veniam enim. Consequatur aspernatur eligendi numquam accusamus incidunt id magnam quae similique ducimus.
            </div>
            <button onClick={handleAddToCart}>ADD TO CART</button>
        </div>
        
        
    </div>
  )
}

export default ProductDisplay
