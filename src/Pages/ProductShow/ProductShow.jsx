import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useApiFetch from '../../Services/GetProducts/useApiFetch';
import { useEffect } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./ProductShow.css"
import ProductShowContainer from '../../components/ProductShowContainer/ProductShowContainer';

export default function ProductShow() {
  const {id} = useParams();
  const apiUrl = 'https://brgvt-v2.onrender.com/Products/'+id;
  const { data, isLoading, error, fetchData } = useApiFetch();
  const [update,setUpdate] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetchData(apiUrl);
    console.log('triggered');
  }, [update]);

  const handleButtonClick = () => {
    setIsActive(prevState => !prevState);
  }
  return (
    <div className='product-show-page'>
      {data && <ProductShowContainer
      data={data}
      handleButtonClick={handleButtonClick}
      isActive={isActive}
      setIsActive={setIsActive}
      setUpdate={setUpdate}
      />}
    </div>
  )
}
