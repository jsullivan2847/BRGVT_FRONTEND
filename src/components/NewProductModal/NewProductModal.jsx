import React, { useState, useEffect } from 'react';
import "./NewProductModal.css"
import EditButton from '../Edit Button/EditButton';
const NewProductModal = ({postData,active, setActive,handleButtonClick, product, setUpdate}) => {
  const apiUrl = 'https://brgvt-v2.onrender.com/Products';
  const [formData, setFormData] = useState({
    // Define initial form data here
    name: "",
    // Add other form fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      await postData(apiUrl,formData);
    }
    finally{
      setUpdate(prevState => !prevState);
      handleButtonClick();
    }
  }
  return (
    <>
    {active && <div id="myModal" className="modal">
        <div className="modal-content">
            <EditButton handleButtonClick={handleButtonClick} text={"Close"}></EditButton>
            <h2>New Product</h2>
            <form id="myForm" action="submit.php" method="post"/>
                <label className='label' htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} required/>
                <label className='label' htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" onChange={handleChange} required/>
                <label className='label' htmlFor="sizes">Sizes:</label>
                <input type="text" id="sizes" name="sizes" onChange={handleChange} required/>
                <label className='label' htmlFor="name">Quantity:</label>
                <input type="text" id="quantity" name="quantity" onChange={handleChange} required/>
                <EditButton text={"Submit"} handleButtonClick={handleSubmit}/> 
            </div> </div>} </>
  );
};

export default NewProductModal;
