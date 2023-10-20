import React from 'react'
import './ProductCard.css' 
import GetProducts from '../../Services/GetProducts/ApiFetch'

function ProductCard({product}) {
  let url = ''
  console.log(product)
  if(product.images){
    url = product.images[0].url
  }
  return (
    <div className='product-card'>
              <h3 className='product-title'>{product.name}</h3>
        <p>Description of Product 1</p>
        <img className = "product-image" src={url}/>
        <button className='add-to-cart-button'>Add to Cart</button>
    </div>
  )
}

export default ProductCard
