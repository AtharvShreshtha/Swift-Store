import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../imgvid/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, products, cartItems, removeFromCart } = useContext(ShopContext);

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId); // Call removeFromCart with the itemId
    };

    return (
      <div className="cart">
        <h1>Purchases</h1>
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {products.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img className="carticon-product-icon" src={product.image} alt="" />
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                                <p>${product.price * cartItems[product.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => handleRemoveFromCart(product.id)} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
              <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                  <div className="cartitems-total-items">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cartitems-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                  </div>
                  <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                  </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
              </div>
              <div className="cartitems-promo">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                  <input type="text" placeholder='promo code' />
                  <button>Submit</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
}

export default CartItems;
