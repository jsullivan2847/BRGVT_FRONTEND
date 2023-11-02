import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css' 
import EditProductModal from '../EditProductModal/EditProductModal';
import { useState } from 'react';

function ProductList({products,setUpdate}) {
  console.log("??",setUpdate)
  return (
    <div className='product-list'>
      {products.map((product,index) => (
        <ProductCard product={product} key={index} setUpdate={setUpdate}/>
        ))}
    </div>
  )
}

export default ProductList
