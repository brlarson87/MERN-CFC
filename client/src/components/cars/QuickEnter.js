//CORE REACT
import React, { Fragment, useState } from "react";

//Components
import TicketConfirm from "../modals/TicketConfirm";

//Utils
import ticketStatus from "../../utils/ticketStatus";

const QuickEnter = ({
  prizeId,
  user,
  showConfirmModal,
  ticketTotal,
  prizeName,
  prizeTotal,
  thumbnail,
  setAlert,
}) => {
  const [quickData, setQuickData] = useState({ prizeId: prizeId, val: 0 });

  //
  // CLEARS ALL QUICK ENTER BTNS AND SETS ENTER BTN'S POINTER EVENTS: NONE
  //
  const clearAll = () => {
    document
      .querySelectorAll(".quick-enter__btn")
      .forEach((btn) => btn.classList.remove("quick-enter-active"));

    document
      .querySelectorAll(".btn--secondary")
      .forEach((btn) => btn.classList.add("inactive"));
  };

  //
  // FINDS THE BTN THAT MATCHES prizeID
  //
  const findCurrentBtn = (btns) => {
    return [...btns].filter((btn) => btn.getAttribute("value") === prizeId);
  };

  //
  // ACTIVATES THE QUICK BTN CLICKED AND MATCHES THE BTN AND CORRESPONDING PRIZE IT WOULD ENTER
  //
  const activateButton = (e) => {
    clearAll();
    e.target.classList.add("quick-enter-active");
    const amount = parseInt(e.target.getAttribute("value"));
    setQuickData({ ...quickData, val: amount });
    let enterBtns = document.querySelectorAll(".btn--secondary");
    let activeEnter = findCurrentBtn(enterBtns)[0];
    activeEnter.classList.remove("inactive");
  };

  //
  //  CHECKS FOR EDGE CASES AND THEN SETS MODAL STATE FOR COFIRM MODAL
  //
  const enter = () => {
    let activeUserTickets = ticketStatus(user.tickets).active;
    const safeAmount = ticketTotal + quickData.val <= prizeTotal;

    //
    // EDGE CASES: -Make sure there is enough room in the pool -Then User has enough active tickets
    //             compared to the value they entered
    if (safeAmount) {
      if (quickData.val <= activeUserTickets) {
        showConfirmModal(
          quickData.val,
          quickData.prizeId,
          activeUserTickets,
          prizeName,
          thumbnail
        );
      } else {
        setAlert(
          "You tried to enter more tickets than you currently have",
          "error alert--main-page"
        );
      }
    } else {
      setAlert(
        "Not enough tickets left in prize pool",
        "error alert--main-page"
      );
    }
    clearAll();
  };

  return (
    <Fragment>
      <TicketConfirm />
      <h3>Quick Enter</h3>
      <div className='quick-enter'>
        <button
          className='quick-enter__btn'
          value='1'
          onClick={(e) => activateButton(e)}
        >
          1
        </button>
        <button
          className='quick-enter__btn'
          value='5'
          onClick={(e) => activateButton(e)}
        >
          5
        </button>
        <button
          className='quick-enter__btn'
          value='10'
          onClick={(e) => activateButton(e)}
        >
          10
        </button>
        <button
          className='quick-enter__btn'
          value='25'
          onClick={(e) => activateButton(e)}
        >
          25
        </button>
        <button
          className='quick-enter__btn'
          value='50'
          onClick={(e) => activateButton(e)}
        >
          50
        </button>
      </div>
      <button
        className='btn--secondary u-margin-bottom-xsm inactive'
        value={prizeId}
        onClick={enter}
      >
        Enter
      </button>
    </Fragment>
  );
};

export default QuickEnter;
