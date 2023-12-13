import React, { useState, useEffect } from 'react';
import "./EditProductModal.css"
import EditButton from '../Edit Button/EditButton';
import useApiPut from '../../Services/GetProducts/useApiPut';
import useApiFetch from '../../Services/GetProducts/useApiFetch';
const EditProductModal = ({active, setActive,handleButtonClick, product, setUpdate}) => {
  const { sentPutData, isLoading, error, putData } = useApiPut();
  const { data, fetchData } = useApiFetch();
  const apiUrl = 'https://brgvt-v2.onrender.com/Products/'+product.id;
  const [formData, setFormData] = useState({
    // Define initial form data here
    name: product.name,
    quantity: product.quantity
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
    console.log(formData);
    try {
      await putData(apiUrl,"PUT",formData);
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
            <h2>Edit Product</h2>
            <form id="myForm" action="submit.php" method="post"/>
                <label htmlFor="name" className='label'>Name:</label>
                <input placeholder={product.name} type="text" id="name" name="name" onChange={handleChange} required/>
                <label htmlFor="price" className='label'>Price:</label>
                <input placeholder={product.price} type="text" id="price" name="price" onChange={handleChange} required/>
                <label htmlFor="sizes" className='label'>Sizes:</label>
                <input placeholder={product.sizes} type="text" id="sizes" name="sizes" onChange={handleChange} required/>
                <label htmlFor="quantity" className='label'>Quantity:</label>
                <input placeholder={product.quantity} type="text" id="quantity" name="quantity" onChange={handleChange} required/>
                <label htmlFor="description" className='label'>Description:</label>
                <textarea placeholder={product.description} type="text" id="description" name="description" onChange={handleChange} required/>
                <EditButton text={"Submit"} handleButtonClick={handleSubmit}/> 
            </div> </div>} </>
  );
};

export default EditProductModal;
