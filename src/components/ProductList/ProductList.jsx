import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useAuth } from '../../Context/AuthContext'
import './ProductList.css' 

function ProductList({products,setUpdate}) {
  // console.log(products);
  if(!useAuth()){
    products = products.filter(product => {
      return product.quantity > 0;
    })
  }
  return (
    <div className='product-list'>
      {Array.isArray(products) ? products.map((product,index) => (
        <ProductCard product={product} key={index} setUpdate={setUpdate}/>
        )) : <ProductCard product={products}  setUpdate={setUpdate}/>}
    </div>
  )
}

export default ProductList
