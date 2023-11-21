import React from 'react'
import "./ShippingDisplay.css"

export default function ShippingDisplay({data}) {
    const {aptSuiteOther,city,fullName,phoneNumber,state,streetAddress,zipCode} = data;
  return (
    <div className='shipping-display'>
        <h2>Your Shipping Address</h2>
        <p>{fullName}</p>
        <p>{streetAddress} {aptSuiteOther}</p>
        <p>{city}, {state} {zipCode}</p>
        <p>{phoneNumber}</p>
    </div>
  )
}
