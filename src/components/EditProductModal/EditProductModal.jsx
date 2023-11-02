import React, { useState, useEffect } from 'react';
import "./EditProductModal.css"
import EditButton from '../Edit Button/EditButton';
import useApiPut from '../../Services/GetProducts/useApiPut';
import useApiFetch from '../../Services/GetProducts/useApiFetch';
const EditProductModal = ({active, setActive,handleButtonClick, product, setUpdate}) => {
  //console.log(product);
  const { sentPutData, isLoading, error, putData } = useApiPut();
  const { data, fetchData } = useApiFetch();
  const apiUrl = 'https://brgvt-v2.onrender.com/Products/'+product.id;
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
    console.log(formData);
  };
  const handleSubmit = async () => {
    try {
      await putData(apiUrl,"PUT",formData)
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
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} required/><br/><br/>
                <label htmlFor="fileInput">Select a File:</label>
                <input type="file" id="fileInput" name="fileInput"/>
                <EditButton text={"Submit"} handleButtonClick={handleSubmit}/> 
            </div> </div>} </>
  );
};

export default EditProductModal;
