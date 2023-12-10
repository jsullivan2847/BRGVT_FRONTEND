import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import useEditCart from '../../Services/Cart/useEditCart';
export default function QuantitySelector({item,setUpdate}) {
  const [selectedValue, setSelectedValue] = useState(item.quantity);
  const { cartResponse,editCart } = useEditCart();
  const length = item.product.quantity;
  const options = Array.from({ length }, (_, index) => index + 1);
  const isInitialRender = useRef(true);
  console.log('new array: ',options);

  // Edit cart
  useEffect(() => {
    if (!isInitialRender.current) {
      console.log('fired edit cart');
      editCart(item.product.id, selectedValue);
    } 
  }, [selectedValue]);

  // Update the QTY display
  useEffect(() => {
    if (!isInitialRender.current) {
      console.log('fired set update');
      setUpdate((prevState) => !prevState);
    } else {
        isInitialRender.current = false;
      }
  }, [cartResponse]);
  
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <select onChange={handleSelectChange} value={selectedValue}>
        {options && options.map((option,index) => (
            <option key={index}>{option}</option>
        ))}
       </select>  
    </div>
  )
}
