import React from 'react'
import EditButton from '../Edit Button/EditButton'
export default function SelectionContainer({product,addToCart,}) {
    const handleButtonClick = async () => {
        const response = await fetch("http://127.0.0.1:5000/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({ "product_id":"eel.jpeg" }),
      });
      console.log("response: ",response);
    }
  return (
    <div className='selection-container'>
    <h3>$500</h3>
    <EditButton handleButtonClick={handleButtonClick} text={"Add to Cart"} product={product}/>
    </div>
  )
}
