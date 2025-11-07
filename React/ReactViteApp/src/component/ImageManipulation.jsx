import React, { useState } from 'react';
import TigerImage from './TigerImage.jpeg';  // renamed for clarity

function ImageManipulation() {
  const [imageHeight, setImageHeight] = useState(200);

  function increaseHeight() {
    setImageHeight(imageHeight + 10);
  }

  function decreaseHeight() {
    setImageHeight(prevHeight => (prevHeight > 50 ? prevHeight - 10 : prevHeight));
  }

  return (
    <div>
      <h2>Image Manipulation Component</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px',
          backgroundColor: '#aceaff',
          border: '5px solid #003243',
          borderRadius: '10px'
        }}
      >
        <img
          src={TigerImage}
          alt="Tiger"
          style={{
            width: '300px',
            height: `${imageHeight}px`,
            borderRadius: '15px',
            boxShadow: '2px 2px 12px grey'
          }}
        />
      </div>

      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          padding: '10px'
        }}
      >
        <button onClick={increaseHeight}>Increase Height</button>
        <button onClick={decreaseHeight}>Decrease Height</button>
      </div>
    </div>
  );
}

export default ImageManipulation;