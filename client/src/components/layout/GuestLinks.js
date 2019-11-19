import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const GuestLinks = () => {
  return (
    <Fragment>
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
            <Link to='/login' className='main-nav__menu--item-link'>
              Login
            </Link>
          </li>
          <li className='main-nav__menu--item'>
            <Link to='/register' className='main-nav__menu--item-link'>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default GuestLinks;
