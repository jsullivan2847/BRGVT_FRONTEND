import React, { useState } from 'react';
import './Checkout.css';
import ShippingForm from '../../components/ShippingForm/ShippingForm';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import ShippingDisplay from '../../components/ShippingDisplay/ShippingDisplay';
import PaymentDisplay from '../../components/PaymentDisplay/PaymentDisplay';

const Checkout = () => {
    const [shipping,setShipping] = useState(null);
    const [payment,setPayment] = useState(null);

  return (
    <div className='checkout-page'>
      <h2>Checkout</h2>
      <div className="checkout-container">
        {shipping ? <ShippingDisplay data={shipping}/> : <ShippingForm setShipping={setShipping}/> }
        {payment ? <PaymentDisplay data={payment}/> : <PaymentForm setPayment={setPayment}/>}
        
      </div>
    </div>
    
  );
};

export default Checkout;