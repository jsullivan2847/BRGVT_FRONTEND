import {React,useState,useEffect } from 'react';
import './Checkout.css';
import ShippingForm from '../../components/ShippingForm/ShippingForm';
import ShippingDisplay from '../../components/ShippingDisplay/ShippingDisplay';
import CartContainer from '../../components/CartContainer/CartContainer';
import StripeCheckout from '../../components/StripeComponents/StripeCheckout/StripeCheckout';
import useGetCart from '../../Services/Cart/useGetSessionData';

const CheckoutContainer = () => {
    const [shipping,setShipping] = useState(null);
    const [payment,setPayment] = useState(null);
    const [cart,setCart] = useState(null);
    const [total,setTotal] = useState(0);
    const { cartResponse, loading, error, getCart } = useGetCart();
    const [update,setUpdate] = useState(true);
    useEffect(() => {
        getCart();    
    },[update])

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
        {cartResponse && <CartContainer setUpdate={setUpdate}cart={cartResponse} setTotal={setTotal}/>}
        {/* {cartResponse && <StripeContainer cart={cartResponse} total={total}/>}  */}
        <h1>stripe..</h1>
        {cartResponse && <StripeCheckout total={total} products={cartResponse}/>}
        </div>
        
        
        
      </div>
    </div>
    
  );
};

export default CheckoutContainer;