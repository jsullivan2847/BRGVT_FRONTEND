import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css' 
import ApiFetch from '../../Services/GetProducts/ApiFetch'

function ProductList({products}) {
  products ? console.log(products) : console.log('no products');
  return (
    <div className='product-list'>
      {products.map((product,index) => (
          <ProductCard product={product} key={index}/>
        ))}
    </div>
  )
}

export default ProductList
