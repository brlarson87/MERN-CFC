import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";

import ticketStatus from "../../utils/ticketStatus";

const AuthLinks = ({ user, loading, logout }) => {
  return (
    <Fragment>
      <div class='header__icon-ticket'>
        <i class='fas fa-ticket-alt'>
          &nbsp; x {!loading && user && ticketStatus(user.tickets).active}
        </i>
      </div>

      <div className='pop-out-left'>
        <ul className='main-nav__menu'>
          <li className='main-nav__menu--item'>
            <Link to='/about' className='main-nav__menu--item-link'>
              About Us
            </Link>
          </li>
          <li className='main-nav__menu--item'>
            <Link to='/cars' className='main-nav__menu--item-link'>
              Cars
            </Link>
          </li>
          <li className='main-nav__menu--item'>
            <Link to='/charities' className='main-nav__menu--item-link'>
              Charities
            </Link>
          </li>
          <li className='main-nav__menu--item'>
            <Link to='/account' className='main-nav__menu--item-link'>
              <i className='far fa-user'>
                &nbsp; {!loading && user && user.firstName}
              </i>
            </Link>
          </li>
          <li className='main-nav__menu--item'>
            <Link to='/' className='main-nav__menu--item-link' onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

AuthLinks.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  { logout }
)(AuthLinks);
