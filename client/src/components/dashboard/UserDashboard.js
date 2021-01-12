//CORE REACT
import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Components
import Header from "../layout/Header";
import UserPools from "./UserPools";
//Utils
import { numberPoolsEntered } from "../../utils/numberPoolsEntered";
import { checkIfEligibleForPledge } from "../../utils/charityEligible";
//Actions
import { loadPrizes } from "../../actions/prizes";

const UserDashboard = ({ user, prizes, loadPrizes }) => {
  useEffect(() => {
    loadPrizes();
  }, [loadPrizes]);

  return (
    <Fragment>
      <Header />
      <div className='container'>
        <div className='dashboard'>
          <h2 className='dashboard__title'>My Account</h2>
          {/* <div className='breaker'>&nbsp;</div> */}

          {/************ ROW OF INFORMATION *********/}
          <div className='row'>
            <div className='col-1-3'>
              <h4 className='cover-title'>Personal</h4>
              {user && (
                <span className='info'>
                  {user.firstName}&nbsp;{user.lastName}
                </span>
              )}
              {user && <span className='info'>{user.email}</span>}
              {user && <span className='info'>{user.address.streetName}</span>}
              {user && (
                <span className='info'>
                  {user.address.city}&nbsp;{user.address.state},&nbsp;
                  {user.address.zipCode}
                </span>
              )}
              <a href='/' className='btn--link u-margin-right-sm'>
                Edit
              </a>
              <Link to='/changePassword' className='btn--link'>
                Change Password
              </Link>
            </div>
            <div className='col-1-3'>
              <h4 className='cover-title'>Ticket</h4>
              <span className='info'>
                Unused Tickets... &nbsp; &times;&nbsp;
                <span className='number'>
                  {user && user.useableTickets.length}
                </span>
              </span>
              <span className='info'>
                Active Tickets... &nbsp; &times;&nbsp;
                <span className='number'>
                  {user && user.activeTickets.length}
                </span>
              </span>
              <span className='info'>
                Pools entered... &nbsp; &times;&nbsp;
                <span className='number'>
                  {user && numberPoolsEntered(user.activeTickets)}
                </span>
              </span>
              <Link to='/purchaseTickets' className='btn--link'>
                Buy Tickets
              </Link>
            </div>
            <div className='col-1-3'>
              <h4 className='cover-title'>Charity</h4>
              <span className='info'>
                Charities pledged... &nbsp; &times;&nbsp;
                <span className='number'>
                  {user && prizes && user.charitiesPledged.length}
                </span>
              </span>
              {/*----------CheckIfEligbleForPledge-----------*/}
              {user &&
                prizes &&
                checkIfEligibleForPledge(
                  user.activeTickets,
                  prizes,
                  user.charitiesPledged
                ).eligible && (
                  <span className='info u-margin-bottom-sm'>
                    you're elible to pick a charity
                    <Link
                      to='/charities'
                      className='btn--link font-sm margin-left-sm'
                    >
                      pick one
                    </Link>
                  </span>
                )}

              <a href='/' className='btn--link'>
                Submit Charity
              </a>
            </div>
          </div>


          <h2 className='dashboard__title'>My pools</h2>
          {/* <div className='breaker'>&nbsp;</div> */}
          {/*****************************************/}
          {/*----------USERPOOLS COMPONENT-----------*/}
          {/*****************************************/}
          {user && prizes && (
            <UserPools
              tickets={user.activeTickets}
              prizes={prizes}
              userCharities={user.charitiesPledged}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

UserDashboard.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  prizes: state.prizes.prizes,
});

export default connect(mapStateToProps, {
  loadPrizes,
})(UserDashboard);
