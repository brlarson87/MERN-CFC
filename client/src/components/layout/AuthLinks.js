import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";

import ticketStatus from "../../utils/ticketStatus";

const AuthLinks = ({ user, loading, logout }) => {
  useEffect(() => {
    let open = false;
    let menuBtn = document.querySelector(".menu-btn");
    let ticket = document.querySelector(".header__icon-ticket");
    let popOut = document.querySelector(".pop-out-left");
    let navs = document.querySelector(".main-nav__menu");
    let overlay = document.querySelector(".overlay-all");
    let body = document.getElementsByTagName("body")[0];
    let navLinks = document.querySelectorAll(".main-nav__menu--item-link");

    overlay.addEventListener("click", () => {
      close();
    });

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", () => {
        close();
      });
    }
    menuBtn.addEventListener("click", () => {
      if (!open) {
        openMenu();
      } else {
        close();
      }
      open = !open;
    });

    function openMenu() {
      popOut.style.opacity = "1";
      popOut.style.width = "20%";
      menuBtn.style.transform = "translateX(-19vw) rotate(180deg)";
      navs.classList.add("nav-showing");
      overlay.classList.add("show-overlay");
      body.style.overflow = "hidden";
      ticket.classList.add("move-ticket");
    }

    function close() {
      popOut.style.opacity = "0";
      popOut.style.width = "0";
      menuBtn.style.transform = "translateX(0)";
      navs.classList.remove("nav-showing");
      overlay.classList.remove("show-overlay");
      body.style.overflow = "auto";
      ticket.classList.remove("move-ticket");
    }
  }, []);

  return (
    <Fragment>
      <div className='overlay-all'></div>
      <label for='navi-toggle' class='menu-btn'>
        <span class='menu-icon'>&larr;</span>
      </label>
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

export default connect(mapStateToProps, { logout })(AuthLinks);
