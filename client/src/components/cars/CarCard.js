import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import formatNumber from "../../utils/formatNumber";
import userTickets from "../../utils/userTickets";
import progressBar from "../../utils/progressBar";

const CarCard = props => {
  return (
    <Fragment>
      <div className='car-card'>
        <h2 className='car-card__title'>{props.prize.car}</h2>
        <img
          src={props.prize.pictures[0]}
          alt='2020-c8-1'
          className='car-card__image'
        />

        <div className='car-card__bg-overlay'>&nbsp;</div>
        <div className='car-card__details'>
          {props.user ? (
            <div className='car-card__details--left u-color-secondary'>
              <i className='fas fa-ticket-alt'>
                &nbsp; x {userTickets(props.user.tickets, props.prize._id)}
              </i>
              <div className='u-color-primary u-margin-top-sm'>
                <i className='fas fa-ribbon'>
                  &nbsp; x {props.prize.charityPool.length}
                </i>
              </div>
            </div>
          ) : (
            <div className='car-card__details--left u-color-primary u-margin-top-sm'>
              <i className='fas fa-ribbon'>
                &nbsp; x {props.prize.charityPool.length}
              </i>
            </div>
          )}
          <div className='car-card__details--right'>
            <span className='car-card__tickets-in'>
              {formatNumber(props.prize.ticketPool)}
            </span>{" "}
            /
            <span className='car-card__total-tickets'>
              &nbsp;{formatNumber(props.prize.prizeTotal)}&nbsp;Tks
            </span>
          </div>
        </div>
        <div className='car-card__progress-bar'>
          <span
            className='car-card__progress-bar__filler'
            style={{
              width: progressBar(props.prize.ticketPool, props.prize.prizeTotal)
            }}
          ></span>
        </div>
        <Link
          to={`/cardetails/${props.prize._id}`}
          className='btn btn--quick'
          onClick={() => window.scrollTo(0, 0)}
          style={{ marginBottom: "3px" }}
        >
          Quick Enter
        </Link>
        <Link
          to={`/cardetails/${props.prize._id}`}
          className='btn btn--primary u-margin-bottom-sm'
          onClick={() => window.scrollTo(0, 0)}
        >
          Details
        </Link>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(CarCard);
