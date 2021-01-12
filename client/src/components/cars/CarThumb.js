import React from "react";

const CarThumb = ({ pic, keyy, alternate, changeCount, count }) => {
  return (
    <div
      className='secondary-image'
      onClick={() => {
        console.log(count)
        changeCount(keyy);
      }}
    >
    <img src={pic} alt={alternate} className='secondary-image__img'/>
      
    </div>
  );
};

export default CarThumb;
