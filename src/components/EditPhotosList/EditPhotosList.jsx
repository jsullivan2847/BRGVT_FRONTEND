import React, { useEffect } from 'react'
import "./EditPhotosList.css"
import { useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useState } from 'react';

const Image = ({ image, fullList, index, moveImage, setImageList, setFile }) => {
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
          //console.log("from line 20 ",draggedItem);
        }
      },
    });

    const handleDelete = () => {
      const filteredList = fullList.filter(elem => elem !== image);
      setFile(image.name);
      setImageList(filteredList);
    }
  
    return (
      <div ref={(node) => ref(drop(node))} className='image-container'>
        <img className='image' src={image.url} alt={`Image ${index + 1}`} />
        <div className="delete-overlay" onClick={handleDelete}>
        <div className="delete-icon">&#128465;</div>
        <div className="delete-text">Delete</div>
    </div>
        <div className='overlay'></div>
      </div>
    );
  };
  
  const EditPhotosList = ({images,setDisplayOrder, setFile}) => {
    const [imageList, setImageList] = useState(images);

    useEffect(()=>{
      setDisplayOrder(imageList);
    },[imageList])


    const moveImage = (fromIndex, toIndex) => {
      const updatedImages = [...imageList];
      const [movedImage] = updatedImages.splice(fromIndex, 1);
      updatedImages.splice(toIndex, 0, movedImage);
      setImageList(updatedImages);
      imageList.forEach((image) => {
        var new_index = imageList.indexOf(image);
        image.display_order = new_index;
      })
    };
  
    return (
      <DndProvider backend={HTML5Backend}>
        <div className='list'>
          {imageList.map((image, index) => (
            <Image key={index}
            index={index}
            image={image}
            fullList={imageList}
            moveImage={moveImage}
            setImageList={setImageList}
            setFile={setFile}
            />
          ))}
        </div>
      </DndProvider>
    );
  };
  
  export default EditPhotosList;
