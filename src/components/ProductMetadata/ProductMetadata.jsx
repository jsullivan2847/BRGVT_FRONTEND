import React from 'react'
import "./ProductMetadata.css"
export default function ProductMetadata({data}) {
  return (
    <div className='metadata-container'>
        <h3 className='metadata-title'>{data.name}</h3>
            <p className='metadata-header'>${data.price}</p>
            <br></br>
            <p className='metadata-header'># in Stock:</p>
            <p>{data.quantity}</p>
            {data.description && <>
            <p className='metadata-header'>Description:</p>
            <p>{data.description}</p>
            </>}
            
            {data.sizes && <>
            <p className='metadata-header'>Sizes:</p>
            <p>{data.sizes[0].name}</p>
            </> }
            
    </div>
  )
}
