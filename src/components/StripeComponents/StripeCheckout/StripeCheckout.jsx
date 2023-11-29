import React from 'react'
import { useStripe } from '@stripe/react-stripe-js';

export default function StripeCheckout({products,total}) {
    console.log(products.length)
    console.log("here: ",products);
    let prepareCheckout = null
    if(products.length > 1){
        prepareCheckout = products.map((product) => {
            return {
                "price_data":{
                    "product":product.product.stripe_product,
                    "currency":"usd",
                    "unit_amount":product.product.price * 100
                },
                "quantity":product.product.quantity,
            }
        })
    }
    else if(products.length == 1){
        prepareCheckout = {
            "price_data":{
                "product":products[0].product.stripe_product,
                "currency":"usd",
                "unit_amount":products[0].product.price * 100
            },
            "quantity":products[0].quantity,
        }
    }
    
    console.log({"items":prepareCheckout})
    total = total * 100;
    const stripe = useStripe();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://brgvt-v2.onrender.com/create-checkout-session",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"items":prepareCheckout})
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
