
import './App.css';
import ProductShow from './Pages/ProductShow/ProductShow';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import LoginPage from './Pages/Login/LoginPage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';


function App() {
  
  return (
    <AuthProvider>
    <Header/>
    <Routes>
      <Route exact path="/Product/:id" element={<ProductShow/>}/>
      <Route exact path="/" element={<Home/>}/>  
      <Route exact path="/Checkout" element={<Checkout/>}/>
      <Route exact path='/Login' element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </AuthProvider>
  );
}

export default App;
