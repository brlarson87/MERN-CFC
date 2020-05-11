import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import formatNumber from "../../utils/formatNumber";
import userTickets from "../../utils/userTickets";
import progressBar from "../../utils/progressBar";

const CarCard = ({ prize, user }) => {
  return (
    <Fragment>
      <div className='car-card'>
        <h2 className='car-card__title'>{prize.car}</h2>
        <img
          src={prize.pictures[0]}
          alt='2020-c8-1'
          className='car-card__image'
        />

        <div className='car-card__bg-overlay'>&nbsp;</div>
        <div className='car-card__details'>
          {user ? (
            <div className='car-card__details--left u-color-secondary'>
              <i className='fas fa-ticket-alt'>
                &nbsp; x {userTickets(user.tickets, prize._id)}
              </i>
              <div className='u-color-primary u-margin-top-sm'>
                <i className='fas fa-ribbon'>
                  &nbsp; x {prize.charityPool.length}
                </i>
              </div>
            </div>
          ) : (
            <div className='car-card__details--left u-color-primary u-margin-top-sm'>
              <i className='fas fa-ribbon'>
                &nbsp; x {prize.charityPool.length}
              </i>
            </div>
          )}
          <div className='car-card__details--right'>
            <span className='car-card__tickets-in'>
              {formatNumber(prize.ticketPool)}
            </span>{" "}
            /
            <span className='car-card__total-tickets'>
              &nbsp;{formatNumber(prize.prizeTotal)}&nbsp;Tks
            </span>
          </div>
        </div>
        <div className='car-card__progress-bar'>
          <span
            className='car-card__progress-bar__filler'
            style={{
              width: progressBar(prize.ticketPool, prize.prizeTotal),
            }}
          ></span>
        </div>

        <h3>Quick Enter</h3>

        <div className='quick-enter'>
          <button className='quick-enter__btn' value='1'>
            1
          </button>
          <button className='quick-enter__btn' value='1'>
            5
          </button>
          <button className='quick-enter__btn' value='10'>
            10
          </button>
          <button className='quick-enter__btn' value='25'>
            25
          </button>
          <button className='quick-enter__btn' value='50'>
            50
          </button>
        </div>

        <Link
          to={`/cardetails/${prize._id}`}
          className='btn btn--primary u-margin-bottom-sm'
          onClick={() => window.scrollTo(0, 0)}
        >
          Details
        </Link>
      </div>
    </Fragment>
  );
};

export default CarCard;
