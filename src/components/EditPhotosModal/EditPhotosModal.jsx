import React from 'react'
import "./EditPhotosModal.css"
import EditPhotosList from '../EditPhotosList/EditPhotosList';
import EditButton from '../Edit Button/EditButton';
import usePostPhoto from '../../Services/usePostPhoto';
import useApiPut from '../../Services/GetProducts/useApiPut';
import useApiFetch from '../../Services/GetProducts/useApiFetch';
import { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

export default function EditPhotosModal({product, isActive, handleButtonClick,setUpdate}) {
  const url = 'https://brgvt-v2.onrender.com/Photos/Upload'
  const { sentPostData, loading, error,PostData } = usePostPhoto();
  const { sentPutData, putData } = useApiPut();
  const {fetchData} = useApiFetch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayOrder,setDisplayOrder] = useState(null);
  const [photoUploading,setPhotoUploading] = useState(null);
  const images = product.images
  //console.log(images);

    useEffect(() => {
    if(sentPostData){
        let file_name = sentPostData.split("/")
        file_name = file_name[file_name.length - 1]
        let productUrl = 'https://brgvt-v2.onrender.com/Products/'+product.id
        let payload = {}
        let display_order = null
        if(images){
          payload = {"images":images}
          display_order = images.length - 1;
        }
        else {
          payload = {"images":[]} 
          display_order = 0;
        }
        payload.images.push({"name":file_name,"url":sentPostData,"display_order":display_order})
        putData(productUrl,"PUT",payload);
        console.log(sentPutData);
    }
},[sentPostData])


useEffect(() => {
  //console.log(displayOrder);
},[displayOrder]);

  const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };  

      const handleSubmit = async () => {
        if (selectedFile) {
          const formData = new FormData();
          formData.append("file", selectedFile, selectedFile.name);
          setPhotoUploading(true);
          await PostData(url, "POST", formData,product);
          console.log(sentPostData)
          setSelectedFile(null);
          handleButtonClick()
          }
          if(displayOrder){
            console.log(displayOrder);
            let productUrl = 'https://brgvt-v2.onrender.com/Products/'+product.id
            try{
              await putData(productUrl,"PUT",{"images":displayOrder});
            }
            catch(e){
              console.log(e);
            }
            finally{
              setUpdate(prevState => !prevState);
              //fetchData(productUrl);
            }
            handleButtonClick();
          }
      };
  return (
    <>
    {isActive && <div>
        <div id="myModal" className="modal">
          <div className="modal-content">
            {images && <EditPhotosList images={images} setDisplayOrder={setDisplayOrder}/>}
              <h2>Edit Photos</h2>
              {photoUploading && <h1>Loading...</h1>}
              <form id="myForm" action="submit.php" method="post"/>
                  <label htmlFor="name">Name:</label>
                  <label htmlFor="fileInput">Select a File:</label>
                  <input type="file" id="fileInput" name="fileInput" onChange={handleFileChange}/>
                  <EditButton text={"Submit"} handleButtonClick={handleSubmit}/>
                  <EditButton handleButtonClick={handleButtonClick} text={"Close"}></EditButton>
              </div> </div>
      </div> }
    </>
  )
}
