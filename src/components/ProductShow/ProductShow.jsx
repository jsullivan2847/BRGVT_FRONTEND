import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useApiFetch from '../../Services/GetProducts/useApiFetch';
import { useEffect } from 'react';
import EditButton from '../Edit Button/EditButton';
import EditProductModal from '../EditProductModal/EditProductModal';

export default function ProductShow() {
    const {id} = useParams();
    const apiUrl = 'https://brgvt-v2.onrender.com/Products/'+id;
  const { data, isLoading, error, fetchData } = useApiFetch();
  const [update,setUpdate] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    fetchData(apiUrl); // Specify your API endpoint
  }, [update]);

  let url = ''
  if(data && data[0].images){
    url = data[0].images[0].url
    console.log(url)
  }
  const handleButtonClick = () => {
    setIsActive(prevState => !prevState);
  }
  console.log(data)
  return (
    <div className='product-card'>
        {data && <>
            <h3 className='product-title'>{data[0].name}</h3>
              <EditButton handleButtonClick={handleButtonClick} text={"Edit"}/>
              <EditProductModal active={isActive} 
              handleButtonClick={handleButtonClick} 
              product={data[0]}
              setUpdate={setUpdate}
              setActive={setIsActive}
              />
        <img className="product-image" src={url}/>
        <button className='add-to-cart-button'>Add to Cart</button></> }
    </div>
  )
}
