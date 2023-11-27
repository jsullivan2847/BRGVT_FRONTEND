import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const StripePayment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Use createPaymentMethod to convert sensitive card information to a payment method.
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    
    if (paymentMethod) {
      console.log(paymentMethod);
    } else {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
};

export default StripePayment;