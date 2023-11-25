import React from 'react'
import { useStripe } from '@stripe/react-stripe-js';

export default function StripeCheckout() {
    const stripe = useStripe();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/create-checkout-session",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "items": {
                    "price_data":{
                        "product":"prod_P4bGuzdo5Mo1Ze",
                        "currency":"usd",
                        "unit_amount":5000
                    },
                    "quantity":1,
                }
            }),
        })

    const session = await response.json();
    const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });
    if (result.error) {
        console.error(result.error.message);
    }
    }
  return (
    <div>
        <button onClick={handleSubmit}>Test</button>
    </div>
  )
}
