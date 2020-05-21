//CORE REACT
import React, { Fragment } from "react";
import { connect } from "react-redux";

//Components
import Spinner from "../layout/Spinner";

//Actions
import { enterTickets } from "../../actions/prizes";
import { hideConfirmModal } from "../../actions/modal";
import { startLoader, endLoader } from "../../actions/loaders";
import { setAlert } from "../../actions/alert";

const TicketConfirm = ({
  showConfirm,
  confirmContent,
  enterTickets,
  hideConfirmModal,
  loader,
  startLoader,
  endLoader,
  setAlert,
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
      startLoader();
      enterTickets(ticketAmount, prizeId, activeTickets).then(() => {
        hideConfirmModal();
        setAlert("Good Luck!", "success alert--main-page");
        endLoader();
      });
    } else {
      setAlert("You don't have enough tickets", "error alert--main-page");
    }
  };

  return (
    <Fragment>
      {showConfirm && confirmContent && (
        <div className='modal-overlay'>
          {loader ? (
            <Spinner darken={true} />
          ) : (
            <Fragment>
              <div
                className='modal-content modal-content--sm'
                id='modal-content'
              >
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
              </div>
            </Fragment>
          )}
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
  setAlert,
})(TicketConfirm);
