import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripePayment from '../StripePayment/StripePayment';
import StripeCheckout from '../StripeCheckout/StripeCheckout';


export default function StripeContainer() {

    // Set up your Publishable Key
const stripe_key = toString(process.env.STRIPE_SECRET_KEY);
const stripePromise = loadStripe('pk_test_51NxIABCkJuLyyqQLiCkQpbUJv1ZjC47QTp3pLMH4uWzeLAhs4EaKIxwIzsxpyJ34xTJ7kHmWJnU8j9FKJWGLjUyO00MraRadCd');
if(stripePromise){
    console.log(stripePromise)
}


  return (
    <Elements stripe={stripePromise}>
        <h1>Stripe Container</h1>
        {/* <StripePayment/> */}
        <StripeCheckout/>
    </Elements>
  )
}
