import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import UserPools from "./UserPools";

import ticketStatus from "../../utils/ticketStatus";
import { numberPoolsEntered } from "../../utils/numberPoolsEntered";
import { loadPrizes } from "../../actions/prizes";

const UserDashboard = ({ user, prizes, loadPrizes }) => {
  useEffect(() => {
    loadPrizes();
  }, [loadPrizes]);

  return (
    <div class='container'>
      <div class='dashboard'>
        <h2 class='dashboard__title'>My Account</h2>
        <div class='breaker'>&nbsp;</div>
        <div class='row'>
          <div class='col-1-3'>
            <h4 class='cover-title'>Personal</h4>
            {user && (
              <span class='info'>
                {user.firstName}&nbsp;{user.lastName}
              </span>
            )}
            {user && <span class='info'>{user.email}</span>}
            {user && <span class='info'>{user.address.streetName}</span>}
            {user && (
              <span class='info'>
                {user.address.city}&nbsp;{user.address.state},&nbsp;
                {user.address.zipCode}
              </span>
            )}
            <a href='/' class='btn--link'>
              Edit
            </a>
            <a href='/' class='btn--link'>
              Change Password
            </a>
          </div>
          <div class='col-1-3'>
            <h4 class='cover-title'>Ticket</h4>
            <span class='info'>
              Live Tickets... &nbsp; &times;&nbsp;
              <span class='number number-live'>
                {user && ticketStatus(user.tickets).live}
              </span>
            </span>
            <span class='info'>
              Active Tickets... &nbsp; &times;&nbsp;
              <span class='number number-active'>
                {user && ticketStatus(user.tickets).active}
              </span>
            </span>
            <span class='info'>
              Pools entered... &nbsp; &times;&nbsp;
              <span class='number number-pools'>
                {user && numberPoolsEntered(user.tickets)}
              </span>
            </span>
            <Link to='/purchaseTickets' class='btn--link'>
              Buy Tickets
            </Link>
          </div>
          <div class='col-1-3'>
            <h4 class='cover-title'>Charity</h4>
            <span class='info'>
              Charities pledged... &nbsp; &times;&nbsp;
              <span class='number'>0</span>
            </span>
            <span class='info'>
              you're elible to pick a charity
              <a href='/' class='btn--link font-sm margin-left-sm'>
                pick one
              </a>
            </span>
            <a href='/' class='btn--link'>
              Submit Charity
            </a>
          </div>
        </div>
        <h2 class='dashboard__title'>My pools</h2>
        <div class='breaker'>&nbsp;</div>
        {/*----------POOLS-----------*/}
        {user && prizes && <UserPools tickets={user.tickets} prizes={prizes} />}
      </div>
    </div>
  );
};

UserDashboard.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.auth.user,
  prizes: state.prizes.prizes
});

export default connect(
  mapStateToProps,
  { loadPrizes }
)(UserDashboard);
