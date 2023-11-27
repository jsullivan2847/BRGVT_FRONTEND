import React from 'react'
import './ProductCard.css' 
import EditButton from '../Edit Button/EditButton'
import EditProductModal from '../EditProductModal/EditProductModal'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteProductModal from '../DeleteProductModal/DeleteProductModal'

function ProductCard({product,setUpdate}) {
  let url = ''
  const [isActive, setIsActive] = useState(false);
  if(product.images){
    url = product.images[0].url
    //console.log(url)
  }

  const onSave = () => {
    //console.log('saved');
  }

  const handleButtonClick = () => {
    setIsActive(prevState => !prevState);
  }

  const link = "/Product/" + product.id
  return (
    <div className='product-card'>
              <h3 className='product-title'>{product.name}</h3>
              <EditButton handleButtonClick={handleButtonClick} text={"Edit"}/>
              <EditButton handleButtonClick={handleButtonClick} text={"Delete"}/>
              {/* <EditProductModal active={isActive} 
              handleButtonClick={handleButtonClick} 
              product={product}
              setUpdate={setUpdate}
              setActive={setIsActive}
              /> */}
              <DeleteProductModal
               active={isActive} 
               handleButtonClick={handleButtonClick} 
               product={product}
               setUpdate={setUpdate}
               setActive={setIsActive}
              />
        <Link to={link}><img className="product-image" src={url}/></Link>
        <button className='add-to-cart-button'>Add to Cart</button>
    </div>
  )
}

export default ProductCard
