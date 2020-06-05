import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import Timer from "./Timer";
import moment from "moment";

import { loadResult, loadSinglePrize } from "../../actions/prizes";

//import formatNumber from "../../utils/formatNumber";
import { formatTime } from "../../utils/formatNumber";
import { formatTicketNumber } from "../../utils/numberPoolsEntered";

import SingleTicket from "../dashboard/SingleTicket";

const Drawing = ({ match, loadResult, loadSinglePrize, result, prize }) => {
  useEffect(() => {
    loadResult(match.params.id);
    loadSinglePrize(match.params.id);
  }, [loadResult, loadSinglePrize, match.params.id]);

  return (
    <div className='drawing-container'>
      {result && prize && (
        <Fragment>
          <Link to='/cars' style={{ textDecoration: "none" }}>
            <i className='fas fa-arrow-alt-circle-left drawing-back-arrow'></i>
          </Link>
          <div className='container'>
            <div className='timer'>
              <div className='timer__title'>Winners are picked in</div>
              <div className='timer__time'>
                {formatTime(
                  moment(result.drawingTime)
                    .add("60", "minutes")
                    .diff(Date.now(), "seconds")
                )}
              </div>
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
                  {result.secondaryPrizes.map((num, index) => (
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
                  {result.ticketPrizes.map((num, index) => (
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

export default connect(mapStateToProps, { loadResult, loadSinglePrize })(
  Drawing
);
