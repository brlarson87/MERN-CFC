//CORE REACT
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

//Components
import Header from "./Header";
import TableRow from "./TableRow";
import CharityConfirm from "../modals/CharityConfirm";
//import Spinner from "./Spinner";

//Actions
import { loadCharities } from "../../actions/charities";
import { loadPrizes } from "../../actions/prizes";
import { showCharityConfirmation } from "../../actions/modal";

//Utils
import { utilFilter } from "../../utils/utilFilter";
import { totalCountOfCharities } from "../../utils/utilFilter";

const Charities = ({
  loadCharities,
  loadPrizes,
  showCharityConfirmation,
  charities,
  loading,
  user,
  prizes,
  modalShow,
}) => {
  useEffect(() => {
    loadCharities();
    loadPrizes();
    const charityBtn = document.querySelector(".charityBtn");
    charityBtn.addEventListener = document.addEventListener(
      "click",
      () => (charityBtn.style.opacity = "0")
    );
    window.addEventListener("scroll", () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        charityBtn.style.opacity = "1";
      } else {
        charityBtn.style.opacity = "0";
      }
    });
  }, [loadCharities, loadPrizes]);

  const [charityData, setCharityData] = useState({
    count: 10,
    filter: "",
  });

  const { count, filter } = charityData;

  const onChange = (e) =>
    setCharityData({ ...charityData, [e.target.name]: e.target.value });

  const incrementCharityCount = () => {
    setTimeout(() => {
      setCharityData({ ...charityData, count: count + 10 });
    }, 500);
  };

  return (
    <Fragment>
      <Header />
      {/*****************************************/}
      {/*----------CHARITYCONFIRM COMPONENT----------*/}
      {/*****************************************/}
      {modalShow && <CharityConfirm />}
      <div className='container'>
        <div className='search-form'>
          <input
            type='text'
            name='filter'
            value={filter}
            onChange={(e) => onChange(e)}
            className='search-form__input'
            placeholder='Search charities...'
            autoComplete='off'
          />
          <div className='search-form__submit-btn'>
            <i className='fas fa-search'></i>
          </div>
        </div>
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

          <tbody className='charity-table__body'>
            {/*****************************************/}
            {/*----------TABLEROW COMPONENT-----------*/}
            {/*****************************************/}
            {charities &&
              !loading &&
              utilFilter(charities, filter)
                .slice(0, count)
                .map((charity, i) => (
                  <TableRow
                    key={i}
                    user={user}
                    prizes={prizes}
                    showCharityConfirmation={showCharityConfirmation}
                    charity={charity}
                  />
                ))}
          </tbody>
        </table>
        {/* {loading && <Spinner />} */}
        {charities && !totalCountOfCharities(charities, filter) && !loading && (
          <div className='match-icon-box u-margin-top-lg'>
            <h1>No matches...</h1>
            <i className='fas fa-sad-tear u-lg-font u-margin-top-lg'></i>
          </div>
        )}

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

const mapStateToProps = (state) => ({
  charities: state.charities.charities,
  loading: state.charities.loading,
  user: state.auth.user,
  prizes: state.prizes.prizes,
  modalShow: state.modal.show,
});

export default connect(mapStateToProps, {
  loadCharities,
  loadPrizes,
  showCharityConfirmation,
})(Charities);
