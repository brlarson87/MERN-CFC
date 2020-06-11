import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Timer from "./Timer";
//import moment from "moment";

import { loadResultAndPrize } from "../../actions/prizes";

//import formatNumber from "../../utils/formatNumber";
//import { formatTime } from "../../utils/formatNumber";
import { formatTicketNumber } from "../../utils/numberPoolsEntered";

import SingleTicket from "../dashboard/SingleTicket";

const Drawing = ({ match, loadResultAndPrize, result, prize }) => {
  useEffect(() => {
    loadResultAndPrize(match.params.id);
  }, [loadResultAndPrize, match.params.id]);

  const [resultData, setResultData] = useState({
    grandWinner: {},
    secondaryWinners: [],
    ticketWinners: [],
    charityWinner: {},
    stopTimer: false,
  });

  const startAnimation = () => {
    setResultData({
      ...resultData,
      stopTimer: true,
    });

    setTimeout(() => {
      setResultData({
        ...resultData,
        stopTimer: true,
      });
    }, 2000);
  };

  return (
    <div className='drawing-container'>
      {result && prize && (
        <Fragment>
          <Link to='/cars' style={{ textDecoration: "none" }}>
            <i className='fas fa-arrow-alt-circle-left drawing-back-arrow'></i>
          </Link>
          <div className='container container--colored'>
            <div className='timer'>
              {/* <div className='timer__time'>{formatTime(time)}</div> */}
              {!resultData.stopTimer && (
                <Fragment>
                  <div className='timer__title'>Winners are picked in</div>
                  <Timer
                    time={result.drawingTime}
                    startAnimation={startAnimation}
                  />
                </Fragment>
              )}
            </div>
            <h1 className='car-title'>{prize.car}</h1>
            <div className='drawing-flex'>
              <div className='drawing-flex__box'>
                <img
                  className='thumbnail__car-image'
                  src={prize.pictures[0]}
                  alt='Car'
                />
              </div>

              <div className='drawing-flex__box'>
                <h2 className='drawing-flex__box__title'>Secondary Prize</h2>
                <h3 className='drawing-flex__box__value'>
                  {prize.secondaryPrizes.prize}
                </h3>
              </div>

              <div className='drawing-flex__box'>
                <h2 className='drawing-flex__box__title'>Ticket Prize</h2>
                <h3>
                  <i className='fas fa-ticket-alt u-color-secondary'>
                    &nbsp; x {prize.ticketsPrize.amount}
                  </i>
                </h3>
              </div>

              <div className='drawing-flex__box'>
                <h2 className='drawing-flex__box__title'>Charity Donation</h2>
                <h3 className='drawing-flex__box__value'>
                  ${prize.charityAmount}
                </h3>
              </div>
            </div>

            <div className='winning-numbers-flex'>
              <div className='winner-box'>
                <h2 className='result-title result-title--gold'>
                  Grand Prize Winner
                </h2>
                {resultData.stopTimer && (
                  <div className='ticket-container ticket-container--single'>
                    <div className='ticket-container__single-ticket ticket-container__single-ticket--single'>
                      <i className='fas fa-ticket-alt'>
                        <span className='ticket-container__single-ticket--number ticket-container__single-ticket--number--single'>
                          {formatTicketNumber(
                            result.grandPrizeTicketNumber,
                            prize.prizeTotal
                          )}
                        </span>
                      </i>
                    </div>
                  </div>
                )}
              </div>

              <div className='winner-box'>
                <h2 className='result-title'>Charity Winner</h2>
                <div className='ticket-container ticket-container--single'></div>
              </div>
            </div>

            <div className='winning-numbers-flex winning-numbers-flex--lg'>
              <div className='item secondary-winner-box'>
                <h2 className='result-title result-title--secondary'>
                  Secondary Winners
                </h2>
                <div className='ticket-container ticket-container--secondary'>
                  {/* Map Secondary Tickets into SingleTicket Component */}
                  {resultData.stopTimer &&
                    result.secondaryPrizes.map((num, index) => (
                      <SingleTicket
                        number={num}
                        total={prize.prizeTotal}
                        key={index}
                        dash={false}
                      />
                    ))}
                </div>
              </div>
              <div className='item ticket-winner-box'>
                <h2 className='result-title result-title--secondary'>
                  Ticket Winners
                </h2>
                <div className='ticket-container ticket-container--secondary'>
                  {/* Map ticketPrize Tickets into SingleTicket Component */}
                  {resultData.stopTimer &&
                    result.ticketPrizes.map((num, index) => (
                      <SingleTicket
                        number={num}
                        total={prize.prizeTotal}
                        key={index}
                        dash={false}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  result: state.results.result,
  prize: state.prizes.prize,
});

export default connect(mapStateToProps, {
  loadResultAndPrize,
})(Drawing);
