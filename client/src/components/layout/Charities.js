import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import TableRow from "./TableRow";
import Spinner from "./Spinner";

import { loadCharities } from "../../actions/charities";

const Charities = ({ loadCharities, charities, loading }) => {
  useEffect(() => {
    loadCharities();
  }, [loadCharities]);

  return (
    <Fragment>
      <div class='container'>
        <form action='POST' class='search-form'>
          <input
            type='text'
            class='search-form__input'
            placeholder='Search charities...'
          />
          <button class='search-form__submit-btn'>
            <i class='fas fa-search'></i>
          </button>
        </form>
        <table class='charity-table'>
          <thead class='charity-table__head'>
            <tr class='charity-table__row'>
              <th class='charity-table__head'>Name</th>
              <th class='charity-table__head charity-table__head--lg'>
                Description
              </th>
              <th class='charity-table__head charity-table__head--sm'>
                Website
              </th>
              <th class='charity-table__head charity-table__head--sm'>
                Enter this Charity
              </th>
            </tr>
          </thead>
          <tbody class='charity-table__body'>
            {charities && !loading ? (
              charities.map(charity => (
                <TableRow
                  name={charity.name}
                  desc={charity.desc}
                  url={charity.url}
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
