import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const GuestLinks = () => {
  useEffect(() => {
    let open = false;
    let menuBtn = document.querySelector(".menu-btn");
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
        if (i === 1) {
          setTimeout(() => {
            close();
          }, 500);
        } else {
          close();
        }
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
    }

    function close() {
      popOut.style.opacity = "0";
      popOut.style.width = "0";
      menuBtn.style.transform = "translateX(0)";
      navs.classList.remove("nav-showing");
      overlay.classList.remove("show-overlay");
      body.style.overflow = "auto";
    }
  }, []);

  return (
    <Fragment>
      <div className='overlay-all'></div>
      <label for='navi-toggle' class='menu-btn'>
        <span class='menu-icon'>&larr;</span>
      </label>
      <div className='pop-out-left'>
        <ul className='main-nav__menu'>
          <li className='main-nav__menu--item'>
            <Link to='/about' className='main-nav__menu--item-link'>
              About Us
            </Link>
          </li>
          <li className='main-nav__menu--item'>
            <Link to='/cars' className='main-nav__menu--item-link'>
              <i class='fas fa-car'></i>&nbsp; Cars
            </Link>
          </li>
          <li className='main-nav__menu--item'>
            <Link to='/charities' className='main-nav__menu--item-link'>
              <i class='fas fa-ribbon'></i>&nbsp; Charities
            </Link>
          </li>
          <li className='main-nav__menu--item'>
            <Link to='/login' className='main-nav__menu--item-link'>
              <i class='fas fa-sign-in-alt'></i>&nbsp; Login
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
