
import './App.css';
import ProductList from './components/ProductList/ProductList';
import ProductShow from './Pages/ProductShow/ProductShow';
import useApiFetch from './Services/GetProducts/useApiFetch';
import Home from './Pages/Home/Home';
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
