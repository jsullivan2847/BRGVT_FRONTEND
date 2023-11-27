import React, { useState } from 'react';
import "./DeleteProductModal.css"
import EditButton from '../Edit Button/EditButton';
import useApiPut from '../../Services/GetProducts/useApiPut';
import useApiFetch from '../../Services/GetProducts/useApiFetch';
const DeleteProductModal = ({active, setActive,handleButtonClick, product, setUpdate}) => {
//   const { deleteData } = useApiPut();
  const { deleteData } = useApiFetch();
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
  };
  const handleSubmit = async () => {
    try {
      await deleteData(apiUrl,formData);
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
            <h2>Are you sure you want to delete {product.name}??</h2>
            <form id="myForm" action="submit.php" method="post"/>
                <EditButton text={"DELETE"} handleButtonClick={handleSubmit}/> 
            </div> </div>} </>
  );
};

export default DeleteProductModal;
