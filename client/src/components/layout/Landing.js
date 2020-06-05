//CORE REACT
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "./Header";

//import Spinner from "./Spinner";
import Footer from "./Footer";

const Landing = ({ loading, isAuthenticated, user }) => {
  useEffect(() => {
    let scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    let elementToShow = document.querySelector(".show-on-scroll");
    function loop() {
      if (isElementInViewport(elementToShow)) {
        elementToShow.classList.add("is-visible");
      } else {
        elementToShow.classList.remove("is-visible");
      }

      scroll(loop);
    }

    loop();

    function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight))
      );
    }
  }, []);

  return (
    <Fragment>
      <Header />
      <div className='car-bg'>
        <div className='see-through--top'>&nbsp;</div>
        <div className='landing-info'>
          <h2 className='landing-info--title'>
            Using the love of cars to crowdfund donations
          </h2>
          <div className='landing-info--grid'>
            {!loading && isAuthenticated && user ? (
              <Fragment>
                <div className='landing-info--box'>
                  <h4 className='landing-info--box--heading'>
                    Welcome Back {user.firstName}!
                  </h4>
                  <p className='landing-info--box--text margin-bottom-lg'>
                    Good luck in the pools.
                  </p>
                  <Link
                    to='/account'
                    className='btn-abs-bottom'
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    My Account
                  </Link>
                </div>
                <div className='arrow-main'>&rarr;</div>
                <div className='landing-info--box'>
                  <h4 className='landing-info--box--heading'>
                    Purchase Tickets
                  </h4>
                  <p className='landing-info--box--text'>
                    Tickets are $1 each.
                  </p>
                  <Link to='/purchaseTickets' className='btn-abs-bottom'>
                    Buy Tickets
                  </Link>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className='landing-info--box'>
                  <h4 className='landing-info--box--heading'>
                    Create an account
                  </h4>
                  <p className='landing-info--box--text margin-bottom-lg'>
                    Sign up, It's free!
                  </p>
                  <Link to='/login' className='btn-abs-bottom'>
                    Signup/Login
                  </Link>
                </div>
                <div className='arrow-main'>&rarr;</div>
                <div className='landing-info--box'>
                  <h4 className='landing-info--box--heading'>
                    Purchase Tickets
                  </h4>
                  <p className='landing-info--box--text'>
                    Tickets are $1 each.
                  </p>
                </div>
              </Fragment>
            )}

            <div className='arrow-main'>&rarr;</div>
            <div className='landing-info--box'>
              <h4 className='landing-info--box--heading'>Enter tickets</h4>
              <p className='landing-info--box--text'>
                Browse the collection of car pools and find your dream car!
                Enter enough tickets, and you can also enter a charity to the
                corresponding charity pool.
              </p>
              <Link
                to='/cars'
                className='btn-abs-bottom'
                onClick={() => window.scrollTo(0, 0)}
              >
                Check out the cars
              </Link>
            </div>
          </div>
        </div>

        <div className='see-through--bottom'>
          <div className='see-through--bottom__box show-on-scroll'>
            <h1 className='see-through--bottom__title'>
              Browse the many charities you can enter.. or sumbit your own!
            </h1>
            <Link
              to='/charities'
              className='btn--link-2'
              onClick={() => window.scrollTo(0, 0)}
            >
              &rarr;
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

Landing.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Landing);
