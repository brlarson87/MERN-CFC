//CORE REACT
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

//Components
import QuickEnter from "./QuickEnter";

//Utils
import formatNumber from "../../utils/formatNumber";
import userTickets from "../../utils/userTickets";
import progressBar from "../../utils/progressBar";

import ticketSvg from "../../img/ticket.svg"

const CarCard = ({ prize, user, showConfirmModal, setAlert }) => {
  let { prizeTotal, ticketPool, car, _id, pictures, charityPool, charityAmount, charityPledgeAmount } = prize;

  const [showCharityList, setShowCharityList] = useState(false);
  const [locked, setLocked] = useState(false);

  let charityNames = charityPool.map(c => c.name);

  if (ticketPool === prizeTotal) {
    //setLocked({locked: true});
    setTimeout(() => {
      let overlays = document.querySelectorAll(".car-card__bg-overlay");
      [...overlays].forEach((overlay) => {
        if (overlay.getAttribute("value") === _id) {
          overlay.style.backgroundColor = "rgba(0,0,0,.9)";
          overlay.style.zIndex = 17;
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
        <div className="carImage-container">
          <img src={pictures[0]} alt='2020-c8-1' className='car-card__image' />

          <div className="charity-amount">
            <h5>Charity Amount:</h5>
            <div className="charity-amount__amount">${formatNumber(charityAmount)}</div>
          </div>
        </div>

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
              <div className="left-image-container">
                <img src={ticketSvg} alt="" />
              </div>
              <span>x {userTickets(user.activeTickets, _id)} </span>

              <i className='fas fa-ribbon' onClick={() => setShowCharityList(true)}></i>
              <span>x {charityPool.length}</span>
            </div>
          ) : (
            <div className='car-card__details--left car-card__details--left--out'>
              <i className='fas fa-ribbon u-color-secondary' onClick={() => setShowCharityList(true)}></i>
              <span>x {charityPool.length}</span>
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
          className={`btn btn--primary u-margin-bottom-sm ${locked && "inactive"}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          Details
        </Link>

            {/* CHARITY LIST */}
        {showCharityList && <div className="car-card__charity-list">
          <h2 className='modal-title'>
              Charities entered for this pool
          </h2>
          <p className="u-margin-top-sm u-color-primary-dark">It takes <strong>{charityPledgeAmount}</strong> tickets entered to pledge a charity</p>
          <ul className="charity-ul">
            {charityNames.length ? charityNames.map((name, i) =>  <li className="charity-ul__li" key={i}>{name}</li>) : <li className="charity-ul__li">No charites entered yet</li> }
          </ul>
          <div className='exit-container' onClick={() => setShowCharityList(false)}>
            <i className='fas fa-times'></i>
          </div>
        </div> }


      </div>
    </Fragment>
  );
};

export default CarCard;
