
import './App.css';
import ProductList from './components/ProductList/ProductList';
import useApiFetch from './Services/GetProducts/useApiFetch';
import { useEffect, useState } from 'react';



function App() {


  const apiUrl = 'https://brgvt-v2.onrender.com/Products';
  const { data, isLoading, error, fetchData } = useApiFetch();
  const [update,setUpdate] = useState(false);
  useEffect(() => {
    fetchData(apiUrl); // Specify your API endpoint
  }, [update]);
console.log(data);

  return (
    <div className="App">
      <div>
  <header className="header">
    <h1>BRGVT Website V2</h1>
  </header>

  <nav className="navbar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Orders</a></li>
      <li><a href="#">Archive</a></li>
    </ul>
  </nav>

  <div className="sidebar">
    <h2>Categories</h2>
    <ul>
      <li><a href="#">Category 1</a></li>
      <li><a href="#">Category 2</a></li>
      <li><a href="#">Category 3</a></li>
    </ul>
  </div>

  <div className="main-content">
    <h2>Featured Products</h2>
    {isLoading && <p>Loading...</p>}
    {data && <ProductList products={data} setUpdate={setUpdate}/>}
    {error && <p>Error: {error.message}</p>}
  </div>

  <footer className="footer">
    &copy; 2023 E-commerce Dashboard
  </footer>
      </div>
    </div>
  );
}

export default App;
