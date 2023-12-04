import React from 'react'
import './Home.css';
import ProductList from '../../components/ProductList/ProductList';
import useApiFetch from '../../Services/GetProducts/useApiFetch';
import { useEffect, useState } from 'react';
import EditButton from '../../components/Edit Button/EditButton';
import NewProductModal from '../../components/NewProductModal/NewProductModal';
import { useAuth } from '../../Context/AuthContext';

export default function Home() {

  const apiUrl = 'https://brgvt-v2.onrender.com/Products';
  const { data, loading, error, fetchData, postData} = useApiFetch();
  const [update,setUpdate] = useState(false);
  const [isNewProductModalActive, setNewProductModalActive] = useState(false);
  
  const handleNewProductClick = () => {
    setNewProductModalActive(prevState => !prevState)
}

  useEffect(() => {
    fetchData(apiUrl); // Specify your API endpoint
  }, [update]);
  return (
  <div className="App">
  <div className="main-content">
    {useAuth() && <EditButton  text={"+ Product"} handleButtonClick={handleNewProductClick}/>}
    <NewProductModal
    handleButtonClick={handleNewProductClick} 
    active={isNewProductModalActive}
    setUpdate={setUpdate}
    setActive={handleNewProductClick}
    postData={postData}
    />
    {loading && <h1>Loading...</h1>}
    {data && <ProductList products={data} setUpdate={setUpdate}/>}
    {error && <p>Error: {error.message}</p>}
  </div>
    </div>
  )
}
