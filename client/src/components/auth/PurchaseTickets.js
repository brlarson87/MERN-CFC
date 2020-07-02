//CORE REACT
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Actions
import { purchaseTickets } from "../../actions/auth";
import { startLoader, endLoader } from "../../actions/loaders";

//COMPONENTS
import Spinner from "../layout/Spinner";

const PurchaseTickets = ({
  purchaseTickets,
  history,
  startLoader,
  endLoader,
  loader,
}) => {
  const [formData, setFormData] = useState({
    amount: "",
  });

  const { amount } = formData;

  const clearAll = () => {
    document.querySelectorAll(".purchase-amount__value").forEach((item) => {
      item.classList.remove("active-amount");
    });
  };

  const onChange = (e) => {
    clearAll();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    startLoader();
    purchaseTickets(parseInt(amount), history).then(() => {
      endLoader();
    });
  };

  const highlightAndSet = (e) => {
    clearAll();
    e.target.classList.add("active-amount");
    setFormData({ ...formData, amount: e.target.innerHTML.toString() });
    console.log(amount);
  };

  return (
    <Fragment>
      <div className='full-container'>
        <div className='form-container'>
          {loader ? (
            <Spinner />
          ) : (
            <Fragment>
              <form
                onSubmit={(e) => onSubmit(e)}
                className='form-container__form'
              >
                <div className='purchase-title'>Amount</div>
                <div className='purchase-amount'>
                  <div
                    className='purchase-amount__value'
                    onClick={(e) => highlightAndSet(e)}
                  >
                    5
                  </div>

                  <div
                    className='purchase-amount__value'
                    onClick={(e) => highlightAndSet(e)}
                  >
                    25
                  </div>

                  <div
                    className='purchase-amount__value'
                    onClick={(e) => highlightAndSet(e)}
                  >
                    50
                  </div>

                  <div
                    className='purchase-amount__value'
                    onClick={(e) => highlightAndSet(e)}
                  >
                    100
                  </div>

                  <div
                    className='purchase-amount__value'
                    onClick={(e) => highlightAndSet(e)}
                  >
                    250
                  </div>
                </div>

                <div className='purchase-title'>Custom</div>
                <div className='form-container__form--group'>
                  <div className='form-container__form--group--title  form-container__form--group--title--sm'>
                    Amount
                  </div>
                  <input
                    type='text'
                    name='amount'
                    className='form-container__form--group--input form-container__form--group--input--sm'
                    value={amount}
                    onChange={(e) => onChange(e)}
                    autoComplete='off'
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
              </Link>{" "}
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  loader: state.loader.loading,
});

export default connect(mapStateToProps, {
  purchaseTickets,
  startLoader,
  endLoader,
})(PurchaseTickets);
