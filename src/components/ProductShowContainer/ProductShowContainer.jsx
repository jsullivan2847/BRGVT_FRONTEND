import React from 'react'
import EditButton from '../Edit Button/EditButton'
import EditProductModal from '../EditProductModal/EditProductModal'
import ImageList from '../ImageList/ImageList.jsx'
import "./ProductShowContainer.css"
import { useState, useEffect } from 'react'
import EditPhotosModal from '../EditPhotosModal/EditPhotosModal.jsx'
import SelectionContainer from '../SelectionContainer/SelectionContainer.jsx'
import useAddToCart from '../../Services/Cart/usePostSessionData.jsx'
import useGetCart from '../../Services/Cart/useGetSessionData.jsx'
export default function ProductShowContainer({data,handleButtonClick,isActive,setIsActive,setUpdate}) {

    const { cartData, addToCart } = useAddToCart();
    const { cartResponse, loading, error, getCart } = useGetCart();
    const [photoModalActive,setPhotoModalActive] = useState(false);
    const handlePhotoButtonClick = () => {
        setPhotoModalActive(prevState => !prevState)
    }
  useEffect(() => {
    console.log(cartData);
  },[cartData])
  if(data){
    data = data[0]
      return (
        <div className='product-show-container'>
            <div className='info-container'>
            <h3 className='product-title'>{data.name}</h3>
            <EditButton handleButtonClick={handleButtonClick} text={"Edit"}/>
            <br/>
            <br/>
            <EditButton handleButtonClick={handlePhotoButtonClick}
            text={"Edit Photos"}
            />
            <EditProductModal active={isActive} 
                  handleButtonClick={handleButtonClick} 
                  product={data}
                  setUpdate={setUpdate}
                  setActive={setIsActive}
                  />
            <EditPhotosModal product={data}
            isActive={photoModalActive}
            handleButtonClick={handlePhotoButtonClick}
            setUpdate={setUpdate}/>
            </div>
           
        
            <div className='page-image-container'>
            <ImageList images={data.images}/>
            </div>
            <SelectionContainer
            product={data}
            addToCart={addToCart}
            />
        </div>
      )
  }
  else {
    return <h1>Loading...</h1>
  }
}
