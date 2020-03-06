import React, { Fragment } from "react";

const ConfirmationContainer = props => {
  const enterThisCharity = () => {
    props.enterCharity(props.prizeId, props.charityId);
  };

  const toggleBackground = e => {
    clearNonActives(props.keyy);
    e.target.classList.add("active-container");
    let btns = document.querySelectorAll(".confirmation-btn");
    btns[props.keyy].classList.add("opacity");
  };

  const clearNonActives = () => {
    let containers = document.querySelectorAll(".active-container");
    let btns = document.querySelectorAll(".confirmation-btn");
    containers.forEach(container =>
      container.classList.remove("active-container")
    );
    btns.forEach(btn => btn.classList.remove("opacity"));
  };

  return (
    <Fragment>
      <div className='charity-confirm-container' onClick={toggleBackground}>
        <div className='car-image'>
          <img src={props.thumbnail} alt='hellcat' className='car-image__img' />
        </div>
        <p className='car-description'>Enter into this Prize Pool.</p>
        <button className='confirmation-btn' onClick={enterThisCharity}>
          Enter
        </button>
      </div>
    </Fragment>
  );
};

export default ConfirmationContainer;
