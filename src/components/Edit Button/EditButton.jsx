import React, { useState, useEffect } from 'react';
import "./EditButton.css"

function EditButton({handleButtonClick,text}) {

  return (
    <button className='custom-button' onClick={handleButtonClick}>
      {text}
    </button>
  );
}

export default EditButton;
