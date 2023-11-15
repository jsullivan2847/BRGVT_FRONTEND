import React from 'react'
import "./EditPhotosList.css"
import { useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useState } from 'react';

const Image = ({ image, index, moveImage }) => {
    const [, ref] = useDrag({
      type: 'IMAGE',
      item: { index },
    });
  
    const [, drop] = useDrop({
      accept: 'IMAGE',
      hover: (draggedItem) => {
        if (draggedItem.index !== index) {
          moveImage(draggedItem.index, index);
          draggedItem.index = index;
          console.log(draggedItem);
        }
      },
    });
  
    return (
      <div ref={(node) => ref(drop(node))} className='image-container'>
        <img className='image' src={image.url} alt={`Image ${index + 1}`} />
        <div className='overlay'></div>
      </div>
    );
  };
  
  const EditPhotosList = ({ images }) => {
    const [imageList, setImageList] = useState(images);
  
    const moveImage = (fromIndex, toIndex) => {
      const updatedImages = [...imageList];
      const [movedImage] = updatedImages.splice(fromIndex, 1);
      updatedImages.splice(toIndex, 0, movedImage);
      setImageList(updatedImages);
    };
  
    return (
      <DndProvider backend={HTML5Backend}>
        <div className='list'>
          {imageList.map((image, index) => (
            <Image key={index} index={index} image={image} moveImage={moveImage} />
          ))}
        </div>
      </DndProvider>
    );
  };
  
  export default EditPhotosList;
