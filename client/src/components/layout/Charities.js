import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";

import TableRow from "./TableRow";
import Spinner from "./Spinner";

import { loadCharities } from "../../actions/charities";

const Charities = ({ loadCharities, charities, loading }) => {
  useEffect(() => {
    loadCharities();
  }, [loadCharities]);

  return (
    <Fragment>
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
            {charities && !loading ? (
              charities.map((charity, i) => (
                <TableRow
                  name={charity.name}
                  desc={charity.desc}
                  url={charity.url}
                  key={i}
                />
              ))
            ) : (
              <Spinner />
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  charities: state.charities.charities,
  loading: state.charities.loading
});

export default connect(mapStateToProps, { loadCharities })(Charities);
