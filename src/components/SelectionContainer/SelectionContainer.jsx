import React from 'react'
import EditButton from '../Edit Button/EditButton'
export default function SelectionContainer({product,addToCart,}) {
    const handleButtonClick = async () => {
    addToCart(product);
    }
  return (
    <div className='selection-container'>
    <h3>${product.price}</h3>
    <EditButton handleButtonClick={handleButtonClick} text={"Add to Cart"} product={product}/>
    </div>
  )
}
