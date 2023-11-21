import React from 'react'

export default function PaymentDisplay({data}) {
    const {cardNumber,cvv,expirationDate,cardHolderName} = data;
    return (
      <div className='shipping-display'>
          <h2>Your Payment Info</h2>
          <p>{cardHolderName}</p>
          <p>{cardNumber}</p>
          <p>Expires: {expirationDate}</p>
      </div>
  )
}
