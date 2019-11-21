import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Header nav components
import GuestLinks from "./GuestLinks";
import AuthLinks from "./AuthLinks";

const Header = ({ loading, isAuthenticated }) => {
  return (
    <Fragment>
      <header className='header'>
        <nav className='main-nav'>
          <div className='main-nav__logo'>
            <Link to='/' style={{ textDecoration: "none" }}>
              <h2 className='main-nav__logo-title'>CarsforCauses</h2>
            </Link>
          </div>
        </nav>
        {/*<input type='checkbox' class='menu-btn__checkbox' id='navi-toggle' />*/}

        {!loading && isAuthenticated ? <AuthLinks /> : <GuestLinks />}
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Header);
