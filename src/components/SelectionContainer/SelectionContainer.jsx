import React, { useEffect } from 'react'
import EditButton from '../Edit Button/EditButton'
import "./SelectionContainer.css"
export default function SelectionContainer({product,addToCart,cart,getCart}) {

  useEffect(() => {
    getCart();
  },[])
  const checkIfAvailable = () => {
    if (cart && cart.length > 0) {
      const item = cart.find((cartItem) => cartItem.product && cartItem.product.id === product.id);
  
      if (item) {
        const item_quantity = item.product.quantity;
        const cart_quantity = item.quantity;
  
        if (cart_quantity >= item_quantity) {
          console.log("not available");
          return false;
        } else {
          return true;
        }
      }
    }
  
    return true;
  };
  const handleButtonClick = async () => {
    getCart();
    if(checkIfAvailable()){
      addToCart(product);
    }
    else{
      console.log("failed");
    }
    }
  return (
    <div className='selection-container'>
      <div className='selection-container-content'>
      <h3>${product.price}</h3>
      {checkIfAvailable() && <EditButton handleButtonClick={handleButtonClick} text={"Add to Cart"} product={product}/>}
      {!checkIfAvailable() && <h3 className='not-available'>Your cart contains all available items</h3>}
      </div>
    </div>
  )
}
