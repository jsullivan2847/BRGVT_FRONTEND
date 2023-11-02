import React from 'react'
import './ProductCard.css' 
import EditButton from '../Edit Button/EditButton'
import GetProducts from '../../Services/GetProducts/useApiFetch'
import EditProductModal from '../EditProductModal/EditProductModal'
import { useState } from 'react'

function ProductCard({product,setUpdate}) {
  let url = ''
  const [isActive, setIsActive] = useState(false);
  if(product.images){
    url = product.images[0].url
  }

  const onSave = () => {
    console.log('saved');
  }

  const handleButtonClick = () => {
    setIsActive(prevState => !prevState);
  }
  return (
    <div className='product-card'>
              <h3 className='product-title'>{product.name}</h3>
              <EditButton handleButtonClick={handleButtonClick} text={"Edit"}/>
              <EditProductModal active={isActive} 
              handleButtonClick={handleButtonClick} 
              product={product}
              setUpdate={setUpdate}
              setActive={setIsActive}
              />
        <p>Description of Product 1</p>
        <img className = "product-image" src={url}/>
        <button className='add-to-cart-button'>Add to Cart</button>
    </div>
  )
}

export default ProductCard
