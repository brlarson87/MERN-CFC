import React, { Fragment } from "react";

const ConfirmationContainer = ({
  prizeId,
  thumbnail,
  charityId,
  charityName,
  keyy,
  enterCharity,
  startLoader,
  endLoader,
  hideCharityConfirmation,
  setAlert,
}) => {
  // STARTS LOADER and ENTERS CHARITY INTO USER AND PRIZE DOCUMENTS -- END LOADER
  const enterThisCharity = () => {
    const modalContent = document.getElementById("modal-content-charity");
    modalContent.classList.add("flex");
    startLoader();
    enterCharity(prizeId, charityId).then(() => {
      hideCharityConfirmation();
      endLoader();
      modalContent.classList.remove("flex");
      setAlert(
        `Successfully entered ${charityName}!!!`,
        "success alert--main-page"
      );
    });
  };

  // HIGHLIGHTS CHOSEN PRIZEPOOL and SHOWS CONFIRMATION BUTTON
  const toggleBackground = (e) => {
    clearNonActives();
    e.target.classList.add("active-container");
    let btns = document.querySelectorAll(".confirmation-btn");
    btns[keyy].classList.add("opacity");
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
          <img src={thumbnail} alt='hellcat' className='car-image__img' />
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
