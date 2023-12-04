import React, { useState, useEffect, useContext } from 'react';
import "./LoginModal.css"
import useLogin from '../../Services/Login/useLogin';
import EditButton from '../Edit Button/EditButton';
import { useAuth } from '../../Context/AuthContext';
import Cookies from 'js-cookie';
const LoginModal = ({active,close}) => {
  const apiUrl = 'https://76d2-68-194-52-13.ngrok-free.app/login';
  const [formData, setFormData] = useState({});
  const {login} = useLogin();
  const [token, setToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      // console.log("isLoggedIn from context: ",isloggedIn);
      let {data,error} = await login(formData);
      Cookies.set("LoggedIn","True");
      console.log("from here: ",Cookies.get())
    } catch(e){console.log(e)}
  }

  useEffect(() => {
    if(token){
        close();
    }
  },[token])

  return (
    <>
    {active && <div id="myModal" className="modal">
        <div className="modal-content">
            <EditButton handleButtonClick={close} text={"Close"}></EditButton>
            <h2>New Product</h2>
            <form id="myForm" action="submit.php" method="post"/>
                <label className='label' htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={handleChange} required/>
                <label className='label' htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" onChange={handleChange} required/>
                <EditButton text={"Submit"} handleButtonClick={handleSubmit}/> 
            </div> </div>} </>
  );
};

export default LoginModal;
