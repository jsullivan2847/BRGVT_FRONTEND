
import './App.css';
import ProductShow from './Pages/ProductShow/ProductShow';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/Product/:id" element={<ProductShow/>}/>
      <Route exact path="/" element={<Home/>}/>  
      <Route exact path="/Checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
