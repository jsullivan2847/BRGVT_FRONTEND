import React, { useState,useEffect } from 'react'
import useGetCart from '../../Services/Cart/useGetSessionData'
import "./CartContainer.css"
import QuantitySelector from '../QuantitySelector/QuantitySelector';
export default function CartContainer({setTotal,setCart,cart,setUpdate}) {

    const calculateTotal = (cartItems) => {
        let total = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    return total
    };
    console.log(cart);
    
  return (
    <div className="cart-container">
    <h2>Your Cart</h2>
    <div className="cart-items">
      {!cart ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
                {item.product.images && <img src={item.product.images[0].url} alt={item.name} /> }
              <div>
                <p className="item-name">{item.product.name}</p>
                <p className="item-price">${item.product.price}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
                <QuantitySelector setUpdate={setUpdate} item={item}/>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    {cart && <div className="cart-total">
      <p>Total: $ {calculateTotal(cart)}</p>
    </div>}
  </div>
);
};

