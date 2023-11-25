import React from 'react'
import './PaymentDisplay.css'

export default function PaymentDisplay({data}) {
    const {cardNumber,cvv,expirationDate,cardHolderName} = data;
    return (
      <div className='payment-display'>
          <h2>Your Payment Info</h2>
          <p>{cardHolderName}</p>
          <p>{cardNumber}</p>
          <p>Expires: {expirationDate}</p>
      </div>
  )
}
