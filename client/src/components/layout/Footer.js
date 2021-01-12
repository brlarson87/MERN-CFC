//CORE REACT
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <h4 className='footer__social-header'>Follow us</h4>

      <div className='footer__container'>
        <ul className='footer__nav footer__nav--left'>
          <li className='footer__nav--item'>
            <Link to='/' className='footer__nav--link'>
              <i className='fab fa-twitter-square'></i>&nbsp; Twitter
            </Link>
          </li>
          <li className='footer__nav--item'>
            <Link to='/' className='footer__nav--link'>
              <i className='fab fa-facebook-square'></i>&nbsp; Facebook
            </Link>
          </li>
          <li className='footer__nav--item'>
            <Link to='/' className='footer__nav--link'>
              <i className='fab fa-youtube'></i>&nbsp; Youtube
            </Link>
          </li>
          <li className='footer__nav--item'>
            <Link to='/' className='footer__nav--link'>
              <i className='fab fa-instagram'></i>&nbsp; Instagram
            </Link>
          </li>
        </ul>

        <ul className='footer__nav footer__nav--right'>
          <li className='footer__nav--item footer__nav--item--sub'>
            <Link to='/' className='footer__nav--link'>
              Support the site
            </Link>
          </li>
          <li className='footer__nav--item footer__nav--item--sub'>
            <Link to='/' className='footer__nav--link'>
              Contact Us
            </Link>
          </li>
          <li className='footer__nav--item footer__nav--item--sub'>
            <Link to='/' className='footer__nav--link'>
              Submit a charity
            </Link>
          </li>
          <li className='footer__nav--item footer__nav--item--sub'>
            <Link to='/' className='footer__nav--link'>
              Archived cars
            </Link>
          </li>
          <li className='footer__nav--item footer__nav--item--sub'>
            <Link to='/' className='footer__nav--link'>
              Archived charity winners
            </Link>
          </li>
        </ul>
      </div>
      <h5 className='footer__copyright-tag'>&copy; 2019 Cars for Causes</h5>
    </div>
  );
};

export default Footer;
