import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { purchaseTickets } from "../../actions/auth";

const PurchaseTickets = ({ purchaseTickets, history }) => {
  const [formData, setFormData] = useState({
    amount: ""
  });

  const { amount } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    purchaseTickets(parseInt(amount), history);
  };

  return (
    <Fragment>
      <div className='full-container'>
        <div className='form-container'>
          <h2 className='form-container__title'>Get Tickets</h2>
          <form onSubmit={e => onSubmit(e)} className='form-container__form'>
            <div className='form-container__form--group'>
              <input
                type='text'
                name='amount'
                className='form-container__form--group--input'
                value={amount}
                placeholder='Amount'
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className='form-container__form--group'>
              <input
                type='submit'
                value='Buy'
                className='btn--submit--primary'
              />
            </div>
          </form>
          <Link to='/' className='exit-container'>
            <i className='fas fa-times'></i>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(
  null,
  { purchaseTickets }
)(PurchaseTickets);
