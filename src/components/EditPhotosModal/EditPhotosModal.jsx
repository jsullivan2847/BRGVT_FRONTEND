import React from 'react'
import "./EditPhotosModal.css"
import EditPhotosList from '../EditPhotosList/EditPhotosList';
import EditButton from '../Edit Button/EditButton';
import usePostPhoto from '../../Services/usePostPhoto';
import useApiPut from '../../Services/GetProducts/useApiPut';
import useDeletePhoto from '../../Services/useDeletePhoto';
import { useState, useEffect } from 'react';

export default function EditPhotosModal({product, isActive, handleButtonClick,setUpdate}) {
  const url = 'https://brgvt-v2.onrender.com/Photos/Upload'
  const {setData, sentPostData, loading, error,PostData } = usePostPhoto();
  const { deleteResponse, deletePhoto } = useDeletePhoto();
  const { sentPutData, putData } = useApiPut();
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayOrder,setDisplayOrder] = useState(null);
  const [photoUploading,setPhotoUploading] = useState(null);
  const [fileToDelete,setFileToDelete] = useState(null);
  const images = product.images

  const uploadNewPhoto = async (productUrl,payload)  => {
    await putData(productUrl,"PUT",payload);
    setUpdate(prevState => !prevState);
  }

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
        uploadNewPhoto(productUrl,payload);
        setData(false);
    }
},[sentPostData])

  const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };  

      const handleSubmit = async () => {
        if(fileToDelete){
          deletePhoto(fileToDelete);
          setFileToDelete(null)
          }
        if (selectedFile) {
          const formData = new FormData();
          formData.append("file", selectedFile, selectedFile.name);
          setPhotoUploading(true);
          PostData(url, "POST", formData,product);
          handleButtonClick()
          setSelectedFile(null);
          setPhotoUploading(null);
          }
        else if(displayOrder){
            let productUrl = 'https://brgvt-v2.onrender.com/Products/'+product.id
            try{
              await putData(productUrl,"PUT",{"images":displayOrder});
            }
            catch(e){
              console.log(e);
            }
            finally{
              setDisplayOrder(null);
              setUpdate(prevState => !prevState);
            }
            handleButtonClick();
          }
      };
  return (
    <>
    {isActive && <div>
        <div id="myModal" className="modal">
          <div className="modal-content">
            {images && <EditPhotosList setFile={setFileToDelete} images={images} setDisplayOrder={setDisplayOrder}/>}
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
