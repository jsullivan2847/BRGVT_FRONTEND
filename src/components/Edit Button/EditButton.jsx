import React, { useState, useEffect } from 'react';
import "./EditButton.css"

function EditButton({handleButtonClick,text}) {


  const active = false;

  return (
    <button className='custom-button' onClick={handleButtonClick}>
      {text}
    </button>
  );
}

export default EditButton;
