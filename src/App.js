
import './App.css';
import ProductList from './components/ProductList/ProductList';
import ProductShow from './Pages/ProductShow/ProductShow';
import useApiFetch from './Services/GetProducts/useApiFetch';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/Product/:id" element={<ProductShow/>}/>
      <Route exact path="/" element={<Home/>}>  
      </Route>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
