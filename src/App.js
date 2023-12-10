
import './App.css';
import ProductShow from './Pages/ProductShow/ProductShow';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import LoginPage from './Pages/Login/LoginPage';
import Success from './Pages/Success/Success';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';



function App() {
  
  return (
    <AuthProvider>
    <Header/>
    <Routes>
      <Route exact path="/Product/:id" element={<ProductShow/>}/>
      <Route exact path="/" element={<Home/>}/>  
      <Route exact path="/Checkout" element={<CheckoutPage/>}/>
      <Route exact path='/Login' element={<LoginPage/>}/>
      <Route exact path='/Success' element={<Success/>}/>
      </Routes>
      <Footer/>
    </AuthProvider>
  );
}

export default App;
