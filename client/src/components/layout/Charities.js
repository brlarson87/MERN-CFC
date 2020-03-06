import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";

import TableRow from "./TableRow";
import CharityConfirm from "../modals/CharityConfirm";
//import Spinner from "./Spinner";

import { loadCharities } from "../../actions/charities";
import { showCharityConfirmation } from "../../actions/modal";

const Charities = ({
  loadCharities,
  showCharityConfirmation,
  charities,
  loading,
  user,
  prizes,
  modalShow
}) => {
  useEffect(() => {
    loadCharities();
    const charityBtn = document.querySelector(".charityBtn");
    charityBtn.addEventListener = document.addEventListener(
      "click",
      () => (charityBtn.style.opacity = "0")
    );
    window.addEventListener("scroll", () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        charityBtn.style.opacity = "1";
      } else {
        charityBtn.style.opacity = "0";
      }
    });
  }, [loadCharities]);

  const [charityCount, setCharityCount] = useState(10);

  const incrementCharityCount = () => {
    setTimeout(() => {
      setCharityCount(charityCount + 10);
    }, 500);
  };

  return (
    <Fragment>
      {modalShow && <CharityConfirm />}
      <div className='container'>
        <form action='POST' className='search-form'>
          <input
            type='text'
            className='search-form__input'
            placeholder='Search charities...'
          />
          <button className='search-form__submit-btn'>
            <i className='fas fa-search'></i>
          </button>
        </form>
        <table className='charity-table'>
          <thead className='charity-table__head'>
            <tr className='charity-table__row'>
              <th className='charity-table__head'>Name</th>
              <th className='charity-table__head charity-table__head--lg'>
                Description
              </th>
              <th className='charity-table__head charity-table__head--sm'>
                Website
              </th>
              <th className='charity-table__head charity-table__head--sm'>
                Enter this Charity
              </th>
            </tr>
          </thead>
          {/*----------Div cannot be child of tbody-----------*/}
          <tbody className='charity-table__body'>
            {charities &&
              !loading &&
              charities.slice(0, charityCount).map((charity, i) => (
                <TableRow
                  // name={charity.name}
                  // desc={charity.desc}
                  // url={charity.url}
                  key={i}
                  user={user}
                  prizes={prizes}
                  showCharityConfirmation={showCharityConfirmation}
                  charity={charity}
                />
              ))}
          </tbody>
        </table>

        <button
          className='charityBtn'
          style={{ opacity: 0 }}
          onClick={incrementCharityCount}
        >
          Load more
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  charities: state.charities.charities,
  loading: state.charities.loading,
  user: state.auth.user,
  prizes: state.prizes.prizes,
  modalShow: state.modal.show
});

export default connect(mapStateToProps, {
  loadCharities,
  showCharityConfirmation
})(Charities);
