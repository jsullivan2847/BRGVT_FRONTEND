import React, { useState,useEffect } from 'react';
import './Checkout.css';
import useGetCart from '../../Services/Cart/useGetSessionData';
import ShippingForm from '../../components/ShippingForm/ShippingForm';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import ShippingDisplay from '../../components/ShippingDisplay/ShippingDisplay';
import PaymentDisplay from '../../components/PaymentDisplay/PaymentDisplay';
import CartContainer from '../../components/CartContainer/CartContainer';

const Checkout = () => {
    const [shipping,setShipping] = useState(null);
    const [payment,setPayment] = useState(null);

    const { cartResponse, loading, error, getCart } = useGetCart();
    console.log(cartResponse)
    useEffect(() => {
        getCart();
    },[])
    if(error){
        console.log(error)
    }

    const calculateTotal = (cartItems) => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
        };

  return (
    <div className='checkout-page'>
      <h2>Checkout</h2>
      <div className="checkout-container">
        <div className='form-container'>
        {shipping ? <ShippingDisplay data={shipping}/> : <ShippingForm setShipping={setShipping}/> }
        {payment ? <PaymentDisplay data={payment}/> : <PaymentForm setPayment={setPayment}/>}
        </div>
        <div className='right-side'>
        <CartContainer/>
        <CartContainer/>
        </div>
        
        
        
      </div>
    </div>
    
  );
};

export default Checkout;