import React from 'react'
import EditButton from '../Edit Button/EditButton'
import EditProductModal from '../EditProductModal/EditProductModal'
import ImageList from '../ImageList/ImageList.jsx'
import "./ProductShowContainer.css"
import { useState, useEffect } from 'react'
import EditPhotosModal from '../EditPhotosModal/EditPhotosModal.jsx'
export default function ProductShowContainer({data,handleButtonClick,isActive,setIsActive,setUpdate}) {
  if(data){
    data = data[0]
      return (
        <div className='product-show-container'>
            <div>
            <h1>Info Container</h1>
            <h3 className='product-title'>{data.name}</h3>
            <EditButton handleButtonClick={handleButtonClick} text={"Edit"}/>
            <br/>
            <br/>
            <EditButton handleButtonClick={handleButtonClick}
            text={"Edit Photos"}
            />
            <EditProductModal active={isActive} 
                  handleButtonClick={handleButtonClick} 
                  product={data}
                  setUpdate={setUpdate}
                  setActive={setIsActive}
                  />
            <EditPhotosModal images={data.images}/>
            </div>
           
        
            <div>
            <ImageList images={data.images}/>
            </div>
        
        <div>
        <h1>Selection Container</h1>
        <h3>$500</h3>
        <EditButton handleButtonClick={handleButtonClick} text={"Add to Cart"}/>
        </div>
        </div>
      )
  }
  else {
    return <h1>Loading...</h1>
  }
}
