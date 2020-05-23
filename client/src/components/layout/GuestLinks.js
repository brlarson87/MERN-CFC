//CORE REACT
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const GuestLinks = () => {
  useEffect(() => {
    let menuBtn = document.querySelector(".menu-btn");
    let popOut = document.querySelector(".pop-out-left");
    let navs = document.querySelector(".main-nav-menu");
    let overlay = document.querySelector(".overlay-all");

    let navLinks = document.querySelectorAll(".main-nav-menu__item__link");

    const close = () => {
      menuBtn.classList.remove("open");
      overlay.classList.remove("show-overlay");
      popOut.classList.remove("show");
      navs.classList.remove("nav-showing");
    };

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", close);
    }

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      overlay.classList.toggle("show-overlay");
      popOut.classList.toggle("show");
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
      <div className='pop-out-left'>
        <ul className='main-nav-menu'>
          <li className='main-nav-menu__item'>
            <Link to='/about' className='main-nav-menu__item__link'>
              <i className='fas fa-hand-holding-medical'></i> &nbsp; About Us
            </Link>
          </li>
          <li className='main-nav-menu__item'>
            <Link to='/cars' className='main-nav-menu__item__link'>
              <i className='fas fa-car'></i>&nbsp; Cars
            </Link>
          </li>
          <li className='main-nav-menu__item'>
            <Link to='/charities' className='main-nav-menu__item__link'>
              <i className='fas fa-ribbon'></i>&nbsp; Charities
            </Link>
          </li>
          <li className='main-nav-menu__item'>
            <Link to='/login' className='main-nav-menu__item__link'>
              <i className='fas fa-sign-in-alt'></i>&nbsp; Login
            </Link>
          </li>
          <li className='main-nav-menu__item'>
            <Link to='/register' className='main-nav-menu__item__link'>
              <i className='fas fa-registered'></i>&nbsp; Register
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default GuestLinks;
