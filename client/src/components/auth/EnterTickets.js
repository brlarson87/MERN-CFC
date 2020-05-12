//CORE REACT
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

//Components
import TicketConfirm from "../modals/TicketConfirm";
//Actions
import { setAlert } from "../../actions/alert";

const EnterTickets = ({
  id,
  ticketTotal,
  prizeTotal,
  showConfirmModal,
  activeUserTickets,
  prizeName,
  thumbnail,
  setAlert,
}) => {
  const [formData, setFormData] = useState({
    ticketAmount: "",
  });

  const { ticketAmount } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // RETURN FALSE IF NUMBER CONTAINS NON DIGIT CHARACTERS or IS OVER 500
  const checkValidNumber = (number) => {
    let amount = parseInt(number);
    let reg = /^[0-9]*$/;
    let flag = reg.test(number);
    if (!flag || amount > 500) return { valid: false };
    return { valid: true, amount };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = checkValidNumber(ticketAmount);
    let amount;
    console.log(obj);
    if (obj.valid) {
      amount = obj.amount;
      const safeAmount = ticketTotal + amount <= prizeTotal;
      if (amount && amount <= activeUserTickets) {
        showConfirmModal(amount, id, activeUserTickets, prizeName, thumbnail);
      } else if (!safeAmount) {
        setAlert(
          "Not enough open spots left. Try less tickets",
          "error alert--main-page"
        );
      } else {
        setAlert(
          "You tried to enter more tickets than you currently have",
          "error alert--main-page"
        );
      }
    } else {
      setAlert(
        "You must enter valid number with no commas or decimals. 500 ticket limit",
        "error alert--main-page"
      );
    }

    setFormData({ ...setFormData, ticketAmount: "" });
  };

  return (
    <Fragment>
      {/*----------TICKETCONFIRM COMPONENT-----------*/}
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

export default connect(null, { setAlert })(EnterTickets);
