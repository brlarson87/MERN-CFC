import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadSinglePrize } from "../../actions/prizes";

import CarThumb from "./CarThumb";

import Spinner from "../layout/Spinner";

import formatNumber from "../../utils/formatNumber";
import ticketsEnteredInPool from "../../utils/ticketsEnteredInPool";
import { enterTickets } from "../../actions/prizes";

//COMPONENT
import EnterTickets from "../auth/EnterTickets";

const CarDetails = ({
  loadSinglePrize,
  match,
  prize,
  loading,
  user,
  enterTickets
}) => {
  useEffect(() => {
    loadSinglePrize(match.params.id);
  }, [loadSinglePrize, match.params.id]);

  const [count, setCount] = useState(0);

  const addOne = () => {
    if (count === prize.pictures.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const subtractOne = () => {
    if (count === 0) {
      setCount(prize.pictures.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const changeCount = x => {
    setCount(x);
  };

  return (
    <div className='details-container'>
      <div className='left-col'>
        <div className='details'>
          <h2 className='details__heading--1'>
            {!loading && prize && prize.car}
          </h2>
          <div className='details__group'>
            <span className='details__group--left'>Total Tickets</span>
            <span className='details__group--right'>
              {!loading && prize && formatNumber(prize.prizeTotal)}
            </span>
          </div>
          <div className='details__group'>
            <span className='details__group--left'>Tickets Entered</span>
            <span className='details__group--right'>
              {!loading && prize && prize.ticketPool.length}
            </span>
          </div>
          <div className='details__group'>
            <span className='details__group--left'>Your Tickets</span>
            <span className='details__group--right'>
              {!loading && user && prize
                ? ticketsEnteredInPool(user.tickets, match.params.id)
                : 0}
            </span>
          </div>
          <div className='details__group'>
            <span className='details__group--left'>Charity Amount</span>
            <span className='details__group--right'>
              {!loading && prize && formatNumber(prize.charityAmount)}
            </span>
          </div>

          <h4 className='details__heading--2'>Secondary prizes</h4>

          <div className='details__group'>
            <span className='details__group--left'>
              Places 2 - {!loading && prize && prize.secondaryPrizes.places + 1}
            </span>
            <span className='details__group--right'>
              {!loading && prize && prize.secondaryPrizes.prize}
            </span>
          </div>
          <div className='details__group'>
            <span className='details__group--left'>
              Places {!loading && prize && prize.secondaryPrizes.places + 2} -{" "}
              {!loading &&
                prize &&
                prize.secondaryPrizes.places + 1 + prize.ticketsPrize.places}
            </span>
            <span className='details__group--right'>
              <i className='fas fa-ticket-alt'></i> x{" "}
              {!loading && prize && prize.ticketsPrize.amount}
            </span>
          </div>

          <h4 className='details__heading--2'>Features</h4>
          <div className='details__features'>
            <p className='details__features--text'>
              {!loading && prize && prize.carDetails}
            </p>
            <a href='/' className='btn--block'>
              Full Features
            </a>
          </div>

          {/*----------TICKET FORM-----------*/}
          {prize && (
            <EnterTickets
              id={prize._id}
              ticketTotal={prize.ticketPool.length}
              enterTickets={enterTickets}
            />
          )}
        </div>
      </div>

      <div className='right-col'>
        <div className='images-container'>
          {/*----------MAIN IMAGE-----------*/}
          <div className='images-container__top'>
            <img
              src={
                !loading && prize ? (
                  prize.pictures[count]
                ) : (
                  <Spinner margin={"100"} />
                )
              }
              alt='Ford mustang'
              className='main-image'
            />
            <div className='arrow arrow-left' onClick={() => subtractOne()}>
              <i class='fas fa-arrow-left'></i>
            </div>
            <div className='arrow arrow-right' onClick={() => addOne()}>
              <i class='fas fa-arrow-right'></i>
            </div>
          </div>

          {/* --BOTTOM CONTAINER OF THUMBNAILS-- */}
          <div className='images-container__bottom'>
            {/*----- Loop through prize pictures ---------*/}
            {!loading && prize ? (
              prize.pictures.map((pic, i) => (
                <CarThumb
                  pic={pic}
                  keyy={i}
                  key={i}
                  alternate={prize.car}
                  changeCount={changeCount}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  prize: state.prizes.prize,
  loading: state.auth.loading,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { loadSinglePrize, enterTickets }
)(CarDetails);
