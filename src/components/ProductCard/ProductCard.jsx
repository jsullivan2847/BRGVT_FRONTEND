import React from 'react'
import './ProductCard.css' 
import GetProducts from '../../Services/GetProducts/ApiFetch'

function ProductCard({product}) {
  console.log(product)
  return (
    <div className='product-card'>
              <h3>{product.name}</h3>
        <p>Description of Product 1</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard
