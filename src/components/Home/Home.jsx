import React from 'react'
import './Home.css';
import ProductList from '../ProductList/ProductList';
import ProductShow from '../ProductShow/ProductShow';
import useApiFetch from '../../Services/GetProducts/useApiFetch';
import { useEffect, useState } from 'react';

export default function Home() {

  const apiUrl = 'https://brgvt-v2.onrender.com/Products';
  const { data, isLoading, error, fetchData } = useApiFetch();
  const [update,setUpdate] = useState(false);
  useEffect(() => {
    fetchData(apiUrl); // Specify your API endpoint
  }, [update]);
  return (
    <>
      <div className="App">
      <div>
  <header className="header">
    <h1>BRGVT Website V2</h1>
  </header>
  <div className="main-content">
    <h2>Featured Products</h2>
    {isLoading && <p>Loading...</p>}
    {data && <ProductList products={data} setUpdate={setUpdate}/>}
    {error && <p>Error: {error.message}</p>}
  </div>

  <footer className="footer">
    &copy; BRGVT
  </footer>
      </div>
    </div>
    </>
  )
}
