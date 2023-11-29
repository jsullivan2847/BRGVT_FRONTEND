import React, { useState,useEffect } from 'react';
import './Checkout.css';
import ShippingForm from '../../components/ShippingForm/ShippingForm';
import ShippingDisplay from '../../components/ShippingDisplay/ShippingDisplay';
import CartContainer from '../../components/CartContainer/CartContainer';
import StripeContainer from '../../components/StripeComponents/StripeContainer/StripeContainer';
import useGetCart from '../../Services/Cart/useGetSessionData';

const Checkout = () => {
    const [shipping,setShipping] = useState(null);
    const [payment,setPayment] = useState(null);
    const [cart,setCart] = useState(null);
    const [total,setTotal] = useState(0);
    const { cartResponse, loading, error, getCart } = useGetCart();
    useEffect(() => {
        getCart();    
    },[])

  return (
    <div className='checkout-page'>
      <h2>Checkout</h2>
      <div className="checkout-container">
        <div className='form-container'>
        {shipping ? <ShippingDisplay data={shipping}/> : <ShippingForm setShipping={setShipping}/> }
        {/* {payment ? <PaymentDisplay data={payment}/> : <PaymentForm setPayment={setPayment}/>} */}
        </div>
        <div className='right-side'>
        {loading && <p>Loading...</p>}
        {cartResponse && <CartContainer cart={cartResponse} setTotal={setTotal}/>}
        {cartResponse && <StripeContainer cart={cartResponse} total={total}/>} 
        </div>
        
        
        
      </div>
    </div>
    
  );
};

export default Checkout;