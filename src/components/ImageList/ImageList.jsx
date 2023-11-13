import React from 'react'
import "./ImageList.css"

export default function ImageList({setHeroImage,images}) {
  return (
    <div className='main-image-list'>
        {images.map((image) => {
            return <div className='main-image-container'>
            <img className="main-image" src={image.url}></img>
            </div>
        })}
      image list
    </div>
  )
}
