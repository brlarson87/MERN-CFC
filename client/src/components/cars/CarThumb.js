import React from "react";

const CarThumb = props => {
  return (
    <div
      className='secondary-image'
      onClick={() => {
        props.changeCount(props.keyy);
      }}
    >
      <img
        src={props.pic}
        alt={props.alternate}
        className='secondary-image__img'
      />
    </div>
  );
};

export default CarThumb;
