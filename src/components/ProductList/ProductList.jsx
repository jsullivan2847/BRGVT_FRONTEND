import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css' 

function ProductList({products,setUpdate}) {
  return (
    <div className='product-list'>
      {Array.isArray(products) ? products.map((product,index) => (
        <ProductCard product={product} key={index} setUpdate={setUpdate}/>
        )) : <ProductCard product={products}  setUpdate={setUpdate}/>}
    </div>
  )
}

export default ProductList
