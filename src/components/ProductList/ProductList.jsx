import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css' 

function ProductList() {
  return (
    <div className='product-list'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default ProductList
