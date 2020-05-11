import React from "react";

const CarThumb = ({ pic, keyy, alternate, changeCount }) => {
  return (
    <div
      className='secondary-image'
      onClick={() => {
        changeCount(keyy);
      }}
    >
      <img src={pic} alt={alternate} className='secondary-image__img' />
    </div>
  );
};

export default CarThumb;
