
import './App.css';
import ProductList from './components/ProductList/ProductList';
import ProductShow from './components/ProductShow/ProductShow';
import Home from './components/Home/Home';
import useApiFetch from './Services/GetProducts/useApiFetch';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/Product/:id" exact Component={ProductShow}/>
      <Route path="/" exact Component={Home}>  
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
