import React from 'react'
import './Home.css';
import ProductList from '../../components/ProductList/ProductList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useApiFetch from '../../Services/GetProducts/useApiFetch';
import { useEffect, useState } from 'react';

export default function Home() {

  const apiUrl = 'https://brgvt-v2.onrender.com/Products';
  const { data, loading, error, fetchData } = useApiFetch();
  const [update,setUpdate] = useState(false);

  useEffect(() => {
    fetchData(apiUrl); // Specify your API endpoint
  }, [update]);

  if(loading){
    console.log('is loading')
  }
  return (
      <div className="App">
  <div className="main-content">
    <h2>Featured Products</h2>
    {loading && <h1>Loading...</h1>}
    {data && <ProductList products={data} setUpdate={setUpdate}/>}
    {error && <p>Error: {error.message}</p>}
  </div>
    </div>
  )
}
