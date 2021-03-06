//CORE REACT
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Components
import GuestLinks from "./GuestLinks";
import AuthLinks from "./AuthLinks";

const Header = ({ loading, isAuthenticated }) => {
  return (
    <Fragment>
      <header className='header'>
        <Link to='/' style={{ textDecoration: "none" }} onClick={() => window.scrollTo(0, 0)}>
          <h2 className='header__title'>CarsforCauses</h2>
        </Link>

        {!loading && isAuthenticated ? <AuthLinks /> : <GuestLinks />}
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
