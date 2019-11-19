import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class='footer'>
      {/*<h2 class='footer__title'>CfC</h2>*/}
      <h4 class='footer__social-header'>Follow us</h4>

      <div class='footer__container'>
        <ul class='footer__nav footer__nav--left'>
          <li class='footer__nav--item'>
            <Link to='/' class='footer__nav--link'>
              <i class='fab fa-twitter-square'></i>&nbsp; Twitter
            </Link>
          </li>
          <li class='footer__nav--item'>
            <Link to='/' class='footer__nav--link'>
              <i class='fab fa-facebook-square'></i>&nbsp; Facebook
            </Link>
          </li>
          <li class='footer__nav--item'>
            <Link to='/' class='footer__nav--link'>
              <i class='fab fa-youtube'></i>&nbsp; Youtube
            </Link>
          </li>
          <li class='footer__nav--item'>
            <Link to='/' class='footer__nav--link'>
              <i class='fab fa-instagram'></i>&nbsp; Instagram
            </Link>
          </li>
        </ul>

        <ul class='footer__nav footer__nav--right'>
          <li class='footer__nav--item'>
            <Link to='/' class='footer__nav--link'>
              Support the site
            </Link>
          </li>
          <li class='footer__nav--item'>
            <Link to='/' class='footer__nav--link'>
              Contact Us
            </Link>
          </li>
          <li class='footer__nav--item'>
            <Link to='/' class='footer__nav--link'>
              Submit a charity
            </Link>
          </li>
          <li class='footer__nav--item'>
            <Link to='/' class='footer__nav--link'>
              Archived cars
            </Link>
          </li>
          <li class='footer__nav--item'>
            <Link to='/' class='footer__nav--link'>
              Archived charity winners
            </Link>
          </li>
        </ul>
      </div>
      <h5 class='footer__copyright-tag'>&copy; 2019 Cars for Causes</h5>
    </div>
  );
};

export default Footer;
