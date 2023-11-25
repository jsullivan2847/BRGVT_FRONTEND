import React, { useState,useEffect } from 'react'
import useGetCart from '../../Services/Cart/useGetSessionData'
import "./CartContainer.css"
export default function CartContainer() {
    const { cartResponse, loading, error, getCart } = useGetCart();
    console.log(cartResponse)
    useEffect(() => {
        getCart();
        
    },[])
    if(error){
        console.log(error)
    }
    
  return (
    <div className="cart-container">
    <h2>Your Cart</h2>
    <div className="cart-items">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      {!cartResponse ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartResponse.cart.map((item, index) => (
            <li key={index}>
                {console.log(item)}
              <img src={item.product.images[0].url} alt={item.name} />
              <div>
                <p className="item-name">{item.product.name}</p>
                <p className="item-price">${item.product.price}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    {cartResponse &&     <div className="cart-total">
      <p>Total: $ {calculateTotal(cartResponse.cart)}</p>
      {/* <button className="checkout-button"><a href='/#/Checkout'>Proceed To Checkout</a></button> */}
    </div>}
  </div>
);
};

const calculateTotal = (cartItems) => {
return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
};