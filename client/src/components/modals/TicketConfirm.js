import React, { Fragment } from "react";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";

//Actions
import { enterTickets } from "../../actions/prizes";
import { hideConfirmModal } from "../../actions/modal";
import { startLoader, endLoader } from "../../actions/loaders";

const TicketConfirm = ({
  showConfirm,
  confirmContent,
  enterTickets,
  hideConfirmModal,
  loader,
  startLoader,
  endLoader,
}) => {
  const {
    ticketAmount,
    prizeName,
    activeTickets,
    prizeId,
    thumbnail,
  } = confirmContent;

  const enter = () => {
    if (activeTickets >= ticketAmount) {
      const modalContent = document.getElementById("modal-content");
      modalContent.classList.add("flex");
      startLoader();
      enterTickets(ticketAmount, prizeId, activeTickets).then(() => {
        hideConfirmModal();
        endLoader();
        modalContent.classList.remove("flex");
      });
    } // ELSE SET ALERT ///// NOT ENOUGH TICKETS
  };
  return (
    <Fragment>
      {showConfirm && confirmContent && (
        <div className='modal-overlay'>
          <div className='modal-content modal-content--sm' id='modal-content'>
            {loader ? (
              <Spinner />
            ) : (
              <Fragment>
                <div className='ticket-confirm-container'>
                  <div className='car-image'>
                    <img
                      className='car-image__img'
                      src={thumbnail && thumbnail}
                      alt={prizeName && prizeName}
                    />
                  </div>
                  <span className='ticket-icon'>
                    {ticketAmount} &nbsp; x &nbsp;{" "}
                    <i className='fas fa-ticket-alt'></i>
                  </span>
                  <button
                    className='confirmation-btn opacity u-margin-top-lg'
                    onClick={enter}
                  >
                    Confirm
                  </button>
                </div>
                <div className='exit-container' onClick={hideConfirmModal}>
                  <i className='fas fa-times'></i>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  showConfirm: state.modal.showConfirm,
  confirmContent: state.modal.confirmContent,
  loader: state.loader.loading,
});

export default connect(mapStateToProps, {
  enterTickets,
  hideConfirmModal,
  startLoader,
  endLoader,
})(TicketConfirm);
