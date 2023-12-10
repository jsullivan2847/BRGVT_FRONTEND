import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutContainer from './CheckoutContainer';


export default function CheckoutPage({cart,total}) {
// console.log(cart);
const stripe_key = toString(process.env.STRIPE_SECRET_KEY);
const stripePromise = loadStripe('pk_test_51NxIABCkJuLyyqQLiCkQpbUJv1ZjC47QTp3pLMH4uWzeLAhs4EaKIxwIzsxpyJ34xTJ7kHmWJnU8j9FKJWGLjUyO00MraRadCd');
  return (
    <Elements stripe={stripePromise}>
        <CheckoutContainer/>
        {/* <h1>Stripe Container</h1>
        <StripeCheckout total={total} products={cart}/> */}
    </Elements>
  )
}
