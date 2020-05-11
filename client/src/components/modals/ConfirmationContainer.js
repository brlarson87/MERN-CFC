import React, { Fragment } from "react";

//
//props: prizeId, thumbnail, charityId, key, keyy, enterCharity, startLoader, endLoader, hideCharityConfirmation
//
const ConfirmationContainer = (props) => {
  // STARTS LOADER and ENTERS CHARITY INTO USER AND PRIZE COLLECTIONS -- END LOADER
  const enterThisCharity = () => {
    const modalContent = document.getElementById("modal-content");
    modalContent.classList.add("flex");
    props.startLoader();
    props.enterCharity(props.prizeId, props.charityId).then(() => {
      props.hideCharityConfirmation();
      props.endLoader();
      modalContent.classList.remove("flex");
    });
  };

  // HIGHLIGHTS CHOSEN PRIZEPOOL and SHOWS CONFIRMATION BUTTON
  const toggleBackground = (e) => {
    clearNonActives();
    e.target.classList.add("active-container");
    let btns = document.querySelectorAll(".confirmation-btn");
    btns[props.keyy].classList.add("opacity");
  };

  // CLEARS HIGHLIGHTED PRIZEPOOLS and HIDES BUTTONS
  const clearNonActives = () => {
    let containers = document.querySelectorAll(".active-container");
    let btns = document.querySelectorAll(".confirmation-btn");
    containers.forEach((container) =>
      container.classList.remove("active-container")
    );
    btns.forEach((btn) => btn.classList.remove("opacity"));
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
