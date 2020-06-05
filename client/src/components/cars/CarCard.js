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
  let { prizeTotal, ticketPool, car, _id, pictures, charityPool } = prize;

  if (ticketPool === prizeTotal) {
    setTimeout(() => {
      let overlays = document.querySelectorAll(".car-card__bg-overlay");
      [...overlays].forEach((overlay) => {
        if (overlay.getAttribute("value") === _id) {
          overlay.style.backgroundColor = "rgba(0,0,0,.9)";
          overlay.style.zIndex = 11;
        }
      });

      let viewBtns = document.querySelectorAll(".btn-abs-top");
      [...viewBtns].forEach((btn) => {
        if (btn.getAttribute("value") === _id) {
          btn.classList.remove("u-display-none");
        }
      });
    }, 2000);
  }
  return (
    <Fragment>
      <div className='car-card'>
        <h2 className='car-card__title'>{car}</h2>
        <img src={pictures[0]} alt='2020-c8-1' className='car-card__image' />

        <div className='car-card__bg-overlay' value={_id}>
          &nbsp;
        </div>

        <Link
          to={`/cars/results/${_id}`}
          className='btn-abs-top u-display-none'
          onClick={() => window.scrollTo(0, 0)}
          value={_id}
        >
          View Drawing
        </Link>

        <div className='car-card__details'>
          {user ? (
            <div className='car-card__details--left u-color-secondary'>
              <i className='fas fa-ticket-alt'>
                &nbsp; x {userTickets(user.tickets, _id)}
              </i>
              <div className='u-color-primary u-margin-top-sm'>
                <i className='fas fa-ribbon'>&nbsp; x {charityPool.length}</i>
              </div>
            </div>
          ) : (
            <div className='car-card__details--left u-color-primary u-margin-top-sm'>
              <i className='fas fa-ribbon'>&nbsp; x {charityPool.length}</i>
            </div>
          )}
          <div className='car-card__details--right'>
            <span className='car-card__tickets-in'>
              {formatNumber(ticketPool)}
            </span>{" "}
            /
            <span className='car-card__total-tickets'>
              &nbsp;{formatNumber(prizeTotal)}&nbsp;Tks
            </span>
          </div>
        </div>
        <div className='car-card__progress-bar'>
          <span
            className='car-card__progress-bar__filler'
            style={{
              width: progressBar(ticketPool, prizeTotal),
            }}
          ></span>
        </div>

        <QuickEnter
          prizeId={_id}
          user={user}
          showConfirmModal={showConfirmModal}
          prizeName={car}
          thumbnail={pictures[0]}
          ticketTotal={ticketPool}
          prizeTotal={prizeTotal}
          setAlert={setAlert}
        />

        <Link
          to={`/cardetails/${_id}`}
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
