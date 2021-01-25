import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//COMPONENTS
import Timer from "./Timer";
import Spinner from "../layout/Spinner";
import SingleTicket from "../dashboard/SingleTicket";

//ACTIONS
import { loadResultAndPrize } from "../../actions/prizes";
import { startLoader, endLoader } from "../../actions/loaders";

//UTILS
import { formatTicketNumber } from "../../utils/numberPoolsEntered";


import ticketSvg from "../../img/ticket.svg";


const Drawing = ({
  match,
  loadResultAndPrize,
  result,
  prize,
  startLoader,
  endLoader,
  loader,
}) => {
  const [resultData, setResultData] = useState({
    stopTimer: false,
    winningDraw: true,
    grandPrizeNumber: undefined,
    secondaryPrizeNumbers: undefined,
    ticketPrizeNumbers: undefined
  });

  useEffect(() => {
    startLoader();
    loadResultAndPrize(match.params.id).then(() => endLoader());
  }, [loadResultAndPrize, match.params.id, resultData, startLoader, endLoader]);

  const startDrawing = () => {
    setResultData({
      ...resultData,
      stopTimer: true,
    });
  };

  return (
    <Fragment>
      {loader ? (
        <Spinner fixer={true} />
      ) : (
        <div className='drawing-container'>
          {result && prize && (
            <Fragment>
              <div className='container container--colored'>
                <Link to='/cars' style={{ textDecoration: "none" }}>
                  <i className='fas fa-arrow-alt-circle-left drawing-back-arrow'></i>
                </Link>
                
                  {/* <div className='timer__time'>{formatTime(time)}</div> */}
                  {!resultData.stopTimer ? (
                    <div className='timer'>
                    <Fragment>
                      <div className='timer__title'>Winners are picked in</div>
                      <Timer
                        time={result.drawingTime}
                        startDrawing={startDrawing}
                        isMounted={resultData.isMounted}
                      />
                    </Fragment>
                    </div>
                  ) :
                    (
                      <Fragment>
                      <h3 className="u-text-center">{formatTicketNumber(
                                result.grandPrizeTicketNumber,
                                prize.prizeTotal
                              )}</h3>
                      </Fragment>
                    )
                  }
                
                <h1 className='car-title'>{prize.car}</h1>
                <div className='drawing-flex'>
                  <div className='drawing-flex__box drawing-flex__box--car-image'>
                    <img
                      className='thumbnail__car-image'
                      src={prize.pictures[0]}
                      alt='Car'
                    />
                    <Link
                      to={`/cardetails/${prize._id}`}
                      className='drawing-btn'
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Details
                    </Link>
                  </div>

                  <div className='drawing-flex__box'>
                    <h2 className='drawing-flex__box__title'>
                      Secondary Prize
                    </h2>
                    <h3 className='drawing-flex__box__value'>
                      {prize.secondaryPrizes.prize}
                    </h3>
                  </div>

                  <div className='drawing-flex__box'>
                    <h2 className='drawing-flex__box__title'>Ticket Prize</h2>
                    <h3 className="u-flex drawing-flex__box__value">
                      <img className="drawing-ticket" src={ticketSvg} alt=""/>
                      {/* <i className='fas fa-ticket-alt u-color-secondary u-font-sm'>
                        &nbsp; x {prize.ticketsPrize.amount}
                      </i> */}
                      x {prize.ticketsPrize.amount}
                    </h3>
                  </div>

                  <div className='drawing-flex__box'>
                    <h2 className='drawing-flex__box__title'>
                      Charity Donation
                    </h2>
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
                    {resultData.stopTimer && resultData.winningDraw && (
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

                      {/********** Map Secondary Tickets into SingleTicket Component *********/}
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

                      {/***************** Map ticketPrize Tickets into SingleTicket Component *****************/}
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
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  result: state.results.result,
  prize: state.prizes.prize,
  loader: state.loader.loading,
});

export default connect(mapStateToProps, {
  loadResultAndPrize,
  startLoader,
  endLoader,
})(Drawing);
