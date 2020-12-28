//CORE REACT
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Actions
import { logout } from "../../actions/auth";

//Utils
import ticketStatus from "../../utils/ticketStatus";

const AuthLinks = ({ user, loading, logout }) => {
  useEffect(() => {
    let menuBtn = document.querySelector(".menu-btn");
    let ticket = document.querySelector(".header__icon-ticket");
    let popOut = document.querySelector(".pop-out-left");
    let navs = document.querySelector(".main-nav-menu");
    let overlay = document.querySelector(".overlay-all");

    let navLinks = document.querySelectorAll(".main-nav-menu__item__link");

    const close = () => {
      menuBtn.classList.remove("open");
      overlay.classList.remove("show-overlay");
      popOut.classList.remove("show");
      ticket.classList.remove("move-ticket");
      navs.classList.remove("nav-showing");
    };

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", close);
    }

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      overlay.classList.toggle("show-overlay");
      popOut.classList.toggle("show");
      ticket.classList.toggle("move-ticket");
      navs.classList.toggle("nav-showing");
    });

    overlay.addEventListener("click", close);
  }, []);

  return (
    <Fragment>
      <div className='overlay-all'></div>
      <label htmlFor='navi-toggle' className='menu-btn'>
        <span className='menu-icon'>&larr;</span>
      </label>
      <div className='header__icon-ticket'>
        <i className='fas fa-ticket-alt'>
          &nbsp; x {!loading && user && ticketStatus(user.tickets).active}
        </i>
      </div>

      <div className='pop-out-left'>
        <ul className='main-nav-menu'>
          <li className='main-nav-menu__item'>
            <Link
              to='/about'
              className='main-nav-menu__item__link'
              onClick={() => window.scrollTo(0, 0)}
            >
              <i className='fas fa-hand-holding-medical'></i> &nbsp; About Us
            </Link>
          </li>
          <li className='main-nav-menu__item'>
            <Link
              to='/cars'
              className='main-nav-menu__item__link'
              onClick={() => window.scrollTo(0, 0)}
            >
              <i className='fas fa-car'></i>&nbsp; Cars
            </Link>
          </li>
          <li className='main-nav-menu__item'>
            <Link
              to='/charities'
              className='main-nav-menu__item__link'
              onClick={() => window.scrollTo(0, 0)}
            >
              <i className='fas fa-ribbon'></i>&nbsp; Charities
            </Link>
          </li>
          <li className='main-nav-menu__item'>
            <Link
              to='/account'
              className='main-nav-menu__item__link'
              onClick={() => window.scrollTo(0, 0)}
            >
              <i className='far fa-user'>
                &nbsp; {!loading && user && user.firstName}
              </i>
            </Link>
          </li>
          <li className='main-nav-menu__item'>
            <Link to='/' className='main-nav-menu__item__link' onClick={logout}>
              <i className='fas fa-sign-out-alt'></i>&nbsp; Logout
            </Link>
          </li>
          {user && user.admin && 
          <li className='main-nav-menu__item'>
            <Link to='/admin-priv' className='main-nav-menu__item__link' onClick={logout}>
              <i className='fas fa-sign-out-alt'></i>&nbsp; Admin
            </Link>
          </li>}
          
        </ul>
      </div>
    </Fragment>
  );
};

AuthLinks.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { logout })(AuthLinks);
