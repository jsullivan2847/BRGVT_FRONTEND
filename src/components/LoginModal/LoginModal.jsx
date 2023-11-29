import React, { useState, useEffect } from 'react';
import "./LoginModal.css"
import useLogin from '../../Services/Login/useLogin';
import EditButton from '../Edit Button/EditButton';
const LoginModal = ({active,close}) => {
  const apiUrl = 'https://brgvt-v2.onrender.com/login';
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
      let {user_id,token} = await login(formData);
      setToken(token);
      console.log(user_id,token);
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
