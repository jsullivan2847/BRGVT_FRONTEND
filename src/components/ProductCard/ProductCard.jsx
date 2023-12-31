import React from 'react'
import './ProductCard.css' 
import EditButton from '../Edit Button/EditButton'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteProductModal from '../DeleteProductModal/DeleteProductModal'
import { useAuth } from '../../Context/AuthContext';

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
              {useAuth() && <><EditButton handleButtonClick={handleButtonClick} text={"Delete"}/> <p>Quantity: {product.quantity}</p></> }
              <DeleteProductModal
               active={isActive} 
               handleButtonClick={handleButtonClick} 
               product={product}
               setUpdate={setUpdate}
               setActive={setIsActive}
              />
        <Link to={link}><img className="product-image" src={url}/></Link>
    </div>
  )
}

export default ProductCard
