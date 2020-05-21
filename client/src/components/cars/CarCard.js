//CORE REACT
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Components
import QuickEnter from "./QuickEnter";

//Utils
import formatNumber from "../../utils/formatNumber";
import userTickets from "../../utils/userTickets";
import progressBar from "../../utils/progressBar";

const CarCard = ({ prize, user, showConfirmModal, setAlert }) => {
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
              {/* ************************************************************ */}
              {/* NOT RE_RENDERING WHEN TICKETS ENTERED IN TICKETCONFIRM MODAL */}
              {/* ************************************************************ */}
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

        {user && (
          <QuickEnter
            prizeId={prize._id}
            user={user}
            showConfirmModal={showConfirmModal}
            prizeName={prize.car}
            thumbnail={prize.pictures[0]}
            ticketTotal={prize.ticketPool}
            prizeTotal={prize.prizeTotal}
            setAlert={setAlert}
          />
        )}
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
