import React from 'react'
import "./EditPhotosModal.css"
import EditPhotosList from '../EditPhotosList/EditPhotosList';
import EditButton from '../Edit Button/EditButton';
import usePostPhoto from '../../Services/usePostPhoto';
import useApiPut from '../../Services/GetProducts/useApiPut';
import { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

export default function EditPhotosModal({product}) {
  const url = 'https://brgvt-v2.onrender.com/Photos/Upload'
  const { sentPostData, loading, error,PostData } = usePostPhoto();
  const { sentPutData, putData } = useApiPut();
  const [selectedFile, setSelectedFile] = useState(null);
  const images = product.images
  console.log(images);

    useEffect(() => {
    if(sentPostData){
        let file_name = sentPostData.split("/")
        file_name = file_name[file_name.length - 1]
        const productUrl = 'https://brgvt-v2.onrender.com/Products/'+product.id
        const payload = {"images":images}
        payload.images.push({"name":file_name,"url":sentPostData,"display_order":images.length})
        putData(productUrl,"PUT",payload);
        console.log(sentPutData);
    }
},[sentPostData])

  const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };  

      const handleSubmit = async (event) => {
        if (selectedFile) {
          const formData = new FormData();
          formData.append("file", selectedFile, selectedFile.name);
          await PostData(url, "POST", formData,product);
          console.log(sentPostData)
          }
      };
  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
            <EditPhotosList images={images}/>
            {/* <EditButton handleButtonClick={handleButtonClick} text={"Close"}></EditButton> */}
            <h2>Edit Photos</h2>
            <form id="myForm" action="submit.php" method="post"/>
                <label htmlFor="name">Name:</label>
                {/* <input type="text" id="name" name="name" onChange={handleChange} required/><br/><br/> */}
                <label htmlFor="fileInput">Select a File:</label>
                <input type="file" id="fileInput" name="fileInput" onChange={handleFileChange}/>
                <EditButton text={"Submit"} handleButtonClick={handleSubmit}/> 
            </div> </div>
    </div>
  )
}
