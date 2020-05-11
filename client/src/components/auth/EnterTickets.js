import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

//Components
import TicketConfirm from "../modals/TicketConfirm";

const EnterTickets = ({
  id,
  ticketTotal,
  showConfirmModal,
  activeUserTickets,
  prizeName,
  thumbnail,
}) => {
  const [formData, setFormData] = useState({
    ticketAmount: "",
  });

  const { ticketAmount } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(ticketAmount);
    if (amount) {
      showConfirmModal(amount, id, activeUserTickets, prizeName, thumbnail);
    }
  };

  return (
    <Fragment>
      <TicketConfirm />
      <div className='details__ticket-form'>
        <h5 className='details__ticket-form--title'>Enter Tickets</h5>
        <form
          onSubmit={(e) => onSubmit(e)}
          className='details__ticket-form--form'
        >
          <input
            type='text'
            name='ticketAmount'
            value={ticketAmount}
            onChange={(e) => onChange(e)}
            className='details__ticket-form--input'
            autoComplete='off'
          />
          <input
            type='submit'
            className='btn__input--secondary'
            value='Enter'
          />
        </form>
      </div>
    </Fragment>
  );
};

export default connect()(EnterTickets);
