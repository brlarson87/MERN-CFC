import React, { Fragment } from "react";
import { connect } from "react-redux";

//Actions
import { enterTickets } from "../../actions/prizes";
import { hideConfirmModal } from "../../actions/modal";

const TicketConfirm = ({
  showConfirm,
  confirmContent,
  modalLoading,
  enterTickets,
  hideConfirmModal
}) => {
  const { ticketAmount, prizeName, activeTickets, prizeId } = confirmContent;

  const enter = () => {
    if (activeTickets >= ticketAmount) {
      enterTickets(ticketAmount, prizeId, activeTickets);
    }
  };
  return (
    <Fragment>
      {showConfirm && !modalLoading && confirmContent && (
        <div className='modal-overlay'>
          <div className='modal-content modal-content--sm'>
            <h2 className='modal-title'>
              Confirm to enter {ticketAmount} tickets into the {prizeName} pool
            </h2>
            <div className='exit-container' onClick={hideConfirmModal}>
              <i className='fas fa-times'></i>
            </div>
            <button
              className='confirmation-btn opacity u-margin-top-lg'
              onClick={enter}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  showConfirm: state.modal.showConfirm,
  confirmContent: state.modal.confirmContent,
  modalLoading: state.modal.loading
});

export default connect(mapStateToProps, { enterTickets, hideConfirmModal })(
  TicketConfirm
);
