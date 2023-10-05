
import './App.css';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <div>
      <body>
  <header class="header">
    <h1>BRGVT Website V2</h1>
  </header>

  <nav class="navbar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Orders</a></li>
      <li><a href="#">Archive</a></li>
    </ul>
  </nav>

  <div class="sidebar">
    <h2>Categories</h2>
    <ul>
      <li><a href="#">Category 1</a></li>
      <li><a href="#">Category 2</a></li>
      <li><a href="#">Category 3</a></li>
    </ul>
  </div>

  <div class="main-content">
    <h2>Featured Products</h2>
    <ProductList>
    </ProductList>
      
    
  </div>

  <footer class="footer">
    &copy; 2023 E-commerce Dashboard
  </footer>
</body>
      </div>
    </div>
  );
}

export default App;
